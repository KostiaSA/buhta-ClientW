import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
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
import {SchemaComponent} from "../../buhta-schema/SchemaComponent/SchemaComponent";
import {BaseControl} from "../../buhta-ui/BaseControl";
import {isDeepEqual} from "../../buhta-core/isDeepEqual";
import {getUserId} from "../../buhta-core/Auth";
import {OpenWindowParams} from "../../buhta-core/Components/Desktop/Desktop";
import {appInstance} from "../../buhta-core/Components/App/App";
import {SchemaForm} from "../../buhta-schema/SchemaForm/SchemaForm";
import {getObjectConstructorName} from "../../buhta-core/getObjectConstructorName";
import {ObjectDesigner} from "../ObjectDesigner/ObjectDesigner";
import {
    GridTreeDataSourceFromComponentParams,
    GridTreeDataSourceFromComponent
} from "../../buhta-core/Components/Grid/GridTreeDataSourceFromComponent";
import Grid from "../../buhta-core/Components/Grid/Grid";
import {GridColumnDef} from "../../buhta-core/Components/Grid/GridColumn";
import {GridState} from "../../buhta-core/Components/Grid/Grid";
import {GridColumns} from "../../buhta-core/Components/Grid/GridColumns";
import {registeredSchemaObjectTypesAsArray, SchemaObjectTypeInfo} from "../../buhta-schema/SchemaObjectTypeInfo";
import {stringCompare} from "../../buhta-core/stringCompare";
import {GridFlatDataSourceFromArray} from "../../buhta-core/Components/Grid/GridFlatDataSourceFromArray";
import {LookupDialogParams, showLookupDialog} from "../../buhta-core/Dialogs/showLookupDialog";
import {registeredControlTypesAsArray, ControlTypeInfo} from "../../buhta-ui/ControlTypeInfo";
import {
    TEST_BUTTON_TEXT, TEST_BUTTON_ICON, SAVE_BUTTON_ICON, CANCEL_BUTTON_ICON,
    CLOSE_BUTTON_ICON, SAVE_BUTTON_TEXT, CANCEL_BUTTON_TEXT, CLOSE_BUTTON_TEXT
} from "../../buhta-core/Constants";


export interface SchemaComponentDesignerProps extends ComponentProps<any> {
    designedObject: DesignedObject;
    onChange?: () => void;
    onSaveChanges?: () => void;
    onCancelChanges?: () => void;
}

export class SchemaComponentDesigner extends Component<SchemaComponentDesignerProps, any> {
    constructor(props: SchemaComponentDesignerProps, context: any) {
        super(props, context);
        this.props = props;
    }

    needToSave: boolean;
    snapshot: Snapshot = new Snapshot();
    clonedDesignedObject: SchemaComponent;

    protected willMount() {
        super.willMount();
        this.needToSave = false;

        this.clonedDesignedObject = deepClone<SchemaComponent>(this.props.designedObject);

    }

    private compareInterval: number;

    protected startCheckDesignedObjectIsChanged() {
        this.compareInterval = setInterval(() => {
            console.log("deepCompare");
            if (!isDeepEqual(this.clonedDesignedObject, this.props.designedObject)) {
                clearInterval(this.compareInterval);
                this.needToSave = true;
                this.forceUpdate();

            }
        }, 200);
    }

    protected willUnmount() {
        super.willUnmount();
        clearInterval(this.compareInterval);
    }


    protected didMount() {
        super.didMount();
        this.startCheckDesignedObjectIsChanged();
    }

    handleSaveButtonClick = (sender: Button, e: React.MouseEvent): void => {
        if (this.props.onSaveChanges)
            this.props.onSaveChanges();

        if (this.clonedDesignedObject.createDate === null) {
            this.clonedDesignedObject.createDate = new Date();
        }
        if (this.clonedDesignedObject.createUserID === null) {
            this.clonedDesignedObject.createUserID = getUserId();
        }

        this.clonedDesignedObject.changeDate = new Date();
        this.clonedDesignedObject.changeUserID = getUserId();

        this.clonedDesignedObject.save()
            .then(() => {
                console.log("SchemaComponent " + this.clonedDesignedObject.name + " saved");
                this.getParentWindow()!.close();
            })
            .catch((error) => {
                this.showErrorWindow(error);
            });

        e.stopPropagation();

    }

    handleCancelButtonClick = (sender: Button, e: React.MouseEvent): void => {
        if (this.props.onCancelChanges)
            this.props.onCancelChanges();
        this.getParentWindow()!.close();
        e.stopPropagation();
    }


    handleTestButtonClick = () => {
        let designedObject = deepClone(this.clonedDesignedObject);

        let openParam: OpenWindowParams = {
            title: `тест '${ getObjectConstructorName(designedObject)}'`,
            top: 350,
            left: 350
        };

        this.getParentDesktop().openSchemaComponent(designedObject as SchemaForm, openParam);
    }

    // handleUpdateButtonClick = () => {
    //     let designedObject = this.gridState.getFocusedRowData();
    //
    //     if (designedObject) {
    //         let win =
    //             <ObjectDesigner
    //                 designedObject={designedObject}
    //                 onSaveChanges={ () => { this.gridState.refresh(); }}
    //             >
    //
    //             </ObjectDesigner>;
    //
    //         let openParam: OpenWindowParams = {
    //             title: "редактирование",
    //             autoPosition: "parent-center",
    //             parentWindowId: this.getParentWindowId()
    //         };
    //
    //         this.getParentDesktop().openWindow(win, openParam);
    //     }
    // }
    //
    // handleInsertButtonClick = () => {
    //     //this.openInsertForm();
    // }
    //
    // handleDeleteButtonClick = () => {
    //     //this.openDeleteForm(this.state.rows[this.state.focusedRowIndex]);
    //
    // }

    // renderEditableButtons(): JSX.Element[] {
    //     let buttons: JSX.Element[] = [];
    //
    //     buttons.push(
    //         <Button key="insert" className="is-outlined is-success" onClick={this.handleInsertButtonClick}>
    //             Добавить
    //         </Button>
    //     );
    //
    //     buttons.push(
    //         <Button key="update" className="is-outlined is-info" onClick={this.handleUpdateButtonClick}>
    //             Изменить
    //         </Button>
    //     );
    //
    //     buttons.push(
    //         <Button key="delete" className="is-outlined is-danger" onClick={this.handleDeleteButtonClick}>
    //             Удалить
    //         </Button>
    //     );
    //
    //     return buttons;
    // }

    private gridState: GridState<BaseControl,BaseControl>;

    private getNewDesignedObject = (focusedData: BaseControl): Promise<BaseControl> => {

        let columns: GridColumns = [];
        columns.push({caption: "Тип объекта", propertyName: "name"});
        columns.push({caption: "Описание", propertyName: "description"});

        let arr = registeredControlTypesAsArray.sort((a, b) => {
            return stringCompare(a.name, b.name);
        });

        let dataSource = new GridFlatDataSourceFromArray<ControlTypeInfo,DesignedObject>({
            arrayObj: arr,
            gridColumns: columns
        });

        let params: LookupDialogParams<ControlTypeInfo> = {
            title: "Выберите тип нового объекта",
            lookupMode: "single",
            dataSource: dataSource
        };

        return showLookupDialog(this, params)
            .then((selected: ControlTypeInfo[]) => {
                let newObject = new (Function.prototype.bind.apply(selected[0].type, [this])) as BaseControl;
                return newObject;
            });
    };


    render() {
        let dataSourceParam: GridTreeDataSourceFromComponentParams = {
            nodes: this.clonedDesignedObject.children,
            getNewDesignedObject: this.getNewDesignedObject
        };
        let dataSource = new GridTreeDataSourceFromComponent(dataSourceParam);

        this.addClassName("component-designer");
        this.addProps({onChange: this.props.onChange});
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
                                            className="children-tree-grid"
                                            dataSource={dataSource}
                                            editable={true}
                                            enableDragDrop={true}
                                            onGetState={(state:GridState<BaseControl,BaseControl>) => this.gridState = state}
                                        >
                                            <GridColumnDef caption="Control" propertyName="$$controlName"
                                                           showHierarchyTree={true}
                                                           width={200}>
                                            </GridColumnDef>
                                            <GridColumnDef caption="Свойства" propertyName="$$controlMainProps"
                                                           width={300}>
                                            </GridColumnDef>
                                            <GridColumnDef caption="События" propertyName="$$controlEvents"
                                                           width={300}>
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
                        <Layout className="component-designer-footer" type="row" sizeTo="content">
                            <Flex>
                                <Button
                                    onClick={ this.handleTestButtonClick }
                                    icon={TEST_BUTTON_ICON}
                                >
                                    {TEST_BUTTON_TEXT}
                                </Button>
                            </Flex>
                            <Fixed>
                                <Button
                                    visible={ this.needToSave }
                                    icon={SAVE_BUTTON_ICON}
                                    onClick={ this.handleSaveButtonClick }
                                >
                                    { SAVE_BUTTON_TEXT}
                                </Button>
                                <Button
                                    onClick={ this.handleCancelButtonClick }
                                    icon={this.needToSave ? CANCEL_BUTTON_ICON : CLOSE_BUTTON_ICON}
                                >
                                    {this.needToSave ? CANCEL_BUTTON_TEXT : CLOSE_BUTTON_TEXT }
                                </Button>

                            </Fixed>
                        </Layout>
                    </Fixed>
                </Layout>
            </div>
        );
    }

}