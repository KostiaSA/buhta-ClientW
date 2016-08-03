import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";
import {BasePropertyEditorProps, PropertyEditorInfo, BasePropertyEditor} from "../PropertyEditors/BasePropertyEditor";
import {getPropertyEditors} from "../PropertyEditors/getPropertyEditors";
import {Form} from "../../buhta-core/Components/Form/Form";
import {AutoForm} from "../../buhta-core/Components/AutoForm/AutoForm";
import {Snapshot} from "../../buhta-core/Snapshot";
import {Observable} from "../../buhta-core/Observable";
import {DeepClone} from "../../buhta-core/DeepClone";
import {Layout} from "../../buhta-core/Components/LayoutPane/Layout";
import {Flex} from "../../buhta-core/Components/LayoutPane/Flex";
import {Tabs, Tab} from "../../buhta-core/Components/Tabs/Tabs";
import {Fixed} from "../../buhta-core/Components/LayoutPane/Fixed";
import {Button} from "../../buhta-core/Components/Button/Button";
import {TreeGrid} from "../../buhta-core/Components/TreeGrid/TreeGrid";
import {TreeGridColumns} from "../../buhta-core/Components/TreeGrid/TreeGridColumns";
import {TreeGridColumn} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";
import {SchemaComponent} from "../../buhta-schema/SchemaComponent/SchemaComponent";
import {
    TreeGridComponentChildrenDataSource,
    TreeGridComponentChildrenDataSourceParams
} from "./TreeGridComponentChildrenDataSource";
import {BaseControl} from "../../buhta-ui/BaseControl";


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
    observableDesignedObject: SchemaComponent;

    protected willMount() {
        super.willMount();
        this.needToSave = false;

        this.clonedDesignedObject = DeepClone<SchemaComponent>(this.props.designedObject);

        // console.log("cloned");
        // console.log(this.props.designedObject);
        // console.log(this.clonedDesignedObject);

        this.observableDesignedObject = Observable<SchemaComponent>(this.clonedDesignedObject, () => {
            this.needToSave = true;
            this.forceUpdate();
        });
    }

    protected didMount() {
        super.didMount();
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
        this.getParentWindow()!.close();
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

    render() {
        let dataSourceParam: TreeGridComponentChildrenDataSourceParams<BaseControl | string> = {};
        let dataSource = new TreeGridComponentChildrenDataSource<BaseControl | string>(this.observableDesignedObject.children, dataSourceParam);

        this.addClassName("object-designer");
        this.addProps({onChange: this.props.onChange});

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
                                <TreeGrid
                                    dataSource={ dataSource }
                                    treeMode="childrenList"
                                    hierarchyFieldName="Номер"
                                    hierarchyDelimiters="."
                                    autoExpandNodesToLevel={0}
                                    editable={true}
                                    denyDelete={true}
                                >
                                    <TreeGridColumns>
                                        <TreeGridColumn caption="Колонка2" propertyName="Номер"
                                                        showHierarchyTree={false}
                                                        width={100}>
                                        </TreeGridColumn>
                                        <TreeGridColumn caption="Колонка3" propertyName="Название"
                                                        showHierarchyTree={true}
                                                        width={200}>
                                        </TreeGridColumn>
                                        <TreeGridColumn caption="Колонка1" propertyName="Ключ" width={80}>
                                        </TreeGridColumn>
                                    </TreeGridColumns>
                                </TreeGrid>;
                            </Tab>
                            <Tab key="2" title="Кто-когда">

                            </Tab>
                        </Tabs>
                    </Flex>
                    <Fixed>
                        <Layout className="auto-form-footer" type="row" sizeTo="content">
                            <Flex>

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