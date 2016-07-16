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
	var Sql_1 = __webpack_require__(46);
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
	        var x = Sql_1.Sql.select(["номер"]).from("Организация");
	        console.log(x.toSql());
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
/***/ function(module, exports) {

	"use strict";
	var Sql = (function () {
	    function Sql() {
	        this.terms = [];
	    }
	    Sql.select = function (fields) {
	        var select = new SelectTerm(fields);
	        return select;
	    };
	    return Sql;
	}());
	exports.Sql = Sql;
	var Term = (function () {
	    function Term() {
	    }
	    return Term;
	}());
	var SelectTerm = (function () {
	    function SelectTerm(_fields) {
	        this._fields = _fields;
	    }
	    SelectTerm.prototype.from = function (fromTable) {
	        this._from = new FromTerm(fromTable, this);
	        return this._from;
	    };
	    SelectTerm.prototype.toSql = function () {
	        return "select " + this._fields.join(".") + " from " + this._from.emit();
	    };
	    return SelectTerm;
	}());
	var FromTerm = (function () {
	    function FromTerm(_fromParam, _select) {
	        this._fromParam = _fromParam;
	        this._select = _select;
	    }
	    FromTerm.prototype.toSql = function () {
	        return this._select.toSql();
	    };
	    FromTerm.prototype.emit = function () {
	        return this._fromParam.toString();
	    };
	    return FromTerm;
	}());
	// function toSql(terms: any[]) {
	//     return "select * from user";
	// } 


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGU0NzM0YTJlNWYxNmM1ZmNjMmMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9FcnJvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GbGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDEudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3QudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvZ2V0UHJvcGVydHlFZGl0b3JzLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UYWJzL1RhYnMudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvVmlzaWJsZVBsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvT25DbGlja1BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU25hcHNob3QudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL09ic2VydmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0RlZXBDbG9uZS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EZXNrdG9wL0Rlc2t0b3AudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC9BcHAudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC9BcHBFcnJvckJhci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvV2luZG93L1dpbmRvdy50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTW92YWJsZS9Nb3ZhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDIudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1ucy50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW4udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL3JlZ2lzdGVyR3JpZENvbHVtbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvS2V5Y29kZS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvZ2V0U2Nyb2xsQmFyV2lkdGgudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NRTC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpb1wiIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtc3FsL1NxbFRhYmxlLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9MaXN0UHJvcGVydHlFZGl0b3IudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQXJyYXlEYXRhU291cmNlLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9nZXRHcmlkQ29sdW1uSW5mb3MudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1zcWwvU3FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSxLQUFZLEtBQUssdUJBQU0sQ0FBTyxDQUFDO0FBQy9CLEtBQVksUUFBUSx1QkFBTSxDQUFXLENBQUM7QUFJdEMseUNBQTBCLENBQStDLENBQUM7QUFHMUUsb0JBQW1CO0FBQ25CLDBEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsTUFBSztBQUVMLG9CQUFtQjtBQUNuQixlQUFjO0FBQ2QscUJBQW9CO0FBQ3BCLE1BQUs7QUFFTCxTQUFRLENBQUMsTUFBTSxDQUNYLG9CQUFDLHlCQUFXLE9BQUUsRUFDZCxRQUFRLENBQUMsSUFBSSxDQUNoQixDQUFDOzs7Ozs7O0FDckJGLHdCOzs7Ozs7QUNBQSwyQjs7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QUM7U0FDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNsQixDQUFDO0tBQ0wsVUFBQztBQUFELEVBQUM7QUFQWSxZQUFHLE1BT2Y7QUFFRDtLQUFBO0tBRUEsQ0FBQztLQUFELFdBQUM7QUFBRCxFQUFDO0FBS0Q7S0FDSSxvQkFBbUIsT0FBc0I7U0FBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtLQUN6QyxDQUFDO0tBSUQseUJBQUksR0FBSixVQUFLLFNBQW9CO1NBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3RCLENBQUM7S0FFRCwwQkFBSyxHQUFMO1NBQ0ksTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUM3RSxDQUFDO0tBQ0wsaUJBQUM7QUFBRCxFQUFDO0FBRUQ7S0FDSSxrQkFBbUIsVUFBcUIsRUFBUyxPQUFtQjtTQUFqRCxlQUFVLEdBQVYsVUFBVSxDQUFXO1NBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtLQUNwRSxDQUFDO0tBRUQsd0JBQUssR0FBTDtTQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2hDLENBQUM7S0FFRCx1QkFBSSxHQUFKO1NBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdEMsQ0FBQztLQUVMLGVBQUM7QUFBRCxFQUFDO0FBRUQsa0NBQWlDO0FBQ2pDLG9DQUFtQztBQUNuQyxLQUFJIiwiZmlsZSI6Ii4vZGlzdC9CdWh0YUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZGU0NzM0YTJlNWYxNmM1ZmNjMmNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgSGVsbG8gfSBmcm9tIFwiLi9IZWxsb1Byb3BzXCI7XHJcbmltcG9ydCB7QXBwfSBmcm9tIFwiLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC9BcHBcIjtcclxuaW1wb3J0IHtBcHBEZXNpZ25lcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9BcHBEZXNpZ25lci9BcHBEZXNpZ25lclwiO1xyXG5pbXBvcnQge1Rlc3RCdWh0YU9iamVjdDF9IGZyb20gXCIuLi9UZXN0MS90ZXN0QnVodGFPYmplY3QxXCI7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoXHJcbi8vICAgICA8SGVsbG8gY29tcGlsZXI9XCJUeXBlU2NyaXB0XCIgZnJhbWV3b3JrPVwiUmVhY3RcIiAvPixcclxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZVwiKVxyXG4vLyApO1xyXG5cclxuLy8gUmVhY3RET00ucmVuZGVyKFxyXG4vLyAgICAgPEFwcC8+LFxyXG4vLyAgICAgZG9jdW1lbnQuYm9keVxyXG4vLyApO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEFwcERlc2lnbmVyLz4sXHJcbiAgICBkb2N1bWVudC5ib2R5XHJcbik7XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2NvbXBvbmVudHMvaW5kZXgudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GbGV4XCI7XHJcblxyXG5pbXBvcnQge1Rlc3RCdWh0YU9iamVjdDF9IGZyb20gXCIuLi8uLi9UZXN0MS90ZXN0QnVodGFPYmplY3QxXCI7XHJcbmltcG9ydCB7T2JqZWN0RGVzaWduZXJ9IGZyb20gXCIuLi9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lclwiO1xyXG5pbXBvcnQge0Rlc2t0b3AsIE9wZW5XaW5kb3dQYXJhbXN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCB7RHJhZ2dhYmxlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0RyYWdnYWJsZS9EcmFnZ2FibGVcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlRXZlbnQsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge0FwcCwgYXBwSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwL0FwcFwiO1xyXG5pbXBvcnQge1dpbmRvd30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9XaW5kb3cvV2luZG93XCI7XHJcbmltcG9ydCB7VGFicywgVGFifSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RhYnMvVGFic1wiO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRm9ybS9Gb3JtXCI7XHJcbmltcG9ydCB7SW5wdXQsIElucHV0VHlwZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQge0lucHV0RGl2aWRlcn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dERpdmlkZXIvSW5wdXREaXZpZGVyXCI7XHJcbmltcG9ydCB7dGVzdEJ1aHRhT2JqZWN0Mn0gZnJvbSBcIi4uLy4uL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDJcIjtcclxuaW1wb3J0IHtnZXRQcm9wZXJ0eUVkaXRvcnN9IGZyb20gXCIuLi9Qcm9wZXJ0eUVkaXRvcnMvZ2V0UHJvcGVydHlFZGl0b3JzXCI7XHJcbmltcG9ydCB7QXV0b0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuaW1wb3J0IHtUcmVlR3JpZH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uLCBHcmlkQ29sdW1ufSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5zfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uc1wiO1xyXG5pbXBvcnQge2V4ZWN1dGVTUUwsIERhdGFUYWJsZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHtTcWxUYWJsZX0gZnJvbSBcIi4uLy4uL2J1aHRhLXNxbC9TcWxUYWJsZVwiO1xyXG5pbXBvcnQge1NuYXBzaG90fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9TbmFwc2hvdFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtUcmVlR3JpZEFycmF5RGF0YVNvdXJjZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZEFycmF5RGF0YVNvdXJjZVwiO1xyXG5pbXBvcnQge1N0cmluZ1Byb3BlcnR5RWRpdG9yLCBTdHJpbmdFZGl0b3J9IGZyb20gXCIuLi9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHt0aHJvd0Vycm9yfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9FcnJvclwiO1xyXG5pbXBvcnQge1NxbH0gZnJvbSBcIi4uLy4uL2J1aHRhLXNxbC9TcWxcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNpZ25lclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8QXBwRGVzaWduZXJTdGF0ZT4ge1xyXG4gICAgLy90ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwRGVzaWduZXJTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPEFwcERlc2lnbmVyUHJvcHM+IHtcclxuICAgIC8vdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcERlc2lnbmVyIGV4dGVuZHMgQ29tcG9uZW50PEFwcERlc2lnbmVyUHJvcHMsIEFwcERlc2lnbmVyU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBcHBEZXNpZ25lclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwRGVzaWduZXJTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gaW5pdFRlc3QoKSB7XHJcbiAgICAvLyAgICAgdGhpcy50ZXN0T2JqZWN0Lm5hbWUgPSBcItCi0LXRgdGC0L7QstGL0Lkg0L7QsdGK0LXQutGCMVwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIG1vdmVTdGFydChlOiBNb3ZlU3RhcnRFdmVudCkge1xyXG4gICAgICAgIGUuYmluZFgodGhpcywgXCJzaWRlV2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNpZGVXaWR0aDogbnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHRlc3RPcGVuV2luZG93KCkge1xyXG5cclxuICAgICAgICAvLyBsZXQgb2JqID0ge1xyXG4gICAgICAgIC8vICAgICDQpNCw0LzQuNC70LjRjzogXCLQodCw0LLRh9C10L3QutC+0LJcIixcclxuICAgICAgICAvLyAgICAg0JjQvNGPOiBcItCa0L7QvdGB0YLQsNC90YLQuNC9XCIsXHJcbiAgICAgICAgLy8gICAgINCe0YLRh9C10YHRgtCy0L46IFwi0JLQu9Cw0LTQuNC80LjRgNC+0LLQuNGHXCJcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IHdpbiA9XHJcbiAgICAgICAgLy8gICAgIDxUYWJzPlxyXG4gICAgICAgIC8vICAgICAgICAgPFRhYiB0aXRsZT1cItC30LDQutC70LDQtNC60LAgMVwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXQgY2FwdGlvbj1cItCk0LDQvNC40LvQuNGPXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0KTQsNC80LjQu9C40Y9cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dCBjYXB0aW9uPVwi0JjQvNGPXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0JjQvNGPXCIvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXREaXZpZGVyIHRpdGxlPVwi0LAg0YLQtdC/0LXRgNGMINC+0YLRh9C10YHRgtCy0L5cIj48L0lucHV0RGl2aWRlcj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXtvYmp9IGJpbmRQcm9wTmFtZT1cItCe0YLRh9C10YHRgtCy0L5cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIC8vICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgLy8gICAgICAgICA8VGFiIHRpdGxlPVwi0LfQsNC60LvQsNC00LrQsCAyXCI+IDIyMjIyIDwvVGFiPlxyXG4gICAgICAgIC8vICAgICA8L1RhYnM+O1xyXG4gICAgICAgIC8vIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGVzdE9wZW5PYmplY3REZXNpZ25lcigpIHtcclxuICAgICAgICBsZXQgdGVzdE9iamVjdDogVGVzdEJ1aHRhT2JqZWN0MSA9IG5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcbiAgICAgICAgdGVzdE9iamVjdC5maXJzdE5hbWUgPSBcItCY0LPQvtGA0YwwXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdC5sYXN0TmFtZSA9IFwi0KHQuNC00L7RgNC10L3QutC+MFwiO1xyXG4gICAgICAgIHRlc3RPYmplY3Quc3VyTmFtZSA9IFwi0J7Qu9C10LPQvtCy0LjRhzBcIjtcclxuXHJcbi8vICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyIG9uQ2hhbmdlPXsoKT0+eyB3aW4ySW5zdGFuY2UuZGVzaWduZWRPYmplY3Q9bnVsbDsgd2luMkluc3RhbmNlLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwidGVzdDMyMy1jaGFuZ2VcIil9fSBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdH0ga2V5PVwiMVwiPiA8L09iamVjdERlc2lnbmVyPjtcclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IHRlc3RPYmplY3QgPSBfLmNsb25lRGVlcCh0ZXN0T2JqZWN0KTsgIHdpbjJJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpOyBjb25zb2xlLmxvZyhcInRlc3Q5OTktY2hhbmdlXCIpOyB9fVxyXG4gICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdH0ga2V5PVwiMVwiPiA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgbGV0IHRlc3RPYmplY3QyOiB0ZXN0QnVodGFPYmplY3QyID0gbmV3IHRlc3RCdWh0YU9iamVjdDIoKTtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5maXJzdE5hbWUgPSBcItCY0LPQvtGA0YwxXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdDIubGFzdE5hbWUgPSBcItCh0LjQtNC+0YDQtdC90LrQvjJcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5zdXJOYW1lID0gXCLQntC70LXQs9C+0LLQuNGHMVwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLnNleCA9IFwi0LzRg9C20YHQutC+0LlcIjtcclxuXHJcbiAgICAgICAgbGV0IHdpbjJJbnN0YW5jZTogYW55O1xyXG5cclxuICAgICAgICBsZXQgd2luMiA9IDxPYmplY3REZXNpZ25lciByZWY9eyAoZTphbnkpID0+IHsgd2luMkluc3RhbmNlID0gZTsgfSB9IGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCI+XHJcbiAgICAgICAgPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgIC8vZ2V0UHJvcGVydHlFZGl0b3JzKHRlc3RPYmplY3QpO1xyXG4gICAgICAgIC8vZ2V0UHJvcGVydHlFZGl0b3JzKHRlc3RPYmplY3QyKTtcclxuXHJcbiAgICAgICAgbGV0IHdpbndpbiA9IDxkaXY+e3dpbn17d2luMn08L2Rpdj47XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcItC+0LrQvdC+IDFcIixcclxuICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgbGVmdDogNTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2lud2luLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHRlc3RJbW11dGFibGUoKSB7XHJcbiAgICAgICAgLy8gLy9sZXQgZmFrZT1uZXcgVGFibGUoW10pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc3QgeHh4ID0gSW1tdXRhYmxlLk1hcDxzdHJpbmcsIG51bWJlcj4oKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBvYmogPSB7XHJcbiAgICAgICAgLy8gICAgIG5hbWU6IFwi0J7Qs9Cw0L3QuNC30LDRhtC40Y9cIixcclxuICAgICAgICAvLyAgICAgY29sdW1uczoge1wi0J3QvtC80LXRgFwiOiB7Y29sTmFtZTogXCLQndC+0LzQtdGAXCIsIHR5cGU6IFwic3RyaW5nXCJ9LCBcItCd0LDQt9Cy0LDQvdC40LVcIjoge2NvbE5hbWU6IFwi0J3QsNC30LLQsNC90LjQtVwiLCB0eXBlOiBcInN0cmluZ1wifX1cclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IG9iakkgPSBJbW11dGFibGUuZnJvbUpTKG9iaik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAvL2xldCBtID0gSW1tdXRhYmxlLk1hcDxzdHJpbmcsbnVtYmVyfCBJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+PigpO1xyXG4gICAgICAgIC8vIC8vbGV0IHggPSBtLnNldChcIjEzeXl0MzMzMzMyXCIsIDEyKTtcclxuICAgICAgICAvLyAvL2xldCB5ID0gbS5zZXQoXCJ4eHhcIiwgSW1tdXRhYmxlLk1hcDxudW1iZXIsc3RyaW5nPigpKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIC8vbGV0IHk9bS51cGRhdGUoXCJ4eHhcIixJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+KCkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2JqSS50b1N0cmluZygpKTtcclxuICAgICAgICAvLyBsZXQgeCA9IG9iakkuZ2V0SW4oWydjb2x1bW5zJywgJ9Cd0L7QvNC10YAnLCAnY29sTmFtZSddKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh4KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHN0cjogc3RyaW5nID0gXCLQv9GA0LjQstC10YJcIjtcclxuXHJcbiAgICB0ZXN0QXV0b0Zvcm0oKSB7XHJcbiAgICAgICAgbGV0IHdpbjIgPVxyXG4gICAgICAgICAgICA8QXV0b0Zvcm0gc2l6ZVRvPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfSBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsxXCIgaW5wdXRDYXB0aW9uPVwiZWVlMVwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizFcIiBpbnB1dENhcHRpb249XCJlZWUyXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMVwiIGlucHV0Q2FwdGlvbj1cImVlZTNcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsyXCIgaW5wdXRDYXB0aW9uPVwiZWVlNFwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgPC9BdXRvRm9ybT47XHJcbi8vICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YtcIiBpbnB1dENhcHRpb249XCJlZWVcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc30gYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJhdXRvIGZvcm1cIixcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgbGVmdDogMTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdEdyaWQoKSB7XHJcbiAgICAgICAgLy8gZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgICAgIC8vICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBkYXRhU291cmNlID0gdGFibGUucm93cy5tYXA8RGVzaWduZWRPYmplY3Q+KChyKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHvQmtC70Y7RhzogcltcItCa0LvRjtGHXCJdLCDQndC+0LzQtdGAOiByW1wi0J3QvtC80LXRgFwiXSwg0J3QsNC30LLQsNC90LjQtTogcltcItCd0LDQt9Cy0LDQvdC40LVcIl19O1xyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGRzID0gbmV3IFRyZWVHcmlkQXJyYXlEYXRhU291cmNlKGRhdGFTb3VyY2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YAgPT5cIiArIHRhYmxlLnJvd3NbMF0uZ2V0VmFsdWUoMSkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9eyBkYXRhU291cmNlIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdHJlZU1vZGU9e3RydWV9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGhpZXJhcmNoeUZpZWxkTmFtZT1cItCd0L7QvNC10YBcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPVwiLlwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw9ezB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBkZW55RGVsZXRlPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgID5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1ucz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JrQvtC70L7QvdC60LAyXCIgcHJvcGVydHlOYW1lPVwi0J3QvtC80LXRgFwiIHNob3dIaWVyYXJjaHlUcmVlPXtmYWxzZX1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwM1wiIHByb3BlcnR5TmFtZT1cItCd0LDQt9Cy0LDQvdC40LVcIiBzaG93SGllcmFyY2h5VHJlZT17dHJ1ZX1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwMVwiIHByb3BlcnR5TmFtZT1cItCa0LvRjtGHXCIgd2lkdGg9ezgwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW5zPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvVHJlZUdyaWQ+O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiBcImF1dG8gZm9ybVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiA4MDBcclxuICAgICAgICAvLyAgICAgICAgIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvL1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0RmxleCgpIHtcclxuICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOlwiMnB4IGRvdHRlZCByZWRcIiwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgbGVmdDowLHJpZ2h0OjAsIGJvdHRvbTowIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkIHN0eWxlPXt7IGJvcmRlcjpcIjJweCBkb3R0ZWQgYmx1ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0J7QtNC40L08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIGdyZWVuXCIgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiIHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCByZWRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIGJsdWVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0t0J7QtNC40L08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIGdyZWVuXCIgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPi0tLS0tLS3QlNCy0LA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0tLS3QlNCy0LAxPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTExMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMjIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjExMTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjIyMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMTExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjIyMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTExMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMjIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkIHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCBtYXJvb25cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0tLS3QotGA0Lg8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIG1hcm9vblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0KLRgNC4PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwidGVzdCBGTEVYXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDEwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRlc3RUYWJsZURlc2lnbmVyKCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IG5ldyBTcWxUYWJsZSgpO1xyXG5cclxuICAgICAgICB0YWJsZS5uYW1lID0gXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgdGFibGUuc3FsbmFtZSA9IFwiZGJvLtCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIjtcclxuICAgICAgICB0YWJsZS5hZGRDb2x1bW4oKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICBjb2wubmFtZSA9IFwi0J3QvtC80LXRgFwiO1xyXG4gICAgICAgICAgICBjb2wuZGF0YVR5cGUgPSBcInZhcmNoYXIoMTApXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0LDQt9Cy0LDQvdC40LVcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDUwKVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IGNvbnNvbGUubG9nKFwidGFibGUtY2hhbmdlXCIpOyB9fVxyXG4gICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17dGFibGV9PlxyXG4gICAgICAgIDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCIsXHJcbiAgICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDUwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRlc3RTbmFwc2hvdCgpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBuZXcgU3FsVGFibGUoKTtcclxuXHJcbiAgICAgICAgdGFibGUubmFtZSA9IFwi0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgIHRhYmxlLnNxbG5hbWUgPSBcImRiby7QntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0L7QvNC10YBcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDEwKVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbC5uYW1lID0gXCLQndCw0LfQstCw0L3QuNC1XCI7XHJcbiAgICAgICAgICAgIGNvbC5kYXRhVHlwZSA9IFwidmFyY2hhcig1MClcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xyXG5cclxuICAgICAgICBsZXQgcyA9IG5ldyBTbmFwc2hvdCgpO1xyXG4gICAgICAgIHMuc2F2ZU9iamVjdCh0YWJsZSwgXCJ0YWJsZTFcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuXHJcbiAgICAgICAgdGFibGUubmFtZSA9IFwi0LbQvtC/0LBcIjtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xyXG5cclxuICAgICAgICBzLnJlc3RvcmVPYmplY3QodGFibGUsIFwidGFibGUxXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXN0U25hcHNob3RQcmVmb3JtYW5jZSgpO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRlc3RTbmFwc2hvdFByZWZvcm1hbmNlKCkge1xyXG4gICAgICAgIGxldCB4OiBhbnkgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGFibGUgPSBuZXcgU3FsVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRhYmxlLm5hbWUgPSBcItCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIjtcclxuICAgICAgICAgICAgdGFibGUuc3FsbmFtZSA9IFwiZGJvLtCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIjtcclxuICAgICAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbC5uYW1lID0gXCLQndC+0LzQtdGAXCI7XHJcbiAgICAgICAgICAgICAgICBjb2wuZGF0YVR5cGUgPSBcInZhcmNoYXIoMTApXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0YWJsZS5hZGRDb2x1bW4oKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0LDQt9Cy0LDQvdC40LVcIjtcclxuICAgICAgICAgICAgICAgIGNvbC5kYXRhVHlwZSA9IFwidmFyY2hhcig1MClcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHgucHVzaCh0YWJsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IHMgPSBuZXcgU25hcHNob3QoKTtcclxuICAgICAgICBjb25zb2xlLnRpbWUoXCJ4MVwiKTtcclxuICAgICAgICBzLnNhdmVPYmplY3QoeCwgXCJ4XCIpO1xyXG4gICAgICAgIGNvbnNvbGUudGltZUVuZChcIngxXCIpO1xyXG4gICAgICAgIHgubGVuZ3RoID0gMDtcclxuICAgICAgICBzLnJlc3RvcmVPYmplY3QoeCwgXCJ4XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0ZXN0R3JpZDIoKSB7XHJcblxyXG4gICAgICAgIGNsYXNzIFZpZCBleHRlbmRzIERlc2lnbmVkT2JqZWN0IHtcclxuXHJcbiAgICAgICAgICAgIEBTdHJpbmdFZGl0b3IoKVxyXG4gICAgICAgICAgICBAR3JpZENvbHVtbih7Y2FwdGlvbjogXCLRjdGC0L4g0L3QvtC80LXRgFwifSlcclxuICAgICAgICAgICAgTnVtOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBAU3RyaW5nRWRpdG9yKClcclxuICAgICAgICAgICAgQEdyaWRDb2x1bW4oe30pXHJcbiAgICAgICAgICAgIE5hbWU6IHN0cmluZztcclxuXHJcblxyXG4gICAgICAgICAgICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLQktC40LQg0YLQvtCy0LDRgNCwXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBbJHt0aGlzLk51bX1dICBgICsgdGhpcy5OYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgMTAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YBcIilcclxuICAgICAgICAgICAgLmRvbmUoKHRhYmxlOiBEYXRhVGFibGV8c3RyaW5nKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlIGluc3RhbmNlb2YgIERhdGFUYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2aWRzID0gdGFibGUucm93cy5tYXA8VmlkPigocikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZpZCA9IG5ldyBWaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkLk51bSA9IFwiKlwiICsgcltcItCd0L7QvNC10YBcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZC5OYW1lID0gXCIqXCIgKyByW1wi0J3QsNC30LLQsNC90LjQtVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IFRPUCAxMCA9PT4gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmlkcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhU291cmNlID0gbmV3IFRyZWVHcmlkQXJyYXlEYXRhU291cmNlKHZpZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucGFyYW1zLmdldE5ld1JvdyA9ICgpID0+IG5ldyBWaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RhdGFTb3VyY2UucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UgPSAoKSA9PiBcItCS0YHQtSDQv9GD0YHRgtC+LCDQsdC70LjQvSEg0JbQvNC4INC90LAg0LPQsNC3IVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UgPSAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cItCS0YHQtSDQv9GD0YHRgtC+LCA8aT7QsdC70LjQvSE8L2k+INCW0LzQuCDQvdCwINCz0LDQtyFcIjwvc3Bhbj47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmVlR3JpZD47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInRlc3QgZ3JpZCAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFdpbmRvd0F1dG9TaXplKCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoMSA9PT0gMSlcclxuICAgICAgICAgICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKFwiMzMzKytcIikpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hZyA9IFwiR2V0IHRoZSBjdXJyZW50IGNvb3JkaW5hdGVzIG9mIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBzZXQgb2YgbWF0Y2hlZCBlbGVtZW50cywgcmVsYXRpdmUgdG8gXCI7XHJcblxyXG4gICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAg0J/RgNC40LLQtdGCINGD0YDQvtC00YtcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCU0LAg0Lgg0L3QtdGCIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0JTQsCDQuCDQvdC10YIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCU0LAg0Lgg0L3QtdGCIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7QlNCwINC4INC90LXRgiA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0JTQsCDQuCDQvdC10YIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgKHNlbmRlcjpCdXR0b24sIGU6UmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuTWVzc2FnZVdpbmRvdyhtYWcsIHsgc3R5bGU6XCJpbmZvcm1hdGlvblwiLCBwYXJlbnRXaW5kb3dJZDogc2VuZGVyLmdldFBhcmVudFdpbmRvd0lkKCkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCd0L7QstC+0LVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJ0ZXN0IEFVVE9TSVpFXCIsXHJcbiAgICAgICAgICAgIGF1dG9TaXplOiBcImNvbnRlbnRcIixcclxuICAgICAgICAgICAgYXV0b1Bvc2l0aW9uOiBcImRlc2t0b3AtY2VudGVyXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdE9ic2VydmFibGUoKSB7XHJcblxyXG4gICAgICAgIGxldCB4PVNxbC5zZWxlY3QoW1wi0L3QvtC80LXRgFwiXSkuZnJvbShcItCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coeC50b1NxbCgpKTtcclxuICAgICAgICAvLyBsZXQgeHh4OiBhbnkgPSB7fTtcclxuICAgICAgICAvLyBsZXQgcHJveHlIYW5kbGVyID0ge1xyXG4gICAgICAgIC8vICAgICBnZXQ6ICh0YXJnZXQ6IGFueSwgcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy9jb25zb2xlLmxvZyhcImhhbmRsZXJHZXQ/Pz9cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRhcmdldFtwXTtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0OiAodGFyZ2V0OiBhbnksIHA6IFByb3BlcnR5S2V5LCB2YWx1ZTogYW55LCByZWNlaXZlcjogYW55KTogYW55ID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlclNldFwiKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHApO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLVByb3h5LS0tLS1cIik7XHJcbiAgICAgICAgLy8gbGV0IHByb3h5ID0gbmV3IFByb3h5KHh4eCwgcHJveHlIYW5kbGVyKTtcclxuICAgICAgICAvLyBwcm94eS54MTExID0gMzMzO1xyXG4gICAgICAgIC8vIHByb3h5Lm8gPSB7fTtcclxuICAgICAgICAvLyBwcm94eS5vLmVlZSA9IFwiZWVlMVwiO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocHJveHkueDExMSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm94eSk7XHJcblxyXG4gICAgICAgIC8vIGxldCB4ID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY2xhc3MgQSBleHRlbmRzIFByb3h5PEFycmF5PGFueT4+IHtcclxuICAgICAgICAvLyAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIGxldCBoYW5kbGVyOiBQcm94eUhhbmRsZXI8QXJyYXk8YW55Pj4gPSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZ2V0OiAodGFyZ2V0OiBBcnJheTxhbnk+LCBwOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlckdldFwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBzdXBlcihbXSwgaGFuZGxlcik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiOVwiKTtcclxuICAgICAgICAvLyBsZXQgYSA9IG5ldyBBKCk7XHJcbiAgICAgICAgLy8gYS5wdXNoKDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjEwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImFwcC1kZXNpZ25lclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7c2l6ZVRvOiBcInBhcmVudFwifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IHNpemVUbz1cInBhcmVudFwiIHR5cGU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwiaGVhZGVyMVwiPkZpeGVkIEhlYWRlcjwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cInJvd1wiIHNpemVUbz1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cInNpZGViYXJcIiBzdHlsZT17e3dpZHRoOnRoaXMuc2lkZVdpZHRofX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRml4ZWQgU2lkZWJhciAxMjM8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RPcGVuV2luZG93KCk7IH19PiB0ZXN0IG9wZW4gd2luZG93PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0T3Blbk9iamVjdERlc2lnbmVyKCk7IH19Pm9wZW4gZGVzaWduZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RJbW11dGFibGUoKTsgfX0+dGVzdEltbXV0YWJsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEF1dG9Gb3JtKCk7IH19PnRlc3QgYXV0b2Zvcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RHcmlkKCk7IH19PnRlc3QgR1JJRDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEZsZXgoKTsgfX0+dGVzdCBGTEVYPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0VGFibGVEZXNpZ25lcigpOyB9fT50ZXN0IFRBQkxFIERFU0lHTkVSPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0U25hcHNob3QoKTsgfX0+dGVzdCBTTkFQU0hPVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEdyaWQyKCk7IH19PnRlc3QgR1JJRC0yPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0V2luZG93QXV0b1NpemUoKTsgfX0+dGVzdCBXSU4gQVVUT1NJWkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdE9ic2VydmFibGUoKTsgfX0+dGVzdCBPQlNFUlZBQkxFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwiWFhYY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92YWJsZSBvbk1vdmVTdGFydD17dGhpcy5tb3ZlU3RhcnQuYmluZCh0aGlzKX0+TU9WPC9Nb3ZhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0FwcD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcbmltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi4vUGx1Z2lucy9QbHVnaW5cIjtcclxuaW1wb3J0IHtXaW5kb3d9IGZyb20gXCIuL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtEZXNrdG9wLCBPcGVuTWVzc2FnZVdpbmRvd1BhcmFtc30gZnJvbSBcIi4vRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4uL0Vycm9yXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBYT25DbGlja1Byb3BzIHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50UHJvcHM8Uz4gZXh0ZW5kcyBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8RWxlbWVudD4ge1xyXG4gICAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG4gICAgb25XaWxsTW91bnQ/OiAoc3RhdGU6IFMpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U3RhdGU8UD4ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogQ29tcG9uZW50PFAsIGFueT4pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9yY2VVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvL2NsaWNrQ291bnQ6IG51bWJlcjtcclxuICAgIC8vIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8Uz4sIFMgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxQPj4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UCwgUz4ge1xyXG5cclxuICAgIHBsdWdpbnM6IENvbXBvbmVudFBsdWdpbjxhbnksIGFueT5bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQLCBjb250ZXh0OiBhbnkgLypzdGF0ZUNsYXNzPzogRnVuY3Rpb24qLykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgLy8gdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IHBsdWdJbnN0YW5jZTogYW55ID0gbmV3IHBsdWcodGhpcyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdJbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJQcm9wczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIHJlbmRlclN0eWxlczogYW55ID0ge307XHJcblxyXG4gICAgZ2V0UGFyZW50V2luZG93KCk6IFdpbmRvdyB8IG51bGwge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIGlmICgocGFyZW50IGFzIGFueSkuJCR3aW5kb3cpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmVudCBhcyBhbnkpLiQkd2luZG93IGFzIFdpbmRvdztcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudERlc2t0b3AoKTogRGVza3RvcCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKChwYXJlbnQgYXMgYW55KS4kJGRlc2t0b3ApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmVudCBhcyBhbnkpLiQkZGVza3RvcCBhcyBEZXNrdG9wO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3dFcnJvcihcImdldFBhcmVudERlc2t0b3AoKTogZGVza3RvcCBub3QgZm91bmRcIik7ICBcclxuICAgICAgICByZXR1cm4ge30gYXMgRGVza3RvcDsgIC8vIGZha2UgdHlwZXNjcmlwdCAyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFBhcmVudFdpbmRvd0lkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHBhcmVudFdpbiA9IHRoaXMuZ2V0UGFyZW50V2luZG93KCk7XHJcbiAgICAgICAgaWYgKHBhcmVudFdpbikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50V2luLnN0YXRlLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb3BzKHByb3BzOiBPYmplY3QpIHtcclxuICAgICAgICBfLmFzc2lnbldpdGgodGhpcy5yZW5kZXJQcm9wcywgcHJvcHMsIChvYmplY3RWYWx1ZTogYW55LCBzb3VyY2VWYWx1ZTogYW55LCBrZXk/OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJjbGFzc1wiIHx8IGtleSA9PT0gXCJjbGFzc05hbWVcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnZhbGlkIHByb3BlcnR5ICdcIiArIGtleSArIFwiJywgdXNlIGZ1bmN0aW9ucyBhZGRDbGFzc05hbWUoKSwgdG9nZ2xlQ2xhc3NOYW1lKClcIik7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwic3R5bGVcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnZhbGlkIHByb3BlcnR5ICdcIiArIGtleSArIFwiJywgdXNlIGZ1bmN0aW9ucyBhZGRTdHlsZXMoKSwgcmVtb3ZlU3R5bGUoKVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZVZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0eWxlcyhzdHlsZXM6IE9iamVjdCB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMucmVuZGVyU3R5bGVzLCBzdHlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU3R5bGVzKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyU3R5bGVzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3R5bGUoc3R5bGU6IHN0cmluZykge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlbmRlclN0eWxlc1tzdHlsZV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3R5bGVzKHN0eWxlczogc3RyaW5nW10pIHtcclxuICAgICAgICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZW5kZXJTdHlsZXNbc3R5bGVdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLmRpZE1vdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRpZE1vdW50KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsTW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudFdpbGxNb3VudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLndpbGxNb3VudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uV2lsbE1vdW50KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uV2lsbE1vdW50KHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wczogUCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFApIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaXNQcm9wc0VxdWFsKG9iajE6IGFueSwgb2JqMjogYW55LCBleGNsdWRlUHJvcHM/OiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAvL0xvb3AgdGhyb3VnaCBwcm9wZXJ0aWVzIGluIG9iamVjdCAxXHJcbiAgICAgICAgZm9yIChsZXQgcCBpbiBvYmoxKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhjbHVkZVByb3BzICYmIGV4Y2x1ZGVQcm9wcy5pbmRleE9mKHApID49IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgLy9DaGVjayBwcm9wZXJ0eSBleGlzdHMgb24gYm90aCBvYmplY3RzXHJcbiAgICAgICAgICAgIGlmIChvYmoxLmhhc093blByb3BlcnR5KHApICE9PSBvYmoyLmhhc093blByb3BlcnR5KHApKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAob2JqMVtwXSAhPT0gb2JqMltwXSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIjEgbm90IGVxdWFsIFwiICsgcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKHR5cGVvZiAob2JqMVtwXSkpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vRGVlcCBjb21wYXJlIG9iamVjdHNcclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKCFPYmplY3QuY29tcGFyZShvYmoxW3BdLCBvYmoyW3BdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgLy9Db21wYXJlIGZ1bmN0aW9uIGNvZGVcclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgJ2Z1bmN0aW9uJzpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAodHlwZW9mIChvYmoyW3BdKSA9PSAndW5kZWZpbmVkJyB8fCAocCAhPSAnY29tcGFyZScgJiYgb2JqMVtwXS50b1N0cmluZygpICE9IG9iajJbcF0udG9TdHJpbmcoKSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIC8vQ29tcGFyZSB2YWx1ZXNcclxuICAgICAgICAgICAgLy8gICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKG9iajFbcF0gIT09IG9iajJbcF0pIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9DaGVjayBvYmplY3QgMiBmb3IgYW55IGV4dHJhIHByb3BlcnRpZXNcclxuICAgICAgICBmb3IgKGxldCBwIGluIG9iajIpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAob2JqMVtwXSkgPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIChvYmoyW3BdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIjIgbm90IGVxdWFsIFwiICsgcCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9iajEpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmoyKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzOiBQKTogYm9vbGVhbiB7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhcInNoYWxsb3ctMCBcIiArIHRoaXMuY29uc3RydWN0b3IudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMzApKTtcclxuICAgIC8vICAgICAvL2NvbnNvbGUudGltZShcIjIyXCIpO1xyXG4gICAgLy8gICAgIGxldCByZXQgPSBzaGFsbG93Q29tcGFyZSh0aGlzLCBuZXh0UHJvcHMsIHRoaXMuc3RhdGUpO1xyXG4gICAgLy8gICAgIC8vY29uc29sZS50aW1lRW5kKFwiMjJcIik7XHJcbiAgICAvLyAgICAgcmV0dXJuIHJldDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBwcml2YXRlIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChuZXh0UHJvcHM6IFAsIG5leHRTdGF0ZTogUykgPT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLnNoYWxsb3dDb21wYXJlKG5leHRQcm9wcyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmRpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgcHJldkNvbnRleHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkVXBkYXRlKHByZXZQcm9wczogUCwgcHJldlN0YXRlOiBTLCBwcmV2Q29udGV4dDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsUmVjZWl2ZVByb3BzKHByZXZQcm9wcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbFVubW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2lsbFVubW91bnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkQ2xhc3NOYW1lKGNsYXNzTmFtZXM6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChjbGFzc05hbWVzKVxyXG4gICAgICAgICAgICBjbGFzc05hbWVzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJDbGFzc2VzLmluZGV4T2YobmFtZSkgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2xhc3Nlcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDbGFzc05hbWUoYm9vbFZhbHVlOiBib29sZWFuLCB0cnVlQ2xhc3NOYW1lczogc3RyaW5nLCBmYWxzZUNsYXNzTmFtZXM/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoYm9vbFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKHRydWVDbGFzc05hbWVzKTtcclxuICAgICAgICAgICAgaWYgKGZhbHNlQ2xhc3NOYW1lcylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3NOYW1lKGZhbHNlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzTmFtZSh0cnVlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgICAgIGlmIChmYWxzZUNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShmYWxzZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDbGFzc05hbWUoY2xhc3NOYW1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDbGFzc2VzLnNwbGljZSh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSwgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNsYXNzTmFtZSgpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSh0aGlzLnByb3BzLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyQ2xhc3Nlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDbGFzc2VzLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVuZGVyUHJvcHMoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9wcy5jbGFzc05hbWUgPSB0aGlzLnJlbmRlckNsYXNzTmFtZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvcHMuc3R5bGUgPSB0aGlzLnJlbmRlclN0eWxlcztcclxuICAgICAgICBfLmFzc2lnbih0aGlzLnJlbmRlclByb3BzLnN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJQcm9wcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gZ2V0UmVhY3RFbGVtZW50Q2xhc3NOYW1lKGVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQudHlwZSA/IGVsZW1lbnQudHlwZS50b1N0cmluZygpLnNwbGl0KFwiKFwiKVswXS5zcGxpdChcIiBcIilbMV0gOiBcIlwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldENoaWxkcmVuKGNoaWxkVHlwZTogRnVuY3Rpb24pOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuIGFzIFJlYWN0LlJlYWN0Tm9kZSkuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRUeXBlID09PSBjaGlsZC50eXBlKVxyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW5PZlByb3BzKHByb3BzOiBhbnksIGNoaWxkVHlwZTogRnVuY3Rpb24pOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRUeXBlID09PSBjaGlsZC50eXBlKVxyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3dDb25maXJtYXRpb25XaW5kb3cobWVzc2FnZUNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZSwgcmVzdWx0Q2FsbGJhY2s6IChyZXN1bHRPazogYm9vbGVhbikgPT4gdm9pZCwgb2tCdXR0b25UZXh0Pzogc3RyaW5nLCBjYW5jZWxCdXR0b25UZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtczogT3Blbk1lc3NhZ2VXaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcImNvbmZpcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBwYXJlbnRXaW5kb3dJZDogdGhpcy5nZXRQYXJlbnRXaW5kb3dJZCgpLFxyXG4gICAgICAgICAgICBva0J1dHRvbkNvbnRlbnQ6IG9rQnV0dG9uVGV4dCB8fCBcItCU0LBcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogY2FuY2VsQnV0dG9uVGV4dCB8fCBcItCd0LXRglwiLFxyXG4gICAgICAgICAgICByZXN1bHRDYWxsYmFjazogcmVzdWx0Q2FsbGJhY2tcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50RGVza3RvcCgpIS5vcGVuTWVzc2FnZVdpbmRvdyhtZXNzYWdlQ29udGVudCwgcGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVsZXRlQ29uZmlybWF0aW9uV2luZG93KG1lc3NhZ2VDb250ZW50OiBSZWFjdC5SZWFjdE5vZGUsIHJlc3VsdENhbGxiYWNrOiAocmVzdWx0T2s6IGJvb2xlYW4pID0+IHZvaWQsIG9rQnV0dG9uVGV4dD86IHN0cmluZywgY2FuY2VsQnV0dG9uVGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIGxldCBwYXJhbXM6IE9wZW5NZXNzYWdlV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzdHlsZTogXCJkYW5nZXJcIixcclxuICAgICAgICAgICAgcGFyZW50V2luZG93SWQ6IHRoaXMuZ2V0UGFyZW50V2luZG93SWQoKSxcclxuICAgICAgICAgICAgb2tCdXR0b25Db250ZW50OiBva0J1dHRvblRleHQgfHwgXCLQlNCwXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IGNhbmNlbEJ1dHRvblRleHQgfHwgXCLQndC10YJcIixcclxuICAgICAgICAgICAgcmVzdWx0Q2FsbGJhY2s6IHJlc3VsdENhbGxiYWNrXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudERlc2t0b3AoKSEub3Blbk1lc3NhZ2VXaW5kb3cobWVzc2FnZUNvbnRlbnQsIHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQYXJlbnRXaW5kb3coKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnREZXNrdG9wKCkhLmNsb3NlV2luZG93KHRoaXMuZ2V0UGFyZW50V2luZG93SWQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZW5kZXIoKSB7XHJcbiAgICAvLyAgICByZXR1cm4gKG5ldylcclxuICAgIC8vICAgIC8vICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpIH0+XHJcbiAgICAvLyAgICAvLyAgICAgICAgQ29tcG9uZW50IGZyb20ge3RoaXMucHJvcHMuY29tcGlsZXJ9IGFuZCB7dGhpcy5wcm9wcy5mcmFtZXdvcmt9IWNsaWNrQ291bnQ9e3RoaXMuc3RhdGUuY2xpY2tDb3VudH1cclxuICAgIC8vICAgIC8vICAgIDwvYnV0dG9uPlxyXG4gICAgLy8gICAgLy8pO1xyXG4gICAgLy99XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50LnRzeFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vycm9yKGVycm9yOiBzdHJpbmcgfCBFcnJvcik6IG5ldmVyIHtcclxuXHJcbiAgICAvLyB0b2RvOiDQvtGC0LrQu9GO0YfQuNGC0Ywg0LIgcHJvZHVjdGlvbiDRgNC10LbQuNC80LVcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgIGxldCBlcnI6IGFueTtcclxuXHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcilcclxuICAgICAgICBlcnIgPSBlcnJvcjtcclxuICAgIGVsc2VcclxuICAgICAgICBlcnIgPSBuZXcgRXJyb3IoZXJyb3IpO1xyXG5cclxuICAgIGVyci4kJGlzVGhyb3dFcnJvciA9IHRydWU7XHJcbiAgICB0aHJvdyBlcnI7XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0Vycm9yLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0UHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcclxuICAgIHR5cGU6IFwiY29sdW1uXCIgfCBcInJvd1wiO1xyXG4gICAgc2l6ZVRvOiBcInBhcmVudFwiIHwgXCJjb250ZW50XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQ8TGF5b3V0UHJvcHMsYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJMYXlvdXRcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2Rpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBmbGV4RGlyZWN0aW9uOiB0aGlzLnByb3BzLnR5cGV9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKSB7Ly8gJiYgdGhpcy5wcm9wcy50eXBlPT09XCJjb2x1bW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpIHtcclxuICAgICAgICAvLyAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAvLyAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvL3Bvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBsZWZ0OiAwLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gcmlnaHQ6IDAsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0b3A6IDAsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBib3R0b206IDAsXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgLy8gb3ZlcmZsb3c6IFwiYXV0b1wiXHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gICAgIHN0eWxlLmZsZXhEaXJlY3Rpb24gPSB0aGlzLnByb3BzLnR5cGU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBzdHlsZTogYW55ID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgLy9vdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyAgICAgc3R5bGUuZmxleERpcmVjdGlvbiA9IHRoaXMucHJvcHMudHlwZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7b25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0gPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9MYXlvdXQudHN4XG4gKiovIiwiXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRml4ZWRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeGVkIGV4dGVuZHMgQ29tcG9uZW50PEZpeGVkUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkZpeGVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBmbGV4OiBcIjAgMCBhdXRvXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeFxuICoqLyIsImltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZsZXhQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmxleCBleHRlbmRzIENvbXBvbmVudDxGbGV4UHJvcHMsYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiRmxleFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgZmxleDogXCIxXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4XG4gKiovIiwiaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0QnVodGFPYmplY3QxIGV4dGVuZHMgRGVzaWduZWRPYmplY3Qge1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQpNCw0LzQuNC70LjRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQpNCw0LzQuNC70LjRjyDQsNCx0L7QvdC10L3RgtCwXCJcclxuICAgIH0pXHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0JjQvNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCY0LzRj1wiXHJcbiAgICB9KVxyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0J7RgtGH0LXRgdGC0LLQvlwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQntGC0YfQtdGB0YLQstC+INCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIHN1ck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDEudHNcbiAqKi8iLCLvu79pbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mbywgQmFzZVByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge09ic2VydmFibGVPbkNoYW5nZUhhbmRsZXJ9IGZyb20gXCIuLi9idWh0YS1jb3JlL09ic2VydmFibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25lZE9iamVjdCB7XHJcbiAgICBcclxuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XHJcblxyXG4gICAgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcItCe0LHRitC10LrRglwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG5cclxuICAgICAgICBsZXQgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvbiAoLnsxLH0pXFwoLztcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKCh0aGlzKS5jb25zdHJ1Y3Rvci50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgICQkdW53YXRjaGVkUHJvcHM6IHN0cmluZ1tdID0gW1wicHJvcGVydHlFZGl0b3JzXCIsIFwiJCR1bndhdGNoZWRQcm9wc1wiXTtcclxuICAgICQkY2hhbmdlQ291bnQ6IG51bWJlcjtcclxuICAgICQkb25DaGFuZ2U6IE9ic2VydmFibGVPbkNoYW5nZUhhbmRsZXI8RGVzaWduZWRPYmplY3Q+O1xyXG5cclxuICAgIC8vIGlkOiBzdHJpbmc7XHJcbiAgICAvLyBuYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBjbGFzc05hbWU6IHN0cmluZztcclxuICAgIC8vIGluaGVyaXRGcm9tOiBzdHJpbmc7XHJcbiAgICAvLyBtb2R1bGVOYW1lOiBzdHJpbmc7XHJcbiAgICAvLyByZWZlcmVuY2VzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gICAgLy9wcml2YXRlIHN0YXRpYyBwcm9wZXJ0eUVkaXRvcnM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogUHJvcGVydHlFZGl0b3JJbmZvOyB9ID0ge307XHJcblxyXG4gICAgLy8gc3RhdGljIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IocHJvcGVydHlOYW1lOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVBhZ2U6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5R3JvdXA6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5RGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6IHR5cGVvZiBEZXNpZ25lZE9iamVjdCxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvclR5cGU6IHR5cGVvZiBCYXNlUHJvcGVydHlFZGl0b3IsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IHR5cGVvZiBPYmplY3QgfCB0eXBlb2YgU3RyaW5nKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCBpbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8gPSB7XHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eVBhZ2U6IHByb3BlcnR5UGFnZSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlHcm91cDogcHJvcGVydHlHcm91cCxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlEZXNjcmlwdGlvbjogcHJvcGVydHlEZXNjcmlwdGlvbixcclxuICAgIC8vICAgICAgICAgb2JqZWN0VHlwZTogb2JqZWN0VHlwZSxcclxuICAgIC8vICAgICAgICAgZWRpdG9yVHlwZTogZWRpdG9yVHlwZSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlUeXBlOiBwcm9wZXJ0eVR5cGUsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBEZXNpZ25lZE9iamVjdC5wcm9wZXJ0eUVkaXRvcnNbcHJvcGVydHlOYW1lXSA9IGluZm87XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJQcm9wZXJ0eUVkaXRvciBcIiArIHByb3BlcnR5TmFtZSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldCBwcm9wZXJ0eUVkaXRvcnMoKTp7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFByb3BlcnR5RWRpdG9ySW5mbzsgfXtcclxuICAgIC8vICAgICByZXR1cm4gKERlc2lnbmVkT2JqZWN0IGFzIGFueSkuJCRwcm9wZXJ0eUVkaXRvcnM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcnMoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMubGVuZ3RoID0gMDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlFZGl0b3I6IEJhc2VQcm9wZXJ0eUVkaXRvcikge1xyXG4gICAgLy8gICAgIHByb3BlcnR5RWRpdG9yLmRlc2lnbmVkT2JqZWN0ID0gdGhpcztcclxuICAgIC8vICAgICBwcm9wZXJ0eUVkaXRvci5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMucHVzaChwcm9wZXJ0eUVkaXRvcik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZW1pdFRzQ29kZSgpOiBzdHJpbmcge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLnJlZ2lzdGVyUHJvcGVydHlFZGl0b3JzKCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCB0c0NvZGUgPSBuZXcgVHNDb2RlKHRoaXMubW9kdWxlTmFtZSwgdGhpcy5jbGFzc05hbWUsIHRoaXMuaW5oZXJpdEZyb20sIHRoaXMucmVmZXJlbmNlcyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMucHJvcGVydHlFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xyXG4gICAgLy8gICAgICAgICBlZGl0b3IuZGVzaWduZWRPYmplY3QgPSB0aGlzO1xyXG4gICAgLy8gICAgICAgICBlZGl0b3IuZW1pdFRzQ29kZSh0c0NvZGUpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gdHNDb2RlLmdldENvZGUoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB0ZXN0UHJvYzEgPSAoKSA9PiB7XHJcblxyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3QudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtCYXNlUHJvcGVydHlFZGl0b3IsIFByb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge3JlZ2lzdGVyUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtJbnB1dFR5cGUsIElucHV0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBCYXNlUHJvcGVydHlFZGl0b3Ige1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZShldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpIHtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZSA9PT0gXCIgKyB0aGlzLnByb3BzLnByb3BlcnR5TmFtZSArIFwiIFwiICsgdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBhdXRvRm9ybUNvbnRyb2xQcm9wczogQXV0b0Zvcm1Db250cm9sUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2FwdGlvbjogdGhpcy5wcm9wcy5pbnB1dENhcHRpb24sXHJcbiAgICAgICAgICAgIGlucHV0VGFiOiB0aGlzLnByb3BzLmlucHV0VGFiLFxyXG4gICAgICAgICAgICBpbnB1dEdyb3VwOiB0aGlzLnByb3BzLmlucHV0R3JvdXAsXHJcbiAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb246IHRoaXMucHJvcHMuaW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoYXV0b0Zvcm1Db250cm9sUHJvcHMpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9e0lucHV0VHlwZS5UZXh0fVxyXG4gICAgICAgICAgICAgICAgYmluZE9iamVjdD17dGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdH1cclxuICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT17dGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nRWRpdG9yUGFyYW1zIGV4dGVuZHMgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN0cmluZ0VkaXRvcihwYXJhbXM6IFN0cmluZ0VkaXRvclBhcmFtcyA9IHt9KTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coe3RhcmdldCwgcHJvcGVydHlOYW1lLCBjb25zdHI6dGFyZ2V0LmNvbnN0cnVjdG9yfSk7XHJcblxyXG4gICAgICAgIGxldCBwcm9wZXJ0eUVkaXRvckluZm86IFByb3BlcnR5RWRpdG9ySW5mbyA9IHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgZWRpdG9yVHlwZTogU3RyaW5nUHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgXy5hc3NpZ24ocHJvcGVydHlFZGl0b3JJbmZvLCBwYXJhbXMpO1xyXG4gICAgICAgIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IocHJvcGVydHlFZGl0b3JJbmZvKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9yKHtcclxuICAgICAgICAvLyAgICAgaW5wdXRDYXB0aW9uOiBwYXJhbXMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgIC8vICAgICBpbnB1dFRhYjogcGFyYW1zLmlucHV0VGFiLFxyXG4gICAgICAgIC8vICAgICBpbnB1dEdyb3VwOiBwYXJhbXMuaW5wdXRHcm91cCxcclxuICAgICAgICAvLyAgICAgaW5wdXREZXNjcmlwdGlvbjogcGFyYW1zLmlucHV0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgLy8gICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvcixcclxuICAgICAgICAvLyAgICAgZWRpdG9yVHlwZTogU3RyaW5nUHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgLy8gICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeFxuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5RWRpdG9ySW5mbyBleHRlbmRzIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuICAgIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gICAgb2JqZWN0VHlwZTogdHlwZW9mIERlc2lnbmVkT2JqZWN0O1xyXG4gICAgZWRpdG9yVHlwZTogdHlwZW9mIEJhc2VQcm9wZXJ0eUVkaXRvcjtcclxuICAgIHByb3BlcnR5VHlwZTogdHlwZW9mIE9iamVjdCB8IHR5cGVvZiBTdHJpbmcgfCBudWxsO1xyXG4gICAgY3VzdG9tUGFyYW1zPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiwgUHJvcGVydHlFZGl0b3JJbmZvIHtcclxuICAgIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVByb3BlcnR5RWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50PEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gICAgLy8gZGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG5cclxuICAgIC8vIGdldFByb3BlcnR5VHlwZSgpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiBcIk9iamVjdFwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHJlbmRlckVkaXRvcihpbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG4gICAgLy8gICAgIHJldHVybiAoPHNwYW4+ZWRpdG9yIG5vdCBkZWZpbmVkPC9zcGFuPik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gKDxzcGFuPnByb3BlcnR5IGVkaXRvciBub3QgZGVmaW5lZDwvc3Bhbj4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBlbWl0VHNDb2RlKHRzQ29kZTogVHNDb2RlLCBhc3NpZ25OYW1lOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICB0c0NvZGUuYWRkUHJvcGVydHkoYXNzaWduTmFtZSwgdGhpcy5wcm9wZXJ0eU5hbWUsIHRoaXMuZ2V0UHJvcGVydHlUeXBlKCksIHRoaXMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wZXJ0eU5hbWVdKTtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3IudHN4XG4gKiovIiwiaW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclByb3BlcnR5RWRpdG9yKGVkaXRvcjogUHJvcGVydHlFZGl0b3JJbmZvKSB7XHJcblxyXG4gICAgbGV0IG9ialR5cGU6IGFueSA9IGVkaXRvci5vYmplY3RUeXBlO1xyXG5cclxuICAgIGlmICghb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycylcclxuICAgICAgICBvYmpUeXBlLiQkcHJvcGVydHlFZGl0b3JzID0gW107XHJcblxyXG4gICAgb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycy5wdXNoKGVkaXRvcik7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcInJlZ2lzdGVyUHJvcGVydHlFZGl0b3IgXCIgKyBlZGl0b3IucHJvcGVydHlOYW1lKTtcclxuICAgIC8vY29uc29sZS5sb2coZWRpdG9yKTtcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3IudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuZXhwb3J0IGVudW0gSW5wdXRUeXBlIHtUZXh0LCBOdW1iZXIsIERhdGUgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiwgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgdHlwZTogSW5wdXRUeXBlO1xyXG4gICAgYmluZE9iamVjdDogYW55O1xyXG4gICAgYmluZFByb3BOYW1lOiBzdHJpbmc7XHJcbiAgICBtYXhXaWR0aD86IG51bWJlcjtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxuICAgIHBsYWNlSG9sZGVyPzogc3RyaW5nO1xyXG4gICAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50PElucHV0UHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElucHV0UHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSW5wdXRUeXBlLlRleHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZXh0KCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAgXCJJbnB1dC5yZW5kZXIoKTo9PiB1bmtub3duIElucHV0VHlwZSAnXCIgKyB0aGlzLnByb3BzLnR5cGUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJpbmRPYmplY3QgJiYgdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdFt0aGlzLnByb3BzLmJpbmRQcm9wTmFtZV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gXCI8dW5iaW5kZWQ+XCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJpbmRPYmplY3QgJiYgdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmluZE9iamVjdFt0aGlzLnByb3BzLmJpbmRQcm9wTmFtZV0gPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWU7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJUZXh0KCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXModGhpcy5wcm9wcy5zdHlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0VGV4dCgpfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7QmFzZVByb3BlcnR5RWRpdG9yUHJvcHMsIFByb3BlcnR5RWRpdG9ySW5mbywgQmFzZVByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvcnNcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybVwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcbmltcG9ydCB7U25hcHNob3R9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL1NuYXBzaG90XCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0RlZXBDbG9uZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvRGVlcENsb25lXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPYmplY3REZXNpZ25lclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBkZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbiAgICBvblNhdmVDaGFuZ2VzPzogKCkgPT4gdm9pZDtcclxuICAgIG9uQ2FuY2VsQ2hhbmdlcz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3REZXNpZ25lciBleHRlbmRzIENvbXBvbmVudDxPYmplY3REZXNpZ25lclByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBPYmplY3REZXNpZ25lclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHNuYXBzaG90OiBTbmFwc2hvdCA9IG5ldyBTbmFwc2hvdCgpO1xyXG5cclxuICAgIG5lZWRUb1NhdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNsb25lZERlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuICAgIG9ic2VydmFibGVEZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICB0aGlzLm5lZWRUb1NhdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9uZWREZXNpZ25lZE9iamVjdCA9IERlZXBDbG9uZTxEZXNpZ25lZE9iamVjdD4odGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvbmVkXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xvbmVkRGVzaWduZWRPYmplY3QpO1xyXG5cclxuICAgICAgICB0aGlzLm9ic2VydmFibGVEZXNpZ25lZE9iamVjdCA9IE9ic2VydmFibGU8RGVzaWduZWRPYmplY3Q+KHRoaXMuY2xvbmVkRGVzaWduZWRPYmplY3QsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZWVkVG9TYXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgICAgIC8vdGhpcy5zbmFwc2hvdC5zYXZlT2JqZWN0KHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QsIFwicm9vdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQcm9wZXJ0eURlc2lnbmVycygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGdldFByb3BlcnR5RWRpdG9ycyh0aGlzLm9ic2VydmFibGVEZXNpZ25lZE9iamVjdCkuZm9yRWFjaCgocHJvcEluZm86IFByb3BlcnR5RWRpdG9ySW5mbywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb3BJbmZvKTtcclxuICAgICAgICAgICAgbGV0IGVkaXRvclByb3BzOiBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcyAmIFByb3BlcnR5RWRpdG9ySW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0OiB0aGlzLm9ic2VydmFibGVEZXNpZ25lZE9iamVjdCxcclxuICAgICAgICAgICAgICAgIC8vcHJvcGVydHlFZGl0b3JJbmZvOiBwcm9wSW5mbyxcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDRjdGC0L4g0LjQtyBwcm9wSW5mbzogUHJvcGVydHlFZGl0b3JJbmZvLCDQt9Cw0L/QvtC70Y/QtdGC0YHRjyDQtNCw0LvQtdC1INGH0LXRgNC10LcgXy5hc3NpZ25cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6IERlc2lnbmVkT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgZWRpdG9yVHlwZTogQmFzZVByb3BlcnR5RWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBfLmFzc2lnbihlZGl0b3JQcm9wcywgcHJvcEluZm8pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlZGl0b3JQcm9wcy5pbnB1dENhcHRpb24pXHJcbiAgICAgICAgICAgICAgICBlZGl0b3JQcm9wcy5pbnB1dENhcHRpb24gPSBlZGl0b3JQcm9wcy5wcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZWRpdG9yUHJvcHMpO1xyXG5cclxuICAgICAgICAgICAgcmV0LnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wSW5mby5lZGl0b3JUeXBlLCBlZGl0b3JQcm9wcywge30pKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTYXZlQ2hhbmdlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNhdmUtY2hhbmdlc1wiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QpO1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QsIHRoaXMub2JzZXJ2YWJsZURlc2lnbmVkT2JqZWN0KTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNhdmVDaGFuZ2VzKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2F2ZUNoYW5nZXMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2FuY2VsQ2hhbmdlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbmNlbC1jaGFuZ2VzXCIpO1xyXG4gICAgICAgIC8vdGhpcy5zbmFwc2hvdC5yZXN0b3JlT2JqZWN0KHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QsIFwicm9vdFwiKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNhbmNlbENoYW5nZXMpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWxDaGFuZ2VzKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBoYW5kbGVHZXROZWVkVG9TYXZlID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLm5lZWRUb1NhdmU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwib2JqZWN0LWRlc2lnbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe29uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBdXRvRm9ybVxyXG4gICAgICAgICAgICAgICAgc2l6ZVRvPVwicGFyZW50XCJcclxuICAgICAgICAgICAgICAgIG9uU2F2ZUNoYW5nZXM9e3RoaXMuaGFuZGxlU2F2ZUNoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbENoYW5nZXM9e3RoaXMuaGFuZGxlQ2FuY2VsQ2hhbmdlc31cclxuICAgICAgICAgICAgICAgIG5lZWRUb1NhdmU9e3RoaXMubmVlZFRvU2F2ZX1cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0IGRlc2lnbmVyXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQcm9wZXJ0eURlc2lnbmVycygpfVxyXG4gICAgICAgICAgICA8L0F1dG9Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lci50c3hcbiAqKi8iLCJpbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5RWRpdG9ycyhvYmo6IERlc2lnbmVkT2JqZWN0KTogUHJvcGVydHlFZGl0b3JJbmZvW10ge1xyXG5cclxuICAgIGxldCBlZGl0b3JzID0gKG9iai5jb25zdHJ1Y3RvciBhcyBhbnkpLiQkcHJvcGVydHlFZGl0b3JzIGFzIFByb3BlcnR5RWRpdG9ySW5mb1tdO1xyXG5cclxuICAgIGVkaXRvcnMgPSBlZGl0b3JzLmZpbHRlcigoZWR0KSA9PiBvYmogaW5zdGFuY2VvZiBlZHQub2JqZWN0VHlwZSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldFByb3BlcnR5RWRpdG9yc1wiKSA7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVkaXRvcnMpO1xyXG4gICAgcmV0dXJuIGVkaXRvcnM7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvcnMudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9UYWJzL1RhYnNcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vRm9ybS9Gb3JtXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgaW5wdXRDYXB0aW9uPzogc3RyaW5nO1xyXG4gICAgaW5wdXRUYWI/OiBzdHJpbmc7XHJcbiAgICBpbnB1dEdyb3VwPzogc3RyaW5nO1xyXG4gICAgaW5wdXREZXNjcmlwdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvRm9ybVByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBpbnB1dHM/OiBBdXRvRm9ybUNvbnRyb2xQcm9wc1tdO1xyXG4gICAgc2l6ZVRvOiBcInBhcmVudFwiIHwgXCJjb250ZW50XCI7XHJcbiAgICBuZWVkVG9TYXZlPzogYm9vbGVhbjtcclxuICAgIG9uU2F2ZUNoYW5nZXM/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25DYW5jZWxDaGFuZ2VzPzogKCkgPT4gdm9pZDtcclxuICAgIC8vb25HZXROZWVkVG9TYXZlPzogKCkgPT4gYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgZW1wdHlUYWJOYW1lID0gXCLQt9Cw0LrQu9Cw0LTQutCwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0b0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QXV0b0Zvcm1Qcm9wcywgYW55PiB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW5wdXRzKCk6IEF1dG9Gb3JtQ29udHJvbFByb3BzW10ge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4gYXMgUmVhY3QuUmVhY3ROb2RlKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChjOiBhbnkpID0+IGMucHJvcHMpXHJcbiAgICAgICAgICAgIC5tYXAoKGM6IGFueSkgPT4gYy5wcm9wcykgYXMgQXV0b0Zvcm1Db250cm9sUHJvcHNbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYnNMaXN0KCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gXy51bmlxKFxyXG4gICAgICAgICAgICB0aGlzLmdldElucHV0cygpLm1hcDxzdHJpbmc+KChpbnB1dDogQXV0b0Zvcm1Db250cm9sUHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnB1dFRhYiB8fCBcIlwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYWJJbnB1dHModGFiOiBzdHJpbmcpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuIGFzIFJlYWN0LlJlYWN0Tm9kZSlcclxuICAgICAgICAgICAgLmZpbHRlcigoYzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5wcm9wcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICgoKGMucHJvcHMgYXMgQXV0b0Zvcm1Db250cm9sUHJvcHMpLmlucHV0VGFiIHx8IFwiXCIpID09PSB0YWIpO1xyXG4gICAgICAgICAgICB9KSBhcyBKU1guRWxlbWVudFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVGFiKHRhYjogc3RyaW5nKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiA8Rm9ybSBzaXplVG89e3RoaXMucHJvcHMuc2l6ZVRvfT57dGhpcy5nZXRUYWJJbnB1dHModGFiKX08L0Zvcm0+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgIHJlbmRlclRhYnMoKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFic0xpc3QoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRhYnMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nZXRJbnB1dHMoKSk7XHJcblxyXG4gICAgICAgIGlmICh0YWJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFicy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGFiKHRhYnNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVRvPVwicGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbldpbGxNb3VudD17IChzdGF0ZSkgPT4geyBjb25zb2xlLmxvZyhcIm9uV2lsbE1vdW50LWF1dG8tZm9ybS10YWJzXCIpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQWN0aXZlVGFiPXsgKHN0YXRlLCB0YWIpID0+IHsgY29uc29sZS5sb2coXCJzZXRBY3RpdmVUYWJcIik7Y29uc29sZS5sb2codGFiKTt9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGFicy5tYXA8SlNYLkVsZW1lbnQ+KCh0YWIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGtleT17aW5kZXh9IHRpdGxlPXt0YWIgPT09IFwiXCIgPyBlbXB0eVRhYk5hbWUgOiB0YWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYih0YWIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTYXZlQnV0dG9uQ2xpY2sgPSAoc2VuZGVyOiBCdXR0b24sIGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNhdmVDaGFuZ2VzKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2F2ZUNoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudFdpbmRvdygpIS5jbG9zZSgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrID0gKHNlbmRlcjogQnV0dG9uLCBlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DYW5jZWxDaGFuZ2VzKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsQ2hhbmdlcygpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50V2luZG93KCkhLmNsb3NlKCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJhdXRvLWZvcm1cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLWF1dG8tZm9ybVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZTogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCIgc2l6ZVRvPVwicGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYnMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cImF1dG8tZm9ybS1mb290ZXJcIiB0eXBlPVwicm93XCIgc2l6ZVRvPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmlzaWJsZT17IHRoaXMucHJvcHMubmVlZFRvU2F2ZSB9IGNsYXNzTmFtZT1cImlzLXN1Y2Nlc3MgaXMtb3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMuaGFuZGxlU2F2ZUJ1dHRvbkNsaWNrIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17IHRoaXMuaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmVlZFRvU2F2ZSA/IFwi0J7RgtC80LXQvdCwXCIgOiBcItCX0LDQutGA0YvRgtGMXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJzUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxUYWJzU3RhdGU+IHtcclxuICAgIG9uQ2hhbmdlQWN0aXZlVGFiPzogKHN0YXRlOiBUYWJzU3RhdGUsIGFjdGl2ZVRhYjogVGFiSW5mbykgPT4gdm9pZDtcclxuICAgIHNpemVUbzogXCJwYXJlbnRcIiB8IFwiY29udGVudFwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFic1N0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8VGFic1Byb3BzPiB7XHJcbiAgICB0YWJzOiBUYWJJbmZvW10gPSBbXTtcclxuXHJcbiAgICBzZXRBY3RpdmVUYWIodGFiSW5mbzogVGFiSW5mbykge1xyXG4gICAgICAgIGlmICghdGFiSW5mby5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKT0+dGFiLmlzQWN0aXZlID0gZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJJbmZvLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5wcm9wcy5vbkNoYW5nZUFjdGl2ZVRhYilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnByb3BzLm9uQ2hhbmdlQWN0aXZlVGFiKHRoaXMsIHRhYkluZm8pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYkluZm8ge1xyXG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudDxUYWJzUHJvcHMsIFRhYnNTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRhYnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFRhYnNTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUluaXRUYWJzU3RhdGUoKSB7XHJcblxyXG4gICAgICAgIGxldCB0YWJUYWdzID0gdGhpcy5nZXRDaGlsZHJlbihUYWIpO1xyXG5cclxuICAgICAgICB0YWJUYWdzLmZvckVhY2goKHRhYlRhZywgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0YWJQcm9wcyA9IHRhYlRhZy5wcm9wcyBhcyBUYWJQcm9wcztcclxuXHJcbiAgICAgICAgICAgIGxldCB0YWJJbmZvOiBUYWJJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRhYlByb3BzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogdGFiUHJvcHMuY2hpbGRyZW4gYXMgUmVhY3QuUmVhY3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGluZGV4ID09PSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFicy5wdXNoKHRhYkluZm8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5pdFRhYnNTdGF0ZSgpO1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBsZXQgdGFiVGFncyA9IHRoaXMuZ2V0Q2hpbGRyZW4oVGFiKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRhYlRhZ3MuZm9yRWFjaCgodGFiVGFnLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGxldCB0YWJQcm9wcyA9IHRhYlRhZy5wcm9wcyBhcyBUYWJQcm9wcztcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgdGFiSW5mbzogVGFiSW5mbyA9IHtcclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiB0YWJQcm9wcy50aXRsZSxcclxuICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6IHRhYlByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgIC8vICAgICAgICAgaXNBY3RpdmU6IGluZGV4ID09PSAwXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRhYnMucHVzaCh0YWJJbmZvKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG9wZW5XaW5kb3cod2luOiBKU1guRWxlbWVudCk6IFdpbmRvd0luZm8ge1xyXG4gICAgLy8gICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gICAgIG1vZGFsLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgLy8gICAgIC8vINC00LvRjyDQv9C+0LTQvdGP0YLQuNGPINCy0LLQtdGA0YUg0L/RgNC4INCw0LrRgtC40LLQsNGG0LjQuCDQvtC60L3QsFxyXG4gICAgLy8gICAgIG1vZGFsLm9uY2xpY2sgPSAoZSk9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobW9kYWwuaWQgIT09IFwiZGVsZXRlZFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAvLyAgICAgICAgIH0sIDEpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IHdpbkluc3RhbmNlID0gUmVhY3RET00ucmVuZGVyKHdpbiwgbW9kYWwpIGFzIFdpbmRvdztcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IGluZm86IFdpbmRvd0luZm8gPSB7XHJcbiAgICAvLyAgICAgICAgIGlkOiBtb2RhbC5pZCxcclxuICAgIC8vICAgICAgICAgd2luSW5zdGFuY2U6IHdpbkluc3RhbmNlLFxyXG4gICAgLy8gICAgICAgICBkaXZXcmFwcGVyOiBtb2RhbFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMud2luZG93cy5wdXNoKGluZm8pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gaW5mbztcclxuICAgIC8vIH07XHJcbiAgICAvL1xyXG4gICAgLy8gY2xvc2VXaW5kb3cod2luOiBXaW5kb3cpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLmZvckVhY2goKGluZm8sIGluZGV4KT0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGluZm8ud2luSW5zdGFuY2UgPT09IHdpbikge1xyXG4gICAgLy8gICAgICAgICAgICAgaW5mby5kaXZXcmFwcGVyLmlkID0gXCJkZWxldGVkXCI7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoaW5mby5kaXZXcmFwcGVyKTtcclxuICAgIC8vICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndpbmRvd3NbaW5kZXhdO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWN0aXZhdGVXaW5kb3cod2luOiBXaW5kb3cpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLmZvckVhY2goKGluZm8sIGluZGV4KT0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGluZm8ud2luSW5zdGFuY2UgPT09IHdpbikge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGluZm8uZGl2V3JhcHBlcik7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmVuZGVyVGFicygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBsaXN0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudGFicy5mb3JFYWNoKCh0YWJJbmZvOiBUYWJJbmZvLCBpbmRleDogbnVtYmVyKT0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSB0YWJJbmZvLmlzQWN0aXZlID8gXCJpcy1hY3RpdmVcIiA6IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID1cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0gb25DbGljaz17IChlKT0+eyB0aGlzLnN0YXRlLnNldEFjdGl2ZVRhYih0YWJJbmZvKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnt0YWJJbmZvLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBhbmVscygpOiBKU1guRWxlbWVudFtdIHtcclxuXHJcbiAgICAgICAgbGV0IGxpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50YWJzLmZvckVhY2goKHRhYkluZm86IFRhYkluZm8sIGluZGV4OiBudW1iZXIpPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7cGFkZGluZ1RvcDogMTAsIHBhZGRpbmdCb3R0b206IDEwfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKVxyXG4gICAgICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gIXRhYkluZm8uaXNBY3RpdmUgPyBcImlzLWhpZGRlblwiIDogbnVsbDtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGFiSW5mby5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxkaXYgcmVmPlxyXG4gICAgICAgIC8vICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2hlaWdodDogXCIxMDAlXCJ9KTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6IFwiYXV0b1wifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgc2l6ZVRvPXt0aGlzLnByb3BzLnNpemVUb30gdHlwZT1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGU6IGFueSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBhbmVscygpfVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFiIGV4dGVuZHMgQ29tcG9uZW50PFRhYlByb3BzLGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRhYlByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UYWJzL1RhYnMudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0lucHV0RGl2aWRlcn0gZnJvbSBcIi4uL0lucHV0RGl2aWRlci9JbnB1dERpdmlkZXJcIjtcclxuaW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuaW1wb3J0IHtJbnB1dFByb3BzfSBmcm9tIFwiLi4vSW5wdXQvSW5wdXRcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50PEZvcm1Qcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRm9ybVByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXJDb250cm9scygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgbGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4gYXMgUmVhY3QuUmVhY3ROb2RlKS5mb3JFYWNoKChjb250cm9sOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29udHJvbFByb3BzID0gY29udHJvbC5wcm9wcyBhcyBJbnB1dFByb3BzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sUHJvcHMgJiYgKGNvbnRyb2xQcm9wcy5pbnB1dENhcHRpb24gfHwgY29udHJvbFByb3BzLmJpbmRQcm9wTmFtZSkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjb250cm9sLnR5cGUgPT09IElucHV0RGl2aWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklucHV0RGl2aWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbnRyb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntjb250cm9sUHJvcHMuaW5wdXRDYXB0aW9uID8gY29udHJvbFByb3BzLmlucHV0Q2FwdGlvbiA6IGNvbnRyb2xQcm9wcy5iaW5kUHJvcE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbnRyb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMTBcIiBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImZvcm1cIik7XHJcbiAgICAgICAgLy90aGlzLmFkZFN0eWxlcyh7bWFyZ2luOjEwfSk7XHJcblxyXG4gICAgICAgIGlmIChSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4gYXMgUmVhY3QuUmVhY3ROb2RlKS5sZW5ndGggPT09IDEpIHsgLy8g0L7QtNC40L0g0LrQvtC90YLRgNC+0Lsg0LIg0YTQvtGA0LzQtSwg0L7QsdGL0YfQvdC+IHRyZWVsaXN0XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplVG89PT1cInBhcmVudFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2hlaWdodDogXCIxMDAlXCJ9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7IHdpZHRoOiBcImluaGVyaXRcIn0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0YWJsZSByZWY9eyAoZSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbnRyb2xzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VmlzaWJsZVBsdWdpbiwgVmlzaWJsZVBsdWdpblByb3BzLCBWaXNpYmxlUGx1Z2luU3RhdGV9IGZyb20gXCIuLi8uLi9QbHVnaW5zL1Zpc2libGVQbHVnaW5cIjtcclxuaW1wb3J0IHtPbkNsaWNrUGx1Z2luLCBPbkNsaWNrUGx1Z2luUHJvcHN9IGZyb20gXCIuLi8uLi9QbHVnaW5zL09uQ2xpY2tQbHVnaW5cIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEJ1dHRvblN0YXRlPiwgVmlzaWJsZVBsdWdpblByb3BzLCBPbkNsaWNrUGx1Z2luUHJvcHMge1xyXG4gICAgdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvblN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8QnV0dG9uUHJvcHM+IGltcGxlbWVudHMgVmlzaWJsZVBsdWdpblN0YXRlIHtcclxuICAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vQFZpc2libGVQbHVnaW5cclxuLy9AT25DbGlja1BsdWdpblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50PEJ1dHRvblByb3BzLCBCdXR0b25TdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEJ1dHRvblByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQnV0dG9uU3RhdGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLnB1c2gobmV3IFZpc2libGVQbHVnaW4odGhpcykpO1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKG5ldyBPbkNsaWNrUGx1Z2luKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJidXR0b25cIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3hcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudFBsdWdpbn0gZnJvbSBcIi4vUGx1Z2luXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaXNpYmxlUGx1Z2luUHJvcHMge1xyXG4gICAgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgICBkZWZhdWx0VmlzaWJsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlzaWJsZVBsdWdpblN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8VmlzaWJsZVBsdWdpblByb3BzPiB7XHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWaXNpYmxlUGx1Z2luIGV4dGVuZHMgQ29tcG9uZW50UGx1Z2luPFZpc2libGVQbHVnaW5Qcm9wcywgVmlzaWJsZVBsdWdpblN0YXRlPiB7XHJcbiAgICAvLyBjb25zdHJ1Y3Rvcihvd25lcjogYW55KSB7XHJcbiAgICAvLyAgICAgc3VwZXIob3duZXIpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwidmlzaWJsZSB3aWxsTW91bnQoKVwiKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy5kZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJWaXNpYmxlUGx1Z2luOiBvbmx5IG9uZSBvZiB0aGUgcHJvcGVydGllcyBtdXN0IGJlIHNwZWNpZmllZCAndmlzaWJsZScgb3IgJ2RlZmF1bHRWaXNpYmxlJ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0aGlzLnByb3BzLnZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0aGlzLnByb3BzLmRlZmF1bHRWaXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMub3duZXIudG9nZ2xlQ2xhc3NOYW1lKCF0aGlzLnN0YXRlLnZpc2libGUsIFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBWaXNpYmxlUGx1Z2luUHJvcHMpIHtcclxuICAgICAgICAvL2xldCBzdGF0ZSA9IHRoaXMub3duZXIuc3RhdGUgYXMgVmlzaWJsZVBsdWdpblN0YXRlO1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMudmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IG5leHRQcm9wcy52aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vd25lci50b2dnbGVDbGFzc05hbWUoIXRoaXMuc3RhdGUudmlzaWJsZSwgXCJpcy1oaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gVmlzaWJsZVBsdWdpbih0YXJnZXQ6IGFueSkge1xyXG4vLyAgICAgdGFyZ2V0LnBsdWdpbnMucHVzaChWaXNpYmxlUGx1Z2luQ2xhc3MpO1xyXG4vLyAgICAgcmV0dXJuIHRhcmdldDtcclxuLy8gfVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9WaXNpYmxlUGx1Z2luLnRzXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UGx1Z2luPFAsUyBleHRlbmRzIENvbXBvbmVudFN0YXRlPFA+PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG93bmVyOiBDb21wb25lbnQ8UCwgUz4pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlkTW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbE1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxVbm1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZGlkVXBkYXRlKHByZXZQcm9wczogUCwgcHJldlN0YXRlOiBTLCBwcmV2Q29udGV4dDogYW55KSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IFMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyLnN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9wcygpOiBQIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vd25lci5wcm9wcztcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL1BsdWdpbi50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFBsdWdpbn0gZnJvbSBcIi4vUGx1Z2luXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIG9uQ2xpY2tFdmVudCA9IChzZW5kZXI6IENvbXBvbmVudDxhbnksYW55PiwgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25DbGlja1BsdWdpblByb3BzIHtcclxuICAgIG9uQ2xpY2s/OiBvbkNsaWNrRXZlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNsaWNrUGx1Z2luIGV4dGVuZHMgQ29tcG9uZW50UGx1Z2luPE9uQ2xpY2tQbHVnaW5Qcm9wcywgYW55PiB7XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLm93bmVyLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICB0aGlzLm93bmVyLmFkZFByb3BzKHtvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IE9uQ2xpY2tQbHVnaW5Qcm9wcykge1xyXG4gICAgICAgIHN1cGVyLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgICAgICB0aGlzLm93bmVyLmFkZFByb3BzKHtvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9PbkNsaWNrUGx1Z2luLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4vRXJyb3JcIjtcclxuXHJcbi8vINC+0LHRitC10LrRgiDQvNC+0LbQtdGCINC40LzQtdGC0Ywg0LzQsNGB0YHQuNCy0Ys6XHJcbi8vICQkdW5zYXZlZFByb3BzIC0g0LjQvNC10L3QsCDRgdCy0L7QudGB0YLQsiwg0LrQvtGC0L7RgNGL0LUg0L3QtSDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPXHJcbi8vICQkc2F2ZWRCeVJlZlByb3BzIC0g0LjQvNC10L3QsCDRgdCy0L7QudGB0YLQsiwg0LrQvtGC0L7RgNGL0LUg0YHQvtGF0YDQsNC90Y/RjtGC0YHRjyDQutCw0Log0YHRgdGL0LvQutC4XHJcbi8vINC90LUg0YHQvtGF0YDQsNC90Y/RjtGC0YHRjyDRgdCy0L7QudGB0YLQstCwLCDQutC+0YLQvtGA0YvQtSDQvdCw0YfQuNC90LDRjtGC0YHRjyDRgSAkJFxyXG5leHBvcnQgY2xhc3MgU25hcHNob3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc25hcHNob3RzOiBJbnRlcm5hbFNuYXBzaG90W10gPSBbXTtcclxuXHJcbiAgICBzYXZlT2JqZWN0KG9iajogT2JqZWN0IHwgQXJyYXk8YW55Piwgc25hcHNob3ROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc25hcCA9IG5ldyBJbnRlcm5hbFNuYXBzaG90KCk7XHJcbiAgICAgICAgc25hcC5vYmogPSBvYmo7XHJcbiAgICAgICAgc25hcC5zbmFwc2hvdE5hbWUgPSBzbmFwc2hvdE5hbWU7XHJcbiAgICAgICAgc25hcC5zYXZlUHJvcHMoKTtcclxuICAgICAgICB0aGlzLnNuYXBzaG90cy5wdXNoKHNuYXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVPYmplY3Qob2JqOiBPYmplY3QgfCBhbnlbXSwgc25hcHNob3ROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc25hcCA9IHRoaXMuZ2V0SW50ZXJuYWxTbmFwc2hvdChvYmosIHNuYXBzaG90TmFtZSk7XHJcbiAgICAgICAgaWYgKHNuYXApIHtcclxuICAgICAgICAgICAgaWYgKF8uaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIHNuYXAuYXJyYXlFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAob2JqIGFzIGFueSkucHVzaChlbGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzbmFwLm9ialByb3BzLmZvckVhY2goKHByb3ApID0+IHByb3AucmVzdG9yZVZhbHVlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW50ZXJuYWxTbmFwc2hvdChvYmo6IE9iamVjdCB8IEFycmF5PGFueT4sIHNuYXBzaG90TmFtZTogc3RyaW5nKTogSW50ZXJuYWxTbmFwc2hvdCB7XHJcbiAgICAgICAgbGV0IHJldCA9IHRoaXMuc25hcHNob3RzLmZpbHRlcigoc25hcCkgPT4gc25hcC5vYmogPT09IG9iaiAmJiBzbmFwLnNuYXBzaG90TmFtZSA9PT0gc25hcHNob3ROYW1lKTtcclxuICAgICAgICBpZiAocmV0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwiU25hcHNob3QgJ1wiICsgc25hcHNob3ROYW1lICsgXCInIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgXCJmYWtlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHJldFswXTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSW50ZXJuYWxTbmFwc2hvdCB7XHJcbiAgICBvYmo6IGFueTtcclxuICAgIHNuYXBzaG90TmFtZTogc3RyaW5nO1xyXG4gICAgb2JqUHJvcHM6IFNuYXBzaG90UHJvcGVydHlbXSA9IFtdO1xyXG4gICAgYXJyYXlFbGVtZW50czogYW55W107XHJcbiAgICByZWZzQ2xvbmVzOiBhbnkgPSB7fTtcclxuXHJcbiAgICBzYXZlUHJvcHMoKSB7XHJcbiAgICAgICAgaWYgKF8uaXNBcnJheSh0aGlzLm9iaikpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJheUVsZW1lbnRzID0gdGhpcy5vYmoubWFwKCh2OiBhbnkpID0+IHRoaXMuY2xvbmVWYWx1ZSh2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9ialByb3BzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIHRoaXMub2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmouaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmIHByb3BOYW1lLnN1YnN0cmluZygwLCAyKSAhPT0gXCIkJFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwID0gbmV3IFNuYXBzaG90UHJvcGVydHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBwLnByb3BOYW1lID0gcHJvcE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zbmFwc2hvdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zYXZlVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialByb3BzLnB1c2gocCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmVWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMub2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKCh2OiBhbnkpID0+IHRoaXMuY2xvbmVWYWx1ZSh2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8uaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfLmlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAvL2xldCByZWZzSW5kZXggPSB0aGlzLnNuYXBzaG90LnJlZnMuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS4kJHVuaXF1ZU9iamVjdElkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmc0Nsb25lc1t2YWx1ZS4kJHVuaXF1ZU9iamVjdElkXTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUNvcHkgPSBuZXcgdmFsdWUuY29uc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgdmFsdWVDb3B5LiQkaXNDbG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhbHVlLiQkdW5pcXVlT2JqZWN0SWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxNik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmc0Nsb25lc1t2YWx1ZS4kJHVuaXF1ZU9iamVjdElkXSA9IHZhbHVlQ29weTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmIHByb3BOYW1lLnN1YnN0cmluZygwLCAyKSAhPT0gXCIkJFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVDb3B5W3Byb3BOYW1lXSA9IHRoaXMuY2xvbmVWYWx1ZSh2YWx1ZVtwcm9wTmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZUNvcHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTbmFwc2hvdFByb3BlcnR5IHtcclxuICAgIHNuYXBzaG90OiBJbnRlcm5hbFNuYXBzaG90O1xyXG4gICAgcHJvcE5hbWU6IHN0cmluZztcclxuICAgIHByb3BWYWx1ZTogYW55O1xyXG5cclxuICAgIHNhdmVWYWx1ZSgpIHtcclxuICAgICAgICB0aGlzLnByb3BWYWx1ZSA9IHRoaXMuc25hcHNob3QuY2xvbmVWYWx1ZSh0aGlzLnNuYXBzaG90Lm9ialt0aGlzLnByb3BOYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZVZhbHVlKCkge1xyXG4gICAgICAgIHRoaXMuc25hcHNob3Qub2JqW3RoaXMucHJvcE5hbWVdID0gdGhpcy5wcm9wVmFsdWU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9TbmFwc2hvdC50c1xuICoqLyIsImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4vRXJyb3JcIjtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBPYnNlcnZhYmxlT25DaGFuZ2VIYW5kbGVyPFQ+PSAodGFyZ2V0OiBhbnksIHA6IFByb3BlcnR5S2V5LCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KSA9PiB2b2lkO1xyXG5cclxuLy8g0L3QtSDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPINGB0LLQvtC50YHRgtCy0LAsINC60L7RgtC+0YDRi9C1INC90LDRh9C40L3QsNGO0YLRgdGPINGBICQkXHJcbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZhYmxlPFQgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdD4ob2JqOiBEZXNpZ25lZE9iamVjdCwgb25DaGFuZ2VDYWxsYmFjaz86IE9ic2VydmFibGVPbkNoYW5nZUhhbmRsZXI8VD4pOiBUIHtcclxuICAgIGlmICghb2JqKVxyXG4gICAgICAgIHRocm93RXJyb3IoXCJPYnNlcnZhYmxlKCk6IG9iaiA9PT0gbnVsbCBcIik7IFxyXG5cclxuICAgIGxldCBwcm94eUhhbmRsZXIgPSB7XHJcbiAgICAgICAgICAgIHNldDogKHRhcmdldDogVCwgcDogUHJvcGVydHlLZXksIHZhbHVlOiBhbnksIHJlY2VpdmVyOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHAudG9TdHJpbmcoKS5zdWJzdHIoMCwgMikgIT09IFwiJCRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0LiQkY2hhbmdlQ291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC4kJGNoYW5nZUNvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC4kJGNoYW5nZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC4kJG9uQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuJCRvbkNoYW5nZSh0YXJnZXQsIHAsIHRhcmdldFtwXSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmlzQXJyYXkodmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQXJyYXkodmFsdWUsIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXy5pc09iamVjdCh2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NPYmplY3QodmFsdWUsIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe29ic2VydmFibGVTZXRUYWdldDogdGFyZ2V0LCBwcm9wOiBwICwgdmFsdWU6IHZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuXHJcbiAgICBwcm9jZXNzT2JqZWN0KG9iaiwgcHJveHlIYW5kbGVyLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgIGxldCBvYnNlcnZhYmxlT2JqZWN0ID0gbmV3IFByb3h5KG9iaiwgcHJveHlIYW5kbGVyKSBhcyBUO1xyXG5cclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2JqZWN0O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc09iamVjdChvYmo6IGFueSwgcHJveHlIYW5kbGVyOiBhbnksIG9uQ2hhbmdlQ2FsbGJhY2s/OiBPYnNlcnZhYmxlT25DaGFuZ2VIYW5kbGVyIDwgYW55ID4pIHtcclxuICAgIGlmICghb2JqKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICBvYmouJCRvbkNoYW5nZSA9IG9uQ2hhbmdlQ2FsbGJhY2s7XHJcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5zdWJzdHJpbmcoMCwgMikgIT09IFwiJCRcIikge1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb3BWYWx1ZTogYW55ID0gb2JqW3Byb3BOYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLmlzQXJyYXkocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcFZhbHVlLiQkY2hhbmdlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0FycmF5KHByb3BWYWx1ZSwgcHJveHlIYW5kbGVyLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIG9ialtwcm9wTmFtZV0gPSBuZXcgUHJveHkocHJvcFZhbHVlLCBwcm94eUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKF8uaXNPYmplY3QocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcFZhbHVlLiQkY2hhbmdlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc09iamVjdChwcm9wVmFsdWUsIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICBvYmpbcHJvcE5hbWVdID0gbmV3IFByb3h5KHByb3BWYWx1ZSwgcHJveHlIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NBcnJheShvYmo6IGFueVtdLCBwcm94eUhhbmRsZXI6IGFueSwgb25DaGFuZ2VDYWxsYmFjaz86IE9ic2VydmFibGVPbkNoYW5nZUhhbmRsZXI8YW55Pikge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIChvYmogYXMgYW55KS4kJG9uQ2hhbmdlID0gb25DaGFuZ2VDYWxsYmFjaztcclxuXHJcbiAgICBvYmouZm9yRWFjaCgoYXJyYXlJdGVtLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoXy5pc0FycmF5KGFycmF5SXRlbSkpIHtcclxuICAgICAgICAgICAgYXJyYXlJdGVtLiQkY2hhbmdlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBwcm9jZXNzQXJyYXkoYXJyYXlJdGVtLCBwcm94eUhhbmRsZXIsIG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICBvYmpbaW5kZXhdID0gbmV3IFByb3h5KGFycmF5SXRlbSwgcHJveHlIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXy5pc09iamVjdChhcnJheUl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGFycmF5SXRlbS4kJGNoYW5nZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgcHJvY2Vzc09iamVjdChhcnJheUl0ZW0sIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIG9ialtpbmRleF0gPSBuZXcgUHJveHkoYXJyYXlJdGVtLCBwcm94eUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvT2JzZXJ2YWJsZS50c1xuICoqLyIsImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge3Rocm93RXJyb3J9IGZyb20gXCIuL0Vycm9yXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVlcENsb25lPFQ+KG9iajogYW55KTogVCAge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgdGhyb3dFcnJvcihcIkRlZXBDbG9uZSgpOiBvYmogPT09IG51bGxcIik7XHJcblxyXG4gICAgbGV0IHJlZnNDbG9uZXM6IGFueSA9IHt9O1xyXG5cclxuICAgIGlmIChfLmlzQXJyYXkob2JqKSlcclxuICAgICAgICByZXR1cm4gY2xvbmVBcnJheShvYmosIHJlZnNDbG9uZXMpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBjbG9uZU9iamVjdChvYmosIHJlZnNDbG9uZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZU9iamVjdChvYmo6IGFueSwgcmVmc0Nsb25lczogYW55KTogYW55IHtcclxuICAgIGlmICghb2JqKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKG9iai4kJHVuaXF1ZU9iamVjdElkICYmIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdKVxyXG4gICAgICAgIHJldHVybiByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXTtcclxuXHJcbiAgICBsZXQgY2xvbmVkOiBhbnkgPSBuZXcgb2JqLmNvbnN0cnVjdG9yKCk7XHJcbiAgICBjbG9uZWQuJCRpc0Nsb25lID0gdHJ1ZTtcclxuXHJcbiAgICBvYmouJCR1bmlxdWVPYmplY3RJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDE2KTtcclxuICAgIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdID0gY2xvbmVkO1xyXG5cclxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wVmFsdWU6IGFueSA9IG9ialtwcm9wTmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcE5hbWUuc3Vic3RyaW5nKDAsIDIpICE9PSBcIiQkXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLmlzQXJyYXkocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb25lZFtwcm9wTmFtZV0gPSBjbG9uZUFycmF5KHByb3BWYWx1ZSwgcmVmc0Nsb25lcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfLmlzT2JqZWN0KHByb3BWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZWRbcHJvcE5hbWVdID0gY2xvbmVPYmplY3QocHJvcFZhbHVlLCByZWZzQ2xvbmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZWRbcHJvcE5hbWVdID0gb2JqW3Byb3BOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjbG9uZWRbcHJvcE5hbWVdID0gY2xvbmVPYmplY3QkJChwcm9wVmFsdWUsIHJlZnNDbG9uZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb25lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVPYmplY3QkJChvYmo6IGFueSwgcmVmc0Nsb25lczogYW55KTogYW55IHtcclxuICAgIGlmICghb2JqKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKG9iai4kJHVuaXF1ZU9iamVjdElkICYmIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdKVxyXG4gICAgICAgIHJldHVybiByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZUFycmF5KG9iajogYW55LCByZWZzQ2xvbmVzOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAob2JqLiQkdW5pcXVlT2JqZWN0SWQgJiYgcmVmc0Nsb25lc1tvYmouJCR1bmlxdWVPYmplY3RJZF0pXHJcbiAgICAgICAgcmV0dXJuIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdO1xyXG5cclxuICAgIGxldCBjbG9uZWQ6IGFueSA9IFtdO1xyXG4gICAgY2xvbmVkLiQkaXNDbG9uZSA9IHRydWU7XHJcblxyXG4gICAgb2JqLiQkdW5pcXVlT2JqZWN0SWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxNik7XHJcbiAgICByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXSA9IGNsb25lZDtcclxuXHJcbiAgICBvYmouZm9yRWFjaCgoYXJyYXlJdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoXy5pc0FycmF5KGFycmF5SXRlbSkpIHtcclxuICAgICAgICAgICAgY2xvbmVkLnB1c2goY2xvbmVBcnJheShhcnJheUl0ZW0sIHJlZnNDbG9uZXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXy5pc09iamVjdChhcnJheUl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGNsb25lZC5wdXNoKGNsb25lT2JqZWN0KGFycmF5SXRlbSwgcmVmc0Nsb25lcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNsb25lZC5wdXNoKGFycmF5SXRlbSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNsb25lZDtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9EZWVwQ2xvbmUudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHthcHBJbnN0YW5jZX0gZnJvbSBcIi4uL0FwcC9BcHBcIjtcclxuaW1wb3J0IHtXaW5kb3csIFdpbmRvd1N0YXRlfSBmcm9tIFwiLi4vV2luZG93L1dpbmRvd1wiO1xyXG5pbXBvcnQge01vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQge3Rocm93RXJyb3J9IGZyb20gXCIuLi8uLi9FcnJvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVza3RvcFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERlc2t0b3BTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPERlc2t0b3BQcm9wcz4ge1xyXG4gICAgd2luZG93czogRGVza3RvcFdpbmRvd1tdID0gW107ICAvLyDQv9C+0YHQu9C10LTQvdC10LUg0LDQutGC0LjQstC90L5cclxuXHJcbiAgICAvLyBnZXRXaW5kb3dCeUlkKGlkOiBzdHJpbmcpOiBXaW5kb3dTdGF0ZSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgdyBvZiB0aGlzLndpbmRvd3MpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHcuaWQgPT09IGlkKVxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHc7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnNvbGUud2FybihcIkRlc2t0b3BXaW5kb3cgaWQ9J1wiICsgaWQgKyBcIicgbm90IGZvdW5kXCIpO1xyXG4gICAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldFdpbmRvd0luZGV4QnlJZChpZDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy53aW5kb3dzLmluZGV4T2YodGhpcy5nZXRXaW5kb3dCeUlkKGlkKSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWN0aXZhdGVXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgLy8gICAgIGlmICh3aW4pIHtcclxuICAgIC8vICAgICAgICAgXy5wdWxsKHRoaXMud2luZG93cywgd2luKTtcclxuICAgIC8vICAgICAgICAgdGhpcy53aW5kb3dzLnB1c2god2luKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBjbG9zZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAvLyAgICAgXy5wdWxsKHRoaXMud2luZG93cywgd2luKTtcclxuICAgIC8vICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dJbmZvIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB3aW5JbnN0YW5jZTogV2luZG93O1xyXG4gICAgZGl2V3JhcHBlcjogRWxlbWVudDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFdpbmRvd0F1dG9TaXplID0gXCJub25lXCIgfCBcImNvbnRlbnRcIiB8IFwiZnVsbC1kZXNrdG9wXCI7XHJcbmV4cG9ydCB0eXBlIFdpbmRvd0F1dG9Qb3NpdGlvbiA9IFwibm9uZVwiIHwgXCJwYXJlbnQtY2VudGVyXCIgfCBcImRlc2t0b3AtY2VudGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5XaW5kb3dQYXJhbXMge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB0b3A/OiBudW1iZXI7XHJcbiAgICBsZWZ0PzogbnVtYmVyO1xyXG4gICAgcmlnaHQ/OiBudW1iZXI7XHJcbiAgICBib3R0b20/OiBudW1iZXI7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxuICAgIG1pbkhlaWdodD86IG51bWJlcjtcclxuICAgIG1pbldpZHRoPzogbnVtYmVyO1xyXG4gICAgcGFyZW50V2luZG93SWQ/OiBzdHJpbmc7XHJcbiAgICBhdXRvUG9zaXRpb24/OiBXaW5kb3dBdXRvUG9zaXRpb247XHJcbiAgICBhdXRvU2l6ZT86IFdpbmRvd0F1dG9TaXplO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5NZXNzYWdlV2luZG93UGFyYW1zIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgcGFyZW50V2luZG93SWQ/OiBzdHJpbmc7XHJcbiAgICBzdHlsZT86IFwiZXJyb3JcIiB8IFwiaW5mb3JtYXRpb25cIiB8IFwiY29uZmlybWF0aW9uXCIgfCBcImRhbmdlclwiO1xyXG4gICAgb2tCdXR0b25Db250ZW50PzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgY2FuY2VsQnV0dG9uQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIHJlc3VsdENhbGxiYWNrPzogKHJlc3VsdE9LOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVza3RvcFdpbmRvdyBpbXBsZW1lbnRzIE9wZW5XaW5kb3dQYXJhbXMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0b3A6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIGxlZnQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIHJpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBib3R0b206IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIG1pbkhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgbWluV2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIGNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgcGFyZW50V2luZG93SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGF1dG9Qb3NpdGlvbjogV2luZG93QXV0b1Bvc2l0aW9uIHwgdW5kZWZpbmVkO1xyXG4gICAgYXV0b1NpemU6IFdpbmRvd0F1dG9TaXplIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVza3RvcCBleHRlbmRzIENvbXBvbmVudDxEZXNrdG9wUHJvcHMsIERlc2t0b3BTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IERlc2t0b3BQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IERlc2t0b3BTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIGlmIChhcHBJbnN0YW5jZSlcclxuICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4vLyAgICBwcml2YXRlIHdpbmRvd3M6IFdpbmRvd0luZm9bXSA9IFtdO1xyXG5cclxuICAgIG9wZW5XaW5kb3cod2luQ29udGVudDogUmVhY3QuUmVhY3ROb2RlLCBvcGVuUGFyYW1zPzogT3BlbldpbmRvd1BhcmFtcykge1xyXG4gICAgICAgIGlmICghb3BlblBhcmFtcylcclxuICAgICAgICAgICAgb3BlblBhcmFtcyA9IHt9O1xyXG4gICAgICAgIGxldCBuZXdXaW4gPSBuZXcgRGVza3RvcFdpbmRvdygpO1xyXG4gICAgICAgIG5ld1dpbi5jb250ZW50ID0gd2luQ29udGVudDtcclxuICAgICAgICBuZXdXaW4udGl0bGUgPSBvcGVuUGFyYW1zLnRpdGxlIHx8IFwiLlwiO1xyXG4gICAgICAgIG5ld1dpbi5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDEyKTtcclxuXHJcbiAgICAgICAgbmV3V2luLmxlZnQgPSBvcGVuUGFyYW1zLmxlZnQ7XHJcbiAgICAgICAgbmV3V2luLnRvcCA9IG9wZW5QYXJhbXMudG9wO1xyXG4gICAgICAgIG5ld1dpbi5oZWlnaHQgPSBvcGVuUGFyYW1zLmhlaWdodDtcclxuICAgICAgICBuZXdXaW4ud2lkdGggPSBvcGVuUGFyYW1zLndpZHRoO1xyXG4gICAgICAgIG5ld1dpbi5yaWdodCA9IG9wZW5QYXJhbXMucmlnaHQ7XHJcbiAgICAgICAgbmV3V2luLmJvdHRvbSA9IG9wZW5QYXJhbXMuYm90dG9tO1xyXG5cclxuICAgICAgICBpZiAoIW5ld1dpbi5sZWZ0KSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLnJpZ2h0ICYmICFuZXdXaW4ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5sZWZ0ID0gNTA7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV3V2luLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ubGVmdCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5yaWdodCAmJiAhbmV3V2luLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbmV3V2luLnRvcCkge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5ib3R0b20gJiYgIW5ld1dpbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi50b3AgPSA1MDtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV3V2luLmJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmhlaWdodCA9IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi50b3AgPSA1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4uYm90dG9tICYmICFuZXdXaW4uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdXaW4uYXV0b1Bvc2l0aW9uID0gb3BlblBhcmFtcy5hdXRvUG9zaXRpb247XHJcbiAgICAgICAgbmV3V2luLmF1dG9TaXplID0gb3BlblBhcmFtcy5hdXRvU2l6ZTtcclxuXHJcbiAgICAgICAgbmV3V2luLm1pbkhlaWdodCA9IG9wZW5QYXJhbXMubWluSGVpZ2h0IHx8IDEwMDtcclxuICAgICAgICBuZXdXaW4ubWluV2lkdGggPSBvcGVuUGFyYW1zLm1pbldpZHRoIHx8IDEwMDtcclxuXHJcbiAgICAgICAgbmV3V2luLnBhcmVudFdpbmRvd0lkID0gb3BlblBhcmFtcy5wYXJlbnRXaW5kb3dJZDtcclxuICAgICAgICBpZiAobmV3V2luLnBhcmVudFdpbmRvd0lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93QnlJZChuZXdXaW4ucGFyZW50V2luZG93SWQpIS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dzLnB1c2gobmV3V2luKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5NZXNzYWdlV2luZG93KHdpbkNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZSwgb3BlblBhcmFtcz86IE9wZW5NZXNzYWdlV2luZG93UGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFvcGVuUGFyYW1zKVxyXG4gICAgICAgICAgICBvcGVuUGFyYW1zID0ge3N0eWxlOiBcImluZm9ybWF0aW9uXCJ9O1xyXG5cclxuICAgICAgICBsZXQgd2luUGFyYW1zOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogb3BlblBhcmFtcy50aXRsZSxcclxuICAgICAgICAgICAgcGFyZW50V2luZG93SWQ6IG9wZW5QYXJhbXMucGFyZW50V2luZG93SWQsXHJcbiAgICAgICAgICAgIGF1dG9Qb3NpdGlvbjogXCJwYXJlbnQtY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGF1dG9TaXplOiBcImNvbnRlbnRcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2luUGFyYW1zLnBhcmVudFdpbmRvd0lkKVxyXG4gICAgICAgICAgICB3aW5QYXJhbXMuYXV0b1Bvc2l0aW9uID0gXCJkZXNrdG9wLWNlbnRlclwiO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uU3R5bGUgPSB7bWluV2lkdGg6IDY1LCBtYXJnaW5MZWZ0OiA4fTtcclxuXHJcbiAgICAgICAgbGV0IG9rQnV0dG9uOiBSZWFjdC5SZWFjdE5vZGUgPSBbXTtcclxuICAgICAgICBpZiAob3BlblBhcmFtcy5va0J1dHRvbkNvbnRlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbkNsYXNzTmFtZSA9IFwiaXMtb3V0bGluZWRcIjtcclxuICAgICAgICAgICAgaWYgKG9wZW5QYXJhbXMuc3R5bGUgPT09IFwiZGFuZ2VyXCIpXHJcbiAgICAgICAgICAgICAgICBidXR0b25DbGFzc05hbWUgKz0gXCIgaXMtZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgIG9rQnV0dG9uID1cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChzZW5kZXI6QnV0dG9uLCBlOlJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXIuY2xvc2VQYXJlbnRXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlblBhcmFtcyAmJiBvcGVuUGFyYW1zLnJlc3VsdENhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5QYXJhbXMucmVzdWx0Q2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcGVuUGFyYW1zLm9rQnV0dG9uQ29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjYW5jZWxCdXR0b246IFJlYWN0LlJlYWN0Tm9kZSA9IFtdO1xyXG4gICAgICAgIGlmIChvcGVuUGFyYW1zLmNhbmNlbEJ1dHRvbkNvbnRlbnQpIHtcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uID1cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpcy1vdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoc2VuZGVyOkJ1dHRvbiwgZTpSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyLmNsb3NlUGFyZW50V2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5QYXJhbXMgJiYgb3BlblBhcmFtcy5yZXN1bHRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUGFyYW1zLnJlc3VsdENhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wZW5QYXJhbXMuY2FuY2VsQnV0dG9uQ29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3aW4gPVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWluV2lkdGg6MjAwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIHt3aW5Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7b2tCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbmNlbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9wZW5QYXJhbXMpO1xyXG5cclxuICAgICAgICB0aGlzLm9wZW5XaW5kb3cod2luLCB3aW5QYXJhbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhY3RpdmF0ZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0VG9wUGFyZW50V2luZG93KGlkKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbiAmJiB0aGlzLnN0YXRlLndpbmRvd3MuaW5kZXhPZih3aW4pICE9PSB0aGlzLnN0YXRlLndpbmRvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBfLnB1bGwodGhpcy5zdGF0ZS53aW5kb3dzLCB3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpbmRvd3MucHVzaCh3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQv9C+0LTQvdC40LzQsNC10Lwg0LTQvtGH0LXRgNC90LjQtSDQvtC60L3QsFxyXG4gICAgICAgICAgICBsZXQgY2hpbGRXaW4gPSB0aGlzLnN0YXRlLndpbmRvd3MuZmlsdGVyKCh3OiBEZXNrdG9wV2luZG93KSA9PiB3LnBhcmVudFdpbmRvd0lkID09PSB3aW4hLmlkKVswXTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkV2luKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUNoaWxkV2luZG93KGNoaWxkV2luLmlkKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlQ2hpbGRXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgICAgIGlmICh3aW4gJiYgdGhpcy5zdGF0ZS53aW5kb3dzLmluZGV4T2Yod2luKSAhPT0gdGhpcy5zdGF0ZS53aW5kb3dzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgXy5wdWxsKHRoaXMuc3RhdGUud2luZG93cywgd2luKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dzLnB1c2god2luKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g0L/QvtC00L3QuNC80LDQtdC8INC00L7Rh9C10YDQvdC40LUg0L7QutC90LBcclxuICAgICAgICAgICAgbGV0IGNoaWxkV2luID0gdGhpcy5zdGF0ZS53aW5kb3dzLmZpbHRlcigodzogRGVza3RvcFdpbmRvdykgPT4gdy5wYXJlbnRXaW5kb3dJZCA9PT0gd2luIS5pZClbMF07XHJcbiAgICAgICAgICAgIGlmIChjaGlsZFdpbilcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVXaW5kb3coY2hpbGRXaW4uaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUb3BQYXJlbnRXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB0b3BQYXJlbnQgPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgICAgIHdoaWxlICh0b3BQYXJlbnQgJiYgdG9wUGFyZW50LnBhcmVudFdpbmRvd0lkKSB7XHJcbiAgICAgICAgICAgIHRvcFBhcmVudCA9IHRoaXMuZ2V0V2luZG93QnlJZCh0b3BQYXJlbnQucGFyZW50V2luZG93SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9wUGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpbmRvd0J5SWQoaWQ6IHN0cmluZyk6IERlc2t0b3BXaW5kb3cgfCBudWxsIHtcclxuICAgICAgICBmb3IgKGxldCB3IG9mIHRoaXMuc3RhdGUud2luZG93cykge1xyXG4gICAgICAgICAgICBpZiAody5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiRGVza3RvcFdpbmRvdyBpZD0nXCIgKyBpZCArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUFjdGl2YXRlID0gKHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaW5kb3coc3RhdGUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgICAgICBfLnB1bGwodGhpcy5zdGF0ZS53aW5kb3dzLCB3aW4pO1xyXG5cclxuICAgICAgICBpZiAod2luICYmIHdpbi5wYXJlbnRXaW5kb3dJZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlV2luZG93KHdpbi5wYXJlbnRXaW5kb3dJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93QnlJZCh3aW4ucGFyZW50V2luZG93SWQpIS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuY2xvc2VXaW5kb3coc3RhdGUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgICAgICh0aGlzLm5hdGl2ZUVsZW1lbnQgYXMgYW55KVtcIiQkZGVza3RvcFwiXSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiZGVza3RvcFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJhdXRvXCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiByZWY9eyAoZSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53aW5kb3dzLm1hcCgodywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci1kZXNrdG9wLXdpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2luZG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3cuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt3LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wPXt3LnRvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ9e3cubGVmdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3LndpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt3LmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0PXt3LnJpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tPXt3LmJvdHRvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt3LmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9e3cubWluV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3cubWluSGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3cuYXV0b1NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvUG9zaXRpb249e3cuYXV0b1Bvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50V2luZG93SWQ9e3cucGFyZW50V2luZG93SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2YXRlPXsgIHRoaXMuaGFuZGxlQWN0aXZhdGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17IHRoaXMuaGFuZGxlQ2xvc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1dpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL29uTW92ZVN0YXJ0PXsgdy5oYW5kbGVNb3ZlU3RhcnQgfVxyXG4vL29uUmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydD17IHcuaGFuZGxlUmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydCB9XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGVza3RvcH0gZnJvbSBcIi4uL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQgRWxlbWVudCA9IEpTWC5FbGVtZW50O1xyXG5pbXBvcnQge0FwcEVycm9yQmFyfSBmcm9tIFwiLi9BcHBFcnJvckJhclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcFN0YXRlPiB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHNpemVUbzogXCJwYXJlbnRcIiB8IFwiY29udGVudFwiO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8QXBwUHJvcHM+IHtcclxuICAgIHdpbmRvd3M6IEFwcFdpbmRvd1tdID0gW107ICAvLyDQv9C+0YHQu9C10LTQvdC10LUg0LDQutGC0LjQstC90L5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudDxBcHBQcm9wcywgQXBwU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBcHBQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEFwcFN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgYXBwSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgIC8vICAgICAgc3VwZXIuZGlkTW91bnQoKTtcclxuICAgIC8vICAgICAgYXBwSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGRlc2t0b3A6IERlc2t0b3A7XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImFwcFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPEFwcEVycm9yQmFyLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGxldCBhcHBJbnN0YW5jZTogQXBwO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwL0FwcC50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Zpc2libGVQbHVnaW5Qcm9wcywgVmlzaWJsZVBsdWdpblN0YXRlLCBWaXNpYmxlUGx1Z2lufSBmcm9tIFwiLi4vLi4vUGx1Z2lucy9WaXNpYmxlUGx1Z2luXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcEVycm9yQmFyUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxBcHBFcnJvckJhclN0YXRlPiB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwRXJyb3JCYXJTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPEFwcEVycm9yQmFyUHJvcHM+IHtcclxuICAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBFcnJvckJhciBleHRlbmRzIENvbXBvbmVudDxBcHBFcnJvckJhclByb3BzLCBBcHBFcnJvckJhclN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQXBwRXJyb3JCYXJQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwRXJyb3JCYXJTdGF0ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgLy8gICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgICAgIHdpbmRvdy5vbmVycm9yID0gdGhpcy5oYW5kbGVFcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvck1lc3NhZ2U6IFJlYWN0LlJlYWN0Tm9kZTtcclxuXHJcbiAgICBoYW5kbGVFcnJvciA9IChtc2c6IHN0cmluZywgdXJsPzogc3RyaW5nLCBsaW5lPzogbnVtYmVyLCBjb2w/OiBudW1iZXIsIGVycm9yPzogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBtc2c7XHJcblxyXG4gICAgICAgIGlmICghZXJyb3IuJCRpc1Rocm93RXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuXHJcbiAgICAgICAgbGV0IHN1cHByZXNzRXJyb3JBbGVydCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHN1cHByZXNzRXJyb3JBbGVydDtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXBwLWVycm9yLWJhclwiKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzTmFtZSghdGhpcy5zdGF0ZS52aXNpYmxlLCBcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kOiBcIiNmZjRlNGVcIiwgY3Vyc29yOiBcImRlZmF1bHRcIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHsgdGhpcy5zdGF0ZS52aXNpYmxlID0gZmFsc2U7IHRoaXMuZm9yY2VVcGRhdGUoKTt9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC9BcHBFcnJvckJhci50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0xheW91dFwiO1xyXG5pbXBvcnQge0ZpeGVkfSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZsZXhcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlU3RhcnRFdmVudH0gZnJvbSBcIi4uL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge09wZW5XaW5kb3dQYXJhbXMsIERlc2t0b3AsIFdpbmRvd0F1dG9Qb3NpdGlvbiwgV2luZG93QXV0b1NpemV9IGZyb20gXCIuLi9EZXNrdG9wL0Rlc2t0b3BcIjtcclxuaW1wb3J0IHt0aHJvd0Vycm9yfSBmcm9tIFwiLi4vLi4vRXJyb3JcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1Byb3BzIGV4dGVuZHMgT3BlbldpbmRvd1BhcmFtcywgQ29tcG9uZW50UHJvcHM8V2luZG93U3RhdGU+IHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgb25BY3RpdmF0ZT8oc3RhdGU6IFdpbmRvd1N0YXRlKTogdm9pZDtcclxuICAgIG9uQ2xvc2U/KHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPFdpbmRvd1Byb3BzPiBpbXBsZW1lbnRzIE9wZW5XaW5kb3dQYXJhbXMge1xyXG4gICAgY29udGVudDogSlNYLkVsZW1lbnQ7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcmlnaHQ6IG51bWJlcjtcclxuICAgIGJvdHRvbTogbnVtYmVyO1xyXG4gICAgbWluSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBtaW5XaWR0aDogbnVtYmVyO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwYXJlbnRXaW5kb3dJZDogc3RyaW5nO1xyXG4gICAgYXV0b1Bvc2l0aW9uOiBXaW5kb3dBdXRvUG9zaXRpb247XHJcbiAgICBhdXRvU2l6ZTogV2luZG93QXV0b1NpemU7XHJcblxyXG4vLyAgICBjaGlsZFdpbmRvdzogV2luZG93O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93IGV4dGVuZHMgQ29tcG9uZW50PFdpbmRvd1Byb3BzLCBXaW5kb3dTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFdpbmRvd1Byb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgV2luZG93U3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVJbml0U3RhdGUoKSB7XHJcbiAgICAgICAgXy5hc3NpZ24odGhpcy5zdGF0ZSwgdGhpcy5wcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUluaXRTdGF0ZSgpO1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFdpbmRvd1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIC8vdGhpcy5zdGF0ZS5kaXNhYmxlZCA9IG5leHRQcm9wcy5kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UGFyZW50RGVza3RvcEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIGlmICgocGFyZW50IGFzIGFueSkuJCRkZXNrdG9wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93RXJyb3IoXCJXaW5kb3cuZ2V0UGFyZW50RGVza3RvcEVsZW1lbnQoKTogcGFyZW50IGRlc2t0b3Agbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIHRocm93IFwiZmFrZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgY2VudGVyVG8ocGFyZW50OiBKUXVlcnkpIHtcclxuICAgIC8vICAgICBsZXQgd2luID0gJCh0aGlzLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLnN0YXRlLnRvcCA9IChwYXJlbnQub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpKSAvIDI7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUudG9wID4gcGFyZW50Lm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKSlcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGF0ZS50b3AgPSBwYXJlbnQub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLnRvcCA8IDApIHRoaXMuc3RhdGUudG9wID0gMDtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gKHBhcmVudC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpKSAvIDI7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUubGVmdCA+IHBhcmVudC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpKVxyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXRlLmxlZnQgPSBwYXJlbnQub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKTtcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS5sZWZ0IDwgMCkgdGhpcy5zdGF0ZS5sZWZ0ID0gMDtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY2VudGVyVG9EZXNrdG9wKCkge1xyXG4gICAgICAgIGxldCB3aW4gPSAkKHRoaXMubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgbGV0IGRlc2t0b3AgPSAkKHRoaXMuZ2V0UGFyZW50RGVza3RvcEVsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudG9wID0gKGRlc2t0b3Aub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpKSAvIDI7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gKGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSkgLyAyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3AgPiBkZXNrdG9wLm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3AgPSBkZXNrdG9wLm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3AgPCAwKSB0aGlzLnN0YXRlLnRvcCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IChkZXNrdG9wLm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpIC8gMjtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sZWZ0ID4gZGVza3RvcC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxlZnQgPSBkZXNrdG9wLm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGVmdCA8IDApIHRoaXMuc3RhdGUubGVmdCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAvL3RoaXMuY2VudGVyVG8oJCh0aGlzLmdldFBhcmVudERlc2t0b3BFbGVtZW50KCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNlbnRlclRvUGFyZW50V2luZG93KCkge1xyXG4gICAgICAgIGxldCB3aW4gPSAkKHRoaXMubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9ICQoXCIjXCIgKyB0aGlzLnN0YXRlLnBhcmVudFdpbmRvd0lkKTtcclxuICAgICAgICBsZXQgZGVza3RvcCA9ICQodGhpcy5nZXRQYXJlbnREZXNrdG9wRWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50b3AgPSAocGFyZW50Lm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKSkgLyAyICsgcGFyZW50LnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IChwYXJlbnQub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSkgLyAyICsgcGFyZW50LnBvc2l0aW9uKCkubGVmdDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9wID4gZGVza3RvcC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG9wID0gZGVza3RvcC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9wIDwgMCkgdGhpcy5zdGF0ZS50b3AgPSAwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sZWZ0ID4gZGVza3RvcC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxlZnQgPSBkZXNrdG9wLm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGVmdCA8IDApIHRoaXMuc3RhdGUubGVmdCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAvL3RoaXMuY2VudGVyVG8oJChcIiNcIiArIHRoaXMuc3RhdGUucGFyZW50V2luZG93SWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIuZGlkTW91bnQoKTtcclxuICAgICAgICAodGhpcy5uYXRpdmVFbGVtZW50IGFzIGFueSlbXCIkJHdpbmRvd1wiXSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmF1dG9Qb3NpdGlvbiA9PT0gXCJkZXNrdG9wLWNlbnRlclwiKVxyXG4gICAgICAgICAgICB0aGlzLmNlbnRlclRvRGVza3RvcCgpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuYXV0b1Bvc2l0aW9uID09PSBcInBhcmVudC1jZW50ZXJcIilcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXJUb1BhcmVudFdpbmRvdygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmdldFBhcmVudERlc2t0b3AoKS5jbG9zZVdpbmRvdyh0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1vdmVTdGFydCA9IChlOiBNb3ZlU3RhcnRFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUuYmluZFgodGhpcy5zdGF0ZSwgXCJsZWZ0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcyhcImxlZnRcIiwgdGhpcy5zdGF0ZS5sZWZ0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLmJpbmRZKHRoaXMuc3RhdGUsIFwidG9wXCIsICgpID0+IHtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcyhcInRvcFwiLCB0aGlzLnN0YXRlLnRvcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnQgPSAoZTogTW92ZVN0YXJ0RXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBlLmJpbmRYKHRoaXMuc3RhdGUsIFwid2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS53aWR0aCA8IHRoaXMuc3RhdGUubWluV2lkdGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndpZHRoID0gdGhpcy5zdGF0ZS5taW5XaWR0aDtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcyhcIndpZHRoXCIsIHRoaXMuc3RhdGUud2lkdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUuYmluZFkodGhpcy5zdGF0ZSwgXCJoZWlnaHRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgPCB0aGlzLnN0YXRlLm1pbkhlaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID0gdGhpcy5zdGF0ZS5taW5IZWlnaHQ7XHJcbiAgICAgICAgICAgICQodGhpcy5uYXRpdmVFbGVtZW50KS5jc3MoXCJoZWlnaHRcIiwgdGhpcy5zdGF0ZS5oZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVPbkNsaWNrID0gKGU/OiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQWN0aXZhdGUpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3RpdmF0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGhhbmRsZUNsb3NlQnV0dG9uQ2xpY2sgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAobmV4dFByb3BzOiBXaW5kb3dQcm9wcywgbmV4dFN0YXRlOiBXaW5kb3dTdGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgb2xkRGlzYWJsZWQgPSB0aGlzLnN0YXRlLmRpc2FibGVkID09PSB0cnVlO1xyXG4gICAgICAgIGxldCBuZXdEaXNhYmxlZCA9IG5leHRQcm9wcy5kaXNhYmxlZCA9PT0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kaXNhYmxlZCA9IG5ld0Rpc2FibGVkO1xyXG5cclxuICAgICAgICByZXR1cm4gb2xkRGlzYWJsZWQgIT09IG5ld0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXJSaWdodEJvdHRvbUNvcm5lclJlc2l6ZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hdXRvU2l6ZSA9PT0gXCJjb250ZW50XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luZG93LXJlc2l6ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCBoZWlnaHQ6MTAsIHdpZHRoOjEwLCByaWdodDowLGJvdHRvbTowLCBib3JkZXJSYWRpdXM6IFwiMCAwIDVweCAwXCIsY3Vyc29yOiBcInNlLXJlc2l6ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdmVTdGFydD17dGhpcy5yZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtpZDogdGhpcy5zdGF0ZS5pZH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIndpbmRvdyBib3hcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe3Bvc2l0aW9uOiBcImFic29sdXRlXCJ9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMuc3RhdGUudG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXHJcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnN0YXRlLnJpZ2h0LFxyXG4gICAgICAgICAgICBib3R0b206IHRoaXMuc3RhdGUuYm90dG9tLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMuc3RhdGUubWluSGVpZ2h0LFxyXG4gICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5zdGF0ZS5taW5XaWR0aCxcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXV0b1NpemUgPT09IFwiY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29udGVudFwiKTtcclxuICAgICAgICAgICAgLy8gP1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgaGVhZGVyQnV0dG9uU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIwcHhcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci13aW5cIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmRpc2FibGVkKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGlzYWJsZWQpO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZWRXcmFwcGVyQ2xhc3MgPSBcIndpbmRvdy1kaXNhYmxlZC13cmFwcGVyXCI7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpc2FibGVkIHx8IHRoaXMuc3RhdGUuZGlzYWJsZWQgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICBkaXNhYmxlZFdyYXBwZXJDbGFzcyArPSBcIiBpcy1oaWRkZW5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5kb3dcIlxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgICByZWY9eyAoZTogYW55KSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH19XHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMuaGFuZGxlT25DbGljayB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaXhlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5kb3ctaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiNXB4IDVweCAwcHggMHB4XCIsIHBvc2l0aW9uOlwicmVsYXRpdmVcIiwgcGFkZGluZ0xlZnQ6IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cInJvd1wiIHNpemVUbz1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2luZG93LXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgbGVmdDowLCByaWdodDowLGJvdHRvbTowfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9e3RoaXMubW92ZVN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtYWRkb25zIGJ1dHRvbnMtYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDIsIHBhZGRpbmdSaWdodDogNH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgbWluaW1pemUtYnV0dG9uXCIgc3R5bGU9e2hlYWRlckJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1taW51c1wiIHN0eWxlPXt7dG9wOiAzfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIG1heGltaXplLWJ1dHRvblwiIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcXVhcmUtb1wiIHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCJ9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgY2xvc2UtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2hlYWRlckJ1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlXCIgc3R5bGU9e3t0b3A6IC0xfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBjbGFzc05hbWU9XCJ3aW5kb3ctYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6MTAsIG92ZXJmbG93OlwiaGlkZGVuXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSaWdodEJvdHRvbUNvcm5lclJlc2l6ZXIoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkaXNhYmxlZFdyYXBwZXJDbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OjAsIHRvcDowLCByaWdodDowLCBib3R0b206MH19XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyA8ZGl2IGNsYXNzTmFtZT1cIndpbmRvdy1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OlwiMTAwJVwiIH19PlxyXG4vLyAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbi8vIDwvZGl2PlxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1dpbmRvdy9XaW5kb3cudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRHJhZ0V2ZW50SGFuZGxlciA9IF9fUmVhY3QuRHJhZ0V2ZW50SGFuZGxlcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92YWJsZVByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbk1vdmVTdGFydD86IChldmVudDogTW92ZVN0YXJ0RXZlbnQpPT52b2lkO1xyXG4gICAgb25Nb3ZlPzogKGV2ZW50OiBNb3ZlRXZlbnQpPT52b2lkO1xyXG4gICAgb25Nb3ZlRW5kPzogKGV2ZW50OiBNb3ZlRW5kRXZlbnQpPT52b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlU3RhcnRFdmVudCB7XHJcbiAgICBiaW5kWDogKG9iajogT2JqZWN0LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCk9PnZvaWQpPT52b2lkO1xyXG4gICAgYmluZFk6IChvYmo6IE9iamVjdCwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpPT52b2lkKT0+dm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRXZlbnQge1xyXG4gICAgZGVsdGFYOiBudW1iZXI7XHJcbiAgICBkZWx0YVk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRW5kRXZlbnQge1xyXG4gICAgZGVsdGFYOiBudW1iZXI7XHJcbiAgICBkZWx0YVk6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBCaW5kZWRPYmplY3Qge1xyXG4gICAgb2JqOiBhbnk7XHJcbiAgICBwcm9wTmFtZTogc3RyaW5nXHJcbiAgICBzdGFydFZhbHVlOiBudW1iZXI7XHJcbiAgICBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZDtcclxuICAgIGxhc3RWYWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW92YWJsZSBleHRlbmRzIENvbXBvbmVudDxNb3ZhYmxlUHJvcHMsYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRDbGllbnRYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0Q2xpZW50WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3Zlcl9CaW5kZWQ6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRlZFg6IEJpbmRlZE9iamVjdFtdID0gW107XHJcbiAgICBwcml2YXRlIGJpbmRlZFk6IEJpbmRlZE9iamVjdFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kWChvYmo6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmJpbmRlZFgucHVzaCh7XHJcbiAgICAgICAgICAgIG9iajogb2JqLFxyXG4gICAgICAgICAgICBwcm9wTmFtZTogcHJvcE5hbWUsXHJcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IG9ialtwcm9wTmFtZV0sXHJcbiAgICAgICAgICAgIG1vdmVkQ2FsbGJhY2s6IG1vdmVkQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogb2JqW3Byb3BOYW1lXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRZKG9iajogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuYmluZGVkWS5wdXNoKHtcclxuICAgICAgICAgICAgb2JqOiBvYmosXHJcbiAgICAgICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZSxcclxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogb2JqW3Byb3BOYW1lXSxcclxuICAgICAgICAgICAgbW92ZWRDYWxsYmFjazogbW92ZWRDYWxsYmFjayxcclxuICAgICAgICAgICAgbGFzdFZhbHVlOiBvYmpbcHJvcE5hbWVdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydENsaWVudFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgdGhpcy5zdGFydENsaWVudFkgPSBlLmNsaWVudFk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KHtiaW5kWDogdGhpcy5iaW5kWC5iaW5kKHRoaXMpLCBiaW5kWTogdGhpcy5iaW5kWS5iaW5kKHRoaXMpfSk7XHJcblxyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJtb3ZhYmxlXCIsIFwiXCIpO1xyXG4gICAgICAgIC8vZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnT3Zlcl9CaW5kZWQgPSB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJfQmluZGVkKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJfQmluZGVkKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdmVFbmQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlRW5kKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhWDogZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBkZWx0YVk6IGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmluZGVkWCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmluZGVkWSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kZWRYLmZvckVhY2goKGJpbmQpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gYmluZC5zdGFydFZhbHVlICsgZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFg7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gYmluZC5sYXN0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQub2JqW2JpbmQucHJvcE5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBiaW5kLmxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmQubW92ZWRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBiaW5kLm1vdmVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRlZFkuZm9yRWFjaCgoYmluZCk9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGJpbmQuc3RhcnRWYWx1ZSArIGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZO1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGJpbmQubGFzdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kLm9ialtiaW5kLnByb3BOYW1lXSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYmluZC5sYXN0VmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5kLm1vdmVkQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgYmluZC5tb3ZlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3ZlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZSh7XHJcbiAgICAgICAgICAgICAgICBkZWx0YVg6IGUuY2xpZW50WCAtIHRoaXMuc3RhcnRDbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgZGVsdGFZOiBlLmNsaWVudFkgLSB0aGlzLnN0YXJ0Q2xpZW50WVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJtb3ZhYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe2RyYWdnYWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtjdXJzb3I6IFwibW92ZVwifSk7XHJcblxyXG4gICAgICAgIC8vcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcEluZm8uZWRpdG9yVHlwZSwgZWRpdG9yUHJvcHMsIG51bGwpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9e3RoaXMuaGFuZGxlRHJhZ1N0YXJ0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9e3RoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZS50c3hcbiAqKi8iLCJpbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi90ZXN0QnVodGFPYmplY3QxXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgdGVzdEJ1aHRhT2JqZWN0MiBleHRlbmRzIFRlc3RCdWh0YU9iamVjdDEge1xyXG5cclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0J/QvtC7L3NleFwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+XCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQn9C+0YLQvtC70L7QuiDQsNCx0L7QvdC10L3RgtCwXCJcclxuICAgIH0pXHJcbiAgICBzZXg6IHN0cmluZztcclxuXHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcblxyXG4vL2ltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtleGVjdXRlU1FMfSBmcm9tIFwiLi4vLi4vU1FMXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5zfSBmcm9tIFwiLi9UcmVlR3JpZENvbHVtbnNcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtblByb3BzLCBUcmVlR3JpZENvbHVtbn0gZnJvbSBcIi4vVHJlZUdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtLZXljb2RlfSBmcm9tIFwiLi4vLi4vS2V5Y29kZVwiO1xyXG5pbXBvcnQge01vdmFibGUsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCB7Z2V0U2Nyb2xsYmFyV2lkdGh9IGZyb20gXCIuLi8uLi9nZXRTY3JvbGxCYXJXaWR0aFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0xheW91dFwiO1xyXG5pbXBvcnQge0ZpeGVkfSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZsZXhcIjtcclxuaW1wb3J0IHtPYmplY3REZXNpZ25lcn0gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lclwiO1xyXG5pbXBvcnQge09wZW5XaW5kb3dQYXJhbXN9IGZyb20gXCIuLi9EZXNrdG9wL0Rlc2t0b3BcIjtcclxuaW1wb3J0IHthcHBJbnN0YW5jZX0gZnJvbSBcIi4uL0FwcC9BcHBcIjtcclxuaW1wb3J0IHtUcmVlR3JpZERhdGFTb3VyY2V9IGZyb20gXCIuL1RyZWVHcmlkRGF0YVNvdXJjZVwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8VHJlZUdyaWRTdGF0ZT4ge1xyXG4gICAgZGF0YVNvdXJjZTogVHJlZUdyaWREYXRhU291cmNlO1xyXG4gICAgcm93SGVpZ2h0PzogbnVtYmVyO1xyXG4gICAga2V5RmllbGROYW1lPzogc3RyaW5nO1xyXG4gICAgcGFyZW50S2V5RmllbGROYW1lPzogc3RyaW5nO1xyXG4gICAgaGllcmFyY2h5RmllbGROYW1lPzogc3RyaW5nO1xyXG4gICAgaGllcmFyY2h5RGVsaW1pdGVycz86IHN0cmluZztcclxuICAgIHRyZWVNb2RlPzogYm9vbGVhbjtcclxuICAgIGF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw/OiBudW1iZXI7XHJcblxyXG4gICAgZWRpdGFibGU/OiBib29sZWFuO1xyXG4gICAgZGVueUluc2VydD86IGJvb2xlYW47XHJcbiAgICBkZW55VXBkYXRlPzogYm9vbGVhbjtcclxuICAgIGRlbnlEZWxldGU/OiBib29sZWFuO1xyXG5cclxuICAgIG9uQ3JlYXRlTmV3UmVjb3JkPzogKCkgPT4gYW55O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxUcmVlR3JpZFByb3BzPiB7XHJcbiAgICBjb2x1bW5zOiBJbnRlcm5hbENvbHVtbltdO1xyXG4gICAgcGFnZUxlbmd0aDogbnVtYmVyO1xyXG4gICAgcm93czogSW50ZXJuYWxSb3dbXTtcclxuICAgIG5vZGVzOiBJbnRlcm5hbFRyZWVOb2RlW107XHJcbiAgICBmb2N1c2VkUm93SW5kZXg6IG51bWJlcjtcclxuICAgIGZvY3VzZWRDZWxsSW5kZXg6IG51bWJlcjtcclxuICAgIGRhdGFTb3VyY2U6IFRyZWVHcmlkRGF0YVNvdXJjZTtcclxuXHJcbiAgICBoZWFkZXJGYWtlUm93OiBIVE1MRWxlbWVudDtcclxuICAgIGZvb3RlckZha2VSb3c6IEhUTUxFbGVtZW50O1xyXG4gICAgaGVhZGVyV3JhcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgYm9keVdyYXBwZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGZvb3RlcldyYXBwZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBoZWFkZXJUYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgYm9keVRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb290ZXJUYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxDb2x1bW4ge1xyXG4gICAgcHJvcHM6IFRyZWVHcmlkQ29sdW1uUHJvcHM7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgY2FwdGlvbjogc3RyaW5nO1xyXG4gICAgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgICBmb290ZXI6IHN0cmluZztcclxuICAgIGhpZGRlbjogYm9vbGVhbjtcclxuICAgIGhlYWRlcldpZHRoTmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBib2R5V2lkdGhOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGZvb3RlcldpZHRoTmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFJvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ3JpZFN0YXRlOiBUcmVlR3JpZFN0YXRlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgLy8vICAgc291cmNlT2JqZWN0OiBhbnk7XHJcbiAgICBzb3VyY2VJbmRleDogbnVtYmVyO1xyXG4gICAgY2VsbEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XHJcbiAgICBub2RlOiBJbnRlcm5hbFRyZWVOb2RlO1xyXG5cclxuICAgIGdldCBzb3VyY2VEYXRhKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKVt0aGlzLnNvdXJjZUluZGV4XTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFRyZWVOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncmlkU3RhdGU6IFRyZWVHcmlkU3RhdGUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAvL3NvdXJjZU9iamVjdDogYW55O1xyXG4gICAgc291cmNlSW5kZXg6IG51bWJlcjtcclxuICAgIGNlbGxFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIC8vINC00LvRjyB0cmVlTW9kZTtcclxuICAgIHBhcmVudDogSW50ZXJuYWxUcmVlTm9kZTtcclxuICAgIGNoaWxkcmVuOiBJbnRlcm5hbFRyZWVOb2RlW10gPSBbXTtcclxuICAgIGV4cGFuZGVkOiBib29sZWFuO1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuXHJcbiAgICBwdXNoUm93UmVjdXJzaXZlKHJvd3M6IEludGVybmFsUm93W10sIG1heFBhZ2VMZW5ndGg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBpZiAocm93cy5sZW5ndGggPj0gbWF4UGFnZUxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgcm93ID0gbmV3IEludGVybmFsUm93KHRoaXMuZ3JpZFN0YXRlKTtcclxuICAgICAgICByb3cuc291cmNlSW5kZXggPSB0aGlzLnNvdXJjZUluZGV4O1xyXG4gICAgICAgIHJvdy5ub2RlID0gdGhpcztcclxuICAgICAgICByb3dzLnB1c2gocm93KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucHVzaFJvd1JlY3Vyc2l2ZShyb3dzLCBtYXhQYWdlTGVuZ3RoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXRlcmF0ZVJlY3Vyc2l2ZShjYWxsYmFjazogKG5vZGU6IEludGVybmFsVHJlZU5vZGUpID0+IHZvaWQpIHtcclxuICAgICAgICBjYWxsYmFjayh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLml0ZXJhdGVSZWN1cnNpdmUoY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLy9jb25zdCB2ZXJ0U2Nyb2xsQmFyV2lkdGggPSAzMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZCBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZFByb3BzLCBUcmVlR3JpZFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZWVHcmlkUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFRyZWVHcmlkU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXRlcmF0ZUFsbE5vZGVzKGNhbGxiYWNrOiAobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubm9kZXMuZm9yRWFjaCgobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLml0ZXJhdGVSZWN1cnNpdmUoY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwYW5kQWxsKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubm9kZXMuZm9yRWFjaCgobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLml0ZXJhdGVSZWN1cnNpdmUoKG5vZDogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kLmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29sbGFwc2VBbGwoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlcmF0ZUFsbE5vZGVzKChub2Q6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgbm9kLmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Um93SW5kZXgoc291cmNlSW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gVE9ETzog0YHQtNC10LvQsNGC0Ywg0LLQsNGA0LjQsNC90YIg0LTQu9GPIHRyZWVNb2RlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5zb3VyY2VJbmRleCA9PT0gc291cmNlSW5kZXgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hSb3coc291cmNlSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0Um93SW5kZXgoc291cmNlSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIC8vIFRPRE86INGB0LTQtdC70LDRgtGMINC/0YDQvtC60YDRg9GC0LrRgywg0LXRgdC70LggZm9jdXNlZCDQvdC1INCy0LjQtNC90LAg0L3QsCDRjdC60YDQsNC90LVcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVVcGRhdGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm9wZW5FZGl0Rm9ybSh0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSW5zZXJ0QnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuSW5zZXJ0Rm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub3BlbkRlbGV0ZUZvcm0odGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4XSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EZWxldGVGb3JtKHJvd1RvRGVsZXRlOiBJbnRlcm5hbFJvdykge1xyXG4gICAgICAgIC8vbGV0IHJvd1RvRGVsZXRlID0gdGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4XTtcclxuICAgICAgICBsZXQgcm93ID0gcm93VG9EZWxldGUuc291cmNlRGF0YSBhcyBEZXNpZ25lZE9iamVjdDtcclxuICAgICAgICBsZXQgb2JqZWN0Q2xhc3NOYW1lID0gXCLQt9Cw0L/QuNGB0YxcIjtcclxuICAgICAgICBpZiAocm93LmdldENsYXNzTmFtZSlcclxuICAgICAgICAgICAgb2JqZWN0Q2xhc3NOYW1lID0gcm93LmdldENsYXNzTmFtZSgpO1xyXG5cclxuICAgICAgICBsZXQgb2JqZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHJvdy50b1N0cmluZylcclxuICAgICAgICAgICAgb2JqZWN0TmFtZSA9IHJvdy50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZSA9IDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcmVkXCI+0KPQtNCw0LvQuNGC0YwgXCJ7b2JqZWN0Q2xhc3NOYW1lfVwiPzxici8+eyBvYmplY3ROYW1lIH08L2Rpdj47XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0RlbGV0ZUNvbmZpcm1hdGlvbldpbmRvdyhtZXNzYWdlLCAob2tSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob2tSZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAob2tSZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZGVsZXRlUm93KHJvd1RvRGVsZXRlLnNvdXJjZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaERhdGFTb3VyY2UoKTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdGb2N1c2VkSW5kZXggPSB0aGlzLnN0YXRlLnJvd3MuaW5kZXhPZihyb3dUb0RlbGV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0ZvY3VzZWRJbmRleCA+IHRoaXMuc3RhdGUucm93cy5sZW5ndGggLSAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGb2N1c2VkSW5kZXggPSB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoIC0gMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hSb3codGhpcy5zdGF0ZS5yb3dzW25ld0ZvY3VzZWRJbmRleF0uc291cmNlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbkluc2VydEZvcm0oKSB7XHJcblxyXG4gICAgICAgIGxldCBkZXNpZ25lZE9iamVjdCA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXROZXdSb3coKTtcclxuXHJcbiAgICAgICAgaWYgKGRlc2lnbmVkT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCB3aW4gPVxyXG4gICAgICAgICAgICAgICAgPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduZWRPYmplY3Q9e2Rlc2lnbmVkT2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZUNoYW5nZXM9eyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmFkZFJvdyhkZXNpZ25lZE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaERhdGFTb3VyY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hSb3coaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0LTQvtCx0LDQstC70LXQvdC40LVcIixcclxuICAgICAgICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCxcclxuICAgICAgICAgICAgICAgIHBhcmVudFdpbmRvd0lkOiB0aGlzLmdldFBhcmVudFdpbmRvd0lkKClcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFyZW50RGVza3RvcCgpLm9wZW5XaW5kb3cod2luLCBvcGVuUGFyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuRWRpdEZvcm0ocm93OiBJbnRlcm5hbFJvdykge1xyXG5cclxuICAgICAgICBsZXQgZGVzaWduZWRPYmplY3QgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKVtyb3cuc291cmNlSW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgd2luID1cclxuICAgICAgICAgICAgPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17ZGVzaWduZWRPYmplY3R9XHJcbiAgICAgICAgICAgICAgICBvblNhdmVDaGFuZ2VzPXsgKCkgPT4geyB0aGlzLnJlZnJlc2hSb3cocm93LnNvdXJjZUluZGV4KTsgfX1cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcItGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LVcIixcclxuICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgbGVmdDogNTAsXHJcbiAgICAgICAgICAgIHBhcmVudFdpbmRvd0lkOiB0aGlzLmdldFBhcmVudFdpbmRvd0lkKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmdldFBhcmVudERlc2t0b3AoKS5vcGVuV2luZG93KHdpbiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDb2x1bW5zKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucyA9IFtdO1xyXG5cclxuICAgICAgICAvLyDRgdC90LDRh9Cw0LvQsCDQutC+0LvQvtC90LrQuCDQt9Cw0L/QvtC70L3Rj9C10Lwg0LjQtyDRgtC10LPQvtCyIDxUcmVlR3JpZENvbHVtbj5cclxuICAgICAgICBsZXQgY29sdW1uc1RhZyA9IHRoaXMuZ2V0Q2hpbGRyZW4oVHJlZUdyaWRDb2x1bW5zKTtcclxuICAgICAgICBjb2x1bW5zVGFnLmZvckVhY2goKHRhZzogSlNYLkVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtblRhZ0xpc3QgPSB0aGlzLmdldENoaWxkcmVuT2ZQcm9wcyh0YWcucHJvcHMsIFRyZWVHcmlkQ29sdW1uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtblRhZ0xpc3QgPSBjb2x1bW5UYWdMaXN0LnNvcnQoKGE6IEpTWC5FbGVtZW50LCBiOiBKU1guRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IEEgPSBhLnByb3BzIGFzIFRyZWVHcmlkQ29sdW1uUHJvcHM7XHJcbiAgICAgICAgICAgICAgICBsZXQgQiA9IGIucHJvcHMgYXMgVHJlZUdyaWRDb2x1bW5Qcm9wcztcclxuICAgICAgICAgICAgICAgIHJldHVybiBBLm9yZGVyIC0gQi5vcmRlcjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5UYWdMaXN0LmZvckVhY2goKHByb3BDb2w6IEpTWC5FbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IG5ldyBJbnRlcm5hbENvbHVtbigpO1xyXG4gICAgICAgICAgICAgICAgY29sLnByb3BzID0gcHJvcENvbC5wcm9wcztcclxuICAgICAgICAgICAgICAgIGNvbC53aWR0aCA9IHByb3BDb2wucHJvcHMud2lkdGggfHwgMTUwO1xyXG4gICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLnByb3BzLmNhcHRpb247XHJcbiAgICAgICAgICAgICAgICBjb2wuZmllbGROYW1lID0gcHJvcENvbC5wcm9wcy5wcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb2wuY2FwdGlvbiA9IHByb3BDb2wucHJvcHMuY2FwdGlvbiB8fCBjb2wuZmllbGROYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zLnB1c2goY29sKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINC10YHQu9C4INGC0LXQs9C+0LIgPFRyZWVHcmlkQ29sdW1uPiDQvdC10YIsINGC0L4g0LfQsNC/0L7Qu9C90Y/QtdC8INC40LcgRGF0YVNvdXJjZVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuaXNUcmVlR3JpZERhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkcyA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZSBhcyBUcmVlR3JpZERhdGFTb3VyY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSBkcy5nZXRUcmVlR3JpZENvbHVtbnMoKS5zb3J0KChhOiBUcmVlR3JpZENvbHVtblByb3BzLCBiOiBUcmVlR3JpZENvbHVtblByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sdW1ucy5mb3JFYWNoKChwcm9wQ29sOiBUcmVlR3JpZENvbHVtblByb3BzKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2wgPSBuZXcgSW50ZXJuYWxDb2x1bW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2wucHJvcHMgPSBwcm9wQ29sO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC53aWR0aCA9IHByb3BDb2wud2lkdGggfHwgMTUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5jYXB0aW9uID0gcHJvcENvbC5jYXB0aW9uIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmZpZWxkTmFtZSA9IHByb3BDb2wucHJvcGVydHlOYW1lIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLmNhcHRpb24gfHwgY29sLmZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMucHVzaChjb2wpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVHJlZUdyaWQ6INGB0L/QuNGB0L7QuiDQutC+0LvQvtC90L7QuiDQvdC1INC+0L/RgNC10LTQtdC70LXQvS5cIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEZvY3VzZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm9kZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnRyZWVNb2RlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhpZXJhcmNoeUZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzRnJvbUhpZXJhcmNoeUZpZWxkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInVua25vd24gaGllcmFyY2h5IG1vZGVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm9kZXNGcm9tSGllcmFyY2h5RmllbGQoKSB7XHJcblxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlhUcmVlR3JpZDogaGllcmFyY2h5RGVsaW1pdGVycyBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpbnRlcmZhY2UgSVNvcnRlZCB7XHJcbiAgICAgICAgICAgIGhpZXJhcmNoeVN0cjogc3RyaW5nO1xyXG4gICAgICAgICAgICBvYmpJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNvcnRlZDogSVNvcnRlZFtdID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubWFwKChvYmo6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGllcmFyY2h5U3RyOiBvYmpbdGhpcy5wcm9wcy5oaWVyYXJjaHlGaWVsZE5hbWUgfHwgXCJcIl0udG9TdHJpbmcoKSwgIC8vIHRvZG8gdGhpcy5wcm9wcy5oaWVyYXJjaHlGaWVsZE5hbWUgfHwgXCJcIiAgPz8/XHJcbiAgICAgICAgICAgICAgICBvYmpJbmRleDogaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ydGVkID0gXy5zb3J0Qnkoc29ydGVkLCBbXCJoaWVyYXJjaHlTdHJcIl0pO1xyXG5cclxuICAgICAgICBsZXQgY2FjaGU6IHsgW2hpZXJhcmNoeUlkOiBzdHJpbmddOiBJbnRlcm5hbFRyZWVOb2RlOyB9ID0ge307XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUubm9kZXMgPSBbXTtcclxuXHJcbiAgICAgICAgc29ydGVkLmZvckVhY2goKHMsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGllcmFyY2h5RGVsaW1pdGVycz0gdGhpcy5wcm9wcy5oaWVyYXJjaHlEZWxpbWl0ZXJzIHx8IFwiLlwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNwbGl0dGVkID0gcy5oaWVyYXJjaHlTdHIuc3BsaXQoaGllcmFyY2h5RGVsaW1pdGVycyk7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnRJZDogYW55O1xyXG4gICAgICAgICAgICBsZXQgbm9kZUlkOiBhbnk7XHJcbiAgICAgICAgICAgIGlmIChzcGxpdHRlZC5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICBub2RlSWQgPSBzLmhpZXJhcmNoeVN0cjtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlSWQgPSBfLmxhc3Qoc3BsaXR0ZWQpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgPSBzcGxpdHRlZC5zbGljZSgwLCBzcGxpdHRlZC5sZW5ndGggLSAxKS5qb2luKGhpZXJhcmNoeURlbGltaXRlcnMuc2xpY2UoMCwgMSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVbbm9kZUlkXSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWFRyZWVHcmlkOiBub2RlSWQgJ1wiICsgbm9kZUlkICsgXCInIGlzIGR1cGxpY2F0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBJbnRlcm5hbFRyZWVOb2RlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc291cmNlSW5kZXggPSBzLm9iakluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGV2ZWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXhwYW5kZWQgPSBub2RlLmxldmVsIDwgdGhpcy5wcm9wcy5hdXRvRXhwYW5kTm9kZXNUb0xldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlW25vZGVJZF0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gY2FjaGVbcGFyZW50SWRdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IEludGVybmFsVHJlZU5vZGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNvdXJjZUluZGV4ID0gcy5vYmpJbmRleDtcclxuICAgICAgICAgICAgICAgIG5vZGUubGV2ZWwgPSBwYXJlbnROb2RlLmxldmVsICsgMTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXhwYW5kZWQgPSBub2RlLmxldmVsIDwgdGhpcy5wcm9wcy5hdXRvRXhwYW5kTm9kZXNUb0xldmVsO1xyXG4gICAgICAgICAgICAgICAgY2FjaGVbcy5oaWVyYXJjaHlTdHJdID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW4ucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHtzdHI6IHMuaGllcmFyY2h5U3RyLCBwYXJlbnRJZCwgbm9kZUlkfSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSb3dzKCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnJvd3MgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubm9kZXMuZm9yRWFjaCgobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucHVzaFJvd1JlY3Vyc2l2ZSh0aGlzLnN0YXRlLnJvd3MsIHRoaXMuc3RhdGUucGFnZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kYXRhU291cmNlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5pc1RyZWVHcmlkRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRzID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlIGFzIFRyZWVHcmlkRGF0YVNvdXJjZTtcclxuICAgICAgICAgICAgICAgIGRzLmdldERhdGFSb3dzKCkuZm9yRWFjaCgob2JqOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0gbmV3IEludGVybmFsUm93KHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmZvckVhY2goKG9iajogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBJbnRlcm5hbFJvdyh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICByb3cuc291cmNlSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbml0Rm9jdXNlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sdW1ucyAmJiB0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLmRhdGFTb3VyY2UpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sdW1uc1swXS5mb290ZXIgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggKyBcIiDQv9C+0LcuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJEYXRhKCkge1xyXG5cclxuLy8gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhU291cmNlKSB7XHJcbi8vICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZS5tYXAoKHJvdykgPT4gcm93KTtcclxuLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLnJvd3MgPSB3aW5kb3dbXCJ4eHhcIl0uZmlsdGVyKChyb3cpID0+IHJvd1tcItCd0LDQt9Cy0LDQvdC40LVcIl0uaW5kZXhPZihcIlBoaWxcIikgPiAtMSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgbGFzdEJvZHlXcmFwcGVySGVpZ2h0ID0gMDtcclxuICAgIGxhc3RCb2R5V3JhcHBlcldpZHRoID0gMDtcclxuXHJcbiAgICBoYW5kbGVCb2R5V3JhcHBlckVsZW1lbnRSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0hlaWdodCA9IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBpZiAobmV3SGVpZ2h0ICE9PSB0aGlzLmxhc3RCb2R5V3JhcHBlckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RCb2R5V3JhcHBlckhlaWdodCA9IG5ld0hlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgaWYgKG5ld1dpZHRoICE9PSB0aGlzLmxhc3RCb2R5V3JhcHBlcldpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEJvZHlXcmFwcGVyV2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XHJcbiAgICAgICAgdGhpcy5ib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuaGFuZGxlQm9keVdyYXBwZXJFbGVtZW50UmVzaXplLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucGFnZUxlbmd0aCA9IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaERhdGFTb3VyY2UoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTm9kZXMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgdGVzdExvYWQ1MDAoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGV4ZWN1dGVTUUwoXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YBcIilcclxuICAgIC8vICAgICAgICAgLmRvbmUoKHRhYmxlKSA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGFibGUucm93cy5tYXAoKHIpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4ge9Ca0LvRjtGHOiByW1wi0JrQu9GO0YdcIl0sINCd0L7QvNC10YA6IHJbXCLQndC+0LzQtdGAXCJdLCDQndCw0LfQstCw0L3QuNC1OiByW1wi0J3QsNC30LLQsNC90LjQtVwiXX07XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucygpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IHRvcCA1MDA2KiDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0JrQu9GO0YcgLS0+IFwiICsgdGFibGUucm93c1swXS5nZXRWYWx1ZSgyKSk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5mYWlsKChlcnIpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFRyZWVHcmlkUHJvcHMpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZFVwZGF0ZShwcmV2UHJvcHM6IFRyZWVHcmlkUHJvcHMsIHByZXZTdGF0ZTogYW55LCBwcmV2Q29udGV4dDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJSb3dzKCk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZW5kZXJSb3dzLXN0YXJ0KClcIik7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci1yb3dzOiBcIiArIHRoaXMuc3RhdGUucm93cy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChyb3c6IEludGVybmFsUm93LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKHRoaXMucmVuZGVyUm93KHJvdywgaW5kZXgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlclJvd3MtZW5kKClcIik7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclJvdyhyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAga2V5PXtyb3dJbmRleH1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB7IHJvdy5lbGVtZW50ID0gZTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2VsbHMocm93LCByb3dJbmRleCl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNlbGxzKHJvdzogSW50ZXJuYWxSb3csIHJvd0luZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4sIGNvbEluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0LnB1c2godGhpcy5yZW5kZXJDZWxsKHJvdywgcm93SW5kZXgsIGNvbCwgY29sSW5kZXgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2VsbChyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyLCBjb2w6IEludGVybmFsQ29sdW1uLCBjb2xJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgb2JqSW5kZXggPSByb3cuc291cmNlSW5kZXg7XHJcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpW29iakluZGV4XVtjb2wucHJvcHMucHJvcGVydHlOYW1lIHx8IFwiXCJdLnRvU3RyaW5nKCk7ICAvLyB0b2RvIGNvbC5wcm9wcy5wcm9wZXJ0eU5hbWUgfHwgXCJcIiBcclxuICAgICAgICAvL2xldCBzdHIgPSB0aGlzLnJvd3Nbcm93SW5kZXhdLnNvdXJjZU9iamVjdFtjb2wucHJvcHMucHJvcGVydHlOYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vIHJldHVybiA8dGQga2V5PXtjb2xJbmRleH0+XHJcbiAgICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6MTYsIG92ZXJmbG93OlwiaGlkZGVuXCJ9fT57c3RyfTwvZGl2PlxyXG4gICAgICAgIC8vIDwvdGQ+O1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IHJvdy5ub2RlO1xyXG5cclxuICAgICAgICBsZXQgaGllcmFyY2h5UGFkZGluZ0RpdjogUmVhY3QuUmVhY3ROb2RlPVtdO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlICYmIChjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVBhZGRpbmcgfHwgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlKSkge1xyXG4gICAgICAgICAgICBoaWVyYXJjaHlQYWRkaW5nRGl2ID0gPHNwYW4gc3R5bGU9e3t3aWR0aDpub2RlLmxldmVsICogMjAsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT48L3NwYW4+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRkU3R5bGU6IGFueSA9IHtvdmVyZmxvdzogXCJoaWRkZW5cIn07XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlKSB7XHJcbiAgICAgICAgICAgIHRkU3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSBcInJnYmEoMjU1LCAwLCAwLCAwKVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0clNwYW5TdHlsZTogYW55ID0ge1xyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlICYmIG5vZGUuZXhwYW5kZWQgJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHN0clNwYW5TdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdHJTcGFuID0gPHNwYW4gc3R5bGU9eyBzdHJTcGFuU3R5bGV9PntzdHJ9PC9zcGFuPjtcclxuXHJcblxyXG4gICAgICAgIGxldCBjb2xsYXBzZUljb25EaXY6IFJlYWN0LlJlYWN0Tm9kZT1bXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VJY29uRGl2ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDoyMCwgZmxleDogXCIwIDAgYXV0b1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHtub2RlLmV4cGFuZGVkID0gZmFsc2U7IHRoaXMuY3JlYXRlUm93cygpOyB0aGlzLmZvcmNlVXBkYXRlKCk7fSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNvbGxhcHNlLWljb25cIiBzdHlsZT17eyB3aWR0aDoyMCwgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4ge25vZGUuZXhwYW5kZWQgPSB0cnVlOyB0aGlzLmNyZWF0ZVJvd3MoKTsgdGhpcy5mb3JjZVVwZGF0ZSgpO30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VJY29uRGl2ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNvbGxhcHNlLWljb25cIiBzdHlsZT17eyB3aWR0aDoyMCwgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAga2V5PXtjb2xJbmRleH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt0ZFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHJvdy5jZWxsRWxlbWVudHNbY29sSW5kZXhdID0gZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4geyB0aGlzLnNldEZvY3VzZWRDZWxsKHJvd0luZGV4LGNvbEluZGV4KTt9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY2hlY2tib3hcIiBzdHlsZT17eyBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXBhZGRpbmdcIiBzdHlsZT17eyBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hpZXJhcmNoeVBhZGRpbmdEaXZ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2xsYXBzZUljb25EaXZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWljb25cIiBzdHlsZT17eyBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3RyXCIgc3R5bGU9e3sgZmxleDogXCIwIDEgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJTcGFufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEZvY3VzZWRDZWxsKHJvd0luZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4ID0gcm93SW5kZXg7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4ID0gY2VsbEluZGV4O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVRhYmxlV2hlZWwoZTogV2hlZWxFdmVudCkge1xyXG4gICAgICAgIC8vIGlmIChlLmRlbHRhWSA+IDApXHJcbiAgICAgICAgLy8gICAgIHRoaXMuaW5jUGFnZVN0YXJ0SW5kZXgoMyk7XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoZS5kZWx0YVkgPCAwKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmRlY1BhZ2VTdGFydEluZGV4KDMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGVsdGFZKTtcclxuICAgICAgICAvLyB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5jc3Moe3RvcDogdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wfSk7XHJcblxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgKyB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5jbGllbnRIZWlnaHQgLSAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCkgLSAwO1xyXG4gICAgICAgICQodGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCkuY3NzKHt0b3A6IHBvc30pO1xyXG5cclxuICAgICAgICAkKHRoaXMuc3RhdGUuaGVhZGVyRmFrZVJvdykuY3NzKHtoZWlnaHQ6ICQodGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKX0pO1xyXG4gICAgICAgICQodGhpcy5zdGF0ZS5mb290ZXJGYWtlUm93KS5jc3Moe2hlaWdodDogJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQ2hhbmdlRm9jdXNlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgocm93OiBJbnRlcm5hbFJvdykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm93LmVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAkKHJvdy5lbGVtZW50KS5yZW1vdmVDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLXJvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJvdy5jZWxsRWxlbWVudHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgJChjZWxsKS5yZW1vdmVDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLWNlbGxcIik7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGZvY3VzZWRSb3cgPSB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdO1xyXG4gICAgICAgIGlmIChmb2N1c2VkUm93ICYmIGZvY3VzZWRSb3cuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGZvY3VzZWRSb3cuZWxlbWVudCkuYWRkQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1yb3dcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZm9jdXNlZENlbGxFbGVtZW50ID0gZm9jdXNlZFJvdy5jZWxsRWxlbWVudHNbdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4XTtcclxuICAgICAgICAgICAgaWYgKGZvY3VzZWRDZWxsRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgJChmb2N1c2VkQ2VsbEVsZW1lbnQpLmFkZENsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtY2VsbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZENlbGxFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4XS5jZWxsRWxlbWVudHNbdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEZvY3VzZWRSb3dFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4XS5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsRG93bigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3dFbCA9ICQodGhpcy5nZXRGb2N1c2VkUm93RWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIC8vINGD0YjQu9C+INC30LAg0L/RgNC10LTQtdC70Ysg0LLQuNC00LjQvNC+0YHRgtC4XHJcbiAgICAgICAgICAgIGlmIChyb3dFbC5wb3NpdGlvbigpLnRvcCArIHJvd0VsLmhlaWdodCgpID5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LmNsaWVudEhlaWdodCAtICQodGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wID0gcm93RWwucG9zaXRpb24oKS50b3AgKyByb3dFbC5oZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbExlZnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4LS07XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxSaWdodCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4IDwgdGhpcy5zdGF0ZS5jb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsVXAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleC0tO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3dFbCA9ICQodGhpcy5nZXRGb2N1c2VkUm93RWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIC8vINGD0YjQu9C+INC30LAg0L/RgNC10LTQtdC70Ysg0LLQuNC00LjQvNC+0YHRgtC4XHJcbiAgICAgICAgICAgIGlmIChyb3dFbC5wb3NpdGlvbigpLnRvcCA8IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCArICQodGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wID0gcm93RWwucG9zaXRpb24oKS50b3AgLSAkKHRoaXMuc3RhdGUuaGVhZGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUJvZHlLZXlEb3duKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IEtleWNvZGUuRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbERvd24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5VcCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbFVwKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IEtleWNvZGUuTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbExlZnQoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5SaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbFJpZ2h0KCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sdW1uUmVzaXplU3RhcnQgPSAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50LCBjb2w6IEludGVybmFsQ29sdW1uKTogdm9pZCA9PiB7XHJcbiAgICAgICAgZXZlbnQuYmluZFgoY29sLCBcIndpZHRoXCIsICgpID0+IHtcclxuICAgICAgICAgICAgJChjb2wuaGVhZGVyV2lkdGhOYXRpdmVFbGVtZW50KS5hdHRyKFwid2lkdGhcIiwgY29sLndpZHRoKTtcclxuICAgICAgICAgICAgJChjb2wuYm9keVdpZHRoTmF0aXZlRWxlbWVudCkuYXR0cihcIndpZHRoXCIsIGNvbC53aWR0aCk7XHJcbiAgICAgICAgICAgICQoY29sLmZvb3RlcldpZHRoTmF0aXZlRWxlbWVudCkuYXR0cihcIndpZHRoXCIsIGNvbC53aWR0aCk7XHJcbiAgICAgICAgICAgIGxldCB0YWJsZVdpZHRoID0gdGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnN0YXRlLmhlYWRlclRhYmxlRWxlbWVudCkuY3NzKFwid2lkdGhcIiwgdGFibGVXaWR0aCk7XHJcbiAgICAgICAgICAgICQodGhpcy5zdGF0ZS5ib2R5VGFibGVFbGVtZW50KS5jc3MoXCJ3aWR0aFwiLCB0YWJsZVdpZHRoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnN0YXRlLmZvb3RlclRhYmxlRWxlbWVudCkuY3NzKFwid2lkdGhcIiwgdGFibGVXaWR0aCk7XHJcbiAgICAgICAgICAgICQodGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQpLmNzcyhcIm1heC13aWR0aFwiLCB0YWJsZVdpZHRoICsgZ2V0U2Nyb2xsYmFyV2lkdGgoKSArIDEpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLmhhbmRsZU9uQ2xpY2sobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlckNvbHVtbkhlYWRlcnMoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGxldCBjb2xXaWR0aHM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBsZXQgY29sSGVhZGVyczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaChcclxuICAgICAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB7Y29sLmhlYWRlcldpZHRoTmF0aXZlRWxlbWVudCA9IGU7fSB9XHJcbiAgICAgICAgICAgICAgICAvPik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuXHJcbiAgICAgICAgICAgIGNvbEhlYWRlcnMucHVzaChcclxuICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RkU3R5bGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbC5jYXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgd2lkdGg6NSwgcmlnaHQ6MCwgYm90dG9tOjAsIGN1cnNvcjpcImNvbC1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXsgKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCkgPT4geyB0aGlzLmNvbHVtblJlc2l6ZVN0YXJ0KGV2ZW50LCBjb2wpOyBjb25zb2xlLmxvZyhcIk1vdmVTdGFydFwiKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgd2lkdGg6IGluZGV4ID09PSAwID8gMCA6IDUsIGxlZnQ6MCwgYm90dG9tOjAsIGN1cnNvcjpcImNvbC1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXsgKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDRgNC10YHQsNC50LfQuNC8INC/0YDQtdC00YvQtNGD0YnRg9GOINC60L7Qu9C+0L3QutGDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uUmVzaXplU3RhcnQoZXZlbnQsIHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGQ+KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuaGVhZGVyV3JhcHBlckVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0YWJsZUxheW91dDogXCJmaXhlZFwiLGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsIHdpZHRoOnRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmhlYWRlclRhYmxlRWxlbWVudCA9IGV9XHJcblxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbFdpZHRoc31cclxuICAgICAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xIZWFkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29sdW1uRm9vdGVycygpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGxldCBjb2xXaWR0aHM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBsZXQgY29sRm9vdGVyczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgaXNGb290ZXJFbXB0eSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29sV2lkdGhzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Y29sXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17IGNvbC53aWR0aC50b1N0cmluZygpICsgXCJweFwiIH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4ge2NvbC5mb290ZXJXaWR0aE5hdGl2ZUVsZW1lbnQgPSBlO30gfVxyXG4gICAgICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgICAgICBpZiAoY29sLmZvb3RlcilcclxuICAgICAgICAgICAgICAgIGlzRm9vdGVyRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHRkU3R5bGU6IGFueSA9IHtvdmVyZmxvdzogXCJoaWRkZW5cIn07XHJcbiAgICAgICAgICAgIGNvbEZvb3RlcnMucHVzaCg8dGQga2V5PXtpbmRleH0gc3R5bGU9e3RkU3R5bGV9Pntjb2wuZm9vdGVyfTwvdGQ+KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFpc0Zvb3RlckVtcHR5KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWZvb3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGFibGVMYXlvdXQ6IFwiZml4ZWRcIixib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuZm9vdGVyVGFibGVFbGVtZW50ID0gZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sV2lkdGhzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xGb290ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRW1wdHlEYXRhU291cmNlTWVzc2FnZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGUgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWVtcHR5LWJvZHlcIj57bWVzc2FnZX08L2Rpdj4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyaWRCb2R5KCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogUmVhY3QuUmVhY3ROb2RlW10gPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaChcclxuICAgICAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB7Y29sLmJvZHlXaWR0aE5hdGl2ZUVsZW1lbnQgPSBlO30gfVxyXG4gICAgICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1ib2R5XCJcclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsgKGUpID0+IHsgIHRoaXMuaGFuZGxlQm9keUtleURvd24oZSk7IH0gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGFibGVMYXlvdXQ6IFwiZml4ZWRcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKX19XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5ib2R5VGFibGVFbGVtZW50ID0gZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2xXaWR0aHN9XHJcbiAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5oZWFkZXJGYWtlUm93ID0gZX0+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKCl9XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjpcIm5vbmVcIiB9fSByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5mb290ZXJGYWtlUm93ID0gZX0+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNhbGNUb3RhbENvbHVtbnNXaWR0aCgpOiBudW1iZXIge1xyXG5cclxuICAgICAgICBsZXQgcmV0ID0gMDtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbC5oaWRkZW4pXHJcbiAgICAgICAgICAgICAgICByZXQgKz0gY29sLndpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNoYWxsb3dDb21wYXJlKG5leHRQcm9wczogVHJlZUdyaWRQcm9wcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hhbGxvdy10cmVlLWdyaWRcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInNoYWxsb3ctd2luIC0+IGlzRXFpYWwgPSBcIiArIHRoaXMuaXNQcm9wc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcywgW1wiY2hpbGRyZW5cIl0pKTtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNQcm9wc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJkYXRhU291cmNlXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFZGl0YWJsZUJ1dHRvbnMoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVueUluc2VydCAhPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cImluc2VydFwiIGNsYXNzTmFtZT1cImlzLW91dGxpbmVkIGlzLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUluc2VydEJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRlbnlVcGRhdGUgIT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICBidXR0b25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJ1cGRhdGVcIiBjbGFzc05hbWU9XCJpcy1vdXRsaW5lZCBpcy1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVVcGRhdGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCY0LfQvNC10L3QuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZW55RGVsZXRlICE9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiZGVsZXRlXCIgY2xhc3NOYW1lPVwiaXMtb3V0bGluZWQgaXMtZGFuZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVEZWxldGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vdGhpcy5hZGRDbGFzc05hbWUoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItdHJlZS1ncmlkXCIpO1xyXG5cclxuICAgICAgICBsZXQgbWF4Qm9keVdyYXBwZXJXaWR0aCA9IHRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCkgKyBnZXRTY3JvbGxiYXJXaWR0aCgpICsgMTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgbWF4Qm9keVdyYXBwZXJXaWR0aCA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwidHJlZS1ncmlkXCIgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7ICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaCA1MDAxXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmZpbHRlckRhdGEoKTsgdGhpcy5mb3JjZVVwZGF0ZSgpOyBjb25zb2xlLmxvZyhcImZvcmNlVXBkYXRlXCIpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmV4cGFuZEFsbCgpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgdGhpcy5jb2xsYXBzZUFsbCgpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2UgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAg0LfQsNCz0L7Qu9C+0LLQvtC6INC4INGCLtC0LlxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtYm9keS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcInJlbGF0aXZlXCIsIG92ZXJmbG93OlwiYXV0b1wiLCBmbGV4OlwiMVwiLCBtYXhXaWR0aDogbWF4Qm9keVdyYXBwZXJXaWR0aCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXsgdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZTphbnkpID0+IHt0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudCA9IGU7fX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyR3JpZEJvZHkoKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2x1bW5IZWFkZXJzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sdW1uRm9vdGVycygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWZvb3Rlci13cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cInJvd1wiIHNpemVUbz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRWRpdGFibGVCdXR0b25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiaXMtc21hbGxuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLRi9Cx0YDQsNGC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpcy1zbWFsbG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkID5cclxuICAgICAgICAgICAgPC9MYXlvdXQgPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWQudHN4XG4gKiovIiwi77u/aW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQ29sdW1uc1Byb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICAvL2NhcHRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbnMgZXh0ZW5kcyBDb21wb25lbnQ8VHJlZUdyaWRDb2x1bW5zUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZENvbHVtbnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnMudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJHcmlkQ29sdW1uLCBHcmlkQ29sdW1uSW5mb30gZnJvbSBcIi4vcmVnaXN0ZXJHcmlkQ29sdW1uXCI7XHJcbi8vaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRDb2x1bW5Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgY2FwdGlvbj86IHN0cmluZztcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgcHJvcGVydHlOYW1lPzogc3RyaW5nO1xyXG4gICAgc2hvd0hpZXJhcmNoeVRyZWU/OiBib29sZWFuO1xyXG4gICAgc2hvd0hpZXJhcmNoeVBhZGRpbmc/OiBib29sZWFuO1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbiBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZENvbHVtblByb3BzLCBhbnk+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlZUdyaWRDb2x1bW5Qcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAvL3RoaXMuc3RhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRDb2x1bW5QYXJhbXMgZXh0ZW5kcyBUcmVlR3JpZENvbHVtblByb3BzIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHcmlkQ29sdW1uKHBhcmFtczogR3JpZENvbHVtblBhcmFtcyk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKHt0YXJnZXQsIHByb3BlcnR5TmFtZSwgY29uc3RyOnRhcmdldC5jb25zdHJ1Y3Rvcn0pO1xyXG5cclxuICAgICAgICBsZXQgcmVnQ29sdW1uOiBHcmlkQ29sdW1uSW5mbyA9IHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvclxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIF8uYXNzaWduKHJlZ0NvbHVtbiwgcGFyYW1zKTtcclxuICAgICAgICByZWdpc3RlckdyaWRDb2x1bW4ocmVnQ29sdW1uKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyR3JpZENvbHVtbih7XHJcbiAgICAgICAgLy8gICAgIGNhcHRpb246IHBhcmFtcy5jYXB0aW9uLFxyXG4gICAgICAgIC8vICAgICB3aWR0aDogcGFyYW1zLndpZHRoLFxyXG4gICAgICAgIC8vICAgICBzaG93SGllcmFyY2h5VHJlZTogcGFyYW1zLnNob3dIaWVyYXJjaHlUcmVlLFxyXG4gICAgICAgIC8vICAgICBzaG93SGllcmFyY2h5UGFkZGluZzogcGFyYW1zLnNob3dIaWVyYXJjaHlQYWRkaW5nLFxyXG4gICAgICAgIC8vICAgICBvcmRlcjogcGFyYW1zLm9yZGVyIHx8IDAsXHJcbiAgICAgICAgLy8gICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgIC8vICAgICBvYmplY3RUeXBlOiB0YXJnZXQuY29uc3RydWN0b3IsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3hcbiAqKi8iLCJpbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5Qcm9wc30gZnJvbSBcIi4vVHJlZUdyaWRDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZENvbHVtbkluZm8gZXh0ZW5kcyBUcmVlR3JpZENvbHVtblByb3BzIHtcclxuICAgIC8vcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICBvYmplY3RUeXBlOiB0eXBlb2YgRGVzaWduZWRPYmplY3Q7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJHcmlkQ29sdW1uKGNvbHVtbkluZm86IEdyaWRDb2x1bW5JbmZvKSB7XHJcblxyXG4gICAgbGV0IG9ialR5cGU6IGFueSA9IGNvbHVtbkluZm8ub2JqZWN0VHlwZTtcclxuXHJcbiAgICBpZiAoIW9ialR5cGUuJCRncmlkQ29sdW1uSW5mb3MpXHJcbiAgICAgICAgb2JqVHlwZS4kJGdyaWRDb2x1bW5JbmZvcyA9IFtdO1xyXG5cclxuICAgIG9ialR5cGUuJCRncmlkQ29sdW1uSW5mb3MucHVzaChjb2x1bW5JbmZvKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwicmVnaXN0ZXJQcm9wZXJ0eUVkaXRvciBcIiArIGVkaXRvci5wcm9wZXJ0eU5hbWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3IpO1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9yZWdpc3RlckdyaWRDb2x1bW4udHNcbiAqKi8iLCJcclxuZXhwb3J0IHZhciBLZXljb2RlID0ge1xyXG4gICAgRXNjOiBcIkVzY2FwZVwiLFxyXG4gICAgU3BhY2U6IFwiIFwiLFxyXG5cclxuICAgIExlZnQ6IFwiQXJyb3dMZWZ0XCIsXHJcbiAgICBVcDogXCJBcnJvd1VwXCIsXHJcbiAgICBEb3duOiBcIkFycm93RG93blwiLFxyXG4gICAgUmlnaHQ6IFwiQXJyb3dSaWdodFwiLFxyXG5cclxuICAgIERlbDogXCJEZWxldGVcIixcclxuICAgIEluczogXCJJbnNlcnRcIixcclxuXHJcbiAgICBXaW46IFwiTWV0YVwiLFxyXG4gICAgTWVudTogXCJDb250ZXh0TWVudVwiLFxyXG5cclxuICAgIFNjcm9sbDogXCJTY3JvbGxMb2NrXCIsXHJcbiAgICBOdW06IFwiTnVtTG9ja1wiLFxyXG5cclxuICAgIEJhY2tzcGFjZTogXCJCYWNrc3BhY2VcIixcclxuICAgIFRhYjogXCJUYWJcIixcclxuICAgIEVudGVyOiBcIkVudGVyXCIsXHJcbiAgICBTaGlmdDogXCJTaGlmdFwiLFxyXG4gICAgQ29udHJvbDogXCJDb250cm9sXCIsXHJcbiAgICBBbHQ6IFwiQWx0XCIsXHJcbiAgICBCcmVhazogXCJQYXVzZVwiLFxyXG4gICAgQ2Fwc0xvY2s6IFwiQ2Fwc0xvY2tcIixcclxuXHJcbiAgICBQYWdlVXA6IFwiUGFnZVVwXCIsXHJcbiAgICBQYWdlRG93bjogXCJQYWdlRG93blwiLFxyXG4gICAgRW5kOiBcIkVuZFwiLFxyXG4gICAgSG9tZTogXCJIb21lXCIsXHJcblxyXG4gICAgRjE6IFwiRjFcIixcclxuICAgIEYyOiBcIkYyXCIsXHJcbiAgICBGMzogXCJGM1wiLFxyXG4gICAgRjQ6IFwiRjRcIixcclxuICAgIEY1OiBcIkY1XCIsXHJcbiAgICBGNjogXCJGNlwiLFxyXG4gICAgRjc6IFwiRjdcIixcclxuICAgIEY4OiBcIkY4XCIsXHJcbiAgICBGOTogXCJGOVwiLFxyXG4gICAgRjEwOiBcIkYxMFwiLFxyXG4gICAgRjExOiBcIkYxMVwiLFxyXG4gICAgRjEyOiBcIkYxMlwiXHJcblxyXG59O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvS2V5Y29kZS50c1xuICoqLyIsImxldCBjYWNoZVdpZHRoID0gMDtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldjogVUlFdmVudCkgPT4ge1xyXG4gICAgY2FjaGVXaWR0aCA9IDA7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc2l6ZVwiKTtcclxufSlcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XHJcbiAgICBpZiAoY2FjaGVXaWR0aCA+IDApXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlV2lkdGg7XHJcblxyXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XHJcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcclxuXHJcbiAgICB2YXIgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xyXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xyXG5cclxuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xyXG5cclxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcclxuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xyXG5cclxuICAgIGNhY2hlV2lkdGggPSB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xyXG4gICAgcmV0dXJuIGNhY2hlV2lkdGg7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9nZXRTY3JvbGxCYXJXaWR0aC50c1xuICoqLyIsIu+7v2ltcG9ydCAqIGFzIGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5cclxubGV0IHNvY2tldCA9IGlvLmNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU1FMKHNxbDogc3RyaW5nKTogSlF1ZXJ5UHJvbWlzZTxEYXRhVGFibGV8c3RyaW5nPiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY2FsbCBTUUwuc3FsLmV4ZWN1dGVcIik7XHJcbiAgICAvL3JldHVybiBzaWduYWxSLmV4ZWN1dGVTUUwoc3FsKTtcclxuXHJcblxyXG4gICAgbGV0IHByb21pc2U6IEpRdWVyeURlZmVycmVkPERhdGFUYWJsZT47XHJcbiAgICBwcm9taXNlID0gJC5EZWZlcnJlZDxEYXRhVGFibGU+KCk7XHJcblxyXG4gICAgLy8gIHNvY2tldC5vbmNlKCdjb25uZWN0JywoKSA9PiB7XHJcbiAgICBsZXQgcXVlcnlJZCA9IFwicXVlcnktXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcclxuICAgIHNvY2tldC5lbWl0KFwiZXhlY3V0ZVNRTFwiLCB7cXVlcnlJZCwgc3FsfSk7XHJcbiAgICBzb2NrZXQub25jZShxdWVyeUlkLCAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChyZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZGF0YVRhYmxlID0gbmV3IERhdGFUYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUNvbHVtbiA9IG5ldyBEYXRhQ29sdW1uKGRhdGFUYWJsZSwgcmVzcG9uc2UuY29sdW1uc1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5jb2x1bW5zLnB1c2goZGF0YUNvbHVtbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnJvd3MuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YVJvdyA9IG5ldyBEYXRhUm93KGRhdGFUYWJsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhVGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb2x1bW5zW2ldLnBhcnNlID09PSBcIkRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1tkYXRhVGFibGUuY29sdW1uc1tpXS5uYW1lXSA9IG5ldyBEYXRlKHJvd1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W2RhdGFUYWJsZS5jb2x1bW5zW2ldLm5hbWVdID0gcm93W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZGF0YVJvd1tpXSA9IHJvd1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhVGFibGUucm93cy5wdXNoKGRhdGFSb3cpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZGF0YVRhYmxlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAgIH0pO1xyXG5cclxuXHJcbiAgICAvL3NpZ25hbFIuZXhlY3V0ZVNRTChzcWwpLlxyXG4gICAgLy8gICAgZG9uZSgocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgIGxldCByZXMgPSBldmFsKHJlc3VsdCk7XHJcblxyXG4gICAgLy8gICAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QocmVzLmVycm9yKTtcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgIGxldCBkcyA9IG5ldyBEYXRhc2V0KCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICByZXMudGFibGVzLmZvckVhY2goKHRhYmxlKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBsZXQgZGF0YVRhYmxlID0gbmV3IERhdGFUYWJsZShkcyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBkYXRhVGFibGUubmFtZSA9IHRhYmxlLm5hbWU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBkcy50YWJsZXMucHVzaChkYXRhVGFibGUpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhQ29sdW1uID0gbmV3IERhdGFDb2x1bW4oZGF0YVRhYmxlLCB0YWJsZS5jb2x1bW5zW2ldLm5hbWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5jb2x1bW5zLnB1c2goZGF0YUNvbHVtbik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgdGFibGUucm93cy5mb3JFYWNoKChyb3cpID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFSb3cgPSBuZXcgRGF0YVJvdygpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1t0YWJsZS5jb2x1bW5zW2ldLm5hbWVdID0gcm93W2ldO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W2ldID0gcm93W2ldO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLnJvd3MucHVzaChkYXRhUm93KTtcclxuICAgIC8vICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkcylcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9KS5cclxuICAgIC8vICAgIGZhaWwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgIHByb21pc2UucmVqZWN0KFwi0L7RiNC40LHQutCwIGNvbm5lY3Rpb24gc2lnbmFsUlwiKTtcclxuICAgIC8vICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9taXNlO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNxbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG59XHJcblxyXG4vL2V4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHsgU3RyaW5nLCBOdW1iZXIsIERhdGEgfVxyXG5cclxuLy9leHBvcnQgdHlwZSBEYXRhVHlwZSA9IHN0cmluZyB8IG51bWJlcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGUge1xyXG4gICAgY29sdW1uczogQXJyYXk8RGF0YUNvbHVtbj47XHJcbiAgICByb3dzOiBBcnJheTxEYXRhUm93PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXTtcclxuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFDb2x1bW4ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgLy9kYXRhVHlwZTogQ29sdW1uRGF0YVR5cGU7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGFibGU6IERhdGFUYWJsZSwgbmFtZT86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgXCJcIjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVJvdyB7XHJcbiAgICBbaW5kZXg6IHN0cmluZ106IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoY29sdW1uSW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgMCB8fCBjb2x1bW5JbmRleCA+PSB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkRhdGFSb3cuZ2V0VmFsdWUoXCIgKyBjb2x1bW5JbmRleCArIFwiKTogY29sdW1uSW5kZXggb3V0IG9mIHJhbmdlXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBbdGhpcy50YWJsZS5jb2x1bW5zW2NvbHVtbkluZGV4XS5uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvL1tpbmRleDogbnVtYmVyXTogRGF0YVR5cGU7XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NRTC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gaW87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlvXCJcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtMaXN0RWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9MaXN0UHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtHcmlkQ29sdW1ufSBmcm9tIFwiLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3FsVGFibGUgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCY0LzRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQmNC80Y8g0YLQsNCx0LvQuNGG0YtcIlxyXG4gICAgfSlcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwic3FsINC40LzRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCJzcWwg0LjQvNGPINGC0LDQsdC70LjRhtGLXCJcclxuICAgIH0pXHJcblxyXG4gICAgc3FsbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBMaXN0RWRpdG9yKHtcclxuICAgICAgICBpbnB1dFRhYjogXCLQmtC+0LvQvtC90LrQuFwiLFxyXG4gICAgICAgIGdldE5ld0xpc3RJdGVtOiAodGFibGU6IFNxbFRhYmxlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3FsVGFibGVDb2x1bW4odGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb2x1bW5zOiBTcWxUYWJsZUNvbHVtbltdID0gW107XHJcblxyXG4gICAgYWRkQ29sdW1uKGluaXRDYWxsYmFjaz86IChuZXdDb2x1bW46IFNxbFRhYmxlQ29sdW1uKSA9PiB2b2lkKTogU3FsVGFibGVDb2x1bW4ge1xyXG4gICAgICAgIGxldCBjb2wgPSBuZXcgU3FsVGFibGVDb2x1bW4odGhpcyk7XHJcbiAgICAgICAgaWYgKGluaXRDYWxsYmFjaylcclxuICAgICAgICAgICAgaW5pdENhbGxiYWNrKGNvbCk7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goY29sKTtcclxuICAgICAgICByZXR1cm4gY29sO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwic3FsLdGC0LDQsdC70LjRhtCwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3FsVGFibGVDb2x1bW4gZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICQkdGFibGU6IFNxbFRhYmxlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGFibGUoKTogU3FsVGFibGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkdGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCY0LzRjyDQutC+0LvQvtC90LrQuFwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQmNC80Y8g0LrQvtC70L7QvdC60LhcIlxyXG4gICAgfSlcclxuICAgIEBHcmlkQ29sdW1uKHtjYXB0aW9uOiBcItCY0LzRjyDQutC+0LvQvtC90LrQuFwifSlcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0YLQuNC/XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcInNxbCDRgtC40L8g0LrQvtC70L7QvdC60LhcIlxyXG4gICAgfSlcclxuICAgIEBHcmlkQ29sdW1uKHtjYXB0aW9uOiBcItCi0LjQv1wifSlcclxuICAgIGRhdGFUeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgQEdyaWRDb2x1bW4oe2NhcHRpb246IFwidGVzdFwiLCBvcmRlcjogLTF9KVxyXG4gICAgZ2V0IHRlc3RDb2x1bW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCIrXCIgKyB0aGlzLmRhdGFUeXBlICsgXCItPlwiICsgdGhpcy50YWJsZS5uYW1lICsgKHRoaXMudGFibGUgYXMgYW55KS4kJHVuaXF1ZU9iamVjdElkO1xyXG4gICAgfTtcclxuXHJcbiAgICAkJHRlc3RPYmplY3Q6IGFueTtcclxuXHJcbiAgICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwic3FsLdC60L7Qu9C+0L3QutCwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiIG9mIChcIiArIHRoaXMudGFibGUubmFtZSArIFwiKVwiO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLXNxbC9TcWxUYWJsZS50c1xuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Jhc2VQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge3JlZ2lzdGVyUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtJbnB1dFR5cGUsIElucHV0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuaW1wb3J0IHtUcmVlR3JpZH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnNcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQXJyYXlEYXRhU291cmNlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQXJyYXlEYXRhU291cmNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RQcm9wZXJ0eUVkaXRvciBleHRlbmRzIEJhc2VQcm9wZXJ0eUVkaXRvciB7XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlID09PSBcIiArIHRoaXMucHJvcHMucHJvcGVydHlOYW1lICsgXCIgXCIgKyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGF1dG9Gb3JtQ29udHJvbFByb3BzOiBBdXRvRm9ybUNvbnRyb2xQcm9wcyA9IHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiB0aGlzLnByb3BzLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHRoaXMucHJvcHMuaW5wdXRUYWIsXHJcbiAgICAgICAgICAgIGlucHV0R3JvdXA6IHRoaXMucHJvcHMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5pbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyhhdXRvRm9ybUNvbnRyb2xQcm9wcyk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxJbnB1dFxyXG4gICAgICAgIC8vICAgICAgICAgdHlwZT17SW5wdXRUeXBlLlRleHR9XHJcbiAgICAgICAgLy8gICAgICAgICBiaW5kT2JqZWN0PXt0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0fVxyXG4gICAgICAgIC8vICAgICAgICAgYmluZFByb3BOYW1lPXt0aGlzLnByb3BzLnByb3BlcnR5TmFtZX1cclxuICAgICAgICAvLyAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgIC8vICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAvLyAgICAgLz5cclxuICAgICAgICAvLyApO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBuZXcgVHJlZUdyaWRBcnJheURhdGFTb3VyY2UodGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0pO1xyXG4gICAgICAgIGRhdGFTb3VyY2UucGFyYW1zLmdldE5ld1JvdyA9ICgpID0+IHRoaXMucHJvcHMuY3VzdG9tUGFyYW1zLmdldE5ld0xpc3RJdGVtKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VHJlZUdyaWRcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9eyBkYXRhU291cmNlIH1cclxuICAgICAgICAgICAgICAgIHRyZWVNb2RlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvVHJlZUdyaWQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbi8vIDxUcmVlR3JpZENvbHVtbnM+XHJcbi8vIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JjQvNGPINC60L7Qu9C+0L3QutC4XCIgcHJvcGVydHlOYW1lPVwibmFtZVwiIHdpZHRoPXsxMDB9PlxyXG4vLyAgICAgPC9UcmVlR3JpZENvbHVtbj5cclxuLy8gICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0KLQuNC/INC00LDQvdC90YvRhVwiIHByb3BlcnR5TmFtZT1cImRhdGFUeXBlXCIgd2lkdGg9ezE1MH0+XHJcbi8vICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4vLyAgICAgPC9UcmVlR3JpZENvbHVtbnM+XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RFZGl0b3JQYXJhbXMgZXh0ZW5kcyBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICBnZXROZXdMaXN0SXRlbT86IChsaXN0T3duZXI6IERlc2lnbmVkT2JqZWN0KSA9PiBEZXNpZ25lZE9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3RFZGl0b3IocGFyYW1zOiBMaXN0RWRpdG9yUGFyYW1zKTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZWdpc3RlclByb3BlcnR5RWRpdG9yKHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiBwYXJhbXMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgICAgICBpbnB1dFRhYjogcGFyYW1zLmlucHV0VGFiLFxyXG4gICAgICAgICAgICBpbnB1dEdyb3VwOiBwYXJhbXMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogcGFyYW1zLmlucHV0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICBvYmplY3RUeXBlOiB0YXJnZXQuY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgIGVkaXRvclR5cGU6IExpc3RQcm9wZXJ0eUVkaXRvcixcclxuICAgICAgICAgICAgcHJvcGVydHlUeXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGN1c3RvbVBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uUHJvcHN9IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7VHJlZUdyaWREYXRhU291cmNlfSBmcm9tIFwiLi9UcmVlR3JpZERhdGFTb3VyY2VcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge2dldEdyaWRDb2x1bW5JbmZvc30gZnJvbSBcIi4vZ2V0R3JpZENvbHVtbkluZm9zXCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4uLy4uL0Vycm9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQXJyYXlEYXRhU291cmNlUGFyYW1zPFQ+IHtcclxuXHJcbiAgICBnZXROZXdSb3c/OiAoKSA9PiBUO1xyXG4gICAgZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZT86ICgpID0+IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGdldERlbGV0ZVJvd01lc3NhZ2U/OiAoKSA9PiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRBcnJheURhdGFTb3VyY2U8VCBleHRlbmRzIERlc2lnbmVkT2JqZWN0PiBpbXBsZW1lbnRzIFRyZWVHcmlkRGF0YVNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXJyYXlPYmo6IFRbXSwgcHVibGljIHBhcmFtczogVHJlZUdyaWRBcnJheURhdGFTb3VyY2VQYXJhbXM8VD4gPSB7fSkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IGlzVHJlZUdyaWREYXRhU291cmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyZWVHcmlkQ29sdW1ucygpOiBUcmVlR3JpZENvbHVtblByb3BzW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmFycmF5T2JqLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGdldEdyaWRDb2x1bW5JbmZvcyh0aGlzLmFycmF5T2JqWzBdKS5tYXA8VHJlZUdyaWRDb2x1bW5Qcm9wcz4oKGNvbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXQ6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgXy5hc3NpZ24ocmV0LCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYXB0aW9uOiBjb2wuY2FwdGlvbixcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogY29sLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG9yZGVyOiBjb2wub3JkZXIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcHJvcGVydHlOYW1lOiBjb2wucHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNob3dIaWVyYXJjaHlUcmVlOiBjb2wuc2hvd0hpZXJhcmNoeVRyZWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2hvd0hpZXJhcmNoeVBhZGRpbmc6IGNvbC5zaG93SGllcmFyY2h5UGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhUm93cygpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld1JvdygpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuZ2V0TmV3Um93KVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMuZ2V0TmV3Um93KCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93RXJyb3IoXCJUcmVlR3JpZEFycmF5RGF0YVNvdXJjZTogbWV0aG9kIGdldE5ld1JvdygpIG5vdCBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyAgXCJcIjsgIC8vIGZha2UgdHlwZXNjcmlwdCAyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFJvdyhyb3c6IFQpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuYXJyYXlPYmoucHVzaChyb3cpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5T2JqLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUm93KHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGVsZXRlZEl0ZW1zID0gXy5wdWxsQXQodGhpcy5hcnJheU9iaiwgcm93SW5kZXgpO1xyXG4gICAgICAgIGlmIChkZWxldGVkSXRlbXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwiVHJlZUdyaWRBcnJheURhdGFTb3VyY2UuZGVsZXRlUm93KCk6IGludmFsaWQgcm93SW5kZXggKFwiICsgcm93SW5kZXggKyBcIilcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5nZXRFbXB0eURhdGFTb3VyY2VNZXNzYWdlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMuZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIFwi0J/Rg9GB0YLQvtC5INGB0L/QuNGB0L7Qui5cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWxldGVSb3dNZXNzYWdlKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmdldERlbGV0ZVJvd01lc3NhZ2UpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtcy5nZXREZWxldGVSb3dNZXNzYWdlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gXCLQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YwhXCI7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQXJyYXlEYXRhU291cmNlLnRzeFxuICoqLyIsIlxyXG5pbXBvcnQge0dyaWRDb2x1bW5JbmZvfSBmcm9tIFwiLi9yZWdpc3RlckdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyaWRDb2x1bW5JbmZvcyhvYmo6IERlc2lnbmVkT2JqZWN0KTogR3JpZENvbHVtbkluZm9bXSB7XHJcblxyXG4gICAgbGV0IGluZm9zID0gKG9iai5jb25zdHJ1Y3RvciBhcyBhbnkpLiQkZ3JpZENvbHVtbkluZm9zIGFzIEdyaWRDb2x1bW5JbmZvW107XHJcblxyXG4gICAgaWYgKCFpbmZvcylcclxuICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgaW5mb3MgPSBpbmZvcy5maWx0ZXIoKGVkdCkgPT4gb2JqIGluc3RhbmNlb2YgZWR0Lm9iamVjdFR5cGUpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJnZXRQcm9wZXJ0eUVkaXRvcnNcIikgO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3JzKTtcclxuICAgIHJldHVybiBpbmZvcztcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvZ2V0R3JpZENvbHVtbkluZm9zLnRzXG4gKiovIiwiZXhwb3J0IHR5cGUgU2VsZWN0RmllbGQ9IHN0cmluZyB8IFNlbGVjdFRlcm07XHJcblxyXG5leHBvcnQgY2xhc3MgU3FsIHtcclxuICAgIHByaXZhdGUgdGVybXM6IGFueVtdID0gW107XHJcblxyXG4gICAgc3RhdGljIHNlbGVjdChmaWVsZHM6IFNlbGVjdEZpZWxkW10pOiBTZWxlY3RUZXJtIHtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gbmV3IFNlbGVjdFRlcm0oZmllbGRzKTtcclxuICAgICAgICByZXR1cm4gc2VsZWN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUZXJtIHtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBGcm9tUGFyYW09IHN0cmluZyB8IFNlbGVjdFRlcm07XHJcblxyXG5jbGFzcyBTZWxlY3RUZXJtIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfZmllbGRzOiBTZWxlY3RGaWVsZFtdKSB7XHJcbiAgICB9XHJcblxyXG4gICAgX2Zyb206IEZyb21UZXJtO1xyXG5cclxuICAgIGZyb20oZnJvbVRhYmxlOiBGcm9tUGFyYW0pOiBGcm9tVGVybSB7XHJcbiAgICAgICAgdGhpcy5fZnJvbSA9IG5ldyBGcm9tVGVybShmcm9tVGFibGUsIHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mcm9tO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3FsKCkge1xyXG4gICAgICAgIHJldHVybiBcInNlbGVjdCBcIiArIHRoaXMuX2ZpZWxkcy5qb2luKFwiLlwiKSArIFwiIGZyb20gXCIgKyB0aGlzLl9mcm9tLmVtaXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRnJvbVRlcm0ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9mcm9tUGFyYW06IEZyb21QYXJhbSwgcHVibGljIF9zZWxlY3Q6IFNlbGVjdFRlcm0pIHtcclxuICAgIH1cclxuXHJcbiAgICB0b1NxbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0LnRvU3FsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZnJvbVBhcmFtLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0b1NxbCh0ZXJtczogYW55W10pIHtcclxuLy8gICAgIHJldHVybiBcInNlbGVjdCAqIGZyb20gdXNlclwiO1xyXG4vLyB9XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLXNxbC9TcWwudHNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9