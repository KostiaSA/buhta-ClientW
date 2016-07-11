import * as React from "react";
import * as Immutable from "immutable";
import * as _ from "lodash";
import {ComponentProps, Component, ComponentState} from "../../buhta-core/Components/Component";
import {Layout} from "../../buhta-core/Components/LayoutPane/Layout";
import {Fixed} from "../../buhta-core/Components/LayoutPane/Fixed";
import {Flex} from "../../buhta-core/Components/LayoutPane/Flex";

import {TestBuhtaObject1} from "../../Test1/testBuhtaObject1";
import {ObjectDesigner} from "../ObjectDesigner/ObjectDesigner";
import {Desktop, OpenWindowParams} from "../../buhta-core/Components/Desktop/Desktop";
import {Draggable} from "../../buhta-core/Components/Draggable/Draggable";
import {Movable, MoveEvent, MoveStartEvent} from "../../buhta-core/Components/Movable/Movable";
import {App, appInstance} from "../../buhta-core/Components/App";
import {Window} from "../../buhta-core/Components/Window/Window";
import {Tabs, Tab} from "../../buhta-core/Components/Tabs/Tabs";
import {Form} from "../../buhta-core/Components/Form/Form";
import {Input, InputType} from "../../buhta-core/Components/Input/Input";
import {InputDivider} from "../../buhta-core/Components/InputDivider/InputDivider";
import {testBuhtaObject2} from "../../Test1/testBuhtaObject2";
import {getPropertyEditors} from "../PropertyEditors/getPropertyEditor";
import {AutoForm} from "../../buhta-core/Components/AutoForm/AutoForm";
import {TreeGrid} from "../../buhta-core/Components/TreeGrid/TreeGrid";
import {TreeGridColumn} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";
import {TreeGridColumns} from "../../buhta-core/Components/TreeGrid/TreeGridColumns";
import {executeSQL} from "../../buhta-core/SQL";
import {Button} from "../../buhta-core/Components/Button";
import {SqlTable} from "../../buhta-sql/SqlTable";
import {Snapshot} from "../../buhta-core/Snapshot";


export interface AppDesignerProps extends ComponentProps<AppDesignerState> {
    //text?: string;
}

class AppDesignerState extends ComponentState<AppDesignerProps> {
    //text?: string;
}

export class AppDesigner extends Component<AppDesignerProps, AppDesignerState> {
    constructor(props: AppDesignerProps, context: any) {
        super(props, context);
        this.props = props;
        this.state = new AppDesignerState(this);
    }


    // initTest() {
    //     this.testObject.name = "Тестовый объект1";
    // }

    moveStart(e: MoveStartEvent) {
        e.bindX(this, "sideWidth", () => {
            this.forceUpdate();
        });
    }


    sideWidth: number = 300;

    testOpenWindow() {

        // let obj = {
        //     Фамилия: "Савченков",
        //     Имя: "Константин",
        //     Отчество: "Владимирович"
        // };
        //
        // let win =
        //     <Tabs>
        //         <Tab title="закладка 1">
        //             <Form>
        //                 <Input caption="Фамилия" type={InputType.Text} bindObject={obj} bindPropName="Фамилия"/>
        //                 <Input caption="Имя" type={InputType.Text} bindObject={obj} bindPropName="Имя"/>
        //                 <InputDivider title="а теперь отчество"></InputDivider>
        //                 <Input type={InputType.Text} bindObject={obj} bindPropName="Отчество"/>
        //             </Form>
        //         </Tab>
        //         <Tab title="закладка 2"> 22222 </Tab>
        //     </Tabs>;
        // appInstance.desktop.openWindow(win);
    };


    testOpenObjectDesigner() {
        let testObject: TestBuhtaObject1 = new TestBuhtaObject1();
        testObject.firstName = "Игорь0";
        testObject.lastName = "Сидоренко0";
        testObject.surName = "Олегович0";

//        let win = <ObjectDesigner onChange={()=>{ win2Instance.designedObject=null; win2Instance.forceUpdate(); console.log("test323-change")}} designedObject={testObject} key="1"> </ObjectDesigner>;
        let win = <ObjectDesigner
            onChange={() => { testObject = _.cloneDeep(testObject);  win2Instance.forceUpdate(); console.log("test999-change"); }}
            designedObject={testObject} key="1"> </ObjectDesigner>;

        let testObject2: testBuhtaObject2 = new testBuhtaObject2();
        testObject2.firstName = "Игорь1";
        testObject2.lastName = "Сидоренко2";
        testObject2.surName = "Олегович1";
        testObject2.sex = "мужской";

        let win2Instance: any;

        let win2 = <ObjectDesigner ref={ (e:any) => { win2Instance = e; } } designedObject={testObject2}
                                   key="2">
        </ObjectDesigner>;

        //getPropertyEditors(testObject);
        //getPropertyEditors(testObject2);

        let winwin = <div>{win}{win2}</div>;

        let openParam: OpenWindowParams = {
            title: "окно 1",
            top: 50,
            left: 50
        };

        appInstance.desktop.openWindow(winwin, openParam);

    };


    testImmutable() {
        // //let fake=new Table([]);
        //
        // const xxx = Immutable.Map<string, number>();
        //
        // let obj = {
        //     name: "Оганизация",
        //     columns: {"Номер": {colName: "Номер", type: "string"}, "Название": {colName: "Название", type: "string"}}
        // };
        //
        // let objI = Immutable.fromJS(obj);
        //
        // //let m = Immutable.Map<string,number| Immutable.Map<number,string>>();
        // //let x = m.set("13yyt333332", 12);
        // //let y = m.set("xxx", Immutable.Map<number,string>());
        //
        // //let y=m.update("xxx",Immutable.Map<number,string>());
        //
        // console.log(objI.toString());
        // let x = objI.getIn(['columns', 'Номер', 'colName']);
        // console.log(x);
    };


    str: string = "привет";

    testAutoForm() {
        let win2 =
            <AutoForm sizeTo="content">
                <Input type={InputType.Text} bindObject={this} bindPropName="str"/>
                <Input inputTab="параметры1" inputCaption="eee1" type={InputType.Text} bindObject={this}
                       bindPropName="str"/>
                <Input inputTab="параметры1" inputCaption="eee2" type={InputType.Text} bindObject={this}
                       bindPropName="str"/>
                <Input inputTab="параметры1" inputCaption="eee3" type={InputType.Text} bindObject={this}
                       bindPropName="str"/>
                <Input inputTab="параметры2" inputCaption="eee4" type={InputType.Text} bindObject={this}
                       bindPropName="str"/>
            </AutoForm>;
//        <Input inputTab="параметры" inputCaption="eee" type={InputType.Text} bindObject={this} bindPropName="str"/>

        let openParam: OpenWindowParams = {
            title: "auto form",
            top: 10,
            left: 10
        };

        appInstance.desktop.openWindow(win2, openParam);

    }

    testGrid() {
        executeSQL("select TOP 5000 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
            .done((table) => {
                let dataSource = table.rows.map((r) => {
                    return {Ключ: r["Ключ"], Номер: r["Номер"], Название: r["Название"]};
                });

                console.log("select TOP 5000 Ключ,Номер,Название from [Вид ТМЦ] order by Номер =>" + table.rows[0].getValue(1));

                let win2 =
                    <TreeGrid
                        dataSource={ dataSource }
                        treeMode={true}
                        hierarchyFieldName="Номер"
                        hierarchyDelimiters="."
                        autoExpandNodesToLevel={0}
                    >
                        <TreeGridColumns>
                            <TreeGridColumn caption="Колонка2" fieldName="Номер" showHierarchyTree={false} width={100}>
                            </TreeGridColumn>
                            <TreeGridColumn caption="Колонка3" fieldName="Название" showHierarchyTree={true}
                                            width={200}>
                            </TreeGridColumn>
                            <TreeGridColumn caption="Колонка1" fieldName="Ключ" width={80}>
                            </TreeGridColumn>
                        </TreeGridColumns>
                    </TreeGrid>;

                let openParam: OpenWindowParams = {
                    title: "auto form",
                    top: 10,
                    left: 10,
                    height: 800
                };

                appInstance.desktop.openWindow(win2, openParam);


            })
            .fail((err) => {
                alert(err.message);
            });


    }

    testFlex() {
        let win2 =
            <Layout type="column" sizeTo="parent"
                    style={{ border:"2px dotted red", position:"absolute", top:0, left:0,right:0, bottom:0 }}>
                <Fixed style={{ border:"2px dotted blue" }}>
                    <Button>Один</Button>
                </Fixed>
                <Flex style={{ border:"2px dotted green" }}>

                    <Layout type="column" sizeTo="parent" style={{ border:"1px solid red"}}>
                        <Fixed style={{ border:"1px solid blue" }}>
                            <Button>------Один</Button>
                        </Fixed>
                        <Flex style={{ border:"1px solid green" } }>
                            <div style={{ }}>
                                <Button>-------Два</Button>
                                <br/>
                                <Button>--------Два1</Button>

                            </div>
                            <table>
                                <tr>
                                    <td>1111</td>
                                    <td>2222</td>
                                </tr>
                                <tr>
                                    <td>1111</td>
                                    <td>2222</td>
                                </tr>
                                <tr>
                                    <td>1111</td>
                                    <td>2222</td>
                                </tr>
                                <tr>
                                    <td>1111</td>
                                    <td>2222</td>
                                </tr>
                            </table>

                        </Flex>
                        <Fixed style={{ border:"1px solid maroon" }}>
                            <Button>--------Три</Button>

                        </Fixed>

                    </Layout>

                </Flex>
                <Fixed style={{ border:"2px dotted maroon" }}>
                    <Button>Три</Button>

                </Fixed>

            </Layout>;

        let openParam: OpenWindowParams = {
            title: "test FLEX",
            top: 10,
            left: 10
        };

        appInstance.desktop.openWindow(win2, openParam);

    }

    testTableDesigner() {
        let table = new SqlTable();

        table.name = "Организация";
        table.sqlname = "dbo.Организация";
        table.addColumn((col) => {
            col.name = "Номер";
            col.dataType = "varchar(10)";
        });
        table.addColumn((col) => {
            col.name = "Название";
            col.dataType = "varchar(50)";
        });

        let win = <ObjectDesigner
            onChange={() => { console.log("table-change"); }}
            designedObject={table}>
        </ObjectDesigner>;

        let openParam: OpenWindowParams = {
            title: "Организация",
            top: 50,
            left: 50
        };

        appInstance.desktop.openWindow(win, openParam);

    };

    testSnapshot() {
        let table = new SqlTable();

        table.name = "Организация";
        table.sqlname = "dbo.Организация";
        table.addColumn((col) => {
            col.name = "Номер";
            col.dataType = "varchar(10)";
        });
        table.addColumn((col) => {
            col.name = "Название";
            col.dataType = "varchar(50)";
        });

        let s = new Snapshot();
        s.saveObject(table, "table1");

        console.log(table);
        table.name = "жопа";
        table.columns = null;
        console.log(table);

        s.restoreObject(table, "table1");
        console.log(table);

        this.testSnapshotPreformance();


    };

    testSnapshotPreformance() {
        let x: any = {a: []};

        for (let i = 0; i < 20000; i++) {
            let table = new SqlTable();

            table.name = "Организация";
            table.sqlname = "dbo.Организация";
            table.addColumn((col) => {
                col.name = "Номер";
                col.dataType = "varchar(10)";
            });
            table.addColumn((col) => {
                col.name = "Название";
                col.dataType = "varchar(50)";
            });
            x.a.push(table);
        }


        let s = new Snapshot();
        console.time("x");
        s.saveObject(x, "x");
        console.timeEnd("x");

    };


    render() {
        this.addClassName("app-designer");

        this.addProps({sizeTo: "parent"});

        return (
            <App {...this.getRenderProps()}>
                <Layout sizeTo="parent" type="column">
                    <Fixed className="header1">Fixed Header</Fixed>
                    <Flex>
                        <Layout type="row" sizeTo="parent">
                            <Fixed className="sidebar" style={{width:this.sideWidth}}>
                                Fixed Sidebar 123<br/>
                                <button onClick={() => { this.testOpenWindow(); }}> test open window</button>
                                <br/>
                                <button onClick={() => { this.testOpenObjectDesigner(); }}>open designer</button>
                                <br/>
                                <button onClick={() => { this.testImmutable(); }}>testImmutable</button>
                                <br/>
                                <button onClick={() => { this.testAutoForm(); }}>test autoform</button>
                                <br/>
                                <button onClick={() => { this.testGrid(); }}>test GRID</button>
                                <br/>
                                <button onClick={() => { this.testFlex(); }}>test FLEX</button>
                                <br/>
                                <button onClick={() => { this.testTableDesigner(); }}>test TABLE DESIGNER</button>
                                <br/>
                                <br/>
                                <button onClick={() => { this.testSnapshot(); }}>test SNAPSHOT</button>
                            </Fixed>
                            <Flex className="XXXcontent">
                                <Desktop>
                                    <Movable onMoveStart={this.moveStart.bind(this)}>MOV</Movable>

                                </Desktop>
                            </Flex>
                        </Layout>
                    </Flex>
                </Layout>
            </App>
        );
    }

}