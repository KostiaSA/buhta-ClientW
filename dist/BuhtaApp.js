/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var AppDesigner_1 = __webpack_require__(3);
	// ReactDOM.render(
	//     <Hello compiler="TypeScript" framework="React" />,
	//     document.getElementById("example")
	// );
	// ReactDOM.render(
	//     <App/>,
	//     document.body
	// );
	ReactDOM.render(React.createElement(AppDesigner_1.AppDesigner, null), document.body);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var Layout_1 = __webpack_require__(7);
	var Fixed_1 = __webpack_require__(8);
	var Flex_1 = __webpack_require__(9);
	var testBuhtaObject1_1 = __webpack_require__(10);
	var ObjectDesigner_1 = __webpack_require__(16);
	var Desktop_1 = __webpack_require__(28);
	var Movable_1 = __webpack_require__(32);
	var App_1 = __webpack_require__(29);
	var Input_1 = __webpack_require__(15);
	var testBuhtaObject2_1 = __webpack_require__(33);
	var AutoForm_1 = __webpack_require__(18);
	var TreeGrid_1 = __webpack_require__(34);
	var TreeGridColumn_1 = __webpack_require__(36);
	var SQL_1 = __webpack_require__(40);
	var Button_1 = __webpack_require__(21);
	var SqlTable_1 = __webpack_require__(44);
	var Snapshot_1 = __webpack_require__(25);
	var DesignedObject_1 = __webpack_require__(11);
	var TreeGridArrayDataSource_1 = __webpack_require__(46);
	var StringPropertyEditor_1 = __webpack_require__(12);
	var Error_1 = __webpack_require__(6);
	var Db_1 = __webpack_require__(42);
	var AppDesignerState = (function (_super) {
	    __extends(AppDesignerState, _super);
	    function AppDesignerState() {
	        _super.apply(this, arguments);
	    }
	    return AppDesignerState;
	}(Component_1.ComponentState));
	exports.AppDesignerState = AppDesignerState;
	var AppDesigner = (function (_super) {
	    __extends(AppDesigner, _super);
	    function AppDesigner(props, context) {
	        _super.call(this, props, context);
	        this.sideWidth = 300;
	        this.str = "привет";
	        this.props = props;
	        this.state = new AppDesignerState(this);
	    }
	    // initTest() {
	    //     this.testObject.name = "Тестовый объект1";
	    // }
	    AppDesigner.prototype.moveStart = function (e) {
	        var _this = this;
	        e.bindX(this, "sideWidth", function () {
	            _this.forceUpdate();
	        });
	    };
	    AppDesigner.prototype.testOpenWindow = function () {
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
	    ;
	    AppDesigner.prototype.testOpenObjectDesigner = function () {
	        var testObject = new testBuhtaObject1_1.TestBuhtaObject1();
	        testObject.firstName = "Игорь0";
	        testObject.lastName = "Сидоренко0";
	        testObject.surName = "Олегович0";
	        //        let win = <ObjectDesigner onChange={()=>{ win2Instance.designedObject=null; win2Instance.forceUpdate(); console.log("test323-change")}} designedObject={testObject} key="1"> </ObjectDesigner>;
	        var win = React.createElement(ObjectDesigner_1.ObjectDesigner, {onChange: function () { testObject = _.cloneDeep(testObject); win2Instance.forceUpdate(); console.log("test999-change"); }, designedObject: testObject, key: "1"}, " ");
	        var testObject2 = new testBuhtaObject2_1.testBuhtaObject2();
	        testObject2.firstName = "Игорь1";
	        testObject2.lastName = "Сидоренко2";
	        testObject2.surName = "Олегович1";
	        testObject2.sex = "мужской";
	        var win2Instance;
	        var win2 = React.createElement(ObjectDesigner_1.ObjectDesigner, {ref: function (e) { win2Instance = e; }, designedObject: testObject2, key: "2"});
	        //getPropertyEditors(testObject);
	        //getPropertyEditors(testObject2);
	        var winwin = React.createElement("div", null, 
	            win, 
	            win2);
	        var openParam = {
	            title: "окно 1",
	            top: 50,
	            left: 50
	        };
	        App_1.appInstance.desktop.openWindow(winwin, openParam);
	    };
	    ;
	    AppDesigner.prototype.testImmutable = function () {
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
	    ;
	    AppDesigner.prototype.testAutoForm = function () {
	        var win2 = React.createElement(AutoForm_1.AutoForm, {sizeTo: "content"}, 
	            React.createElement(Input_1.Input, {type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), 
	            React.createElement(Input_1.Input, {inputTab: "параметры1", inputCaption: "eee1", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), 
	            React.createElement(Input_1.Input, {inputTab: "параметры1", inputCaption: "eee2", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), 
	            React.createElement(Input_1.Input, {inputTab: "параметры1", inputCaption: "eee3", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), 
	            React.createElement(Input_1.Input, {inputTab: "параметры2", inputCaption: "eee4", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}));
	        //        <Input inputTab="параметры" inputCaption="eee" type={InputType.Text} bindObject={this} bindPropName="str"/>
	        var openParam = {
	            title: "auto form",
	            top: 10,
	            left: 10
	        };
	        App_1.appInstance.desktop.openWindow(win2, openParam);
	    };
	    AppDesigner.prototype.testGrid = function () {
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
	    };
	    AppDesigner.prototype.testFlex = function () {
	        var win2 = React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent", style: { border: "2px dotted red", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}, 
	            React.createElement(Fixed_1.Fixed, {style: { border: "2px dotted blue" }}, 
	                React.createElement(Button_1.Button, null, "Один")
	            ), 
	            React.createElement(Flex_1.Flex, {style: { border: "2px dotted green" }}, 
	                React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent", style: { border: "1px solid red" }}, 
	                    React.createElement(Fixed_1.Fixed, {style: { border: "1px solid blue" }}, 
	                        React.createElement(Button_1.Button, null, "------Один")
	                    ), 
	                    React.createElement(Flex_1.Flex, {style: { border: "1px solid green" }}, 
	                        React.createElement("div", {style: {}}, 
	                            React.createElement(Button_1.Button, null, "-------Два"), 
	                            React.createElement("br", null), 
	                            React.createElement(Button_1.Button, null, "--------Два1")), 
	                        React.createElement("table", null, 
	                            React.createElement("tr", null, 
	                                React.createElement("td", null, "1111"), 
	                                React.createElement("td", null, "2222")), 
	                            React.createElement("tr", null, 
	                                React.createElement("td", null, "1111"), 
	                                React.createElement("td", null, "2222")), 
	                            React.createElement("tr", null, 
	                                React.createElement("td", null, "1111"), 
	                                React.createElement("td", null, "2222")), 
	                            React.createElement("tr", null, 
	                                React.createElement("td", null, "1111"), 
	                                React.createElement("td", null, "2222")))), 
	                    React.createElement(Fixed_1.Fixed, {style: { border: "1px solid maroon" }}, 
	                        React.createElement(Button_1.Button, null, "--------Три")
	                    ))
	            ), 
	            React.createElement(Fixed_1.Fixed, {style: { border: "2px dotted maroon" }}, 
	                React.createElement(Button_1.Button, null, "Три")
	            ));
	        var openParam = {
	            title: "test FLEX",
	            top: 10,
	            left: 10
	        };
	        App_1.appInstance.desktop.openWindow(win2, openParam);
	    };
	    AppDesigner.prototype.testTableDesigner = function () {
	        var table = new SqlTable_1.SqlTable();
	        table.name = "Организация";
	        table.sqlname = "dbo.Организация";
	        table.addColumn(function (col) {
	            col.name = "Номер";
	            col.dataType = "varchar(10)";
	        });
	        table.addColumn(function (col) {
	            col.name = "Название";
	            col.dataType = "varchar(50)";
	        });
	        var win = React.createElement(ObjectDesigner_1.ObjectDesigner, {onChange: function () { console.log("table-change"); }, designedObject: table});
	        var openParam = {
	            title: "Организация",
	            top: 50,
	            left: 50
	        };
	        App_1.appInstance.desktop.openWindow(win, openParam);
	    };
	    ;
	    AppDesigner.prototype.testSnapshot = function () {
	        var table = new SqlTable_1.SqlTable();
	        table.name = "Организация";
	        table.sqlname = "dbo.Организация";
	        table.addColumn(function (col) {
	            col.name = "Номер";
	            col.dataType = "varchar(10)";
	        });
	        table.addColumn(function (col) {
	            col.name = "Название";
	            col.dataType = "varchar(50)";
	        });
	        console.log(table);
	        var s = new Snapshot_1.Snapshot();
	        s.saveObject(table, "table1");
	        console.log(table);
	        table.name = "жопа";
	        table.columns.length = 0;
	        console.log(table);
	        s.restoreObject(table, "table1");
	        console.log(table);
	        this.testSnapshotPreformance();
	    };
	    ;
	    AppDesigner.prototype.testSnapshotPreformance = function () {
	        var x = [];
	        for (var i = 0; i < 100; i++) {
	            var table = new SqlTable_1.SqlTable();
	            table.name = "Организация";
	            table.sqlname = "dbo.Организация";
	            table.addColumn(function (col) {
	                col.name = "Номер";
	                col.dataType = "varchar(10)";
	            });
	            table.addColumn(function (col) {
	                col.name = "Название";
	                col.dataType = "varchar(50)";
	            });
	            x.push(table);
	        }
	        var s = new Snapshot_1.Snapshot();
	        console.time("x1");
	        s.saveObject(x, "x");
	        console.timeEnd("x1");
	        x.length = 0;
	        s.restoreObject(x, "x");
	        console.log(x);
	    };
	    ;
	    AppDesigner.prototype.testGrid2 = function () {
	        var Vid = (function (_super) {
	            __extends(Vid, _super);
	            function Vid() {
	                _super.apply(this, arguments);
	            }
	            Vid.prototype.getClassName = function () {
	                return "Вид товара";
	            };
	            Vid.prototype.toString = function () {
	                return ("[" + this.Num + "]  ") + this.Name;
	            };
	            __decorate([
	                StringPropertyEditor_1.StringEditor(),
	                TreeGridColumn_1.GridColumn({ caption: "это номер" })
	            ], Vid.prototype, "Num", void 0);
	            __decorate([
	                StringPropertyEditor_1.StringEditor(),
	                TreeGridColumn_1.GridColumn({})
	            ], Vid.prototype, "Name", void 0);
	            return Vid;
	        }(DesignedObject_1.DesignedObject));
	        SQL_1.executeSQL("select TOP 10 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
	            .done(function (table) {
	            if (table instanceof Db_1.DataTable) {
	                var vids = table.rows.map(function (r) {
	                    var vid = new Vid();
	                    vid.Num = "*" + r["Номер"];
	                    vid.Name = "*" + r["Название"];
	                    return vid;
	                });
	                console.log("select TOP 10 ==> ");
	                //console.log(vids);
	                var dataSource = new TreeGridArrayDataSource_1.TreeGridArrayDataSource(vids);
	                dataSource.params.getNewRow = function () { return new Vid(); };
	                //dataSource.params.getEmptyDataSourceMessage = () => "Все пусто, блин! Жми на газ!";
	                dataSource.params.getEmptyDataSourceMessage = function () {
	                    return React.createElement("span", null, 
	                        "\"Все пусто, ", 
	                        React.createElement("i", null, "блин!"), 
	                        " Жми на газ!\"");
	                };
	                var win2 = React.createElement(TreeGrid_1.TreeGrid, {dataSource: dataSource, editable: true});
	                var openParam = {
	                    title: "test grid 2",
	                    top: 20,
	                    left: 20,
	                    height: 500
	                };
	                App_1.appInstance.desktop.openWindow(win2, openParam);
	            }
	        })
	            .fail(function (err) {
	            Error_1.throwError(err.message);
	        });
	    };
	    AppDesigner.prototype.testWindowAutoSize = function () {
	        try {
	            if (true)
	                Error_1.throwError(new Error("333++"));
	        }
	        catch (error) {
	        }
	        var mag = "Get the current coordinates of the first element in the set of matched elements, relative to ";
	        var win2 = React.createElement("div", null, 
	            "Привет уроды", 
	            React.createElement(Button_1.Button, null, "Да и нет "), 
	            React.createElement(Button_1.Button, null, "Да и нет "), 
	            React.createElement("br", null), 
	            React.createElement(Button_1.Button, null, "Да и нет "), 
	            React.createElement("br", null), 
	            React.createElement(Button_1.Button, null, "Да и нет "), 
	            React.createElement("br", null), 
	            React.createElement(Button_1.Button, null, "Да и нет "), 
	            React.createElement("br", null), 
	            React.createElement(Button_1.Button, {onClick: function (sender, e) {
	                console.log("sender");
	                console.log(sender);
	                App_1.appInstance.desktop.openMessageWindow(mag, { style: "information", parentWindowId: sender.getParentWindowId() });
	                console.log(e.target);
	                e.stopPropagation();
	            }}, "Новое"));
	        var openParam = {
	            title: "test AUTOSIZE",
	            autoSize: "content",
	            autoPosition: "desktop-center"
	        };
	        App_1.appInstance.desktop.openWindow(win2, openParam);
	    };
	    AppDesigner.prototype.testObservable = function () {
	        var db = new Db_1.Db();
	        db.dbName = "schema";
	        db.dialect = "mssql";
	        //throwError("жопа");
	        db.selectToObject("select 'жопа12' as Жопа").done(function (obj) {
	            console.log(obj);
	        });
	        db.executeSQL("select * from SchemaObject")
	            .then(function (table) {
	            console.log(table);
	        })
	            .catch(function (error) {
	            Error_1.throwError(error);
	        });
	        // let x=Sql.select("номер","название",":qwert as 12")
	        //     .from(["Организация","org"])
	        //     .where("город",">=","Страна")
	        //     .andWhere("город2","!=","Страна2")
	        //     ;//.eq("");
	        // let x = new SelectStmt();
	        // x.addColumn("номер");
	        // x.addColumn("название");
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
	    };
	    AppDesigner.prototype.render = function () {
	        var _this = this;
	        this.addClassName("app-designer");
	        this.addProps({ sizeTo: "parent" });
	        return (React.createElement(App_1.App, __assign({}, this.getRenderProps()), 
	            React.createElement(Layout_1.Layout, {sizeTo: "parent", type: "column"}, 
	                React.createElement(Fixed_1.Fixed, {className: "header1"}, "Fixed Header"), 
	                React.createElement(Flex_1.Flex, null, 
	                    React.createElement(Layout_1.Layout, {type: "row", sizeTo: "parent"}, 
	                        React.createElement(Fixed_1.Fixed, {className: "sidebar", style: { width: this.sideWidth }}, 
	                            "Fixed Sidebar 123", 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testOpenWindow(); }}, " test open window"), 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testOpenObjectDesigner(); }}, "open designer"), 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testImmutable(); }}, "testImmutable"), 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testAutoForm(); }}, "test autoform"), 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testGrid(); }}, "test GRID"), 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testFlex(); }}, "test FLEX"), 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testTableDesigner(); }}, "test TABLE DESIGNER"), 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testSnapshot(); }}, "test SNAPSHOT"), 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testGrid2(); }}, "test GRID-2"), 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testWindowAutoSize(); }}, "test WIN AUTOSIZE"), 
	                            React.createElement("br", null), 
	                            React.createElement("br", null), 
	                            React.createElement("button", {onClick: function () { _this.testObservable(); }}, "test OBSERVABLE")), 
	                        React.createElement(Flex_1.Flex, {className: "XXXcontent"}, 
	                            React.createElement(Desktop_1.Desktop, null, 
	                                React.createElement(Movable_1.Movable, {onMoveStart: this.moveStart.bind(this)}, "MOV")
	                            )
	                        ))
	                ))
	        ));
	    };
	    return AppDesigner;
	}(Component_1.Component));
	exports.AppDesigner = AppDesigner;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var _ = __webpack_require__(4);
	var Error_1 = __webpack_require__(6);
	var ComponentState = (function () {
	    function ComponentState(component) {
	        this.component = component;
	    }
	    ComponentState.prototype.forceUpdate = function () {
	        this.component.forceUpdate();
	    };
	    return ComponentState;
	}());
	exports.ComponentState = ComponentState;
	var Component = (function (_super) {
	    __extends(Component, _super);
	    function Component(props, context /*stateClass?: Function*/) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.plugins = [];
	        this.renderClasses = [];
	        this.renderProps = {};
	        this.renderStyles = {};
	        this.componentDidMount = function () {
	            _this.didMount();
	        };
	        this.componentWillMount = function () {
	            _this.willMount();
	            if (_this.props.onWillMount)
	                _this.props.onWillMount(_this.state);
	        };
	        this.componentWillReceiveProps = function (nextProps) {
	            _this.willReceiveProps(nextProps);
	        };
	        // protected shallowCompare(nextProps: P): boolean {
	        //     //console.log("shallow-0 " + this.constructor.toString().substring(0, 30));
	        //     //console.time("22");
	        //     let ret = shallowCompare(this, nextProps, this.state);
	        //     //console.timeEnd("22");
	        //     return ret;
	        // }
	        //
	        // private shouldComponentUpdate = (nextProps: P, nextState: S) => {
	        //     return this.shallowCompare(nextProps);
	        // }
	        this.componentDidUpdate = function (prevProps, prevState, prevContext) {
	            _this.didUpdate(prevProps, prevState, prevContext);
	        };
	        this.componentWillUnmount = function () {
	            _this.willUnmount();
	        };
	        this.props = props;
	        // this.plugins.forEach((plug) => {
	        //     let plugInstance: any = new plug(this);
	        //     this.plugins.push(plugInstance);
	        // });
	    }
	    Component.prototype.getParentWindow = function () {
	        var parent = ReactDOM.findDOMNode(this);
	        while (parent) {
	            if (parent.$$window)
	                return parent.$$window;
	            parent = parent.parentElement;
	        }
	        return null;
	    };
	    Component.prototype.getParentDesktop = function () {
	        var parent = ReactDOM.findDOMNode(this);
	        while (parent) {
	            if (parent.$$desktop)
	                return parent.$$desktop;
	            parent = parent.parentElement;
	        }
	        Error_1.throwError("getParentDesktop(): desktop not found");
	        return {}; // fake typescript 2
	    };
	    Component.prototype.getParentWindowId = function () {
	        var parentWin = this.getParentWindow();
	        if (parentWin) {
	            return parentWin.state.id;
	        }
	        else
	            return "";
	    };
	    Component.prototype.addProps = function (props) {
	        _.assignWith(this.renderProps, props, function (objectValue, sourceValue, key) {
	            if (key === "class" || key === "className")
	                console.error("invalid property '" + key + "', use functions addClassName(), toggleClassName()");
	            if (key === "style")
	                console.error("invalid property '" + key + "', use functions addStyles(), removeStyle()");
	            return sourceValue;
	        });
	    };
	    Component.prototype.addStyles = function (styles) {
	        _.assign(this.renderStyles, styles);
	    };
	    Component.prototype.clearStyles = function () {
	        this.renderStyles = {};
	    };
	    Component.prototype.removeStyle = function (style) {
	        delete this.renderStyles[style];
	    };
	    Component.prototype.removeStyles = function (styles) {
	        var _this = this;
	        styles.forEach(function (style) {
	            delete _this.renderStyles[style];
	        });
	    };
	    Component.prototype.didMount = function () {
	        this.plugins.forEach(function (plug) {
	            plug.didMount();
	        });
	    };
	    Component.prototype.willMount = function () {
	        this.plugins.forEach(function (plug) {
	            plug.willMount();
	        });
	    };
	    Component.prototype.willReceiveProps = function (nextProps) {
	        this.plugins.forEach(function (plug) {
	            plug.willReceiveProps(nextProps);
	        });
	    };
	    Component.prototype.isPropsEqual = function (obj1, obj2, excludeProps) {
	        //Loop through properties in object 1
	        for (var p in obj1) {
	            if (excludeProps && excludeProps.indexOf(p) >= 0)
	                continue;
	            //Check property exists on both objects
	            if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p))
	                return false;
	            if (obj1[p] !== obj2[p]) {
	                //console.log("1 not equal " + p);
	                return false;
	            }
	        }
	        //Check object 2 for any extra properties
	        for (var p in obj2) {
	            if (typeof (obj1[p]) === "undefined" && typeof (obj2[p]) !== "undefined") {
	                //console.log("2 not equal " + p);
	                //console.log(obj1);
	                //console.log(obj2);
	                return false;
	            }
	        }
	        return true;
	    };
	    ;
	    Component.prototype.didUpdate = function (prevProps, prevState, prevContext) {
	        this.plugins.forEach(function (plug) {
	            plug.willReceiveProps(prevProps);
	        });
	    };
	    Component.prototype.willUnmount = function () {
	        this.plugins.forEach(function (plug) {
	            plug.willUnmount();
	        });
	    };
	    Component.prototype.addClassName = function (classNames) {
	        var _this = this;
	        if (classNames)
	            classNames.split(" ").forEach(function (name) {
	                if (_this.renderClasses.indexOf(name) === -1)
	                    _this.renderClasses.push(name);
	            });
	    };
	    Component.prototype.toggleClassName = function (boolValue, trueClassNames, falseClassNames) {
	        if (boolValue) {
	            this.addClassName(trueClassNames);
	            if (falseClassNames)
	                this.removeClassName(falseClassNames);
	        }
	        else {
	            this.removeClassName(trueClassNames);
	            if (falseClassNames)
	                this.addClassName(falseClassNames);
	        }
	    };
	    Component.prototype.removeClassName = function (classNames) {
	        var _this = this;
	        if (classNames)
	            classNames.split(" ").forEach(function (name) {
	                if (_this.renderClasses.indexOf(name) !== -1)
	                    _this.renderClasses.splice(_this.renderClasses.indexOf(name), 1);
	            });
	    };
	    Component.prototype.renderClassName = function () {
	        this.addClassName(this.props.className);
	        if (this.renderClasses.length > 0)
	            return this.renderClasses.join(" ");
	        else
	            return null;
	    };
	    Component.prototype.getRenderProps = function () {
	        this.renderProps.className = this.renderClassName();
	        this.renderProps.style = this.renderStyles;
	        _.assign(this.renderProps.style, this.props.style);
	        return this.renderProps;
	    };
	    // getReactElementClassName(element): string {
	    //     return element && element.type ? element.type.toString().split("(")[0].split(" ")[1] : "";
	    // }
	    Component.prototype.getChildren = function (childType) {
	        var ret = [];
	        React.Children.toArray(this.props.children).forEach(function (child) {
	            if (childType === child.type)
	                ret.push(child);
	        });
	        return ret;
	    };
	    Component.prototype.getChildrenOfProps = function (props, childType) {
	        var ret = [];
	        React.Children.toArray(props.children).forEach(function (child) {
	            if (childType === child.type)
	                ret.push(child);
	        });
	        return ret;
	    };
	    Component.prototype.showConfirmationWindow = function (messageContent, resultCallback, okButtonText, cancelButtonText) {
	        var params = {
	            style: "confirmation",
	            parentWindowId: this.getParentWindowId(),
	            okButtonContent: okButtonText || "Да",
	            cancelButtonContent: cancelButtonText || "Нет",
	            resultCallback: resultCallback
	        };
	        this.getParentDesktop().openMessageWindow(messageContent, params);
	    };
	    Component.prototype.showDeleteConfirmationWindow = function (messageContent, resultCallback, okButtonText, cancelButtonText) {
	        var params = {
	            style: "danger",
	            parentWindowId: this.getParentWindowId(),
	            okButtonContent: okButtonText || "Да",
	            cancelButtonContent: cancelButtonText || "Нет",
	            resultCallback: resultCallback
	        };
	        this.getParentDesktop().openMessageWindow(messageContent, params);
	    };
	    Component.prototype.closeParentWindow = function () {
	        this.getParentDesktop().closeWindow(this.getParentWindowId());
	    };
	    return Component;
	}(React.Component));
	exports.Component = Component;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	function throwError(error) {
	    // todo: отключить в production режиме
	    console.error(error);
	    var err;
	    if (error instanceof Error)
	        err = error;
	    else
	        err = new Error(error);
	    err.$$isThrowError = true;
	    throw err;
	}
	exports.throwError = throwError;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	var Layout = (function (_super) {
	    __extends(Layout, _super);
	    function Layout() {
	        _super.apply(this, arguments);
	    }
	    Layout.prototype.render = function () {
	        this.clearStyles();
	        this.addClassName("Layout");
	        this.addStyles({ display: "flex", position: "relative", flexDirection: this.props.type });
	        if (this.props.sizeTo === "parent") {
	            this.addStyles({ height: "100%" });
	        }
	        // if (this.props.sizeTo === "parent") {
	        //     let style: any = {
	        //         display: "flex",
	        //         height:"100%",
	        //         position: "relative",
	        //         //position: "absolute",
	        //         // left: 0,
	        //         // right: 0,
	        //         // top: 0,
	        //         // bottom: 0,
	        //
	        //        // overflow: "auto"
	        //     };
	        //     style.flexDirection = this.props.type;
	        //     this.addStyles(style);
	        // }
	        // else {
	        //     let style: any = {
	        //         display: "flex",
	        //         position: "relative",
	        //         //overflow: "auto"
	        //     };
	        //     style.flexDirection = this.props.type;
	        //     this.addStyles(style);
	        // }
	        this.addProps({ onClick: this.props.onClick });
	        return (React.createElement("div", __assign({}, this.getRenderProps()), this.props.children));
	    };
	    return Layout;
	}(Component_1.Component));
	exports.Layout = Layout;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	var Fixed = (function (_super) {
	    __extends(Fixed, _super);
	    function Fixed() {
	        _super.apply(this, arguments);
	    }
	    Fixed.prototype.render = function () {
	        this.addClassName("Fixed");
	        this.clearStyles();
	        var style = {
	            position: "relative",
	            flex: "0 0 auto"
	        };
	        this.addStyles(style);
	        return (React.createElement("div", __assign({}, this.getRenderProps()), this.props.children));
	    };
	    return Fixed;
	}(Component_1.Component));
	exports.Fixed = Fixed;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var Component_1 = __webpack_require__(5);
	var React = __webpack_require__(1);
	var Flex = (function (_super) {
	    __extends(Flex, _super);
	    function Flex() {
	        _super.apply(this, arguments);
	    }
	    Flex.prototype.render = function () {
	        this.addClassName("Flex");
	        this.clearStyles();
	        var style = {
	            flex: "1",
	            position: 'relative',
	            overflow: "auto"
	        };
	        this.addStyles(style);
	        return (React.createElement("div", __assign({}, this.getRenderProps()), this.props.children));
	    };
	    return Flex;
	}(Component_1.Component));
	exports.Flex = Flex;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var DesignedObject_1 = __webpack_require__(11);
	var StringPropertyEditor_1 = __webpack_require__(12);
	var TestBuhtaObject1 = (function (_super) {
	    __extends(TestBuhtaObject1, _super);
	    function TestBuhtaObject1() {
	        _super.apply(this, arguments);
	    }
	    __decorate([
	        StringPropertyEditor_1.StringEditor({
	            inputCaption: "Фамилия",
	            inputTab: "Главная",
	            inputGroup: "Основная",
	            inputDescription: "Фамилия абонента"
	        })
	    ], TestBuhtaObject1.prototype, "firstName", void 0);
	    __decorate([
	        StringPropertyEditor_1.StringEditor({
	            inputCaption: "Имя",
	            inputTab: "Главная",
	            inputGroup: "Основная",
	            inputDescription: "Имя"
	        })
	    ], TestBuhtaObject1.prototype, "lastName", void 0);
	    __decorate([
	        StringPropertyEditor_1.StringEditor({
	            inputCaption: "Отчество",
	            inputTab: "Главная",
	            inputGroup: "Основная",
	            inputDescription: "Отчество абонента"
	        })
	    ], TestBuhtaObject1.prototype, "surName", void 0);
	    return TestBuhtaObject1;
	}(DesignedObject_1.DesignedObject));
	exports.TestBuhtaObject1 = TestBuhtaObject1;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var DesignedObject = (function () {
	    function DesignedObject() {
	        this.$$unwatchedProps = ["propertyEditors", "$$unwatchedProps"];
	        // id: string;
	        // name: string;
	        // className: string;
	        // inheritFrom: string;
	        // moduleName: string;
	        // references: Array<string> = [];
	        //private static propertyEditors: { [propertyName: string]: PropertyEditorInfo; } = {};
	        // static registerPropertyEditor(propertyName: string,
	        //                               propertyPage: string,
	        //                               propertyGroup: string,
	        //                               propertyDescription: string,
	        //                               objectType: typeof DesignedObject,
	        //                               editorType: typeof BasePropertyEditor,
	        //                               propertyType: typeof Object | typeof String) {
	        //
	        //     let info: PropertyEditorInfo = {
	        //         propertyName: propertyName,
	        //         propertyPage: propertyPage,
	        //         propertyGroup: propertyGroup,
	        //         propertyDescription: propertyDescription,
	        //         objectType: objectType,
	        //         editorType: editorType,
	        //         propertyType: propertyType,
	        //     }
	        //
	        //     DesignedObject.propertyEditors[propertyName] = info;
	        //
	        //     console.log("registerPropertyEditor " + propertyName);
	        //     console.log(info);
	        //
	        // }
	        // get propertyEditors():{ [propertyName: string]: PropertyEditorInfo; }{
	        //     return (DesignedObject as any).$$propertyEditors;
	        // }
	        // registerPropertyEditors() {
	        //     this.propertyEditors.length = 0;
	        // }
	        //
	        //
	        // registerPropertyEditor(propertyName: string, propertyEditor: BasePropertyEditor) {
	        //     propertyEditor.designedObject = this;
	        //     propertyEditor.propertyName = propertyName;
	        //     this.propertyEditors.push(propertyEditor);
	        // }
	        // emitTsCode(): string {
	        //
	        //     this.registerPropertyEditors();
	        //
	        //     let tsCode = new TsCode(this.moduleName, this.className, this.inheritFrom, this.references);
	        //
	        //     this.propertyEditors.forEach((editor) => {
	        //         editor.designedObject = this;
	        //         editor.emitTsCode(tsCode);
	        //     });
	        //
	        //     return tsCode.getCode();
	        // }
	        this.testProc1 = function () {
	        };
	    }
	    DesignedObject.prototype.getClassName = function () {
	        return "Объект";
	    };
	    DesignedObject.prototype.toString = function () {
	        var funcNameRegex = /function (.{1,})\(/;
	        var results = (funcNameRegex).exec((this).constructor.toString());
	        return (results && results.length > 1) ? results[1] : "";
	    };
	    return DesignedObject;
	}());
	exports.DesignedObject = DesignedObject;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var BasePropertyEditor_1 = __webpack_require__(13);
	var registerPropertyEditor_1 = __webpack_require__(14);
	var Input_1 = __webpack_require__(15);
	var StringPropertyEditor = (function (_super) {
	    __extends(StringPropertyEditor, _super);
	    function StringPropertyEditor() {
	        _super.apply(this, arguments);
	    }
	    StringPropertyEditor.prototype.handleChange = function (event) {
	        // this.props.designedObject[this.props.propertyName] = (event.target as any).value;
	        // console.log("change === " + this.props.propertyName + " " + this.props.designedObject[this.props.propertyName]);
	    };
	    StringPropertyEditor.prototype.render = function () {
	        var autoFormControlProps = {
	            inputCaption: this.props.inputCaption,
	            inputTab: this.props.inputTab,
	            inputGroup: this.props.inputGroup,
	            inputDescription: this.props.inputDescription
	        };
	        this.addProps(autoFormControlProps);
	        return (React.createElement(Input_1.Input, __assign({type: Input_1.InputType.Text, bindObject: this.props.designedObject, bindPropName: this.props.propertyName, onChange: this.props.onChange}, this.getRenderProps())));
	    };
	    return StringPropertyEditor;
	}(BasePropertyEditor_1.BasePropertyEditor));
	exports.StringPropertyEditor = StringPropertyEditor;
	function StringEditor(params) {
	    if (params === void 0) { params = {}; }
	    return function (target, propertyName) {
	        //  console.log({target, propertyName, constr:target.constructor});
	        var propertyEditorInfo = {
	            propertyName: propertyName,
	            objectType: target.constructor,
	            editorType: StringPropertyEditor,
	            propertyType: String
	        };
	        _.assign(propertyEditorInfo, params);
	        registerPropertyEditor_1.registerPropertyEditor(propertyEditorInfo);
	        // registerPropertyEditor({
	        //     inputCaption: params.inputCaption,
	        //     inputTab: params.inputTab,
	        //     inputGroup: params.inputGroup,
	        //     inputDescription: params.inputDescription,
	        //     propertyName: propertyName,
	        //
	        //     objectType: target.constructor,
	        //     editorType: StringPropertyEditor,
	        //     propertyType: String
	        // });
	    };
	}
	exports.StringEditor = StringEditor;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	var BasePropertyEditor = (function (_super) {
	    __extends(BasePropertyEditor, _super);
	    function BasePropertyEditor(props, context) {
	        _super.call(this, props, context);
	    }
	    // propertyName: string;
	    // designedObject: DesignedObject;
	    // getPropertyType(): string {
	    //     return "Object";
	    // }
	    // renderEditor(index: number): JSX.Element {
	    //     return (<span>editor not defined</span>);
	    // }
	    BasePropertyEditor.prototype.render = function () {
	        return (React.createElement("span", null, "property editor not defined"));
	    };
	    return BasePropertyEditor;
	}(Component_1.Component));
	exports.BasePropertyEditor = BasePropertyEditor;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	function registerPropertyEditor(editor) {
	    var objType = editor.objectType;
	    if (!objType.$$propertyEditors)
	        objType.$$propertyEditors = [];
	    objType.$$propertyEditors.push(editor);
	    //console.log("registerPropertyEditor " + editor.propertyName);
	    //console.log(editor);
	}
	exports.registerPropertyEditor = registerPropertyEditor;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	(function (InputType) {
	    InputType[InputType["Text"] = 0] = "Text";
	    InputType[InputType["Number"] = 1] = "Number";
	    InputType[InputType["Date"] = 2] = "Date";
	})(exports.InputType || (exports.InputType = {}));
	var InputType = exports.InputType;
	var Input = (function (_super) {
	    __extends(Input, _super);
	    function Input(props, context) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.getText = function () {
	            if (_this.props.bindObject && _this.props.bindPropName) {
	                if (_this.props.bindObject[_this.props.bindPropName])
	                    return _this.props.bindObject[_this.props.bindPropName].toString();
	                else
	                    return "";
	            }
	            else
	                return "<unbinded>";
	        };
	        this.handleOnChange = function (event) {
	            if (_this.props.bindObject && _this.props.bindPropName)
	                _this.props.bindObject[_this.props.bindPropName] = event.target.value;
	            _this.forceUpdate();
	            if (_this.props.onChange)
	                _this.props.onChange();
	        };
	        this.props = props;
	    }
	    Input.prototype.willMount = function () {
	        _super.prototype.willMount.call(this);
	    };
	    Input.prototype.render = function () {
	        switch (this.props.type) {
	            case InputType.Text:
	                return this.renderText();
	            default:
	                throw "Input.render():=> unknown InputType '" + this.props.type + "'";
	        }
	    };
	    Input.prototype.renderText = function () {
	        this.clearStyles();
	        this.addClassName("input");
	        this.addStyles(this.props.style);
	        return (React.createElement("input", __assign({type: "text", value: this.getText(), onChange: this.handleOnChange}, this.getRenderProps())));
	    };
	    return Input;
	}(Component_1.Component));
	exports.Input = Input;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var DesignedObject_1 = __webpack_require__(11);
	var BasePropertyEditor_1 = __webpack_require__(13);
	var getPropertyEditors_1 = __webpack_require__(17);
	var AutoForm_1 = __webpack_require__(18);
	var Snapshot_1 = __webpack_require__(25);
	var Observable_1 = __webpack_require__(26);
	var DeepClone_1 = __webpack_require__(27);
	var ObjectDesigner = (function (_super) {
	    __extends(ObjectDesigner, _super);
	    function ObjectDesigner(props, context) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.snapshot = new Snapshot_1.Snapshot();
	        this.needToSave = false;
	        this.handleSaveChanges = function () {
	            console.log("save-changes");
	            //console.log(this.props.designedObject);
	            _.assign(_this.props.designedObject, _this.observableDesignedObject);
	            if (_this.props.onSaveChanges)
	                _this.props.onSaveChanges();
	        };
	        this.handleCancelChanges = function () {
	            console.log("cancel-changes");
	            //this.snapshot.restoreObject(this.props.designedObject, "root");
	            if (_this.props.onCancelChanges)
	                _this.props.onCancelChanges();
	            //console.log(this.props.designedObject);
	        };
	        this.props = props;
	    }
	    ObjectDesigner.prototype.willMount = function () {
	        var _this = this;
	        _super.prototype.willMount.call(this);
	        this.needToSave = false;
	        this.clonedDesignedObject = DeepClone_1.DeepClone(this.props.designedObject);
	        console.log("cloned");
	        console.log(this.props.designedObject);
	        console.log(this.clonedDesignedObject);
	        this.observableDesignedObject = Observable_1.Observable(this.clonedDesignedObject, function () {
	            _this.needToSave = true;
	            _this.forceUpdate();
	        });
	    };
	    ObjectDesigner.prototype.didMount = function () {
	        _super.prototype.didMount.call(this);
	        //this.snapshot.saveObject(this.props.designedObject, "root");
	    };
	    ObjectDesigner.prototype.renderPropertyDesigners = function () {
	        var _this = this;
	        var ret = [];
	        getPropertyEditors_1.getPropertyEditors(this.observableDesignedObject).forEach(function (propInfo, index) {
	            //console.log(propInfo);
	            var editorProps = {
	                designedObject: _this.observableDesignedObject,
	                //propertyEditorInfo: propInfo,
	                index: index,
	                key: index,
	                onChange: _this.props.onChange,
	                // это из propInfo: PropertyEditorInfo, заполяется далее через _.assign
	                propertyName: "",
	                objectType: DesignedObject_1.DesignedObject,
	                editorType: BasePropertyEditor_1.BasePropertyEditor,
	                propertyType: null
	            };
	            _.assign(editorProps, propInfo);
	            if (!editorProps.inputCaption)
	                editorProps.inputCaption = editorProps.propertyName;
	            //console.log(editorProps);
	            ret.push(React.createElement(propInfo.editorType, editorProps, {}));
	        });
	        return ret;
	    };
	    // handleGetNeedToSave = (): boolean => {
	    //     return this.needToSave;
	    // }
	    ObjectDesigner.prototype.render = function () {
	        this.addClassName("object-designer");
	        this.addProps({ onChange: this.props.onChange });
	        return (React.createElement(AutoForm_1.AutoForm, __assign({sizeTo: "parent", onSaveChanges: this.handleSaveChanges, onCancelChanges: this.handleCancelChanges, needToSave: this.needToSave}, this.getRenderProps()), 
	            "Object designer", 
	            this.renderPropertyDesigners()));
	    };
	    return ObjectDesigner;
	}(Component_1.Component));
	exports.ObjectDesigner = ObjectDesigner;


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	function getPropertyEditors(obj) {
	    var editors = obj.constructor.$$propertyEditors;
	    editors = editors.filter(function (edt) { return obj instanceof edt.objectType; });
	    //console.log("getPropertyEditors") ;
	    //console.log(editors);
	    return editors;
	}
	exports.getPropertyEditors = getPropertyEditors;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var Tabs_1 = __webpack_require__(19);
	var Form_1 = __webpack_require__(20);
	var Layout_1 = __webpack_require__(7);
	var Flex_1 = __webpack_require__(9);
	var Fixed_1 = __webpack_require__(8);
	var Button_1 = __webpack_require__(21);
	var emptyTabName = "закладка";
	var AutoForm = (function (_super) {
	    __extends(AutoForm, _super);
	    function AutoForm() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.handleSaveButtonClick = function (sender, e) {
	            if (_this.props.onSaveChanges)
	                _this.props.onSaveChanges();
	            _this.getParentWindow().close();
	            e.stopPropagation();
	        };
	        this.handleCancelButtonClick = function (sender, e) {
	            if (_this.props.onCancelChanges)
	                _this.props.onCancelChanges();
	            _this.getParentWindow().close();
	            e.stopPropagation();
	        };
	    }
	    AutoForm.prototype.getInputs = function () {
	        return React.Children.toArray(this.props.children)
	            .filter(function (c) { return c.props; })
	            .map(function (c) { return c.props; });
	    };
	    AutoForm.prototype.getTabsList = function () {
	        return _.uniq(this.getInputs().map(function (input) {
	            return input.inputTab || "";
	        }));
	    };
	    AutoForm.prototype.getTabInputs = function (tab) {
	        return React.Children.toArray(this.props.children)
	            .filter(function (c) {
	            return c.props &&
	                ((c.props.inputTab || "") === tab);
	        });
	    };
	    AutoForm.prototype.renderTab = function (tab) {
	        return React.createElement(Form_1.Form, {sizeTo: this.props.sizeTo}, this.getTabInputs(tab));
	    };
	    AutoForm.prototype.renderTabs = function () {
	        var _this = this;
	        var tabs = this.getTabsList();
	        //console.log(tabs);
	        //console.log(this.getInputs());
	        if (tabs.length === 0) {
	            return null;
	        }
	        else if (tabs.length === 1) {
	            return this.renderTab(tabs[0]);
	        }
	        else {
	            return (React.createElement(Tabs_1.Tabs, {sizeTo: "parent", onWillMount: function (state) { console.log("onWillMount-auto-form-tabs"); }, onChangeActiveTab: function (state, tab) { console.log("setActiveTab"); console.log(tab); }}, tabs.map(function (tab, index) {
	                return (React.createElement(Tabs_1.Tab, {key: index, title: tab === "" ? emptyTabName : tab}, _this.renderTab(tab)));
	            })));
	        }
	    };
	    AutoForm.prototype.render = function () {
	        this.addClassName("auto-form");
	        console.log("render-auto-form");
	        if (this.props.sizeTo === "parent") {
	            var style = {
	                position: "relative",
	                height: "100%"
	            };
	            this.addStyles(style);
	        }
	        else {
	            var style = {
	                position: "relative",
	            };
	            this.addStyles(style);
	        }
	        return (React.createElement("div", __assign({}, this.getRenderProps()), 
	            React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent"}, 
	                React.createElement(Flex_1.Flex, null, this.renderTabs()), 
	                React.createElement(Fixed_1.Fixed, null, 
	                    React.createElement(Layout_1.Layout, {className: "auto-form-footer", type: "row", sizeTo: "content"}, 
	                        React.createElement(Flex_1.Flex, null), 
	                        React.createElement(Fixed_1.Fixed, null, 
	                            React.createElement(Button_1.Button, {visible: this.props.needToSave, className: "is-success is-outlined", onClick: this.handleSaveButtonClick}, "Сохранить"), 
	                            React.createElement(Button_1.Button, {onClick: this.handleCancelButtonClick}, this.props.needToSave ? "Отмена" : "Закрыть")))
	                ))
	        ));
	    };
	    return AutoForm;
	}(Component_1.Component));
	exports.AutoForm = AutoForm;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	var Layout_1 = __webpack_require__(7);
	var Fixed_1 = __webpack_require__(8);
	var Flex_1 = __webpack_require__(9);
	var TabsState = (function (_super) {
	    __extends(TabsState, _super);
	    function TabsState() {
	        _super.apply(this, arguments);
	        this.tabs = [];
	    }
	    TabsState.prototype.setActiveTab = function (tabInfo) {
	        if (!tabInfo.isActive) {
	            this.tabs.forEach(function (tab) { return tab.isActive = false; });
	            tabInfo.isActive = true;
	            if (this.component.props.onChangeActiveTab)
	                this.component.props.onChangeActiveTab(this, tabInfo);
	            this.forceUpdate();
	        }
	    };
	    return TabsState;
	}(Component_1.ComponentState));
	exports.TabsState = TabsState;
	var TabInfo = (function () {
	    function TabInfo() {
	    }
	    return TabInfo;
	}());
	exports.TabInfo = TabInfo;
	var Tabs = (function (_super) {
	    __extends(Tabs, _super);
	    function Tabs(props, context) {
	        _super.call(this, props, context);
	        this.props = props;
	        this.state = new TabsState(this);
	    }
	    Tabs.prototype.createInitTabsState = function () {
	        var _this = this;
	        var tabTags = this.getChildren(Tab);
	        tabTags.forEach(function (tabTag, index) {
	            var tabProps = tabTag.props;
	            var tabInfo = {
	                title: tabProps.title,
	                content: tabProps.children,
	                isActive: index === 0
	            };
	            _this.state.tabs.push(tabInfo);
	        });
	    };
	    Tabs.prototype.willMount = function () {
	        this.createInitTabsState();
	        _super.prototype.willMount.call(this);
	        // let tabTags = this.getChildren(Tab);
	        //
	        // tabTags.forEach((tabTag, index) => {
	        //
	        //     let tabProps = tabTag.props as TabProps;
	        //
	        //     let tabInfo: TabInfo = {
	        //         title: tabProps.title,
	        //         content: tabProps.children,
	        //         isActive: index === 0
	        //     }
	        //
	        //     this.tabs.push(tabInfo);
	        // });
	    };
	    // openWindow(win: JSX.Element): WindowInfo {
	    //     let modal = document.createElement('div');
	    //     modal.id = Math.random().toString(36).slice(2, 12);
	    //     // для поднятия вверх при активации окна
	    //     modal.onclick = (e)=> {
	    //         setTimeout(()=> {
	    //             if (modal.id !== "deleted")
	    //                 this.nativeElement.appendChild(modal);
	    //         }, 1);
	    //     }
	    //
	    //     this.nativeElement.appendChild(modal);
	    //
	    //     let winInstance = ReactDOM.render(win, modal) as Window;
	    //
	    //     let info: WindowInfo = {
	    //         id: modal.id,
	    //         winInstance: winInstance,
	    //         divWrapper: modal
	    //     };
	    //
	    //     this.windows.push(info);
	    //
	    //     return info;
	    // };
	    //
	    // closeWindow(win: Window) {
	    //
	    //     this.windows.forEach((info, index)=> {
	    //         if (info.winInstance === win) {
	    //             info.divWrapper.id = "deleted";
	    //             this.nativeElement.removeChild(info.divWrapper);
	    //             delete this.windows[index];
	    //             return;
	    //         }
	    //     });
	    // }
	    //
	    // activateWindow(win: Window) {
	    //
	    //     this.windows.forEach((info, index)=> {
	    //         if (info.winInstance === win) {
	    //             this.nativeElement.appendChild(info.divWrapper);
	    //             return;
	    //         }
	    //     });
	    // }
	    Tabs.prototype.renderTabs = function () {
	        var _this = this;
	        var list = [];
	        this.state.tabs.forEach(function (tabInfo, index) {
	            var className = tabInfo.isActive ? "is-active" : null;
	            var element = React.createElement("li", {className: className, key: index, onClick: function (e) { _this.state.setActiveTab(tabInfo); }}, 
	                React.createElement("a", null, tabInfo.title)
	            );
	            list.push(element);
	        });
	        return (React.createElement("div", {className: "tabs"}, 
	            React.createElement("ul", null, list)
	        ));
	    };
	    Tabs.prototype.renderPanels = function () {
	        var _this = this;
	        var list = [];
	        this.state.tabs.forEach(function (tabInfo, index) {
	            var style = { paddingTop: 10, paddingBottom: 10 };
	            if (_this.props.sizeTo === "parent")
	                style.height = "100%";
	            var className = !tabInfo.isActive ? "is-hidden" : null;
	            var element = React.createElement("div", {className: className, key: index, style: style}, tabInfo.content);
	            list.push(element);
	        });
	        return list;
	        // return (
	        //     <div ref>
	        //         {list}
	        //     </div>
	        // )
	    };
	    Tabs.prototype.render = function () {
	        var _this = this;
	        this.addStyles({ height: "100%" });
	        this.addStyles({ position: "relative", overflow: "auto" });
	        return (React.createElement(Layout_1.Layout, __assign({sizeTo: this.props.sizeTo, type: "column", ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), 
	            React.createElement(Fixed_1.Fixed, null, this.renderTabs()), 
	            React.createElement(Flex_1.Flex, null, this.renderPanels())));
	    };
	    return Tabs;
	}(Component_1.Component));
	exports.Tabs = Tabs;
	var Tab = (function (_super) {
	    __extends(Tab, _super);
	    function Tab(props, context) {
	        _super.call(this, props, context);
	        this.props = props;
	    }
	    return Tab;
	}(Component_1.Component));
	exports.Tab = Tab;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	var Form = (function (_super) {
	    __extends(Form, _super);
	    function Form(props, context) {
	        _super.call(this, props, context);
	        this.props = props;
	    }
	    Form.prototype.renderControls = function () {
	        var list = [];
	        React.Children.toArray(this.props.children).forEach(function (control, index) {
	            var controlProps = control.props;
	            if (controlProps && (controlProps.inputCaption || controlProps.bindPropName)) {
	                // if (control.type === InputDivider) {
	                //     console.log("InputDivider");
	                // }
	                var node = React.createElement("tr", {className: "control", key: index}, 
	                    React.createElement("td", {style: { textAlign: "right", verticalAlign: "middle" }}, 
	                        React.createElement("span", {className: "caption"}, controlProps.inputCaption ? controlProps.inputCaption : controlProps.bindPropName)
	                    ), 
	                    React.createElement("td", {style: { textAlign: "left", verticalAlign: "middle" }}, 
	                        React.createElement("div", {className: "control"}, control)
	                    ));
	                list.push(node);
	            }
	            else {
	                var node = React.createElement("tr", {className: "control", key: index}, 
	                    React.createElement("td", {colSpan: "10", style: { textAlign: "left", verticalAlign: "middle" }}, 
	                        React.createElement("div", {className: "control"}, control)
	                    )
	                );
	                list.push(node);
	            }
	        });
	        return list;
	    };
	    Form.prototype.render = function () {
	        var _this = this;
	        this.addClassName("form");
	        //this.addStyles({margin:10});
	        if (React.Children.toArray(this.props.children).length === 1) {
	            if (this.props.sizeTo === "parent")
	                this.addStyles({ height: "100%" });
	            return React.createElement("div", __assign({}, this.getRenderProps()), this.props.children);
	        }
	        else {
	            this.addStyles({ width: "inherit" });
	            return (React.createElement("table", __assign({ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), 
	                React.createElement("tbody", null, this.renderControls())
	            ));
	        }
	    };
	    return Form;
	}(Component_1.Component));
	exports.Form = Form;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var VisiblePlugin_1 = __webpack_require__(22);
	var OnClickPlugin_1 = __webpack_require__(24);
	var Component_1 = __webpack_require__(5);
	var ButtonState = (function (_super) {
	    __extends(ButtonState, _super);
	    function ButtonState() {
	        _super.apply(this, arguments);
	    }
	    return ButtonState;
	}(Component_1.ComponentState));
	exports.ButtonState = ButtonState;
	//@VisiblePlugin
	//@OnClickPlugin
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button(props, context) {
	        _super.call(this, props, context);
	        this.props = props;
	        this.state = new ButtonState(this);
	        this.plugins.push(new VisiblePlugin_1.VisiblePlugin(this));
	        this.plugins.push(new OnClickPlugin_1.OnClickPlugin(this));
	    }
	    Button.prototype.render = function () {
	        this.addClassName("button");
	        return (React.createElement("a", __assign({}, this.getRenderProps()), this.props.children));
	    };
	    return Button;
	}(Component_1.Component));
	exports.Button = Button;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Plugin_1 = __webpack_require__(23);
	var VisiblePlugin = (function (_super) {
	    __extends(VisiblePlugin, _super);
	    function VisiblePlugin() {
	        _super.apply(this, arguments);
	    }
	    // constructor(owner: any) {
	    //     super(owner);
	    // }
	    VisiblePlugin.prototype.willMount = function () {
	        _super.prototype.willMount.call(this);
	        //console.log("visible willMount()")
	        if (this.props.visible !== undefined && this.props.defaultVisible !== undefined) {
	            console.error("VisiblePlugin: only one of the properties must be specified 'visible' or 'defaultVisible'");
	        }
	        if (this.props.visible !== undefined) {
	            this.state.visible = this.props.visible;
	        }
	        else if (this.props.defaultVisible !== undefined) {
	            this.state.visible = this.props.defaultVisible;
	        }
	        else
	            this.state.visible = true;
	        this.owner.toggleClassName(!this.state.visible, "is-hidden");
	    };
	    VisiblePlugin.prototype.willReceiveProps = function (nextProps) {
	        //let state = this.owner.state as VisiblePluginState;
	        if (nextProps.visible !== undefined) {
	            this.state.visible = nextProps.visible;
	        }
	        else
	            this.state.visible = true;
	        this.owner.toggleClassName(!this.state.visible, "is-hidden");
	    };
	    return VisiblePlugin;
	}(Plugin_1.ComponentPlugin));
	exports.VisiblePlugin = VisiblePlugin;
	// export function VisiblePlugin(target: any) {
	//     target.plugins.push(VisiblePluginClass);
	//     return target;
	// }


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	var ComponentPlugin = (function () {
	    function ComponentPlugin(owner) {
	        this.owner = owner;
	    }
	    ComponentPlugin.prototype.didMount = function () {
	    };
	    ComponentPlugin.prototype.willMount = function () {
	    };
	    ComponentPlugin.prototype.willUnmount = function () {
	    };
	    ComponentPlugin.prototype.willReceiveProps = function (nextProps) {
	    };
	    ComponentPlugin.prototype.didUpdate = function (prevProps, prevState, prevContext) {
	    };
	    Object.defineProperty(ComponentPlugin.prototype, "state", {
	        get: function () {
	            return this.owner.state;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentPlugin.prototype, "props", {
	        get: function () {
	            return this.owner.props;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return ComponentPlugin;
	}());
	exports.ComponentPlugin = ComponentPlugin;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Plugin_1 = __webpack_require__(23);
	var OnClickPlugin = (function (_super) {
	    __extends(OnClickPlugin, _super);
	    function OnClickPlugin() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.handleClick = function (event) {
	            if (_this.props.onClick) {
	                _this.props.onClick(_this.owner, event);
	            }
	        };
	    }
	    OnClickPlugin.prototype.willMount = function () {
	        _super.prototype.willMount.call(this);
	        this.owner.addProps({ onClick: this.handleClick });
	    };
	    OnClickPlugin.prototype.willReceiveProps = function (nextProps) {
	        _super.prototype.willReceiveProps.call(this, nextProps);
	        this.owner.addProps({ onClick: this.handleClick });
	    };
	    return OnClickPlugin;
	}(Plugin_1.ComponentPlugin));
	exports.OnClickPlugin = OnClickPlugin;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
	var Error_1 = __webpack_require__(6);
	// объект может иметь массивы:
	// $$unsavedProps - имена свойств, которые не сохраняются
	// $$savedByRefProps - имена свойств, которые сохраняются как ссылки
	// не сохраняются свойства, которые начинаются с $$
	var Snapshot = (function () {
	    function Snapshot() {
	        this.snapshots = [];
	    }
	    Snapshot.prototype.saveObject = function (obj, snapshotName) {
	        var snap = new InternalSnapshot();
	        snap.obj = obj;
	        snap.snapshotName = snapshotName;
	        snap.saveProps();
	        this.snapshots.push(snap);
	    };
	    Snapshot.prototype.restoreObject = function (obj, snapshotName) {
	        var snap = this.getInternalSnapshot(obj, snapshotName);
	        if (snap) {
	            if (_.isArray(obj)) {
	                obj.length = 0;
	                snap.arrayElements.forEach(function (element) { return obj.push(element); });
	            }
	            else {
	                snap.objProps.forEach(function (prop) { return prop.restoreValue(); });
	            }
	        }
	    };
	    Snapshot.prototype.getInternalSnapshot = function (obj, snapshotName) {
	        var ret = this.snapshots.filter(function (snap) { return snap.obj === obj && snap.snapshotName === snapshotName; });
	        if (ret.length === 0) {
	            Error_1.throwError("Snapshot '" + snapshotName + "' not found");
	            throw "fake";
	        }
	        else
	            return ret[0];
	    };
	    return Snapshot;
	}());
	exports.Snapshot = Snapshot;
	var InternalSnapshot = (function () {
	    function InternalSnapshot() {
	        this.objProps = [];
	        this.refsClones = {};
	    }
	    InternalSnapshot.prototype.saveProps = function () {
	        var _this = this;
	        if (_.isArray(this.obj)) {
	            this.arrayElements = this.obj.map(function (v) { return _this.cloneValue(v); });
	        }
	        else {
	            this.objProps = [];
	            for (var propName in this.obj) {
	                if (this.obj.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {
	                    var p = new SnapshotProperty();
	                    p.propName = propName;
	                    p.snapshot = this;
	                    p.saveValue();
	                    this.objProps.push(p);
	                }
	            }
	        }
	    };
	    InternalSnapshot.prototype.cloneValue = function (value) {
	        var _this = this;
	        if (value === this.obj) {
	            return value;
	        }
	        else if (_.isArray(value)) {
	            return value.map(function (v) { return _this.cloneValue(v); });
	        }
	        else if (_.isFunction(value)) {
	            return value;
	        }
	        else if (_.isObject(value)) {
	            //let refsIndex = this.snapshot.refs.indexOf(value);
	            if (value.$$uniqueObjectId)
	                return this.refsClones[value.$$uniqueObjectId];
	            var valueCopy = new value.constructor();
	            valueCopy.$$isClone = true;
	            value.$$uniqueObjectId = Math.random().toString(36).slice(2, 16);
	            this.refsClones[value.$$uniqueObjectId] = valueCopy;
	            for (var propName in value) {
	                if (value.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {
	                    valueCopy[propName] = this.cloneValue(value[propName]);
	                }
	            }
	            return valueCopy;
	        }
	        else {
	            return value;
	        }
	    };
	    return InternalSnapshot;
	}());
	var SnapshotProperty = (function () {
	    function SnapshotProperty() {
	    }
	    SnapshotProperty.prototype.saveValue = function () {
	        this.propValue = this.snapshot.cloneValue(this.snapshot.obj[this.propName]);
	    };
	    SnapshotProperty.prototype.restoreValue = function () {
	        this.snapshot.obj[this.propName] = this.propValue;
	    };
	    return SnapshotProperty;
	}());


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
	var Error_1 = __webpack_require__(6);
	// не сохраняются свойства, которые начинаются с $$
	function Observable(obj, onChangeCallback) {
	    if (!obj)
	        Error_1.throwError("Observable(): obj === null ");
	    var proxyHandler = {
	        set: function (target, p, value, receiver) {
	            if (p.toString().substr(0, 2) !== "$$") {
	                if (!target.$$changeCount)
	                    target.$$changeCount = 1;
	                else
	                    target.$$changeCount++;
	                if (target.$$onChange)
	                    target.$$onChange(target, p, target[p], value);
	                if (_.isArray(value))
	                    processArray(value, proxyHandler, onChangeCallback);
	                else if (_.isObject(value))
	                    processObject(value, proxyHandler, onChangeCallback);
	                console.log({ observableSetTaget: target, prop: p, value: value });
	            }
	            target[p] = value;
	            return true;
	        }
	    };
	    processObject(obj, proxyHandler, onChangeCallback);
	    var observableObject = new Proxy(obj, proxyHandler);
	    return observableObject;
	}
	exports.Observable = Observable;
	function processObject(obj, proxyHandler, onChangeCallback) {
	    if (!obj)
	        return;
	    obj.$$onChange = onChangeCallback;
	    for (var propName in obj) {
	        if (obj.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {
	            var propValue = obj[propName];
	            if (_.isArray(propValue)) {
	                propValue.$$changeCount = 0;
	                processArray(propValue, proxyHandler, onChangeCallback);
	                obj[propName] = new Proxy(propValue, proxyHandler);
	            }
	            else if (_.isObject(propValue)) {
	                propValue.$$changeCount = 0;
	                processObject(propValue, proxyHandler, onChangeCallback);
	                obj[propName] = new Proxy(propValue, proxyHandler);
	            }
	        }
	    }
	}
	function processArray(obj, proxyHandler, onChangeCallback) {
	    if (!obj)
	        return;
	    obj.$$onChange = onChangeCallback;
	    obj.forEach(function (arrayItem, index) {
	        if (_.isArray(arrayItem)) {
	            arrayItem.$$changeCount = 0;
	            processArray(arrayItem, proxyHandler, onChangeCallback);
	            obj[index] = new Proxy(arrayItem, proxyHandler);
	        }
	        else if (_.isObject(arrayItem)) {
	            arrayItem.$$changeCount = 0;
	            processObject(arrayItem, proxyHandler, onChangeCallback);
	            obj[index] = new Proxy(arrayItem, proxyHandler);
	        }
	    });
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
	var Error_1 = __webpack_require__(6);
	function DeepClone(obj) {
	    if (!obj)
	        Error_1.throwError("DeepClone(): obj === null");
	    var refsClones = {};
	    if (_.isArray(obj))
	        return cloneArray(obj, refsClones);
	    else
	        return cloneObject(obj, refsClones);
	}
	exports.DeepClone = DeepClone;
	function cloneObject(obj, refsClones) {
	    if (!obj)
	        return undefined;
	    if (obj.$$uniqueObjectId && refsClones[obj.$$uniqueObjectId])
	        return refsClones[obj.$$uniqueObjectId];
	    var cloned = new obj.constructor();
	    cloned.$$isClone = true;
	    obj.$$uniqueObjectId = Math.random().toString(36).slice(2, 16);
	    refsClones[obj.$$uniqueObjectId] = cloned;
	    for (var propName in obj) {
	        if (obj.hasOwnProperty(propName)) {
	            var propValue = obj[propName];
	            if (propName.substring(0, 2) !== "$$") {
	                if (_.isArray(propValue)) {
	                    cloned[propName] = cloneArray(propValue, refsClones);
	                }
	                else if (_.isObject(propValue)) {
	                    cloned[propName] = cloneObject(propValue, refsClones);
	                }
	                else
	                    cloned[propName] = obj[propName];
	            }
	            else {
	                cloned[propName] = cloneObject$$(propValue, refsClones);
	            }
	        }
	    }
	    return cloned;
	}
	function cloneObject$$(obj, refsClones) {
	    if (!obj)
	        return undefined;
	    if (obj.$$uniqueObjectId && refsClones[obj.$$uniqueObjectId])
	        return refsClones[obj.$$uniqueObjectId];
	    else
	        return obj;
	}
	function cloneArray(obj, refsClones) {
	    if (!obj)
	        return undefined;
	    if (obj.$$uniqueObjectId && refsClones[obj.$$uniqueObjectId])
	        return refsClones[obj.$$uniqueObjectId];
	    var cloned = [];
	    cloned.$$isClone = true;
	    obj.$$uniqueObjectId = Math.random().toString(36).slice(2, 16);
	    refsClones[obj.$$uniqueObjectId] = cloned;
	    obj.forEach(function (arrayItem) {
	        if (_.isArray(arrayItem)) {
	            cloned.push(cloneArray(arrayItem, refsClones));
	        }
	        else if (_.isObject(arrayItem)) {
	            cloned.push(cloneObject(arrayItem, refsClones));
	        }
	        else
	            cloned.push(arrayItem);
	    });
	    return cloned;
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var App_1 = __webpack_require__(29);
	var Window_1 = __webpack_require__(31);
	var Button_1 = __webpack_require__(21);
	var DesktopState = (function (_super) {
	    __extends(DesktopState, _super);
	    function DesktopState() {
	        _super.apply(this, arguments);
	        this.windows = []; // последнее активно
	    }
	    return DesktopState;
	}(Component_1.ComponentState));
	exports.DesktopState = DesktopState;
	var DesktopWindow = (function () {
	    function DesktopWindow() {
	    }
	    return DesktopWindow;
	}());
	exports.DesktopWindow = DesktopWindow;
	var Desktop = (function (_super) {
	    __extends(Desktop, _super);
	    function Desktop(props, context) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.handleActivate = function (state) {
	            _this.activateWindow(state.id);
	        };
	        this.handleClose = function (state) {
	            // this.closeWindow(state.id);
	        };
	        this.props = props;
	        this.state = new DesktopState(this);
	    }
	    Desktop.prototype.willMount = function () {
	        _super.prototype.willMount.call(this);
	        if (App_1.appInstance)
	            App_1.appInstance.desktop = this;
	    };
	    //    private windows: WindowInfo[] = [];
	    Desktop.prototype.openWindow = function (winContent, openParams) {
	        if (!openParams)
	            openParams = {};
	        var newWin = new DesktopWindow();
	        newWin.content = winContent;
	        newWin.title = openParams.title || ".";
	        newWin.id = Math.random().toString(36).slice(2, 12);
	        newWin.left = openParams.left;
	        newWin.top = openParams.top;
	        newWin.height = openParams.height;
	        newWin.width = openParams.width;
	        newWin.right = openParams.right;
	        newWin.bottom = openParams.bottom;
	        if (!newWin.left) {
	            if (!newWin.right && !newWin.width) {
	                newWin.left = 50;
	                newWin.width = 500;
	            }
	            else if (newWin.right) {
	                newWin.width = 500;
	            }
	            else {
	                newWin.left = 50;
	            }
	        }
	        else {
	            if (!newWin.right && !newWin.width) {
	                newWin.width = 500;
	            }
	        }
	        if (!newWin.top) {
	            if (!newWin.bottom && !newWin.height) {
	                newWin.top = 50;
	                newWin.height = 400;
	            }
	            else if (newWin.bottom) {
	                newWin.height = 400;
	            }
	            else {
	                newWin.top = 50;
	            }
	        }
	        else {
	            if (!newWin.bottom && !newWin.height) {
	                newWin.height = 400;
	            }
	        }
	        newWin.autoPosition = openParams.autoPosition;
	        newWin.autoSize = openParams.autoSize;
	        newWin.minHeight = openParams.minHeight || 100;
	        newWin.minWidth = openParams.minWidth || 100;
	        newWin.parentWindowId = openParams.parentWindowId;
	        if (newWin.parentWindowId) {
	            this.getWindowById(newWin.parentWindowId).disabled = true;
	        }
	        this.state.windows.push(newWin);
	        this.forceUpdate();
	    };
	    ;
	    Desktop.prototype.openMessageWindow = function (winContent, openParams) {
	        if (!openParams)
	            openParams = { style: "information" };
	        var winParams = {
	            title: openParams.title,
	            parentWindowId: openParams.parentWindowId,
	            autoPosition: "parent-center",
	            autoSize: "content"
	        };
	        if (!winParams.parentWindowId)
	            winParams.autoPosition = "desktop-center";
	        var buttonStyle = { minWidth: 65, marginLeft: 8 };
	        var okButton = [];
	        if (openParams.okButtonContent) {
	            var buttonClassName = "is-outlined";
	            if (openParams.style === "danger")
	                buttonClassName += " is-danger";
	            okButton =
	                React.createElement(Button_1.Button, {className: buttonClassName, style: buttonStyle, onClick: function (sender, e) {
	                    sender.closeParentWindow();
	                    if (openParams && openParams.resultCallback)
	                        openParams.resultCallback(true);
	                    e.stopPropagation();
	                }}, openParams.okButtonContent);
	        }
	        var cancelButton = [];
	        if (openParams.cancelButtonContent) {
	            cancelButton =
	                React.createElement(Button_1.Button, {className: "is-outlined", style: buttonStyle, onClick: function (sender, e) {
	                    sender.closeParentWindow();
	                    if (openParams && openParams.resultCallback)
	                        openParams.resultCallback(false);
	                    e.stopPropagation();
	                }}, openParams.cancelButtonContent);
	        }
	        var win = React.createElement("div", {style: { minWidth: 200, textAlign: "center" }}, 
	            winContent, 
	            React.createElement("div", {style: { padding: 10 }}, 
	                okButton, 
	                cancelButton));
	        console.log(openParams);
	        this.openWindow(win, winParams);
	    };
	    ;
	    Desktop.prototype.activateWindow = function (id) {
	        var win = this.getTopParentWindow(id);
	        if (win && this.state.windows.indexOf(win) !== this.state.windows.length - 1) {
	            _.pull(this.state.windows, win);
	            this.state.windows.push(win);
	            this.forceUpdate();
	            // поднимаем дочерние окна
	            var childWin = this.state.windows.filter(function (w) { return w.parentWindowId === win.id; })[0];
	            if (childWin)
	                this.activateChildWindow(childWin.id);
	        }
	    };
	    Desktop.prototype.activateChildWindow = function (id) {
	        var win = this.getWindowById(id);
	        if (win && this.state.windows.indexOf(win) !== this.state.windows.length - 1) {
	            _.pull(this.state.windows, win);
	            this.state.windows.push(win);
	            this.forceUpdate();
	            // поднимаем дочерние окна
	            var childWin = this.state.windows.filter(function (w) { return w.parentWindowId === win.id; })[0];
	            if (childWin)
	                this.activateWindow(childWin.id);
	        }
	    };
	    Desktop.prototype.getTopParentWindow = function (id) {
	        var topParent = this.getWindowById(id);
	        while (topParent && topParent.parentWindowId) {
	            topParent = this.getWindowById(topParent.parentWindowId);
	        }
	        return topParent;
	    };
	    Desktop.prototype.getWindowById = function (id) {
	        for (var _i = 0, _a = this.state.windows; _i < _a.length; _i++) {
	            var w = _a[_i];
	            if (w.id === id)
	                return w;
	        }
	        console.warn("DesktopWindow id='" + id + "' not found");
	        return null;
	    };
	    Desktop.prototype.closeWindow = function (id) {
	        var win = this.getWindowById(id);
	        _.pull(this.state.windows, win);
	        if (win && win.parentWindowId) {
	            this.activateWindow(win.parentWindowId);
	            this.getWindowById(win.parentWindowId).disabled = false;
	        }
	        this.forceUpdate();
	    };
	    Desktop.prototype.didMount = function () {
	        _super.prototype.didMount.call(this);
	        this.nativeElement["$$desktop"] = this;
	    };
	    Desktop.prototype.render = function () {
	        var _this = this;
	        this.addClassName("desktop");
	        this.addStyles({ height: "100%" });
	        this.addStyles({ position: "relative", overflow: "auto" });
	        return (React.createElement("div", __assign({ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), this.state.windows.map(function (w, index) {
	            console.log("render-desktop-win");
	            return (React.createElement(Window_1.Window, {key: w.id, id: w.id, title: w.title, top: w.top, left: w.left, width: w.width, height: w.height, right: w.right, bottom: w.bottom, disabled: w.disabled, minWidth: w.minWidth, minHeight: w.minHeight, autoSize: w.autoSize, autoPosition: w.autoPosition, parentWindowId: w.parentWindowId, onActivate: _this.handleActivate, onClose: _this.handleClose}, w.content));
	        })));
	    };
	    return Desktop;
	}(Component_1.Component));
	exports.Desktop = Desktop;
	//onMoveStart={ w.handleMoveStart }
	//onResizeRightBottomCornerStart={ w.handleResizeRightBottomCornerStart }


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	var AppErrorBar_1 = __webpack_require__(30);
	var AppWindow = (function () {
	    function AppWindow() {
	        this.id = Math.random().toString(36).slice(2, 12);
	    }
	    return AppWindow;
	}());
	exports.AppWindow = AppWindow;
	var AppState = (function (_super) {
	    __extends(AppState, _super);
	    function AppState() {
	        _super.apply(this, arguments);
	        this.windows = []; // последнее активно
	    }
	    return AppState;
	}(Component_1.ComponentState));
	exports.AppState = AppState;
	var App = (function (_super) {
	    __extends(App, _super);
	    function App(props, context) {
	        _super.call(this, props, context);
	        this.props = props;
	        this.state = new AppState(this);
	    }
	    App.prototype.willMount = function () {
	        _super.prototype.willMount.call(this);
	        exports.appInstance = this;
	    };
	    App.prototype.render = function () {
	        this.addClassName("app");
	        if (this.props.sizeTo === "parent")
	            this.addStyles({ height: "100%" });
	        return (React.createElement("div", __assign({}, this.getRenderProps()), 
	            React.createElement(AppErrorBar_1.AppErrorBar, null), 
	            this.props.children));
	    };
	    return App;
	}(Component_1.Component));
	exports.App = App;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	var AppErrorBarState = (function (_super) {
	    __extends(AppErrorBarState, _super);
	    function AppErrorBarState() {
	        _super.apply(this, arguments);
	    }
	    return AppErrorBarState;
	}(Component_1.ComponentState));
	exports.AppErrorBarState = AppErrorBarState;
	var AppErrorBar = (function (_super) {
	    __extends(AppErrorBar, _super);
	    function AppErrorBar(props, context) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.handleError = function (msg, url, line, col, error) {
	            _this.errorMessage = msg;
	            if (!error.$$isThrowError)
	                console.error(error.stack);
	            _this.state.visible = true;
	            _this.forceUpdate();
	            var suppressErrorAlert = true;
	            return suppressErrorAlert;
	        };
	        this.handlePromiseError = function (reason) {
	            if (reason.message)
	                _this.errorMessage = reason.message;
	            _this.state.visible = true;
	            _this.forceUpdate();
	        };
	        this.state = new AppErrorBarState(this);
	        this.state.visible = false;
	    }
	    // protected willMount() {
	    //     super.willMount();
	    // }
	    AppErrorBar.prototype.didMount = function () {
	        _super.prototype.didMount.call(this);
	        window.onerror = this.handleError;
	        window.onunhandledrejection = this.handlePromiseError.bind(this);
	    };
	    AppErrorBar.prototype.render = function () {
	        var _this = this;
	        this.addClassName("app-error-bar");
	        this.toggleClassName(!this.state.visible, "is-hidden");
	        this.clearStyles();
	        this.addStyles({ color: "white", background: "#ff4e4e", cursor: "default" });
	        return (React.createElement("div", __assign({onClick: function (e) { _this.state.visible = false; _this.forceUpdate(); }}, this.getRenderProps()), this.errorMessage));
	    };
	    return AppErrorBar;
	}(Component_1.Component));
	exports.AppErrorBar = AppErrorBar;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var Layout_1 = __webpack_require__(7);
	var Fixed_1 = __webpack_require__(8);
	var Flex_1 = __webpack_require__(9);
	var Movable_1 = __webpack_require__(32);
	var Error_1 = __webpack_require__(6);
	var WindowState = (function (_super) {
	    __extends(WindowState, _super);
	    function WindowState() {
	        _super.apply(this, arguments);
	    }
	    return WindowState;
	}(Component_1.ComponentState));
	exports.WindowState = WindowState;
	var Window = (function (_super) {
	    __extends(Window, _super);
	    function Window(props, context) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.moveStart = function (e) {
	            e.bindX(_this.state, "left", function () {
	                $(_this.nativeElement).css("left", _this.state.left);
	            });
	            e.bindY(_this.state, "top", function () {
	                $(_this.nativeElement).css("top", _this.state.top);
	            });
	            _this.handleOnClick();
	        };
	        this.resizeRightBottomCornerStart = function (e) {
	            e.bindX(_this.state, "width", function () {
	                if (_this.state.width < _this.state.minWidth)
	                    _this.state.width = _this.state.minWidth;
	                $(_this.nativeElement).css("width", _this.state.width);
	            });
	            e.bindY(_this.state, "height", function () {
	                if (_this.state.height < _this.state.minHeight)
	                    _this.state.height = _this.state.minHeight;
	                $(_this.nativeElement).css("height", _this.state.height);
	            });
	            _this.handleOnClick();
	        };
	        this.handleOnClick = function (e) {
	            if (_this.props.onActivate)
	                _this.props.onActivate(_this.state);
	        };
	        this.handleCloseButtonClick = function (e) {
	            _this.close();
	            e.stopPropagation();
	        };
	        this.shouldComponentUpdate = function (nextProps, nextState) {
	            var oldDisabled = _this.state.disabled === true;
	            var newDisabled = nextProps.disabled === true;
	            _this.state.disabled = newDisabled;
	            return oldDisabled !== newDisabled;
	        };
	        this.props = props;
	        this.state = new WindowState(this);
	    }
	    Window.prototype.createInitState = function () {
	        _.assign(this.state, this.props);
	    };
	    Window.prototype.willMount = function () {
	        this.createInitState();
	        _super.prototype.willMount.call(this);
	    };
	    Window.prototype.willReceiveProps = function (nextProps) {
	        _super.prototype.willReceiveProps.call(this, nextProps);
	        //this.state.disabled = nextProps.disabled;
	    };
	    Window.prototype.getParentDesktopElement = function () {
	        var parent = ReactDOM.findDOMNode(this);
	        while (parent) {
	            if (parent.$$desktop)
	                return parent;
	            parent = parent.parentElement;
	        }
	        Error_1.throwError("Window.getParentDesktopElement(): parent desktop not found");
	        throw "fake";
	    };
	    // private centerTo(parent: JQuery) {
	    //     let win = $(this.nativeElement);
	    //
	    //     this.state.top = (parent.outerHeight() - win.outerHeight()) / 2;
	    //     if (this.state.top > parent.outerHeight() - win.outerHeight())
	    //         this.state.top = parent.outerHeight() - win.outerHeight();
	    //     if (this.state.top < 0) this.state.top = 0;
	    //
	    //     this.state.left = (parent.outerWidth() - win.outerWidth()) / 2;
	    //     if (this.state.left > parent.outerWidth() - win.outerWidth())
	    //         this.state.left = parent.outerWidth() - win.outerWidth();
	    //     if (this.state.left < 0) this.state.left = 0;
	    //
	    //     this.forceUpdate();
	    // }
	    //
	    Window.prototype.centerToDesktop = function () {
	        var win = $(this.nativeElement);
	        var desktop = $(this.getParentDesktopElement());
	        this.state.top = (desktop.outerHeight() - win.outerHeight()) / 2;
	        this.state.left = (desktop.outerWidth() - win.outerWidth()) / 2;
	        if (this.state.top > desktop.outerHeight() - win.outerHeight())
	            this.state.top = desktop.outerHeight() - win.outerHeight();
	        if (this.state.top < 0)
	            this.state.top = 0;
	        this.state.left = (desktop.outerWidth() - win.outerWidth()) / 2;
	        if (this.state.left > desktop.outerWidth() - win.outerWidth())
	            this.state.left = desktop.outerWidth() - win.outerWidth();
	        if (this.state.left < 0)
	            this.state.left = 0;
	        this.forceUpdate();
	        //this.centerTo($(this.getParentDesktopElement()));
	    };
	    Window.prototype.centerToParentWindow = function () {
	        var win = $(this.nativeElement);
	        var parent = $("#" + this.state.parentWindowId);
	        var desktop = $(this.getParentDesktopElement());
	        this.state.top = (parent.outerHeight() - win.outerHeight()) / 2 + parent.position().top;
	        this.state.left = (parent.outerWidth() - win.outerWidth()) / 2 + parent.position().left;
	        if (this.state.top > desktop.outerHeight() - win.outerHeight())
	            this.state.top = desktop.outerHeight() - win.outerHeight();
	        if (this.state.top < 0)
	            this.state.top = 0;
	        if (this.state.left > desktop.outerWidth() - win.outerWidth())
	            this.state.left = desktop.outerWidth() - win.outerWidth();
	        if (this.state.left < 0)
	            this.state.left = 0;
	        this.forceUpdate();
	        //this.centerTo($("#" + this.state.parentWindowId));
	    };
	    Window.prototype.didMount = function () {
	        _super.prototype.didMount.call(this);
	        this.nativeElement["$$window"] = this;
	        if (this.state.autoPosition === "desktop-center")
	            this.centerToDesktop();
	        else if (this.state.autoPosition === "parent-center")
	            this.centerToParentWindow();
	    };
	    Window.prototype.close = function () {
	        this.getParentDesktop().closeWindow(this.state.id);
	        if (this.props.onClose)
	            this.props.onClose(this.state);
	    };
	    Window.prototype.renderRightBottomCornerResizer = function () {
	        if (this.state.autoSize === "content") {
	            return [];
	        }
	        else {
	            return (React.createElement(Movable_1.Movable, {className: "window-resizer", style: { position: "absolute", height: 10, width: 10, right: 0, bottom: 0, borderRadius: "0 0 5px 0", cursor: "se-resize" }, onMoveStart: this.resizeRightBottomCornerStart}));
	        }
	    };
	    Window.prototype.render = function () {
	        var _this = this;
	        this.clearStyles();
	        this.addProps({ id: this.state.id });
	        this.addClassName("window box");
	        this.addStyles({ position: "absolute" });
	        this.addStyles({
	            top: this.state.top,
	            left: this.state.left,
	            right: this.state.right,
	            bottom: this.state.bottom,
	            minHeight: this.state.minHeight,
	            minWidth: this.state.minWidth,
	            padding: 0,
	            overflow: "hidden"
	        });
	        if (this.state.autoSize === "content") {
	        }
	        else {
	            this.addStyles({
	                height: this.state.height,
	                width: this.state.width
	            });
	        }
	        var headerButtonStyle = {
	            border: "0px",
	            height: "100%",
	            paddingLeft: 2,
	            paddingRight: 2,
	        };
	        console.log("render-win");
	        //console.log(this.props.disabled);
	        //console.log(this.state.disabled);
	        var disabledWrapperClass = "window-disabled-wrapper";
	        if (!this.state.disabled || this.state.disabled === false)
	            disabledWrapperClass += " is-hidden";
	        return (React.createElement("div", __assign({className: "window"}, this.getRenderProps(), {ref: function (e) { _this.nativeElement = e; }, onClick: this.handleOnClick}), 
	            React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent"}, 
	                React.createElement(Fixed_1.Fixed, {className: "window-header", style: { borderRadius: "5px 5px 0px 0px", position: "relative", paddingLeft: 10 }}, 
	                    React.createElement(Layout_1.Layout, {type: "row", sizeTo: "parent"}, 
	                        React.createElement(Flex_1.Flex, null, 
	                            React.createElement("span", {className: "window-title"}, this.props.title), 
	                            React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, onMoveStart: this.moveStart})), 
	                        React.createElement(Fixed_1.Fixed, null, 
	                            React.createElement("p", {className: "control has-addons buttons-bar", style: { paddingTop: 2, paddingRight: 4 }}, 
	                                React.createElement("a", {className: "button is-small minimize-button", style: headerButtonStyle}, 
	                                    React.createElement("span", {className: "icon is-small ", style: { marginLeft: 0 }}, 
	                                        React.createElement("i", {className: "fa fa-minus", style: { top: 3 }})
	                                    )
	                                ), 
	                                React.createElement("a", {className: "button is-small maximize-button", style: headerButtonStyle}, 
	                                    React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, 
	                                        React.createElement("i", {className: "fa fa-square-o", style: { fontWeight: "bold" }})
	                                    )
	                                ), 
	                                React.createElement("a", {className: "button is-small close-button", style: headerButtonStyle, onClick: this.handleCloseButtonClick}, 
	                                    React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, 
	                                        React.createElement("i", {className: "fa fa-close", style: { top: -1 }})
	                                    )
	                                ))
	                        ))
	                ), 
	                React.createElement(Flex_1.Flex, {className: "window-body", style: { padding: 10, overflow: "hidden" }}, 
	                    this.props.children, 
	                    this.renderRightBottomCornerResizer())), 
	            React.createElement("div", {className: disabledWrapperClass, style: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }})));
	    };
	    return Window;
	}(Component_1.Component));
	exports.Window = Window;
	// <div className="window-body" style={{ height:"100%" }}>
	//     {this.props.children}
	// </div>


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	var Movable = (function (_super) {
	    __extends(Movable, _super);
	    function Movable(props, context) {
	        _super.call(this, props, context);
	        this.bindedX = [];
	        this.bindedY = [];
	        this.props = props;
	    }
	    Movable.prototype.bindX = function (obj, propName, movedCallback) {
	        this.bindedX.push({
	            obj: obj,
	            propName: propName,
	            startValue: obj[propName],
	            movedCallback: movedCallback,
	            lastValue: obj[propName]
	        });
	    };
	    ;
	    Movable.prototype.bindY = function (obj, propName, movedCallback) {
	        this.bindedY.push({
	            obj: obj,
	            propName: propName,
	            startValue: obj[propName],
	            movedCallback: movedCallback,
	            lastValue: obj[propName]
	        });
	    };
	    ;
	    Movable.prototype.handleDragStart = function (e) {
	        this.startClientX = e.clientX;
	        this.startClientY = e.clientY;
	        if (this.props.onMoveStart)
	            this.props.onMoveStart({ bindX: this.bindX.bind(this), bindY: this.bindY.bind(this) });
	        e.dataTransfer.setData("movable", "");
	        //e.dataTransfer.dropEffect = 'move';
	        this.dragOver_Binded = this.handleDragOver.bind(this);
	        document.addEventListener("dragover", this.dragOver_Binded);
	    };
	    Movable.prototype.handleDragEnd = function (e) {
	        document.removeEventListener("dragover", this.dragOver_Binded);
	        if (this.props.onMoveEnd)
	            this.props.onMoveEnd({
	                deltaX: e.clientX - this.startClientX,
	                deltaY: e.clientY - this.startClientY
	            });
	        this.bindedX = [];
	        this.bindedY = [];
	    };
	    Movable.prototype.handleDragOver = function (e) {
	        var _this = this;
	        e.dataTransfer.effectAllowed = "move";
	        this.bindedX.forEach(function (bind) {
	            var newValue = bind.startValue + e.clientX - _this.startClientX;
	            if (newValue !== bind.lastValue) {
	                bind.obj[bind.propName] = newValue;
	                bind.lastValue = newValue;
	                if (bind.movedCallback)
	                    bind.movedCallback();
	            }
	        });
	        this.bindedY.forEach(function (bind) {
	            var newValue = bind.startValue + e.clientY - _this.startClientY;
	            if (newValue !== bind.lastValue) {
	                bind.obj[bind.propName] = newValue;
	                bind.lastValue = newValue;
	                if (bind.movedCallback)
	                    bind.movedCallback();
	            }
	        });
	        if (this.props.onMove)
	            this.props.onMove({
	                deltaX: e.clientX - this.startClientX,
	                deltaY: e.clientY - this.startClientY
	            });
	        event.preventDefault();
	    };
	    Movable.prototype.render = function () {
	        this.addClassName("movable");
	        this.addProps({ draggable: true });
	        this.addStyles({ cursor: "move" });
	        //return React.createElement(propInfo.editorType, editorProps, null)
	        return (React.createElement("div", __assign({}, this.getRenderProps(), {onDragStart: this.handleDragStart.bind(this), onDragEnd: this.handleDragEnd.bind(this)}), this.props.children));
	    };
	    return Movable;
	}(Component_1.Component));
	exports.Movable = Movable;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var StringPropertyEditor_1 = __webpack_require__(12);
	var testBuhtaObject1_1 = __webpack_require__(10);
	var testBuhtaObject2 = (function (_super) {
	    __extends(testBuhtaObject2, _super);
	    function testBuhtaObject2() {
	        _super.apply(this, arguments);
	    }
	    __decorate([
	        StringPropertyEditor_1.StringEditor({
	            inputCaption: "Пол/sex",
	            inputTab: "Дополнительно",
	            inputGroup: "Основная",
	            inputDescription: "Потолок абонента"
	        })
	    ], testBuhtaObject2.prototype, "sex", void 0);
	    return testBuhtaObject2;
	}(testBuhtaObject1_1.TestBuhtaObject1));
	exports.testBuhtaObject2 = testBuhtaObject2;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	//import {executeSQL} from "../buhta-core/SQL";
	var Component_1 = __webpack_require__(5);
	var TreeGridColumns_1 = __webpack_require__(35);
	var TreeGridColumn_1 = __webpack_require__(36);
	var Keycode_1 = __webpack_require__(38);
	var Movable_1 = __webpack_require__(32);
	var getScrollBarWidth_1 = __webpack_require__(39);
	var Button_1 = __webpack_require__(21);
	var Layout_1 = __webpack_require__(7);
	var Fixed_1 = __webpack_require__(8);
	var Flex_1 = __webpack_require__(9);
	var ObjectDesigner_1 = __webpack_require__(16);
	var TreeGridState = (function (_super) {
	    __extends(TreeGridState, _super);
	    function TreeGridState() {
	        _super.apply(this, arguments);
	    }
	    return TreeGridState;
	}(Component_1.ComponentState));
	exports.TreeGridState = TreeGridState;
	var InternalColumn = (function () {
	    function InternalColumn() {
	    }
	    return InternalColumn;
	}());
	exports.InternalColumn = InternalColumn;
	var InternalRow = (function () {
	    function InternalRow(gridState) {
	        this.gridState = gridState;
	        this.cellElements = [];
	    }
	    Object.defineProperty(InternalRow.prototype, "sourceData", {
	        get: function () {
	            return this.gridState.dataSource.getDataRows()[this.sourceIndex];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return InternalRow;
	}());
	exports.InternalRow = InternalRow;
	var InternalTreeNode = (function () {
	    function InternalTreeNode(gridState) {
	        this.gridState = gridState;
	        this.cellElements = [];
	        this.children = [];
	    }
	    InternalTreeNode.prototype.pushRowRecursive = function (rows, maxPageLength) {
	        if (rows.length >= maxPageLength)
	            return;
	        var row = new InternalRow(this.gridState);
	        row.sourceIndex = this.sourceIndex;
	        row.node = this;
	        rows.push(row);
	        if (this.expanded) {
	            this.children.forEach(function (child) {
	                child.pushRowRecursive(rows, maxPageLength);
	            });
	        }
	    };
	    InternalTreeNode.prototype.iterateRecursive = function (callback) {
	        callback(this);
	        this.children.forEach(function (child) {
	            child.iterateRecursive(callback);
	        });
	    };
	    return InternalTreeNode;
	}());
	exports.InternalTreeNode = InternalTreeNode;
	//const vertScrollBarWidth = 30;
	var TreeGrid = (function (_super) {
	    __extends(TreeGrid, _super);
	    function TreeGrid(props, context) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.handleUpdateButtonClick = function () {
	            _this.openEditForm(_this.state.rows[_this.state.focusedRowIndex]);
	        };
	        this.handleInsertButtonClick = function () {
	            _this.openInsertForm();
	        };
	        this.handleDeleteButtonClick = function () {
	            _this.openDeleteForm(_this.state.rows[_this.state.focusedRowIndex]);
	        };
	        this.lastBodyWrapperHeight = 0;
	        this.lastBodyWrapperWidth = 0;
	        this.handleBodyWrapperElementResize = function () {
	            var newHeight = _this.state.bodyWrapperElement.offsetHeight;
	            if (newHeight !== _this.lastBodyWrapperHeight) {
	                _this.lastBodyWrapperHeight = newHeight;
	                _this.handleScroll();
	            }
	            var newWidth = _this.state.bodyWrapperElement.offsetWidth;
	            if (newWidth !== _this.lastBodyWrapperWidth) {
	                _this.lastBodyWrapperWidth = newWidth;
	                _this.handleScroll();
	            }
	        };
	        this.columnResizeStart = function (event, col) {
	            event.bindX(col, "width", function () {
	                $(col.headerWidthNativeElement).attr("width", col.width);
	                $(col.bodyWidthNativeElement).attr("width", col.width);
	                $(col.footerWidthNativeElement).attr("width", col.width);
	                var tableWidth = _this.calcTotalColumnsWidth();
	                $(_this.state.headerTableElement).css("width", tableWidth);
	                $(_this.state.bodyTableElement).css("width", tableWidth);
	                $(_this.state.footerTableElement).css("width", tableWidth);
	                $(_this.state.bodyWrapperElement).css("max-width", tableWidth + getScrollBarWidth_1.getScrollbarWidth() + 1);
	            });
	            // this.handleOnClick(null);
	        };
	        this.state = new TreeGridState(this);
	    }
	    TreeGrid.prototype.iterateAllNodes = function (callback) {
	        this.state.nodes.forEach(function (node) {
	            node.iterateRecursive(callback);
	        });
	    };
	    TreeGrid.prototype.expandAll = function () {
	        this.state.nodes.forEach(function (node) {
	            node.iterateRecursive(function (nod) {
	                nod.expanded = true;
	            });
	        });
	        this.createRows();
	        this.forceUpdate();
	    };
	    TreeGrid.prototype.collapseAll = function () {
	        this.iterateAllNodes(function (nod) {
	            nod.expanded = false;
	        });
	        this.createRows();
	        this.forceUpdate();
	    };
	    TreeGrid.prototype.getRowIndex = function (sourceIndex) {
	        // TODO: сделать вариант для treeMode
	        for (var i = 0; i < this.state.rows.length; i++) {
	            if (this.state.rows[i].sourceIndex === sourceIndex)
	                return i;
	        }
	        return -1;
	    };
	    TreeGrid.prototype.refreshRow = function (sourceIndex) {
	        this.createRows();
	        var index = this.getRowIndex(sourceIndex);
	        this.state.focusedRowIndex = index;
	        this.forceUpdate();
	        // TODO: сделать прокрутку, если focused не видна на экране
	    };
	    TreeGrid.prototype.openDeleteForm = function (rowToDelete) {
	        var _this = this;
	        //let rowToDelete = this.state.rows[this.state.focusedRowIndex];
	        var row = rowToDelete.sourceData;
	        var objectClassName = "запись";
	        if (row.getClassName)
	            objectClassName = row.getClassName();
	        var objectName = "";
	        if (row.toString)
	            objectName = row.toString();
	        var message = React.createElement("div", {className: "color-red"}, 
	            "Удалить \"", 
	            objectClassName, 
	            "\"?", 
	            React.createElement("br", null), 
	            objectName);
	        this.showDeleteConfirmationWindow(message, function (okResult) {
	            console.log(okResult);
	            if (okResult) {
	                _this.state.dataSource.deleteRow(rowToDelete.sourceIndex);
	                if (_this.state.dataSource.getDataRows().length === 0)
	                    _this.refreshDataSource();
	                else {
	                    var newFocusedIndex = _this.state.rows.indexOf(rowToDelete);
	                    if (newFocusedIndex > _this.state.rows.length - 2)
	                        newFocusedIndex = _this.state.rows.length - 2;
	                    _this.refreshRow(_this.state.rows[newFocusedIndex].sourceIndex);
	                }
	                _this.forceUpdate();
	            }
	        });
	    };
	    TreeGrid.prototype.openInsertForm = function () {
	        var _this = this;
	        var designedObject = this.state.dataSource.getNewRow();
	        if (designedObject) {
	            var win = React.createElement(ObjectDesigner_1.ObjectDesigner, {designedObject: designedObject, onSaveChanges: function () {
	                var index = _this.state.dataSource.addRow(designedObject);
	                if (_this.state.dataSource.getDataRows().length === 1)
	                    _this.refreshDataSource();
	                else
	                    _this.refreshRow(index);
	            }});
	            var openParam = {
	                title: "добавление",
	                top: 50,
	                left: 50,
	                parentWindowId: this.getParentWindowId()
	            };
	            this.getParentDesktop().openWindow(win, openParam);
	        }
	    };
	    TreeGrid.prototype.openEditForm = function (row) {
	        var _this = this;
	        var designedObject = this.state.dataSource.getDataRows()[row.sourceIndex];
	        var win = React.createElement(ObjectDesigner_1.ObjectDesigner, {designedObject: designedObject, onSaveChanges: function () { _this.refreshRow(row.sourceIndex); }});
	        var openParam = {
	            title: "редактирование",
	            top: 50,
	            left: 50,
	            parentWindowId: this.getParentWindowId()
	        };
	        this.getParentDesktop().openWindow(win, openParam);
	    };
	    TreeGrid.prototype.createColumns = function () {
	        var _this = this;
	        this.state.columns = [];
	        // сначала колонки заполняем из тегов <TreeGridColumn>
	        var columnsTag = this.getChildren(TreeGridColumns_1.TreeGridColumns);
	        columnsTag.forEach(function (tag) {
	            var columnTagList = _this.getChildrenOfProps(tag.props, TreeGridColumn_1.TreeGridColumn);
	            columnTagList = columnTagList.sort(function (a, b) {
	                var A = a.props;
	                var B = b.props;
	                return A.order - B.order;
	            });
	            columnTagList.forEach(function (propCol) {
	                var col = new InternalColumn();
	                col.props = propCol.props;
	                col.width = propCol.props.width || 150;
	                col.caption = propCol.props.caption;
	                col.fieldName = propCol.props.propertyName;
	                col.caption = propCol.props.caption || col.fieldName;
	                _this.state.columns.push(col);
	            });
	        });
	        // если тегов <TreeGridColumn> нет, то заполняем из DataSource
	        if (this.state.columns.length === 0) {
	            if (this.state.dataSource.isTreeGridDataSource) {
	                var ds = this.state.dataSource;
	                var columns = ds.getTreeGridColumns().sort(function (a, b) {
	                    return a.order - b.order;
	                });
	                columns.forEach(function (propCol) {
	                    var col = new InternalColumn();
	                    col.props = propCol;
	                    col.width = propCol.width || 150;
	                    col.caption = propCol.caption || "";
	                    col.fieldName = propCol.propertyName || "";
	                    col.caption = propCol.caption || col.fieldName;
	                    _this.state.columns.push(col);
	                });
	            }
	        }
	        if (this.state.columns.length === 0)
	            console.error("TreeGrid: список колонок не определен.");
	    };
	    TreeGrid.prototype.initFocused = function () {
	        this.state.focusedRowIndex = 0;
	        this.state.focusedCellIndex = 0;
	    };
	    TreeGrid.prototype.createNodes = function () {
	        if (!this.props.treeMode)
	            return;
	        if (this.props.hierarchyFieldName) {
	            this.createNodesFromHierarchyField();
	        }
	        else
	            console.error("unknown hierarchy mode");
	    };
	    TreeGrid.prototype.createNodesFromHierarchyField = function () {
	        var _this = this;
	        if (!this.state.dataSource)
	            return;
	        if (!this.props.hierarchyDelimiters) {
	            console.error("XTreeGrid: hierarchyDelimiters is undefined");
	            return;
	        }
	        var sorted = this.state.dataSource.getDataRows().map(function (obj, index) {
	            return {
	                hierarchyStr: obj[_this.props.hierarchyFieldName || ""].toString(),
	                objIndex: index
	            };
	        });
	        sorted = _.sortBy(sorted, ["hierarchyStr"]);
	        var cache = {};
	        this.state.nodes = [];
	        sorted.forEach(function (s, index) {
	            var hierarchyDelimiters = _this.props.hierarchyDelimiters || ".";
	            var splitted = s.hierarchyStr.split(hierarchyDelimiters);
	            var parentId;
	            var nodeId;
	            if (splitted.length === 1)
	                nodeId = s.hierarchyStr;
	            else {
	                nodeId = _.last(splitted);
	                parentId = splitted.slice(0, splitted.length - 1).join(hierarchyDelimiters.slice(0, 1));
	            }
	            if (!parentId) {
	                if (cache[nodeId])
	                    console.error("XTreeGrid: nodeId '" + nodeId + "' is duplicated");
	                else {
	                    var node = new InternalTreeNode(_this.state);
	                    node.sourceIndex = s.objIndex;
	                    node.level = 0;
	                    node.expanded = node.level < _this.props.autoExpandNodesToLevel;
	                    cache[nodeId] = node;
	                    _this.state.nodes.push(node);
	                }
	            }
	            else {
	                var parentNode = cache[parentId];
	                var node = new InternalTreeNode(_this.state);
	                node.sourceIndex = s.objIndex;
	                node.level = parentNode.level + 1;
	                node.expanded = node.level < _this.props.autoExpandNodesToLevel;
	                cache[s.hierarchyStr] = node;
	                parentNode.children.push(node);
	            }
	            // console.log({str: s.hierarchyStr, parentId, nodeId});
	        });
	    };
	    TreeGrid.prototype.createRows = function () {
	        var _this = this;
	        this.state.rows = [];
	        if (this.props.treeMode) {
	            if (this.state.nodes) {
	                this.state.nodes.forEach(function (node) {
	                    node.pushRowRecursive(_this.state.rows, _this.state.pageLength);
	                });
	            }
	        }
	        else {
	            if (!this.state.dataSource)
	                return;
	            if (this.state.dataSource.isTreeGridDataSource) {
	                var ds = this.state.dataSource;
	                ds.getDataRows().forEach(function (obj, index) {
	                    var row = new InternalRow(_this.state);
	                    row.sourceIndex = index;
	                    _this.state.rows.push(row);
	                });
	            }
	            else {
	                this.state.dataSource.getDataRows().forEach(function (obj, index) {
	                    var row = new InternalRow(_this.state);
	                    row.sourceIndex = index;
	                    _this.state.rows.push(row);
	                });
	            }
	            this.initFocused();
	        }
	        if (this.state.columns && this.state.columns.length > 0 && this.state.dataSource)
	            this.state.columns[0].footer = this.state.dataSource.getDataRows().length + " поз.";
	    };
	    TreeGrid.prototype.filterData = function () {
	        //            if (this.props.dataSource) {
	        //                this.state.data = this.props.dataSource.map((row) => row);
	        //            }
	        //this.rows = window["xxx"].filter((row) => row["Название"].indexOf("Phil") > -1);
	    };
	    TreeGrid.prototype.didMount = function () {
	        this.handleChangeFocused();
	        this.handleScroll();
	        this.bodyWrapperElementInterval = setInterval(this.handleBodyWrapperElementResize, 10);
	    };
	    TreeGrid.prototype.willUnmount = function () {
	        clearInterval(this.bodyWrapperElementInterval);
	    };
	    TreeGrid.prototype.willMount = function () {
	        _super.prototype.willMount.call(this);
	        this.state.dataSource = this.props.dataSource;
	        this.createColumns();
	        this.createNodes();
	        this.createRows();
	        this.state.pageLength = 500;
	    };
	    TreeGrid.prototype.refreshDataSource = function () {
	        this.state.dataSource = this.props.dataSource;
	        this.createColumns();
	        this.createNodes();
	        this.createRows();
	        this.forceUpdate();
	    };
	    // private testLoad500() {
	    //
	    //     executeSQL("select TOP 5000 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
	    //         .done((table) => {
	    //
	    //             this.dataSource = table.rows.map((r) => {
	    //                 return {Ключ: r["Ключ"], Номер: r["Номер"], Название: r["Название"]};
	    //             });
	    //             this.createColumns();
	    //             this.createNodes();
	    //             this.createRows();
	    //             this.forceUpdate();
	    //
	    //
	    //             console.log("select top 5006* Ключ,Номер,Название from [Вид ТМЦ] order by Ключ --> " + table.rows[0].getValue(2));
	    //         })
	    //         .fail((err) => {
	    //             alert(err.message);
	    //         });
	    //
	    // }
	    TreeGrid.prototype.willReceiveProps = function (nextProps) {
	    };
	    TreeGrid.prototype.didUpdate = function (prevProps, prevState, prevContext) {
	        this.handleChangeFocused();
	        this.handleScroll();
	    };
	    TreeGrid.prototype.renderRows = function () {
	        var _this = this;
	        //console.log("renderRows-start()");
	        var ret = [];
	        if (!this.state.rows)
	            return ret;
	        console.log("render-rows: " + this.state.rows.length);
	        this.state.rows.forEach(function (row, index) {
	            ret.push(_this.renderRow(row, index));
	        });
	        //console.log("renderRows-end()");
	        return ret;
	    };
	    TreeGrid.prototype.renderRow = function (row, rowIndex) {
	        return (React.createElement("tr", {key: rowIndex, ref: function (e) { row.element = e; }}, this.renderCells(row, rowIndex)));
	    };
	    TreeGrid.prototype.renderCells = function (row, rowIndex) {
	        var _this = this;
	        var ret = [];
	        this.state.columns.forEach(function (col, colIndex) {
	            ret.push(_this.renderCell(row, rowIndex, col, colIndex));
	        });
	        return ret;
	    };
	    TreeGrid.prototype.renderCell = function (row, rowIndex, col, colIndex) {
	        var _this = this;
	        var objIndex = row.sourceIndex;
	        var str = this.state.dataSource.getDataRows()[objIndex][col.props.propertyName || ""].toString(); // todo col.props.propertyName || "" 
	        //let str = this.rows[rowIndex].sourceObject[col.props.propertyName].toString();
	        // return <td key={colIndex}>
	        //     <div style={{height:16, overflow:"hidden"}}>{str}</div>
	        // </td>;
	        var node = row.node;
	        var hierarchyPaddingDiv = [];
	        if (this.props.treeMode && (col.props.showHierarchyPadding || col.props.showHierarchyTree)) {
	            hierarchyPaddingDiv = React.createElement("span", {style: { width: node.level * 20, display: "inline-block" }});
	        }
	        var tdStyle = { overflow: "hidden" };
	        if (this.props.treeMode && col.props.showHierarchyTree) {
	            tdStyle.borderBottomColor = "rgba(255, 0, 0, 0)";
	        }
	        var strSpanStyle = {
	            lineHeight: "100%",
	            display: "inline-block"
	        };
	        if (this.props.treeMode && col.props.showHierarchyTree && node.expanded && node.children.length > 0) {
	            strSpanStyle.fontWeight = "bold";
	        }
	        var strSpan = React.createElement("span", {style: strSpanStyle}, str);
	        var collapseIconDiv = [];
	        if (this.props.treeMode && col.props.showHierarchyTree) {
	            if (node.children.length > 0) {
	                if (node.expanded) {
	                    collapseIconDiv = (React.createElement("div", {className: "row-collapse-icon", style: { width: 20, flex: "0 0 auto" }}, 
	                        React.createElement("span", {className: "icon is-small", style: { cursor: "pointer" }, onClick: function (e) { node.expanded = false; _this.createRows(); _this.forceUpdate(); }}, 
	                            React.createElement("i", {className: "fa fa-caret-down"})
	                        )
	                    ));
	                }
	                else {
	                    collapseIconDiv = (React.createElement("div", {className: "row-collapse-icon", style: { width: 20, flex: "0 0 auto" }}, 
	                        React.createElement("span", {className: "icon is-small", style: { cursor: "pointer" }, onClick: function (e) { node.expanded = true; _this.createRows(); _this.forceUpdate(); }}, 
	                            React.createElement("i", {className: "fa fa-caret-right"})
	                        )
	                    ));
	                }
	            }
	            else {
	                collapseIconDiv = (React.createElement("div", {className: "row-collapse-icon", style: { width: 20, flex: "0 0 auto" }}));
	            }
	        }
	        return (React.createElement("td", {key: colIndex, style: tdStyle, ref: function (e) { return row.cellElements[colIndex] = e; }, onClick: function (e) { _this.setFocusedCell(rowIndex, colIndex); }}, 
	            React.createElement("div", {style: { display: "flex", flexDirection: "row", alignItems: "center" }}, 
	                React.createElement("div", {className: "row-checkbox", style: { flex: "0 0 auto" }}), 
	                React.createElement("div", {className: "row-padding", style: { flex: "0 0 auto" }}, hierarchyPaddingDiv), 
	                collapseIconDiv, 
	                React.createElement("div", {className: "row-icon", style: { flex: "0 0 auto" }}), 
	                React.createElement("div", {className: "row-str", style: { flex: "0 1 auto" }}, strSpan))
	        ));
	    };
	    TreeGrid.prototype.setFocusedCell = function (rowIndex, cellIndex) {
	        this.state.focusedRowIndex = rowIndex;
	        this.state.focusedCellIndex = cellIndex;
	        this.handleChangeFocused();
	    };
	    TreeGrid.prototype.handleTableWheel = function (e) {
	        // if (e.deltaY > 0)
	        //     this.incPageStartIndex(3);
	        // else if (e.deltaY < 0)
	        //     this.decPageStartIndex(3);
	        // console.log(e.deltaY);
	        // this.forceUpdate();
	    };
	    TreeGrid.prototype.handleScroll = function () {
	        $(this.state.headerWrapperElement).css({ top: this.state.bodyWrapperElement.scrollTop });
	        var pos = this.state.bodyWrapperElement.scrollTop + this.state.bodyWrapperElement.clientHeight - $(this.state.footerWrapperElement).outerHeight() - 0;
	        $(this.state.footerWrapperElement).css({ top: pos });
	        $(this.state.headerFakeRow).css({ height: $(this.state.headerWrapperElement).outerHeight() });
	        $(this.state.footerFakeRow).css({ height: $(this.state.footerWrapperElement).outerHeight() });
	    };
	    TreeGrid.prototype.handleChangeFocused = function () {
	        if (!this.state.rows)
	            return;
	        this.state.rows.forEach(function (row) {
	            if (row.element)
	                $(row.element).removeClass("tree-grid-focused-row");
	            row.cellElements.forEach(function (cell) {
	                if (cell)
	                    $(cell).removeClass("tree-grid-focused-cell");
	            });
	        });
	        var focusedRow = this.state.rows[this.state.focusedRowIndex];
	        if (focusedRow && focusedRow.element) {
	            $(focusedRow.element).addClass("tree-grid-focused-row");
	            var focusedCellElement = focusedRow.cellElements[this.state.focusedCellIndex];
	            if (focusedCellElement) {
	                $(focusedCellElement).addClass("tree-grid-focused-cell");
	            }
	        }
	    };
	    TreeGrid.prototype.getFocusedCellElement = function () {
	        return this.state.rows[this.state.focusedRowIndex].cellElements[this.state.focusedCellIndex];
	    };
	    TreeGrid.prototype.getFocusedRowElement = function () {
	        return this.state.rows[this.state.focusedRowIndex].element;
	    };
	    TreeGrid.prototype.moveFocusedCellDown = function () {
	        if (!this.state.rows)
	            return;
	        if (this.state.focusedRowIndex < this.state.rows.length - 1) {
	            this.state.focusedRowIndex++;
	            this.handleChangeFocused();
	            var rowEl = $(this.getFocusedRowElement());
	            // ушло за пределы видимости
	            if (rowEl.position().top + rowEl.height() >
	                this.state.bodyWrapperElement.scrollTop + this.state.bodyWrapperElement.clientHeight - $(this.state.footerWrapperElement).outerHeight()) {
	                this.state.bodyWrapperElement.scrollTop = rowEl.position().top + rowEl.height() -
	                    this.state.bodyWrapperElement.clientHeight + $(this.state.footerWrapperElement).outerHeight();
	            }
	        }
	    };
	    TreeGrid.prototype.moveFocusedCellLeft = function () {
	        if (!this.state.rows)
	            return;
	        if (this.state.focusedCellIndex > 0) {
	            this.state.focusedCellIndex--;
	            this.handleChangeFocused();
	        }
	    };
	    TreeGrid.prototype.moveFocusedCellRight = function () {
	        if (!this.state.rows)
	            return;
	        if (this.state.focusedCellIndex < this.state.columns.length - 1) {
	            this.state.focusedCellIndex++;
	            this.handleChangeFocused();
	        }
	    };
	    TreeGrid.prototype.moveFocusedCellUp = function () {
	        if (!this.state.rows)
	            return;
	        if (this.state.focusedRowIndex > 0) {
	            this.state.focusedRowIndex--;
	            this.handleChangeFocused();
	            var rowEl = $(this.getFocusedRowElement());
	            // ушло за пределы видимости
	            if (rowEl.position().top < this.state.bodyWrapperElement.scrollTop + $(this.state.headerWrapperElement).outerHeight()) {
	                this.state.bodyWrapperElement.scrollTop = rowEl.position().top - $(this.state.headerWrapperElement).outerHeight();
	            }
	        }
	    };
	    TreeGrid.prototype.handleBodyKeyDown = function (e) {
	        if (e.key === Keycode_1.Keycode.Down) {
	            this.moveFocusedCellDown();
	            e.preventDefault();
	        }
	        else if (e.key === Keycode_1.Keycode.Up) {
	            this.moveFocusedCellUp();
	            e.preventDefault();
	        }
	        else if (e.key === Keycode_1.Keycode.Left) {
	            this.moveFocusedCellLeft();
	            e.preventDefault();
	        }
	        else if (e.key === Keycode_1.Keycode.Right) {
	            this.moveFocusedCellRight();
	            e.preventDefault();
	        }
	    };
	    TreeGrid.prototype.renderColumnHeaders = function () {
	        var _this = this;
	        if (this.state.dataSource.getDataRows().length === 0)
	            return [];
	        var colWidths = [];
	        var colHeaders = [];
	        this.state.columns.forEach(function (col, index) {
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px", ref: function (e) { col.headerWidthNativeElement = e; }}));
	            var tdStyle = { overflow: "hidden" };
	            colHeaders.push(React.createElement("td", {key: index, style: tdStyle}, 
	                col.caption, 
	                React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, width: 5, right: 0, bottom: 0, cursor: "col-resize" }, onMoveStart: function (event) { _this.columnResizeStart(event, col); console.log("MoveStart"); }}), 
	                React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, width: index === 0 ? 0 : 5, left: 0, bottom: 0, cursor: "col-resize" }, onMoveStart: function (event) {
	                    // ресайзим предыдущую колонку
	                    _this.columnResizeStart(event, _this.state.columns[index - 1]);
	                }})));
	        });
	        return (React.createElement("div", {ref: function (e) { return _this.state.headerWrapperElement = e; }, style: { position: "absolute" }}, 
	            React.createElement("table", {className: "tree-grid-header", style: { tableLayout: "fixed", borderCollapse: "collapse", width: this.calcTotalColumnsWidth() }, ref: function (e) { return _this.state.headerTableElement = e; }}, 
	                React.createElement("colgroup", null, colWidths), 
	                React.createElement("tbody", null, 
	                    React.createElement("tr", null, colHeaders)
	                ))
	        ));
	    };
	    TreeGrid.prototype.renderColumnFooters = function () {
	        var _this = this;
	        if (this.state.dataSource.getDataRows().length === 0)
	            return [];
	        var colWidths = [];
	        var colFooters = [];
	        var isFooterEmpty = true;
	        this.state.columns.forEach(function (col, index) {
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px", ref: function (e) { col.footerWidthNativeElement = e; }}));
	            if (col.footer)
	                isFooterEmpty = false;
	            var tdStyle = { overflow: "hidden" };
	            colFooters.push(React.createElement("td", {key: index, style: tdStyle}, col.footer));
	        });
	        if (!isFooterEmpty)
	            return (React.createElement("div", {ref: function (e) { return _this.state.footerWrapperElement = e; }, style: { position: "absolute" }}, 
	                React.createElement("table", {className: "tree-grid-footer", style: { tableLayout: "fixed", borderCollapse: "collapse", width: this.calcTotalColumnsWidth() }, ref: function (e) { return _this.state.footerTableElement = e; }}, 
	                    React.createElement("colgroup", null, colWidths), 
	                    React.createElement("tbody", null, 
	                        React.createElement("tr", null, colFooters)
	                    ))
	            ));
	        else
	            return [];
	    };
	    TreeGrid.prototype.renderEmptyDataSourceMessage = function () {
	        if (this.state.dataSource.getDataRows().length > 0)
	            return [];
	        var message = this.state.dataSource.getEmptyDataSourceMessage();
	        return (React.createElement("div", {className: "tree-grid-empty-body"}, message));
	    };
	    TreeGrid.prototype.renderGridBody = function () {
	        var _this = this;
	        if (this.state.dataSource.getDataRows().length === 0)
	            return [];
	        var colWidths = [];
	        this.state.columns.forEach(function (col, index) {
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px", ref: function (e) { col.bodyWidthNativeElement = e; }}));
	        });
	        return (React.createElement("table", {className: "tree-grid-body", tabIndex: 0, onKeyDown: function (e) { _this.handleBodyKeyDown(e); }, style: { tableLayout: "fixed", borderCollapse: "collapse", position: "relative", width: this.calcTotalColumnsWidth() }, ref: function (e) { return _this.state.bodyTableElement = e; }}, 
	            React.createElement("colgroup", null, colWidths), 
	            React.createElement("tbody", null, 
	                React.createElement("tr", null, 
	                    React.createElement("td", {ref: function (e) { return _this.state.headerFakeRow = e; }})
	                ), 
	                this.renderRows(), 
	                React.createElement("tr", null, 
	                    React.createElement("td", {style: { border: "none" }, ref: function (e) { return _this.state.footerFakeRow = e; }})
	                ))));
	    };
	    TreeGrid.prototype.calcTotalColumnsWidth = function () {
	        var ret = 0;
	        this.state.columns.forEach(function (col) {
	            if (!col.hidden)
	                ret += col.width;
	        });
	        return ret;
	    };
	    TreeGrid.prototype.shallowCompare = function (nextProps) {
	        console.log("shallow-tree-grid");
	        //console.log("shallow-win -> isEqial = " + this.isPropsEqual(this.props, nextProps, ["children"]));
	        return !this.isPropsEqual(this.props, nextProps, ["children", "dataSource"]);
	    };
	    TreeGrid.prototype.renderEditableButtons = function () {
	        var buttons = [];
	        if (this.props.editable) {
	            if (this.props.denyInsert !== true)
	                buttons.push(React.createElement(Button_1.Button, {key: "insert", className: "is-outlined is-success", onClick: this.handleInsertButtonClick}, "Добавить"));
	            if (this.props.denyUpdate !== true)
	                buttons.push(React.createElement(Button_1.Button, {key: "update", className: "is-outlined is-info", onClick: this.handleUpdateButtonClick}, "Изменить"));
	            if (this.props.denyDelete !== true)
	                buttons.push(React.createElement(Button_1.Button, {key: "delete", className: "is-outlined is-danger", onClick: this.handleDeleteButtonClick}, "Удалить"));
	        }
	        return buttons;
	    };
	    TreeGrid.prototype.render = function () {
	        var _this = this;
	        //this.addClassName("button");
	        console.log("render-tree-grid");
	        var maxBodyWrapperWidth = this.calcTotalColumnsWidth() + getScrollBarWidth_1.getScrollbarWidth() + 1;
	        if (this.state.columns.length === 0)
	            maxBodyWrapperWidth = 0;
	        return (React.createElement(Layout_1.Layout, __assign({className: "tree-grid", type: "column", sizeTo: "parent"}, this.getRenderProps()), 
	            React.createElement(Fixed_1.Fixed, {className: "tree-grid-header-wrapper"}, 
	                React.createElement("button", {onClick: function () { }}, "refresh 5001"), 
	                React.createElement("button", {onClick: function () { _this.filterData(); _this.forceUpdate(); console.log("forceUpdate"); }}, "filter"), 
	                React.createElement("button", {onClick: function () { _this.expandAll(); }}, "expand all"), 
	                React.createElement("button", {onClick: function () { _this.collapseAll(); }}, "collapse all"), 
	                "заголовок и т.д."), 
	            React.createElement("div", {className: "tree-grid-body-wrapper", style: { position: "relative", overflow: "auto", flex: "1", maxWidth: maxBodyWrapperWidth }, onScroll: this.handleScroll.bind(this), ref: function (e) { _this.state.bodyWrapperElement = e; }}, 
	                this.renderEmptyDataSourceMessage(), 
	                this.renderGridBody(), 
	                this.renderColumnHeaders(), 
	                this.renderColumnFooters()), 
	            React.createElement(Fixed_1.Fixed, {className: "tree-grid-footer-wrapper"}, 
	                React.createElement(Layout_1.Layout, {type: "row", sizeTo: "content"}, 
	                    React.createElement(Fixed_1.Fixed, null, this.renderEditableButtons()), 
	                    React.createElement(Flex_1.Flex, null), 
	                    React.createElement(Fixed_1.Fixed, null, 
	                        React.createElement(Button_1.Button, {className: "is-smalln"}, "Выбрать"), 
	                        React.createElement(Button_1.Button, {className: "is-smalln"}, "Отмена")))
	            )));
	    };
	    return TreeGrid;
	}(Component_1.Component));
	exports.TreeGrid = TreeGrid;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Component_1 = __webpack_require__(5);
	var TreeGridColumns = (function (_super) {
	    __extends(TreeGridColumns, _super);
	    function TreeGridColumns(props, context) {
	        _super.call(this, props, context);
	    }
	    return TreeGridColumns;
	}(Component_1.Component));
	exports.TreeGridColumns = TreeGridColumns;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var registerGridColumn_1 = __webpack_require__(37);
	var TreeGridColumn = (function (_super) {
	    __extends(TreeGridColumn, _super);
	    function TreeGridColumn(props, context) {
	        _super.call(this, props, context);
	        //this.state.disabled = false;
	    }
	    return TreeGridColumn;
	}(Component_1.Component));
	exports.TreeGridColumn = TreeGridColumn;
	function GridColumn(params) {
	    return function (target, propertyName) {
	        //  console.log({target, propertyName, constr:target.constructor});
	        var regColumn = {
	            propertyName: propertyName,
	            objectType: target.constructor
	        };
	        _.assign(regColumn, params);
	        registerGridColumn_1.registerGridColumn(regColumn);
	        // registerGridColumn({
	        //     caption: params.caption,
	        //     width: params.width,
	        //     showHierarchyTree: params.showHierarchyTree,
	        //     showHierarchyPadding: params.showHierarchyPadding,
	        //     order: params.order || 0,
	        //     propertyName: propertyName,
	        //     objectType: target.constructor,
	        // });
	    };
	}
	exports.GridColumn = GridColumn;


/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	function registerGridColumn(columnInfo) {
	    var objType = columnInfo.objectType;
	    if (!objType.$$gridColumnInfos)
	        objType.$$gridColumnInfos = [];
	    objType.$$gridColumnInfos.push(columnInfo);
	    //console.log("registerPropertyEditor " + editor.propertyName);
	    //console.log(editor);
	}
	exports.registerGridColumn = registerGridColumn;


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	exports.Keycode = {
	    Esc: "Escape",
	    Space: " ",
	    Left: "ArrowLeft",
	    Up: "ArrowUp",
	    Down: "ArrowDown",
	    Right: "ArrowRight",
	    Del: "Delete",
	    Ins: "Insert",
	    Win: "Meta",
	    Menu: "ContextMenu",
	    Scroll: "ScrollLock",
	    Num: "NumLock",
	    Backspace: "Backspace",
	    Tab: "Tab",
	    Enter: "Enter",
	    Shift: "Shift",
	    Control: "Control",
	    Alt: "Alt",
	    Break: "Pause",
	    CapsLock: "CapsLock",
	    PageUp: "PageUp",
	    PageDown: "PageDown",
	    End: "End",
	    Home: "Home",
	    F1: "F1",
	    F2: "F2",
	    F3: "F3",
	    F4: "F4",
	    F5: "F5",
	    F6: "F6",
	    F7: "F7",
	    F8: "F8",
	    F9: "F9",
	    F10: "F10",
	    F11: "F11",
	    F12: "F12"
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	var cacheWidth = 0;
	window.addEventListener("resize", function (ev) {
	    cacheWidth = 0;
	    console.log("resize");
	});
	function getScrollbarWidth() {
	    if (cacheWidth > 0)
	        return cacheWidth;
	    var outer = document.createElement("div");
	    outer.style.visibility = "hidden";
	    outer.style.width = "100px";
	    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
	    document.body.appendChild(outer);
	    var widthNoScroll = outer.offsetWidth;
	    outer.style.overflow = "scroll";
	    var inner = document.createElement("div");
	    inner.style.width = "100%";
	    outer.appendChild(inner);
	    var widthWithScroll = inner.offsetWidth;
	    outer.parentNode.removeChild(outer);
	    cacheWidth = widthNoScroll - widthWithScroll;
	    return cacheWidth;
	}
	exports.getScrollbarWidth = getScrollbarWidth;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var io = __webpack_require__(41);
	var Db_1 = __webpack_require__(42);
	var socket = io.connect();
	function executeSQL(sql) {
	    //console.log("call SQL.sql.execute");
	    //return signalR.executeSQL(sql);
	    var promise;
	    promise = $.Deferred();
	    //  socket.once('connect',() => {
	    var queryId = "query-" + Math.random().toString(36).slice(2);
	    socket.emit("executeSQL", { queryId: queryId, sql: sql });
	    socket.once(queryId, function (response) {
	        if (response.error) {
	            promise.reject(response.error);
	        }
	        else {
	            var dataTable_1 = new Db_1.DataTable();
	            for (var i = 0; i < response.columns.length; i++) {
	                var dataColumn = new Db_1.DataColumn(dataTable_1, response.columns[i].name);
	                dataTable_1.columns.push(dataColumn);
	            }
	            response.rows.forEach(function (row) {
	                var dataRow = new Db_1.DataRow(dataTable_1);
	                for (var i = 0; i < dataTable_1.columns.length; i++) {
	                    if (response.columns[i].parse === "D")
	                        dataRow[dataTable_1.columns[i].name] = new Date(row[i]);
	                    else
	                        dataRow[dataTable_1.columns[i].name] = row[i];
	                }
	                dataTable_1.rows.push(dataRow);
	            });
	            promise.resolve(dataTable_1);
	        }
	    });
	    //   });
	    //signalR.executeSQL(sql).
	    //    done((result) => {
	    //        let res = eval(result);
	    //        if (res.error) {
	    //            promise.reject(res.error);
	    //        }
	    //        else {
	    //            let ds = new Dataset();
	    //            res.tables.forEach((table) => {
	    //                let dataTable = new DataTable(ds);
	    //                dataTable.name = table.name;
	    //                ds.tables.push(dataTable);
	    //                for (var i = 0; i < table.columns.length; i++) {
	    //                    let dataColumn = new DataColumn(dataTable, table.columns[i].name);
	    //                    dataTable.columns.push(dataColumn);
	    //                }
	    //                table.rows.forEach((row) => {
	    //                    let dataRow = new DataRow();
	    //                    for (var i = 0; i < table.columns.length; i++) {
	    //                        dataRow[table.columns[i].name] = row[i];
	    //                        dataRow[i] = row[i];
	    //                    }
	    //                    dataTable.rows.push(dataRow);
	    //                });
	    //            });
	    //            promise.resolve(ds)
	    //        }
	    //    }).
	    //    fail(() => {
	    //        promise.reject("ошибка connection signalR");
	    //    });
	    return promise;
	}
	exports.executeSQL = executeSQL;
	//export class SqlError extends Error {
	//}
	//export enum ColumnDataType { String, Number, Data }
	//export type DataType = string | number;


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = io;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
	var io = __webpack_require__(41);
	var Sql2_1 = __webpack_require__(43);
	var Error_1 = __webpack_require__(6);
	// общее с client и server ------------------
	var socket = io.connect();
	var DataTable = (function () {
	    function DataTable() {
	        this.columns = [];
	        this.rows = [];
	    }
	    return DataTable;
	}());
	exports.DataTable = DataTable;
	var DataColumn = (function () {
	    //dataType: ColumnDataType;
	    function DataColumn(table, name) {
	        this.table = table;
	        this.name = name || "";
	    }
	    return DataColumn;
	}());
	exports.DataColumn = DataColumn;
	var DataRow = (function () {
	    function DataRow(table) {
	        this.table = table;
	    }
	    DataRow.prototype.getValue = function (columnIndex) {
	        if (columnIndex < 0 || columnIndex >= this.table.columns.length)
	            throw "DataRow.getValue(" + columnIndex + "): columnIndex out of range";
	        return [this.table.columns[columnIndex].name];
	    };
	    return DataRow;
	}());
	exports.DataRow = DataRow;
	var Db = (function () {
	    function Db() {
	    }
	    Db.prototype.selectToObject = function (sql) {
	        var _this = this;
	        var promise = new Promise(function (resolve, reject) {
	            _this.executeSQL(sql)
	                .then(function (table) {
	                if (table.rows.length === 0)
	                    reject("rows count === 0");
	                else
	                    resolve({ x: table.rows[0].getValue(0) });
	            })
	                .catch(function (error) {
	                reject(error);
	            });
	        });
	        return promise;
	        // return this.executeSQL(sql).then((table: DataTable) => {
	        //     if (table.rows.length === 0)
	        //         throwError("table.rows.length===0");
	        //     else
	        //         obj.xxx = table.rows[0].getValue(0);
	        // });
	    };
	    Db.prototype.executeSQL = function (sql) {
	        var _this = this;
	        var getSqlText = function () {
	            if (sql instanceof Sql2_1.SelectStmt)
	                return sql.toSql(_this.dialect);
	            else if (_.isString(sql))
	                return sql;
	            else {
	                Error_1.throwError("Db.executeSql(): invalid sql type");
	                throw "fake";
	            }
	        };
	        var promise = new Promise(function (resolve, reject) {
	            //const a: string = "hello from Promise";
	            //resolve(a);
	            var queryId = "query-" + Math.random().toString(36).slice(2);
	            var req = {
	                dbName: _this.dbName,
	                sql: getSqlText(),
	                queryId: queryId
	            };
	            socket.emit("executeSQL", req);
	            socket.once(queryId, function (response) {
	                if (response.error) {
	                    reject(response.error);
	                }
	                else {
	                    var dataTable_1 = new DataTable();
	                    for (var i = 0; i < response.columns.length; i++) {
	                        var dataColumn = new DataColumn(dataTable_1, response.columns[i].name);
	                        dataTable_1.columns.push(dataColumn);
	                    }
	                    response.rows.forEach(function (row) {
	                        var dataRow = new DataRow(dataTable_1);
	                        for (var i = 0; i < dataTable_1.columns.length; i++) {
	                            if (response.columns[i].parse === "D")
	                                dataRow[dataTable_1.columns[i].name] = new Date(row[i]);
	                            else
	                                dataRow[dataTable_1.columns[i].name] = row[i];
	                        }
	                        dataTable_1.rows.push(dataRow);
	                    });
	                    resolve(dataTable_1);
	                }
	            });
	        });
	        //let promise: JQueryDeferred<DataTable>;
	        //promise = $.Deferred<DataTable>();
	        //  socket.once('connect',() => {
	        return promise;
	    };
	    return Db;
	}());
	exports.Db = Db;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Error_1 = __webpack_require__(6);
	var _ = __webpack_require__(4);
	var Emitter = (function () {
	    function Emitter() {
	        this.sql = [];
	    }
	    Emitter.prototype.emit = function (str) {
	        this.sql.push(str);
	        return this;
	    };
	    Emitter.prototype.emitLevel = function (level) {
	        if (!this.noLevels)
	            this.sql.push(level);
	        return this;
	    };
	    Emitter.prototype.emitLine = function () {
	        if (this.noLevels)
	            this.sql.push(" ");
	        else
	            this.sql.push("\n");
	        return this;
	    };
	    Emitter.prototype.emitQuotedName = function (name) {
	        if (this.dialect === "mssql")
	            this.sql.push("[" + name + "]");
	        else if (this.dialect === "pg")
	            this.sql.push("'" + name + "'");
	        else {
	            Error_1.throwError("Emitter: invalid sql dialect '" + this.dialect + "'");
	        }
	        return this;
	    };
	    Emitter.prototype.toSql = function () {
	        return this.sql.join("");
	    };
	    return Emitter;
	}());
	var SelectStmt = (function () {
	    function SelectStmt() {
	        this.columns = [];
	        this.from = [];
	        this.where = [];
	    }
	    SelectStmt.prototype.addColumn = function (column) {
	        if (_.isString(column))
	            this.columns.push({ column: column });
	        else
	            this.columns.push(column);
	        return this;
	    };
	    SelectStmt.prototype.addColumnAs = function (column, as) {
	        if (_.isString(column))
	            this.columns.push({ column: column, as: as });
	        else {
	            column.as = as;
	            this.columns.push(column);
	        }
	        return this;
	    };
	    SelectStmt.prototype.addFrom = function (table) {
	        if (_.isString(table))
	            this.from.push({ table: table });
	        else
	            this.from.push(table);
	        return this;
	    };
	    SelectStmt.prototype.addFromAs = function (table, as) {
	        if (_.isString(table))
	            this.from.push({ table: table, as: as });
	        else {
	            table.as = as;
	            this.from.push(table);
	        }
	        return this;
	    };
	    SelectStmt.prototype.addWhere = function (operand1, oper, operand2) {
	        this.where.push({ operand1: operand1, oper: oper, operand2: operand2 });
	        return this;
	    };
	    SelectStmt.prototype.emitColumn = function (col, e, level) {
	        e.emitLevel(level);
	        if (col.table)
	            e.emitQuotedName(col.table).emit(".");
	        if (!col.column && !col.raw)
	            Error_1.throwError("SelectStmt: column.name or column.raw not defined");
	        if (col.column)
	            e.emitQuotedName(col.column);
	        if (col.raw)
	            e.emit(col.raw);
	        if (col.as)
	            e.emit(" ").emitQuotedName(col.as);
	    };
	    SelectStmt.prototype.emitSelectTable = function (table, e, level) {
	        e.emitLevel(level);
	        if (table.db)
	            e.emitQuotedName(table.db).emit("..");
	        if (!table.table && !table.raw)
	            Error_1.throwError("SelectStmt: table.name or table.raw not defined");
	        if (table.table)
	            e.emitQuotedName(table.table);
	        if (table.raw)
	            e.emit(table.raw);
	        if (table.as)
	            e.emit(" ").emitQuotedName(table.as);
	    };
	    SelectStmt.prototype.toSql = function (dialect) {
	        var _this = this;
	        var e = new Emitter();
	        e.dialect = dialect;
	        e.noLevels = this instanceof InlineSelectStmt;
	        e.emit("select").emitLine();
	        this.columns.forEach(function (col, index) {
	            _this.emitColumn(col, e, "  ");
	            if (index !== _this.columns.length - 1)
	                e.emit(",");
	            e.emitLine();
	        });
	        e.emit("from").emitLine();
	        this.from.forEach(function (table, index) {
	            _this.emitSelectTable(table, e, "  ");
	            if (index !== _this.from.length - 1)
	                e.emit(",");
	            e.emitLine();
	        });
	        return e.toSql();
	    };
	    return SelectStmt;
	}());
	exports.SelectStmt = SelectStmt;
	var InlineSelectStmt = (function (_super) {
	    __extends(InlineSelectStmt, _super);
	    function InlineSelectStmt() {
	        _super.apply(this, arguments);
	    }
	    return InlineSelectStmt;
	}(SelectStmt));
	exports.InlineSelectStmt = InlineSelectStmt;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var DesignedObject_1 = __webpack_require__(11);
	var StringPropertyEditor_1 = __webpack_require__(12);
	var ListPropertyEditor_1 = __webpack_require__(45);
	var TreeGridColumn_1 = __webpack_require__(36);
	var SqlTable = (function (_super) {
	    __extends(SqlTable, _super);
	    function SqlTable() {
	        _super.apply(this, arguments);
	        this.columns = [];
	    }
	    SqlTable.prototype.addColumn = function (initCallback) {
	        var col = new SqlTableColumn(this);
	        if (initCallback)
	            initCallback(col);
	        this.columns.push(col);
	        return col;
	    };
	    SqlTable.prototype.getClassName = function () {
	        return "sql-таблица";
	    };
	    SqlTable.prototype.toString = function () {
	        return this.name;
	    };
	    __decorate([
	        StringPropertyEditor_1.StringEditor({
	            inputCaption: "Имя",
	            inputTab: "Главная",
	            inputGroup: "Основная",
	            inputDescription: "Имя таблицы"
	        })
	    ], SqlTable.prototype, "name", void 0);
	    __decorate([
	        StringPropertyEditor_1.StringEditor({
	            inputCaption: "sql имя",
	            inputTab: "Главная",
	            inputGroup: "Основная",
	            inputDescription: "sql имя таблицы"
	        })
	    ], SqlTable.prototype, "sqlname", void 0);
	    __decorate([
	        ListPropertyEditor_1.ListEditor({
	            inputTab: "Колонки",
	            getNewListItem: function (table) {
	                return new SqlTableColumn(table);
	            }
	        })
	    ], SqlTable.prototype, "columns", void 0);
	    return SqlTable;
	}(DesignedObject_1.DesignedObject));
	exports.SqlTable = SqlTable;
	var SqlTableColumn = (function (_super) {
	    __extends(SqlTableColumn, _super);
	    function SqlTableColumn($$table) {
	        _super.call(this);
	        this.$$table = $$table;
	    }
	    Object.defineProperty(SqlTableColumn.prototype, "table", {
	        get: function () {
	            return this.$$table;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SqlTableColumn.prototype, "testColumn", {
	        get: function () {
	            return this.name + "+" + this.dataType + "->" + this.table.name + this.table.$$uniqueObjectId;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    SqlTableColumn.prototype.getClassName = function () {
	        return "sql-колонка";
	    };
	    SqlTableColumn.prototype.toString = function () {
	        return this.name + " of (" + this.table.name + ")";
	    };
	    __decorate([
	        StringPropertyEditor_1.StringEditor({
	            inputCaption: "Имя колонки",
	            inputTab: "Главная",
	            inputGroup: "Основная",
	            inputDescription: "Имя колонки"
	        }),
	        TreeGridColumn_1.GridColumn({ caption: "Имя колонки" })
	    ], SqlTableColumn.prototype, "name", void 0);
	    __decorate([
	        StringPropertyEditor_1.StringEditor({
	            inputCaption: "тип",
	            inputTab: "Главная",
	            inputGroup: "Основная",
	            inputDescription: "sql тип колонки"
	        }),
	        TreeGridColumn_1.GridColumn({ caption: "Тип" })
	    ], SqlTableColumn.prototype, "dataType", void 0);
	    __decorate([
	        TreeGridColumn_1.GridColumn({ caption: "test", order: -1 })
	    ], SqlTableColumn.prototype, "testColumn", null);
	    return SqlTableColumn;
	}(DesignedObject_1.DesignedObject));
	exports.SqlTableColumn = SqlTableColumn;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var BasePropertyEditor_1 = __webpack_require__(13);
	var registerPropertyEditor_1 = __webpack_require__(14);
	var TreeGrid_1 = __webpack_require__(34);
	var TreeGridArrayDataSource_1 = __webpack_require__(46);
	var ListPropertyEditor = (function (_super) {
	    __extends(ListPropertyEditor, _super);
	    function ListPropertyEditor() {
	        _super.apply(this, arguments);
	    }
	    ListPropertyEditor.prototype.handleChange = function (event) {
	        // this.props.designedObject[this.props.propertyName] = (event.target as any).value;
	        // console.log("change === " + this.props.propertyName + " " + this.props.designedObject[this.props.propertyName]);
	    };
	    ListPropertyEditor.prototype.render = function () {
	        var _this = this;
	        var autoFormControlProps = {
	            inputCaption: this.props.inputCaption,
	            inputTab: this.props.inputTab,
	            inputGroup: this.props.inputGroup,
	            inputDescription: this.props.inputDescription
	        };
	        this.addProps(autoFormControlProps);
	        // return (
	        //     <Input
	        //         type={InputType.Text}
	        //         bindObject={this.props.designedObject}
	        //         bindPropName={this.props.propertyName}
	        //         onChange={this.props.onChange}
	        //         {...this.getRenderProps()}
	        //     />
	        // );
	        var dataSource = new TreeGridArrayDataSource_1.TreeGridArrayDataSource(this.props.designedObject[this.props.propertyName]);
	        dataSource.params.getNewRow = function () { return _this.props.customParams.getNewListItem(_this.props.designedObject); };
	        return (React.createElement(TreeGrid_1.TreeGrid, {dataSource: dataSource, treeMode: false, editable: true}));
	    };
	    return ListPropertyEditor;
	}(BasePropertyEditor_1.BasePropertyEditor));
	exports.ListPropertyEditor = ListPropertyEditor;
	function ListEditor(params) {
	    return function (target, propertyName) {
	        registerPropertyEditor_1.registerPropertyEditor({
	            inputCaption: params.inputCaption,
	            inputTab: params.inputTab,
	            inputGroup: params.inputGroup,
	            inputDescription: params.inputDescription,
	            propertyName: propertyName,
	            objectType: target.constructor,
	            editorType: ListPropertyEditor,
	            propertyType: String,
	            customParams: params
	        });
	    };
	}
	exports.ListEditor = ListEditor;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
	var getGridColumnInfos_1 = __webpack_require__(47);
	var Error_1 = __webpack_require__(6);
	var TreeGridArrayDataSource = (function () {
	    function TreeGridArrayDataSource(arrayObj, params) {
	        if (params === void 0) { params = {}; }
	        this.arrayObj = arrayObj;
	        this.params = params;
	    }
	    Object.defineProperty(TreeGridArrayDataSource.prototype, "isTreeGridDataSource", {
	        get: function () {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TreeGridArrayDataSource.prototype.getTreeGridColumns = function () {
	        if (this.arrayObj.length === 0)
	            return [];
	        else
	            return getGridColumnInfos_1.getGridColumnInfos(this.arrayObj[0]).map(function (col) {
	                var ret = {};
	                _.assign(ret, col);
	                return ret;
	                // return ({
	                //     caption: col.caption,
	                //     width: col.width,
	                //     order: col.order,
	                //     propertyName: col.propertyName,
	                //     showHierarchyTree: col.showHierarchyTree,
	                //     showHierarchyPadding: col.showHierarchyPadding
	                // });
	            });
	    };
	    TreeGridArrayDataSource.prototype.getDataRows = function () {
	        return this.arrayObj;
	    };
	    TreeGridArrayDataSource.prototype.getNewRow = function () {
	        if (this.params.getNewRow)
	            return this.params.getNewRow();
	        else {
	            Error_1.throwError("TreeGridArrayDataSource: method getNewRow() not defined");
	            throw ""; // fake typescript 2
	        }
	    };
	    TreeGridArrayDataSource.prototype.addRow = function (row) {
	        this.arrayObj.push(row);
	        return this.arrayObj.length - 1;
	    };
	    TreeGridArrayDataSource.prototype.deleteRow = function (rowIndex) {
	        var deletedItems = _.pullAt(this.arrayObj, rowIndex);
	        if (deletedItems.length === 0)
	            Error_1.throwError("TreeGridArrayDataSource.deleteRow(): invalid rowIndex (" + rowIndex + ")");
	    };
	    TreeGridArrayDataSource.prototype.getEmptyDataSourceMessage = function () {
	        if (this.params.getEmptyDataSourceMessage)
	            return this.params.getEmptyDataSourceMessage();
	        else
	            return "Пустой список.";
	    };
	    TreeGridArrayDataSource.prototype.getDeleteRowMessage = function () {
	        if (this.params.getDeleteRowMessage)
	            return this.params.getDeleteRowMessage();
	        else
	            return "Удалить запись!";
	    };
	    return TreeGridArrayDataSource;
	}());
	exports.TreeGridArrayDataSource = TreeGridArrayDataSource;


/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	function getGridColumnInfos(obj) {
	    var infos = obj.constructor.$$gridColumnInfos;
	    if (!infos)
	        return [];
	    infos = infos.filter(function (edt) { return obj instanceof edt.objectType; });
	    //console.log("getPropertyEditors") ;
	    //console.log(editors);
	    return infos;
	}
	exports.getGridColumnInfos = getGridColumnInfos;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjMxZGMxOWRmNzg0N2VhMjgwM2EiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9FcnJvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GbGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDEudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3QudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvZ2V0UHJvcGVydHlFZGl0b3JzLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UYWJzL1RhYnMudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvVmlzaWJsZVBsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvT25DbGlja1BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU25hcHNob3QudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL09ic2VydmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0RlZXBDbG9uZS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EZXNrdG9wL0Rlc2t0b3AudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC9BcHAudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC9BcHBFcnJvckJhci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvV2luZG93L1dpbmRvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTW92YWJsZS9Nb3ZhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDIudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1ucy50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW4udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL3JlZ2lzdGVyR3JpZENvbHVtbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvS2V5Y29kZS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvZ2V0U2Nyb2xsQmFyV2lkdGgudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NRTC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpb1wiIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtc3FsL0RiLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtc3FsL1NxbDIudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1zcWwvU3FsVGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRBcnJheURhdGFTb3VyY2UudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL2dldEdyaWRDb2x1bW5JbmZvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0EsS0FBWSxLQUFLLHVCQUFNLENBQU8sQ0FBQztBQUMvQixLQUFZLFFBQVEsdUJBQU0sQ0FBVyxDQUFDO0FBSXRDLHlDQUEwQixDQUErQyxDQUFDO0FBRzFFLG9CQUFtQjtBQUNuQiwwREFBeUQ7QUFDekQsMENBQXlDO0FBQ3pDLE1BQUs7QUFFTCxvQkFBbUI7QUFDbkIsZUFBYztBQUNkLHFCQUFvQjtBQUNwQixNQUFLO0FBRUwsU0FBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyx5QkFBVyxPQUFFLEVBQ2QsUUFBUSxDQUFD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LElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUM7U0FFaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDeEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FFeEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUUzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDOUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFD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LFVBQVUsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO0tBRTdELHFDQUFxQztLQUNyQyx1QkFBdUI7S0FDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUVqQixFQUFDO0FBYmUsMkJBQWtCLHFCQWFqQyIsImZpbGUiOiIuL2Rpc3QvQnVodGFBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGYzMWRjMTlkZjc4NDdlYTI4MDNhXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbmltcG9ydCB7IEhlbGxvIH0gZnJvbSBcIi4vSGVsbG9Qcm9wc1wiO1xyXG5pbXBvcnQge0FwcH0gZnJvbSBcIi4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHAvQXBwXCI7XHJcbmltcG9ydCB7QXBwRGVzaWduZXJ9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXJcIjtcclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MVwiO1xyXG5cclxuLy8gUmVhY3RET00ucmVuZGVyKFxyXG4vLyAgICAgPEhlbGxvIGNvbXBpbGVyPVwiVHlwZVNjcmlwdFwiIGZyYW1ld29yaz1cIlJlYWN0XCIgLz4sXHJcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVcIilcclxuLy8gKTtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICAgIDxBcHAvPixcclxuLy8gICAgIGRvY3VtZW50LmJvZHlcclxuLy8gKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxBcHBEZXNpZ25lci8+LFxyXG4gICAgZG9jdW1lbnQuYm9keVxyXG4pO1xyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0xheW91dFwiO1xyXG5pbXBvcnQge0ZpeGVkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRmxleFwiO1xyXG5cclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi4vLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MVwiO1xyXG5pbXBvcnQge09iamVjdERlc2lnbmVyfSBmcm9tIFwiLi4vT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXJcIjtcclxuaW1wb3J0IHtEZXNrdG9wLCBPcGVuV2luZG93UGFyYW1zfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQge0RyYWdnYWJsZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EcmFnZ2FibGUvRHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7TW92YWJsZSwgTW92ZUV2ZW50LCBNb3ZlU3RhcnRFdmVudH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGVcIjtcclxuaW1wb3J0IHtBcHAsIGFwcEluc3RhbmNlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC9BcHBcIjtcclxuaW1wb3J0IHtXaW5kb3d9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvV2luZG93L1dpbmRvd1wiO1xyXG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UYWJzL1RhYnNcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybVwiO1xyXG5pbXBvcnQge0lucHV0LCBJbnB1dFR5cGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IHtJbnB1dERpdmlkZXJ9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXREaXZpZGVyL0lucHV0RGl2aWRlclwiO1xyXG5pbXBvcnQge3Rlc3RCdWh0YU9iamVjdDJ9IGZyb20gXCIuLi8uLi9UZXN0MS90ZXN0QnVodGFPYmplY3QyXCI7XHJcbmltcG9ydCB7Z2V0UHJvcGVydHlFZGl0b3JzfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL2dldFByb3BlcnR5RWRpdG9yc1wiO1xyXG5pbXBvcnQge0F1dG9Gb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcbmltcG9ydCB7VHJlZUdyaWR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbiwgR3JpZENvbHVtbn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnNcIjtcclxuaW1wb3J0IHtleGVjdXRlU1FMfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9TUUxcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQge1NxbFRhYmxlfSBmcm9tIFwiLi4vLi4vYnVodGEtc3FsL1NxbFRhYmxlXCI7XHJcbmltcG9ydCB7U25hcHNob3R9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL1NuYXBzaG90XCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQXJyYXlEYXRhU291cmNlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQXJyYXlEYXRhU291cmNlXCI7XHJcbmltcG9ydCB7U3RyaW5nUHJvcGVydHlFZGl0b3IsIFN0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge3Rocm93RXJyb3J9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0Vycm9yXCI7XHJcbmltcG9ydCB7U2VsZWN0U3RtdCwgSW5saW5lU2VsZWN0U3RtdH0gZnJvbSBcIi4uLy4uL2J1aHRhLXNxbC9TcWwyXCI7XHJcbmltcG9ydCB7RGF0YVRhYmxlLCBEYn0gZnJvbSBcIi4uLy4uL2J1aHRhLXNxbC9EYlwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGVzaWduZXJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcERlc2lnbmVyU3RhdGU+IHtcclxuICAgIC8vdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcERlc2lnbmVyU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxBcHBEZXNpZ25lclByb3BzPiB7XHJcbiAgICAvL3RleHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBEZXNpZ25lciBleHRlbmRzIENvbXBvbmVudDxBcHBEZXNpZ25lclByb3BzLCBBcHBEZXNpZ25lclN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQXBwRGVzaWduZXJQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEFwcERlc2lnbmVyU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGluaXRUZXN0KCkge1xyXG4gICAgLy8gICAgIHRoaXMudGVzdE9iamVjdC5uYW1lID0gXCLQotC10YHRgtC+0LLRi9C5INC+0LHRitC10LrRgjFcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBtb3ZlU3RhcnQoZTogTW92ZVN0YXJ0RXZlbnQpIHtcclxuICAgICAgICBlLmJpbmRYKHRoaXMsIFwic2lkZVdpZHRoXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaWRlV2lkdGg6IG51bWJlciA9IDMwMDtcclxuXHJcbiAgICB0ZXN0T3BlbldpbmRvdygpIHtcclxuXHJcbiAgICAgICAgLy8gbGV0IG9iaiA9IHtcclxuICAgICAgICAvLyAgICAg0KTQsNC80LjQu9C40Y86IFwi0KHQsNCy0YfQtdC90LrQvtCyXCIsXHJcbiAgICAgICAgLy8gICAgINCY0LzRjzogXCLQmtC+0L3RgdGC0LDQvdGC0LjQvVwiLFxyXG4gICAgICAgIC8vICAgICDQntGC0YfQtdGB0YLQstC+OiBcItCS0LvQsNC00LjQvNC40YDQvtCy0LjRh1wiXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCB3aW4gPVxyXG4gICAgICAgIC8vICAgICA8VGFicz5cclxuICAgICAgICAvLyAgICAgICAgIDxUYWIgdGl0bGU9XCLQt9Cw0LrQu9Cw0LTQutCwIDFcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0IGNhcHRpb249XCLQpNCw0LzQuNC70LjRj1wiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXtvYmp9IGJpbmRQcm9wTmFtZT1cItCk0LDQvNC40LvQuNGPXCIvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXQgY2FwdGlvbj1cItCY0LzRj1wiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXtvYmp9IGJpbmRQcm9wTmFtZT1cItCY0LzRj1wiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0RGl2aWRlciB0aXRsZT1cItCwINGC0LXQv9C10YDRjCDQvtGC0YfQtdGB0YLQstC+XCI+PC9JbnB1dERpdmlkZXI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17b2JqfSBiaW5kUHJvcE5hbWU9XCLQntGC0YfQtdGB0YLQstC+XCIvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAvLyAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgIC8vICAgICAgICAgPFRhYiB0aXRsZT1cItC30LDQutC70LDQtNC60LAgMlwiPiAyMjIyMiA8L1RhYj5cclxuICAgICAgICAvLyAgICAgPC9UYWJzPjtcclxuICAgICAgICAvLyBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHRlc3RPcGVuT2JqZWN0RGVzaWduZXIoKSB7XHJcbiAgICAgICAgbGV0IHRlc3RPYmplY3Q6IFRlc3RCdWh0YU9iamVjdDEgPSBuZXcgVGVzdEJ1aHRhT2JqZWN0MSgpO1xyXG4gICAgICAgIHRlc3RPYmplY3QuZmlyc3ROYW1lID0gXCLQmNCz0L7RgNGMMFwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QubGFzdE5hbWUgPSBcItCh0LjQtNC+0YDQtdC90LrQvjBcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0LnN1ck5hbWUgPSBcItCe0LvQtdCz0L7QstC40YcwXCI7XHJcblxyXG4vLyAgICAgICAgbGV0IHdpbiA9IDxPYmplY3REZXNpZ25lciBvbkNoYW5nZT17KCk9Pnsgd2luMkluc3RhbmNlLmRlc2lnbmVkT2JqZWN0PW51bGw7IHdpbjJJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpOyBjb25zb2xlLmxvZyhcInRlc3QzMjMtY2hhbmdlXCIpfX0gZGVzaWduZWRPYmplY3Q9e3Rlc3RPYmplY3R9IGtleT1cIjFcIj4gPC9PYmplY3REZXNpZ25lcj47XHJcbiAgICAgICAgbGV0IHdpbiA9IDxPYmplY3REZXNpZ25lclxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyB0ZXN0T2JqZWN0ID0gXy5jbG9uZURlZXAodGVzdE9iamVjdCk7ICB3aW4ySW5zdGFuY2UuZm9yY2VVcGRhdGUoKTsgY29uc29sZS5sb2coXCJ0ZXN0OTk5LWNoYW5nZVwiKTsgfX1cclxuICAgICAgICAgICAgZGVzaWduZWRPYmplY3Q9e3Rlc3RPYmplY3R9IGtleT1cIjFcIj4gPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgIGxldCB0ZXN0T2JqZWN0MjogdGVzdEJ1aHRhT2JqZWN0MiA9IG5ldyB0ZXN0QnVodGFPYmplY3QyKCk7XHJcbiAgICAgICAgdGVzdE9iamVjdDIuZmlyc3ROYW1lID0gXCLQmNCz0L7RgNGMMVwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLmxhc3ROYW1lID0gXCLQodC40LTQvtGA0LXQvdC60L4yXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdDIuc3VyTmFtZSA9IFwi0J7Qu9C10LPQvtCy0LjRhzFcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5zZXggPSBcItC80YPQttGB0LrQvtC5XCI7XHJcblxyXG4gICAgICAgIGxldCB3aW4ySW5zdGFuY2U6IGFueTtcclxuXHJcbiAgICAgICAgbGV0IHdpbjIgPSA8T2JqZWN0RGVzaWduZXIgcmVmPXsgKGU6YW55KSA9PiB7IHdpbjJJbnN0YW5jZSA9IGU7IH0gfSBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiMlwiPlxyXG4gICAgICAgIDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICAvL2dldFByb3BlcnR5RWRpdG9ycyh0ZXN0T2JqZWN0KTtcclxuICAgICAgICAvL2dldFByb3BlcnR5RWRpdG9ycyh0ZXN0T2JqZWN0Mik7XHJcblxyXG4gICAgICAgIGxldCB3aW53aW4gPSA8ZGl2Pnt3aW59e3dpbjJ9PC9kaXY+O1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLQvtC60L3QviAxXCIsXHJcbiAgICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDUwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbndpbiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB0ZXN0SW1tdXRhYmxlKCkge1xyXG4gICAgICAgIC8vIC8vbGV0IGZha2U9bmV3IFRhYmxlKFtdKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnN0IHh4eCA9IEltbXV0YWJsZS5NYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBsZXQgb2JqID0ge1xyXG4gICAgICAgIC8vICAgICBuYW1lOiBcItCe0LPQsNC90LjQt9Cw0YbQuNGPXCIsXHJcbiAgICAgICAgLy8gICAgIGNvbHVtbnM6IHtcItCd0L7QvNC10YBcIjoge2NvbE5hbWU6IFwi0J3QvtC80LXRgFwiLCB0eXBlOiBcInN0cmluZ1wifSwgXCLQndCw0LfQstCw0L3QuNC1XCI6IHtjb2xOYW1lOiBcItCd0LDQt9Cy0LDQvdC40LVcIiwgdHlwZTogXCJzdHJpbmdcIn19XHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBvYmpJID0gSW1tdXRhYmxlLmZyb21KUyhvYmopO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLy9sZXQgbSA9IEltbXV0YWJsZS5NYXA8c3RyaW5nLG51bWJlcnwgSW1tdXRhYmxlLk1hcDxudW1iZXIsc3RyaW5nPj4oKTtcclxuICAgICAgICAvLyAvL2xldCB4ID0gbS5zZXQoXCIxM3l5dDMzMzMzMlwiLCAxMik7XHJcbiAgICAgICAgLy8gLy9sZXQgeSA9IG0uc2V0KFwieHh4XCIsIEltbXV0YWJsZS5NYXA8bnVtYmVyLHN0cmluZz4oKSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAvL2xldCB5PW0udXBkYXRlKFwieHh4XCIsSW1tdXRhYmxlLk1hcDxudW1iZXIsc3RyaW5nPigpKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9iakkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy8gbGV0IHggPSBvYmpJLmdldEluKFsnY29sdW1ucycsICfQndC+0LzQtdGAJywgJ2NvbE5hbWUnXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coeCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBzdHI6IHN0cmluZyA9IFwi0L/RgNC40LLQtdGCXCI7XHJcblxyXG4gICAgdGVzdEF1dG9Gb3JtKCkge1xyXG4gICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgPEF1dG9Gb3JtIHNpemVUbz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc30gYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMVwiIGlucHV0Q2FwdGlvbj1cImVlZTFcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsxXCIgaW5wdXRDYXB0aW9uPVwiZWVlMlwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizFcIiBpbnB1dENhcHRpb249XCJlZWUzXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMlwiIGlucHV0Q2FwdGlvbj1cImVlZTRcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgIDwvQXV0b0Zvcm0+O1xyXG4vLyAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLXCIgaW5wdXRDYXB0aW9uPVwiZWVlXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9IGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiYXV0byBmb3JtXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDEwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRlc3RHcmlkKCkge1xyXG4gICAgICAgIC8vIGV4ZWN1dGVTUUwoXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YBcIilcclxuICAgICAgICAvLyAgICAgLmRvbmUoKHRhYmxlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IHRhYmxlLnJvd3MubWFwPERlc2lnbmVkT2JqZWN0PigocikgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiB70JrQu9GO0Yc6IHJbXCLQmtC70Y7Rh1wiXSwg0J3QvtC80LXRgDogcltcItCd0L7QvNC10YBcIl0sINCd0LDQt9Cy0LDQvdC40LU6IHJbXCLQndCw0LfQstCw0L3QuNC1XCJdfTtcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIGxldCBkcyA9IG5ldyBUcmVlR3JpZEFycmF5RGF0YVNvdXJjZShkYXRhU291cmNlKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IFRPUCA1MDAwINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQndC+0LzQtdGAID0+XCIgKyB0YWJsZS5yb3dzWzBdLmdldFZhbHVlKDEpKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHdpbjIgPVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxUcmVlR3JpZFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXsgZGF0YVNvdXJjZSB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRyZWVNb2RlPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBoaWVyYXJjaHlGaWVsZE5hbWU9XCLQndC+0LzQtdGAXCJcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaGllcmFyY2h5RGVsaW1pdGVycz1cIi5cIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBhdXRvRXhwYW5kTm9kZXNUb0xldmVsPXswfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlZGl0YWJsZT17dHJ1ZX1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGVueURlbGV0ZT17dHJ1ZX1cclxuICAgICAgICAvLyAgICAgICAgICAgICA+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbnM+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwMlwiIHByb3BlcnR5TmFtZT1cItCd0L7QvNC10YBcIiBzaG93SGllcmFyY2h5VHJlZT17ZmFsc2V9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH0+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQmtC+0LvQvtC90LrQsDNcIiBwcm9wZXJ0eU5hbWU9XCLQndCw0LfQstCw0L3QuNC1XCIgc2hvd0hpZXJhcmNoeVRyZWU9e3RydWV9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH0+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQmtC+0LvQvtC90LrQsDFcIiBwcm9wZXJ0eU5hbWU9XCLQmtC70Y7Rh1wiIHdpZHRoPXs4MH0+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1ucz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L1RyZWVHcmlkPjtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogXCJhdXRvIGZvcm1cIixcclxuICAgICAgICAvLyAgICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxlZnQ6IDEwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGhlaWdodDogODAwXHJcbiAgICAgICAgLy8gICAgICAgICB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgIC5mYWlsKChlcnIpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy9cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdEZsZXgoKSB7XHJcbiAgICAgICAgbGV0IHdpbjIgPVxyXG4gICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJjb2x1bW5cIiBzaXplVG89XCJwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjpcIjJweCBkb3R0ZWQgcmVkXCIsIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOjAsIGxlZnQ6MCxyaWdodDowLCBib3R0b206MCB9fT5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIGJsdWVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCe0LTQuNC9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggc3R5bGU9e3sgYm9yZGVyOlwiMnB4IGRvdHRlZCBncmVlblwiIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJjb2x1bW5cIiBzaXplVG89XCJwYXJlbnRcIiBzdHlsZT17eyBib3JkZXI6XCIxcHggc29saWQgcmVkXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkIHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCBibHVlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPi0tLS0tLdCe0LTQuNC9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCBncmVlblwiIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj4tLS0tLS0t0JTQstCwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPi0tLS0tLS0t0JTQstCwMTwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjExMTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjIyMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMTExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjIyMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTExMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMjIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjExMTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjIyMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZCBzdHlsZT17eyBib3JkZXI6XCIxcHggc29saWQgbWFyb29uXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPi0tLS0tLS0t0KLRgNC4PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8Rml4ZWQgc3R5bGU9e3sgYm9yZGVyOlwiMnB4IGRvdHRlZCBtYXJvb25cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCi0YDQuDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD47XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcInRlc3QgRkxFWFwiLFxyXG4gICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICBsZWZ0OiAxMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0VGFibGVEZXNpZ25lcigpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBuZXcgU3FsVGFibGUoKTtcclxuXHJcbiAgICAgICAgdGFibGUubmFtZSA9IFwi0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgIHRhYmxlLnNxbG5hbWUgPSBcImRiby7QntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0L7QvNC10YBcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDEwKVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbC5uYW1lID0gXCLQndCw0LfQstCw0L3QuNC1XCI7XHJcbiAgICAgICAgICAgIGNvbC5kYXRhVHlwZSA9IFwidmFyY2hhcig1MClcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHdpbiA9IDxPYmplY3REZXNpZ25lclxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyBjb25zb2xlLmxvZyhcInRhYmxlLWNoYW5nZVwiKTsgfX1cclxuICAgICAgICAgICAgZGVzaWduZWRPYmplY3Q9e3RhYmxlfT5cclxuICAgICAgICA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiLFxyXG4gICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICBsZWZ0OiA1MFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4sIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0ZXN0U25hcHNob3QoKSB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gbmV3IFNxbFRhYmxlKCk7XHJcblxyXG4gICAgICAgIHRhYmxlLm5hbWUgPSBcItCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIjtcclxuICAgICAgICB0YWJsZS5zcWxuYW1lID0gXCJkYm8u0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbC5uYW1lID0gXCLQndC+0LzQtdGAXCI7XHJcbiAgICAgICAgICAgIGNvbC5kYXRhVHlwZSA9IFwidmFyY2hhcigxMClcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YWJsZS5hZGRDb2x1bW4oKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICBjb2wubmFtZSA9IFwi0J3QsNC30LLQsNC90LjQtVwiO1xyXG4gICAgICAgICAgICBjb2wuZGF0YVR5cGUgPSBcInZhcmNoYXIoNTApXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuXHJcbiAgICAgICAgbGV0IHMgPSBuZXcgU25hcHNob3QoKTtcclxuICAgICAgICBzLnNhdmVPYmplY3QodGFibGUsIFwidGFibGUxXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJsZSk7XHJcblxyXG4gICAgICAgIHRhYmxlLm5hbWUgPSBcItC20L7Qv9CwXCI7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucy5sZW5ndGggPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuXHJcbiAgICAgICAgcy5yZXN0b3JlT2JqZWN0KHRhYmxlLCBcInRhYmxlMVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJsZSk7XHJcblxyXG4gICAgICAgIHRoaXMudGVzdFNuYXBzaG90UHJlZm9ybWFuY2UoKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0ZXN0U25hcHNob3RQcmVmb3JtYW5jZSgpIHtcclxuICAgICAgICBsZXQgeDogYW55ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRhYmxlID0gbmV3IFNxbFRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICB0YWJsZS5uYW1lID0gXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgICAgIHRhYmxlLnNxbG5hbWUgPSBcImRiby7QntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2wubmFtZSA9IFwi0J3QvtC80LXRgFwiO1xyXG4gICAgICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDEwKVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbC5uYW1lID0gXCLQndCw0LfQstCw0L3QuNC1XCI7XHJcbiAgICAgICAgICAgICAgICBjb2wuZGF0YVR5cGUgPSBcInZhcmNoYXIoNTApXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB4LnB1c2godGFibGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBzID0gbmV3IFNuYXBzaG90KCk7XHJcbiAgICAgICAgY29uc29sZS50aW1lKFwieDFcIik7XHJcbiAgICAgICAgcy5zYXZlT2JqZWN0KHgsIFwieFwiKTtcclxuICAgICAgICBjb25zb2xlLnRpbWVFbmQoXCJ4MVwiKTtcclxuICAgICAgICB4Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgcy5yZXN0b3JlT2JqZWN0KHgsIFwieFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh4KTtcclxuICAgIH07XHJcblxyXG4gICAgdGVzdEdyaWQyKCkge1xyXG5cclxuICAgICAgICBjbGFzcyBWaWQgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcblxyXG4gICAgICAgICAgICBAU3RyaW5nRWRpdG9yKClcclxuICAgICAgICAgICAgQEdyaWRDb2x1bW4oe2NhcHRpb246IFwi0Y3RgtC+INC90L7QvNC10YBcIn0pXHJcbiAgICAgICAgICAgIE51bTogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgQFN0cmluZ0VkaXRvcigpXHJcbiAgICAgICAgICAgIEBHcmlkQ29sdW1uKHt9KVxyXG4gICAgICAgICAgICBOYW1lOiBzdHJpbmc7XHJcblxyXG5cclxuICAgICAgICAgICAgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi0JLQuNC0INGC0L7QstCw0YDQsFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgWyR7dGhpcy5OdW19XSAgYCArIHRoaXMuTmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4ZWN1dGVTUUwoXCJzZWxlY3QgVE9QIDEwINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQndC+0LzQtdGAXCIpXHJcbiAgICAgICAgICAgIC5kb25lKCh0YWJsZTogRGF0YVRhYmxlfHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0YWJsZSBpbnN0YW5jZW9mIERhdGFUYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2aWRzID0gdGFibGUucm93cy5tYXA8VmlkPigocikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZpZCA9IG5ldyBWaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkLk51bSA9IFwiKlwiICsgcltcItCd0L7QvNC10YBcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZC5OYW1lID0gXCIqXCIgKyByW1wi0J3QsNC30LLQsNC90LjQtVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IFRPUCAxMCA9PT4gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmlkcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhU291cmNlID0gbmV3IFRyZWVHcmlkQXJyYXlEYXRhU291cmNlKHZpZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucGFyYW1zLmdldE5ld1JvdyA9ICgpID0+IG5ldyBWaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RhdGFTb3VyY2UucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UgPSAoKSA9PiBcItCS0YHQtSDQv9GD0YHRgtC+LCDQsdC70LjQvSEg0JbQvNC4INC90LAg0LPQsNC3IVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UgPSAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cItCS0YHQtSDQv9GD0YHRgtC+LCA8aT7QsdC70LjQvSE8L2k+INCW0LzQuCDQvdCwINCz0LDQtyFcIjwvc3Bhbj47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmVlR3JpZD47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInRlc3QgZ3JpZCAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFdpbmRvd0F1dG9TaXplKCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoMSA9PT0gMSlcclxuICAgICAgICAgICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKFwiMzMzKytcIikpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hZyA9IFwiR2V0IHRoZSBjdXJyZW50IGNvb3JkaW5hdGVzIG9mIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBzZXQgb2YgbWF0Y2hlZCBlbGVtZW50cywgcmVsYXRpdmUgdG8gXCI7XHJcblxyXG4gICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAg0J/RgNC40LLQtdGCINGD0YDQvtC00YtcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCU0LAg0Lgg0L3QtdGCIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0JTQsCDQuCDQvdC10YIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCU0LAg0Lgg0L3QtdGCIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7QlNCwINC4INC90LXRgiA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0JTQsCDQuCDQvdC10YIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgKHNlbmRlcjpCdXR0b24sIGU6UmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuTWVzc2FnZVdpbmRvdyhtYWcsIHsgc3R5bGU6XCJpbmZvcm1hdGlvblwiLCBwYXJlbnRXaW5kb3dJZDogc2VuZGVyLmdldFBhcmVudFdpbmRvd0lkKCkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCd0L7QstC+0LVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJ0ZXN0IEFVVE9TSVpFXCIsXHJcbiAgICAgICAgICAgIGF1dG9TaXplOiBcImNvbnRlbnRcIixcclxuICAgICAgICAgICAgYXV0b1Bvc2l0aW9uOiBcImRlc2t0b3AtY2VudGVyXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdE9ic2VydmFibGUoKSB7XHJcblxyXG4gICAgICAgIGxldCBkYiA9IG5ldyBEYigpO1xyXG4gICAgICAgIGRiLmRiTmFtZSA9IFwic2NoZW1hXCI7XHJcbiAgICAgICAgZGIuZGlhbGVjdCA9IFwibXNzcWxcIjtcclxuXHJcbiAgICAgICAgLy90aHJvd0Vycm9yKFwi0LbQvtC/0LBcIik7XHJcblxyXG5cclxuICAgICAgICBkYi5zZWxlY3RUb09iamVjdChcInNlbGVjdCAn0LbQvtC/0LAxMicgYXMg0JbQvtC/0LBcIikuZG9uZSgob2JqKT0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRiLmV4ZWN1dGVTUUwoXCJzZWxlY3QgKiBmcm9tIFNjaGVtYU9iamVjdFwiKVxyXG4gICAgICAgICAgICAudGhlbigodGFibGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBsZXQgeD1TcWwuc2VsZWN0KFwi0L3QvtC80LXRgFwiLFwi0L3QsNC30LLQsNC90LjQtVwiLFwiOnF3ZXJ0IGFzIDEyXCIpXHJcbiAgICAgICAgLy8gICAgIC5mcm9tKFtcItCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIixcIm9yZ1wiXSlcclxuICAgICAgICAvLyAgICAgLndoZXJlKFwi0LPQvtGA0L7QtFwiLFwiPj1cIixcItCh0YLRgNCw0L3QsFwiKVxyXG4gICAgICAgIC8vICAgICAuYW5kV2hlcmUoXCLQs9C+0YDQvtC0MlwiLFwiIT1cIixcItCh0YLRgNCw0L3QsDJcIilcclxuICAgICAgICAvLyAgICAgOy8vLmVxKFwiXCIpO1xyXG5cclxuICAgICAgICAvLyBsZXQgeCA9IG5ldyBTZWxlY3RTdG10KCk7XHJcbiAgICAgICAgLy8geC5hZGRDb2x1bW4oXCLQvdC+0LzQtdGAXCIpO1xyXG4gICAgICAgIC8vIHguYWRkQ29sdW1uKFwi0L3QsNC30LLQsNC90LjQtVwiKTtcclxuICAgICAgICAvLyB4LmFkZEZyb20oXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCIpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coeC50b1NxbChcIm1zc3FsXCIpKTtcclxuICAgICAgICAvLyBsZXQgeHh4OiBhbnkgPSB7fTtcclxuICAgICAgICAvLyBsZXQgcHJveHlIYW5kbGVyID0ge1xyXG4gICAgICAgIC8vICAgICBnZXQ6ICh0YXJnZXQ6IGFueSwgcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy9jb25zb2xlLmxvZyhcImhhbmRsZXJHZXQ/Pz9cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRhcmdldFtwXTtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0OiAodGFyZ2V0OiBhbnksIHA6IFByb3BlcnR5S2V5LCB2YWx1ZTogYW55LCByZWNlaXZlcjogYW55KTogYW55ID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlclNldFwiKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHApO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLVByb3h5LS0tLS1cIik7XHJcbiAgICAgICAgLy8gbGV0IHByb3h5ID0gbmV3IFByb3h5KHh4eCwgcHJveHlIYW5kbGVyKTtcclxuICAgICAgICAvLyBwcm94eS54MTExID0gMzMzO1xyXG4gICAgICAgIC8vIHByb3h5Lm8gPSB7fTtcclxuICAgICAgICAvLyBwcm94eS5vLmVlZSA9IFwiZWVlMVwiO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocHJveHkueDExMSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm94eSk7XHJcblxyXG4gICAgICAgIC8vIGxldCB4ID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY2xhc3MgQSBleHRlbmRzIFByb3h5PEFycmF5PGFueT4+IHtcclxuICAgICAgICAvLyAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIGxldCBoYW5kbGVyOiBQcm94eUhhbmRsZXI8QXJyYXk8YW55Pj4gPSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZ2V0OiAodGFyZ2V0OiBBcnJheTxhbnk+LCBwOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlckdldFwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBzdXBlcihbXSwgaGFuZGxlcik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiOVwiKTtcclxuICAgICAgICAvLyBsZXQgYSA9IG5ldyBBKCk7XHJcbiAgICAgICAgLy8gYS5wdXNoKDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjEwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImFwcC1kZXNpZ25lclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7c2l6ZVRvOiBcInBhcmVudFwifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IHNpemVUbz1cInBhcmVudFwiIHR5cGU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwiaGVhZGVyMVwiPkZpeGVkIEhlYWRlcjwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cInJvd1wiIHNpemVUbz1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cInNpZGViYXJcIiBzdHlsZT17e3dpZHRoOnRoaXMuc2lkZVdpZHRofX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRml4ZWQgU2lkZWJhciAxMjM8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RPcGVuV2luZG93KCk7IH19PiB0ZXN0IG9wZW4gd2luZG93PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0T3Blbk9iamVjdERlc2lnbmVyKCk7IH19Pm9wZW4gZGVzaWduZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RJbW11dGFibGUoKTsgfX0+dGVzdEltbXV0YWJsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEF1dG9Gb3JtKCk7IH19PnRlc3QgYXV0b2Zvcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RHcmlkKCk7IH19PnRlc3QgR1JJRDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEZsZXgoKTsgfX0+dGVzdCBGTEVYPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0VGFibGVEZXNpZ25lcigpOyB9fT50ZXN0IFRBQkxFIERFU0lHTkVSPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0U25hcHNob3QoKTsgfX0+dGVzdCBTTkFQU0hPVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEdyaWQyKCk7IH19PnRlc3QgR1JJRC0yPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0V2luZG93QXV0b1NpemUoKTsgfX0+dGVzdCBXSU4gQVVUT1NJWkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdE9ic2VydmFibGUoKTsgfX0+dGVzdCBPQlNFUlZBQkxFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwiWFhYY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92YWJsZSBvbk1vdmVTdGFydD17dGhpcy5tb3ZlU3RhcnQuYmluZCh0aGlzKX0+TU9WPC9Nb3ZhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0FwcD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcbmltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi4vUGx1Z2lucy9QbHVnaW5cIjtcclxuaW1wb3J0IHtXaW5kb3d9IGZyb20gXCIuL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtEZXNrdG9wLCBPcGVuTWVzc2FnZVdpbmRvd1BhcmFtc30gZnJvbSBcIi4vRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4uL0Vycm9yXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBYT25DbGlja1Byb3BzIHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50UHJvcHM8Uz4gZXh0ZW5kcyBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8RWxlbWVudD4ge1xyXG4gICAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG4gICAgb25XaWxsTW91bnQ/OiAoc3RhdGU6IFMpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U3RhdGU8UD4ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogQ29tcG9uZW50PFAsIGFueT4pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9yY2VVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvL2NsaWNrQ291bnQ6IG51bWJlcjtcclxuICAgIC8vIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8Uz4sIFMgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxQPj4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UCwgUz4ge1xyXG5cclxuICAgIHBsdWdpbnM6IENvbXBvbmVudFBsdWdpbjxhbnksIGFueT5bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQLCBjb250ZXh0OiBhbnkgLypzdGF0ZUNsYXNzPzogRnVuY3Rpb24qLykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgLy8gdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IHBsdWdJbnN0YW5jZTogYW55ID0gbmV3IHBsdWcodGhpcyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdJbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJQcm9wczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIHJlbmRlclN0eWxlczogYW55ID0ge307XHJcblxyXG4gICAgZ2V0UGFyZW50V2luZG93KCk6IFdpbmRvdyB8IG51bGwge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIGlmICgocGFyZW50IGFzIGFueSkuJCR3aW5kb3cpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmVudCBhcyBhbnkpLiQkd2luZG93IGFzIFdpbmRvdztcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudERlc2t0b3AoKTogRGVza3RvcCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKChwYXJlbnQgYXMgYW55KS4kJGRlc2t0b3ApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmVudCBhcyBhbnkpLiQkZGVza3RvcCBhcyBEZXNrdG9wO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3dFcnJvcihcImdldFBhcmVudERlc2t0b3AoKTogZGVza3RvcCBub3QgZm91bmRcIik7ICBcclxuICAgICAgICByZXR1cm4ge30gYXMgRGVza3RvcDsgIC8vIGZha2UgdHlwZXNjcmlwdCAyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFBhcmVudFdpbmRvd0lkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHBhcmVudFdpbiA9IHRoaXMuZ2V0UGFyZW50V2luZG93KCk7XHJcbiAgICAgICAgaWYgKHBhcmVudFdpbikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50V2luLnN0YXRlLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb3BzKHByb3BzOiBPYmplY3QpIHtcclxuICAgICAgICBfLmFzc2lnbldpdGgodGhpcy5yZW5kZXJQcm9wcywgcHJvcHMsIChvYmplY3RWYWx1ZTogYW55LCBzb3VyY2VWYWx1ZTogYW55LCBrZXk/OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJjbGFzc1wiIHx8IGtleSA9PT0gXCJjbGFzc05hbWVcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnZhbGlkIHByb3BlcnR5ICdcIiArIGtleSArIFwiJywgdXNlIGZ1bmN0aW9ucyBhZGRDbGFzc05hbWUoKSwgdG9nZ2xlQ2xhc3NOYW1lKClcIik7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwic3R5bGVcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnZhbGlkIHByb3BlcnR5ICdcIiArIGtleSArIFwiJywgdXNlIGZ1bmN0aW9ucyBhZGRTdHlsZXMoKSwgcmVtb3ZlU3R5bGUoKVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZVZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0eWxlcyhzdHlsZXM6IE9iamVjdCB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMucmVuZGVyU3R5bGVzLCBzdHlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU3R5bGVzKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyU3R5bGVzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3R5bGUoc3R5bGU6IHN0cmluZykge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlbmRlclN0eWxlc1tzdHlsZV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3R5bGVzKHN0eWxlczogc3RyaW5nW10pIHtcclxuICAgICAgICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZW5kZXJTdHlsZXNbc3R5bGVdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLmRpZE1vdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRpZE1vdW50KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsTW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudFdpbGxNb3VudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLndpbGxNb3VudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uV2lsbE1vdW50KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uV2lsbE1vdW50KHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wczogUCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFApIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaXNQcm9wc0VxdWFsKG9iajE6IGFueSwgb2JqMjogYW55LCBleGNsdWRlUHJvcHM/OiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAvL0xvb3AgdGhyb3VnaCBwcm9wZXJ0aWVzIGluIG9iamVjdCAxXHJcbiAgICAgICAgZm9yIChsZXQgcCBpbiBvYmoxKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhjbHVkZVByb3BzICYmIGV4Y2x1ZGVQcm9wcy5pbmRleE9mKHApID49IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgLy9DaGVjayBwcm9wZXJ0eSBleGlzdHMgb24gYm90aCBvYmplY3RzXHJcbiAgICAgICAgICAgIGlmIChvYmoxLmhhc093blByb3BlcnR5KHApICE9PSBvYmoyLmhhc093blByb3BlcnR5KHApKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAob2JqMVtwXSAhPT0gb2JqMltwXSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIjEgbm90IGVxdWFsIFwiICsgcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKHR5cGVvZiAob2JqMVtwXSkpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vRGVlcCBjb21wYXJlIG9iamVjdHNcclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKCFPYmplY3QuY29tcGFyZShvYmoxW3BdLCBvYmoyW3BdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgLy9Db21wYXJlIGZ1bmN0aW9uIGNvZGVcclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgJ2Z1bmN0aW9uJzpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAodHlwZW9mIChvYmoyW3BdKSA9PSAndW5kZWZpbmVkJyB8fCAocCAhPSAnY29tcGFyZScgJiYgb2JqMVtwXS50b1N0cmluZygpICE9IG9iajJbcF0udG9TdHJpbmcoKSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIC8vQ29tcGFyZSB2YWx1ZXNcclxuICAgICAgICAgICAgLy8gICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKG9iajFbcF0gIT09IG9iajJbcF0pIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9DaGVjayBvYmplY3QgMiBmb3IgYW55IGV4dHJhIHByb3BlcnRpZXNcclxuICAgICAgICBmb3IgKGxldCBwIGluIG9iajIpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAob2JqMVtwXSkgPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIChvYmoyW3BdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIjIgbm90IGVxdWFsIFwiICsgcCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9iajEpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmoyKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzOiBQKTogYm9vbGVhbiB7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhcInNoYWxsb3ctMCBcIiArIHRoaXMuY29uc3RydWN0b3IudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMzApKTtcclxuICAgIC8vICAgICAvL2NvbnNvbGUudGltZShcIjIyXCIpO1xyXG4gICAgLy8gICAgIGxldCByZXQgPSBzaGFsbG93Q29tcGFyZSh0aGlzLCBuZXh0UHJvcHMsIHRoaXMuc3RhdGUpO1xyXG4gICAgLy8gICAgIC8vY29uc29sZS50aW1lRW5kKFwiMjJcIik7XHJcbiAgICAvLyAgICAgcmV0dXJuIHJldDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBwcml2YXRlIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChuZXh0UHJvcHM6IFAsIG5leHRTdGF0ZTogUykgPT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLnNoYWxsb3dDb21wYXJlKG5leHRQcm9wcyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmRpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgcHJldkNvbnRleHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkVXBkYXRlKHByZXZQcm9wczogUCwgcHJldlN0YXRlOiBTLCBwcmV2Q29udGV4dDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsUmVjZWl2ZVByb3BzKHByZXZQcm9wcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbFVubW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2lsbFVubW91bnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkQ2xhc3NOYW1lKGNsYXNzTmFtZXM6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChjbGFzc05hbWVzKVxyXG4gICAgICAgICAgICBjbGFzc05hbWVzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJDbGFzc2VzLmluZGV4T2YobmFtZSkgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2xhc3Nlcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDbGFzc05hbWUoYm9vbFZhbHVlOiBib29sZWFuLCB0cnVlQ2xhc3NOYW1lczogc3RyaW5nLCBmYWxzZUNsYXNzTmFtZXM/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoYm9vbFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKHRydWVDbGFzc05hbWVzKTtcclxuICAgICAgICAgICAgaWYgKGZhbHNlQ2xhc3NOYW1lcylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3NOYW1lKGZhbHNlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzTmFtZSh0cnVlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgICAgIGlmIChmYWxzZUNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShmYWxzZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDbGFzc05hbWUoY2xhc3NOYW1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDbGFzc2VzLnNwbGljZSh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSwgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNsYXNzTmFtZSgpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSh0aGlzLnByb3BzLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyQ2xhc3Nlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDbGFzc2VzLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVuZGVyUHJvcHMoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9wcy5jbGFzc05hbWUgPSB0aGlzLnJlbmRlckNsYXNzTmFtZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvcHMuc3R5bGUgPSB0aGlzLnJlbmRlclN0eWxlcztcclxuICAgICAgICBfLmFzc2lnbih0aGlzLnJlbmRlclByb3BzLnN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJQcm9wcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gZ2V0UmVhY3RFbGVtZW50Q2xhc3NOYW1lKGVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQudHlwZSA/IGVsZW1lbnQudHlwZS50b1N0cmluZygpLnNwbGl0KFwiKFwiKVswXS5zcGxpdChcIiBcIilbMV0gOiBcIlwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldENoaWxkcmVuKGNoaWxkVHlwZTogRnVuY3Rpb24pOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuIGFzIFJlYWN0LlJlYWN0Tm9kZSkuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRUeXBlID09PSBjaGlsZC50eXBlKVxyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW5PZlByb3BzKHByb3BzOiBhbnksIGNoaWxkVHlwZTogRnVuY3Rpb24pOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRUeXBlID09PSBjaGlsZC50eXBlKVxyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3dDb25maXJtYXRpb25XaW5kb3cobWVzc2FnZUNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZSwgcmVzdWx0Q2FsbGJhY2s6IChyZXN1bHRPazogYm9vbGVhbikgPT4gdm9pZCwgb2tCdXR0b25UZXh0Pzogc3RyaW5nLCBjYW5jZWxCdXR0b25UZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtczogT3Blbk1lc3NhZ2VXaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcImNvbmZpcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBwYXJlbnRXaW5kb3dJZDogdGhpcy5nZXRQYXJlbnRXaW5kb3dJZCgpLFxyXG4gICAgICAgICAgICBva0J1dHRvbkNvbnRlbnQ6IG9rQnV0dG9uVGV4dCB8fCBcItCU0LBcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogY2FuY2VsQnV0dG9uVGV4dCB8fCBcItCd0LXRglwiLFxyXG4gICAgICAgICAgICByZXN1bHRDYWxsYmFjazogcmVzdWx0Q2FsbGJhY2tcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50RGVza3RvcCgpIS5vcGVuTWVzc2FnZVdpbmRvdyhtZXNzYWdlQ29udGVudCwgcGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVsZXRlQ29uZmlybWF0aW9uV2luZG93KG1lc3NhZ2VDb250ZW50OiBSZWFjdC5SZWFjdE5vZGUsIHJlc3VsdENhbGxiYWNrOiAocmVzdWx0T2s6IGJvb2xlYW4pID0+IHZvaWQsIG9rQnV0dG9uVGV4dD86IHN0cmluZywgY2FuY2VsQnV0dG9uVGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIGxldCBwYXJhbXM6IE9wZW5NZXNzYWdlV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzdHlsZTogXCJkYW5nZXJcIixcclxuICAgICAgICAgICAgcGFyZW50V2luZG93SWQ6IHRoaXMuZ2V0UGFyZW50V2luZG93SWQoKSxcclxuICAgICAgICAgICAgb2tCdXR0b25Db250ZW50OiBva0J1dHRvblRleHQgfHwgXCLQlNCwXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IGNhbmNlbEJ1dHRvblRleHQgfHwgXCLQndC10YJcIixcclxuICAgICAgICAgICAgcmVzdWx0Q2FsbGJhY2s6IHJlc3VsdENhbGxiYWNrXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudERlc2t0b3AoKSEub3Blbk1lc3NhZ2VXaW5kb3cobWVzc2FnZUNvbnRlbnQsIHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQYXJlbnRXaW5kb3coKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnREZXNrdG9wKCkhLmNsb3NlV2luZG93KHRoaXMuZ2V0UGFyZW50V2luZG93SWQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZW5kZXIoKSB7XHJcbiAgICAvLyAgICByZXR1cm4gKG5ldylcclxuICAgIC8vICAgIC8vICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpIH0+XHJcbiAgICAvLyAgICAvLyAgICAgICAgQ29tcG9uZW50IGZyb20ge3RoaXMucHJvcHMuY29tcGlsZXJ9IGFuZCB7dGhpcy5wcm9wcy5mcmFtZXdvcmt9IWNsaWNrQ291bnQ9e3RoaXMuc3RhdGUuY2xpY2tDb3VudH1cclxuICAgIC8vICAgIC8vICAgIDwvYnV0dG9uPlxyXG4gICAgLy8gICAgLy8pO1xyXG4gICAgLy99XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50LnRzeFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vycm9yKGVycm9yOiBzdHJpbmcgfCBFcnJvcik6IG5ldmVyIHtcclxuXHJcbiAgICAvLyB0b2RvOiDQvtGC0LrQu9GO0YfQuNGC0Ywg0LIgcHJvZHVjdGlvbiDRgNC10LbQuNC80LVcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgIGxldCBlcnI6IGFueTtcclxuXHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcilcclxuICAgICAgICBlcnIgPSBlcnJvcjtcclxuICAgIGVsc2VcclxuICAgICAgICBlcnIgPSBuZXcgRXJyb3IoZXJyb3IpO1xyXG5cclxuICAgIGVyci4kJGlzVGhyb3dFcnJvciA9IHRydWU7XHJcbiAgICB0aHJvdyBlcnI7XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0Vycm9yLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0UHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcclxuICAgIHR5cGU6IFwiY29sdW1uXCIgfCBcInJvd1wiO1xyXG4gICAgc2l6ZVRvOiBcInBhcmVudFwiIHwgXCJjb250ZW50XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQ8TGF5b3V0UHJvcHMsYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJMYXlvdXRcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2Rpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBmbGV4RGlyZWN0aW9uOiB0aGlzLnByb3BzLnR5cGV9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKSB7Ly8gJiYgdGhpcy5wcm9wcy50eXBlPT09XCJjb2x1bW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpIHtcclxuICAgICAgICAvLyAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAvLyAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvL3Bvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBsZWZ0OiAwLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gcmlnaHQ6IDAsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0b3A6IDAsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBib3R0b206IDAsXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgLy8gb3ZlcmZsb3c6IFwiYXV0b1wiXHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gICAgIHN0eWxlLmZsZXhEaXJlY3Rpb24gPSB0aGlzLnByb3BzLnR5cGU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBzdHlsZTogYW55ID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgLy9vdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyAgICAgc3R5bGUuZmxleERpcmVjdGlvbiA9IHRoaXMucHJvcHMudHlwZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7b25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0gPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9MYXlvdXQudHN4XG4gKiovIiwiXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRml4ZWRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeGVkIGV4dGVuZHMgQ29tcG9uZW50PEZpeGVkUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkZpeGVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBmbGV4OiBcIjAgMCBhdXRvXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeFxuICoqLyIsImltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZsZXhQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmxleCBleHRlbmRzIENvbXBvbmVudDxGbGV4UHJvcHMsYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiRmxleFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgZmxleDogXCIxXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4XG4gKiovIiwiaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0QnVodGFPYmplY3QxIGV4dGVuZHMgRGVzaWduZWRPYmplY3Qge1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQpNCw0LzQuNC70LjRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQpNCw0LzQuNC70LjRjyDQsNCx0L7QvdC10L3RgtCwXCJcclxuICAgIH0pXHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0JjQvNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCY0LzRj1wiXHJcbiAgICB9KVxyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0J7RgtGH0LXRgdGC0LLQvlwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQntGC0YfQtdGB0YLQstC+INCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIHN1ck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDEudHNcbiAqKi8iLCLvu79pbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mbywgQmFzZVByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge09ic2VydmFibGVPbkNoYW5nZUhhbmRsZXJ9IGZyb20gXCIuLi9idWh0YS1jb3JlL09ic2VydmFibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25lZE9iamVjdCB7XHJcbiAgICBcclxuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XHJcblxyXG4gICAgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcItCe0LHRitC10LrRglwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG5cclxuICAgICAgICBsZXQgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvbiAoLnsxLH0pXFwoLztcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKCh0aGlzKS5jb25zdHJ1Y3Rvci50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgICQkdW53YXRjaGVkUHJvcHM6IHN0cmluZ1tdID0gW1wicHJvcGVydHlFZGl0b3JzXCIsIFwiJCR1bndhdGNoZWRQcm9wc1wiXTtcclxuICAgICQkY2hhbmdlQ291bnQ6IG51bWJlcjtcclxuICAgICQkb25DaGFuZ2U6IE9ic2VydmFibGVPbkNoYW5nZUhhbmRsZXI8RGVzaWduZWRPYmplY3Q+O1xyXG5cclxuICAgIC8vIGlkOiBzdHJpbmc7XHJcbiAgICAvLyBuYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBjbGFzc05hbWU6IHN0cmluZztcclxuICAgIC8vIGluaGVyaXRGcm9tOiBzdHJpbmc7XHJcbiAgICAvLyBtb2R1bGVOYW1lOiBzdHJpbmc7XHJcbiAgICAvLyByZWZlcmVuY2VzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gICAgLy9wcml2YXRlIHN0YXRpYyBwcm9wZXJ0eUVkaXRvcnM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogUHJvcGVydHlFZGl0b3JJbmZvOyB9ID0ge307XHJcblxyXG4gICAgLy8gc3RhdGljIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IocHJvcGVydHlOYW1lOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVBhZ2U6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5R3JvdXA6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5RGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6IHR5cGVvZiBEZXNpZ25lZE9iamVjdCxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvclR5cGU6IHR5cGVvZiBCYXNlUHJvcGVydHlFZGl0b3IsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IHR5cGVvZiBPYmplY3QgfCB0eXBlb2YgU3RyaW5nKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCBpbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8gPSB7XHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eVBhZ2U6IHByb3BlcnR5UGFnZSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlHcm91cDogcHJvcGVydHlHcm91cCxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlEZXNjcmlwdGlvbjogcHJvcGVydHlEZXNjcmlwdGlvbixcclxuICAgIC8vICAgICAgICAgb2JqZWN0VHlwZTogb2JqZWN0VHlwZSxcclxuICAgIC8vICAgICAgICAgZWRpdG9yVHlwZTogZWRpdG9yVHlwZSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlUeXBlOiBwcm9wZXJ0eVR5cGUsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBEZXNpZ25lZE9iamVjdC5wcm9wZXJ0eUVkaXRvcnNbcHJvcGVydHlOYW1lXSA9IGluZm87XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJQcm9wZXJ0eUVkaXRvciBcIiArIHByb3BlcnR5TmFtZSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldCBwcm9wZXJ0eUVkaXRvcnMoKTp7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFByb3BlcnR5RWRpdG9ySW5mbzsgfXtcclxuICAgIC8vICAgICByZXR1cm4gKERlc2lnbmVkT2JqZWN0IGFzIGFueSkuJCRwcm9wZXJ0eUVkaXRvcnM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcnMoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMubGVuZ3RoID0gMDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlFZGl0b3I6IEJhc2VQcm9wZXJ0eUVkaXRvcikge1xyXG4gICAgLy8gICAgIHByb3BlcnR5RWRpdG9yLmRlc2lnbmVkT2JqZWN0ID0gdGhpcztcclxuICAgIC8vICAgICBwcm9wZXJ0eUVkaXRvci5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMucHVzaChwcm9wZXJ0eUVkaXRvcik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZW1pdFRzQ29kZSgpOiBzdHJpbmcge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLnJlZ2lzdGVyUHJvcGVydHlFZGl0b3JzKCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCB0c0NvZGUgPSBuZXcgVHNDb2RlKHRoaXMubW9kdWxlTmFtZSwgdGhpcy5jbGFzc05hbWUsIHRoaXMuaW5oZXJpdEZyb20sIHRoaXMucmVmZXJlbmNlcyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMucHJvcGVydHlFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xyXG4gICAgLy8gICAgICAgICBlZGl0b3IuZGVzaWduZWRPYmplY3QgPSB0aGlzO1xyXG4gICAgLy8gICAgICAgICBlZGl0b3IuZW1pdFRzQ29kZSh0c0NvZGUpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gdHNDb2RlLmdldENvZGUoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB0ZXN0UHJvYzEgPSAoKSA9PiB7XHJcblxyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3QudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtCYXNlUHJvcGVydHlFZGl0b3IsIFByb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge3JlZ2lzdGVyUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtJbnB1dFR5cGUsIElucHV0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBCYXNlUHJvcGVydHlFZGl0b3Ige1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZShldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpIHtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZSA9PT0gXCIgKyB0aGlzLnByb3BzLnByb3BlcnR5TmFtZSArIFwiIFwiICsgdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBhdXRvRm9ybUNvbnRyb2xQcm9wczogQXV0b0Zvcm1Db250cm9sUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2FwdGlvbjogdGhpcy5wcm9wcy5pbnB1dENhcHRpb24sXHJcbiAgICAgICAgICAgIGlucHV0VGFiOiB0aGlzLnByb3BzLmlucHV0VGFiLFxyXG4gICAgICAgICAgICBpbnB1dEdyb3VwOiB0aGlzLnByb3BzLmlucHV0R3JvdXAsXHJcbiAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb246IHRoaXMucHJvcHMuaW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoYXV0b0Zvcm1Db250cm9sUHJvcHMpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9e0lucHV0VHlwZS5UZXh0fVxyXG4gICAgICAgICAgICAgICAgYmluZE9iamVjdD17dGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdH1cclxuICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT17dGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nRWRpdG9yUGFyYW1zIGV4dGVuZHMgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN0cmluZ0VkaXRvcihwYXJhbXM6IFN0cmluZ0VkaXRvclBhcmFtcyA9IHt9KTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coe3RhcmdldCwgcHJvcGVydHlOYW1lLCBjb25zdHI6dGFyZ2V0LmNvbnN0cnVjdG9yfSk7XHJcblxyXG4gICAgICAgIGxldCBwcm9wZXJ0eUVkaXRvckluZm86IFByb3BlcnR5RWRpdG9ySW5mbyA9IHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgZWRpdG9yVHlwZTogU3RyaW5nUHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgXy5hc3NpZ24ocHJvcGVydHlFZGl0b3JJbmZvLCBwYXJhbXMpO1xyXG4gICAgICAgIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IocHJvcGVydHlFZGl0b3JJbmZvKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9yKHtcclxuICAgICAgICAvLyAgICAgaW5wdXRDYXB0aW9uOiBwYXJhbXMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgIC8vICAgICBpbnB1dFRhYjogcGFyYW1zLmlucHV0VGFiLFxyXG4gICAgICAgIC8vICAgICBpbnB1dEdyb3VwOiBwYXJhbXMuaW5wdXRHcm91cCxcclxuICAgICAgICAvLyAgICAgaW5wdXREZXNjcmlwdGlvbjogcGFyYW1zLmlucHV0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgLy8gICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvcixcclxuICAgICAgICAvLyAgICAgZWRpdG9yVHlwZTogU3RyaW5nUHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgLy8gICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeFxuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5RWRpdG9ySW5mbyBleHRlbmRzIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuICAgIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gICAgb2JqZWN0VHlwZTogdHlwZW9mIERlc2lnbmVkT2JqZWN0O1xyXG4gICAgZWRpdG9yVHlwZTogdHlwZW9mIEJhc2VQcm9wZXJ0eUVkaXRvcjtcclxuICAgIHByb3BlcnR5VHlwZTogdHlwZW9mIE9iamVjdCB8IHR5cGVvZiBTdHJpbmcgfCBudWxsO1xyXG4gICAgY3VzdG9tUGFyYW1zPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiwgUHJvcGVydHlFZGl0b3JJbmZvIHtcclxuICAgIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVByb3BlcnR5RWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50PEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gICAgLy8gZGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG5cclxuICAgIC8vIGdldFByb3BlcnR5VHlwZSgpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiBcIk9iamVjdFwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHJlbmRlckVkaXRvcihpbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG4gICAgLy8gICAgIHJldHVybiAoPHNwYW4+ZWRpdG9yIG5vdCBkZWZpbmVkPC9zcGFuPik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gKDxzcGFuPnByb3BlcnR5IGVkaXRvciBub3QgZGVmaW5lZDwvc3Bhbj4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBlbWl0VHNDb2RlKHRzQ29kZTogVHNDb2RlLCBhc3NpZ25OYW1lOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICB0c0NvZGUuYWRkUHJvcGVydHkoYXNzaWduTmFtZSwgdGhpcy5wcm9wZXJ0eU5hbWUsIHRoaXMuZ2V0UHJvcGVydHlUeXBlKCksIHRoaXMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wZXJ0eU5hbWVdKTtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3IudHN4XG4gKiovIiwiaW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclByb3BlcnR5RWRpdG9yKGVkaXRvcjogUHJvcGVydHlFZGl0b3JJbmZvKSB7XHJcblxyXG4gICAgbGV0IG9ialR5cGU6IGFueSA9IGVkaXRvci5vYmplY3RUeXBlO1xyXG5cclxuICAgIGlmICghb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycylcclxuICAgICAgICBvYmpUeXBlLiQkcHJvcGVydHlFZGl0b3JzID0gW107XHJcblxyXG4gICAgb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycy5wdXNoKGVkaXRvcik7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcInJlZ2lzdGVyUHJvcGVydHlFZGl0b3IgXCIgKyBlZGl0b3IucHJvcGVydHlOYW1lKTtcclxuICAgIC8vY29uc29sZS5sb2coZWRpdG9yKTtcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3IudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuZXhwb3J0IGVudW0gSW5wdXRUeXBlIHtUZXh0LCBOdW1iZXIsIERhdGUgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiwgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgdHlwZTogSW5wdXRUeXBlO1xyXG4gICAgYmluZE9iamVjdDogYW55O1xyXG4gICAgYmluZFByb3BOYW1lOiBzdHJpbmc7XHJcbiAgICBtYXhXaWR0aD86IG51bWJlcjtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxuICAgIHBsYWNlSG9sZGVyPzogc3RyaW5nO1xyXG4gICAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50PElucHV0UHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElucHV0UHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSW5wdXRUeXBlLlRleHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZXh0KCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAgXCJJbnB1dC5yZW5kZXIoKTo9PiB1bmtub3duIElucHV0VHlwZSAnXCIgKyB0aGlzLnByb3BzLnR5cGUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJpbmRPYmplY3QgJiYgdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdFt0aGlzLnByb3BzLmJpbmRQcm9wTmFtZV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gXCI8dW5iaW5kZWQ+XCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJpbmRPYmplY3QgJiYgdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmluZE9iamVjdFt0aGlzLnByb3BzLmJpbmRQcm9wTmFtZV0gPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWU7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJUZXh0KCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXModGhpcy5wcm9wcy5zdHlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0VGV4dCgpfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7QmFzZVByb3BlcnR5RWRpdG9yUHJvcHMsIFByb3BlcnR5RWRpdG9ySW5mbywgQmFzZVByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvcnNcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybVwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcbmltcG9ydCB7U25hcHNob3R9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL1NuYXBzaG90XCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0RlZXBDbG9uZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvRGVlcENsb25lXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPYmplY3REZXNpZ25lclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBkZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbiAgICBvblNhdmVDaGFuZ2VzPzogKCkgPT4gdm9pZDtcclxuICAgIG9uQ2FuY2VsQ2hhbmdlcz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3REZXNpZ25lciBleHRlbmRzIENvbXBvbmVudDxPYmplY3REZXNpZ25lclByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBPYmplY3REZXNpZ25lclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHNuYXBzaG90OiBTbmFwc2hvdCA9IG5ldyBTbmFwc2hvdCgpO1xyXG5cclxuICAgIG5lZWRUb1NhdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNsb25lZERlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuICAgIG9ic2VydmFibGVEZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICB0aGlzLm5lZWRUb1NhdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9uZWREZXNpZ25lZE9iamVjdCA9IERlZXBDbG9uZTxEZXNpZ25lZE9iamVjdD4odGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvbmVkXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xvbmVkRGVzaWduZWRPYmplY3QpO1xyXG5cclxuICAgICAgICB0aGlzLm9ic2VydmFibGVEZXNpZ25lZE9iamVjdCA9IE9ic2VydmFibGU8RGVzaWduZWRPYmplY3Q+KHRoaXMuY2xvbmVkRGVzaWduZWRPYmplY3QsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZWVkVG9TYXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgICAgIC8vdGhpcy5zbmFwc2hvdC5zYXZlT2JqZWN0KHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QsIFwicm9vdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQcm9wZXJ0eURlc2lnbmVycygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGdldFByb3BlcnR5RWRpdG9ycyh0aGlzLm9ic2VydmFibGVEZXNpZ25lZE9iamVjdCkuZm9yRWFjaCgocHJvcEluZm86IFByb3BlcnR5RWRpdG9ySW5mbywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb3BJbmZvKTtcclxuICAgICAgICAgICAgbGV0IGVkaXRvclByb3BzOiBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcyAmIFByb3BlcnR5RWRpdG9ySW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0OiB0aGlzLm9ic2VydmFibGVEZXNpZ25lZE9iamVjdCxcclxuICAgICAgICAgICAgICAgIC8vcHJvcGVydHlFZGl0b3JJbmZvOiBwcm9wSW5mbyxcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDRjdGC0L4g0LjQtyBwcm9wSW5mbzogUHJvcGVydHlFZGl0b3JJbmZvLCDQt9Cw0L/QvtC70Y/QtdGC0YHRjyDQtNCw0LvQtdC1INGH0LXRgNC10LcgXy5hc3NpZ25cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6IERlc2lnbmVkT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgZWRpdG9yVHlwZTogQmFzZVByb3BlcnR5RWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBfLmFzc2lnbihlZGl0b3JQcm9wcywgcHJvcEluZm8pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlZGl0b3JQcm9wcy5pbnB1dENhcHRpb24pXHJcbiAgICAgICAgICAgICAgICBlZGl0b3JQcm9wcy5pbnB1dENhcHRpb24gPSBlZGl0b3JQcm9wcy5wcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZWRpdG9yUHJvcHMpO1xyXG5cclxuICAgICAgICAgICAgcmV0LnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wSW5mby5lZGl0b3JUeXBlLCBlZGl0b3JQcm9wcywge30pKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTYXZlQ2hhbmdlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNhdmUtY2hhbmdlc1wiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QpO1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QsIHRoaXMub2JzZXJ2YWJsZURlc2lnbmVkT2JqZWN0KTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNhdmVDaGFuZ2VzKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2F2ZUNoYW5nZXMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2FuY2VsQ2hhbmdlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbmNlbC1jaGFuZ2VzXCIpO1xyXG4gICAgICAgIC8vdGhpcy5zbmFwc2hvdC5yZXN0b3JlT2JqZWN0KHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QsIFwicm9vdFwiKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNhbmNlbENoYW5nZXMpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWxDaGFuZ2VzKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBoYW5kbGVHZXROZWVkVG9TYXZlID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLm5lZWRUb1NhdmU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwib2JqZWN0LWRlc2lnbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe29uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBdXRvRm9ybVxyXG4gICAgICAgICAgICAgICAgc2l6ZVRvPVwicGFyZW50XCJcclxuICAgICAgICAgICAgICAgIG9uU2F2ZUNoYW5nZXM9e3RoaXMuaGFuZGxlU2F2ZUNoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbENoYW5nZXM9e3RoaXMuaGFuZGxlQ2FuY2VsQ2hhbmdlc31cclxuICAgICAgICAgICAgICAgIG5lZWRUb1NhdmU9e3RoaXMubmVlZFRvU2F2ZX1cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0IGRlc2lnbmVyXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQcm9wZXJ0eURlc2lnbmVycygpfVxyXG4gICAgICAgICAgICA8L0F1dG9Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lci50c3hcbiAqKi8iLCJpbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5RWRpdG9ycyhvYmo6IERlc2lnbmVkT2JqZWN0KTogUHJvcGVydHlFZGl0b3JJbmZvW10ge1xyXG5cclxuICAgIGxldCBlZGl0b3JzID0gKG9iai5jb25zdHJ1Y3RvciBhcyBhbnkpLiQkcHJvcGVydHlFZGl0b3JzIGFzIFByb3BlcnR5RWRpdG9ySW5mb1tdO1xyXG5cclxuICAgIGVkaXRvcnMgPSBlZGl0b3JzLmZpbHRlcigoZWR0KSA9PiBvYmogaW5zdGFuY2VvZiBlZHQub2JqZWN0VHlwZSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldFByb3BlcnR5RWRpdG9yc1wiKSA7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVkaXRvcnMpO1xyXG4gICAgcmV0dXJuIGVkaXRvcnM7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvcnMudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9UYWJzL1RhYnNcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vRm9ybS9Gb3JtXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgaW5wdXRDYXB0aW9uPzogc3RyaW5nO1xyXG4gICAgaW5wdXRUYWI/OiBzdHJpbmc7XHJcbiAgICBpbnB1dEdyb3VwPzogc3RyaW5nO1xyXG4gICAgaW5wdXREZXNjcmlwdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvRm9ybVByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBpbnB1dHM/OiBBdXRvRm9ybUNvbnRyb2xQcm9wc1tdO1xyXG4gICAgc2l6ZVRvOiBcInBhcmVudFwiIHwgXCJjb250ZW50XCI7XHJcbiAgICBuZWVkVG9TYXZlPzogYm9vbGVhbjtcclxuICAgIG9uU2F2ZUNoYW5nZXM/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25DYW5jZWxDaGFuZ2VzPzogKCkgPT4gdm9pZDtcclxuICAgIC8vb25HZXROZWVkVG9TYXZlPzogKCkgPT4gYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgZW1wdHlUYWJOYW1lID0gXCLQt9Cw0LrQu9Cw0LTQutCwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0b0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QXV0b0Zvcm1Qcm9wcywgYW55PiB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW5wdXRzKCk6IEF1dG9Gb3JtQ29udHJvbFByb3BzW10ge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4gYXMgUmVhY3QuUmVhY3ROb2RlKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChjOiBhbnkpID0+IGMucHJvcHMpXHJcbiAgICAgICAgICAgIC5tYXAoKGM6IGFueSkgPT4gYy5wcm9wcykgYXMgQXV0b0Zvcm1Db250cm9sUHJvcHNbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYnNMaXN0KCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gXy51bmlxKFxyXG4gICAgICAgICAgICB0aGlzLmdldElucHV0cygpLm1hcDxzdHJpbmc+KChpbnB1dDogQXV0b0Zvcm1Db250cm9sUHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnB1dFRhYiB8fCBcIlwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYWJJbnB1dHModGFiOiBzdHJpbmcpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuIGFzIFJlYWN0LlJlYWN0Tm9kZSlcclxuICAgICAgICAgICAgLmZpbHRlcigoYzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5wcm9wcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICgoKGMucHJvcHMgYXMgQXV0b0Zvcm1Db250cm9sUHJvcHMpLmlucHV0VGFiIHx8IFwiXCIpID09PSB0YWIpO1xyXG4gICAgICAgICAgICB9KSBhcyBKU1guRWxlbWVudFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVGFiKHRhYjogc3RyaW5nKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiA8Rm9ybSBzaXplVG89e3RoaXMucHJvcHMuc2l6ZVRvfT57dGhpcy5nZXRUYWJJbnB1dHModGFiKX08L0Zvcm0+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgIHJlbmRlclRhYnMoKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFic0xpc3QoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRhYnMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nZXRJbnB1dHMoKSk7XHJcblxyXG4gICAgICAgIGlmICh0YWJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFicy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGFiKHRhYnNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVRvPVwicGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbldpbGxNb3VudD17IChzdGF0ZSkgPT4geyBjb25zb2xlLmxvZyhcIm9uV2lsbE1vdW50LWF1dG8tZm9ybS10YWJzXCIpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQWN0aXZlVGFiPXsgKHN0YXRlLCB0YWIpID0+IHsgY29uc29sZS5sb2coXCJzZXRBY3RpdmVUYWJcIik7Y29uc29sZS5sb2codGFiKTt9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGFicy5tYXA8SlNYLkVsZW1lbnQ+KCh0YWIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGtleT17aW5kZXh9IHRpdGxlPXt0YWIgPT09IFwiXCIgPyBlbXB0eVRhYk5hbWUgOiB0YWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYih0YWIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTYXZlQnV0dG9uQ2xpY2sgPSAoc2VuZGVyOiBCdXR0b24sIGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNhdmVDaGFuZ2VzKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2F2ZUNoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudFdpbmRvdygpIS5jbG9zZSgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrID0gKHNlbmRlcjogQnV0dG9uLCBlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DYW5jZWxDaGFuZ2VzKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsQ2hhbmdlcygpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50V2luZG93KCkhLmNsb3NlKCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJhdXRvLWZvcm1cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLWF1dG8tZm9ybVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZTogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCIgc2l6ZVRvPVwicGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYnMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cImF1dG8tZm9ybS1mb290ZXJcIiB0eXBlPVwicm93XCIgc2l6ZVRvPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmlzaWJsZT17IHRoaXMucHJvcHMubmVlZFRvU2F2ZSB9IGNsYXNzTmFtZT1cImlzLXN1Y2Nlc3MgaXMtb3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMuaGFuZGxlU2F2ZUJ1dHRvbkNsaWNrIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17IHRoaXMuaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmVlZFRvU2F2ZSA/IFwi0J7RgtC80LXQvdCwXCIgOiBcItCX0LDQutGA0YvRgtGMXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJzUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxUYWJzU3RhdGU+IHtcclxuICAgIG9uQ2hhbmdlQWN0aXZlVGFiPzogKHN0YXRlOiBUYWJzU3RhdGUsIGFjdGl2ZVRhYjogVGFiSW5mbykgPT4gdm9pZDtcclxuICAgIHNpemVUbzogXCJwYXJlbnRcIiB8IFwiY29udGVudFwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFic1N0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8VGFic1Byb3BzPiB7XHJcbiAgICB0YWJzOiBUYWJJbmZvW10gPSBbXTtcclxuXHJcbiAgICBzZXRBY3RpdmVUYWIodGFiSW5mbzogVGFiSW5mbykge1xyXG4gICAgICAgIGlmICghdGFiSW5mby5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKT0+dGFiLmlzQWN0aXZlID0gZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJJbmZvLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5wcm9wcy5vbkNoYW5nZUFjdGl2ZVRhYilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnByb3BzLm9uQ2hhbmdlQWN0aXZlVGFiKHRoaXMsIHRhYkluZm8pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYkluZm8ge1xyXG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudDxUYWJzUHJvcHMsIFRhYnNTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRhYnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFRhYnNTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUluaXRUYWJzU3RhdGUoKSB7XHJcblxyXG4gICAgICAgIGxldCB0YWJUYWdzID0gdGhpcy5nZXRDaGlsZHJlbihUYWIpO1xyXG5cclxuICAgICAgICB0YWJUYWdzLmZvckVhY2goKHRhYlRhZywgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0YWJQcm9wcyA9IHRhYlRhZy5wcm9wcyBhcyBUYWJQcm9wcztcclxuXHJcbiAgICAgICAgICAgIGxldCB0YWJJbmZvOiBUYWJJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRhYlByb3BzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogdGFiUHJvcHMuY2hpbGRyZW4gYXMgUmVhY3QuUmVhY3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGluZGV4ID09PSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFicy5wdXNoKHRhYkluZm8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5pdFRhYnNTdGF0ZSgpO1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBsZXQgdGFiVGFncyA9IHRoaXMuZ2V0Q2hpbGRyZW4oVGFiKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRhYlRhZ3MuZm9yRWFjaCgodGFiVGFnLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGxldCB0YWJQcm9wcyA9IHRhYlRhZy5wcm9wcyBhcyBUYWJQcm9wcztcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgdGFiSW5mbzogVGFiSW5mbyA9IHtcclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiB0YWJQcm9wcy50aXRsZSxcclxuICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6IHRhYlByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgIC8vICAgICAgICAgaXNBY3RpdmU6IGluZGV4ID09PSAwXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRhYnMucHVzaCh0YWJJbmZvKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG9wZW5XaW5kb3cod2luOiBKU1guRWxlbWVudCk6IFdpbmRvd0luZm8ge1xyXG4gICAgLy8gICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gICAgIG1vZGFsLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgLy8gICAgIC8vINC00LvRjyDQv9C+0LTQvdGP0YLQuNGPINCy0LLQtdGA0YUg0L/RgNC4INCw0LrRgtC40LLQsNGG0LjQuCDQvtC60L3QsFxyXG4gICAgLy8gICAgIG1vZGFsLm9uY2xpY2sgPSAoZSk9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobW9kYWwuaWQgIT09IFwiZGVsZXRlZFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAvLyAgICAgICAgIH0sIDEpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IHdpbkluc3RhbmNlID0gUmVhY3RET00ucmVuZGVyKHdpbiwgbW9kYWwpIGFzIFdpbmRvdztcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IGluZm86IFdpbmRvd0luZm8gPSB7XHJcbiAgICAvLyAgICAgICAgIGlkOiBtb2RhbC5pZCxcclxuICAgIC8vICAgICAgICAgd2luSW5zdGFuY2U6IHdpbkluc3RhbmNlLFxyXG4gICAgLy8gICAgICAgICBkaXZXcmFwcGVyOiBtb2RhbFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMud2luZG93cy5wdXNoKGluZm8pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gaW5mbztcclxuICAgIC8vIH07XHJcbiAgICAvL1xyXG4gICAgLy8gY2xvc2VXaW5kb3cod2luOiBXaW5kb3cpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLmZvckVhY2goKGluZm8sIGluZGV4KT0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGluZm8ud2luSW5zdGFuY2UgPT09IHdpbikge1xyXG4gICAgLy8gICAgICAgICAgICAgaW5mby5kaXZXcmFwcGVyLmlkID0gXCJkZWxldGVkXCI7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoaW5mby5kaXZXcmFwcGVyKTtcclxuICAgIC8vICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndpbmRvd3NbaW5kZXhdO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWN0aXZhdGVXaW5kb3cod2luOiBXaW5kb3cpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLmZvckVhY2goKGluZm8sIGluZGV4KT0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGluZm8ud2luSW5zdGFuY2UgPT09IHdpbikge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGluZm8uZGl2V3JhcHBlcik7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmVuZGVyVGFicygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBsaXN0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudGFicy5mb3JFYWNoKCh0YWJJbmZvOiBUYWJJbmZvLCBpbmRleDogbnVtYmVyKT0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSB0YWJJbmZvLmlzQWN0aXZlID8gXCJpcy1hY3RpdmVcIiA6IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID1cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0gb25DbGljaz17IChlKT0+eyB0aGlzLnN0YXRlLnNldEFjdGl2ZVRhYih0YWJJbmZvKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnt0YWJJbmZvLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBhbmVscygpOiBKU1guRWxlbWVudFtdIHtcclxuXHJcbiAgICAgICAgbGV0IGxpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50YWJzLmZvckVhY2goKHRhYkluZm86IFRhYkluZm8sIGluZGV4OiBudW1iZXIpPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7cGFkZGluZ1RvcDogMTAsIHBhZGRpbmdCb3R0b206IDEwfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKVxyXG4gICAgICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gIXRhYkluZm8uaXNBY3RpdmUgPyBcImlzLWhpZGRlblwiIDogbnVsbDtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGFiSW5mby5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxkaXYgcmVmPlxyXG4gICAgICAgIC8vICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2hlaWdodDogXCIxMDAlXCJ9KTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6IFwiYXV0b1wifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgc2l6ZVRvPXt0aGlzLnByb3BzLnNpemVUb30gdHlwZT1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGU6IGFueSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBhbmVscygpfVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFiIGV4dGVuZHMgQ29tcG9uZW50PFRhYlByb3BzLGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRhYlByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UYWJzL1RhYnMudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0lucHV0RGl2aWRlcn0gZnJvbSBcIi4uL0lucHV0RGl2aWRlci9JbnB1dERpdmlkZXJcIjtcclxuaW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuaW1wb3J0IHtJbnB1dFByb3BzfSBmcm9tIFwiLi4vSW5wdXQvSW5wdXRcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50PEZvcm1Qcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRm9ybVByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXJDb250cm9scygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgbGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4gYXMgUmVhY3QuUmVhY3ROb2RlKS5mb3JFYWNoKChjb250cm9sOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29udHJvbFByb3BzID0gY29udHJvbC5wcm9wcyBhcyBJbnB1dFByb3BzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sUHJvcHMgJiYgKGNvbnRyb2xQcm9wcy5pbnB1dENhcHRpb24gfHwgY29udHJvbFByb3BzLmJpbmRQcm9wTmFtZSkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjb250cm9sLnR5cGUgPT09IElucHV0RGl2aWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklucHV0RGl2aWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbnRyb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntjb250cm9sUHJvcHMuaW5wdXRDYXB0aW9uID8gY29udHJvbFByb3BzLmlucHV0Q2FwdGlvbiA6IGNvbnRyb2xQcm9wcy5iaW5kUHJvcE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbnRyb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMTBcIiBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImZvcm1cIik7XHJcbiAgICAgICAgLy90aGlzLmFkZFN0eWxlcyh7bWFyZ2luOjEwfSk7XHJcblxyXG4gICAgICAgIGlmIChSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4gYXMgUmVhY3QuUmVhY3ROb2RlKS5sZW5ndGggPT09IDEpIHsgLy8g0L7QtNC40L0g0LrQvtC90YLRgNC+0Lsg0LIg0YTQvtGA0LzQtSwg0L7QsdGL0YfQvdC+IHRyZWVsaXN0XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplVG89PT1cInBhcmVudFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2hlaWdodDogXCIxMDAlXCJ9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7IHdpZHRoOiBcImluaGVyaXRcIn0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0YWJsZSByZWY9eyAoZSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbnRyb2xzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VmlzaWJsZVBsdWdpbiwgVmlzaWJsZVBsdWdpblByb3BzLCBWaXNpYmxlUGx1Z2luU3RhdGV9IGZyb20gXCIuLi8uLi9QbHVnaW5zL1Zpc2libGVQbHVnaW5cIjtcclxuaW1wb3J0IHtPbkNsaWNrUGx1Z2luLCBPbkNsaWNrUGx1Z2luUHJvcHN9IGZyb20gXCIuLi8uLi9QbHVnaW5zL09uQ2xpY2tQbHVnaW5cIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEJ1dHRvblN0YXRlPiwgVmlzaWJsZVBsdWdpblByb3BzLCBPbkNsaWNrUGx1Z2luUHJvcHMge1xyXG4gICAgdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvblN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8QnV0dG9uUHJvcHM+IGltcGxlbWVudHMgVmlzaWJsZVBsdWdpblN0YXRlIHtcclxuICAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vQFZpc2libGVQbHVnaW5cclxuLy9AT25DbGlja1BsdWdpblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50PEJ1dHRvblByb3BzLCBCdXR0b25TdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEJ1dHRvblByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQnV0dG9uU3RhdGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLnB1c2gobmV3IFZpc2libGVQbHVnaW4odGhpcykpO1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKG5ldyBPbkNsaWNrUGx1Z2luKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJidXR0b25cIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3hcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudFBsdWdpbn0gZnJvbSBcIi4vUGx1Z2luXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaXNpYmxlUGx1Z2luUHJvcHMge1xyXG4gICAgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgICBkZWZhdWx0VmlzaWJsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlzaWJsZVBsdWdpblN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8VmlzaWJsZVBsdWdpblByb3BzPiB7XHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWaXNpYmxlUGx1Z2luIGV4dGVuZHMgQ29tcG9uZW50UGx1Z2luPFZpc2libGVQbHVnaW5Qcm9wcywgVmlzaWJsZVBsdWdpblN0YXRlPiB7XHJcbiAgICAvLyBjb25zdHJ1Y3Rvcihvd25lcjogYW55KSB7XHJcbiAgICAvLyAgICAgc3VwZXIob3duZXIpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwidmlzaWJsZSB3aWxsTW91bnQoKVwiKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy5kZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJWaXNpYmxlUGx1Z2luOiBvbmx5IG9uZSBvZiB0aGUgcHJvcGVydGllcyBtdXN0IGJlIHNwZWNpZmllZCAndmlzaWJsZScgb3IgJ2RlZmF1bHRWaXNpYmxlJ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0aGlzLnByb3BzLnZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0aGlzLnByb3BzLmRlZmF1bHRWaXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMub3duZXIudG9nZ2xlQ2xhc3NOYW1lKCF0aGlzLnN0YXRlLnZpc2libGUsIFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBWaXNpYmxlUGx1Z2luUHJvcHMpIHtcclxuICAgICAgICAvL2xldCBzdGF0ZSA9IHRoaXMub3duZXIuc3RhdGUgYXMgVmlzaWJsZVBsdWdpblN0YXRlO1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMudmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IG5leHRQcm9wcy52aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vd25lci50b2dnbGVDbGFzc05hbWUoIXRoaXMuc3RhdGUudmlzaWJsZSwgXCJpcy1oaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gVmlzaWJsZVBsdWdpbih0YXJnZXQ6IGFueSkge1xyXG4vLyAgICAgdGFyZ2V0LnBsdWdpbnMucHVzaChWaXNpYmxlUGx1Z2luQ2xhc3MpO1xyXG4vLyAgICAgcmV0dXJuIHRhcmdldDtcclxuLy8gfVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9WaXNpYmxlUGx1Z2luLnRzXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UGx1Z2luPFAsUyBleHRlbmRzIENvbXBvbmVudFN0YXRlPFA+PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG93bmVyOiBDb21wb25lbnQ8UCwgUz4pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlkTW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbE1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxVbm1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZGlkVXBkYXRlKHByZXZQcm9wczogUCwgcHJldlN0YXRlOiBTLCBwcmV2Q29udGV4dDogYW55KSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IFMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyLnN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9wcygpOiBQIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vd25lci5wcm9wcztcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL1BsdWdpbi50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFBsdWdpbn0gZnJvbSBcIi4vUGx1Z2luXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIG9uQ2xpY2tFdmVudCA9IChzZW5kZXI6IENvbXBvbmVudDxhbnksYW55PiwgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25DbGlja1BsdWdpblByb3BzIHtcclxuICAgIG9uQ2xpY2s/OiBvbkNsaWNrRXZlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNsaWNrUGx1Z2luIGV4dGVuZHMgQ29tcG9uZW50UGx1Z2luPE9uQ2xpY2tQbHVnaW5Qcm9wcywgYW55PiB7XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLm93bmVyLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICB0aGlzLm93bmVyLmFkZFByb3BzKHtvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IE9uQ2xpY2tQbHVnaW5Qcm9wcykge1xyXG4gICAgICAgIHN1cGVyLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgICAgICB0aGlzLm93bmVyLmFkZFByb3BzKHtvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9PbkNsaWNrUGx1Z2luLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4vRXJyb3JcIjtcclxuXHJcbi8vINC+0LHRitC10LrRgiDQvNC+0LbQtdGCINC40LzQtdGC0Ywg0LzQsNGB0YHQuNCy0Ys6XHJcbi8vICQkdW5zYXZlZFByb3BzIC0g0LjQvNC10L3QsCDRgdCy0L7QudGB0YLQsiwg0LrQvtGC0L7RgNGL0LUg0L3QtSDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPXHJcbi8vICQkc2F2ZWRCeVJlZlByb3BzIC0g0LjQvNC10L3QsCDRgdCy0L7QudGB0YLQsiwg0LrQvtGC0L7RgNGL0LUg0YHQvtGF0YDQsNC90Y/RjtGC0YHRjyDQutCw0Log0YHRgdGL0LvQutC4XHJcbi8vINC90LUg0YHQvtGF0YDQsNC90Y/RjtGC0YHRjyDRgdCy0L7QudGB0YLQstCwLCDQutC+0YLQvtGA0YvQtSDQvdCw0YfQuNC90LDRjtGC0YHRjyDRgSAkJFxyXG5leHBvcnQgY2xhc3MgU25hcHNob3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc25hcHNob3RzOiBJbnRlcm5hbFNuYXBzaG90W10gPSBbXTtcclxuXHJcbiAgICBzYXZlT2JqZWN0KG9iajogT2JqZWN0IHwgQXJyYXk8YW55Piwgc25hcHNob3ROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc25hcCA9IG5ldyBJbnRlcm5hbFNuYXBzaG90KCk7XHJcbiAgICAgICAgc25hcC5vYmogPSBvYmo7XHJcbiAgICAgICAgc25hcC5zbmFwc2hvdE5hbWUgPSBzbmFwc2hvdE5hbWU7XHJcbiAgICAgICAgc25hcC5zYXZlUHJvcHMoKTtcclxuICAgICAgICB0aGlzLnNuYXBzaG90cy5wdXNoKHNuYXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVPYmplY3Qob2JqOiBPYmplY3QgfCBhbnlbXSwgc25hcHNob3ROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc25hcCA9IHRoaXMuZ2V0SW50ZXJuYWxTbmFwc2hvdChvYmosIHNuYXBzaG90TmFtZSk7XHJcbiAgICAgICAgaWYgKHNuYXApIHtcclxuICAgICAgICAgICAgaWYgKF8uaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIHNuYXAuYXJyYXlFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAob2JqIGFzIGFueSkucHVzaChlbGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzbmFwLm9ialByb3BzLmZvckVhY2goKHByb3ApID0+IHByb3AucmVzdG9yZVZhbHVlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW50ZXJuYWxTbmFwc2hvdChvYmo6IE9iamVjdCB8IEFycmF5PGFueT4sIHNuYXBzaG90TmFtZTogc3RyaW5nKTogSW50ZXJuYWxTbmFwc2hvdCB7XHJcbiAgICAgICAgbGV0IHJldCA9IHRoaXMuc25hcHNob3RzLmZpbHRlcigoc25hcCkgPT4gc25hcC5vYmogPT09IG9iaiAmJiBzbmFwLnNuYXBzaG90TmFtZSA9PT0gc25hcHNob3ROYW1lKTtcclxuICAgICAgICBpZiAocmV0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwiU25hcHNob3QgJ1wiICsgc25hcHNob3ROYW1lICsgXCInIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgXCJmYWtlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHJldFswXTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSW50ZXJuYWxTbmFwc2hvdCB7XHJcbiAgICBvYmo6IGFueTtcclxuICAgIHNuYXBzaG90TmFtZTogc3RyaW5nO1xyXG4gICAgb2JqUHJvcHM6IFNuYXBzaG90UHJvcGVydHlbXSA9IFtdO1xyXG4gICAgYXJyYXlFbGVtZW50czogYW55W107XHJcbiAgICByZWZzQ2xvbmVzOiBhbnkgPSB7fTtcclxuXHJcbiAgICBzYXZlUHJvcHMoKSB7XHJcbiAgICAgICAgaWYgKF8uaXNBcnJheSh0aGlzLm9iaikpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJheUVsZW1lbnRzID0gdGhpcy5vYmoubWFwKCh2OiBhbnkpID0+IHRoaXMuY2xvbmVWYWx1ZSh2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9ialByb3BzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIHRoaXMub2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmouaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmIHByb3BOYW1lLnN1YnN0cmluZygwLCAyKSAhPT0gXCIkJFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwID0gbmV3IFNuYXBzaG90UHJvcGVydHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBwLnByb3BOYW1lID0gcHJvcE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zbmFwc2hvdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zYXZlVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialByb3BzLnB1c2gocCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmVWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMub2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKCh2OiBhbnkpID0+IHRoaXMuY2xvbmVWYWx1ZSh2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8uaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfLmlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAvL2xldCByZWZzSW5kZXggPSB0aGlzLnNuYXBzaG90LnJlZnMuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS4kJHVuaXF1ZU9iamVjdElkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmc0Nsb25lc1t2YWx1ZS4kJHVuaXF1ZU9iamVjdElkXTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUNvcHkgPSBuZXcgdmFsdWUuY29uc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgdmFsdWVDb3B5LiQkaXNDbG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhbHVlLiQkdW5pcXVlT2JqZWN0SWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxNik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmc0Nsb25lc1t2YWx1ZS4kJHVuaXF1ZU9iamVjdElkXSA9IHZhbHVlQ29weTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmIHByb3BOYW1lLnN1YnN0cmluZygwLCAyKSAhPT0gXCIkJFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVDb3B5W3Byb3BOYW1lXSA9IHRoaXMuY2xvbmVWYWx1ZSh2YWx1ZVtwcm9wTmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZUNvcHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTbmFwc2hvdFByb3BlcnR5IHtcclxuICAgIHNuYXBzaG90OiBJbnRlcm5hbFNuYXBzaG90O1xyXG4gICAgcHJvcE5hbWU6IHN0cmluZztcclxuICAgIHByb3BWYWx1ZTogYW55O1xyXG5cclxuICAgIHNhdmVWYWx1ZSgpIHtcclxuICAgICAgICB0aGlzLnByb3BWYWx1ZSA9IHRoaXMuc25hcHNob3QuY2xvbmVWYWx1ZSh0aGlzLnNuYXBzaG90Lm9ialt0aGlzLnByb3BOYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZVZhbHVlKCkge1xyXG4gICAgICAgIHRoaXMuc25hcHNob3Qub2JqW3RoaXMucHJvcE5hbWVdID0gdGhpcy5wcm9wVmFsdWU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9TbmFwc2hvdC50c1xuICoqLyIsImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4vRXJyb3JcIjtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBPYnNlcnZhYmxlT25DaGFuZ2VIYW5kbGVyPFQ+PSAodGFyZ2V0OiBhbnksIHA6IFByb3BlcnR5S2V5LCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KSA9PiB2b2lkO1xyXG5cclxuLy8g0L3QtSDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPINGB0LLQvtC50YHRgtCy0LAsINC60L7RgtC+0YDRi9C1INC90LDRh9C40L3QsNGO0YLRgdGPINGBICQkXHJcbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZhYmxlPFQgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdD4ob2JqOiBEZXNpZ25lZE9iamVjdCwgb25DaGFuZ2VDYWxsYmFjaz86IE9ic2VydmFibGVPbkNoYW5nZUhhbmRsZXI8VD4pOiBUIHtcclxuICAgIGlmICghb2JqKVxyXG4gICAgICAgIHRocm93RXJyb3IoXCJPYnNlcnZhYmxlKCk6IG9iaiA9PT0gbnVsbCBcIik7IFxyXG5cclxuICAgIGxldCBwcm94eUhhbmRsZXIgPSB7XHJcbiAgICAgICAgICAgIHNldDogKHRhcmdldDogVCwgcDogUHJvcGVydHlLZXksIHZhbHVlOiBhbnksIHJlY2VpdmVyOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHAudG9TdHJpbmcoKS5zdWJzdHIoMCwgMikgIT09IFwiJCRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0LiQkY2hhbmdlQ291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC4kJGNoYW5nZUNvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC4kJGNoYW5nZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC4kJG9uQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuJCRvbkNoYW5nZSh0YXJnZXQsIHAsIHRhcmdldFtwXSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmlzQXJyYXkodmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQXJyYXkodmFsdWUsIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXy5pc09iamVjdCh2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NPYmplY3QodmFsdWUsIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe29ic2VydmFibGVTZXRUYWdldDogdGFyZ2V0LCBwcm9wOiBwICwgdmFsdWU6IHZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuXHJcbiAgICBwcm9jZXNzT2JqZWN0KG9iaiwgcHJveHlIYW5kbGVyLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgIGxldCBvYnNlcnZhYmxlT2JqZWN0ID0gbmV3IFByb3h5KG9iaiwgcHJveHlIYW5kbGVyKSBhcyBUO1xyXG5cclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2JqZWN0O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc09iamVjdChvYmo6IGFueSwgcHJveHlIYW5kbGVyOiBhbnksIG9uQ2hhbmdlQ2FsbGJhY2s/OiBPYnNlcnZhYmxlT25DaGFuZ2VIYW5kbGVyIDwgYW55ID4pIHtcclxuICAgIGlmICghb2JqKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICBvYmouJCRvbkNoYW5nZSA9IG9uQ2hhbmdlQ2FsbGJhY2s7XHJcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5zdWJzdHJpbmcoMCwgMikgIT09IFwiJCRcIikge1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb3BWYWx1ZTogYW55ID0gb2JqW3Byb3BOYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLmlzQXJyYXkocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcFZhbHVlLiQkY2hhbmdlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0FycmF5KHByb3BWYWx1ZSwgcHJveHlIYW5kbGVyLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIG9ialtwcm9wTmFtZV0gPSBuZXcgUHJveHkocHJvcFZhbHVlLCBwcm94eUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKF8uaXNPYmplY3QocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcFZhbHVlLiQkY2hhbmdlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc09iamVjdChwcm9wVmFsdWUsIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICBvYmpbcHJvcE5hbWVdID0gbmV3IFByb3h5KHByb3BWYWx1ZSwgcHJveHlIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NBcnJheShvYmo6IGFueVtdLCBwcm94eUhhbmRsZXI6IGFueSwgb25DaGFuZ2VDYWxsYmFjaz86IE9ic2VydmFibGVPbkNoYW5nZUhhbmRsZXI8YW55Pikge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIChvYmogYXMgYW55KS4kJG9uQ2hhbmdlID0gb25DaGFuZ2VDYWxsYmFjaztcclxuXHJcbiAgICBvYmouZm9yRWFjaCgoYXJyYXlJdGVtLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoXy5pc0FycmF5KGFycmF5SXRlbSkpIHtcclxuICAgICAgICAgICAgYXJyYXlJdGVtLiQkY2hhbmdlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBwcm9jZXNzQXJyYXkoYXJyYXlJdGVtLCBwcm94eUhhbmRsZXIsIG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICBvYmpbaW5kZXhdID0gbmV3IFByb3h5KGFycmF5SXRlbSwgcHJveHlIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXy5pc09iamVjdChhcnJheUl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGFycmF5SXRlbS4kJGNoYW5nZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgcHJvY2Vzc09iamVjdChhcnJheUl0ZW0sIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIG9ialtpbmRleF0gPSBuZXcgUHJveHkoYXJyYXlJdGVtLCBwcm94eUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvT2JzZXJ2YWJsZS50c1xuICoqLyIsImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge3Rocm93RXJyb3J9IGZyb20gXCIuL0Vycm9yXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVlcENsb25lPFQ+KG9iajogYW55KTogVCAge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgdGhyb3dFcnJvcihcIkRlZXBDbG9uZSgpOiBvYmogPT09IG51bGxcIik7XHJcblxyXG4gICAgbGV0IHJlZnNDbG9uZXM6IGFueSA9IHt9O1xyXG5cclxuICAgIGlmIChfLmlzQXJyYXkob2JqKSlcclxuICAgICAgICByZXR1cm4gY2xvbmVBcnJheShvYmosIHJlZnNDbG9uZXMpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBjbG9uZU9iamVjdChvYmosIHJlZnNDbG9uZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZU9iamVjdChvYmo6IGFueSwgcmVmc0Nsb25lczogYW55KTogYW55IHtcclxuICAgIGlmICghb2JqKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKG9iai4kJHVuaXF1ZU9iamVjdElkICYmIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdKVxyXG4gICAgICAgIHJldHVybiByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXTtcclxuXHJcbiAgICBsZXQgY2xvbmVkOiBhbnkgPSBuZXcgb2JqLmNvbnN0cnVjdG9yKCk7XHJcbiAgICBjbG9uZWQuJCRpc0Nsb25lID0gdHJ1ZTtcclxuXHJcbiAgICBvYmouJCR1bmlxdWVPYmplY3RJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDE2KTtcclxuICAgIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdID0gY2xvbmVkO1xyXG5cclxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wVmFsdWU6IGFueSA9IG9ialtwcm9wTmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcE5hbWUuc3Vic3RyaW5nKDAsIDIpICE9PSBcIiQkXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLmlzQXJyYXkocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb25lZFtwcm9wTmFtZV0gPSBjbG9uZUFycmF5KHByb3BWYWx1ZSwgcmVmc0Nsb25lcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfLmlzT2JqZWN0KHByb3BWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZWRbcHJvcE5hbWVdID0gY2xvbmVPYmplY3QocHJvcFZhbHVlLCByZWZzQ2xvbmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZWRbcHJvcE5hbWVdID0gb2JqW3Byb3BOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjbG9uZWRbcHJvcE5hbWVdID0gY2xvbmVPYmplY3QkJChwcm9wVmFsdWUsIHJlZnNDbG9uZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb25lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVPYmplY3QkJChvYmo6IGFueSwgcmVmc0Nsb25lczogYW55KTogYW55IHtcclxuICAgIGlmICghb2JqKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKG9iai4kJHVuaXF1ZU9iamVjdElkICYmIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdKVxyXG4gICAgICAgIHJldHVybiByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZUFycmF5KG9iajogYW55LCByZWZzQ2xvbmVzOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAob2JqLiQkdW5pcXVlT2JqZWN0SWQgJiYgcmVmc0Nsb25lc1tvYmouJCR1bmlxdWVPYmplY3RJZF0pXHJcbiAgICAgICAgcmV0dXJuIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdO1xyXG5cclxuICAgIGxldCBjbG9uZWQ6IGFueSA9IFtdO1xyXG4gICAgY2xvbmVkLiQkaXNDbG9uZSA9IHRydWU7XHJcblxyXG4gICAgb2JqLiQkdW5pcXVlT2JqZWN0SWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxNik7XHJcbiAgICByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXSA9IGNsb25lZDtcclxuXHJcbiAgICBvYmouZm9yRWFjaCgoYXJyYXlJdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoXy5pc0FycmF5KGFycmF5SXRlbSkpIHtcclxuICAgICAgICAgICAgY2xvbmVkLnB1c2goY2xvbmVBcnJheShhcnJheUl0ZW0sIHJlZnNDbG9uZXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXy5pc09iamVjdChhcnJheUl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGNsb25lZC5wdXNoKGNsb25lT2JqZWN0KGFycmF5SXRlbSwgcmVmc0Nsb25lcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNsb25lZC5wdXNoKGFycmF5SXRlbSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNsb25lZDtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9EZWVwQ2xvbmUudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHthcHBJbnN0YW5jZX0gZnJvbSBcIi4uL0FwcC9BcHBcIjtcclxuaW1wb3J0IHtXaW5kb3csIFdpbmRvd1N0YXRlfSBmcm9tIFwiLi4vV2luZG93L1dpbmRvd1wiO1xyXG5pbXBvcnQge01vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQge3Rocm93RXJyb3J9IGZyb20gXCIuLi8uLi9FcnJvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVza3RvcFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERlc2t0b3BTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPERlc2t0b3BQcm9wcz4ge1xyXG4gICAgd2luZG93czogRGVza3RvcFdpbmRvd1tdID0gW107ICAvLyDQv9C+0YHQu9C10LTQvdC10LUg0LDQutGC0LjQstC90L5cclxuXHJcbiAgICAvLyBnZXRXaW5kb3dCeUlkKGlkOiBzdHJpbmcpOiBXaW5kb3dTdGF0ZSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgdyBvZiB0aGlzLndpbmRvd3MpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHcuaWQgPT09IGlkKVxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHc7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnNvbGUud2FybihcIkRlc2t0b3BXaW5kb3cgaWQ9J1wiICsgaWQgKyBcIicgbm90IGZvdW5kXCIpO1xyXG4gICAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldFdpbmRvd0luZGV4QnlJZChpZDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy53aW5kb3dzLmluZGV4T2YodGhpcy5nZXRXaW5kb3dCeUlkKGlkKSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWN0aXZhdGVXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgLy8gICAgIGlmICh3aW4pIHtcclxuICAgIC8vICAgICAgICAgXy5wdWxsKHRoaXMud2luZG93cywgd2luKTtcclxuICAgIC8vICAgICAgICAgdGhpcy53aW5kb3dzLnB1c2god2luKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBjbG9zZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAvLyAgICAgXy5wdWxsKHRoaXMud2luZG93cywgd2luKTtcclxuICAgIC8vICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dJbmZvIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB3aW5JbnN0YW5jZTogV2luZG93O1xyXG4gICAgZGl2V3JhcHBlcjogRWxlbWVudDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFdpbmRvd0F1dG9TaXplID0gXCJub25lXCIgfCBcImNvbnRlbnRcIiB8IFwiZnVsbC1kZXNrdG9wXCI7XHJcbmV4cG9ydCB0eXBlIFdpbmRvd0F1dG9Qb3NpdGlvbiA9IFwibm9uZVwiIHwgXCJwYXJlbnQtY2VudGVyXCIgfCBcImRlc2t0b3AtY2VudGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5XaW5kb3dQYXJhbXMge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB0b3A/OiBudW1iZXI7XHJcbiAgICBsZWZ0PzogbnVtYmVyO1xyXG4gICAgcmlnaHQ/OiBudW1iZXI7XHJcbiAgICBib3R0b20/OiBudW1iZXI7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxuICAgIG1pbkhlaWdodD86IG51bWJlcjtcclxuICAgIG1pbldpZHRoPzogbnVtYmVyO1xyXG4gICAgcGFyZW50V2luZG93SWQ/OiBzdHJpbmc7XHJcbiAgICBhdXRvUG9zaXRpb24/OiBXaW5kb3dBdXRvUG9zaXRpb247XHJcbiAgICBhdXRvU2l6ZT86IFdpbmRvd0F1dG9TaXplO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5NZXNzYWdlV2luZG93UGFyYW1zIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgcGFyZW50V2luZG93SWQ/OiBzdHJpbmc7XHJcbiAgICBzdHlsZT86IFwiZXJyb3JcIiB8IFwiaW5mb3JtYXRpb25cIiB8IFwiY29uZmlybWF0aW9uXCIgfCBcImRhbmdlclwiO1xyXG4gICAgb2tCdXR0b25Db250ZW50PzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgY2FuY2VsQnV0dG9uQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIHJlc3VsdENhbGxiYWNrPzogKHJlc3VsdE9LOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVza3RvcFdpbmRvdyBpbXBsZW1lbnRzIE9wZW5XaW5kb3dQYXJhbXMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0b3A6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIGxlZnQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIHJpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBib3R0b206IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIG1pbkhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgbWluV2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIGNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgcGFyZW50V2luZG93SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGF1dG9Qb3NpdGlvbjogV2luZG93QXV0b1Bvc2l0aW9uIHwgdW5kZWZpbmVkO1xyXG4gICAgYXV0b1NpemU6IFdpbmRvd0F1dG9TaXplIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVza3RvcCBleHRlbmRzIENvbXBvbmVudDxEZXNrdG9wUHJvcHMsIERlc2t0b3BTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IERlc2t0b3BQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IERlc2t0b3BTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIGlmIChhcHBJbnN0YW5jZSlcclxuICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4vLyAgICBwcml2YXRlIHdpbmRvd3M6IFdpbmRvd0luZm9bXSA9IFtdO1xyXG5cclxuICAgIG9wZW5XaW5kb3cod2luQ29udGVudDogUmVhY3QuUmVhY3ROb2RlLCBvcGVuUGFyYW1zPzogT3BlbldpbmRvd1BhcmFtcykge1xyXG4gICAgICAgIGlmICghb3BlblBhcmFtcylcclxuICAgICAgICAgICAgb3BlblBhcmFtcyA9IHt9O1xyXG4gICAgICAgIGxldCBuZXdXaW4gPSBuZXcgRGVza3RvcFdpbmRvdygpO1xyXG4gICAgICAgIG5ld1dpbi5jb250ZW50ID0gd2luQ29udGVudDtcclxuICAgICAgICBuZXdXaW4udGl0bGUgPSBvcGVuUGFyYW1zLnRpdGxlIHx8IFwiLlwiO1xyXG4gICAgICAgIG5ld1dpbi5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDEyKTtcclxuXHJcbiAgICAgICAgbmV3V2luLmxlZnQgPSBvcGVuUGFyYW1zLmxlZnQ7XHJcbiAgICAgICAgbmV3V2luLnRvcCA9IG9wZW5QYXJhbXMudG9wO1xyXG4gICAgICAgIG5ld1dpbi5oZWlnaHQgPSBvcGVuUGFyYW1zLmhlaWdodDtcclxuICAgICAgICBuZXdXaW4ud2lkdGggPSBvcGVuUGFyYW1zLndpZHRoO1xyXG4gICAgICAgIG5ld1dpbi5yaWdodCA9IG9wZW5QYXJhbXMucmlnaHQ7XHJcbiAgICAgICAgbmV3V2luLmJvdHRvbSA9IG9wZW5QYXJhbXMuYm90dG9tO1xyXG5cclxuICAgICAgICBpZiAoIW5ld1dpbi5sZWZ0KSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLnJpZ2h0ICYmICFuZXdXaW4ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5sZWZ0ID0gNTA7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV3V2luLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ubGVmdCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5yaWdodCAmJiAhbmV3V2luLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbmV3V2luLnRvcCkge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5ib3R0b20gJiYgIW5ld1dpbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi50b3AgPSA1MDtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV3V2luLmJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmhlaWdodCA9IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi50b3AgPSA1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4uYm90dG9tICYmICFuZXdXaW4uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdXaW4uYXV0b1Bvc2l0aW9uID0gb3BlblBhcmFtcy5hdXRvUG9zaXRpb247XHJcbiAgICAgICAgbmV3V2luLmF1dG9TaXplID0gb3BlblBhcmFtcy5hdXRvU2l6ZTtcclxuXHJcbiAgICAgICAgbmV3V2luLm1pbkhlaWdodCA9IG9wZW5QYXJhbXMubWluSGVpZ2h0IHx8IDEwMDtcclxuICAgICAgICBuZXdXaW4ubWluV2lkdGggPSBvcGVuUGFyYW1zLm1pbldpZHRoIHx8IDEwMDtcclxuXHJcbiAgICAgICAgbmV3V2luLnBhcmVudFdpbmRvd0lkID0gb3BlblBhcmFtcy5wYXJlbnRXaW5kb3dJZDtcclxuICAgICAgICBpZiAobmV3V2luLnBhcmVudFdpbmRvd0lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93QnlJZChuZXdXaW4ucGFyZW50V2luZG93SWQpIS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dzLnB1c2gobmV3V2luKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5NZXNzYWdlV2luZG93KHdpbkNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZSwgb3BlblBhcmFtcz86IE9wZW5NZXNzYWdlV2luZG93UGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFvcGVuUGFyYW1zKVxyXG4gICAgICAgICAgICBvcGVuUGFyYW1zID0ge3N0eWxlOiBcImluZm9ybWF0aW9uXCJ9O1xyXG5cclxuICAgICAgICBsZXQgd2luUGFyYW1zOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogb3BlblBhcmFtcy50aXRsZSxcclxuICAgICAgICAgICAgcGFyZW50V2luZG93SWQ6IG9wZW5QYXJhbXMucGFyZW50V2luZG93SWQsXHJcbiAgICAgICAgICAgIGF1dG9Qb3NpdGlvbjogXCJwYXJlbnQtY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGF1dG9TaXplOiBcImNvbnRlbnRcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2luUGFyYW1zLnBhcmVudFdpbmRvd0lkKVxyXG4gICAgICAgICAgICB3aW5QYXJhbXMuYXV0b1Bvc2l0aW9uID0gXCJkZXNrdG9wLWNlbnRlclwiO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uU3R5bGUgPSB7bWluV2lkdGg6IDY1LCBtYXJnaW5MZWZ0OiA4fTtcclxuXHJcbiAgICAgICAgbGV0IG9rQnV0dG9uOiBSZWFjdC5SZWFjdE5vZGUgPSBbXTtcclxuICAgICAgICBpZiAob3BlblBhcmFtcy5va0J1dHRvbkNvbnRlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbkNsYXNzTmFtZSA9IFwiaXMtb3V0bGluZWRcIjtcclxuICAgICAgICAgICAgaWYgKG9wZW5QYXJhbXMuc3R5bGUgPT09IFwiZGFuZ2VyXCIpXHJcbiAgICAgICAgICAgICAgICBidXR0b25DbGFzc05hbWUgKz0gXCIgaXMtZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgIG9rQnV0dG9uID1cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChzZW5kZXI6QnV0dG9uLCBlOlJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXIuY2xvc2VQYXJlbnRXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlblBhcmFtcyAmJiBvcGVuUGFyYW1zLnJlc3VsdENhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5QYXJhbXMucmVzdWx0Q2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcGVuUGFyYW1zLm9rQnV0dG9uQ29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjYW5jZWxCdXR0b246IFJlYWN0LlJlYWN0Tm9kZSA9IFtdO1xyXG4gICAgICAgIGlmIChvcGVuUGFyYW1zLmNhbmNlbEJ1dHRvbkNvbnRlbnQpIHtcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uID1cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpcy1vdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoc2VuZGVyOkJ1dHRvbiwgZTpSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyLmNsb3NlUGFyZW50V2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5QYXJhbXMgJiYgb3BlblBhcmFtcy5yZXN1bHRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUGFyYW1zLnJlc3VsdENhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wZW5QYXJhbXMuY2FuY2VsQnV0dG9uQ29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3aW4gPVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWluV2lkdGg6MjAwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIHt3aW5Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7b2tCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmNlbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9wZW5QYXJhbXMpO1xyXG5cclxuICAgICAgICB0aGlzLm9wZW5XaW5kb3cod2luLCB3aW5QYXJhbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhY3RpdmF0ZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0VG9wUGFyZW50V2luZG93KGlkKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbiAmJiB0aGlzLnN0YXRlLndpbmRvd3MuaW5kZXhPZih3aW4pICE9PSB0aGlzLnN0YXRlLndpbmRvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBfLnB1bGwodGhpcy5zdGF0ZS53aW5kb3dzLCB3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpbmRvd3MucHVzaCh3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQv9C+0LTQvdC40LzQsNC10Lwg0LTQvtGH0LXRgNC90LjQtSDQvtC60L3QsFxyXG4gICAgICAgICAgICBsZXQgY2hpbGRXaW4gPSB0aGlzLnN0YXRlLndpbmRvd3MuZmlsdGVyKCh3OiBEZXNrdG9wV2luZG93KSA9PiB3LnBhcmVudFdpbmRvd0lkID09PSB3aW4hLmlkKVswXTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkV2luKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUNoaWxkV2luZG93KGNoaWxkV2luLmlkKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlQ2hpbGRXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgICAgIGlmICh3aW4gJiYgdGhpcy5zdGF0ZS53aW5kb3dzLmluZGV4T2Yod2luKSAhPT0gdGhpcy5zdGF0ZS53aW5kb3dzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgXy5wdWxsKHRoaXMuc3RhdGUud2luZG93cywgd2luKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dzLnB1c2god2luKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g0L/QvtC00L3QuNC80LDQtdC8INC00L7Rh9C10YDQvdC40LUg0L7QutC90LBcclxuICAgICAgICAgICAgbGV0IGNoaWxkV2luID0gdGhpcy5zdGF0ZS53aW5kb3dzLmZpbHRlcigodzogRGVza3RvcFdpbmRvdykgPT4gdy5wYXJlbnRXaW5kb3dJZCA9PT0gd2luIS5pZClbMF07XHJcbiAgICAgICAgICAgIGlmIChjaGlsZFdpbilcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVXaW5kb3coY2hpbGRXaW4uaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUb3BQYXJlbnRXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB0b3BQYXJlbnQgPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgICAgIHdoaWxlICh0b3BQYXJlbnQgJiYgdG9wUGFyZW50LnBhcmVudFdpbmRvd0lkKSB7XHJcbiAgICAgICAgICAgIHRvcFBhcmVudCA9IHRoaXMuZ2V0V2luZG93QnlJZCh0b3BQYXJlbnQucGFyZW50V2luZG93SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9wUGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpbmRvd0J5SWQoaWQ6IHN0cmluZyk6IERlc2t0b3BXaW5kb3cgfCBudWxsIHtcclxuICAgICAgICBmb3IgKGxldCB3IG9mIHRoaXMuc3RhdGUud2luZG93cykge1xyXG4gICAgICAgICAgICBpZiAody5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiRGVza3RvcFdpbmRvdyBpZD0nXCIgKyBpZCArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUFjdGl2YXRlID0gKHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaW5kb3coc3RhdGUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgICAgICBfLnB1bGwodGhpcy5zdGF0ZS53aW5kb3dzLCB3aW4pO1xyXG5cclxuICAgICAgICBpZiAod2luICYmIHdpbi5wYXJlbnRXaW5kb3dJZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlV2luZG93KHdpbi5wYXJlbnRXaW5kb3dJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93QnlJZCh3aW4ucGFyZW50V2luZG93SWQpIS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuY2xvc2VXaW5kb3coc3RhdGUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgICAgICh0aGlzLm5hdGl2ZUVsZW1lbnQgYXMgYW55KVtcIiQkZGVza3RvcFwiXSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiZGVza3RvcFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJhdXRvXCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiByZWY9eyAoZSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53aW5kb3dzLm1hcCgodywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci1kZXNrdG9wLXdpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2luZG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3cuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt3LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wPXt3LnRvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ9e3cubGVmdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3LndpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt3LmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0PXt3LnJpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tPXt3LmJvdHRvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt3LmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9e3cubWluV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3cubWluSGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3cuYXV0b1NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvUG9zaXRpb249e3cuYXV0b1Bvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50V2luZG93SWQ9e3cucGFyZW50V2luZG93SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2YXRlPXsgIHRoaXMuaGFuZGxlQWN0aXZhdGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17IHRoaXMuaGFuZGxlQ2xvc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1dpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL29uTW92ZVN0YXJ0PXsgdy5oYW5kbGVNb3ZlU3RhcnQgfVxyXG4vL29uUmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydD17IHcuaGFuZGxlUmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydCB9XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGVza3RvcH0gZnJvbSBcIi4uL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQgRWxlbWVudCA9IEpTWC5FbGVtZW50O1xyXG5pbXBvcnQge0FwcEVycm9yQmFyfSBmcm9tIFwiLi9BcHBFcnJvckJhclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcFN0YXRlPiB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHNpemVUbzogXCJwYXJlbnRcIiB8IFwiY29udGVudFwiO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8QXBwUHJvcHM+IHtcclxuICAgIHdpbmRvd3M6IEFwcFdpbmRvd1tdID0gW107ICAvLyDQv9C+0YHQu9C10LTQvdC10LUg0LDQutGC0LjQstC90L5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudDxBcHBQcm9wcywgQXBwU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBcHBQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEFwcFN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgYXBwSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgIC8vICAgICAgc3VwZXIuZGlkTW91bnQoKTtcclxuICAgIC8vICAgICAgYXBwSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGRlc2t0b3A6IERlc2t0b3A7XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImFwcFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPEFwcEVycm9yQmFyLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGxldCBhcHBJbnN0YW5jZTogQXBwO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwL0FwcC50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Zpc2libGVQbHVnaW5Qcm9wcywgVmlzaWJsZVBsdWdpblN0YXRlLCBWaXNpYmxlUGx1Z2lufSBmcm9tIFwiLi4vLi4vUGx1Z2lucy9WaXNpYmxlUGx1Z2luXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcEVycm9yQmFyUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxBcHBFcnJvckJhclN0YXRlPiB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwRXJyb3JCYXJTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPEFwcEVycm9yQmFyUHJvcHM+IHtcclxuICAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBFcnJvckJhciBleHRlbmRzIENvbXBvbmVudDxBcHBFcnJvckJhclByb3BzLCBBcHBFcnJvckJhclN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQXBwRXJyb3JCYXJQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwRXJyb3JCYXJTdGF0ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgLy8gICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgICAgIHdpbmRvdy5vbmVycm9yID0gdGhpcy5oYW5kbGVFcnJvcjtcclxuICAgICAgICAod2luZG93IGFzIGFueSkub251bmhhbmRsZWRyZWplY3Rpb24gPSB0aGlzLmhhbmRsZVByb21pc2VFcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yTWVzc2FnZTogUmVhY3QuUmVhY3ROb2RlO1xyXG5cclxuICAgIGhhbmRsZUVycm9yID0gKG1zZzogc3RyaW5nLCB1cmw/OiBzdHJpbmcsIGxpbmU/OiBudW1iZXIsIGNvbD86IG51bWJlciwgZXJyb3I/OiBhbnkpOiBib29sZWFuID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG1zZztcclxuXHJcbiAgICAgICAgaWYgKCFlcnJvci4kJGlzVGhyb3dFcnJvcilcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuXHJcbiAgICAgICAgbGV0IHN1cHByZXNzRXJyb3JBbGVydCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHN1cHByZXNzRXJyb3JBbGVydDtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUHJvbWlzZUVycm9yID0gKHJlYXNvbjogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHJlYXNvbi5tZXNzYWdlKSAgLy8gYmx1ZWJpcmQg0LLRi9C30YvQstCw0LXQuCDQvtCx0YDQsNCx0L7RgtGH0LjQuiAyINGA0LDQt9CwLCDQstGC0L7RgNC+0Lkg0YEg0L/Rg9GB0YLRi9C8IG1lc3NhZ2Ug0L/RgNC+0L/Rg9GB0LrQsNC10LxcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFzb24ubWVzc2FnZTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJhcHAtZXJyb3ItYmFyXCIpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3NOYW1lKCF0aGlzLnN0YXRlLnZpc2libGUsIFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2NvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IFwiI2ZmNGU0ZVwiLCBjdXJzb3I6IFwiZGVmYXVsdFwifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4geyB0aGlzLnN0YXRlLnZpc2libGUgPSBmYWxzZTsgdGhpcy5mb3JjZVVwZGF0ZSgpO30gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwL0FwcEVycm9yQmFyLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5pbXBvcnQge01vdmFibGUsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCB7T3BlbldpbmRvd1BhcmFtcywgRGVza3RvcCwgV2luZG93QXV0b1Bvc2l0aW9uLCBXaW5kb3dBdXRvU2l6ZX0gZnJvbSBcIi4uL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQge3Rocm93RXJyb3J9IGZyb20gXCIuLi8uLi9FcnJvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93UHJvcHMgZXh0ZW5kcyBPcGVuV2luZG93UGFyYW1zLCBDb21wb25lbnRQcm9wczxXaW5kb3dTdGF0ZT4ge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgICBvbkFjdGl2YXRlPyhzdGF0ZTogV2luZG93U3RhdGUpOiB2b2lkO1xyXG4gICAgb25DbG9zZT8oc3RhdGU6IFdpbmRvd1N0YXRlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd1N0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8V2luZG93UHJvcHM+IGltcGxlbWVudHMgT3BlbldpbmRvd1BhcmFtcyB7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIG1pbldpZHRoOiBudW1iZXI7XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHBhcmVudFdpbmRvd0lkOiBzdHJpbmc7XHJcbiAgICBhdXRvUG9zaXRpb246IFdpbmRvd0F1dG9Qb3NpdGlvbjtcclxuICAgIGF1dG9TaXplOiBXaW5kb3dBdXRvU2l6ZTtcclxuXHJcbi8vICAgIGNoaWxkV2luZG93OiBXaW5kb3c7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQ8V2luZG93UHJvcHMsIFdpbmRvd1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogV2luZG93UHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBXaW5kb3dTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUluaXRTdGF0ZSgpIHtcclxuICAgICAgICBfLmFzc2lnbih0aGlzLnN0YXRlLCB0aGlzLnByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5pdFN0YXRlKCk7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogV2luZG93UHJvcHMpIHtcclxuICAgICAgICBzdXBlci53aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICAgICAgLy90aGlzLnN0YXRlLmRpc2FibGVkID0gbmV4dFByb3BzLmRpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQYXJlbnREZXNrdG9wRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKChwYXJlbnQgYXMgYW55KS4kJGRlc2t0b3ApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3dFcnJvcihcIldpbmRvdy5nZXRQYXJlbnREZXNrdG9wRWxlbWVudCgpOiBwYXJlbnQgZGVza3RvcCBub3QgZm91bmRcIik7XHJcbiAgICAgICAgdGhyb3cgXCJmYWtlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBjZW50ZXJUbyhwYXJlbnQ6IEpRdWVyeSkge1xyXG4gICAgLy8gICAgIGxldCB3aW4gPSAkKHRoaXMubmF0aXZlRWxlbWVudCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMuc3RhdGUudG9wID0gKHBhcmVudC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpIC8gMjtcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS50b3AgPiBwYXJlbnQub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpKVxyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IHBhcmVudC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCk7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUudG9wIDwgMCkgdGhpcy5zdGF0ZS50b3AgPSAwO1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLnN0YXRlLmxlZnQgPSAocGFyZW50Lm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpIC8gMjtcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS5sZWZ0ID4gcGFyZW50Lm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IHBhcmVudC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPCAwKSB0aGlzLnN0YXRlLmxlZnQgPSAwO1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjZW50ZXJUb0Rlc2t0b3AoKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9ICQodGhpcy5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBsZXQgZGVza3RvcCA9ICQodGhpcy5nZXRQYXJlbnREZXNrdG9wRWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50b3AgPSAoZGVza3RvcC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpIC8gMjtcclxuICAgICAgICB0aGlzLnN0YXRlLmxlZnQgPSAoZGVza3RvcC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpKSAvIDI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcCA+IGRlc2t0b3Aub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IGRlc2t0b3Aub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcCA8IDApIHRoaXMuc3RhdGUudG9wID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gKGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSkgLyAyO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPiBkZXNrdG9wLm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sZWZ0IDwgMCkgdGhpcy5zdGF0ZS5sZWZ0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIC8vdGhpcy5jZW50ZXJUbygkKHRoaXMuZ2V0UGFyZW50RGVza3RvcEVsZW1lbnQoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2VudGVyVG9QYXJlbnRXaW5kb3coKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9ICQodGhpcy5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBsZXQgcGFyZW50ID0gJChcIiNcIiArIHRoaXMuc3RhdGUucGFyZW50V2luZG93SWQpO1xyXG4gICAgICAgIGxldCBkZXNrdG9wID0gJCh0aGlzLmdldFBhcmVudERlc2t0b3BFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IChwYXJlbnQub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpKSAvIDIgKyBwYXJlbnQucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gKHBhcmVudC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpKSAvIDIgKyBwYXJlbnQucG9zaXRpb24oKS5sZWZ0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3AgPiBkZXNrdG9wLm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3AgPSBkZXNrdG9wLm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3AgPCAwKSB0aGlzLnN0YXRlLnRvcCA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPiBkZXNrdG9wLm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sZWZ0IDwgMCkgdGhpcy5zdGF0ZS5sZWZ0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIC8vdGhpcy5jZW50ZXJUbygkKFwiI1wiICsgdGhpcy5zdGF0ZS5wYXJlbnRXaW5kb3dJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgICAgICh0aGlzLm5hdGl2ZUVsZW1lbnQgYXMgYW55KVtcIiQkd2luZG93XCJdID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXV0b1Bvc2l0aW9uID09PSBcImRlc2t0b3AtY2VudGVyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyVG9EZXNrdG9wKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5hdXRvUG9zaXRpb24gPT09IFwicGFyZW50LWNlbnRlclwiKVxyXG4gICAgICAgICAgICB0aGlzLmNlbnRlclRvUGFyZW50V2luZG93KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50RGVza3RvcCgpLmNsb3NlV2luZG93KHRoaXMuc3RhdGUuaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbW92ZVN0YXJ0ID0gKGU6IE1vdmVTdGFydEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZS5iaW5kWCh0aGlzLnN0YXRlLCBcImxlZnRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKFwibGVmdFwiLCB0aGlzLnN0YXRlLmxlZnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUuYmluZFkodGhpcy5zdGF0ZSwgXCJ0b3BcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKFwidG9wXCIsIHRoaXMuc3RhdGUudG9wKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZU9uQ2xpY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydCA9IChlOiBNb3ZlU3RhcnRFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUuYmluZFgodGhpcy5zdGF0ZSwgXCJ3aWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpZHRoIDwgdGhpcy5zdGF0ZS5taW5XaWR0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGggPSB0aGlzLnN0YXRlLm1pbldpZHRoO1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKFwid2lkdGhcIiwgdGhpcy5zdGF0ZS53aWR0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5iaW5kWSh0aGlzLnN0YXRlLCBcImhlaWdodFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhlaWdodCA8IHRoaXMuc3RhdGUubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLnN0YXRlLm1pbkhlaWdodDtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcyhcImhlaWdodFwiLCB0aGlzLnN0YXRlLmhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZU9uQ2xpY2sgPSAoZT86IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY3RpdmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGl2YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChuZXh0UHJvcHM6IFdpbmRvd1Byb3BzLCBuZXh0U3RhdGU6IFdpbmRvd1N0YXRlKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBvbGREaXNhYmxlZCA9IHRoaXMuc3RhdGUuZGlzYWJsZWQgPT09IHRydWU7XHJcbiAgICAgICAgbGV0IG5ld0Rpc2FibGVkID0gbmV4dFByb3BzLmRpc2FibGVkID09PSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmRpc2FibGVkID0gbmV3RGlzYWJsZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiBvbGREaXNhYmxlZCAhPT0gbmV3RGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlclJpZ2h0Qm90dG9tQ29ybmVyUmVzaXplcigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmF1dG9TaXplID09PSBcImNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5kb3ctcmVzaXplclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIGhlaWdodDoxMCwgd2lkdGg6MTAsIHJpZ2h0OjAsYm90dG9tOjAsIGJvcmRlclJhZGl1czogXCIwIDAgNXB4IDBcIixjdXJzb3I6IFwic2UtcmVzaXplXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXt0aGlzLnJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe2lkOiB0aGlzLnN0YXRlLmlkfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwid2luZG93IGJveFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7cG9zaXRpb246IFwiYWJzb2x1dGVcIn0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCxcclxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMuc3RhdGUucmlnaHQsXHJcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5zdGF0ZS5ib3R0b20sXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS5taW5IZWlnaHQsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLm1pbldpZHRoLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hdXRvU2l6ZSA9PT0gXCJjb250ZW50XCIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb250ZW50XCIpO1xyXG4gICAgICAgICAgICAvLyA/XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJCdXR0b25TdHlsZSA9IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogMixcclxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLXdpblwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuZGlzYWJsZWQpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5kaXNhYmxlZCk7XHJcblxyXG4gICAgICAgIGxldCBkaXNhYmxlZFdyYXBwZXJDbGFzcyA9IFwid2luZG93LWRpc2FibGVkLXdyYXBwZXJcIjtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGlzYWJsZWQgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlZCA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIGRpc2FibGVkV3JhcHBlckNsYXNzICs9IFwiIGlzLWhpZGRlblwiO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbmRvd1wiXHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgIHJlZj17IChlOiBhbnkpID0+IHsgdGhpcy5uYXRpdmVFbGVtZW50ID0gZTsgfX1cclxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5oYW5kbGVPbkNsaWNrIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCIgc2l6ZVRvPVwicGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbmRvdy1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlclJhZGl1czogXCI1cHggNXB4IDBweCAwcHhcIiwgcG9zaXRpb246XCJyZWxhdGl2ZVwiLCBwYWRkaW5nTGVmdDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwicm93XCIgc2l6ZVRvPVwicGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3aW5kb3ctdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDowLCBsZWZ0OjAsIHJpZ2h0OjAsYm90dG9tOjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVTdGFydD17dGhpcy5tb3ZlU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW92YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1hZGRvbnMgYnV0dG9ucy1iYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMiwgcGFkZGluZ1JpZ2h0OiA0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBtaW5pbWl6ZS1idXR0b25cIiBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCIgc3R5bGU9e3t0b3A6IDN9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgbWF4aW1pemUtYnV0dG9uXCIgc3R5bGU9e2hlYWRlckJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vXCIgc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIn19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBjbG9zZS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIiBzdHlsZT17e3RvcDogLTF9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGNsYXNzTmFtZT1cIndpbmRvdy1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzoxMCwgb3ZlcmZsb3c6XCJoaWRkZW5cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJpZ2h0Qm90dG9tQ29ybmVyUmVzaXplcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rpc2FibGVkV3JhcHBlckNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6MCwgdG9wOjAsIHJpZ2h0OjAsIGJvdHRvbTowfX1cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIDxkaXYgY2xhc3NOYW1lPVwid2luZG93LWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6XCIxMDAlXCIgfX0+XHJcbi8vICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuLy8gPC9kaXY+XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvV2luZG93L1dpbmRvdy50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCBEcmFnRXZlbnRIYW5kbGVyID0gX19SZWFjdC5EcmFnRXZlbnRIYW5kbGVyO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZhYmxlUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIG9uTW92ZVN0YXJ0PzogKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCk9PnZvaWQ7XHJcbiAgICBvbk1vdmU/OiAoZXZlbnQ6IE1vdmVFdmVudCk9PnZvaWQ7XHJcbiAgICBvbk1vdmVFbmQ/OiAoZXZlbnQ6IE1vdmVFbmRFdmVudCk9PnZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVTdGFydEV2ZW50IHtcclxuICAgIGJpbmRYOiAob2JqOiBPYmplY3QsIHByb3BOYW1lOiBzdHJpbmcsIG1vdmVkQ2FsbGJhY2s/OiAoKT0+dm9pZCk9PnZvaWQ7XHJcbiAgICBiaW5kWTogKG9iajogT2JqZWN0LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCk9PnZvaWQpPT52b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVFdmVudCB7XHJcbiAgICBkZWx0YVg6IG51bWJlcjtcclxuICAgIGRlbHRhWTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVFbmRFdmVudCB7XHJcbiAgICBkZWx0YVg6IG51bWJlcjtcclxuICAgIGRlbHRhWTogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIEJpbmRlZE9iamVjdCB7XHJcbiAgICBvYmo6IGFueTtcclxuICAgIHByb3BOYW1lOiBzdHJpbmdcclxuICAgIHN0YXJ0VmFsdWU6IG51bWJlcjtcclxuICAgIG1vdmVkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xyXG4gICAgbGFzdFZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZhYmxlIGV4dGVuZHMgQ29tcG9uZW50PE1vdmFibGVQcm9wcyxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydENsaWVudFg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhcnRDbGllbnRZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRyYWdPdmVyX0JpbmRlZDogYW55O1xyXG5cclxuICAgIHByaXZhdGUgYmluZGVkWDogQmluZGVkT2JqZWN0W10gPSBbXTtcclxuICAgIHByaXZhdGUgYmluZGVkWTogQmluZGVkT2JqZWN0W10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRYKG9iajogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuYmluZGVkWC5wdXNoKHtcclxuICAgICAgICAgICAgb2JqOiBvYmosXHJcbiAgICAgICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZSxcclxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogb2JqW3Byb3BOYW1lXSxcclxuICAgICAgICAgICAgbW92ZWRDYWxsYmFjazogbW92ZWRDYWxsYmFjayxcclxuICAgICAgICAgICAgbGFzdFZhbHVlOiBvYmpbcHJvcE5hbWVdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgYmluZFkob2JqOiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIG1vdmVkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kZWRZLnB1c2goe1xyXG4gICAgICAgICAgICBvYmo6IG9iaixcclxuICAgICAgICAgICAgcHJvcE5hbWU6IHByb3BOYW1lLFxyXG4gICAgICAgICAgICBzdGFydFZhbHVlOiBvYmpbcHJvcE5hbWVdLFxyXG4gICAgICAgICAgICBtb3ZlZENhbGxiYWNrOiBtb3ZlZENhbGxiYWNrLFxyXG4gICAgICAgICAgICBsYXN0VmFsdWU6IG9ialtwcm9wTmFtZV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlRHJhZ1N0YXJ0KGU6IERyYWdFdmVudCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0Q2xpZW50WCA9IGUuY2xpZW50WDtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2xpZW50WSA9IGUuY2xpZW50WTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3ZlU3RhcnQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlU3RhcnQoe2JpbmRYOiB0aGlzLmJpbmRYLmJpbmQodGhpcyksIGJpbmRZOiB0aGlzLmJpbmRZLmJpbmQodGhpcyl9KTtcclxuXHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIm1vdmFibGVcIiwgXCJcIik7XHJcbiAgICAgICAgLy9lLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdPdmVyX0JpbmRlZCA9IHRoaXMuaGFuZGxlRHJhZ092ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3Zlcl9CaW5kZWQpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJhZ0VuZChlOiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3Zlcl9CaW5kZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZUVuZClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmVFbmQoe1xyXG4gICAgICAgICAgICAgICAgZGVsdGFYOiBlLmNsaWVudFggLSB0aGlzLnN0YXJ0Q2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGRlbHRhWTogZS5jbGllbnRZIC0gdGhpcy5zdGFydENsaWVudFlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iaW5kZWRYID0gW107XHJcbiAgICAgICAgdGhpcy5iaW5kZWRZID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJhZ092ZXIoZTogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRlZFguZm9yRWFjaCgoYmluZCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBiaW5kLnN0YXJ0VmFsdWUgKyBlLmNsaWVudFggLSB0aGlzLnN0YXJ0Q2xpZW50WDtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBiaW5kLmxhc3RWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgYmluZC5vYmpbYmluZC5wcm9wTmFtZV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJpbmQubGFzdFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmluZC5tb3ZlZENhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGJpbmQubW92ZWRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGVkWS5mb3JFYWNoKChiaW5kKT0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gYmluZC5zdGFydFZhbHVlICsgZS5jbGllbnRZIC0gdGhpcy5zdGFydENsaWVudFk7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gYmluZC5sYXN0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQub2JqW2JpbmQucHJvcE5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBiaW5kLmxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmQubW92ZWRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBiaW5kLm1vdmVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdmUpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhWDogZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBkZWx0YVk6IGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIm1vdmFibGVcIik7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7ZHJhZ2dhYmxlOiB0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2N1cnNvcjogXCJtb3ZlXCJ9KTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wSW5mby5lZGl0b3JUeXBlLCBlZGl0b3JQcm9wcywgbnVsbClcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17dGhpcy5oYW5kbGVEcmFnU3RhcnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17dGhpcy5oYW5kbGVEcmFnRW5kLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTW92YWJsZS9Nb3ZhYmxlLnRzeFxuICoqLyIsImltcG9ydCB7U3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge1Rlc3RCdWh0YU9iamVjdDF9IGZyb20gXCIuL3Rlc3RCdWh0YU9iamVjdDFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyB0ZXN0QnVodGFPYmplY3QyIGV4dGVuZHMgVGVzdEJ1aHRhT2JqZWN0MSB7XHJcblxyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQn9C+0Lsvc2V4XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L5cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCf0L7RgtC+0LvQvtC6INCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIHNleDogc3RyaW5nO1xyXG5cclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9UZXN0MS90ZXN0QnVodGFPYmplY3QyLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgc2hhbGxvd0NvbXBhcmUgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZVwiKTtcclxuXHJcbi8vaW1wb3J0IHtleGVjdXRlU1FMfSBmcm9tIFwiLi4vYnVodGEtY29yZS9TUUxcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge2V4ZWN1dGVTUUx9IGZyb20gXCIuLi8uLi9TUUxcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbnN9IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uc1wiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uUHJvcHMsIFRyZWVHcmlkQ29sdW1ufSBmcm9tIFwiLi9UcmVlR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge0tleWNvZGV9IGZyb20gXCIuLi8uLi9LZXljb2RlXCI7XHJcbmltcG9ydCB7TW92YWJsZSwgTW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi9Nb3ZhYmxlL01vdmFibGVcIjtcclxuaW1wb3J0IHtnZXRTY3JvbGxiYXJXaWR0aH0gZnJvbSBcIi4uLy4uL2dldFNjcm9sbEJhcldpZHRoXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5pbXBvcnQge09iamVjdERlc2lnbmVyfSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyXCI7XHJcbmltcG9ydCB7T3BlbldpbmRvd1BhcmFtc30gZnJvbSBcIi4uL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQge2FwcEluc3RhbmNlfSBmcm9tIFwiLi4vQXBwL0FwcFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkRGF0YVNvdXJjZX0gZnJvbSBcIi4vVHJlZUdyaWREYXRhU291cmNlXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3RcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxUcmVlR3JpZFN0YXRlPiB7XHJcbiAgICBkYXRhU291cmNlOiBUcmVlR3JpZERhdGFTb3VyY2U7XHJcbiAgICByb3dIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBrZXlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBwYXJlbnRLZXlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBoaWVyYXJjaHlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPzogc3RyaW5nO1xyXG4gICAgdHJlZU1vZGU/OiBib29sZWFuO1xyXG4gICAgYXV0b0V4cGFuZE5vZGVzVG9MZXZlbD86IG51bWJlcjtcclxuXHJcbiAgICBlZGl0YWJsZT86IGJvb2xlYW47XHJcbiAgICBkZW55SW5zZXJ0PzogYm9vbGVhbjtcclxuICAgIGRlbnlVcGRhdGU/OiBib29sZWFuO1xyXG4gICAgZGVueURlbGV0ZT86IGJvb2xlYW47XHJcblxyXG4gICAgb25DcmVhdGVOZXdSZWNvcmQ/OiAoKSA9PiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPFRyZWVHcmlkUHJvcHM+IHtcclxuICAgIGNvbHVtbnM6IEludGVybmFsQ29sdW1uW107XHJcbiAgICBwYWdlTGVuZ3RoOiBudW1iZXI7XHJcbiAgICByb3dzOiBJbnRlcm5hbFJvd1tdO1xyXG4gICAgbm9kZXM6IEludGVybmFsVHJlZU5vZGVbXTtcclxuICAgIGZvY3VzZWRSb3dJbmRleDogbnVtYmVyO1xyXG4gICAgZm9jdXNlZENlbGxJbmRleDogbnVtYmVyO1xyXG4gICAgZGF0YVNvdXJjZTogVHJlZUdyaWREYXRhU291cmNlO1xyXG5cclxuICAgIGhlYWRlckZha2VSb3c6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyRmFrZVJvdzogSFRNTEVsZW1lbnQ7XHJcbiAgICBoZWFkZXJXcmFwcGVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBib2R5V3JhcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyV3JhcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGhlYWRlclRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBib2R5VGFibGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGZvb3RlclRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbENvbHVtbiB7XHJcbiAgICBwcm9wczogVHJlZUdyaWRDb2x1bW5Qcm9wcztcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBjYXB0aW9uOiBzdHJpbmc7XHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZztcclxuICAgIGZvb3Rlcjogc3RyaW5nO1xyXG4gICAgaGlkZGVuOiBib29sZWFuO1xyXG4gICAgaGVhZGVyV2lkdGhOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGJvZHlXaWR0aE5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyV2lkdGhOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVybmFsUm93IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncmlkU3RhdGU6IFRyZWVHcmlkU3RhdGUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAvLy8gICBzb3VyY2VPYmplY3Q6IGFueTtcclxuICAgIHNvdXJjZUluZGV4OiBudW1iZXI7XHJcbiAgICBjZWxsRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgIG5vZGU6IEludGVybmFsVHJlZU5vZGU7XHJcblxyXG4gICAgZ2V0IHNvdXJjZURhdGEoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkU3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpW3RoaXMuc291cmNlSW5kZXhdO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVybmFsVHJlZU5vZGUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGdyaWRTdGF0ZTogVHJlZUdyaWRTdGF0ZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIC8vc291cmNlT2JqZWN0OiBhbnk7XHJcbiAgICBzb3VyY2VJbmRleDogbnVtYmVyO1xyXG4gICAgY2VsbEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgLy8g0LTQu9GPIHRyZWVNb2RlO1xyXG4gICAgcGFyZW50OiBJbnRlcm5hbFRyZWVOb2RlO1xyXG4gICAgY2hpbGRyZW46IEludGVybmFsVHJlZU5vZGVbXSA9IFtdO1xyXG4gICAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG5cclxuICAgIHB1c2hSb3dSZWN1cnNpdmUocm93czogSW50ZXJuYWxSb3dbXSwgbWF4UGFnZUxlbmd0aDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCA+PSBtYXhQYWdlTGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCByb3cgPSBuZXcgSW50ZXJuYWxSb3codGhpcy5ncmlkU3RhdGUpO1xyXG4gICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IHRoaXMuc291cmNlSW5kZXg7XHJcbiAgICAgICAgcm93Lm5vZGUgPSB0aGlzO1xyXG4gICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5wdXNoUm93UmVjdXJzaXZlKHJvd3MsIG1heFBhZ2VMZW5ndGgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpdGVyYXRlUmVjdXJzaXZlKGNhbGxiYWNrOiAobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuaXRlcmF0ZVJlY3Vyc2l2ZShjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4vL2NvbnN0IHZlcnRTY3JvbGxCYXJXaWR0aCA9IDMwO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkIGV4dGVuZHMgQ29tcG9uZW50PFRyZWVHcmlkUHJvcHMsIFRyZWVHcmlkU3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlZUdyaWRQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgVHJlZUdyaWRTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpdGVyYXRlQWxsTm9kZXMoY2FsbGJhY2s6IChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5mb3JFYWNoKChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuaXRlcmF0ZVJlY3Vyc2l2ZShjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHBhbmRBbGwoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5mb3JFYWNoKChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuaXRlcmF0ZVJlY3Vyc2l2ZSgobm9kOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2QuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xsYXBzZUFsbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVyYXRlQWxsTm9kZXMoKG5vZDogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBub2QuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRSb3dJbmRleChzb3VyY2VJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBUT0RPOiDRgdC00LXQu9Cw0YLRjCDQstCw0YDQuNCw0L3RgiDQtNC70Y8gdHJlZU1vZGVcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLnNvdXJjZUluZGV4ID09PSBzb3VyY2VJbmRleClcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFJvdyhzb3VyY2VJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRSb3dJbmRleChzb3VyY2VJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgLy8gVE9ETzog0YHQtNC10LvQsNGC0Ywg0L/RgNC+0LrRgNGD0YLQutGDLCDQtdGB0LvQuCBmb2N1c2VkINC90LUg0LLQuNC00L3QsCDQvdCwINGN0LrRgNCw0L3QtVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwZGF0ZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub3BlbkVkaXRGb3JtKHRoaXMuc3RhdGUucm93c1t0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleF0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbnNlcnRCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm9wZW5JbnNlcnRGb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuRGVsZXRlRm9ybSh0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRlbGV0ZUZvcm0ocm93VG9EZWxldGU6IEludGVybmFsUm93KSB7XHJcbiAgICAgICAgLy9sZXQgcm93VG9EZWxldGUgPSB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdO1xyXG4gICAgICAgIGxldCByb3cgPSByb3dUb0RlbGV0ZS5zb3VyY2VEYXRhIGFzIERlc2lnbmVkT2JqZWN0O1xyXG4gICAgICAgIGxldCBvYmplY3RDbGFzc05hbWUgPSBcItC30LDQv9C40YHRjFwiO1xyXG4gICAgICAgIGlmIChyb3cuZ2V0Q2xhc3NOYW1lKVxyXG4gICAgICAgICAgICBvYmplY3RDbGFzc05hbWUgPSByb3cuZ2V0Q2xhc3NOYW1lKCk7XHJcblxyXG4gICAgICAgIGxldCBvYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICBpZiAocm93LnRvU3RyaW5nKVxyXG4gICAgICAgICAgICBvYmplY3ROYW1lID0gcm93LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gPGRpdiBjbGFzc05hbWU9XCJjb2xvci1yZWRcIj7Qo9C00LDQu9C40YLRjCBcIntvYmplY3RDbGFzc05hbWV9XCI/PGJyLz57IG9iamVjdE5hbWUgfTwvZGl2PjtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93RGVsZXRlQ29uZmlybWF0aW9uV2luZG93KG1lc3NhZ2UsIChva1Jlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhva1Jlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChva1Jlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5kZWxldGVSb3cocm93VG9EZWxldGUuc291cmNlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoRGF0YVNvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0ZvY3VzZWRJbmRleCA9IHRoaXMuc3RhdGUucm93cy5pbmRleE9mKHJvd1RvRGVsZXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Rm9jdXNlZEluZGV4ID4gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCAtIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZvY3VzZWRJbmRleCA9IHRoaXMuc3RhdGUucm93cy5sZW5ndGggLSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFJvdyh0aGlzLnN0YXRlLnJvd3NbbmV3Rm9jdXNlZEluZGV4XS5zb3VyY2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuSW5zZXJ0Rm9ybSgpIHtcclxuXHJcbiAgICAgICAgbGV0IGRlc2lnbmVkT2JqZWN0ID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldE5ld1JvdygpO1xyXG5cclxuICAgICAgICBpZiAoZGVzaWduZWRPYmplY3QpIHtcclxuICAgICAgICAgICAgbGV0IHdpbiA9XHJcbiAgICAgICAgICAgICAgICA8T2JqZWN0RGVzaWduZXJcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17ZGVzaWduZWRPYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlQ2hhbmdlcz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuYWRkUm93KGRlc2lnbmVkT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoRGF0YVNvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFJvdyhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLQtNC+0LHQsNCy0LvQtdC90LjQtVwiLFxyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50V2luZG93SWQ6IHRoaXMuZ2V0UGFyZW50V2luZG93SWQoKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRQYXJlbnREZXNrdG9wKCkub3BlbldpbmRvdyh3aW4sIG9wZW5QYXJhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FZGl0Rm9ybShyb3c6IEludGVybmFsUm93KSB7XHJcblxyXG4gICAgICAgIGxldCBkZXNpZ25lZE9iamVjdCA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpW3Jvdy5zb3VyY2VJbmRleF07XHJcblxyXG4gICAgICAgIGxldCB3aW4gPVxyXG4gICAgICAgICAgICA8T2JqZWN0RGVzaWduZXJcclxuICAgICAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0PXtkZXNpZ25lZE9iamVjdH1cclxuICAgICAgICAgICAgICAgIG9uU2F2ZUNoYW5nZXM9eyAoKSA9PiB7IHRoaXMucmVmcmVzaFJvdyhyb3cuc291cmNlSW5kZXgpOyB9fVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtVwiLFxyXG4gICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICBsZWZ0OiA1MCxcclxuICAgICAgICAgICAgcGFyZW50V2luZG93SWQ6IHRoaXMuZ2V0UGFyZW50V2luZG93SWQoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50RGVza3RvcCgpLm9wZW5XaW5kb3cod2luLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUNvbHVtbnMoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zID0gW107XHJcblxyXG4gICAgICAgIC8vINGB0L3QsNGH0LDQu9CwINC60L7Qu9C+0L3QutC4INC30LDQv9C+0LvQvdGP0LXQvCDQuNC3INGC0LXQs9C+0LIgPFRyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgIGxldCBjb2x1bW5zVGFnID0gdGhpcy5nZXRDaGlsZHJlbihUcmVlR3JpZENvbHVtbnMpO1xyXG4gICAgICAgIGNvbHVtbnNUYWcuZm9yRWFjaCgodGFnOiBKU1guRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uVGFnTGlzdCA9IHRoaXMuZ2V0Q2hpbGRyZW5PZlByb3BzKHRhZy5wcm9wcywgVHJlZUdyaWRDb2x1bW4pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1uVGFnTGlzdCA9IGNvbHVtblRhZ0xpc3Quc29ydCgoYTogSlNYLkVsZW1lbnQsIGI6IEpTWC5FbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgQSA9IGEucHJvcHMgYXMgVHJlZUdyaWRDb2x1bW5Qcm9wcztcclxuICAgICAgICAgICAgICAgIGxldCBCID0gYi5wcm9wcyBhcyBUcmVlR3JpZENvbHVtblByb3BzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEEub3JkZXIgLSBCLm9yZGVyO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtblRhZ0xpc3QuZm9yRWFjaCgocHJvcENvbDogSlNYLkVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gbmV3IEludGVybmFsQ29sdW1uKCk7XHJcbiAgICAgICAgICAgICAgICBjb2wucHJvcHMgPSBwcm9wQ29sLnByb3BzO1xyXG4gICAgICAgICAgICAgICAgY29sLndpZHRoID0gcHJvcENvbC5wcm9wcy53aWR0aCB8fCAxNTA7XHJcbiAgICAgICAgICAgICAgICBjb2wuY2FwdGlvbiA9IHByb3BDb2wucHJvcHMuY2FwdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbC5maWVsZE5hbWUgPSBwcm9wQ29sLnByb3BzLnByb3BlcnR5TmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbC5jYXB0aW9uID0gcHJvcENvbC5wcm9wcy5jYXB0aW9uIHx8IGNvbC5maWVsZE5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMucHVzaChjb2wpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0LXRgdC70Lgg0YLQtdCz0L7QsiA8VHJlZUdyaWRDb2x1bW4+INC90LXRgiwg0YLQviDQt9Cw0L/QvtC70L3Rj9C10Lwg0LjQtyBEYXRhU291cmNlXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5pc1RyZWVHcmlkRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRzID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlIGFzIFRyZWVHcmlkRGF0YVNvdXJjZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29sdW1ucyA9IGRzLmdldFRyZWVHcmlkQ29sdW1ucygpLnNvcnQoKGE6IFRyZWVHcmlkQ29sdW1uUHJvcHMsIGI6IFRyZWVHcmlkQ29sdW1uUHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zLmZvckVhY2goKHByb3BDb2w6IFRyZWVHcmlkQ29sdW1uUHJvcHMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IG5ldyBJbnRlcm5hbENvbHVtbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5wcm9wcyA9IHByb3BDb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLndpZHRoID0gcHJvcENvbC53aWR0aCB8fCAxNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLmNhcHRpb24gfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuZmllbGROYW1lID0gcHJvcENvbC5wcm9wZXJ0eU5hbWUgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuY2FwdGlvbiA9IHByb3BDb2wuY2FwdGlvbiB8fCBjb2wuZmllbGROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5wdXNoKGNvbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmVlR3JpZDog0YHQv9C40YHQvtC6INC60L7Qu9C+0L3QvtC6INC90LUg0L7Qv9GA0LXQtNC10LvQtdC9LlwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Rm9jdXNlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOb2RlcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMudHJlZU1vZGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGllcmFyY2h5RmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTm9kZXNGcm9tSGllcmFyY2h5RmllbGQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidW5rbm93biBoaWVyYXJjaHkgbW9kZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOb2Rlc0Zyb21IaWVyYXJjaHlGaWVsZCgpIHtcclxuXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5kYXRhU291cmNlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaGllcmFyY2h5RGVsaW1pdGVycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWFRyZWVHcmlkOiBoaWVyYXJjaHlEZWxpbWl0ZXJzIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGludGVyZmFjZSBJU29ydGVkIHtcclxuICAgICAgICAgICAgaGllcmFyY2h5U3RyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIG9iakluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc29ydGVkOiBJU29ydGVkW10gPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5tYXAoKG9iajogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoaWVyYXJjaHlTdHI6IG9ialt0aGlzLnByb3BzLmhpZXJhcmNoeUZpZWxkTmFtZSB8fCBcIlwiXS50b1N0cmluZygpLCAgLy8gdG9kbyB0aGlzLnByb3BzLmhpZXJhcmNoeUZpZWxkTmFtZSB8fCBcIlwiICA/Pz9cclxuICAgICAgICAgICAgICAgIG9iakluZGV4OiBpbmRleFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb3J0ZWQgPSBfLnNvcnRCeShzb3J0ZWQsIFtcImhpZXJhcmNoeVN0clwiXSk7XHJcblxyXG4gICAgICAgIGxldCBjYWNoZTogeyBbaGllcmFyY2h5SWQ6IHN0cmluZ106IEludGVybmFsVHJlZU5vZGU7IH0gPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ub2RlcyA9IFtdO1xyXG5cclxuICAgICAgICBzb3J0ZWQuZm9yRWFjaCgocywgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBoaWVyYXJjaHlEZWxpbWl0ZXJzPSB0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMgfHwgXCIuXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3BsaXR0ZWQgPSBzLmhpZXJhcmNoeVN0ci5zcGxpdChoaWVyYXJjaHlEZWxpbWl0ZXJzKTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudElkOiBhbnk7XHJcbiAgICAgICAgICAgIGxldCBub2RlSWQ6IGFueTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0dGVkLmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgICAgIG5vZGVJZCA9IHMuaGllcmFyY2h5U3RyO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGVJZCA9IF8ubGFzdChzcGxpdHRlZCk7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRJZCA9IHNwbGl0dGVkLnNsaWNlKDAsIHNwbGl0dGVkLmxlbmd0aCAtIDEpLmpvaW4oaGllcmFyY2h5RGVsaW1pdGVycy5zbGljZSgwLCAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWNoZVtub2RlSWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJYVHJlZUdyaWQ6IG5vZGVJZCAnXCIgKyBub2RlSWQgKyBcIicgaXMgZHVwbGljYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IEludGVybmFsVHJlZU5vZGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zb3VyY2VJbmRleCA9IHMub2JqSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZXZlbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHBhbmRlZCA9IG5vZGUubGV2ZWwgPCB0aGlzLnByb3BzLmF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVbbm9kZUlkXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBjYWNoZVtwYXJlbnRJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgSW50ZXJuYWxUcmVlTm9kZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc291cmNlSW5kZXggPSBzLm9iakluZGV4O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5sZXZlbCA9IHBhcmVudE5vZGUubGV2ZWwgKyAxO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHBhbmRlZCA9IG5vZGUubGV2ZWwgPCB0aGlzLnByb3BzLmF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBjYWNoZVtzLmhpZXJhcmNoeVN0cl0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe3N0cjogcy5oaWVyYXJjaHlTdHIsIHBhcmVudElkLCBub2RlSWR9KTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJvd3MoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUucm93cyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5mb3JFYWNoKChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wdXNoUm93UmVjdXJzaXZlKHRoaXMuc3RhdGUucm93cywgdGhpcy5zdGF0ZS5wYWdlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRhdGFTb3VyY2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmlzVHJlZUdyaWREYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHMgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgYXMgVHJlZUdyaWREYXRhU291cmNlO1xyXG4gICAgICAgICAgICAgICAgZHMuZ2V0RGF0YVJvd3MoKS5mb3JFYWNoKChvYmo6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSBuZXcgSW50ZXJuYWxSb3codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LnNvdXJjZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnB1c2gocm93KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkuZm9yRWFjaCgob2JqOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0gbmV3IEludGVybmFsUm93KHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluaXRGb2N1c2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zICYmIHRoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zWzBdLmZvb3RlciA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCArIFwiINC/0L7Qty5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckRhdGEoKSB7XHJcblxyXG4vLyAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFTb3VyY2UpIHtcclxuLy8gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhID0gdGhpcy5wcm9wcy5kYXRhU291cmNlLm1hcCgocm93KSA9PiByb3cpO1xyXG4vLyAgICAgICAgICAgIH1cclxuICAgICAgICAvL3RoaXMucm93cyA9IHdpbmRvd1tcInh4eFwiXS5maWx0ZXIoKHJvdykgPT4gcm93W1wi0J3QsNC30LLQsNC90LjQtVwiXS5pbmRleE9mKFwiUGhpbFwiKSA+IC0xKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsOiBudW1iZXI7XHJcbiAgICBsYXN0Qm9keVdyYXBwZXJIZWlnaHQgPSAwO1xyXG4gICAgbGFzdEJvZHlXcmFwcGVyV2lkdGggPSAwO1xyXG5cclxuICAgIGhhbmRsZUJvZHlXcmFwcGVyRWxlbWVudFJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGlmIChuZXdIZWlnaHQgIT09IHRoaXMubGFzdEJvZHlXcmFwcGVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEJvZHlXcmFwcGVySGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV3V2lkdGggPSB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBpZiAobmV3V2lkdGggIT09IHRoaXMubGFzdEJvZHlXcmFwcGVyV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Qm9keVdyYXBwZXJXaWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcclxuICAgICAgICB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5oYW5kbGVCb2R5V3JhcHBlckVsZW1lbnRSZXNpemUsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbnMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wYWdlTGVuZ3RoID0gNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWZyZXNoRGF0YVNvdXJjZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSB0ZXN0TG9hZDUwMCgpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgLy8gICAgICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0YWJsZS5yb3dzLm1hcCgocikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB70JrQu9GO0Yc6IHJbXCLQmtC70Y7Rh1wiXSwg0J3QvtC80LXRgDogcltcItCd0L7QvNC10YBcIl0sINCd0LDQt9Cy0LDQvdC40LU6IHJbXCLQndCw0LfQstCw0L3QuNC1XCJdfTtcclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgdG9wIDUwMDYqINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQmtC70Y7RhyAtLT4gXCIgKyB0YWJsZS5yb3dzWzBdLmdldFZhbHVlKDIpKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogVHJlZUdyaWRQcm9wcykge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkVXBkYXRlKHByZXZQcm9wczogVHJlZUdyaWRQcm9wcywgcHJldlN0YXRlOiBhbnksIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclJvd3MoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlclJvd3Mtc3RhcnQoKVwiKTtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLXJvd3M6IFwiICsgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLmZvckVhY2goKHJvdzogSW50ZXJuYWxSb3csIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0LnB1c2godGhpcy5yZW5kZXJSb3cocm93LCBpbmRleCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVuZGVyUm93cy1lbmQoKVwiKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUm93KHJvdzogSW50ZXJuYWxSb3csIHJvd0luZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Jvd0luZGV4fVxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHsgcm93LmVsZW1lbnQgPSBlO319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDZWxscyhyb3csIHJvd0luZGV4KX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2VsbHMocm93OiBJbnRlcm5hbFJvdywgcm93SW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgY29sSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXQucHVzaCh0aGlzLnJlbmRlckNlbGwocm93LCByb3dJbmRleCwgY29sLCBjb2xJbmRleCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDZWxsKHJvdzogSW50ZXJuYWxSb3csIHJvd0luZGV4OiBudW1iZXIsIGNvbDogSW50ZXJuYWxDb2x1bW4sIGNvbEluZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBvYmpJbmRleCA9IHJvdy5zb3VyY2VJbmRleDtcclxuICAgICAgICBsZXQgc3RyID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKClbb2JqSW5kZXhdW2NvbC5wcm9wcy5wcm9wZXJ0eU5hbWUgfHwgXCJcIl0udG9TdHJpbmcoKTsgIC8vIHRvZG8gY29sLnByb3BzLnByb3BlcnR5TmFtZSB8fCBcIlwiIFxyXG4gICAgICAgIC8vbGV0IHN0ciA9IHRoaXMucm93c1tyb3dJbmRleF0uc291cmNlT2JqZWN0W2NvbC5wcm9wcy5wcm9wZXJ0eU5hbWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8gcmV0dXJuIDx0ZCBrZXk9e2NvbEluZGV4fT5cclxuICAgICAgICAvLyAgICAgPGRpdiBzdHlsZT17e2hlaWdodDoxNiwgb3ZlcmZsb3c6XCJoaWRkZW5cIn19PntzdHJ9PC9kaXY+XHJcbiAgICAgICAgLy8gPC90ZD47XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gcm93Lm5vZGU7XHJcblxyXG4gICAgICAgIGxldCBoaWVyYXJjaHlQYWRkaW5nRGl2OiBSZWFjdC5SZWFjdE5vZGU9W107XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgKGNvbC5wcm9wcy5zaG93SGllcmFyY2h5UGFkZGluZyB8fCBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpKSB7XHJcbiAgICAgICAgICAgIGhpZXJhcmNoeVBhZGRpbmdEaXYgPSA8c3BhbiBzdHlsZT17e3dpZHRoOm5vZGUubGV2ZWwgKiAyMCwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19Pjwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpIHtcclxuICAgICAgICAgICAgdGRTdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IFwicmdiYSgyNTUsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RyU3BhblN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUgJiYgbm9kZS5leHBhbmRlZCAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RyU3BhblN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0clNwYW4gPSA8c3BhbiBzdHlsZT17IHN0clNwYW5TdHlsZX0+e3N0cn08L3NwYW4+O1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbGxhcHNlSWNvbkRpdjogUmVhY3QuUmVhY3ROb2RlPVtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdy1jb2xsYXBzZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4ge25vZGUuZXhwYW5kZWQgPSBmYWxzZTsgdGhpcy5jcmVhdGVSb3dzKCk7IHRoaXMuZm9yY2VVcGRhdGUoKTt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlSWNvbkRpdiA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7bm9kZS5leHBhbmRlZCA9IHRydWU7IHRoaXMuY3JlYXRlUm93cygpOyB0aGlzLmZvcmNlVXBkYXRlKCk7fSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2NvbEluZGV4fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3RkU3R5bGV9XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gcm93LmNlbGxFbGVtZW50c1tjb2xJbmRleF0gPSBlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7IHRoaXMuc2V0Rm9jdXNlZENlbGwocm93SW5kZXgsY29sSW5kZXgpO30gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jaGVja2JveFwiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctcGFkZGluZ1wiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGllcmFyY2h5UGFkZGluZ0Rpdn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2NvbGxhcHNlSWNvbkRpdn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaWNvblwiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zdHJcIiBzdHlsZT17eyBmbGV4OiBcIjAgMSBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0clNwYW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Rm9jdXNlZENlbGwocm93SW5kZXg6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPSByb3dJbmRleDtcclxuICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXggPSBjZWxsSW5kZXg7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVGFibGVXaGVlbChlOiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKGUuZGVsdGFZID4gMClcclxuICAgICAgICAvLyAgICAgdGhpcy5pbmNQYWdlU3RhcnRJbmRleCgzKTtcclxuICAgICAgICAvLyBlbHNlIGlmIChlLmRlbHRhWSA8IDApXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZGVjUGFnZVN0YXJ0SW5kZXgoMyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZWx0YVkpO1xyXG4gICAgICAgIC8vIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICAkKHRoaXMuc3RhdGUuaGVhZGVyV3JhcHBlckVsZW1lbnQpLmNzcyh7dG9wOiB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3B9KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LmNsaWVudEhlaWdodCAtICQodGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKSAtIDA7XHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5jc3Moe3RvcDogcG9zfSk7XHJcblxyXG4gICAgICAgICQodGhpcy5zdGF0ZS5oZWFkZXJGYWtlUm93KS5jc3Moe2hlaWdodDogJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpfSk7XHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmZvb3RlckZha2VSb3cpLmNzcyh7aGVpZ2h0OiAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCl9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VGb2N1c2VkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChyb3c6IEludGVybmFsUm93KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZWxlbWVudClcclxuICAgICAgICAgICAgICAgICQocm93LmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtcm93XCIpO1xyXG5cclxuICAgICAgICAgICAgcm93LmNlbGxFbGVtZW50cy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbClcclxuICAgICAgICAgICAgICAgICAgICAkKGNlbGwpLnJlbW92ZUNsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtY2VsbFwiKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZm9jdXNlZFJvdyA9IHRoaXMuc3RhdGUucm93c1t0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleF07XHJcbiAgICAgICAgaWYgKGZvY3VzZWRSb3cgJiYgZm9jdXNlZFJvdy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZm9jdXNlZFJvdy5lbGVtZW50KS5hZGRDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLXJvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmb2N1c2VkQ2VsbEVsZW1lbnQgPSBmb2N1c2VkUm93LmNlbGxFbGVtZW50c1t0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoZm9jdXNlZENlbGxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKGZvY3VzZWRDZWxsRWxlbWVudCkuYWRkQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1jZWxsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb2N1c2VkQ2VsbEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdLmNlbGxFbGVtZW50c1t0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxEb3duKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvd0VsID0gJCh0aGlzLmdldEZvY3VzZWRSb3dFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgLy8g0YPRiNC70L4g0LfQsCDQv9GA0LXQtNC10LvRiyDQstC40LTQuNC80L7RgdGC0LhcclxuICAgICAgICAgICAgaWYgKHJvd0VsLnBvc2l0aW9uKCkudG9wICsgcm93RWwuaGVpZ2h0KCkgPlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgPSByb3dFbC5wb3NpdGlvbigpLnRvcCArIHJvd0VsLmhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5jbGllbnRIZWlnaHQgKyAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsTGVmdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXgtLTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbFJpZ2h0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXggPCB0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxVcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4LS07XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvd0VsID0gJCh0aGlzLmdldEZvY3VzZWRSb3dFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgLy8g0YPRiNC70L4g0LfQsCDQv9GA0LXQtNC10LvRiyDQstC40LTQuNC80L7RgdGC0LhcclxuICAgICAgICAgICAgaWYgKHJvd0VsLnBvc2l0aW9uKCkudG9wIDwgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgPSByb3dFbC5wb3NpdGlvbigpLnRvcCAtICQodGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQm9keUtleURvd24oZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gS2V5Y29kZS5Eb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsRG93bigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLlVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsVXAoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5MZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsTGVmdCgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLlJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsUmlnaHQoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5SZXNpemVTdGFydCA9IChldmVudDogTW92ZVN0YXJ0RXZlbnQsIGNvbDogSW50ZXJuYWxDb2x1bW4pOiB2b2lkID0+IHtcclxuICAgICAgICBldmVudC5iaW5kWChjb2wsIFwid2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKGNvbC5oZWFkZXJXaWR0aE5hdGl2ZUVsZW1lbnQpLmF0dHIoXCJ3aWR0aFwiLCBjb2wud2lkdGgpO1xyXG4gICAgICAgICAgICAkKGNvbC5ib2R5V2lkdGhOYXRpdmVFbGVtZW50KS5hdHRyKFwid2lkdGhcIiwgY29sLndpZHRoKTtcclxuICAgICAgICAgICAgJChjb2wuZm9vdGVyV2lkdGhOYXRpdmVFbGVtZW50KS5hdHRyKFwid2lkdGhcIiwgY29sLndpZHRoKTtcclxuICAgICAgICAgICAgbGV0IHRhYmxlV2lkdGggPSB0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuaGVhZGVyVGFibGVFbGVtZW50KS5jc3MoXCJ3aWR0aFwiLCB0YWJsZVdpZHRoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnN0YXRlLmJvZHlUYWJsZUVsZW1lbnQpLmNzcyhcIndpZHRoXCIsIHRhYmxlV2lkdGgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuZm9vdGVyVGFibGVFbGVtZW50KS5jc3MoXCJ3aWR0aFwiLCB0YWJsZVdpZHRoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudCkuY3NzKFwibWF4LXdpZHRoXCIsIHRhYmxlV2lkdGggKyBnZXRTY3JvbGxiYXJXaWR0aCgpICsgMSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlT25DbGljayhudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyQ29sdW1uSGVhZGVycygpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xIZWFkZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHtjb2wuaGVhZGVyV2lkdGhOYXRpdmVFbGVtZW50ID0gZTt9IH1cclxuICAgICAgICAgICAgICAgIC8+KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZFN0eWxlOiBhbnkgPSB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9O1xyXG5cclxuICAgICAgICAgICAgY29sSGVhZGVycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGRTdHlsZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sLmNhcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDowLCB3aWR0aDo1LCByaWdodDowLCBib3R0b206MCwgY3Vyc29yOlwiY29sLXJlc2l6ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9eyAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50KSA9PiB7IHRoaXMuY29sdW1uUmVzaXplU3RhcnQoZXZlbnQsIGNvbCk7IGNvbnNvbGUubG9nKFwiTW92ZVN0YXJ0XCIpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDowLCB3aWR0aDogaW5kZXggPT09IDAgPyAwIDogNSwgbGVmdDowLCBib3R0b206MCwgY3Vyc29yOlwiY29sLXJlc2l6ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9eyAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINGA0LXRgdCw0LnQt9C40Lwg0L/RgNC10LTRi9C00YPRidGD0Y4g0LrQvtC70L7QvdC60YNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5SZXNpemVTdGFydChldmVudCwgdGhpcy5zdGF0ZS5jb2x1bW5zW2luZGV4IC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90ZD4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RhYmxlTGF5b3V0OiBcImZpeGVkXCIsYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgd2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuaGVhZGVyVGFibGVFbGVtZW50ID0gZX1cclxuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sV2lkdGhzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbEhlYWRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb2x1bW5Gb290ZXJzKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xGb290ZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBpc0Zvb3RlckVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaChcclxuICAgICAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB7Y29sLmZvb3RlcldpZHRoTmF0aXZlRWxlbWVudCA9IGU7fSB9XHJcbiAgICAgICAgICAgICAgICAvPik7XHJcbiAgICAgICAgICAgIGlmIChjb2wuZm9vdGVyKVxyXG4gICAgICAgICAgICAgICAgaXNGb290ZXJFbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuICAgICAgICAgICAgY29sRm9vdGVycy5wdXNoKDx0ZCBrZXk9e2luZGV4fSBzdHlsZT17dGRTdHlsZX0+e2NvbC5mb290ZXJ9PC90ZD4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWlzRm9vdGVyRW1wdHkpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50ID0gZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtZm9vdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0YWJsZUxheW91dDogXCJmaXhlZFwiLGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsIHdpZHRoOnRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5mb290ZXJUYWJsZUVsZW1lbnQgPSBlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xXaWR0aHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbEZvb3RlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2U6IFJlYWN0LlJlYWN0Tm9kZSA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXRFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtZW1wdHktYm9keVwiPnttZXNzYWdlfTwvZGl2Pik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyR3JpZEJvZHkoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBsZXQgY29sV2lkdGhzOiBSZWFjdC5SZWFjdE5vZGVbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHtjb2wuYm9keVdpZHRoTmF0aXZlRWxlbWVudCA9IGU7fSB9XHJcbiAgICAgICAgICAgICAgICAvPik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICBvbktleURvd249eyAoZSkgPT4geyAgdGhpcy5oYW5kbGVCb2R5S2V5RG93bihlKTsgfSB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0YWJsZUxheW91dDogXCJmaXhlZFwiLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpfX1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmJvZHlUYWJsZUVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbFdpZHRoc31cclxuICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmhlYWRlckZha2VSb3cgPSBlfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJvd3MoKX1cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOlwibm9uZVwiIH19IHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmZvb3RlckZha2VSb3cgPSBlfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCk6IG51bWJlciB7XHJcblxyXG4gICAgICAgIGxldCByZXQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY29sLmhpZGRlbilcclxuICAgICAgICAgICAgICAgIHJldCArPSBjb2wud2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzOiBUcmVlR3JpZFByb3BzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGFsbG93LXRyZWUtZ3JpZFwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic2hhbGxvdy13aW4gLT4gaXNFcWlhbCA9IFwiICsgdGhpcy5pc1Byb3BzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzLCBbXCJjaGlsZHJlblwiXSkpO1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc1Byb3BzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzLCBbXCJjaGlsZHJlblwiLCBcImRhdGFTb3VyY2VcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVkaXRhYmxlQnV0dG9ucygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgYnV0dG9uczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZW55SW5zZXJ0ICE9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiaW5zZXJ0XCIgY2xhc3NOYW1lPVwiaXMtb3V0bGluZWQgaXMtc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW5zZXJ0QnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVueVVwZGF0ZSAhPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLW91dGxpbmVkIGlzLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JjQt9C80LXQvdC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRlbnlEZWxldGUgIT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICBidXR0b25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJkZWxldGVcIiBjbGFzc05hbWU9XCJpcy1vdXRsaW5lZCBpcy1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy90aGlzLmFkZENsYXNzTmFtZShcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci10cmVlLWdyaWRcIik7XHJcblxyXG4gICAgICAgIGxldCBtYXhCb2R5V3JhcHBlcldpZHRoID0gdGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKSArIGdldFNjcm9sbGJhcldpZHRoKCkgKyAxO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICBtYXhCb2R5V3JhcHBlcldpZHRoID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJ0cmVlLWdyaWRcIiB0eXBlPVwiY29sdW1uXCIgc2l6ZVRvPVwicGFyZW50XCIgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1oZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoIDUwMDFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZmlsdGVyRGF0YSgpOyB0aGlzLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwiZm9yY2VVcGRhdGVcIik7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZXhwYW5kQWxsKCk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmNvbGxhcHNlQWxsKCk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZSBhbGxcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICDQt9Cw0LPQvtC70L7QstC+0Log0Lgg0YIu0LQuXHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1ib2R5LXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOlwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6XCJhdXRvXCIsIGZsZXg6XCIxXCIsIG1heFdpZHRoOiBtYXhCb2R5V3JhcHBlcldpZHRoIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25TY3JvbGw9eyB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlOmFueSkgPT4ge3RoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50ID0gZTt9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UoKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJHcmlkQm9keSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbHVtbkhlYWRlcnMoKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2x1bW5Gb290ZXJzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtZm9vdGVyLXdyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwicm93XCIgc2l6ZVRvPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFZGl0YWJsZUJ1dHRvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpcy1zbWFsbG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktGL0LHRgNCw0YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImlzLXNtYWxsblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQgPlxyXG4gICAgICAgICAgICA8L0xheW91dCA+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3hcbiAqKi8iLCLvu79pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRDb2x1bW5zUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIC8vY2FwdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkQ29sdW1ucyBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZENvbHVtbnNQcm9wcywgYW55PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZWVHcmlkQ29sdW1uc1Byb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1ucy50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtyZWdpc3RlckdyaWRDb2x1bW4sIEdyaWRDb2x1bW5JbmZvfSBmcm9tIFwiLi9yZWdpc3RlckdyaWRDb2x1bW5cIjtcclxuLy9pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZENvbHVtblByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBjYXB0aW9uPzogc3RyaW5nO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBwcm9wZXJ0eU5hbWU/OiBzdHJpbmc7XHJcbiAgICBzaG93SGllcmFyY2h5VHJlZT86IGJvb2xlYW47XHJcbiAgICBzaG93SGllcmFyY2h5UGFkZGluZz86IGJvb2xlYW47XHJcbiAgICBvcmRlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkQ29sdW1uIGV4dGVuZHMgQ29tcG9uZW50PFRyZWVHcmlkQ29sdW1uUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZENvbHVtblByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5zdGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZENvbHVtblBhcmFtcyBleHRlbmRzIFRyZWVHcmlkQ29sdW1uUHJvcHMge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdyaWRDb2x1bW4ocGFyYW1zOiBHcmlkQ29sdW1uUGFyYW1zKTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coe3RhcmdldCwgcHJvcGVydHlOYW1lLCBjb25zdHI6dGFyZ2V0LmNvbnN0cnVjdG9yfSk7XHJcblxyXG4gICAgICAgIGxldCByZWdDb2x1bW46IEdyaWRDb2x1bW5JbmZvID0ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogdGFyZ2V0LmNvbnN0cnVjdG9yXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgXy5hc3NpZ24ocmVnQ29sdW1uLCBwYXJhbXMpO1xyXG4gICAgICAgIHJlZ2lzdGVyR3JpZENvbHVtbihyZWdDb2x1bW4pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXJHcmlkQ29sdW1uKHtcclxuICAgICAgICAvLyAgICAgY2FwdGlvbjogcGFyYW1zLmNhcHRpb24sXHJcbiAgICAgICAgLy8gICAgIHdpZHRoOiBwYXJhbXMud2lkdGgsXHJcbiAgICAgICAgLy8gICAgIHNob3dIaWVyYXJjaHlUcmVlOiBwYXJhbXMuc2hvd0hpZXJhcmNoeVRyZWUsXHJcbiAgICAgICAgLy8gICAgIHNob3dIaWVyYXJjaHlQYWRkaW5nOiBwYXJhbXMuc2hvd0hpZXJhcmNoeVBhZGRpbmcsXHJcbiAgICAgICAgLy8gICAgIG9yZGVyOiBwYXJhbXMub3JkZXIgfHwgMCxcclxuICAgICAgICAvLyAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgLy8gICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvcixcclxuICAgICAgICAvLyB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uLnRzeFxuICoqLyIsImltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtblByb3BzfSBmcm9tIFwiLi9UcmVlR3JpZENvbHVtblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcmlkQ29sdW1uSW5mbyBleHRlbmRzIFRyZWVHcmlkQ29sdW1uUHJvcHMge1xyXG4gICAgLy9wcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICAgIG9iamVjdFR5cGU6IHR5cGVvZiBEZXNpZ25lZE9iamVjdDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckdyaWRDb2x1bW4oY29sdW1uSW5mbzogR3JpZENvbHVtbkluZm8pIHtcclxuXHJcbiAgICBsZXQgb2JqVHlwZTogYW55ID0gY29sdW1uSW5mby5vYmplY3RUeXBlO1xyXG5cclxuICAgIGlmICghb2JqVHlwZS4kJGdyaWRDb2x1bW5JbmZvcylcclxuICAgICAgICBvYmpUeXBlLiQkZ3JpZENvbHVtbkluZm9zID0gW107XHJcblxyXG4gICAgb2JqVHlwZS4kJGdyaWRDb2x1bW5JbmZvcy5wdXNoKGNvbHVtbkluZm8pO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJyZWdpc3RlclByb3BlcnR5RWRpdG9yIFwiICsgZWRpdG9yLnByb3BlcnR5TmFtZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVkaXRvcik7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL3JlZ2lzdGVyR3JpZENvbHVtbi50c1xuICoqLyIsIlxyXG5leHBvcnQgdmFyIEtleWNvZGUgPSB7XHJcbiAgICBFc2M6IFwiRXNjYXBlXCIsXHJcbiAgICBTcGFjZTogXCIgXCIsXHJcblxyXG4gICAgTGVmdDogXCJBcnJvd0xlZnRcIixcclxuICAgIFVwOiBcIkFycm93VXBcIixcclxuICAgIERvd246IFwiQXJyb3dEb3duXCIsXHJcbiAgICBSaWdodDogXCJBcnJvd1JpZ2h0XCIsXHJcblxyXG4gICAgRGVsOiBcIkRlbGV0ZVwiLFxyXG4gICAgSW5zOiBcIkluc2VydFwiLFxyXG5cclxuICAgIFdpbjogXCJNZXRhXCIsXHJcbiAgICBNZW51OiBcIkNvbnRleHRNZW51XCIsXHJcblxyXG4gICAgU2Nyb2xsOiBcIlNjcm9sbExvY2tcIixcclxuICAgIE51bTogXCJOdW1Mb2NrXCIsXHJcblxyXG4gICAgQmFja3NwYWNlOiBcIkJhY2tzcGFjZVwiLFxyXG4gICAgVGFiOiBcIlRhYlwiLFxyXG4gICAgRW50ZXI6IFwiRW50ZXJcIixcclxuICAgIFNoaWZ0OiBcIlNoaWZ0XCIsXHJcbiAgICBDb250cm9sOiBcIkNvbnRyb2xcIixcclxuICAgIEFsdDogXCJBbHRcIixcclxuICAgIEJyZWFrOiBcIlBhdXNlXCIsXHJcbiAgICBDYXBzTG9jazogXCJDYXBzTG9ja1wiLFxyXG5cclxuICAgIFBhZ2VVcDogXCJQYWdlVXBcIixcclxuICAgIFBhZ2VEb3duOiBcIlBhZ2VEb3duXCIsXHJcbiAgICBFbmQ6IFwiRW5kXCIsXHJcbiAgICBIb21lOiBcIkhvbWVcIixcclxuXHJcbiAgICBGMTogXCJGMVwiLFxyXG4gICAgRjI6IFwiRjJcIixcclxuICAgIEYzOiBcIkYzXCIsXHJcbiAgICBGNDogXCJGNFwiLFxyXG4gICAgRjU6IFwiRjVcIixcclxuICAgIEY2OiBcIkY2XCIsXHJcbiAgICBGNzogXCJGN1wiLFxyXG4gICAgRjg6IFwiRjhcIixcclxuICAgIEY5OiBcIkY5XCIsXHJcbiAgICBGMTA6IFwiRjEwXCIsXHJcbiAgICBGMTE6IFwiRjExXCIsXHJcbiAgICBGMTI6IFwiRjEyXCJcclxuXHJcbn07XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9LZXljb2RlLnRzXG4gKiovIiwibGV0IGNhY2hlV2lkdGggPSAwO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGV2OiBVSUV2ZW50KSA9PiB7XHJcbiAgICBjYWNoZVdpZHRoID0gMDtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzaXplXCIpO1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcclxuICAgIGlmIChjYWNoZVdpZHRoID4gMClcclxuICAgICAgICByZXR1cm4gY2FjaGVXaWR0aDtcclxuXHJcbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcclxuICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9IFwic2Nyb2xsYmFyXCI7IC8vIG5lZWRlZCBmb3IgV2luSlMgYXBwc1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xyXG5cclxuICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XHJcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XHJcblxyXG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XHJcblxyXG4gICAgdmFyIHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xyXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XHJcblxyXG4gICAgY2FjaGVXaWR0aCA9IHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XHJcbiAgICByZXR1cm4gY2FjaGVXaWR0aDtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL2dldFNjcm9sbEJhcldpZHRoLnRzXG4gKiovIiwi77u/aW1wb3J0ICogYXMgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IHtEYXRhVGFibGUsIERhdGFDb2x1bW4sIERhdGFSb3d9IGZyb20gXCIuLi9idWh0YS1zcWwvRGJcIjtcclxuXHJcbmxldCBzb2NrZXQgPSBpby5jb25uZWN0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNRTCggc3FsOiBzdHJpbmcpOiBKUXVlcnlQcm9taXNlPERhdGFUYWJsZXxzdHJpbmc+IHtcclxuICAgIC8vY29uc29sZS5sb2coXCJjYWxsIFNRTC5zcWwuZXhlY3V0ZVwiKTtcclxuICAgIC8vcmV0dXJuIHNpZ25hbFIuZXhlY3V0ZVNRTChzcWwpO1xyXG5cclxuXHJcbiAgICBsZXQgcHJvbWlzZTogSlF1ZXJ5RGVmZXJyZWQ8RGF0YVRhYmxlPjtcclxuICAgIHByb21pc2UgPSAkLkRlZmVycmVkPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAvLyAgc29ja2V0Lm9uY2UoJ2Nvbm5lY3QnLCgpID0+IHtcclxuICAgIGxldCBxdWVyeUlkID0gXCJxdWVyeS1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xyXG4gICAgc29ja2V0LmVtaXQoXCJleGVjdXRlU1FMXCIsIHtxdWVyeUlkLCBzcWx9KTtcclxuICAgIHNvY2tldC5vbmNlKHF1ZXJ5SWQsIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhQ29sdW1uID0gbmV3IERhdGFDb2x1bW4oZGF0YVRhYmxlLCByZXNwb25zZS5jb2x1bW5zW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVRhYmxlLmNvbHVtbnMucHVzaChkYXRhQ29sdW1uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2Uucm93cy5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhUm93ID0gbmV3IERhdGFSb3coZGF0YVRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFUYWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbHVtbnNbaV0ucGFyc2UgPT09IFwiRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W2RhdGFUYWJsZS5jb2x1bW5zW2ldLm5hbWVdID0gbmV3IERhdGUocm93W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbZGF0YVRhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kYXRhUm93W2ldID0gcm93W2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5yb3dzLnB1c2goZGF0YVJvdyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhVGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vICAgfSk7XHJcblxyXG5cclxuICAgIC8vc2lnbmFsUi5leGVjdXRlU1FMKHNxbCkuXHJcbiAgICAvLyAgICBkb25lKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgbGV0IHJlcyA9IGV2YWwocmVzdWx0KTtcclxuXHJcbiAgICAvLyAgICAgICAgaWYgKHJlcy5lcnJvcikge1xyXG4gICAgLy8gICAgICAgICAgICBwcm9taXNlLnJlamVjdChyZXMuZXJyb3IpO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgbGV0IGRzID0gbmV3IERhdGFzZXQoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgIHJlcy50YWJsZXMuZm9yRWFjaCgodGFibGUpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKGRzKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5uYW1lID0gdGFibGUubmFtZTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRzLnRhYmxlcy5wdXNoKGRhdGFUYWJsZSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFDb2x1bW4gPSBuZXcgRGF0YUNvbHVtbihkYXRhVGFibGUsIHRhYmxlLmNvbHVtbnNbaV0ubmFtZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLmNvbHVtbnMucHVzaChkYXRhQ29sdW1uKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICB0YWJsZS5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YVJvdyA9IG5ldyBEYXRhUm93KCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W3RhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbaV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGUucm93cy5wdXNoKGRhdGFSb3cpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRzKVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pLlxyXG4gICAgLy8gICAgZmFpbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgcHJvbWlzZS5yZWplY3QoXCLQvtGI0LjQsdC60LAgY29ubmVjdGlvbiBzaWduYWxSXCIpO1xyXG4gICAgLy8gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCBjbGFzcyBTcWxFcnJvciBleHRlbmRzIEVycm9yIHtcclxuLy99XHJcblxyXG4vL2V4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHsgU3RyaW5nLCBOdW1iZXIsIERhdGEgfVxyXG5cclxuLy9leHBvcnQgdHlwZSBEYXRhVHlwZSA9IHN0cmluZyB8IG51bWJlcjtcclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9TUUwudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGlvO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpb1wiXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgKiBhcyBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQge1NlbGVjdFN0bXR9IGZyb20gXCIuL1NxbDJcIjtcclxuaW1wb3J0IHt0aHJvd0Vycm9yfSBmcm9tIFwiLi4vYnVodGEtY29yZS9FcnJvclwiO1xyXG5cclxuXHJcbi8vINC+0LHRidC10LUg0YEgY2xpZW50INC4IHNlcnZlciAtLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IHR5cGUgU3FsRGlhbGVjdCA9IFwibXNzcWxcIiB8IFwicGdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZVNxbFNvY2tldFJlcXVlc3Qge1xyXG4gICAgcXVlcnlJZDogc3RyaW5nO1xyXG4gICAgZGJOYW1lOiBzdHJpbmc7XHJcbiAgICBzcWw6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTcWxWYWx1ZVBhcnNlTW9kZT0gXCJcIiB8IFwiRGF0ZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcWxBbnN3ZXJDb2x1bW4ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGFyc2U6IFNxbFZhbHVlUGFyc2VNb2RlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNxbEFuc3dlclJvdyB7XHJcbiAgICB2YWx1ZXM6IGFueVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGVTcWxTb2NrZXRBbnN3ZXIge1xyXG4gICAgY29sdW1ucz86IFNxbEFuc3dlckNvbHVtbltdO1xyXG4gICAgcm93cz86IFNxbEFuc3dlclJvd1tdO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbn1cclxuLy8g0L7QsdGJ0LXQtSDRgSBjbGllbnQg0Lggc2VydmVyIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IHNvY2tldCA9IGlvLmNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGUge1xyXG4gICAgY29sdW1uczogQXJyYXk8RGF0YUNvbHVtbj47XHJcbiAgICByb3dzOiBBcnJheTxEYXRhUm93PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXTtcclxuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFDb2x1bW4ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgLy9kYXRhVHlwZTogQ29sdW1uRGF0YVR5cGU7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGFibGU6IERhdGFUYWJsZSwgbmFtZT86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgXCJcIjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVJvdyB7XHJcbiAgICBbaW5kZXg6IHN0cmluZ106IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoY29sdW1uSW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgMCB8fCBjb2x1bW5JbmRleCA+PSB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkRhdGFSb3cuZ2V0VmFsdWUoXCIgKyBjb2x1bW5JbmRleCArIFwiKTogY29sdW1uSW5kZXggb3V0IG9mIHJhbmdlXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBbdGhpcy50YWJsZS5jb2x1bW5zW2NvbHVtbkluZGV4XS5uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvL1tpbmRleDogbnVtYmVyXTogRGF0YVR5cGU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGIge1xyXG4gICAgZGJOYW1lOiBzdHJpbmc7XHJcbiAgICBkaWFsZWN0OiBTcWxEaWFsZWN0O1xyXG5cclxuXHJcbiAgICBzZWxlY3RUb09iamVjdChzcWw6IHN0cmluZyB8IFNlbGVjdFN0bXQpOiBQcm9taXNlPGFueXxzdHJpbmc+IHtcclxuXHJcbiAgICAgICAgbGV0IHByb21pc2U6IFByb21pc2U8YW55fHN0cmluZz4gPSBuZXcgUHJvbWlzZShcclxuICAgICAgICAgICAgKHJlc29sdmU6IChvYmo6IGFueSkgPT4gdm9pZCwgcmVqZWN0OiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlU1FMKHNxbClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigodGFibGU6IERhdGFUYWJsZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5yb3dzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcInJvd3MgY291bnQgPT09IDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe3g6IHRhYmxlLnJvd3NbMF0uZ2V0VmFsdWUoMCl9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmV4ZWN1dGVTUUwoc3FsKS50aGVuKCh0YWJsZTogRGF0YVRhYmxlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0YWJsZS5yb3dzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAvLyAgICAgICAgIHRocm93RXJyb3IoXCJ0YWJsZS5yb3dzLmxlbmd0aD09PTBcIik7XHJcbiAgICAgICAgLy8gICAgIGVsc2VcclxuICAgICAgICAvLyAgICAgICAgIG9iai54eHggPSB0YWJsZS5yb3dzWzBdLmdldFZhbHVlKDApO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGVTUUwoc3FsOiBzdHJpbmcgfCBTZWxlY3RTdG10KTogUHJvbWlzZTxEYXRhVGFibGV8c3RyaW5nPiB7XHJcblxyXG4gICAgICAgIGxldCBnZXRTcWxUZXh0ID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzcWwgaW5zdGFuY2VvZiBTZWxlY3RTdG10KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNxbC50b1NxbCh0aGlzLmRpYWxlY3QpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChfLmlzU3RyaW5nKHNxbCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3FsO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoXCJEYi5leGVjdXRlU3FsKCk6IGludmFsaWQgc3FsIHR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAgXCJmYWtlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgcHJvbWlzZTogUHJvbWlzZTxEYXRhVGFibGV8c3RyaW5nPiA9IG5ldyBQcm9taXNlKFxyXG4gICAgICAgICAgICAocmVzb2x2ZTogKHN0cjogRGF0YVRhYmxlKSA9PiB2b2lkLCByZWplY3Q6IChlcnJvcjogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnN0IGE6IHN0cmluZyA9IFwiaGVsbG8gZnJvbSBQcm9taXNlXCI7XHJcbiAgICAgICAgICAgICAgICAvL3Jlc29sdmUoYSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcXVlcnlJZCA9IFwicXVlcnktXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcTogRXhlY3V0ZVNxbFNvY2tldFJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGJOYW1lOiB0aGlzLmRiTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzcWw6IGdldFNxbFRleHQoKSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeUlkOiBxdWVyeUlkXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiZXhlY3V0ZVNRTFwiLCByZXEpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uY2UocXVlcnlJZCwgKHJlc3BvbnNlOiBFeGVjdXRlU3FsU29ja2V0QW5zd2VyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFUYWJsZSA9IG5ldyBEYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuY29sdW1ucyEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhQ29sdW1uID0gbmV3IERhdGFDb2x1bW4oZGF0YVRhYmxlLCByZXNwb25zZS5jb2x1bW5zIVtpXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5jb2x1bW5zLnB1c2goZGF0YUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJvd3MhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFSb3cgPSBuZXcgRGF0YVJvdyhkYXRhVGFibGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29sdW1ucyFbaV0ucGFyc2UgPT09IFwiRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W2RhdGFUYWJsZS5jb2x1bW5zW2ldLm5hbWVdID0gbmV3IERhdGUocm93W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbZGF0YVRhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhUm93W2ldID0gcm93W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5yb3dzLnB1c2goZGF0YVJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhVGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICAvL2xldCBwcm9taXNlOiBKUXVlcnlEZWZlcnJlZDxEYXRhVGFibGU+O1xyXG4gICAgICAgIC8vcHJvbWlzZSA9ICQuRGVmZXJyZWQ8RGF0YVRhYmxlPigpO1xyXG5cclxuICAgICAgICAvLyAgc29ja2V0Lm9uY2UoJ2Nvbm5lY3QnLCgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBleGVjdXRlU1FMKHNxbDogc3RyaW5nKTogSlF1ZXJ5UHJvbWlzZTxEYXRhVGFibGV8c3RyaW5nPiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCBwcm9taXNlOiBKUXVlcnlEZWZlcnJlZDxEYXRhVGFibGU+O1xyXG4gICAgLy8gICAgIHByb21pc2UgPSAkLkRlZmVycmVkPERhdGFUYWJsZT4oKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gIHNvY2tldC5vbmNlKCdjb25uZWN0JywoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IHF1ZXJ5SWQgPSBcInF1ZXJ5LVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XHJcbiAgICAvLyAgICAgbGV0IHJlcTogRXhlY3V0ZVNxbFNvY2tldFJlcXVlc3QgPSB7XHJcbiAgICAvLyAgICAgICAgIGRiTmFtZTogdGhpcy5kYk5hbWUsXHJcbiAgICAvLyAgICAgICAgIHNxbDogc3FsLFxyXG4gICAgLy8gICAgICAgICBxdWVyeUlkOiBxdWVyeUlkXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgc29ja2V0LmVtaXQoXCJleGVjdXRlU1FMXCIsIHJlcSk7XHJcbiAgICAvLyAgICAgc29ja2V0Lm9uY2UocXVlcnlJZCwgKHJlc3BvbnNlOiBFeGVjdXRlU3FsU29ja2V0QW5zd2VyKSA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5jb2x1bW5zIS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBkYXRhQ29sdW1uID0gbmV3IERhdGFDb2x1bW4oZGF0YVRhYmxlLCByZXNwb25zZS5jb2x1bW5zIVtpXS5uYW1lKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBkYXRhVGFibGUuY29sdW1ucy5wdXNoKGRhdGFDb2x1bW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIHJlc3BvbnNlLnJvd3MhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBkYXRhUm93ID0gbmV3IERhdGFSb3coZGF0YVRhYmxlKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhVGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29sdW1ucyFbaV0ucGFyc2UgPT09IFwiRFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1tkYXRhVGFibGUuY29sdW1uc1tpXS5uYW1lXSA9IG5ldyBEYXRlKHJvd1tpXSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbZGF0YVRhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vZGF0YVJvd1tpXSA9IHJvd1tpXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5yb3dzLnB1c2goZGF0YVJvdyk7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZGF0YVRhYmxlKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIC8vIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1zcWwvRGIudHNcbiAqKi8iLCJpbXBvcnQge3Rocm93RXJyb3J9IGZyb20gXCIuLi9idWh0YS1jb3JlL0Vycm9yXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1NxbERpYWxlY3R9IGZyb20gXCIuL0RiXCI7XHJcblxyXG5leHBvcnQgdHlwZSBCb29sZWFuT3BlciA9IFwiPlwiIHwgXCI8XCIgfCBcIj49XCIgfCBcIjw9XCIgfCBcIjw+XCIgfCBcIiE9XCIgfCBcImxpa2VcIjtcclxuZXhwb3J0IHR5cGUgT3BlcmFuZCA9IHN0cmluZyB8IENvbHVtbjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sdW1uIHtcclxuICAgIHRhYmxlPzogc3RyaW5nO1xyXG4gICAgY29sdW1uPzogc3RyaW5nO1xyXG4gICAgcmF3Pzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RDb2x1bW4gZXh0ZW5kcyBDb2x1bW4ge1xyXG4gICAgYXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0VGFibGUge1xyXG4gICAgZGI/OiBzdHJpbmc7XHJcbiAgICB0YWJsZT86IHN0cmluZztcclxuICAgIHNlbGVjdD86IElubGluZVNlbGVjdFN0bXQ7XHJcbiAgICBhcz86IHN0cmluZztcclxuICAgIHJhdz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaGVyZUNsYXVzZSB7XHJcbiAgICBvcGVyYW5kMTogT3BlcmFuZDtcclxuICAgIG9wZXI6IEJvb2xlYW5PcGVyO1xyXG4gICAgb3BlcmFuZDI6IE9wZXJhbmQ7XHJcbn1cclxuXHJcbmNsYXNzIEVtaXR0ZXIge1xyXG4gICAgcHJpdmF0ZSBzcWw6IHN0cmluZ1tdID0gW107XHJcbiAgICBkaWFsZWN0OiBTcWxEaWFsZWN0O1xyXG4gICAgbm9MZXZlbHM6IGJvb2xlYW47XHJcblxyXG4gICAgZW1pdChzdHI6IHN0cmluZyk6IEVtaXR0ZXIge1xyXG4gICAgICAgIHRoaXMuc3FsLnB1c2goc3RyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlbWl0TGV2ZWwobGV2ZWw6IHN0cmluZyk6IEVtaXR0ZXIge1xyXG4gICAgICAgIGlmICghdGhpcy5ub0xldmVscylcclxuICAgICAgICAgICAgdGhpcy5zcWwucHVzaChsZXZlbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdExpbmUoKTogRW1pdHRlciB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9MZXZlbHMpXHJcbiAgICAgICAgICAgIHRoaXMuc3FsLnB1c2goXCIgXCIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zcWwucHVzaChcIlxcblwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlbWl0UXVvdGVkTmFtZShuYW1lOiBzdHJpbmcpOiBFbWl0dGVyIHtcclxuICAgICAgICBpZiAodGhpcy5kaWFsZWN0ID09PSBcIm1zc3FsXCIpXHJcbiAgICAgICAgICAgIHRoaXMuc3FsLnB1c2goXCJbXCIgKyBuYW1lICsgXCJdXCIpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGlhbGVjdCA9PT0gXCJwZ1wiKVxyXG4gICAgICAgICAgICB0aGlzLnNxbC5wdXNoKFwiJ1wiICsgbmFtZSArIFwiJ1wiKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3dFcnJvcihcIkVtaXR0ZXI6IGludmFsaWQgc3FsIGRpYWxlY3QgJ1wiICsgdGhpcy5kaWFsZWN0ICsgXCInXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0b1NxbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNxbC5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0U3RtdCB7XHJcblxyXG4gICAgY29sdW1uczogU2VsZWN0Q29sdW1uW10gPSBbXTtcclxuICAgIGZyb206IFNlbGVjdFRhYmxlW10gPSBbXTtcclxuICAgIHdoZXJlOiBXaGVyZUNsYXVzZVtdID0gW107XHJcblxyXG4gICAgYWRkQ29sdW1uKGNvbHVtbjogc3RyaW5nIHwgU2VsZWN0Q29sdW1uKTogU2VsZWN0U3RtdCB7XHJcbiAgICAgICAgaWYgKF8uaXNTdHJpbmcoY29sdW1uKSlcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goe2NvbHVtbjogY29sdW1ufSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChjb2x1bW4pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbHVtbkFzKGNvbHVtbjogc3RyaW5nIHwgU2VsZWN0Q29sdW1uLCBhczogc3RyaW5nKTogU2VsZWN0U3RtdCB7XHJcbiAgICAgICAgaWYgKF8uaXNTdHJpbmcoY29sdW1uKSlcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goe2NvbHVtbjogY29sdW1uLCBhczogYXN9KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29sdW1uLmFzID0gYXM7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbHVtbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZyb20odGFibGU6IHN0cmluZyB8IFNlbGVjdFRhYmxlKTogU2VsZWN0U3RtdCB7XHJcbiAgICAgICAgaWYgKF8uaXNTdHJpbmcodGFibGUpKVxyXG4gICAgICAgICAgICB0aGlzLmZyb20ucHVzaCh7dGFibGU6IHRhYmxlfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmZyb20ucHVzaCh0YWJsZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRnJvbUFzKHRhYmxlOiBzdHJpbmcgfCBTZWxlY3RUYWJsZSwgYXM6IHN0cmluZyk6IFNlbGVjdFN0bXQge1xyXG4gICAgICAgIGlmIChfLmlzU3RyaW5nKHRhYmxlKSlcclxuICAgICAgICAgICAgdGhpcy5mcm9tLnB1c2goe3RhYmxlOiB0YWJsZSwgYXM6IGFzfSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmFzID0gYXM7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvbS5wdXNoKHRhYmxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkV2hlcmUob3BlcmFuZDE6IE9wZXJhbmQsIG9wZXI6IEJvb2xlYW5PcGVyLCBvcGVyYW5kMjogT3BlcmFuZCk6IFNlbGVjdFN0bXQge1xyXG4gICAgICAgIHRoaXMud2hlcmUucHVzaCh7b3BlcmFuZDE6IG9wZXJhbmQxLCBvcGVyOiBvcGVyLCBvcGVyYW5kMjogb3BlcmFuZDJ9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVtaXRDb2x1bW4oY29sOiBTZWxlY3RDb2x1bW4sIGU6IEVtaXR0ZXIsIGxldmVsOiBzdHJpbmcpIHtcclxuICAgICAgICBlLmVtaXRMZXZlbChsZXZlbCk7XHJcbiAgICAgICAgaWYgKGNvbC50YWJsZSlcclxuICAgICAgICAgICAgZS5lbWl0UXVvdGVkTmFtZShjb2wudGFibGUpLmVtaXQoXCIuXCIpO1xyXG4gICAgICAgIGlmICghY29sLmNvbHVtbiAmJiAhY29sLnJhdylcclxuICAgICAgICAgICAgdGhyb3dFcnJvcihcIlNlbGVjdFN0bXQ6IGNvbHVtbi5uYW1lIG9yIGNvbHVtbi5yYXcgbm90IGRlZmluZWRcIik7XHJcbiAgICAgICAgaWYgKGNvbC5jb2x1bW4pXHJcbiAgICAgICAgICAgIGUuZW1pdFF1b3RlZE5hbWUoY29sLmNvbHVtbik7XHJcbiAgICAgICAgaWYgKGNvbC5yYXcpXHJcbiAgICAgICAgICAgIGUuZW1pdChjb2wucmF3KTtcclxuICAgICAgICBpZiAoY29sLmFzKVxyXG4gICAgICAgICAgICBlLmVtaXQoXCIgXCIpLmVtaXRRdW90ZWROYW1lKGNvbC5hcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW1pdFNlbGVjdFRhYmxlKHRhYmxlOiBTZWxlY3RUYWJsZSwgZTogRW1pdHRlciwgbGV2ZWw6IHN0cmluZykge1xyXG4gICAgICAgIGUuZW1pdExldmVsKGxldmVsKTtcclxuICAgICAgICBpZiAodGFibGUuZGIpXHJcbiAgICAgICAgICAgIGUuZW1pdFF1b3RlZE5hbWUodGFibGUuZGIpLmVtaXQoXCIuLlwiKTtcclxuICAgICAgICBpZiAoIXRhYmxlLnRhYmxlICYmICF0YWJsZS5yYXcpXHJcbiAgICAgICAgICAgIHRocm93RXJyb3IoXCJTZWxlY3RTdG10OiB0YWJsZS5uYW1lIG9yIHRhYmxlLnJhdyBub3QgZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAodGFibGUudGFibGUpXHJcbiAgICAgICAgICAgIGUuZW1pdFF1b3RlZE5hbWUodGFibGUudGFibGUpO1xyXG4gICAgICAgIGlmICh0YWJsZS5yYXcpXHJcbiAgICAgICAgICAgIGUuZW1pdCh0YWJsZS5yYXcpO1xyXG4gICAgICAgIGlmICh0YWJsZS5hcylcclxuICAgICAgICAgICAgZS5lbWl0KFwiIFwiKS5lbWl0UXVvdGVkTmFtZSh0YWJsZS5hcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TcWwoZGlhbGVjdDogU3FsRGlhbGVjdCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCBlID0gbmV3IEVtaXR0ZXIoKTtcclxuICAgICAgICBlLmRpYWxlY3QgPSBkaWFsZWN0O1xyXG4gICAgICAgIGUubm9MZXZlbHMgPSB0aGlzIGluc3RhbmNlb2YgSW5saW5lU2VsZWN0U3RtdDtcclxuXHJcbiAgICAgICAgZS5lbWl0KFwic2VsZWN0XCIpLmVtaXRMaW5lKCk7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbDogU2VsZWN0Q29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdENvbHVtbihjb2wsIGUsIFwiICBcIik7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICBlLmVtaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBlLmVtaXRMaW5lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGUuZW1pdChcImZyb21cIikuZW1pdExpbmUoKTtcclxuICAgICAgICB0aGlzLmZyb20uZm9yRWFjaCgodGFibGU6IFNlbGVjdENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRTZWxlY3RUYWJsZSh0YWJsZSwgZSwgXCIgIFwiKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLmZyb20ubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgIGUuZW1pdChcIixcIik7XHJcbiAgICAgICAgICAgIGUuZW1pdExpbmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGUudG9TcWwoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElubGluZVNlbGVjdFN0bXQgZXh0ZW5kcyBTZWxlY3RTdG10IHtcclxuXHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLXNxbC9TcWwyLnRzXG4gKiovIiwiaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtMaXN0RWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9MaXN0UHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtHcmlkQ29sdW1ufSBmcm9tIFwiLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3FsVGFibGUgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCY0LzRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQmNC80Y8g0YLQsNCx0LvQuNGG0YtcIlxyXG4gICAgfSlcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwic3FsINC40LzRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCJzcWwg0LjQvNGPINGC0LDQsdC70LjRhtGLXCJcclxuICAgIH0pXHJcblxyXG4gICAgc3FsbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBMaXN0RWRpdG9yKHtcclxuICAgICAgICBpbnB1dFRhYjogXCLQmtC+0LvQvtC90LrQuFwiLFxyXG4gICAgICAgIGdldE5ld0xpc3RJdGVtOiAodGFibGU6IFNxbFRhYmxlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3FsVGFibGVDb2x1bW4odGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb2x1bW5zOiBTcWxUYWJsZUNvbHVtbltdID0gW107XHJcblxyXG4gICAgYWRkQ29sdW1uKGluaXRDYWxsYmFjaz86IChuZXdDb2x1bW46IFNxbFRhYmxlQ29sdW1uKSA9PiB2b2lkKTogU3FsVGFibGVDb2x1bW4ge1xyXG4gICAgICAgIGxldCBjb2wgPSBuZXcgU3FsVGFibGVDb2x1bW4odGhpcyk7XHJcbiAgICAgICAgaWYgKGluaXRDYWxsYmFjaylcclxuICAgICAgICAgICAgaW5pdENhbGxiYWNrKGNvbCk7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goY29sKTtcclxuICAgICAgICByZXR1cm4gY29sO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwic3FsLdGC0LDQsdC70LjRhtCwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3FsVGFibGVDb2x1bW4gZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICQkdGFibGU6IFNxbFRhYmxlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGFibGUoKTogU3FsVGFibGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkdGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCY0LzRjyDQutC+0LvQvtC90LrQuFwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQmNC80Y8g0LrQvtC70L7QvdC60LhcIlxyXG4gICAgfSlcclxuICAgIEBHcmlkQ29sdW1uKHtjYXB0aW9uOiBcItCY0LzRjyDQutC+0LvQvtC90LrQuFwifSlcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0YLQuNC/XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcInNxbCDRgtC40L8g0LrQvtC70L7QvdC60LhcIlxyXG4gICAgfSlcclxuICAgIEBHcmlkQ29sdW1uKHtjYXB0aW9uOiBcItCi0LjQv1wifSlcclxuICAgIGRhdGFUeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgQEdyaWRDb2x1bW4oe2NhcHRpb246IFwidGVzdFwiLCBvcmRlcjogLTF9KVxyXG4gICAgZ2V0IHRlc3RDb2x1bW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCIrXCIgKyB0aGlzLmRhdGFUeXBlICsgXCItPlwiICsgdGhpcy50YWJsZS5uYW1lICsgKHRoaXMudGFibGUgYXMgYW55KS4kJHVuaXF1ZU9iamVjdElkO1xyXG4gICAgfTtcclxuXHJcbiAgICAkJHRlc3RPYmplY3Q6IGFueTtcclxuXHJcbiAgICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwic3FsLdC60L7Qu9C+0L3QutCwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiIG9mIChcIiArIHRoaXMudGFibGUubmFtZSArIFwiKVwiO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLXNxbC9TcWxUYWJsZS50c1xuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Jhc2VQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge3JlZ2lzdGVyUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtJbnB1dFR5cGUsIElucHV0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuaW1wb3J0IHtUcmVlR3JpZH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnNcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQXJyYXlEYXRhU291cmNlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQXJyYXlEYXRhU291cmNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RQcm9wZXJ0eUVkaXRvciBleHRlbmRzIEJhc2VQcm9wZXJ0eUVkaXRvciB7XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlID09PSBcIiArIHRoaXMucHJvcHMucHJvcGVydHlOYW1lICsgXCIgXCIgKyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGF1dG9Gb3JtQ29udHJvbFByb3BzOiBBdXRvRm9ybUNvbnRyb2xQcm9wcyA9IHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiB0aGlzLnByb3BzLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHRoaXMucHJvcHMuaW5wdXRUYWIsXHJcbiAgICAgICAgICAgIGlucHV0R3JvdXA6IHRoaXMucHJvcHMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5pbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyhhdXRvRm9ybUNvbnRyb2xQcm9wcyk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxJbnB1dFxyXG4gICAgICAgIC8vICAgICAgICAgdHlwZT17SW5wdXRUeXBlLlRleHR9XHJcbiAgICAgICAgLy8gICAgICAgICBiaW5kT2JqZWN0PXt0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0fVxyXG4gICAgICAgIC8vICAgICAgICAgYmluZFByb3BOYW1lPXt0aGlzLnByb3BzLnByb3BlcnR5TmFtZX1cclxuICAgICAgICAvLyAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgIC8vICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAvLyAgICAgLz5cclxuICAgICAgICAvLyApO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBuZXcgVHJlZUdyaWRBcnJheURhdGFTb3VyY2UodGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0pO1xyXG4gICAgICAgIGRhdGFTb3VyY2UucGFyYW1zLmdldE5ld1JvdyA9ICgpID0+IHRoaXMucHJvcHMuY3VzdG9tUGFyYW1zLmdldE5ld0xpc3RJdGVtKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VHJlZUdyaWRcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9eyBkYXRhU291cmNlIH1cclxuICAgICAgICAgICAgICAgIHRyZWVNb2RlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvVHJlZUdyaWQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbi8vIDxUcmVlR3JpZENvbHVtbnM+XHJcbi8vIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JjQvNGPINC60L7Qu9C+0L3QutC4XCIgcHJvcGVydHlOYW1lPVwibmFtZVwiIHdpZHRoPXsxMDB9PlxyXG4vLyAgICAgPC9UcmVlR3JpZENvbHVtbj5cclxuLy8gICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0KLQuNC/INC00LDQvdC90YvRhVwiIHByb3BlcnR5TmFtZT1cImRhdGFUeXBlXCIgd2lkdGg9ezE1MH0+XHJcbi8vICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4vLyAgICAgPC9UcmVlR3JpZENvbHVtbnM+XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RFZGl0b3JQYXJhbXMgZXh0ZW5kcyBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICBnZXROZXdMaXN0SXRlbT86IChsaXN0T3duZXI6IERlc2lnbmVkT2JqZWN0KSA9PiBEZXNpZ25lZE9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3RFZGl0b3IocGFyYW1zOiBMaXN0RWRpdG9yUGFyYW1zKTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZWdpc3RlclByb3BlcnR5RWRpdG9yKHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiBwYXJhbXMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgICAgICBpbnB1dFRhYjogcGFyYW1zLmlucHV0VGFiLFxyXG4gICAgICAgICAgICBpbnB1dEdyb3VwOiBwYXJhbXMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogcGFyYW1zLmlucHV0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICBvYmplY3RUeXBlOiB0YXJnZXQuY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgIGVkaXRvclR5cGU6IExpc3RQcm9wZXJ0eUVkaXRvcixcclxuICAgICAgICAgICAgcHJvcGVydHlUeXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGN1c3RvbVBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uUHJvcHN9IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7VHJlZUdyaWREYXRhU291cmNlfSBmcm9tIFwiLi9UcmVlR3JpZERhdGFTb3VyY2VcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge2dldEdyaWRDb2x1bW5JbmZvc30gZnJvbSBcIi4vZ2V0R3JpZENvbHVtbkluZm9zXCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4uLy4uL0Vycm9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQXJyYXlEYXRhU291cmNlUGFyYW1zPFQ+IHtcclxuXHJcbiAgICBnZXROZXdSb3c/OiAoKSA9PiBUO1xyXG4gICAgZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZT86ICgpID0+IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGdldERlbGV0ZVJvd01lc3NhZ2U/OiAoKSA9PiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRBcnJheURhdGFTb3VyY2U8VCBleHRlbmRzIERlc2lnbmVkT2JqZWN0PiBpbXBsZW1lbnRzIFRyZWVHcmlkRGF0YVNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXJyYXlPYmo6IFRbXSwgcHVibGljIHBhcmFtczogVHJlZUdyaWRBcnJheURhdGFTb3VyY2VQYXJhbXM8VD4gPSB7fSkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IGlzVHJlZUdyaWREYXRhU291cmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyZWVHcmlkQ29sdW1ucygpOiBUcmVlR3JpZENvbHVtblByb3BzW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmFycmF5T2JqLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGdldEdyaWRDb2x1bW5JbmZvcyh0aGlzLmFycmF5T2JqWzBdKS5tYXA8VHJlZUdyaWRDb2x1bW5Qcm9wcz4oKGNvbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXQ6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgXy5hc3NpZ24ocmV0LCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYXB0aW9uOiBjb2wuY2FwdGlvbixcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogY29sLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG9yZGVyOiBjb2wub3JkZXIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcHJvcGVydHlOYW1lOiBjb2wucHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNob3dIaWVyYXJjaHlUcmVlOiBjb2wuc2hvd0hpZXJhcmNoeVRyZWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2hvd0hpZXJhcmNoeVBhZGRpbmc6IGNvbC5zaG93SGllcmFyY2h5UGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhUm93cygpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld1JvdygpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuZ2V0TmV3Um93KVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMuZ2V0TmV3Um93KCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93RXJyb3IoXCJUcmVlR3JpZEFycmF5RGF0YVNvdXJjZTogbWV0aG9kIGdldE5ld1JvdygpIG5vdCBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyAgXCJcIjsgIC8vIGZha2UgdHlwZXNjcmlwdCAyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFJvdyhyb3c6IFQpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuYXJyYXlPYmoucHVzaChyb3cpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5T2JqLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUm93KHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGVsZXRlZEl0ZW1zID0gXy5wdWxsQXQodGhpcy5hcnJheU9iaiwgcm93SW5kZXgpO1xyXG4gICAgICAgIGlmIChkZWxldGVkSXRlbXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwiVHJlZUdyaWRBcnJheURhdGFTb3VyY2UuZGVsZXRlUm93KCk6IGludmFsaWQgcm93SW5kZXggKFwiICsgcm93SW5kZXggKyBcIilcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5nZXRFbXB0eURhdGFTb3VyY2VNZXNzYWdlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMuZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIFwi0J/Rg9GB0YLQvtC5INGB0L/QuNGB0L7Qui5cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWxldGVSb3dNZXNzYWdlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmdldERlbGV0ZVJvd01lc3NhZ2UpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtcy5nZXREZWxldGVSb3dNZXNzYWdlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gXCLQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YwhXCI7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQXJyYXlEYXRhU291cmNlLnRzeFxuICoqLyIsIlxyXG5pbXBvcnQge0dyaWRDb2x1bW5JbmZvfSBmcm9tIFwiLi9yZWdpc3RlckdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyaWRDb2x1bW5JbmZvcyhvYmo6IERlc2lnbmVkT2JqZWN0KTogR3JpZENvbHVtbkluZm9bXSB7XHJcblxyXG4gICAgbGV0IGluZm9zID0gKG9iai5jb25zdHJ1Y3RvciBhcyBhbnkpLiQkZ3JpZENvbHVtbkluZm9zIGFzIEdyaWRDb2x1bW5JbmZvW107XHJcblxyXG4gICAgaWYgKCFpbmZvcylcclxuICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgaW5mb3MgPSBpbmZvcy5maWx0ZXIoKGVkdCkgPT4gb2JqIGluc3RhbmNlb2YgZWR0Lm9iamVjdFR5cGUpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJnZXRQcm9wZXJ0eUVkaXRvcnNcIikgO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3JzKTtcclxuICAgIHJldHVybiBpbmZvcztcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvZ2V0R3JpZENvbHVtbkluZm9zLnRzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==