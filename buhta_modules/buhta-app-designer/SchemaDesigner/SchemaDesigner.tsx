import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component, ComponentState} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";
import {BasePropertyEditorProps, PropertyEditorInfo, BasePropertyEditor} from "../PropertyEditors/BasePropertyEditor";

import {Form} from "../../buhta-core/Components/Form/Form";
import {AutoForm} from "../../buhta-core/Components/AutoForm/AutoForm";
import {Snapshot} from "../../buhta-core/Snapshot";
import {deepClone} from "../../buhta-core/deepClone";
import {Layout} from "../../buhta-core/Components/LayoutPane/Layout";
import {Flex} from "../../buhta-core/Components/LayoutPane/Flex";
import {Tabs, Tab} from "../../buhta-core/Components/Tabs/Tabs";
import {Fixed} from "../../buhta-core/Components/LayoutPane/Fixed";
import {Button} from "../../buhta-core/Components/Button/Button";
// import {TreeGrid, TreeGridState} from "../../buhta-core/Components/TreeGrid/TreeGrid";
// import {TreeGridColumns} from "../../buhta-core/Components/TreeGrid/TreeGridColumns";
// import {TreeGridColumn} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";
import {SchemaComponent} from "../../buhta-schema/SchemaComponent/SchemaComponent";
import {BaseControl} from "../../buhta-ui/BaseControl";
import {isDeepEqual} from "../../buhta-core/isDeepEqual";
import {getUserId} from "../../buhta-core/Auth";
import {OpenWindowParams} from "../../buhta-core/Components/Desktop/Desktop";
import {appInstance} from "../../buhta-core/Components/App/App";
import {SchemaForm} from "../../buhta-schema/SchemaForm/SchemaForm";
import {getObjectConstructorName} from "../../buhta-core/getObjectConstructorName";
import {ObjectDesigner, ObjectDesignerProps} from "../ObjectDesigner/ObjectDesigner";
import {SqlDb, DataRow, DataTable} from "../../buhta-sql/SqlDb";
import {Schema} from "../../buhta-schema/Schema";
import Grid from "../../buhta-core/Components/Grid/Grid";
import {GridColumnDef} from "../../buhta-core/Components/Grid/GridColumn";
import {
    GridTreeDataSourceFromSqlTable,
    GridTreeDataSourceFromSqlTableParams
} from "../../buhta-core/Components/Grid/GridTreeDataSourceFromSqlTable";
import {SelectStmt} from "../../buhta-sql/SelectStmt";
import {GridState} from "../../buhta-core/Components/Grid/Grid";
import {SchemaObject} from "../../buhta-schema/SchemaObject";
import {LookupDialogParams, showLookupDialog} from "../../buhta-core/Dialogs/showLookupDialog";
import {stringCompare} from "../../buhta-core/stringCompare";
import {
    registeredSchemaObjectTypesAsArray, SchemaObjectTypeInfo,
    registeredSchemaObjectTypes
} from "../../buhta-schema/SchemaObjectTypeInfo";
import {GridFlatDataSourceFromArray} from "../../buhta-core/Components/Grid/GridFlatDataSourceFromArray";
import {UUID} from "UUID";
import {getNewGuid} from "../../buhta-sql/SqlCore";
import {GridColumns} from "../../buhta-core/Components/Grid/GridColumns";
import {SchemaObjectDesignerProps} from "../SchemaObjectDesigner/SchemaObjectDesigner";
import {CLOSE_BUTTON_TEXT, SCHEMA_FOLDER_ICON} from "../../buhta-core/Constants";


export interface SchemaDesignerProps extends ComponentProps<SchemaDesignerState> {
    schema: Schema;
}

export class SchemaDesignerState extends ComponentState<SchemaDesignerProps> {

    //dataSourceParam: TreeGridComponentChildrenDataSourceParams = {};
    dataSource: GridTreeDataSourceFromSqlTable;

    private getDesignedObjectOfRow = (rowData: DataRow): Promise<DesignedObject> => {
        return this.component.props.schema.getObject(rowData["id"]);
    };

    private getNewDesignedObject = (focusedData: DataRow): Promise<DesignedObject> => {

        let columns: GridColumns = [];
        columns.push({caption: "Тип объекта", propertyName: "name", iconPropertyName: "icon"});
        columns.push({caption: "Описание", propertyName: "description"});

        let arr = registeredSchemaObjectTypesAsArray.sort((a, b) => {
            return stringCompare(a.name, b.name);
        });

        let dataSource = new GridFlatDataSourceFromArray<SchemaObjectTypeInfo>({arrayObj: arr, gridColumns: columns});

        let params: LookupDialogParams<SchemaObjectTypeInfo> = {
            title: "Выберите тип нового объекта",
            lookupMode: "single",
            dataSource: dataSource
        };

        return showLookupDialog(this.component, params)
            .then((selected: SchemaObjectTypeInfo[]) => {
                console.log(this.component.props.schema);
                let newObject = new (Function.prototype.bind.apply(selected[0].type, [this, this.component.props.schema]));
                // console.log(selected[0].type);
                console.log(newObject);
                newObject.id = getNewGuid();
                newObject.name = "новый объект";
                if (focusedData !== undefined)
                    newObject.parentObjectID = focusedData["id"];
                newObject["name"] = "новый объект " + selected[0].name;
                newObject["typeId"] = selected[0].id;
                return newObject;
            });
    };

    private openEditForm = (grid: GridState<any>, rowData: DataRow) => {

        this.getDesignedObjectOfRow(rowData)
            .then((designedObject: SchemaObject) => {

                let openParam: OpenWindowParams = {
                    title: "редактирование",
                    autoPosition: "parent-center",
                    parentWindowId: grid.component.getParentWindowId(),
                    theme: "blue"
                };

                let props: SchemaObjectDesignerProps = {
                    designedObject: designedObject,
                    onSaveChanges: () => {
                        this.dataSource.refreshFromSql()
                            .then(() => {
                                grid.refresh();
                                grid.setFocusedRow(designedObject as any);
                            });
                    }
                };

                grid.component.getParentDesktop().openWindow(designedObject.$$getDesigner(props), openParam);

            });


    }

    private openInsertForm = (grid: GridState<any>, focusedRowData: DataRow) => {

        this.getNewDesignedObject(focusedRowData)
            .then((designedObject: SchemaObject) => {

                let openParam: OpenWindowParams = {
                    title: "добавление",
                    autoPosition: "parent-center",
                    parentWindowId: grid.component.getParentWindowId(),
                    theme: "green"
                };

                let props: SchemaObjectDesignerProps = {
                    designedObject: designedObject,
                    onSaveChanges: () => {
                        this.dataSource.refreshFromSql()
                            .then(() => {
                                grid.refresh();
                                grid.setFocusedRow(designedObject as any);
                            });
                    }
                };

                grid.component.getParentDesktop().openWindow(designedObject.$$getDesigner(props), openParam);

            });


    }


    createDataSource() {
        let select = new SelectStmt();
        select.table("SchemaObject");
        select.column("id", "parentObjectId", "name", "typeId", "position", "description");


        let dsParams: GridTreeDataSourceFromSqlTableParams = {
            db: this.component.props.schema.db,
            select: select,
            tableName: "SchemaObject",
            keyFieldName: "id",
            parentKeyFieldName: "parentObjectId",
            positionFieldName: "position",
            autoExpandNodesToLevel: 3,
            getDesignedObjectOfRow: this.getDesignedObjectOfRow,
            getNewDesignedObject: this.getNewDesignedObject,
            openEditForm: this.openEditForm,
            openInsertForm: this.openInsertForm,
            onGetDataValue: (rowData: DataRow, propertyName: string) => {
                if (propertyName === "icon")
                    return registeredSchemaObjectTypes[rowData["typeId"]].icon;
                else
                    return rowData[propertyName];
            }
        };

        this.dataSource = new GridTreeDataSourceFromSqlTable(dsParams);
    }

}

export class SchemaDesigner extends Component<SchemaDesignerProps, SchemaDesignerState> {
    constructor(props: SchemaDesignerProps, context: any) {
        super(props, context);
        this.props = props;
        this.state = new SchemaDesignerState(this);
        this.state.createDataSource();
    }

    protected willMount() {
        super.willMount();

    }

    protected willUnmount() {
        super.willUnmount();
    }


    protected didMount() {
        super.didMount();
    }

    handleTestButtonClick = () => {
        //     //this.openEditForm(this.state.rows[this.state.focusedRowIndex]);
        //     let designedObject = deepClone(this.clonedDesignedObject);
        //
        //     let openParam: OpenWindowParams = {
        //         title: `тест '${ getObjectConstructorName(designedObject)}'`,
        //         top: 350,
        //         left: 350
        //     };
        //
        //     this.getParentDesktop().openSchemaComponent(designedObject as SchemaForm, openParam);
    }

    handleUpdateButtonClick = () => {
        // let designedObject = this.treeGridState.getFocusedRow();
        //
        // let win =
        //     <ObjectDesigner
        //         designedObject={designedObject}
        //         onSaveChanges={ () => { this.treeGridState.refreshFocusedRow(); }}
        //     >
        //
        //     </ObjectDesigner>;
        //
        // let openParam: OpenWindowParams = {
        //     title: "редактирование",
        //     autoPosition: "parent-center",
        //     parentWindowId: this.getParentWindowId()
        // };
        //
        // this.getParentDesktop().openWindow(win, openParam);

    }

    handleInsertButtonClick = () => {
        //this.openInsertForm();
    }

    handleDeleteButtonClick = () => {
        //this.openDeleteForm(this.state.rows[this.state.focusedRowIndex]);

    }

    handleCloseButtonClick = () => {
        //this.openDeleteForm(this.state.rows[this.state.focusedRowIndex]);

    }

    private treeGridState: GridState<BaseControl>;

    handleTreeGridChangeFocusedRow = (state: GridState<BaseControl>) => {
        this.treeGridState = state;
        //console.log("handleTreeGridChangeFocusedRow:" + state.focusedRowIndex);
        //this.openDeleteForm(this.state.rows[this.state.focusedRowIndex]);

    }

    render() {

        this.addClassName("schema-designer");
//        this.addProps({onChange: this.props.onChange});
        this.addStyles({height: "100%"});

        return (
            <div {...this.getRenderProps()}>
                <Layout type="column" sizeTo="parent">
                    <Flex>
                        <Tabs
                            sizeTo="parent"
                            onWillMount={ (state) => { console.log("onWillMount-auto-form-tabs"); }}
                            onChangeActiveTab={ (state, tab) => { console.log("setActiveTab");console.log(tab);}}
                        >
                            <Tab key="1" title="Основная">
                                <Layout type="column" sizeTo="parent">
                                    <Flex>
                                        <Grid
                                            className="schema-tree-grid"
                                            dataSource={ this.state.dataSource }
                                            editable={true}
                                            enableDragDrop={true}
                                        >

                                            <GridColumnDef caption="Объект"
                                                           propertyName="name"
                                                           iconPropertyName="icon"
                                                           showHierarchyTree={true}
                                                           width={300}>
                                            </GridColumnDef>
                                            <GridColumnDef caption="Свойства" propertyName="typeName"
                                                           width={100}>
                                            </GridColumnDef>
                                            <GridColumnDef caption="События" propertyName="position"
                                                           width={100}>
                                            </GridColumnDef>

                                        </Grid>
                                    </Flex>
                                    <Fixed>

                                    </Fixed>
                                </Layout>

                            </Tab>
                            <Tab key="2" title="Кто-когда">

                            </Tab>
                        </Tabs>
                    </Flex>
                    <Fixed>
                        <Layout className="auto-form-footer" type="row" sizeTo="content">
                            <Flex>
                                <Button onClick={ this.handleTestButtonClick }>
                                    Тест
                                </Button>
                            </Flex>
                            <Fixed>
                                <Button
                                    onClick={(sender:Button, e:React.MouseEvent) => {
                                              sender.closeParentWindow();
                                              e.stopPropagation();
                                            }}
                                    icon="buhta-set-1/application-export"
                                >
                                    {CLOSE_BUTTON_TEXT}
                                </Button>
                            </Fixed>
                        </Layout>
                    </Fixed>
                </Layout>
            </div>
        );
    }

}

