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
	var SqlTable_1 = __webpack_require__(42);
	var Snapshot_1 = __webpack_require__(25);
	var DesignedObject_1 = __webpack_require__(11);
	var TreeGridArrayDataSource_1 = __webpack_require__(44);
	var StringPropertyEditor_1 = __webpack_require__(12);
	var Error_1 = __webpack_require__(6);
	var Sql2_1 = __webpack_require__(46);
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
	            if (table instanceof SQL_1.DataTable) {
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
	        // let x=Sql.select("номер","название",":qwert as 12")
	        //     .from(["Организация","org"])
	        //     .where("город",">=","Страна")
	        //     .andWhere("город2","!=","Страна2")
	        //     ;//.eq("");
	        var x = new Sql2_1.InlineSelectStmt();
	        x.addColumn("номер");
	        x.addColumn("название");
	        x.addFrom("Организация");
	        console.log(x.toSql("ms"));
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
	        this.state = new AppErrorBarState(this);
	        this.state.visible = false;
	    }
	    // protected willMount() {
	    //     super.willMount();
	    // }
	    AppErrorBar.prototype.didMount = function () {
	        _super.prototype.didMount.call(this);
	        window.onerror = this.handleError;
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
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var io = __webpack_require__(41);
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
	var SqlError = (function (_super) {
	    __extends(SqlError, _super);
	    function SqlError() {
	        _super.apply(this, arguments);
	    }
	    return SqlError;
	}(Error));
	exports.SqlError = SqlError;
	//export enum ColumnDataType { String, Number, Data }
	//export type DataType = string | number;
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


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = io;

/***/ },
/* 42 */
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
	var ListPropertyEditor_1 = __webpack_require__(43);
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
/* 43 */
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
	var TreeGridArrayDataSource_1 = __webpack_require__(44);
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
	var getGridColumnInfos_1 = __webpack_require__(45);
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
/* 45 */
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


/***/ },
/* 46 */
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
	        if (this.dialect === "ms")
	            this.sql.push("[" + name + "]");
	        else if (this.dialect == "pg")
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
	            if (index != _this.columns.length - 1)
	                e.emit(",");
	            e.emitLine();
	        });
	        e.emit("from").emitLine();
	        this.from.forEach(function (table, index) {
	            _this.emitSelectTable(table, e, "  ");
	            if (index != _this.from.length - 1)
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmVjMTY0MjJiMDk1ZmZlM2ZhZmIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9FcnJvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GbGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDEudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3QudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvZ2V0UHJvcGVydHlFZGl0b3JzLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UYWJzL1RhYnMudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvVmlzaWJsZVBsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvT25DbGlja1BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU25hcHNob3QudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL09ic2VydmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0RlZXBDbG9uZS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EZXNrdG9wL0Rlc2t0b3AudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC9BcHAudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC9BcHBFcnJvckJhci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvV2luZG93L1dpbmRvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTW92YWJsZS9Nb3ZhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDIudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1ucy50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW4udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL3JlZ2lzdGVyR3JpZENvbHVtbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvS2V5Y29kZS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvZ2V0U2Nyb2xsQmFyV2lkdGgudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NRTC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpb1wiIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtc3FsL1NxbFRhYmxlLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9MaXN0UHJvcGVydHlFZGl0b3IudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQXJyYXlEYXRhU291cmNlLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9nZXRHcmlkQ29sdW1uSW5mb3MudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1zcWwvU3FsMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0EsS0FBWSxLQUFLLHVCQUFNLENBQU8sQ0FBQztBQUMvQixLQUFZLFFBQVEsdUJBQU0sQ0FBVyxDQUFDO0FBSXRDLHlDQUEwQixDQUErQyxDQUFDO0FBRzFFLG9CQUFtQjtBQUNuQiwwREFBeUQ7QUFDekQsMENBQXlDO0FBQ3pDLE1BQUs7QUFFTCxvQkFBbUI7QUFDbkIsZUFBYztBQUNkLHFCQUFvQjtBQUNwQixNQUFLO0FBRUwsU0FBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyx5QkFBVyxPQUFFLEVBQ2QsUUFBUSxDQUFDLElBQUksQ0FDaEIsQ0FBQzs7Ozs7OztBQ3JCRix3Qjs7Ozs7O0FDQUEsMkI7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QUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1NBRWhELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7U0FFaEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUUzQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzlELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMs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QUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakIsQ0FBQyxDQUFDLENBQUM7U0FFSCxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3JCLENBQUM7S0FDTCxpQkFBQztBQUFELEVBQUM7QUFwR1ksbUJBQVUsYUFvR3RCO0FBRUQ7S0FBc0Msb0NBQVU7S0FBaEQ7U0FBc0MsOEJBQVU7S0FFaEQsQ0FBQztLQUFELHVCQUFDO0FBQUQsRUFBQyxDQUZxQyxVQUFVLEdBRS9DO0FBRlkseUJBQWdCLG1CQUU1QiIsImZpbGUiOiIuL2Rpc3QvQnVodGFBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZlYzE2NDIyYjA5NWZmZTNmYWZiXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbmltcG9ydCB7IEhlbGxvIH0gZnJvbSBcIi4vSGVsbG9Qcm9wc1wiO1xyXG5pbXBvcnQge0FwcH0gZnJvbSBcIi4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHAvQXBwXCI7XHJcbmltcG9ydCB7QXBwRGVzaWduZXJ9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXJcIjtcclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MVwiO1xyXG5cclxuLy8gUmVhY3RET00ucmVuZGVyKFxyXG4vLyAgICAgPEhlbGxvIGNvbXBpbGVyPVwiVHlwZVNjcmlwdFwiIGZyYW1ld29yaz1cIlJlYWN0XCIgLz4sXHJcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVcIilcclxuLy8gKTtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICAgIDxBcHAvPixcclxuLy8gICAgIGRvY3VtZW50LmJvZHlcclxuLy8gKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxBcHBEZXNpZ25lci8+LFxyXG4gICAgZG9jdW1lbnQuYm9keVxyXG4pO1xyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0xheW91dFwiO1xyXG5pbXBvcnQge0ZpeGVkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRmxleFwiO1xyXG5cclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi4vLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MVwiO1xyXG5pbXBvcnQge09iamVjdERlc2lnbmVyfSBmcm9tIFwiLi4vT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXJcIjtcclxuaW1wb3J0IHtEZXNrdG9wLCBPcGVuV2luZG93UGFyYW1zfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQge0RyYWdnYWJsZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EcmFnZ2FibGUvRHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7TW92YWJsZSwgTW92ZUV2ZW50LCBNb3ZlU3RhcnRFdmVudH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGVcIjtcclxuaW1wb3J0IHtBcHAsIGFwcEluc3RhbmNlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC9BcHBcIjtcclxuaW1wb3J0IHtXaW5kb3d9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvV2luZG93L1dpbmRvd1wiO1xyXG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UYWJzL1RhYnNcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybVwiO1xyXG5pbXBvcnQge0lucHV0LCBJbnB1dFR5cGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IHtJbnB1dERpdmlkZXJ9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXREaXZpZGVyL0lucHV0RGl2aWRlclwiO1xyXG5pbXBvcnQge3Rlc3RCdWh0YU9iamVjdDJ9IGZyb20gXCIuLi8uLi9UZXN0MS90ZXN0QnVodGFPYmplY3QyXCI7XHJcbmltcG9ydCB7Z2V0UHJvcGVydHlFZGl0b3JzfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL2dldFByb3BlcnR5RWRpdG9yc1wiO1xyXG5pbXBvcnQge0F1dG9Gb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcbmltcG9ydCB7VHJlZUdyaWR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbiwgR3JpZENvbHVtbn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnNcIjtcclxuaW1wb3J0IHtleGVjdXRlU1FMLCBEYXRhVGFibGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL1NRTFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCB7U3FsVGFibGV9IGZyb20gXCIuLi8uLi9idWh0YS1zcWwvU3FsVGFibGVcIjtcclxuaW1wb3J0IHtTbmFwc2hvdH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvU25hcHNob3RcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7VHJlZUdyaWRBcnJheURhdGFTb3VyY2V9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRBcnJheURhdGFTb3VyY2VcIjtcclxuaW1wb3J0IHtTdHJpbmdQcm9wZXJ0eUVkaXRvciwgU3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvRXJyb3JcIjtcclxuaW1wb3J0IHtTZWxlY3RTdG10LCBJbmxpbmVTZWxlY3RTdG10fSBmcm9tIFwiLi4vLi4vYnVodGEtc3FsL1NxbDJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNpZ25lclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8QXBwRGVzaWduZXJTdGF0ZT4ge1xyXG4gICAgLy90ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwRGVzaWduZXJTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPEFwcERlc2lnbmVyUHJvcHM+IHtcclxuICAgIC8vdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcERlc2lnbmVyIGV4dGVuZHMgQ29tcG9uZW50PEFwcERlc2lnbmVyUHJvcHMsIEFwcERlc2lnbmVyU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBcHBEZXNpZ25lclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwRGVzaWduZXJTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gaW5pdFRlc3QoKSB7XHJcbiAgICAvLyAgICAgdGhpcy50ZXN0T2JqZWN0Lm5hbWUgPSBcItCi0LXRgdGC0L7QstGL0Lkg0L7QsdGK0LXQutGCMVwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIG1vdmVTdGFydChlOiBNb3ZlU3RhcnRFdmVudCkge1xyXG4gICAgICAgIGUuYmluZFgodGhpcywgXCJzaWRlV2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNpZGVXaWR0aDogbnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHRlc3RPcGVuV2luZG93KCkge1xyXG5cclxuICAgICAgICAvLyBsZXQgb2JqID0ge1xyXG4gICAgICAgIC8vICAgICDQpNCw0LzQuNC70LjRjzogXCLQodCw0LLRh9C10L3QutC+0LJcIixcclxuICAgICAgICAvLyAgICAg0JjQvNGPOiBcItCa0L7QvdGB0YLQsNC90YLQuNC9XCIsXHJcbiAgICAgICAgLy8gICAgINCe0YLRh9C10YHRgtCy0L46IFwi0JLQu9Cw0LTQuNC80LjRgNC+0LLQuNGHXCJcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IHdpbiA9XHJcbiAgICAgICAgLy8gICAgIDxUYWJzPlxyXG4gICAgICAgIC8vICAgICAgICAgPFRhYiB0aXRsZT1cItC30LDQutC70LDQtNC60LAgMVwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXQgY2FwdGlvbj1cItCk0LDQvNC40LvQuNGPXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0KTQsNC80LjQu9C40Y9cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dCBjYXB0aW9uPVwi0JjQvNGPXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0JjQvNGPXCIvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXREaXZpZGVyIHRpdGxlPVwi0LAg0YLQtdC/0LXRgNGMINC+0YLRh9C10YHRgtCy0L5cIj48L0lucHV0RGl2aWRlcj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXtvYmp9IGJpbmRQcm9wTmFtZT1cItCe0YLRh9C10YHRgtCy0L5cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIC8vICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgLy8gICAgICAgICA8VGFiIHRpdGxlPVwi0LfQsNC60LvQsNC00LrQsCAyXCI+IDIyMjIyIDwvVGFiPlxyXG4gICAgICAgIC8vICAgICA8L1RhYnM+O1xyXG4gICAgICAgIC8vIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGVzdE9wZW5PYmplY3REZXNpZ25lcigpIHtcclxuICAgICAgICBsZXQgdGVzdE9iamVjdDogVGVzdEJ1aHRhT2JqZWN0MSA9IG5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcbiAgICAgICAgdGVzdE9iamVjdC5maXJzdE5hbWUgPSBcItCY0LPQvtGA0YwwXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdC5sYXN0TmFtZSA9IFwi0KHQuNC00L7RgNC10L3QutC+MFwiO1xyXG4gICAgICAgIHRlc3RPYmplY3Quc3VyTmFtZSA9IFwi0J7Qu9C10LPQvtCy0LjRhzBcIjtcclxuXHJcbi8vICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyIG9uQ2hhbmdlPXsoKT0+eyB3aW4ySW5zdGFuY2UuZGVzaWduZWRPYmplY3Q9bnVsbDsgd2luMkluc3RhbmNlLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwidGVzdDMyMy1jaGFuZ2VcIil9fSBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdH0ga2V5PVwiMVwiPiA8L09iamVjdERlc2lnbmVyPjtcclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IHRlc3RPYmplY3QgPSBfLmNsb25lRGVlcCh0ZXN0T2JqZWN0KTsgIHdpbjJJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpOyBjb25zb2xlLmxvZyhcInRlc3Q5OTktY2hhbmdlXCIpOyB9fVxyXG4gICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdH0ga2V5PVwiMVwiPiA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgbGV0IHRlc3RPYmplY3QyOiB0ZXN0QnVodGFPYmplY3QyID0gbmV3IHRlc3RCdWh0YU9iamVjdDIoKTtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5maXJzdE5hbWUgPSBcItCY0LPQvtGA0YwxXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdDIubGFzdE5hbWUgPSBcItCh0LjQtNC+0YDQtdC90LrQvjJcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5zdXJOYW1lID0gXCLQntC70LXQs9C+0LLQuNGHMVwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLnNleCA9IFwi0LzRg9C20YHQutC+0LlcIjtcclxuXHJcbiAgICAgICAgbGV0IHdpbjJJbnN0YW5jZTogYW55O1xyXG5cclxuICAgICAgICBsZXQgd2luMiA9IDxPYmplY3REZXNpZ25lciByZWY9eyAoZTphbnkpID0+IHsgd2luMkluc3RhbmNlID0gZTsgfSB9IGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCI+XHJcbiAgICAgICAgPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgIC8vZ2V0UHJvcGVydHlFZGl0b3JzKHRlc3RPYmplY3QpO1xyXG4gICAgICAgIC8vZ2V0UHJvcGVydHlFZGl0b3JzKHRlc3RPYmplY3QyKTtcclxuXHJcbiAgICAgICAgbGV0IHdpbndpbiA9IDxkaXY+e3dpbn17d2luMn08L2Rpdj47XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcItC+0LrQvdC+IDFcIixcclxuICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgbGVmdDogNTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2lud2luLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHRlc3RJbW11dGFibGUoKSB7XHJcbiAgICAgICAgLy8gLy9sZXQgZmFrZT1uZXcgVGFibGUoW10pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc3QgeHh4ID0gSW1tdXRhYmxlLk1hcDxzdHJpbmcsIG51bWJlcj4oKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBvYmogPSB7XHJcbiAgICAgICAgLy8gICAgIG5hbWU6IFwi0J7Qs9Cw0L3QuNC30LDRhtC40Y9cIixcclxuICAgICAgICAvLyAgICAgY29sdW1uczoge1wi0J3QvtC80LXRgFwiOiB7Y29sTmFtZTogXCLQndC+0LzQtdGAXCIsIHR5cGU6IFwic3RyaW5nXCJ9LCBcItCd0LDQt9Cy0LDQvdC40LVcIjoge2NvbE5hbWU6IFwi0J3QsNC30LLQsNC90LjQtVwiLCB0eXBlOiBcInN0cmluZ1wifX1cclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IG9iakkgPSBJbW11dGFibGUuZnJvbUpTKG9iaik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAvL2xldCBtID0gSW1tdXRhYmxlLk1hcDxzdHJpbmcsbnVtYmVyfCBJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+PigpO1xyXG4gICAgICAgIC8vIC8vbGV0IHggPSBtLnNldChcIjEzeXl0MzMzMzMyXCIsIDEyKTtcclxuICAgICAgICAvLyAvL2xldCB5ID0gbS5zZXQoXCJ4eHhcIiwgSW1tdXRhYmxlLk1hcDxudW1iZXIsc3RyaW5nPigpKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIC8vbGV0IHk9bS51cGRhdGUoXCJ4eHhcIixJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+KCkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2JqSS50b1N0cmluZygpKTtcclxuICAgICAgICAvLyBsZXQgeCA9IG9iakkuZ2V0SW4oWydjb2x1bW5zJywgJ9Cd0L7QvNC10YAnLCAnY29sTmFtZSddKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh4KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHN0cjogc3RyaW5nID0gXCLQv9GA0LjQstC10YJcIjtcclxuXHJcbiAgICB0ZXN0QXV0b0Zvcm0oKSB7XHJcbiAgICAgICAgbGV0IHdpbjIgPVxyXG4gICAgICAgICAgICA8QXV0b0Zvcm0gc2l6ZVRvPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfSBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsxXCIgaW5wdXRDYXB0aW9uPVwiZWVlMVwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizFcIiBpbnB1dENhcHRpb249XCJlZWUyXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMVwiIGlucHV0Q2FwdGlvbj1cImVlZTNcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsyXCIgaW5wdXRDYXB0aW9uPVwiZWVlNFwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgPC9BdXRvRm9ybT47XHJcbi8vICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YtcIiBpbnB1dENhcHRpb249XCJlZWVcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc30gYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJhdXRvIGZvcm1cIixcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgbGVmdDogMTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdEdyaWQoKSB7XHJcbiAgICAgICAgLy8gZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgICAgIC8vICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBkYXRhU291cmNlID0gdGFibGUucm93cy5tYXA8RGVzaWduZWRPYmplY3Q+KChyKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHvQmtC70Y7RhzogcltcItCa0LvRjtGHXCJdLCDQndC+0LzQtdGAOiByW1wi0J3QvtC80LXRgFwiXSwg0J3QsNC30LLQsNC90LjQtTogcltcItCd0LDQt9Cy0LDQvdC40LVcIl19O1xyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGRzID0gbmV3IFRyZWVHcmlkQXJyYXlEYXRhU291cmNlKGRhdGFTb3VyY2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YAgPT5cIiArIHRhYmxlLnJvd3NbMF0uZ2V0VmFsdWUoMSkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9eyBkYXRhU291cmNlIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdHJlZU1vZGU9e3RydWV9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGhpZXJhcmNoeUZpZWxkTmFtZT1cItCd0L7QvNC10YBcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPVwiLlwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw9ezB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBkZW55RGVsZXRlPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgID5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1ucz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JrQvtC70L7QvdC60LAyXCIgcHJvcGVydHlOYW1lPVwi0J3QvtC80LXRgFwiIHNob3dIaWVyYXJjaHlUcmVlPXtmYWxzZX1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwM1wiIHByb3BlcnR5TmFtZT1cItCd0LDQt9Cy0LDQvdC40LVcIiBzaG93SGllcmFyY2h5VHJlZT17dHJ1ZX1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwMVwiIHByb3BlcnR5TmFtZT1cItCa0LvRjtGHXCIgd2lkdGg9ezgwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW5zPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvVHJlZUdyaWQ+O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiBcImF1dG8gZm9ybVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiA4MDBcclxuICAgICAgICAvLyAgICAgICAgIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvL1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0RmxleCgpIHtcclxuICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOlwiMnB4IGRvdHRlZCByZWRcIiwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgbGVmdDowLHJpZ2h0OjAsIGJvdHRvbTowIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkIHN0eWxlPXt7IGJvcmRlcjpcIjJweCBkb3R0ZWQgYmx1ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0J7QtNC40L08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIGdyZWVuXCIgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiIHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCByZWRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIGJsdWVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0t0J7QtNC40L08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIGdyZWVuXCIgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPi0tLS0tLS3QlNCy0LA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0tLS3QlNCy0LAxPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTExMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMjIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjExMTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjIyMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMTExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjIyMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTExMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMjIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkIHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCBtYXJvb25cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0tLS3QotGA0Lg8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIG1hcm9vblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0KLRgNC4PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwidGVzdCBGTEVYXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDEwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRlc3RUYWJsZURlc2lnbmVyKCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IG5ldyBTcWxUYWJsZSgpO1xyXG5cclxuICAgICAgICB0YWJsZS5uYW1lID0gXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgdGFibGUuc3FsbmFtZSA9IFwiZGJvLtCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIjtcclxuICAgICAgICB0YWJsZS5hZGRDb2x1bW4oKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICBjb2wubmFtZSA9IFwi0J3QvtC80LXRgFwiO1xyXG4gICAgICAgICAgICBjb2wuZGF0YVR5cGUgPSBcInZhcmNoYXIoMTApXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0LDQt9Cy0LDQvdC40LVcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDUwKVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IGNvbnNvbGUubG9nKFwidGFibGUtY2hhbmdlXCIpOyB9fVxyXG4gICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17dGFibGV9PlxyXG4gICAgICAgIDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCIsXHJcbiAgICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDUwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRlc3RTbmFwc2hvdCgpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBuZXcgU3FsVGFibGUoKTtcclxuXHJcbiAgICAgICAgdGFibGUubmFtZSA9IFwi0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgIHRhYmxlLnNxbG5hbWUgPSBcImRiby7QntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0L7QvNC10YBcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDEwKVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbC5uYW1lID0gXCLQndCw0LfQstCw0L3QuNC1XCI7XHJcbiAgICAgICAgICAgIGNvbC5kYXRhVHlwZSA9IFwidmFyY2hhcig1MClcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xyXG5cclxuICAgICAgICBsZXQgcyA9IG5ldyBTbmFwc2hvdCgpO1xyXG4gICAgICAgIHMuc2F2ZU9iamVjdCh0YWJsZSwgXCJ0YWJsZTFcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuXHJcbiAgICAgICAgdGFibGUubmFtZSA9IFwi0LbQvtC/0LBcIjtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xyXG5cclxuICAgICAgICBzLnJlc3RvcmVPYmplY3QodGFibGUsIFwidGFibGUxXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXN0U25hcHNob3RQcmVmb3JtYW5jZSgpO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRlc3RTbmFwc2hvdFByZWZvcm1hbmNlKCkge1xyXG4gICAgICAgIGxldCB4OiBhbnkgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGFibGUgPSBuZXcgU3FsVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRhYmxlLm5hbWUgPSBcItCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIjtcclxuICAgICAgICAgICAgdGFibGUuc3FsbmFtZSA9IFwiZGJvLtCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIjtcclxuICAgICAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbC5uYW1lID0gXCLQndC+0LzQtdGAXCI7XHJcbiAgICAgICAgICAgICAgICBjb2wuZGF0YVR5cGUgPSBcInZhcmNoYXIoMTApXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0YWJsZS5hZGRDb2x1bW4oKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0LDQt9Cy0LDQvdC40LVcIjtcclxuICAgICAgICAgICAgICAgIGNvbC5kYXRhVHlwZSA9IFwidmFyY2hhcig1MClcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHgucHVzaCh0YWJsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IHMgPSBuZXcgU25hcHNob3QoKTtcclxuICAgICAgICBjb25zb2xlLnRpbWUoXCJ4MVwiKTtcclxuICAgICAgICBzLnNhdmVPYmplY3QoeCwgXCJ4XCIpO1xyXG4gICAgICAgIGNvbnNvbGUudGltZUVuZChcIngxXCIpO1xyXG4gICAgICAgIHgubGVuZ3RoID0gMDtcclxuICAgICAgICBzLnJlc3RvcmVPYmplY3QoeCwgXCJ4XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0ZXN0R3JpZDIoKSB7XHJcblxyXG4gICAgICAgIGNsYXNzIFZpZCBleHRlbmRzIERlc2lnbmVkT2JqZWN0IHtcclxuXHJcbiAgICAgICAgICAgIEBTdHJpbmdFZGl0b3IoKVxyXG4gICAgICAgICAgICBAR3JpZENvbHVtbih7Y2FwdGlvbjogXCLRjdGC0L4g0L3QvtC80LXRgFwifSlcclxuICAgICAgICAgICAgTnVtOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBAU3RyaW5nRWRpdG9yKClcclxuICAgICAgICAgICAgQEdyaWRDb2x1bW4oe30pXHJcbiAgICAgICAgICAgIE5hbWU6IHN0cmluZztcclxuXHJcblxyXG4gICAgICAgICAgICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLQktC40LQg0YLQvtCy0LDRgNCwXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBbJHt0aGlzLk51bX1dICBgICsgdGhpcy5OYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgMTAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YBcIilcclxuICAgICAgICAgICAgLmRvbmUoKHRhYmxlOiBEYXRhVGFibGV8c3RyaW5nKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlIGluc3RhbmNlb2YgIERhdGFUYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2aWRzID0gdGFibGUucm93cy5tYXA8VmlkPigocikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZpZCA9IG5ldyBWaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkLk51bSA9IFwiKlwiICsgcltcItCd0L7QvNC10YBcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZC5OYW1lID0gXCIqXCIgKyByW1wi0J3QsNC30LLQsNC90LjQtVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IFRPUCAxMCA9PT4gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmlkcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhU291cmNlID0gbmV3IFRyZWVHcmlkQXJyYXlEYXRhU291cmNlKHZpZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucGFyYW1zLmdldE5ld1JvdyA9ICgpID0+IG5ldyBWaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RhdGFTb3VyY2UucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UgPSAoKSA9PiBcItCS0YHQtSDQv9GD0YHRgtC+LCDQsdC70LjQvSEg0JbQvNC4INC90LAg0LPQsNC3IVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UgPSAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cItCS0YHQtSDQv9GD0YHRgtC+LCA8aT7QsdC70LjQvSE8L2k+INCW0LzQuCDQvdCwINCz0LDQtyFcIjwvc3Bhbj47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmVlR3JpZD47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInRlc3QgZ3JpZCAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFdpbmRvd0F1dG9TaXplKCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoMSA9PT0gMSlcclxuICAgICAgICAgICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKFwiMzMzKytcIikpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hZyA9IFwiR2V0IHRoZSBjdXJyZW50IGNvb3JkaW5hdGVzIG9mIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBzZXQgb2YgbWF0Y2hlZCBlbGVtZW50cywgcmVsYXRpdmUgdG8gXCI7XHJcblxyXG4gICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAg0J/RgNC40LLQtdGCINGD0YDQvtC00YtcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCU0LAg0Lgg0L3QtdGCIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0JTQsCDQuCDQvdC10YIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCU0LAg0Lgg0L3QtdGCIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7QlNCwINC4INC90LXRgiA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0JTQsCDQuCDQvdC10YIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgKHNlbmRlcjpCdXR0b24sIGU6UmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuTWVzc2FnZVdpbmRvdyhtYWcsIHsgc3R5bGU6XCJpbmZvcm1hdGlvblwiLCBwYXJlbnRXaW5kb3dJZDogc2VuZGVyLmdldFBhcmVudFdpbmRvd0lkKCkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCd0L7QstC+0LVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJ0ZXN0IEFVVE9TSVpFXCIsXHJcbiAgICAgICAgICAgIGF1dG9TaXplOiBcImNvbnRlbnRcIixcclxuICAgICAgICAgICAgYXV0b1Bvc2l0aW9uOiBcImRlc2t0b3AtY2VudGVyXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdE9ic2VydmFibGUoKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCB4PVNxbC5zZWxlY3QoXCLQvdC+0LzQtdGAXCIsXCLQvdCw0LfQstCw0L3QuNC1XCIsXCI6cXdlcnQgYXMgMTJcIilcclxuICAgICAgICAvLyAgICAgLmZyb20oW1wi0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiLFwib3JnXCJdKVxyXG4gICAgICAgIC8vICAgICAud2hlcmUoXCLQs9C+0YDQvtC0XCIsXCI+PVwiLFwi0KHRgtGA0LDQvdCwXCIpXHJcbiAgICAgICAgLy8gICAgIC5hbmRXaGVyZShcItCz0L7RgNC+0LQyXCIsXCIhPVwiLFwi0KHRgtGA0LDQvdCwMlwiKVxyXG4gICAgICAgIC8vICAgICA7Ly8uZXEoXCJcIik7XHJcblxyXG4gICAgICAgIGxldCB4PW5ldyBJbmxpbmVTZWxlY3RTdG10KCk7XHJcbiAgICAgICAgeC5hZGRDb2x1bW4oXCLQvdC+0LzQtdGAXCIpO1xyXG4gICAgICAgIHguYWRkQ29sdW1uKFwi0L3QsNC30LLQsNC90LjQtVwiKTtcclxuICAgICAgICB4LmFkZEZyb20oXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh4LnRvU3FsKFwibXNcIikpO1xyXG4gICAgICAgIC8vIGxldCB4eHg6IGFueSA9IHt9O1xyXG4gICAgICAgIC8vIGxldCBwcm94eUhhbmRsZXIgPSB7XHJcbiAgICAgICAgLy8gICAgIGdldDogKHRhcmdldDogYW55LCBwOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKFwiaGFuZGxlckdldD8/P1wiKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2cocCk7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGFyZ2V0W3BdO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQ6ICh0YXJnZXQ6IGFueSwgcDogUHJvcGVydHlLZXksIHZhbHVlOiBhbnksIHJlY2VpdmVyOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVyU2V0XCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocCk7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tUHJveHktLS0tLVwiKTtcclxuICAgICAgICAvLyBsZXQgcHJveHkgPSBuZXcgUHJveHkoeHh4LCBwcm94eUhhbmRsZXIpO1xyXG4gICAgICAgIC8vIHByb3h5LngxMTEgPSAzMzM7XHJcbiAgICAgICAgLy8gcHJveHkubyA9IHt9O1xyXG4gICAgICAgIC8vIHByb3h5Lm8uZWVlID0gXCJlZWUxXCI7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm94eS54MTExKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHByb3h5KTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHggPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjbGFzcyBBIGV4dGVuZHMgUHJveHk8QXJyYXk8YW55Pj4ge1xyXG4gICAgICAgIC8vICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGhhbmRsZXI6IFByb3h5SGFuZGxlcjxBcnJheTxhbnk+PiA9IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBnZXQ6ICh0YXJnZXQ6IEFycmF5PGFueT4sIHA6IFByb3BlcnR5S2V5LCByZWNlaXZlcjogYW55KTogYW55ID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVyR2V0XCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIHN1cGVyKFtdLCBoYW5kbGVyKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCI5XCIpO1xyXG4gICAgICAgIC8vIGxldCBhID0gbmV3IEEoKTtcclxuICAgICAgICAvLyBhLnB1c2goMTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMTBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXBwLWRlc2lnbmVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtzaXplVG86IFwicGFyZW50XCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFwcCB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgc2l6ZVRvPVwicGFyZW50XCIgdHlwZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJoZWFkZXIxXCI+Rml4ZWQgSGVhZGVyPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwicm93XCIgc2l6ZVRvPVwicGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwic2lkZWJhclwiIHN0eWxlPXt7d2lkdGg6dGhpcy5zaWRlV2lkdGh9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaXhlZCBTaWRlYmFyIDEyMzxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdE9wZW5XaW5kb3coKTsgfX0+IHRlc3Qgb3BlbiB3aW5kb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RPcGVuT2JqZWN0RGVzaWduZXIoKTsgfX0+b3BlbiBkZXNpZ25lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEltbXV0YWJsZSgpOyB9fT50ZXN0SW1tdXRhYmxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0QXV0b0Zvcm0oKTsgfX0+dGVzdCBhdXRvZm9ybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEdyaWQoKTsgfX0+dGVzdCBHUklEPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0RmxleCgpOyB9fT50ZXN0IEZMRVg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RUYWJsZURlc2lnbmVyKCk7IH19PnRlc3QgVEFCTEUgREVTSUdORVI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RTbmFwc2hvdCgpOyB9fT50ZXN0IFNOQVBTSE9UPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0R3JpZDIoKTsgfX0+dGVzdCBHUklELTI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RXaW5kb3dBdXRvU2l6ZSgpOyB9fT50ZXN0IFdJTiBBVVRPU0laRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0T2JzZXJ2YWJsZSgpOyB9fT50ZXN0IE9CU0VSVkFCTEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBjbGFzc05hbWU9XCJYWFhjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlIG9uTW92ZVN0YXJ0PXt0aGlzLm1vdmVTdGFydC5iaW5kKHRoaXMpfT5NT1Y8L01vdmFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVza3RvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvQXBwPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9BcHBEZXNpZ25lci9BcHBEZXNpZ25lci50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9cIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgc2hhbGxvd0NvbXBhcmUgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZVwiKTtcclxuaW1wb3J0IHtDb21wb25lbnRQbHVnaW59IGZyb20gXCIuLi9QbHVnaW5zL1BsdWdpblwiO1xyXG5pbXBvcnQge1dpbmRvd30gZnJvbSBcIi4vV2luZG93L1dpbmRvd1wiO1xyXG5pbXBvcnQge0Rlc2t0b3AsIE9wZW5NZXNzYWdlV2luZG93UGFyYW1zfSBmcm9tIFwiLi9EZXNrdG9wL0Rlc2t0b3BcIjtcclxuaW1wb3J0IHt0aHJvd0Vycm9yfSBmcm9tIFwiLi4vRXJyb3JcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFhPbkNsaWNrUHJvcHMge1xyXG4gICAgb25DbGljaz86IFJlYWN0LlJlYWN0RXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRQcm9wczxTPiBleHRlbmRzIFJlYWN0LkNsYXNzQXR0cmlidXRlczxFbGVtZW50PiB7XHJcbiAgICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuXHJcbiAgICBvbldpbGxNb3VudD86IChzdGF0ZTogUykgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRTdGF0ZTxQPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50OiBDb21wb25lbnQ8UCwgYW55Pikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3JjZVVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8vY2xpY2tDb3VudDogbnVtYmVyO1xyXG4gICAgLy8gc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50PFAgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxTPiwgUyBleHRlbmRzIENvbXBvbmVudFN0YXRlPFA+PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQLCBTPiB7XHJcblxyXG4gICAgcGx1Z2luczogQ29tcG9uZW50UGx1Z2luPGFueSwgYW55PltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFAsIGNvbnRleHQ6IGFueSAvKnN0YXRlQ2xhc3M/OiBGdW5jdGlvbiovKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICAvLyB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgIC8vICAgICBsZXQgcGx1Z0luc3RhbmNlOiBhbnkgPSBuZXcgcGx1Zyh0aGlzKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbHVnaW5zLnB1c2gocGx1Z0luc3RhbmNlKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNsYXNzZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIHJlbmRlclByb3BzOiBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgcmVuZGVyU3R5bGVzOiBhbnkgPSB7fTtcclxuXHJcbiAgICBnZXRQYXJlbnRXaW5kb3coKTogV2luZG93IHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKChwYXJlbnQgYXMgYW55KS4kJHdpbmRvdylcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyZW50IGFzIGFueSkuJCR3aW5kb3cgYXMgV2luZG93O1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50RGVza3RvcCgpOiBEZXNrdG9wIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAoKHBhcmVudCBhcyBhbnkpLiQkZGVza3RvcClcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyZW50IGFzIGFueSkuJCRkZXNrdG9wIGFzIERlc2t0b3A7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvd0Vycm9yKFwiZ2V0UGFyZW50RGVza3RvcCgpOiBkZXNrdG9wIG5vdCBmb3VuZFwiKTsgIFxyXG4gICAgICAgIHJldHVybiB7fSBhcyBEZXNrdG9wOyAgLy8gZmFrZSB0eXBlc2NyaXB0IDJcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UGFyZW50V2luZG93SWQoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcGFyZW50V2luID0gdGhpcy5nZXRQYXJlbnRXaW5kb3coKTtcclxuICAgICAgICBpZiAocGFyZW50V2luKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRXaW4uc3RhdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvcHMocHJvcHM6IE9iamVjdCkge1xyXG4gICAgICAgIF8uYXNzaWduV2l0aCh0aGlzLnJlbmRlclByb3BzLCBwcm9wcywgKG9iamVjdFZhbHVlOiBhbnksIHNvdXJjZVZhbHVlOiBhbnksIGtleT86IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcImNsYXNzXCIgfHwga2V5ID09PSBcImNsYXNzTmFtZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImludmFsaWQgcHJvcGVydHkgJ1wiICsga2V5ICsgXCInLCB1c2UgZnVuY3Rpb25zIGFkZENsYXNzTmFtZSgpLCB0b2dnbGVDbGFzc05hbWUoKVwiKTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJzdHlsZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImludmFsaWQgcHJvcGVydHkgJ1wiICsga2V5ICsgXCInLCB1c2UgZnVuY3Rpb25zIGFkZFN0eWxlcygpLCByZW1vdmVTdHlsZSgpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlVmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3R5bGVzKHN0eWxlczogT2JqZWN0IHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgXy5hc3NpZ24odGhpcy5yZW5kZXJTdHlsZXMsIHN0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTdHlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTdHlsZXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucmVuZGVyU3R5bGVzW3N0eWxlXTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdHlsZXMoc3R5bGVzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKChzdHlsZSk9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlbmRlclN0eWxlc1tzdHlsZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcuZGlkTW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlkTW91bnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxNb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2lsbE1vdW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25XaWxsTW91bnQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25XaWxsTW91bnQodGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzOiBQKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc1Byb3BzRXF1YWwob2JqMTogYW55LCBvYmoyOiBhbnksIGV4Y2x1ZGVQcm9wcz86IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIC8vTG9vcCB0aHJvdWdoIHByb3BlcnRpZXMgaW4gb2JqZWN0IDFcclxuICAgICAgICBmb3IgKGxldCBwIGluIG9iajEpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChleGNsdWRlUHJvcHMgJiYgZXhjbHVkZVByb3BzLmluZGV4T2YocCkgPj0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAvL0NoZWNrIHByb3BlcnR5IGV4aXN0cyBvbiBib3RoIG9iamVjdHNcclxuICAgICAgICAgICAgaWYgKG9iajEuaGFzT3duUHJvcGVydHkocCkgIT09IG9iajIuaGFzT3duUHJvcGVydHkocCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvYmoxW3BdICE9PSBvYmoyW3BdKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMSBub3QgZXF1YWwgXCIgKyBwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHN3aXRjaCAodHlwZW9mIChvYmoxW3BdKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy9EZWVwIGNvbXBhcmUgb2JqZWN0c1xyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoIU9iamVjdC5jb21wYXJlKG9iajFbcF0sIG9iajJbcF0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICAvL0NvbXBhcmUgZnVuY3Rpb24gY29kZVxyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnZnVuY3Rpb24nOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmICh0eXBlb2YgKG9iajJbcF0pID09ICd1bmRlZmluZWQnIHx8IChwICE9ICdjb21wYXJlJyAmJiBvYmoxW3BdLnRvU3RyaW5nKCkgIT0gb2JqMltwXS50b1N0cmluZygpKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgLy9Db21wYXJlIHZhbHVlc1xyXG4gICAgICAgICAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAob2JqMVtwXSAhPT0gb2JqMltwXSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0NoZWNrIG9iamVjdCAyIGZvciBhbnkgZXh0cmEgcHJvcGVydGllc1xyXG4gICAgICAgIGZvciAobGV0IHAgaW4gb2JqMikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChvYmoxW3BdKSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgKG9iajJbcF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMiBub3QgZXF1YWwgXCIgKyBwKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqMSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9iajIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHByb3RlY3RlZCBzaGFsbG93Q29tcGFyZShuZXh0UHJvcHM6IFApOiBib29sZWFuIHtcclxuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKFwic2hhbGxvdy0wIFwiICsgdGhpcy5jb25zdHJ1Y3Rvci50b1N0cmluZygpLnN1YnN0cmluZygwLCAzMCkpO1xyXG4gICAgLy8gICAgIC8vY29uc29sZS50aW1lKFwiMjJcIik7XHJcbiAgICAvLyAgICAgbGV0IHJldCA9IHNoYWxsb3dDb21wYXJlKHRoaXMsIG5leHRQcm9wcywgdGhpcy5zdGF0ZSk7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLnRpbWVFbmQoXCIyMlwiKTtcclxuICAgIC8vICAgICByZXR1cm4gcmV0O1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIHByaXZhdGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKG5leHRQcm9wczogUCwgbmV4dFN0YXRlOiBTKSA9PiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHM6IFAsIHByZXZTdGF0ZTogUywgcHJldkNvbnRleHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBwcmV2Q29udGV4dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCBkaWRVcGRhdGUocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxSZWNlaXZlUHJvcHMocHJldlByb3BzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsVW5tb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsVW5tb3VudCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRDbGFzc05hbWUoY2xhc3NOYW1lczogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNsYXNzTmFtZShib29sVmFsdWU6IGJvb2xlYW4sIHRydWVDbGFzc05hbWVzOiBzdHJpbmcsIGZhbHNlQ2xhc3NOYW1lcz86IHN0cmluZykge1xyXG4gICAgICAgIGlmIChib29sVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUodHJ1ZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoZmFsc2VDbGFzc05hbWVzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzc05hbWUoZmFsc2VDbGFzc05hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3NOYW1lKHRydWVDbGFzc05hbWVzKTtcclxuICAgICAgICAgICAgaWYgKGZhbHNlQ2xhc3NOYW1lcylcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKGZhbHNlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWVzOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lcylcclxuICAgICAgICAgICAgY2xhc3NOYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNsYXNzZXMuc3BsaWNlKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpLCAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJDbGFzc2VzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNsYXNzZXMuam9pbihcIiBcIik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZW5kZXJQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclByb3BzLmNsYXNzTmFtZSA9IHRoaXMucmVuZGVyQ2xhc3NOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9wcy5zdHlsZSA9IHRoaXMucmVuZGVyU3R5bGVzO1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMucmVuZGVyUHJvcHMuc3R5bGUsIHRoaXMucHJvcHMuc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclByb3BzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBnZXRSZWFjdEVsZW1lbnRDbGFzc05hbWUoZWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC50eXBlID8gZWxlbWVudC50eXBlLnRvU3RyaW5nKCkuc3BsaXQoXCIoXCIpWzBdLnNwbGl0KFwiIFwiKVsxXSA6IFwiXCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW4oY2hpbGRUeXBlOiBGdW5jdGlvbik6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4gYXMgUmVhY3QuUmVhY3ROb2RlKS5mb3JFYWNoKChjaGlsZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZFR5cGUgPT09IGNoaWxkLnR5cGUpXHJcbiAgICAgICAgICAgICAgICByZXQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlsZHJlbk9mUHJvcHMocHJvcHM6IGFueSwgY2hpbGRUeXBlOiBGdW5jdGlvbik6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZFR5cGUgPT09IGNoaWxkLnR5cGUpXHJcbiAgICAgICAgICAgICAgICByZXQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd0NvbmZpcm1hdGlvbldpbmRvdyhtZXNzYWdlQ29udGVudDogUmVhY3QuUmVhY3ROb2RlLCByZXN1bHRDYWxsYmFjazogKHJlc3VsdE9rOiBib29sZWFuKSA9PiB2b2lkLCBva0J1dHRvblRleHQ/OiBzdHJpbmcsIGNhbmNlbEJ1dHRvblRleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcGFyYW1zOiBPcGVuTWVzc2FnZVdpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgc3R5bGU6IFwiY29uZmlybWF0aW9uXCIsXHJcbiAgICAgICAgICAgIHBhcmVudFdpbmRvd0lkOiB0aGlzLmdldFBhcmVudFdpbmRvd0lkKCksXHJcbiAgICAgICAgICAgIG9rQnV0dG9uQ29udGVudDogb2tCdXR0b25UZXh0IHx8IFwi0JTQsFwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db250ZW50OiBjYW5jZWxCdXR0b25UZXh0IHx8IFwi0J3QtdGCXCIsXHJcbiAgICAgICAgICAgIHJlc3VsdENhbGxiYWNrOiByZXN1bHRDYWxsYmFja1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnREZXNrdG9wKCkhLm9wZW5NZXNzYWdlV2luZG93KG1lc3NhZ2VDb250ZW50LCBwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxldGVDb25maXJtYXRpb25XaW5kb3cobWVzc2FnZUNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZSwgcmVzdWx0Q2FsbGJhY2s6IChyZXN1bHRPazogYm9vbGVhbikgPT4gdm9pZCwgb2tCdXR0b25UZXh0Pzogc3RyaW5nLCBjYW5jZWxCdXR0b25UZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtczogT3Blbk1lc3NhZ2VXaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcImRhbmdlclwiLFxyXG4gICAgICAgICAgICBwYXJlbnRXaW5kb3dJZDogdGhpcy5nZXRQYXJlbnRXaW5kb3dJZCgpLFxyXG4gICAgICAgICAgICBva0J1dHRvbkNvbnRlbnQ6IG9rQnV0dG9uVGV4dCB8fCBcItCU0LBcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogY2FuY2VsQnV0dG9uVGV4dCB8fCBcItCd0LXRglwiLFxyXG4gICAgICAgICAgICByZXN1bHRDYWxsYmFjazogcmVzdWx0Q2FsbGJhY2tcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50RGVza3RvcCgpIS5vcGVuTWVzc2FnZVdpbmRvdyhtZXNzYWdlQ29udGVudCwgcGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhcmVudFdpbmRvdygpIHtcclxuICAgICAgICB0aGlzLmdldFBhcmVudERlc2t0b3AoKSEuY2xvc2VXaW5kb3codGhpcy5nZXRQYXJlbnRXaW5kb3dJZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3JlbmRlcigpIHtcclxuICAgIC8vICAgIHJldHVybiAobmV3KVxyXG4gICAgLy8gICAgLy8gICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykgfT5cclxuICAgIC8vICAgIC8vICAgICAgICBDb21wb25lbnQgZnJvbSB7dGhpcy5wcm9wcy5jb21waWxlcn0gYW5kIHt0aGlzLnByb3BzLmZyYW1ld29ya30hY2xpY2tDb3VudD17dGhpcy5zdGF0ZS5jbGlja0NvdW50fVxyXG4gICAgLy8gICAgLy8gICAgPC9idXR0b24+XHJcbiAgICAvLyAgICAvLyk7XHJcbiAgICAvL31cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnQudHN4XG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3I6IHN0cmluZyB8IEVycm9yKTogbmV2ZXIge1xyXG5cclxuICAgIC8vIHRvZG86INC+0YLQutC70Y7Rh9C40YLRjCDQsiBwcm9kdWN0aW9uINGA0LXQttC40LzQtVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgbGV0IGVycjogYW55O1xyXG5cclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKVxyXG4gICAgICAgIGVyciA9IGVycm9yO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVyciA9IG5ldyBFcnJvcihlcnJvcik7XHJcblxyXG4gICAgZXJyLiQkaXNUaHJvd0Vycm9yID0gdHJ1ZTtcclxuICAgIHRocm93IGVycjtcclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvRXJyb3IudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG4gICAgdHlwZTogXCJjb2x1bW5cIiB8IFwicm93XCI7XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudDxMYXlvdXRQcm9wcyxhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkxheW91dFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7ZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGZsZXhEaXJlY3Rpb246IHRoaXMucHJvcHMudHlwZX0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpIHsvLyAmJiB0aGlzLnByb3BzLnR5cGU9PT1cImNvbHVtblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnNpemVUbyA9PT0gXCJwYXJlbnRcIikge1xyXG4gICAgICAgIC8vICAgICBsZXQgc3R5bGU6IGFueSA9IHtcclxuICAgICAgICAvLyAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAvLyAgICAgICAgIC8vcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAvLyAgICAgICAgIC8vIGxlZnQ6IDAsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyByaWdodDogMCxcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRvcDogMCxcclxuICAgICAgICAvLyAgICAgICAgIC8vIGJvdHRvbTogMCxcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAvLyBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyAgICAgc3R5bGUuZmxleERpcmVjdGlvbiA9IHRoaXMucHJvcHMudHlwZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvL292ZXJmbG93OiBcImF1dG9cIlxyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIC8vICAgICBzdHlsZS5mbGV4RGlyZWN0aW9uID0gdGhpcy5wcm9wcy50eXBlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2t9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0xheW91dC50c3hcbiAqKi8iLCJcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaXhlZFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRml4ZWQgZXh0ZW5kcyBDb21wb25lbnQ8Rml4ZWRQcm9wcywgYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiRml4ZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuICAgICAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIGZsZXg6IFwiMCAwIGF1dG9cIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9ID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRml4ZWQudHN4XG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmxleFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGbGV4IGV4dGVuZHMgQ29tcG9uZW50PEZsZXhQcm9wcyxhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJGbGV4XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBmbGV4OiBcIjFcIixcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9ID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRmxleC50c3hcbiAqKi8iLCJpbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7U3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RCdWh0YU9iamVjdDEgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCk0LDQvNC40LvQuNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCk0LDQvNC40LvQuNGPINCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQmNC80Y9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0JjQvNGPXCJcclxuICAgIH0pXHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQntGC0YfQtdGB0YLQstC+XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCe0YLRh9C10YHRgtCy0L4g0LDQsdC+0L3QtdC90YLQsFwiXHJcbiAgICB9KVxyXG4gICAgc3VyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50c1xuICoqLyIsIu+7v2ltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvLCBCYXNlUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZU9uQ2hhbmdlSGFuZGxlcn0gZnJvbSBcIi4uL2J1aHRhLWNvcmUvT2JzZXJ2YWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlc2lnbmVkT2JqZWN0IHtcclxuICAgIFxyXG4gICAgW25hbWU6IHN0cmluZ106IGFueTtcclxuXHJcbiAgICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwi0J7QsdGK0LXQutGCXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcblxyXG4gICAgICAgIGxldCBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uICguezEsfSlcXCgvO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gKGZ1bmNOYW1lUmVnZXgpLmV4ZWMoKHRoaXMpLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgJCR1bndhdGNoZWRQcm9wczogc3RyaW5nW10gPSBbXCJwcm9wZXJ0eUVkaXRvcnNcIiwgXCIkJHVud2F0Y2hlZFByb3BzXCJdO1xyXG4gICAgJCRjaGFuZ2VDb3VudDogbnVtYmVyO1xyXG4gICAgJCRvbkNoYW5nZTogT2JzZXJ2YWJsZU9uQ2hhbmdlSGFuZGxlcjxEZXNpZ25lZE9iamVjdD47XHJcblxyXG4gICAgLy8gaWQ6IHN0cmluZztcclxuICAgIC8vIG5hbWU6IHN0cmluZztcclxuICAgIC8vIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgLy8gaW5oZXJpdEZyb206IHN0cmluZztcclxuICAgIC8vIG1vZHVsZU5hbWU6IHN0cmluZztcclxuICAgIC8vIHJlZmVyZW5jZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgICAvL3ByaXZhdGUgc3RhdGljIHByb3BlcnR5RWRpdG9yczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBQcm9wZXJ0eUVkaXRvckluZm87IH0gPSB7fTtcclxuXHJcbiAgICAvLyBzdGF0aWMgcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWU6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5UGFnZTogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlHcm91cDogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlEZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogdHlwZW9mIERlc2lnbmVkT2JqZWN0LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yVHlwZTogdHlwZW9mIEJhc2VQcm9wZXJ0eUVkaXRvcixcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZTogdHlwZW9mIE9iamVjdCB8IHR5cGVvZiBTdHJpbmcpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IGluZm86IFByb3BlcnR5RWRpdG9ySW5mbyA9IHtcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5UGFnZTogcHJvcGVydHlQYWdlLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eUdyb3VwOiBwcm9wZXJ0eUdyb3VwLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eURlc2NyaXB0aW9uOiBwcm9wZXJ0eURlc2NyaXB0aW9uLFxyXG4gICAgLy8gICAgICAgICBvYmplY3RUeXBlOiBvYmplY3RUeXBlLFxyXG4gICAgLy8gICAgICAgICBlZGl0b3JUeXBlOiBlZGl0b3JUeXBlLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eVR5cGU6IHByb3BlcnR5VHlwZSxcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIERlc2lnbmVkT2JqZWN0LnByb3BlcnR5RWRpdG9yc1twcm9wZXJ0eU5hbWVdID0gaW5mbztcclxuICAgIC8vXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlclByb3BlcnR5RWRpdG9yIFwiICsgcHJvcGVydHlOYW1lKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0IHByb3BlcnR5RWRpdG9ycygpOnsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogUHJvcGVydHlFZGl0b3JJbmZvOyB9e1xyXG4gICAgLy8gICAgIHJldHVybiAoRGVzaWduZWRPYmplY3QgYXMgYW55KS4kJHByb3BlcnR5RWRpdG9ycztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9ycygpIHtcclxuICAgIC8vICAgICB0aGlzLnByb3BlcnR5RWRpdG9ycy5sZW5ndGggPSAwO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9yKHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eUVkaXRvcjogQmFzZVByb3BlcnR5RWRpdG9yKSB7XHJcbiAgICAvLyAgICAgcHJvcGVydHlFZGl0b3IuZGVzaWduZWRPYmplY3QgPSB0aGlzO1xyXG4gICAgLy8gICAgIHByb3BlcnR5RWRpdG9yLnByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZTtcclxuICAgIC8vICAgICB0aGlzLnByb3BlcnR5RWRpdG9ycy5wdXNoKHByb3BlcnR5RWRpdG9yKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBlbWl0VHNDb2RlKCk6IHN0cmluZyB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMucmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcnMoKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IHRzQ29kZSA9IG5ldyBUc0NvZGUodGhpcy5tb2R1bGVOYW1lLCB0aGlzLmNsYXNzTmFtZSwgdGhpcy5pbmhlcml0RnJvbSwgdGhpcy5yZWZlcmVuY2VzKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGVkaXRvci5kZXNpZ25lZE9iamVjdCA9IHRoaXM7XHJcbiAgICAvLyAgICAgICAgIGVkaXRvci5lbWl0VHNDb2RlKHRzQ29kZSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiB0c0NvZGUuZ2V0Q29kZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHRlc3RQcm9jMSA9ICgpID0+IHtcclxuXHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0Jhc2VQcm9wZXJ0eUVkaXRvciwgUHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0lucHV0VHlwZSwgSW5wdXR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdQcm9wZXJ0eUVkaXRvciBleHRlbmRzIEJhc2VQcm9wZXJ0eUVkaXRvciB7XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlID09PSBcIiArIHRoaXMucHJvcHMucHJvcGVydHlOYW1lICsgXCIgXCIgKyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGF1dG9Gb3JtQ29udHJvbFByb3BzOiBBdXRvRm9ybUNvbnRyb2xQcm9wcyA9IHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiB0aGlzLnByb3BzLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHRoaXMucHJvcHMuaW5wdXRUYWIsXHJcbiAgICAgICAgICAgIGlucHV0R3JvdXA6IHRoaXMucHJvcHMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5pbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyhhdXRvRm9ybUNvbnRyb2xQcm9wcyk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT17SW5wdXRUeXBlLlRleHR9XHJcbiAgICAgICAgICAgICAgICBiaW5kT2JqZWN0PXt0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPXt0aGlzLnByb3BzLnByb3BlcnR5TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdFZGl0b3JQYXJhbXMgZXh0ZW5kcyBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RyaW5nRWRpdG9yKHBhcmFtczogU3RyaW5nRWRpdG9yUGFyYW1zID0ge30pOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyh7dGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGNvbnN0cjp0YXJnZXQuY29uc3RydWN0b3J9KTtcclxuXHJcbiAgICAgICAgbGV0IHByb3BlcnR5RWRpdG9ySW5mbzogUHJvcGVydHlFZGl0b3JJbmZvID0ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogdGFyZ2V0LmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBlZGl0b3JUeXBlOiBTdHJpbmdQcm9wZXJ0eUVkaXRvcixcclxuICAgICAgICAgICAgcHJvcGVydHlUeXBlOiBTdHJpbmdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBfLmFzc2lnbihwcm9wZXJ0eUVkaXRvckluZm8sIHBhcmFtcyk7XHJcbiAgICAgICAgcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eUVkaXRvckluZm8pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3Ioe1xyXG4gICAgICAgIC8vICAgICBpbnB1dENhcHRpb246IHBhcmFtcy5pbnB1dENhcHRpb24sXHJcbiAgICAgICAgLy8gICAgIGlucHV0VGFiOiBwYXJhbXMuaW5wdXRUYWIsXHJcbiAgICAgICAgLy8gICAgIGlucHV0R3JvdXA6IHBhcmFtcy5pbnB1dEdyb3VwLFxyXG4gICAgICAgIC8vICAgICBpbnB1dERlc2NyaXB0aW9uOiBwYXJhbXMuaW5wdXREZXNjcmlwdGlvbixcclxuICAgICAgICAvLyAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgb2JqZWN0VHlwZTogdGFyZ2V0LmNvbnN0cnVjdG9yLFxyXG4gICAgICAgIC8vICAgICBlZGl0b3JUeXBlOiBTdHJpbmdQcm9wZXJ0eUVkaXRvcixcclxuICAgICAgICAvLyAgICAgcHJvcGVydHlUeXBlOiBTdHJpbmdcclxuICAgICAgICAvLyB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3IudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlFZGl0b3JJbmZvIGV4dGVuZHMgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICBvYmplY3RUeXBlOiB0eXBlb2YgRGVzaWduZWRPYmplY3Q7XHJcbiAgICBlZGl0b3JUeXBlOiB0eXBlb2YgQmFzZVByb3BlcnR5RWRpdG9yO1xyXG4gICAgcHJvcGVydHlUeXBlOiB0eXBlb2YgT2JqZWN0IHwgdHlwZW9mIFN0cmluZyB8IG51bGw7XHJcbiAgICBjdXN0b21QYXJhbXM/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVByb3BlcnR5RWRpdG9yUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+LCBQcm9wZXJ0eUVkaXRvckluZm8ge1xyXG4gICAgZGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQ8QmFzZVByb3BlcnR5RWRpdG9yUHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBkZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcblxyXG4gICAgLy8gZ2V0UHJvcGVydHlUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIFwiT2JqZWN0XCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVuZGVyRWRpdG9yKGluZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudCB7XHJcbiAgICAvLyAgICAgcmV0dXJuICg8c3Bhbj5lZGl0b3Igbm90IGRlZmluZWQ8L3NwYW4+KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiAoPHNwYW4+cHJvcGVydHkgZWRpdG9yIG5vdCBkZWZpbmVkPC9zcGFuPik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIGVtaXRUc0NvZGUodHNDb2RlOiBUc0NvZGUsIGFzc2lnbk5hbWU6IHN0cmluZykge1xyXG4gICAgLy8gICAgIHRzQ29kZS5hZGRQcm9wZXJ0eShhc3NpZ25OYW1lLCB0aGlzLnByb3BlcnR5TmFtZSwgdGhpcy5nZXRQcm9wZXJ0eVR5cGUoKSwgdGhpcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BlcnR5TmFtZV0pO1xyXG4gICAgLy8gfVxyXG5cclxufVxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iLCJpbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IoZWRpdG9yOiBQcm9wZXJ0eUVkaXRvckluZm8pIHtcclxuXHJcbiAgICBsZXQgb2JqVHlwZTogYW55ID0gZWRpdG9yLm9iamVjdFR5cGU7XHJcblxyXG4gICAgaWYgKCFvYmpUeXBlLiQkcHJvcGVydHlFZGl0b3JzKVxyXG4gICAgICAgIG9ialR5cGUuJCRwcm9wZXJ0eUVkaXRvcnMgPSBbXTtcclxuXHJcbiAgICBvYmpUeXBlLiQkcHJvcGVydHlFZGl0b3JzLnB1c2goZWRpdG9yKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwicmVnaXN0ZXJQcm9wZXJ0eUVkaXRvciBcIiArIGVkaXRvci5wcm9wZXJ0eU5hbWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3IpO1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvci50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcblxyXG5leHBvcnQgZW51bSBJbnB1dFR5cGUge1RleHQsIE51bWJlciwgRGF0ZSB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+LCBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICB0eXBlOiBJbnB1dFR5cGU7XHJcbiAgICBiaW5kT2JqZWN0OiBhbnk7XHJcbiAgICBiaW5kUHJvcE5hbWU6IHN0cmluZztcclxuICAgIG1heFdpZHRoPzogbnVtYmVyO1xyXG4gICAgb25DbGljaz86IFJlYWN0LlJlYWN0RXZlbnRIYW5kbGVyO1xyXG4gICAgcGxhY2VIb2xkZXI/OiBzdHJpbmc7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SW5wdXRQcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSW5wdXRQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBJbnB1dFR5cGUuVGV4dDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRleHQoKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93ICBcIklucHV0LnJlbmRlcigpOj0+IHVua25vd24gSW5wdXRUeXBlICdcIiArIHRoaXMucHJvcHMudHlwZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXh0ID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdCAmJiB0aGlzLnByb3BzLmJpbmRQcm9wTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmJpbmRPYmplY3RbdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBcIjx1bmJpbmRlZD5cIjtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdCAmJiB0aGlzLnByb3BzLmJpbmRQcm9wTmFtZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXSA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlclRleHQoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJpbnB1dFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh0aGlzLnByb3BzLnN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRUZXh0KCl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0LnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgUHJvcGVydHlFZGl0b3JJbmZvLCBCYXNlUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuLi9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7Z2V0UHJvcGVydHlFZGl0b3JzfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL2dldFByb3BlcnR5RWRpdG9yc1wiO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRm9ybS9Gb3JtXCI7XHJcbmltcG9ydCB7QXV0b0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuaW1wb3J0IHtTbmFwc2hvdH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvU25hcHNob3RcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7RGVlcENsb25lfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9EZWVwQ2xvbmVcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdERlc2lnbmVyUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuICAgIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcclxuICAgIG9uU2F2ZUNoYW5nZXM/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25DYW5jZWxDaGFuZ2VzPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdERlc2lnbmVyIGV4dGVuZHMgQ29tcG9uZW50PE9iamVjdERlc2lnbmVyUHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IE9iamVjdERlc2lnbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgc25hcHNob3Q6IFNuYXBzaG90ID0gbmV3IFNuYXBzaG90KCk7XHJcblxyXG4gICAgbmVlZFRvU2F2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY2xvbmVkRGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG4gICAgb2JzZXJ2YWJsZURlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMubmVlZFRvU2F2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNsb25lZERlc2lnbmVkT2JqZWN0ID0gRGVlcENsb25lPERlc2lnbmVkT2JqZWN0Pih0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbG9uZWRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jbG9uZWREZXNpZ25lZE9iamVjdCk7XHJcblxyXG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZURlc2lnbmVkT2JqZWN0ID0gT2JzZXJ2YWJsZTxEZXNpZ25lZE9iamVjdD4odGhpcy5jbG9uZWREZXNpZ25lZE9iamVjdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5lZWRUb1NhdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLmRpZE1vdW50KCk7XHJcbiAgICAgICAgLy90aGlzLnNuYXBzaG90LnNhdmVPYmplY3QodGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCwgXCJyb290XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb3BlcnR5RGVzaWduZXJzKCk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgZ2V0UHJvcGVydHlFZGl0b3JzKHRoaXMub2JzZXJ2YWJsZURlc2lnbmVkT2JqZWN0KS5mb3JFYWNoKChwcm9wSW5mbzogUHJvcGVydHlFZGl0b3JJbmZvLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocHJvcEluZm8pO1xyXG4gICAgICAgICAgICBsZXQgZWRpdG9yUHJvcHM6IEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzICYgUHJvcGVydHlFZGl0b3JJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgZGVzaWduZWRPYmplY3Q6IHRoaXMub2JzZXJ2YWJsZURlc2lnbmVkT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgLy9wcm9wZXJ0eUVkaXRvckluZm86IHByb3BJbmZvLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vINGN0YLQviDQuNC3IHByb3BJbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8sINC30LDQv9C+0LvRj9C10YLRgdGPINC00LDQu9C10LUg0YfQtdGA0LXQtyBfLmFzc2lnblxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogRGVzaWduZWRPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBlZGl0b3JUeXBlOiBCYXNlUHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIF8uYXNzaWduKGVkaXRvclByb3BzLCBwcm9wSW5mbyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVkaXRvclByb3BzLmlucHV0Q2FwdGlvbilcclxuICAgICAgICAgICAgICAgIGVkaXRvclByb3BzLmlucHV0Q2FwdGlvbiA9IGVkaXRvclByb3BzLnByb3BlcnR5TmFtZTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlZGl0b3JQcm9wcyk7XHJcblxyXG4gICAgICAgICAgICByZXQucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BJbmZvLmVkaXRvclR5cGUsIGVkaXRvclByb3BzLCB7fSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNhdmVDaGFuZ2VzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZS1jaGFuZ2VzXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCk7XHJcbiAgICAgICAgXy5hc3NpZ24odGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCwgdGhpcy5vYnNlcnZhYmxlRGVzaWduZWRPYmplY3QpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU2F2ZUNoYW5nZXMpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TYXZlQ2hhbmdlcygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDYW5jZWxDaGFuZ2VzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FuY2VsLWNoYW5nZXNcIik7XHJcbiAgICAgICAgLy90aGlzLnNuYXBzaG90LnJlc3RvcmVPYmplY3QodGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCwgXCJyb290XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2FuY2VsQ2hhbmdlcylcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNhbmNlbENoYW5nZXMoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhhbmRsZUdldE5lZWRUb1NhdmUgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMubmVlZFRvU2F2ZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJvYmplY3QtZGVzaWduZXJcIik7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7b25DaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2V9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEF1dG9Gb3JtXHJcbiAgICAgICAgICAgICAgICBzaXplVG89XCJwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgb25TYXZlQ2hhbmdlcz17dGhpcy5oYW5kbGVTYXZlQ2hhbmdlc31cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsQ2hhbmdlcz17dGhpcy5oYW5kbGVDYW5jZWxDaGFuZ2VzfVxyXG4gICAgICAgICAgICAgICAgbmVlZFRvU2F2ZT17dGhpcy5uZWVkVG9TYXZlfVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICBPYmplY3QgZGVzaWduZXJcclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclByb3BlcnR5RGVzaWduZXJzKCl9XHJcbiAgICAgICAgICAgIDwvQXV0b0Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyLnRzeFxuICoqLyIsImltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlFZGl0b3JzKG9iajogRGVzaWduZWRPYmplY3QpOiBQcm9wZXJ0eUVkaXRvckluZm9bXSB7XHJcblxyXG4gICAgbGV0IGVkaXRvcnMgPSAob2JqLmNvbnN0cnVjdG9yIGFzIGFueSkuJCRwcm9wZXJ0eUVkaXRvcnMgYXMgUHJvcGVydHlFZGl0b3JJbmZvW107XHJcblxyXG4gICAgZWRpdG9ycyA9IGVkaXRvcnMuZmlsdGVyKChlZHQpID0+IG9iaiBpbnN0YW5jZW9mIGVkdC5vYmplY3RUeXBlKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0UHJvcGVydHlFZGl0b3JzXCIpIDtcclxuICAgIC8vY29uc29sZS5sb2coZWRpdG9ycyk7XHJcbiAgICByZXR1cm4gZWRpdG9ycztcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL2dldFByb3BlcnR5RWRpdG9ycy50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1RhYnMvVGFic1wiO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gXCIuLi9Gb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0xheW91dFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZsZXhcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICBpbnB1dENhcHRpb24/OiBzdHJpbmc7XHJcbiAgICBpbnB1dFRhYj86IHN0cmluZztcclxuICAgIGlucHV0R3JvdXA/OiBzdHJpbmc7XHJcbiAgICBpbnB1dERlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9Gb3JtUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGlucHV0cz86IEF1dG9Gb3JtQ29udHJvbFByb3BzW107XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxuICAgIG5lZWRUb1NhdmU/OiBib29sZWFuO1xyXG4gICAgb25TYXZlQ2hhbmdlcz86ICgpID0+IHZvaWQ7XHJcbiAgICBvbkNhbmNlbENoYW5nZXM/OiAoKSA9PiB2b2lkO1xyXG4gICAgLy9vbkdldE5lZWRUb1NhdmU/OiAoKSA9PiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBlbXB0eVRhYk5hbWUgPSBcItC30LDQutC70LDQtNC60LBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvRm9ybSBleHRlbmRzIENvbXBvbmVudDxBdXRvRm9ybVByb3BzLCBhbnk+IHtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJbnB1dHMoKTogQXV0b0Zvcm1Db250cm9sUHJvcHNbXSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbiBhcyBSZWFjdC5SZWFjdE5vZGUpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGM6IGFueSkgPT4gYy5wcm9wcylcclxuICAgICAgICAgICAgLm1hcCgoYzogYW55KSA9PiBjLnByb3BzKSBhcyBBdXRvRm9ybUNvbnRyb2xQcm9wc1tdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFic0xpc3QoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBfLnVuaXEoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRzKCkubWFwPHN0cmluZz4oKGlucHV0OiBBdXRvRm9ybUNvbnRyb2xQcm9wcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmlucHV0VGFiIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYklucHV0cyh0YWI6IHN0cmluZyk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4gYXMgUmVhY3QuUmVhY3ROb2RlKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChjOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjLnByb3BzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKCgoYy5wcm9wcyBhcyBBdXRvRm9ybUNvbnRyb2xQcm9wcykuaW5wdXRUYWIgfHwgXCJcIikgPT09IHRhYik7XHJcbiAgICAgICAgICAgIH0pIGFzIEpTWC5FbGVtZW50W107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJUYWIodGFiOiBzdHJpbmcpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxGb3JtIHNpemVUbz17dGhpcy5wcm9wcy5zaXplVG99Pnt0aGlzLmdldFRhYklucHV0cyh0YWIpfTwvRm9ybT47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAgcmVuZGVyVGFicygpOiBKU1guRWxlbWVudCB8IG51bGwge1xyXG4gICAgICAgIGxldCB0YWJzID0gdGhpcy5nZXRUYWJzTGlzdCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGFicyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdldElucHV0cygpKTtcclxuXHJcbiAgICAgICAgaWYgKHRhYnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0YWJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUYWIodGFic1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICBzaXplVG89XCJwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uV2lsbE1vdW50PXsgKHN0YXRlKSA9PiB7IGNvbnNvbGUubG9nKFwib25XaWxsTW91bnQtYXV0by1mb3JtLXRhYnNcIik7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VBY3RpdmVUYWI9eyAoc3RhdGUsIHRhYikgPT4geyBjb25zb2xlLmxvZyhcInNldEFjdGl2ZVRhYlwiKTtjb25zb2xlLmxvZyh0YWIpO319XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0YWJzLm1hcDxKU1guRWxlbWVudD4oKHRhYiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIga2V5PXtpbmRleH0gdGl0bGU9e3RhYiA9PT0gXCJcIiA/IGVtcHR5VGFiTmFtZSA6IHRhYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFiKHRhYil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNhdmVCdXR0b25DbGljayA9IChzZW5kZXI6IEJ1dHRvbiwgZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU2F2ZUNoYW5nZXMpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TYXZlQ2hhbmdlcygpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50V2luZG93KCkhLmNsb3NlKCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2sgPSAoc2VuZGVyOiBCdXR0b24sIGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNhbmNlbENoYW5nZXMpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWxDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRXaW5kb3coKSEuY2xvc2UoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImF1dG8tZm9ybVwiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItYXV0by1mb3JtXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGU6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJjb2x1bW5cIiBzaXplVG89XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwiYXV0by1mb3JtLWZvb3RlclwiIHR5cGU9XCJyb3dcIiBzaXplVG89XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2aXNpYmxlPXsgdGhpcy5wcm9wcy5uZWVkVG9TYXZlIH0gY2xhc3NOYW1lPVwiaXMtc3VjY2VzcyBpcy1vdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5oYW5kbGVTYXZlQnV0dG9uQ2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDYW5jZWxCdXR0b25DbGljayB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uZWVkVG9TYXZlID8gXCLQntGC0LzQtdC90LBcIiA6IFwi0JfQsNC60YDRi9GC0YxcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYnNQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPFRhYnNTdGF0ZT4ge1xyXG4gICAgb25DaGFuZ2VBY3RpdmVUYWI/OiAoc3RhdGU6IFRhYnNTdGF0ZSwgYWN0aXZlVGFiOiBUYWJJbmZvKSA9PiB2b2lkO1xyXG4gICAgc2l6ZVRvOiBcInBhcmVudFwiIHwgXCJjb250ZW50XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJzU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxUYWJzUHJvcHM+IHtcclxuICAgIHRhYnM6IFRhYkluZm9bXSA9IFtdO1xyXG5cclxuICAgIHNldEFjdGl2ZVRhYih0YWJJbmZvOiBUYWJJbmZvKSB7XHJcbiAgICAgICAgaWYgKCF0YWJJbmZvLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpPT50YWIuaXNBY3RpdmUgPSBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRhYkluZm8uaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50LnByb3BzLm9uQ2hhbmdlQWN0aXZlVGFiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucHJvcHMub25DaGFuZ2VBY3RpdmVUYWIodGhpcywgdGFiSW5mbyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFiSW5mbyB7XHJcbiAgICB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50PFRhYnNQcm9wcywgVGFic1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVGFic1Byb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgVGFic1N0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlSW5pdFRhYnNTdGF0ZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHRhYlRhZ3MgPSB0aGlzLmdldENoaWxkcmVuKFRhYik7XHJcblxyXG4gICAgICAgIHRhYlRhZ3MuZm9yRWFjaCgodGFiVGFnLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhYlByb3BzID0gdGFiVGFnLnByb3BzIGFzIFRhYlByb3BzO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhYkluZm86IFRhYkluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGFiUHJvcHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0YWJQcm9wcy5jaGlsZHJlbiBhcyBSZWFjdC5SZWFjdE5vZGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogaW5kZXggPT09IDBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWJzLnB1c2godGFiSW5mbyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbml0VGFic1N0YXRlKCk7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcblxyXG4gICAgICAgIC8vIGxldCB0YWJUYWdzID0gdGhpcy5nZXRDaGlsZHJlbihUYWIpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdGFiVGFncy5mb3JFYWNoKCh0YWJUYWcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IHRhYlByb3BzID0gdGFiVGFnLnByb3BzIGFzIFRhYlByb3BzO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGxldCB0YWJJbmZvOiBUYWJJbmZvID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGl0bGU6IHRhYlByb3BzLnRpdGxlLFxyXG4gICAgICAgIC8vICAgICAgICAgY29udGVudDogdGFiUHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgLy8gICAgICAgICBpc0FjdGl2ZTogaW5kZXggPT09IDBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHRoaXMudGFicy5wdXNoKHRhYkluZm8pO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gb3BlbldpbmRvdyh3aW46IEpTWC5FbGVtZW50KTogV2luZG93SW5mbyB7XHJcbiAgICAvLyAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyAgICAgbW9kYWwuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxMik7XHJcbiAgICAvLyAgICAgLy8g0LTQu9GPINC/0L7QtNC90Y/RgtC40Y8g0LLQstC10YDRhSDQv9GA0Lgg0LDQutGC0LjQstCw0YbQuNC4INC+0LrQvdCwXHJcbiAgICAvLyAgICAgbW9kYWwub25jbGljayA9IChlKT0+IHtcclxuICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChtb2RhbC5pZCAhPT0gXCJkZWxldGVkXCIpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIC8vICAgICAgICAgfSwgMSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgd2luSW5zdGFuY2UgPSBSZWFjdERPTS5yZW5kZXIod2luLCBtb2RhbCkgYXMgV2luZG93O1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgaW5mbzogV2luZG93SW5mbyA9IHtcclxuICAgIC8vICAgICAgICAgaWQ6IG1vZGFsLmlkLFxyXG4gICAgLy8gICAgICAgICB3aW5JbnN0YW5jZTogd2luSW5zdGFuY2UsXHJcbiAgICAvLyAgICAgICAgIGRpdldyYXBwZXI6IG1vZGFsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLnB1c2goaW5mbyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiBpbmZvO1xyXG4gICAgLy8gfTtcclxuICAgIC8vXHJcbiAgICAvLyBjbG9zZVdpbmRvdyh3aW46IFdpbmRvdykge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLndpbmRvd3MuZm9yRWFjaCgoaW5mbywgaW5kZXgpPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoaW5mby53aW5JbnN0YW5jZSA9PT0gd2luKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpbmZvLmRpdldyYXBwZXIuaWQgPSBcImRlbGV0ZWRcIjtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZChpbmZvLmRpdldyYXBwZXIpO1xyXG4gICAgLy8gICAgICAgICAgICAgZGVsZXRlIHRoaXMud2luZG93c1tpbmRleF07XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhY3RpdmF0ZVdpbmRvdyh3aW46IFdpbmRvdykge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLndpbmRvd3MuZm9yRWFjaCgoaW5mbywgaW5kZXgpPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoaW5mby53aW5JbnN0YW5jZSA9PT0gd2luKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5mby5kaXZXcmFwcGVyKTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICByZW5kZXJUYWJzKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGxpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50YWJzLmZvckVhY2goKHRhYkluZm86IFRhYkluZm8sIGluZGV4OiBudW1iZXIpPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRhYkluZm8uaXNBY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogbnVsbDtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPVxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsgKGUpPT57IHRoaXMuc3RhdGUuc2V0QWN0aXZlVGFiKHRhYkluZm8pfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+e3RhYkluZm8udGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgbGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUGFuZWxzKCk6IEpTWC5FbGVtZW50W10ge1xyXG5cclxuICAgICAgICBsZXQgbGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnRhYnMuZm9yRWFjaCgodGFiSW5mbzogVGFiSW5mbywgaW5kZXg6IG51bWJlcik9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3R5bGU6IGFueSA9IHtwYWRkaW5nVG9wOiAxMCwgcGFkZGluZ0JvdHRvbTogMTB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAhdGFiSW5mby5pc0FjdGl2ZSA/IFwiaXMtaGlkZGVuXCIgOiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWJJbmZvLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgbGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIChcclxuICAgICAgICAvLyAgICAgPGRpdiByZWY+XHJcbiAgICAgICAgLy8gICAgICAgICB7bGlzdH1cclxuICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJhdXRvXCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCBzaXplVG89e3RoaXMucHJvcHMuc2l6ZVRvfSB0eXBlPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZTogYW55KSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH0gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIDxGaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWJzKCl9XHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUGFuZWxzKCl9XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYlByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWIgZXh0ZW5kcyBDb21wb25lbnQ8VGFiUHJvcHMsYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVGFiUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RhYnMvVGFicy50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7SW5wdXREaXZpZGVyfSBmcm9tIFwiLi4vSW5wdXREaXZpZGVyL0lucHV0RGl2aWRlclwiO1xyXG5pbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge0lucHV0UHJvcHN9IGZyb20gXCIuLi9JbnB1dC9JbnB1dFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHNpemVUbzogXCJwYXJlbnRcIiB8IFwiY29udGVudFwiO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnQ8Rm9ybVByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBGb3JtUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlckNvbnRyb2xzKCk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCBsaXN0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbiBhcyBSZWFjdC5SZWFjdE5vZGUpLmZvckVhY2goKGNvbnRyb2w6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb250cm9sUHJvcHMgPSBjb250cm9sLnByb3BzIGFzIElucHV0UHJvcHM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xQcm9wcyAmJiAoY29udHJvbFByb3BzLmlucHV0Q2FwdGlvbiB8fCBjb250cm9sUHJvcHMuYmluZFByb3BOYW1lKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGNvbnRyb2wudHlwZSA9PT0gSW5wdXREaXZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSW5wdXREaXZpZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiY29udHJvbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXB0aW9uXCI+e2NvbnRyb2xQcm9wcy5pbnB1dENhcHRpb24gPyBjb250cm9sUHJvcHMuaW5wdXRDYXB0aW9uIDogY29udHJvbFByb3BzLmJpbmRQcm9wTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIiwgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiY29udHJvbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIxMFwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIiwgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiZm9ybVwiKTtcclxuICAgICAgICAvL3RoaXMuYWRkU3R5bGVzKHttYXJnaW46MTB9KTtcclxuXHJcbiAgICAgICAgaWYgKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbiBhcyBSZWFjdC5SZWFjdE5vZGUpLmxlbmd0aCA9PT0gMSkgeyAvLyDQvtC00LjQvSDQutC+0L3RgtGA0L7QuyDQsiDRhNC+0YDQvNC1LCDQvtCx0YvRh9C90L4gdHJlZWxpc3RcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNpemVUbz09PVwicGFyZW50XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHsgd2lkdGg6IFwiaW5oZXJpdFwifSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIHJlZj17IChlKSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH0gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udHJvbHMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtWaXNpYmxlUGx1Z2luLCBWaXNpYmxlUGx1Z2luUHJvcHMsIFZpc2libGVQbHVnaW5TdGF0ZX0gZnJvbSBcIi4uLy4uL1BsdWdpbnMvVmlzaWJsZVBsdWdpblwiO1xyXG5pbXBvcnQge09uQ2xpY2tQbHVnaW4sIE9uQ2xpY2tQbHVnaW5Qcm9wc30gZnJvbSBcIi4uLy4uL1BsdWdpbnMvT25DbGlja1BsdWdpblwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8QnV0dG9uU3RhdGU+LCBWaXNpYmxlUGx1Z2luUHJvcHMsIE9uQ2xpY2tQbHVnaW5Qcm9wcyB7XHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxCdXR0b25Qcm9wcz4gaW1wbGVtZW50cyBWaXNpYmxlUGx1Z2luU3RhdGUge1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuLy9AVmlzaWJsZVBsdWdpblxyXG4vL0BPbkNsaWNrUGx1Z2luXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQ8QnV0dG9uUHJvcHMsIEJ1dHRvblN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQnV0dG9uUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBCdXR0b25TdGF0ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChuZXcgVmlzaWJsZVBsdWdpbih0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLnB1c2gobmV3IE9uQ2xpY2tQbHVnaW4odGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGEgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeFxuICoqLyIsImltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi9QbHVnaW5cIjtcclxuaW1wb3J0IHtDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZpc2libGVQbHVnaW5Qcm9wcyB7XHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcclxuICAgIGRlZmF1bHRWaXNpYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaXNpYmxlUGx1Z2luU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxWaXNpYmxlUGx1Z2luUHJvcHM+IHtcclxuICAgIHZpc2libGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZpc2libGVQbHVnaW4gZXh0ZW5kcyBDb21wb25lbnRQbHVnaW48VmlzaWJsZVBsdWdpblByb3BzLCBWaXNpYmxlUGx1Z2luU3RhdGU+IHtcclxuICAgIC8vIGNvbnN0cnVjdG9yKG93bmVyOiBhbnkpIHtcclxuICAgIC8vICAgICBzdXBlcihvd25lcik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ2aXNpYmxlIHdpbGxNb3VudCgpXCIpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzLmRlZmF1bHRWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlZpc2libGVQbHVnaW46IG9ubHkgb25lIG9mIHRoZSBwcm9wZXJ0aWVzIG11c3QgYmUgc3BlY2lmaWVkICd2aXNpYmxlJyBvciAnZGVmYXVsdFZpc2libGUnXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRoaXMucHJvcHMudmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5kZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRoaXMucHJvcHMuZGVmYXVsdFZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5vd25lci50b2dnbGVDbGFzc05hbWUoIXRoaXMuc3RhdGUudmlzaWJsZSwgXCJpcy1oaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFZpc2libGVQbHVnaW5Qcm9wcykge1xyXG4gICAgICAgIC8vbGV0IHN0YXRlID0gdGhpcy5vd25lci5zdGF0ZSBhcyBWaXNpYmxlUGx1Z2luU3RhdGU7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy52aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gbmV4dFByb3BzLnZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm93bmVyLnRvZ2dsZUNsYXNzTmFtZSghdGhpcy5zdGF0ZS52aXNpYmxlLCBcImlzLWhpZGRlblwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBWaXNpYmxlUGx1Z2luKHRhcmdldDogYW55KSB7XHJcbi8vICAgICB0YXJnZXQucGx1Z2lucy5wdXNoKFZpc2libGVQbHVnaW5DbGFzcyk7XHJcbi8vICAgICByZXR1cm4gdGFyZ2V0O1xyXG4vLyB9XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL1Zpc2libGVQbHVnaW4udHNcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQbHVnaW48UCxTIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8UD4+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb3duZXI6IENvbXBvbmVudDxQLCBTPikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaWRNb3VudCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB3aWxsTW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFVubW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFApIHtcclxuICAgIH1cclxuXHJcbiAgICBkaWRVcGRhdGUocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdGUoKTogUyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXIuc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BzKCk6IFAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyLnByb3BzO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvUGx1Z2luLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi9QbHVnaW5cIjtcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgb25DbGlja0V2ZW50ID0gKHNlbmRlcjogQ29tcG9uZW50PGFueSxhbnk+LCBldmVudDogUmVhY3QuTW91c2VFdmVudCk9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPbkNsaWNrUGx1Z2luUHJvcHMge1xyXG4gICAgb25DbGljaz86IG9uQ2xpY2tFdmVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9uQ2xpY2tQbHVnaW4gZXh0ZW5kcyBDb21wb25lbnRQbHVnaW48T25DbGlja1BsdWdpblByb3BzLCBhbnk+IHtcclxuXHJcbiAgICBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMub3duZXIsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMub3duZXIuYWRkUHJvcHMoe29uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogT25DbGlja1BsdWdpblByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIHRoaXMub3duZXIuYWRkUHJvcHMoe29uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL09uQ2xpY2tQbHVnaW4udHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHt0aHJvd0Vycm9yfSBmcm9tIFwiLi9FcnJvclwiO1xyXG5cclxuLy8g0L7QsdGK0LXQutGCINC80L7QttC10YIg0LjQvNC10YLRjCDQvNCw0YHRgdC40LLRizpcclxuLy8gJCR1bnNhdmVkUHJvcHMgLSDQuNC80LXQvdCwINGB0LLQvtC50YHRgtCyLCDQutC+0YLQvtGA0YvQtSDQvdC1INGB0L7RhdGA0LDQvdGP0Y7RgtGB0Y9cclxuLy8gJCRzYXZlZEJ5UmVmUHJvcHMgLSDQuNC80LXQvdCwINGB0LLQvtC50YHRgtCyLCDQutC+0YLQvtGA0YvQtSDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPINC60LDQuiDRgdGB0YvQu9C60LhcclxuLy8g0L3QtSDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPINGB0LLQvtC50YHRgtCy0LAsINC60L7RgtC+0YDRi9C1INC90LDRh9C40L3QsNGO0YLRgdGPINGBICQkXHJcbmV4cG9ydCBjbGFzcyBTbmFwc2hvdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzbmFwc2hvdHM6IEludGVybmFsU25hcHNob3RbXSA9IFtdO1xyXG5cclxuICAgIHNhdmVPYmplY3Qob2JqOiBPYmplY3QgfCBBcnJheTxhbnk+LCBzbmFwc2hvdE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzbmFwID0gbmV3IEludGVybmFsU25hcHNob3QoKTtcclxuICAgICAgICBzbmFwLm9iaiA9IG9iajtcclxuICAgICAgICBzbmFwLnNuYXBzaG90TmFtZSA9IHNuYXBzaG90TmFtZTtcclxuICAgICAgICBzbmFwLnNhdmVQcm9wcygpO1xyXG4gICAgICAgIHRoaXMuc25hcHNob3RzLnB1c2goc25hcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZU9iamVjdChvYmo6IE9iamVjdCB8IGFueVtdLCBzbmFwc2hvdE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzbmFwID0gdGhpcy5nZXRJbnRlcm5hbFNuYXBzaG90KG9iaiwgc25hcHNob3ROYW1lKTtcclxuICAgICAgICBpZiAoc25hcCkge1xyXG4gICAgICAgICAgICBpZiAoXy5pc0FycmF5KG9iaikpIHtcclxuICAgICAgICAgICAgICAgIG9iai5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgc25hcC5hcnJheUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChvYmogYXMgYW55KS5wdXNoKGVsZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNuYXAub2JqUHJvcHMuZm9yRWFjaCgocHJvcCkgPT4gcHJvcC5yZXN0b3JlVmFsdWUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJbnRlcm5hbFNuYXBzaG90KG9iajogT2JqZWN0IHwgQXJyYXk8YW55Piwgc25hcHNob3ROYW1lOiBzdHJpbmcpOiBJbnRlcm5hbFNuYXBzaG90IHtcclxuICAgICAgICBsZXQgcmV0ID0gdGhpcy5zbmFwc2hvdHMuZmlsdGVyKChzbmFwKSA9PiBzbmFwLm9iaiA9PT0gb2JqICYmIHNuYXAuc25hcHNob3ROYW1lID09PSBzbmFwc2hvdE5hbWUpO1xyXG4gICAgICAgIGlmIChyZXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93RXJyb3IoXCJTbmFwc2hvdCAnXCIgKyBzbmFwc2hvdE5hbWUgKyBcIicgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBcImZha2VcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0WzBdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJbnRlcm5hbFNuYXBzaG90IHtcclxuICAgIG9iajogYW55O1xyXG4gICAgc25hcHNob3ROYW1lOiBzdHJpbmc7XHJcbiAgICBvYmpQcm9wczogU25hcHNob3RQcm9wZXJ0eVtdID0gW107XHJcbiAgICBhcnJheUVsZW1lbnRzOiBhbnlbXTtcclxuICAgIHJlZnNDbG9uZXM6IGFueSA9IHt9O1xyXG5cclxuICAgIHNhdmVQcm9wcygpIHtcclxuICAgICAgICBpZiAoXy5pc0FycmF5KHRoaXMub2JqKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5RWxlbWVudHMgPSB0aGlzLm9iai5tYXAoKHY6IGFueSkgPT4gdGhpcy5jbG9uZVZhbHVlKHYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqUHJvcHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gdGhpcy5vYmopIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgcHJvcE5hbWUuc3Vic3RyaW5nKDAsIDIpICE9PSBcIiQkXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSBuZXcgU25hcHNob3RQcm9wZXJ0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAucHJvcE5hbWUgPSBwcm9wTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBwLnNuYXBzaG90ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBwLnNhdmVWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqUHJvcHMucHVzaChwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9uZVZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5vYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tYXAoKHY6IGFueSkgPT4gdGhpcy5jbG9uZVZhbHVlKHYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXy5pc0Z1bmN0aW9uKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8uaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIC8vbGV0IHJlZnNJbmRleCA9IHRoaXMuc25hcHNob3QucmVmcy5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLiQkdW5pcXVlT2JqZWN0SWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZzQ2xvbmVzW3ZhbHVlLiQkdW5pcXVlT2JqZWN0SWRdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbHVlQ29weSA9IG5ldyB2YWx1ZS5jb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB2YWx1ZUNvcHkuJCRpc0Nsb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFsdWUuJCR1bmlxdWVPYmplY3RJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDE2KTtcclxuICAgICAgICAgICAgdGhpcy5yZWZzQ2xvbmVzW3ZhbHVlLiQkdW5pcXVlT2JqZWN0SWRdID0gdmFsdWVDb3B5O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgcHJvcE5hbWUuc3Vic3RyaW5nKDAsIDIpICE9PSBcIiQkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvcHlbcHJvcE5hbWVdID0gdGhpcy5jbG9uZVZhbHVlKHZhbHVlW3Byb3BOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlQ29weTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNuYXBzaG90UHJvcGVydHkge1xyXG4gICAgc25hcHNob3Q6IEludGVybmFsU25hcHNob3Q7XHJcbiAgICBwcm9wTmFtZTogc3RyaW5nO1xyXG4gICAgcHJvcFZhbHVlOiBhbnk7XHJcblxyXG4gICAgc2F2ZVZhbHVlKCkge1xyXG4gICAgICAgIHRoaXMucHJvcFZhbHVlID0gdGhpcy5zbmFwc2hvdC5jbG9uZVZhbHVlKHRoaXMuc25hcHNob3Qub2JqW3RoaXMucHJvcE5hbWVdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlVmFsdWUoKSB7XHJcbiAgICAgICAgdGhpcy5zbmFwc2hvdC5vYmpbdGhpcy5wcm9wTmFtZV0gPSB0aGlzLnByb3BWYWx1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NuYXBzaG90LnRzXG4gKiovIiwiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHt0aHJvd0Vycm9yfSBmcm9tIFwiLi9FcnJvclwiO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIE9ic2VydmFibGVPbkNoYW5nZUhhbmRsZXI8VD49ICh0YXJnZXQ6IGFueSwgcDogUHJvcGVydHlLZXksIG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcblxyXG4vLyDQvdC1INGB0L7RhdGA0LDQvdGP0Y7RgtGB0Y8g0YHQstC+0LnRgdGC0LLQsCwg0LrQvtGC0L7RgNGL0LUg0L3QsNGH0LjQvdCw0Y7RgtGB0Y8g0YEgJCRcclxuZXhwb3J0IGZ1bmN0aW9uIE9ic2VydmFibGU8VCBleHRlbmRzIERlc2lnbmVkT2JqZWN0PihvYmo6IERlc2lnbmVkT2JqZWN0LCBvbkNoYW5nZUNhbGxiYWNrPzogT2JzZXJ2YWJsZU9uQ2hhbmdlSGFuZGxlcjxUPik6IFQge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgdGhyb3dFcnJvcihcIk9ic2VydmFibGUoKTogb2JqID09PSBudWxsIFwiKTsgXHJcblxyXG4gICAgbGV0IHByb3h5SGFuZGxlciA9IHtcclxuICAgICAgICAgICAgc2V0OiAodGFyZ2V0OiBULCBwOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSwgcmVjZWl2ZXI6IGFueSk6IGFueSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocC50b1N0cmluZygpLnN1YnN0cigwLCAyKSAhPT0gXCIkJFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuJCRjaGFuZ2VDb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LiQkY2hhbmdlQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LiQkY2hhbmdlQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LiQkb25DaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC4kJG9uQ2hhbmdlKHRhcmdldCwgcCwgdGFyZ2V0W3BdLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NBcnJheSh2YWx1ZSwgcHJveHlIYW5kbGVyLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfLmlzT2JqZWN0KHZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc09iamVjdCh2YWx1ZSwgcHJveHlIYW5kbGVyLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7b2JzZXJ2YWJsZVNldFRhZ2V0OiB0YXJnZXQsIHByb3A6IHAgLCB2YWx1ZTogdmFsdWV9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldFtwXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG5cclxuICAgIHByb2Nlc3NPYmplY3Qob2JqLCBwcm94eUhhbmRsZXIsIG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgbGV0IG9ic2VydmFibGVPYmplY3QgPSBuZXcgUHJveHkob2JqLCBwcm94eUhhbmRsZXIpIGFzIFQ7XHJcblxyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPYmplY3Q7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzT2JqZWN0KG9iajogYW55LCBwcm94eUhhbmRsZXI6IGFueSwgb25DaGFuZ2VDYWxsYmFjaz86IE9ic2VydmFibGVPbkNoYW5nZUhhbmRsZXIgPCBhbnkgPikge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIG9iai4kJG9uQ2hhbmdlID0gb25DaGFuZ2VDYWxsYmFjaztcclxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmIHByb3BOYW1lLnN1YnN0cmluZygwLCAyKSAhPT0gXCIkJFwiKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvcFZhbHVlOiBhbnkgPSBvYmpbcHJvcE5hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uaXNBcnJheShwcm9wVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wVmFsdWUuJCRjaGFuZ2VDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzQXJyYXkocHJvcFZhbHVlLCBwcm94eUhhbmRsZXIsIG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgb2JqW3Byb3BOYW1lXSA9IG5ldyBQcm94eShwcm9wVmFsdWUsIHByb3h5SGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoXy5pc09iamVjdChwcm9wVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wVmFsdWUuJCRjaGFuZ2VDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzT2JqZWN0KHByb3BWYWx1ZSwgcHJveHlIYW5kbGVyLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIG9ialtwcm9wTmFtZV0gPSBuZXcgUHJveHkocHJvcFZhbHVlLCBwcm94eUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0FycmF5KG9iajogYW55W10sIHByb3h5SGFuZGxlcjogYW55LCBvbkNoYW5nZUNhbGxiYWNrPzogT2JzZXJ2YWJsZU9uQ2hhbmdlSGFuZGxlcjxhbnk+KSB7XHJcbiAgICBpZiAoIW9iailcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgKG9iaiBhcyBhbnkpLiQkb25DaGFuZ2UgPSBvbkNoYW5nZUNhbGxiYWNrO1xyXG5cclxuICAgIG9iai5mb3JFYWNoKChhcnJheUl0ZW0sIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChfLmlzQXJyYXkoYXJyYXlJdGVtKSkge1xyXG4gICAgICAgICAgICBhcnJheUl0ZW0uJCRjaGFuZ2VDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHByb2Nlc3NBcnJheShhcnJheUl0ZW0sIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIG9ialtpbmRleF0gPSBuZXcgUHJveHkoYXJyYXlJdGVtLCBwcm94eUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfLmlzT2JqZWN0KGFycmF5SXRlbSkpIHtcclxuICAgICAgICAgICAgYXJyYXlJdGVtLiQkY2hhbmdlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBwcm9jZXNzT2JqZWN0KGFycmF5SXRlbSwgcHJveHlIYW5kbGVyLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgb2JqW2luZGV4XSA9IG5ldyBQcm94eShhcnJheUl0ZW0sIHByb3h5SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9PYnNlcnZhYmxlLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4vRXJyb3JcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWVwQ2xvbmU8VD4ob2JqOiBhbnkpOiBUICB7XHJcbiAgICBpZiAoIW9iailcclxuICAgICAgICB0aHJvd0Vycm9yKFwiRGVlcENsb25lKCk6IG9iaiA9PT0gbnVsbFwiKTtcclxuXHJcbiAgICBsZXQgcmVmc0Nsb25lczogYW55ID0ge307XHJcblxyXG4gICAgaWYgKF8uaXNBcnJheShvYmopKVxyXG4gICAgICAgIHJldHVybiBjbG9uZUFycmF5KG9iaiwgcmVmc0Nsb25lcyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGNsb25lT2JqZWN0KG9iaiwgcmVmc0Nsb25lcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iajogYW55LCByZWZzQ2xvbmVzOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAob2JqLiQkdW5pcXVlT2JqZWN0SWQgJiYgcmVmc0Nsb25lc1tvYmouJCR1bmlxdWVPYmplY3RJZF0pXHJcbiAgICAgICAgcmV0dXJuIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdO1xyXG5cclxuICAgIGxldCBjbG9uZWQ6IGFueSA9IG5ldyBvYmouY29uc3RydWN0b3IoKTtcclxuICAgIGNsb25lZC4kJGlzQ2xvbmUgPSB0cnVlO1xyXG5cclxuICAgIG9iai4kJHVuaXF1ZU9iamVjdElkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTYpO1xyXG4gICAgcmVmc0Nsb25lc1tvYmouJCR1bmlxdWVPYmplY3RJZF0gPSBjbG9uZWQ7XHJcblxyXG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcclxuICAgICAgICAgICAgbGV0IHByb3BWYWx1ZTogYW55ID0gb2JqW3Byb3BOYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZS5zdWJzdHJpbmcoMCwgMikgIT09IFwiJCRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uaXNBcnJheShwcm9wVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkW3Byb3BOYW1lXSA9IGNsb25lQXJyYXkocHJvcFZhbHVlLCByZWZzQ2xvbmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF8uaXNPYmplY3QocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb25lZFtwcm9wTmFtZV0gPSBjbG9uZU9iamVjdChwcm9wVmFsdWUsIHJlZnNDbG9uZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb25lZFtwcm9wTmFtZV0gPSBvYmpbcHJvcE5hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGNsb25lZFtwcm9wTmFtZV0gPSBjbG9uZU9iamVjdCQkKHByb3BWYWx1ZSwgcmVmc0Nsb25lcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xvbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZU9iamVjdCQkKG9iajogYW55LCByZWZzQ2xvbmVzOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAob2JqLiQkdW5pcXVlT2JqZWN0SWQgJiYgcmVmc0Nsb25lc1tvYmouJCR1bmlxdWVPYmplY3RJZF0pXHJcbiAgICAgICAgcmV0dXJuIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lQXJyYXkob2JqOiBhbnksIHJlZnNDbG9uZXM6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIW9iailcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmIChvYmouJCR1bmlxdWVPYmplY3RJZCAmJiByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXSlcclxuICAgICAgICByZXR1cm4gcmVmc0Nsb25lc1tvYmouJCR1bmlxdWVPYmplY3RJZF07XHJcblxyXG4gICAgbGV0IGNsb25lZDogYW55ID0gW107XHJcbiAgICBjbG9uZWQuJCRpc0Nsb25lID0gdHJ1ZTtcclxuXHJcbiAgICBvYmouJCR1bmlxdWVPYmplY3RJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDE2KTtcclxuICAgIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdID0gY2xvbmVkO1xyXG5cclxuICAgIG9iai5mb3JFYWNoKChhcnJheUl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChfLmlzQXJyYXkoYXJyYXlJdGVtKSkge1xyXG4gICAgICAgICAgICBjbG9uZWQucHVzaChjbG9uZUFycmF5KGFycmF5SXRlbSwgcmVmc0Nsb25lcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfLmlzT2JqZWN0KGFycmF5SXRlbSkpIHtcclxuICAgICAgICAgICAgY2xvbmVkLnB1c2goY2xvbmVPYmplY3QoYXJyYXlJdGVtLCByZWZzQ2xvbmVzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY2xvbmVkLnB1c2goYXJyYXlJdGVtKTtcclxuXHJcblxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY2xvbmVkO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0RlZXBDbG9uZS50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge2FwcEluc3RhbmNlfSBmcm9tIFwiLi4vQXBwL0FwcFwiO1xyXG5pbXBvcnQge1dpbmRvdywgV2luZG93U3RhdGV9IGZyb20gXCIuLi9XaW5kb3cvV2luZG93XCI7XHJcbmltcG9ydCB7TW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi9Nb3ZhYmxlL01vdmFibGVcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4uLy4uL0Vycm9yXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZXNrdG9wUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGVza3RvcFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8RGVza3RvcFByb3BzPiB7XHJcbiAgICB3aW5kb3dzOiBEZXNrdG9wV2luZG93W10gPSBbXTsgIC8vINC/0L7RgdC70LXQtNC90LXQtSDQsNC60YLQuNCy0L3QvlxyXG5cclxuICAgIC8vIGdldFdpbmRvd0J5SWQoaWQ6IHN0cmluZyk6IFdpbmRvd1N0YXRlIHtcclxuICAgIC8vICAgICBmb3IgKGxldCB3IG9mIHRoaXMud2luZG93cykge1xyXG4gICAgLy8gICAgICAgICBpZiAody5pZCA9PT0gaWQpXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gdztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY29uc29sZS53YXJuKFwiRGVza3RvcFdpbmRvdyBpZD0nXCIgKyBpZCArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0V2luZG93SW5kZXhCeUlkKGlkOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLndpbmRvd3MuaW5kZXhPZih0aGlzLmdldFdpbmRvd0J5SWQoaWQpKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhY3RpdmF0ZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAvLyAgICAgaWYgKHdpbikge1xyXG4gICAgLy8gICAgICAgICBfLnB1bGwodGhpcy53aW5kb3dzLCB3aW4pO1xyXG4gICAgLy8gICAgICAgICB0aGlzLndpbmRvd3MucHVzaCh3aW4pO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGNsb3NlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgIC8vICAgICBfLnB1bGwodGhpcy53aW5kb3dzLCB3aW4pO1xyXG4gICAgLy8gICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd0luZm8ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHdpbkluc3RhbmNlOiBXaW5kb3c7XHJcbiAgICBkaXZXcmFwcGVyOiBFbGVtZW50O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgV2luZG93QXV0b1NpemUgPSBcIm5vbmVcIiB8IFwiY29udGVudFwiIHwgXCJmdWxsLWRlc2t0b3BcIjtcclxuZXhwb3J0IHR5cGUgV2luZG93QXV0b1Bvc2l0aW9uID0gXCJub25lXCIgfCBcInBhcmVudC1jZW50ZXJcIiB8IFwiZGVza3RvcC1jZW50ZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3BlbldpbmRvd1BhcmFtcyB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHRvcD86IG51bWJlcjtcclxuICAgIGxlZnQ/OiBudW1iZXI7XHJcbiAgICByaWdodD86IG51bWJlcjtcclxuICAgIGJvdHRvbT86IG51bWJlcjtcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgbWluSGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgbWluV2lkdGg/OiBudW1iZXI7XHJcbiAgICBwYXJlbnRXaW5kb3dJZD86IHN0cmluZztcclxuICAgIGF1dG9Qb3NpdGlvbj86IFdpbmRvd0F1dG9Qb3NpdGlvbjtcclxuICAgIGF1dG9TaXplPzogV2luZG93QXV0b1NpemU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3Blbk1lc3NhZ2VXaW5kb3dQYXJhbXMge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBwYXJlbnRXaW5kb3dJZD86IHN0cmluZztcclxuICAgIHN0eWxlPzogXCJlcnJvclwiIHwgXCJpbmZvcm1hdGlvblwiIHwgXCJjb25maXJtYXRpb25cIiB8IFwiZGFuZ2VyXCI7XHJcbiAgICBva0J1dHRvbkNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBjYW5jZWxCdXR0b25Db250ZW50PzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgcmVzdWx0Q2FsbGJhY2s/OiAocmVzdWx0T0s6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wV2luZG93IGltcGxlbWVudHMgT3BlbldpbmRvd1BhcmFtcyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRvcDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgbGVmdDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgcmlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIGJvdHRvbTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIGhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgbWluSGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBtaW5XaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwYXJlbnRXaW5kb3dJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgYXV0b1Bvc2l0aW9uOiBXaW5kb3dBdXRvUG9zaXRpb24gfCB1bmRlZmluZWQ7XHJcbiAgICBhdXRvU2l6ZTogV2luZG93QXV0b1NpemUgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wIGV4dGVuZHMgQ29tcG9uZW50PERlc2t0b3BQcm9wcywgRGVza3RvcFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRGVza3RvcFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgRGVza3RvcFN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgaWYgKGFwcEluc3RhbmNlKVxyXG4gICAgICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wID0gdGhpcztcclxuICAgIH1cclxuXHJcbi8vICAgIHByaXZhdGUgd2luZG93czogV2luZG93SW5mb1tdID0gW107XHJcblxyXG4gICAgb3BlbldpbmRvdyh3aW5Db250ZW50OiBSZWFjdC5SZWFjdE5vZGUsIG9wZW5QYXJhbXM/OiBPcGVuV2luZG93UGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFvcGVuUGFyYW1zKVxyXG4gICAgICAgICAgICBvcGVuUGFyYW1zID0ge307XHJcbiAgICAgICAgbGV0IG5ld1dpbiA9IG5ldyBEZXNrdG9wV2luZG93KCk7XHJcbiAgICAgICAgbmV3V2luLmNvbnRlbnQgPSB3aW5Db250ZW50O1xyXG4gICAgICAgIG5ld1dpbi50aXRsZSA9IG9wZW5QYXJhbXMudGl0bGUgfHwgXCIuXCI7XHJcbiAgICAgICAgbmV3V2luLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG5cclxuICAgICAgICBuZXdXaW4ubGVmdCA9IG9wZW5QYXJhbXMubGVmdDtcclxuICAgICAgICBuZXdXaW4udG9wID0gb3BlblBhcmFtcy50b3A7XHJcbiAgICAgICAgbmV3V2luLmhlaWdodCA9IG9wZW5QYXJhbXMuaGVpZ2h0O1xyXG4gICAgICAgIG5ld1dpbi53aWR0aCA9IG9wZW5QYXJhbXMud2lkdGg7XHJcbiAgICAgICAgbmV3V2luLnJpZ2h0ID0gb3BlblBhcmFtcy5yaWdodDtcclxuICAgICAgICBuZXdXaW4uYm90dG9tID0gb3BlblBhcmFtcy5ib3R0b207XHJcblxyXG4gICAgICAgIGlmICghbmV3V2luLmxlZnQpIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4ucmlnaHQgJiYgIW5ld1dpbi53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmxlZnQgPSA1MDtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdXaW4ucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5sZWZ0ID0gNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLnJpZ2h0ICYmICFuZXdXaW4ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFuZXdXaW4udG9wKSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLmJvdHRvbSAmJiAhbmV3V2luLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmhlaWdodCA9IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdXaW4uYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5ib3R0b20gJiYgIW5ld1dpbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld1dpbi5hdXRvUG9zaXRpb24gPSBvcGVuUGFyYW1zLmF1dG9Qb3NpdGlvbjtcclxuICAgICAgICBuZXdXaW4uYXV0b1NpemUgPSBvcGVuUGFyYW1zLmF1dG9TaXplO1xyXG5cclxuICAgICAgICBuZXdXaW4ubWluSGVpZ2h0ID0gb3BlblBhcmFtcy5taW5IZWlnaHQgfHwgMTAwO1xyXG4gICAgICAgIG5ld1dpbi5taW5XaWR0aCA9IG9wZW5QYXJhbXMubWluV2lkdGggfHwgMTAwO1xyXG5cclxuICAgICAgICBuZXdXaW4ucGFyZW50V2luZG93SWQgPSBvcGVuUGFyYW1zLnBhcmVudFdpbmRvd0lkO1xyXG4gICAgICAgIGlmIChuZXdXaW4ucGFyZW50V2luZG93SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRXaW5kb3dCeUlkKG5ld1dpbi5wYXJlbnRXaW5kb3dJZCkhLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLndpbmRvd3MucHVzaChuZXdXaW4pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgb3Blbk1lc3NhZ2VXaW5kb3cod2luQ29udGVudDogUmVhY3QuUmVhY3ROb2RlLCBvcGVuUGFyYW1zPzogT3Blbk1lc3NhZ2VXaW5kb3dQYXJhbXMpIHtcclxuICAgICAgICBpZiAoIW9wZW5QYXJhbXMpXHJcbiAgICAgICAgICAgIG9wZW5QYXJhbXMgPSB7c3R5bGU6IFwiaW5mb3JtYXRpb25cIn07XHJcblxyXG4gICAgICAgIGxldCB3aW5QYXJhbXM6IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBvcGVuUGFyYW1zLnRpdGxlLFxyXG4gICAgICAgICAgICBwYXJlbnRXaW5kb3dJZDogb3BlblBhcmFtcy5wYXJlbnRXaW5kb3dJZCxcclxuICAgICAgICAgICAgYXV0b1Bvc2l0aW9uOiBcInBhcmVudC1jZW50ZXJcIixcclxuICAgICAgICAgICAgYXV0b1NpemU6IFwiY29udGVudFwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF3aW5QYXJhbXMucGFyZW50V2luZG93SWQpXHJcbiAgICAgICAgICAgIHdpblBhcmFtcy5hdXRvUG9zaXRpb24gPSBcImRlc2t0b3AtY2VudGVyXCI7XHJcblxyXG4gICAgICAgIGxldCBidXR0b25TdHlsZSA9IHttaW5XaWR0aDogNjUsIG1hcmdpbkxlZnQ6IDh9O1xyXG5cclxuICAgICAgICBsZXQgb2tCdXR0b246IFJlYWN0LlJlYWN0Tm9kZSA9IFtdO1xyXG4gICAgICAgIGlmIChvcGVuUGFyYW1zLm9rQnV0dG9uQ29udGVudCkge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uQ2xhc3NOYW1lID0gXCJpcy1vdXRsaW5lZFwiO1xyXG4gICAgICAgICAgICBpZiAob3BlblBhcmFtcy5zdHlsZSA9PT0gXCJkYW5nZXJcIilcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkNsYXNzTmFtZSArPSBcIiBpcy1kYW5nZXJcIjtcclxuICAgICAgICAgICAgb2tCdXR0b24gPVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKHNlbmRlcjpCdXR0b24sIGU6UmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlci5jbG9zZVBhcmVudFdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuUGFyYW1zICYmIG9wZW5QYXJhbXMucmVzdWx0Q2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBhcmFtcy5yZXN1bHRDYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wZW5QYXJhbXMub2tCdXR0b25Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbjogUmVhY3QuUmVhY3ROb2RlID0gW107XHJcbiAgICAgICAgaWYgKG9wZW5QYXJhbXMuY2FuY2VsQnV0dG9uQ29udGVudCkge1xyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b24gPVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlzLW91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChzZW5kZXI6QnV0dG9uLCBlOlJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXIuY2xvc2VQYXJlbnRXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlblBhcmFtcyAmJiBvcGVuUGFyYW1zLnJlc3VsdENhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5QYXJhbXMucmVzdWx0Q2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3BlblBhcmFtcy5jYW5jZWxCdXR0b25Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdpbiA9XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttaW5XaWR0aDoyMDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAge3dpbkNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtva0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cob3BlblBhcmFtcyk7XHJcblxyXG4gICAgICAgIHRoaXMub3BlbldpbmRvdyh3aW4sIHdpblBhcmFtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFjdGl2YXRlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgd2luID0gdGhpcy5nZXRUb3BQYXJlbnRXaW5kb3coaWQpO1xyXG5cclxuICAgICAgICBpZiAod2luICYmIHRoaXMuc3RhdGUud2luZG93cy5pbmRleE9mKHdpbikgIT09IHRoaXMuc3RhdGUud2luZG93cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIF8ucHVsbCh0aGlzLnN0YXRlLndpbmRvd3MsIHdpbik7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2luZG93cy5wdXNoKHdpbik7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC/0L7QtNC90LjQvNCw0LXQvCDQtNC+0YfQtdGA0L3QuNC1INC+0LrQvdCwXHJcbiAgICAgICAgICAgIGxldCBjaGlsZFdpbiA9IHRoaXMuc3RhdGUud2luZG93cy5maWx0ZXIoKHc6IERlc2t0b3BXaW5kb3cpID0+IHcucGFyZW50V2luZG93SWQgPT09IHdpbiEuaWQpWzBdO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRXaW4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlQ2hpbGRXaW5kb3coY2hpbGRXaW4uaWQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVDaGlsZFdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdpbiAmJiB0aGlzLnN0YXRlLndpbmRvd3MuaW5kZXhPZih3aW4pICE9PSB0aGlzLnN0YXRlLndpbmRvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBfLnB1bGwodGhpcy5zdGF0ZS53aW5kb3dzLCB3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpbmRvd3MucHVzaCh3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQv9C+0LTQvdC40LzQsNC10Lwg0LTQvtGH0LXRgNC90LjQtSDQvtC60L3QsFxyXG4gICAgICAgICAgICBsZXQgY2hpbGRXaW4gPSB0aGlzLnN0YXRlLndpbmRvd3MuZmlsdGVyKCh3OiBEZXNrdG9wV2luZG93KSA9PiB3LnBhcmVudFdpbmRvd0lkID09PSB3aW4hLmlkKVswXTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkV2luKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVdpbmRvdyhjaGlsZFdpbi5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRvcFBhcmVudFdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHRvcFBhcmVudCA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAgICAgd2hpbGUgKHRvcFBhcmVudCAmJiB0b3BQYXJlbnQucGFyZW50V2luZG93SWQpIHtcclxuICAgICAgICAgICAgdG9wUGFyZW50ID0gdGhpcy5nZXRXaW5kb3dCeUlkKHRvcFBhcmVudC5wYXJlbnRXaW5kb3dJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3BQYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2luZG93QnlJZChpZDogc3RyaW5nKTogRGVza3RvcFdpbmRvdyB8IG51bGwge1xyXG4gICAgICAgIGZvciAobGV0IHcgb2YgdGhpcy5zdGF0ZS53aW5kb3dzKSB7XHJcbiAgICAgICAgICAgIGlmICh3LmlkID09PSBpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLndhcm4oXCJEZXNrdG9wV2luZG93IGlkPSdcIiArIGlkICsgXCInIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQWN0aXZhdGUgPSAoc3RhdGU6IFdpbmRvd1N0YXRlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVdpbmRvdyhzdGF0ZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgICAgIF8ucHVsbCh0aGlzLnN0YXRlLndpbmRvd3MsIHdpbik7XHJcblxyXG4gICAgICAgIGlmICh3aW4gJiYgd2luLnBhcmVudFdpbmRvd0lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVXaW5kb3cod2luLnBhcmVudFdpbmRvd0lkKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRXaW5kb3dCeUlkKHdpbi5wYXJlbnRXaW5kb3dJZCkhLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoc3RhdGU6IFdpbmRvd1N0YXRlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZVdpbmRvdyhzdGF0ZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLmRpZE1vdW50KCk7XHJcbiAgICAgICAgKHRoaXMubmF0aXZlRWxlbWVudCBhcyBhbnkpW1wiJCRkZXNrdG9wXCJdID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJkZXNrdG9wXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImF1dG9cIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17IChlKSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH0gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLndpbmRvd3MubWFwKCh3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLWRlc2t0b3Atd2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt3LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3cudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A9e3cudG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdD17dy5sZWZ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3cud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3cuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ9e3cucmlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b209e3cuYm90dG9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3cuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aD17dy5taW5XaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodD17dy5taW5IZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17dy5hdXRvU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Qb3NpdGlvbj17dy5hdXRvUG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRXaW5kb3dJZD17dy5wYXJlbnRXaW5kb3dJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZhdGU9eyAgdGhpcy5oYW5kbGVBY3RpdmF0ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsgdGhpcy5oYW5kbGVDbG9zZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vb25Nb3ZlU3RhcnQ9eyB3LmhhbmRsZU1vdmVTdGFydCB9XHJcbi8vb25SZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0PXsgdy5oYW5kbGVSZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0IH1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EZXNrdG9wL0Rlc2t0b3AudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wcywgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtEZXNrdG9wfSBmcm9tIFwiLi4vRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCBFbGVtZW50ID0gSlNYLkVsZW1lbnQ7XHJcbmltcG9ydCB7QXBwRXJyb3JCYXJ9IGZyb20gXCIuL0FwcEVycm9yQmFyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8QXBwU3RhdGU+IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgc2l6ZVRvOiBcInBhcmVudFwiIHwgXCJjb250ZW50XCI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IEpTWC5FbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxBcHBQcm9wcz4ge1xyXG4gICAgd2luZG93czogQXBwV2luZG93W10gPSBbXTsgIC8vINC/0L7RgdC70LXQtNC90LXQtSDQsNC60YLQuNCy0L3QvlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PEFwcFByb3BzLCBBcHBTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFwcFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICBhcHBJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgLy8gICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgLy8gICAgICBhcHBJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZGVza3RvcDogRGVza3RvcDtcclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXBwXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8QXBwRXJyb3JCYXIvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGFwcEluc3RhbmNlOiBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHAvQXBwLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7VmlzaWJsZVBsdWdpblByb3BzLCBWaXNpYmxlUGx1Z2luU3RhdGUsIFZpc2libGVQbHVnaW59IGZyb20gXCIuLi8uLi9QbHVnaW5zL1Zpc2libGVQbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRXJyb3JCYXJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcEVycm9yQmFyU3RhdGU+IHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBFcnJvckJhclN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8QXBwRXJyb3JCYXJQcm9wcz4ge1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcEVycm9yQmFyIGV4dGVuZHMgQ29tcG9uZW50PEFwcEVycm9yQmFyUHJvcHMsIEFwcEVycm9yQmFyU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBcHBFcnJvckJhclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBBcHBFcnJvckJhclN0YXRlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAvLyAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLmRpZE1vdW50KCk7XHJcbiAgICAgICAgd2luZG93Lm9uZXJyb3IgPSB0aGlzLmhhbmRsZUVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yTWVzc2FnZTogUmVhY3QuUmVhY3ROb2RlO1xyXG5cclxuICAgIGhhbmRsZUVycm9yID0gKG1zZzogc3RyaW5nLCB1cmw/OiBzdHJpbmcsIGxpbmU/OiBudW1iZXIsIGNvbD86IG51bWJlciwgZXJyb3I/OiBhbnkpOiBib29sZWFuID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG1zZztcclxuXHJcbiAgICAgICAgaWYgKCFlcnJvci4kJGlzVGhyb3dFcnJvcilcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5zdGFjayk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cclxuICAgICAgICBsZXQgc3VwcHJlc3NFcnJvckFsZXJ0ID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gc3VwcHJlc3NFcnJvckFsZXJ0O1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJhcHAtZXJyb3ItYmFyXCIpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3NOYW1lKCF0aGlzLnN0YXRlLnZpc2libGUsIFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2NvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IFwiI2ZmNGU0ZVwiLCBjdXJzb3I6IFwiZGVmYXVsdFwifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4geyB0aGlzLnN0YXRlLnZpc2libGUgPSBmYWxzZTsgdGhpcy5mb3JjZVVwZGF0ZSgpO30gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwL0FwcEVycm9yQmFyLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5pbXBvcnQge01vdmFibGUsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCB7T3BlbldpbmRvd1BhcmFtcywgRGVza3RvcCwgV2luZG93QXV0b1Bvc2l0aW9uLCBXaW5kb3dBdXRvU2l6ZX0gZnJvbSBcIi4uL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQge3Rocm93RXJyb3J9IGZyb20gXCIuLi8uLi9FcnJvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93UHJvcHMgZXh0ZW5kcyBPcGVuV2luZG93UGFyYW1zLCBDb21wb25lbnRQcm9wczxXaW5kb3dTdGF0ZT4ge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgICBvbkFjdGl2YXRlPyhzdGF0ZTogV2luZG93U3RhdGUpOiB2b2lkO1xyXG4gICAgb25DbG9zZT8oc3RhdGU6IFdpbmRvd1N0YXRlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd1N0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8V2luZG93UHJvcHM+IGltcGxlbWVudHMgT3BlbldpbmRvd1BhcmFtcyB7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIG1pbldpZHRoOiBudW1iZXI7XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHBhcmVudFdpbmRvd0lkOiBzdHJpbmc7XHJcbiAgICBhdXRvUG9zaXRpb246IFdpbmRvd0F1dG9Qb3NpdGlvbjtcclxuICAgIGF1dG9TaXplOiBXaW5kb3dBdXRvU2l6ZTtcclxuXHJcbi8vICAgIGNoaWxkV2luZG93OiBXaW5kb3c7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQ8V2luZG93UHJvcHMsIFdpbmRvd1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogV2luZG93UHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBXaW5kb3dTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUluaXRTdGF0ZSgpIHtcclxuICAgICAgICBfLmFzc2lnbih0aGlzLnN0YXRlLCB0aGlzLnByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5pdFN0YXRlKCk7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogV2luZG93UHJvcHMpIHtcclxuICAgICAgICBzdXBlci53aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICAgICAgLy90aGlzLnN0YXRlLmRpc2FibGVkID0gbmV4dFByb3BzLmRpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQYXJlbnREZXNrdG9wRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKChwYXJlbnQgYXMgYW55KS4kJGRlc2t0b3ApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3dFcnJvcihcIldpbmRvdy5nZXRQYXJlbnREZXNrdG9wRWxlbWVudCgpOiBwYXJlbnQgZGVza3RvcCBub3QgZm91bmRcIik7XHJcbiAgICAgICAgdGhyb3cgXCJmYWtlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBjZW50ZXJUbyhwYXJlbnQ6IEpRdWVyeSkge1xyXG4gICAgLy8gICAgIGxldCB3aW4gPSAkKHRoaXMubmF0aXZlRWxlbWVudCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMuc3RhdGUudG9wID0gKHBhcmVudC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpIC8gMjtcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS50b3AgPiBwYXJlbnQub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpKVxyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IHBhcmVudC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCk7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUudG9wIDwgMCkgdGhpcy5zdGF0ZS50b3AgPSAwO1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLnN0YXRlLmxlZnQgPSAocGFyZW50Lm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpIC8gMjtcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS5sZWZ0ID4gcGFyZW50Lm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IHBhcmVudC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPCAwKSB0aGlzLnN0YXRlLmxlZnQgPSAwO1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjZW50ZXJUb0Rlc2t0b3AoKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9ICQodGhpcy5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBsZXQgZGVza3RvcCA9ICQodGhpcy5nZXRQYXJlbnREZXNrdG9wRWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50b3AgPSAoZGVza3RvcC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpIC8gMjtcclxuICAgICAgICB0aGlzLnN0YXRlLmxlZnQgPSAoZGVza3RvcC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpKSAvIDI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcCA+IGRlc2t0b3Aub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IGRlc2t0b3Aub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcCA8IDApIHRoaXMuc3RhdGUudG9wID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gKGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSkgLyAyO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPiBkZXNrdG9wLm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sZWZ0IDwgMCkgdGhpcy5zdGF0ZS5sZWZ0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIC8vdGhpcy5jZW50ZXJUbygkKHRoaXMuZ2V0UGFyZW50RGVza3RvcEVsZW1lbnQoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2VudGVyVG9QYXJlbnRXaW5kb3coKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9ICQodGhpcy5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBsZXQgcGFyZW50ID0gJChcIiNcIiArIHRoaXMuc3RhdGUucGFyZW50V2luZG93SWQpO1xyXG4gICAgICAgIGxldCBkZXNrdG9wID0gJCh0aGlzLmdldFBhcmVudERlc2t0b3BFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IChwYXJlbnQub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpKSAvIDIgKyBwYXJlbnQucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gKHBhcmVudC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpKSAvIDIgKyBwYXJlbnQucG9zaXRpb24oKS5sZWZ0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3AgPiBkZXNrdG9wLm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3AgPSBkZXNrdG9wLm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3AgPCAwKSB0aGlzLnN0YXRlLnRvcCA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPiBkZXNrdG9wLm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sZWZ0IDwgMCkgdGhpcy5zdGF0ZS5sZWZ0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIC8vdGhpcy5jZW50ZXJUbygkKFwiI1wiICsgdGhpcy5zdGF0ZS5wYXJlbnRXaW5kb3dJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgICAgICh0aGlzLm5hdGl2ZUVsZW1lbnQgYXMgYW55KVtcIiQkd2luZG93XCJdID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXV0b1Bvc2l0aW9uID09PSBcImRlc2t0b3AtY2VudGVyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyVG9EZXNrdG9wKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5hdXRvUG9zaXRpb24gPT09IFwicGFyZW50LWNlbnRlclwiKVxyXG4gICAgICAgICAgICB0aGlzLmNlbnRlclRvUGFyZW50V2luZG93KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50RGVza3RvcCgpLmNsb3NlV2luZG93KHRoaXMuc3RhdGUuaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbW92ZVN0YXJ0ID0gKGU6IE1vdmVTdGFydEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZS5iaW5kWCh0aGlzLnN0YXRlLCBcImxlZnRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKFwibGVmdFwiLCB0aGlzLnN0YXRlLmxlZnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUuYmluZFkodGhpcy5zdGF0ZSwgXCJ0b3BcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKFwidG9wXCIsIHRoaXMuc3RhdGUudG9wKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZU9uQ2xpY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydCA9IChlOiBNb3ZlU3RhcnRFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUuYmluZFgodGhpcy5zdGF0ZSwgXCJ3aWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpZHRoIDwgdGhpcy5zdGF0ZS5taW5XaWR0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGggPSB0aGlzLnN0YXRlLm1pbldpZHRoO1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKFwid2lkdGhcIiwgdGhpcy5zdGF0ZS53aWR0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5iaW5kWSh0aGlzLnN0YXRlLCBcImhlaWdodFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhlaWdodCA8IHRoaXMuc3RhdGUubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLnN0YXRlLm1pbkhlaWdodDtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcyhcImhlaWdodFwiLCB0aGlzLnN0YXRlLmhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZU9uQ2xpY2sgPSAoZT86IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY3RpdmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGl2YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChuZXh0UHJvcHM6IFdpbmRvd1Byb3BzLCBuZXh0U3RhdGU6IFdpbmRvd1N0YXRlKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBvbGREaXNhYmxlZCA9IHRoaXMuc3RhdGUuZGlzYWJsZWQgPT09IHRydWU7XHJcbiAgICAgICAgbGV0IG5ld0Rpc2FibGVkID0gbmV4dFByb3BzLmRpc2FibGVkID09PSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmRpc2FibGVkID0gbmV3RGlzYWJsZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiBvbGREaXNhYmxlZCAhPT0gbmV3RGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlclJpZ2h0Qm90dG9tQ29ybmVyUmVzaXplcigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmF1dG9TaXplID09PSBcImNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5kb3ctcmVzaXplclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIGhlaWdodDoxMCwgd2lkdGg6MTAsIHJpZ2h0OjAsYm90dG9tOjAsIGJvcmRlclJhZGl1czogXCIwIDAgNXB4IDBcIixjdXJzb3I6IFwic2UtcmVzaXplXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXt0aGlzLnJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe2lkOiB0aGlzLnN0YXRlLmlkfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwid2luZG93IGJveFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7cG9zaXRpb246IFwiYWJzb2x1dGVcIn0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCxcclxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMuc3RhdGUucmlnaHQsXHJcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5zdGF0ZS5ib3R0b20sXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS5taW5IZWlnaHQsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLm1pbldpZHRoLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hdXRvU2l6ZSA9PT0gXCJjb250ZW50XCIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb250ZW50XCIpO1xyXG4gICAgICAgICAgICAvLyA/XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJCdXR0b25TdHlsZSA9IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogMixcclxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLXdpblwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuZGlzYWJsZWQpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5kaXNhYmxlZCk7XHJcblxyXG4gICAgICAgIGxldCBkaXNhYmxlZFdyYXBwZXJDbGFzcyA9IFwid2luZG93LWRpc2FibGVkLXdyYXBwZXJcIjtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGlzYWJsZWQgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlZCA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIGRpc2FibGVkV3JhcHBlckNsYXNzICs9IFwiIGlzLWhpZGRlblwiO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbmRvd1wiXHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgIHJlZj17IChlOiBhbnkpID0+IHsgdGhpcy5uYXRpdmVFbGVtZW50ID0gZTsgfX1cclxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5oYW5kbGVPbkNsaWNrIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCIgc2l6ZVRvPVwicGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbmRvdy1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlclJhZGl1czogXCI1cHggNXB4IDBweCAwcHhcIiwgcG9zaXRpb246XCJyZWxhdGl2ZVwiLCBwYWRkaW5nTGVmdDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwicm93XCIgc2l6ZVRvPVwicGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3aW5kb3ctdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDowLCBsZWZ0OjAsIHJpZ2h0OjAsYm90dG9tOjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVTdGFydD17dGhpcy5tb3ZlU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW92YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1hZGRvbnMgYnV0dG9ucy1iYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMiwgcGFkZGluZ1JpZ2h0OiA0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBtaW5pbWl6ZS1idXR0b25cIiBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCIgc3R5bGU9e3t0b3A6IDN9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgbWF4aW1pemUtYnV0dG9uXCIgc3R5bGU9e2hlYWRlckJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vXCIgc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIn19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBjbG9zZS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIiBzdHlsZT17e3RvcDogLTF9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGNsYXNzTmFtZT1cIndpbmRvdy1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzoxMCwgb3ZlcmZsb3c6XCJoaWRkZW5cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJpZ2h0Qm90dG9tQ29ybmVyUmVzaXplcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rpc2FibGVkV3JhcHBlckNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCIsIGxlZnQ6MCwgdG9wOjAsIHJpZ2h0OjAsIGJvdHRvbTowfX1cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIDxkaXYgY2xhc3NOYW1lPVwid2luZG93LWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6XCIxMDAlXCIgfX0+XHJcbi8vICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuLy8gPC9kaXY+XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvV2luZG93L1dpbmRvdy50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCBEcmFnRXZlbnRIYW5kbGVyID0gX19SZWFjdC5EcmFnRXZlbnRIYW5kbGVyO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZhYmxlUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIG9uTW92ZVN0YXJ0PzogKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCk9PnZvaWQ7XHJcbiAgICBvbk1vdmU/OiAoZXZlbnQ6IE1vdmVFdmVudCk9PnZvaWQ7XHJcbiAgICBvbk1vdmVFbmQ/OiAoZXZlbnQ6IE1vdmVFbmRFdmVudCk9PnZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVTdGFydEV2ZW50IHtcclxuICAgIGJpbmRYOiAob2JqOiBPYmplY3QsIHByb3BOYW1lOiBzdHJpbmcsIG1vdmVkQ2FsbGJhY2s/OiAoKT0+dm9pZCk9PnZvaWQ7XHJcbiAgICBiaW5kWTogKG9iajogT2JqZWN0LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCk9PnZvaWQpPT52b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVFdmVudCB7XHJcbiAgICBkZWx0YVg6IG51bWJlcjtcclxuICAgIGRlbHRhWTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVFbmRFdmVudCB7XHJcbiAgICBkZWx0YVg6IG51bWJlcjtcclxuICAgIGRlbHRhWTogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIEJpbmRlZE9iamVjdCB7XHJcbiAgICBvYmo6IGFueTtcclxuICAgIHByb3BOYW1lOiBzdHJpbmdcclxuICAgIHN0YXJ0VmFsdWU6IG51bWJlcjtcclxuICAgIG1vdmVkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xyXG4gICAgbGFzdFZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZhYmxlIGV4dGVuZHMgQ29tcG9uZW50PE1vdmFibGVQcm9wcyxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydENsaWVudFg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhcnRDbGllbnRZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRyYWdPdmVyX0JpbmRlZDogYW55O1xyXG5cclxuICAgIHByaXZhdGUgYmluZGVkWDogQmluZGVkT2JqZWN0W10gPSBbXTtcclxuICAgIHByaXZhdGUgYmluZGVkWTogQmluZGVkT2JqZWN0W10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRYKG9iajogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuYmluZGVkWC5wdXNoKHtcclxuICAgICAgICAgICAgb2JqOiBvYmosXHJcbiAgICAgICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZSxcclxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogb2JqW3Byb3BOYW1lXSxcclxuICAgICAgICAgICAgbW92ZWRDYWxsYmFjazogbW92ZWRDYWxsYmFjayxcclxuICAgICAgICAgICAgbGFzdFZhbHVlOiBvYmpbcHJvcE5hbWVdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgYmluZFkob2JqOiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIG1vdmVkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kZWRZLnB1c2goe1xyXG4gICAgICAgICAgICBvYmo6IG9iaixcclxuICAgICAgICAgICAgcHJvcE5hbWU6IHByb3BOYW1lLFxyXG4gICAgICAgICAgICBzdGFydFZhbHVlOiBvYmpbcHJvcE5hbWVdLFxyXG4gICAgICAgICAgICBtb3ZlZENhbGxiYWNrOiBtb3ZlZENhbGxiYWNrLFxyXG4gICAgICAgICAgICBsYXN0VmFsdWU6IG9ialtwcm9wTmFtZV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlRHJhZ1N0YXJ0KGU6IERyYWdFdmVudCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0Q2xpZW50WCA9IGUuY2xpZW50WDtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2xpZW50WSA9IGUuY2xpZW50WTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3ZlU3RhcnQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlU3RhcnQoe2JpbmRYOiB0aGlzLmJpbmRYLmJpbmQodGhpcyksIGJpbmRZOiB0aGlzLmJpbmRZLmJpbmQodGhpcyl9KTtcclxuXHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIm1vdmFibGVcIiwgXCJcIik7XHJcbiAgICAgICAgLy9lLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdPdmVyX0JpbmRlZCA9IHRoaXMuaGFuZGxlRHJhZ092ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3Zlcl9CaW5kZWQpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJhZ0VuZChlOiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3Zlcl9CaW5kZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZUVuZClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmVFbmQoe1xyXG4gICAgICAgICAgICAgICAgZGVsdGFYOiBlLmNsaWVudFggLSB0aGlzLnN0YXJ0Q2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGRlbHRhWTogZS5jbGllbnRZIC0gdGhpcy5zdGFydENsaWVudFlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iaW5kZWRYID0gW107XHJcbiAgICAgICAgdGhpcy5iaW5kZWRZID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJhZ092ZXIoZTogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRlZFguZm9yRWFjaCgoYmluZCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBiaW5kLnN0YXJ0VmFsdWUgKyBlLmNsaWVudFggLSB0aGlzLnN0YXJ0Q2xpZW50WDtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBiaW5kLmxhc3RWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgYmluZC5vYmpbYmluZC5wcm9wTmFtZV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJpbmQubGFzdFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmluZC5tb3ZlZENhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGJpbmQubW92ZWRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGVkWS5mb3JFYWNoKChiaW5kKT0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gYmluZC5zdGFydFZhbHVlICsgZS5jbGllbnRZIC0gdGhpcy5zdGFydENsaWVudFk7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gYmluZC5sYXN0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQub2JqW2JpbmQucHJvcE5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBiaW5kLmxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmQubW92ZWRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBiaW5kLm1vdmVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdmUpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhWDogZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBkZWx0YVk6IGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIm1vdmFibGVcIik7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7ZHJhZ2dhYmxlOiB0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2N1cnNvcjogXCJtb3ZlXCJ9KTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wSW5mby5lZGl0b3JUeXBlLCBlZGl0b3JQcm9wcywgbnVsbClcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17dGhpcy5oYW5kbGVEcmFnU3RhcnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17dGhpcy5oYW5kbGVEcmFnRW5kLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTW92YWJsZS9Nb3ZhYmxlLnRzeFxuICoqLyIsImltcG9ydCB7U3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge1Rlc3RCdWh0YU9iamVjdDF9IGZyb20gXCIuL3Rlc3RCdWh0YU9iamVjdDFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyB0ZXN0QnVodGFPYmplY3QyIGV4dGVuZHMgVGVzdEJ1aHRhT2JqZWN0MSB7XHJcblxyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQn9C+0Lsvc2V4XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L5cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCf0L7RgtC+0LvQvtC6INCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIHNleDogc3RyaW5nO1xyXG5cclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9UZXN0MS90ZXN0QnVodGFPYmplY3QyLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgc2hhbGxvd0NvbXBhcmUgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZVwiKTtcclxuXHJcbi8vaW1wb3J0IHtleGVjdXRlU1FMfSBmcm9tIFwiLi4vYnVodGEtY29yZS9TUUxcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge2V4ZWN1dGVTUUx9IGZyb20gXCIuLi8uLi9TUUxcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbnN9IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uc1wiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uUHJvcHMsIFRyZWVHcmlkQ29sdW1ufSBmcm9tIFwiLi9UcmVlR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge0tleWNvZGV9IGZyb20gXCIuLi8uLi9LZXljb2RlXCI7XHJcbmltcG9ydCB7TW92YWJsZSwgTW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi9Nb3ZhYmxlL01vdmFibGVcIjtcclxuaW1wb3J0IHtnZXRTY3JvbGxiYXJXaWR0aH0gZnJvbSBcIi4uLy4uL2dldFNjcm9sbEJhcldpZHRoXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5pbXBvcnQge09iamVjdERlc2lnbmVyfSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyXCI7XHJcbmltcG9ydCB7T3BlbldpbmRvd1BhcmFtc30gZnJvbSBcIi4uL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQge2FwcEluc3RhbmNlfSBmcm9tIFwiLi4vQXBwL0FwcFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkRGF0YVNvdXJjZX0gZnJvbSBcIi4vVHJlZUdyaWREYXRhU291cmNlXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3RcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxUcmVlR3JpZFN0YXRlPiB7XHJcbiAgICBkYXRhU291cmNlOiBUcmVlR3JpZERhdGFTb3VyY2U7XHJcbiAgICByb3dIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBrZXlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBwYXJlbnRLZXlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBoaWVyYXJjaHlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPzogc3RyaW5nO1xyXG4gICAgdHJlZU1vZGU/OiBib29sZWFuO1xyXG4gICAgYXV0b0V4cGFuZE5vZGVzVG9MZXZlbD86IG51bWJlcjtcclxuXHJcbiAgICBlZGl0YWJsZT86IGJvb2xlYW47XHJcbiAgICBkZW55SW5zZXJ0PzogYm9vbGVhbjtcclxuICAgIGRlbnlVcGRhdGU/OiBib29sZWFuO1xyXG4gICAgZGVueURlbGV0ZT86IGJvb2xlYW47XHJcblxyXG4gICAgb25DcmVhdGVOZXdSZWNvcmQ/OiAoKSA9PiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPFRyZWVHcmlkUHJvcHM+IHtcclxuICAgIGNvbHVtbnM6IEludGVybmFsQ29sdW1uW107XHJcbiAgICBwYWdlTGVuZ3RoOiBudW1iZXI7XHJcbiAgICByb3dzOiBJbnRlcm5hbFJvd1tdO1xyXG4gICAgbm9kZXM6IEludGVybmFsVHJlZU5vZGVbXTtcclxuICAgIGZvY3VzZWRSb3dJbmRleDogbnVtYmVyO1xyXG4gICAgZm9jdXNlZENlbGxJbmRleDogbnVtYmVyO1xyXG4gICAgZGF0YVNvdXJjZTogVHJlZUdyaWREYXRhU291cmNlO1xyXG5cclxuICAgIGhlYWRlckZha2VSb3c6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyRmFrZVJvdzogSFRNTEVsZW1lbnQ7XHJcbiAgICBoZWFkZXJXcmFwcGVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBib2R5V3JhcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyV3JhcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGhlYWRlclRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBib2R5VGFibGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGZvb3RlclRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbENvbHVtbiB7XHJcbiAgICBwcm9wczogVHJlZUdyaWRDb2x1bW5Qcm9wcztcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBjYXB0aW9uOiBzdHJpbmc7XHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZztcclxuICAgIGZvb3Rlcjogc3RyaW5nO1xyXG4gICAgaGlkZGVuOiBib29sZWFuO1xyXG4gICAgaGVhZGVyV2lkdGhOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGJvZHlXaWR0aE5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyV2lkdGhOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVybmFsUm93IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncmlkU3RhdGU6IFRyZWVHcmlkU3RhdGUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAvLy8gICBzb3VyY2VPYmplY3Q6IGFueTtcclxuICAgIHNvdXJjZUluZGV4OiBudW1iZXI7XHJcbiAgICBjZWxsRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgIG5vZGU6IEludGVybmFsVHJlZU5vZGU7XHJcblxyXG4gICAgZ2V0IHNvdXJjZURhdGEoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkU3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpW3RoaXMuc291cmNlSW5kZXhdO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVybmFsVHJlZU5vZGUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGdyaWRTdGF0ZTogVHJlZUdyaWRTdGF0ZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIC8vc291cmNlT2JqZWN0OiBhbnk7XHJcbiAgICBzb3VyY2VJbmRleDogbnVtYmVyO1xyXG4gICAgY2VsbEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgLy8g0LTQu9GPIHRyZWVNb2RlO1xyXG4gICAgcGFyZW50OiBJbnRlcm5hbFRyZWVOb2RlO1xyXG4gICAgY2hpbGRyZW46IEludGVybmFsVHJlZU5vZGVbXSA9IFtdO1xyXG4gICAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG5cclxuICAgIHB1c2hSb3dSZWN1cnNpdmUocm93czogSW50ZXJuYWxSb3dbXSwgbWF4UGFnZUxlbmd0aDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCA+PSBtYXhQYWdlTGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCByb3cgPSBuZXcgSW50ZXJuYWxSb3codGhpcy5ncmlkU3RhdGUpO1xyXG4gICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IHRoaXMuc291cmNlSW5kZXg7XHJcbiAgICAgICAgcm93Lm5vZGUgPSB0aGlzO1xyXG4gICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5wdXNoUm93UmVjdXJzaXZlKHJvd3MsIG1heFBhZ2VMZW5ndGgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpdGVyYXRlUmVjdXJzaXZlKGNhbGxiYWNrOiAobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuaXRlcmF0ZVJlY3Vyc2l2ZShjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4vL2NvbnN0IHZlcnRTY3JvbGxCYXJXaWR0aCA9IDMwO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkIGV4dGVuZHMgQ29tcG9uZW50PFRyZWVHcmlkUHJvcHMsIFRyZWVHcmlkU3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlZUdyaWRQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgVHJlZUdyaWRTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpdGVyYXRlQWxsTm9kZXMoY2FsbGJhY2s6IChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5mb3JFYWNoKChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuaXRlcmF0ZVJlY3Vyc2l2ZShjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHBhbmRBbGwoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5mb3JFYWNoKChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuaXRlcmF0ZVJlY3Vyc2l2ZSgobm9kOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2QuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xsYXBzZUFsbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVyYXRlQWxsTm9kZXMoKG5vZDogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBub2QuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRSb3dJbmRleChzb3VyY2VJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBUT0RPOiDRgdC00LXQu9Cw0YLRjCDQstCw0YDQuNCw0L3RgiDQtNC70Y8gdHJlZU1vZGVcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLnNvdXJjZUluZGV4ID09PSBzb3VyY2VJbmRleClcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFJvdyhzb3VyY2VJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRSb3dJbmRleChzb3VyY2VJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgLy8gVE9ETzog0YHQtNC10LvQsNGC0Ywg0L/RgNC+0LrRgNGD0YLQutGDLCDQtdGB0LvQuCBmb2N1c2VkINC90LUg0LLQuNC00L3QsCDQvdCwINGN0LrRgNCw0L3QtVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwZGF0ZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub3BlbkVkaXRGb3JtKHRoaXMuc3RhdGUucm93c1t0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleF0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbnNlcnRCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm9wZW5JbnNlcnRGb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuRGVsZXRlRm9ybSh0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRlbGV0ZUZvcm0ocm93VG9EZWxldGU6IEludGVybmFsUm93KSB7XHJcbiAgICAgICAgLy9sZXQgcm93VG9EZWxldGUgPSB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdO1xyXG4gICAgICAgIGxldCByb3cgPSByb3dUb0RlbGV0ZS5zb3VyY2VEYXRhIGFzIERlc2lnbmVkT2JqZWN0O1xyXG4gICAgICAgIGxldCBvYmplY3RDbGFzc05hbWUgPSBcItC30LDQv9C40YHRjFwiO1xyXG4gICAgICAgIGlmIChyb3cuZ2V0Q2xhc3NOYW1lKVxyXG4gICAgICAgICAgICBvYmplY3RDbGFzc05hbWUgPSByb3cuZ2V0Q2xhc3NOYW1lKCk7XHJcblxyXG4gICAgICAgIGxldCBvYmplY3ROYW1lID0gXCJcIjtcclxuICAgICAgICBpZiAocm93LnRvU3RyaW5nKVxyXG4gICAgICAgICAgICBvYmplY3ROYW1lID0gcm93LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gPGRpdiBjbGFzc05hbWU9XCJjb2xvci1yZWRcIj7Qo9C00LDQu9C40YLRjCBcIntvYmplY3RDbGFzc05hbWV9XCI/PGJyLz57IG9iamVjdE5hbWUgfTwvZGl2PjtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93RGVsZXRlQ29uZmlybWF0aW9uV2luZG93KG1lc3NhZ2UsIChva1Jlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhva1Jlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChva1Jlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5kZWxldGVSb3cocm93VG9EZWxldGUuc291cmNlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoRGF0YVNvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0ZvY3VzZWRJbmRleCA9IHRoaXMuc3RhdGUucm93cy5pbmRleE9mKHJvd1RvRGVsZXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Rm9jdXNlZEluZGV4ID4gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCAtIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZvY3VzZWRJbmRleCA9IHRoaXMuc3RhdGUucm93cy5sZW5ndGggLSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFJvdyh0aGlzLnN0YXRlLnJvd3NbbmV3Rm9jdXNlZEluZGV4XS5zb3VyY2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuSW5zZXJ0Rm9ybSgpIHtcclxuXHJcbiAgICAgICAgbGV0IGRlc2lnbmVkT2JqZWN0ID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldE5ld1JvdygpO1xyXG5cclxuICAgICAgICBpZiAoZGVzaWduZWRPYmplY3QpIHtcclxuICAgICAgICAgICAgbGV0IHdpbiA9XHJcbiAgICAgICAgICAgICAgICA8T2JqZWN0RGVzaWduZXJcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17ZGVzaWduZWRPYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlQ2hhbmdlcz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuYWRkUm93KGRlc2lnbmVkT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoRGF0YVNvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFJvdyhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLQtNC+0LHQsNCy0LvQtdC90LjQtVwiLFxyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50V2luZG93SWQ6IHRoaXMuZ2V0UGFyZW50V2luZG93SWQoKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRQYXJlbnREZXNrdG9wKCkub3BlbldpbmRvdyh3aW4sIG9wZW5QYXJhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FZGl0Rm9ybShyb3c6IEludGVybmFsUm93KSB7XHJcblxyXG4gICAgICAgIGxldCBkZXNpZ25lZE9iamVjdCA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpW3Jvdy5zb3VyY2VJbmRleF07XHJcblxyXG4gICAgICAgIGxldCB3aW4gPVxyXG4gICAgICAgICAgICA8T2JqZWN0RGVzaWduZXJcclxuICAgICAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0PXtkZXNpZ25lZE9iamVjdH1cclxuICAgICAgICAgICAgICAgIG9uU2F2ZUNoYW5nZXM9eyAoKSA9PiB7IHRoaXMucmVmcmVzaFJvdyhyb3cuc291cmNlSW5kZXgpOyB9fVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtVwiLFxyXG4gICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICBsZWZ0OiA1MCxcclxuICAgICAgICAgICAgcGFyZW50V2luZG93SWQ6IHRoaXMuZ2V0UGFyZW50V2luZG93SWQoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50RGVza3RvcCgpLm9wZW5XaW5kb3cod2luLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUNvbHVtbnMoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zID0gW107XHJcblxyXG4gICAgICAgIC8vINGB0L3QsNGH0LDQu9CwINC60L7Qu9C+0L3QutC4INC30LDQv9C+0LvQvdGP0LXQvCDQuNC3INGC0LXQs9C+0LIgPFRyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgIGxldCBjb2x1bW5zVGFnID0gdGhpcy5nZXRDaGlsZHJlbihUcmVlR3JpZENvbHVtbnMpO1xyXG4gICAgICAgIGNvbHVtbnNUYWcuZm9yRWFjaCgodGFnOiBKU1guRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uVGFnTGlzdCA9IHRoaXMuZ2V0Q2hpbGRyZW5PZlByb3BzKHRhZy5wcm9wcywgVHJlZUdyaWRDb2x1bW4pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1uVGFnTGlzdCA9IGNvbHVtblRhZ0xpc3Quc29ydCgoYTogSlNYLkVsZW1lbnQsIGI6IEpTWC5FbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgQSA9IGEucHJvcHMgYXMgVHJlZUdyaWRDb2x1bW5Qcm9wcztcclxuICAgICAgICAgICAgICAgIGxldCBCID0gYi5wcm9wcyBhcyBUcmVlR3JpZENvbHVtblByb3BzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEEub3JkZXIgLSBCLm9yZGVyO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtblRhZ0xpc3QuZm9yRWFjaCgocHJvcENvbDogSlNYLkVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gbmV3IEludGVybmFsQ29sdW1uKCk7XHJcbiAgICAgICAgICAgICAgICBjb2wucHJvcHMgPSBwcm9wQ29sLnByb3BzO1xyXG4gICAgICAgICAgICAgICAgY29sLndpZHRoID0gcHJvcENvbC5wcm9wcy53aWR0aCB8fCAxNTA7XHJcbiAgICAgICAgICAgICAgICBjb2wuY2FwdGlvbiA9IHByb3BDb2wucHJvcHMuY2FwdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbC5maWVsZE5hbWUgPSBwcm9wQ29sLnByb3BzLnByb3BlcnR5TmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbC5jYXB0aW9uID0gcHJvcENvbC5wcm9wcy5jYXB0aW9uIHx8IGNvbC5maWVsZE5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMucHVzaChjb2wpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0LXRgdC70Lgg0YLQtdCz0L7QsiA8VHJlZUdyaWRDb2x1bW4+INC90LXRgiwg0YLQviDQt9Cw0L/QvtC70L3Rj9C10Lwg0LjQtyBEYXRhU291cmNlXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5pc1RyZWVHcmlkRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRzID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlIGFzIFRyZWVHcmlkRGF0YVNvdXJjZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29sdW1ucyA9IGRzLmdldFRyZWVHcmlkQ29sdW1ucygpLnNvcnQoKGE6IFRyZWVHcmlkQ29sdW1uUHJvcHMsIGI6IFRyZWVHcmlkQ29sdW1uUHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zLmZvckVhY2goKHByb3BDb2w6IFRyZWVHcmlkQ29sdW1uUHJvcHMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IG5ldyBJbnRlcm5hbENvbHVtbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5wcm9wcyA9IHByb3BDb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLndpZHRoID0gcHJvcENvbC53aWR0aCB8fCAxNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLmNhcHRpb24gfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuZmllbGROYW1lID0gcHJvcENvbC5wcm9wZXJ0eU5hbWUgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuY2FwdGlvbiA9IHByb3BDb2wuY2FwdGlvbiB8fCBjb2wuZmllbGROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5wdXNoKGNvbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmVlR3JpZDog0YHQv9C40YHQvtC6INC60L7Qu9C+0L3QvtC6INC90LUg0L7Qv9GA0LXQtNC10LvQtdC9LlwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Rm9jdXNlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOb2RlcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMudHJlZU1vZGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGllcmFyY2h5RmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTm9kZXNGcm9tSGllcmFyY2h5RmllbGQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidW5rbm93biBoaWVyYXJjaHkgbW9kZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOb2Rlc0Zyb21IaWVyYXJjaHlGaWVsZCgpIHtcclxuXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5kYXRhU291cmNlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaGllcmFyY2h5RGVsaW1pdGVycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWFRyZWVHcmlkOiBoaWVyYXJjaHlEZWxpbWl0ZXJzIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGludGVyZmFjZSBJU29ydGVkIHtcclxuICAgICAgICAgICAgaGllcmFyY2h5U3RyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIG9iakluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc29ydGVkOiBJU29ydGVkW10gPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5tYXAoKG9iajogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoaWVyYXJjaHlTdHI6IG9ialt0aGlzLnByb3BzLmhpZXJhcmNoeUZpZWxkTmFtZSB8fCBcIlwiXS50b1N0cmluZygpLCAgLy8gdG9kbyB0aGlzLnByb3BzLmhpZXJhcmNoeUZpZWxkTmFtZSB8fCBcIlwiICA/Pz9cclxuICAgICAgICAgICAgICAgIG9iakluZGV4OiBpbmRleFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb3J0ZWQgPSBfLnNvcnRCeShzb3J0ZWQsIFtcImhpZXJhcmNoeVN0clwiXSk7XHJcblxyXG4gICAgICAgIGxldCBjYWNoZTogeyBbaGllcmFyY2h5SWQ6IHN0cmluZ106IEludGVybmFsVHJlZU5vZGU7IH0gPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ub2RlcyA9IFtdO1xyXG5cclxuICAgICAgICBzb3J0ZWQuZm9yRWFjaCgocywgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBoaWVyYXJjaHlEZWxpbWl0ZXJzPSB0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMgfHwgXCIuXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3BsaXR0ZWQgPSBzLmhpZXJhcmNoeVN0ci5zcGxpdChoaWVyYXJjaHlEZWxpbWl0ZXJzKTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudElkOiBhbnk7XHJcbiAgICAgICAgICAgIGxldCBub2RlSWQ6IGFueTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0dGVkLmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgICAgIG5vZGVJZCA9IHMuaGllcmFyY2h5U3RyO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGVJZCA9IF8ubGFzdChzcGxpdHRlZCk7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRJZCA9IHNwbGl0dGVkLnNsaWNlKDAsIHNwbGl0dGVkLmxlbmd0aCAtIDEpLmpvaW4oaGllcmFyY2h5RGVsaW1pdGVycy5zbGljZSgwLCAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWNoZVtub2RlSWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJYVHJlZUdyaWQ6IG5vZGVJZCAnXCIgKyBub2RlSWQgKyBcIicgaXMgZHVwbGljYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IEludGVybmFsVHJlZU5vZGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zb3VyY2VJbmRleCA9IHMub2JqSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZXZlbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHBhbmRlZCA9IG5vZGUubGV2ZWwgPCB0aGlzLnByb3BzLmF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVbbm9kZUlkXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBjYWNoZVtwYXJlbnRJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgSW50ZXJuYWxUcmVlTm9kZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc291cmNlSW5kZXggPSBzLm9iakluZGV4O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5sZXZlbCA9IHBhcmVudE5vZGUubGV2ZWwgKyAxO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHBhbmRlZCA9IG5vZGUubGV2ZWwgPCB0aGlzLnByb3BzLmF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBjYWNoZVtzLmhpZXJhcmNoeVN0cl0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe3N0cjogcy5oaWVyYXJjaHlTdHIsIHBhcmVudElkLCBub2RlSWR9KTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJvd3MoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUucm93cyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5mb3JFYWNoKChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wdXNoUm93UmVjdXJzaXZlKHRoaXMuc3RhdGUucm93cywgdGhpcy5zdGF0ZS5wYWdlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRhdGFTb3VyY2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmlzVHJlZUdyaWREYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHMgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgYXMgVHJlZUdyaWREYXRhU291cmNlO1xyXG4gICAgICAgICAgICAgICAgZHMuZ2V0RGF0YVJvd3MoKS5mb3JFYWNoKChvYmo6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSBuZXcgSW50ZXJuYWxSb3codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LnNvdXJjZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnB1c2gocm93KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkuZm9yRWFjaCgob2JqOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0gbmV3IEludGVybmFsUm93KHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluaXRGb2N1c2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zICYmIHRoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zWzBdLmZvb3RlciA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCArIFwiINC/0L7Qty5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckRhdGEoKSB7XHJcblxyXG4vLyAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFTb3VyY2UpIHtcclxuLy8gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhID0gdGhpcy5wcm9wcy5kYXRhU291cmNlLm1hcCgocm93KSA9PiByb3cpO1xyXG4vLyAgICAgICAgICAgIH1cclxuICAgICAgICAvL3RoaXMucm93cyA9IHdpbmRvd1tcInh4eFwiXS5maWx0ZXIoKHJvdykgPT4gcm93W1wi0J3QsNC30LLQsNC90LjQtVwiXS5pbmRleE9mKFwiUGhpbFwiKSA+IC0xKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsOiBudW1iZXI7XHJcbiAgICBsYXN0Qm9keVdyYXBwZXJIZWlnaHQgPSAwO1xyXG4gICAgbGFzdEJvZHlXcmFwcGVyV2lkdGggPSAwO1xyXG5cclxuICAgIGhhbmRsZUJvZHlXcmFwcGVyRWxlbWVudFJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGlmIChuZXdIZWlnaHQgIT09IHRoaXMubGFzdEJvZHlXcmFwcGVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEJvZHlXcmFwcGVySGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV3V2lkdGggPSB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBpZiAobmV3V2lkdGggIT09IHRoaXMubGFzdEJvZHlXcmFwcGVyV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Qm9keVdyYXBwZXJXaWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcclxuICAgICAgICB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5oYW5kbGVCb2R5V3JhcHBlckVsZW1lbnRSZXNpemUsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbnMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wYWdlTGVuZ3RoID0gNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWZyZXNoRGF0YVNvdXJjZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSB0ZXN0TG9hZDUwMCgpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgLy8gICAgICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0YWJsZS5yb3dzLm1hcCgocikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB70JrQu9GO0Yc6IHJbXCLQmtC70Y7Rh1wiXSwg0J3QvtC80LXRgDogcltcItCd0L7QvNC10YBcIl0sINCd0LDQt9Cy0LDQvdC40LU6IHJbXCLQndCw0LfQstCw0L3QuNC1XCJdfTtcclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgdG9wIDUwMDYqINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQmtC70Y7RhyAtLT4gXCIgKyB0YWJsZS5yb3dzWzBdLmdldFZhbHVlKDIpKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogVHJlZUdyaWRQcm9wcykge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkVXBkYXRlKHByZXZQcm9wczogVHJlZUdyaWRQcm9wcywgcHJldlN0YXRlOiBhbnksIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclJvd3MoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlclJvd3Mtc3RhcnQoKVwiKTtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLXJvd3M6IFwiICsgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLmZvckVhY2goKHJvdzogSW50ZXJuYWxSb3csIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0LnB1c2godGhpcy5yZW5kZXJSb3cocm93LCBpbmRleCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVuZGVyUm93cy1lbmQoKVwiKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUm93KHJvdzogSW50ZXJuYWxSb3csIHJvd0luZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Jvd0luZGV4fVxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHsgcm93LmVsZW1lbnQgPSBlO319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDZWxscyhyb3csIHJvd0luZGV4KX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2VsbHMocm93OiBJbnRlcm5hbFJvdywgcm93SW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgY29sSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXQucHVzaCh0aGlzLnJlbmRlckNlbGwocm93LCByb3dJbmRleCwgY29sLCBjb2xJbmRleCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDZWxsKHJvdzogSW50ZXJuYWxSb3csIHJvd0luZGV4OiBudW1iZXIsIGNvbDogSW50ZXJuYWxDb2x1bW4sIGNvbEluZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBvYmpJbmRleCA9IHJvdy5zb3VyY2VJbmRleDtcclxuICAgICAgICBsZXQgc3RyID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKClbb2JqSW5kZXhdW2NvbC5wcm9wcy5wcm9wZXJ0eU5hbWUgfHwgXCJcIl0udG9TdHJpbmcoKTsgIC8vIHRvZG8gY29sLnByb3BzLnByb3BlcnR5TmFtZSB8fCBcIlwiIFxyXG4gICAgICAgIC8vbGV0IHN0ciA9IHRoaXMucm93c1tyb3dJbmRleF0uc291cmNlT2JqZWN0W2NvbC5wcm9wcy5wcm9wZXJ0eU5hbWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8gcmV0dXJuIDx0ZCBrZXk9e2NvbEluZGV4fT5cclxuICAgICAgICAvLyAgICAgPGRpdiBzdHlsZT17e2hlaWdodDoxNiwgb3ZlcmZsb3c6XCJoaWRkZW5cIn19PntzdHJ9PC9kaXY+XHJcbiAgICAgICAgLy8gPC90ZD47XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gcm93Lm5vZGU7XHJcblxyXG4gICAgICAgIGxldCBoaWVyYXJjaHlQYWRkaW5nRGl2OiBSZWFjdC5SZWFjdE5vZGU9W107XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgKGNvbC5wcm9wcy5zaG93SGllcmFyY2h5UGFkZGluZyB8fCBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpKSB7XHJcbiAgICAgICAgICAgIGhpZXJhcmNoeVBhZGRpbmdEaXYgPSA8c3BhbiBzdHlsZT17e3dpZHRoOm5vZGUubGV2ZWwgKiAyMCwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19Pjwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpIHtcclxuICAgICAgICAgICAgdGRTdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IFwicmdiYSgyNTUsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RyU3BhblN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUgJiYgbm9kZS5leHBhbmRlZCAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RyU3BhblN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0clNwYW4gPSA8c3BhbiBzdHlsZT17IHN0clNwYW5TdHlsZX0+e3N0cn08L3NwYW4+O1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbGxhcHNlSWNvbkRpdjogUmVhY3QuUmVhY3ROb2RlPVtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdy1jb2xsYXBzZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4ge25vZGUuZXhwYW5kZWQgPSBmYWxzZTsgdGhpcy5jcmVhdGVSb3dzKCk7IHRoaXMuZm9yY2VVcGRhdGUoKTt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlSWNvbkRpdiA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7bm9kZS5leHBhbmRlZCA9IHRydWU7IHRoaXMuY3JlYXRlUm93cygpOyB0aGlzLmZvcmNlVXBkYXRlKCk7fSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2NvbEluZGV4fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3RkU3R5bGV9XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gcm93LmNlbGxFbGVtZW50c1tjb2xJbmRleF0gPSBlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7IHRoaXMuc2V0Rm9jdXNlZENlbGwocm93SW5kZXgsY29sSW5kZXgpO30gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jaGVja2JveFwiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctcGFkZGluZ1wiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGllcmFyY2h5UGFkZGluZ0Rpdn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2NvbGxhcHNlSWNvbkRpdn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaWNvblwiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zdHJcIiBzdHlsZT17eyBmbGV4OiBcIjAgMSBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0clNwYW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Rm9jdXNlZENlbGwocm93SW5kZXg6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPSByb3dJbmRleDtcclxuICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXggPSBjZWxsSW5kZXg7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVGFibGVXaGVlbChlOiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKGUuZGVsdGFZID4gMClcclxuICAgICAgICAvLyAgICAgdGhpcy5pbmNQYWdlU3RhcnRJbmRleCgzKTtcclxuICAgICAgICAvLyBlbHNlIGlmIChlLmRlbHRhWSA8IDApXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZGVjUGFnZVN0YXJ0SW5kZXgoMyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZWx0YVkpO1xyXG4gICAgICAgIC8vIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICAkKHRoaXMuc3RhdGUuaGVhZGVyV3JhcHBlckVsZW1lbnQpLmNzcyh7dG9wOiB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3B9KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LmNsaWVudEhlaWdodCAtICQodGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKSAtIDA7XHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5jc3Moe3RvcDogcG9zfSk7XHJcblxyXG4gICAgICAgICQodGhpcy5zdGF0ZS5oZWFkZXJGYWtlUm93KS5jc3Moe2hlaWdodDogJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpfSk7XHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmZvb3RlckZha2VSb3cpLmNzcyh7aGVpZ2h0OiAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCl9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VGb2N1c2VkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChyb3c6IEludGVybmFsUm93KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZWxlbWVudClcclxuICAgICAgICAgICAgICAgICQocm93LmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtcm93XCIpO1xyXG5cclxuICAgICAgICAgICAgcm93LmNlbGxFbGVtZW50cy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbClcclxuICAgICAgICAgICAgICAgICAgICAkKGNlbGwpLnJlbW92ZUNsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtY2VsbFwiKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZm9jdXNlZFJvdyA9IHRoaXMuc3RhdGUucm93c1t0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleF07XHJcbiAgICAgICAgaWYgKGZvY3VzZWRSb3cgJiYgZm9jdXNlZFJvdy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZm9jdXNlZFJvdy5lbGVtZW50KS5hZGRDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLXJvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmb2N1c2VkQ2VsbEVsZW1lbnQgPSBmb2N1c2VkUm93LmNlbGxFbGVtZW50c1t0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoZm9jdXNlZENlbGxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKGZvY3VzZWRDZWxsRWxlbWVudCkuYWRkQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1jZWxsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb2N1c2VkQ2VsbEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdLmNlbGxFbGVtZW50c1t0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxEb3duKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvd0VsID0gJCh0aGlzLmdldEZvY3VzZWRSb3dFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgLy8g0YPRiNC70L4g0LfQsCDQv9GA0LXQtNC10LvRiyDQstC40LTQuNC80L7RgdGC0LhcclxuICAgICAgICAgICAgaWYgKHJvd0VsLnBvc2l0aW9uKCkudG9wICsgcm93RWwuaGVpZ2h0KCkgPlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgPSByb3dFbC5wb3NpdGlvbigpLnRvcCArIHJvd0VsLmhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5jbGllbnRIZWlnaHQgKyAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsTGVmdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXgtLTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbFJpZ2h0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXggPCB0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxVcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4LS07XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvd0VsID0gJCh0aGlzLmdldEZvY3VzZWRSb3dFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgLy8g0YPRiNC70L4g0LfQsCDQv9GA0LXQtNC10LvRiyDQstC40LTQuNC80L7RgdGC0LhcclxuICAgICAgICAgICAgaWYgKHJvd0VsLnBvc2l0aW9uKCkudG9wIDwgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgPSByb3dFbC5wb3NpdGlvbigpLnRvcCAtICQodGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQm9keUtleURvd24oZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gS2V5Y29kZS5Eb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsRG93bigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLlVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsVXAoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5MZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsTGVmdCgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLlJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsUmlnaHQoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5SZXNpemVTdGFydCA9IChldmVudDogTW92ZVN0YXJ0RXZlbnQsIGNvbDogSW50ZXJuYWxDb2x1bW4pOiB2b2lkID0+IHtcclxuICAgICAgICBldmVudC5iaW5kWChjb2wsIFwid2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKGNvbC5oZWFkZXJXaWR0aE5hdGl2ZUVsZW1lbnQpLmF0dHIoXCJ3aWR0aFwiLCBjb2wud2lkdGgpO1xyXG4gICAgICAgICAgICAkKGNvbC5ib2R5V2lkdGhOYXRpdmVFbGVtZW50KS5hdHRyKFwid2lkdGhcIiwgY29sLndpZHRoKTtcclxuICAgICAgICAgICAgJChjb2wuZm9vdGVyV2lkdGhOYXRpdmVFbGVtZW50KS5hdHRyKFwid2lkdGhcIiwgY29sLndpZHRoKTtcclxuICAgICAgICAgICAgbGV0IHRhYmxlV2lkdGggPSB0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuaGVhZGVyVGFibGVFbGVtZW50KS5jc3MoXCJ3aWR0aFwiLCB0YWJsZVdpZHRoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnN0YXRlLmJvZHlUYWJsZUVsZW1lbnQpLmNzcyhcIndpZHRoXCIsIHRhYmxlV2lkdGgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuZm9vdGVyVGFibGVFbGVtZW50KS5jc3MoXCJ3aWR0aFwiLCB0YWJsZVdpZHRoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudCkuY3NzKFwibWF4LXdpZHRoXCIsIHRhYmxlV2lkdGggKyBnZXRTY3JvbGxiYXJXaWR0aCgpICsgMSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlT25DbGljayhudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyQ29sdW1uSGVhZGVycygpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xIZWFkZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHtjb2wuaGVhZGVyV2lkdGhOYXRpdmVFbGVtZW50ID0gZTt9IH1cclxuICAgICAgICAgICAgICAgIC8+KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZFN0eWxlOiBhbnkgPSB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9O1xyXG5cclxuICAgICAgICAgICAgY29sSGVhZGVycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGRTdHlsZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sLmNhcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDowLCB3aWR0aDo1LCByaWdodDowLCBib3R0b206MCwgY3Vyc29yOlwiY29sLXJlc2l6ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9eyAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50KSA9PiB7IHRoaXMuY29sdW1uUmVzaXplU3RhcnQoZXZlbnQsIGNvbCk7IGNvbnNvbGUubG9nKFwiTW92ZVN0YXJ0XCIpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDowLCB3aWR0aDogaW5kZXggPT09IDAgPyAwIDogNSwgbGVmdDowLCBib3R0b206MCwgY3Vyc29yOlwiY29sLXJlc2l6ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9eyAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINGA0LXRgdCw0LnQt9C40Lwg0L/RgNC10LTRi9C00YPRidGD0Y4g0LrQvtC70L7QvdC60YNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5SZXNpemVTdGFydChldmVudCwgdGhpcy5zdGF0ZS5jb2x1bW5zW2luZGV4IC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90ZD4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RhYmxlTGF5b3V0OiBcImZpeGVkXCIsYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgd2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuaGVhZGVyVGFibGVFbGVtZW50ID0gZX1cclxuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sV2lkdGhzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbEhlYWRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb2x1bW5Gb290ZXJzKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xGb290ZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBpc0Zvb3RlckVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaChcclxuICAgICAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB7Y29sLmZvb3RlcldpZHRoTmF0aXZlRWxlbWVudCA9IGU7fSB9XHJcbiAgICAgICAgICAgICAgICAvPik7XHJcbiAgICAgICAgICAgIGlmIChjb2wuZm9vdGVyKVxyXG4gICAgICAgICAgICAgICAgaXNGb290ZXJFbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuICAgICAgICAgICAgY29sRm9vdGVycy5wdXNoKDx0ZCBrZXk9e2luZGV4fSBzdHlsZT17dGRTdHlsZX0+e2NvbC5mb290ZXJ9PC90ZD4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWlzRm9vdGVyRW1wdHkpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50ID0gZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtZm9vdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0YWJsZUxheW91dDogXCJmaXhlZFwiLGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsIHdpZHRoOnRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5mb290ZXJUYWJsZUVsZW1lbnQgPSBlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xXaWR0aHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbEZvb3RlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2U6IFJlYWN0LlJlYWN0Tm9kZSA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXRFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtZW1wdHktYm9keVwiPnttZXNzYWdlfTwvZGl2Pik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyR3JpZEJvZHkoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBsZXQgY29sV2lkdGhzOiBSZWFjdC5SZWFjdE5vZGVbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHtjb2wuYm9keVdpZHRoTmF0aXZlRWxlbWVudCA9IGU7fSB9XHJcbiAgICAgICAgICAgICAgICAvPik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICBvbktleURvd249eyAoZSkgPT4geyAgdGhpcy5oYW5kbGVCb2R5S2V5RG93bihlKTsgfSB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0YWJsZUxheW91dDogXCJmaXhlZFwiLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpfX1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmJvZHlUYWJsZUVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbFdpZHRoc31cclxuICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmhlYWRlckZha2VSb3cgPSBlfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJvd3MoKX1cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOlwibm9uZVwiIH19IHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmZvb3RlckZha2VSb3cgPSBlfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCk6IG51bWJlciB7XHJcblxyXG4gICAgICAgIGxldCByZXQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY29sLmhpZGRlbilcclxuICAgICAgICAgICAgICAgIHJldCArPSBjb2wud2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzOiBUcmVlR3JpZFByb3BzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGFsbG93LXRyZWUtZ3JpZFwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic2hhbGxvdy13aW4gLT4gaXNFcWlhbCA9IFwiICsgdGhpcy5pc1Byb3BzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzLCBbXCJjaGlsZHJlblwiXSkpO1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc1Byb3BzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzLCBbXCJjaGlsZHJlblwiLCBcImRhdGFTb3VyY2VcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVkaXRhYmxlQnV0dG9ucygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgYnV0dG9uczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZW55SW5zZXJ0ICE9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiaW5zZXJ0XCIgY2xhc3NOYW1lPVwiaXMtb3V0bGluZWQgaXMtc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW5zZXJ0QnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVueVVwZGF0ZSAhPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLW91dGxpbmVkIGlzLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JjQt9C80LXQvdC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRlbnlEZWxldGUgIT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICBidXR0b25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJkZWxldGVcIiBjbGFzc05hbWU9XCJpcy1vdXRsaW5lZCBpcy1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy90aGlzLmFkZENsYXNzTmFtZShcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci10cmVlLWdyaWRcIik7XHJcblxyXG4gICAgICAgIGxldCBtYXhCb2R5V3JhcHBlcldpZHRoID0gdGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKSArIGdldFNjcm9sbGJhcldpZHRoKCkgKyAxO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICBtYXhCb2R5V3JhcHBlcldpZHRoID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJ0cmVlLWdyaWRcIiB0eXBlPVwiY29sdW1uXCIgc2l6ZVRvPVwicGFyZW50XCIgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1oZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoIDUwMDFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZmlsdGVyRGF0YSgpOyB0aGlzLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwiZm9yY2VVcGRhdGVcIik7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZXhwYW5kQWxsKCk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmNvbGxhcHNlQWxsKCk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZSBhbGxcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICDQt9Cw0LPQvtC70L7QstC+0Log0Lgg0YIu0LQuXHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1ib2R5LXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOlwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6XCJhdXRvXCIsIGZsZXg6XCIxXCIsIG1heFdpZHRoOiBtYXhCb2R5V3JhcHBlcldpZHRoIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25TY3JvbGw9eyB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlOmFueSkgPT4ge3RoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50ID0gZTt9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UoKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJHcmlkQm9keSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbHVtbkhlYWRlcnMoKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2x1bW5Gb290ZXJzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtZm9vdGVyLXdyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwicm93XCIgc2l6ZVRvPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFZGl0YWJsZUJ1dHRvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpcy1zbWFsbG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktGL0LHRgNCw0YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImlzLXNtYWxsblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQgPlxyXG4gICAgICAgICAgICA8L0xheW91dCA+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3hcbiAqKi8iLCLvu79pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRDb2x1bW5zUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIC8vY2FwdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkQ29sdW1ucyBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZENvbHVtbnNQcm9wcywgYW55PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZWVHcmlkQ29sdW1uc1Byb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1ucy50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtyZWdpc3RlckdyaWRDb2x1bW4sIEdyaWRDb2x1bW5JbmZvfSBmcm9tIFwiLi9yZWdpc3RlckdyaWRDb2x1bW5cIjtcclxuLy9pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZENvbHVtblByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBjYXB0aW9uPzogc3RyaW5nO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBwcm9wZXJ0eU5hbWU/OiBzdHJpbmc7XHJcbiAgICBzaG93SGllcmFyY2h5VHJlZT86IGJvb2xlYW47XHJcbiAgICBzaG93SGllcmFyY2h5UGFkZGluZz86IGJvb2xlYW47XHJcbiAgICBvcmRlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkQ29sdW1uIGV4dGVuZHMgQ29tcG9uZW50PFRyZWVHcmlkQ29sdW1uUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZENvbHVtblByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5zdGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZENvbHVtblBhcmFtcyBleHRlbmRzIFRyZWVHcmlkQ29sdW1uUHJvcHMge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdyaWRDb2x1bW4ocGFyYW1zOiBHcmlkQ29sdW1uUGFyYW1zKTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coe3RhcmdldCwgcHJvcGVydHlOYW1lLCBjb25zdHI6dGFyZ2V0LmNvbnN0cnVjdG9yfSk7XHJcblxyXG4gICAgICAgIGxldCByZWdDb2x1bW46IEdyaWRDb2x1bW5JbmZvID0ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogdGFyZ2V0LmNvbnN0cnVjdG9yXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgXy5hc3NpZ24ocmVnQ29sdW1uLCBwYXJhbXMpO1xyXG4gICAgICAgIHJlZ2lzdGVyR3JpZENvbHVtbihyZWdDb2x1bW4pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXJHcmlkQ29sdW1uKHtcclxuICAgICAgICAvLyAgICAgY2FwdGlvbjogcGFyYW1zLmNhcHRpb24sXHJcbiAgICAgICAgLy8gICAgIHdpZHRoOiBwYXJhbXMud2lkdGgsXHJcbiAgICAgICAgLy8gICAgIHNob3dIaWVyYXJjaHlUcmVlOiBwYXJhbXMuc2hvd0hpZXJhcmNoeVRyZWUsXHJcbiAgICAgICAgLy8gICAgIHNob3dIaWVyYXJjaHlQYWRkaW5nOiBwYXJhbXMuc2hvd0hpZXJhcmNoeVBhZGRpbmcsXHJcbiAgICAgICAgLy8gICAgIG9yZGVyOiBwYXJhbXMub3JkZXIgfHwgMCxcclxuICAgICAgICAvLyAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgLy8gICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvcixcclxuICAgICAgICAvLyB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uLnRzeFxuICoqLyIsImltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtblByb3BzfSBmcm9tIFwiLi9UcmVlR3JpZENvbHVtblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcmlkQ29sdW1uSW5mbyBleHRlbmRzIFRyZWVHcmlkQ29sdW1uUHJvcHMge1xyXG4gICAgLy9wcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICAgIG9iamVjdFR5cGU6IHR5cGVvZiBEZXNpZ25lZE9iamVjdDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckdyaWRDb2x1bW4oY29sdW1uSW5mbzogR3JpZENvbHVtbkluZm8pIHtcclxuXHJcbiAgICBsZXQgb2JqVHlwZTogYW55ID0gY29sdW1uSW5mby5vYmplY3RUeXBlO1xyXG5cclxuICAgIGlmICghb2JqVHlwZS4kJGdyaWRDb2x1bW5JbmZvcylcclxuICAgICAgICBvYmpUeXBlLiQkZ3JpZENvbHVtbkluZm9zID0gW107XHJcblxyXG4gICAgb2JqVHlwZS4kJGdyaWRDb2x1bW5JbmZvcy5wdXNoKGNvbHVtbkluZm8pO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJyZWdpc3RlclByb3BlcnR5RWRpdG9yIFwiICsgZWRpdG9yLnByb3BlcnR5TmFtZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVkaXRvcik7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL3JlZ2lzdGVyR3JpZENvbHVtbi50c1xuICoqLyIsIlxyXG5leHBvcnQgdmFyIEtleWNvZGUgPSB7XHJcbiAgICBFc2M6IFwiRXNjYXBlXCIsXHJcbiAgICBTcGFjZTogXCIgXCIsXHJcblxyXG4gICAgTGVmdDogXCJBcnJvd0xlZnRcIixcclxuICAgIFVwOiBcIkFycm93VXBcIixcclxuICAgIERvd246IFwiQXJyb3dEb3duXCIsXHJcbiAgICBSaWdodDogXCJBcnJvd1JpZ2h0XCIsXHJcblxyXG4gICAgRGVsOiBcIkRlbGV0ZVwiLFxyXG4gICAgSW5zOiBcIkluc2VydFwiLFxyXG5cclxuICAgIFdpbjogXCJNZXRhXCIsXHJcbiAgICBNZW51OiBcIkNvbnRleHRNZW51XCIsXHJcblxyXG4gICAgU2Nyb2xsOiBcIlNjcm9sbExvY2tcIixcclxuICAgIE51bTogXCJOdW1Mb2NrXCIsXHJcblxyXG4gICAgQmFja3NwYWNlOiBcIkJhY2tzcGFjZVwiLFxyXG4gICAgVGFiOiBcIlRhYlwiLFxyXG4gICAgRW50ZXI6IFwiRW50ZXJcIixcclxuICAgIFNoaWZ0OiBcIlNoaWZ0XCIsXHJcbiAgICBDb250cm9sOiBcIkNvbnRyb2xcIixcclxuICAgIEFsdDogXCJBbHRcIixcclxuICAgIEJyZWFrOiBcIlBhdXNlXCIsXHJcbiAgICBDYXBzTG9jazogXCJDYXBzTG9ja1wiLFxyXG5cclxuICAgIFBhZ2VVcDogXCJQYWdlVXBcIixcclxuICAgIFBhZ2VEb3duOiBcIlBhZ2VEb3duXCIsXHJcbiAgICBFbmQ6IFwiRW5kXCIsXHJcbiAgICBIb21lOiBcIkhvbWVcIixcclxuXHJcbiAgICBGMTogXCJGMVwiLFxyXG4gICAgRjI6IFwiRjJcIixcclxuICAgIEYzOiBcIkYzXCIsXHJcbiAgICBGNDogXCJGNFwiLFxyXG4gICAgRjU6IFwiRjVcIixcclxuICAgIEY2OiBcIkY2XCIsXHJcbiAgICBGNzogXCJGN1wiLFxyXG4gICAgRjg6IFwiRjhcIixcclxuICAgIEY5OiBcIkY5XCIsXHJcbiAgICBGMTA6IFwiRjEwXCIsXHJcbiAgICBGMTE6IFwiRjExXCIsXHJcbiAgICBGMTI6IFwiRjEyXCJcclxuXHJcbn07XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9LZXljb2RlLnRzXG4gKiovIiwibGV0IGNhY2hlV2lkdGggPSAwO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGV2OiBVSUV2ZW50KSA9PiB7XHJcbiAgICBjYWNoZVdpZHRoID0gMDtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzaXplXCIpO1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcclxuICAgIGlmIChjYWNoZVdpZHRoID4gMClcclxuICAgICAgICByZXR1cm4gY2FjaGVXaWR0aDtcclxuXHJcbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcclxuICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9IFwic2Nyb2xsYmFyXCI7IC8vIG5lZWRlZCBmb3IgV2luSlMgYXBwc1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xyXG5cclxuICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XHJcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XHJcblxyXG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XHJcblxyXG4gICAgdmFyIHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xyXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XHJcblxyXG4gICAgY2FjaGVXaWR0aCA9IHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XHJcbiAgICByZXR1cm4gY2FjaGVXaWR0aDtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL2dldFNjcm9sbEJhcldpZHRoLnRzXG4gKiovIiwi77u/aW1wb3J0ICogYXMgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuXHJcblxyXG5sZXQgc29ja2V0ID0gaW8uY29ubmVjdCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTUUwoc3FsOiBzdHJpbmcpOiBKUXVlcnlQcm9taXNlPERhdGFUYWJsZXxzdHJpbmc+IHtcclxuICAgIC8vY29uc29sZS5sb2coXCJjYWxsIFNRTC5zcWwuZXhlY3V0ZVwiKTtcclxuICAgIC8vcmV0dXJuIHNpZ25hbFIuZXhlY3V0ZVNRTChzcWwpO1xyXG5cclxuXHJcbiAgICBsZXQgcHJvbWlzZTogSlF1ZXJ5RGVmZXJyZWQ8RGF0YVRhYmxlPjtcclxuICAgIHByb21pc2UgPSAkLkRlZmVycmVkPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAvLyAgc29ja2V0Lm9uY2UoJ2Nvbm5lY3QnLCgpID0+IHtcclxuICAgIGxldCBxdWVyeUlkID0gXCJxdWVyeS1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xyXG4gICAgc29ja2V0LmVtaXQoXCJleGVjdXRlU1FMXCIsIHtxdWVyeUlkLCBzcWx9KTtcclxuICAgIHNvY2tldC5vbmNlKHF1ZXJ5SWQsIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhQ29sdW1uID0gbmV3IERhdGFDb2x1bW4oZGF0YVRhYmxlLCByZXNwb25zZS5jb2x1bW5zW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVRhYmxlLmNvbHVtbnMucHVzaChkYXRhQ29sdW1uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2Uucm93cy5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhUm93ID0gbmV3IERhdGFSb3coZGF0YVRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFUYWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbHVtbnNbaV0ucGFyc2UgPT09IFwiRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W2RhdGFUYWJsZS5jb2x1bW5zW2ldLm5hbWVdID0gbmV3IERhdGUocm93W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbZGF0YVRhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kYXRhUm93W2ldID0gcm93W2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5yb3dzLnB1c2goZGF0YVJvdyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhVGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vICAgfSk7XHJcblxyXG5cclxuICAgIC8vc2lnbmFsUi5leGVjdXRlU1FMKHNxbCkuXHJcbiAgICAvLyAgICBkb25lKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgbGV0IHJlcyA9IGV2YWwocmVzdWx0KTtcclxuXHJcbiAgICAvLyAgICAgICAgaWYgKHJlcy5lcnJvcikge1xyXG4gICAgLy8gICAgICAgICAgICBwcm9taXNlLnJlamVjdChyZXMuZXJyb3IpO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgbGV0IGRzID0gbmV3IERhdGFzZXQoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgIHJlcy50YWJsZXMuZm9yRWFjaCgodGFibGUpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKGRzKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5uYW1lID0gdGFibGUubmFtZTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRzLnRhYmxlcy5wdXNoKGRhdGFUYWJsZSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFDb2x1bW4gPSBuZXcgRGF0YUNvbHVtbihkYXRhVGFibGUsIHRhYmxlLmNvbHVtbnNbaV0ubmFtZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLmNvbHVtbnMucHVzaChkYXRhQ29sdW1uKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICB0YWJsZS5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YVJvdyA9IG5ldyBEYXRhUm93KCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W3RhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbaV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGUucm93cy5wdXNoKGRhdGFSb3cpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRzKVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pLlxyXG4gICAgLy8gICAgZmFpbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgcHJvbWlzZS5yZWplY3QoXCLQvtGI0LjQsdC60LAgY29ubmVjdGlvbiBzaWduYWxSXCIpO1xyXG4gICAgLy8gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3FsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbn1cclxuXHJcbi8vZXhwb3J0IGVudW0gQ29sdW1uRGF0YVR5cGUgeyBTdHJpbmcsIE51bWJlciwgRGF0YSB9XHJcblxyXG4vL2V4cG9ydCB0eXBlIERhdGFUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZSB7XHJcbiAgICBjb2x1bW5zOiBBcnJheTxEYXRhQ29sdW1uPjtcclxuICAgIHJvd3M6IEFycmF5PERhdGFSb3c+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUNvbHVtbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAvL2RhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlLCBuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSB8fCBcIlwiO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhUm93IHtcclxuICAgIFtpbmRleDogc3RyaW5nXTogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRhYmxlOiBEYXRhVGFibGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZShjb2x1bW5JbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICBpZiAoY29sdW1uSW5kZXggPCAwIHx8IGNvbHVtbkluZGV4ID49IHRoaXMudGFibGUuY29sdW1ucy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRocm93IFwiRGF0YVJvdy5nZXRWYWx1ZShcIiArIGNvbHVtbkluZGV4ICsgXCIpOiBjb2x1bW5JbmRleCBvdXQgb2YgcmFuZ2VcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnRhYmxlLmNvbHVtbnNbY29sdW1uSW5kZXhdLm5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vW2luZGV4OiBudW1iZXJdOiBEYXRhVHlwZTtcclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU1FMLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBpbztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaW9cIlxuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7U3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0xpc3RFZGl0b3J9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0dyaWRDb2x1bW59IGZyb20gXCIuLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcWxUYWJsZSBleHRlbmRzIERlc2lnbmVkT2JqZWN0IHtcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0JjQvNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCY0LzRjyDRgtCw0LHQu9C40YbRi1wiXHJcbiAgICB9KVxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCJzcWwg0LjQvNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcInNxbCDQuNC80Y8g0YLQsNCx0LvQuNGG0YtcIlxyXG4gICAgfSlcclxuXHJcbiAgICBzcWxuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgQExpc3RFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0VGFiOiBcItCa0L7Qu9C+0L3QutC4XCIsXHJcbiAgICAgICAgZ2V0TmV3TGlzdEl0ZW06ICh0YWJsZTogU3FsVGFibGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTcWxUYWJsZUNvbHVtbih0YWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbHVtbnM6IFNxbFRhYmxlQ29sdW1uW10gPSBbXTtcclxuXHJcbiAgICBhZGRDb2x1bW4oaW5pdENhbGxiYWNrPzogKG5ld0NvbHVtbjogU3FsVGFibGVDb2x1bW4pID0+IHZvaWQpOiBTcWxUYWJsZUNvbHVtbiB7XHJcbiAgICAgICAgbGV0IGNvbCA9IG5ldyBTcWxUYWJsZUNvbHVtbih0aGlzKTtcclxuICAgICAgICBpZiAoaW5pdENhbGxiYWNrKVxyXG4gICAgICAgICAgICBpbml0Q2FsbGJhY2soY29sKTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChjb2wpO1xyXG4gICAgICAgIHJldHVybiBjb2w7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJzcWwt0YLQsNCx0LvQuNGG0LBcIjtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcWxUYWJsZUNvbHVtbiBleHRlbmRzIERlc2lnbmVkT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJCR0YWJsZTogU3FsVGFibGUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0YWJsZSgpOiBTcWxUYWJsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR0YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0JjQvNGPINC60L7Qu9C+0L3QutC4XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCY0LzRjyDQutC+0LvQvtC90LrQuFwiXHJcbiAgICB9KVxyXG4gICAgQEdyaWRDb2x1bW4oe2NhcHRpb246IFwi0JjQvNGPINC60L7Qu9C+0L3QutC4XCJ9KVxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLRgtC40L9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwic3FsINGC0LjQvyDQutC+0LvQvtC90LrQuFwiXHJcbiAgICB9KVxyXG4gICAgQEdyaWRDb2x1bW4oe2NhcHRpb246IFwi0KLQuNC/XCJ9KVxyXG4gICAgZGF0YVR5cGU6IHN0cmluZztcclxuXHJcbiAgICBAR3JpZENvbHVtbih7Y2FwdGlvbjogXCJ0ZXN0XCIsIG9yZGVyOiAtMX0pXHJcbiAgICBnZXQgdGVzdENvbHVtbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIitcIiArIHRoaXMuZGF0YVR5cGUgKyBcIi0+XCIgKyB0aGlzLnRhYmxlLm5hbWUgKyAodGhpcy50YWJsZSBhcyBhbnkpLiQkdW5pcXVlT2JqZWN0SWQ7XHJcbiAgICB9O1xyXG5cclxuICAgICQkdGVzdE9iamVjdDogYW55O1xyXG5cclxuICAgIGdldENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJzcWwt0LrQvtC70L7QvdC60LBcIjtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCIgb2YgKFwiICsgdGhpcy50YWJsZS5uYW1lICsgXCIpXCI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtc3FsL1NxbFRhYmxlLnRzXG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QmFzZVByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0lucHV0VHlwZSwgSW5wdXR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge1RyZWVHcmlkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5zfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uc1wiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1ufSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRBcnJheURhdGFTb3VyY2V9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRBcnJheURhdGFTb3VyY2VcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdFByb3BlcnR5RWRpdG9yIGV4dGVuZHMgQmFzZVByb3BlcnR5RWRpdG9yIHtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0gPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2UgPT09IFwiICsgdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWUgKyBcIiBcIiArIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgYXV0b0Zvcm1Db250cm9sUHJvcHM6IEF1dG9Gb3JtQ29udHJvbFByb3BzID0ge1xyXG4gICAgICAgICAgICBpbnB1dENhcHRpb246IHRoaXMucHJvcHMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgICAgICBpbnB1dFRhYjogdGhpcy5wcm9wcy5pbnB1dFRhYixcclxuICAgICAgICAgICAgaW5wdXRHcm91cDogdGhpcy5wcm9wcy5pbnB1dEdyb3VwLFxyXG4gICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmlucHV0RGVzY3JpcHRpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKGF1dG9Gb3JtQ29udHJvbFByb3BzKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIChcclxuICAgICAgICAvLyAgICAgPElucHV0XHJcbiAgICAgICAgLy8gICAgICAgICB0eXBlPXtJbnB1dFR5cGUuVGV4dH1cclxuICAgICAgICAvLyAgICAgICAgIGJpbmRPYmplY3Q9e3RoaXMucHJvcHMuZGVzaWduZWRPYmplY3R9XHJcbiAgICAgICAgLy8gICAgICAgICBiaW5kUHJvcE5hbWU9e3RoaXMucHJvcHMucHJvcGVydHlOYW1lfVxyXG4gICAgICAgIC8vICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgLy8gICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgIC8vICAgICAvPlxyXG4gICAgICAgIC8vICk7XHJcblxyXG5cclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IG5ldyBUcmVlR3JpZEFycmF5RGF0YVNvdXJjZSh0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSk7XHJcbiAgICAgICAgZGF0YVNvdXJjZS5wYXJhbXMuZ2V0TmV3Um93ID0gKCkgPT4gdGhpcy5wcm9wcy5jdXN0b21QYXJhbXMuZ2V0TmV3TGlzdEl0ZW0odGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUcmVlR3JpZFxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17IGRhdGFTb3VyY2UgfVxyXG4gICAgICAgICAgICAgICAgdHJlZU1vZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9UcmVlR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuLy8gPFRyZWVHcmlkQ29sdW1ucz5cclxuLy8gPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQmNC80Y8g0LrQvtC70L7QvdC60LhcIiBwcm9wZXJ0eU5hbWU9XCJuYW1lXCIgd2lkdGg9ezEwMH0+XHJcbi8vICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4vLyAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQotC40L8g0LTQsNC90L3Ri9GFXCIgcHJvcGVydHlOYW1lPVwiZGF0YVR5cGVcIiB3aWR0aD17MTUwfT5cclxuLy8gICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbi8vICAgICA8L1RyZWVHcmlkQ29sdW1ucz5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEVkaXRvclBhcmFtcyBleHRlbmRzIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuICAgIGdldE5ld0xpc3RJdGVtPzogKGxpc3RPd25lcjogRGVzaWduZWRPYmplY3QpID0+IERlc2lnbmVkT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGlzdEVkaXRvcihwYXJhbXM6IExpc3RFZGl0b3JQYXJhbXMpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3Ioe1xyXG4gICAgICAgICAgICBpbnB1dENhcHRpb246IHBhcmFtcy5pbnB1dENhcHRpb24sXHJcbiAgICAgICAgICAgIGlucHV0VGFiOiBwYXJhbXMuaW5wdXRUYWIsXHJcbiAgICAgICAgICAgIGlucHV0R3JvdXA6IHBhcmFtcy5pbnB1dEdyb3VwLFxyXG4gICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBwYXJhbXMuaW5wdXREZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgZWRpdG9yVHlwZTogTGlzdFByb3BlcnR5RWRpdG9yLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgY3VzdG9tUGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvTGlzdFByb3BlcnR5RWRpdG9yLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5Qcm9wc30gZnJvbSBcIi4vVHJlZUdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtUcmVlR3JpZERhdGFTb3VyY2V9IGZyb20gXCIuL1RyZWVHcmlkRGF0YVNvdXJjZVwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7Z2V0R3JpZENvbHVtbkluZm9zfSBmcm9tIFwiLi9nZXRHcmlkQ29sdW1uSW5mb3NcIjtcclxuaW1wb3J0IHt0aHJvd0Vycm9yfSBmcm9tIFwiLi4vLi4vRXJyb3JcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRBcnJheURhdGFTb3VyY2VQYXJhbXM8VD4ge1xyXG5cclxuICAgIGdldE5ld1Jvdz86ICgpID0+IFQ7XHJcbiAgICBnZXRFbXB0eURhdGFTb3VyY2VNZXNzYWdlPzogKCkgPT4gUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgZ2V0RGVsZXRlUm93TWVzc2FnZT86ICgpID0+IFJlYWN0LlJlYWN0Tm9kZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZEFycmF5RGF0YVNvdXJjZTxUIGV4dGVuZHMgRGVzaWduZWRPYmplY3Q+IGltcGxlbWVudHMgVHJlZUdyaWREYXRhU291cmNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcnJheU9iajogVFtdLCBwdWJsaWMgcGFyYW1zOiBUcmVlR3JpZEFycmF5RGF0YVNvdXJjZVBhcmFtczxUPiA9IHt9KSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgaXNUcmVlR3JpZERhdGFTb3VyY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJlZUdyaWRDb2x1bW5zKCk6IFRyZWVHcmlkQ29sdW1uUHJvcHNbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJyYXlPYmoubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0R3JpZENvbHVtbkluZm9zKHRoaXMuYXJyYXlPYmpbMF0pLm1hcDxUcmVlR3JpZENvbHVtblByb3BzPigoY29sKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJldDogYW55ID0ge307XHJcbiAgICAgICAgICAgICAgICBfLmFzc2lnbihyZXQsIGNvbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhcHRpb246IGNvbC5jYXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiBjb2wud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgb3JkZXI6IGNvbC5vcmRlcixcclxuICAgICAgICAgICAgICAgIC8vICAgICBwcm9wZXJ0eU5hbWU6IGNvbC5wcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2hvd0hpZXJhcmNoeVRyZWU6IGNvbC5zaG93SGllcmFyY2h5VHJlZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBzaG93SGllcmFyY2h5UGFkZGluZzogY29sLnNob3dIaWVyYXJjaHlQYWRkaW5nXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGFSb3dzKCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV3Um93KCk6IFQge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5nZXROZXdSb3cpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtcy5nZXROZXdSb3coKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3dFcnJvcihcIlRyZWVHcmlkQXJyYXlEYXRhU291cmNlOiBtZXRob2QgZ2V0TmV3Um93KCkgbm90IGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93ICBcIlwiOyAgLy8gZmFrZSB0eXBlc2NyaXB0IDJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUm93KHJvdzogVCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5hcnJheU9iai5wdXNoKHJvdyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlPYmoubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVSb3cocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkZWxldGVkSXRlbXMgPSBfLnB1bGxBdCh0aGlzLmFycmF5T2JqLCByb3dJbmRleCk7XHJcbiAgICAgICAgaWYgKGRlbGV0ZWRJdGVtcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRocm93RXJyb3IoXCJUcmVlR3JpZEFycmF5RGF0YVNvdXJjZS5kZWxldGVSb3coKTogaW52YWxpZCByb3dJbmRleCAoXCIgKyByb3dJbmRleCArIFwiKVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtcy5nZXRFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gXCLQn9GD0YHRgtC+0Lkg0YHQv9C40YHQvtC6LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlbGV0ZVJvd01lc3NhZ2UoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuZ2V0RGVsZXRlUm93TWVzc2FnZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zLmdldERlbGV0ZVJvd01lc3NhZ2UoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBcItCj0LTQsNC70LjRgtGMINC30LDQv9C40YHRjCFcIjtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRBcnJheURhdGFTb3VyY2UudHN4XG4gKiovIiwiXHJcbmltcG9ydCB7R3JpZENvbHVtbkluZm99IGZyb20gXCIuL3JlZ2lzdGVyR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JpZENvbHVtbkluZm9zKG9iajogRGVzaWduZWRPYmplY3QpOiBHcmlkQ29sdW1uSW5mb1tdIHtcclxuXHJcbiAgICBsZXQgaW5mb3MgPSAob2JqLmNvbnN0cnVjdG9yIGFzIGFueSkuJCRncmlkQ29sdW1uSW5mb3MgYXMgR3JpZENvbHVtbkluZm9bXTtcclxuXHJcbiAgICBpZiAoIWluZm9zKVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICBpbmZvcyA9IGluZm9zLmZpbHRlcigoZWR0KSA9PiBvYmogaW5zdGFuY2VvZiBlZHQub2JqZWN0VHlwZSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldFByb3BlcnR5RWRpdG9yc1wiKSA7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVkaXRvcnMpO1xyXG4gICAgcmV0dXJuIGluZm9zO1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9nZXRHcmlkQ29sdW1uSW5mb3MudHNcbiAqKi8iLCJpbXBvcnQge3Rocm93RXJyb3J9IGZyb20gXCIuLi9idWh0YS1jb3JlL0Vycm9yXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQm9vbGVhbk9wZXI9XCI+XCIgfCBcIjxcIiB8IFwiPj1cIiB8IFwiPD1cIiB8IFwiPD5cIiB8IFwiIT1cIiB8IFwibGlrZVwiO1xyXG5leHBvcnQgdHlwZSBTcWxEaWFsZWN0PSBcIm1zXCIgfCBcInBnXCI7XHJcbmV4cG9ydCB0eXBlIE9wZXJhbmQgPSBzdHJpbmcgfCBDb2x1bW47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbHVtbiB7XHJcbiAgICB0YWJsZT86IHN0cmluZztcclxuICAgIGNvbHVtbj86IHN0cmluZztcclxuICAgIHJhdz86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0Q29sdW1uIGV4dGVuZHMgQ29sdW1uIHtcclxuICAgIGFzPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFRhYmxlIHtcclxuICAgIGRiPzogc3RyaW5nO1xyXG4gICAgdGFibGU/OiBzdHJpbmc7XHJcbiAgICBzZWxlY3Q/OiBJbmxpbmVTZWxlY3RTdG10O1xyXG4gICAgYXM/OiBzdHJpbmc7XHJcbiAgICByYXc/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2hlcmVDbGF1c2Uge1xyXG4gICAgb3BlcmFuZDE6IE9wZXJhbmQ7XHJcbiAgICBvcGVyOiBCb29sZWFuT3BlcjtcclxuICAgIG9wZXJhbmQyOiBPcGVyYW5kO1xyXG59XHJcblxyXG5jbGFzcyBFbWl0dGVyIHtcclxuICAgIHByaXZhdGUgc3FsOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZGlhbGVjdDogU3FsRGlhbGVjdDtcclxuICAgIG5vTGV2ZWxzOiBib29sZWFuO1xyXG5cclxuICAgIGVtaXQoc3RyOiBzdHJpbmcpOiBFbWl0dGVyIHtcclxuICAgICAgICB0aGlzLnNxbC5wdXNoKHN0cik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdExldmVsKGxldmVsOiBzdHJpbmcpOiBFbWl0dGVyIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9MZXZlbHMpXHJcbiAgICAgICAgdGhpcy5zcWwucHVzaChsZXZlbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdExpbmUoKTogRW1pdHRlciB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9MZXZlbHMpXHJcbiAgICAgICAgICB0aGlzLnNxbC5wdXNoKFwiIFwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3FsLnB1c2goXCJcXG5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdFF1b3RlZE5hbWUobmFtZTogc3RyaW5nKTogRW1pdHRlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlhbGVjdCA9PT0gXCJtc1wiKVxyXG4gICAgICAgICAgICB0aGlzLnNxbC5wdXNoKFwiW1wiICsgbmFtZSArIFwiXVwiKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRpYWxlY3QgPT0gXCJwZ1wiKVxyXG4gICAgICAgICAgICB0aGlzLnNxbC5wdXNoKFwiJ1wiICsgbmFtZSArIFwiJ1wiKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3dFcnJvcihcIkVtaXR0ZXI6IGludmFsaWQgc3FsIGRpYWxlY3QgJ1wiICsgdGhpcy5kaWFsZWN0ICsgXCInXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0b1NxbCgpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3FsLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RTdG10IHtcclxuXHJcbiAgICBjb2x1bW5zOiBTZWxlY3RDb2x1bW5bXSA9IFtdO1xyXG4gICAgZnJvbTogU2VsZWN0VGFibGVbXSA9IFtdO1xyXG4gICAgd2hlcmU6IFdoZXJlQ2xhdXNlW10gPSBbXTtcclxuXHJcbiAgICBhZGRDb2x1bW4oY29sdW1uOiBzdHJpbmcgfCBTZWxlY3RDb2x1bW4pOiBTZWxlY3RTdG10IHtcclxuICAgICAgICBpZiAoXy5pc1N0cmluZyhjb2x1bW4pKVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7Y29sdW1uOiBjb2x1bW59KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbHVtbik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ29sdW1uQXMoY29sdW1uOiBzdHJpbmcgfCBTZWxlY3RDb2x1bW4sIGFzOiBzdHJpbmcpOiBTZWxlY3RTdG10IHtcclxuICAgICAgICBpZiAoXy5pc1N0cmluZyhjb2x1bW4pKVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7Y29sdW1uOiBjb2x1bW4sIGFzOiBhc30pO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb2x1bW4uYXMgPSBhcztcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goY29sdW1uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRnJvbSh0YWJsZTogc3RyaW5nIHwgU2VsZWN0VGFibGUpOiBTZWxlY3RTdG10IHtcclxuICAgICAgICBpZiAoXy5pc1N0cmluZyh0YWJsZSkpXHJcbiAgICAgICAgICAgIHRoaXMuZnJvbS5wdXNoKHt0YWJsZTogdGFibGV9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZnJvbS5wdXNoKHRhYmxlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRGcm9tQXModGFibGU6IHN0cmluZyB8IFNlbGVjdFRhYmxlLCBhczogc3RyaW5nKTogU2VsZWN0U3RtdCB7XHJcbiAgICAgICAgaWYgKF8uaXNTdHJpbmcodGFibGUpKVxyXG4gICAgICAgICAgICB0aGlzLmZyb20ucHVzaCh7dGFibGU6IHRhYmxlLCBhczogYXN9KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGFibGUuYXMgPSBhcztcclxuICAgICAgICAgICAgdGhpcy5mcm9tLnB1c2godGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRXaGVyZShvcGVyYW5kMTogT3BlcmFuZCwgb3BlcjogQm9vbGVhbk9wZXIsIG9wZXJhbmQyOiBPcGVyYW5kKTogU2VsZWN0U3RtdCB7XHJcbiAgICAgICAgdGhpcy53aGVyZS5wdXNoKHtvcGVyYW5kMTogb3BlcmFuZDEsIG9wZXI6IG9wZXIsIG9wZXJhbmQyOiBvcGVyYW5kMn0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW1pdENvbHVtbihjb2w6IFNlbGVjdENvbHVtbiwgZTogRW1pdHRlciwgbGV2ZWw6IHN0cmluZykge1xyXG4gICAgICAgIGUuZW1pdExldmVsKGxldmVsKTtcclxuICAgICAgICBpZiAoY29sLnRhYmxlKVxyXG4gICAgICAgICAgICBlLmVtaXRRdW90ZWROYW1lKGNvbC50YWJsZSkuZW1pdChcIi5cIik7XHJcbiAgICAgICAgaWYgKCFjb2wuY29sdW1uICYmICFjb2wucmF3KVxyXG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwiU2VsZWN0U3RtdDogY29sdW1uLm5hbWUgb3IgY29sdW1uLnJhdyBub3QgZGVmaW5lZFwiKTtcclxuICAgICAgICBpZiAoY29sLmNvbHVtbilcclxuICAgICAgICAgICAgZS5lbWl0UXVvdGVkTmFtZShjb2wuY29sdW1uKTtcclxuICAgICAgICBpZiAoY29sLnJhdylcclxuICAgICAgICAgICAgZS5lbWl0KGNvbC5yYXcpO1xyXG4gICAgICAgIGlmIChjb2wuYXMpXHJcbiAgICAgICAgICAgIGUuZW1pdChcIiBcIikuZW1pdFF1b3RlZE5hbWUoY29sLmFzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbWl0U2VsZWN0VGFibGUodGFibGU6IFNlbGVjdFRhYmxlLCBlOiBFbWl0dGVyLCBsZXZlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgZS5lbWl0TGV2ZWwobGV2ZWwpO1xyXG4gICAgICAgIGlmICh0YWJsZS5kYilcclxuICAgICAgICAgICAgZS5lbWl0UXVvdGVkTmFtZSh0YWJsZS5kYikuZW1pdChcIi4uXCIpO1xyXG4gICAgICAgIGlmICghdGFibGUudGFibGUgJiYgIXRhYmxlLnJhdylcclxuICAgICAgICAgICAgdGhyb3dFcnJvcihcIlNlbGVjdFN0bXQ6IHRhYmxlLm5hbWUgb3IgdGFibGUucmF3IG5vdCBkZWZpbmVkXCIpO1xyXG4gICAgICAgIGlmICh0YWJsZS50YWJsZSlcclxuICAgICAgICAgICAgZS5lbWl0UXVvdGVkTmFtZSh0YWJsZS50YWJsZSk7XHJcbiAgICAgICAgaWYgKHRhYmxlLnJhdylcclxuICAgICAgICAgICAgZS5lbWl0KHRhYmxlLnJhdyk7XHJcbiAgICAgICAgaWYgKHRhYmxlLmFzKVxyXG4gICAgICAgICAgICBlLmVtaXQoXCIgXCIpLmVtaXRRdW90ZWROYW1lKHRhYmxlLmFzKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1NxbChkaWFsZWN0OiBTcWxEaWFsZWN0KTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgbGV0IGUgPSBuZXcgRW1pdHRlcigpO1xyXG4gICAgICAgIGUuZGlhbGVjdCA9IGRpYWxlY3Q7XHJcbiAgICAgICAgZS5ub0xldmVscyA9IHRoaXMgaW5zdGFuY2VvZiBJbmxpbmVTZWxlY3RTdG10O1xyXG5cclxuICAgICAgICBlLmVtaXQoXCJzZWxlY3RcIikuZW1pdExpbmUoKTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBTZWxlY3RDb2x1bW4sIGluZGV4OiBudW1iZXIpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRDb2x1bW4oY29sLCBlLCBcIiAgXCIpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICBlLmVtaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBlLmVtaXRMaW5lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGUuZW1pdChcImZyb21cIikuZW1pdExpbmUoKTtcclxuICAgICAgICB0aGlzLmZyb20uZm9yRWFjaCgodGFibGU6IFNlbGVjdENvbHVtbiwgaW5kZXg6IG51bWJlcik9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdFNlbGVjdFRhYmxlKHRhYmxlLCBlLCBcIiAgXCIpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gdGhpcy5mcm9tLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICBlLmVtaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBlLmVtaXRMaW5lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBlLnRvU3FsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbmxpbmVTZWxlY3RTdG10IGV4dGVuZHMgU2VsZWN0U3RtdCB7XHJcblxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1zcWwvU3FsMi50c1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=