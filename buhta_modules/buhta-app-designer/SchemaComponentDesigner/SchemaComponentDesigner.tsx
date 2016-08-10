import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";
import {BasePropertyEditorProps, PropertyEditorInfo, BasePropertyEditor} from "../PropertyEditors/BasePropertyEditor";
import {getPropertyEditors} from "../PropertyEditors/getPropertyEditors";
import {Form} from "../../buhta-core/Components/Form/Form";
import {AutoForm} from "../../buhta-core/Components/AutoForm/AutoForm";
import {Snapshot} from "../../buhta-core/Snapshot";
//import {Observable} from "../../buhta-core/Observable";
import {deepClone} from "../../buhta-core/deepClone";
import {Layout} from "../../buhta-core/Components/LayoutPane/Layout";
import {Flex} from "../../buhta-core/Components/LayoutPane/Flex";
import {Tabs, Tab} from "../../buhta-core/Components/Tabs/Tabs";
import {Fixed} from "../../buhta-core/Components/LayoutPane/Fixed";
import {Button} from "../../buhta-core/Components/Button/Button";
import {TreeGrid, TreeGridState} from "../../buhta-core/Components/TreeGrid/TreeGrid";
import {TreeGridColumns} from "../../buhta-core/Components/TreeGrid/TreeGridColumns";
import {TreeGridColumn} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";
import {SchemaComponent} from "../../buhta-schema/SchemaComponent/SchemaComponent";
import {
    TreeGridComponentChildrenDataSource,
    TreeGridComponentChildrenDataSourceParams
} from "./TreeGridComponentChildrenDataSource";
import {BaseControl} from "../../buhta-ui/BaseControl";
import {isDeepEqual} from "../../buhta-core/isDeepEqual";
import {getUserId} from "../../buhta-core/Auth";
import {OpenWindowParams} from "../../buhta-core/Components/Desktop/Desktop";
import {appInstance} from "../../buhta-core/Components/App/App";
import {SchemaForm} from "../../buhta-schema/SchemaForm/SchemaForm";
import {getObjectConstructorName} from "../../buhta-core/getObjectConstructorName";
import {ObjectDesigner} from "../ObjectDesigner/ObjectDesigner";


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

    //needToSave: boolean = false;
    clonedDesignedObject: SchemaComponent;
    //observableDesignedObject: SchemaComponent;

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
        //this.snapshot.saveObject(this.props.designedObject, "root");
    }

    // renderPropertyDesigners(): JSX.Element[] {
    //     let ret: JSX.Element[] = [];
    //
    //     getPropertyEditors(this.observableDesignedObject).forEach((propInfo: PropertyEditorInfo, index: number) => {
    //         //console.log(propInfo);
    //         let editorProps: BasePropertyEditorProps & PropertyEditorInfo = {
    //             designedObject: this.observableDesignedObject,
    //             //propertyEditorInfo: propInfo,
    //             index: index,
    //             key: index,
    //             onChange: this.props.onChange,
    //
    //             // это из propInfo: PropertyEditorInfo, заполяется далее через _.assign
    //             propertyName: "",
    //             objectType: DesignedObject,
    //             editorType: BasePropertyEditor,
    //             propertyType: null
    //         };
    //
    //         _.assign(editorProps, propInfo);
    //
    //         if (!editorProps.inputCaption)
    //             editorProps.inputCaption = editorProps.propertyName;
    //         //console.log(editorProps);
    //
    //         ret.push(React.createElement(propInfo.editorType, editorProps, {}));
    //     });
    //
    //     return ret;
    // }

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

    // handleSaveChanges = () => {
    //     console.log("save-changes");
    //     //console.log(this.props.designedObject);
    //     _.assign(this.props.designedObject, this.observableDesignedObject);
    //     if (this.props.onSaveChanges)
    //         this.props.onSaveChanges();
    //
    // }
    //
    // handleCancelChanges = () => {
    //     console.log("cancel-changes");
    //     //this.snapshot.restoreObject(this.props.designedObject, "root");
    //     if (this.props.onCancelChanges)
    //         this.props.onCancelChanges();
    //     //console.log(this.props.designedObject);
    // }

    // handleGetNeedToSave = (): boolean => {
    //     return this.needToSave;
    // }

    handleTestButtonClick = () => {
        //this.openEditForm(this.state.rows[this.state.focusedRowIndex]);
        let designedObject = deepClone(this.clonedDesignedObject);

        let openParam: OpenWindowParams = {
            title: `тест '${ getObjectConstructorName(designedObject)}'`,
            top: 350,
            left: 350
        };

        this.getParentDesktop().openSchemaComponent(designedObject as SchemaForm, openParam);
    }

    handleUpdateButtonClick = () => {
        let designedObject = this.treeGridState.getFocusedRow();

        let win =
            <ObjectDesigner
                designedObject={designedObject}
                onSaveChanges={ () => { this.treeGridState.refreshFocusedRow(); }}
            >

            </ObjectDesigner>;

        let openParam: OpenWindowParams = {
            title: "редактирование",
            autoPosition: "parent-center",
            parentWindowId: this.getParentWindowId()
        };

        this.getParentDesktop().openWindow(win, openParam);

    }

    handleInsertButtonClick = () => {
        //this.openInsertForm();
    }

    handleDeleteButtonClick = () => {
        //this.openDeleteForm(this.state.rows[this.state.focusedRowIndex]);

    }

    renderEditableButtons(): JSX.Element[] {
        let buttons: JSX.Element[] = [];

        buttons.push(
            <Button key="insert" className="is-outlined is-success" onClick={this.handleInsertButtonClick}>
                Добавить
            </Button>
        );

        buttons.push(
            <Button key="update" className="is-outlined is-info" onClick={this.handleUpdateButtonClick}>
                Изменить
            </Button>
        );

        buttons.push(
            <Button key="delete" className="is-outlined is-danger" onClick={this.handleDeleteButtonClick}>
                Удалить
            </Button>
        );

        return buttons;
    }

    private treeGridState: TreeGridState<BaseControl>;

    handleTreeGridChangeFocusedRow = (state: TreeGridState<BaseControl>) => {
        this.treeGridState = state;
        //console.log("handleTreeGridChangeFocusedRow:" + state.focusedRowIndex);
        //this.openDeleteForm(this.state.rows[this.state.focusedRowIndex]);

    }

    render() {
        let dataSourceParam: TreeGridComponentChildrenDataSourceParams = {};
        let dataSource = new TreeGridComponentChildrenDataSource(this.clonedDesignedObject.children, dataSourceParam);

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
                                        <TreeGrid
                                            className="children-tree-grid"
                                            dataSource={ dataSource }
                                            treeMode="childrenList"
                                            autoExpandNodesToLevel={100}
                                            editable={true}
                                            denyInsert={true}
                                            dragDropNodes={true}
                                            onChangeFocusedRow={ this.handleTreeGridChangeFocusedRow }
                                        >
                                            <TreeGridColumns>
                                                <TreeGridColumn caption="Control" propertyName="$$controlName"
                                                                showHierarchyTree={true}
                                                                width={200}>
                                                </TreeGridColumn>
                                                <TreeGridColumn caption="Свойства" propertyName="$$controlMainProps"
                                                                width={300}>
                                                </TreeGridColumn>
                                                <TreeGridColumn caption="События" propertyName="$$controlEvents"
                                                                width={300}>
                                                </TreeGridColumn>
                                            </TreeGridColumns>
                                        </TreeGrid>
                                    </Flex>
                                    <Fixed>
                                        {this.renderEditableButtons()}

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
                                <Button visible={ this.needToSave } className="is-success is-outlined"
                                        onClick={ this.handleSaveButtonClick }>
                                    Сохранить
                                </Button>
                                <Button onClick={ this.handleCancelButtonClick }>
                                    {this.needToSave ? "Отмена" : "Закрыть" }
                                </Button>
                            </Fixed>
                        </Layout>
                    </Fixed>
                </Layout>
            </div>
        );
    }

}