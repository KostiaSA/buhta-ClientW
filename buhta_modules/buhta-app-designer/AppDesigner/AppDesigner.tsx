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
import {AutoForm} from "../../buhta-core/Components/AutoForm/AutoForm";
//import {TreeGrid} from "../../buhta-core/Components/TreeGrid/TreeGrid";
//import {TreeGridColumn} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";
//import {TreeGridColumns} from "../../buhta-core/Components/TreeGrid/TreeGridColumns";
import {Button} from "../../buhta-core/Components/Button/Button";

import {DesignedObject} from "../DesignedObject";
//import {TreeGridArrayDataSource} from "../../buhta-core/Components/TreeGrid/TreeGridArrayDataSource";
import {StringPropertyEditor, StringEditor} from "../PropertyEditors/StringPropertyEditor";
import {throwError} from "../../buhta-core/Error";
import {DataTable, SqlDb, DataRow, SqlBatch} from "../../buhta-sql/SqlDb";
import {SchemaObject} from "../../buhta-schema/SchemaObject";
import {Schema, getSchema} from "../../buhta-schema/Schema";
import {SelectStmt} from "../../buhta-sql/SelectStmt";
import {UpdateStmt} from "../../buhta-sql/UpdateStmt";
import {CreateTableStmt} from "../../buhta-sql/CreateTableStmt";
import {SchemaForm} from "../../buhta-schema/SchemaForm/SchemaForm";
import {ButtonControl} from "../../buhta-ui/ButtonControl";
import {PanelControl} from "../../buhta-ui/PanelControl";
import {checkAuth, getUserId, getAuthOk} from "../../buhta-core/Auth";
import {LocalVariableControl} from "../../buhta-ui/LocalVariableControl";
import {showTestSelectControlForm} from "../../buhta-test-ui/TestSelectControlForm";
import {OneWayBinder} from "../../buhta-schema/OneWayBinder/OneWayBinder";
import {OneWayBinder_StringValue} from "../../buhta-schema/OneWayBinder/OneWayBinder_StringValue";
import {OneWayBinder_NumberValue} from "../../buhta-schema/OneWayBinder/OneWayBinder_NumberValue";
import {OneWayBinder_EventHandler} from "../../buhta-schema/OneWayBinder/OneWayBinder_EventHandler";
import {OneWayBinder_JsCode} from "../../buhta-schema/OneWayBinder/OneWayBinder_JsCode";
import {SchemaComponent} from "../../buhta-schema/SchemaComponent/SchemaComponent";
import {PropertyControl} from "../../buhta-ui/PropertyControl";
import {ComponentControl} from "../../buhta-ui/ComponentControl";
//import enumerate = Reflect.enumerate;
import {SchemaComponentDesigner} from "../SchemaComponentDesigner/SchemaComponentDesigner";
import {SchemaDesigner} from "../SchemaDesigner/SchemaDesigner";
import {GridColumn, GridColumnDef} from "../../buhta-core/Components/Grid/GridColumn";
import {SchemaTable} from "../../buhta-schema/SchemaTable/SchemaTable";
import {getApplication} from "../../buhta-core/getApplication";
import {SchemaQuery, QueryTable, QueryColumn} from "../../buhta-schema/SchemaQuery/SchemaQuery";
import Grid from "../../buhta-core/Components/Grid/Grid";
import {
    GridTreeDataSourceFromSqlTable,
    GridTreeDataSourceFromSqlTableParams
} from "../../buhta-core/Components/Grid/GridTreeDataSourceFromSqlTable";
import {GridFlatDataSourceFromArray} from "../../buhta-core/Components/Grid/GridFlatDataSourceFromArray";
import {LookupInput} from "../../buhta-core/Components/LookupInput/LookupInput";
import {SchemaTableColumn} from "../../buhta-schema/SchemaTable/SchemaTableColumn";
import {deepClone} from "../../buhta-core/deepClone";
import {deepAssign} from "../../buhta-core/deepAssign";
import {createDefaultApp} from "../../buhta-core/createDefaultApp";


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


    sideWidth: number = 150;


    pro9(): Promise<number> {
        return new Promise(
            (resolve: (obj: number) => void, reject: (error: string) => void) => {
                setTimeout(() => {
                    resolve(9);
                    console.log("resolve(9)");
                }, 500);
            });
    }

    testOpenWindow() {


        let a = [100, 200, 300];


        Promise.map(a, (item: number, index: number, length: number) => {
            console.log(item);
            //return item + 8;

            return this.pro9()
                .then((x9) => {
                    return item + x9;
                });

        })
            .then((x) => {
                console.log(x);
            });

        /*
         var aa = [100, 200, 300];

         Promise
         .each(aa, (item, index, length) => {
         console.log(item);
         })
         .then((x,y,z)=>{
         console.log('x');
         console.log(x);
         console.log(y);
         console.log(x);
         });


         */
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
        // let table = new SchemaTable(getSchema());
        //
        // table.name = "Организация";
        // //table.sqlname = "dbo.Организация";
        // table.addColumn((col) => {
        //     col.name = "Номер";
        //     col.dataType = "string";
        //     col.dataLen = 33;
        // });
        // table.addColumn((col) => {
        //     col.name = "Название";
        //     col.dataType = "string";
        //     col.dataLen = 444;
        // });
        //
        // let win = <ObjectDesigner
        //     onChange={() => { console.log("table-change"); }}
        //     designedObject={table}>
        // </ObjectDesigner>;
        //
        // let openParam: OpenWindowParams = {
        //     title: "Организация",
        //     top: 50,
        //     left: 50
        // };
        //
        // appInstance.desktop.openWindow(win, openParam);
        //
    };

    testSnapshot() {
        // let table = new SqlTable();
        //
        // table.name = "Организация";
        // table.sqlname = "dbo.Организация";
        // table.addColumn((col) => {
        //     col.name = "Номер";
        //     col.dataType = "varchar(10)";
        // });
        // table.addColumn((col) => {
        //     col.name = "Название";
        //     col.dataType = "varchar(50)";
        // });
        //
        // console.log(table);
        //
        // let s = new Snapshot();
        // s.saveObject(table, "table1");
        //
        // console.log(table);
        //
        // table.name = "жопа";
        // table.columns.length = 0;
        // console.log(table);
        //
        // s.restoreObject(table, "table1");
        // console.log(table);
        //
        // this.testSnapshotPreformance();


    };

    testSnapshotPreformance() {
        // let x: any = [];
        //
        // for (let i = 0; i < 100; i++) {
        //     let table = new SqlTable();
        //
        //     table.name = "Организация";
        //     table.sqlname = "dbo.Организация";
        //     table.addColumn((col) => {
        //         col.name = "Номер";
        //         col.dataType = "varchar(10)";
        //     });
        //     table.addColumn((col) => {
        //         col.name = "Название";
        //         col.dataType = "varchar(50)";
        //     });
        //     x.push(table);
        // }
        //
        //
        // let s = new Snapshot();
        // console.time("x1");
        // s.saveObject(x, "x");
        // console.timeEnd("x1");
        // x.length = 0;
        // s.restoreObject(x, "x");
        // console.log(x);
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

    // testGrid_parentkey() {
    //
    //     class Vid extends DesignedObject {
    //
    //         @StringEditor()
    //         @GridColumn({caption: "это номер"})
    //         Num: string;
    //
    //         @StringEditor()
    //         @GridColumn({})
    //         Name: string;
    //
    //
    //         getClassName() {
    //             return "Вид товара";
    //         }
    //
    //         toString() {
    //             return `[${this.Num}]  ` + this.Name;
    //         }
    //
    //     }
    //
    //
    //     getSchema().db.executeSQL("select * from TestParentKey order by Name")
    //         .then((table: DataTable[]) => {
    //
    //             // let vids = table[0].rows.map<Vid>((r) => {
    //             //
    //             //     let vid = new Vid();
    //             //     vid.Num = "*" + r["Номер"];
    //             //     vid.Name = "*" + r["Название"];
    //             //
    //             //     return vid;
    //             // });
    //             //
    //             // console.log("select TOP 10 ==> ");
    //             // //console.log(vids);
    //
    //             let dataSource = new TreeGridArrayDataSource<DataRow>(table[0].rows);
    //             //dataSource.params.getNewRow = () => new Vid();
    //             //dataSource.params.getEmptyDataSourceMessage = () => "Все пусто, блин! Жми на газ!";
    //             //dataSource.params.getEmptyDataSourceMessage = () =>
    //             //  <span>"Все пусто, <i>блин!</i> Жми на газ!"</span>;
    //
    //             let win2 =
    //                 <TreeGrid
    //                     dataSource={dataSource}
    //                     editable={true}
    //                     treeMode="parentKey"
    //                     autoExpandNodesToLevel={2}
    //                     keyFieldName="id"
    //                     parentKeyFieldName="parentId"
    //                     positionFieldName="position"
    //                     dragDropNodes={true}
    //                 >
    //                     <TreeGridColumns>
    //                         <TreeGridColumn caption="Num" propertyName="num"
    //                                         showHierarchyTree={true}
    //                                         width={300}>
    //                         </TreeGridColumn>
    //                         <TreeGridColumn caption="Name" propertyName="name"
    //                                         width={400}>
    //                         </TreeGridColumn>
    //                         <TreeGridColumn caption="position" propertyName="position"
    //                                         width={100}>
    //                         </TreeGridColumn>
    //                     </TreeGridColumns>
    //
    //                 </TreeGrid>;
    //
    //             let openParam: OpenWindowParams = {
    //                 title: "test grid 2",
    //                 top: 20,
    //                 left: 20,
    //                 width: 700,
    //                 height: 800,
    //             };
    //
    //             appInstance.desktop.openWindow(win2, openParam);
    //
    //         })
    //         .catch((err: any) => {
    //             throwError(err);
    //         });
    //
    //
    // }

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

        checkAuth().then(() => {

            let form = new SchemaForm(getSchema());
            form.id = "1f2d95a0-5af4-11e6-91ea-8fba7805de8d";
            form.name = "Тестовая форма 777";
            form.description = "Это описание 'Тестовая форма 777'";

            let v = new LocalVariableControl();
            v.variableName = "ИмяКнопки";
            v.variableType = "string";
            v.initValue = new OneWayBinder_StringValue("привет уроды из кнопки");
            form.children.push(v);

            let v1 = new LocalVariableControl();
            v1.variableName = "ДатаКнопки";
            v1.variableType = "date";
            form.children.push(v1);

            let but1 = new ButtonControl();
            but1.text = "Буттон 1222 с обработчиком Опа!";
            but1.onClick = new OneWayBinder_EventHandler("function onClick(context) {\n  context.schemaComponent.setVar('ИмяКнопки','Пиздец',true);\n}");
            form.children.push(but1);

            let but2 = new ButtonControl();
            but2.text = new OneWayBinder_JsCode("function text(context) {\n  console.log('context777'); console.log(context);   return context.schemaComponent.getVar('ИмяКнопки');\n}");
            but2.text2 = new OneWayBinder_StringValue("текст 2");
            //let x=new OneWayBinder_NumberValue(100);
            form.children.push(but2);

            let panel = new PanelControl();
            form.children.push(panel);

            let but3 = new ButtonControl();
            but3.text = "Буттон3";
            panel.children.push(but3);

            let but4 = new ButtonControl();
            but4.text = "Буттон4";
            panel.children.push(but4);

            let panel1 = new PanelControl();
            form.children.push(panel1);

            let but5 = new ButtonControl();
            but5.text = "Буттон5";
            panel1.children.push(but5);

            let but6 = new ButtonControl();
            but6.text = "Буттон6";
            panel1.children.push(but6);

            let comp = new ComponentControl();
            comp.schemaComponentId = "333395a0-5af4-11e6-3333-8fba78053333";
            panel1.children.push(comp);

            let openParam: OpenWindowParams = {
                title: "дизайнер компонента",
                top: 10,
                left: 10,
                width: 800,
                height: 600

            };

            appInstance.desktop.openSchemaComponentDesigner(form, openParam);

        });


    };

    testOpenSchemaFormDesigner() {


        getSchema().getObject<SchemaForm>("1f2d95a0-5af4-11e6-91ea-8fba7805de8d").then((form: SchemaForm) => {
            let openParam: OpenWindowParams = {
                title: "дизайнер формы",
                top: 50,
                left: 50
            };

            appInstance.desktop.openSchemaComponentDesigner(form, openParam);

        });


    };

    testSchemaComponent3ButtonsDesigner() {

        checkAuth().then(() => {

            let form = new SchemaComponent(getSchema());
            form.id = "333395a0-5af4-11e6-3333-8fba78053333";
            form.name = "Buttons3Stuck";

            let p = new PropertyControl();
            p.propertyName = "ИмяКнопкиДобавить";
            p.propertyType = "string";
            p.defaultValue = new OneWayBinder_StringValue("Добавить ли?");
            form.children.push(p);

            p = new PropertyControl();
            p.propertyName = "ИмяКнопкиИзменить";
            p.propertyType = "string";
            p.defaultValue = new OneWayBinder_StringValue("Изменить ли?");
            form.children.push(p);

            let v = new LocalVariableControl();
            v.variableName = "ИмяКнопкиУдалить";
            v.variableType = "string";
            v.initValue = new OneWayBinder_StringValue("Удалить ли?");
            form.children.push(v);


            let but2 = new ButtonControl();
            but2.text = new OneWayBinder_JsCode("function text(context) {\n  return context.schemaComponent.getProp('ИмяКнопкиДобавить');\n}");
            form.children.push(but2);

            but2 = new ButtonControl();
            but2.text = new OneWayBinder_JsCode("function text(context) {\n  return context.schemaComponent.getProp('ИмяКнопкиИзменить');\n}");
            form.children.push(but2);

            but2 = new ButtonControl();
            but2.text = new OneWayBinder_JsCode("function text(context) {\n  return context.schemaComponent.getVar('ИмяКнопкиУдалить');\n}");
            form.children.push(but2);

            let openParam: OpenWindowParams = {
                title: "дизайнер компонента",
                top: 10,
                left: 10,
                width: 800,
                height: 600

            };

            appInstance.desktop.openSchemaComponentDesigner(form, openParam);

        });


    };


    testOpenSchemaComponent3ButtonsDesigner() {

        getSchema().getObject<SchemaComponent>("333395a0-5af4-11e6-3333-8fba78053333").then((component: SchemaComponent) => {
            let openParam: OpenWindowParams = {
                title: "дизайнер компонента",
                top: 10,
                left: 10,
                width: 800,
                height: 600
            };

            appInstance.desktop.openSchemaComponentDesigner(component, openParam);

        });


    };

    testOpenSchemaDesigner() {

        let openParam: OpenWindowParams = {
            title: "дизайнер схемы",
            top: 10,
            left: 10,
            width: 800,
            height: 600,
            sizePositionStoreKey: "SchemaDesigner"
        };

        let winContent = (
            <SchemaDesigner
                schema={getSchema()}
            >
            </SchemaDesigner>);
        appInstance.desktop.openWindow(winContent, openParam);

    };

    testSchemaQuery() {
        let q = new SchemaQuery(getSchema());
        let t = new QueryTable();
        q.rootTable = t;
        t.parentSchemaQuery = q;
        t.sourceObjectId = "1796c360-6b9e-11e6-b8c4-1fd02a9b4368";

        let c = new QueryColumn();
        c.parentTable = t;
        c.columnName = "Номер";
        c.columnAlias = "нммм";
        t.columns.push(c);

        c = new QueryColumn();
        c.parentTable = t;
        c.columnName = "Название";
        c.columnAlias = "назва77";
        t.columns.push(c);

        q.getSelectStmt().then((stmt: SqlBatch)=> {
            getApplication().getMainDb().executeSQL(stmt);
        });
    }

    testSelectEx() {

        let openParam: OpenWindowParams = {
            title: "дизайнер схемы",
            top: 10,
            left: 10,
            width: 800,
            height: 600,
            sizePositionStoreKey: "SchemaDesigner"
        };

        let obj = {qqq: "100.13"};

        getApplication().getMainDb().executeSQL("select TOP 1000 Номер,Номер+Название Название from [ТМЦ] order by номер")
            .done((tables: DataTable[]) => {

                let ds = new GridFlatDataSourceFromArray({
                    arrayObj: tables[0].rows,
                    lookupValuePropName: "Номер",
                    lookupLabelPropName: "Название"
                });


                let winContent = (
                    <AutoForm sizeTo="content">
                        <Input type={InputType.Text} bindObject={this} bindPropName="str"/>
                        <Input inputTab="параметры1" inputCaption="eee1" type={InputType.Text} bindObject={this}
                               bindPropName="str"/>
                        <Input inputTab="параметры1" inputCaption="eee2" type={InputType.Text} bindObject={this}
                               bindPropName="str"/>
                        <Input inputTab="параметры1" inputCaption="eee3" type={InputType.Text} bindObject={this}
                               bindPropName="str"/>
                        <LookupInput
                            inputCaption="найди город"
                            multiSelect={false}
                            bindObject={obj}
                            bindPropName="qqq"
                            lookupDataSource={ds}
                            onChange={ ()=>{ console.log(obj); }}
                        >
                        </LookupInput>
                    </AutoForm>);
                appInstance.desktop.openWindow(winContent, openParam);

            });


    };

    testPopup() {

        let openParam: OpenWindowParams = {
            title: "popup",
            top: 400,
            left: 10,
            width: 200,
            height: 400,
            isPopup: true,
            theme: "blue",
            noPaddings: true
        };

        getApplication().getMainDb().executeSQL("select TOP 100 Номер,Название from [ТМЦ]")
            .done((tables: DataTable[]) => {

                let ds = new GridFlatDataSourceFromArray({arrayObj: tables[0].rows});

                let winContent = (
                    <div style={{height:"100%"}}>
                        <Grid
                            dataSource={ds}
                            sizeColumnsToFit={true}
                            noBorder={true}
                            hideColumnsHeaders={true}
                        >
                            <GridColumnDef propertyName="Название">
                            </GridColumnDef>
                        </Grid>
                    </div>);

                appInstance.desktop.openWindow(winContent, openParam);

            });


    };

    checkDeep() {
        let table = new SchemaTable(getSchema());
        let col = new SchemaTableColumn(table);
        table.columns.push(col);

        console.log(table.columns);
        if (table !== table.columns[0].table)
            console.error("пиздец1");

        let clonedTable = deepClone<SchemaTable>(table);
        if (clonedTable !== clonedTable.columns[0].table)
            console.error("пиздец2");

        clonedTable.columns[0].name="жопа";
        clonedTable.name="жопа-табле"

        deepAssign(table,clonedTable);
        if (table !== table.columns[0].table)
            console.error("пиздец3");

        console.log(table);

    }

    render(): JSX.Element {
        this.addClassName("app-designer");

        this.addProps({sizeTo: "parent"});

        if (!getAuthOk()) {
            checkAuth().then(()=> {
                this.forceUpdate()
            });
            return <span>Аутентификация...</span>;
        }
        else
            return (
                <App {...this.getRenderProps()}>
                    <Layout sizeTo="parent" type="column">
                        <Fixed className="header1">Fixed Header</Fixed>
                        <Flex>
                            <Layout type="row" sizeTo="parent">
                                <Fixed className="sidebar" style={{width:this.sideWidth}}>
                                    Fixed Sidebar 123<br/>
                                    <button
                                        onClick={() => { getSchema().initSchemaStorage().then(()=>{alert("ok")}).catch((err)=>{alert(err)}); }}>
                                        init schema storage
                                    </button>
                                    <br/>
                                    <button
                                        onClick={() => { getApplication().initUserSettingsDb().then(()=>{alert("ok")}).catch((err)=>{alert(err)}); }}>
                                        init user settings db
                                    </button>
                                    <br/>
                                    <button
                                        onClick={() => {createDefaultApp().then(()=>{alert("default app ok")}).catch((err)=>{alert(err)}); }}>
                                        create default app
                                    </button>
                                    <br/>
                                    <button onClick={() => { this.testOpenWindow(); }}> test Promise-Each</button>
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
                                    <button onClick={() => { this.testSchemaFormDesigner(); }}>test SchemaFormDesigner
                                    </button>
                                    <br/>
                                    <button onClick={() => { this.testSchemaComponent3ButtonsDesigner(); }}>
                                        test SchemaComponent3ButDesigner
                                    </button>
                                    <br/>
                                    <button onClick={() => { this.testOpenSchemaFormDesigner(); }}>
                                        test OpenSchemaFormDesigner
                                    </button>
                                    <br/>
                                    <button onClick={() => { this.testOpenSchemaComponent3ButtonsDesigner(); }}>
                                        test OpenSchemaComponent3ButtonsDesigner
                                    </button>
                                    <br/>
                                    <button onClick={() => { showTestSelectControlForm(); }}>
                                        showTestSelectControlForm
                                    </button>
                                    <br/>
                                    <button onClick={() => { this.testOpenSchemaDesigner(); }}>
                                        test OpenSchemDesigner +++++++++++++
                                    </button>
                                    <br/>
                                    <button onClick={() => { this.testSchemaQuery(); }}>
                                        testSchemaQuery
                                    </button>
                                    <br/>
                                    <button onClick={() => { this.testSelectEx(); }}>
                                        testSelectEx
                                    </button>
                                    <br/>
                                    <button onClick={() => { this.testPopup(); }}>
                                        test POPUP
                                    </button>
                                    <br/>
                                    <br/>
                                    <button onClick={() => { this.checkDeep(); }}>
                                        check Deep
                                    </button>
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