import * as React from "react";
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
import {App, appInstance} from "../../buhta-core/Components/App/App";
import {Window} from "../../buhta-core/Components/Window/Window";
import {Tabs, Tab} from "../../buhta-core/Components/Tabs/Tabs";
import {Form} from "../../buhta-core/Components/Form/Form";
import {Input, InputType} from "../../buhta-core/Components/Input/Input";
import {InputDivider} from "../../buhta-core/Components/InputDivider/InputDivider";
import {testBuhtaObject2} from "../../Test1/testBuhtaObject2";
import {getPropertyEditors} from "../PropertyEditors/getPropertyEditors";
import {AutoForm} from "../../buhta-core/Components/AutoForm/AutoForm";
import {TreeGrid} from "../../buhta-core/Components/TreeGrid/TreeGrid";
import {TreeGridColumn, GridColumn} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";
import {TreeGridColumns} from "../../buhta-core/Components/TreeGrid/TreeGridColumns";
import {Button} from "../../buhta-core/Components/Button/Button";
import {SqlTable} from "../../components/SqlTable";
import {Snapshot} from "../../buhta-core/Snapshot";
import {DesignedObject} from "../DesignedObject";
import {TreeGridArrayDataSource} from "../../buhta-core/Components/TreeGrid/TreeGridArrayDataSource";
import {StringPropertyEditor, StringEditor} from "../PropertyEditors/StringPropertyEditor";
import {throwError} from "../../buhta-core/Error";
import {DataTable, SqlDb} from "../../buhta-sql/SqlDb";
import {SchemaObject} from "../../buhta-schema/SchemaObject";
import {Schema, getSchema} from "../../buhta-schema/Schema";
import {SelectStmt} from "../../buhta-sql/SelectStmt";
import {UpdateStmt} from "../../buhta-sql/UpdateStmt";
import {CreateTableStmt} from "../../buhta-sql/CreateTableStmt";
import {SchemaForm} from "../../buhta-schema/SchemaForm/SchemaForm";
import {ButtonControl} from "../../buhta-ui/ButtonControl";
import {PanelControl} from "../../buhta-ui/PanelControl";


export interface AppDesignerProps extends ComponentProps<AppDesignerState> {
    //text?: string;
}

export class AppDesignerState extends ComponentState<AppDesignerProps> {
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
        // executeSQL("select TOP 5000 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
        //     .done((table) => {
        //         let dataSource = table.rows.map<DesignedObject>((r) => {
        //             return {Ключ: r["Ключ"], Номер: r["Номер"], Название: r["Название"]};
        //         });
        //
        //
        //         let ds = new TreeGridArrayDataSource(dataSource);
        //         console.log("select TOP 5000 Ключ,Номер,Название from [Вид ТМЦ] order by Номер =>" + table.rows[0].getValue(1));
        //
        //         let win2 =
        //             <TreeGrid
        //                 dataSource={ dataSource }
        //                 treeMode={true}
        //                 hierarchyFieldName="Номер"
        //                 hierarchyDelimiters="."
        //                 autoExpandNodesToLevel={0}
        //                 editable={true}
        //                 denyDelete={true}
        //             >
        //                 <TreeGridColumns>
        //                     <TreeGridColumn caption="Колонка2" propertyName="Номер" showHierarchyTree={false}
        //                                     width={100}>
        //                     </TreeGridColumn>
        //                     <TreeGridColumn caption="Колонка3" propertyName="Название" showHierarchyTree={true}
        //                                     width={200}>
        //                     </TreeGridColumn>
        //                     <TreeGridColumn caption="Колонка1" propertyName="Ключ" width={80}>
        //                     </TreeGridColumn>
        //                 </TreeGridColumns>
        //             </TreeGrid>;
        //
        //         let openParam: OpenWindowParams = {
        //             title: "auto form",
        //             top: 10,
        //             left: 10,
        //             height: 800
        //         };
        //
        //         appInstance.desktop.openWindow(win2, openParam);
        //
        //
        //     })
        //     .fail((err) => {
        //         alert(err.message);
        //     });
        //

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

        console.log(table);

        let s = new Snapshot();
        s.saveObject(table, "table1");

        console.log(table);

        table.name = "жопа";
        table.columns.length = 0;
        console.log(table);

        s.restoreObject(table, "table1");
        console.log(table);

        this.testSnapshotPreformance();


    };

    testSnapshotPreformance() {
        let x: any = [];

        for (let i = 0; i < 100; i++) {
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
            x.push(table);
        }


        let s = new Snapshot();
        console.time("x1");
        s.saveObject(x, "x");
        console.timeEnd("x1");
        x.length = 0;
        s.restoreObject(x, "x");
        console.log(x);
    };

    testGrid2() {

        class Vid extends DesignedObject {

            @StringEditor()
            @GridColumn({caption: "это номер"})
            Num: string;

            @StringEditor()
            @GridColumn({})
            Name: string;


            getClassName() {
                return "Вид товара";
            }

            toString() {
                return `[${this.Num}]  ` + this.Name;
            }

        }

        // executeSQL("select TOP 10 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
        //     .done((table: DataTable|string) => {
        //
        //         if (table instanceof DataTable) {
        //             let vids = table.rows.map<Vid>((r) => {
        //
        //                 let vid = new Vid();
        //                 vid.Num = "*" + r["Номер"];
        //                 vid.Name = "*" + r["Название"];
        //
        //                 return vid;
        //             });
        //
        //             console.log("select TOP 10 ==> ");
        //             //console.log(vids);
        //
        //             let dataSource = new TreeGridArrayDataSource(vids);
        //             dataSource.params.getNewRow = () => new Vid();
        //             //dataSource.params.getEmptyDataSourceMessage = () => "Все пусто, блин! Жми на газ!";
        //             dataSource.params.getEmptyDataSourceMessage = () =>
        //                 <span>"Все пусто, <i>блин!</i> Жми на газ!"</span>;
        //
        //             let win2 =
        //                 <TreeGrid
        //                     dataSource={dataSource}
        //                     editable={true}
        //                 >
        //                 </TreeGrid>;
        //
        //             let openParam: OpenWindowParams = {
        //                 title: "test grid 2",
        //                 top: 20,
        //                 left: 20,
        //                 height: 500
        //             };
        //
        //             appInstance.desktop.openWindow(win2, openParam);
        //         }
        //
        //     })
        //     .fail((err: any) => {
        //         throwError(err);
        //     });


    }

    testWindowAutoSize() {

        try {
            if (1 === 1)
                throwError(new Error("333++"));

        }
        catch (error) {

        }

        let mag = "Get the current coordinates of the first element in the set of matched elements, relative to ";

        let win2 =
                <div>
                    Привет уроды
                    <Button>Да и нет </Button>
                    <Button>Да и нет </Button>
                    <br/>
                    <Button>Да и нет </Button>
                    <br/>
                    <Button>Да и нет </Button>
                    <br/>
                    <Button>Да и нет </Button>
                    <br/>

                    <Button onClick={ (sender:Button, e:React.MouseEvent) => {
                          console.log("sender");
                          console.log(sender);
                          appInstance.desktop.openMessageWindow(mag, { style:"information", parentWindowId: sender.getParentWindowId() });
                          console.log(e.target);
                          e.stopPropagation();
                          }}
                    >
                        Новое
                    </Button>

                </div>
            ;

        let openParam: OpenWindowParams = {
            title: "test AUTOSIZE",
            autoSize: "content",
            autoPosition: "desktop-center"
        };

        appInstance.desktop.openWindow(win2, openParam);

    }

    testObservable() {

        let db = new SqlDb();
//        db.dbName = "schema-pg";
//        db.dialect = "pg";
//        db.dbName = "schema-mssql";
        //      db.dialect = "mssql";
        db.dbName = "schema-mysql";
        db.dialect = "mysql";


        db.selectToObject<any>("SELECT * FROM sakila.film", {}, "assign").done((obj) => {
            console.log(obj);
        });

        db.executeSQL("SELECT * FROM sakila.film")
            .then((obj: DataTable[]) => {
                console.log(obj);
            })
            .catch((err: string) => {
                console.error(err);
            });

        // db.selectToObject<any>("SELECT * FROM sakila.film; select 'qqq' as qqq, now() as now, 0xc9c9c8c7c6 as blober, null as null777", {}, "assign").done((obj) => {
        //     console.log(obj);
        // });


        // db.selectToObject<any>("select E'\\x01020304' as bbb, * from \"SchemaObject\"", {}, "assign").done((obj) => {
        //     console.log(obj);
        // });
        //
        //
        // let sql = new CreateTableStmt();
        // sql.table("SchemaObject333");
        // sql.column({column: "id", dataType: "guid", notNull: true, primaryKey: true});
        // sql.column("parentObjectID", "guid");
        // sql.column("name", "string", 128);
        // sql.column("description", "text");
        //
        // sql.column("createDateTime", "datetime");
        // sql.column("updateDateTime", "datetime");
        // sql.column("createUserId", "guid");
        // sql.column("updateUserId", "guid");
        //
        // sql.column("lockByUserId", "guid");
        // sql.column("lockDateTime", "datetime");
        //
        // console.log(sql.toSql("pg"));
        // console.log(sql.toSql("mysql"));
        //
        // db.executeSQL(sql)
        //     .then((fake) => {
        //         console.log("create SchemaObject333 ok");
        //     })
        //     .catch((error) => {
        //         throwError(error);
        //     });

        //throwError("жопа");

        // interface xxx {
        //     Жопа?: string;
        // }
        //
        // let sql = new SelectStmt();
        // sql.column("*");
        // sql.addFrom("SchemaObject");
        // sql.addWhere("name", "LIKE", "'%таблица%'");
        //
        // let x: SchemaObject = new SchemaObject(new Schema());
        // db.selectToObject<SchemaObject>(sql, x, "assign").done((obj) => {
        //     console.log(x);
        //
        // });
        //
        // db.selectToObject<any>(sql, {}, "assign").done((obj) => {
        //     console.log(obj);
        //
        // });
        //
        // let sql2 = new UpdateStmt();
        // sql2.table("SchemaObject");
        // sql2.addColumnAndValue("JSON", "'это json 33'");
        // sql2.addColumnAndValue("JSON2", "'это json 332'");
        // sql2.addWhere("name", "LIKE", "'%НоваяТаблица12%'");
        // sql2.addWhere("id", "=", 12);
        //
        // console.log(sql2.toSql("mssql"));

        //
        // db.selectToObject<SchemaObject>("select top 1 * from SchemaObject", x).done((obj) => {
        //     console.log(x);
        //
        // });

        // db.executeSQL("select * from SchemaObject")
        //     .then((table) => {
        //         console.log(table);
        //     })
        //     .catch((error) => {
        //         throwError(error);
        //     });

        // let x=Sql.select("номер","название",":qwert as 12")
        //     .from(["Организация","org"])
        //     .where("город",">=","Страна")
        //     .andWhere("город2","!=","Страна2")
        //     ;//.eq("");

        // let x = new SelectStmt();
        // x.column("номер");
        // x.column("название");
        // x.addFrom("Организация");
        //
        // console.log(x.toSql("mssql"));
        // let xxx: any = {};
        // let proxyHandler = {
        //     get: (target: any, p: PropertyKey, receiver: any): any => {
        //         //console.log("handlerGet???");
        //         //console.log(p);
        //         return target[p];
        //     },
        //     set: (target: any, p: PropertyKey, value: any, receiver: any): any => {
        //         console.log("handlerSet");
        //         console.log(p);
        //         console.log(value);
        //         target[p] = value;
        //         return true;
        //     }
        // };
        // console.log("-----Proxy-----");
        // let proxy = new Proxy(xxx, proxyHandler);
        // proxy.x111 = 333;
        // proxy.o = {};
        // proxy.o.eee = "eee1";
        //console.log(proxy.x111);
        //console.log(proxy);

        // let x = new Object();
        //
        // class A extends Proxy<Array<any>> {
        //     constructor() {
        //
        //         let handler: ProxyHandler<Array<any>> = {
        //             get: (target: Array<any>, p: PropertyKey, receiver: any): any => {
        //                 console.log("handlerGet");
        //             }
        //         };
        //
        //         super([], handler);
        //     }
        //
        // }
        //
        // console.log("9");
        // let a = new A();
        // a.push(10);
        // console.log("10");
    }

    testOpenSchemaForm() {

        let form = new SchemaForm(getSchema());

        let but1 = new ButtonControl();
        but1.text = "Буттон1";
        form.children.push(but1);

        let but2 = new ButtonControl();
        but2.text = "Буттон2";
        form.children.push(but2);

        let panel = new PanelControl();
        form.children.push(panel);

        let but3 = new ButtonControl();
        but3.text = "Буттон3";
        panel.children.push(but3);

        let but4 = new ButtonControl();
        but4.text = "Буттон4";
        panel.children.push(but4);


        let openParam: OpenWindowParams = {
            title: "окно 1 222222",
            top: 250,
            left: 250
        };

        appInstance.desktop.openSchemaForm(form, openParam);

    };

    testSchemaFormDesigner() {

        let form = new SchemaForm(getSchema());

        let but1 = new ButtonControl();
        but1.text = "Буттон 1222";
        form.children.push(but1);

        let but2 = new ButtonControl();
        but2.text = "Буттон 2222";
        form.children.push(but2);

        let panel = new PanelControl();
        form.children.push(panel);

        let but3 = new ButtonControl();
        but3.text = "Буттон3";
        panel.children.push(but3);

        let but4 = new ButtonControl();
        but4.text = "Буттон4";
        panel.children.push(but4);

        let openParam: OpenWindowParams = {
            title: "дизайнер компонента",
            top: 50,
            left: 50
        };

        appInstance.desktop.openSchemaComponentDesigner(form, openParam);

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
                                <button onClick={() => { this.testSnapshot(); }}>test SNAPSHOT</button>
                                <br/>
                                <button onClick={() => { this.testGrid2(); }}>test GRID-2</button>
                                <br/>
                                <button onClick={() => { this.testWindowAutoSize(); }}>test WIN AUTOSIZE</button>
                                <br/>
                                <button onClick={() => { this.testObservable(); }}>test OBSERVABLE</button>
                                <br/>
                                <button onClick={() => { this.testOpenSchemaForm(); }}>test SchemaForm</button>
                                <br/>
                                <br/>
                                <button onClick={() => { this.testSchemaFormDesigner(); }}>test SchemaFormDesigner</button>
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