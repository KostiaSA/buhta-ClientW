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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var Layout_1 = __webpack_require__(6);
	var Fixed_1 = __webpack_require__(7);
	var Flex_1 = __webpack_require__(8);
	var testBuhtaObject1_1 = __webpack_require__(9);
	var ObjectDesigner_1 = __webpack_require__(15);
	var Desktop_1 = __webpack_require__(27);
	var Movable_1 = __webpack_require__(31);
	var App_1 = __webpack_require__(28);
	var Input_1 = __webpack_require__(14);
	var testBuhtaObject2_1 = __webpack_require__(32);
	var AutoForm_1 = __webpack_require__(17);
	var TreeGrid_1 = __webpack_require__(33);
	var TreeGridColumn_1 = __webpack_require__(35);
	var SQL_1 = __webpack_require__(39);
	var Button_1 = __webpack_require__(20);
	var SqlTable_1 = __webpack_require__(41);
	var Snapshot_1 = __webpack_require__(24);
	var DesignedObject_1 = __webpack_require__(10);
	var TreeGridArrayDataSource_1 = __webpack_require__(43);
	var StringPropertyEditor_1 = __webpack_require__(11);
	var Error_1 = __webpack_require__(45);
	var AppDesignerState = (function (_super) {
	    __extends(AppDesignerState, _super);
	    function AppDesignerState() {
	        _super.apply(this, arguments);
	    }
	    return AppDesignerState;
	}(Component_1.ComponentState));
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
	        var winwin = React.createElement("div", null, win, win2);
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
	        var win2 = React.createElement(AutoForm_1.AutoForm, {sizeTo: "content"}, React.createElement(Input_1.Input, {type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), React.createElement(Input_1.Input, {inputTab: "параметры1", inputCaption: "eee1", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), React.createElement(Input_1.Input, {inputTab: "параметры1", inputCaption: "eee2", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), React.createElement(Input_1.Input, {inputTab: "параметры1", inputCaption: "eee3", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), React.createElement(Input_1.Input, {inputTab: "параметры2", inputCaption: "eee4", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}));
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
	        var win2 = React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent", style: { border: "2px dotted red", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}, React.createElement(Fixed_1.Fixed, {style: { border: "2px dotted blue" }}, React.createElement(Button_1.Button, null, "Один")), React.createElement(Flex_1.Flex, {style: { border: "2px dotted green" }}, React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent", style: { border: "1px solid red" }}, React.createElement(Fixed_1.Fixed, {style: { border: "1px solid blue" }}, React.createElement(Button_1.Button, null, "------Один")), React.createElement(Flex_1.Flex, {style: { border: "1px solid green" }}, React.createElement("div", {style: {}}, React.createElement(Button_1.Button, null, "-------Два"), React.createElement("br", null), React.createElement(Button_1.Button, null, "--------Два1")), React.createElement("table", null, React.createElement("tr", null, React.createElement("td", null, "1111"), React.createElement("td", null, "2222")), React.createElement("tr", null, React.createElement("td", null, "1111"), React.createElement("td", null, "2222")), React.createElement("tr", null, React.createElement("td", null, "1111"), React.createElement("td", null, "2222")), React.createElement("tr", null, React.createElement("td", null, "1111"), React.createElement("td", null, "2222")))), React.createElement(Fixed_1.Fixed, {style: { border: "1px solid maroon" }}, React.createElement(Button_1.Button, null, "--------Три")))), React.createElement(Fixed_1.Fixed, {style: { border: "2px dotted maroon" }}, React.createElement(Button_1.Button, null, "Три")));
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
	        table.columns = null;
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
	            dataSource.params.getEmptyDataSourceMessage = function () { return React.createElement("span", null, "\"Все пусто, ", React.createElement("i", null, "блин!"), " Жми на газ!\""); };
	            var win2 = React.createElement(TreeGrid_1.TreeGrid, {dataSource: dataSource, editable: true});
	            var openParam = {
	                title: "test grid 2",
	                top: 20,
	                left: 20,
	                height: 500
	            };
	            App_1.appInstance.desktop.openWindow(win2, openParam);
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
	        var win2 = React.createElement("div", null, "Привет уроды", React.createElement(Button_1.Button, null, "Да и нет "), React.createElement(Button_1.Button, null, "Да и нет "), React.createElement("br", null), React.createElement(Button_1.Button, null, "Да и нет "), React.createElement("br", null), React.createElement(Button_1.Button, null, "Да и нет "), React.createElement("br", null), React.createElement(Button_1.Button, null, "Да и нет "), React.createElement("br", null), React.createElement(Button_1.Button, {onClick: function (sender, e) {
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
	        var xxx = {};
	        var proxyHandler = {
	            get: function (target, p, receiver) {
	                //console.log("handlerGet???");
	                //console.log(p);
	                return target[p];
	            },
	            set: function (target, p, value, receiver) {
	                console.log("handlerSet");
	                console.log(p);
	                console.log(value);
	                target[p] = value;
	                return true;
	            }
	        };
	        console.log("-----Proxy-----");
	        var proxy = new Proxy(xxx, proxyHandler);
	        proxy.x111 = 333;
	        proxy.o = {};
	        proxy.o.eee = "eee1";
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
	        return (React.createElement(App_1.App, React.__spread({}, this.getRenderProps()), React.createElement(Layout_1.Layout, {sizeTo: "parent", type: "column"}, React.createElement(Fixed_1.Fixed, {className: "header1"}, "Fixed Header"), React.createElement(Flex_1.Flex, null, React.createElement(Layout_1.Layout, {type: "row", sizeTo: "parent"}, React.createElement(Fixed_1.Fixed, {className: "sidebar", style: { width: this.sideWidth }}, "Fixed Sidebar 123", React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testOpenWindow(); }}, " test open window"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testOpenObjectDesigner(); }}, "open designer"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testImmutable(); }}, "testImmutable"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testAutoForm(); }}, "test autoform"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testGrid(); }}, "test GRID"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testFlex(); }}, "test FLEX"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testTableDesigner(); }}, "test TABLE DESIGNER"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testSnapshot(); }}, "test SNAPSHOT"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testGrid2(); }}, "test GRID-2"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testWindowAutoSize(); }}, "test WIN AUTOSIZE"), React.createElement("br", null), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testObservable(); }}, "test OBSERVABLE")), React.createElement(Flex_1.Flex, {className: "XXXcontent"}, React.createElement(Desktop_1.Desktop, null, React.createElement(Movable_1.Movable, {onMoveStart: this.moveStart.bind(this)}, "MOV"))))))));
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
	        return null;
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps()), this.props.children));
	    };
	    return Layout;
	}(Component_1.Component));
	exports.Layout = Layout;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps()), this.props.children));
	    };
	    return Fixed;
	}(Component_1.Component));
	exports.Fixed = Fixed;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps()), this.props.children));
	    };
	    return Flex;
	}(Component_1.Component));
	exports.Flex = Flex;


/***/ },
/* 9 */
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
	var DesignedObject_1 = __webpack_require__(10);
	var StringPropertyEditor_1 = __webpack_require__(11);
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var BasePropertyEditor_1 = __webpack_require__(12);
	var registerPropertyEditor_1 = __webpack_require__(13);
	var Input_1 = __webpack_require__(14);
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
	        return (React.createElement(Input_1.Input, React.__spread({type: Input_1.InputType.Text, bindObject: this.props.designedObject, bindPropName: this.props.propertyName, onChange: this.props.onChange}, this.getRenderProps())));
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
	        return (React.createElement("input", React.__spread({type: "text", value: this.getText(), onChange: this.handleOnChange}, this.getRenderProps())));
	    };
	    return Input;
	}(Component_1.Component));
	exports.Input = Input;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var getPropertyEditors_1 = __webpack_require__(16);
	var AutoForm_1 = __webpack_require__(17);
	var Snapshot_1 = __webpack_require__(24);
	var Observable_1 = __webpack_require__(25);
	var DeepClone_1 = __webpack_require__(26);
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
	                propertyName: null,
	                objectType: null,
	                editorType: null,
	                propertyType: null
	            };
	            _.assign(editorProps, propInfo);
	            if (!editorProps.inputCaption)
	                editorProps.inputCaption = editorProps.propertyName;
	            //console.log(editorProps);
	            ret.push(React.createElement(propInfo.editorType, editorProps, null));
	        });
	        return ret;
	    };
	    // handleGetNeedToSave = (): boolean => {
	    //     return this.needToSave;
	    // }
	    ObjectDesigner.prototype.render = function () {
	        this.addClassName("object-designer");
	        this.addProps({ onChange: this.props.onChange });
	        return (React.createElement(AutoForm_1.AutoForm, React.__spread({sizeTo: "parent", onSaveChanges: this.handleSaveChanges, onCancelChanges: this.handleCancelChanges, needToSave: this.needToSave}, this.getRenderProps()), "Object designer", this.renderPropertyDesigners()));
	    };
	    return ObjectDesigner;
	}(Component_1.Component));
	exports.ObjectDesigner = ObjectDesigner;


/***/ },
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var Tabs_1 = __webpack_require__(18);
	var Form_1 = __webpack_require__(19);
	var Layout_1 = __webpack_require__(6);
	var Flex_1 = __webpack_require__(8);
	var Fixed_1 = __webpack_require__(7);
	var Button_1 = __webpack_require__(20);
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps()), React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent"}, React.createElement(Flex_1.Flex, null, this.renderTabs()), React.createElement(Fixed_1.Fixed, null, React.createElement(Layout_1.Layout, {className: "auto-form-footer", type: "row", sizeTo: "content"}, React.createElement(Flex_1.Flex, null), React.createElement(Fixed_1.Fixed, null, React.createElement(Button_1.Button, {visible: this.props.needToSave, className: "is-success is-outlined", onClick: this.handleSaveButtonClick}, "Сохранить"), React.createElement(Button_1.Button, {onClick: this.handleCancelButtonClick}, this.props.needToSave ? "Отмена" : "Закрыть")))))));
	    };
	    return AutoForm;
	}(Component_1.Component));
	exports.AutoForm = AutoForm;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	var Layout_1 = __webpack_require__(6);
	var Fixed_1 = __webpack_require__(7);
	var Flex_1 = __webpack_require__(8);
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
	            var element = React.createElement("li", {className: className, key: index, onClick: function (e) { _this.state.setActiveTab(tabInfo); }}, React.createElement("a", null, tabInfo.title));
	            list.push(element);
	        });
	        return (React.createElement("div", {className: "tabs"}, React.createElement("ul", null, list)));
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
	        return (React.createElement(Layout_1.Layout, React.__spread({sizeTo: this.props.sizeTo, type: "column", ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), React.createElement(Fixed_1.Fixed, null, this.renderTabs()), React.createElement(Flex_1.Flex, null, this.renderPanels())));
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
	                var node = React.createElement("tr", {className: "control", key: index}, React.createElement("td", {style: { textAlign: "right", verticalAlign: "middle" }}, React.createElement("span", {className: "caption"}, controlProps.inputCaption ? controlProps.inputCaption : controlProps.bindPropName)), React.createElement("td", {style: { textAlign: "left", verticalAlign: "middle" }}, React.createElement("div", {className: "control"}, control)));
	                list.push(node);
	            }
	            else {
	                var node = React.createElement("tr", {className: "control", key: index}, React.createElement("td", {colSpan: "10", style: { textAlign: "left", verticalAlign: "middle" }}, React.createElement("div", {className: "control"}, control)));
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
	            return React.createElement("div", React.__spread({}, this.getRenderProps()), this.props.children);
	        }
	        else {
	            this.addStyles({ width: "inherit" });
	            return (React.createElement("table", React.__spread({ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), React.createElement("tbody", null, this.renderControls())));
	        }
	    };
	    return Form;
	}(Component_1.Component));
	exports.Form = Form;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var VisiblePlugin_1 = __webpack_require__(21);
	var OnClickPlugin_1 = __webpack_require__(23);
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
	        return (React.createElement("a", React.__spread({}, this.getRenderProps()), this.props.children));
	    };
	    return Button;
	}(Component_1.Component));
	exports.Button = Button;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Plugin_1 = __webpack_require__(22);
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Plugin_1 = __webpack_require__(22);
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
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
	            console.error("Snapshot '" + snapshotName + "' not found");
	            return null;
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
	// не сохраняются свойства, которые начинаются с $$
	function Observable(obj, onChangeCallback) {
	    if (!obj)
	        return undefined;
	    var proxyHandler = {
	        set: function (target, p, value, receiver) {
	            if (p.toString().substr(0, 2) !== "$$") {
	                if (!target.$$changeCount)
	                    target.$$changeCount = 1;
	                else
	                    target.$$changeCount++;
	                if (target.$$onChange)
	                    target.$$onChange(target, p, target[p], value);
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
	function DeepClone(obj) {
	    if (!obj)
	        return undefined;
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var App_1 = __webpack_require__(28);
	var Window_1 = __webpack_require__(30);
	var Button_1 = __webpack_require__(20);
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
	        this.autoPosition = "none";
	        this.autoSize = "none";
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
	        var okButton;
	        if (openParams.okButtonContent) {
	            var buttonClassName = "is-outlined";
	            if (openParams.style === "danger")
	                buttonClassName += " is-danger";
	            okButton =
	                React.createElement(Button_1.Button, {className: buttonClassName, style: buttonStyle, onClick: function (sender, e) {
	                    sender.closeParentWindow();
	                    if (openParams.resultCallback)
	                        openParams.resultCallback(true);
	                    e.stopPropagation();
	                }}, openParams.okButtonContent);
	        }
	        var cancelButton;
	        if (openParams.cancelButtonContent) {
	            cancelButton =
	                React.createElement(Button_1.Button, {className: "is-outlined", style: buttonStyle, onClick: function (sender, e) {
	                    sender.closeParentWindow();
	                    if (openParams.resultCallback)
	                        openParams.resultCallback(false);
	                    e.stopPropagation();
	                }}, openParams.cancelButtonContent);
	        }
	        var win = React.createElement("div", {style: { minWidth: 200, textAlign: "center" }}, winContent, React.createElement("div", {style: { padding: 10 }}, okButton, cancelButton));
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
	        while (topParent.parentWindowId) {
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
	        if (win.parentWindowId) {
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
	        return (React.createElement("div", React.__spread({ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), this.state.windows.map(function (w, index) {
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
	var AppErrorBar_1 = __webpack_require__(29);
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps()), React.createElement(AppErrorBar_1.AppErrorBar, null), this.props.children));
	    };
	    return App;
	}(Component_1.Component));
	exports.App = App;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
	        return (React.createElement("div", React.__spread({onClick: function (e) { _this.state.visible = false; _this.forceUpdate(); }}, this.getRenderProps()), this.errorMessage));
	    };
	    return AppErrorBar;
	}(Component_1.Component));
	exports.AppErrorBar = AppErrorBar;


/***/ },
/* 30 */
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
	var Component_1 = __webpack_require__(5);
	var Layout_1 = __webpack_require__(6);
	var Fixed_1 = __webpack_require__(7);
	var Flex_1 = __webpack_require__(8);
	var Movable_1 = __webpack_require__(31);
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
	            _this.handleOnClick(null);
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
	            _this.handleOnClick(null);
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
	        return null;
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
	            return null;
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
	        return (React.createElement("div", React.__spread({className: "window"}, this.getRenderProps(), {ref: function (e) { _this.nativeElement = e; }, onClick: this.handleOnClick}), React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent"}, React.createElement(Fixed_1.Fixed, {className: "window-header", style: { borderRadius: "5px 5px 0px 0px", position: "relative", paddingLeft: 10 }}, React.createElement(Layout_1.Layout, {type: "row", sizeTo: "parent"}, React.createElement(Flex_1.Flex, null, React.createElement("span", {className: "window-title"}, this.props.title), React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, onMoveStart: this.moveStart})), React.createElement(Fixed_1.Fixed, null, React.createElement("p", {className: "control has-addons buttons-bar", style: { paddingTop: 2, paddingRight: 4 }}, React.createElement("a", {className: "button is-small minimize-button", style: headerButtonStyle}, React.createElement("span", {className: "icon is-small ", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-minus", style: { top: 3 }}))), React.createElement("a", {className: "button is-small maximize-button", style: headerButtonStyle}, React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-square-o", style: { fontWeight: "bold" }}))), React.createElement("a", {className: "button is-small close-button", style: headerButtonStyle, onClick: this.handleCloseButtonClick}, React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-close", style: { top: -1 }}))))))), React.createElement(Flex_1.Flex, {className: "window-body", style: { padding: 10, overflow: "hidden" }}, this.props.children, this.renderRightBottomCornerResizer())), React.createElement("div", {className: disabledWrapperClass, style: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }})));
	    };
	    return Window;
	}(Component_1.Component));
	exports.Window = Window;
	// <div className="window-body" style={{ height:"100%" }}>
	//     {this.props.children}
	// </div>


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps(), {onDragStart: this.handleDragStart.bind(this), onDragEnd: this.handleDragEnd.bind(this)}), this.props.children));
	    };
	    return Movable;
	}(Component_1.Component));
	exports.Movable = Movable;


/***/ },
/* 32 */
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
	var StringPropertyEditor_1 = __webpack_require__(11);
	var testBuhtaObject1_1 = __webpack_require__(9);
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	//import {executeSQL} from "../buhta-core/SQL";
	var Component_1 = __webpack_require__(5);
	var TreeGridColumns_1 = __webpack_require__(34);
	var TreeGridColumn_1 = __webpack_require__(35);
	var Keycode_1 = __webpack_require__(37);
	var Movable_1 = __webpack_require__(31);
	var getScrollBarWidth_1 = __webpack_require__(38);
	var Button_1 = __webpack_require__(20);
	var Layout_1 = __webpack_require__(6);
	var Fixed_1 = __webpack_require__(7);
	var Flex_1 = __webpack_require__(8);
	var ObjectDesigner_1 = __webpack_require__(15);
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
	                _this.handleScroll(null);
	            }
	            var newWidth = _this.state.bodyWrapperElement.offsetWidth;
	            if (newWidth !== _this.lastBodyWrapperWidth) {
	                _this.lastBodyWrapperWidth = newWidth;
	                _this.handleScroll(null);
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
	        var message = React.createElement("div", {className: "color-red"}, "Удалить \"", objectClassName, "\"?", React.createElement("br", null), objectName);
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
	                    col.caption = propCol.caption;
	                    col.fieldName = propCol.propertyName;
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
	                hierarchyStr: obj[_this.props.hierarchyFieldName].toString(),
	                objIndex: index
	            };
	        });
	        sorted = _.sortBy(sorted, ["hierarchyStr"]);
	        var cache = {};
	        this.state.nodes = [];
	        sorted.forEach(function (s, index) {
	            var splitted = s.hierarchyStr.split(_this.props.hierarchyDelimiters);
	            var parentId;
	            var nodeId;
	            if (splitted.length === 1)
	                nodeId = s.hierarchyStr;
	            else {
	                nodeId = _.last(splitted);
	                parentId = splitted.slice(0, splitted.length - 1).join(_this.props.hierarchyDelimiters.slice(0, 1));
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
	        this.handleScroll(null);
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
	        this.handleScroll(null);
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
	        var str = this.state.dataSource.getDataRows()[objIndex][col.props.propertyName].toString();
	        //let str = this.rows[rowIndex].sourceObject[col.props.propertyName].toString();
	        // return <td key={colIndex}>
	        //     <div style={{height:16, overflow:"hidden"}}>{str}</div>
	        // </td>;
	        var node = row.node;
	        var hierarchyPaddingDiv;
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
	        var collapseIconDiv;
	        if (this.props.treeMode && col.props.showHierarchyTree) {
	            if (node.children.length > 0) {
	                if (node.expanded) {
	                    collapseIconDiv = (React.createElement("div", {className: "row-collapse-icon", style: { width: 20, flex: "0 0 auto" }}, React.createElement("span", {className: "icon is-small", style: { cursor: "pointer" }, onClick: function (e) { node.expanded = false; _this.createRows(); _this.forceUpdate(); }}, React.createElement("i", {className: "fa fa-caret-down"}))));
	                }
	                else {
	                    collapseIconDiv = (React.createElement("div", {className: "row-collapse-icon", style: { width: 20, flex: "0 0 auto" }}, React.createElement("span", {className: "icon is-small", style: { cursor: "pointer" }, onClick: function (e) { node.expanded = true; _this.createRows(); _this.forceUpdate(); }}, React.createElement("i", {className: "fa fa-caret-right"}))));
	                }
	            }
	            else {
	                collapseIconDiv = (React.createElement("div", {className: "row-collapse-icon", style: { width: 20, flex: "0 0 auto" }}));
	            }
	        }
	        return (React.createElement("td", {key: colIndex, style: tdStyle, ref: function (e) { return row.cellElements[colIndex] = e; }, onClick: function (e) { _this.setFocusedCell(rowIndex, colIndex); }}, React.createElement("div", {style: { display: "flex", flexDirection: "row", alignItems: "center" }}, React.createElement("div", {className: "row-checkbox", style: { flex: "0 0 auto" }}), React.createElement("div", {className: "row-padding", style: { flex: "0 0 auto" }}, hierarchyPaddingDiv), collapseIconDiv, React.createElement("div", {className: "row-icon", style: { flex: "0 0 auto" }}), React.createElement("div", {className: "row-str", style: { flex: "0 1 auto" }}, strSpan))));
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
	    TreeGrid.prototype.handleScroll = function (e) {
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
	            return null;
	        var colWidths = [];
	        var colHeaders = [];
	        this.state.columns.forEach(function (col, index) {
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px", ref: function (e) { col.headerWidthNativeElement = e; }}));
	            var tdStyle = { overflow: "hidden" };
	            colHeaders.push(React.createElement("td", {key: index, style: tdStyle}, col.caption, React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, width: 5, right: 0, bottom: 0, cursor: "col-resize" }, onMoveStart: function (event) { _this.columnResizeStart(event, col); console.log("MoveStart"); }}), React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, width: index === 0 ? 0 : 5, left: 0, bottom: 0, cursor: "col-resize" }, onMoveStart: function (event) {
	                // ресайзим предыдущую колонку
	                _this.columnResizeStart(event, _this.state.columns[index - 1]);
	            }})));
	        });
	        return (React.createElement("div", {ref: function (e) { return _this.state.headerWrapperElement = e; }, style: { position: "absolute" }}, React.createElement("table", {className: "tree-grid-header", style: { tableLayout: "fixed", borderCollapse: "collapse", width: this.calcTotalColumnsWidth() }, ref: function (e) { return _this.state.headerTableElement = e; }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, colHeaders)))));
	    };
	    TreeGrid.prototype.renderColumnFooters = function () {
	        var _this = this;
	        if (this.state.dataSource.getDataRows().length === 0)
	            return null;
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
	            return (React.createElement("div", {ref: function (e) { return _this.state.footerWrapperElement = e; }, style: { position: "absolute" }}, React.createElement("table", {className: "tree-grid-footer", style: { tableLayout: "fixed", borderCollapse: "collapse", width: this.calcTotalColumnsWidth() }, ref: function (e) { return _this.state.footerTableElement = e; }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, colFooters)))));
	        else
	            return undefined;
	    };
	    TreeGrid.prototype.renderEmptyDataSourceMessage = function () {
	        if (this.state.dataSource.getDataRows().length > 0)
	            return null;
	        var message = this.state.dataSource.getEmptyDataSourceMessage();
	        return (React.createElement("div", {className: "tree-grid-empty-body"}, message));
	    };
	    TreeGrid.prototype.renderGridBody = function () {
	        var _this = this;
	        if (this.state.dataSource.getDataRows().length === 0)
	            return null;
	        var colWidths = [];
	        this.state.columns.forEach(function (col, index) {
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px", ref: function (e) { col.bodyWidthNativeElement = e; }}));
	        });
	        return (React.createElement("table", {className: "tree-grid-body", tabIndex: 0, onKeyDown: function (e) { _this.handleBodyKeyDown(e); }, style: { tableLayout: "fixed", borderCollapse: "collapse", position: "relative", width: this.calcTotalColumnsWidth() }, ref: function (e) { return _this.state.bodyTableElement = e; }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {ref: function (e) { return _this.state.headerFakeRow = e; }})), this.renderRows(), React.createElement("tr", null, React.createElement("td", {style: { border: "none" }, ref: function (e) { return _this.state.footerFakeRow = e; }})))));
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
	            maxBodyWrapperWidth = null;
	        return (React.createElement(Layout_1.Layout, React.__spread({className: "tree-grid", type: "column", sizeTo: "parent"}, this.getRenderProps()), React.createElement(Fixed_1.Fixed, {className: "tree-grid-header-wrapper"}, React.createElement("button", {onClick: function () { }}, "refresh 5001"), React.createElement("button", {onClick: function () { _this.filterData(); _this.forceUpdate(); console.log("forceUpdate"); }}, "filter"), React.createElement("button", {onClick: function () { _this.expandAll(); }}, "expand all"), React.createElement("button", {onClick: function () { _this.collapseAll(); }}, "collapse all"), "заголовок и т.д."), React.createElement("div", {className: "tree-grid-body-wrapper", style: { position: "relative", overflow: "auto", flex: "1", maxWidth: maxBodyWrapperWidth }, onScroll: this.handleScroll.bind(this), ref: function (e) { _this.state.bodyWrapperElement = e; }}, this.renderEmptyDataSourceMessage(), this.renderGridBody(), this.renderColumnHeaders(), this.renderColumnFooters()), React.createElement(Fixed_1.Fixed, {className: "tree-grid-footer-wrapper"}, React.createElement(Layout_1.Layout, {type: "row", sizeTo: "content"}, React.createElement(Fixed_1.Fixed, null, this.renderEditableButtons()), React.createElement(Flex_1.Flex, null), React.createElement(Fixed_1.Fixed, null, React.createElement(Button_1.Button, {className: "is-smalln"}, "Выбрать"), React.createElement(Button_1.Button, {className: "is-smalln"}, "Отмена"))))));
	    };
	    return TreeGrid;
	}(Component_1.Component));
	exports.TreeGrid = TreeGrid;


/***/ },
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var registerGridColumn_1 = __webpack_require__(36);
	var TreeGridColumn = (function (_super) {
	    __extends(TreeGridColumn, _super);
	    function TreeGridColumn(props, context) {
	        _super.call(this, props, context);
	        //this.state.disabled = false;
	    }
	    TreeGridColumn.prototype.render = function () {
	        //this.addClassName("btn");
	        //this.toggleClassName(this.props.disabled, "disabled");
	        return (null);
	        //TreeGrid from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
	    };
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var io = __webpack_require__(40);
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
	        this.name = name;
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
/* 40 */
/***/ function(module, exports) {

	module.exports = io;

/***/ },
/* 41 */
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
	var DesignedObject_1 = __webpack_require__(10);
	var StringPropertyEditor_1 = __webpack_require__(11);
	var ListPropertyEditor_1 = __webpack_require__(42);
	var TreeGridColumn_1 = __webpack_require__(35);
	var SqlTable = (function (_super) {
	    __extends(SqlTable, _super);
	    function SqlTable() {
	        _super.apply(this, arguments);
	        this.columns = [];
	        this.testProc2 = function () {
	        };
	    }
	    SqlTable.prototype.addColumn = function (initCallback) {
	        var col = new SqlTableColumn(this);
	        this.columns.push(col);
	        initCallback(col);
	        this.testProc2();
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
	            inputTab: "Колонки"
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var BasePropertyEditor_1 = __webpack_require__(12);
	var registerPropertyEditor_1 = __webpack_require__(13);
	var TreeGrid_1 = __webpack_require__(33);
	var TreeGridArrayDataSource_1 = __webpack_require__(43);
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
	            propertyType: String
	        });
	    };
	}
	exports.ListEditor = ListEditor;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
	var getGridColumnInfos_1 = __webpack_require__(44);
	var Error_1 = __webpack_require__(45);
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
	        else
	            Error_1.throwError("TreeGridArrayDataSource: method getNewRow() not defined");
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
/* 44 */
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
/* 45 */
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjg0YTZjMGQ2NDU1N2UzOTZlNjciLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RhYnMvVGFicy50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvRm9ybS9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9WaXNpYmxlUGx1Z2luLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL1BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9PbkNsaWNrUGx1Z2luLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9TbmFwc2hvdC50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvT2JzZXJ2YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvRGVlcENsb25lLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Rlc2t0b3AvRGVza3RvcC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwL0FwcEVycm9yQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9XaW5kb3cvV2luZG93LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGUudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvcmVnaXN0ZXJHcmlkQ29sdW1uLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9LZXlDb2RlLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9nZXRTY3JvbGxCYXJXaWR0aC50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU1FMLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlvXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1zcWwvU3FsVGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRBcnJheURhdGFTb3VyY2UudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL2dldEdyaWRDb2x1bW5JbmZvcy50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLEtBQVksS0FBSyx1QkFBTSxDQUFPLENBQUM7QUFDL0IsS0FBWSxRQUFRLHVCQUFNLENBQVcsQ0FBQztBQUl0Qyx5Q0FBMEIsQ0FBK0MsQ0FBQztBQUcxRSxvQkFBbUI7QUFDbkIsMERBQXlEO0FBQ3pELDBDQUF5QztBQUN6QyxNQUFLO0FBRUwsb0JBQW1CO0FBQ25CLGVBQWM7QUFDZCxxQkFBb0I7QUFDcEIsTUFBSztBQUVMLFNBQVEsQ0FBQyxNQUFNLENBQ1gsb0JBQUMseUJBQVcsT0FBRSxFQUNkLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLENBQUM7Ozs7Ozs7QUNyQkYsd0I7Ozs7OztBQ0FBLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxLQUFZLEtBQUssdUJBQU0sQ0FBTyxDQUFD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LElBQUk7U0FDQSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FFM0IsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7S0FDMUIsTUFBTSxHQUFHLENBQUM7QUFDZCxFQUFDO0FBZGUsbUJBQVUsYUFjekIiLCJmaWxlIjoiLi9kaXN0L0J1aHRhQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2ODRhNmMwZDY0NTU3ZTM5NmU2N1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBIZWxsbyB9IGZyb20gXCIuL0hlbGxvUHJvcHNcIjtcclxuaW1wb3J0IHtBcHB9IGZyb20gXCIuLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwL0FwcFwiO1xyXG5pbXBvcnQge0FwcERlc2lnbmVyfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0FwcERlc2lnbmVyL0FwcERlc2lnbmVyXCI7XHJcbmltcG9ydCB7VGVzdEJ1aHRhT2JqZWN0MX0gZnJvbSBcIi4uL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDFcIjtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICAgIDxIZWxsbyBjb21waWxlcj1cIlR5cGVTY3JpcHRcIiBmcmFtZXdvcms9XCJSZWFjdFwiIC8+LFxyXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpXHJcbi8vICk7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoXHJcbi8vICAgICA8QXBwLz4sXHJcbi8vICAgICBkb2N1bWVudC5ib2R5XHJcbi8vICk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8QXBwRGVzaWduZXIvPixcclxuICAgIGRvY3VtZW50LmJvZHlcclxuKTtcclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvY29tcG9uZW50cy9pbmRleC50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RET01cIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXhcIjtcclxuXHJcbmltcG9ydCB7VGVzdEJ1aHRhT2JqZWN0MX0gZnJvbSBcIi4uLy4uL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDFcIjtcclxuaW1wb3J0IHtPYmplY3REZXNpZ25lcn0gZnJvbSBcIi4uL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyXCI7XHJcbmltcG9ydCB7RGVza3RvcCwgT3BlbldpbmRvd1BhcmFtc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EZXNrdG9wL0Rlc2t0b3BcIjtcclxuaW1wb3J0IHtEcmFnZ2FibGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRHJhZ2dhYmxlL0RyYWdnYWJsZVwiO1xyXG5pbXBvcnQge01vdmFibGUsIE1vdmVFdmVudCwgTW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCB7QXBwLCBhcHBJbnN0YW5jZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHAvQXBwXCI7XHJcbmltcG9ydCB7V2luZG93fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHtJbnB1dCwgSW5wdXRUeXBlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7SW5wdXREaXZpZGVyfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0RGl2aWRlci9JbnB1dERpdmlkZXJcIjtcclxuaW1wb3J0IHt0ZXN0QnVodGFPYmplY3QyfSBmcm9tIFwiLi4vLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MlwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvcnNcIjtcclxuaW1wb3J0IHtBdXRvRm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge1RyZWVHcmlkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW4sIEdyaWRDb2x1bW59IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbnN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zXCI7XHJcbmltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHtTcWxUYWJsZX0gZnJvbSBcIi4uLy4uL2J1aHRhLXNxbC9TcWxUYWJsZVwiO1xyXG5pbXBvcnQge1NuYXBzaG90fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9TbmFwc2hvdFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtUcmVlR3JpZEFycmF5RGF0YVNvdXJjZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZEFycmF5RGF0YVNvdXJjZVwiO1xyXG5pbXBvcnQge1N0cmluZ1Byb3BlcnR5RWRpdG9yLCBTdHJpbmdFZGl0b3J9IGZyb20gXCIuLi9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IFJlYWN0RE9NID0gX19SZWFjdC5SZWFjdERPTTtcclxuaW1wb3J0IHt0aHJvd0Vycm9yfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9FcnJvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGVzaWduZXJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcERlc2lnbmVyU3RhdGU+IHtcclxuICAgIC8vdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgQXBwRGVzaWduZXJTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPEFwcERlc2lnbmVyUHJvcHM+IHtcclxuICAgIC8vdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcERlc2lnbmVyIGV4dGVuZHMgQ29tcG9uZW50PEFwcERlc2lnbmVyUHJvcHMsIEFwcERlc2lnbmVyU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBcHBEZXNpZ25lclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwRGVzaWduZXJTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gaW5pdFRlc3QoKSB7XHJcbiAgICAvLyAgICAgdGhpcy50ZXN0T2JqZWN0Lm5hbWUgPSBcItCi0LXRgdGC0L7QstGL0Lkg0L7QsdGK0LXQutGCMVwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIG1vdmVTdGFydChlOiBNb3ZlU3RhcnRFdmVudCkge1xyXG4gICAgICAgIGUuYmluZFgodGhpcywgXCJzaWRlV2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNpZGVXaWR0aDogbnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHRlc3RPcGVuV2luZG93KCkge1xyXG5cclxuICAgICAgICAvLyBsZXQgb2JqID0ge1xyXG4gICAgICAgIC8vICAgICDQpNCw0LzQuNC70LjRjzogXCLQodCw0LLRh9C10L3QutC+0LJcIixcclxuICAgICAgICAvLyAgICAg0JjQvNGPOiBcItCa0L7QvdGB0YLQsNC90YLQuNC9XCIsXHJcbiAgICAgICAgLy8gICAgINCe0YLRh9C10YHRgtCy0L46IFwi0JLQu9Cw0LTQuNC80LjRgNC+0LLQuNGHXCJcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IHdpbiA9XHJcbiAgICAgICAgLy8gICAgIDxUYWJzPlxyXG4gICAgICAgIC8vICAgICAgICAgPFRhYiB0aXRsZT1cItC30LDQutC70LDQtNC60LAgMVwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXQgY2FwdGlvbj1cItCk0LDQvNC40LvQuNGPXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0KTQsNC80LjQu9C40Y9cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dCBjYXB0aW9uPVwi0JjQvNGPXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0JjQvNGPXCIvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXREaXZpZGVyIHRpdGxlPVwi0LAg0YLQtdC/0LXRgNGMINC+0YLRh9C10YHRgtCy0L5cIj48L0lucHV0RGl2aWRlcj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXtvYmp9IGJpbmRQcm9wTmFtZT1cItCe0YLRh9C10YHRgtCy0L5cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIC8vICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgLy8gICAgICAgICA8VGFiIHRpdGxlPVwi0LfQsNC60LvQsNC00LrQsCAyXCI+IDIyMjIyIDwvVGFiPlxyXG4gICAgICAgIC8vICAgICA8L1RhYnM+O1xyXG4gICAgICAgIC8vIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGVzdE9wZW5PYmplY3REZXNpZ25lcigpIHtcclxuICAgICAgICBsZXQgdGVzdE9iamVjdDogVGVzdEJ1aHRhT2JqZWN0MSA9IG5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcbiAgICAgICAgdGVzdE9iamVjdC5maXJzdE5hbWUgPSBcItCY0LPQvtGA0YwwXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdC5sYXN0TmFtZSA9IFwi0KHQuNC00L7RgNC10L3QutC+MFwiO1xyXG4gICAgICAgIHRlc3RPYmplY3Quc3VyTmFtZSA9IFwi0J7Qu9C10LPQvtCy0LjRhzBcIjtcclxuXHJcbi8vICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyIG9uQ2hhbmdlPXsoKT0+eyB3aW4ySW5zdGFuY2UuZGVzaWduZWRPYmplY3Q9bnVsbDsgd2luMkluc3RhbmNlLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwidGVzdDMyMy1jaGFuZ2VcIil9fSBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdH0ga2V5PVwiMVwiPiA8L09iamVjdERlc2lnbmVyPjtcclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IHRlc3RPYmplY3QgPSBfLmNsb25lRGVlcCh0ZXN0T2JqZWN0KTsgIHdpbjJJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpOyBjb25zb2xlLmxvZyhcInRlc3Q5OTktY2hhbmdlXCIpOyB9fVxyXG4gICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdH0ga2V5PVwiMVwiPiA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgbGV0IHRlc3RPYmplY3QyOiB0ZXN0QnVodGFPYmplY3QyID0gbmV3IHRlc3RCdWh0YU9iamVjdDIoKTtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5maXJzdE5hbWUgPSBcItCY0LPQvtGA0YwxXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdDIubGFzdE5hbWUgPSBcItCh0LjQtNC+0YDQtdC90LrQvjJcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5zdXJOYW1lID0gXCLQntC70LXQs9C+0LLQuNGHMVwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLnNleCA9IFwi0LzRg9C20YHQutC+0LlcIjtcclxuXHJcbiAgICAgICAgbGV0IHdpbjJJbnN0YW5jZTogYW55O1xyXG5cclxuICAgICAgICBsZXQgd2luMiA9IDxPYmplY3REZXNpZ25lciByZWY9eyAoZTphbnkpID0+IHsgd2luMkluc3RhbmNlID0gZTsgfSB9IGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCI+XHJcbiAgICAgICAgPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgIC8vZ2V0UHJvcGVydHlFZGl0b3JzKHRlc3RPYmplY3QpO1xyXG4gICAgICAgIC8vZ2V0UHJvcGVydHlFZGl0b3JzKHRlc3RPYmplY3QyKTtcclxuXHJcbiAgICAgICAgbGV0IHdpbndpbiA9IDxkaXY+e3dpbn17d2luMn08L2Rpdj47XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcItC+0LrQvdC+IDFcIixcclxuICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgbGVmdDogNTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2lud2luLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHRlc3RJbW11dGFibGUoKSB7XHJcbiAgICAgICAgLy8gLy9sZXQgZmFrZT1uZXcgVGFibGUoW10pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc3QgeHh4ID0gSW1tdXRhYmxlLk1hcDxzdHJpbmcsIG51bWJlcj4oKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBvYmogPSB7XHJcbiAgICAgICAgLy8gICAgIG5hbWU6IFwi0J7Qs9Cw0L3QuNC30LDRhtC40Y9cIixcclxuICAgICAgICAvLyAgICAgY29sdW1uczoge1wi0J3QvtC80LXRgFwiOiB7Y29sTmFtZTogXCLQndC+0LzQtdGAXCIsIHR5cGU6IFwic3RyaW5nXCJ9LCBcItCd0LDQt9Cy0LDQvdC40LVcIjoge2NvbE5hbWU6IFwi0J3QsNC30LLQsNC90LjQtVwiLCB0eXBlOiBcInN0cmluZ1wifX1cclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IG9iakkgPSBJbW11dGFibGUuZnJvbUpTKG9iaik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAvL2xldCBtID0gSW1tdXRhYmxlLk1hcDxzdHJpbmcsbnVtYmVyfCBJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+PigpO1xyXG4gICAgICAgIC8vIC8vbGV0IHggPSBtLnNldChcIjEzeXl0MzMzMzMyXCIsIDEyKTtcclxuICAgICAgICAvLyAvL2xldCB5ID0gbS5zZXQoXCJ4eHhcIiwgSW1tdXRhYmxlLk1hcDxudW1iZXIsc3RyaW5nPigpKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIC8vbGV0IHk9bS51cGRhdGUoXCJ4eHhcIixJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+KCkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2JqSS50b1N0cmluZygpKTtcclxuICAgICAgICAvLyBsZXQgeCA9IG9iakkuZ2V0SW4oWydjb2x1bW5zJywgJ9Cd0L7QvNC10YAnLCAnY29sTmFtZSddKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh4KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHN0cjogc3RyaW5nID0gXCLQv9GA0LjQstC10YJcIjtcclxuXHJcbiAgICB0ZXN0QXV0b0Zvcm0oKSB7XHJcbiAgICAgICAgbGV0IHdpbjIgPVxyXG4gICAgICAgICAgICA8QXV0b0Zvcm0gc2l6ZVRvPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfSBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsxXCIgaW5wdXRDYXB0aW9uPVwiZWVlMVwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizFcIiBpbnB1dENhcHRpb249XCJlZWUyXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMVwiIGlucHV0Q2FwdGlvbj1cImVlZTNcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsyXCIgaW5wdXRDYXB0aW9uPVwiZWVlNFwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgPC9BdXRvRm9ybT47XHJcbi8vICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YtcIiBpbnB1dENhcHRpb249XCJlZWVcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc30gYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJhdXRvIGZvcm1cIixcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgbGVmdDogMTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdEdyaWQoKSB7XHJcbiAgICAgICAgLy8gZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgICAgIC8vICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBkYXRhU291cmNlID0gdGFibGUucm93cy5tYXA8RGVzaWduZWRPYmplY3Q+KChyKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHvQmtC70Y7RhzogcltcItCa0LvRjtGHXCJdLCDQndC+0LzQtdGAOiByW1wi0J3QvtC80LXRgFwiXSwg0J3QsNC30LLQsNC90LjQtTogcltcItCd0LDQt9Cy0LDQvdC40LVcIl19O1xyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGRzID0gbmV3IFRyZWVHcmlkQXJyYXlEYXRhU291cmNlKGRhdGFTb3VyY2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YAgPT5cIiArIHRhYmxlLnJvd3NbMF0uZ2V0VmFsdWUoMSkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9eyBkYXRhU291cmNlIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdHJlZU1vZGU9e3RydWV9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGhpZXJhcmNoeUZpZWxkTmFtZT1cItCd0L7QvNC10YBcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPVwiLlwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw9ezB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBkZW55RGVsZXRlPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgID5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1ucz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JrQvtC70L7QvdC60LAyXCIgcHJvcGVydHlOYW1lPVwi0J3QvtC80LXRgFwiIHNob3dIaWVyYXJjaHlUcmVlPXtmYWxzZX1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwM1wiIHByb3BlcnR5TmFtZT1cItCd0LDQt9Cy0LDQvdC40LVcIiBzaG93SGllcmFyY2h5VHJlZT17dHJ1ZX1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwMVwiIHByb3BlcnR5TmFtZT1cItCa0LvRjtGHXCIgd2lkdGg9ezgwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW5zPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvVHJlZUdyaWQ+O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiBcImF1dG8gZm9ybVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiA4MDBcclxuICAgICAgICAvLyAgICAgICAgIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvL1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0RmxleCgpIHtcclxuICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOlwiMnB4IGRvdHRlZCByZWRcIiwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgbGVmdDowLHJpZ2h0OjAsIGJvdHRvbTowIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkIHN0eWxlPXt7IGJvcmRlcjpcIjJweCBkb3R0ZWQgYmx1ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0J7QtNC40L08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIGdyZWVuXCIgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiIHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCByZWRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIGJsdWVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0t0J7QtNC40L08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIGdyZWVuXCIgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPi0tLS0tLS3QlNCy0LA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0tLS3QlNCy0LAxPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTExMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMjIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjExMTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjIyMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMTExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjIyMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTExMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMjIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkIHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCBtYXJvb25cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0tLS3QotGA0Lg8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIG1hcm9vblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0KLRgNC4PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwidGVzdCBGTEVYXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDEwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRlc3RUYWJsZURlc2lnbmVyKCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IG5ldyBTcWxUYWJsZSgpO1xyXG5cclxuICAgICAgICB0YWJsZS5uYW1lID0gXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgdGFibGUuc3FsbmFtZSA9IFwiZGJvLtCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIjtcclxuICAgICAgICB0YWJsZS5hZGRDb2x1bW4oKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICBjb2wubmFtZSA9IFwi0J3QvtC80LXRgFwiO1xyXG4gICAgICAgICAgICBjb2wuZGF0YVR5cGUgPSBcInZhcmNoYXIoMTApXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0LDQt9Cy0LDQvdC40LVcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDUwKVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IGNvbnNvbGUubG9nKFwidGFibGUtY2hhbmdlXCIpOyB9fVxyXG4gICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17dGFibGV9PlxyXG4gICAgICAgIDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCIsXHJcbiAgICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDUwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRlc3RTbmFwc2hvdCgpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBuZXcgU3FsVGFibGUoKTtcclxuXHJcbiAgICAgICAgdGFibGUubmFtZSA9IFwi0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgIHRhYmxlLnNxbG5hbWUgPSBcImRiby7QntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0L7QvNC10YBcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDEwKVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbC5uYW1lID0gXCLQndCw0LfQstCw0L3QuNC1XCI7XHJcbiAgICAgICAgICAgIGNvbC5kYXRhVHlwZSA9IFwidmFyY2hhcig1MClcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xyXG5cclxuICAgICAgICBsZXQgcyA9IG5ldyBTbmFwc2hvdCgpO1xyXG4gICAgICAgIHMuc2F2ZU9iamVjdCh0YWJsZSwgXCJ0YWJsZTFcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuXHJcbiAgICAgICAgdGFibGUubmFtZSA9IFwi0LbQvtC/0LBcIjtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJsZSk7XHJcblxyXG4gICAgICAgIHMucmVzdG9yZU9iamVjdCh0YWJsZSwgXCJ0YWJsZTFcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xyXG5cclxuICAgICAgICB0aGlzLnRlc3RTbmFwc2hvdFByZWZvcm1hbmNlKCk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGVzdFNuYXBzaG90UHJlZm9ybWFuY2UoKSB7XHJcbiAgICAgICAgbGV0IHg6IGFueSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWJsZSA9IG5ldyBTcWxUYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgdGFibGUubmFtZSA9IFwi0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgICAgICB0YWJsZS5zcWxuYW1lID0gXCJkYm8u0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgICAgICB0YWJsZS5hZGRDb2x1bW4oKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0L7QvNC10YBcIjtcclxuICAgICAgICAgICAgICAgIGNvbC5kYXRhVHlwZSA9IFwidmFyY2hhcigxMClcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2wubmFtZSA9IFwi0J3QsNC30LLQsNC90LjQtVwiO1xyXG4gICAgICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDUwKVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgeC5wdXNoKHRhYmxlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgcyA9IG5ldyBTbmFwc2hvdCgpO1xyXG4gICAgICAgIGNvbnNvbGUudGltZShcIngxXCIpO1xyXG4gICAgICAgIHMuc2F2ZU9iamVjdCh4LCBcInhcIik7XHJcbiAgICAgICAgY29uc29sZS50aW1lRW5kKFwieDFcIik7XHJcbiAgICAgICAgeC5sZW5ndGggPSAwO1xyXG4gICAgICAgIHMucmVzdG9yZU9iamVjdCh4LCBcInhcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coeCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRlc3RHcmlkMigpIHtcclxuXHJcbiAgICAgICAgY2xhc3MgVmlkIGV4dGVuZHMgRGVzaWduZWRPYmplY3Qge1xyXG5cclxuICAgICAgICAgICAgQFN0cmluZ0VkaXRvcigpXHJcbiAgICAgICAgICAgIEBHcmlkQ29sdW1uKHtjYXB0aW9uOiBcItGN0YLQviDQvdC+0LzQtdGAXCJ9KVxyXG4gICAgICAgICAgICBOdW06IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIEBTdHJpbmdFZGl0b3IoKVxyXG4gICAgICAgICAgICBAR3JpZENvbHVtbih7fSlcclxuICAgICAgICAgICAgTmFtZTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGdldENsYXNzTmFtZSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcItCS0LjQtCDRgtC+0LLQsNGA0LBcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFske3RoaXMuTnVtfV0gIGAgKyB0aGlzLk5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleGVjdXRlU1FMKFwic2VsZWN0IFRPUCAxMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgICAgICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlkcyA9IHRhYmxlLnJvd3MubWFwPFZpZD4oKHIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZpZCA9IG5ldyBWaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWQuTnVtID0gXCIqXCIgKyByW1wi0J3QvtC80LXRgFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB2aWQuTmFtZSA9IFwiKlwiICsgcltcItCd0LDQt9Cy0LDQvdC40LVcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdCBUT1AgMTAgPT0+IFwiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmlkcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBuZXcgVHJlZUdyaWRBcnJheURhdGFTb3VyY2Uodmlkcyk7XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlLnBhcmFtcy5nZXROZXdSb3cgPSAoKSA9PiBuZXcgVmlkKCk7XHJcbiAgICAgICAgICAgICAgICAvL2RhdGFTb3VyY2UucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UgPSAoKSA9PiBcItCS0YHQtSDQv9GD0YHRgtC+LCDQsdC70LjQvSEg0JbQvNC4INC90LAg0LPQsNC3IVwiO1xyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5wYXJhbXMuZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZSA9ICgpID0+IDxzcGFuPlwi0JLRgdC1INC/0YPRgdGC0L4sIDxpPtCx0LvQuNC9ITwvaT4g0JbQvNC4INC90LAg0LPQsNC3IVwiPC9zcGFuPjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkPjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInRlc3QgZ3JpZCAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmFpbCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0V2luZG93QXV0b1NpemUoKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICgxID09PSAxKVxyXG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihuZXcgRXJyb3IoXCIzMzMrK1wiKSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFnID0gXCJHZXQgdGhlIGN1cnJlbnQgY29vcmRpbmF0ZXMgb2YgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzLCByZWxhdGl2ZSB0byBcIjtcclxuXHJcbiAgICAgICAgbGV0IHdpbjIgPVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICDQn9GA0LjQstC10YIg0YPRgNC+0LTRi1xyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0JTQsCDQuCDQvdC10YIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7QlNCwINC4INC90LXRgiA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0JTQsCDQuCDQvdC10YIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCU0LAg0Lgg0L3QtdGCIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7QlNCwINC4INC90LXRgiA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyAoc2VuZGVyOkJ1dHRvbiwgZTpSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VuZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5NZXNzYWdlV2luZG93KG1hZywgeyBzdHlsZTpcImluZm9ybWF0aW9uXCIsIHBhcmVudFdpbmRvd0lkOiBzZW5kZXIuZ2V0UGFyZW50V2luZG93SWQoKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J3QvtCy0L7QtVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcInRlc3QgQVVUT1NJWkVcIixcclxuICAgICAgICAgICAgYXV0b1NpemU6IFwiY29udGVudFwiLFxyXG4gICAgICAgICAgICBhdXRvUG9zaXRpb246IFwiZGVza3RvcC1jZW50ZXJcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0T2JzZXJ2YWJsZSgpIHtcclxuICAgICAgICBsZXQgeHh4OiBhbnkgPSB7fTtcclxuICAgICAgICBsZXQgcHJveHlIYW5kbGVyID0ge1xyXG4gICAgICAgICAgICBnZXQ6ICh0YXJnZXQ6IGFueSwgcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImhhbmRsZXJHZXQ/Pz9cIik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiAodGFyZ2V0OiBhbnksIHA6IFByb3BlcnR5S2V5LCB2YWx1ZTogYW55LCByZWNlaXZlcjogYW55KTogYW55ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlclNldFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLVByb3h5LS0tLS1cIik7XHJcbiAgICAgICAgbGV0IHByb3h5ID0gbmV3IFByb3h5KHh4eCwgcHJveHlIYW5kbGVyKTtcclxuICAgICAgICBwcm94eS54MTExID0gMzMzO1xyXG4gICAgICAgIHByb3h5Lm8gPSB7fTtcclxuICAgICAgICBwcm94eS5vLmVlZSA9IFwiZWVlMVwiO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocHJveHkueDExMSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm94eSk7XHJcblxyXG4gICAgICAgIC8vIGxldCB4ID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY2xhc3MgQSBleHRlbmRzIFByb3h5PEFycmF5PGFueT4+IHtcclxuICAgICAgICAvLyAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIGxldCBoYW5kbGVyOiBQcm94eUhhbmRsZXI8QXJyYXk8YW55Pj4gPSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZ2V0OiAodGFyZ2V0OiBBcnJheTxhbnk+LCBwOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlckdldFwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBzdXBlcihbXSwgaGFuZGxlcik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiOVwiKTtcclxuICAgICAgICAvLyBsZXQgYSA9IG5ldyBBKCk7XHJcbiAgICAgICAgLy8gYS5wdXNoKDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjEwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImFwcC1kZXNpZ25lclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7c2l6ZVRvOiBcInBhcmVudFwifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IHNpemVUbz1cInBhcmVudFwiIHR5cGU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwiaGVhZGVyMVwiPkZpeGVkIEhlYWRlcjwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cInJvd1wiIHNpemVUbz1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cInNpZGViYXJcIiBzdHlsZT17e3dpZHRoOnRoaXMuc2lkZVdpZHRofX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRml4ZWQgU2lkZWJhciAxMjM8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RPcGVuV2luZG93KCk7IH19PiB0ZXN0IG9wZW4gd2luZG93PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0T3Blbk9iamVjdERlc2lnbmVyKCk7IH19Pm9wZW4gZGVzaWduZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RJbW11dGFibGUoKTsgfX0+dGVzdEltbXV0YWJsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEF1dG9Gb3JtKCk7IH19PnRlc3QgYXV0b2Zvcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RHcmlkKCk7IH19PnRlc3QgR1JJRDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEZsZXgoKTsgfX0+dGVzdCBGTEVYPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0VGFibGVEZXNpZ25lcigpOyB9fT50ZXN0IFRBQkxFIERFU0lHTkVSPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0U25hcHNob3QoKTsgfX0+dGVzdCBTTkFQU0hPVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEdyaWQyKCk7IH19PnRlc3QgR1JJRC0yPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0V2luZG93QXV0b1NpemUoKTsgfX0+dGVzdCBXSU4gQVVUT1NJWkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdE9ic2VydmFibGUoKTsgfX0+dGVzdCBPQlNFUlZBQkxFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwiWFhYY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92YWJsZSBvbk1vdmVTdGFydD17dGhpcy5tb3ZlU3RhcnQuYmluZCh0aGlzKX0+TU9WPC9Nb3ZhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0FwcD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcbmltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi4vUGx1Z2lucy9QbHVnaW5cIjtcclxuaW1wb3J0IHtXaW5kb3d9IGZyb20gXCIuL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtEZXNrdG9wLCBPcGVuTWVzc2FnZVdpbmRvd1BhcmFtc30gZnJvbSBcIi4vRGVza3RvcC9EZXNrdG9wXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBYT25DbGlja1Byb3BzIHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50UHJvcHM8Uz4gZXh0ZW5kcyBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8RWxlbWVudD4ge1xyXG4gICAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG4gICAgb25XaWxsTW91bnQ/OiAoc3RhdGU6IFMpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U3RhdGU8UD4ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogQ29tcG9uZW50PFAsIGFueT4pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9yY2VVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvL2NsaWNrQ291bnQ6IG51bWJlcjtcclxuICAgIC8vIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8Uz4sIFMgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxQPj4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UCwgUz4ge1xyXG5cclxuICAgIHBsdWdpbnM6IENvbXBvbmVudFBsdWdpbjxhbnksIGFueT5bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQLCBjb250ZXh0OiBhbnkgLypzdGF0ZUNsYXNzPzogRnVuY3Rpb24qLykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgLy8gdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IHBsdWdJbnN0YW5jZTogYW55ID0gbmV3IHBsdWcodGhpcyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdJbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJQcm9wczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIHJlbmRlclN0eWxlczogYW55ID0ge307XHJcblxyXG4gICAgZ2V0UGFyZW50V2luZG93KCk6IFdpbmRvdyB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKChwYXJlbnQgYXMgYW55KS4kJHdpbmRvdylcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyZW50IGFzIGFueSkuJCR3aW5kb3cgYXMgV2luZG93O1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50RGVza3RvcCgpOiBEZXNrdG9wIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAoKHBhcmVudCBhcyBhbnkpLiQkZGVza3RvcClcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyZW50IGFzIGFueSkuJCRkZXNrdG9wIGFzIERlc2t0b3A7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UGFyZW50V2luZG93SWQoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcGFyZW50V2luID0gdGhpcy5nZXRQYXJlbnRXaW5kb3coKTtcclxuICAgICAgICBpZiAocGFyZW50V2luKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRXaW4uc3RhdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvcHMocHJvcHM6IE9iamVjdCkge1xyXG4gICAgICAgIF8uYXNzaWduV2l0aCh0aGlzLnJlbmRlclByb3BzLCBwcm9wcywgKG9iamVjdFZhbHVlOiBhbnksIHNvdXJjZVZhbHVlOiBhbnksIGtleT86IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcImNsYXNzXCIgfHwga2V5ID09PSBcImNsYXNzTmFtZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImludmFsaWQgcHJvcGVydHkgJ1wiICsga2V5ICsgXCInLCB1c2UgZnVuY3Rpb25zIGFkZENsYXNzTmFtZSgpLCB0b2dnbGVDbGFzc05hbWUoKVwiKTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJzdHlsZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImludmFsaWQgcHJvcGVydHkgJ1wiICsga2V5ICsgXCInLCB1c2UgZnVuY3Rpb25zIGFkZFN0eWxlcygpLCByZW1vdmVTdHlsZSgpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlVmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3R5bGVzKHN0eWxlczogT2JqZWN0KSB7XHJcbiAgICAgICAgXy5hc3NpZ24odGhpcy5yZW5kZXJTdHlsZXMsIHN0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTdHlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTdHlsZXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucmVuZGVyU3R5bGVzW3N0eWxlXTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdHlsZXMoc3R5bGVzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKChzdHlsZSk9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlbmRlclN0eWxlc1tzdHlsZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcuZGlkTW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlkTW91bnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxNb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2lsbE1vdW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25XaWxsTW91bnQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25XaWxsTW91bnQodGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzOiBQKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc1Byb3BzRXF1YWwob2JqMTogYW55LCBvYmoyOiBhbnksIGV4Y2x1ZGVQcm9wcz86IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIC8vTG9vcCB0aHJvdWdoIHByb3BlcnRpZXMgaW4gb2JqZWN0IDFcclxuICAgICAgICBmb3IgKGxldCBwIGluIG9iajEpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChleGNsdWRlUHJvcHMgJiYgZXhjbHVkZVByb3BzLmluZGV4T2YocCkgPj0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAvL0NoZWNrIHByb3BlcnR5IGV4aXN0cyBvbiBib3RoIG9iamVjdHNcclxuICAgICAgICAgICAgaWYgKG9iajEuaGFzT3duUHJvcGVydHkocCkgIT09IG9iajIuaGFzT3duUHJvcGVydHkocCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvYmoxW3BdICE9PSBvYmoyW3BdKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMSBub3QgZXF1YWwgXCIgKyBwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHN3aXRjaCAodHlwZW9mIChvYmoxW3BdKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy9EZWVwIGNvbXBhcmUgb2JqZWN0c1xyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoIU9iamVjdC5jb21wYXJlKG9iajFbcF0sIG9iajJbcF0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICAvL0NvbXBhcmUgZnVuY3Rpb24gY29kZVxyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnZnVuY3Rpb24nOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmICh0eXBlb2YgKG9iajJbcF0pID09ICd1bmRlZmluZWQnIHx8IChwICE9ICdjb21wYXJlJyAmJiBvYmoxW3BdLnRvU3RyaW5nKCkgIT0gb2JqMltwXS50b1N0cmluZygpKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgLy9Db21wYXJlIHZhbHVlc1xyXG4gICAgICAgICAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAob2JqMVtwXSAhPT0gb2JqMltwXSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0NoZWNrIG9iamVjdCAyIGZvciBhbnkgZXh0cmEgcHJvcGVydGllc1xyXG4gICAgICAgIGZvciAobGV0IHAgaW4gb2JqMikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChvYmoxW3BdKSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgKG9iajJbcF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMiBub3QgZXF1YWwgXCIgKyBwKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqMSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9iajIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHByb3RlY3RlZCBzaGFsbG93Q29tcGFyZShuZXh0UHJvcHM6IFApOiBib29sZWFuIHtcclxuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKFwic2hhbGxvdy0wIFwiICsgdGhpcy5jb25zdHJ1Y3Rvci50b1N0cmluZygpLnN1YnN0cmluZygwLCAzMCkpO1xyXG4gICAgLy8gICAgIC8vY29uc29sZS50aW1lKFwiMjJcIik7XHJcbiAgICAvLyAgICAgbGV0IHJldCA9IHNoYWxsb3dDb21wYXJlKHRoaXMsIG5leHRQcm9wcywgdGhpcy5zdGF0ZSk7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLnRpbWVFbmQoXCIyMlwiKTtcclxuICAgIC8vICAgICByZXR1cm4gcmV0O1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIHByaXZhdGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKG5leHRQcm9wczogUCwgbmV4dFN0YXRlOiBTKSA9PiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHM6IFAsIHByZXZTdGF0ZTogUywgcHJldkNvbnRleHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBwcmV2Q29udGV4dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCBkaWRVcGRhdGUocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxSZWNlaXZlUHJvcHMocHJldlByb3BzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsVW5tb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsVW5tb3VudCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRDbGFzc05hbWUoY2xhc3NOYW1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNsYXNzTmFtZShib29sVmFsdWU6IGJvb2xlYW4sIHRydWVDbGFzc05hbWVzOiBzdHJpbmcsIGZhbHNlQ2xhc3NOYW1lcz86IHN0cmluZykge1xyXG4gICAgICAgIGlmIChib29sVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUodHJ1ZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoZmFsc2VDbGFzc05hbWVzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzc05hbWUoZmFsc2VDbGFzc05hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3NOYW1lKHRydWVDbGFzc05hbWVzKTtcclxuICAgICAgICAgICAgaWYgKGZhbHNlQ2xhc3NOYW1lcylcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKGZhbHNlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWVzOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lcylcclxuICAgICAgICAgICAgY2xhc3NOYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNsYXNzZXMuc3BsaWNlKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpLCAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJDbGFzc2VzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNsYXNzZXMuam9pbihcIiBcIik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZW5kZXJQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclByb3BzLmNsYXNzTmFtZSA9IHRoaXMucmVuZGVyQ2xhc3NOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9wcy5zdHlsZSA9IHRoaXMucmVuZGVyU3R5bGVzO1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMucmVuZGVyUHJvcHMuc3R5bGUsIHRoaXMucHJvcHMuc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclByb3BzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBnZXRSZWFjdEVsZW1lbnRDbGFzc05hbWUoZWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC50eXBlID8gZWxlbWVudC50eXBlLnRvU3RyaW5nKCkuc3BsaXQoXCIoXCIpWzBdLnNwbGl0KFwiIFwiKVsxXSA6IFwiXCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW4oY2hpbGRUeXBlOiBGdW5jdGlvbik6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkVHlwZSA9PT0gY2hpbGQudHlwZSlcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkcmVuT2ZQcm9wcyhwcm9wczogYW55LCBjaGlsZFR5cGU6IEZ1bmN0aW9uKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkVHlwZSA9PT0gY2hpbGQudHlwZSlcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93Q29uZmlybWF0aW9uV2luZG93KG1lc3NhZ2VDb250ZW50OiBSZWFjdC5SZWFjdE5vZGUsIHJlc3VsdENhbGxiYWNrOiAocmVzdWx0T2s6IGJvb2xlYW4pID0+IHZvaWQsIG9rQnV0dG9uVGV4dD86IHN0cmluZywgY2FuY2VsQnV0dG9uVGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIGxldCBwYXJhbXM6IE9wZW5NZXNzYWdlV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzdHlsZTogXCJjb25maXJtYXRpb25cIixcclxuICAgICAgICAgICAgcGFyZW50V2luZG93SWQ6IHRoaXMuZ2V0UGFyZW50V2luZG93SWQoKSxcclxuICAgICAgICAgICAgb2tCdXR0b25Db250ZW50OiBva0J1dHRvblRleHQgfHwgXCLQlNCwXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IGNhbmNlbEJ1dHRvblRleHQgfHwgXCLQndC10YJcIixcclxuICAgICAgICAgICAgcmVzdWx0Q2FsbGJhY2s6IHJlc3VsdENhbGxiYWNrXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudERlc2t0b3AoKS5vcGVuTWVzc2FnZVdpbmRvdyhtZXNzYWdlQ29udGVudCwgcGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVsZXRlQ29uZmlybWF0aW9uV2luZG93KG1lc3NhZ2VDb250ZW50OiBSZWFjdC5SZWFjdE5vZGUsIHJlc3VsdENhbGxiYWNrOiAocmVzdWx0T2s6IGJvb2xlYW4pID0+IHZvaWQsIG9rQnV0dG9uVGV4dD86IHN0cmluZywgY2FuY2VsQnV0dG9uVGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIGxldCBwYXJhbXM6IE9wZW5NZXNzYWdlV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzdHlsZTogXCJkYW5nZXJcIixcclxuICAgICAgICAgICAgcGFyZW50V2luZG93SWQ6IHRoaXMuZ2V0UGFyZW50V2luZG93SWQoKSxcclxuICAgICAgICAgICAgb2tCdXR0b25Db250ZW50OiBva0J1dHRvblRleHQgfHwgXCLQlNCwXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IGNhbmNlbEJ1dHRvblRleHQgfHwgXCLQndC10YJcIixcclxuICAgICAgICAgICAgcmVzdWx0Q2FsbGJhY2s6IHJlc3VsdENhbGxiYWNrXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudERlc2t0b3AoKS5vcGVuTWVzc2FnZVdpbmRvdyhtZXNzYWdlQ29udGVudCwgcGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhcmVudFdpbmRvdygpIHtcclxuICAgICAgICB0aGlzLmdldFBhcmVudERlc2t0b3AoKS5jbG9zZVdpbmRvdyh0aGlzLmdldFBhcmVudFdpbmRvd0lkKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmVuZGVyKCkge1xyXG4gICAgLy8gICAgcmV0dXJuIChuZXcpXHJcbiAgICAvLyAgICAvLyAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSB9PlxyXG4gICAgLy8gICAgLy8gICAgICAgIENvbXBvbmVudCBmcm9tIHt0aGlzLnByb3BzLmNvbXBpbGVyfSBhbmQge3RoaXMucHJvcHMuZnJhbWV3b3JrfSFjbGlja0NvdW50PXt0aGlzLnN0YXRlLmNsaWNrQ291bnR9XHJcbiAgICAvLyAgICAvLyAgICA8L2J1dHRvbj5cclxuICAgIC8vICAgIC8vKTtcclxuICAgIC8vfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudC50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG4gICAgdHlwZTogXCJjb2x1bW5cIiB8IFwicm93XCI7XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudDxMYXlvdXRQcm9wcyxhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkxheW91dFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7ZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGZsZXhEaXJlY3Rpb246IHRoaXMucHJvcHMudHlwZX0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpIHsvLyAmJiB0aGlzLnByb3BzLnR5cGU9PT1cImNvbHVtblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnNpemVUbyA9PT0gXCJwYXJlbnRcIikge1xyXG4gICAgICAgIC8vICAgICBsZXQgc3R5bGU6IGFueSA9IHtcclxuICAgICAgICAvLyAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAvLyAgICAgICAgIC8vcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAvLyAgICAgICAgIC8vIGxlZnQ6IDAsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyByaWdodDogMCxcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRvcDogMCxcclxuICAgICAgICAvLyAgICAgICAgIC8vIGJvdHRvbTogMCxcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAvLyBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyAgICAgc3R5bGUuZmxleERpcmVjdGlvbiA9IHRoaXMucHJvcHMudHlwZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvL292ZXJmbG93OiBcImF1dG9cIlxyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIC8vICAgICBzdHlsZS5mbGV4RGlyZWN0aW9uID0gdGhpcy5wcm9wcy50eXBlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2t9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0xheW91dC50c3hcbiAqKi8iLCJcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaXhlZFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRml4ZWQgZXh0ZW5kcyBDb21wb25lbnQ8Rml4ZWRQcm9wcywgYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiRml4ZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuICAgICAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIGZsZXg6IFwiMCAwIGF1dG9cIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9ID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRml4ZWQudHN4XG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmxleFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGbGV4IGV4dGVuZHMgQ29tcG9uZW50PEZsZXhQcm9wcyxhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJGbGV4XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBmbGV4OiBcIjFcIixcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9ID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRmxleC50c3hcbiAqKi8iLCJpbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7U3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RCdWh0YU9iamVjdDEgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCk0LDQvNC40LvQuNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCk0LDQvNC40LvQuNGPINCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQmNC80Y9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0JjQvNGPXCJcclxuICAgIH0pXHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQntGC0YfQtdGB0YLQstC+XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCe0YLRh9C10YHRgtCy0L4g0LDQsdC+0L3QtdC90YLQsFwiXHJcbiAgICB9KVxyXG4gICAgc3VyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50c1xuICoqLyIsIu+7v2ltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvLCBCYXNlUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZU9uQ2hhbmdlSGFuZGxlcn0gZnJvbSBcIi4uL2J1aHRhLWNvcmUvT2JzZXJ2YWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlc2lnbmVkT2JqZWN0IHtcclxuICAgIFxyXG4gICAgW25hbWU6IHN0cmluZ106IGFueTtcclxuXHJcbiAgICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwi0J7QsdGK0LXQutGCXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcblxyXG4gICAgICAgIGxldCBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uICguezEsfSlcXCgvO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gKGZ1bmNOYW1lUmVnZXgpLmV4ZWMoKHRoaXMpLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgJCR1bndhdGNoZWRQcm9wczogc3RyaW5nW10gPSBbXCJwcm9wZXJ0eUVkaXRvcnNcIiwgXCIkJHVud2F0Y2hlZFByb3BzXCJdO1xyXG4gICAgJCRjaGFuZ2VDb3VudDogbnVtYmVyO1xyXG4gICAgJCRvbkNoYW5nZTogT2JzZXJ2YWJsZU9uQ2hhbmdlSGFuZGxlcjxEZXNpZ25lZE9iamVjdD47XHJcblxyXG4gICAgLy8gaWQ6IHN0cmluZztcclxuICAgIC8vIG5hbWU6IHN0cmluZztcclxuICAgIC8vIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgLy8gaW5oZXJpdEZyb206IHN0cmluZztcclxuICAgIC8vIG1vZHVsZU5hbWU6IHN0cmluZztcclxuICAgIC8vIHJlZmVyZW5jZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgICAvL3ByaXZhdGUgc3RhdGljIHByb3BlcnR5RWRpdG9yczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBQcm9wZXJ0eUVkaXRvckluZm87IH0gPSB7fTtcclxuXHJcbiAgICAvLyBzdGF0aWMgcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWU6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5UGFnZTogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlHcm91cDogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlEZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogdHlwZW9mIERlc2lnbmVkT2JqZWN0LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yVHlwZTogdHlwZW9mIEJhc2VQcm9wZXJ0eUVkaXRvcixcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZTogdHlwZW9mIE9iamVjdCB8IHR5cGVvZiBTdHJpbmcpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IGluZm86IFByb3BlcnR5RWRpdG9ySW5mbyA9IHtcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5UGFnZTogcHJvcGVydHlQYWdlLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eUdyb3VwOiBwcm9wZXJ0eUdyb3VwLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eURlc2NyaXB0aW9uOiBwcm9wZXJ0eURlc2NyaXB0aW9uLFxyXG4gICAgLy8gICAgICAgICBvYmplY3RUeXBlOiBvYmplY3RUeXBlLFxyXG4gICAgLy8gICAgICAgICBlZGl0b3JUeXBlOiBlZGl0b3JUeXBlLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eVR5cGU6IHByb3BlcnR5VHlwZSxcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIERlc2lnbmVkT2JqZWN0LnByb3BlcnR5RWRpdG9yc1twcm9wZXJ0eU5hbWVdID0gaW5mbztcclxuICAgIC8vXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlclByb3BlcnR5RWRpdG9yIFwiICsgcHJvcGVydHlOYW1lKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0IHByb3BlcnR5RWRpdG9ycygpOnsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogUHJvcGVydHlFZGl0b3JJbmZvOyB9e1xyXG4gICAgLy8gICAgIHJldHVybiAoRGVzaWduZWRPYmplY3QgYXMgYW55KS4kJHByb3BlcnR5RWRpdG9ycztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9ycygpIHtcclxuICAgIC8vICAgICB0aGlzLnByb3BlcnR5RWRpdG9ycy5sZW5ndGggPSAwO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9yKHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eUVkaXRvcjogQmFzZVByb3BlcnR5RWRpdG9yKSB7XHJcbiAgICAvLyAgICAgcHJvcGVydHlFZGl0b3IuZGVzaWduZWRPYmplY3QgPSB0aGlzO1xyXG4gICAgLy8gICAgIHByb3BlcnR5RWRpdG9yLnByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZTtcclxuICAgIC8vICAgICB0aGlzLnByb3BlcnR5RWRpdG9ycy5wdXNoKHByb3BlcnR5RWRpdG9yKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBlbWl0VHNDb2RlKCk6IHN0cmluZyB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMucmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcnMoKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IHRzQ29kZSA9IG5ldyBUc0NvZGUodGhpcy5tb2R1bGVOYW1lLCB0aGlzLmNsYXNzTmFtZSwgdGhpcy5pbmhlcml0RnJvbSwgdGhpcy5yZWZlcmVuY2VzKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGVkaXRvci5kZXNpZ25lZE9iamVjdCA9IHRoaXM7XHJcbiAgICAvLyAgICAgICAgIGVkaXRvci5lbWl0VHNDb2RlKHRzQ29kZSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiB0c0NvZGUuZ2V0Q29kZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHRlc3RQcm9jMSA9ICgpID0+IHtcclxuXHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0Jhc2VQcm9wZXJ0eUVkaXRvciwgUHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0lucHV0VHlwZSwgSW5wdXR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdQcm9wZXJ0eUVkaXRvciBleHRlbmRzIEJhc2VQcm9wZXJ0eUVkaXRvciB7XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlID09PSBcIiArIHRoaXMucHJvcHMucHJvcGVydHlOYW1lICsgXCIgXCIgKyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGF1dG9Gb3JtQ29udHJvbFByb3BzOiBBdXRvRm9ybUNvbnRyb2xQcm9wcyA9IHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiB0aGlzLnByb3BzLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHRoaXMucHJvcHMuaW5wdXRUYWIsXHJcbiAgICAgICAgICAgIGlucHV0R3JvdXA6IHRoaXMucHJvcHMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5pbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyhhdXRvRm9ybUNvbnRyb2xQcm9wcyk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT17SW5wdXRUeXBlLlRleHR9XHJcbiAgICAgICAgICAgICAgICBiaW5kT2JqZWN0PXt0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPXt0aGlzLnByb3BzLnByb3BlcnR5TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdFZGl0b3JQYXJhbXMgZXh0ZW5kcyBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RyaW5nRWRpdG9yKHBhcmFtczogU3RyaW5nRWRpdG9yUGFyYW1zID0ge30pOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyh7dGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGNvbnN0cjp0YXJnZXQuY29uc3RydWN0b3J9KTtcclxuXHJcbiAgICAgICAgbGV0IHByb3BlcnR5RWRpdG9ySW5mbzogUHJvcGVydHlFZGl0b3JJbmZvID0ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogdGFyZ2V0LmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBlZGl0b3JUeXBlOiBTdHJpbmdQcm9wZXJ0eUVkaXRvcixcclxuICAgICAgICAgICAgcHJvcGVydHlUeXBlOiBTdHJpbmdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBfLmFzc2lnbihwcm9wZXJ0eUVkaXRvckluZm8sIHBhcmFtcyk7XHJcbiAgICAgICAgcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eUVkaXRvckluZm8pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3Ioe1xyXG4gICAgICAgIC8vICAgICBpbnB1dENhcHRpb246IHBhcmFtcy5pbnB1dENhcHRpb24sXHJcbiAgICAgICAgLy8gICAgIGlucHV0VGFiOiBwYXJhbXMuaW5wdXRUYWIsXHJcbiAgICAgICAgLy8gICAgIGlucHV0R3JvdXA6IHBhcmFtcy5pbnB1dEdyb3VwLFxyXG4gICAgICAgIC8vICAgICBpbnB1dERlc2NyaXB0aW9uOiBwYXJhbXMuaW5wdXREZXNjcmlwdGlvbixcclxuICAgICAgICAvLyAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgb2JqZWN0VHlwZTogdGFyZ2V0LmNvbnN0cnVjdG9yLFxyXG4gICAgICAgIC8vICAgICBlZGl0b3JUeXBlOiBTdHJpbmdQcm9wZXJ0eUVkaXRvcixcclxuICAgICAgICAvLyAgICAgcHJvcGVydHlUeXBlOiBTdHJpbmdcclxuICAgICAgICAvLyB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3IudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlFZGl0b3JJbmZvIGV4dGVuZHMgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICBvYmplY3RUeXBlOiB0eXBlb2YgRGVzaWduZWRPYmplY3Q7XHJcbiAgICBlZGl0b3JUeXBlOiB0eXBlb2YgQmFzZVByb3BlcnR5RWRpdG9yO1xyXG4gICAgcHJvcGVydHlUeXBlOiB0eXBlb2YgT2JqZWN0IHwgdHlwZW9mIFN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4sIFByb3BlcnR5RWRpdG9ySW5mbyB7XHJcbiAgICBkZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VQcm9wZXJ0eUVkaXRvciBleHRlbmRzIENvbXBvbmVudDxCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQmFzZVByb3BlcnR5RWRpdG9yUHJvcHMsIGNvbnRleHQ6YW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gICAgLy8gZGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG5cclxuICAgIC8vIGdldFByb3BlcnR5VHlwZSgpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiBcIk9iamVjdFwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHJlbmRlckVkaXRvcihpbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG4gICAgLy8gICAgIHJldHVybiAoPHNwYW4+ZWRpdG9yIG5vdCBkZWZpbmVkPC9zcGFuPik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gKDxzcGFuPnByb3BlcnR5IGVkaXRvciBub3QgZGVmaW5lZDwvc3Bhbj4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBlbWl0VHNDb2RlKHRzQ29kZTogVHNDb2RlLCBhc3NpZ25OYW1lOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICB0c0NvZGUuYWRkUHJvcGVydHkoYXNzaWduTmFtZSwgdGhpcy5wcm9wZXJ0eU5hbWUsIHRoaXMuZ2V0UHJvcGVydHlUeXBlKCksIHRoaXMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wZXJ0eU5hbWVdKTtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3IudHN4XG4gKiovIiwiaW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclByb3BlcnR5RWRpdG9yKGVkaXRvcjogUHJvcGVydHlFZGl0b3JJbmZvKSB7XHJcblxyXG4gICAgbGV0IG9ialR5cGU6IGFueSA9IGVkaXRvci5vYmplY3RUeXBlO1xyXG5cclxuICAgIGlmICghb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycylcclxuICAgICAgICBvYmpUeXBlLiQkcHJvcGVydHlFZGl0b3JzID0gW107XHJcblxyXG4gICAgb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycy5wdXNoKGVkaXRvcik7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcInJlZ2lzdGVyUHJvcGVydHlFZGl0b3IgXCIgKyBlZGl0b3IucHJvcGVydHlOYW1lKTtcclxuICAgIC8vY29uc29sZS5sb2coZWRpdG9yKTtcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3IudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuZXhwb3J0IGVudW0gSW5wdXRUeXBlIHtUZXh0LCBOdW1iZXIsIERhdGUgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiwgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgdHlwZTogSW5wdXRUeXBlO1xyXG4gICAgYmluZE9iamVjdDogYW55O1xyXG4gICAgYmluZFByb3BOYW1lOiBzdHJpbmc7XHJcbiAgICBtYXhXaWR0aD86IG51bWJlcjtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxuICAgIHBsYWNlSG9sZGVyPzogc3RyaW5nO1xyXG4gICAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50PElucHV0UHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElucHV0UHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSW5wdXRUeXBlLlRleHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZXh0KCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAgXCJJbnB1dC5yZW5kZXIoKTo9PiB1bmtub3duIElucHV0VHlwZSAnXCIgKyB0aGlzLnByb3BzLnR5cGUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJpbmRPYmplY3QgJiYgdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdFt0aGlzLnByb3BzLmJpbmRQcm9wTmFtZV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gXCI8dW5iaW5kZWQ+XCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJpbmRPYmplY3QgJiYgdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmluZE9iamVjdFt0aGlzLnByb3BzLmJpbmRQcm9wTmFtZV0gPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWU7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJUZXh0KCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXModGhpcy5wcm9wcy5zdHlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0VGV4dCgpfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7QmFzZVByb3BlcnR5RWRpdG9yUHJvcHMsIFByb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtnZXRQcm9wZXJ0eUVkaXRvcnN9IGZyb20gXCIuLi9Qcm9wZXJ0eUVkaXRvcnMvZ2V0UHJvcGVydHlFZGl0b3JzXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHtBdXRvRm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge1NuYXBzaG90fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9TbmFwc2hvdFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtEZWVwQ2xvbmV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0RlZXBDbG9uZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0RGVzaWduZXJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgZGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG4gICAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25TYXZlQ2hhbmdlcz86ICgpID0+IHZvaWQ7XHJcbiAgICBvbkNhbmNlbENoYW5nZXM/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0RGVzaWduZXIgZXh0ZW5kcyBDb21wb25lbnQ8T2JqZWN0RGVzaWduZXJQcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogT2JqZWN0RGVzaWduZXJQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgc25hcHNob3Q6IFNuYXBzaG90ID0gbmV3IFNuYXBzaG90KCk7XHJcblxyXG4gICAgbmVlZFRvU2F2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY2xvbmVkRGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG4gICAgb2JzZXJ2YWJsZURlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMubmVlZFRvU2F2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNsb25lZERlc2lnbmVkT2JqZWN0ID0gRGVlcENsb25lPERlc2lnbmVkT2JqZWN0Pih0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbG9uZWRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jbG9uZWREZXNpZ25lZE9iamVjdCk7XHJcblxyXG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZURlc2lnbmVkT2JqZWN0ID0gT2JzZXJ2YWJsZTxEZXNpZ25lZE9iamVjdD4odGhpcy5jbG9uZWREZXNpZ25lZE9iamVjdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5lZWRUb1NhdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLmRpZE1vdW50KCk7XHJcbiAgICAgICAgLy90aGlzLnNuYXBzaG90LnNhdmVPYmplY3QodGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCwgXCJyb290XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb3BlcnR5RGVzaWduZXJzKCk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgZ2V0UHJvcGVydHlFZGl0b3JzKHRoaXMub2JzZXJ2YWJsZURlc2lnbmVkT2JqZWN0KS5mb3JFYWNoKChwcm9wSW5mbzogUHJvcGVydHlFZGl0b3JJbmZvLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocHJvcEluZm8pO1xyXG4gICAgICAgICAgICBsZXQgZWRpdG9yUHJvcHM6IEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzICYgUHJvcGVydHlFZGl0b3JJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgZGVzaWduZWRPYmplY3Q6IHRoaXMub2JzZXJ2YWJsZURlc2lnbmVkT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgLy9wcm9wZXJ0eUVkaXRvckluZm86IHByb3BJbmZvLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vINGN0YLQviDQuNC3IHByb3BJbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8sINC30LDQv9C+0LvRj9C10YLRgdGPINC00LDQu9C10LUg0YfQtdGA0LXQtyBfLmFzc2lnblxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVkaXRvclR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIF8uYXNzaWduKGVkaXRvclByb3BzLCBwcm9wSW5mbyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVkaXRvclByb3BzLmlucHV0Q2FwdGlvbilcclxuICAgICAgICAgICAgICAgIGVkaXRvclByb3BzLmlucHV0Q2FwdGlvbiA9IGVkaXRvclByb3BzLnByb3BlcnR5TmFtZTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlZGl0b3JQcm9wcyk7XHJcblxyXG4gICAgICAgICAgICByZXQucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BJbmZvLmVkaXRvclR5cGUsIGVkaXRvclByb3BzLCBudWxsKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2F2ZUNoYW5nZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYXZlLWNoYW5nZXNcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0KTtcclxuICAgICAgICBfLmFzc2lnbih0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0LCB0aGlzLm9ic2VydmFibGVEZXNpZ25lZE9iamVjdCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TYXZlQ2hhbmdlcylcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNhdmVDaGFuZ2VzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbmNlbENoYW5nZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW5jZWwtY2hhbmdlc1wiKTtcclxuICAgICAgICAvL3RoaXMuc25hcHNob3QucmVzdG9yZU9iamVjdCh0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0LCBcInJvb3RcIik7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DYW5jZWxDaGFuZ2VzKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsQ2hhbmdlcygpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGFuZGxlR2V0TmVlZFRvU2F2ZSA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5uZWVkVG9TYXZlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIm9iamVjdC1kZXNpZ25lclwiKTtcclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZX0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXV0b0Zvcm1cclxuICAgICAgICAgICAgICAgIHNpemVUbz1cInBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICBvblNhdmVDaGFuZ2VzPXt0aGlzLmhhbmRsZVNhdmVDaGFuZ2VzfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWxDaGFuZ2VzPXt0aGlzLmhhbmRsZUNhbmNlbENoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICBuZWVkVG9TYXZlPXt0aGlzLm5lZWRUb1NhdmV9XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIE9iamVjdCBkZXNpZ25lclxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUHJvcGVydHlEZXNpZ25lcnMoKX1cclxuICAgICAgICAgICAgPC9BdXRvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXIudHN4XG4gKiovIiwiaW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eUVkaXRvcnMob2JqOiBEZXNpZ25lZE9iamVjdCk6IFByb3BlcnR5RWRpdG9ySW5mb1tdIHtcclxuXHJcbiAgICBsZXQgZWRpdG9ycyA9IChvYmouY29uc3RydWN0b3IgYXMgYW55KS4kJHByb3BlcnR5RWRpdG9ycyBhcyBQcm9wZXJ0eUVkaXRvckluZm9bXTtcclxuXHJcbiAgICBlZGl0b3JzID0gZWRpdG9ycy5maWx0ZXIoKGVkdCkgPT4gb2JqIGluc3RhbmNlb2YgZWR0Lm9iamVjdFR5cGUpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJnZXRQcm9wZXJ0eUVkaXRvcnNcIikgO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3JzKTtcclxuICAgIHJldHVybiBlZGl0b3JzO1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvZ2V0UHJvcGVydHlFZGl0b3JzLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGFicywgVGFifSBmcm9tIFwiLi4vVGFicy9UYWJzXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uL0Zvcm0vRm9ybVwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5pbXBvcnQge0ZpeGVkfSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uL0J1dHRvbi9CdXR0b25cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuICAgIGlucHV0Q2FwdGlvbj86IHN0cmluZztcclxuICAgIGlucHV0VGFiPzogc3RyaW5nO1xyXG4gICAgaW5wdXRHcm91cD86IHN0cmluZztcclxuICAgIGlucHV0RGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b0Zvcm1Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgaW5wdXRzPzogQXV0b0Zvcm1Db250cm9sUHJvcHNbXTtcclxuICAgIHNpemVUbzogXCJwYXJlbnRcIiB8IFwiY29udGVudFwiO1xyXG4gICAgbmVlZFRvU2F2ZT86IGJvb2xlYW47XHJcbiAgICBvblNhdmVDaGFuZ2VzPzogKCkgPT4gdm9pZDtcclxuICAgIG9uQ2FuY2VsQ2hhbmdlcz86ICgpID0+IHZvaWQ7XHJcbiAgICAvL29uR2V0TmVlZFRvU2F2ZT86ICgpID0+IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGVtcHR5VGFiTmFtZSA9IFwi0LfQsNC60LvQsNC00LrQsFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9Gb3JtIGV4dGVuZHMgQ29tcG9uZW50PEF1dG9Gb3JtUHJvcHMsIGFueT4ge1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldElucHV0cygpOiBBdXRvRm9ybUNvbnRyb2xQcm9wc1tdIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChjOiBhbnkpID0+IGMucHJvcHMpXHJcbiAgICAgICAgICAgIC5tYXAoKGM6IGFueSkgPT4gYy5wcm9wcykgYXMgQXV0b0Zvcm1Db250cm9sUHJvcHNbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYnNMaXN0KCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gXy51bmlxKFxyXG4gICAgICAgICAgICB0aGlzLmdldElucHV0cygpLm1hcDxzdHJpbmc+KChpbnB1dDogQXV0b0Zvcm1Db250cm9sUHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnB1dFRhYiB8fCBcIlwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYWJJbnB1dHModGFiOiBzdHJpbmcpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChjOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjLnByb3BzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKCgoYy5wcm9wcyBhcyBBdXRvRm9ybUNvbnRyb2xQcm9wcykuaW5wdXRUYWIgfHwgXCJcIikgPT09IHRhYik7XHJcbiAgICAgICAgICAgIH0pIGFzIEpTWC5FbGVtZW50W107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJUYWIodGFiOiBzdHJpbmcpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxGb3JtIHNpemVUbz17dGhpcy5wcm9wcy5zaXplVG99Pnt0aGlzLmdldFRhYklucHV0cyh0YWIpfTwvRm9ybT47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAgcmVuZGVyVGFicygpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IHRhYnMgPSB0aGlzLmdldFRhYnNMaXN0KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YWJzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2V0SW5wdXRzKCkpO1xyXG5cclxuICAgICAgICBpZiAodGFicy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRhYnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhYih0YWJzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVUbz1cInBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25XaWxsTW91bnQ9eyAoc3RhdGUpID0+IHsgY29uc29sZS5sb2coXCJvbldpbGxNb3VudC1hdXRvLWZvcm0tdGFic1wiKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUFjdGl2ZVRhYj17IChzdGF0ZSwgdGFiKSA9PiB7IGNvbnNvbGUubG9nKFwic2V0QWN0aXZlVGFiXCIpO2NvbnNvbGUubG9nKHRhYik7fX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7IHRhYnMubWFwPEpTWC5FbGVtZW50PigodGFiLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBrZXk9e2luZGV4fSB0aXRsZT17dGFiID09PSBcIlwiID8gZW1wdHlUYWJOYW1lIDogdGFifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWIodGFiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2F2ZUJ1dHRvbkNsaWNrID0gKHNlbmRlcjogQnV0dG9uLCBlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TYXZlQ2hhbmdlcylcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNhdmVDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRXaW5kb3coKS5jbG9zZSgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrID0gKHNlbmRlcjogQnV0dG9uLCBlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DYW5jZWxDaGFuZ2VzKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsQ2hhbmdlcygpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50V2luZG93KCkuY2xvc2UoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImF1dG8tZm9ybVwiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItYXV0by1mb3JtXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGU6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJjb2x1bW5cIiBzaXplVG89XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwiYXV0by1mb3JtLWZvb3RlclwiIHR5cGU9XCJyb3dcIiBzaXplVG89XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2aXNpYmxlPXsgdGhpcy5wcm9wcy5uZWVkVG9TYXZlIH0gY2xhc3NOYW1lPVwiaXMtc3VjY2VzcyBpcy1vdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5oYW5kbGVTYXZlQnV0dG9uQ2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDYW5jZWxCdXR0b25DbGljayB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uZWVkVG9TYXZlID8gXCLQntGC0LzQtdC90LBcIiA6IFwi0JfQsNC60YDRi9GC0YxcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYnNQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPFRhYnNTdGF0ZT4ge1xyXG4gICAgb25DaGFuZ2VBY3RpdmVUYWI/OiAoc3RhdGU6IFRhYnNTdGF0ZSwgYWN0aXZlVGFiOiBUYWJJbmZvKSA9PiB2b2lkO1xyXG4gICAgc2l6ZVRvOiBcInBhcmVudFwiIHwgXCJjb250ZW50XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJzU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxUYWJzUHJvcHM+IHtcclxuICAgIHRhYnM6IFRhYkluZm9bXSA9IFtdO1xyXG5cclxuICAgIHNldEFjdGl2ZVRhYih0YWJJbmZvOiBUYWJJbmZvKSB7XHJcbiAgICAgICAgaWYgKCF0YWJJbmZvLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpPT50YWIuaXNBY3RpdmUgPSBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRhYkluZm8uaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50LnByb3BzLm9uQ2hhbmdlQWN0aXZlVGFiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucHJvcHMub25DaGFuZ2VBY3RpdmVUYWIodGhpcywgdGFiSW5mbyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFiSW5mbyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50PFRhYnNQcm9wcywgVGFic1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVGFic1Byb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgVGFic1N0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlSW5pdFRhYnNTdGF0ZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHRhYlRhZ3MgPSB0aGlzLmdldENoaWxkcmVuKFRhYik7XHJcblxyXG4gICAgICAgIHRhYlRhZ3MuZm9yRWFjaCgodGFiVGFnLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhYlByb3BzID0gdGFiVGFnLnByb3BzIGFzIFRhYlByb3BzO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhYkluZm86IFRhYkluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGFiUHJvcHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0YWJQcm9wcy5jaGlsZHJlbixcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBpbmRleCA9PT0gMFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRhYnMucHVzaCh0YWJJbmZvKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUluaXRUYWJzU3RhdGUoKTtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHRhYlRhZ3MgPSB0aGlzLmdldENoaWxkcmVuKFRhYik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB0YWJUYWdzLmZvckVhY2goKHRhYlRhZywgaW5kZXgpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgdGFiUHJvcHMgPSB0YWJUYWcucHJvcHMgYXMgVGFiUHJvcHM7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IHRhYkluZm86IFRhYkluZm8gPSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aXRsZTogdGFiUHJvcHMudGl0bGUsXHJcbiAgICAgICAgLy8gICAgICAgICBjb250ZW50OiB0YWJQcm9wcy5jaGlsZHJlbixcclxuICAgICAgICAvLyAgICAgICAgIGlzQWN0aXZlOiBpbmRleCA9PT0gMFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgdGhpcy50YWJzLnB1c2godGFiSW5mbyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBvcGVuV2luZG93KHdpbjogSlNYLkVsZW1lbnQpOiBXaW5kb3dJbmZvIHtcclxuICAgIC8vICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vICAgICBtb2RhbC5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDEyKTtcclxuICAgIC8vICAgICAvLyDQtNC70Y8g0L/QvtC00L3Rj9GC0LjRjyDQstCy0LXRgNGFINC/0YDQuCDQsNC60YLQuNCy0LDRhtC40Lgg0L7QutC90LBcclxuICAgIC8vICAgICBtb2RhbC5vbmNsaWNrID0gKGUpPT4ge1xyXG4gICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKG1vZGFsLmlkICE9PSBcImRlbGV0ZWRcIilcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgLy8gICAgICAgICB9LCAxKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCB3aW5JbnN0YW5jZSA9IFJlYWN0RE9NLnJlbmRlcih3aW4sIG1vZGFsKSBhcyBXaW5kb3c7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCBpbmZvOiBXaW5kb3dJbmZvID0ge1xyXG4gICAgLy8gICAgICAgICBpZDogbW9kYWwuaWQsXHJcbiAgICAvLyAgICAgICAgIHdpbkluc3RhbmNlOiB3aW5JbnN0YW5jZSxcclxuICAgIC8vICAgICAgICAgZGl2V3JhcHBlcjogbW9kYWxcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLndpbmRvd3MucHVzaChpbmZvKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIGluZm87XHJcbiAgICAvLyB9O1xyXG4gICAgLy9cclxuICAgIC8vIGNsb3NlV2luZG93KHdpbjogV2luZG93KSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMud2luZG93cy5mb3JFYWNoKChpbmZvLCBpbmRleCk9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbmZvLndpbkluc3RhbmNlID09PSB3aW4pIHtcclxuICAgIC8vICAgICAgICAgICAgIGluZm8uZGl2V3JhcHBlci5pZCA9IFwiZGVsZXRlZFwiO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKGluZm8uZGl2V3JhcHBlcik7XHJcbiAgICAvLyAgICAgICAgICAgICBkZWxldGUgdGhpcy53aW5kb3dzW2luZGV4XTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFjdGl2YXRlV2luZG93KHdpbjogV2luZG93KSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMud2luZG93cy5mb3JFYWNoKChpbmZvLCBpbmRleCk9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbmZvLndpbkluc3RhbmNlID09PSB3aW4pIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChpbmZvLmRpdldyYXBwZXIpO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHJlbmRlclRhYnMoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgbGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnRhYnMuZm9yRWFjaCgodGFiSW5mbzogVGFiSW5mbywgaW5kZXg6IG51bWJlcik9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGFiSW5mby5pc0FjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17aW5kZXh9IG9uQ2xpY2s9eyAoZSk9PnsgdGhpcy5zdGF0ZS5zZXRBY3RpdmVUYWIodGFiSW5mbyl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57dGFiSW5mby50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBsaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQYW5lbHMoKTogSlNYLkVsZW1lbnRbXSB7XHJcblxyXG4gICAgICAgIGxldCBsaXN0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudGFicy5mb3JFYWNoKCh0YWJJbmZvOiBUYWJJbmZvLCBpbmRleDogbnVtYmVyKT0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdHlsZTogYW55ID0ge3BhZGRpbmdUb3A6IDEwLCBwYWRkaW5nQm90dG9tOiAxMH07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNpemVUbyA9PT0gXCJwYXJlbnRcIilcclxuICAgICAgICAgICAgICAgIHN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICF0YWJJbmZvLmlzQWN0aXZlID8gXCJpcy1oaWRkZW5cIiA6IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhYkluZm8uY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBsaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG5cclxuICAgICAgICAvLyByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgICA8ZGl2IHJlZj5cclxuICAgICAgICAvLyAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAvLyApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImF1dG9cIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHNpemVUbz17dGhpcy5wcm9wcy5zaXplVG99IHR5cGU9XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlOiBhbnkpID0+IHsgdGhpcy5uYXRpdmVFbGVtZW50ID0gZTsgfSB9IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYnMoKX1cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQYW5lbHMoKX1cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFiUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYiBleHRlbmRzIENvbXBvbmVudDxUYWJQcm9wcyxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUYWJQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtJbnB1dERpdmlkZXJ9IGZyb20gXCIuLi9JbnB1dERpdmlkZXIvSW5wdXREaXZpZGVyXCI7XHJcbmltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcbmltcG9ydCB7SW5wdXRQcm9wc30gZnJvbSBcIi4uL0lucHV0L0lucHV0XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgc2l6ZVRvOiBcInBhcmVudFwiIHwgXCJjb250ZW50XCI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudDxGb3JtUHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEZvcm1Qcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyQ29udHJvbHMoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IGxpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKChjb250cm9sOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29udHJvbFByb3BzID0gY29udHJvbC5wcm9wcyBhcyBJbnB1dFByb3BzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sUHJvcHMgJiYgKGNvbnRyb2xQcm9wcy5pbnB1dENhcHRpb24gfHwgY29udHJvbFByb3BzLmJpbmRQcm9wTmFtZSkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjb250cm9sLnR5cGUgPT09IElucHV0RGl2aWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklucHV0RGl2aWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbnRyb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntjb250cm9sUHJvcHMuaW5wdXRDYXB0aW9uID8gY29udHJvbFByb3BzLmlucHV0Q2FwdGlvbiA6IGNvbnRyb2xQcm9wcy5iaW5kUHJvcE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbnRyb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMTBcIiBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImZvcm1cIik7XHJcbiAgICAgICAgLy90aGlzLmFkZFN0eWxlcyh7bWFyZ2luOjEwfSk7XHJcblxyXG4gICAgICAgIGlmIChSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmxlbmd0aCA9PT0gMSkgeyAvLyDQvtC00LjQvSDQutC+0L3RgtGA0L7QuyDQsiDRhNC+0YDQvNC1LCDQvtCx0YvRh9C90L4gdHJlZWxpc3RcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNpemVUbz09PVwicGFyZW50XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHsgd2lkdGg6IFwiaW5oZXJpdFwifSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIHJlZj17IChlKSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH0gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udHJvbHMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtWaXNpYmxlUGx1Z2luLCBWaXNpYmxlUGx1Z2luUHJvcHMsIFZpc2libGVQbHVnaW5TdGF0ZX0gZnJvbSBcIi4uLy4uL1BsdWdpbnMvVmlzaWJsZVBsdWdpblwiO1xyXG5pbXBvcnQge09uQ2xpY2tQbHVnaW4sIE9uQ2xpY2tQbHVnaW5Qcm9wc30gZnJvbSBcIi4uLy4uL1BsdWdpbnMvT25DbGlja1BsdWdpblwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8QnV0dG9uU3RhdGU+LCBWaXNpYmxlUGx1Z2luUHJvcHMsIE9uQ2xpY2tQbHVnaW5Qcm9wcyB7XHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxCdXR0b25Qcm9wcz4gaW1wbGVtZW50cyBWaXNpYmxlUGx1Z2luU3RhdGUge1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuLy9AVmlzaWJsZVBsdWdpblxyXG4vL0BPbkNsaWNrUGx1Z2luXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQ8QnV0dG9uUHJvcHMsIEJ1dHRvblN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQnV0dG9uUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBCdXR0b25TdGF0ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChuZXcgVmlzaWJsZVBsdWdpbih0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLnB1c2gobmV3IE9uQ2xpY2tQbHVnaW4odGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGEgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeFxuICoqLyIsImltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi9QbHVnaW5cIjtcclxuaW1wb3J0IHtDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZpc2libGVQbHVnaW5Qcm9wcyB7XHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcclxuICAgIGRlZmF1bHRWaXNpYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaXNpYmxlUGx1Z2luU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxWaXNpYmxlUGx1Z2luUHJvcHM+IHtcclxuICAgIHZpc2libGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZpc2libGVQbHVnaW4gZXh0ZW5kcyBDb21wb25lbnRQbHVnaW48VmlzaWJsZVBsdWdpblByb3BzLCBWaXNpYmxlUGx1Z2luU3RhdGU+IHtcclxuICAgIC8vIGNvbnN0cnVjdG9yKG93bmVyOiBhbnkpIHtcclxuICAgIC8vICAgICBzdXBlcihvd25lcik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ2aXNpYmxlIHdpbGxNb3VudCgpXCIpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzLmRlZmF1bHRWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlZpc2libGVQbHVnaW46IG9ubHkgb25lIG9mIHRoZSBwcm9wZXJ0aWVzIG11c3QgYmUgc3BlY2lmaWVkICd2aXNpYmxlJyBvciAnZGVmYXVsdFZpc2libGUnXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRoaXMucHJvcHMudmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5kZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRoaXMucHJvcHMuZGVmYXVsdFZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5vd25lci50b2dnbGVDbGFzc05hbWUoIXRoaXMuc3RhdGUudmlzaWJsZSwgXCJpcy1oaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFZpc2libGVQbHVnaW5Qcm9wcykge1xyXG4gICAgICAgIC8vbGV0IHN0YXRlID0gdGhpcy5vd25lci5zdGF0ZSBhcyBWaXNpYmxlUGx1Z2luU3RhdGU7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy52aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gbmV4dFByb3BzLnZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm93bmVyLnRvZ2dsZUNsYXNzTmFtZSghdGhpcy5zdGF0ZS52aXNpYmxlLCBcImlzLWhpZGRlblwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBWaXNpYmxlUGx1Z2luKHRhcmdldDogYW55KSB7XHJcbi8vICAgICB0YXJnZXQucGx1Z2lucy5wdXNoKFZpc2libGVQbHVnaW5DbGFzcyk7XHJcbi8vICAgICByZXR1cm4gdGFyZ2V0O1xyXG4vLyB9XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL1Zpc2libGVQbHVnaW4udHNcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQbHVnaW48UCxTIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8UD4+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb3duZXI6IENvbXBvbmVudDxQLCBTPikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaWRNb3VudCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB3aWxsTW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFVubW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFApIHtcclxuICAgIH1cclxuXHJcbiAgICBkaWRVcGRhdGUocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdGUoKTogUyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXIuc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BzKCk6IFAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyLnByb3BzO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvUGx1Z2luLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi9QbHVnaW5cIjtcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgb25DbGlja0V2ZW50ID0gKHNlbmRlcjogQ29tcG9uZW50PGFueSxhbnk+LCBldmVudDogUmVhY3QuTW91c2VFdmVudCk9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPbkNsaWNrUGx1Z2luUHJvcHMge1xyXG4gICAgb25DbGljaz86IG9uQ2xpY2tFdmVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9uQ2xpY2tQbHVnaW4gZXh0ZW5kcyBDb21wb25lbnRQbHVnaW48T25DbGlja1BsdWdpblByb3BzLCBhbnk+IHtcclxuXHJcbiAgICBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMub3duZXIsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMub3duZXIuYWRkUHJvcHMoe29uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogT25DbGlja1BsdWdpblByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIHRoaXMub3duZXIuYWRkUHJvcHMoe29uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL09uQ2xpY2tQbHVnaW4udHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8vINC+0LHRitC10LrRgiDQvNC+0LbQtdGCINC40LzQtdGC0Ywg0LzQsNGB0YHQuNCy0Ys6XHJcbi8vICQkdW5zYXZlZFByb3BzIC0g0LjQvNC10L3QsCDRgdCy0L7QudGB0YLQsiwg0LrQvtGC0L7RgNGL0LUg0L3QtSDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPXHJcbi8vICQkc2F2ZWRCeVJlZlByb3BzIC0g0LjQvNC10L3QsCDRgdCy0L7QudGB0YLQsiwg0LrQvtGC0L7RgNGL0LUg0YHQvtGF0YDQsNC90Y/RjtGC0YHRjyDQutCw0Log0YHRgdGL0LvQutC4XHJcbi8vINC90LUg0YHQvtGF0YDQsNC90Y/RjtGC0YHRjyDRgdCy0L7QudGB0YLQstCwLCDQutC+0YLQvtGA0YvQtSDQvdCw0YfQuNC90LDRjtGC0YHRjyDRgSAkJFxyXG5leHBvcnQgY2xhc3MgU25hcHNob3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNuYXBzaG90czogSW50ZXJuYWxTbmFwc2hvdFtdID0gW107XHJcblxyXG4gICAgc2F2ZU9iamVjdChvYmo6IE9iamVjdCB8IEFycmF5PGFueT4sIHNuYXBzaG90TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHNuYXAgPSBuZXcgSW50ZXJuYWxTbmFwc2hvdCgpO1xyXG4gICAgICAgIHNuYXAub2JqID0gb2JqO1xyXG4gICAgICAgIHNuYXAuc25hcHNob3ROYW1lID0gc25hcHNob3ROYW1lO1xyXG4gICAgICAgIHNuYXAuc2F2ZVByb3BzKCk7XHJcbiAgICAgICAgdGhpcy5zbmFwc2hvdHMucHVzaChzbmFwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlT2JqZWN0KG9iajogT2JqZWN0IHwgQXJyYXk8YW55Piwgc25hcHNob3ROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc25hcCA9IHRoaXMuZ2V0SW50ZXJuYWxTbmFwc2hvdChvYmosIHNuYXBzaG90TmFtZSk7XHJcbiAgICAgICAgaWYgKHNuYXApIHtcclxuICAgICAgICAgICAgaWYgKF8uaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIHNuYXAuYXJyYXlFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBvYmoucHVzaChlbGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzbmFwLm9ialByb3BzLmZvckVhY2goKHByb3ApID0+IHByb3AucmVzdG9yZVZhbHVlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEludGVybmFsU25hcHNob3Qob2JqOiBPYmplY3QgfCBBcnJheTxhbnk+LCBzbmFwc2hvdE5hbWU6IHN0cmluZyk6IEludGVybmFsU25hcHNob3Qge1xyXG4gICAgICAgIGxldCByZXQgPSB0aGlzLnNuYXBzaG90cy5maWx0ZXIoKHNuYXApID0+IHNuYXAub2JqID09PSBvYmogJiYgc25hcC5zbmFwc2hvdE5hbWUgPT09IHNuYXBzaG90TmFtZSk7XHJcbiAgICAgICAgaWYgKHJldC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNuYXBzaG90ICdcIiArIHNuYXBzaG90TmFtZSArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiByZXRbMF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEludGVybmFsU25hcHNob3Qge1xyXG4gICAgb2JqOiBhbnk7XHJcbiAgICBzbmFwc2hvdE5hbWU6IHN0cmluZztcclxuICAgIG9ialByb3BzOiBTbmFwc2hvdFByb3BlcnR5W10gPSBbXTtcclxuICAgIGFycmF5RWxlbWVudHM6IGFueVtdO1xyXG4gICAgcmVmc0Nsb25lczogYW55ID0ge307XHJcblxyXG4gICAgc2F2ZVByb3BzKCkge1xyXG4gICAgICAgIGlmIChfLmlzQXJyYXkodGhpcy5vYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyYXlFbGVtZW50cyA9IHRoaXMub2JqLm1hcCgodjogYW55KSA9PiB0aGlzLmNsb25lVmFsdWUodikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYmpQcm9wcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiB0aGlzLm9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5zdWJzdHJpbmcoMCwgMikgIT09IFwiJCRcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IG5ldyBTbmFwc2hvdFByb3BlcnR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5wcm9wTmFtZSA9IHByb3BOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHAuc25hcHNob3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHAuc2F2ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpQcm9wcy5wdXNoKHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb25lVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLm9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcCgodjogYW55KSA9PiB0aGlzLmNsb25lVmFsdWUodikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfLmlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXy5pc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgLy9sZXQgcmVmc0luZGV4ID0gdGhpcy5zbmFwc2hvdC5yZWZzLmluZGV4T2YodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuJCR1bmlxdWVPYmplY3RJZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnNDbG9uZXNbdmFsdWUuJCR1bmlxdWVPYmplY3RJZF07XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWVDb3B5ID0gbmV3IHZhbHVlLmNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIHZhbHVlQ29weS4kJGlzQ2xvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YWx1ZS4kJHVuaXF1ZU9iamVjdElkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTYpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnNDbG9uZXNbdmFsdWUuJCR1bmlxdWVPYmplY3RJZF0gPSB2YWx1ZUNvcHk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5zdWJzdHJpbmcoMCwgMikgIT09IFwiJCRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQ29weVtwcm9wTmFtZV0gPSB0aGlzLmNsb25lVmFsdWUodmFsdWVbcHJvcE5hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVDb3B5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU25hcHNob3RQcm9wZXJ0eSB7XHJcbiAgICBzbmFwc2hvdDogSW50ZXJuYWxTbmFwc2hvdDtcclxuICAgIHByb3BOYW1lOiBzdHJpbmc7XHJcbiAgICBwcm9wVmFsdWU6IGFueTtcclxuXHJcbiAgICBzYXZlVmFsdWUoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wVmFsdWUgPSB0aGlzLnNuYXBzaG90LmNsb25lVmFsdWUodGhpcy5zbmFwc2hvdC5vYmpbdGhpcy5wcm9wTmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVWYWx1ZSgpIHtcclxuICAgICAgICB0aGlzLnNuYXBzaG90Lm9ialt0aGlzLnByb3BOYW1lXSA9IHRoaXMucHJvcFZhbHVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU25hcHNob3QudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIE9ic2VydmFibGVPbkNoYW5nZUhhbmRsZXI8VD49ICh0YXJnZXQ6IGFueSwgcDogUHJvcGVydHlLZXksIG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcblxyXG4vLyDQvdC1INGB0L7RhdGA0LDQvdGP0Y7RgtGB0Y8g0YHQstC+0LnRgdGC0LLQsCwg0LrQvtGC0L7RgNGL0LUg0L3QsNGH0LjQvdCw0Y7RgtGB0Y8g0YEgJCRcclxuZXhwb3J0IGZ1bmN0aW9uIE9ic2VydmFibGU8VCBleHRlbmRzIERlc2lnbmVkT2JqZWN0PihvYmo6IERlc2lnbmVkT2JqZWN0LCBvbkNoYW5nZUNhbGxiYWNrPzogT2JzZXJ2YWJsZU9uQ2hhbmdlSGFuZGxlcjxUPik6IFQge1xyXG4gICAgaWYgKCFvYmopXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICBsZXQgcHJveHlIYW5kbGVyID0ge1xyXG4gICAgICAgIHNldDogKHRhcmdldDogVCwgcDogUHJvcGVydHlLZXksIHZhbHVlOiBhbnksIHJlY2VpdmVyOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocC50b1N0cmluZygpLnN1YnN0cigwLCAyKSAhPT0gXCIkJFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC4kJGNoYW5nZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC4kJGNoYW5nZUNvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuJCRjaGFuZ2VDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC4kJG9uQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC4kJG9uQ2hhbmdlKHRhcmdldCwgcCwgdGFyZ2V0W3BdLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib2JzZXJ2YWJsZSBzZXQgXCIgKyBwLnRvU3RyaW5nKCkgKyBcIiwgICB2YWx1ZTogXCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJvY2Vzc09iamVjdChvYmosIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICBsZXQgb2JzZXJ2YWJsZU9iamVjdCA9IG5ldyBQcm94eShvYmosIHByb3h5SGFuZGxlcikgYXMgVDtcclxuXHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9iamVjdDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NPYmplY3Qob2JqOiBhbnksIHByb3h5SGFuZGxlcjogYW55LCBvbkNoYW5nZUNhbGxiYWNrOiBPYnNlcnZhYmxlT25DaGFuZ2VIYW5kbGVyPGFueT4pIHtcclxuICAgIGlmICghb2JqKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICBvYmouJCRvbkNoYW5nZSA9IG9uQ2hhbmdlQ2FsbGJhY2s7XHJcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5zdWJzdHJpbmcoMCwgMikgIT09IFwiJCRcIikge1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb3BWYWx1ZTogYW55ID0gb2JqW3Byb3BOYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLmlzQXJyYXkocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcFZhbHVlLiQkY2hhbmdlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0FycmF5KHByb3BWYWx1ZSwgcHJveHlIYW5kbGVyLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIG9ialtwcm9wTmFtZV0gPSBuZXcgUHJveHkocHJvcFZhbHVlLCBwcm94eUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKF8uaXNPYmplY3QocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcFZhbHVlLiQkY2hhbmdlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc09iamVjdChwcm9wVmFsdWUsIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICBvYmpbcHJvcE5hbWVdID0gbmV3IFByb3h5KHByb3BWYWx1ZSwgcHJveHlIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NBcnJheShvYmo6IGFueVtdLCBwcm94eUhhbmRsZXI6IGFueSwgb25DaGFuZ2VDYWxsYmFjazogT2JzZXJ2YWJsZU9uQ2hhbmdlSGFuZGxlcjxhbnk+KSB7XHJcbiAgICBpZiAoIW9iailcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgKG9iaiBhcyBhbnkpLiQkb25DaGFuZ2UgPSBvbkNoYW5nZUNhbGxiYWNrO1xyXG5cclxuICAgIG9iai5mb3JFYWNoKChhcnJheUl0ZW0sIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChfLmlzQXJyYXkoYXJyYXlJdGVtKSkge1xyXG4gICAgICAgICAgICBhcnJheUl0ZW0uJCRjaGFuZ2VDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHByb2Nlc3NBcnJheShhcnJheUl0ZW0sIHByb3h5SGFuZGxlciwgb25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIG9ialtpbmRleF0gPSBuZXcgUHJveHkoYXJyYXlJdGVtLCBwcm94eUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfLmlzT2JqZWN0KGFycmF5SXRlbSkpIHtcclxuICAgICAgICAgICAgYXJyYXlJdGVtLiQkY2hhbmdlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBwcm9jZXNzT2JqZWN0KGFycmF5SXRlbSwgcHJveHlIYW5kbGVyLCBvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgb2JqW2luZGV4XSA9IG5ldyBQcm94eShhcnJheUl0ZW0sIHByb3h5SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9PYnNlcnZhYmxlLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVlcENsb25lPFQ+KG9iajogYW55KTogVCB7XHJcbiAgICBpZiAoIW9iailcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgIGxldCByZWZzQ2xvbmVzOiBhbnkgPSB7fTtcclxuXHJcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpXHJcbiAgICAgICAgcmV0dXJuIGNsb25lQXJyYXkob2JqLCByZWZzQ2xvbmVzKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gY2xvbmVPYmplY3Qob2JqLCByZWZzQ2xvbmVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqOiBhbnksIHJlZnNDbG9uZXM6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIW9iailcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmIChvYmouJCR1bmlxdWVPYmplY3RJZCAmJiByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXSlcclxuICAgICAgICByZXR1cm4gcmVmc0Nsb25lc1tvYmouJCR1bmlxdWVPYmplY3RJZF07XHJcblxyXG4gICAgbGV0IGNsb25lZDogYW55ID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpO1xyXG4gICAgY2xvbmVkLiQkaXNDbG9uZSA9IHRydWU7XHJcblxyXG4gICAgb2JqLiQkdW5pcXVlT2JqZWN0SWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxNik7XHJcbiAgICByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXSA9IGNsb25lZDtcclxuXHJcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcFZhbHVlOiBhbnkgPSBvYmpbcHJvcE5hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb3BOYW1lLnN1YnN0cmluZygwLCAyKSAhPT0gXCIkJFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5pc0FycmF5KHByb3BWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZWRbcHJvcE5hbWVdID0gY2xvbmVBcnJheShwcm9wVmFsdWUsIHJlZnNDbG9uZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXy5pc09iamVjdChwcm9wVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkW3Byb3BOYW1lXSA9IGNsb25lT2JqZWN0KHByb3BWYWx1ZSwgcmVmc0Nsb25lcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkW3Byb3BOYW1lXSA9IG9ialtwcm9wTmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2xvbmVkW3Byb3BOYW1lXSA9IGNsb25lT2JqZWN0JCQocHJvcFZhbHVlLCByZWZzQ2xvbmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjbG9uZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lT2JqZWN0JCQob2JqOiBhbnksIHJlZnNDbG9uZXM6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIW9iailcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmIChvYmouJCR1bmlxdWVPYmplY3RJZCAmJiByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXSlcclxuICAgICAgICByZXR1cm4gcmVmc0Nsb25lc1tvYmouJCR1bmlxdWVPYmplY3RJZF07XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVBcnJheShvYmo6IGFueSwgcmVmc0Nsb25lczogYW55KTogYW55IHtcclxuICAgIGlmICghb2JqKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKG9iai4kJHVuaXF1ZU9iamVjdElkICYmIHJlZnNDbG9uZXNbb2JqLiQkdW5pcXVlT2JqZWN0SWRdKVxyXG4gICAgICAgIHJldHVybiByZWZzQ2xvbmVzW29iai4kJHVuaXF1ZU9iamVjdElkXTtcclxuXHJcbiAgICBsZXQgY2xvbmVkOiBhbnkgPSBbXTtcclxuICAgIGNsb25lZC4kJGlzQ2xvbmUgPSB0cnVlO1xyXG5cclxuICAgIG9iai4kJHVuaXF1ZU9iamVjdElkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTYpO1xyXG4gICAgcmVmc0Nsb25lc1tvYmouJCR1bmlxdWVPYmplY3RJZF0gPSBjbG9uZWQ7XHJcblxyXG4gICAgb2JqLmZvckVhY2goKGFycmF5SXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKF8uaXNBcnJheShhcnJheUl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGNsb25lZC5wdXNoKGNsb25lQXJyYXkoYXJyYXlJdGVtLCByZWZzQ2xvbmVzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8uaXNPYmplY3QoYXJyYXlJdGVtKSkge1xyXG4gICAgICAgICAgICBjbG9uZWQucHVzaChjbG9uZU9iamVjdChhcnJheUl0ZW0sIHJlZnNDbG9uZXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjbG9uZWQucHVzaChhcnJheUl0ZW0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjbG9uZWQ7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvRGVlcENsb25lLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7YXBwSW5zdGFuY2V9IGZyb20gXCIuLi9BcHAvQXBwXCI7XHJcbmltcG9ydCB7V2luZG93LCBXaW5kb3dTdGF0ZX0gZnJvbSBcIi4uL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtNb3ZlU3RhcnRFdmVudH0gZnJvbSBcIi4uL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uL0J1dHRvbi9CdXR0b25cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlc2t0b3BQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxEZXNrdG9wUHJvcHM+IHtcclxuICAgIHdpbmRvd3M6IERlc2t0b3BXaW5kb3dbXSA9IFtdOyAgLy8g0L/QvtGB0LvQtdC00L3QtdC1INCw0LrRgtC40LLQvdC+XHJcblxyXG4gICAgLy8gZ2V0V2luZG93QnlJZChpZDogc3RyaW5nKTogV2luZG93U3RhdGUge1xyXG4gICAgLy8gICAgIGZvciAobGV0IHcgb2YgdGhpcy53aW5kb3dzKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh3LmlkID09PSBpZClcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiB3O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjb25zb2xlLndhcm4oXCJEZXNrdG9wV2luZG93IGlkPSdcIiArIGlkICsgXCInIG5vdCBmb3VuZFwiKTtcclxuICAgIC8vICAgICByZXR1cm4gbnVsbDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRXaW5kb3dJbmRleEJ5SWQoaWQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMud2luZG93cy5pbmRleE9mKHRoaXMuZ2V0V2luZG93QnlJZChpZCkpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFjdGl2YXRlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgIC8vICAgICBpZiAod2luKSB7XHJcbiAgICAvLyAgICAgICAgIF8ucHVsbCh0aGlzLndpbmRvd3MsIHdpbik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMud2luZG93cy5wdXNoKHdpbik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gY2xvc2VXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgLy8gICAgIF8ucHVsbCh0aGlzLndpbmRvd3MsIHdpbik7XHJcbiAgICAvLyAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93SW5mbyB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgd2luSW5zdGFuY2U6IFdpbmRvdztcclxuICAgIGRpdldyYXBwZXI6IEVsZW1lbnQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBXaW5kb3dBdXRvU2l6ZSA9IFwibm9uZVwiIHwgXCJjb250ZW50XCIgfCBcImZ1bGwtZGVza3RvcFwiO1xyXG5leHBvcnQgdHlwZSBXaW5kb3dBdXRvUG9zaXRpb24gPSBcIm5vbmVcIiB8IFwicGFyZW50LWNlbnRlclwiIHwgXCJkZXNrdG9wLWNlbnRlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuV2luZG93UGFyYW1zIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgdG9wPzogbnVtYmVyO1xyXG4gICAgbGVmdD86IG51bWJlcjtcclxuICAgIHJpZ2h0PzogbnVtYmVyO1xyXG4gICAgYm90dG9tPzogbnVtYmVyO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBtaW5XaWR0aD86IG51bWJlcjtcclxuICAgIHBhcmVudFdpbmRvd0lkPzogc3RyaW5nO1xyXG4gICAgYXV0b1Bvc2l0aW9uPzogV2luZG93QXV0b1Bvc2l0aW9uO1xyXG4gICAgYXV0b1NpemU/OiBXaW5kb3dBdXRvU2l6ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuTWVzc2FnZVdpbmRvd1BhcmFtcyB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHBhcmVudFdpbmRvd0lkPzogc3RyaW5nO1xyXG4gICAgc3R5bGU/OiBcImVycm9yXCIgfCBcImluZm9ybWF0aW9uXCIgfCBcImNvbmZpcm1hdGlvblwiIHwgXCJkYW5nZXJcIjtcclxuICAgIG9rQnV0dG9uQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICByZXN1bHRDYWxsYmFjaz86IChyZXN1bHRPSzogYm9vbGVhbikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlc2t0b3BXaW5kb3cgaW1wbGVtZW50cyBPcGVuV2luZG93UGFyYW1zIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIG1pbldpZHRoOiBudW1iZXI7XHJcbiAgICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHBhcmVudFdpbmRvd0lkOiBzdHJpbmc7XHJcbiAgICBhdXRvUG9zaXRpb246IFdpbmRvd0F1dG9Qb3NpdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgYXV0b1NpemU6IFdpbmRvd0F1dG9TaXplID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wIGV4dGVuZHMgQ29tcG9uZW50PERlc2t0b3BQcm9wcywgRGVza3RvcFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRGVza3RvcFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgRGVza3RvcFN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgaWYgKGFwcEluc3RhbmNlKVxyXG4gICAgICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wID0gdGhpcztcclxuICAgIH1cclxuXHJcbi8vICAgIHByaXZhdGUgd2luZG93czogV2luZG93SW5mb1tdID0gW107XHJcblxyXG4gICAgb3BlbldpbmRvdyh3aW5Db250ZW50OiBSZWFjdC5SZWFjdE5vZGUsIG9wZW5QYXJhbXM/OiBPcGVuV2luZG93UGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFvcGVuUGFyYW1zKVxyXG4gICAgICAgICAgICBvcGVuUGFyYW1zID0ge307XHJcbiAgICAgICAgbGV0IG5ld1dpbiA9IG5ldyBEZXNrdG9wV2luZG93KCk7XHJcbiAgICAgICAgbmV3V2luLmNvbnRlbnQgPSB3aW5Db250ZW50O1xyXG4gICAgICAgIG5ld1dpbi50aXRsZSA9IG9wZW5QYXJhbXMudGl0bGUgfHwgXCIuXCI7XHJcbiAgICAgICAgbmV3V2luLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG5cclxuICAgICAgICBuZXdXaW4ubGVmdCA9IG9wZW5QYXJhbXMubGVmdDtcclxuICAgICAgICBuZXdXaW4udG9wID0gb3BlblBhcmFtcy50b3A7XHJcbiAgICAgICAgbmV3V2luLmhlaWdodCA9IG9wZW5QYXJhbXMuaGVpZ2h0O1xyXG4gICAgICAgIG5ld1dpbi53aWR0aCA9IG9wZW5QYXJhbXMud2lkdGg7XHJcbiAgICAgICAgbmV3V2luLnJpZ2h0ID0gb3BlblBhcmFtcy5yaWdodDtcclxuICAgICAgICBuZXdXaW4uYm90dG9tID0gb3BlblBhcmFtcy5ib3R0b207XHJcblxyXG4gICAgICAgIGlmICghbmV3V2luLmxlZnQpIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4ucmlnaHQgJiYgIW5ld1dpbi53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmxlZnQgPSA1MDtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdXaW4ucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5sZWZ0ID0gNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLnJpZ2h0ICYmICFuZXdXaW4ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFuZXdXaW4udG9wKSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLmJvdHRvbSAmJiAhbmV3V2luLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmhlaWdodCA9IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdXaW4uYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5ib3R0b20gJiYgIW5ld1dpbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld1dpbi5hdXRvUG9zaXRpb24gPSBvcGVuUGFyYW1zLmF1dG9Qb3NpdGlvbjtcclxuICAgICAgICBuZXdXaW4uYXV0b1NpemUgPSBvcGVuUGFyYW1zLmF1dG9TaXplO1xyXG5cclxuICAgICAgICBuZXdXaW4ubWluSGVpZ2h0ID0gb3BlblBhcmFtcy5taW5IZWlnaHQgfHwgMTAwO1xyXG4gICAgICAgIG5ld1dpbi5taW5XaWR0aCA9IG9wZW5QYXJhbXMubWluV2lkdGggfHwgMTAwO1xyXG5cclxuICAgICAgICBuZXdXaW4ucGFyZW50V2luZG93SWQgPSBvcGVuUGFyYW1zLnBhcmVudFdpbmRvd0lkO1xyXG4gICAgICAgIGlmIChuZXdXaW4ucGFyZW50V2luZG93SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRXaW5kb3dCeUlkKG5ld1dpbi5wYXJlbnRXaW5kb3dJZCkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUud2luZG93cy5wdXNoKG5ld1dpbik7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuTWVzc2FnZVdpbmRvdyh3aW5Db250ZW50OiBSZWFjdC5SZWFjdE5vZGUsIG9wZW5QYXJhbXM/OiBPcGVuTWVzc2FnZVdpbmRvd1BhcmFtcykge1xyXG4gICAgICAgIGlmICghb3BlblBhcmFtcylcclxuICAgICAgICAgICAgb3BlblBhcmFtcyA9IHtzdHlsZTogXCJpbmZvcm1hdGlvblwifTtcclxuXHJcbiAgICAgICAgbGV0IHdpblBhcmFtczogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IG9wZW5QYXJhbXMudGl0bGUsXHJcbiAgICAgICAgICAgIHBhcmVudFdpbmRvd0lkOiBvcGVuUGFyYW1zLnBhcmVudFdpbmRvd0lkLFxyXG4gICAgICAgICAgICBhdXRvUG9zaXRpb246IFwicGFyZW50LWNlbnRlclwiLFxyXG4gICAgICAgICAgICBhdXRvU2l6ZTogXCJjb250ZW50XCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdpblBhcmFtcy5wYXJlbnRXaW5kb3dJZClcclxuICAgICAgICAgICAgd2luUGFyYW1zLmF1dG9Qb3NpdGlvbiA9IFwiZGVza3RvcC1jZW50ZXJcIjtcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvblN0eWxlID0ge21pbldpZHRoOiA2NSwgbWFyZ2luTGVmdDogOH07XHJcblxyXG4gICAgICAgIGxldCBva0J1dHRvbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgICAgIGlmIChvcGVuUGFyYW1zLm9rQnV0dG9uQ29udGVudCkge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uQ2xhc3NOYW1lID0gXCJpcy1vdXRsaW5lZFwiO1xyXG4gICAgICAgICAgICBpZiAob3BlblBhcmFtcy5zdHlsZSA9PT0gXCJkYW5nZXJcIilcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkNsYXNzTmFtZSArPSBcIiBpcy1kYW5nZXJcIjtcclxuICAgICAgICAgICAgb2tCdXR0b24gPVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKHNlbmRlcjpCdXR0b24sIGU6UmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlci5jbG9zZVBhcmVudFdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuUGFyYW1zLnJlc3VsdENhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5QYXJhbXMucmVzdWx0Q2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcGVuUGFyYW1zLm9rQnV0dG9uQ29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjYW5jZWxCdXR0b246IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgICAgICBpZiAob3BlblBhcmFtcy5jYW5jZWxCdXR0b25Db250ZW50KSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbiA9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXMtb3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKHNlbmRlcjpCdXR0b24sIGU6UmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlci5jbG9zZVBhcmVudFdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuUGFyYW1zLnJlc3VsdENhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5QYXJhbXMucmVzdWx0Q2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3BlblBhcmFtcy5jYW5jZWxCdXR0b25Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdpbiA9XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttaW5XaWR0aDoyMDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAge3dpbkNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtva0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cob3BlblBhcmFtcyk7XHJcblxyXG4gICAgICAgIHRoaXMub3BlbldpbmRvdyh3aW4sIHdpblBhcmFtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFjdGl2YXRlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgd2luID0gdGhpcy5nZXRUb3BQYXJlbnRXaW5kb3coaWQpO1xyXG4gICAgICAgIGlmICh3aW4gJiYgdGhpcy5zdGF0ZS53aW5kb3dzLmluZGV4T2Yod2luKSAhPT0gdGhpcy5zdGF0ZS53aW5kb3dzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgXy5wdWxsKHRoaXMuc3RhdGUud2luZG93cywgd2luKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dzLnB1c2god2luKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g0L/QvtC00L3QuNC80LDQtdC8INC00L7Rh9C10YDQvdC40LUg0L7QutC90LBcclxuICAgICAgICAgICAgbGV0IGNoaWxkV2luID0gdGhpcy5zdGF0ZS53aW5kb3dzLmZpbHRlcigodzogRGVza3RvcFdpbmRvdykgPT4gdy5wYXJlbnRXaW5kb3dJZCA9PT0gd2luLmlkKVswXTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkV2luKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUNoaWxkV2luZG93KGNoaWxkV2luLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVDaGlsZFdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdpbiAmJiB0aGlzLnN0YXRlLndpbmRvd3MuaW5kZXhPZih3aW4pICE9PSB0aGlzLnN0YXRlLndpbmRvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBfLnB1bGwodGhpcy5zdGF0ZS53aW5kb3dzLCB3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpbmRvd3MucHVzaCh3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQv9C+0LTQvdC40LzQsNC10Lwg0LTQvtGH0LXRgNC90LjQtSDQvtC60L3QsFxyXG4gICAgICAgICAgICBsZXQgY2hpbGRXaW4gPSB0aGlzLnN0YXRlLndpbmRvd3MuZmlsdGVyKCh3OiBEZXNrdG9wV2luZG93KSA9PiB3LnBhcmVudFdpbmRvd0lkID09PSB3aW4uaWQpWzBdO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRXaW4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlV2luZG93KGNoaWxkV2luLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9wUGFyZW50V2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdG9wUGFyZW50ID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgICAgICB3aGlsZSAodG9wUGFyZW50LnBhcmVudFdpbmRvd0lkKSB7XHJcbiAgICAgICAgICAgIHRvcFBhcmVudCA9IHRoaXMuZ2V0V2luZG93QnlJZCh0b3BQYXJlbnQucGFyZW50V2luZG93SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9wUGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpbmRvd0J5SWQoaWQ6IHN0cmluZyk6IERlc2t0b3BXaW5kb3cge1xyXG4gICAgICAgIGZvciAobGV0IHcgb2YgdGhpcy5zdGF0ZS53aW5kb3dzKSB7XHJcbiAgICAgICAgICAgIGlmICh3LmlkID09PSBpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLndhcm4oXCJEZXNrdG9wV2luZG93IGlkPSdcIiArIGlkICsgXCInIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQWN0aXZhdGUgPSAoc3RhdGU6IFdpbmRvd1N0YXRlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVdpbmRvdyhzdGF0ZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgICAgIF8ucHVsbCh0aGlzLnN0YXRlLndpbmRvd3MsIHdpbik7XHJcblxyXG4gICAgICAgIGlmICh3aW4ucGFyZW50V2luZG93SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVdpbmRvdyh3aW4ucGFyZW50V2luZG93SWQpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFdpbmRvd0J5SWQod2luLnBhcmVudFdpbmRvd0lkKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuY2xvc2VXaW5kb3coc3RhdGUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgICAgICh0aGlzLm5hdGl2ZUVsZW1lbnQgYXMgYW55KVtcIiQkZGVza3RvcFwiXSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiZGVza3RvcFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJhdXRvXCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiByZWY9eyAoZSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53aW5kb3dzLm1hcCgodywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci1kZXNrdG9wLXdpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2luZG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3cuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt3LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wPXt3LnRvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ9e3cubGVmdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3LndpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt3LmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0PXt3LnJpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tPXt3LmJvdHRvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt3LmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9e3cubWluV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3cubWluSGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3cuYXV0b1NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvUG9zaXRpb249e3cuYXV0b1Bvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50V2luZG93SWQ9e3cucGFyZW50V2luZG93SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2YXRlPXsgIHRoaXMuaGFuZGxlQWN0aXZhdGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17IHRoaXMuaGFuZGxlQ2xvc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1dpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL29uTW92ZVN0YXJ0PXsgdy5oYW5kbGVNb3ZlU3RhcnQgfVxyXG4vL29uUmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydD17IHcuaGFuZGxlUmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydCB9XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGVza3RvcH0gZnJvbSBcIi4uL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQgRWxlbWVudCA9IEpTWC5FbGVtZW50O1xyXG5pbXBvcnQge0FwcEVycm9yQmFyfSBmcm9tIFwiLi9BcHBFcnJvckJhclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcFN0YXRlPiB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHNpemVUbzogXCJwYXJlbnRcIiB8IFwiY29udGVudFwiO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuY2xhc3MgQXBwU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxBcHBQcm9wcz4ge1xyXG4gICAgd2luZG93czogQXBwV2luZG93W10gPSBbXTsgIC8vINC/0L7RgdC70LXQtNC90LXQtSDQsNC60YLQuNCy0L3QvlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PEFwcFByb3BzLCBBcHBTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFwcFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICBhcHBJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgLy8gICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgLy8gICAgICBhcHBJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZGVza3RvcDogRGVza3RvcDtcclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXBwXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8QXBwRXJyb3JCYXIvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGFwcEluc3RhbmNlOiBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHAvQXBwLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7VmlzaWJsZVBsdWdpblByb3BzLCBWaXNpYmxlUGx1Z2luU3RhdGUsIFZpc2libGVQbHVnaW59IGZyb20gXCIuLi8uLi9QbHVnaW5zL1Zpc2libGVQbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRXJyb3JCYXJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcEVycm9yQmFyU3RhdGU+IHtcclxuXHJcbn1cclxuXHJcbmNsYXNzIEFwcEVycm9yQmFyU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxBcHBFcnJvckJhclByb3BzPiB7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwRXJyb3JCYXIgZXh0ZW5kcyBDb21wb25lbnQ8QXBwRXJyb3JCYXJQcm9wcywgQXBwRXJyb3JCYXJTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFwcEVycm9yQmFyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEFwcEVycm9yQmFyU3RhdGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgIC8vICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIuZGlkTW91bnQoKTtcclxuICAgICAgICB3aW5kb3cub25lcnJvciA9IHRoaXMuaGFuZGxlRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3JNZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG4gICAgaGFuZGxlRXJyb3IgPSAobXNnOiBzdHJpbmcsIHVybD86IHN0cmluZywgbGluZT86IG51bWJlciwgY29sPzogbnVtYmVyLCBlcnJvcj86IGFueSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbXNnO1xyXG5cclxuICAgICAgICBpZiAoIWVycm9yLiQkaXNUaHJvd0Vycm9yKVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLnN0YWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGxldCBzdXBwcmVzc0Vycm9yQWxlcnQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBzdXBwcmVzc0Vycm9yQWxlcnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImFwcC1lcnJvci1iYXJcIik7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzc05hbWUoIXRoaXMuc3RhdGUudmlzaWJsZSwgXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7Y29sb3I6IFwid2hpdGVcIiwgYmFja2dyb3VuZDogXCIjZmY0ZTRlXCIsIGN1cnNvcjogXCJkZWZhdWx0XCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7IHRoaXMuc3RhdGUudmlzaWJsZSA9IGZhbHNlOyB0aGlzLmZvcmNlVXBkYXRlKCk7fSB9IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHAvQXBwRXJyb3JCYXIudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcbmltcG9ydCB7TW92YWJsZSwgTW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi9Nb3ZhYmxlL01vdmFibGVcIjtcclxuaW1wb3J0IHtPcGVuV2luZG93UGFyYW1zLCBEZXNrdG9wLCBXaW5kb3dBdXRvUG9zaXRpb24sIFdpbmRvd0F1dG9TaXplfSBmcm9tIFwiLi4vRGVza3RvcC9EZXNrdG9wXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dQcm9wcyBleHRlbmRzIE9wZW5XaW5kb3dQYXJhbXMsIENvbXBvbmVudFByb3BzPFdpbmRvd1N0YXRlPiB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIG9uQWN0aXZhdGU/KHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQ7XHJcbiAgICBvbkNsb3NlPyhzdGF0ZTogV2luZG93U3RhdGUpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93U3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxXaW5kb3dQcm9wcz4gaW1wbGVtZW50cyBPcGVuV2luZG93UGFyYW1zIHtcclxuICAgIGNvbnRlbnQ6IEpTWC5FbGVtZW50O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHJpZ2h0OiBudW1iZXI7XHJcbiAgICBib3R0b206IG51bWJlcjtcclxuICAgIG1pbkhlaWdodDogbnVtYmVyO1xyXG4gICAgbWluV2lkdGg6IG51bWJlcjtcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgcGFyZW50V2luZG93SWQ6IHN0cmluZztcclxuICAgIGF1dG9Qb3NpdGlvbjogV2luZG93QXV0b1Bvc2l0aW9uO1xyXG4gICAgYXV0b1NpemU6IFdpbmRvd0F1dG9TaXplO1xyXG5cclxuLy8gICAgY2hpbGRXaW5kb3c6IFdpbmRvdztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvbmVudDxXaW5kb3dQcm9wcywgV2luZG93U3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBXaW5kb3dQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFdpbmRvd1N0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlSW5pdFN0YXRlKCkge1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbml0U3RhdGUoKTtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBXaW5kb3dQcm9wcykge1xyXG4gICAgICAgIHN1cGVyLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgICAgICAvL3RoaXMuc3RhdGUuZGlzYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFBhcmVudERlc2t0b3BFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAoKHBhcmVudCBhcyBhbnkpLiQkZGVza3RvcClcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGNlbnRlclRvKHBhcmVudDogSlF1ZXJ5KSB7XHJcbiAgICAvLyAgICAgbGV0IHdpbiA9ICQodGhpcy5uYXRpdmVFbGVtZW50KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5zdGF0ZS50b3AgPSAocGFyZW50Lm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKSkgLyAyO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLnRvcCA+IHBhcmVudC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhdGUudG9wID0gcGFyZW50Lm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKTtcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS50b3AgPCAwKSB0aGlzLnN0YXRlLnRvcCA9IDA7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMuc3RhdGUubGVmdCA9IChwYXJlbnQub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSkgLyAyO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPiBwYXJlbnQub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSlcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gcGFyZW50Lm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCk7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUubGVmdCA8IDApIHRoaXMuc3RhdGUubGVmdCA9IDA7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNlbnRlclRvRGVza3RvcCgpIHtcclxuICAgICAgICBsZXQgd2luID0gJCh0aGlzLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBkZXNrdG9wID0gJCh0aGlzLmdldFBhcmVudERlc2t0b3BFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IChkZXNrdG9wLm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKSkgLyAyO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IChkZXNrdG9wLm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpIC8gMjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9wID4gZGVza3RvcC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG9wID0gZGVza3RvcC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9wIDwgMCkgdGhpcy5zdGF0ZS50b3AgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmxlZnQgPSAoZGVza3RvcC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpKSAvIDI7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGVmdCA+IGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gZGVza3RvcC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPCAwKSB0aGlzLnN0YXRlLmxlZnQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgLy90aGlzLmNlbnRlclRvKCQodGhpcy5nZXRQYXJlbnREZXNrdG9wRWxlbWVudCgpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjZW50ZXJUb1BhcmVudFdpbmRvdygpIHtcclxuICAgICAgICBsZXQgd2luID0gJCh0aGlzLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSAkKFwiI1wiICsgdGhpcy5zdGF0ZS5wYXJlbnRXaW5kb3dJZCk7XHJcbiAgICAgICAgbGV0IGRlc2t0b3AgPSAkKHRoaXMuZ2V0UGFyZW50RGVza3RvcEVsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudG9wID0gKHBhcmVudC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpIC8gMiArIHBhcmVudC5wb3NpdGlvbigpLnRvcDtcclxuICAgICAgICB0aGlzLnN0YXRlLmxlZnQgPSAocGFyZW50Lm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpIC8gMiArIHBhcmVudC5wb3NpdGlvbigpLmxlZnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcCA+IGRlc2t0b3Aub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IGRlc2t0b3Aub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcCA8IDApIHRoaXMuc3RhdGUudG9wID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGVmdCA+IGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gZGVza3RvcC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPCAwKSB0aGlzLnN0YXRlLmxlZnQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgLy90aGlzLmNlbnRlclRvKCQoXCIjXCIgKyB0aGlzLnN0YXRlLnBhcmVudFdpbmRvd0lkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLmRpZE1vdW50KCk7XHJcbiAgICAgICAgKHRoaXMubmF0aXZlRWxlbWVudCBhcyBhbnkpW1wiJCR3aW5kb3dcIl0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hdXRvUG9zaXRpb24gPT09IFwiZGVza3RvcC1jZW50ZXJcIilcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXJUb0Rlc2t0b3AoKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmF1dG9Qb3NpdGlvbiA9PT0gXCJwYXJlbnQtY2VudGVyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyVG9QYXJlbnRXaW5kb3coKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnREZXNrdG9wKCkuY2xvc2VXaW5kb3codGhpcy5zdGF0ZS5pZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb3ZlU3RhcnQgPSAoZTogTW92ZVN0YXJ0RXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBlLmJpbmRYKHRoaXMuc3RhdGUsIFwibGVmdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQodGhpcy5uYXRpdmVFbGVtZW50KS5jc3MoXCJsZWZ0XCIsIHRoaXMuc3RhdGUubGVmdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5iaW5kWSh0aGlzLnN0YXRlLCBcInRvcFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQodGhpcy5uYXRpdmVFbGVtZW50KS5jc3MoXCJ0b3BcIiwgdGhpcy5zdGF0ZS50b3ApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayhudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydCA9IChlOiBNb3ZlU3RhcnRFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUuYmluZFgodGhpcy5zdGF0ZSwgXCJ3aWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpZHRoIDwgdGhpcy5zdGF0ZS5taW5XaWR0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGggPSB0aGlzLnN0YXRlLm1pbldpZHRoO1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKFwid2lkdGhcIiwgdGhpcy5zdGF0ZS53aWR0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5iaW5kWSh0aGlzLnN0YXRlLCBcImhlaWdodFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhlaWdodCA8IHRoaXMuc3RhdGUubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLnN0YXRlLm1pbkhlaWdodDtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcyhcImhlaWdodFwiLCB0aGlzLnN0YXRlLmhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVPbkNsaWNrID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY3RpdmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGl2YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChuZXh0UHJvcHM6IFdpbmRvd1Byb3BzLCBuZXh0U3RhdGU6IFdpbmRvd1N0YXRlKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBvbGREaXNhYmxlZCA9IHRoaXMuc3RhdGUuZGlzYWJsZWQgPT09IHRydWU7XHJcbiAgICAgICAgbGV0IG5ld0Rpc2FibGVkID0gbmV4dFByb3BzLmRpc2FibGVkID09PSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmRpc2FibGVkID0gbmV3RGlzYWJsZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiBvbGREaXNhYmxlZCAhPT0gbmV3RGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlclJpZ2h0Qm90dG9tQ29ybmVyUmVzaXplcigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmF1dG9TaXplID09PSBcImNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TW92YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbmRvdy1yZXNpemVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaGVpZ2h0OjEwLCB3aWR0aDoxMCwgcmlnaHQ6MCxib3R0b206MCwgYm9yZGVyUmFkaXVzOiBcIjAgMCA1cHggMFwiLGN1cnNvcjogXCJzZS1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9e3RoaXMucmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvTW92YWJsZT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7aWQ6IHRoaXMuc3RhdGUuaWR9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJ3aW5kb3cgYm94XCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJhYnNvbHV0ZVwifSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtcclxuICAgICAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCxcclxuICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxyXG4gICAgICAgICAgICByaWdodDogdGhpcy5zdGF0ZS5yaWdodCxcclxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnN0YXRlLmJvdHRvbSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnN0YXRlLm1pbkhlaWdodCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMuc3RhdGUubWluV2lkdGgsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmF1dG9TaXplID09PSBcImNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgIC8vID9cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlckJ1dHRvblN0eWxlID0ge1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAyLFxyXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItd2luXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5kaXNhYmxlZCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRpc2FibGVkKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVkV3JhcHBlckNsYXNzID0gXCJ3aW5kb3ctZGlzYWJsZWQtd3JhcHBlclwiO1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCB8fCB0aGlzLnN0YXRlLmRpc2FibGVkID09PSBmYWxzZSlcclxuICAgICAgICAgICAgZGlzYWJsZWRXcmFwcGVyQ2xhc3MgKz0gXCIgaXMtaGlkZGVuXCI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luZG93XCJcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgcmVmPXsgKGU6IGFueSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9fVxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZU9uQ2xpY2sgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJjb2x1bW5cIiBzaXplVG89XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luZG93LWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjVweCA1cHggMHB4IDBweFwiLCBwb3NpdGlvbjpcInJlbGF0aXZlXCIsIHBhZGRpbmdMZWZ0OiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJyb3dcIiBzaXplVG89XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndpbmRvdy10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOjAsIGxlZnQ6MCwgcmlnaHQ6MCxib3R0b206MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXt0aGlzLm1vdmVTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWFkZG9ucyBidXR0b25zLWJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAyLCBwYWRkaW5nUmlnaHQ6IDR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIG1pbmltaXplLWJ1dHRvblwiIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWludXNcIiBzdHlsZT17e3RvcDogM319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBtYXhpbWl6ZS1idXR0b25cIiBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW9cIiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGNsb3NlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIHN0eWxlPXt7dG9wOiAtMX19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwid2luZG93LWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOjEwLCBvdmVyZmxvdzpcImhpZGRlblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUmlnaHRCb3R0b21Db3JuZXJSZXNpemVyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGlzYWJsZWRXcmFwcGVyQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDowLCB0b3A6MCwgcmlnaHQ6MCwgYm90dG9tOjB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gPGRpdiBjbGFzc05hbWU9XCJ3aW5kb3ctYm9keVwiIHN0eWxlPXt7IGhlaWdodDpcIjEwMCVcIiB9fT5cclxuLy8gICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4vLyA8L2Rpdj5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9XaW5kb3cvV2luZG93LnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IERyYWdFdmVudEhhbmRsZXIgPSBfX1JlYWN0LkRyYWdFdmVudEhhbmRsZXI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmFibGVQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25Nb3ZlU3RhcnQ/OiAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50KT0+dm9pZDtcclxuICAgIG9uTW92ZT86IChldmVudDogTW92ZUV2ZW50KT0+dm9pZDtcclxuICAgIG9uTW92ZUVuZD86IChldmVudDogTW92ZUVuZEV2ZW50KT0+dm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92ZVN0YXJ0RXZlbnQge1xyXG4gICAgYmluZFg6IChvYmo6IE9iamVjdCwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpPT52b2lkKT0+dm9pZDtcclxuICAgIGJpbmRZOiAob2JqOiBPYmplY3QsIHByb3BOYW1lOiBzdHJpbmcsIG1vdmVkQ2FsbGJhY2s/OiAoKT0+dm9pZCk9PnZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUV2ZW50IHtcclxuICAgIGRlbHRhWDogbnVtYmVyO1xyXG4gICAgZGVsdGFZOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUVuZEV2ZW50IHtcclxuICAgIGRlbHRhWDogbnVtYmVyO1xyXG4gICAgZGVsdGFZOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgQmluZGVkT2JqZWN0IHtcclxuICAgIG9iajogYW55O1xyXG4gICAgcHJvcE5hbWU6IHN0cmluZ1xyXG4gICAgc3RhcnRWYWx1ZTogbnVtYmVyO1xyXG4gICAgbW92ZWRDYWxsYmFjaz86ICgpID0+IHZvaWQ7XHJcbiAgICBsYXN0VmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmFibGUgZXh0ZW5kcyBDb21wb25lbnQ8TW92YWJsZVByb3BzLGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSwgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0Q2xpZW50WDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdGFydENsaWVudFk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZHJhZ092ZXJfQmluZGVkOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kZWRYOiBCaW5kZWRPYmplY3RbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBiaW5kZWRZOiBCaW5kZWRPYmplY3RbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgYmluZFgob2JqOiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIG1vdmVkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kZWRYLnB1c2goe1xyXG4gICAgICAgICAgICBvYmo6IG9iaixcclxuICAgICAgICAgICAgcHJvcE5hbWU6IHByb3BOYW1lLFxyXG4gICAgICAgICAgICBzdGFydFZhbHVlOiBvYmpbcHJvcE5hbWVdLFxyXG4gICAgICAgICAgICBtb3ZlZENhbGxiYWNrOiBtb3ZlZENhbGxiYWNrLFxyXG4gICAgICAgICAgICBsYXN0VmFsdWU6IG9ialtwcm9wTmFtZV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kWShvYmo6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmJpbmRlZFkucHVzaCh7XHJcbiAgICAgICAgICAgIG9iajogb2JqLFxyXG4gICAgICAgICAgICBwcm9wTmFtZTogcHJvcE5hbWUsXHJcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IG9ialtwcm9wTmFtZV0sXHJcbiAgICAgICAgICAgIG1vdmVkQ2FsbGJhY2s6IG1vdmVkQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogb2JqW3Byb3BOYW1lXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVEcmFnU3RhcnQoZTogRHJhZ0V2ZW50KSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRDbGllbnRYID0gZS5jbGllbnRYO1xyXG4gICAgICAgIHRoaXMuc3RhcnRDbGllbnRZID0gZS5jbGllbnRZO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdmVTdGFydClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmVTdGFydCh7YmluZFg6IHRoaXMuYmluZFguYmluZCh0aGlzKSwgYmluZFk6IHRoaXMuYmluZFkuYmluZCh0aGlzKX0pO1xyXG5cclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwibW92YWJsZVwiLCBcIlwiKTtcclxuICAgICAgICAvL2UuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ092ZXJfQmluZGVkID0gdGhpcy5oYW5kbGVEcmFnT3Zlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCB0aGlzLmRyYWdPdmVyX0JpbmRlZCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmFnRW5kKGU6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCB0aGlzLmRyYWdPdmVyX0JpbmRlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3ZlRW5kKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZUVuZCh7XHJcbiAgICAgICAgICAgICAgICBkZWx0YVg6IGUuY2xpZW50WCAtIHRoaXMuc3RhcnRDbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgZGVsdGFZOiBlLmNsaWVudFkgLSB0aGlzLnN0YXJ0Q2xpZW50WVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJpbmRlZFggPSBbXTtcclxuICAgICAgICB0aGlzLmJpbmRlZFkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmFnT3ZlcihlOiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGVkWC5mb3JFYWNoKChiaW5kKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGJpbmQuc3RhcnRWYWx1ZSArIGUuY2xpZW50WCAtIHRoaXMuc3RhcnRDbGllbnRYO1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGJpbmQubGFzdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kLm9ialtiaW5kLnByb3BOYW1lXSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYmluZC5sYXN0VmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5kLm1vdmVkQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgYmluZC5tb3ZlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kZWRZLmZvckVhY2goKGJpbmQpPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBiaW5kLnN0YXJ0VmFsdWUgKyBlLmNsaWVudFkgLSB0aGlzLnN0YXJ0Q2xpZW50WTtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBiaW5kLmxhc3RWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgYmluZC5vYmpbYmluZC5wcm9wTmFtZV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJpbmQubGFzdFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmluZC5tb3ZlZENhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGJpbmQubW92ZWRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmUoe1xyXG4gICAgICAgICAgICAgICAgZGVsdGFYOiBlLmNsaWVudFggLSB0aGlzLnN0YXJ0Q2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGRlbHRhWTogZS5jbGllbnRZIC0gdGhpcy5zdGFydENsaWVudFlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwibW92YWJsZVwiKTtcclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtkcmFnZ2FibGU6IHRydWV9KTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7Y3Vyc29yOiBcIm1vdmVcIn0pO1xyXG5cclxuICAgICAgICAvL3JldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BJbmZvLmVkaXRvclR5cGUsIGVkaXRvclByb3BzLCBudWxsKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXt0aGlzLmhhbmRsZURyYWdTdGFydC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgb25EcmFnRW5kPXt0aGlzLmhhbmRsZURyYWdFbmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGUudHN4XG4gKiovIiwiaW1wb3J0IHtTdHJpbmdFZGl0b3J9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7VGVzdEJ1aHRhT2JqZWN0MX0gZnJvbSBcIi4vdGVzdEJ1aHRhT2JqZWN0MVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIHRlc3RCdWh0YU9iamVjdDIgZXh0ZW5kcyBUZXN0QnVodGFPYmplY3QxIHtcclxuXHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCf0L7Quy9zZXhcIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQlNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvlwiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0J/QvtGC0L7Qu9C+0Log0LDQsdC+0L3QtdC90YLQsFwiXHJcbiAgICB9KVxyXG4gICAgc2V4OiBzdHJpbmc7XHJcblxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDIudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBzaGFsbG93Q29tcGFyZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtc2hhbGxvdy1jb21wYXJlXCIpO1xyXG5cclxuLy9pbXBvcnQge2V4ZWN1dGVTUUx9IGZyb20gXCIuLi9idWh0YS1jb3JlL1NRTFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uLy4uL1NRTFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uc30gZnJvbSBcIi4vVHJlZUdyaWRDb2x1bW5zXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5Qcm9wcywgVHJlZUdyaWRDb2x1bW59IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7S2V5Y29kZX0gZnJvbSBcIi4uLy4uL0tleWNvZGVcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlU3RhcnRFdmVudH0gZnJvbSBcIi4uL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge2dldFNjcm9sbGJhcldpZHRofSBmcm9tIFwiLi4vLi4vZ2V0U2Nyb2xsQmFyV2lkdGhcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcbmltcG9ydCB7T2JqZWN0RGVzaWduZXJ9IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXJcIjtcclxuaW1wb3J0IHtPcGVuV2luZG93UGFyYW1zfSBmcm9tIFwiLi4vRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCB7YXBwSW5zdGFuY2V9IGZyb20gXCIuLi9BcHAvQXBwXCI7XHJcbmltcG9ydCB7VHJlZUdyaWREYXRhU291cmNlfSBmcm9tIFwiLi9UcmVlR3JpZERhdGFTb3VyY2VcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPFRyZWVHcmlkU3RhdGU+IHtcclxuICAgIGRhdGFTb3VyY2U6IFRyZWVHcmlkRGF0YVNvdXJjZTtcclxuICAgIHJvd0hlaWdodD86IG51bWJlcjtcclxuICAgIGtleUZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIHBhcmVudEtleUZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIGhpZXJhcmNoeUZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIGhpZXJhcmNoeURlbGltaXRlcnM/OiBzdHJpbmc7XHJcbiAgICB0cmVlTW9kZT86IGJvb2xlYW47XHJcbiAgICBhdXRvRXhwYW5kTm9kZXNUb0xldmVsPzogbnVtYmVyO1xyXG5cclxuICAgIGVkaXRhYmxlPzogYm9vbGVhbjtcclxuICAgIGRlbnlJbnNlcnQ/OiBib29sZWFuO1xyXG4gICAgZGVueVVwZGF0ZT86IGJvb2xlYW47XHJcbiAgICBkZW55RGVsZXRlPzogYm9vbGVhbjtcclxuXHJcbiAgICBvbkNyZWF0ZU5ld1JlY29yZD86ICgpID0+IGFueTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8VHJlZUdyaWRQcm9wcz4ge1xyXG4gICAgY29sdW1uczogSW50ZXJuYWxDb2x1bW5bXTtcclxuICAgIHBhZ2VMZW5ndGg6IG51bWJlcjtcclxuICAgIHJvd3M6IEludGVybmFsUm93W107XHJcbiAgICBub2RlczogSW50ZXJuYWxUcmVlTm9kZVtdO1xyXG4gICAgZm9jdXNlZFJvd0luZGV4OiBudW1iZXI7XHJcbiAgICBmb2N1c2VkQ2VsbEluZGV4OiBudW1iZXI7XHJcbiAgICBkYXRhU291cmNlOiBUcmVlR3JpZERhdGFTb3VyY2U7XHJcblxyXG4gICAgaGVhZGVyRmFrZVJvdzogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb290ZXJGYWtlUm93OiBIVE1MRWxlbWVudDtcclxuICAgIGhlYWRlcldyYXBwZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGJvZHlXcmFwcGVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb290ZXJXcmFwcGVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgaGVhZGVyVGFibGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGJvZHlUYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyVGFibGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVybmFsQ29sdW1uIHtcclxuICAgIHByb3BzOiBUcmVlR3JpZENvbHVtblByb3BzO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGNhcHRpb246IHN0cmluZztcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nO1xyXG4gICAgZm9vdGVyOiBzdHJpbmc7XHJcbiAgICBoaWRkZW46IGJvb2xlYW47XHJcbiAgICBoZWFkZXJXaWR0aE5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgYm9keVdpZHRoTmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb290ZXJXaWR0aE5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxSb3cge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGdyaWRTdGF0ZTogVHJlZUdyaWRTdGF0ZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIC8vLyAgIHNvdXJjZU9iamVjdDogYW55O1xyXG4gICAgc291cmNlSW5kZXg6IG51bWJlcjtcclxuICAgIGNlbGxFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbm9kZTogSW50ZXJuYWxUcmVlTm9kZTtcclxuXHJcbiAgICBnZXQgc291cmNlRGF0YSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRTdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKClbdGhpcy5zb3VyY2VJbmRleF07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxUcmVlTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ3JpZFN0YXRlOiBUcmVlR3JpZFN0YXRlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgLy9zb3VyY2VPYmplY3Q6IGFueTtcclxuICAgIHNvdXJjZUluZGV4OiBudW1iZXI7XHJcbiAgICBjZWxsRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAvLyDQtNC70Y8gdHJlZU1vZGU7XHJcbiAgICBwYXJlbnQ6IEludGVybmFsVHJlZU5vZGU7XHJcbiAgICBjaGlsZHJlbjogSW50ZXJuYWxUcmVlTm9kZVtdID0gW107XHJcbiAgICBleHBhbmRlZDogYm9vbGVhbjtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcblxyXG4gICAgcHVzaFJvd1JlY3Vyc2l2ZShyb3dzOiBJbnRlcm5hbFJvd1tdLCBtYXhQYWdlTGVuZ3RoOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoID49IG1heFBhZ2VMZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHJvdyA9IG5ldyBJbnRlcm5hbFJvdyh0aGlzLmdyaWRTdGF0ZSk7XHJcbiAgICAgICAgcm93LnNvdXJjZUluZGV4ID0gdGhpcy5zb3VyY2VJbmRleDtcclxuICAgICAgICByb3cubm9kZSA9IHRoaXM7XHJcbiAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnB1c2hSb3dSZWN1cnNpdmUocm93cywgbWF4UGFnZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGl0ZXJhdGVSZWN1cnNpdmUoY2FsbGJhY2s6IChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5pdGVyYXRlUmVjdXJzaXZlKGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY29uc3QgdmVydFNjcm9sbEJhcldpZHRoID0gMzA7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWQgZXh0ZW5kcyBDb21wb25lbnQ8VHJlZUdyaWRQcm9wcywgVHJlZUdyaWRTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBUcmVlR3JpZFN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGl0ZXJhdGVBbGxOb2RlcyhjYWxsYmFjazogKG5vZGU6IEludGVybmFsVHJlZU5vZGUpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLm5vZGVzLmZvckVhY2goKG5vZGU6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5pdGVyYXRlUmVjdXJzaXZlKGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4cGFuZEFsbCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLm5vZGVzLmZvckVhY2goKG5vZGU6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5pdGVyYXRlUmVjdXJzaXZlKChub2Q6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZC5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbGxhcHNlQWxsKCkge1xyXG5cclxuICAgICAgICB0aGlzLml0ZXJhdGVBbGxOb2Rlcygobm9kOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZC5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFJvd0luZGV4KHNvdXJjZUluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIFRPRE86INGB0LTQtdC70LDRgtGMINCy0LDRgNC40LDQvdGCINC00LvRjyB0cmVlTW9kZVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uc291cmNlSW5kZXggPT09IHNvdXJjZUluZGV4KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUm93KHNvdXJjZUluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldFJvd0luZGV4KHNvdXJjZUluZGV4KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAvLyBUT0RPOiDRgdC00LXQu9Cw0YLRjCDQv9GA0L7QutGA0YPRgtC60YMsINC10YHQu9C4IGZvY3VzZWQg0L3QtSDQstC40LTQvdCwINC90LAg0Y3QutGA0LDQvdC1XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuRWRpdEZvcm0odGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4XSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUluc2VydEJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub3Blbkluc2VydEZvcm0oKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEZWxldGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm9wZW5EZWxldGVGb3JtKHRoaXMuc3RhdGUucm93c1t0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleF0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGVsZXRlRm9ybShyb3dUb0RlbGV0ZTogSW50ZXJuYWxSb3cpIHtcclxuICAgICAgICAvL2xldCByb3dUb0RlbGV0ZSA9IHRoaXMuc3RhdGUucm93c1t0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleF07XHJcbiAgICAgICAgbGV0IHJvdyA9IHJvd1RvRGVsZXRlLnNvdXJjZURhdGEgYXMgRGVzaWduZWRPYmplY3Q7XHJcbiAgICAgICAgbGV0IG9iamVjdENsYXNzTmFtZSA9IFwi0LfQsNC/0LjRgdGMXCI7XHJcbiAgICAgICAgaWYgKHJvdy5nZXRDbGFzc05hbWUpXHJcbiAgICAgICAgICAgIG9iamVjdENsYXNzTmFtZSA9IHJvdy5nZXRDbGFzc05hbWUoKTtcclxuXHJcbiAgICAgICAgbGV0IG9iamVjdE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGlmIChyb3cudG9TdHJpbmcpXHJcbiAgICAgICAgICAgIG9iamVjdE5hbWUgPSByb3cudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXJlZFwiPtCj0LTQsNC70LjRgtGMIFwie29iamVjdENsYXNzTmFtZX1cIj88YnIvPnsgb2JqZWN0TmFtZSB9PC9kaXY+O1xyXG5cclxuICAgICAgICB0aGlzLnNob3dEZWxldGVDb25maXJtYXRpb25XaW5kb3cobWVzc2FnZSwgKG9rUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9rUmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKG9rUmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhU291cmNlLmRlbGV0ZVJvdyhyb3dUb0RlbGV0ZS5zb3VyY2VJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hEYXRhU291cmNlKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Rm9jdXNlZEluZGV4ID0gdGhpcy5zdGF0ZS5yb3dzLmluZGV4T2Yocm93VG9EZWxldGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdGb2N1c2VkSW5kZXggPiB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoIC0gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Rm9jdXNlZEluZGV4ID0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCAtIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoUm93KHRoaXMuc3RhdGUucm93c1tuZXdGb2N1c2VkSW5kZXhdLnNvdXJjZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5JbnNlcnRGb3JtKCkge1xyXG5cclxuICAgICAgICBsZXQgZGVzaWduZWRPYmplY3QgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0TmV3Um93KCk7XHJcblxyXG4gICAgICAgIGlmIChkZXNpZ25lZE9iamVjdCkge1xyXG4gICAgICAgICAgICBsZXQgd2luID1cclxuICAgICAgICAgICAgICAgIDxPYmplY3REZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0PXtkZXNpZ25lZE9iamVjdH1cclxuICAgICAgICAgICAgICAgICAgICBvblNhdmVDaGFuZ2VzPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5hZGRSb3coZGVzaWduZWRPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hEYXRhU291cmNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoUm93KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcItC00L7QsdCw0LLQu9C10L3QuNC1XCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnRXaW5kb3dJZDogdGhpcy5nZXRQYXJlbnRXaW5kb3dJZCgpXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFBhcmVudERlc2t0b3AoKS5vcGVuV2luZG93KHdpbiwgb3BlblBhcmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkVkaXRGb3JtKHJvdzogSW50ZXJuYWxSb3cpIHtcclxuXHJcbiAgICAgICAgbGV0IGRlc2lnbmVkT2JqZWN0ID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKClbcm93LnNvdXJjZUluZGV4XTtcclxuXHJcbiAgICAgICAgbGV0IHdpbiA9XHJcbiAgICAgICAgICAgIDxPYmplY3REZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgZGVzaWduZWRPYmplY3Q9e2Rlc2lnbmVkT2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgb25TYXZlQ2hhbmdlcz17ICgpID0+IHsgdGhpcy5yZWZyZXNoUm93KHJvdy5zb3VyY2VJbmRleCk7IH19XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1XCIsXHJcbiAgICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDUwLFxyXG4gICAgICAgICAgICBwYXJlbnRXaW5kb3dJZDogdGhpcy5nZXRQYXJlbnRXaW5kb3dJZCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnREZXNrdG9wKCkub3BlbldpbmRvdyh3aW4sIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ29sdW1ucygpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8g0YHQvdCw0YfQsNC70LAg0LrQvtC70L7QvdC60Lgg0LfQsNC/0L7Qu9C90Y/QtdC8INC40Lcg0YLQtdCz0L7QsiA8VHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgbGV0IGNvbHVtbnNUYWcgPSB0aGlzLmdldENoaWxkcmVuKFRyZWVHcmlkQ29sdW1ucyk7XHJcbiAgICAgICAgY29sdW1uc1RhZy5mb3JFYWNoKCh0YWc6IEpTWC5FbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5UYWdMaXN0ID0gdGhpcy5nZXRDaGlsZHJlbk9mUHJvcHModGFnLnByb3BzLCBUcmVlR3JpZENvbHVtbik7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5UYWdMaXN0ID0gY29sdW1uVGFnTGlzdC5zb3J0KChhOiBKU1guRWxlbWVudCwgYjogSlNYLkVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBBID0gYS5wcm9wcyBhcyBUcmVlR3JpZENvbHVtblByb3BzO1xyXG4gICAgICAgICAgICAgICAgbGV0IEIgPSBiLnByb3BzIGFzIFRyZWVHcmlkQ29sdW1uUHJvcHM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQS5vcmRlciAtIEIub3JkZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1uVGFnTGlzdC5mb3JFYWNoKChwcm9wQ29sOiBKU1guRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBuZXcgSW50ZXJuYWxDb2x1bW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbC5wcm9wcyA9IHByb3BDb2wucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBjb2wud2lkdGggPSBwcm9wQ29sLnByb3BzLndpZHRoIHx8IDE1MDtcclxuICAgICAgICAgICAgICAgIGNvbC5jYXB0aW9uID0gcHJvcENvbC5wcm9wcy5jYXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgY29sLmZpZWxkTmFtZSA9IHByb3BDb2wucHJvcHMucHJvcGVydHlOYW1lO1xyXG4gICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLnByb3BzLmNhcHRpb24gfHwgY29sLmZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5wdXNoKGNvbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQtdGB0LvQuCDRgtC10LPQvtCyIDxUcmVlR3JpZENvbHVtbj4g0L3QtdGCLCDRgtC+INC30LDQv9C+0LvQvdGP0LXQvCDQuNC3IERhdGFTb3VyY2VcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmlzVHJlZUdyaWREYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHMgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgYXMgVHJlZUdyaWREYXRhU291cmNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb2x1bW5zID0gZHMuZ2V0VHJlZUdyaWRDb2x1bW5zKCkuc29ydCgoYTogVHJlZUdyaWRDb2x1bW5Qcm9wcywgYjogVHJlZUdyaWRDb2x1bW5Qcm9wcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaCgocHJvcENvbDogVHJlZUdyaWRDb2x1bW5Qcm9wcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sID0gbmV3IEludGVybmFsQ29sdW1uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLnByb3BzID0gcHJvcENvbDtcclxuICAgICAgICAgICAgICAgICAgICBjb2wud2lkdGggPSBwcm9wQ29sLndpZHRoIHx8IDE1MDtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuY2FwdGlvbiA9IHByb3BDb2wuY2FwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuZmllbGROYW1lID0gcHJvcENvbC5wcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLmNhcHRpb24gfHwgY29sLmZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMucHVzaChjb2wpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVHJlZUdyaWQ6INGB0L/QuNGB0L7QuiDQutC+0LvQvtC90L7QuiDQvdC1INC+0L/RgNC10LTQtdC70LXQvS5cIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEZvY3VzZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm9kZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnRyZWVNb2RlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhpZXJhcmNoeUZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzRnJvbUhpZXJhcmNoeUZpZWxkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInVua25vd24gaGllcmFyY2h5IG1vZGVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm9kZXNGcm9tSGllcmFyY2h5RmllbGQoKSB7XHJcblxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlhUcmVlR3JpZDogaGllcmFyY2h5RGVsaW1pdGVycyBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpbnRlcmZhY2UgSVNvcnRlZCB7XHJcbiAgICAgICAgICAgIGhpZXJhcmNoeVN0cjogc3RyaW5nO1xyXG4gICAgICAgICAgICBvYmpJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNvcnRlZDogSVNvcnRlZFtdID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubWFwKChvYmo6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGllcmFyY2h5U3RyOiBvYmpbdGhpcy5wcm9wcy5oaWVyYXJjaHlGaWVsZE5hbWVdLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBvYmpJbmRleDogaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ydGVkID0gXy5zb3J0Qnkoc29ydGVkLCBbXCJoaWVyYXJjaHlTdHJcIl0pO1xyXG5cclxuICAgICAgICBsZXQgY2FjaGU6IHsgW2hpZXJhcmNoeUlkOiBzdHJpbmddOiBJbnRlcm5hbFRyZWVOb2RlOyB9ID0ge307XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUubm9kZXMgPSBbXTtcclxuXHJcbiAgICAgICAgc29ydGVkLmZvckVhY2goKHMsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3BsaXR0ZWQgPSBzLmhpZXJhcmNoeVN0ci5zcGxpdCh0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMpO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50SWQ6IGFueTtcclxuICAgICAgICAgICAgbGV0IG5vZGVJZDogYW55O1xyXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZWQubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgbm9kZUlkID0gcy5oaWVyYXJjaHlTdHI7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZUlkID0gXy5sYXN0KHNwbGl0dGVkKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudElkID0gc3BsaXR0ZWQuc2xpY2UoMCwgc3BsaXR0ZWQubGVuZ3RoIC0gMSkuam9pbih0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMuc2xpY2UoMCwgMSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVbbm9kZUlkXSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWFRyZWVHcmlkOiBub2RlSWQgJ1wiICsgbm9kZUlkICsgXCInIGlzIGR1cGxpY2F0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBJbnRlcm5hbFRyZWVOb2RlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc291cmNlSW5kZXggPSBzLm9iakluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGV2ZWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXhwYW5kZWQgPSBub2RlLmxldmVsIDwgdGhpcy5wcm9wcy5hdXRvRXhwYW5kTm9kZXNUb0xldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlW25vZGVJZF0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gY2FjaGVbcGFyZW50SWRdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IEludGVybmFsVHJlZU5vZGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNvdXJjZUluZGV4ID0gcy5vYmpJbmRleDtcclxuICAgICAgICAgICAgICAgIG5vZGUubGV2ZWwgPSBwYXJlbnROb2RlLmxldmVsICsgMTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXhwYW5kZWQgPSBub2RlLmxldmVsIDwgdGhpcy5wcm9wcy5hdXRvRXhwYW5kTm9kZXNUb0xldmVsO1xyXG4gICAgICAgICAgICAgICAgY2FjaGVbcy5oaWVyYXJjaHlTdHJdID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW4ucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHtzdHI6IHMuaGllcmFyY2h5U3RyLCBwYXJlbnRJZCwgbm9kZUlkfSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSb3dzKCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnJvd3MgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubm9kZXMuZm9yRWFjaCgobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucHVzaFJvd1JlY3Vyc2l2ZSh0aGlzLnN0YXRlLnJvd3MsIHRoaXMuc3RhdGUucGFnZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kYXRhU291cmNlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5pc1RyZWVHcmlkRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRzID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlIGFzIFRyZWVHcmlkRGF0YVNvdXJjZTtcclxuICAgICAgICAgICAgICAgIGRzLmdldERhdGFSb3dzKCkuZm9yRWFjaCgob2JqOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0gbmV3IEludGVybmFsUm93KHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmZvckVhY2goKG9iajogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBJbnRlcm5hbFJvdyh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICByb3cuc291cmNlSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbml0Rm9jdXNlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sdW1ucyAmJiB0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLmRhdGFTb3VyY2UpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sdW1uc1swXS5mb290ZXIgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggKyBcIiDQv9C+0LcuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJEYXRhKCkge1xyXG5cclxuLy8gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhU291cmNlKSB7XHJcbi8vICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZS5tYXAoKHJvdykgPT4gcm93KTtcclxuLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLnJvd3MgPSB3aW5kb3dbXCJ4eHhcIl0uZmlsdGVyKChyb3cpID0+IHJvd1tcItCd0LDQt9Cy0LDQvdC40LVcIl0uaW5kZXhPZihcIlBoaWxcIikgPiAtMSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgbGFzdEJvZHlXcmFwcGVySGVpZ2h0ID0gMDtcclxuICAgIGxhc3RCb2R5V3JhcHBlcldpZHRoID0gMDtcclxuXHJcbiAgICBoYW5kbGVCb2R5V3JhcHBlckVsZW1lbnRSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0hlaWdodCA9IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBpZiAobmV3SGVpZ2h0ICE9PSB0aGlzLmxhc3RCb2R5V3JhcHBlckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RCb2R5V3JhcHBlckhlaWdodCA9IG5ld0hlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuZXdXaWR0aCA9IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGlmIChuZXdXaWR0aCAhPT0gdGhpcy5sYXN0Qm9keVdyYXBwZXJXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RCb2R5V3JhcHBlcldpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICAgICAgdGhpcy5ib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuaGFuZGxlQm9keVdyYXBwZXJFbGVtZW50UmVzaXplLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucGFnZUxlbmd0aCA9IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaERhdGFTb3VyY2UoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTm9kZXMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgdGVzdExvYWQ1MDAoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGV4ZWN1dGVTUUwoXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YBcIilcclxuICAgIC8vICAgICAgICAgLmRvbmUoKHRhYmxlKSA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGFibGUucm93cy5tYXAoKHIpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4ge9Ca0LvRjtGHOiByW1wi0JrQu9GO0YdcIl0sINCd0L7QvNC10YA6IHJbXCLQndC+0LzQtdGAXCJdLCDQndCw0LfQstCw0L3QuNC1OiByW1wi0J3QsNC30LLQsNC90LjQtVwiXX07XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucygpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IHRvcCA1MDA2KiDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0JrQu9GO0YcgLS0+IFwiICsgdGFibGUucm93c1swXS5nZXRWYWx1ZSgyKSk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5mYWlsKChlcnIpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFRyZWVHcmlkUHJvcHMpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZFVwZGF0ZShwcmV2UHJvcHM6IFRyZWVHcmlkUHJvcHMsIHByZXZTdGF0ZTogYW55LCBwcmV2Q29udGV4dDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUm93cygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVuZGVyUm93cy1zdGFydCgpXCIpO1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItcm93czogXCIgKyB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgocm93OiBJbnRlcm5hbFJvdywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXQucHVzaCh0aGlzLnJlbmRlclJvdyhyb3csIGluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZW5kZXJSb3dzLWVuZCgpXCIpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJSb3cocm93OiBJbnRlcm5hbFJvdywgcm93SW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgIGtleT17cm93SW5kZXh9XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4geyByb3cuZWxlbWVudCA9IGU7fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNlbGxzKHJvdywgcm93SW5kZXgpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDZWxscyhyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBjb2xJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKHRoaXMucmVuZGVyQ2VsbChyb3csIHJvd0luZGV4LCBjb2wsIGNvbEluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNlbGwocm93OiBJbnRlcm5hbFJvdywgcm93SW5kZXg6IG51bWJlciwgY29sOiBJbnRlcm5hbENvbHVtbiwgY29sSW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IG9iakluZGV4ID0gcm93LnNvdXJjZUluZGV4O1xyXG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKVtvYmpJbmRleF1bY29sLnByb3BzLnByb3BlcnR5TmFtZV0udG9TdHJpbmcoKTtcclxuICAgICAgICAvL2xldCBzdHIgPSB0aGlzLnJvd3Nbcm93SW5kZXhdLnNvdXJjZU9iamVjdFtjb2wucHJvcHMucHJvcGVydHlOYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vIHJldHVybiA8dGQga2V5PXtjb2xJbmRleH0+XHJcbiAgICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6MTYsIG92ZXJmbG93OlwiaGlkZGVuXCJ9fT57c3RyfTwvZGl2PlxyXG4gICAgICAgIC8vIDwvdGQ+O1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IHJvdy5ub2RlO1xyXG5cclxuICAgICAgICBsZXQgaGllcmFyY2h5UGFkZGluZ0RpdjogSlNYLkVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgKGNvbC5wcm9wcy5zaG93SGllcmFyY2h5UGFkZGluZyB8fCBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpKSB7XHJcbiAgICAgICAgICAgIGhpZXJhcmNoeVBhZGRpbmdEaXYgPSA8c3BhbiBzdHlsZT17e3dpZHRoOm5vZGUubGV2ZWwgKiAyMCwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19Pjwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpIHtcclxuICAgICAgICAgICAgdGRTdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IFwicmdiYSgyNTUsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RyU3BhblN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUgJiYgbm9kZS5leHBhbmRlZCAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RyU3BhblN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0clNwYW4gPSA8c3BhbiBzdHlsZT17IHN0clNwYW5TdHlsZX0+e3N0cn08L3NwYW4+O1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbGxhcHNlSWNvbkRpdjogSlNYLkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlICYmIGNvbC5wcm9wcy5zaG93SGllcmFyY2h5VHJlZSkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlSWNvbkRpdiA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93LWNvbGxhcHNlLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6MjAsIGZsZXg6IFwiMCAwIGF1dG9cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7bm9kZS5leHBhbmRlZCA9IGZhbHNlOyB0aGlzLmNyZWF0ZVJvd3MoKTsgdGhpcy5mb3JjZVVwZGF0ZSgpO30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VJY29uRGl2ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jb2xsYXBzZS1pY29uXCIgc3R5bGU9e3sgd2lkdGg6MjAsIGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHtub2RlLmV4cGFuZGVkID0gdHJ1ZTsgdGhpcy5jcmVhdGVSb3dzKCk7IHRoaXMuZm9yY2VVcGRhdGUoKTt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlSWNvbkRpdiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jb2xsYXBzZS1pY29uXCIgc3R5bGU9e3sgd2lkdGg6MjAsIGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgIGtleT17Y29sSW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17dGRTdHlsZX1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiByb3cuY2VsbEVsZW1lbnRzW2NvbEluZGV4XSA9IGV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHsgdGhpcy5zZXRGb2N1c2VkQ2VsbChyb3dJbmRleCxjb2xJbmRleCk7fSB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNoZWNrYm94XCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1wYWRkaW5nXCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoaWVyYXJjaHlQYWRkaW5nRGl2fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sbGFwc2VJY29uRGl2fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1pY29uXCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXN0clwiIHN0eWxlPXt7IGZsZXg6IFwiMCAxIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyU3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRGb2N1c2VkQ2VsbChyb3dJbmRleDogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA9IHJvd0luZGV4O1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleCA9IGNlbGxJbmRleDtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUYWJsZVdoZWVsKGU6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgICAvLyBpZiAoZS5kZWx0YVkgPiAwKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmluY1BhZ2VTdGFydEluZGV4KDMpO1xyXG4gICAgICAgIC8vIGVsc2UgaWYgKGUuZGVsdGFZIDwgMClcclxuICAgICAgICAvLyAgICAgdGhpcy5kZWNQYWdlU3RhcnRJbmRleCgzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRlbHRhWSk7XHJcbiAgICAgICAgLy8gdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2Nyb2xsKGU6IFVJRXZlbnQpIHtcclxuICAgICAgICAkKHRoaXMuc3RhdGUuaGVhZGVyV3JhcHBlckVsZW1lbnQpLmNzcyh7dG9wOiB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3B9KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LmNsaWVudEhlaWdodCAtICQodGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKSAtIDA7XHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5jc3Moe3RvcDogcG9zfSk7XHJcblxyXG4gICAgICAgICQodGhpcy5zdGF0ZS5oZWFkZXJGYWtlUm93KS5jc3Moe2hlaWdodDogJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpfSk7XHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmZvb3RlckZha2VSb3cpLmNzcyh7aGVpZ2h0OiAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCl9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VGb2N1c2VkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChyb3c6IEludGVybmFsUm93KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZWxlbWVudClcclxuICAgICAgICAgICAgICAgICQocm93LmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtcm93XCIpO1xyXG5cclxuICAgICAgICAgICAgcm93LmNlbGxFbGVtZW50cy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbClcclxuICAgICAgICAgICAgICAgICAgICAkKGNlbGwpLnJlbW92ZUNsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtY2VsbFwiKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZm9jdXNlZFJvdyA9IHRoaXMuc3RhdGUucm93c1t0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleF07XHJcbiAgICAgICAgaWYgKGZvY3VzZWRSb3cgJiYgZm9jdXNlZFJvdy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZm9jdXNlZFJvdy5lbGVtZW50KS5hZGRDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLXJvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmb2N1c2VkQ2VsbEVsZW1lbnQgPSBmb2N1c2VkUm93LmNlbGxFbGVtZW50c1t0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoZm9jdXNlZENlbGxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKGZvY3VzZWRDZWxsRWxlbWVudCkuYWRkQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1jZWxsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb2N1c2VkQ2VsbEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdLmNlbGxFbGVtZW50c1t0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxEb3duKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvd0VsID0gJCh0aGlzLmdldEZvY3VzZWRSb3dFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgLy8g0YPRiNC70L4g0LfQsCDQv9GA0LXQtNC10LvRiyDQstC40LTQuNC80L7RgdGC0LhcclxuICAgICAgICAgICAgaWYgKHJvd0VsLnBvc2l0aW9uKCkudG9wICsgcm93RWwuaGVpZ2h0KCkgPlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgPSByb3dFbC5wb3NpdGlvbigpLnRvcCArIHJvd0VsLmhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5jbGllbnRIZWlnaHQgKyAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsTGVmdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXgtLTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbFJpZ2h0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXggPCB0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxVcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4LS07XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvd0VsID0gJCh0aGlzLmdldEZvY3VzZWRSb3dFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgLy8g0YPRiNC70L4g0LfQsCDQv9GA0LXQtNC10LvRiyDQstC40LTQuNC80L7RgdGC0LhcclxuICAgICAgICAgICAgaWYgKHJvd0VsLnBvc2l0aW9uKCkudG9wIDwgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgPSByb3dFbC5wb3NpdGlvbigpLnRvcCAtICQodGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQm9keUtleURvd24oZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gS2V5Y29kZS5Eb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsRG93bigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLlVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsVXAoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5MZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsTGVmdCgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLlJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsUmlnaHQoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5SZXNpemVTdGFydCA9IChldmVudDogTW92ZVN0YXJ0RXZlbnQsIGNvbDogSW50ZXJuYWxDb2x1bW4pOiB2b2lkID0+IHtcclxuICAgICAgICBldmVudC5iaW5kWChjb2wsIFwid2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKGNvbC5oZWFkZXJXaWR0aE5hdGl2ZUVsZW1lbnQpLmF0dHIoXCJ3aWR0aFwiLCBjb2wud2lkdGgpO1xyXG4gICAgICAgICAgICAkKGNvbC5ib2R5V2lkdGhOYXRpdmVFbGVtZW50KS5hdHRyKFwid2lkdGhcIiwgY29sLndpZHRoKTtcclxuICAgICAgICAgICAgJChjb2wuZm9vdGVyV2lkdGhOYXRpdmVFbGVtZW50KS5hdHRyKFwid2lkdGhcIiwgY29sLndpZHRoKTtcclxuICAgICAgICAgICAgbGV0IHRhYmxlV2lkdGggPSB0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuaGVhZGVyVGFibGVFbGVtZW50KS5jc3MoXCJ3aWR0aFwiLCB0YWJsZVdpZHRoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnN0YXRlLmJvZHlUYWJsZUVsZW1lbnQpLmNzcyhcIndpZHRoXCIsIHRhYmxlV2lkdGgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuZm9vdGVyVGFibGVFbGVtZW50KS5jc3MoXCJ3aWR0aFwiLCB0YWJsZVdpZHRoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudCkuY3NzKFwibWF4LXdpZHRoXCIsIHRhYmxlV2lkdGggKyBnZXRTY3JvbGxiYXJXaWR0aCgpICsgMSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlT25DbGljayhudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyQ29sdW1uSGVhZGVycygpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCBjb2xXaWR0aHM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBsZXQgY29sSGVhZGVyczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaChcclxuICAgICAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB7Y29sLmhlYWRlcldpZHRoTmF0aXZlRWxlbWVudCA9IGU7fSB9XHJcbiAgICAgICAgICAgICAgICAvPik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuXHJcbiAgICAgICAgICAgIGNvbEhlYWRlcnMucHVzaChcclxuICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RkU3R5bGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbC5jYXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgd2lkdGg6NSwgcmlnaHQ6MCwgYm90dG9tOjAsIGN1cnNvcjpcImNvbC1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXsgKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCkgPT4geyB0aGlzLmNvbHVtblJlc2l6ZVN0YXJ0KGV2ZW50LCBjb2wpOyBjb25zb2xlLmxvZyhcIk1vdmVTdGFydFwiKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgd2lkdGg6IGluZGV4ID09PSAwID8gMCA6IDUsIGxlZnQ6MCwgYm90dG9tOjAsIGN1cnNvcjpcImNvbC1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXsgKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDRgNC10YHQsNC50LfQuNC8INC/0YDQtdC00YvQtNGD0YnRg9GOINC60L7Qu9C+0L3QutGDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uUmVzaXplU3RhcnQoZXZlbnQsIHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGQ+KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuaGVhZGVyV3JhcHBlckVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0YWJsZUxheW91dDogXCJmaXhlZFwiLGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsIHdpZHRoOnRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmhlYWRlclRhYmxlRWxlbWVudCA9IGV9XHJcblxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbFdpZHRoc31cclxuICAgICAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xIZWFkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29sdW1uRm9vdGVycygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBsZXQgY29sV2lkdGhzOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgbGV0IGNvbEZvb3RlcnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGlzRm9vdGVyRW1wdHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHtjb2wuZm9vdGVyV2lkdGhOYXRpdmVFbGVtZW50ID0gZTt9IH1cclxuICAgICAgICAgICAgICAgIC8+KTtcclxuICAgICAgICAgICAgaWYgKGNvbC5mb290ZXIpXHJcbiAgICAgICAgICAgICAgICBpc0Zvb3RlckVtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB0ZFN0eWxlOiBhbnkgPSB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9O1xyXG4gICAgICAgICAgICBjb2xGb290ZXJzLnB1c2goPHRkIGtleT17aW5kZXh9IHN0eWxlPXt0ZFN0eWxlfT57Y29sLmZvb3Rlcn08L3RkPik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghaXNGb290ZXJFbXB0eSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1mb290ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RhYmxlTGF5b3V0OiBcImZpeGVkXCIsYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgd2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmZvb3RlclRhYmxlRWxlbWVudCA9IGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbFdpZHRoc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sRm9vdGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGUgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWVtcHR5LWJvZHlcIj57bWVzc2FnZX08L2Rpdj4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyaWRCb2R5KCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCBjb2xXaWR0aHM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaChcclxuICAgICAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB7Y29sLmJvZHlXaWR0aE5hdGl2ZUVsZW1lbnQgPSBlO30gfVxyXG4gICAgICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1ib2R5XCJcclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsgKGUpID0+IHsgIHRoaXMuaGFuZGxlQm9keUtleURvd24oZSk7IH0gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGFibGVMYXlvdXQ6IFwiZml4ZWRcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKX19XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5ib2R5VGFibGVFbGVtZW50ID0gZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2xXaWR0aHN9XHJcbiAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5oZWFkZXJGYWtlUm93ID0gZX0+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKCl9XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjpcIm5vbmVcIiB9fSByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5mb290ZXJGYWtlUm93ID0gZX0+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNhbGNUb3RhbENvbHVtbnNXaWR0aCgpOiBudW1iZXIge1xyXG5cclxuICAgICAgICBsZXQgcmV0ID0gMDtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbC5oaWRkZW4pXHJcbiAgICAgICAgICAgICAgICByZXQgKz0gY29sLndpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNoYWxsb3dDb21wYXJlKG5leHRQcm9wczogVHJlZUdyaWRQcm9wcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hhbGxvdy10cmVlLWdyaWRcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInNoYWxsb3ctd2luIC0+IGlzRXFpYWwgPSBcIiArIHRoaXMuaXNQcm9wc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcywgW1wiY2hpbGRyZW5cIl0pKTtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNQcm9wc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJkYXRhU291cmNlXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFZGl0YWJsZUJ1dHRvbnMoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVueUluc2VydCAhPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cImluc2VydFwiIGNsYXNzTmFtZT1cImlzLW91dGxpbmVkIGlzLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUluc2VydEJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRlbnlVcGRhdGUgIT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICBidXR0b25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJ1cGRhdGVcIiBjbGFzc05hbWU9XCJpcy1vdXRsaW5lZCBpcy1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVVcGRhdGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCY0LfQvNC10L3QuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZW55RGVsZXRlICE9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiZGVsZXRlXCIgY2xhc3NOYW1lPVwiaXMtb3V0bGluZWQgaXMtZGFuZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVEZWxldGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vdGhpcy5hZGRDbGFzc05hbWUoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItdHJlZS1ncmlkXCIpO1xyXG5cclxuICAgICAgICBsZXQgbWF4Qm9keVdyYXBwZXJXaWR0aCA9IHRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCkgKyBnZXRTY3JvbGxiYXJXaWR0aCgpICsgMTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgbWF4Qm9keVdyYXBwZXJXaWR0aCA9IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwidHJlZS1ncmlkXCIgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7ICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaCA1MDAxXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmZpbHRlckRhdGEoKTsgdGhpcy5mb3JjZVVwZGF0ZSgpOyBjb25zb2xlLmxvZyhcImZvcmNlVXBkYXRlXCIpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmV4cGFuZEFsbCgpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgdGhpcy5jb2xsYXBzZUFsbCgpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2UgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAg0LfQsNCz0L7Qu9C+0LLQvtC6INC4INGCLtC0LlxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtYm9keS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcInJlbGF0aXZlXCIsIG92ZXJmbG93OlwiYXV0b1wiLCBmbGV4OlwiMVwiLCBtYXhXaWR0aDogbWF4Qm9keVdyYXBwZXJXaWR0aCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXsgdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZTphbnkpID0+IHt0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudCA9IGU7fX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyR3JpZEJvZHkoKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2x1bW5IZWFkZXJzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sdW1uRm9vdGVycygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWZvb3Rlci13cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cInJvd1wiIHNpemVUbz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRWRpdGFibGVCdXR0b25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiaXMtc21hbGxuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLRi9Cx0YDQsNGC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpcy1zbWFsbG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkID5cclxuICAgICAgICAgICAgPC9MYXlvdXQgPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWQudHN4XG4gKiovIiwi77u/aW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQ29sdW1uc1Byb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICAvL2NhcHRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbnMgZXh0ZW5kcyBDb21wb25lbnQ8VHJlZUdyaWRDb2x1bW5zUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZENvbHVtbnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnMudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJHcmlkQ29sdW1uLCBHcmlkQ29sdW1uSW5mb30gZnJvbSBcIi4vcmVnaXN0ZXJHcmlkQ29sdW1uXCI7XHJcbi8vaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRDb2x1bW5Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgY2FwdGlvbj86IHN0cmluZztcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgcHJvcGVydHlOYW1lPzogc3RyaW5nO1xyXG4gICAgc2hvd0hpZXJhcmNoeVRyZWU/OiBib29sZWFuO1xyXG4gICAgc2hvd0hpZXJhcmNoeVBhZGRpbmc/OiBib29sZWFuO1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbiBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZENvbHVtblByb3BzLCBhbnk+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlZUdyaWRDb2x1bW5Qcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAvL3RoaXMuc3RhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgLy90aGlzLmFkZENsYXNzTmFtZShcImJ0blwiKTtcclxuICAgICAgICAvL3RoaXMudG9nZ2xlQ2xhc3NOYW1lKHRoaXMucHJvcHMuZGlzYWJsZWQsIFwiZGlzYWJsZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAobnVsbCk7XHJcbiAgICAgICAgLy9UcmVlR3JpZCBmcm9tIHt0aGlzLnByb3BzLmNvbXBpbGVyfSBhbmQge3RoaXMucHJvcHMuZnJhbWV3b3JrfSFjbGlja0NvdW50PXt0aGlzLnN0YXRlLmNsaWNrQ291bnR9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRDb2x1bW5QYXJhbXMgZXh0ZW5kcyBUcmVlR3JpZENvbHVtblByb3BzIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHcmlkQ29sdW1uKHBhcmFtczogR3JpZENvbHVtblBhcmFtcyk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKHt0YXJnZXQsIHByb3BlcnR5TmFtZSwgY29uc3RyOnRhcmdldC5jb25zdHJ1Y3Rvcn0pO1xyXG5cclxuICAgICAgICBsZXQgcmVnQ29sdW1uOiBHcmlkQ29sdW1uSW5mbyA9IHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvclxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIF8uYXNzaWduKHJlZ0NvbHVtbiwgcGFyYW1zKTtcclxuICAgICAgICByZWdpc3RlckdyaWRDb2x1bW4ocmVnQ29sdW1uKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyR3JpZENvbHVtbih7XHJcbiAgICAgICAgLy8gICAgIGNhcHRpb246IHBhcmFtcy5jYXB0aW9uLFxyXG4gICAgICAgIC8vICAgICB3aWR0aDogcGFyYW1zLndpZHRoLFxyXG4gICAgICAgIC8vICAgICBzaG93SGllcmFyY2h5VHJlZTogcGFyYW1zLnNob3dIaWVyYXJjaHlUcmVlLFxyXG4gICAgICAgIC8vICAgICBzaG93SGllcmFyY2h5UGFkZGluZzogcGFyYW1zLnNob3dIaWVyYXJjaHlQYWRkaW5nLFxyXG4gICAgICAgIC8vICAgICBvcmRlcjogcGFyYW1zLm9yZGVyIHx8IDAsXHJcbiAgICAgICAgLy8gICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgIC8vICAgICBvYmplY3RUeXBlOiB0YXJnZXQuY29uc3RydWN0b3IsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3hcbiAqKi8iLCJpbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5Qcm9wc30gZnJvbSBcIi4vVHJlZUdyaWRDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZENvbHVtbkluZm8gZXh0ZW5kcyBUcmVlR3JpZENvbHVtblByb3BzIHtcclxuICAgIC8vcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICBvYmplY3RUeXBlOiB0eXBlb2YgRGVzaWduZWRPYmplY3Q7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJHcmlkQ29sdW1uKGNvbHVtbkluZm86IEdyaWRDb2x1bW5JbmZvKSB7XHJcblxyXG4gICAgbGV0IG9ialR5cGU6IGFueSA9IGNvbHVtbkluZm8ub2JqZWN0VHlwZTtcclxuXHJcbiAgICBpZiAoIW9ialR5cGUuJCRncmlkQ29sdW1uSW5mb3MpXHJcbiAgICAgICAgb2JqVHlwZS4kJGdyaWRDb2x1bW5JbmZvcyA9IFtdO1xyXG5cclxuICAgIG9ialR5cGUuJCRncmlkQ29sdW1uSW5mb3MucHVzaChjb2x1bW5JbmZvKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwicmVnaXN0ZXJQcm9wZXJ0eUVkaXRvciBcIiArIGVkaXRvci5wcm9wZXJ0eU5hbWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3IpO1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9yZWdpc3RlckdyaWRDb2x1bW4udHNcbiAqKi8iLCJcclxuZXhwb3J0IHZhciBLZXljb2RlID0ge1xyXG4gICAgRXNjOiBcIkVzY2FwZVwiLFxyXG4gICAgU3BhY2U6IFwiIFwiLFxyXG5cclxuICAgIExlZnQ6IFwiQXJyb3dMZWZ0XCIsXHJcbiAgICBVcDogXCJBcnJvd1VwXCIsXHJcbiAgICBEb3duOiBcIkFycm93RG93blwiLFxyXG4gICAgUmlnaHQ6IFwiQXJyb3dSaWdodFwiLFxyXG5cclxuICAgIERlbDogXCJEZWxldGVcIixcclxuICAgIEluczogXCJJbnNlcnRcIixcclxuXHJcbiAgICBXaW46IFwiTWV0YVwiLFxyXG4gICAgTWVudTogXCJDb250ZXh0TWVudVwiLFxyXG5cclxuICAgIFNjcm9sbDogXCJTY3JvbGxMb2NrXCIsXHJcbiAgICBOdW06IFwiTnVtTG9ja1wiLFxyXG5cclxuICAgIEJhY2tzcGFjZTogXCJCYWNrc3BhY2VcIixcclxuICAgIFRhYjogXCJUYWJcIixcclxuICAgIEVudGVyOiBcIkVudGVyXCIsXHJcbiAgICBTaGlmdDogXCJTaGlmdFwiLFxyXG4gICAgQ29udHJvbDogXCJDb250cm9sXCIsXHJcbiAgICBBbHQ6IFwiQWx0XCIsXHJcbiAgICBCcmVhazogXCJQYXVzZVwiLFxyXG4gICAgQ2Fwc0xvY2s6IFwiQ2Fwc0xvY2tcIixcclxuXHJcbiAgICBQYWdlVXA6IFwiUGFnZVVwXCIsXHJcbiAgICBQYWdlRG93bjogXCJQYWdlRG93blwiLFxyXG4gICAgRW5kOiBcIkVuZFwiLFxyXG4gICAgSG9tZTogXCJIb21lXCIsXHJcblxyXG4gICAgRjE6IFwiRjFcIixcclxuICAgIEYyOiBcIkYyXCIsXHJcbiAgICBGMzogXCJGM1wiLFxyXG4gICAgRjQ6IFwiRjRcIixcclxuICAgIEY1OiBcIkY1XCIsXHJcbiAgICBGNjogXCJGNlwiLFxyXG4gICAgRjc6IFwiRjdcIixcclxuICAgIEY4OiBcIkY4XCIsXHJcbiAgICBGOTogXCJGOVwiLFxyXG4gICAgRjEwOiBcIkYxMFwiLFxyXG4gICAgRjExOiBcIkYxMVwiLFxyXG4gICAgRjEyOiBcIkYxMlwiXHJcblxyXG59O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvS2V5Q29kZS50c1xuICoqLyIsImxldCBjYWNoZVdpZHRoID0gMDtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldjogVUlFdmVudCkgPT4ge1xyXG4gICAgY2FjaGVXaWR0aCA9IDA7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc2l6ZVwiKTtcclxufSlcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XHJcbiAgICBpZiAoY2FjaGVXaWR0aCA+IDApXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlV2lkdGg7XHJcblxyXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XHJcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcclxuXHJcbiAgICB2YXIgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xyXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xyXG5cclxuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xyXG5cclxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcclxuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xyXG5cclxuICAgIGNhY2hlV2lkdGggPSB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xyXG4gICAgcmV0dXJuIGNhY2hlV2lkdGg7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9nZXRTY3JvbGxCYXJXaWR0aC50c1xuICoqLyIsIu+7v2ltcG9ydCAqIGFzIGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5cclxubGV0IHNvY2tldCA9IGlvLmNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU1FMKHNxbDogc3RyaW5nKTogSlF1ZXJ5UHJvbWlzZTxEYXRhVGFibGU+IHtcclxuICAgIC8vY29uc29sZS5sb2coXCJjYWxsIFNRTC5zcWwuZXhlY3V0ZVwiKTtcclxuICAgIC8vcmV0dXJuIHNpZ25hbFIuZXhlY3V0ZVNRTChzcWwpO1xyXG5cclxuXHJcbiAgICBsZXQgcHJvbWlzZTogSlF1ZXJ5RGVmZXJyZWQ8RGF0YVRhYmxlPjtcclxuICAgIHByb21pc2UgPSAkLkRlZmVycmVkPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAvLyAgc29ja2V0Lm9uY2UoJ2Nvbm5lY3QnLCgpID0+IHtcclxuICAgIGxldCBxdWVyeUlkID0gXCJxdWVyeS1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xyXG4gICAgc29ja2V0LmVtaXQoXCJleGVjdXRlU1FMXCIsIHtxdWVyeUlkLCBzcWx9KTtcclxuICAgIHNvY2tldC5vbmNlKHF1ZXJ5SWQsIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhQ29sdW1uID0gbmV3IERhdGFDb2x1bW4oZGF0YVRhYmxlLCByZXNwb25zZS5jb2x1bW5zW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVRhYmxlLmNvbHVtbnMucHVzaChkYXRhQ29sdW1uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2Uucm93cy5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhUm93ID0gbmV3IERhdGFSb3coZGF0YVRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFUYWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbHVtbnNbaV0ucGFyc2UgPT09IFwiRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W2RhdGFUYWJsZS5jb2x1bW5zW2ldLm5hbWVdID0gbmV3IERhdGUocm93W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbZGF0YVRhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kYXRhUm93W2ldID0gcm93W2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5yb3dzLnB1c2goZGF0YVJvdyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhVGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vICAgfSk7XHJcblxyXG5cclxuICAgIC8vc2lnbmFsUi5leGVjdXRlU1FMKHNxbCkuXHJcbiAgICAvLyAgICBkb25lKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgbGV0IHJlcyA9IGV2YWwocmVzdWx0KTtcclxuXHJcbiAgICAvLyAgICAgICAgaWYgKHJlcy5lcnJvcikge1xyXG4gICAgLy8gICAgICAgICAgICBwcm9taXNlLnJlamVjdChyZXMuZXJyb3IpO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgbGV0IGRzID0gbmV3IERhdGFzZXQoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgIHJlcy50YWJsZXMuZm9yRWFjaCgodGFibGUpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKGRzKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5uYW1lID0gdGFibGUubmFtZTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRzLnRhYmxlcy5wdXNoKGRhdGFUYWJsZSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFDb2x1bW4gPSBuZXcgRGF0YUNvbHVtbihkYXRhVGFibGUsIHRhYmxlLmNvbHVtbnNbaV0ubmFtZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLmNvbHVtbnMucHVzaChkYXRhQ29sdW1uKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICB0YWJsZS5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YVJvdyA9IG5ldyBEYXRhUm93KCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W3RhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbaV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGUucm93cy5wdXNoKGRhdGFSb3cpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRzKVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pLlxyXG4gICAgLy8gICAgZmFpbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgcHJvbWlzZS5yZWplY3QoXCLQvtGI0LjQsdC60LAgY29ubmVjdGlvbiBzaWduYWxSXCIpO1xyXG4gICAgLy8gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3FsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbn1cclxuXHJcbi8vZXhwb3J0IGVudW0gQ29sdW1uRGF0YVR5cGUgeyBTdHJpbmcsIE51bWJlciwgRGF0YSB9XHJcblxyXG4vL2V4cG9ydCB0eXBlIERhdGFUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZSB7XHJcbiAgICBjb2x1bW5zOiBBcnJheTxEYXRhQ29sdW1uPjtcclxuICAgIHJvd3M6IEFycmF5PERhdGFSb3c+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUNvbHVtbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAvL2RhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlLCBuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVJvdyB7XHJcbiAgICBbaW5kZXg6IHN0cmluZ106IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoY29sdW1uSW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgMCB8fCBjb2x1bW5JbmRleCA+PSB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkRhdGFSb3cuZ2V0VmFsdWUoXCIgKyBjb2x1bW5JbmRleCArIFwiKTogY29sdW1uSW5kZXggb3V0IG9mIHJhbmdlXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBbdGhpcy50YWJsZS5jb2x1bW5zW2NvbHVtbkluZGV4XS5uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvL1tpbmRleDogbnVtYmVyXTogRGF0YVR5cGU7XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NRTC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gaW87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlvXCJcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtMaXN0RWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9MaXN0UHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtHcmlkQ29sdW1ufSBmcm9tIFwiLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3FsVGFibGUgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCY0LzRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQmNC80Y8g0YLQsNCx0LvQuNGG0YtcIlxyXG4gICAgfSlcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwic3FsINC40LzRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCJzcWwg0LjQvNGPINGC0LDQsdC70LjRhtGLXCJcclxuICAgIH0pXHJcblxyXG4gICAgc3FsbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBMaXN0RWRpdG9yKHtcclxuICAgICAgICBpbnB1dFRhYjogXCLQmtC+0LvQvtC90LrQuFwiXHJcbiAgICB9KVxyXG4gICAgY29sdW1uczogU3FsVGFibGVDb2x1bW5bXSA9IFtdO1xyXG5cclxuICAgIGFkZENvbHVtbihpbml0Q2FsbGJhY2s6IChuZXdDb2x1bW46IFNxbFRhYmxlQ29sdW1uKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IGNvbCA9IG5ldyBTcWxUYWJsZUNvbHVtbih0aGlzKTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChjb2wpO1xyXG4gICAgICAgIGluaXRDYWxsYmFjayhjb2wpO1xyXG5cclxuICAgICAgICB0aGlzLnRlc3RQcm9jMigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRlc3RQcm9jMiA9ICgpID0+IHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGdldENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJzcWwt0YLQsNCx0LvQuNGG0LBcIjtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcWxUYWJsZUNvbHVtbiBleHRlbmRzIERlc2lnbmVkT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJCR0YWJsZTogU3FsVGFibGUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0YWJsZSgpOiBTcWxUYWJsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR0YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0JjQvNGPINC60L7Qu9C+0L3QutC4XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCY0LzRjyDQutC+0LvQvtC90LrQuFwiXHJcbiAgICB9KVxyXG4gICAgQEdyaWRDb2x1bW4oe2NhcHRpb246IFwi0JjQvNGPINC60L7Qu9C+0L3QutC4XCJ9KVxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLRgtC40L9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwic3FsINGC0LjQvyDQutC+0LvQvtC90LrQuFwiXHJcbiAgICB9KVxyXG4gICAgQEdyaWRDb2x1bW4oe2NhcHRpb246IFwi0KLQuNC/XCJ9KVxyXG4gICAgZGF0YVR5cGU6IHN0cmluZztcclxuXHJcbiAgICBAR3JpZENvbHVtbih7Y2FwdGlvbjogXCJ0ZXN0XCIsIG9yZGVyOiAtMX0pXHJcbiAgICBnZXQgdGVzdENvbHVtbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIitcIiArIHRoaXMuZGF0YVR5cGUrXCItPlwiKyB0aGlzLnRhYmxlLm5hbWUrKHRoaXMudGFibGUgYXMgYW55KS4kJHVuaXF1ZU9iamVjdElkO1xyXG4gICAgfTtcclxuXHJcbiAgICAkJHRlc3RPYmplY3Q6IGFueTtcclxuXHJcbiAgICBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwic3FsLdC60L7Qu9C+0L3QutCwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiIG9mIChcIiArIHRoaXMudGFibGUubmFtZSArIFwiKVwiO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLXNxbC9TcWxUYWJsZS50c1xuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Jhc2VQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge3JlZ2lzdGVyUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtJbnB1dFR5cGUsIElucHV0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuaW1wb3J0IHtUcmVlR3JpZH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnNcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQXJyYXlEYXRhU291cmNlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQXJyYXlEYXRhU291cmNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RQcm9wZXJ0eUVkaXRvciBleHRlbmRzIEJhc2VQcm9wZXJ0eUVkaXRvciB7XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkge1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlID09PSBcIiArIHRoaXMucHJvcHMucHJvcGVydHlOYW1lICsgXCIgXCIgKyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGF1dG9Gb3JtQ29udHJvbFByb3BzOiBBdXRvRm9ybUNvbnRyb2xQcm9wcyA9IHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiB0aGlzLnByb3BzLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHRoaXMucHJvcHMuaW5wdXRUYWIsXHJcbiAgICAgICAgICAgIGlucHV0R3JvdXA6IHRoaXMucHJvcHMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5pbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyhhdXRvRm9ybUNvbnRyb2xQcm9wcyk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxJbnB1dFxyXG4gICAgICAgIC8vICAgICAgICAgdHlwZT17SW5wdXRUeXBlLlRleHR9XHJcbiAgICAgICAgLy8gICAgICAgICBiaW5kT2JqZWN0PXt0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0fVxyXG4gICAgICAgIC8vICAgICAgICAgYmluZFByb3BOYW1lPXt0aGlzLnByb3BzLnByb3BlcnR5TmFtZX1cclxuICAgICAgICAvLyAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgIC8vICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAvLyAgICAgLz5cclxuICAgICAgICAvLyApO1xyXG5cclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IG5ldyBUcmVlR3JpZEFycmF5RGF0YVNvdXJjZSh0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUcmVlR3JpZFxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17IGRhdGFTb3VyY2UgfVxyXG4gICAgICAgICAgICAgICAgdHJlZU1vZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9UcmVlR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuLy8gPFRyZWVHcmlkQ29sdW1ucz5cclxuLy8gPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQmNC80Y8g0LrQvtC70L7QvdC60LhcIiBwcm9wZXJ0eU5hbWU9XCJuYW1lXCIgd2lkdGg9ezEwMH0+XHJcbi8vICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4vLyAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQotC40L8g0LTQsNC90L3Ri9GFXCIgcHJvcGVydHlOYW1lPVwiZGF0YVR5cGVcIiB3aWR0aD17MTUwfT5cclxuLy8gICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbi8vICAgICA8L1RyZWVHcmlkQ29sdW1ucz5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEVkaXRvclBhcmFtcyBleHRlbmRzIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0RWRpdG9yKHBhcmFtczogTGlzdEVkaXRvclBhcmFtcyk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcih7XHJcbiAgICAgICAgICAgIGlucHV0Q2FwdGlvbjogcGFyYW1zLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHBhcmFtcy5pbnB1dFRhYixcclxuICAgICAgICAgICAgaW5wdXRHcm91cDogcGFyYW1zLmlucHV0R3JvdXAsXHJcbiAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb246IHBhcmFtcy5pbnB1dERlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogdGFyZ2V0LmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBlZGl0b3JUeXBlOiBMaXN0UHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uUHJvcHN9IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7VHJlZUdyaWREYXRhU291cmNlfSBmcm9tIFwiLi9UcmVlR3JpZERhdGFTb3VyY2VcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge2dldEdyaWRDb2x1bW5JbmZvc30gZnJvbSBcIi4vZ2V0R3JpZENvbHVtbkluZm9zXCI7XHJcbmltcG9ydCB7dGhyb3dFcnJvcn0gZnJvbSBcIi4uLy4uL0Vycm9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQXJyYXlEYXRhU291cmNlUGFyYW1zPFQ+IHtcclxuXHJcbiAgICBnZXROZXdSb3c/OiAoKSA9PiBUO1xyXG4gICAgZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZT86ICgpID0+IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGdldERlbGV0ZVJvd01lc3NhZ2U/OiAoKSA9PiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRBcnJheURhdGFTb3VyY2U8VCBleHRlbmRzIERlc2lnbmVkT2JqZWN0PiBpbXBsZW1lbnRzIFRyZWVHcmlkRGF0YVNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXJyYXlPYmo6IFRbXSwgcHVibGljIHBhcmFtczogVHJlZUdyaWRBcnJheURhdGFTb3VyY2VQYXJhbXM8VD4gPSB7fSkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IGlzVHJlZUdyaWREYXRhU291cmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyZWVHcmlkQ29sdW1ucygpOiBUcmVlR3JpZENvbHVtblByb3BzW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmFycmF5T2JqLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGdldEdyaWRDb2x1bW5JbmZvcyh0aGlzLmFycmF5T2JqWzBdKS5tYXA8VHJlZUdyaWRDb2x1bW5Qcm9wcz4oKGNvbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXQ6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgXy5hc3NpZ24ocmV0LCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYXB0aW9uOiBjb2wuY2FwdGlvbixcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogY29sLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG9yZGVyOiBjb2wub3JkZXIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcHJvcGVydHlOYW1lOiBjb2wucHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNob3dIaWVyYXJjaHlUcmVlOiBjb2wuc2hvd0hpZXJhcmNoeVRyZWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2hvd0hpZXJhcmNoeVBhZGRpbmc6IGNvbC5zaG93SGllcmFyY2h5UGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhUm93cygpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld1JvdygpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuZ2V0TmV3Um93KVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMuZ2V0TmV3Um93KCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwiVHJlZUdyaWRBcnJheURhdGFTb3VyY2U6IG1ldGhvZCBnZXROZXdSb3coKSBub3QgZGVmaW5lZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRSb3cocm93OiBUKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLmFycmF5T2JqLnB1c2gocm93KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheU9iai5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVJvdyhyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGRlbGV0ZWRJdGVtcyA9IF8ucHVsbEF0KHRoaXMuYXJyYXlPYmosIHJvd0luZGV4KTtcclxuICAgICAgICBpZiAoZGVsZXRlZEl0ZW1zLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgdGhyb3dFcnJvcihcIlRyZWVHcmlkQXJyYXlEYXRhU291cmNlLmRlbGV0ZVJvdygpOiBpbnZhbGlkIHJvd0luZGV4IChcIiArIHJvd0luZGV4ICsgXCIpXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBcItCf0YPRgdGC0L7QuSDRgdC/0LjRgdC+0LouXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVsZXRlUm93TWVzc2FnZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5nZXREZWxldGVSb3dNZXNzYWdlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMuZ2V0RGVsZXRlUm93TWVzc2FnZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIFwi0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMIVwiO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZEFycmF5RGF0YVNvdXJjZS50c3hcbiAqKi8iLCJcclxuaW1wb3J0IHtHcmlkQ29sdW1uSW5mb30gZnJvbSBcIi4vcmVnaXN0ZXJHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmlkQ29sdW1uSW5mb3Mob2JqOiBEZXNpZ25lZE9iamVjdCk6IEdyaWRDb2x1bW5JbmZvW10ge1xyXG5cclxuICAgIGxldCBpbmZvcyA9IChvYmouY29uc3RydWN0b3IgYXMgYW55KS4kJGdyaWRDb2x1bW5JbmZvcyBhcyBHcmlkQ29sdW1uSW5mb1tdO1xyXG5cclxuICAgIGlmICghaW5mb3MpXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgIGluZm9zID0gaW5mb3MuZmlsdGVyKChlZHQpID0+IG9iaiBpbnN0YW5jZW9mIGVkdC5vYmplY3RUeXBlKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0UHJvcGVydHlFZGl0b3JzXCIpIDtcclxuICAgIC8vY29uc29sZS5sb2coZWRpdG9ycyk7XHJcbiAgICByZXR1cm4gaW5mb3M7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL2dldEdyaWRDb2x1bW5JbmZvcy50c1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vycm9yKGVycm9yOiBzdHJpbmcgfCBFcnJvcikge1xyXG5cclxuICAgIC8vIHRvZG86INC+0YLQutC70Y7Rh9C40YLRjCDQsiBwcm9kdWN0aW9uINGA0LXQttC40LzQtVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgbGV0IGVycjogYW55O1xyXG5cclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKVxyXG4gICAgICAgIGVyciA9IGVycm9yO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVyciA9IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICBcclxuICAgIGVyci4kJGlzVGhyb3dFcnJvciA9IHRydWU7XHJcbiAgICB0aHJvdyBlcnI7XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0Vycm9yLnRzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==