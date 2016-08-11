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
import {TreeGrid, TreeGridState} from "../../buhta-core/Components/TreeGrid/TreeGrid";
import {TreeGridColumns} from "../../buhta-core/Components/TreeGrid/TreeGridColumns";
import {TreeGridColumn} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";
import {SchemaComponent} from "../../buhta-schema/SchemaComponent/SchemaComponent";
import {BaseControl} from "../../buhta-ui/BaseControl";
import {isDeepEqual} from "../../buhta-core/isDeepEqual";
import {getUserId} from "../../buhta-core/Auth";
import {OpenWindowParams} from "../../buhta-core/Components/Desktop/Desktop";
import {appInstance} from "../../buhta-core/Components/App/App";
import {SchemaForm} from "../../buhta-schema/SchemaForm/SchemaForm";
import {getObjectConstructorName} from "../../buhta-core/getObjectConstructorName";
import {ObjectDesigner} from "../ObjectDesigner/ObjectDesigner";
import {SqlDb} from "../../buhta-sql/SqlDb";
import {Schema} from "../../buhta-schema/Schema";


export interface SchemaDesignerProps extends ComponentProps<any> {
    schema: Schema;
}

export class SchemaDesigner extends Component<SchemaDesignerProps, any> {
    constructor(props: SchemaDesignerProps, context: any) {
        super(props, context);
        this.props = props;
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

    private treeGridState: TreeGridState<BaseControl>;

    handleTreeGridChangeFocusedRow = (state: TreeGridState<BaseControl>) => {
        this.treeGridState = state;
        //console.log("handleTreeGridChangeFocusedRow:" + state.focusedRowIndex);
        //this.openDeleteForm(this.state.rows[this.state.focusedRowIndex]);

    }


    render() {
        //let dataSourceParam: TreeGridComponentChildrenDataSourceParams = {};
        let dataSource:any = {};//new TreeGridComponentChildrenDataSource(this.clonedDesignedObject.children, dataSourceParam);

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
                                        <TreeGrid
                                            className="schema-tree-grid"
                                            dataSource={ dataSource }
                                            treeMode="parentKey"
                                            autoExpandNodesToLevel={100}
                                            editable={true}
                                            dragDropNodes={true}
                                            onChangeFocusedRow={ this.handleTreeGridChangeFocusedRow }
                                        >
                                            <TreeGridColumns>
                                                <TreeGridColumn caption="Объект" propertyName="$$controlName"
                                                                showHierarchyTree={true}
                                                                width={300}>
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
                                <Button key="insert" className="is-outlined is-success"
                                        onClick={this.handleInsertButtonClick}>
                                    Добавить
                                </Button>
                                <Button key="update" className="is-outlined is-info"
                                        onClick={this.handleUpdateButtonClick}>
                                    Изменить
                                </Button>
                                <Button key="delete" className="is-outlined is-danger"
                                        onClick={this.handleDeleteButtonClick}>
                                    Удалить
                                </Button>
                                <Button onClick={ this.handleTestButtonClick }>
                                    Тест
                                </Button>
                            </Flex>
                            <Fixed>
                                <Button onClick={ this.handleCloseButtonClick }>
                                    Закрыть
                                </Button>
                            </Fixed>
                        </Layout>
                    </Fixed>
                </Layout>
            </div>
        );
    }

}