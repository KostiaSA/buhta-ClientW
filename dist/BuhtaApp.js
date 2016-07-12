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
	var testBuhtaObject1_1 = __webpack_require__(9);
	// ReactDOM.render(
	//     <Hello compiler="TypeScript" framework="React" />,
	//     document.getElementById("example")
	// );
	// ReactDOM.render(
	//     <App/>,
	//     document.body
	// );
	ReactDOM.render(React.createElement(AppDesigner_1.AppDesigner, null), document.body);
	var xxx = new testBuhtaObject1_1.TestBuhtaObject1();
	var xxx1 = new testBuhtaObject1_1.TestBuhtaObject1();


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
	var Desktop_1 = __webpack_require__(25);
	var Movable_1 = __webpack_require__(28);
	var App_1 = __webpack_require__(26);
	var Input_1 = __webpack_require__(14);
	var testBuhtaObject2_1 = __webpack_require__(29);
	var AutoForm_1 = __webpack_require__(17);
	var TreeGrid_1 = __webpack_require__(30);
	var TreeGridColumn_1 = __webpack_require__(32);
	var SQL_1 = __webpack_require__(36);
	var Button_1 = __webpack_require__(20);
	var SqlTable_1 = __webpack_require__(38);
	var Snapshot_1 = __webpack_require__(24);
	var DesignedObject_1 = __webpack_require__(10);
	var TreeGridArrayDataSource_1 = __webpack_require__(40);
	var StringPropertyEditor_1 = __webpack_require__(11);
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
	        SQL_1.executeSQL("select TOP 0 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
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
	            alert(err.message);
	        });
	    };
	    AppDesigner.prototype.testWindowAutoSize = function () {
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
	    AppDesigner.prototype.render = function () {
	        var _this = this;
	        this.addClassName("app-designer");
	        this.addProps({ sizeTo: "parent" });
	        return (React.createElement(App_1.App, React.__spread({}, this.getRenderProps()), React.createElement(Layout_1.Layout, {sizeTo: "parent", type: "column"}, React.createElement(Fixed_1.Fixed, {className: "header1"}, "Fixed Header"), React.createElement(Flex_1.Flex, null, React.createElement(Layout_1.Layout, {type: "row", sizeTo: "parent"}, React.createElement(Fixed_1.Fixed, {className: "sidebar", style: { width: this.sideWidth }}, "Fixed Sidebar 123", React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testOpenWindow(); }}, " test open window"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testOpenObjectDesigner(); }}, "open designer"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testImmutable(); }}, "testImmutable"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testAutoForm(); }}, "test autoform"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testGrid(); }}, "test GRID"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testFlex(); }}, "test FLEX"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testTableDesigner(); }}, "test TABLE DESIGNER"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testSnapshot(); }}, "test SNAPSHOT"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testGrid2(); }}, "test GRID-2"), React.createElement("br", null), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testWindowAutoSize(); }}, "test WIN AUTOSIZE")), React.createElement(Flex_1.Flex, {className: "XXXcontent"}, React.createElement(Desktop_1.Desktop, null, React.createElement(Movable_1.Movable, {onMoveStart: this.moveStart.bind(this)}, "MOV"))))))));
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
	    Component.prototype.showConfirmationWindow = function (messageContent, resultCallback) {
	        var params = {
	            style: "confirmation",
	            parentWindowId: this.getParentWindowId(),
	            resultCallback: resultCallback
	        };
	        this.getParentDesktop().openMessageWindow(messageContent, params);
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
	        // DesignedObject constructor
	    }
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
	var ObjectDesigner = (function (_super) {
	    __extends(ObjectDesigner, _super);
	    function ObjectDesigner(props, context) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.snapshot = new Snapshot_1.Snapshot();
	        this.handleSaveChanges = function () {
	            console.log("save-changes");
	            //console.log(this.props.designedObject);
	            if (_this.props.onSaveChanges)
	                _this.props.onSaveChanges();
	        };
	        this.handleCancelChanges = function () {
	            console.log("cancel-changes");
	            _this.snapshot.restoreObject(_this.props.designedObject, "root");
	            if (_this.props.onCancelChanges)
	                _this.props.onCancelChanges();
	            //console.log(this.props.designedObject);
	        };
	        this.props = props;
	    }
	    ObjectDesigner.prototype.didMount = function () {
	        _super.prototype.didMount.call(this);
	        this.snapshot.saveObject(this.props.designedObject, "root");
	    };
	    ObjectDesigner.prototype.renderPropertyDesigners = function () {
	        var _this = this;
	        var ret = [];
	        getPropertyEditors_1.getPropertyEditors(this.props.designedObject).forEach(function (propInfo, index) {
	            //console.log(propInfo);
	            var editorProps = {
	                designedObject: _this.props.designedObject,
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
	    ObjectDesigner.prototype.render = function () {
	        this.addClassName("object-designer");
	        this.addProps({ onChange: this.props.onChange });
	        return (React.createElement(AutoForm_1.AutoForm, React.__spread({sizeTo: "parent", onSaveChanges: this.handleSaveChanges, onCancelChanges: this.handleCancelChanges}, this.getRenderProps()), "Object designer", this.renderPropertyDesigners()));
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps()), React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent"}, React.createElement(Flex_1.Flex, null, this.renderTabs()), React.createElement(Fixed_1.Fixed, null, React.createElement(Layout_1.Layout, {className: "auto-form-footer", type: "row", sizeTo: "content"}, React.createElement(Flex_1.Flex, null), React.createElement(Fixed_1.Fixed, null, React.createElement(Button_1.Button, {className: "is-success is-outlined", onClick: this.handleSaveButtonClick}, "Сохранить"), React.createElement(Button_1.Button, {onClick: this.handleCancelButtonClick}, "Отмена")))))));
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
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var App_1 = __webpack_require__(26);
	var Window_1 = __webpack_require__(27);
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
	        var okButton;
	        if (openParams.okButtonContent) {
	            okButton = React.createElement(Button_1.Button, null, openParams.okButtonContent);
	        }
	        var cancelButton;
	        var win = React.createElement("div", null, winContent, React.createElement("div", null, okButton, cancelButton));
	        this.openWindow(winContent, winParams);
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(5);
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps()), this.props.children));
	    };
	    return App;
	}(Component_1.Component));
	exports.App = App;


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
	var ReactDOM = __webpack_require__(2);
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var Layout_1 = __webpack_require__(6);
	var Fixed_1 = __webpack_require__(7);
	var Flex_1 = __webpack_require__(8);
	var Movable_1 = __webpack_require__(28);
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
	        console.log(this.state.autoSize);
	        if (this.state.autoSize === "content") {
	            console.log("content");
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
/* 29 */
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
	        _super.call(this);
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
/* 30 */
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
	var TreeGridColumns_1 = __webpack_require__(31);
	var TreeGridColumn_1 = __webpack_require__(32);
	var Keycode_1 = __webpack_require__(34);
	var Movable_1 = __webpack_require__(28);
	var getScrollBarWidth_1 = __webpack_require__(35);
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
	    function InternalRow() {
	        this.cellElements = [];
	    }
	    return InternalRow;
	}());
	exports.InternalRow = InternalRow;
	var InternalTreeNode = (function () {
	    function InternalTreeNode() {
	        this.cellElements = [];
	        this.children = [];
	    }
	    InternalTreeNode.prototype.pushRowRecursive = function (rows, maxPageLength) {
	        if (rows.length >= maxPageLength)
	            return;
	        var row = new InternalRow();
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
	            //this.openEditForm(this.state.rows[this.state.focusedRowIndex]);
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
	                    var node = new InternalTreeNode();
	                    node.sourceIndex = s.objIndex;
	                    node.level = 0;
	                    node.expanded = node.level < _this.props.autoExpandNodesToLevel;
	                    cache[nodeId] = node;
	                    _this.state.nodes.push(node);
	                }
	            }
	            else {
	                var parentNode = cache[parentId];
	                var node = new InternalTreeNode();
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
	                    var row = new InternalRow();
	                    row.sourceIndex = index;
	                    _this.state.rows.push(row);
	                });
	            }
	            else {
	                this.state.dataSource.getDataRows().forEach(function (obj, index) {
	                    var row = new InternalRow();
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
	                buttons.push(React.createElement(Button_1.Button, {key: "insert", className: "is-smalln", onClick: this.handleInsertButtonClick}, "Добавить"));
	            if (this.props.denyUpdate !== true)
	                buttons.push(React.createElement(Button_1.Button, {key: "update", className: "is-smalln", onClick: this.handleUpdateButtonClick}, "Изменить"));
	            if (this.props.denyDelete !== true)
	                buttons.push(React.createElement(Button_1.Button, {key: "delete", className: "is-smalln", onClick: this.handleDeleteButtonClick}, "Удалить"));
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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var _ = __webpack_require__(4);
	var Component_1 = __webpack_require__(5);
	var registerGridColumn_1 = __webpack_require__(33);
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var io = __webpack_require__(37);
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
/* 37 */
/***/ function(module, exports) {

	module.exports = io;

/***/ },
/* 38 */
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
	var ListPropertyEditor_1 = __webpack_require__(39);
	var TreeGridColumn_1 = __webpack_require__(32);
	var SqlTable = (function (_super) {
	    __extends(SqlTable, _super);
	    function SqlTable() {
	        _super.apply(this, arguments);
	        this.columns = [];
	        this.testProc2 = function () {
	        };
	    }
	    SqlTable.prototype.addColumn = function (initCallback) {
	        var col = new SqlTableColumn();
	        col.table = this;
	        this.columns.push(col);
	        initCallback(col);
	        this.testProc2();
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
	    function SqlTableColumn() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(SqlTableColumn.prototype, "testColumn", {
	        get: function () {
	            return this.name + "+" + this.dataType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
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
/* 39 */
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
	var TreeGrid_1 = __webpack_require__(30);
	var TreeGridArrayDataSource_1 = __webpack_require__(40);
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
	        return (React.createElement(TreeGrid_1.TreeGrid, {dataSource: dataSource, treeMode: false}));
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(4);
	var getGridColumnInfos_1 = __webpack_require__(41);
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
	            throw "TreeGridArrayDataSource: method getNewRow() not defined";
	    };
	    TreeGridArrayDataSource.prototype.addRow = function (row) {
	        this.arrayObj.push(row);
	        return this.arrayObj.length - 1;
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
/* 41 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGYxZjQwNmNlYjQ2YzA3NmY0ZGIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RhYnMvVGFicy50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvRm9ybS9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL1Zpc2libGVQbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvUGx1Z2luLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL09uQ2xpY2tQbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NuYXBzaG90LnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Rlc2t0b3AvRGVza3RvcC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9XaW5kb3cvV2luZG93LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGUudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvcmVnaXN0ZXJHcmlkQ29sdW1uLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9LZXlDb2RlLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9nZXRTY3JvbGxCYXJXaWR0aC50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU1FMLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlvXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1zcWwvU3FsVGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRBcnJheURhdGFTb3VyY2UudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL2dldEdyaWRDb2x1bW5JbmZvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0EsS0FBWSxLQUFLLHVCQUFNLENBQU8sQ0FBQztBQUMvQixLQUFZLFFBQVEsdUJBQU0sQ0FBVyxDQUFDO0FBSXRDLHlDQUEwQixDQUErQyxDQUFDO0FBQzFFLDhDQUErQixDQUEyQixDQUFDO0FBRTNELG9CQUFtQjtBQUNuQiwwREFBeUQ7QUFDekQsMENBQXlDO0FBQ3pDLE1BQUs7QUFFTCxvQkFBbUI7QUFDbkIsZUFBYztBQUNkLHFCQUFvQjtBQUNwQixNQUFLO0FBRUwsU0FBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyx5QkFBVyxPQUFFLEVBQ2QsUUFBUSxDQUFDLElBQUksQ0FDaEIsQ0FBQztBQUdGLEtBQUksR0FBRyxHQUFDLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUMvQixLQUFJLElBQUksR0FBQyxJQUFJLG1DQUFnQixFQUFFLENBQUM7Ozs7Ozs7QUN6QmhDLHdCOzs7Ozs7QUNBQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsS0FBWSxLQUFLLHVCQUFNLENBQU8sQ0FBQztBQUUvQixLQUFZLENBQUMsdUJBQU0sQ0FBUSxDQUFDO0FBQzVCLHVDQUF3RCxDQUF1QyxDQUFDO0FBQ2hHLG9DQUFxQixDQUErQyxDQUFDO0FBQ3JFLG1DQUFvQixDQUE4QyxDQUFDO0FBQ25FLGtDQUFtQixDQUE2QyxDQUFD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SSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO2FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDN0MsSUFBSTthQUNBLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztLQUNqQyxDQUFDO0tBQ0wsOEJBQUM7QUFBRCxFQUFDO0FBN0RZLGdDQUF1QiwwQkE2RG5DOzs7Ozs7OztBQ3pFRCw2QkFBbUMsR0FBbUI7S0FFbEQsSUFBSSxLQUFLLEdBQUksR0FBRyxDQUFDLFdBQW1CLENBQUMsaUJBQXFDLENBQUM7S0FFM0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDUCxNQUFNLENBQUMsRUFBRSxDQUFDO0tBRWQsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLElBQUssVUFBRyxZQUFZLEdBQUcsQ0FBQyxVQUFVLEVBQTdCLENBQTZCLENBQUMsQ0FBQztLQUU3RCxxQ0FBcUM7S0FDckMsdUJBQXVCO0tBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFFakIsRUFBQztBQWJlLDJCQUFrQixxQkFhakMiLCJmaWxlIjoiLi9kaXN0L0J1aHRhQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZjFmNDA2Y2ViNDZjMDc2ZjRkYlxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBIZWxsbyB9IGZyb20gXCIuL0hlbGxvUHJvcHNcIjtcclxuaW1wb3J0IHtBcHB9IGZyb20gXCIuLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7QXBwRGVzaWduZXJ9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXJcIjtcclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MVwiO1xyXG5cclxuLy8gUmVhY3RET00ucmVuZGVyKFxyXG4vLyAgICAgPEhlbGxvIGNvbXBpbGVyPVwiVHlwZVNjcmlwdFwiIGZyYW1ld29yaz1cIlJlYWN0XCIgLz4sXHJcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVcIilcclxuLy8gKTtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICAgIDxBcHAvPixcclxuLy8gICAgIGRvY3VtZW50LmJvZHlcclxuLy8gKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxBcHBEZXNpZ25lci8+LFxyXG4gICAgZG9jdW1lbnQuYm9keVxyXG4pO1xyXG5cclxuXHJcbmxldCB4eHg9bmV3IFRlc3RCdWh0YU9iamVjdDEoKTtcclxubGV0IHh4eDE9bmV3IFRlc3RCdWh0YU9iamVjdDEoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2NvbXBvbmVudHMvaW5kZXgudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GbGV4XCI7XHJcblxyXG5pbXBvcnQge1Rlc3RCdWh0YU9iamVjdDF9IGZyb20gXCIuLi8uLi9UZXN0MS90ZXN0QnVodGFPYmplY3QxXCI7XHJcbmltcG9ydCB7T2JqZWN0RGVzaWduZXJ9IGZyb20gXCIuLi9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lclwiO1xyXG5pbXBvcnQge0Rlc2t0b3AsIE9wZW5XaW5kb3dQYXJhbXN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCB7RHJhZ2dhYmxlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0RyYWdnYWJsZS9EcmFnZ2FibGVcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlRXZlbnQsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge0FwcCwgYXBwSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7V2luZG93fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHtJbnB1dCwgSW5wdXRUeXBlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7SW5wdXREaXZpZGVyfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0RGl2aWRlci9JbnB1dERpdmlkZXJcIjtcclxuaW1wb3J0IHt0ZXN0QnVodGFPYmplY3QyfSBmcm9tIFwiLi4vLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MlwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvcnNcIjtcclxuaW1wb3J0IHtBdXRvRm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge1RyZWVHcmlkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW4sIEdyaWRDb2x1bW59IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbnN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zXCI7XHJcbmltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQge1NxbFRhYmxlfSBmcm9tIFwiLi4vLi4vYnVodGEtc3FsL1NxbFRhYmxlXCI7XHJcbmltcG9ydCB7U25hcHNob3R9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL1NuYXBzaG90XCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQXJyYXlEYXRhU291cmNlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQXJyYXlEYXRhU291cmNlXCI7XHJcbmltcG9ydCB7U3RyaW5nUHJvcGVydHlFZGl0b3IsIFN0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQgUmVhY3RET00gPSBfX1JlYWN0LlJlYWN0RE9NO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGVzaWduZXJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcERlc2lnbmVyU3RhdGU+IHtcclxuICAgIC8vdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgQXBwRGVzaWduZXJTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPEFwcERlc2lnbmVyUHJvcHM+IHtcclxuICAgIC8vdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcERlc2lnbmVyIGV4dGVuZHMgQ29tcG9uZW50PEFwcERlc2lnbmVyUHJvcHMsIEFwcERlc2lnbmVyU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBcHBEZXNpZ25lclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwRGVzaWduZXJTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gaW5pdFRlc3QoKSB7XHJcbiAgICAvLyAgICAgdGhpcy50ZXN0T2JqZWN0Lm5hbWUgPSBcItCi0LXRgdGC0L7QstGL0Lkg0L7QsdGK0LXQutGCMVwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIG1vdmVTdGFydChlOiBNb3ZlU3RhcnRFdmVudCkge1xyXG4gICAgICAgIGUuYmluZFgodGhpcywgXCJzaWRlV2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNpZGVXaWR0aDogbnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHRlc3RPcGVuV2luZG93KCkge1xyXG5cclxuICAgICAgICAvLyBsZXQgb2JqID0ge1xyXG4gICAgICAgIC8vICAgICDQpNCw0LzQuNC70LjRjzogXCLQodCw0LLRh9C10L3QutC+0LJcIixcclxuICAgICAgICAvLyAgICAg0JjQvNGPOiBcItCa0L7QvdGB0YLQsNC90YLQuNC9XCIsXHJcbiAgICAgICAgLy8gICAgINCe0YLRh9C10YHRgtCy0L46IFwi0JLQu9Cw0LTQuNC80LjRgNC+0LLQuNGHXCJcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IHdpbiA9XHJcbiAgICAgICAgLy8gICAgIDxUYWJzPlxyXG4gICAgICAgIC8vICAgICAgICAgPFRhYiB0aXRsZT1cItC30LDQutC70LDQtNC60LAgMVwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXQgY2FwdGlvbj1cItCk0LDQvNC40LvQuNGPXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0KTQsNC80LjQu9C40Y9cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dCBjYXB0aW9uPVwi0JjQvNGPXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0JjQvNGPXCIvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXREaXZpZGVyIHRpdGxlPVwi0LAg0YLQtdC/0LXRgNGMINC+0YLRh9C10YHRgtCy0L5cIj48L0lucHV0RGl2aWRlcj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXtvYmp9IGJpbmRQcm9wTmFtZT1cItCe0YLRh9C10YHRgtCy0L5cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIC8vICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgLy8gICAgICAgICA8VGFiIHRpdGxlPVwi0LfQsNC60LvQsNC00LrQsCAyXCI+IDIyMjIyIDwvVGFiPlxyXG4gICAgICAgIC8vICAgICA8L1RhYnM+O1xyXG4gICAgICAgIC8vIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGVzdE9wZW5PYmplY3REZXNpZ25lcigpIHtcclxuICAgICAgICBsZXQgdGVzdE9iamVjdDogVGVzdEJ1aHRhT2JqZWN0MSA9IG5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcbiAgICAgICAgdGVzdE9iamVjdC5maXJzdE5hbWUgPSBcItCY0LPQvtGA0YwwXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdC5sYXN0TmFtZSA9IFwi0KHQuNC00L7RgNC10L3QutC+MFwiO1xyXG4gICAgICAgIHRlc3RPYmplY3Quc3VyTmFtZSA9IFwi0J7Qu9C10LPQvtCy0LjRhzBcIjtcclxuXHJcbi8vICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyIG9uQ2hhbmdlPXsoKT0+eyB3aW4ySW5zdGFuY2UuZGVzaWduZWRPYmplY3Q9bnVsbDsgd2luMkluc3RhbmNlLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwidGVzdDMyMy1jaGFuZ2VcIil9fSBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdH0ga2V5PVwiMVwiPiA8L09iamVjdERlc2lnbmVyPjtcclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IHRlc3RPYmplY3QgPSBfLmNsb25lRGVlcCh0ZXN0T2JqZWN0KTsgIHdpbjJJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpOyBjb25zb2xlLmxvZyhcInRlc3Q5OTktY2hhbmdlXCIpOyB9fVxyXG4gICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdH0ga2V5PVwiMVwiPiA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgbGV0IHRlc3RPYmplY3QyOiB0ZXN0QnVodGFPYmplY3QyID0gbmV3IHRlc3RCdWh0YU9iamVjdDIoKTtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5maXJzdE5hbWUgPSBcItCY0LPQvtGA0YwxXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdDIubGFzdE5hbWUgPSBcItCh0LjQtNC+0YDQtdC90LrQvjJcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5zdXJOYW1lID0gXCLQntC70LXQs9C+0LLQuNGHMVwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLnNleCA9IFwi0LzRg9C20YHQutC+0LlcIjtcclxuXHJcbiAgICAgICAgbGV0IHdpbjJJbnN0YW5jZTogYW55O1xyXG5cclxuICAgICAgICBsZXQgd2luMiA9IDxPYmplY3REZXNpZ25lciByZWY9eyAoZTphbnkpID0+IHsgd2luMkluc3RhbmNlID0gZTsgfSB9IGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCI+XHJcbiAgICAgICAgPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgIC8vZ2V0UHJvcGVydHlFZGl0b3JzKHRlc3RPYmplY3QpO1xyXG4gICAgICAgIC8vZ2V0UHJvcGVydHlFZGl0b3JzKHRlc3RPYmplY3QyKTtcclxuXHJcbiAgICAgICAgbGV0IHdpbndpbiA9IDxkaXY+e3dpbn17d2luMn08L2Rpdj47XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcItC+0LrQvdC+IDFcIixcclxuICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgbGVmdDogNTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2lud2luLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHRlc3RJbW11dGFibGUoKSB7XHJcbiAgICAgICAgLy8gLy9sZXQgZmFrZT1uZXcgVGFibGUoW10pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc3QgeHh4ID0gSW1tdXRhYmxlLk1hcDxzdHJpbmcsIG51bWJlcj4oKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBvYmogPSB7XHJcbiAgICAgICAgLy8gICAgIG5hbWU6IFwi0J7Qs9Cw0L3QuNC30LDRhtC40Y9cIixcclxuICAgICAgICAvLyAgICAgY29sdW1uczoge1wi0J3QvtC80LXRgFwiOiB7Y29sTmFtZTogXCLQndC+0LzQtdGAXCIsIHR5cGU6IFwic3RyaW5nXCJ9LCBcItCd0LDQt9Cy0LDQvdC40LVcIjoge2NvbE5hbWU6IFwi0J3QsNC30LLQsNC90LjQtVwiLCB0eXBlOiBcInN0cmluZ1wifX1cclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IG9iakkgPSBJbW11dGFibGUuZnJvbUpTKG9iaik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAvL2xldCBtID0gSW1tdXRhYmxlLk1hcDxzdHJpbmcsbnVtYmVyfCBJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+PigpO1xyXG4gICAgICAgIC8vIC8vbGV0IHggPSBtLnNldChcIjEzeXl0MzMzMzMyXCIsIDEyKTtcclxuICAgICAgICAvLyAvL2xldCB5ID0gbS5zZXQoXCJ4eHhcIiwgSW1tdXRhYmxlLk1hcDxudW1iZXIsc3RyaW5nPigpKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIC8vbGV0IHk9bS51cGRhdGUoXCJ4eHhcIixJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+KCkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2JqSS50b1N0cmluZygpKTtcclxuICAgICAgICAvLyBsZXQgeCA9IG9iakkuZ2V0SW4oWydjb2x1bW5zJywgJ9Cd0L7QvNC10YAnLCAnY29sTmFtZSddKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh4KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHN0cjogc3RyaW5nID0gXCLQv9GA0LjQstC10YJcIjtcclxuXHJcbiAgICB0ZXN0QXV0b0Zvcm0oKSB7XHJcbiAgICAgICAgbGV0IHdpbjIgPVxyXG4gICAgICAgICAgICA8QXV0b0Zvcm0gc2l6ZVRvPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfSBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsxXCIgaW5wdXRDYXB0aW9uPVwiZWVlMVwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizFcIiBpbnB1dENhcHRpb249XCJlZWUyXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMVwiIGlucHV0Q2FwdGlvbj1cImVlZTNcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsyXCIgaW5wdXRDYXB0aW9uPVwiZWVlNFwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgPC9BdXRvRm9ybT47XHJcbi8vICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YtcIiBpbnB1dENhcHRpb249XCJlZWVcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc30gYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJhdXRvIGZvcm1cIixcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgbGVmdDogMTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdEdyaWQoKSB7XHJcbiAgICAgICAgLy8gZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgICAgIC8vICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBkYXRhU291cmNlID0gdGFibGUucm93cy5tYXA8RGVzaWduZWRPYmplY3Q+KChyKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHvQmtC70Y7RhzogcltcItCa0LvRjtGHXCJdLCDQndC+0LzQtdGAOiByW1wi0J3QvtC80LXRgFwiXSwg0J3QsNC30LLQsNC90LjQtTogcltcItCd0LDQt9Cy0LDQvdC40LVcIl19O1xyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGRzID0gbmV3IFRyZWVHcmlkQXJyYXlEYXRhU291cmNlKGRhdGFTb3VyY2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YAgPT5cIiArIHRhYmxlLnJvd3NbMF0uZ2V0VmFsdWUoMSkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9eyBkYXRhU291cmNlIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdHJlZU1vZGU9e3RydWV9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGhpZXJhcmNoeUZpZWxkTmFtZT1cItCd0L7QvNC10YBcIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPVwiLlwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw9ezB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBkZW55RGVsZXRlPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgID5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1ucz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JrQvtC70L7QvdC60LAyXCIgcHJvcGVydHlOYW1lPVwi0J3QvtC80LXRgFwiIHNob3dIaWVyYXJjaHlUcmVlPXtmYWxzZX1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwM1wiIHByb3BlcnR5TmFtZT1cItCd0LDQt9Cy0LDQvdC40LVcIiBzaG93SGllcmFyY2h5VHJlZT17dHJ1ZX1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwMVwiIHByb3BlcnR5TmFtZT1cItCa0LvRjtGHXCIgd2lkdGg9ezgwfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW5zPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvVHJlZUdyaWQ+O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiBcImF1dG8gZm9ybVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiA4MDBcclxuICAgICAgICAvLyAgICAgICAgIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvL1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0RmxleCgpIHtcclxuICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOlwiMnB4IGRvdHRlZCByZWRcIiwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgbGVmdDowLHJpZ2h0OjAsIGJvdHRvbTowIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkIHN0eWxlPXt7IGJvcmRlcjpcIjJweCBkb3R0ZWQgYmx1ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0J7QtNC40L08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIGdyZWVuXCIgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiIHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCByZWRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIGJsdWVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0t0J7QtNC40L08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIGdyZWVuXCIgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPi0tLS0tLS3QlNCy0LA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0tLS3QlNCy0LAxPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTExMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMjIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjExMTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjIyMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMTExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjIyMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTExMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMjIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkIHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCBtYXJvb25cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0tLS3QotGA0Lg8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIG1hcm9vblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0KLRgNC4PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwidGVzdCBGTEVYXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDEwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRlc3RUYWJsZURlc2lnbmVyKCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IG5ldyBTcWxUYWJsZSgpO1xyXG5cclxuICAgICAgICB0YWJsZS5uYW1lID0gXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgdGFibGUuc3FsbmFtZSA9IFwiZGJvLtCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIjtcclxuICAgICAgICB0YWJsZS5hZGRDb2x1bW4oKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICBjb2wubmFtZSA9IFwi0J3QvtC80LXRgFwiO1xyXG4gICAgICAgICAgICBjb2wuZGF0YVR5cGUgPSBcInZhcmNoYXIoMTApXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0LDQt9Cy0LDQvdC40LVcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDUwKVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IGNvbnNvbGUubG9nKFwidGFibGUtY2hhbmdlXCIpOyB9fVxyXG4gICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17dGFibGV9PlxyXG4gICAgICAgIDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLQntGA0LPQsNC90LjQt9Cw0YbQuNGPXCIsXHJcbiAgICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDUwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRlc3RTbmFwc2hvdCgpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBuZXcgU3FsVGFibGUoKTtcclxuXHJcbiAgICAgICAgdGFibGUubmFtZSA9IFwi0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgIHRhYmxlLnNxbG5hbWUgPSBcImRiby7QntGA0LPQsNC90LjQt9Cw0YbQuNGPXCI7XHJcbiAgICAgICAgdGFibGUuYWRkQ29sdW1uKChjb2wpID0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0L7QvNC10YBcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDEwKVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbC5uYW1lID0gXCLQndCw0LfQstCw0L3QuNC1XCI7XHJcbiAgICAgICAgICAgIGNvbC5kYXRhVHlwZSA9IFwidmFyY2hhcig1MClcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xyXG5cclxuICAgICAgICBsZXQgcyA9IG5ldyBTbmFwc2hvdCgpO1xyXG4gICAgICAgIHMuc2F2ZU9iamVjdCh0YWJsZSwgXCJ0YWJsZTFcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuXHJcbiAgICAgICAgdGFibGUubmFtZSA9IFwi0LbQvtC/0LBcIjtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWJsZSk7XHJcblxyXG4gICAgICAgIHMucmVzdG9yZU9iamVjdCh0YWJsZSwgXCJ0YWJsZTFcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xyXG5cclxuICAgICAgICB0aGlzLnRlc3RTbmFwc2hvdFByZWZvcm1hbmNlKCk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGVzdFNuYXBzaG90UHJlZm9ybWFuY2UoKSB7XHJcbiAgICAgICAgbGV0IHg6IGFueSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWJsZSA9IG5ldyBTcWxUYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgdGFibGUubmFtZSA9IFwi0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgICAgICB0YWJsZS5zcWxuYW1lID0gXCJkYm8u0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgICAgICB0YWJsZS5hZGRDb2x1bW4oKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0L7QvNC10YBcIjtcclxuICAgICAgICAgICAgICAgIGNvbC5kYXRhVHlwZSA9IFwidmFyY2hhcigxMClcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2wubmFtZSA9IFwi0J3QsNC30LLQsNC90LjQtVwiO1xyXG4gICAgICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDUwKVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgeC5wdXNoKHRhYmxlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgcyA9IG5ldyBTbmFwc2hvdCgpO1xyXG4gICAgICAgIGNvbnNvbGUudGltZShcIngxXCIpO1xyXG4gICAgICAgIHMuc2F2ZU9iamVjdCh4LCBcInhcIik7XHJcbiAgICAgICAgY29uc29sZS50aW1lRW5kKFwieDFcIik7XHJcbiAgICAgICAgeC5sZW5ndGggPSAwO1xyXG4gICAgICAgIHMucmVzdG9yZU9iamVjdCh4LCBcInhcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coeCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRlc3RHcmlkMigpIHtcclxuXHJcbiAgICAgICAgY2xhc3MgVmlkIGV4dGVuZHMgRGVzaWduZWRPYmplY3Qge1xyXG5cclxuICAgICAgICAgICAgQFN0cmluZ0VkaXRvcigpXHJcbiAgICAgICAgICAgIEBHcmlkQ29sdW1uKHtjYXB0aW9uOiBcItGN0YLQviDQvdC+0LzQtdGAXCJ9KVxyXG4gICAgICAgICAgICBOdW06IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIEBTdHJpbmdFZGl0b3IoKVxyXG4gICAgICAgICAgICBAR3JpZENvbHVtbih7fSlcclxuICAgICAgICAgICAgTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgICAgICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlkcyA9IHRhYmxlLnJvd3MubWFwPFZpZD4oKHIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZpZCA9IG5ldyBWaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWQuTnVtID0gXCIqXCIgKyByW1wi0J3QvtC80LXRgFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB2aWQuTmFtZSA9IFwiKlwiICsgcltcItCd0LDQt9Cy0LDQvdC40LVcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdCBUT1AgMTAgPT0+IFwiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmlkcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBuZXcgVHJlZUdyaWRBcnJheURhdGFTb3VyY2Uodmlkcyk7XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlLnBhcmFtcy5nZXROZXdSb3cgPSAoKSA9PiBuZXcgVmlkKCk7XHJcbiAgICAgICAgICAgICAgICAvL2RhdGFTb3VyY2UucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UgPSAoKSA9PiBcItCS0YHQtSDQv9GD0YHRgtC+LCDQsdC70LjQvSEg0JbQvNC4INC90LAg0LPQsNC3IVwiO1xyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5wYXJhbXMuZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZSA9ICgpID0+IDxzcGFuPlwi0JLRgdC1INC/0YPRgdGC0L4sIDxpPtCx0LvQuNC9ITwvaT4g0JbQvNC4INC90LAg0LPQsNC3IVwiPC9zcGFuPjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkPjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInRlc3QgZ3JpZCAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmFpbCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFdpbmRvd0F1dG9TaXplKCkge1xyXG5cclxuICAgICAgICBsZXQgbWFnPVwiR2V0IHRoZSBjdXJyZW50IGNvb3JkaW5hdGVzIG9mIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBzZXQgb2YgbWF0Y2hlZCBlbGVtZW50cywgcmVsYXRpdmUgdG8gXCI7XHJcblxyXG4gICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAg0J/RgNC40LLQtdGCINGD0YDQvtC00YtcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCU0LAg0Lgg0L3QtdGCIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0JTQsCDQuCDQvdC10YIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCU0LAg0Lgg0L3QtdGCIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7QlNCwINC4INC90LXRgiA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+0JTQsCDQuCDQvdC10YIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgKHNlbmRlcjpCdXR0b24sIGU6UmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuTWVzc2FnZVdpbmRvdyhtYWcsIHsgc3R5bGU6XCJpbmZvcm1hdGlvblwiLCBwYXJlbnRXaW5kb3dJZDogc2VuZGVyLmdldFBhcmVudFdpbmRvd0lkKCkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCd0L7QstC+0LVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJ0ZXN0IEFVVE9TSVpFXCIsXHJcbiAgICAgICAgICAgIGF1dG9TaXplOiBcImNvbnRlbnRcIixcclxuICAgICAgICAgICAgYXV0b1Bvc2l0aW9uOiBcImRlc2t0b3AtY2VudGVyXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXBwLWRlc2lnbmVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtzaXplVG86IFwicGFyZW50XCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFwcCB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgc2l6ZVRvPVwicGFyZW50XCIgdHlwZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJoZWFkZXIxXCI+Rml4ZWQgSGVhZGVyPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwicm93XCIgc2l6ZVRvPVwicGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwic2lkZWJhclwiIHN0eWxlPXt7d2lkdGg6dGhpcy5zaWRlV2lkdGh9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaXhlZCBTaWRlYmFyIDEyMzxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdE9wZW5XaW5kb3coKTsgfX0+IHRlc3Qgb3BlbiB3aW5kb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RPcGVuT2JqZWN0RGVzaWduZXIoKTsgfX0+b3BlbiBkZXNpZ25lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEltbXV0YWJsZSgpOyB9fT50ZXN0SW1tdXRhYmxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0QXV0b0Zvcm0oKTsgfX0+dGVzdCBhdXRvZm9ybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEdyaWQoKTsgfX0+dGVzdCBHUklEPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0RmxleCgpOyB9fT50ZXN0IEZMRVg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RUYWJsZURlc2lnbmVyKCk7IH19PnRlc3QgVEFCTEUgREVTSUdORVI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RTbmFwc2hvdCgpOyB9fT50ZXN0IFNOQVBTSE9UPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0R3JpZDIoKTsgfX0+dGVzdCBHUklELTI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdFdpbmRvd0F1dG9TaXplKCk7IH19PnRlc3QgV0lOIEFVVE9TSVpFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwiWFhYY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92YWJsZSBvbk1vdmVTdGFydD17dGhpcy5tb3ZlU3RhcnQuYmluZCh0aGlzKX0+TU9WPC9Nb3ZhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0FwcD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcbmltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi4vUGx1Z2lucy9QbHVnaW5cIjtcclxuaW1wb3J0IHtXaW5kb3d9IGZyb20gXCIuL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtEZXNrdG9wLCBPcGVuTWVzc2FnZVdpbmRvd1BhcmFtc30gZnJvbSBcIi4vRGVza3RvcC9EZXNrdG9wXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBYT25DbGlja1Byb3BzIHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50UHJvcHM8Uz4gZXh0ZW5kcyBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8RWxlbWVudD4ge1xyXG4gICAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG4gICAgb25XaWxsTW91bnQ/OiAoc3RhdGU6IFMpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U3RhdGU8UD4ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogQ29tcG9uZW50PFAsIGFueT4pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9yY2VVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvL2NsaWNrQ291bnQ6IG51bWJlcjtcclxuICAgIC8vIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8Uz4sIFMgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxQPj4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UCwgUz4ge1xyXG5cclxuICAgIHBsdWdpbnM6IENvbXBvbmVudFBsdWdpbjxhbnksIGFueT5bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQLCBjb250ZXh0OiBhbnkgLypzdGF0ZUNsYXNzPzogRnVuY3Rpb24qLykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgLy8gdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IHBsdWdJbnN0YW5jZTogYW55ID0gbmV3IHBsdWcodGhpcyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdJbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJQcm9wczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIHJlbmRlclN0eWxlczogYW55ID0ge307XHJcblxyXG4gICAgZ2V0UGFyZW50V2luZG93KCk6IFdpbmRvdyB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKChwYXJlbnQgYXMgYW55KS4kJHdpbmRvdylcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyZW50IGFzIGFueSkuJCR3aW5kb3cgYXMgV2luZG93O1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50RGVza3RvcCgpOiBEZXNrdG9wIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAoKHBhcmVudCBhcyBhbnkpLiQkZGVza3RvcClcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyZW50IGFzIGFueSkuJCRkZXNrdG9wIGFzIERlc2t0b3A7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UGFyZW50V2luZG93SWQoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcGFyZW50V2luID0gdGhpcy5nZXRQYXJlbnRXaW5kb3coKTtcclxuICAgICAgICBpZiAocGFyZW50V2luKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRXaW4uc3RhdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvcHMocHJvcHM6IE9iamVjdCkge1xyXG4gICAgICAgIF8uYXNzaWduV2l0aCh0aGlzLnJlbmRlclByb3BzLCBwcm9wcywgKG9iamVjdFZhbHVlOiBhbnksIHNvdXJjZVZhbHVlOiBhbnksIGtleT86IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcImNsYXNzXCIgfHwga2V5ID09PSBcImNsYXNzTmFtZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImludmFsaWQgcHJvcGVydHkgJ1wiICsga2V5ICsgXCInLCB1c2UgZnVuY3Rpb25zIGFkZENsYXNzTmFtZSgpLCB0b2dnbGVDbGFzc05hbWUoKVwiKTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJzdHlsZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImludmFsaWQgcHJvcGVydHkgJ1wiICsga2V5ICsgXCInLCB1c2UgZnVuY3Rpb25zIGFkZFN0eWxlcygpLCByZW1vdmVTdHlsZSgpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlVmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3R5bGVzKHN0eWxlczogT2JqZWN0KSB7XHJcbiAgICAgICAgXy5hc3NpZ24odGhpcy5yZW5kZXJTdHlsZXMsIHN0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTdHlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTdHlsZXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucmVuZGVyU3R5bGVzW3N0eWxlXTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdHlsZXMoc3R5bGVzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKChzdHlsZSk9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlbmRlclN0eWxlc1tzdHlsZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcuZGlkTW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlkTW91bnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxNb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2lsbE1vdW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25XaWxsTW91bnQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25XaWxsTW91bnQodGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzOiBQKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc1Byb3BzRXF1YWwob2JqMTogYW55LCBvYmoyOiBhbnksIGV4Y2x1ZGVQcm9wcz86IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIC8vTG9vcCB0aHJvdWdoIHByb3BlcnRpZXMgaW4gb2JqZWN0IDFcclxuICAgICAgICBmb3IgKGxldCBwIGluIG9iajEpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChleGNsdWRlUHJvcHMgJiYgZXhjbHVkZVByb3BzLmluZGV4T2YocCkgPj0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAvL0NoZWNrIHByb3BlcnR5IGV4aXN0cyBvbiBib3RoIG9iamVjdHNcclxuICAgICAgICAgICAgaWYgKG9iajEuaGFzT3duUHJvcGVydHkocCkgIT09IG9iajIuaGFzT3duUHJvcGVydHkocCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvYmoxW3BdICE9PSBvYmoyW3BdKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMSBub3QgZXF1YWwgXCIgKyBwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHN3aXRjaCAodHlwZW9mIChvYmoxW3BdKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy9EZWVwIGNvbXBhcmUgb2JqZWN0c1xyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoIU9iamVjdC5jb21wYXJlKG9iajFbcF0sIG9iajJbcF0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICAvL0NvbXBhcmUgZnVuY3Rpb24gY29kZVxyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnZnVuY3Rpb24nOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmICh0eXBlb2YgKG9iajJbcF0pID09ICd1bmRlZmluZWQnIHx8IChwICE9ICdjb21wYXJlJyAmJiBvYmoxW3BdLnRvU3RyaW5nKCkgIT0gb2JqMltwXS50b1N0cmluZygpKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgLy9Db21wYXJlIHZhbHVlc1xyXG4gICAgICAgICAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAob2JqMVtwXSAhPT0gb2JqMltwXSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0NoZWNrIG9iamVjdCAyIGZvciBhbnkgZXh0cmEgcHJvcGVydGllc1xyXG4gICAgICAgIGZvciAobGV0IHAgaW4gb2JqMikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChvYmoxW3BdKSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgKG9iajJbcF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMiBub3QgZXF1YWwgXCIgKyBwKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqMSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9iajIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHByb3RlY3RlZCBzaGFsbG93Q29tcGFyZShuZXh0UHJvcHM6IFApOiBib29sZWFuIHtcclxuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKFwic2hhbGxvdy0wIFwiICsgdGhpcy5jb25zdHJ1Y3Rvci50b1N0cmluZygpLnN1YnN0cmluZygwLCAzMCkpO1xyXG4gICAgLy8gICAgIC8vY29uc29sZS50aW1lKFwiMjJcIik7XHJcbiAgICAvLyAgICAgbGV0IHJldCA9IHNoYWxsb3dDb21wYXJlKHRoaXMsIG5leHRQcm9wcywgdGhpcy5zdGF0ZSk7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLnRpbWVFbmQoXCIyMlwiKTtcclxuICAgIC8vICAgICByZXR1cm4gcmV0O1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIHByaXZhdGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKG5leHRQcm9wczogUCwgbmV4dFN0YXRlOiBTKSA9PiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHM6IFAsIHByZXZTdGF0ZTogUywgcHJldkNvbnRleHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBwcmV2Q29udGV4dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCBkaWRVcGRhdGUocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxSZWNlaXZlUHJvcHMocHJldlByb3BzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsVW5tb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsVW5tb3VudCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRDbGFzc05hbWUoY2xhc3NOYW1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNsYXNzTmFtZShib29sVmFsdWU6IGJvb2xlYW4sIHRydWVDbGFzc05hbWVzOiBzdHJpbmcsIGZhbHNlQ2xhc3NOYW1lcz86IHN0cmluZykge1xyXG4gICAgICAgIGlmIChib29sVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUodHJ1ZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoZmFsc2VDbGFzc05hbWVzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzc05hbWUoZmFsc2VDbGFzc05hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3NOYW1lKHRydWVDbGFzc05hbWVzKTtcclxuICAgICAgICAgICAgaWYgKGZhbHNlQ2xhc3NOYW1lcylcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKGZhbHNlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWVzOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lcylcclxuICAgICAgICAgICAgY2xhc3NOYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNsYXNzZXMuc3BsaWNlKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpLCAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJDbGFzc2VzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNsYXNzZXMuam9pbihcIiBcIik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZW5kZXJQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclByb3BzLmNsYXNzTmFtZSA9IHRoaXMucmVuZGVyQ2xhc3NOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9wcy5zdHlsZSA9IHRoaXMucmVuZGVyU3R5bGVzO1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMucmVuZGVyUHJvcHMuc3R5bGUsIHRoaXMucHJvcHMuc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclByb3BzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBnZXRSZWFjdEVsZW1lbnRDbGFzc05hbWUoZWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC50eXBlID8gZWxlbWVudC50eXBlLnRvU3RyaW5nKCkuc3BsaXQoXCIoXCIpWzBdLnNwbGl0KFwiIFwiKVsxXSA6IFwiXCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW4oY2hpbGRUeXBlOiBGdW5jdGlvbik6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkVHlwZSA9PT0gY2hpbGQudHlwZSlcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkcmVuT2ZQcm9wcyhwcm9wczogYW55LCBjaGlsZFR5cGU6IEZ1bmN0aW9uKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkVHlwZSA9PT0gY2hpbGQudHlwZSlcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93Q29uZmlybWF0aW9uV2luZG93KG1lc3NhZ2VDb250ZW50OiBSZWFjdC5SZWFjdE5vZGUsIHJlc3VsdENhbGxiYWNrOiAocmVzdWx0T2s6IGJvb2xlYW4pPT52b2lkKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtczogT3Blbk1lc3NhZ2VXaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcImNvbmZpcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBwYXJlbnRXaW5kb3dJZDogdGhpcy5nZXRQYXJlbnRXaW5kb3dJZCgpLFxyXG4gICAgICAgICAgICByZXN1bHRDYWxsYmFjazogcmVzdWx0Q2FsbGJhY2tcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50RGVza3RvcCgpLm9wZW5NZXNzYWdlV2luZG93KG1lc3NhZ2VDb250ZW50LCBwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmVuZGVyKCkge1xyXG4gICAgLy8gICAgcmV0dXJuIChuZXcpXHJcbiAgICAvLyAgICAvLyAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSB9PlxyXG4gICAgLy8gICAgLy8gICAgICAgIENvbXBvbmVudCBmcm9tIHt0aGlzLnByb3BzLmNvbXBpbGVyfSBhbmQge3RoaXMucHJvcHMuZnJhbWV3b3JrfSFjbGlja0NvdW50PXt0aGlzLnN0YXRlLmNsaWNrQ291bnR9XHJcbiAgICAvLyAgICAvLyAgICA8L2J1dHRvbj5cclxuICAgIC8vICAgIC8vKTtcclxuICAgIC8vfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudC50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG4gICAgdHlwZTogXCJjb2x1bW5cIiB8IFwicm93XCI7XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudDxMYXlvdXRQcm9wcyxhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkxheW91dFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7ZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGZsZXhEaXJlY3Rpb246IHRoaXMucHJvcHMudHlwZX0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpIHsvLyAmJiB0aGlzLnByb3BzLnR5cGU9PT1cImNvbHVtblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnNpemVUbyA9PT0gXCJwYXJlbnRcIikge1xyXG4gICAgICAgIC8vICAgICBsZXQgc3R5bGU6IGFueSA9IHtcclxuICAgICAgICAvLyAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAvLyAgICAgICAgIC8vcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAvLyAgICAgICAgIC8vIGxlZnQ6IDAsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyByaWdodDogMCxcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRvcDogMCxcclxuICAgICAgICAvLyAgICAgICAgIC8vIGJvdHRvbTogMCxcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAvLyBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyAgICAgc3R5bGUuZmxleERpcmVjdGlvbiA9IHRoaXMucHJvcHMudHlwZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvL292ZXJmbG93OiBcImF1dG9cIlxyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIC8vICAgICBzdHlsZS5mbGV4RGlyZWN0aW9uID0gdGhpcy5wcm9wcy50eXBlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2t9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0xheW91dC50c3hcbiAqKi8iLCJcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaXhlZFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRml4ZWQgZXh0ZW5kcyBDb21wb25lbnQ8Rml4ZWRQcm9wcywgYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiRml4ZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuICAgICAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIGZsZXg6IFwiMCAwIGF1dG9cIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9ID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRml4ZWQudHN4XG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmxleFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGbGV4IGV4dGVuZHMgQ29tcG9uZW50PEZsZXhQcm9wcyxhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJGbGV4XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBmbGV4OiBcIjFcIixcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9ID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRmxleC50c3hcbiAqKi8iLCJpbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7U3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RCdWh0YU9iamVjdDEgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCk0LDQvNC40LvQuNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCk0LDQvNC40LvQuNGPINCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQmNC80Y9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0JjQvNGPXCJcclxuICAgIH0pXHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQntGC0YfQtdGB0YLQstC+XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCe0YLRh9C10YHRgtCy0L4g0LDQsdC+0L3QtdC90YLQsFwiXHJcbiAgICB9KVxyXG4gICAgc3VyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50c1xuICoqLyIsIu+7v2ltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvLCBCYXNlUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25lZE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBEZXNpZ25lZE9iamVjdCBjb25zdHJ1Y3RvclxyXG4gICAgfVxyXG5cclxuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XHJcblxyXG4gICAgJCR1bndhdGNoZWRQcm9wczogc3RyaW5nW10gPSBbXCJwcm9wZXJ0eUVkaXRvcnNcIiwgXCIkJHVud2F0Y2hlZFByb3BzXCJdO1xyXG5cclxuICAgIC8vIGlkOiBzdHJpbmc7XHJcbiAgICAvLyBuYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBjbGFzc05hbWU6IHN0cmluZztcclxuICAgIC8vIGluaGVyaXRGcm9tOiBzdHJpbmc7XHJcbiAgICAvLyBtb2R1bGVOYW1lOiBzdHJpbmc7XHJcbiAgICAvLyByZWZlcmVuY2VzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gICAgLy9wcml2YXRlIHN0YXRpYyBwcm9wZXJ0eUVkaXRvcnM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogUHJvcGVydHlFZGl0b3JJbmZvOyB9ID0ge307XHJcblxyXG4gICAgLy8gc3RhdGljIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IocHJvcGVydHlOYW1lOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVBhZ2U6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5R3JvdXA6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5RGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6IHR5cGVvZiBEZXNpZ25lZE9iamVjdCxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvclR5cGU6IHR5cGVvZiBCYXNlUHJvcGVydHlFZGl0b3IsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IHR5cGVvZiBPYmplY3QgfCB0eXBlb2YgU3RyaW5nKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCBpbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8gPSB7XHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eVBhZ2U6IHByb3BlcnR5UGFnZSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlHcm91cDogcHJvcGVydHlHcm91cCxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlEZXNjcmlwdGlvbjogcHJvcGVydHlEZXNjcmlwdGlvbixcclxuICAgIC8vICAgICAgICAgb2JqZWN0VHlwZTogb2JqZWN0VHlwZSxcclxuICAgIC8vICAgICAgICAgZWRpdG9yVHlwZTogZWRpdG9yVHlwZSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlUeXBlOiBwcm9wZXJ0eVR5cGUsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBEZXNpZ25lZE9iamVjdC5wcm9wZXJ0eUVkaXRvcnNbcHJvcGVydHlOYW1lXSA9IGluZm87XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJQcm9wZXJ0eUVkaXRvciBcIiArIHByb3BlcnR5TmFtZSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldCBwcm9wZXJ0eUVkaXRvcnMoKTp7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFByb3BlcnR5RWRpdG9ySW5mbzsgfXtcclxuICAgIC8vICAgICByZXR1cm4gKERlc2lnbmVkT2JqZWN0IGFzIGFueSkuJCRwcm9wZXJ0eUVkaXRvcnM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcnMoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMubGVuZ3RoID0gMDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlFZGl0b3I6IEJhc2VQcm9wZXJ0eUVkaXRvcikge1xyXG4gICAgLy8gICAgIHByb3BlcnR5RWRpdG9yLmRlc2lnbmVkT2JqZWN0ID0gdGhpcztcclxuICAgIC8vICAgICBwcm9wZXJ0eUVkaXRvci5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMucHVzaChwcm9wZXJ0eUVkaXRvcik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZW1pdFRzQ29kZSgpOiBzdHJpbmcge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLnJlZ2lzdGVyUHJvcGVydHlFZGl0b3JzKCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCB0c0NvZGUgPSBuZXcgVHNDb2RlKHRoaXMubW9kdWxlTmFtZSwgdGhpcy5jbGFzc05hbWUsIHRoaXMuaW5oZXJpdEZyb20sIHRoaXMucmVmZXJlbmNlcyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMucHJvcGVydHlFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xyXG4gICAgLy8gICAgICAgICBlZGl0b3IuZGVzaWduZWRPYmplY3QgPSB0aGlzO1xyXG4gICAgLy8gICAgICAgICBlZGl0b3IuZW1pdFRzQ29kZSh0c0NvZGUpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gdHNDb2RlLmdldENvZGUoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB0ZXN0UHJvYzEgPSAoKSA9PiB7XHJcblxyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3QudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtCYXNlUHJvcGVydHlFZGl0b3IsIFByb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge3JlZ2lzdGVyUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtJbnB1dFR5cGUsIElucHV0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBCYXNlUHJvcGVydHlFZGl0b3Ige1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZShldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpIHtcclxuICAgICAgICAvLyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZSA9PT0gXCIgKyB0aGlzLnByb3BzLnByb3BlcnR5TmFtZSArIFwiIFwiICsgdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBhdXRvRm9ybUNvbnRyb2xQcm9wczogQXV0b0Zvcm1Db250cm9sUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2FwdGlvbjogdGhpcy5wcm9wcy5pbnB1dENhcHRpb24sXHJcbiAgICAgICAgICAgIGlucHV0VGFiOiB0aGlzLnByb3BzLmlucHV0VGFiLFxyXG4gICAgICAgICAgICBpbnB1dEdyb3VwOiB0aGlzLnByb3BzLmlucHV0R3JvdXAsXHJcbiAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb246IHRoaXMucHJvcHMuaW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoYXV0b0Zvcm1Db250cm9sUHJvcHMpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9e0lucHV0VHlwZS5UZXh0fVxyXG4gICAgICAgICAgICAgICAgYmluZE9iamVjdD17dGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdH1cclxuICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT17dGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nRWRpdG9yUGFyYW1zIGV4dGVuZHMgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN0cmluZ0VkaXRvcihwYXJhbXM6IFN0cmluZ0VkaXRvclBhcmFtcyA9IHt9KTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coe3RhcmdldCwgcHJvcGVydHlOYW1lLCBjb25zdHI6dGFyZ2V0LmNvbnN0cnVjdG9yfSk7XHJcblxyXG4gICAgICAgIGxldCBwcm9wZXJ0eUVkaXRvckluZm86IFByb3BlcnR5RWRpdG9ySW5mbyA9IHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgZWRpdG9yVHlwZTogU3RyaW5nUHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgXy5hc3NpZ24ocHJvcGVydHlFZGl0b3JJbmZvLCBwYXJhbXMpO1xyXG4gICAgICAgIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IocHJvcGVydHlFZGl0b3JJbmZvKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9yKHtcclxuICAgICAgICAvLyAgICAgaW5wdXRDYXB0aW9uOiBwYXJhbXMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgIC8vICAgICBpbnB1dFRhYjogcGFyYW1zLmlucHV0VGFiLFxyXG4gICAgICAgIC8vICAgICBpbnB1dEdyb3VwOiBwYXJhbXMuaW5wdXRHcm91cCxcclxuICAgICAgICAvLyAgICAgaW5wdXREZXNjcmlwdGlvbjogcGFyYW1zLmlucHV0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgLy8gICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvcixcclxuICAgICAgICAvLyAgICAgZWRpdG9yVHlwZTogU3RyaW5nUHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgLy8gICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeFxuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5RWRpdG9ySW5mbyBleHRlbmRzIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuICAgIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gICAgb2JqZWN0VHlwZTogdHlwZW9mIERlc2lnbmVkT2JqZWN0O1xyXG4gICAgZWRpdG9yVHlwZTogdHlwZW9mIEJhc2VQcm9wZXJ0eUVkaXRvcjtcclxuICAgIHByb3BlcnR5VHlwZTogdHlwZW9mIE9iamVjdCB8IHR5cGVvZiBTdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVByb3BlcnR5RWRpdG9yUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+LCBQcm9wZXJ0eUVkaXRvckluZm8ge1xyXG4gICAgZGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQ8QmFzZVByb3BlcnR5RWRpdG9yUHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzLCBjb250ZXh0OmFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICAgIC8vIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuXHJcbiAgICAvLyBnZXRQcm9wZXJ0eVR5cGUoKTogc3RyaW5nIHtcclxuICAgIC8vICAgICByZXR1cm4gXCJPYmplY3RcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZW5kZXJFZGl0b3IoaW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcclxuICAgIC8vICAgICByZXR1cm4gKDxzcGFuPmVkaXRvciBub3QgZGVmaW5lZDwvc3Bhbj4pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuICg8c3Bhbj5wcm9wZXJ0eSBlZGl0b3Igbm90IGRlZmluZWQ8L3NwYW4+KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gZW1pdFRzQ29kZSh0c0NvZGU6IFRzQ29kZSwgYXNzaWduTmFtZTogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgdHNDb2RlLmFkZFByb3BlcnR5KGFzc2lnbk5hbWUsIHRoaXMucHJvcGVydHlOYW1lLCB0aGlzLmdldFByb3BlcnR5VHlwZSgpLCB0aGlzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcGVydHlOYW1lXSk7XHJcbiAgICAvLyB9XHJcblxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yLnRzeFxuICoqLyIsImltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihlZGl0b3I6IFByb3BlcnR5RWRpdG9ySW5mbykge1xyXG5cclxuICAgIGxldCBvYmpUeXBlOiBhbnkgPSBlZGl0b3Iub2JqZWN0VHlwZTtcclxuXHJcbiAgICBpZiAoIW9ialR5cGUuJCRwcm9wZXJ0eUVkaXRvcnMpXHJcbiAgICAgICAgb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycyA9IFtdO1xyXG5cclxuICAgIG9ialR5cGUuJCRwcm9wZXJ0eUVkaXRvcnMucHVzaChlZGl0b3IpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJyZWdpc3RlclByb3BlcnR5RWRpdG9yIFwiICsgZWRpdG9yLnByb3BlcnR5TmFtZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVkaXRvcik7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9yZWdpc3RlclByb3BlcnR5RWRpdG9yLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBlbnVtIElucHV0VHlwZSB7VGV4dCwgTnVtYmVyLCBEYXRlIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4sIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuICAgIHR5cGU6IElucHV0VHlwZTtcclxuICAgIGJpbmRPYmplY3Q6IGFueTtcclxuICAgIGJpbmRQcm9wTmFtZTogc3RyaW5nO1xyXG4gICAgbWF4V2lkdGg/OiBudW1iZXI7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuUmVhY3RFdmVudEhhbmRsZXI7XHJcbiAgICBwbGFjZUhvbGRlcj86IHN0cmluZztcclxuICAgIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudDxJbnB1dFByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJbnB1dFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIElucHV0VHlwZS5UZXh0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGV4dCgpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgIFwiSW5wdXQucmVuZGVyKCk6PT4gdW5rbm93biBJbnB1dFR5cGUgJ1wiICsgdGhpcy5wcm9wcy50eXBlICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRleHQgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5iaW5kT2JqZWN0ICYmIHRoaXMucHJvcHMuYmluZFByb3BOYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmJpbmRPYmplY3RbdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWVdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYmluZE9iamVjdFt0aGlzLnByb3BzLmJpbmRQcm9wTmFtZV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIFwiPHVuYmluZGVkPlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVPbkNoYW5nZSA9IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5iaW5kT2JqZWN0ICYmIHRoaXMucHJvcHMuYmluZFByb3BOYW1lKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJpbmRPYmplY3RbdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWVdID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyVGV4dCgpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHRoaXMucHJvcHMuc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFRleHQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXQudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge0Jhc2VQcm9wZXJ0eUVkaXRvclByb3BzLCBQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuLi9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7Z2V0UHJvcGVydHlFZGl0b3JzfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL2dldFByb3BlcnR5RWRpdG9yc1wiO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRm9ybS9Gb3JtXCI7XHJcbmltcG9ydCB7QXV0b0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuaW1wb3J0IHtTbmFwc2hvdH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvU25hcHNob3RcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdERlc2lnbmVyUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuICAgIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcclxuICAgIG9uU2F2ZUNoYW5nZXM/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25DYW5jZWxDaGFuZ2VzPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdERlc2lnbmVyIGV4dGVuZHMgQ29tcG9uZW50PE9iamVjdERlc2lnbmVyUHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IE9iamVjdERlc2lnbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgc25hcHNob3Q6IFNuYXBzaG90ID0gbmV3IFNuYXBzaG90KCk7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgICAgIHRoaXMuc25hcHNob3Quc2F2ZU9iamVjdCh0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0LCBcInJvb3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvcGVydHlEZXNpZ25lcnMoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBnZXRQcm9wZXJ0eUVkaXRvcnModGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCkuZm9yRWFjaCgocHJvcEluZm86IFByb3BlcnR5RWRpdG9ySW5mbywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb3BJbmZvKTtcclxuICAgICAgICAgICAgbGV0IGVkaXRvclByb3BzOiBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcyAmIFByb3BlcnR5RWRpdG9ySW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0OiB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgLy9wcm9wZXJ0eUVkaXRvckluZm86IHByb3BJbmZvLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vINGN0YLQviDQuNC3IHByb3BJbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8sINC30LDQv9C+0LvRj9C10YLRgdGPINC00LDQu9C10LUg0YfQtdGA0LXQtyBfLmFzc2lnblxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVkaXRvclR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIF8uYXNzaWduKGVkaXRvclByb3BzLCBwcm9wSW5mbyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVkaXRvclByb3BzLmlucHV0Q2FwdGlvbilcclxuICAgICAgICAgICAgICAgIGVkaXRvclByb3BzLmlucHV0Q2FwdGlvbiA9IGVkaXRvclByb3BzLnByb3BlcnR5TmFtZTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlZGl0b3JQcm9wcyk7XHJcblxyXG4gICAgICAgICAgICByZXQucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BJbmZvLmVkaXRvclR5cGUsIGVkaXRvclByb3BzLCBudWxsKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2F2ZUNoYW5nZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYXZlLWNoYW5nZXNcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0KTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNhdmVDaGFuZ2VzKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2F2ZUNoYW5nZXMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2FuY2VsQ2hhbmdlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbmNlbC1jaGFuZ2VzXCIpO1xyXG4gICAgICAgIHRoaXMuc25hcHNob3QucmVzdG9yZU9iamVjdCh0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0LCBcInJvb3RcIik7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DYW5jZWxDaGFuZ2VzKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsQ2hhbmdlcygpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwib2JqZWN0LWRlc2lnbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe29uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBdXRvRm9ybVxyXG4gICAgICAgICAgICAgICAgc2l6ZVRvPVwicGFyZW50XCJcclxuICAgICAgICAgICAgICAgIG9uU2F2ZUNoYW5nZXM9e3RoaXMuaGFuZGxlU2F2ZUNoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbENoYW5nZXM9e3RoaXMuaGFuZGxlQ2FuY2VsQ2hhbmdlc31cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0IGRlc2lnbmVyXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQcm9wZXJ0eURlc2lnbmVycygpfVxyXG4gICAgICAgICAgICA8L0F1dG9Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lci50c3hcbiAqKi8iLCJpbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5RWRpdG9ycyhvYmo6IERlc2lnbmVkT2JqZWN0KTogUHJvcGVydHlFZGl0b3JJbmZvW10ge1xyXG5cclxuICAgIGxldCBlZGl0b3JzID0gKG9iai5jb25zdHJ1Y3RvciBhcyBhbnkpLiQkcHJvcGVydHlFZGl0b3JzIGFzIFByb3BlcnR5RWRpdG9ySW5mb1tdO1xyXG5cclxuICAgIGVkaXRvcnMgPSBlZGl0b3JzLmZpbHRlcigoZWR0KSA9PiBvYmogaW5zdGFuY2VvZiBlZHQub2JqZWN0VHlwZSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldFByb3BlcnR5RWRpdG9yc1wiKSA7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVkaXRvcnMpO1xyXG4gICAgcmV0dXJuIGVkaXRvcnM7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvcnMudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9UYWJzL1RhYnNcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vRm9ybS9Gb3JtXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vQnV0dG9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICBpbnB1dENhcHRpb24/OiBzdHJpbmc7XHJcbiAgICBpbnB1dFRhYj86IHN0cmluZztcclxuICAgIGlucHV0R3JvdXA/OiBzdHJpbmc7XHJcbiAgICBpbnB1dERlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9Gb3JtUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGlucHV0cz86IEF1dG9Gb3JtQ29udHJvbFByb3BzW107XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxuICAgIG9uU2F2ZUNoYW5nZXM/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25DYW5jZWxDaGFuZ2VzPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgZW1wdHlUYWJOYW1lID0gXCLQt9Cw0LrQu9Cw0LTQutCwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0b0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QXV0b0Zvcm1Qcm9wcywgYW55PiB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW5wdXRzKCk6IEF1dG9Gb3JtQ29udHJvbFByb3BzW10ge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGM6IGFueSkgPT4gYy5wcm9wcylcclxuICAgICAgICAgICAgLm1hcCgoYzogYW55KSA9PiBjLnByb3BzKSBhcyBBdXRvRm9ybUNvbnRyb2xQcm9wc1tdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFic0xpc3QoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBfLnVuaXEoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRzKCkubWFwPHN0cmluZz4oKGlucHV0OiBBdXRvRm9ybUNvbnRyb2xQcm9wcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmlucHV0VGFiIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYklucHV0cyh0YWI6IHN0cmluZyk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMucHJvcHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAoKChjLnByb3BzIGFzIEF1dG9Gb3JtQ29udHJvbFByb3BzKS5pbnB1dFRhYiB8fCBcIlwiKSA9PT0gdGFiKTtcclxuICAgICAgICAgICAgfSkgYXMgSlNYLkVsZW1lbnRbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclRhYih0YWI6IHN0cmluZyk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gPEZvcm0gc2l6ZVRvPXt0aGlzLnByb3BzLnNpemVUb30+e3RoaXMuZ2V0VGFiSW5wdXRzKHRhYil9PC9Gb3JtPjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlICByZW5kZXJUYWJzKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFic0xpc3QoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRhYnMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nZXRJbnB1dHMoKSk7XHJcblxyXG4gICAgICAgIGlmICh0YWJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFicy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGFiKHRhYnNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVRvPVwicGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbldpbGxNb3VudD17IChzdGF0ZSkgPT4geyBjb25zb2xlLmxvZyhcIm9uV2lsbE1vdW50LWF1dG8tZm9ybS10YWJzXCIpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQWN0aXZlVGFiPXsgKHN0YXRlLCB0YWIpID0+IHsgY29uc29sZS5sb2coXCJzZXRBY3RpdmVUYWJcIik7Y29uc29sZS5sb2codGFiKTt9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGFicy5tYXA8SlNYLkVsZW1lbnQ+KCh0YWIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGtleT17aW5kZXh9IHRpdGxlPXt0YWIgPT09IFwiXCIgPyBlbXB0eVRhYk5hbWUgOiB0YWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYih0YWIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTYXZlQnV0dG9uQ2xpY2sgID0gKHNlbmRlcjogQnV0dG9uLCBlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TYXZlQ2hhbmdlcylcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNhdmVDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRXaW5kb3coKS5jbG9zZSgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrICA9IChzZW5kZXI6IEJ1dHRvbiwgZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2FuY2VsQ2hhbmdlcylcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNhbmNlbENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudFdpbmRvdygpLmNsb3NlKCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJhdXRvLWZvcm1cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLWF1dG8tZm9ybVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZTogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCIgc2l6ZVRvPVwicGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYnMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cImF1dG8tZm9ybS1mb290ZXJcIiB0eXBlPVwicm93XCIgc2l6ZVRvPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiaXMtc3VjY2VzcyBpcy1vdXRsaW5lZFwiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZVNhdmVCdXR0b25DbGljayB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrIH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm0udHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0xheW91dFwiO1xyXG5pbXBvcnQge0ZpeGVkfSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZsZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFic1Byb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8VGFic1N0YXRlPiB7XHJcbiAgICBvbkNoYW5nZUFjdGl2ZVRhYj86IChzdGF0ZTogVGFic1N0YXRlLCBhY3RpdmVUYWI6IFRhYkluZm8pID0+IHZvaWQ7XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYnNTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPFRhYnNQcm9wcz4ge1xyXG4gICAgdGFiczogVGFiSW5mb1tdID0gW107XHJcblxyXG4gICAgc2V0QWN0aXZlVGFiKHRhYkluZm86IFRhYkluZm8pIHtcclxuICAgICAgICBpZiAoIXRhYkluZm8uaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJzLmZvckVhY2goKHRhYik9PnRhYi5pc0FjdGl2ZSA9IGZhbHNlKTtcclxuICAgICAgICAgICAgdGFiSW5mby5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnQucHJvcHMub25DaGFuZ2VBY3RpdmVUYWIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5wcm9wcy5vbkNoYW5nZUFjdGl2ZVRhYih0aGlzLCB0YWJJbmZvKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJJbmZvIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICAgIGNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQ8VGFic1Byb3BzLCBUYWJzU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUYWJzUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBUYWJzU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVJbml0VGFic1N0YXRlKCkge1xyXG5cclxuICAgICAgICBsZXQgdGFiVGFncyA9IHRoaXMuZ2V0Q2hpbGRyZW4oVGFiKTtcclxuXHJcbiAgICAgICAgdGFiVGFncy5mb3JFYWNoKCh0YWJUYWcsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFiUHJvcHMgPSB0YWJUYWcucHJvcHMgYXMgVGFiUHJvcHM7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFiSW5mbzogVGFiSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0YWJQcm9wcy50aXRsZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRhYlByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGluZGV4ID09PSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFicy5wdXNoKHRhYkluZm8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5pdFRhYnNTdGF0ZSgpO1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBsZXQgdGFiVGFncyA9IHRoaXMuZ2V0Q2hpbGRyZW4oVGFiKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRhYlRhZ3MuZm9yRWFjaCgodGFiVGFnLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGxldCB0YWJQcm9wcyA9IHRhYlRhZy5wcm9wcyBhcyBUYWJQcm9wcztcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgdGFiSW5mbzogVGFiSW5mbyA9IHtcclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiB0YWJQcm9wcy50aXRsZSxcclxuICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6IHRhYlByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgIC8vICAgICAgICAgaXNBY3RpdmU6IGluZGV4ID09PSAwXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRhYnMucHVzaCh0YWJJbmZvKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG9wZW5XaW5kb3cod2luOiBKU1guRWxlbWVudCk6IFdpbmRvd0luZm8ge1xyXG4gICAgLy8gICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gICAgIG1vZGFsLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgLy8gICAgIC8vINC00LvRjyDQv9C+0LTQvdGP0YLQuNGPINCy0LLQtdGA0YUg0L/RgNC4INCw0LrRgtC40LLQsNGG0LjQuCDQvtC60L3QsFxyXG4gICAgLy8gICAgIG1vZGFsLm9uY2xpY2sgPSAoZSk9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobW9kYWwuaWQgIT09IFwiZGVsZXRlZFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAvLyAgICAgICAgIH0sIDEpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IHdpbkluc3RhbmNlID0gUmVhY3RET00ucmVuZGVyKHdpbiwgbW9kYWwpIGFzIFdpbmRvdztcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IGluZm86IFdpbmRvd0luZm8gPSB7XHJcbiAgICAvLyAgICAgICAgIGlkOiBtb2RhbC5pZCxcclxuICAgIC8vICAgICAgICAgd2luSW5zdGFuY2U6IHdpbkluc3RhbmNlLFxyXG4gICAgLy8gICAgICAgICBkaXZXcmFwcGVyOiBtb2RhbFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMud2luZG93cy5wdXNoKGluZm8pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gaW5mbztcclxuICAgIC8vIH07XHJcbiAgICAvL1xyXG4gICAgLy8gY2xvc2VXaW5kb3cod2luOiBXaW5kb3cpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLmZvckVhY2goKGluZm8sIGluZGV4KT0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGluZm8ud2luSW5zdGFuY2UgPT09IHdpbikge1xyXG4gICAgLy8gICAgICAgICAgICAgaW5mby5kaXZXcmFwcGVyLmlkID0gXCJkZWxldGVkXCI7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoaW5mby5kaXZXcmFwcGVyKTtcclxuICAgIC8vICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndpbmRvd3NbaW5kZXhdO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWN0aXZhdGVXaW5kb3cod2luOiBXaW5kb3cpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLmZvckVhY2goKGluZm8sIGluZGV4KT0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGluZm8ud2luSW5zdGFuY2UgPT09IHdpbikge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGluZm8uZGl2V3JhcHBlcik7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmVuZGVyVGFicygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBsaXN0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudGFicy5mb3JFYWNoKCh0YWJJbmZvOiBUYWJJbmZvLCBpbmRleDogbnVtYmVyKT0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSB0YWJJbmZvLmlzQWN0aXZlID8gXCJpcy1hY3RpdmVcIiA6IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID1cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0gb25DbGljaz17IChlKT0+eyB0aGlzLnN0YXRlLnNldEFjdGl2ZVRhYih0YWJJbmZvKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnt0YWJJbmZvLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBhbmVscygpOiBKU1guRWxlbWVudFtdIHtcclxuXHJcbiAgICAgICAgbGV0IGxpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50YWJzLmZvckVhY2goKHRhYkluZm86IFRhYkluZm8sIGluZGV4OiBudW1iZXIpPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7cGFkZGluZ1RvcDogMTAsIHBhZGRpbmdCb3R0b206IDEwfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKVxyXG4gICAgICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gIXRhYkluZm8uaXNBY3RpdmUgPyBcImlzLWhpZGRlblwiIDogbnVsbDtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGFiSW5mby5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxkaXYgcmVmPlxyXG4gICAgICAgIC8vICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2hlaWdodDogXCIxMDAlXCJ9KTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6IFwiYXV0b1wifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgc2l6ZVRvPXt0aGlzLnByb3BzLnNpemVUb30gdHlwZT1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGU6IGFueSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBhbmVscygpfVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFiIGV4dGVuZHMgQ29tcG9uZW50PFRhYlByb3BzLGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRhYlByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UYWJzL1RhYnMudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0lucHV0RGl2aWRlcn0gZnJvbSBcIi4uL0lucHV0RGl2aWRlci9JbnB1dERpdmlkZXJcIjtcclxuaW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuaW1wb3J0IHtJbnB1dFByb3BzfSBmcm9tIFwiLi4vSW5wdXQvSW5wdXRcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50PEZvcm1Qcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRm9ybVByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXJDb250cm9scygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgbGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNvbnRyb2w6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb250cm9sUHJvcHMgPSBjb250cm9sLnByb3BzIGFzIElucHV0UHJvcHM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xQcm9wcyAmJiAoY29udHJvbFByb3BzLmlucHV0Q2FwdGlvbiB8fCBjb250cm9sUHJvcHMuYmluZFByb3BOYW1lKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGNvbnRyb2wudHlwZSA9PT0gSW5wdXREaXZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSW5wdXREaXZpZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiY29udHJvbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXB0aW9uXCI+e2NvbnRyb2xQcm9wcy5pbnB1dENhcHRpb24gPyBjb250cm9sUHJvcHMuaW5wdXRDYXB0aW9uIDogY29udHJvbFByb3BzLmJpbmRQcm9wTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIiwgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiY29udHJvbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIxMFwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIiwgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiZm9ybVwiKTtcclxuICAgICAgICAvL3RoaXMuYWRkU3R5bGVzKHttYXJnaW46MTB9KTtcclxuXHJcbiAgICAgICAgaWYgKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikubGVuZ3RoID09PSAxKSB7IC8vINC+0LTQuNC9INC60L7QvdGC0YDQvtC7INCyINGE0L7RgNC80LUsINC+0LHRi9GH0L3QviB0cmVlbGlzdFxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvPT09XCJwYXJlbnRcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXMoeyB3aWR0aDogXCJpbmhlcml0XCJ9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dGFibGUgcmVmPXsgKGUpID0+IHsgdGhpcy5uYXRpdmVFbGVtZW50ID0gZTsgfSB9IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250cm9scygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvRm9ybS9Gb3JtLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1Zpc2libGVQbHVnaW4sIFZpc2libGVQbHVnaW5Qcm9wcywgVmlzaWJsZVBsdWdpblN0YXRlfSBmcm9tIFwiLi4vUGx1Z2lucy9WaXNpYmxlUGx1Z2luXCI7XHJcbmltcG9ydCB7T25DbGlja1BsdWdpbiwgT25DbGlja1BsdWdpblByb3BzfSBmcm9tIFwiLi4vUGx1Z2lucy9PbkNsaWNrUGx1Z2luXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wcywgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEJ1dHRvblN0YXRlPiwgVmlzaWJsZVBsdWdpblByb3BzLCBPbkNsaWNrUGx1Z2luUHJvcHMge1xyXG4gICAgdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvblN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8QnV0dG9uUHJvcHM+IGltcGxlbWVudHMgVmlzaWJsZVBsdWdpblN0YXRlIHtcclxuICAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vQFZpc2libGVQbHVnaW5cclxuLy9AT25DbGlja1BsdWdpblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50PEJ1dHRvblByb3BzLCBCdXR0b25TdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEJ1dHRvblByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQnV0dG9uU3RhdGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLnB1c2gobmV3IFZpc2libGVQbHVnaW4odGhpcykpO1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKG5ldyBPbkNsaWNrUGx1Z2luKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJidXR0b25cIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQnV0dG9uLnRzeFxuICoqLyIsImltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi9QbHVnaW5cIjtcclxuaW1wb3J0IHtDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZpc2libGVQbHVnaW5Qcm9wcyB7XHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcclxuICAgIGRlZmF1bHRWaXNpYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaXNpYmxlUGx1Z2luU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxWaXNpYmxlUGx1Z2luUHJvcHM+IHtcclxuICAgIHZpc2libGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZpc2libGVQbHVnaW4gZXh0ZW5kcyBDb21wb25lbnRQbHVnaW48VmlzaWJsZVBsdWdpblByb3BzLCBWaXNpYmxlUGx1Z2luU3RhdGU+IHtcclxuICAgIC8vIGNvbnN0cnVjdG9yKG93bmVyOiBhbnkpIHtcclxuICAgIC8vICAgICBzdXBlcihvd25lcik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ2aXNpYmxlIHdpbGxNb3VudCgpXCIpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzLmRlZmF1bHRWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlZpc2libGVQbHVnaW46IG9ubHkgb25lIG9mIHRoZSBwcm9wZXJ0aWVzIG11c3QgYmUgc3BlY2lmaWVkICd2aXNpYmxlJyBvciAnZGVmYXVsdFZpc2libGUnXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRoaXMucHJvcHMudmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5kZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRoaXMucHJvcHMuZGVmYXVsdFZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5vd25lci50b2dnbGVDbGFzc05hbWUoIXRoaXMuc3RhdGUudmlzaWJsZSwgXCJpcy1oaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFZpc2libGVQbHVnaW5Qcm9wcykge1xyXG4gICAgICAgIC8vbGV0IHN0YXRlID0gdGhpcy5vd25lci5zdGF0ZSBhcyBWaXNpYmxlUGx1Z2luU3RhdGU7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy52aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gbmV4dFByb3BzLnZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm93bmVyLnRvZ2dsZUNsYXNzTmFtZSghdGhpcy5zdGF0ZS52aXNpYmxlLCBcImlzLWhpZGRlblwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBWaXNpYmxlUGx1Z2luKHRhcmdldDogYW55KSB7XHJcbi8vICAgICB0YXJnZXQucGx1Z2lucy5wdXNoKFZpc2libGVQbHVnaW5DbGFzcyk7XHJcbi8vICAgICByZXR1cm4gdGFyZ2V0O1xyXG4vLyB9XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL1Zpc2libGVQbHVnaW4udHNcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQbHVnaW48UCxTIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8UD4+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb3duZXI6IENvbXBvbmVudDxQLCBTPikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaWRNb3VudCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB3aWxsTW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFVubW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFApIHtcclxuICAgIH1cclxuXHJcbiAgICBkaWRVcGRhdGUocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdGUoKTogUyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXIuc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BzKCk6IFAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyLnByb3BzO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvUGx1Z2luLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi9QbHVnaW5cIjtcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgb25DbGlja0V2ZW50ID0gKHNlbmRlcjogQ29tcG9uZW50PGFueSxhbnk+LCBldmVudDogUmVhY3QuTW91c2VFdmVudCk9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPbkNsaWNrUGx1Z2luUHJvcHMge1xyXG4gICAgb25DbGljaz86IG9uQ2xpY2tFdmVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9uQ2xpY2tQbHVnaW4gZXh0ZW5kcyBDb21wb25lbnRQbHVnaW48T25DbGlja1BsdWdpblByb3BzLCBhbnk+IHtcclxuXHJcbiAgICBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMub3duZXIsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMub3duZXIuYWRkUHJvcHMoe29uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogT25DbGlja1BsdWdpblByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIHRoaXMub3duZXIuYWRkUHJvcHMoe29uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL09uQ2xpY2tQbHVnaW4udHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8vINC+0LHRitC10LrRgiDQvNC+0LbQtdGCINC40LzQtdGC0Ywg0LzQsNGB0YHQuNCy0Ys6XHJcbi8vICQkdW5zYXZlZFByb3BzIC0g0LjQvNC10L3QsCDRgdCy0L7QudGB0YLQsiwg0LrQvtGC0L7RgNGL0LUg0L3QtSDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPXHJcbi8vICQkc2F2ZWRCeVJlZlByb3BzIC0g0LjQvNC10L3QsCDRgdCy0L7QudGB0YLQsiwg0LrQvtGC0L7RgNGL0LUg0YHQvtGF0YDQsNC90Y/RjtGC0YHRjyDQutCw0Log0YHRgdGL0LvQutC4XHJcbi8vINC90LUg0YHQvtGF0YDQsNC90Y/RjtGC0YHRjyDRgdCy0L7QudGB0YLQstCwLCDQutC+0YLQvtGA0YvQtSDQvdCw0YfQuNC90LDRjtGC0YHRjyDRgSAkJFxyXG5leHBvcnQgY2xhc3MgU25hcHNob3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNuYXBzaG90czogSW50ZXJuYWxTbmFwc2hvdFtdID0gW107XHJcblxyXG4gICAgc2F2ZU9iamVjdChvYmo6IE9iamVjdCB8IEFycmF5PGFueT4sIHNuYXBzaG90TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHNuYXAgPSBuZXcgSW50ZXJuYWxTbmFwc2hvdCgpO1xyXG4gICAgICAgIHNuYXAub2JqID0gb2JqO1xyXG4gICAgICAgIHNuYXAuc25hcHNob3ROYW1lID0gc25hcHNob3ROYW1lO1xyXG4gICAgICAgIHNuYXAuc2F2ZVByb3BzKCk7XHJcbiAgICAgICAgdGhpcy5zbmFwc2hvdHMucHVzaChzbmFwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlT2JqZWN0KG9iajogT2JqZWN0IHwgQXJyYXk8YW55Piwgc25hcHNob3ROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc25hcCA9IHRoaXMuZ2V0SW50ZXJuYWxTbmFwc2hvdChvYmosIHNuYXBzaG90TmFtZSk7XHJcbiAgICAgICAgaWYgKHNuYXApIHtcclxuICAgICAgICAgICAgaWYgKF8uaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIHNuYXAuYXJyYXlFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBvYmoucHVzaChlbGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzbmFwLm9ialByb3BzLmZvckVhY2goKHByb3ApID0+IHByb3AucmVzdG9yZVZhbHVlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEludGVybmFsU25hcHNob3Qob2JqOiBPYmplY3QgfCBBcnJheTxhbnk+LCBzbmFwc2hvdE5hbWU6IHN0cmluZyk6IEludGVybmFsU25hcHNob3Qge1xyXG4gICAgICAgIGxldCByZXQgPSB0aGlzLnNuYXBzaG90cy5maWx0ZXIoKHNuYXApID0+IHNuYXAub2JqID09PSBvYmogJiYgc25hcC5zbmFwc2hvdE5hbWUgPT09IHNuYXBzaG90TmFtZSk7XHJcbiAgICAgICAgaWYgKHJldC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNuYXBzaG90ICdcIiArIHNuYXBzaG90TmFtZSArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiByZXRbMF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEludGVybmFsU25hcHNob3Qge1xyXG4gICAgb2JqOiBhbnk7XHJcbiAgICBzbmFwc2hvdE5hbWU6IHN0cmluZztcclxuICAgIG9ialByb3BzOiBTbmFwc2hvdFByb3BlcnR5W10gPSBbXTtcclxuICAgIGFycmF5RWxlbWVudHM6IGFueVtdO1xyXG4gICAgcmVmc0Nsb25lczogYW55ID0ge307XHJcblxyXG4gICAgc2F2ZVByb3BzKCkge1xyXG4gICAgICAgIGlmIChfLmlzQXJyYXkodGhpcy5vYmopKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyYXlFbGVtZW50cyA9IHRoaXMub2JqLm1hcCgodjogYW55KSA9PiB0aGlzLmNsb25lVmFsdWUodikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYmpQcm9wcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiB0aGlzLm9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5zdWJzdHJpbmcoMCwgMikgIT09IFwiJCRcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IG5ldyBTbmFwc2hvdFByb3BlcnR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5wcm9wTmFtZSA9IHByb3BOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHAuc25hcHNob3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHAuc2F2ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpQcm9wcy5wdXNoKHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb25lVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLm9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcCgodjogYW55KSA9PiB0aGlzLmNsb25lVmFsdWUodikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfLmlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXy5pc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgLy9sZXQgcmVmc0luZGV4ID0gdGhpcy5zbmFwc2hvdC5yZWZzLmluZGV4T2YodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuJCR1bmlxdWVPYmplY3RJZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnNDbG9uZXNbdmFsdWUuJCR1bmlxdWVPYmplY3RJZF07XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWVDb3B5ID0gbmV3IHZhbHVlLmNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIHZhbHVlQ29weS4kJGlzQ2xvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YWx1ZS4kJHVuaXF1ZU9iamVjdElkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTYpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnNDbG9uZXNbdmFsdWUuJCR1bmlxdWVPYmplY3RJZF0gPSB2YWx1ZUNvcHk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiBwcm9wTmFtZS5zdWJzdHJpbmcoMCwgMikgIT09IFwiJCRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQ29weVtwcm9wTmFtZV0gPSB0aGlzLmNsb25lVmFsdWUodmFsdWVbcHJvcE5hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVDb3B5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU25hcHNob3RQcm9wZXJ0eSB7XHJcbiAgICBzbmFwc2hvdDogSW50ZXJuYWxTbmFwc2hvdDtcclxuICAgIHByb3BOYW1lOiBzdHJpbmc7XHJcbiAgICBwcm9wVmFsdWU6IGFueTtcclxuXHJcbiAgICBzYXZlVmFsdWUoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wVmFsdWUgPSB0aGlzLnNuYXBzaG90LmNsb25lVmFsdWUodGhpcy5zbmFwc2hvdC5vYmpbdGhpcy5wcm9wTmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVWYWx1ZSgpIHtcclxuICAgICAgICB0aGlzLnNuYXBzaG90Lm9ialt0aGlzLnByb3BOYW1lXSA9IHRoaXMucHJvcFZhbHVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU25hcHNob3QudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHthcHBJbnN0YW5jZX0gZnJvbSBcIi4uL0FwcFwiO1xyXG5pbXBvcnQge1dpbmRvdywgV2luZG93U3RhdGV9IGZyb20gXCIuLi9XaW5kb3cvV2luZG93XCI7XHJcbmltcG9ydCB7TW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi9Nb3ZhYmxlL01vdmFibGVcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9CdXR0b25cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlc2t0b3BQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxEZXNrdG9wUHJvcHM+IHtcclxuICAgIHdpbmRvd3M6IERlc2t0b3BXaW5kb3dbXSA9IFtdOyAgLy8g0L/QvtGB0LvQtdC00L3QtdC1INCw0LrRgtC40LLQvdC+XHJcblxyXG4gICAgLy8gZ2V0V2luZG93QnlJZChpZDogc3RyaW5nKTogV2luZG93U3RhdGUge1xyXG4gICAgLy8gICAgIGZvciAobGV0IHcgb2YgdGhpcy53aW5kb3dzKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh3LmlkID09PSBpZClcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiB3O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjb25zb2xlLndhcm4oXCJEZXNrdG9wV2luZG93IGlkPSdcIiArIGlkICsgXCInIG5vdCBmb3VuZFwiKTtcclxuICAgIC8vICAgICByZXR1cm4gbnVsbDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRXaW5kb3dJbmRleEJ5SWQoaWQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMud2luZG93cy5pbmRleE9mKHRoaXMuZ2V0V2luZG93QnlJZChpZCkpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFjdGl2YXRlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgIC8vICAgICBpZiAod2luKSB7XHJcbiAgICAvLyAgICAgICAgIF8ucHVsbCh0aGlzLndpbmRvd3MsIHdpbik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMud2luZG93cy5wdXNoKHdpbik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gY2xvc2VXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgLy8gICAgIF8ucHVsbCh0aGlzLndpbmRvd3MsIHdpbik7XHJcbiAgICAvLyAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93SW5mbyB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgd2luSW5zdGFuY2U6IFdpbmRvdztcclxuICAgIGRpdldyYXBwZXI6IEVsZW1lbnQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBXaW5kb3dBdXRvU2l6ZSA9IFwibm9uZVwiIHwgXCJjb250ZW50XCIgfCBcImZ1bGwtZGVza3RvcFwiO1xyXG5leHBvcnQgdHlwZSBXaW5kb3dBdXRvUG9zaXRpb24gPSBcIm5vbmVcIiB8IFwicGFyZW50LWNlbnRlclwiIHwgXCJkZXNrdG9wLWNlbnRlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuV2luZG93UGFyYW1zIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgdG9wPzogbnVtYmVyO1xyXG4gICAgbGVmdD86IG51bWJlcjtcclxuICAgIHJpZ2h0PzogbnVtYmVyO1xyXG4gICAgYm90dG9tPzogbnVtYmVyO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBtaW5XaWR0aD86IG51bWJlcjtcclxuICAgIHBhcmVudFdpbmRvd0lkPzogc3RyaW5nO1xyXG4gICAgYXV0b1Bvc2l0aW9uPzogV2luZG93QXV0b1Bvc2l0aW9uO1xyXG4gICAgYXV0b1NpemU/OiBXaW5kb3dBdXRvU2l6ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuTWVzc2FnZVdpbmRvd1BhcmFtcyB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHBhcmVudFdpbmRvd0lkPzogc3RyaW5nO1xyXG4gICAgc3R5bGU/OiBcImVycm9yXCIgfCBcImluZm9ybWF0aW9uXCIgfCBcImNvbmZpcm1hdGlvblwiO1xyXG4gICAgb2tCdXR0b25Db250ZW50PzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgY2FuY2VsQnV0dG9uQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIHJlc3VsdENhbGxiYWNrPzogKHJlc3VsdE9LOiBib29sZWFuKT0+dm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlc2t0b3BXaW5kb3cgaW1wbGVtZW50cyBPcGVuV2luZG93UGFyYW1zIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIG1pbldpZHRoOiBudW1iZXI7XHJcbiAgICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHBhcmVudFdpbmRvd0lkOiBzdHJpbmc7XHJcbiAgICBhdXRvUG9zaXRpb246IFdpbmRvd0F1dG9Qb3NpdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgYXV0b1NpemU6IFdpbmRvd0F1dG9TaXplID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wIGV4dGVuZHMgQ29tcG9uZW50PERlc2t0b3BQcm9wcywgRGVza3RvcFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRGVza3RvcFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgRGVza3RvcFN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgaWYgKGFwcEluc3RhbmNlKVxyXG4gICAgICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wID0gdGhpcztcclxuICAgIH1cclxuXHJcbi8vICAgIHByaXZhdGUgd2luZG93czogV2luZG93SW5mb1tdID0gW107XHJcblxyXG4gICAgb3BlbldpbmRvdyh3aW5Db250ZW50OiBSZWFjdC5SZWFjdE5vZGUsIG9wZW5QYXJhbXM/OiBPcGVuV2luZG93UGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFvcGVuUGFyYW1zKVxyXG4gICAgICAgICAgICBvcGVuUGFyYW1zID0ge307XHJcbiAgICAgICAgbGV0IG5ld1dpbiA9IG5ldyBEZXNrdG9wV2luZG93KCk7XHJcbiAgICAgICAgbmV3V2luLmNvbnRlbnQgPSB3aW5Db250ZW50O1xyXG4gICAgICAgIG5ld1dpbi50aXRsZSA9IG9wZW5QYXJhbXMudGl0bGUgfHwgXCIuXCI7XHJcbiAgICAgICAgbmV3V2luLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG5cclxuICAgICAgICBuZXdXaW4ubGVmdCA9IG9wZW5QYXJhbXMubGVmdDtcclxuICAgICAgICBuZXdXaW4udG9wID0gb3BlblBhcmFtcy50b3A7XHJcbiAgICAgICAgbmV3V2luLmhlaWdodCA9IG9wZW5QYXJhbXMuaGVpZ2h0O1xyXG4gICAgICAgIG5ld1dpbi53aWR0aCA9IG9wZW5QYXJhbXMud2lkdGg7XHJcbiAgICAgICAgbmV3V2luLnJpZ2h0ID0gb3BlblBhcmFtcy5yaWdodDtcclxuICAgICAgICBuZXdXaW4uYm90dG9tID0gb3BlblBhcmFtcy5ib3R0b207XHJcblxyXG4gICAgICAgIGlmICghbmV3V2luLmxlZnQpIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4ucmlnaHQgJiYgIW5ld1dpbi53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmxlZnQgPSA1MDtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdXaW4ucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5sZWZ0ID0gNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLnJpZ2h0ICYmICFuZXdXaW4ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFuZXdXaW4udG9wKSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLmJvdHRvbSAmJiAhbmV3V2luLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmhlaWdodCA9IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdXaW4uYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5ib3R0b20gJiYgIW5ld1dpbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld1dpbi5hdXRvUG9zaXRpb24gPSBvcGVuUGFyYW1zLmF1dG9Qb3NpdGlvbjtcclxuICAgICAgICBuZXdXaW4uYXV0b1NpemUgPSBvcGVuUGFyYW1zLmF1dG9TaXplO1xyXG5cclxuICAgICAgICBuZXdXaW4ubWluSGVpZ2h0ID0gb3BlblBhcmFtcy5taW5IZWlnaHQgfHwgMTAwO1xyXG4gICAgICAgIG5ld1dpbi5taW5XaWR0aCA9IG9wZW5QYXJhbXMubWluV2lkdGggfHwgMTAwO1xyXG5cclxuICAgICAgICBuZXdXaW4ucGFyZW50V2luZG93SWQgPSBvcGVuUGFyYW1zLnBhcmVudFdpbmRvd0lkO1xyXG4gICAgICAgIGlmIChuZXdXaW4ucGFyZW50V2luZG93SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRXaW5kb3dCeUlkKG5ld1dpbi5wYXJlbnRXaW5kb3dJZCkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUud2luZG93cy5wdXNoKG5ld1dpbik7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuTWVzc2FnZVdpbmRvdyh3aW5Db250ZW50OiBSZWFjdC5SZWFjdE5vZGUsIG9wZW5QYXJhbXM/OiBPcGVuTWVzc2FnZVdpbmRvd1BhcmFtcykge1xyXG4gICAgICAgIGlmICghb3BlblBhcmFtcylcclxuICAgICAgICAgICAgb3BlblBhcmFtcyA9IHtzdHlsZTogXCJpbmZvcm1hdGlvblwifTtcclxuXHJcbiAgICAgICAgbGV0IHdpblBhcmFtczogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IG9wZW5QYXJhbXMudGl0bGUsXHJcbiAgICAgICAgICAgIHBhcmVudFdpbmRvd0lkOiBvcGVuUGFyYW1zLnBhcmVudFdpbmRvd0lkLFxyXG4gICAgICAgICAgICBhdXRvUG9zaXRpb246IFwicGFyZW50LWNlbnRlclwiLFxyXG4gICAgICAgICAgICBhdXRvU2l6ZTogXCJjb250ZW50XCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdpblBhcmFtcy5wYXJlbnRXaW5kb3dJZClcclxuICAgICAgICAgICAgd2luUGFyYW1zLmF1dG9Qb3NpdGlvbiA9IFwiZGVza3RvcC1jZW50ZXJcIjtcclxuXHJcbiAgICAgICAgbGV0IG9rQnV0dG9uOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICAgICAgaWYgKG9wZW5QYXJhbXMub2tCdXR0b25Db250ZW50KSB7XHJcbiAgICAgICAgICAgIG9rQnV0dG9uID08QnV0dG9uPntvcGVuUGFyYW1zLm9rQnV0dG9uQ29udGVudH08L0J1dHRvbj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2FuY2VsQnV0dG9uOiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG4gICAgICAgIGxldCB3aW4gPVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3dpbkNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtva0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuXHJcbiAgICAgICAgdGhpcy5vcGVuV2luZG93KHdpbkNvbnRlbnQsIHdpblBhcmFtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFjdGl2YXRlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgd2luID0gdGhpcy5nZXRUb3BQYXJlbnRXaW5kb3coaWQpO1xyXG4gICAgICAgIGlmICh3aW4gJiYgdGhpcy5zdGF0ZS53aW5kb3dzLmluZGV4T2Yod2luKSAhPT0gdGhpcy5zdGF0ZS53aW5kb3dzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgXy5wdWxsKHRoaXMuc3RhdGUud2luZG93cywgd2luKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dzLnB1c2god2luKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g0L/QvtC00L3QuNC80LDQtdC8INC00L7Rh9C10YDQvdC40LUg0L7QutC90LBcclxuICAgICAgICAgICAgbGV0IGNoaWxkV2luID0gdGhpcy5zdGF0ZS53aW5kb3dzLmZpbHRlcigodzogRGVza3RvcFdpbmRvdykgPT4gdy5wYXJlbnRXaW5kb3dJZCA9PT0gd2luLmlkKVswXTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkV2luKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUNoaWxkV2luZG93KGNoaWxkV2luLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVDaGlsZFdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdpbiAmJiB0aGlzLnN0YXRlLndpbmRvd3MuaW5kZXhPZih3aW4pICE9PSB0aGlzLnN0YXRlLndpbmRvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBfLnB1bGwodGhpcy5zdGF0ZS53aW5kb3dzLCB3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpbmRvd3MucHVzaCh3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQv9C+0LTQvdC40LzQsNC10Lwg0LTQvtGH0LXRgNC90LjQtSDQvtC60L3QsFxyXG4gICAgICAgICAgICBsZXQgY2hpbGRXaW4gPSB0aGlzLnN0YXRlLndpbmRvd3MuZmlsdGVyKCh3OiBEZXNrdG9wV2luZG93KSA9PiB3LnBhcmVudFdpbmRvd0lkID09PSB3aW4uaWQpWzBdO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRXaW4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlV2luZG93KGNoaWxkV2luLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9wUGFyZW50V2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdG9wUGFyZW50ID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgICAgICB3aGlsZSAodG9wUGFyZW50LnBhcmVudFdpbmRvd0lkKSB7XHJcbiAgICAgICAgICAgIHRvcFBhcmVudCA9IHRoaXMuZ2V0V2luZG93QnlJZCh0b3BQYXJlbnQucGFyZW50V2luZG93SWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3BQYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2luZG93QnlJZChpZDogc3RyaW5nKTogRGVza3RvcFdpbmRvdyB7XHJcbiAgICAgICAgZm9yIChsZXQgdyBvZiB0aGlzLnN0YXRlLndpbmRvd3MpIHtcclxuICAgICAgICAgICAgaWYgKHcuaWQgPT09IGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkRlc2t0b3BXaW5kb3cgaWQ9J1wiICsgaWQgKyBcIicgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVBY3RpdmF0ZSA9IChzdGF0ZTogV2luZG93U3RhdGUpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlV2luZG93KHN0YXRlLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAgICAgXy5wdWxsKHRoaXMuc3RhdGUud2luZG93cywgd2luKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbi5wYXJlbnRXaW5kb3dJZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlV2luZG93KHdpbi5wYXJlbnRXaW5kb3dJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93QnlJZCh3aW4ucGFyZW50V2luZG93SWQpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoc3RhdGU6IFdpbmRvd1N0YXRlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZVdpbmRvdyhzdGF0ZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLmRpZE1vdW50KCk7XHJcbiAgICAgICAgKHRoaXMubmF0aXZlRWxlbWVudCBhcyBhbnkpW1wiJCRkZXNrdG9wXCJdID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJkZXNrdG9wXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImF1dG9cIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17IChlKSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH0gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLndpbmRvd3MubWFwKCh3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLWRlc2t0b3Atd2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt3LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3cudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A9e3cudG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdD17dy5sZWZ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3cud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3cuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ9e3cucmlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b209e3cuYm90dG9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3cuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aD17dy5taW5XaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodD17dy5taW5IZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17dy5hdXRvU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Qb3NpdGlvbj17dy5hdXRvUG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRXaW5kb3dJZD17dy5wYXJlbnRXaW5kb3dJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZhdGU9eyAgdGhpcy5oYW5kbGVBY3RpdmF0ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsgdGhpcy5oYW5kbGVDbG9zZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vb25Nb3ZlU3RhcnQ9eyB3LmhhbmRsZU1vdmVTdGFydCB9XHJcbi8vb25SZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0PXsgdy5oYW5kbGVSZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0IH1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EZXNrdG9wL0Rlc2t0b3AudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wcywgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rlc2t0b3B9IGZyb20gXCIuL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQgRWxlbWVudCA9IEpTWC5FbGVtZW50O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcFN0YXRlPiB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHNpemVUbzogXCJwYXJlbnRcIiB8IFwiY29udGVudFwiO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuY2xhc3MgQXBwU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxBcHBQcm9wcz4ge1xyXG4gICAgd2luZG93czogQXBwV2luZG93W10gPSBbXTsgIC8vINC/0L7RgdC70LXQtNC90LXQtSDQsNC60YLQuNCy0L3QvlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PEFwcFByb3BzLCBBcHBTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFwcFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICBhcHBJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgLy8gICAgIHN1cGVyLmRpZE1vdW50KCk7XHJcbiAgICAvLyAgICAgYXBwSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGRlc2t0b3A6IERlc2t0b3A7XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImFwcFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGFwcEluc3RhbmNlOiBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHAudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcbmltcG9ydCB7TW92YWJsZSwgTW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi9Nb3ZhYmxlL01vdmFibGVcIjtcclxuaW1wb3J0IHtPcGVuV2luZG93UGFyYW1zLCBEZXNrdG9wLCBXaW5kb3dBdXRvUG9zaXRpb24sIFdpbmRvd0F1dG9TaXplfSBmcm9tIFwiLi4vRGVza3RvcC9EZXNrdG9wXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dQcm9wcyBleHRlbmRzIE9wZW5XaW5kb3dQYXJhbXMsIENvbXBvbmVudFByb3BzPFdpbmRvd1N0YXRlPiB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIG9uQWN0aXZhdGU/KHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQ7XHJcbiAgICBvbkNsb3NlPyhzdGF0ZTogV2luZG93U3RhdGUpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93U3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxXaW5kb3dQcm9wcz4gaW1wbGVtZW50cyBPcGVuV2luZG93UGFyYW1zIHtcclxuICAgIGNvbnRlbnQ6IEpTWC5FbGVtZW50O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHJpZ2h0OiBudW1iZXI7XHJcbiAgICBib3R0b206IG51bWJlcjtcclxuICAgIG1pbkhlaWdodDogbnVtYmVyO1xyXG4gICAgbWluV2lkdGg6IG51bWJlcjtcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgcGFyZW50V2luZG93SWQ6IHN0cmluZztcclxuICAgIGF1dG9Qb3NpdGlvbjogV2luZG93QXV0b1Bvc2l0aW9uO1xyXG4gICAgYXV0b1NpemU6IFdpbmRvd0F1dG9TaXplO1xyXG5cclxuLy8gICAgY2hpbGRXaW5kb3c6IFdpbmRvdztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvbmVudDxXaW5kb3dQcm9wcywgV2luZG93U3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBXaW5kb3dQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFdpbmRvd1N0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlSW5pdFN0YXRlKCkge1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbml0U3RhdGUoKTtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBXaW5kb3dQcm9wcykge1xyXG4gICAgICAgIHN1cGVyLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgICAgICAvL3RoaXMuc3RhdGUuZGlzYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFBhcmVudERlc2t0b3BFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAoKHBhcmVudCBhcyBhbnkpLiQkZGVza3RvcClcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGNlbnRlclRvKHBhcmVudDogSlF1ZXJ5KSB7XHJcbiAgICAvLyAgICAgbGV0IHdpbiA9ICQodGhpcy5uYXRpdmVFbGVtZW50KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5zdGF0ZS50b3AgPSAocGFyZW50Lm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKSkgLyAyO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLnRvcCA+IHBhcmVudC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhdGUudG9wID0gcGFyZW50Lm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKTtcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS50b3AgPCAwKSB0aGlzLnN0YXRlLnRvcCA9IDA7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMuc3RhdGUubGVmdCA9IChwYXJlbnQub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSkgLyAyO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPiBwYXJlbnQub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSlcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gcGFyZW50Lm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCk7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUubGVmdCA8IDApIHRoaXMuc3RhdGUubGVmdCA9IDA7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNlbnRlclRvRGVza3RvcCgpIHtcclxuICAgICAgICBsZXQgd2luID0gJCh0aGlzLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBkZXNrdG9wID0gJCh0aGlzLmdldFBhcmVudERlc2t0b3BFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IChkZXNrdG9wLm91dGVySGVpZ2h0KCkgLSB3aW4ub3V0ZXJIZWlnaHQoKSkgLyAyO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IChkZXNrdG9wLm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpIC8gMjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9wID4gZGVza3RvcC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG9wID0gZGVza3RvcC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9wIDwgMCkgdGhpcy5zdGF0ZS50b3AgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmxlZnQgPSAoZGVza3RvcC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpKSAvIDI7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGVmdCA+IGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gZGVza3RvcC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPCAwKSB0aGlzLnN0YXRlLmxlZnQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgLy90aGlzLmNlbnRlclRvKCQodGhpcy5nZXRQYXJlbnREZXNrdG9wRWxlbWVudCgpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjZW50ZXJUb1BhcmVudFdpbmRvdygpIHtcclxuICAgICAgICBsZXQgd2luID0gJCh0aGlzLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSAkKFwiI1wiICsgdGhpcy5zdGF0ZS5wYXJlbnRXaW5kb3dJZCk7XHJcbiAgICAgICAgbGV0IGRlc2t0b3AgPSAkKHRoaXMuZ2V0UGFyZW50RGVza3RvcEVsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudG9wID0gKHBhcmVudC5vdXRlckhlaWdodCgpIC0gd2luLm91dGVySGVpZ2h0KCkpIC8gMiArIHBhcmVudC5wb3NpdGlvbigpLnRvcDtcclxuICAgICAgICB0aGlzLnN0YXRlLmxlZnQgPSAocGFyZW50Lm91dGVyV2lkdGgoKSAtIHdpbi5vdXRlcldpZHRoKCkpIC8gMiArIHBhcmVudC5wb3NpdGlvbigpLmxlZnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcCA+IGRlc2t0b3Aub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IGRlc2t0b3Aub3V0ZXJIZWlnaHQoKSAtIHdpbi5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcCA8IDApIHRoaXMuc3RhdGUudG9wID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGVmdCA+IGRlc2t0b3Aub3V0ZXJXaWR0aCgpIC0gd2luLm91dGVyV2lkdGgoKSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gZGVza3RvcC5vdXRlcldpZHRoKCkgLSB3aW4ub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxlZnQgPCAwKSB0aGlzLnN0YXRlLmxlZnQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgLy90aGlzLmNlbnRlclRvKCQoXCIjXCIgKyB0aGlzLnN0YXRlLnBhcmVudFdpbmRvd0lkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLmRpZE1vdW50KCk7XHJcbiAgICAgICAgKHRoaXMubmF0aXZlRWxlbWVudCBhcyBhbnkpW1wiJCR3aW5kb3dcIl0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hdXRvUG9zaXRpb24gPT09IFwiZGVza3RvcC1jZW50ZXJcIilcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXJUb0Rlc2t0b3AoKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmF1dG9Qb3NpdGlvbiA9PT0gXCJwYXJlbnQtY2VudGVyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyVG9QYXJlbnRXaW5kb3coKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnREZXNrdG9wKCkuY2xvc2VXaW5kb3codGhpcy5zdGF0ZS5pZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb3ZlU3RhcnQgPSAoZTogTW92ZVN0YXJ0RXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBlLmJpbmRYKHRoaXMuc3RhdGUsIFwibGVmdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQodGhpcy5uYXRpdmVFbGVtZW50KS5jc3MoXCJsZWZ0XCIsIHRoaXMuc3RhdGUubGVmdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5iaW5kWSh0aGlzLnN0YXRlLCBcInRvcFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQodGhpcy5uYXRpdmVFbGVtZW50KS5jc3MoXCJ0b3BcIiwgdGhpcy5zdGF0ZS50b3ApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayhudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydCA9IChlOiBNb3ZlU3RhcnRFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUuYmluZFgodGhpcy5zdGF0ZSwgXCJ3aWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpZHRoIDwgdGhpcy5zdGF0ZS5taW5XaWR0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGggPSB0aGlzLnN0YXRlLm1pbldpZHRoO1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKFwid2lkdGhcIiwgdGhpcy5zdGF0ZS53aWR0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5iaW5kWSh0aGlzLnN0YXRlLCBcImhlaWdodFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhlaWdodCA8IHRoaXMuc3RhdGUubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLnN0YXRlLm1pbkhlaWdodDtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcyhcImhlaWdodFwiLCB0aGlzLnN0YXRlLmhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVPbkNsaWNrID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY3RpdmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGl2YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChuZXh0UHJvcHM6IFdpbmRvd1Byb3BzLCBuZXh0U3RhdGU6IFdpbmRvd1N0YXRlKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBvbGREaXNhYmxlZCA9IHRoaXMuc3RhdGUuZGlzYWJsZWQgPT09IHRydWU7XHJcbiAgICAgICAgbGV0IG5ld0Rpc2FibGVkID0gbmV4dFByb3BzLmRpc2FibGVkID09PSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmRpc2FibGVkID0gbmV3RGlzYWJsZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiBvbGREaXNhYmxlZCAhPT0gbmV3RGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlclJpZ2h0Qm90dG9tQ29ybmVyUmVzaXplcigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmF1dG9TaXplID09PSBcImNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TW92YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbmRvdy1yZXNpemVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaGVpZ2h0OjEwLCB3aWR0aDoxMCwgcmlnaHQ6MCxib3R0b206MCwgYm9yZGVyUmFkaXVzOiBcIjAgMCA1cHggMFwiLGN1cnNvcjogXCJzZS1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9e3RoaXMucmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvTW92YWJsZT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7aWQ6IHRoaXMuc3RhdGUuaWR9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJ3aW5kb3cgYm94XCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJhYnNvbHV0ZVwifSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtcclxuICAgICAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCxcclxuICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxyXG4gICAgICAgICAgICByaWdodDogdGhpcy5zdGF0ZS5yaWdodCxcclxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnN0YXRlLmJvdHRvbSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnN0YXRlLm1pbkhlaWdodCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMuc3RhdGUubWluV2lkdGgsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYXV0b1NpemUpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmF1dG9TaXplID09PSBcImNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgIC8vID9cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlckJ1dHRvblN0eWxlID0ge1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAyLFxyXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItd2luXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5kaXNhYmxlZCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRpc2FibGVkKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVkV3JhcHBlckNsYXNzID0gXCJ3aW5kb3ctZGlzYWJsZWQtd3JhcHBlclwiO1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCB8fCB0aGlzLnN0YXRlLmRpc2FibGVkID09PSBmYWxzZSlcclxuICAgICAgICAgICAgZGlzYWJsZWRXcmFwcGVyQ2xhc3MgKz0gXCIgaXMtaGlkZGVuXCI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luZG93XCJcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgcmVmPXsgKGU6IGFueSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9fVxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZU9uQ2xpY2sgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJjb2x1bW5cIiBzaXplVG89XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luZG93LWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjVweCA1cHggMHB4IDBweFwiLCBwb3NpdGlvbjpcInJlbGF0aXZlXCIsIHBhZGRpbmdMZWZ0OiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJyb3dcIiBzaXplVG89XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndpbmRvdy10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOjAsIGxlZnQ6MCwgcmlnaHQ6MCxib3R0b206MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXt0aGlzLm1vdmVTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWFkZG9ucyBidXR0b25zLWJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAyLCBwYWRkaW5nUmlnaHQ6IDR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIG1pbmltaXplLWJ1dHRvblwiIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWludXNcIiBzdHlsZT17e3RvcDogM319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBtYXhpbWl6ZS1idXR0b25cIiBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW9cIiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGNsb3NlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIHN0eWxlPXt7dG9wOiAtMX19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwid2luZG93LWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOjEwLCBvdmVyZmxvdzpcImhpZGRlblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUmlnaHRCb3R0b21Db3JuZXJSZXNpemVyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGlzYWJsZWRXcmFwcGVyQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgbGVmdDowLCB0b3A6MCwgcmlnaHQ6MCwgYm90dG9tOjB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gPGRpdiBjbGFzc05hbWU9XCJ3aW5kb3ctYm9keVwiIHN0eWxlPXt7IGhlaWdodDpcIjEwMCVcIiB9fT5cclxuLy8gICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4vLyA8L2Rpdj5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9XaW5kb3cvV2luZG93LnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IERyYWdFdmVudEhhbmRsZXIgPSBfX1JlYWN0LkRyYWdFdmVudEhhbmRsZXI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmFibGVQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25Nb3ZlU3RhcnQ/OiAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50KT0+dm9pZDtcclxuICAgIG9uTW92ZT86IChldmVudDogTW92ZUV2ZW50KT0+dm9pZDtcclxuICAgIG9uTW92ZUVuZD86IChldmVudDogTW92ZUVuZEV2ZW50KT0+dm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92ZVN0YXJ0RXZlbnQge1xyXG4gICAgYmluZFg6IChvYmo6IE9iamVjdCwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpPT52b2lkKT0+dm9pZDtcclxuICAgIGJpbmRZOiAob2JqOiBPYmplY3QsIHByb3BOYW1lOiBzdHJpbmcsIG1vdmVkQ2FsbGJhY2s/OiAoKT0+dm9pZCk9PnZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUV2ZW50IHtcclxuICAgIGRlbHRhWDogbnVtYmVyO1xyXG4gICAgZGVsdGFZOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUVuZEV2ZW50IHtcclxuICAgIGRlbHRhWDogbnVtYmVyO1xyXG4gICAgZGVsdGFZOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgQmluZGVkT2JqZWN0IHtcclxuICAgIG9iajogYW55O1xyXG4gICAgcHJvcE5hbWU6IHN0cmluZ1xyXG4gICAgc3RhcnRWYWx1ZTogbnVtYmVyO1xyXG4gICAgbW92ZWRDYWxsYmFjaz86ICgpID0+IHZvaWQ7XHJcbiAgICBsYXN0VmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmFibGUgZXh0ZW5kcyBDb21wb25lbnQ8TW92YWJsZVByb3BzLGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSwgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0Q2xpZW50WDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdGFydENsaWVudFk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZHJhZ092ZXJfQmluZGVkOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kZWRYOiBCaW5kZWRPYmplY3RbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBiaW5kZWRZOiBCaW5kZWRPYmplY3RbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgYmluZFgob2JqOiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIG1vdmVkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kZWRYLnB1c2goe1xyXG4gICAgICAgICAgICBvYmo6IG9iaixcclxuICAgICAgICAgICAgcHJvcE5hbWU6IHByb3BOYW1lLFxyXG4gICAgICAgICAgICBzdGFydFZhbHVlOiBvYmpbcHJvcE5hbWVdLFxyXG4gICAgICAgICAgICBtb3ZlZENhbGxiYWNrOiBtb3ZlZENhbGxiYWNrLFxyXG4gICAgICAgICAgICBsYXN0VmFsdWU6IG9ialtwcm9wTmFtZV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kWShvYmo6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmJpbmRlZFkucHVzaCh7XHJcbiAgICAgICAgICAgIG9iajogb2JqLFxyXG4gICAgICAgICAgICBwcm9wTmFtZTogcHJvcE5hbWUsXHJcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IG9ialtwcm9wTmFtZV0sXHJcbiAgICAgICAgICAgIG1vdmVkQ2FsbGJhY2s6IG1vdmVkQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogb2JqW3Byb3BOYW1lXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVEcmFnU3RhcnQoZTogRHJhZ0V2ZW50KSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRDbGllbnRYID0gZS5jbGllbnRYO1xyXG4gICAgICAgIHRoaXMuc3RhcnRDbGllbnRZID0gZS5jbGllbnRZO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdmVTdGFydClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmVTdGFydCh7YmluZFg6IHRoaXMuYmluZFguYmluZCh0aGlzKSwgYmluZFk6IHRoaXMuYmluZFkuYmluZCh0aGlzKX0pO1xyXG5cclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwibW92YWJsZVwiLCBcIlwiKTtcclxuICAgICAgICAvL2UuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ092ZXJfQmluZGVkID0gdGhpcy5oYW5kbGVEcmFnT3Zlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCB0aGlzLmRyYWdPdmVyX0JpbmRlZCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmFnRW5kKGU6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCB0aGlzLmRyYWdPdmVyX0JpbmRlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3ZlRW5kKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZUVuZCh7XHJcbiAgICAgICAgICAgICAgICBkZWx0YVg6IGUuY2xpZW50WCAtIHRoaXMuc3RhcnRDbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgZGVsdGFZOiBlLmNsaWVudFkgLSB0aGlzLnN0YXJ0Q2xpZW50WVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJpbmRlZFggPSBbXTtcclxuICAgICAgICB0aGlzLmJpbmRlZFkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmFnT3ZlcihlOiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGVkWC5mb3JFYWNoKChiaW5kKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGJpbmQuc3RhcnRWYWx1ZSArIGUuY2xpZW50WCAtIHRoaXMuc3RhcnRDbGllbnRYO1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGJpbmQubGFzdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kLm9ialtiaW5kLnByb3BOYW1lXSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYmluZC5sYXN0VmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5kLm1vdmVkQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgYmluZC5tb3ZlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kZWRZLmZvckVhY2goKGJpbmQpPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBiaW5kLnN0YXJ0VmFsdWUgKyBlLmNsaWVudFkgLSB0aGlzLnN0YXJ0Q2xpZW50WTtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBiaW5kLmxhc3RWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgYmluZC5vYmpbYmluZC5wcm9wTmFtZV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJpbmQubGFzdFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmluZC5tb3ZlZENhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGJpbmQubW92ZWRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmUoe1xyXG4gICAgICAgICAgICAgICAgZGVsdGFYOiBlLmNsaWVudFggLSB0aGlzLnN0YXJ0Q2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGRlbHRhWTogZS5jbGllbnRZIC0gdGhpcy5zdGFydENsaWVudFlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwibW92YWJsZVwiKTtcclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtkcmFnZ2FibGU6IHRydWV9KTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7Y3Vyc29yOiBcIm1vdmVcIn0pO1xyXG5cclxuICAgICAgICAvL3JldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BJbmZvLmVkaXRvclR5cGUsIGVkaXRvclByb3BzLCBudWxsKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXt0aGlzLmhhbmRsZURyYWdTdGFydC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgb25EcmFnRW5kPXt0aGlzLmhhbmRsZURyYWdFbmQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGUudHN4XG4gKiovIiwiaW1wb3J0IHtTdHJpbmdFZGl0b3J9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7VGVzdEJ1aHRhT2JqZWN0MX0gZnJvbSBcIi4vdGVzdEJ1aHRhT2JqZWN0MVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIHRlc3RCdWh0YU9iamVjdDIgZXh0ZW5kcyBUZXN0QnVodGFPYmplY3QxIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCf0L7Quy9zZXhcIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQlNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvlwiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0J/QvtGC0L7Qu9C+0Log0LDQsdC+0L3QtdC90YLQsFwiXHJcbiAgICB9KVxyXG4gICAgc2V4OiBzdHJpbmc7XHJcblxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDIudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBzaGFsbG93Q29tcGFyZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtc2hhbGxvdy1jb21wYXJlXCIpO1xyXG5cclxuLy9pbXBvcnQge2V4ZWN1dGVTUUx9IGZyb20gXCIuLi9idWh0YS1jb3JlL1NRTFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uLy4uL1NRTFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uc30gZnJvbSBcIi4vVHJlZUdyaWRDb2x1bW5zXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5Qcm9wcywgVHJlZUdyaWRDb2x1bW59IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7S2V5Y29kZX0gZnJvbSBcIi4uLy4uL0tleWNvZGVcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlU3RhcnRFdmVudH0gZnJvbSBcIi4uL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge2dldFNjcm9sbGJhcldpZHRofSBmcm9tIFwiLi4vLi4vZ2V0U2Nyb2xsQmFyV2lkdGhcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9CdXR0b25cIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0xheW91dFwiO1xyXG5pbXBvcnQge0ZpeGVkfSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZsZXhcIjtcclxuaW1wb3J0IHtPYmplY3REZXNpZ25lcn0gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lclwiO1xyXG5pbXBvcnQge09wZW5XaW5kb3dQYXJhbXN9IGZyb20gXCIuLi9EZXNrdG9wL0Rlc2t0b3BcIjtcclxuaW1wb3J0IHthcHBJbnN0YW5jZX0gZnJvbSBcIi4uL0FwcFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkRGF0YVNvdXJjZX0gZnJvbSBcIi4vVHJlZUdyaWREYXRhU291cmNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8VHJlZUdyaWRTdGF0ZT4ge1xyXG4gICAgZGF0YVNvdXJjZTogVHJlZUdyaWREYXRhU291cmNlO1xyXG4gICAgcm93SGVpZ2h0PzogbnVtYmVyO1xyXG4gICAga2V5RmllbGROYW1lPzogc3RyaW5nO1xyXG4gICAgcGFyZW50S2V5RmllbGROYW1lPzogc3RyaW5nO1xyXG4gICAgaGllcmFyY2h5RmllbGROYW1lPzogc3RyaW5nO1xyXG4gICAgaGllcmFyY2h5RGVsaW1pdGVycz86IHN0cmluZztcclxuICAgIHRyZWVNb2RlPzogYm9vbGVhbjtcclxuICAgIGF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw/OiBudW1iZXI7XHJcblxyXG4gICAgZWRpdGFibGU/OiBib29sZWFuO1xyXG4gICAgZGVueUluc2VydD86IGJvb2xlYW47XHJcbiAgICBkZW55VXBkYXRlPzogYm9vbGVhbjtcclxuICAgIGRlbnlEZWxldGU/OiBib29sZWFuO1xyXG5cclxuICAgIG9uQ3JlYXRlTmV3UmVjb3JkPzogKCkgPT4gYW55O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxUcmVlR3JpZFByb3BzPiB7XHJcbiAgICBjb2x1bW5zOiBJbnRlcm5hbENvbHVtbltdO1xyXG4gICAgcGFnZUxlbmd0aDogbnVtYmVyO1xyXG4gICAgcm93czogSW50ZXJuYWxSb3dbXTtcclxuICAgIG5vZGVzOiBJbnRlcm5hbFRyZWVOb2RlW107XHJcbiAgICBmb2N1c2VkUm93SW5kZXg6IG51bWJlcjtcclxuICAgIGZvY3VzZWRDZWxsSW5kZXg6IG51bWJlcjtcclxuICAgIGRhdGFTb3VyY2U6IFRyZWVHcmlkRGF0YVNvdXJjZTtcclxuXHJcbiAgICBoZWFkZXJGYWtlUm93OiBIVE1MRWxlbWVudDtcclxuICAgIGZvb3RlckZha2VSb3c6IEhUTUxFbGVtZW50O1xyXG4gICAgaGVhZGVyV3JhcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgYm9keVdyYXBwZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGZvb3RlcldyYXBwZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBoZWFkZXJUYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgYm9keVRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb290ZXJUYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxDb2x1bW4ge1xyXG4gICAgcHJvcHM6IFRyZWVHcmlkQ29sdW1uUHJvcHM7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgY2FwdGlvbjogc3RyaW5nO1xyXG4gICAgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgICBmb290ZXI6IHN0cmluZztcclxuICAgIGhpZGRlbjogYm9vbGVhbjtcclxuICAgIGhlYWRlcldpZHRoTmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBib2R5V2lkdGhOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGZvb3RlcldpZHRoTmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFJvdyB7XHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIC8vLyAgIHNvdXJjZU9iamVjdDogYW55O1xyXG4gICAgc291cmNlSW5kZXg6IG51bWJlcjtcclxuICAgIGNlbGxFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbm9kZTogSW50ZXJuYWxUcmVlTm9kZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFRyZWVOb2RlIHtcclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgc291cmNlT2JqZWN0OiBhbnk7XHJcbiAgICBzb3VyY2VJbmRleDogbnVtYmVyO1xyXG4gICAgY2VsbEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgLy8g0LTQu9GPIHRyZWVNb2RlO1xyXG4gICAgcGFyZW50OiBJbnRlcm5hbFRyZWVOb2RlO1xyXG4gICAgY2hpbGRyZW46IEludGVybmFsVHJlZU5vZGVbXSA9IFtdO1xyXG4gICAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG5cclxuICAgIHB1c2hSb3dSZWN1cnNpdmUocm93czogSW50ZXJuYWxSb3dbXSwgbWF4UGFnZUxlbmd0aDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCA+PSBtYXhQYWdlTGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCByb3cgPSBuZXcgSW50ZXJuYWxSb3coKTtcclxuICAgICAgICByb3cuc291cmNlSW5kZXggPSB0aGlzLnNvdXJjZUluZGV4O1xyXG4gICAgICAgIHJvdy5ub2RlID0gdGhpcztcclxuICAgICAgICByb3dzLnB1c2gocm93KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucHVzaFJvd1JlY3Vyc2l2ZShyb3dzLCBtYXhQYWdlTGVuZ3RoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXRlcmF0ZVJlY3Vyc2l2ZShjYWxsYmFjazogKG5vZGU6IEludGVybmFsVHJlZU5vZGUpID0+IHZvaWQpIHtcclxuICAgICAgICBjYWxsYmFjayh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLml0ZXJhdGVSZWN1cnNpdmUoY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLy9jb25zdCB2ZXJ0U2Nyb2xsQmFyV2lkdGggPSAzMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZCBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZFByb3BzLCBUcmVlR3JpZFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZWVHcmlkUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFRyZWVHcmlkU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXRlcmF0ZUFsbE5vZGVzKGNhbGxiYWNrOiAobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubm9kZXMuZm9yRWFjaCgobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLml0ZXJhdGVSZWN1cnNpdmUoY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwYW5kQWxsKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubm9kZXMuZm9yRWFjaCgobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLml0ZXJhdGVSZWN1cnNpdmUoKG5vZDogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kLmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29sbGFwc2VBbGwoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlcmF0ZUFsbE5vZGVzKChub2Q6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgbm9kLmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Um93SW5kZXgoc291cmNlSW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gVE9ETzog0YHQtNC10LvQsNGC0Ywg0LLQsNGA0LjQsNC90YIg0LTQu9GPIHRyZWVNb2RlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5zb3VyY2VJbmRleCA9PT0gc291cmNlSW5kZXgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hSb3coc291cmNlSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0Um93SW5kZXgoc291cmNlSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIC8vIFRPRE86INGB0LTQtdC70LDRgtGMINC/0YDQvtC60YDRg9GC0LrRgywg0LXRgdC70LggZm9jdXNlZCDQvdC1INCy0LjQtNC90LAg0L3QsCDRjdC60YDQsNC90LVcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVVcGRhdGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm9wZW5FZGl0Rm9ybSh0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSW5zZXJ0QnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuSW5zZXJ0Rm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIC8vdGhpcy5vcGVuRWRpdEZvcm0odGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4XSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5JbnNlcnRGb3JtKCkge1xyXG5cclxuICAgICAgICBsZXQgZGVzaWduZWRPYmplY3QgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0TmV3Um93KCk7XHJcblxyXG4gICAgICAgIGlmIChkZXNpZ25lZE9iamVjdCkge1xyXG4gICAgICAgICAgICBsZXQgd2luID1cclxuICAgICAgICAgICAgICAgIDxPYmplY3REZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0PXtkZXNpZ25lZE9iamVjdH1cclxuICAgICAgICAgICAgICAgICAgICBvblNhdmVDaGFuZ2VzPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5hZGRSb3coZGVzaWduZWRPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hEYXRhU291cmNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoUm93KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcItC00L7QsdCw0LLQu9C10L3QuNC1XCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnRXaW5kb3dJZDogdGhpcy5nZXRQYXJlbnRXaW5kb3dJZCgpXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFBhcmVudERlc2t0b3AoKS5vcGVuV2luZG93KHdpbiwgb3BlblBhcmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkVkaXRGb3JtKHJvdzogSW50ZXJuYWxSb3cpIHtcclxuXHJcbiAgICAgICAgbGV0IGRlc2lnbmVkT2JqZWN0ID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKClbcm93LnNvdXJjZUluZGV4XTtcclxuXHJcbiAgICAgICAgbGV0IHdpbiA9XHJcbiAgICAgICAgICAgIDxPYmplY3REZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgZGVzaWduZWRPYmplY3Q9e2Rlc2lnbmVkT2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgb25TYXZlQ2hhbmdlcz17ICgpID0+IHsgdGhpcy5yZWZyZXNoUm93KHJvdy5zb3VyY2VJbmRleCk7IH19XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1XCIsXHJcbiAgICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDUwLFxyXG4gICAgICAgICAgICBwYXJlbnRXaW5kb3dJZDogdGhpcy5nZXRQYXJlbnRXaW5kb3dJZCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnREZXNrdG9wKCkub3BlbldpbmRvdyh3aW4sIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ29sdW1ucygpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8g0YHQvdCw0YfQsNC70LAg0LrQvtC70L7QvdC60Lgg0LfQsNC/0L7Qu9C90Y/QtdC8INC40Lcg0YLQtdCz0L7QsiA8VHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgbGV0IGNvbHVtbnNUYWcgPSB0aGlzLmdldENoaWxkcmVuKFRyZWVHcmlkQ29sdW1ucyk7XHJcbiAgICAgICAgY29sdW1uc1RhZy5mb3JFYWNoKCh0YWc6IEpTWC5FbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5UYWdMaXN0ID0gdGhpcy5nZXRDaGlsZHJlbk9mUHJvcHModGFnLnByb3BzLCBUcmVlR3JpZENvbHVtbik7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5UYWdMaXN0ID0gY29sdW1uVGFnTGlzdC5zb3J0KChhOiBKU1guRWxlbWVudCwgYjogSlNYLkVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBBID0gYS5wcm9wcyBhcyBUcmVlR3JpZENvbHVtblByb3BzO1xyXG4gICAgICAgICAgICAgICAgbGV0IEIgPSBiLnByb3BzIGFzIFRyZWVHcmlkQ29sdW1uUHJvcHM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQS5vcmRlciAtIEIub3JkZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1uVGFnTGlzdC5mb3JFYWNoKChwcm9wQ29sOiBKU1guRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBuZXcgSW50ZXJuYWxDb2x1bW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbC5wcm9wcyA9IHByb3BDb2wucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBjb2wud2lkdGggPSBwcm9wQ29sLnByb3BzLndpZHRoIHx8IDE1MDtcclxuICAgICAgICAgICAgICAgIGNvbC5jYXB0aW9uID0gcHJvcENvbC5wcm9wcy5jYXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgY29sLmZpZWxkTmFtZSA9IHByb3BDb2wucHJvcHMucHJvcGVydHlOYW1lO1xyXG4gICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLnByb3BzLmNhcHRpb24gfHwgY29sLmZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5wdXNoKGNvbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQtdGB0LvQuCDRgtC10LPQvtCyIDxUcmVlR3JpZENvbHVtbj4g0L3QtdGCLCDRgtC+INC30LDQv9C+0LvQvdGP0LXQvCDQuNC3IERhdGFTb3VyY2VcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmlzVHJlZUdyaWREYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHMgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgYXMgVHJlZUdyaWREYXRhU291cmNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb2x1bW5zID0gZHMuZ2V0VHJlZUdyaWRDb2x1bW5zKCkuc29ydCgoYTogVHJlZUdyaWRDb2x1bW5Qcm9wcywgYjogVHJlZUdyaWRDb2x1bW5Qcm9wcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaCgocHJvcENvbDogVHJlZUdyaWRDb2x1bW5Qcm9wcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sID0gbmV3IEludGVybmFsQ29sdW1uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLnByb3BzID0gcHJvcENvbDtcclxuICAgICAgICAgICAgICAgICAgICBjb2wud2lkdGggPSBwcm9wQ29sLndpZHRoIHx8IDE1MDtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuY2FwdGlvbiA9IHByb3BDb2wuY2FwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuZmllbGROYW1lID0gcHJvcENvbC5wcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLmNhcHRpb24gfHwgY29sLmZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMucHVzaChjb2wpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVHJlZUdyaWQ6INGB0L/QuNGB0L7QuiDQutC+0LvQvtC90L7QuiDQvdC1INC+0L/RgNC10LTQtdC70LXQvS5cIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEZvY3VzZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm9kZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnRyZWVNb2RlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhpZXJhcmNoeUZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzRnJvbUhpZXJhcmNoeUZpZWxkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInVua25vd24gaGllcmFyY2h5IG1vZGVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm9kZXNGcm9tSGllcmFyY2h5RmllbGQoKSB7XHJcblxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlhUcmVlR3JpZDogaGllcmFyY2h5RGVsaW1pdGVycyBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpbnRlcmZhY2UgSVNvcnRlZCB7XHJcbiAgICAgICAgICAgIGhpZXJhcmNoeVN0cjogc3RyaW5nO1xyXG4gICAgICAgICAgICBvYmpJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNvcnRlZDogSVNvcnRlZFtdID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubWFwKChvYmo6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGllcmFyY2h5U3RyOiBvYmpbdGhpcy5wcm9wcy5oaWVyYXJjaHlGaWVsZE5hbWVdLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBvYmpJbmRleDogaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ydGVkID0gXy5zb3J0Qnkoc29ydGVkLCBbXCJoaWVyYXJjaHlTdHJcIl0pO1xyXG5cclxuICAgICAgICBsZXQgY2FjaGU6IHsgW2hpZXJhcmNoeUlkOiBzdHJpbmddOiBJbnRlcm5hbFRyZWVOb2RlOyB9ID0ge307XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUubm9kZXMgPSBbXTtcclxuXHJcbiAgICAgICAgc29ydGVkLmZvckVhY2goKHMsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3BsaXR0ZWQgPSBzLmhpZXJhcmNoeVN0ci5zcGxpdCh0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMpO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50SWQ6IGFueTtcclxuICAgICAgICAgICAgbGV0IG5vZGVJZDogYW55O1xyXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZWQubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgbm9kZUlkID0gcy5oaWVyYXJjaHlTdHI7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZUlkID0gXy5sYXN0KHNwbGl0dGVkKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudElkID0gc3BsaXR0ZWQuc2xpY2UoMCwgc3BsaXR0ZWQubGVuZ3RoIC0gMSkuam9pbih0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMuc2xpY2UoMCwgMSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVbbm9kZUlkXSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWFRyZWVHcmlkOiBub2RlSWQgJ1wiICsgbm9kZUlkICsgXCInIGlzIGR1cGxpY2F0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBJbnRlcm5hbFRyZWVOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zb3VyY2VJbmRleCA9IHMub2JqSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZXZlbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHBhbmRlZCA9IG5vZGUubGV2ZWwgPCB0aGlzLnByb3BzLmF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVbbm9kZUlkXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBjYWNoZVtwYXJlbnRJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgSW50ZXJuYWxUcmVlTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zb3VyY2VJbmRleCA9IHMub2JqSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBub2RlLmxldmVsID0gcGFyZW50Tm9kZS5sZXZlbCArIDE7XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4cGFuZGVkID0gbm9kZS5sZXZlbCA8IHRoaXMucHJvcHMuYXV0b0V4cGFuZE5vZGVzVG9MZXZlbDtcclxuICAgICAgICAgICAgICAgIGNhY2hlW3MuaGllcmFyY2h5U3RyXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7c3RyOiBzLmhpZXJhcmNoeVN0ciwgcGFyZW50SWQsIG5vZGVJZH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUm93cygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yb3dzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5vZGVzLmZvckVhY2goKG5vZGU6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnB1c2hSb3dSZWN1cnNpdmUodGhpcy5zdGF0ZS5yb3dzLCB0aGlzLnN0YXRlLnBhZ2VMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuaXNUcmVlR3JpZERhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkcyA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZSBhcyBUcmVlR3JpZERhdGFTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICBkcy5nZXREYXRhUm93cygpLmZvckVhY2goKG9iajogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBJbnRlcm5hbFJvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmZvckVhY2goKG9iajogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBJbnRlcm5hbFJvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluaXRGb2N1c2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zICYmIHRoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zWzBdLmZvb3RlciA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCArIFwiINC/0L7Qty5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckRhdGEoKSB7XHJcblxyXG4vLyAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFTb3VyY2UpIHtcclxuLy8gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhID0gdGhpcy5wcm9wcy5kYXRhU291cmNlLm1hcCgocm93KSA9PiByb3cpO1xyXG4vLyAgICAgICAgICAgIH1cclxuICAgICAgICAvL3RoaXMucm93cyA9IHdpbmRvd1tcInh4eFwiXS5maWx0ZXIoKHJvdykgPT4gcm93W1wi0J3QsNC30LLQsNC90LjQtVwiXS5pbmRleE9mKFwiUGhpbFwiKSA+IC0xKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsOiBudW1iZXI7XHJcbiAgICBsYXN0Qm9keVdyYXBwZXJIZWlnaHQgPSAwO1xyXG4gICAgbGFzdEJvZHlXcmFwcGVyV2lkdGggPSAwO1xyXG5cclxuICAgIGhhbmRsZUJvZHlXcmFwcGVyRWxlbWVudFJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGlmIChuZXdIZWlnaHQgIT09IHRoaXMubGFzdEJvZHlXcmFwcGVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEJvZHlXcmFwcGVySGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgaWYgKG5ld1dpZHRoICE9PSB0aGlzLmxhc3RCb2R5V3JhcHBlcldpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEJvZHlXcmFwcGVyV2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChudWxsKTtcclxuICAgICAgICB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5oYW5kbGVCb2R5V3JhcHBlckVsZW1lbnRSZXNpemUsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbnMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wYWdlTGVuZ3RoID0gNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWZyZXNoRGF0YVNvdXJjZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSB0ZXN0TG9hZDUwMCgpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgLy8gICAgICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0YWJsZS5yb3dzLm1hcCgocikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB70JrQu9GO0Yc6IHJbXCLQmtC70Y7Rh1wiXSwg0J3QvtC80LXRgDogcltcItCd0L7QvNC10YBcIl0sINCd0LDQt9Cy0LDQvdC40LU6IHJbXCLQndCw0LfQstCw0L3QuNC1XCJdfTtcclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgdG9wIDUwMDYqINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQmtC70Y7RhyAtLT4gXCIgKyB0YWJsZS5yb3dzWzBdLmdldFZhbHVlKDIpKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogVHJlZUdyaWRQcm9wcykge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkVXBkYXRlKHByZXZQcm9wczogVHJlZUdyaWRQcm9wcywgcHJldlN0YXRlOiBhbnksIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChudWxsKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJSb3dzKCk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZW5kZXJSb3dzLXN0YXJ0KClcIik7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci1yb3dzOiBcIiArIHRoaXMuc3RhdGUucm93cy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChyb3c6IEludGVybmFsUm93LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKHRoaXMucmVuZGVyUm93KHJvdywgaW5kZXgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlclJvd3MtZW5kKClcIik7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclJvdyhyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAga2V5PXtyb3dJbmRleH1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB7IHJvdy5lbGVtZW50ID0gZTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2VsbHMocm93LCByb3dJbmRleCl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNlbGxzKHJvdzogSW50ZXJuYWxSb3csIHJvd0luZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4sIGNvbEluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0LnB1c2godGhpcy5yZW5kZXJDZWxsKHJvdywgcm93SW5kZXgsIGNvbCwgY29sSW5kZXgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2VsbChyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyLCBjb2w6IEludGVybmFsQ29sdW1uLCBjb2xJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgb2JqSW5kZXggPSByb3cuc291cmNlSW5kZXg7XHJcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpW29iakluZGV4XVtjb2wucHJvcHMucHJvcGVydHlOYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vbGV0IHN0ciA9IHRoaXMucm93c1tyb3dJbmRleF0uc291cmNlT2JqZWN0W2NvbC5wcm9wcy5wcm9wZXJ0eU5hbWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8gcmV0dXJuIDx0ZCBrZXk9e2NvbEluZGV4fT5cclxuICAgICAgICAvLyAgICAgPGRpdiBzdHlsZT17e2hlaWdodDoxNiwgb3ZlcmZsb3c6XCJoaWRkZW5cIn19PntzdHJ9PC9kaXY+XHJcbiAgICAgICAgLy8gPC90ZD47XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gcm93Lm5vZGU7XHJcblxyXG4gICAgICAgIGxldCBoaWVyYXJjaHlQYWRkaW5nRGl2OiBKU1guRWxlbWVudDtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiAoY29sLnByb3BzLnNob3dIaWVyYXJjaHlQYWRkaW5nIHx8IGNvbC5wcm9wcy5zaG93SGllcmFyY2h5VHJlZSkpIHtcclxuICAgICAgICAgICAgaGllcmFyY2h5UGFkZGluZ0RpdiA9IDxzcGFuIHN0eWxlPXt7d2lkdGg6bm9kZS5sZXZlbCAqIDIwLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wifX0+PC9zcGFuPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0ZFN0eWxlOiBhbnkgPSB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9O1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlICYmIGNvbC5wcm9wcy5zaG93SGllcmFyY2h5VHJlZSkge1xyXG4gICAgICAgICAgICB0ZFN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gXCJyZ2JhKDI1NSwgMCwgMCwgMClcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdHJTcGFuU3R5bGU6IGFueSA9IHtcclxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlICYmIGNvbC5wcm9wcy5zaG93SGllcmFyY2h5VHJlZSAmJiBub2RlLmV4cGFuZGVkICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdHJTcGFuU3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RyU3BhbiA9IDxzcGFuIHN0eWxlPXsgc3RyU3BhblN0eWxlfT57c3RyfTwvc3Bhbj47XHJcblxyXG5cclxuICAgICAgICBsZXQgY29sbGFwc2VJY29uRGl2OiBKU1guRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VJY29uRGl2ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDoyMCwgZmxleDogXCIwIDAgYXV0b1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHtub2RlLmV4cGFuZGVkID0gZmFsc2U7IHRoaXMuY3JlYXRlUm93cygpOyB0aGlzLmZvcmNlVXBkYXRlKCk7fSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNvbGxhcHNlLWljb25cIiBzdHlsZT17eyB3aWR0aDoyMCwgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4ge25vZGUuZXhwYW5kZWQgPSB0cnVlOyB0aGlzLmNyZWF0ZVJvd3MoKTsgdGhpcy5mb3JjZVVwZGF0ZSgpO30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VJY29uRGl2ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNvbGxhcHNlLWljb25cIiBzdHlsZT17eyB3aWR0aDoyMCwgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAga2V5PXtjb2xJbmRleH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt0ZFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHJvdy5jZWxsRWxlbWVudHNbY29sSW5kZXhdID0gZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4geyB0aGlzLnNldEZvY3VzZWRDZWxsKHJvd0luZGV4LGNvbEluZGV4KTt9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY2hlY2tib3hcIiBzdHlsZT17eyBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXBhZGRpbmdcIiBzdHlsZT17eyBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hpZXJhcmNoeVBhZGRpbmdEaXZ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2xsYXBzZUljb25EaXZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWljb25cIiBzdHlsZT17eyBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3RyXCIgc3R5bGU9e3sgZmxleDogXCIwIDEgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJTcGFufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEZvY3VzZWRDZWxsKHJvd0luZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4ID0gcm93SW5kZXg7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4ID0gY2VsbEluZGV4O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVRhYmxlV2hlZWwoZTogV2hlZWxFdmVudCkge1xyXG4gICAgICAgIC8vIGlmIChlLmRlbHRhWSA+IDApXHJcbiAgICAgICAgLy8gICAgIHRoaXMuaW5jUGFnZVN0YXJ0SW5kZXgoMyk7XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoZS5kZWx0YVkgPCAwKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmRlY1BhZ2VTdGFydEluZGV4KDMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGVsdGFZKTtcclxuICAgICAgICAvLyB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoZTogVUlFdmVudCkge1xyXG4gICAgICAgICQodGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCkuY3NzKHt0b3A6IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcH0pO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpIC0gMDtcclxuICAgICAgICAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLmNzcyh7dG9wOiBwb3N9KTtcclxuXHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmhlYWRlckZha2VSb3cpLmNzcyh7aGVpZ2h0OiAkKHRoaXMuc3RhdGUuaGVhZGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCl9KTtcclxuICAgICAgICAkKHRoaXMuc3RhdGUuZm9vdGVyRmFrZVJvdykuY3NzKHtoZWlnaHQ6ICQodGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKX0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUNoYW5nZUZvY3VzZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLmZvckVhY2goKHJvdzogSW50ZXJuYWxSb3cpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvdy5lbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgJChyb3cuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1yb3dcIik7XHJcblxyXG4gICAgICAgICAgICByb3cuY2VsbEVsZW1lbnRzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICQoY2VsbCkucmVtb3ZlQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1jZWxsXCIpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBmb2N1c2VkUm93ID0gdGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4XTtcclxuICAgICAgICBpZiAoZm9jdXNlZFJvdyAmJiBmb2N1c2VkUm93LmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgJChmb2N1c2VkUm93LmVsZW1lbnQpLmFkZENsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtcm93XCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZvY3VzZWRDZWxsRWxlbWVudCA9IGZvY3VzZWRSb3cuY2VsbEVsZW1lbnRzW3RoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleF07XHJcbiAgICAgICAgICAgIGlmIChmb2N1c2VkQ2VsbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICQoZm9jdXNlZENlbGxFbGVtZW50KS5hZGRDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLWNlbGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEZvY3VzZWRDZWxsRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucm93c1t0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleF0uY2VsbEVsZW1lbnRzW3RoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb2N1c2VkUm93RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucm93c1t0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleF0uZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbERvd24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4IDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93RWwgPSAkKHRoaXMuZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyDRg9GI0LvQviDQt9CwINC/0YDQtdC00LXQu9GLINCy0LjQtNC40LzQvtGB0YLQuFxyXG4gICAgICAgICAgICBpZiAocm93RWwucG9zaXRpb24oKS50b3AgKyByb3dFbC5oZWlnaHQoKSA+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgKyB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5jbGllbnRIZWlnaHQgLSAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCA9IHJvd0VsLnBvc2l0aW9uKCkudG9wICsgcm93RWwuaGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LmNsaWVudEhlaWdodCArICQodGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxMZWZ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleC0tO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleCA8IHRoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbFVwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXgtLTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93RWwgPSAkKHRoaXMuZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyDRg9GI0LvQviDQt9CwINC/0YDQtdC00LXQu9GLINCy0LjQtNC40LzQvtGB0YLQuFxyXG4gICAgICAgICAgICBpZiAocm93RWwucG9zaXRpb24oKS50b3AgPCB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgKyAkKHRoaXMuc3RhdGUuaGVhZGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCA9IHJvd0VsLnBvc2l0aW9uKCkudG9wIC0gJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVCb2R5S2V5RG93bihlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBLZXljb2RlLkRvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNlZENlbGxEb3duKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IEtleWNvZGUuVXApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNlZENlbGxVcCgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLkxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNlZENlbGxMZWZ0KCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IEtleWNvZGUuUmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNlZENlbGxSaWdodCgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtblJlc2l6ZVN0YXJ0ID0gKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCwgY29sOiBJbnRlcm5hbENvbHVtbik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGV2ZW50LmJpbmRYKGNvbCwgXCJ3aWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQoY29sLmhlYWRlcldpZHRoTmF0aXZlRWxlbWVudCkuYXR0cihcIndpZHRoXCIsIGNvbC53aWR0aCk7XHJcbiAgICAgICAgICAgICQoY29sLmJvZHlXaWR0aE5hdGl2ZUVsZW1lbnQpLmF0dHIoXCJ3aWR0aFwiLCBjb2wud2lkdGgpO1xyXG4gICAgICAgICAgICAkKGNvbC5mb290ZXJXaWR0aE5hdGl2ZUVsZW1lbnQpLmF0dHIoXCJ3aWR0aFwiLCBjb2wud2lkdGgpO1xyXG4gICAgICAgICAgICBsZXQgdGFibGVXaWR0aCA9IHRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCk7XHJcbiAgICAgICAgICAgICQodGhpcy5zdGF0ZS5oZWFkZXJUYWJsZUVsZW1lbnQpLmNzcyhcIndpZHRoXCIsIHRhYmxlV2lkdGgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuYm9keVRhYmxlRWxlbWVudCkuY3NzKFwid2lkdGhcIiwgdGFibGVXaWR0aCk7XHJcbiAgICAgICAgICAgICQodGhpcy5zdGF0ZS5mb290ZXJUYWJsZUVsZW1lbnQpLmNzcyhcIndpZHRoXCIsIHRhYmxlV2lkdGgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50KS5jc3MoXCJtYXgtd2lkdGhcIiwgdGFibGVXaWR0aCArIGdldFNjcm9sbGJhcldpZHRoKCkgKyAxKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVPbkNsaWNrKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJDb2x1bW5IZWFkZXJzKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xIZWFkZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHtjb2wuaGVhZGVyV2lkdGhOYXRpdmVFbGVtZW50ID0gZTt9IH1cclxuICAgICAgICAgICAgICAgIC8+KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZFN0eWxlOiBhbnkgPSB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9O1xyXG5cclxuICAgICAgICAgICAgY29sSGVhZGVycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGRTdHlsZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sLmNhcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDowLCB3aWR0aDo1LCByaWdodDowLCBib3R0b206MCwgY3Vyc29yOlwiY29sLXJlc2l6ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9eyAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50KSA9PiB7IHRoaXMuY29sdW1uUmVzaXplU3RhcnQoZXZlbnQsIGNvbCk7IGNvbnNvbGUubG9nKFwiTW92ZVN0YXJ0XCIpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDowLCB3aWR0aDogaW5kZXggPT09IDAgPyAwIDogNSwgbGVmdDowLCBib3R0b206MCwgY3Vyc29yOlwiY29sLXJlc2l6ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9eyAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINGA0LXRgdCw0LnQt9C40Lwg0L/RgNC10LTRi9C00YPRidGD0Y4g0LrQvtC70L7QvdC60YNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5SZXNpemVTdGFydChldmVudCwgdGhpcy5zdGF0ZS5jb2x1bW5zW2luZGV4IC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90ZD4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RhYmxlTGF5b3V0OiBcImZpeGVkXCIsYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgd2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuaGVhZGVyVGFibGVFbGVtZW50ID0gZX1cclxuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sV2lkdGhzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbEhlYWRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb2x1bW5Gb290ZXJzKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXREYXRhUm93cygpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCBjb2xXaWR0aHM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBsZXQgY29sRm9vdGVyczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgaXNGb290ZXJFbXB0eSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29sV2lkdGhzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Y29sXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17IGNvbC53aWR0aC50b1N0cmluZygpICsgXCJweFwiIH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4ge2NvbC5mb290ZXJXaWR0aE5hdGl2ZUVsZW1lbnQgPSBlO30gfVxyXG4gICAgICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgICAgICBpZiAoY29sLmZvb3RlcilcclxuICAgICAgICAgICAgICAgIGlzRm9vdGVyRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHRkU3R5bGU6IGFueSA9IHtvdmVyZmxvdzogXCJoaWRkZW5cIn07XHJcbiAgICAgICAgICAgIGNvbEZvb3RlcnMucHVzaCg8dGQga2V5PXtpbmRleH0gc3R5bGU9e3RkU3R5bGV9Pntjb2wuZm9vdGVyfTwvdGQ+KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFpc0Zvb3RlckVtcHR5KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWZvb3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGFibGVMYXlvdXQ6IFwiZml4ZWRcIixib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuZm9vdGVyVGFibGVFbGVtZW50ID0gZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sV2lkdGhzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xGb290ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZ2V0RGF0YVJvd3MoKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2U6IFJlYWN0LlJlYWN0Tm9kZSA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5nZXRFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtZW1wdHktYm9keVwiPnttZXNzYWdlfTwvZGl2Pik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyR3JpZEJvZHkoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhU291cmNlLmdldERhdGFSb3dzKCkubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHtjb2wuYm9keVdpZHRoTmF0aXZlRWxlbWVudCA9IGU7fSB9XHJcbiAgICAgICAgICAgICAgICAvPik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICBvbktleURvd249eyAoZSkgPT4geyAgdGhpcy5oYW5kbGVCb2R5S2V5RG93bihlKTsgfSB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0YWJsZUxheW91dDogXCJmaXhlZFwiLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpfX1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmJvZHlUYWJsZUVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbFdpZHRoc31cclxuICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmhlYWRlckZha2VSb3cgPSBlfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJvd3MoKX1cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOlwibm9uZVwiIH19IHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmZvb3RlckZha2VSb3cgPSBlfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCk6IG51bWJlciB7XHJcblxyXG4gICAgICAgIGxldCByZXQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY29sLmhpZGRlbilcclxuICAgICAgICAgICAgICAgIHJldCArPSBjb2wud2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzOiBUcmVlR3JpZFByb3BzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGFsbG93LXRyZWUtZ3JpZFwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic2hhbGxvdy13aW4gLT4gaXNFcWlhbCA9IFwiICsgdGhpcy5pc1Byb3BzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzLCBbXCJjaGlsZHJlblwiXSkpO1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc1Byb3BzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzLCBbXCJjaGlsZHJlblwiLCBcImRhdGFTb3VyY2VcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVkaXRhYmxlQnV0dG9ucygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgYnV0dG9uczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZW55SW5zZXJ0ICE9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiaW5zZXJ0XCIgY2xhc3NOYW1lPVwiaXMtc21hbGxuXCIgb25DbGljaz17dGhpcy5oYW5kbGVJbnNlcnRCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZW55VXBkYXRlICE9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwidXBkYXRlXCIgY2xhc3NOYW1lPVwiaXMtc21hbGxuXCIgb25DbGljaz17dGhpcy5oYW5kbGVVcGRhdGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCY0LfQvNC10L3QuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZW55RGVsZXRlICE9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiZGVsZXRlXCIgY2xhc3NOYW1lPVwiaXMtc21hbGxuXCIgb25DbGljaz17dGhpcy5oYW5kbGVEZWxldGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vdGhpcy5hZGRDbGFzc05hbWUoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItdHJlZS1ncmlkXCIpO1xyXG5cclxuICAgICAgICBsZXQgbWF4Qm9keVdyYXBwZXJXaWR0aCA9IHRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCkgKyBnZXRTY3JvbGxiYXJXaWR0aCgpICsgMTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgbWF4Qm9keVdyYXBwZXJXaWR0aCA9IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwidHJlZS1ncmlkXCIgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7ICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaCA1MDAxXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmZpbHRlckRhdGEoKTsgdGhpcy5mb3JjZVVwZGF0ZSgpOyBjb25zb2xlLmxvZyhcImZvcmNlVXBkYXRlXCIpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmV4cGFuZEFsbCgpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgdGhpcy5jb2xsYXBzZUFsbCgpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2UgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAg0LfQsNCz0L7Qu9C+0LLQvtC6INC4INGCLtC0LlxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtYm9keS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcInJlbGF0aXZlXCIsIG92ZXJmbG93OlwiYXV0b1wiLCBmbGV4OlwiMVwiLCBtYXhXaWR0aDogbWF4Qm9keVdyYXBwZXJXaWR0aCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXsgdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZTphbnkpID0+IHt0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudCA9IGU7fX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFbXB0eURhdGFTb3VyY2VNZXNzYWdlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyR3JpZEJvZHkoKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2x1bW5IZWFkZXJzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sdW1uRm9vdGVycygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWZvb3Rlci13cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cInJvd1wiIHNpemVUbz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRWRpdGFibGVCdXR0b25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiaXMtc21hbGxuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLRi9Cx0YDQsNGC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpcy1zbWFsbG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkID5cclxuICAgICAgICAgICAgPC9MYXlvdXQgPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWQudHN4XG4gKiovIiwi77u/aW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQ29sdW1uc1Byb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICAvL2NhcHRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbnMgZXh0ZW5kcyBDb21wb25lbnQ8VHJlZUdyaWRDb2x1bW5zUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZENvbHVtbnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnMudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJHcmlkQ29sdW1uLCBHcmlkQ29sdW1uSW5mb30gZnJvbSBcIi4vcmVnaXN0ZXJHcmlkQ29sdW1uXCI7XHJcbi8vaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRDb2x1bW5Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgY2FwdGlvbj86IHN0cmluZztcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgcHJvcGVydHlOYW1lPzogc3RyaW5nO1xyXG4gICAgc2hvd0hpZXJhcmNoeVRyZWU/OiBib29sZWFuO1xyXG4gICAgc2hvd0hpZXJhcmNoeVBhZGRpbmc/OiBib29sZWFuO1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbiBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZENvbHVtblByb3BzLCBhbnk+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlZUdyaWRDb2x1bW5Qcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAvL3RoaXMuc3RhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgLy90aGlzLmFkZENsYXNzTmFtZShcImJ0blwiKTtcclxuICAgICAgICAvL3RoaXMudG9nZ2xlQ2xhc3NOYW1lKHRoaXMucHJvcHMuZGlzYWJsZWQsIFwiZGlzYWJsZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAobnVsbCk7XHJcbiAgICAgICAgLy9UcmVlR3JpZCBmcm9tIHt0aGlzLnByb3BzLmNvbXBpbGVyfSBhbmQge3RoaXMucHJvcHMuZnJhbWV3b3JrfSFjbGlja0NvdW50PXt0aGlzLnN0YXRlLmNsaWNrQ291bnR9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRDb2x1bW5QYXJhbXMgZXh0ZW5kcyBUcmVlR3JpZENvbHVtblByb3BzIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHcmlkQ29sdW1uKHBhcmFtczogR3JpZENvbHVtblBhcmFtcyk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKHt0YXJnZXQsIHByb3BlcnR5TmFtZSwgY29uc3RyOnRhcmdldC5jb25zdHJ1Y3Rvcn0pO1xyXG5cclxuICAgICAgICBsZXQgcmVnQ29sdW1uOiBHcmlkQ29sdW1uSW5mbyA9IHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvclxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIF8uYXNzaWduKHJlZ0NvbHVtbiwgcGFyYW1zKTtcclxuICAgICAgICByZWdpc3RlckdyaWRDb2x1bW4ocmVnQ29sdW1uKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyR3JpZENvbHVtbih7XHJcbiAgICAgICAgLy8gICAgIGNhcHRpb246IHBhcmFtcy5jYXB0aW9uLFxyXG4gICAgICAgIC8vICAgICB3aWR0aDogcGFyYW1zLndpZHRoLFxyXG4gICAgICAgIC8vICAgICBzaG93SGllcmFyY2h5VHJlZTogcGFyYW1zLnNob3dIaWVyYXJjaHlUcmVlLFxyXG4gICAgICAgIC8vICAgICBzaG93SGllcmFyY2h5UGFkZGluZzogcGFyYW1zLnNob3dIaWVyYXJjaHlQYWRkaW5nLFxyXG4gICAgICAgIC8vICAgICBvcmRlcjogcGFyYW1zLm9yZGVyIHx8IDAsXHJcbiAgICAgICAgLy8gICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgIC8vICAgICBvYmplY3RUeXBlOiB0YXJnZXQuY29uc3RydWN0b3IsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3hcbiAqKi8iLCJpbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5Qcm9wc30gZnJvbSBcIi4vVHJlZUdyaWRDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZENvbHVtbkluZm8gZXh0ZW5kcyBUcmVlR3JpZENvbHVtblByb3BzIHtcclxuICAgIC8vcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICBvYmplY3RUeXBlOiB0eXBlb2YgRGVzaWduZWRPYmplY3Q7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJHcmlkQ29sdW1uKGNvbHVtbkluZm86IEdyaWRDb2x1bW5JbmZvKSB7XHJcblxyXG4gICAgbGV0IG9ialR5cGU6IGFueSA9IGNvbHVtbkluZm8ub2JqZWN0VHlwZTtcclxuXHJcbiAgICBpZiAoIW9ialR5cGUuJCRncmlkQ29sdW1uSW5mb3MpXHJcbiAgICAgICAgb2JqVHlwZS4kJGdyaWRDb2x1bW5JbmZvcyA9IFtdO1xyXG5cclxuICAgIG9ialR5cGUuJCRncmlkQ29sdW1uSW5mb3MucHVzaChjb2x1bW5JbmZvKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwicmVnaXN0ZXJQcm9wZXJ0eUVkaXRvciBcIiArIGVkaXRvci5wcm9wZXJ0eU5hbWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3IpO1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9yZWdpc3RlckdyaWRDb2x1bW4udHNcbiAqKi8iLCJcclxuZXhwb3J0IHZhciBLZXljb2RlID0ge1xyXG4gICAgRXNjOiBcIkVzY2FwZVwiLFxyXG4gICAgU3BhY2U6IFwiIFwiLFxyXG5cclxuICAgIExlZnQ6IFwiQXJyb3dMZWZ0XCIsXHJcbiAgICBVcDogXCJBcnJvd1VwXCIsXHJcbiAgICBEb3duOiBcIkFycm93RG93blwiLFxyXG4gICAgUmlnaHQ6IFwiQXJyb3dSaWdodFwiLFxyXG5cclxuICAgIERlbDogXCJEZWxldGVcIixcclxuICAgIEluczogXCJJbnNlcnRcIixcclxuXHJcbiAgICBXaW46IFwiTWV0YVwiLFxyXG4gICAgTWVudTogXCJDb250ZXh0TWVudVwiLFxyXG5cclxuICAgIFNjcm9sbDogXCJTY3JvbGxMb2NrXCIsXHJcbiAgICBOdW06IFwiTnVtTG9ja1wiLFxyXG5cclxuICAgIEJhY2tzcGFjZTogXCJCYWNrc3BhY2VcIixcclxuICAgIFRhYjogXCJUYWJcIixcclxuICAgIEVudGVyOiBcIkVudGVyXCIsXHJcbiAgICBTaGlmdDogXCJTaGlmdFwiLFxyXG4gICAgQ29udHJvbDogXCJDb250cm9sXCIsXHJcbiAgICBBbHQ6IFwiQWx0XCIsXHJcbiAgICBCcmVhazogXCJQYXVzZVwiLFxyXG4gICAgQ2Fwc0xvY2s6IFwiQ2Fwc0xvY2tcIixcclxuXHJcbiAgICBQYWdlVXA6IFwiUGFnZVVwXCIsXHJcbiAgICBQYWdlRG93bjogXCJQYWdlRG93blwiLFxyXG4gICAgRW5kOiBcIkVuZFwiLFxyXG4gICAgSG9tZTogXCJIb21lXCIsXHJcblxyXG4gICAgRjE6IFwiRjFcIixcclxuICAgIEYyOiBcIkYyXCIsXHJcbiAgICBGMzogXCJGM1wiLFxyXG4gICAgRjQ6IFwiRjRcIixcclxuICAgIEY1OiBcIkY1XCIsXHJcbiAgICBGNjogXCJGNlwiLFxyXG4gICAgRjc6IFwiRjdcIixcclxuICAgIEY4OiBcIkY4XCIsXHJcbiAgICBGOTogXCJGOVwiLFxyXG4gICAgRjEwOiBcIkYxMFwiLFxyXG4gICAgRjExOiBcIkYxMVwiLFxyXG4gICAgRjEyOiBcIkYxMlwiXHJcblxyXG59O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvS2V5Q29kZS50c1xuICoqLyIsImxldCBjYWNoZVdpZHRoID0gMDtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldjogVUlFdmVudCkgPT4ge1xyXG4gICAgY2FjaGVXaWR0aCA9IDA7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc2l6ZVwiKTtcclxufSlcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XHJcbiAgICBpZiAoY2FjaGVXaWR0aCA+IDApXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlV2lkdGg7XHJcblxyXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XHJcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcclxuXHJcbiAgICB2YXIgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xyXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xyXG5cclxuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xyXG5cclxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcclxuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xyXG5cclxuICAgIGNhY2hlV2lkdGggPSB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xyXG4gICAgcmV0dXJuIGNhY2hlV2lkdGg7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9nZXRTY3JvbGxCYXJXaWR0aC50c1xuICoqLyIsIu+7v2ltcG9ydCAqIGFzIGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5cclxubGV0IHNvY2tldCA9IGlvLmNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU1FMKHNxbDogc3RyaW5nKTogSlF1ZXJ5UHJvbWlzZTxEYXRhVGFibGU+IHtcclxuICAgIC8vY29uc29sZS5sb2coXCJjYWxsIFNRTC5zcWwuZXhlY3V0ZVwiKTtcclxuICAgIC8vcmV0dXJuIHNpZ25hbFIuZXhlY3V0ZVNRTChzcWwpO1xyXG5cclxuXHJcbiAgICBsZXQgcHJvbWlzZTogSlF1ZXJ5RGVmZXJyZWQ8RGF0YVRhYmxlPjtcclxuICAgIHByb21pc2UgPSAkLkRlZmVycmVkPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAvLyAgc29ja2V0Lm9uY2UoJ2Nvbm5lY3QnLCgpID0+IHtcclxuICAgIGxldCBxdWVyeUlkID0gXCJxdWVyeS1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xyXG4gICAgc29ja2V0LmVtaXQoXCJleGVjdXRlU1FMXCIsIHtxdWVyeUlkLCBzcWx9KTtcclxuICAgIHNvY2tldC5vbmNlKHF1ZXJ5SWQsIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhQ29sdW1uID0gbmV3IERhdGFDb2x1bW4oZGF0YVRhYmxlLCByZXNwb25zZS5jb2x1bW5zW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVRhYmxlLmNvbHVtbnMucHVzaChkYXRhQ29sdW1uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2Uucm93cy5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhUm93ID0gbmV3IERhdGFSb3coZGF0YVRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFUYWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbHVtbnNbaV0ucGFyc2UgPT09IFwiRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W2RhdGFUYWJsZS5jb2x1bW5zW2ldLm5hbWVdID0gbmV3IERhdGUocm93W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbZGF0YVRhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kYXRhUm93W2ldID0gcm93W2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5yb3dzLnB1c2goZGF0YVJvdyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhVGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vICAgfSk7XHJcblxyXG5cclxuICAgIC8vc2lnbmFsUi5leGVjdXRlU1FMKHNxbCkuXHJcbiAgICAvLyAgICBkb25lKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgbGV0IHJlcyA9IGV2YWwocmVzdWx0KTtcclxuXHJcbiAgICAvLyAgICAgICAgaWYgKHJlcy5lcnJvcikge1xyXG4gICAgLy8gICAgICAgICAgICBwcm9taXNlLnJlamVjdChyZXMuZXJyb3IpO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgbGV0IGRzID0gbmV3IERhdGFzZXQoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgIHJlcy50YWJsZXMuZm9yRWFjaCgodGFibGUpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKGRzKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5uYW1lID0gdGFibGUubmFtZTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRzLnRhYmxlcy5wdXNoKGRhdGFUYWJsZSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFDb2x1bW4gPSBuZXcgRGF0YUNvbHVtbihkYXRhVGFibGUsIHRhYmxlLmNvbHVtbnNbaV0ubmFtZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLmNvbHVtbnMucHVzaChkYXRhQ29sdW1uKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICB0YWJsZS5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YVJvdyA9IG5ldyBEYXRhUm93KCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W3RhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbaV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGUucm93cy5wdXNoKGRhdGFSb3cpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRzKVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pLlxyXG4gICAgLy8gICAgZmFpbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgcHJvbWlzZS5yZWplY3QoXCLQvtGI0LjQsdC60LAgY29ubmVjdGlvbiBzaWduYWxSXCIpO1xyXG4gICAgLy8gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHsgU3RyaW5nLCBOdW1iZXIsIERhdGEgfVxyXG5cclxuLy9leHBvcnQgdHlwZSBEYXRhVHlwZSA9IHN0cmluZyB8IG51bWJlcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGUge1xyXG4gICAgY29sdW1uczogQXJyYXk8RGF0YUNvbHVtbj47XHJcbiAgICByb3dzOiBBcnJheTxEYXRhUm93PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXTtcclxuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFDb2x1bW4ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgLy9kYXRhVHlwZTogQ29sdW1uRGF0YVR5cGU7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGFibGU6IERhdGFUYWJsZSwgbmFtZT86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFSb3cge1xyXG4gICAgW2luZGV4OiBzdHJpbmddOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGFibGU6IERhdGFUYWJsZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKGNvbHVtbkluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA8IDAgfHwgY29sdW1uSW5kZXggPj0gdGhpcy50YWJsZS5jb2x1bW5zLmxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgXCJEYXRhUm93LmdldFZhbHVlKFwiICsgY29sdW1uSW5kZXggKyBcIik6IGNvbHVtbkluZGV4IG91dCBvZiByYW5nZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gW3RoaXMudGFibGUuY29sdW1uc1tjb2x1bW5JbmRleF0ubmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLy9baW5kZXg6IG51bWJlcl06IERhdGFUeXBlO1xyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9TUUwudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGlvO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpb1wiXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtTdHJpbmdFZGl0b3J9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7TGlzdEVkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvTGlzdFByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7R3JpZENvbHVtbn0gZnJvbSBcIi4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNxbFRhYmxlIGV4dGVuZHMgRGVzaWduZWRPYmplY3Qge1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQmNC80Y9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0JjQvNGPINGC0LDQsdC70LjRhtGLXCJcclxuICAgIH0pXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcInNxbCDQuNC80Y9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwic3FsINC40LzRjyDRgtCw0LHQu9C40YbRi1wiXHJcbiAgICB9KVxyXG5cclxuICAgIHNxbG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBATGlzdEVkaXRvcih7XHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JrQvtC70L7QvdC60LhcIlxyXG4gICAgfSlcclxuICAgIGNvbHVtbnM6IFNxbFRhYmxlQ29sdW1uW10gPSBbXTtcclxuXHJcbiAgICBhZGRDb2x1bW4oaW5pdENhbGxiYWNrOiAobmV3Q29sdW1uOiBTcWxUYWJsZUNvbHVtbikgPT4gdm9pZCkge1xyXG4gICAgICAgIGxldCBjb2wgPSBuZXcgU3FsVGFibGVDb2x1bW4oKTtcclxuICAgICAgICBjb2wudGFibGUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbCk7XHJcbiAgICAgICAgaW5pdENhbGxiYWNrKGNvbCk7XHJcblxyXG4gICAgICAgIHRoaXMudGVzdFByb2MyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFByb2MyID0gKCkgPT4ge1xyXG5cclxuICAgIH07XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3FsVGFibGVDb2x1bW4gZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCY0LzRjyDQutC+0LvQvtC90LrQuFwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQmNC80Y8g0LrQvtC70L7QvdC60LhcIlxyXG4gICAgfSlcclxuICAgIEBHcmlkQ29sdW1uKHtjYXB0aW9uOiBcItCY0LzRjyDQutC+0LvQvtC90LrQuFwifSlcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0YLQuNC/XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcInNxbCDRgtC40L8g0LrQvtC70L7QvdC60LhcIlxyXG4gICAgfSlcclxuICAgIEBHcmlkQ29sdW1uKHtjYXB0aW9uOiBcItCi0LjQv1wifSlcclxuICAgIGRhdGFUeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgdGFibGU6IFNxbFRhYmxlO1xyXG5cclxuICAgIEBHcmlkQ29sdW1uKHtjYXB0aW9uOiBcInRlc3RcIiwgb3JkZXI6IC0xfSlcclxuICAgIGdldCB0ZXN0Q29sdW1uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiK1wiICsgdGhpcy5kYXRhVHlwZTtcclxuICAgIH07XHJcblxyXG4gICAgJCR0ZXN0T2JqZWN0OiBhbnk7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtc3FsL1NxbFRhYmxlLnRzXG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QmFzZVByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0lucHV0VHlwZSwgSW5wdXR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge1RyZWVHcmlkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5zfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uc1wiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1ufSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRBcnJheURhdGFTb3VyY2V9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRBcnJheURhdGFTb3VyY2VcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdFByb3BlcnR5RWRpdG9yIGV4dGVuZHMgQmFzZVByb3BlcnR5RWRpdG9yIHtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0gPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2UgPT09IFwiICsgdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWUgKyBcIiBcIiArIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgYXV0b0Zvcm1Db250cm9sUHJvcHM6IEF1dG9Gb3JtQ29udHJvbFByb3BzID0ge1xyXG4gICAgICAgICAgICBpbnB1dENhcHRpb246IHRoaXMucHJvcHMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgICAgICBpbnB1dFRhYjogdGhpcy5wcm9wcy5pbnB1dFRhYixcclxuICAgICAgICAgICAgaW5wdXRHcm91cDogdGhpcy5wcm9wcy5pbnB1dEdyb3VwLFxyXG4gICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmlucHV0RGVzY3JpcHRpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKGF1dG9Gb3JtQ29udHJvbFByb3BzKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIChcclxuICAgICAgICAvLyAgICAgPElucHV0XHJcbiAgICAgICAgLy8gICAgICAgICB0eXBlPXtJbnB1dFR5cGUuVGV4dH1cclxuICAgICAgICAvLyAgICAgICAgIGJpbmRPYmplY3Q9e3RoaXMucHJvcHMuZGVzaWduZWRPYmplY3R9XHJcbiAgICAgICAgLy8gICAgICAgICBiaW5kUHJvcE5hbWU9e3RoaXMucHJvcHMucHJvcGVydHlOYW1lfVxyXG4gICAgICAgIC8vICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgLy8gICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgIC8vICAgICAvPlxyXG4gICAgICAgIC8vICk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gbmV3IFRyZWVHcmlkQXJyYXlEYXRhU291cmNlKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXsgZGF0YVNvdXJjZSB9XHJcbiAgICAgICAgICAgICAgICB0cmVlTW9kZT17ZmFsc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9UcmVlR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuLy8gPFRyZWVHcmlkQ29sdW1ucz5cclxuLy8gPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQmNC80Y8g0LrQvtC70L7QvdC60LhcIiBwcm9wZXJ0eU5hbWU9XCJuYW1lXCIgd2lkdGg9ezEwMH0+XHJcbi8vICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4vLyAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQotC40L8g0LTQsNC90L3Ri9GFXCIgcHJvcGVydHlOYW1lPVwiZGF0YVR5cGVcIiB3aWR0aD17MTUwfT5cclxuLy8gICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbi8vICAgICA8L1RyZWVHcmlkQ29sdW1ucz5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEVkaXRvclBhcmFtcyBleHRlbmRzIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0RWRpdG9yKHBhcmFtczogTGlzdEVkaXRvclBhcmFtcyk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcih7XHJcbiAgICAgICAgICAgIGlucHV0Q2FwdGlvbjogcGFyYW1zLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHBhcmFtcy5pbnB1dFRhYixcclxuICAgICAgICAgICAgaW5wdXRHcm91cDogcGFyYW1zLmlucHV0R3JvdXAsXHJcbiAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb246IHBhcmFtcy5pbnB1dERlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogdGFyZ2V0LmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBlZGl0b3JUeXBlOiBMaXN0UHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uUHJvcHN9IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7VHJlZUdyaWREYXRhU291cmNlfSBmcm9tIFwiLi9UcmVlR3JpZERhdGFTb3VyY2VcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge2dldEdyaWRDb2x1bW5JbmZvc30gZnJvbSBcIi4vZ2V0R3JpZENvbHVtbkluZm9zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQXJyYXlEYXRhU291cmNlUGFyYW1zPFQ+IHtcclxuXHJcbiAgICBnZXROZXdSb3c/OiAoKSA9PiBUO1xyXG4gICAgZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZT86ICgpID0+IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGdldERlbGV0ZVJvd01lc3NhZ2U/OiAoKSA9PiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRBcnJheURhdGFTb3VyY2U8VCBleHRlbmRzIERlc2lnbmVkT2JqZWN0PiBpbXBsZW1lbnRzIFRyZWVHcmlkRGF0YVNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXJyYXlPYmo6IFRbXSwgcHVibGljIHBhcmFtczogVHJlZUdyaWRBcnJheURhdGFTb3VyY2VQYXJhbXM8VD4gPSB7fSkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IGlzVHJlZUdyaWREYXRhU291cmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyZWVHcmlkQ29sdW1ucygpOiBUcmVlR3JpZENvbHVtblByb3BzW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmFycmF5T2JqLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGdldEdyaWRDb2x1bW5JbmZvcyh0aGlzLmFycmF5T2JqWzBdKS5tYXA8VHJlZUdyaWRDb2x1bW5Qcm9wcz4oKGNvbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXQ6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgXy5hc3NpZ24ocmV0LCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYXB0aW9uOiBjb2wuY2FwdGlvbixcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogY29sLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG9yZGVyOiBjb2wub3JkZXIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcHJvcGVydHlOYW1lOiBjb2wucHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNob3dIaWVyYXJjaHlUcmVlOiBjb2wuc2hvd0hpZXJhcmNoeVRyZWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2hvd0hpZXJhcmNoeVBhZGRpbmc6IGNvbC5zaG93SGllcmFyY2h5UGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhUm93cygpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld1JvdygpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuZ2V0TmV3Um93KVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMuZ2V0TmV3Um93KCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBcIlRyZWVHcmlkQXJyYXlEYXRhU291cmNlOiBtZXRob2QgZ2V0TmV3Um93KCkgbm90IGRlZmluZWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRSb3cocm93OiBUKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLmFycmF5T2JqLnB1c2gocm93KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheU9iai5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuZ2V0RW1wdHlEYXRhU291cmNlTWVzc2FnZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zLmdldEVtcHR5RGF0YVNvdXJjZU1lc3NhZ2UoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBcItCf0YPRgdGC0L7QuSDRgdC/0LjRgdC+0LouXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVsZXRlUm93TWVzc2FnZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5nZXREZWxldGVSb3dNZXNzYWdlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMuZ2V0RGVsZXRlUm93TWVzc2FnZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIFwi0KPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMIVwiO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZEFycmF5RGF0YVNvdXJjZS50c3hcbiAqKi8iLCJcclxuaW1wb3J0IHtHcmlkQ29sdW1uSW5mb30gZnJvbSBcIi4vcmVnaXN0ZXJHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmlkQ29sdW1uSW5mb3Mob2JqOiBEZXNpZ25lZE9iamVjdCk6IEdyaWRDb2x1bW5JbmZvW10ge1xyXG5cclxuICAgIGxldCBpbmZvcyA9IChvYmouY29uc3RydWN0b3IgYXMgYW55KS4kJGdyaWRDb2x1bW5JbmZvcyBhcyBHcmlkQ29sdW1uSW5mb1tdO1xyXG5cclxuICAgIGlmICghaW5mb3MpXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgIGluZm9zID0gaW5mb3MuZmlsdGVyKChlZHQpID0+IG9iaiBpbnN0YW5jZW9mIGVkdC5vYmplY3RUeXBlKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0UHJvcGVydHlFZGl0b3JzXCIpIDtcclxuICAgIC8vY29uc29sZS5sb2coZWRpdG9ycyk7XHJcbiAgICByZXR1cm4gaW5mb3M7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL2dldEdyaWRDb2x1bW5JbmZvcy50c1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=