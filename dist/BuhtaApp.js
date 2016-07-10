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
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(4);
	var Layout_1 = __webpack_require__(6);
	var Fixed_1 = __webpack_require__(7);
	var Flex_1 = __webpack_require__(8);
	var testBuhtaObject1_1 = __webpack_require__(9);
	var ObjectDesigner_1 = __webpack_require__(15);
	var Desktop_1 = __webpack_require__(20);
	var Movable_1 = __webpack_require__(23);
	var App_1 = __webpack_require__(21);
	var Input_1 = __webpack_require__(14);
	var testBuhtaObject2_1 = __webpack_require__(24);
	var _ = __webpack_require__(5);
	var AutoForm_1 = __webpack_require__(17);
	var TreeGrid_1 = __webpack_require__(25);
	var TreeGridColumn_1 = __webpack_require__(27);
	var TreeGridColumns_1 = __webpack_require__(26);
	var SQL_1 = __webpack_require__(34);
	var Button_1 = __webpack_require__(30);
	var SqlTable_1 = __webpack_require__(36);
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
	        SQL_1.executeSQL("select TOP 5000 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
	            .done(function (table) {
	            var dataSource = table.rows.map(function (r) {
	                return { Ключ: r["Ключ"], Номер: r["Номер"], Название: r["Название"] };
	            });
	            console.log("select TOP 5000 Ключ,Номер,Название from [Вид ТМЦ] order by Номер =>" + table.rows[0].getValue(1));
	            var win2 = React.createElement(TreeGrid_1.TreeGrid, {dataSource: dataSource, treeMode: true, hierarchyFieldName: "Номер", hierarchyDelimiters: ".", autoExpandNodesToLevel: 0}, React.createElement(TreeGridColumns_1.TreeGridColumns, null, React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Колонка2", fieldName: "Номер", showHierarchyTree: false, width: 100}), React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Колонка3", fieldName: "Название", showHierarchyTree: true, width: 200}), React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Колонка1", fieldName: "Ключ", width: 80})));
	            var openParam = {
	                title: "auto form",
	                top: 10,
	                left: 10,
	                height: 800
	            };
	            App_1.appInstance.desktop.openWindow(win2, openParam);
	        })
	            .fail(function (err) {
	            alert(err.message);
	        });
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
	    AppDesigner.prototype.render = function () {
	        var _this = this;
	        this.addClassName("app-designer");
	        this.addProps({ sizeTo: "parent" });
	        return (React.createElement(App_1.App, React.__spread({}, this.getRenderProps()), React.createElement(Layout_1.Layout, {sizeTo: "parent", type: "column"}, React.createElement(Fixed_1.Fixed, {className: "header1"}, "Fixed Header"), React.createElement(Flex_1.Flex, null, React.createElement(Layout_1.Layout, {type: "row", sizeTo: "parent"}, React.createElement(Fixed_1.Fixed, {className: "sidebar", style: { width: this.sideWidth }}, "Fixed Sidebar 123", React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testOpenWindow(); }}, " test open window"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testOpenObjectDesigner(); }}, "open designer"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testImmutable(); }}, "testImmutable"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testAutoForm(); }}, "test autoform"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testGrid(); }}, "test GRID"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testFlex(); }}, "test FLEX"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testTableDesigner(); }}, "test TABLE DESIGNER")), React.createElement(Flex_1.Flex, {className: "XXXcontent"}, React.createElement(Desktop_1.Desktop, null, React.createElement(Movable_1.Movable, {onMoveStart: this.moveStart.bind(this)}, "MOV"))))))));
	    };
	    return AppDesigner;
	}(Component_1.Component));
	exports.AppDesigner = AppDesigner;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var _ = __webpack_require__(5);
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
	    return Component;
	}(React.Component));
	exports.Component = Component;


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = _;

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
	var Component_1 = __webpack_require__(4);
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
	var Component_1 = __webpack_require__(4);
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
	var Component_1 = __webpack_require__(4);
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
	    return function (target, propertyName) {
	        //  console.log({target, propertyName, constr:target.constructor});
	        registerPropertyEditor_1.registerPropertyEditor({
	            inputCaption: params.inputCaption,
	            inputTab: params.inputTab,
	            inputGroup: params.inputGroup,
	            inputDescription: params.inputDescription,
	            propertyName: propertyName,
	            objectType: target.constructor,
	            editorType: StringPropertyEditor,
	            propertyType: String
	        });
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
	var Component_1 = __webpack_require__(4);
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
	var Component_1 = __webpack_require__(4);
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
	var _ = __webpack_require__(5);
	var Component_1 = __webpack_require__(4);
	var getPropertyEditor_1 = __webpack_require__(16);
	var AutoForm_1 = __webpack_require__(17);
	var ObjectDesigner = (function (_super) {
	    __extends(ObjectDesigner, _super);
	    function ObjectDesigner(props, context) {
	        _super.call(this, props, context);
	        this.props = props;
	    }
	    ObjectDesigner.prototype.renderPropertyDesigners = function () {
	        var _this = this;
	        var ret = [];
	        getPropertyEditor_1.getPropertyEditors(this.props.designedObject).forEach(function (propInfo, index) {
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
	            //console.log(editorProps);
	            ret.push(React.createElement(propInfo.editorType, editorProps, null));
	        });
	        return ret;
	    };
	    ObjectDesigner.prototype.render = function () {
	        this.addClassName("object-designer");
	        this.addProps({ onChange: this.props.onChange });
	        return (React.createElement(AutoForm_1.AutoForm, React.__spread({sizeTo: "parent"}, this.getRenderProps()), "Object designer", this.renderPropertyDesigners()));
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
	    //console.log("getPropertyEditors");
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
	var _ = __webpack_require__(5);
	var Component_1 = __webpack_require__(4);
	var Tabs_1 = __webpack_require__(18);
	var Form_1 = __webpack_require__(19);
	var emptyTabName = "закладка";
	var AutoForm = (function (_super) {
	    __extends(AutoForm, _super);
	    function AutoForm() {
	        _super.apply(this, arguments);
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps()), this.renderTabs()));
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
	var Component_1 = __webpack_require__(4);
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
	            var style = { paddingTop: 10 };
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
	var Component_1 = __webpack_require__(4);
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
	var _ = __webpack_require__(5);
	var Component_1 = __webpack_require__(4);
	var App_1 = __webpack_require__(21);
	var Window_1 = __webpack_require__(22);
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
	            _this.closeWindow(state.id);
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
	    Desktop.prototype.openWindow = function (win, openParams) {
	        if (!openParams)
	            openParams = {};
	        var newWin = new DesktopWindow();
	        newWin.content = win;
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
	    Desktop.prototype.render = function () {
	        var _this = this;
	        this.addClassName("desktop");
	        this.addStyles({ height: "100%" });
	        this.addStyles({ position: "relative", overflow: "auto" });
	        return (React.createElement("div", React.__spread({ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), this.state.windows.map(function (w, index) {
	            console.log("render-desktop-win");
	            console.log(w.disabled);
	            return (React.createElement(Window_1.Window, {key: w.id, id: w.id, title: w.title, top: w.top, left: w.left, width: w.width, height: w.height, right: w.right, bottom: w.bottom, disabled: w.disabled, onActivate: _this.handleActivate, onClose: _this.handleClose}, w.content));
	        })));
	    };
	    return Desktop;
	}(Component_1.Component));
	exports.Desktop = Desktop;
	//onMoveStart={ w.handleMoveStart }
	//onResizeRightBottomCornerStart={ w.handleResizeRightBottomCornerStart }


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(4);
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(4);
	var Layout_1 = __webpack_require__(6);
	var Fixed_1 = __webpack_require__(7);
	var Flex_1 = __webpack_require__(8);
	var Movable_1 = __webpack_require__(23);
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
	                $(_this.nativeElement).css('left', _this.state.left);
	            });
	            e.bindY(_this.state, "top", function () {
	                $(_this.nativeElement).css('top', _this.state.top);
	            });
	            _this.handleOnClick(null);
	        };
	        this.resizeRightBottomCornerStart = function (e) {
	            e.bindX(_this.state, "width", function () {
	                if (_this.state.width < _this.state.minWidth)
	                    _this.state.width = _this.state.minWidth;
	                $(_this.nativeElement).css('width', _this.state.width);
	            });
	            e.bindY(_this.state, "height", function () {
	                if (_this.state.height < _this.state.minHeight)
	                    _this.state.height = _this.state.minHeight;
	                $(_this.nativeElement).css('height', _this.state.height);
	            });
	            _this.handleOnClick(null);
	        };
	        this.handleOnClick = function (e) {
	            if (_this.props.onActivate)
	                _this.props.onActivate(_this.state);
	        };
	        this.handleCloseButtonClick = function (e) {
	            if (_this.props.onClose)
	                _this.props.onClose(_this.state);
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
	        this.state.id = this.props.id;
	        this.state.title = this.props.title;
	        this.state.top = this.props.top;
	        this.state.left = this.props.left;
	        this.state.right = this.props.right;
	        this.state.bottom = this.props.bottom;
	        this.state.width = this.props.width;
	        this.state.height = this.props.height;
	        this.state.minWidth = this.props.minWidth;
	        this.state.minHeight = this.props.minHeight;
	        this.state.disabled = this.props.disabled;
	    };
	    Window.prototype.willMount = function () {
	        this.createInitState();
	        _super.prototype.willMount.call(this);
	    };
	    Window.prototype.willReceiveProps = function (nextProps) {
	        _super.prototype.willReceiveProps.call(this, nextProps);
	        //this.state.disabled = nextProps.disabled;
	    };
	    Window.prototype.didMount = function () {
	        _super.prototype.didMount.call(this);
	        this.nativeElement["$$window"] = this;
	    };
	    Window.prototype.render = function () {
	        var _this = this;
	        this.clearStyles();
	        this.addClassName("window box");
	        this.addStyles({ position: "absolute" });
	        this.addStyles({
	            top: this.state.top,
	            left: this.state.left,
	            height: this.state.height,
	            width: this.state.width,
	            right: this.state.right,
	            bottom: this.state.bottom,
	            padding: 0,
	            overflow: "hidden"
	        });
	        var headerButtonStyle = {
	            border: "0px",
	            height: "100%",
	            paddingLeft: 2,
	            paddingRight: 2,
	        };
	        console.log("render-win");
	        console.log(this.props.disabled);
	        console.log(this.state.disabled);
	        var disabledWrapperClass = "window-disabled-wrapper";
	        if (!this.state.disabled || this.state.disabled === false)
	            disabledWrapperClass += " is-hidden";
	        return (React.createElement("div", React.__spread({className: "window"}, this.getRenderProps(), {ref: function (e) { _this.nativeElement = e; }, onClick: this.handleOnClick}), React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent"}, React.createElement(Fixed_1.Fixed, {className: "window-header", style: { borderRadius: "5px 5px 0px 0px", position: "relative", paddingLeft: 10 }}, React.createElement(Layout_1.Layout, {type: "row", sizeTo: "parent"}, React.createElement(Flex_1.Flex, null, React.createElement("span", {className: "window-title"}, this.props.title), React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, onMoveStart: this.moveStart})), React.createElement(Fixed_1.Fixed, null, React.createElement("p", {className: "control has-addons buttons-bar", style: { paddingTop: 2, paddingRight: 4 }}, React.createElement("a", {className: "button is-small minimize-button", style: headerButtonStyle}, React.createElement("span", {className: "icon is-small ", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-minus", style: { top: 3 }}))), React.createElement("a", {className: "button is-small maximize-button", style: headerButtonStyle}, React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-square-o", style: { fontWeight: "bold" }}))), React.createElement("a", {className: "button is-small close-button", style: headerButtonStyle, onClick: this.handleCloseButtonClick}, React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-close", style: { top: -1 }}))))))), React.createElement(Flex_1.Flex, {className: "window-body", style: { padding: 10, overflow: "hidden" }}, this.props.children, React.createElement(Movable_1.Movable, {className: "window-resizer", style: { position: "absolute", height: 10, width: 10, right: 0, bottom: 0, borderRadius: "0 0 5px 0", cursor: "se-resize" }, onMoveStart: this.resizeRightBottomCornerStart}))), React.createElement("div", {className: disabledWrapperClass, style: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }})));
	    };
	    return Window;
	}(Component_1.Component));
	exports.Window = Window;
	// <div className="window-body" style={{ height:"100%" }}>
	//     {this.props.children}
	// </div>


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(4);
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var _ = __webpack_require__(5);
	//import {executeSQL} from "../buhta-core/SQL";
	var Component_1 = __webpack_require__(4);
	var TreeGridColumns_1 = __webpack_require__(26);
	var TreeGridColumn_1 = __webpack_require__(27);
	var Keycode_1 = __webpack_require__(28);
	var Movable_1 = __webpack_require__(23);
	var getScrollBarWidth_1 = __webpack_require__(29);
	var Button_1 = __webpack_require__(30);
	var Layout_1 = __webpack_require__(6);
	var Fixed_1 = __webpack_require__(7);
	var Flex_1 = __webpack_require__(8);
	var ObjectDesigner_1 = __webpack_require__(15);
	var App_1 = __webpack_require__(21);
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
	                $(col.headerWidthNativeElement).attr('width', col.width);
	                $(col.bodyWidthNativeElement).attr('width', col.width);
	                $(col.footerWidthNativeElement).attr('width', col.width);
	                var tableWidth = _this.calcTotalColumnsWidth();
	                $(_this.state.headerTableElement).css('width', tableWidth);
	                $(_this.state.bodyTableElement).css('width', tableWidth);
	                $(_this.state.footerTableElement).css('width', tableWidth);
	                $(_this.state.bodyWrapperElement).css('max-width', tableWidth + getScrollBarWidth_1.getScrollbarWidth() + 1);
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
	    TreeGrid.prototype.openEditForm = function (row) {
	        var designedObject = this.state.dataSource[row.sourceIndex];
	        var win = React.createElement(ObjectDesigner_1.ObjectDesigner, {designedObject: designedObject});
	        var openParam = {
	            title: "окно 1",
	            top: 50,
	            left: 50,
	            parentWindowId: this.getParentWindowId()
	        };
	        App_1.appInstance.desktop.openWindow(win, openParam);
	    };
	    TreeGrid.prototype.createColumns = function () {
	        var _this = this;
	        this.state.columns = [];
	        var columnsTag = this.getChildren(TreeGridColumns_1.TreeGridColumns);
	        columnsTag.forEach(function (tag) {
	            var columnTagList = _this.getChildrenOfProps(tag.props, TreeGridColumn_1.TreeGridColumn);
	            columnTagList.forEach(function (propCol) {
	                var col = new InternalColumn();
	                col.props = propCol.props;
	                col.width = propCol.props.width || 150;
	                col.caption = propCol.props.caption;
	                col.fieldName = propCol.props.fieldName;
	                col.caption = propCol.props.caption || col.fieldName;
	                _this.state.columns.push(col);
	            });
	        });
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
	        var sorted = this.state.dataSource.map(function (obj, index) {
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
	            this.state.dataSource.forEach(function (obj, index) {
	                var row = new InternalRow();
	                row.sourceIndex = index;
	                //row.sourceObject = obj;
	                _this.state.rows.push(row);
	            });
	            this.initFocused();
	        }
	        if (this.state.columns && this.state.columns.length > 0 && this.state.dataSource)
	            this.state.columns[0].footer = this.state.dataSource.length + " поз.";
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
	        var str = this.state.dataSource[objIndex][col.props.fieldName].toString();
	        //let str = this.rows[rowIndex].sourceObject[col.props.fieldName].toString();
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
	    TreeGrid.prototype.renderGridBody = function () {
	        var _this = this;
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
	    TreeGrid.prototype.render = function () {
	        var _this = this;
	        //this.addClassName("button");
	        console.log("render-tree-grid");
	        return (React.createElement(Layout_1.Layout, React.__spread({className: "tree-grid", type: "column", sizeTo: "parent"}, this.getRenderProps()), React.createElement(Fixed_1.Fixed, {className: "tree-grid-header-wrapper"}, React.createElement("button", {onClick: function () { }}, "refresh 5001"), React.createElement("button", {onClick: function () { _this.filterData(); _this.forceUpdate(); console.log("forceUpdate"); }}, "filter"), React.createElement("button", {onClick: function () { _this.expandAll(); }}, "expand all"), React.createElement("button", {onClick: function () { _this.collapseAll(); }}, "collapse all"), "заголовок и т.д."), React.createElement("div", {className: "tree-grid-body-wrapper", style: { position: "relative", overflow: "auto", flex: "1", maxWidth: this.calcTotalColumnsWidth() + getScrollBarWidth_1.getScrollbarWidth() + 1 }, onScroll: this.handleScroll.bind(this), ref: function (e) { _this.state.bodyWrapperElement = e; }}, this.renderGridBody(), this.renderColumnHeaders(), this.renderColumnFooters()), React.createElement(Fixed_1.Fixed, {className: "tree-grid-footer-wrapper"}, React.createElement(Layout_1.Layout, {type: "row", sizeTo: "content"}, React.createElement(Fixed_1.Fixed, null, React.createElement(Button_1.Button, {className: "is-smalln"}, "Добавить"), React.createElement(Button_1.Button, {className: "is-smalln", onClick: this.handleUpdateButtonClick}, "Изменить"), React.createElement(Button_1.Button, {className: "is-smalln"}, "Удалить")), React.createElement(Flex_1.Flex, null), React.createElement(Fixed_1.Fixed, null, React.createElement(Button_1.Button, {className: "is-smalln"}, "Выбрать"), React.createElement(Button_1.Button, {className: "is-smalln"}, "Отмена"))))));
	    };
	    return TreeGrid;
	}(Component_1.Component));
	exports.TreeGrid = TreeGrid;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Component_1 = __webpack_require__(4);
	var TreeGridColumns = (function (_super) {
	    __extends(TreeGridColumns, _super);
	    function TreeGridColumns(props, context) {
	        _super.call(this, props, context);
	    }
	    return TreeGridColumns;
	}(Component_1.Component));
	exports.TreeGridColumns = TreeGridColumns;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Component_1 = __webpack_require__(4);
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


/***/ },
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var VisiblePlugin_1 = __webpack_require__(31);
	var OnClickPlugin_1 = __webpack_require__(33);
	var Component_1 = __webpack_require__(4);
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Plugin_1 = __webpack_require__(32);
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Plugin_1 = __webpack_require__(32);
	var OnClickPlugin = (function (_super) {
	    __extends(OnClickPlugin, _super);
	    function OnClickPlugin() {
	        _super.apply(this, arguments);
	    }
	    OnClickPlugin.prototype.willMount = function () {
	        _super.prototype.willMount.call(this);
	        this.owner.addProps({ onClick: this.props.onClick });
	    };
	    OnClickPlugin.prototype.willReceiveProps = function (nextProps) {
	        _super.prototype.willReceiveProps.call(this, nextProps);
	        this.owner.addProps({ onClick: this.props.onClick });
	    };
	    return OnClickPlugin;
	}(Plugin_1.ComponentPlugin));
	exports.OnClickPlugin = OnClickPlugin;
	// export function OnClickPlugin(target: any) {
	//     target.plugins.push(OnClickPluginClass);
	//     return target;
	// }


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var io = __webpack_require__(35);
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
/* 35 */
/***/ function(module, exports) {

	module.exports = io;

/***/ },
/* 36 */
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
	var ListPropertyEditor_1 = __webpack_require__(37);
	var SqlTable = (function (_super) {
	    __extends(SqlTable, _super);
	    function SqlTable() {
	        _super.apply(this, arguments);
	        this.columns = [];
	    }
	    SqlTable.prototype.addColumn = function (initCallback) {
	        var col = new SqlTableColumn();
	        col.table = this;
	        this.columns.push(col);
	        initCallback(col);
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
	    __decorate([
	        StringPropertyEditor_1.StringEditor({
	            inputCaption: "Имя колонки",
	            inputTab: "Главная",
	            inputGroup: "Основная",
	            inputDescription: "Имя колонки"
	        })
	    ], SqlTableColumn.prototype, "name", void 0);
	    __decorate([
	        StringPropertyEditor_1.StringEditor({
	            inputCaption: "тип",
	            inputTab: "Главная",
	            inputGroup: "Основная",
	            inputDescription: "sql тип колонки"
	        })
	    ], SqlTableColumn.prototype, "dataType", void 0);
	    return SqlTableColumn;
	}(DesignedObject_1.DesignedObject));
	exports.SqlTableColumn = SqlTableColumn;


/***/ },
/* 37 */
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
	var TreeGrid_1 = __webpack_require__(25);
	var TreeGridColumns_1 = __webpack_require__(26);
	var TreeGridColumn_1 = __webpack_require__(27);
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
	        return (React.createElement(TreeGrid_1.TreeGrid, {dataSource: this.props.designedObject[this.props.propertyName], treeMode: false}, React.createElement(TreeGridColumns_1.TreeGridColumns, null, React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Имя колонки", fieldName: "name", width: 100}), React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Тип данных", fieldName: "dataType", width: 150}))));
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzY3ZDY4Zjk4OGQ2ZmQ3ZjBmZjEiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Rlc2t0b3AvRGVza3RvcC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9XaW5kb3cvV2luZG93LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGUudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0tleUNvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL2dldFNjcm9sbEJhcldpZHRoLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvVmlzaWJsZVBsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvT25DbGlja1BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU1FMLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlvXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1zcWwvU3FsVGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QUssQ0FBQztTQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZDLENBQUM7S0FFTyxnQ0FBZSxHQUF2QjtTQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0tBRTlDLENBQUM7S0FFUywwQkFBUyxHQUFuQjtTQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN2QixnQkFBSyxDQUFDLFNBQVMsV0FB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QVk7YUFDMUIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2FBQzlCLFVBQVUsRUFBRSxrQkFBa0I7YUFDOUIsWUFBWSxFQUFFLE1BQU07VUFDdkIsQ0FBQyxDQUFDO0tBQ1AsQ0FBQyxDQUFDO0FBQ04sRUFBQztBQWJlLG1CQUFVLGFBYXpCIiwiZmlsZSI6Ii4vZGlzdC9CdWh0YUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNzY3ZDY4Zjk4OGQ2ZmQ3ZjBmZjFcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgSGVsbG8gfSBmcm9tIFwiLi9IZWxsb1Byb3BzXCI7XHJcbmltcG9ydCB7QXBwfSBmcm9tIFwiLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0FwcFwiO1xyXG5pbXBvcnQge0FwcERlc2lnbmVyfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0FwcERlc2lnbmVyL0FwcERlc2lnbmVyXCI7XHJcbmltcG9ydCB7VGVzdEJ1aHRhT2JqZWN0MX0gZnJvbSBcIi4uL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDFcIjtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICAgIDxIZWxsbyBjb21waWxlcj1cIlR5cGVTY3JpcHRcIiBmcmFtZXdvcms9XCJSZWFjdFwiIC8+LFxyXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpXHJcbi8vICk7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoXHJcbi8vICAgICA8QXBwLz4sXHJcbi8vICAgICBkb2N1bWVudC5ib2R5XHJcbi8vICk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8QXBwRGVzaWduZXIvPixcclxuICAgIGRvY3VtZW50LmJvZHlcclxuKTtcclxuXHJcblxyXG5sZXQgeHh4PW5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcbmxldCB4eHgxPW5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GbGV4XCI7XHJcblxyXG5pbXBvcnQge1Rlc3RCdWh0YU9iamVjdDF9IGZyb20gXCIuLi8uLi9UZXN0MS90ZXN0QnVodGFPYmplY3QxXCI7XHJcbmltcG9ydCB7T2JqZWN0RGVzaWduZXJ9IGZyb20gXCIuLi9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lclwiO1xyXG5pbXBvcnQge0Rlc2t0b3AsIE9wZW5XaW5kb3dQYXJhbXN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCB7RHJhZ2dhYmxlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0RyYWdnYWJsZS9EcmFnZ2FibGVcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlRXZlbnQsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge0FwcCwgYXBwSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7V2luZG93fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHtJbnB1dCwgSW5wdXRUeXBlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7SW5wdXREaXZpZGVyfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0RGl2aWRlci9JbnB1dERpdmlkZXJcIjtcclxuaW1wb3J0IHt0ZXN0QnVodGFPYmplY3QyfSBmcm9tIFwiLi4vLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MlwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtBdXRvRm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge1RyZWVHcmlkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW59IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbnN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zXCI7XHJcbmltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQge1NxbFRhYmxlfSBmcm9tIFwiLi4vLi4vYnVodGEtc3FsL1NxbFRhYmxlXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNpZ25lclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8QXBwRGVzaWduZXJTdGF0ZT4ge1xyXG4gICAgLy90ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBBcHBEZXNpZ25lclN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8QXBwRGVzaWduZXJQcm9wcz4ge1xyXG4gICAgLy90ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwRGVzaWduZXIgZXh0ZW5kcyBDb21wb25lbnQ8QXBwRGVzaWduZXJQcm9wcywgQXBwRGVzaWduZXJTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFwcERlc2lnbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBBcHBEZXNpZ25lclN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBpbml0VGVzdCgpIHtcclxuICAgIC8vICAgICB0aGlzLnRlc3RPYmplY3QubmFtZSA9IFwi0KLQtdGB0YLQvtCy0YvQuSDQvtCx0YrQtdC60YIxXCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbW92ZVN0YXJ0KGU6IE1vdmVTdGFydEV2ZW50KSB7XHJcbiAgICAgICAgZS5iaW5kWCh0aGlzLCBcInNpZGVXaWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2lkZVdpZHRoOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gICAgdGVzdE9wZW5XaW5kb3coKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCBvYmogPSB7XHJcbiAgICAgICAgLy8gICAgINCk0LDQvNC40LvQuNGPOiBcItCh0LDQstGH0LXQvdC60L7QslwiLFxyXG4gICAgICAgIC8vICAgICDQmNC80Y86IFwi0JrQvtC90YHRgtCw0L3RgtC40L1cIixcclxuICAgICAgICAvLyAgICAg0J7RgtGH0LXRgdGC0LLQvjogXCLQktC70LDQtNC40LzQuNGA0L7QstC40YdcIlxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBsZXQgd2luID1cclxuICAgICAgICAvLyAgICAgPFRhYnM+XHJcbiAgICAgICAgLy8gICAgICAgICA8VGFiIHRpdGxlPVwi0LfQsNC60LvQsNC00LrQsCAxXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dCBjYXB0aW9uPVwi0KTQsNC80LjQu9C40Y9cIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17b2JqfSBiaW5kUHJvcE5hbWU9XCLQpNCw0LzQuNC70LjRj1wiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0IGNhcHRpb249XCLQmNC80Y9cIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17b2JqfSBiaW5kUHJvcE5hbWU9XCLQmNC80Y9cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dERpdmlkZXIgdGl0bGU9XCLQsCDRgtC10L/QtdGA0Ywg0L7RgtGH0LXRgdGC0LLQvlwiPjwvSW5wdXREaXZpZGVyPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0J7RgtGH0LXRgdGC0LLQvlwiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgLy8gICAgICAgICA8L1RhYj5cclxuICAgICAgICAvLyAgICAgICAgIDxUYWIgdGl0bGU9XCLQt9Cw0LrQu9Cw0LTQutCwIDJcIj4gMjIyMjIgPC9UYWI+XHJcbiAgICAgICAgLy8gICAgIDwvVGFicz47XHJcbiAgICAgICAgLy8gYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbik7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB0ZXN0T3Blbk9iamVjdERlc2lnbmVyKCkge1xyXG4gICAgICAgIGxldCB0ZXN0T2JqZWN0OiBUZXN0QnVodGFPYmplY3QxID0gbmV3IFRlc3RCdWh0YU9iamVjdDEoKTtcclxuICAgICAgICB0ZXN0T2JqZWN0LmZpcnN0TmFtZSA9IFwi0JjQs9C+0YDRjDBcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Lmxhc3ROYW1lID0gXCLQodC40LTQvtGA0LXQvdC60L4wXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdC5zdXJOYW1lID0gXCLQntC70LXQs9C+0LLQuNGHMFwiO1xyXG5cclxuLy8gICAgICAgIGxldCB3aW4gPSA8T2JqZWN0RGVzaWduZXIgb25DaGFuZ2U9eygpPT57IHdpbjJJbnN0YW5jZS5kZXNpZ25lZE9iamVjdD1udWxsOyB3aW4ySW5zdGFuY2UuZm9yY2VVcGRhdGUoKTsgY29uc29sZS5sb2coXCJ0ZXN0MzIzLWNoYW5nZVwiKX19IGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0fSBrZXk9XCIxXCI+IDwvT2JqZWN0RGVzaWduZXI+O1xyXG4gICAgICAgIGxldCB3aW4gPSA8T2JqZWN0RGVzaWduZXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpPT57IHRlc3RPYmplY3Q9Xy5jbG9uZURlZXAodGVzdE9iamVjdCk7ICB3aW4ySW5zdGFuY2UuZm9yY2VVcGRhdGUoKTsgY29uc29sZS5sb2coXCJ0ZXN0OTk5LWNoYW5nZVwiKX19XHJcbiAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0fSBrZXk9XCIxXCI+IDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICBsZXQgdGVzdE9iamVjdDI6IHRlc3RCdWh0YU9iamVjdDIgPSBuZXcgdGVzdEJ1aHRhT2JqZWN0MigpO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLmZpcnN0TmFtZSA9IFwi0JjQs9C+0YDRjDFcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5sYXN0TmFtZSA9IFwi0KHQuNC00L7RgNC10L3QutC+MlwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLnN1ck5hbWUgPSBcItCe0LvQtdCz0L7QstC40YcxXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdDIuc2V4ID0gXCLQvNGD0LbRgdC60L7QuVwiO1xyXG5cclxuICAgICAgICBsZXQgd2luMkluc3RhbmNlOiBhbnk7XHJcblxyXG4gICAgICAgIGxldCB3aW4yID0gPE9iamVjdERlc2lnbmVyIHJlZj17IChlOmFueSkgPT4geyB3aW4ySW5zdGFuY2UgPSBlOyB9IH0gZGVzaWduZWRPYmplY3Q9e3Rlc3RPYmplY3QyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjJcIj5cclxuICAgICAgICA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgLy9nZXRQcm9wZXJ0eUVkaXRvcnModGVzdE9iamVjdCk7XHJcbiAgICAgICAgLy9nZXRQcm9wZXJ0eUVkaXRvcnModGVzdE9iamVjdDIpO1xyXG5cclxuICAgICAgICBsZXQgd2lud2luID0gPGRpdj57d2lufXt3aW4yfTwvZGl2PjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi0L7QutC90L4gMVwiLFxyXG4gICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICBsZWZ0OiA1MFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW53aW4sIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGVzdEltbXV0YWJsZSgpIHtcclxuICAgICAgICAvLyAvL2xldCBmYWtlPW5ldyBUYWJsZShbXSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zdCB4eHggPSBJbW11dGFibGUuTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IG9iaiA9IHtcclxuICAgICAgICAvLyAgICAgbmFtZTogXCLQntCz0LDQvdC40LfQsNGG0LjRj1wiLFxyXG4gICAgICAgIC8vICAgICBjb2x1bW5zOiB7XCLQndC+0LzQtdGAXCI6IHtjb2xOYW1lOiBcItCd0L7QvNC10YBcIiwgdHlwZTogXCJzdHJpbmdcIn0sIFwi0J3QsNC30LLQsNC90LjQtVwiOiB7Y29sTmFtZTogXCLQndCw0LfQstCw0L3QuNC1XCIsIHR5cGU6IFwic3RyaW5nXCJ9fVxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBsZXQgb2JqSSA9IEltbXV0YWJsZS5mcm9tSlMob2JqKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIC8vbGV0IG0gPSBJbW11dGFibGUuTWFwPHN0cmluZyxudW1iZXJ8IEltbXV0YWJsZS5NYXA8bnVtYmVyLHN0cmluZz4+KCk7XHJcbiAgICAgICAgLy8gLy9sZXQgeCA9IG0uc2V0KFwiMTN5eXQzMzMzMzJcIiwgMTIpO1xyXG4gICAgICAgIC8vIC8vbGV0IHkgPSBtLnNldChcInh4eFwiLCBJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+KCkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLy9sZXQgeT1tLnVwZGF0ZShcInh4eFwiLEltbXV0YWJsZS5NYXA8bnVtYmVyLHN0cmluZz4oKSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmpJLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIC8vIGxldCB4ID0gb2JqSS5nZXRJbihbJ2NvbHVtbnMnLCAn0J3QvtC80LXRgCcsICdjb2xOYW1lJ10pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgc3RyOiBzdHJpbmcgPSBcItC/0YDQuNCy0LXRglwiO1xyXG5cclxuICAgIHRlc3RBdXRvRm9ybSgpIHtcclxuICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgIDxBdXRvRm9ybSBzaXplVG89XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9IGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizFcIiBpbnB1dENhcHRpb249XCJlZWUxXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMVwiIGlucHV0Q2FwdGlvbj1cImVlZTJcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsxXCIgaW5wdXRDYXB0aW9uPVwiZWVlM1wiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizJcIiBpbnB1dENhcHRpb249XCJlZWU0XCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICA8L0F1dG9Gb3JtPjtcclxuLy8gICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRi1wiIGlucHV0Q2FwdGlvbj1cImVlZVwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfSBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcImF1dG8gZm9ybVwiLFxyXG4gICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICBsZWZ0OiAxMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0R3JpZCgpIHtcclxuICAgICAgICBleGVjdXRlU1FMKFwic2VsZWN0IFRPUCA1MDAwINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQndC+0LzQtdGAXCIpXHJcbiAgICAgICAgICAgIC5kb25lKCh0YWJsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSB0YWJsZS5yb3dzLm1hcCgocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB70JrQu9GO0Yc6IHJbXCLQmtC70Y7Rh1wiXSwg0J3QvtC80LXRgDogcltcItCd0L7QvNC10YBcIl0sINCd0LDQt9Cy0LDQvdC40LU6IHJbXCLQndCw0LfQstCw0L3QuNC1XCJdfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IFRPUCA1MDAwINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQndC+0LzQtdGAID0+XCIgKyB0YWJsZS5yb3dzWzBdLmdldFZhbHVlKDEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9eyBkYXRhU291cmNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlZU1vZGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeUZpZWxkTmFtZT1cItCd0L7QvNC10YBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW5zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQmtC+0LvQvtC90LrQsDJcIiBmaWVsZE5hbWU9XCLQndC+0LzQtdGAXCIgc2hvd0hpZXJhcmNoeVRyZWU9e2ZhbHNlfSB3aWR0aD17MTAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwM1wiIGZpZWxkTmFtZT1cItCd0LDQt9Cy0LDQvdC40LVcIiBzaG93SGllcmFyY2h5VHJlZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwMVwiIGZpZWxkTmFtZT1cItCa0LvRjtGHXCIgd2lkdGg9ezgwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW5zPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWQ+O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiYXV0byBmb3JtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ODAwXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mYWlsKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0RmxleCgpIHtcclxuICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHNpemVUbz1cInBhcmVudFwiIHN0eWxlPXt7IGJvcmRlcjpcIjJweCBkb3R0ZWQgcmVkXCIsIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOjAsIGxlZnQ6MCxyaWdodDowLCBib3R0b206MCB9fT5cclxuICAgICAgICAgICAgICAgIDxGaXhlZCBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIGJsdWVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCe0LTQuNC9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggc3R5bGU9e3sgYm9yZGVyOlwiMnB4IGRvdHRlZCBncmVlblwiIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0ICB0eXBlPVwiY29sdW1uXCIgc2l6ZVRvPVwicGFyZW50XCIgc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIHJlZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZCBzdHlsZT17eyBib3JkZXI6XCIxcHggc29saWQgYmx1ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj4tLS0tLS3QntC00LjQvTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBzdHlsZT17eyBib3JkZXI6XCIxcHggc29saWQgZ3JlZW5cIiB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0tLdCU0LLQsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj4tLS0tLS0tLdCU0LLQsDE8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMTExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjIyMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTExMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMjIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjExMTE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjIyMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMTExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjIyMjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIG1hcm9vblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj4tLS0tLS0tLdCi0YDQuDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkIHN0eWxlPXt7IGJvcmRlcjpcIjJweCBkb3R0ZWQgbWFyb29uXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7QotGA0Lg8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+O1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJ0ZXN0IEZMRVhcIixcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgbGVmdDogMTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFRhYmxlRGVzaWduZXIoKSB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gbmV3IFNxbFRhYmxlKCk7XHJcblxyXG4gICAgICAgIHRhYmxlLm5hbWUgPSBcItCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIjtcclxuICAgICAgICB0YWJsZS5zcWxuYW1lID0gXCJkYm8u0J7RgNCz0LDQvdC40LfQsNGG0LjRj1wiO1xyXG4gICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKT0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0L7QvNC10YBcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDEwKVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhYmxlLmFkZENvbHVtbigoY29sKT0+IHtcclxuICAgICAgICAgICAgY29sLm5hbWUgPSBcItCd0LDQt9Cy0LDQvdC40LVcIjtcclxuICAgICAgICAgICAgY29sLmRhdGFUeXBlID0gXCJ2YXJjaGFyKDUwKVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+eyBjb25zb2xlLmxvZyhcInRhYmxlLWNoYW5nZVwiKX19XHJcbiAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0PXt0YWJsZX0+XHJcbiAgICAgICAgPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcItCe0YDQs9Cw0L3QuNC30LDRhtC40Y9cIixcclxuICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgbGVmdDogNTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXBwLWRlc2lnbmVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtzaXplVG86IFwicGFyZW50XCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFwcCB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgc2l6ZVRvPVwicGFyZW50XCIgdHlwZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJoZWFkZXIxXCI+Rml4ZWQgSGVhZGVyPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwicm93XCIgc2l6ZVRvPVwicGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwic2lkZWJhclwiIHN0eWxlPXt7d2lkdGg6dGhpcy5zaWRlV2lkdGh9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaXhlZCBTaWRlYmFyIDEyMzxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdE9wZW5XaW5kb3coKTsgfX0+IHRlc3Qgb3BlbiB3aW5kb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RPcGVuT2JqZWN0RGVzaWduZXIoKTsgfX0+b3BlbiBkZXNpZ25lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEltbXV0YWJsZSgpOyB9fT50ZXN0SW1tdXRhYmxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0QXV0b0Zvcm0oKTsgfX0+dGVzdCBhdXRvZm9ybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEdyaWQoKTsgfX0+dGVzdCBHUklEPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0RmxleCgpOyB9fT50ZXN0IEZMRVg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RUYWJsZURlc2lnbmVyKCk7IH19PnRlc3QgVEFCTEUgREVTSUdORVI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBjbGFzc05hbWU9XCJYWFhjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlIG9uTW92ZVN0YXJ0PXt0aGlzLm1vdmVTdGFydC5iaW5kKHRoaXMpfT5NT1Y8L01vdmFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVza3RvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvQXBwPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9BcHBEZXNpZ25lci9BcHBEZXNpZ25lci50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcbmltcG9ydCB7Q29tcG9uZW50UGx1Z2lufSBmcm9tIFwiLi4vUGx1Z2lucy9QbHVnaW5cIjtcclxuaW1wb3J0IHtXaW5kb3d9IGZyb20gXCIuL1dpbmRvdy9XaW5kb3dcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFhPbkNsaWNrUHJvcHMge1xyXG4gICAgb25DbGljaz86IFJlYWN0LlJlYWN0RXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRQcm9wczxTPiBleHRlbmRzIFJlYWN0LkNsYXNzQXR0cmlidXRlczxFbGVtZW50PiB7XHJcbiAgICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuXHJcbiAgICBvbldpbGxNb3VudD86IChzdGF0ZTogUykgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRTdGF0ZTxQPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50OiBDb21wb25lbnQ8UCxhbnk+KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZvcmNlVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLy9jbGlja0NvdW50OiBudW1iZXI7XHJcbiAgICAvLyBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQ8UCBleHRlbmRzIENvbXBvbmVudFByb3BzPFM+LCBTIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8UD4+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFAsIFM+IHtcclxuXHJcbiAgICBwbHVnaW5zOiBDb21wb25lbnRQbHVnaW48YW55LGFueT5bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQLCBjb250ZXh0OiBhbnkgLypzdGF0ZUNsYXNzPzogRnVuY3Rpb24qLykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgLy8gdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IHBsdWdJbnN0YW5jZTogYW55ID0gbmV3IHBsdWcodGhpcyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdJbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJQcm9wczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIHJlbmRlclN0eWxlczogYW55ID0ge307XHJcblxyXG4gICAgZ2V0UGFyZW50V2luZG93KCk6IFdpbmRvdyB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKChwYXJlbnQgYXMgYW55KS4kJHdpbmRvdylcclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyZW50IGFzIGFueSkuJCR3aW5kb3cgYXMgV2luZG93O1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50V2luZG93SWQoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcGFyZW50V2luID0gdGhpcy5nZXRQYXJlbnRXaW5kb3coKTtcclxuICAgICAgICBpZiAocGFyZW50V2luKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRXaW4uc3RhdGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvcHMocHJvcHM6IE9iamVjdCkge1xyXG4gICAgICAgIF8uYXNzaWduV2l0aCh0aGlzLnJlbmRlclByb3BzLCBwcm9wcywgKG9iamVjdFZhbHVlOiBhbnksIHNvdXJjZVZhbHVlOiBhbnksIGtleT86IHN0cmluZyk9PiB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiY2xhc3NcIiB8fCBrZXkgPT09IFwiY2xhc3NOYW1lXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiaW52YWxpZCBwcm9wZXJ0eSAnXCIgKyBrZXkgKyBcIicsIHVzZSBmdW5jdGlvbnMgYWRkQ2xhc3NOYW1lKCksIHRvZ2dsZUNsYXNzTmFtZSgpXCIpO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInN0eWxlXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiaW52YWxpZCBwcm9wZXJ0eSAnXCIgKyBrZXkgKyBcIicsIHVzZSBmdW5jdGlvbnMgYWRkU3R5bGVzKCksIHJlbW92ZVN0eWxlKClcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdHlsZXMoc3R5bGVzOiBPYmplY3QpIHtcclxuICAgICAgICBfLmFzc2lnbih0aGlzLnJlbmRlclN0eWxlcywgc3R5bGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclN0eWxlcygpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclN0eWxlcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVN0eWxlKHN0eWxlOiBzdHJpbmcpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5yZW5kZXJTdHlsZXNbc3R5bGVdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVN0eWxlcyhzdHlsZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgc3R5bGVzLmZvckVhY2goKHN0eWxlKT0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVuZGVyU3R5bGVzW3N0eWxlXTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy5kaWRNb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaWRNb3VudCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbE1vdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsTW91bnQoKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbldpbGxNb3VudClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbldpbGxNb3VudCh0aGlzLnN0YXRlKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHM6IFApID0+IHtcclxuICAgICAgICB0aGlzLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlzUHJvcHNFcXVhbChvYmoxOiBhbnksIG9iajI6IGFueSwgZXhjbHVkZVByb3BzPzogc3RyaW5nW10pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgLy9Mb29wIHRocm91Z2ggcHJvcGVydGllcyBpbiBvYmplY3QgMVxyXG4gICAgICAgIGZvciAobGV0IHAgaW4gb2JqMSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVQcm9wcyAmJiBleGNsdWRlUHJvcHMuaW5kZXhPZihwKSA+PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIC8vQ2hlY2sgcHJvcGVydHkgZXhpc3RzIG9uIGJvdGggb2JqZWN0c1xyXG4gICAgICAgICAgICBpZiAob2JqMS5oYXNPd25Qcm9wZXJ0eShwKSAhPT0gb2JqMi5oYXNPd25Qcm9wZXJ0eShwKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9iajFbcF0gIT09IG9iajJbcF0pIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIxIG5vdCBlcXVhbCBcIiArIHApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gc3dpdGNoICh0eXBlb2YgKG9iajFbcF0pKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvL0RlZXAgY29tcGFyZSBvYmplY3RzXHJcbiAgICAgICAgICAgIC8vICAgICBjYXNlICdvYmplY3QnOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmICghT2JqZWN0LmNvbXBhcmUob2JqMVtwXSwgb2JqMltwXSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIC8vQ29tcGFyZSBmdW5jdGlvbiBjb2RlXHJcbiAgICAgICAgICAgIC8vICAgICBjYXNlICdmdW5jdGlvbic6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHR5cGVvZiAob2JqMltwXSkgPT0gJ3VuZGVmaW5lZCcgfHwgKHAgIT0gJ2NvbXBhcmUnICYmIG9iajFbcF0udG9TdHJpbmcoKSAhPSBvYmoyW3BdLnRvU3RyaW5nKCkpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICAvL0NvbXBhcmUgdmFsdWVzXHJcbiAgICAgICAgICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChvYmoxW3BdICE9PSBvYmoyW3BdKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ2hlY2sgb2JqZWN0IDIgZm9yIGFueSBleHRyYSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgZm9yIChsZXQgcCBpbiBvYmoyKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKG9iajFbcF0pID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiAob2JqMltwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIyIG5vdCBlcXVhbCBcIiArIHApO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmoxKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqMik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIHNoYWxsb3dDb21wYXJlKG5leHRQcm9wczogUCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coXCJzaGFsbG93LTAgXCIgKyB0aGlzLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDMwKSk7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLnRpbWUoXCIyMlwiKTtcclxuICAgIC8vICAgICBsZXQgcmV0ID0gc2hhbGxvd0NvbXBhcmUodGhpcywgbmV4dFByb3BzLCB0aGlzLnN0YXRlKTtcclxuICAgIC8vICAgICAvL2NvbnNvbGUudGltZUVuZChcIjIyXCIpO1xyXG4gICAgLy8gICAgIHJldHVybiByZXQ7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gcHJpdmF0ZSBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAobmV4dFByb3BzOiBQLCBuZXh0U3RhdGU6IFMpID0+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5zaGFsbG93Q29tcGFyZShuZXh0UHJvcHMpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wczogUCwgcHJldlN0YXRlOiBTLCBwcmV2Q29udGV4dDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHByZXZDb250ZXh0KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZFVwZGF0ZShwcmV2UHJvcHM6IFAsIHByZXZTdGF0ZTogUywgcHJldkNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbFJlY2VpdmVQcm9wcyhwcmV2UHJvcHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxVbm1vdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLndpbGxVbm1vdW50KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFkZENsYXNzTmFtZShjbGFzc05hbWVzOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lcylcclxuICAgICAgICAgICAgY2xhc3NOYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNsYXNzZXMucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ2xhc3NOYW1lKGJvb2xWYWx1ZTogYm9vbGVhbiwgdHJ1ZUNsYXNzTmFtZXM6IHN0cmluZywgZmFsc2VDbGFzc05hbWVzPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGJvb2xWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSh0cnVlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgICAgIGlmIChmYWxzZUNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzTmFtZShmYWxzZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzc05hbWUodHJ1ZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoZmFsc2VDbGFzc05hbWVzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoZmFsc2VDbGFzc05hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZXM6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChjbGFzc05hbWVzKVxyXG4gICAgICAgICAgICBjbGFzc05hbWVzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJDbGFzc2VzLmluZGV4T2YobmFtZSkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2xhc3Nlcy5zcGxpY2UodGhpcy5yZW5kZXJDbGFzc2VzLmluZGV4T2YobmFtZSksIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUodGhpcy5wcm9wcy5jbGFzc05hbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlckNsYXNzZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2xhc3Nlcy5qb2luKFwiIFwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlbmRlclByb3BzKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvcHMuY2xhc3NOYW1lID0gdGhpcy5yZW5kZXJDbGFzc05hbWUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclByb3BzLnN0eWxlID0gdGhpcy5yZW5kZXJTdHlsZXM7XHJcbiAgICAgICAgXy5hc3NpZ24odGhpcy5yZW5kZXJQcm9wcy5zdHlsZSwgdGhpcy5wcm9wcy5zdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUHJvcHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGdldFJlYWN0RWxlbWVudENsYXNzTmFtZShlbGVtZW50KTogc3RyaW5nIHtcclxuICAgIC8vICAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPyBlbGVtZW50LnR5cGUudG9TdHJpbmcoKS5zcGxpdChcIihcIilbMF0uc3BsaXQoXCIgXCIpWzFdIDogXCJcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBnZXRDaGlsZHJlbihjaGlsZFR5cGU6IEZ1bmN0aW9uKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRUeXBlID09PSBjaGlsZC50eXBlKVxyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW5PZlByb3BzKHByb3BzOiBhbnksIGNoaWxkVHlwZTogRnVuY3Rpb24pOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRUeXBlID09PSBjaGlsZC50eXBlKVxyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZW5kZXIoKSB7XHJcbiAgICAvLyAgICByZXR1cm4gKG5ldylcclxuICAgIC8vICAgIC8vICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpIH0+XHJcbiAgICAvLyAgICAvLyAgICAgICAgQ29tcG9uZW50IGZyb20ge3RoaXMucHJvcHMuY29tcGlsZXJ9IGFuZCB7dGhpcy5wcm9wcy5mcmFtZXdvcmt9IWNsaWNrQ291bnQ9e3RoaXMuc3RhdGUuY2xpY2tDb3VudH1cclxuICAgIC8vICAgIC8vICAgIDwvYnV0dG9uPlxyXG4gICAgLy8gICAgLy8pO1xyXG4gICAgLy99XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50LnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiX1wiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0UHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcclxuICAgIHR5cGU6IFwiY29sdW1uXCIgfCBcInJvd1wiO1xyXG4gICAgc2l6ZVRvOiBcInBhcmVudFwiIHwgXCJjb250ZW50XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQ8TGF5b3V0UHJvcHMsYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJMYXlvdXRcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2Rpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBmbGV4RGlyZWN0aW9uOiB0aGlzLnByb3BzLnR5cGV9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKSB7Ly8gJiYgdGhpcy5wcm9wcy50eXBlPT09XCJjb2x1bW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5zaXplVG8gPT09IFwicGFyZW50XCIpIHtcclxuICAgICAgICAvLyAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAvLyAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvL3Bvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBsZWZ0OiAwLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gcmlnaHQ6IDAsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0b3A6IDAsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBib3R0b206IDAsXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgLy8gb3ZlcmZsb3c6IFwiYXV0b1wiXHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gICAgIHN0eWxlLmZsZXhEaXJlY3Rpb24gPSB0aGlzLnByb3BzLnR5cGU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBzdHlsZTogYW55ID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgLy9vdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyAgICAgc3R5bGUuZmxleERpcmVjdGlvbiA9IHRoaXMucHJvcHMudHlwZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7b25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0gPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9MYXlvdXQudHN4XG4gKiovIiwiXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRml4ZWRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeGVkIGV4dGVuZHMgQ29tcG9uZW50PEZpeGVkUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkZpeGVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBmbGV4OiBcIjAgMCBhdXRvXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeFxuICoqLyIsImltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZsZXhQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmxleCBleHRlbmRzIENvbXBvbmVudDxGbGV4UHJvcHMsYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiRmxleFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgZmxleDogXCIxXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4XG4gKiovIiwiaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0QnVodGFPYmplY3QxIGV4dGVuZHMgRGVzaWduZWRPYmplY3Qge1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQpNCw0LzQuNC70LjRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQpNCw0LzQuNC70LjRjyDQsNCx0L7QvdC10L3RgtCwXCJcclxuICAgIH0pXHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0JjQvNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCY0LzRj1wiXHJcbiAgICB9KVxyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0J7RgtGH0LXRgdGC0LLQvlwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQntGC0YfQtdGB0YLQstC+INCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIHN1ck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDEudHNcbiAqKi8iLCLvu79pbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mbywgQmFzZVByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVzaWduZWRPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgW25hbWU6c3RyaW5nXTogYW55O1xyXG5cclxuICAgICQkdW53YXRjaGVkUHJvcHM6IHN0cmluZ1tdID0gW1wicHJvcGVydHlFZGl0b3JzXCIsIFwiJCR1bndhdGNoZWRQcm9wc1wiXTtcclxuXHJcbiAgICAvLyBpZDogc3RyaW5nO1xyXG4gICAgLy8gbmFtZTogc3RyaW5nO1xyXG4gICAgLy8gY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBpbmhlcml0RnJvbTogc3RyaW5nO1xyXG4gICAgLy8gbW9kdWxlTmFtZTogc3RyaW5nO1xyXG4gICAgLy8gcmVmZXJlbmNlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAgIC8vcHJpdmF0ZSBzdGF0aWMgcHJvcGVydHlFZGl0b3JzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFByb3BlcnR5RWRpdG9ySW5mbzsgfSA9IHt9O1xyXG5cclxuICAgIC8vIHN0YXRpYyByZWdpc3RlclByb3BlcnR5RWRpdG9yKHByb3BlcnR5TmFtZTogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlQYWdlOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUdyb3VwOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eURlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RUeXBlOiB0eXBlb2YgRGVzaWduZWRPYmplY3QsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3JUeXBlOiB0eXBlb2YgQmFzZVByb3BlcnR5RWRpdG9yLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlOiB0eXBlb2YgT2JqZWN0IHwgdHlwZW9mIFN0cmluZykge1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgaW5mbzogUHJvcGVydHlFZGl0b3JJbmZvID0ge1xyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlQYWdlOiBwcm9wZXJ0eVBhZ2UsXHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5R3JvdXA6IHByb3BlcnR5R3JvdXAsXHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5RGVzY3JpcHRpb246IHByb3BlcnR5RGVzY3JpcHRpb24sXHJcbiAgICAvLyAgICAgICAgIG9iamVjdFR5cGU6IG9iamVjdFR5cGUsXHJcbiAgICAvLyAgICAgICAgIGVkaXRvclR5cGU6IGVkaXRvclR5cGUsXHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5VHlwZTogcHJvcGVydHlUeXBlLFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgRGVzaWduZWRPYmplY3QucHJvcGVydHlFZGl0b3JzW3Byb3BlcnR5TmFtZV0gPSBpbmZvO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyUHJvcGVydHlFZGl0b3IgXCIgKyBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXQgcHJvcGVydHlFZGl0b3JzKCk6eyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBQcm9wZXJ0eUVkaXRvckluZm87IH17XHJcbiAgICAvLyAgICAgcmV0dXJuIChEZXNpZ25lZE9iamVjdCBhcyBhbnkpLiQkcHJvcGVydHlFZGl0b3JzO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3JzKCkge1xyXG4gICAgLy8gICAgIHRoaXMucHJvcGVydHlFZGl0b3JzLmxlbmd0aCA9IDA7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IocHJvcGVydHlOYW1lOiBzdHJpbmcsIHByb3BlcnR5RWRpdG9yOiBCYXNlUHJvcGVydHlFZGl0b3IpIHtcclxuICAgIC8vICAgICBwcm9wZXJ0eUVkaXRvci5kZXNpZ25lZE9iamVjdCA9IHRoaXM7XHJcbiAgICAvLyAgICAgcHJvcGVydHlFZGl0b3IucHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lO1xyXG4gICAgLy8gICAgIHRoaXMucHJvcGVydHlFZGl0b3JzLnB1c2gocHJvcGVydHlFZGl0b3IpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGVtaXRUc0NvZGUoKTogc3RyaW5nIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5yZWdpc3RlclByb3BlcnR5RWRpdG9ycygpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgdHNDb2RlID0gbmV3IFRzQ29kZSh0aGlzLm1vZHVsZU5hbWUsIHRoaXMuY2xhc3NOYW1lLCB0aGlzLmluaGVyaXRGcm9tLCB0aGlzLnJlZmVyZW5jZXMpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLnByb3BlcnR5RWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcclxuICAgIC8vICAgICAgICAgZWRpdG9yLmRlc2lnbmVkT2JqZWN0ID0gdGhpcztcclxuICAgIC8vICAgICAgICAgZWRpdG9yLmVtaXRUc0NvZGUodHNDb2RlKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIHRzQ29kZS5nZXRDb2RlKCk7XHJcbiAgICAvLyB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0LnRzeFxuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Jhc2VQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge3JlZ2lzdGVyUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtJbnB1dFR5cGUsIElucHV0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBCYXNlUHJvcGVydHlFZGl0b3Ige1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZShldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpIHtcclxuICAgICAgIC8vIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xyXG4gICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2UgPT09IFwiICsgdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWUgKyBcIiBcIiArIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgYXV0b0Zvcm1Db250cm9sUHJvcHM6IEF1dG9Gb3JtQ29udHJvbFByb3BzID0ge1xyXG4gICAgICAgICAgICBpbnB1dENhcHRpb246IHRoaXMucHJvcHMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgICAgICBpbnB1dFRhYjogdGhpcy5wcm9wcy5pbnB1dFRhYixcclxuICAgICAgICAgICAgaW5wdXRHcm91cDogdGhpcy5wcm9wcy5pbnB1dEdyb3VwLFxyXG4gICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmlucHV0RGVzY3JpcHRpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKGF1dG9Gb3JtQ29udHJvbFByb3BzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtJbnB1dFR5cGUuVGV4dH1cclxuICAgICAgICAgICAgICAgIGJpbmRPYmplY3Q9e3RoaXMucHJvcHMuZGVzaWduZWRPYmplY3R9XHJcbiAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9e3RoaXMucHJvcHMucHJvcGVydHlOYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ0VkaXRvclBhcmFtcyBleHRlbmRzIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdHJpbmdFZGl0b3IocGFyYW1zOiBTdHJpbmdFZGl0b3JQYXJhbXMpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyh7dGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGNvbnN0cjp0YXJnZXQuY29uc3RydWN0b3J9KTtcclxuICAgICAgICByZWdpc3RlclByb3BlcnR5RWRpdG9yKHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiBwYXJhbXMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgICAgICBpbnB1dFRhYjogcGFyYW1zLmlucHV0VGFiLFxyXG4gICAgICAgICAgICBpbnB1dEdyb3VwOiBwYXJhbXMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogcGFyYW1zLmlucHV0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICBvYmplY3RUeXBlOiB0YXJnZXQuY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgIGVkaXRvclR5cGU6IFN0cmluZ1Byb3BlcnR5RWRpdG9yLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eUVkaXRvckluZm8gZXh0ZW5kcyBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICAgIG9iamVjdFR5cGU6IHR5cGVvZiBEZXNpZ25lZE9iamVjdDtcclxuICAgIGVkaXRvclR5cGU6IHR5cGVvZiBCYXNlUHJvcGVydHlFZGl0b3I7XHJcbiAgICBwcm9wZXJ0eVR5cGU6IHR5cGVvZiBPYmplY3QgfCB0eXBlb2YgU3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiwgUHJvcGVydHlFZGl0b3JJbmZvIHtcclxuICAgIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVByb3BlcnR5RWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50PEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgY29udGV4dDphbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBkZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcblxyXG4gICAgLy8gZ2V0UHJvcGVydHlUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIFwiT2JqZWN0XCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVuZGVyRWRpdG9yKGluZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudCB7XHJcbiAgICAvLyAgICAgcmV0dXJuICg8c3Bhbj5lZGl0b3Igbm90IGRlZmluZWQ8L3NwYW4+KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiAoPHNwYW4+cHJvcGVydHkgZWRpdG9yIG5vdCBkZWZpbmVkPC9zcGFuPik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIGVtaXRUc0NvZGUodHNDb2RlOiBUc0NvZGUsIGFzc2lnbk5hbWU6IHN0cmluZykge1xyXG4gICAgLy8gICAgIHRzQ29kZS5hZGRQcm9wZXJ0eShhc3NpZ25OYW1lLCB0aGlzLnByb3BlcnR5TmFtZSwgdGhpcy5nZXRQcm9wZXJ0eVR5cGUoKSwgdGhpcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BlcnR5TmFtZV0pO1xyXG4gICAgLy8gfVxyXG5cclxufVxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iLCJpbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IoZWRpdG9yOiBQcm9wZXJ0eUVkaXRvckluZm8pIHtcclxuXHJcbiAgICBsZXQgb2JqVHlwZTogYW55ID0gZWRpdG9yLm9iamVjdFR5cGU7XHJcblxyXG4gICAgaWYgKCFvYmpUeXBlLiQkcHJvcGVydHlFZGl0b3JzKVxyXG4gICAgICAgIG9ialR5cGUuJCRwcm9wZXJ0eUVkaXRvcnMgPSBbXTtcclxuXHJcbiAgICBvYmpUeXBlLiQkcHJvcGVydHlFZGl0b3JzLnB1c2goZWRpdG9yKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwicmVnaXN0ZXJQcm9wZXJ0eUVkaXRvciBcIiArIGVkaXRvci5wcm9wZXJ0eU5hbWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3IpO1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvci50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcblxyXG5leHBvcnQgZW51bSBJbnB1dFR5cGUge1RleHQsIE51bWJlciwgRGF0ZSB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+LCBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICB0eXBlOiBJbnB1dFR5cGU7XHJcbiAgICBiaW5kT2JqZWN0OiBhbnk7XHJcbiAgICBiaW5kUHJvcE5hbWU6IHN0cmluZztcclxuICAgIG1heFdpZHRoPzogbnVtYmVyO1xyXG4gICAgb25DbGljaz86IFJlYWN0LlJlYWN0RXZlbnRIYW5kbGVyO1xyXG4gICAgcGxhY2VIb2xkZXI/OiBzdHJpbmc7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SW5wdXRQcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSW5wdXRQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBJbnB1dFR5cGUuVGV4dDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRleHQoKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93ICBcIklucHV0LnJlbmRlcigpOj0+IHVua25vd24gSW5wdXRUeXBlICdcIiArIHRoaXMucHJvcHMudHlwZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXh0ID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdCAmJiB0aGlzLnByb3BzLmJpbmRQcm9wTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmJpbmRPYmplY3RbdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBcIjx1bmJpbmRlZD5cIjtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdCAmJiB0aGlzLnByb3BzLmJpbmRQcm9wTmFtZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXSA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlclRleHQoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJpbnB1dFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh0aGlzLnByb3BzLnN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRUZXh0KCl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0LnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgUHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRm9ybS9Gb3JtXCI7XHJcbmltcG9ydCB7QXV0b0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdERlc2lnbmVyUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuICAgIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdERlc2lnbmVyIGV4dGVuZHMgQ29tcG9uZW50PE9iamVjdERlc2lnbmVyUHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IE9iamVjdERlc2lnbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvcGVydHlEZXNpZ25lcnMoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBnZXRQcm9wZXJ0eUVkaXRvcnModGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCkuZm9yRWFjaCgocHJvcEluZm86IFByb3BlcnR5RWRpdG9ySW5mbywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb3BJbmZvKTtcclxuICAgICAgICAgICAgbGV0IGVkaXRvclByb3BzOiBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0OiB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgLy9wcm9wZXJ0eUVkaXRvckluZm86IHByb3BJbmZvLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vINGN0YLQviDQuNC3IHByb3BJbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8sINC30LDQv9C+0LvRj9C10YLRgdGPINC00LDQu9C10LUg0YfQtdGA0LXQtyBfLmFzc2lnblxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVkaXRvclR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIF8uYXNzaWduKGVkaXRvclByb3BzLCBwcm9wSW5mbyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZWRpdG9yUHJvcHMpO1xyXG5cclxuICAgICAgICAgICAgcmV0LnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wSW5mby5lZGl0b3JUeXBlLCBlZGl0b3JQcm9wcywgbnVsbCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIm9iamVjdC1kZXNpZ25lclwiKTtcclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZX0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXV0b0Zvcm0gc2l6ZVRvPVwicGFyZW50XCIgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICBPYmplY3QgZGVzaWduZXJcclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclByb3BlcnR5RGVzaWduZXJzKCl9XHJcbiAgICAgICAgICAgIDwvQXV0b0Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyLnRzeFxuICoqLyIsImltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlFZGl0b3JzKG9iajogRGVzaWduZWRPYmplY3QpOiBQcm9wZXJ0eUVkaXRvckluZm9bXSB7XHJcblxyXG4gICAgbGV0IGVkaXRvcnMgPSAob2JqLmNvbnN0cnVjdG9yIGFzIGFueSkuJCRwcm9wZXJ0eUVkaXRvcnMgYXMgUHJvcGVydHlFZGl0b3JJbmZvW107XHJcblxyXG4gICAgZWRpdG9ycyA9IGVkaXRvcnMuZmlsdGVyKChlZHQpID0+IG9iaiBpbnN0YW5jZW9mIGVkdC5vYmplY3RUeXBlKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0UHJvcGVydHlFZGl0b3JzXCIpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3JzKTtcclxuICAgIHJldHVybiBlZGl0b3JzO1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvZ2V0UHJvcGVydHlFZGl0b3IudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9UYWJzL1RhYnNcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vRm9ybS9Gb3JtXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICBpbnB1dENhcHRpb24/OiBzdHJpbmc7XHJcbiAgICBpbnB1dFRhYj86IHN0cmluZztcclxuICAgIGlucHV0R3JvdXA/OiBzdHJpbmc7XHJcbiAgICBpbnB1dERlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9Gb3JtUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGlucHV0cz86IEF1dG9Gb3JtQ29udHJvbFByb3BzW107XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGVtcHR5VGFiTmFtZSA9IFwi0LfQsNC60LvQsNC00LrQsFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9Gb3JtIGV4dGVuZHMgQ29tcG9uZW50PEF1dG9Gb3JtUHJvcHMsIGFueT4ge1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldElucHV0cygpOiBBdXRvRm9ybUNvbnRyb2xQcm9wc1tdIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChjOiBhbnkpID0+IGMucHJvcHMpXHJcbiAgICAgICAgICAgIC5tYXAoKGM6IGFueSkgPT4gYy5wcm9wcykgYXMgQXV0b0Zvcm1Db250cm9sUHJvcHNbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYnNMaXN0KCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gXy51bmlxKFxyXG4gICAgICAgICAgICB0aGlzLmdldElucHV0cygpLm1hcDxzdHJpbmc+KChpbnB1dDogQXV0b0Zvcm1Db250cm9sUHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnB1dFRhYiB8fCBcIlwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYWJJbnB1dHModGFiOiBzdHJpbmcpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChjOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjLnByb3BzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKCgoYy5wcm9wcyBhcyBBdXRvRm9ybUNvbnRyb2xQcm9wcykuaW5wdXRUYWIgfHwgXCJcIikgPT09IHRhYik7XHJcbiAgICAgICAgICAgIH0pIGFzIEpTWC5FbGVtZW50W107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJUYWIodGFiOiBzdHJpbmcpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxGb3JtIHNpemVUbz17dGhpcy5wcm9wcy5zaXplVG99ID57dGhpcy5nZXRUYWJJbnB1dHModGFiKX08L0Zvcm0+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgIHJlbmRlclRhYnMoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIGxldCB0YWJzID0gdGhpcy5nZXRUYWJzTGlzdCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGFicyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdldElucHV0cygpKTtcclxuXHJcbiAgICAgICAgaWYgKHRhYnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0YWJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUYWIodGFic1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICBzaXplVG89XCJwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uV2lsbE1vdW50PXsgKHN0YXRlKT0+IHsgY29uc29sZS5sb2coXCJvbldpbGxNb3VudC1hdXRvLWZvcm0tdGFic1wiKX19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VBY3RpdmVUYWI9eyAoc3RhdGUsIHRhYik9PiB7IGNvbnNvbGUubG9nKFwic2V0QWN0aXZlVGFiXCIpO2NvbnNvbGUubG9nKHRhYik7fX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7IHRhYnMubWFwPEpTWC5FbGVtZW50PigodGFiLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBrZXk9e2luZGV4fSB0aXRsZT17dGFiID09PSBcIlwiID8gZW1wdHlUYWJOYW1lIDogdGFifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWIodGFiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXV0by1mb3JtXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci1hdXRvLWZvcm1cIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNpemVUbyA9PT0gXCJwYXJlbnRcIikge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGU6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZTogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJzUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxUYWJzU3RhdGU+IHtcclxuICAgIG9uQ2hhbmdlQWN0aXZlVGFiPzogKHN0YXRlOiBUYWJzU3RhdGUsIGFjdGl2ZVRhYjogVGFiSW5mbykgPT4gdm9pZDtcclxuICAgIHNpemVUbzogXCJwYXJlbnRcIiB8IFwiY29udGVudFwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFic1N0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8VGFic1Byb3BzPiB7XHJcbiAgICB0YWJzOiBUYWJJbmZvW10gPSBbXTtcclxuXHJcbiAgICBzZXRBY3RpdmVUYWIodGFiSW5mbzogVGFiSW5mbykge1xyXG4gICAgICAgIGlmICghdGFiSW5mby5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKT0+dGFiLmlzQWN0aXZlID0gZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJJbmZvLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5wcm9wcy5vbkNoYW5nZUFjdGl2ZVRhYilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnByb3BzLm9uQ2hhbmdlQWN0aXZlVGFiKHRoaXMsIHRhYkluZm8pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYkluZm8ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudDxUYWJzUHJvcHMsIFRhYnNTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRhYnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFRhYnNTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUluaXRUYWJzU3RhdGUoKSB7XHJcblxyXG4gICAgICAgIGxldCB0YWJUYWdzID0gdGhpcy5nZXRDaGlsZHJlbihUYWIpO1xyXG5cclxuICAgICAgICB0YWJUYWdzLmZvckVhY2goKHRhYlRhZywgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0YWJQcm9wcyA9IHRhYlRhZy5wcm9wcyBhcyBUYWJQcm9wcztcclxuXHJcbiAgICAgICAgICAgIGxldCB0YWJJbmZvOiBUYWJJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRhYlByb3BzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogdGFiUHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogaW5kZXggPT09IDBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWJzLnB1c2godGFiSW5mbyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbml0VGFic1N0YXRlKCk7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcblxyXG4gICAgICAgIC8vIGxldCB0YWJUYWdzID0gdGhpcy5nZXRDaGlsZHJlbihUYWIpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdGFiVGFncy5mb3JFYWNoKCh0YWJUYWcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IHRhYlByb3BzID0gdGFiVGFnLnByb3BzIGFzIFRhYlByb3BzO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGxldCB0YWJJbmZvOiBUYWJJbmZvID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGl0bGU6IHRhYlByb3BzLnRpdGxlLFxyXG4gICAgICAgIC8vICAgICAgICAgY29udGVudDogdGFiUHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgLy8gICAgICAgICBpc0FjdGl2ZTogaW5kZXggPT09IDBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHRoaXMudGFicy5wdXNoKHRhYkluZm8pO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gb3BlbldpbmRvdyh3aW46IEpTWC5FbGVtZW50KTogV2luZG93SW5mbyB7XHJcbiAgICAvLyAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyAgICAgbW9kYWwuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxMik7XHJcbiAgICAvLyAgICAgLy8g0LTQu9GPINC/0L7QtNC90Y/RgtC40Y8g0LLQstC10YDRhSDQv9GA0Lgg0LDQutGC0LjQstCw0YbQuNC4INC+0LrQvdCwXHJcbiAgICAvLyAgICAgbW9kYWwub25jbGljayA9IChlKT0+IHtcclxuICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChtb2RhbC5pZCAhPT0gXCJkZWxldGVkXCIpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIC8vICAgICAgICAgfSwgMSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgd2luSW5zdGFuY2UgPSBSZWFjdERPTS5yZW5kZXIod2luLCBtb2RhbCkgYXMgV2luZG93O1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgaW5mbzogV2luZG93SW5mbyA9IHtcclxuICAgIC8vICAgICAgICAgaWQ6IG1vZGFsLmlkLFxyXG4gICAgLy8gICAgICAgICB3aW5JbnN0YW5jZTogd2luSW5zdGFuY2UsXHJcbiAgICAvLyAgICAgICAgIGRpdldyYXBwZXI6IG1vZGFsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLnB1c2goaW5mbyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiBpbmZvO1xyXG4gICAgLy8gfTtcclxuICAgIC8vXHJcbiAgICAvLyBjbG9zZVdpbmRvdyh3aW46IFdpbmRvdykge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLndpbmRvd3MuZm9yRWFjaCgoaW5mbywgaW5kZXgpPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoaW5mby53aW5JbnN0YW5jZSA9PT0gd2luKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpbmZvLmRpdldyYXBwZXIuaWQgPSBcImRlbGV0ZWRcIjtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZChpbmZvLmRpdldyYXBwZXIpO1xyXG4gICAgLy8gICAgICAgICAgICAgZGVsZXRlIHRoaXMud2luZG93c1tpbmRleF07XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhY3RpdmF0ZVdpbmRvdyh3aW46IFdpbmRvdykge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLndpbmRvd3MuZm9yRWFjaCgoaW5mbywgaW5kZXgpPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoaW5mby53aW5JbnN0YW5jZSA9PT0gd2luKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5mby5kaXZXcmFwcGVyKTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICByZW5kZXJUYWJzKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGxpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50YWJzLmZvckVhY2goKHRhYkluZm86IFRhYkluZm8sIGluZGV4OiBudW1iZXIpPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRhYkluZm8uaXNBY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogbnVsbDtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPVxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsgKGUpPT57IHRoaXMuc3RhdGUuc2V0QWN0aXZlVGFiKHRhYkluZm8pfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+e3RhYkluZm8udGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgbGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUGFuZWxzKCk6IEpTWC5FbGVtZW50W10ge1xyXG5cclxuICAgICAgICBsZXQgbGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnRhYnMuZm9yRWFjaCgodGFiSW5mbzogVGFiSW5mbywgaW5kZXg6IG51bWJlcik9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3R5bGU6IGFueSA9IHtwYWRkaW5nVG9wOiAxMH07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNpemVUbyA9PT0gXCJwYXJlbnRcIilcclxuICAgICAgICAgICAgICAgIHN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICF0YWJJbmZvLmlzQWN0aXZlID8gXCJpcy1oaWRkZW5cIiA6IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhYkluZm8uY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBsaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG5cclxuICAgICAgICAvLyByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgICA8ZGl2IHJlZj5cclxuICAgICAgICAvLyAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAvLyApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImF1dG9cIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHNpemVUbz17dGhpcy5wcm9wcy5zaXplVG99IHR5cGU9XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlOiBhbnkpID0+IHsgdGhpcy5uYXRpdmVFbGVtZW50ID0gZTsgfSB9IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYnMoKX1cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQYW5lbHMoKX1cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFiUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYiBleHRlbmRzIENvbXBvbmVudDxUYWJQcm9wcyxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUYWJQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtJbnB1dERpdmlkZXJ9IGZyb20gXCIuLi9JbnB1dERpdmlkZXIvSW5wdXREaXZpZGVyXCI7XHJcbmltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcbmltcG9ydCB7SW5wdXRQcm9wc30gZnJvbSBcIi4uL0lucHV0L0lucHV0XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgc2l6ZVRvOiBcInBhcmVudFwiIHwgXCJjb250ZW50XCI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudDxGb3JtUHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEZvcm1Qcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyQ29udHJvbHMoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IGxpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKChjb250cm9sOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29udHJvbFByb3BzID0gY29udHJvbC5wcm9wcyBhcyBJbnB1dFByb3BzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sUHJvcHMgJiYgKGNvbnRyb2xQcm9wcy5pbnB1dENhcHRpb24gfHwgY29udHJvbFByb3BzLmJpbmRQcm9wTmFtZSkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjb250cm9sLnR5cGUgPT09IElucHV0RGl2aWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklucHV0RGl2aWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbnRyb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntjb250cm9sUHJvcHMuaW5wdXRDYXB0aW9uID8gY29udHJvbFByb3BzLmlucHV0Q2FwdGlvbiA6IGNvbnRyb2xQcm9wcy5iaW5kUHJvcE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbnRyb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMTBcIiBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImZvcm1cIik7XHJcbiAgICAgICAgLy90aGlzLmFkZFN0eWxlcyh7bWFyZ2luOjEwfSk7XHJcblxyXG4gICAgICAgIGlmIChSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmxlbmd0aCA9PT0gMSkgeyAvLyDQvtC00LjQvSDQutC+0L3RgtGA0L7QuyDQsiDRhNC+0YDQvNC1LCDQvtCx0YvRh9C90L4gdHJlZWxpc3RcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNpemVUbz09PVwicGFyZW50XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3R5bGVzKHsgd2lkdGg6IFwiaW5oZXJpdFwifSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIHJlZj17IChlKSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH0gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udHJvbHMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHthcHBJbnN0YW5jZX0gZnJvbSBcIi4uL0FwcFwiO1xyXG5pbXBvcnQge1dpbmRvdywgV2luZG93U3RhdGV9IGZyb20gXCIuLi9XaW5kb3cvV2luZG93XCI7XHJcbmltcG9ydCB7TW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi9Nb3ZhYmxlL01vdmFibGVcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlc2t0b3BQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxEZXNrdG9wUHJvcHM+IHtcclxuICAgIHdpbmRvd3M6IERlc2t0b3BXaW5kb3dbXSA9IFtdOyAgLy8g0L/QvtGB0LvQtdC00L3QtdC1INCw0LrRgtC40LLQvdC+XHJcblxyXG4gICAgLy8gZ2V0V2luZG93QnlJZChpZDogc3RyaW5nKTogV2luZG93U3RhdGUge1xyXG4gICAgLy8gICAgIGZvciAobGV0IHcgb2YgdGhpcy53aW5kb3dzKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh3LmlkID09PSBpZClcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiB3O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjb25zb2xlLndhcm4oXCJEZXNrdG9wV2luZG93IGlkPSdcIiArIGlkICsgXCInIG5vdCBmb3VuZFwiKTtcclxuICAgIC8vICAgICByZXR1cm4gbnVsbDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRXaW5kb3dJbmRleEJ5SWQoaWQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMud2luZG93cy5pbmRleE9mKHRoaXMuZ2V0V2luZG93QnlJZChpZCkpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFjdGl2YXRlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgIC8vICAgICBpZiAod2luKSB7XHJcbiAgICAvLyAgICAgICAgIF8ucHVsbCh0aGlzLndpbmRvd3MsIHdpbik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMud2luZG93cy5wdXNoKHdpbik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gY2xvc2VXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgLy8gICAgIF8ucHVsbCh0aGlzLndpbmRvd3MsIHdpbik7XHJcbiAgICAvLyAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93SW5mbyB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgd2luSW5zdGFuY2U6IFdpbmRvdztcclxuICAgIGRpdldyYXBwZXI6IEVsZW1lbnQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5XaW5kb3dQYXJhbXMge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB0b3A/OiBudW1iZXI7XHJcbiAgICBsZWZ0PzogbnVtYmVyO1xyXG4gICAgcmlnaHQ/OiBudW1iZXI7XHJcbiAgICBib3R0b20/OiBudW1iZXI7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxuICAgIG1pbkhlaWdodD86IG51bWJlcjtcclxuICAgIG1pbldpZHRoPzogbnVtYmVyO1xyXG4gICAgcGFyZW50V2luZG93SWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wV2luZG93IGltcGxlbWVudHMgT3BlbldpbmRvd1BhcmFtcyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgcmlnaHQ6IG51bWJlcjtcclxuICAgIGJvdHRvbTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgbWluSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBtaW5XaWR0aDogbnVtYmVyO1xyXG4gICAgY29udGVudDogSlNYLkVsZW1lbnQ7XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHBhcmVudFdpbmRvd0lkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wIGV4dGVuZHMgQ29tcG9uZW50PERlc2t0b3BQcm9wcywgRGVza3RvcFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRGVza3RvcFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgRGVza3RvcFN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgaWYgKGFwcEluc3RhbmNlKVxyXG4gICAgICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wID0gdGhpcztcclxuICAgIH1cclxuXHJcbi8vICAgIHByaXZhdGUgd2luZG93czogV2luZG93SW5mb1tdID0gW107XHJcblxyXG4gICAgb3BlbldpbmRvdyh3aW46IEpTWC5FbGVtZW50LCBvcGVuUGFyYW1zPzogT3BlbldpbmRvd1BhcmFtcykge1xyXG4gICAgICAgIGlmICghb3BlblBhcmFtcylcclxuICAgICAgICAgICAgb3BlblBhcmFtcyA9IHt9O1xyXG4gICAgICAgIGxldCBuZXdXaW4gPSBuZXcgRGVza3RvcFdpbmRvdygpO1xyXG4gICAgICAgIG5ld1dpbi5jb250ZW50ID0gd2luO1xyXG4gICAgICAgIG5ld1dpbi50aXRsZSA9IG9wZW5QYXJhbXMudGl0bGUgfHwgXCIuXCI7XHJcbiAgICAgICAgbmV3V2luLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG5cclxuICAgICAgICBuZXdXaW4ubGVmdCA9IG9wZW5QYXJhbXMubGVmdDtcclxuICAgICAgICBuZXdXaW4udG9wID0gb3BlblBhcmFtcy50b3A7XHJcbiAgICAgICAgbmV3V2luLmhlaWdodCA9IG9wZW5QYXJhbXMuaGVpZ2h0O1xyXG4gICAgICAgIG5ld1dpbi53aWR0aCA9IG9wZW5QYXJhbXMud2lkdGg7XHJcbiAgICAgICAgbmV3V2luLnJpZ2h0ID0gb3BlblBhcmFtcy5yaWdodDtcclxuICAgICAgICBuZXdXaW4uYm90dG9tID0gb3BlblBhcmFtcy5ib3R0b207XHJcblxyXG4gICAgICAgIGlmICghbmV3V2luLmxlZnQpIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4ucmlnaHQgJiYgIW5ld1dpbi53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmxlZnQgPSA1MDtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdXaW4ucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5sZWZ0ID0gNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLnJpZ2h0ICYmICFuZXdXaW4ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFuZXdXaW4udG9wKSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLmJvdHRvbSAmJiAhbmV3V2luLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmhlaWdodCA9IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdXaW4uYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5ib3R0b20gJiYgIW5ld1dpbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBuZXdXaW4ubWluSGVpZ2h0ID0gb3BlblBhcmFtcy5taW5IZWlnaHQgfHwgMTAwO1xyXG4gICAgICAgIG5ld1dpbi5taW5XaWR0aCA9IG9wZW5QYXJhbXMubWluV2lkdGggfHwgMTAwO1xyXG5cclxuICAgICAgICBuZXdXaW4ucGFyZW50V2luZG93SWQgPSBvcGVuUGFyYW1zLnBhcmVudFdpbmRvd0lkO1xyXG4gICAgICAgIGlmIChuZXdXaW4ucGFyZW50V2luZG93SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRXaW5kb3dCeUlkKG5ld1dpbi5wYXJlbnRXaW5kb3dJZCkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dzLnB1c2gobmV3V2luKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFjdGl2YXRlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgd2luID0gdGhpcy5nZXRUb3BQYXJlbnRXaW5kb3coaWQpO1xyXG4gICAgICAgIGlmICh3aW4gJiYgdGhpcy5zdGF0ZS53aW5kb3dzLmluZGV4T2Yod2luKSAhPT0gdGhpcy5zdGF0ZS53aW5kb3dzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgXy5wdWxsKHRoaXMuc3RhdGUud2luZG93cywgd2luKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dzLnB1c2god2luKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g0L/QvtC00L3QuNC80LDQtdC8INC00L7Rh9C10YDQvdC40LUg0L7QutC90LBcclxuICAgICAgICAgICAgbGV0IGNoaWxkV2luID0gdGhpcy5zdGF0ZS53aW5kb3dzLmZpbHRlcigodzogRGVza3RvcFdpbmRvdykgPT4gdy5wYXJlbnRXaW5kb3dJZCA9PT0gd2luLmlkKVswXTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkV2luKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUNoaWxkV2luZG93KGNoaWxkV2luLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVDaGlsZFdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdpbiAmJiB0aGlzLnN0YXRlLndpbmRvd3MuaW5kZXhPZih3aW4pICE9PSB0aGlzLnN0YXRlLndpbmRvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBfLnB1bGwodGhpcy5zdGF0ZS53aW5kb3dzLCB3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpbmRvd3MucHVzaCh3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQv9C+0LTQvdC40LzQsNC10Lwg0LTQvtGH0LXRgNC90LjQtSDQvtC60L3QsFxyXG4gICAgICAgICAgICBsZXQgY2hpbGRXaW4gPSB0aGlzLnN0YXRlLndpbmRvd3MuZmlsdGVyKCh3OiBEZXNrdG9wV2luZG93KSA9PiB3LnBhcmVudFdpbmRvd0lkID09PSB3aW4uaWQpWzBdO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRXaW4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlV2luZG93KGNoaWxkV2luLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9wUGFyZW50V2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdG9wUGFyZW50ID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgICAgICB3aGlsZSAodG9wUGFyZW50LnBhcmVudFdpbmRvd0lkKSB7XHJcbiAgICAgICAgICAgIHRvcFBhcmVudCA9IHRoaXMuZ2V0V2luZG93QnlJZCh0b3BQYXJlbnQucGFyZW50V2luZG93SWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3BQYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2luZG93QnlJZChpZDogc3RyaW5nKTogRGVza3RvcFdpbmRvdyB7XHJcbiAgICAgICAgZm9yIChsZXQgdyBvZiB0aGlzLnN0YXRlLndpbmRvd3MpIHtcclxuICAgICAgICAgICAgaWYgKHcuaWQgPT09IGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkRlc2t0b3BXaW5kb3cgaWQ9J1wiICsgaWQgKyBcIicgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVBY3RpdmF0ZSA9IChzdGF0ZTogV2luZG93U3RhdGUpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlV2luZG93KHN0YXRlLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAgICAgXy5wdWxsKHRoaXMuc3RhdGUud2luZG93cywgd2luKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbi5wYXJlbnRXaW5kb3dJZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlV2luZG93KHdpbi5wYXJlbnRXaW5kb3dJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93QnlJZCh3aW4ucGFyZW50V2luZG93SWQpLmRpc2FibGVkPWZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VXaW5kb3coc3RhdGUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImRlc2t0b3BcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2hlaWdodDogXCIxMDAlXCJ9KTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6IFwiYXV0b1wifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsgKGUpID0+IHsgdGhpcy5uYXRpdmVFbGVtZW50ID0gZTsgfSB9IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUud2luZG93cy5tYXAoKHcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItZGVza3RvcC13aW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cody5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpbmRvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt3LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3cuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcD17dy50b3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0PXt3LmxlZnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17dy53aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17dy5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodD17dy5yaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbT17dy5ib3R0b219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZhdGU9eyAgdGhpcy5oYW5kbGVBY3RpdmF0ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsgdGhpcy5oYW5kbGVDbG9zZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vb25Nb3ZlU3RhcnQ9eyB3LmhhbmRsZU1vdmVTdGFydCB9XHJcbi8vb25SZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0PXsgdy5oYW5kbGVSZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0IH1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EZXNrdG9wL0Rlc2t0b3AudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wcywgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rlc2t0b3B9IGZyb20gXCIuL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQgRWxlbWVudCA9IEpTWC5FbGVtZW50O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcFN0YXRlPiB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHNpemVUbzogXCJwYXJlbnRcIiB8IFwiY29udGVudFwiO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuY2xhc3MgQXBwU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxBcHBQcm9wcz4ge1xyXG4gICAgd2luZG93czogQXBwV2luZG93W10gPSBbXTsgIC8vINC/0L7RgdC70LXQtNC90LXQtSDQsNC60YLQuNCy0L3QvlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PEFwcFByb3BzLCBBcHBTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFwcFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICBhcHBJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgLy8gICAgIHN1cGVyLmRpZE1vdW50KCk7XHJcbiAgICAvLyAgICAgYXBwSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGRlc2t0b3A6IERlc2t0b3A7XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImFwcFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGFwcEluc3RhbmNlOiBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHAudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0xheW91dFwiO1xyXG5pbXBvcnQge0ZpeGVkfSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZsZXhcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlU3RhcnRFdmVudH0gZnJvbSBcIi4uL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQgc2hhbGxvd0NvbXBhcmUgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZVwiKTtcclxuaW1wb3J0IGRlZXBFcXVhbCA9IHJlcXVpcmUoXCJkZWVwLWVxdWFsXCIpO1xyXG5pbXBvcnQge09wZW5XaW5kb3dQYXJhbXN9IGZyb20gXCIuLi9EZXNrdG9wL0Rlc2t0b3BcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1Byb3BzIGV4dGVuZHMgT3BlbldpbmRvd1BhcmFtcyxDb21wb25lbnRQcm9wczxXaW5kb3dTdGF0ZT4ge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgICBvbkFjdGl2YXRlPyhzdGF0ZTogV2luZG93U3RhdGUpOiB2b2lkO1xyXG4gICAgb25DbG9zZT8oc3RhdGU6IFdpbmRvd1N0YXRlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd1N0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8V2luZG93UHJvcHM+IGltcGxlbWVudHMgT3BlbldpbmRvd1BhcmFtcyB7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIG1pbldpZHRoOiBudW1iZXI7XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuLy8gICAgY2hpbGRXaW5kb3c6IFdpbmRvdztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvbmVudDxXaW5kb3dQcm9wcywgV2luZG93U3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBXaW5kb3dQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFdpbmRvd1N0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlSW5pdFN0YXRlKCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmlkID0gdGhpcy5wcm9wcy5pZDtcclxuICAgICAgICB0aGlzLnN0YXRlLnRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcclxuICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IHRoaXMucHJvcHMudG9wO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IHRoaXMucHJvcHMubGVmdDtcclxuICAgICAgICB0aGlzLnN0YXRlLnJpZ2h0ID0gdGhpcy5wcm9wcy5yaWdodDtcclxuICAgICAgICB0aGlzLnN0YXRlLmJvdHRvbSA9IHRoaXMucHJvcHMuYm90dG9tO1xyXG4gICAgICAgIHRoaXMuc3RhdGUud2lkdGggPSB0aGlzLnByb3BzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5taW5XaWR0aCA9IHRoaXMucHJvcHMubWluV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5taW5IZWlnaHQgPSB0aGlzLnByb3BzLm1pbkhlaWdodDtcclxuICAgICAgICB0aGlzLnN0YXRlLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUluaXRTdGF0ZSgpO1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFdpbmRvd1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIC8vdGhpcy5zdGF0ZS5kaXNhYmxlZCA9IG5leHRQcm9wcy5kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIuZGlkTW91bnQoKTtcclxuICAgICAgICAodGhpcy5uYXRpdmVFbGVtZW50IGFzIGFueSlbXCIkJHdpbmRvd1wiXSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVN0YXJ0ID0gKGU6IE1vdmVTdGFydEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZS5iaW5kWCh0aGlzLnN0YXRlLCBcImxlZnRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKCdsZWZ0JywgdGhpcy5zdGF0ZS5sZWZ0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLmJpbmRZKHRoaXMuc3RhdGUsIFwidG9wXCIsICgpID0+IHtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcygndG9wJywgdGhpcy5zdGF0ZS50b3ApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayhudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydCA9IChlOiBNb3ZlU3RhcnRFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUuYmluZFgodGhpcy5zdGF0ZSwgXCJ3aWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpZHRoIDwgdGhpcy5zdGF0ZS5taW5XaWR0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGggPSB0aGlzLnN0YXRlLm1pbldpZHRoO1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKCd3aWR0aCcsIHRoaXMuc3RhdGUud2lkdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUuYmluZFkodGhpcy5zdGF0ZSwgXCJoZWlnaHRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgPCB0aGlzLnN0YXRlLm1pbkhlaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID0gdGhpcy5zdGF0ZS5taW5IZWlnaHQ7XHJcbiAgICAgICAgICAgICQodGhpcy5uYXRpdmVFbGVtZW50KS5jc3MoJ2hlaWdodCcsIHRoaXMuc3RhdGUuaGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZU9uQ2xpY2sobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZU9uQ2xpY2sgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkFjdGl2YXRlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aXZhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKG5leHRQcm9wczogV2luZG93UHJvcHMsIG5leHRTdGF0ZTogV2luZG93U3RhdGUpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IG9sZERpc2FibGVkID0gdGhpcy5zdGF0ZS5kaXNhYmxlZCA9PT0gdHJ1ZTtcclxuICAgICAgICBsZXQgbmV3RGlzYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQgPT09IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuZGlzYWJsZWQ9bmV3RGlzYWJsZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiBvbGREaXNhYmxlZCAhPT0gbmV3RGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJ3aW5kb3cgYm94XCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJhYnNvbHV0ZVwifSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMuc3RhdGUudG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxyXG4gICAgICAgICAgICByaWdodDogdGhpcy5zdGF0ZS5yaWdodCxcclxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnN0YXRlLmJvdHRvbSxcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJCdXR0b25TdHlsZSA9IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogMixcclxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLXdpblwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRpc2FibGVkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRpc2FibGVkKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVkV3JhcHBlckNsYXNzID0gXCJ3aW5kb3ctZGlzYWJsZWQtd3JhcHBlclwiO1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlZCB8fCB0aGlzLnN0YXRlLmRpc2FibGVkID09PSBmYWxzZSlcclxuICAgICAgICAgICAgZGlzYWJsZWRXcmFwcGVyQ2xhc3MgKz0gXCIgaXMtaGlkZGVuXCI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luZG93XCJcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgcmVmPXsgKGU6IGFueSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9fVxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZU9uQ2xpY2sgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJjb2x1bW5cIiBzaXplVG89XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luZG93LWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjVweCA1cHggMHB4IDBweFwiLCBwb3NpdGlvbjpcInJlbGF0aXZlXCIsIHBhZGRpbmdMZWZ0OiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJyb3dcIiBzaXplVG89XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndpbmRvdy10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOjAsIGxlZnQ6MCwgcmlnaHQ6MCxib3R0b206MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXt0aGlzLm1vdmVTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWFkZG9ucyBidXR0b25zLWJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAyLCBwYWRkaW5nUmlnaHQ6IDR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIG1pbmltaXplLWJ1dHRvblwiIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWludXNcIiBzdHlsZT17e3RvcDogM319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBtYXhpbWl6ZS1idXR0b25cIiBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW9cIiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGNsb3NlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIHN0eWxlPXt7dG9wOiAtMX19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwid2luZG93LWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOjEwLCBvdmVyZmxvdzpcImhpZGRlblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5kb3ctcmVzaXplclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaGVpZ2h0OjEwLCB3aWR0aDoxMCwgcmlnaHQ6MCxib3R0b206MCwgYm9yZGVyUmFkaXVzOiBcIjAgMCA1cHggMFwiLGN1cnNvcjogXCJzZS1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVTdGFydD17dGhpcy5yZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW92YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkaXNhYmxlZFdyYXBwZXJDbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBsZWZ0OjAsIHRvcDowLCByaWdodDowLCBib3R0b206MH19XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyA8ZGl2IGNsYXNzTmFtZT1cIndpbmRvdy1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OlwiMTAwJVwiIH19PlxyXG4vLyAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbi8vIDwvZGl2PlxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1dpbmRvdy9XaW5kb3cudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRHJhZ0V2ZW50SGFuZGxlciA9IF9fUmVhY3QuRHJhZ0V2ZW50SGFuZGxlcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92YWJsZVByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbk1vdmVTdGFydD86IChldmVudDogTW92ZVN0YXJ0RXZlbnQpPT52b2lkO1xyXG4gICAgb25Nb3ZlPzogKGV2ZW50OiBNb3ZlRXZlbnQpPT52b2lkO1xyXG4gICAgb25Nb3ZlRW5kPzogKGV2ZW50OiBNb3ZlRW5kRXZlbnQpPT52b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlU3RhcnRFdmVudCB7XHJcbiAgICBiaW5kWDogKG9iajogT2JqZWN0LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCk9PnZvaWQpPT52b2lkO1xyXG4gICAgYmluZFk6IChvYmo6IE9iamVjdCwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpPT52b2lkKT0+dm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRXZlbnQge1xyXG4gICAgZGVsdGFYOiBudW1iZXI7XHJcbiAgICBkZWx0YVk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRW5kRXZlbnQge1xyXG4gICAgZGVsdGFYOiBudW1iZXI7XHJcbiAgICBkZWx0YVk6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBCaW5kZWRPYmplY3Qge1xyXG4gICAgb2JqOiBhbnk7XHJcbiAgICBwcm9wTmFtZTogc3RyaW5nXHJcbiAgICBzdGFydFZhbHVlOiBudW1iZXI7XHJcbiAgICBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZDtcclxuICAgIGxhc3RWYWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW92YWJsZSBleHRlbmRzIENvbXBvbmVudDxNb3ZhYmxlUHJvcHMsYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRDbGllbnRYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0Q2xpZW50WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3Zlcl9CaW5kZWQ6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRlZFg6IEJpbmRlZE9iamVjdFtdID0gW107XHJcbiAgICBwcml2YXRlIGJpbmRlZFk6IEJpbmRlZE9iamVjdFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kWChvYmo6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmJpbmRlZFgucHVzaCh7XHJcbiAgICAgICAgICAgIG9iajogb2JqLFxyXG4gICAgICAgICAgICBwcm9wTmFtZTogcHJvcE5hbWUsXHJcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IG9ialtwcm9wTmFtZV0sXHJcbiAgICAgICAgICAgIG1vdmVkQ2FsbGJhY2s6IG1vdmVkQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogb2JqW3Byb3BOYW1lXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRZKG9iajogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuYmluZGVkWS5wdXNoKHtcclxuICAgICAgICAgICAgb2JqOiBvYmosXHJcbiAgICAgICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZSxcclxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogb2JqW3Byb3BOYW1lXSxcclxuICAgICAgICAgICAgbW92ZWRDYWxsYmFjazogbW92ZWRDYWxsYmFjayxcclxuICAgICAgICAgICAgbGFzdFZhbHVlOiBvYmpbcHJvcE5hbWVdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydENsaWVudFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgdGhpcy5zdGFydENsaWVudFkgPSBlLmNsaWVudFk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KHtiaW5kWDogdGhpcy5iaW5kWC5iaW5kKHRoaXMpLCBiaW5kWTogdGhpcy5iaW5kWS5iaW5kKHRoaXMpfSk7XHJcblxyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJtb3ZhYmxlXCIsIFwiXCIpO1xyXG4gICAgICAgIC8vZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnT3Zlcl9CaW5kZWQgPSB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJfQmluZGVkKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJfQmluZGVkKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdmVFbmQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlRW5kKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhWDogZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBkZWx0YVk6IGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmluZGVkWCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmluZGVkWSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kZWRYLmZvckVhY2goKGJpbmQpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gYmluZC5zdGFydFZhbHVlICsgZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFg7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gYmluZC5sYXN0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQub2JqW2JpbmQucHJvcE5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBiaW5kLmxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmQubW92ZWRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBiaW5kLm1vdmVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRlZFkuZm9yRWFjaCgoYmluZCk9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGJpbmQuc3RhcnRWYWx1ZSArIGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZO1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGJpbmQubGFzdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kLm9ialtiaW5kLnByb3BOYW1lXSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYmluZC5sYXN0VmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5kLm1vdmVkQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgYmluZC5tb3ZlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3ZlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZSh7XHJcbiAgICAgICAgICAgICAgICBkZWx0YVg6IGUuY2xpZW50WCAtIHRoaXMuc3RhcnRDbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgZGVsdGFZOiBlLmNsaWVudFkgLSB0aGlzLnN0YXJ0Q2xpZW50WVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJtb3ZhYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe2RyYWdnYWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtjdXJzb3I6IFwibW92ZVwifSk7XHJcblxyXG4gICAgICAgIC8vcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcEluZm8uZWRpdG9yVHlwZSwgZWRpdG9yUHJvcHMsIG51bGwpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9e3RoaXMuaGFuZGxlRHJhZ1N0YXJ0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9e3RoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZS50c3hcbiAqKi8iLCJpbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi90ZXN0QnVodGFPYmplY3QxXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgdGVzdEJ1aHRhT2JqZWN0MiBleHRlbmRzIFRlc3RCdWh0YU9iamVjdDEge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0J/QvtC7L3NleFwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+XCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQn9C+0YLQvtC70L7QuiDQsNCx0L7QvdC10L3RgtCwXCJcclxuICAgIH0pXHJcbiAgICBzZXg6IHN0cmluZztcclxuXHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcblxyXG4vL2ltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtleGVjdXRlU1FMfSBmcm9tIFwiLi4vLi4vU1FMXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5zfSBmcm9tIFwiLi9UcmVlR3JpZENvbHVtbnNcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtblByb3BzLCBUcmVlR3JpZENvbHVtbn0gZnJvbSBcIi4vVHJlZUdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtLZXljb2RlfSBmcm9tIFwiLi4vLi4vS2V5Y29kZVwiO1xyXG5pbXBvcnQge01vdmFibGUsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCB7Z2V0U2Nyb2xsYmFyV2lkdGh9IGZyb20gXCIuLi8uLi9nZXRTY3JvbGxCYXJXaWR0aFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uL0J1dHRvblwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5pbXBvcnQge09iamVjdERlc2lnbmVyfSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyXCI7XHJcbmltcG9ydCB7T3BlbldpbmRvd1BhcmFtc30gZnJvbSBcIi4uL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQge2FwcEluc3RhbmNlfSBmcm9tIFwiLi4vQXBwXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8VHJlZUdyaWRTdGF0ZT4ge1xyXG4gICAgZGF0YVNvdXJjZT86IGFueTtcclxuICAgIHJvd0hlaWdodD86IG51bWJlcjtcclxuICAgIGtleUZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIHBhcmVudEtleUZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIGhpZXJhcmNoeUZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIGhpZXJhcmNoeURlbGltaXRlcnM/OiBzdHJpbmc7XHJcbiAgICB0cmVlTW9kZT86IGJvb2xlYW47XHJcbiAgICBhdXRvRXhwYW5kTm9kZXNUb0xldmVsPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPFRyZWVHcmlkUHJvcHM+IHtcclxuICAgIGNvbHVtbnM6IEludGVybmFsQ29sdW1uW107XHJcbiAgICBwYWdlTGVuZ3RoOiBudW1iZXI7XHJcbiAgICByb3dzOiBJbnRlcm5hbFJvd1tdO1xyXG4gICAgbm9kZXM6IEludGVybmFsVHJlZU5vZGVbXTtcclxuICAgIGZvY3VzZWRSb3dJbmRleDogbnVtYmVyO1xyXG4gICAgZm9jdXNlZENlbGxJbmRleDogbnVtYmVyO1xyXG4gICAgZGF0YVNvdXJjZTogYW55W107XHJcblxyXG4gICAgaGVhZGVyRmFrZVJvdzogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb290ZXJGYWtlUm93OiBIVE1MRWxlbWVudDtcclxuICAgIGhlYWRlcldyYXBwZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGJvZHlXcmFwcGVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb290ZXJXcmFwcGVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgaGVhZGVyVGFibGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGJvZHlUYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyVGFibGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVybmFsQ29sdW1uIHtcclxuICAgIHByb3BzOiBUcmVlR3JpZENvbHVtblByb3BzO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGNhcHRpb246IHN0cmluZztcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nO1xyXG4gICAgZm9vdGVyOiBzdHJpbmc7XHJcbiAgICBoaWRkZW46IGJvb2xlYW47XHJcbiAgICBoZWFkZXJXaWR0aE5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgYm9keVdpZHRoTmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb290ZXJXaWR0aE5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxSb3cge1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAvLy8gICBzb3VyY2VPYmplY3Q6IGFueTtcclxuICAgIHNvdXJjZUluZGV4OiBudW1iZXI7XHJcbiAgICBjZWxsRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgIG5vZGU6IEludGVybmFsVHJlZU5vZGU7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxUcmVlTm9kZSB7XHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHNvdXJjZU9iamVjdDogYW55O1xyXG4gICAgc291cmNlSW5kZXg6IG51bWJlcjtcclxuICAgIGNlbGxFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIC8vINC00LvRjyB0cmVlTW9kZTtcclxuICAgIHBhcmVudDogSW50ZXJuYWxUcmVlTm9kZTtcclxuICAgIGNoaWxkcmVuOiBJbnRlcm5hbFRyZWVOb2RlW10gPSBbXTtcclxuICAgIGV4cGFuZGVkOiBib29sZWFuO1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuXHJcbiAgICBwdXNoUm93UmVjdXJzaXZlKHJvd3M6IEludGVybmFsUm93W10sIG1heFBhZ2VMZW5ndGg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBpZiAocm93cy5sZW5ndGggPj0gbWF4UGFnZUxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgcm93ID0gbmV3IEludGVybmFsUm93KCk7XHJcbiAgICAgICAgcm93LnNvdXJjZUluZGV4ID0gdGhpcy5zb3VyY2VJbmRleDtcclxuICAgICAgICByb3cubm9kZSA9IHRoaXM7XHJcbiAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnB1c2hSb3dSZWN1cnNpdmUocm93cywgbWF4UGFnZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGl0ZXJhdGVSZWN1cnNpdmUoY2FsbGJhY2s6IChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKT0+dm9pZCkge1xyXG4gICAgICAgIGNhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuaXRlcmF0ZVJlY3Vyc2l2ZShjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4vL2NvbnN0IHZlcnRTY3JvbGxCYXJXaWR0aCA9IDMwO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkIGV4dGVuZHMgQ29tcG9uZW50PFRyZWVHcmlkUHJvcHMsIFRyZWVHcmlkU3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlZUdyaWRQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgVHJlZUdyaWRTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpdGVyYXRlQWxsTm9kZXMoY2FsbGJhY2s6IChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKT0+dm9pZCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubm9kZXMuZm9yRWFjaCgobm9kZTogSW50ZXJuYWxUcmVlTm9kZSk9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuaXRlcmF0ZVJlY3Vyc2l2ZShjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHBhbmRBbGwoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5mb3JFYWNoKChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKT0+IHtcclxuICAgICAgICAgICAgbm9kZS5pdGVyYXRlUmVjdXJzaXZlKChub2Q6IEludGVybmFsVHJlZU5vZGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kLmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29sbGFwc2VBbGwoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlcmF0ZUFsbE5vZGVzKChub2Q6IEludGVybmFsVHJlZU5vZGUpPT4ge1xyXG4gICAgICAgICAgICBub2QuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwZGF0ZUJ1dHRvbkNsaWNrID0gKCk9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuRWRpdEZvcm0odGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4XSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5FZGl0Rm9ybShyb3c6IEludGVybmFsUm93KSB7XHJcblxyXG4gICAgICAgIGxldCBkZXNpZ25lZE9iamVjdCA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZVtyb3cuc291cmNlSW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyIGRlc2lnbmVkT2JqZWN0PXtkZXNpZ25lZE9iamVjdH0+XHJcbiAgICAgICAgPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcItC+0LrQvdC+IDFcIixcclxuICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgbGVmdDogNTAsXHJcbiAgICAgICAgICAgIHBhcmVudFdpbmRvd0lkOnRoaXMuZ2V0UGFyZW50V2luZG93SWQoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4sIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ29sdW1ucygpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGNvbHVtbnNUYWcgPSB0aGlzLmdldENoaWxkcmVuKFRyZWVHcmlkQ29sdW1ucyk7XHJcblxyXG4gICAgICAgIGNvbHVtbnNUYWcuZm9yRWFjaCgodGFnOiBKU1guRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uVGFnTGlzdCA9IHRoaXMuZ2V0Q2hpbGRyZW5PZlByb3BzKHRhZy5wcm9wcywgVHJlZUdyaWRDb2x1bW4pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1uVGFnTGlzdC5mb3JFYWNoKChwcm9wQ29sOiBKU1guRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBuZXcgSW50ZXJuYWxDb2x1bW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbC5wcm9wcyA9IHByb3BDb2wucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBjb2wud2lkdGggPSBwcm9wQ29sLnByb3BzLndpZHRoIHx8IDE1MDtcclxuICAgICAgICAgICAgICAgIGNvbC5jYXB0aW9uID0gcHJvcENvbC5wcm9wcy5jYXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgY29sLmZpZWxkTmFtZSA9IHByb3BDb2wucHJvcHMuZmllbGROYW1lO1xyXG4gICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLnByb3BzLmNhcHRpb24gfHwgY29sLmZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5wdXNoKGNvbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Rm9jdXNlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOb2RlcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMudHJlZU1vZGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGllcmFyY2h5RmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTm9kZXNGcm9tSGllcmFyY2h5RmllbGQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidW5rbm93biBoaWVyYXJjaHkgbW9kZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOb2Rlc0Zyb21IaWVyYXJjaHlGaWVsZCgpIHtcclxuXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5kYXRhU291cmNlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaGllcmFyY2h5RGVsaW1pdGVycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWFRyZWVHcmlkOiBoaWVyYXJjaHlEZWxpbWl0ZXJzIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGludGVyZmFjZSBJU29ydGVkIHtcclxuICAgICAgICAgICAgaGllcmFyY2h5U3RyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIG9iakluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc29ydGVkOiBJU29ydGVkW10gPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UubWFwKChvYmo6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGllcmFyY2h5U3RyOiBvYmpbdGhpcy5wcm9wcy5oaWVyYXJjaHlGaWVsZE5hbWVdLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBvYmpJbmRleDogaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ydGVkID0gXy5zb3J0Qnkoc29ydGVkLCBbXCJoaWVyYXJjaHlTdHJcIl0pO1xyXG5cclxuICAgICAgICBsZXQgY2FjaGU6IHsgW2hpZXJhcmNoeUlkOiBzdHJpbmddOiBJbnRlcm5hbFRyZWVOb2RlOyB9ID0ge307XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUubm9kZXMgPSBbXTtcclxuXHJcbiAgICAgICAgc29ydGVkLmZvckVhY2goKHMsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3BsaXR0ZWQgPSBzLmhpZXJhcmNoeVN0ci5zcGxpdCh0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMpO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50SWQ6IGFueTtcclxuICAgICAgICAgICAgbGV0IG5vZGVJZDogYW55O1xyXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZWQubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgbm9kZUlkID0gcy5oaWVyYXJjaHlTdHI7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZUlkID0gXy5sYXN0KHNwbGl0dGVkKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudElkID0gc3BsaXR0ZWQuc2xpY2UoMCwgc3BsaXR0ZWQubGVuZ3RoIC0gMSkuam9pbih0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMuc2xpY2UoMCwgMSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVbbm9kZUlkXSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWFRyZWVHcmlkOiBub2RlSWQgJ1wiICsgbm9kZUlkICsgXCInIGlzIGR1cGxpY2F0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBJbnRlcm5hbFRyZWVOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zb3VyY2VJbmRleCA9IHMub2JqSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZXZlbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHBhbmRlZCA9IG5vZGUubGV2ZWwgPCB0aGlzLnByb3BzLmF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVbbm9kZUlkXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBjYWNoZVtwYXJlbnRJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgSW50ZXJuYWxUcmVlTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zb3VyY2VJbmRleCA9IHMub2JqSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBub2RlLmxldmVsID0gcGFyZW50Tm9kZS5sZXZlbCArIDE7XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4cGFuZGVkID0gbm9kZS5sZXZlbCA8IHRoaXMucHJvcHMuYXV0b0V4cGFuZE5vZGVzVG9MZXZlbDtcclxuICAgICAgICAgICAgICAgIGNhY2hlW3MuaGllcmFyY2h5U3RyXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7c3RyOiBzLmhpZXJhcmNoeVN0ciwgcGFyZW50SWQsIG5vZGVJZH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUm93cygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yb3dzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5vZGVzLmZvckVhY2goKG5vZGU6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnB1c2hSb3dSZWN1cnNpdmUodGhpcy5zdGF0ZS5yb3dzLCB0aGlzLnN0YXRlLnBhZ2VMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5mb3JFYWNoKChvYmo6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBJbnRlcm5hbFJvdygpO1xyXG4gICAgICAgICAgICAgICAgcm93LnNvdXJjZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAvL3Jvdy5zb3VyY2VPYmplY3QgPSBvYmo7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEZvY3VzZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbHVtbnMgJiYgdGhpcy5zdGF0ZS5jb2x1bW5zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5kYXRhU291cmNlKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnNbMF0uZm9vdGVyID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLmxlbmd0aCArIFwiINC/0L7Qty5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckRhdGEoKSB7XHJcblxyXG4vLyAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFTb3VyY2UpIHtcclxuLy8gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhID0gdGhpcy5wcm9wcy5kYXRhU291cmNlLm1hcCgocm93KSA9PiByb3cpO1xyXG4vLyAgICAgICAgICAgIH1cclxuICAgICAgICAvL3RoaXMucm93cyA9IHdpbmRvd1tcInh4eFwiXS5maWx0ZXIoKHJvdykgPT4gcm93W1wi0J3QsNC30LLQsNC90LjQtVwiXS5pbmRleE9mKFwiUGhpbFwiKSA+IC0xKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsOiBudW1iZXI7XHJcbiAgICBsYXN0Qm9keVdyYXBwZXJIZWlnaHQgPSAwO1xyXG4gICAgbGFzdEJvZHlXcmFwcGVyV2lkdGggPSAwO1xyXG5cclxuICAgIGhhbmRsZUJvZHlXcmFwcGVyRWxlbWVudFJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGlmIChuZXdIZWlnaHQgIT09IHRoaXMubGFzdEJvZHlXcmFwcGVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEJvZHlXcmFwcGVySGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgaWYgKG5ld1dpZHRoICE9PSB0aGlzLmxhc3RCb2R5V3JhcHBlcldpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEJvZHlXcmFwcGVyV2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChudWxsKTtcclxuICAgICAgICB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5oYW5kbGVCb2R5V3JhcHBlckVsZW1lbnRSZXNpemUsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbnMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wYWdlTGVuZ3RoID0gNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWZyZXNoRGF0YVNvdXJjZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSB0ZXN0TG9hZDUwMCgpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgLy8gICAgICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0YWJsZS5yb3dzLm1hcCgocikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB70JrQu9GO0Yc6IHJbXCLQmtC70Y7Rh1wiXSwg0J3QvtC80LXRgDogcltcItCd0L7QvNC10YBcIl0sINCd0LDQt9Cy0LDQvdC40LU6IHJbXCLQndCw0LfQstCw0L3QuNC1XCJdfTtcclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgdG9wIDUwMDYqINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQmtC70Y7RhyAtLT4gXCIgKyB0YWJsZS5yb3dzWzBdLmdldFZhbHVlKDIpKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogVHJlZUdyaWRQcm9wcykge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkVXBkYXRlKHByZXZQcm9wczogVHJlZUdyaWRQcm9wcywgcHJldlN0YXRlOiBhbnksIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChudWxsKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJSb3dzKCk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZW5kZXJSb3dzLXN0YXJ0KClcIik7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci1yb3dzOiBcIiArIHRoaXMuc3RhdGUucm93cy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChyb3c6IEludGVybmFsUm93LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKHRoaXMucmVuZGVyUm93KHJvdywgaW5kZXgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlclJvd3MtZW5kKClcIik7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclJvdyhyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAga2V5PXtyb3dJbmRleH1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB7IHJvdy5lbGVtZW50ID0gZTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2VsbHMocm93LCByb3dJbmRleCl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNlbGxzKHJvdzogSW50ZXJuYWxSb3csIHJvd0luZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4sIGNvbEluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0LnB1c2godGhpcy5yZW5kZXJDZWxsKHJvdywgcm93SW5kZXgsIGNvbCwgY29sSW5kZXgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2VsbChyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyLCBjb2w6IEludGVybmFsQ29sdW1uLCBjb2xJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgb2JqSW5kZXggPSByb3cuc291cmNlSW5kZXg7XHJcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZVtvYmpJbmRleF1bY29sLnByb3BzLmZpZWxkTmFtZV0udG9TdHJpbmcoKTtcclxuICAgICAgICAvL2xldCBzdHIgPSB0aGlzLnJvd3Nbcm93SW5kZXhdLnNvdXJjZU9iamVjdFtjb2wucHJvcHMuZmllbGROYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vIHJldHVybiA8dGQga2V5PXtjb2xJbmRleH0+XHJcbiAgICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6MTYsIG92ZXJmbG93OlwiaGlkZGVuXCJ9fT57c3RyfTwvZGl2PlxyXG4gICAgICAgIC8vIDwvdGQ+O1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IHJvdy5ub2RlO1xyXG5cclxuICAgICAgICBsZXQgaGllcmFyY2h5UGFkZGluZ0RpdjogSlNYLkVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgKGNvbC5wcm9wcy5zaG93SGllcmFyY2h5UGFkZGluZyB8fCBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpKSB7XHJcbiAgICAgICAgICAgIGhpZXJhcmNoeVBhZGRpbmdEaXYgPSA8c3BhbiBzdHlsZT17e3dpZHRoOm5vZGUubGV2ZWwgKiAyMCwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19Pjwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpIHtcclxuICAgICAgICAgICAgdGRTdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IFwicmdiYSgyNTUsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RyU3BhblN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUgJiYgbm9kZS5leHBhbmRlZCAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RyU3BhblN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0clNwYW4gPSA8c3BhbiBzdHlsZT17IHN0clNwYW5TdHlsZX0+e3N0cn08L3NwYW4+O1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbGxhcHNlSWNvbkRpdjogSlNYLkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlICYmIGNvbC5wcm9wcy5zaG93SGllcmFyY2h5VHJlZSkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlSWNvbkRpdiA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93LWNvbGxhcHNlLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6MjAsIGZsZXg6IFwiMCAwIGF1dG9cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7bm9kZS5leHBhbmRlZCA9IGZhbHNlOyB0aGlzLmNyZWF0ZVJvd3MoKTsgdGhpcy5mb3JjZVVwZGF0ZSgpO30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VJY29uRGl2ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jb2xsYXBzZS1pY29uXCIgc3R5bGU9e3sgd2lkdGg6MjAsIGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHtub2RlLmV4cGFuZGVkID0gdHJ1ZTsgdGhpcy5jcmVhdGVSb3dzKCk7IHRoaXMuZm9yY2VVcGRhdGUoKTt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlSWNvbkRpdiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jb2xsYXBzZS1pY29uXCIgc3R5bGU9e3sgd2lkdGg6MjAsIGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgIGtleT17Y29sSW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17dGRTdHlsZX1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiByb3cuY2VsbEVsZW1lbnRzW2NvbEluZGV4XSA9IGV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHsgdGhpcy5zZXRGb2N1c2VkQ2VsbChyb3dJbmRleCxjb2xJbmRleCk7fSB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNoZWNrYm94XCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1wYWRkaW5nXCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoaWVyYXJjaHlQYWRkaW5nRGl2fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sbGFwc2VJY29uRGl2fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1pY29uXCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXN0clwiIHN0eWxlPXt7IGZsZXg6IFwiMCAxIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyU3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRGb2N1c2VkQ2VsbChyb3dJbmRleDogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA9IHJvd0luZGV4O1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleCA9IGNlbGxJbmRleDtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUYWJsZVdoZWVsKGU6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgICAvLyBpZiAoZS5kZWx0YVkgPiAwKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmluY1BhZ2VTdGFydEluZGV4KDMpO1xyXG4gICAgICAgIC8vIGVsc2UgaWYgKGUuZGVsdGFZIDwgMClcclxuICAgICAgICAvLyAgICAgdGhpcy5kZWNQYWdlU3RhcnRJbmRleCgzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRlbHRhWSk7XHJcbiAgICAgICAgLy8gdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2Nyb2xsKGU6IFVJRXZlbnQpIHtcclxuICAgICAgICAkKHRoaXMuc3RhdGUuaGVhZGVyV3JhcHBlckVsZW1lbnQpLmNzcyh7dG9wOiB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3B9KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LmNsaWVudEhlaWdodCAtICQodGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKSAtIDA7XHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5jc3Moe3RvcDogcG9zfSk7XHJcblxyXG4gICAgICAgICQodGhpcy5zdGF0ZS5oZWFkZXJGYWtlUm93KS5jc3Moe2hlaWdodDogJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpfSk7XHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmZvb3RlckZha2VSb3cpLmNzcyh7aGVpZ2h0OiAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCl9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VGb2N1c2VkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChyb3c6IEludGVybmFsUm93KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZWxlbWVudClcclxuICAgICAgICAgICAgICAgICQocm93LmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtcm93XCIpO1xyXG5cclxuICAgICAgICAgICAgcm93LmNlbGxFbGVtZW50cy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbClcclxuICAgICAgICAgICAgICAgICAgICAkKGNlbGwpLnJlbW92ZUNsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtY2VsbFwiKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZm9jdXNlZFJvdyA9IHRoaXMuc3RhdGUucm93c1t0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleF07XHJcbiAgICAgICAgaWYgKGZvY3VzZWRSb3cgJiYgZm9jdXNlZFJvdy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZm9jdXNlZFJvdy5lbGVtZW50KS5hZGRDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLXJvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmb2N1c2VkQ2VsbEVsZW1lbnQgPSBmb2N1c2VkUm93LmNlbGxFbGVtZW50c1t0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoZm9jdXNlZENlbGxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKGZvY3VzZWRDZWxsRWxlbWVudCkuYWRkQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1jZWxsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb2N1c2VkQ2VsbEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdLmNlbGxFbGVtZW50c1t0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxEb3duKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvd0VsID0gJCh0aGlzLmdldEZvY3VzZWRSb3dFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgLy8g0YPRiNC70L4g0LfQsCDQv9GA0LXQtNC10LvRiyDQstC40LTQuNC80L7RgdGC0LhcclxuICAgICAgICAgICAgaWYgKHJvd0VsLnBvc2l0aW9uKCkudG9wICsgcm93RWwuaGVpZ2h0KCkgPlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgPSByb3dFbC5wb3NpdGlvbigpLnRvcCArIHJvd0VsLmhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5jbGllbnRIZWlnaHQgKyAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsTGVmdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXgtLTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbFJpZ2h0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXggPCB0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxVcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4LS07XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvd0VsID0gJCh0aGlzLmdldEZvY3VzZWRSb3dFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgLy8g0YPRiNC70L4g0LfQsCDQv9GA0LXQtNC10LvRiyDQstC40LTQuNC80L7RgdGC0LhcclxuICAgICAgICAgICAgaWYgKHJvd0VsLnBvc2l0aW9uKCkudG9wIDwgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgPSByb3dFbC5wb3NpdGlvbigpLnRvcCAtICQodGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQm9keUtleURvd24oZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gS2V5Y29kZS5Eb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsRG93bigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLlVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsVXAoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5MZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsTGVmdCgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLlJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsUmlnaHQoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5SZXNpemVTdGFydCA9IChldmVudDogTW92ZVN0YXJ0RXZlbnQsIGNvbDogSW50ZXJuYWxDb2x1bW4pOiB2b2lkID0+IHtcclxuICAgICAgICBldmVudC5iaW5kWChjb2wsIFwid2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKGNvbC5oZWFkZXJXaWR0aE5hdGl2ZUVsZW1lbnQpLmF0dHIoJ3dpZHRoJywgY29sLndpZHRoKTtcclxuICAgICAgICAgICAgJChjb2wuYm9keVdpZHRoTmF0aXZlRWxlbWVudCkuYXR0cignd2lkdGgnLCBjb2wud2lkdGgpO1xyXG4gICAgICAgICAgICAkKGNvbC5mb290ZXJXaWR0aE5hdGl2ZUVsZW1lbnQpLmF0dHIoJ3dpZHRoJywgY29sLndpZHRoKTtcclxuICAgICAgICAgICAgbGV0IHRhYmxlV2lkdGggPSB0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuaGVhZGVyVGFibGVFbGVtZW50KS5jc3MoJ3dpZHRoJywgdGFibGVXaWR0aCk7XHJcbiAgICAgICAgICAgICQodGhpcy5zdGF0ZS5ib2R5VGFibGVFbGVtZW50KS5jc3MoJ3dpZHRoJywgdGFibGVXaWR0aCk7XHJcbiAgICAgICAgICAgICQodGhpcy5zdGF0ZS5mb290ZXJUYWJsZUVsZW1lbnQpLmNzcygnd2lkdGgnLCB0YWJsZVdpZHRoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudCkuY3NzKCdtYXgtd2lkdGgnLCB0YWJsZVdpZHRoICsgZ2V0U2Nyb2xsYmFyV2lkdGgoKSArIDEpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLmhhbmRsZU9uQ2xpY2sobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlckNvbHVtbkhlYWRlcnMoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgY29sV2lkdGhzOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgbGV0IGNvbEhlYWRlcnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29sV2lkdGhzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Y29sXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17IGNvbC53aWR0aC50b1N0cmluZygpICsgXCJweFwiIH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSk9PiB7Y29sLmhlYWRlcldpZHRoTmF0aXZlRWxlbWVudD1lO30gfVxyXG4gICAgICAgICAgICAgICAgLz4pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRkU3R5bGU6IGFueSA9IHtvdmVyZmxvdzogXCJoaWRkZW5cIn07XHJcblxyXG4gICAgICAgICAgICBjb2xIZWFkZXJzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0ZFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2wuY2FwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8TW92YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOjAsIHdpZHRoOjUsIHJpZ2h0OjAsIGJvdHRvbTowLCBjdXJzb3I6XCJjb2wtcmVzaXplXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVTdGFydD17IChldmVudDogTW92ZVN0YXJ0RXZlbnQpPT57IHRoaXMuY29sdW1uUmVzaXplU3RhcnQoZXZlbnQsIGNvbCk7IGNvbnNvbGUubG9nKFwiTW92ZVN0YXJ0XCIpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgd2lkdGg6aW5kZXg9PT0wPzA6NSwgbGVmdDowLCBib3R0b206MCwgY3Vyc29yOlwiY29sLXJlc2l6ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9eyAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDRgNC10YHQsNC50LfQuNC8INC/0YDQtdC00YvQtNGD0YnRg9GOINC60L7Qu9C+0L3QutGDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uUmVzaXplU3RhcnQoZXZlbnQsIHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleC0xXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW92YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RkPik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50ID0gZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGFibGVMYXlvdXQ6IFwiZml4ZWRcIixib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpfX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5oZWFkZXJUYWJsZUVsZW1lbnQgPSBlfVxyXG5cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xXaWR0aHN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sSGVhZGVyc31cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbHVtbkZvb3RlcnMoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgY29sV2lkdGhzOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgbGV0IGNvbEZvb3RlcnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGlzRm9vdGVyRW1wdHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpPT4ge2NvbC5mb290ZXJXaWR0aE5hdGl2ZUVsZW1lbnQ9ZTt9IH1cclxuICAgICAgICAgICAgICAgIC8+KTtcclxuICAgICAgICAgICAgaWYgKGNvbC5mb290ZXIpXHJcbiAgICAgICAgICAgICAgICBpc0Zvb3RlckVtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB0ZFN0eWxlOiBhbnkgPSB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9O1xyXG4gICAgICAgICAgICBjb2xGb290ZXJzLnB1c2goPHRkIGtleT17aW5kZXh9IHN0eWxlPXt0ZFN0eWxlfT57Y29sLmZvb3Rlcn08L3RkPik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghaXNGb290ZXJFbXB0eSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOlwiYWJzb2x1dGVcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1mb290ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RhYmxlTGF5b3V0OiBcImZpeGVkXCIsYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgd2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmZvb3RlclRhYmxlRWxlbWVudCA9IGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbFdpZHRoc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sRm9vdGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcmlkQm9keSgpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBjb2xXaWR0aHM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaChcclxuICAgICAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKT0+IHtjb2wuYm9keVdpZHRoTmF0aXZlRWxlbWVudD1lO30gfVxyXG4gICAgICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1ib2R5XCJcclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsgKGUpID0+IHsgIHRoaXMuaGFuZGxlQm9keUtleURvd24oZSk7IH0gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGFibGVMYXlvdXQ6IFwiZml4ZWRcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKX19XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5ib2R5VGFibGVFbGVtZW50ID0gZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2xXaWR0aHN9XHJcbiAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5oZWFkZXJGYWtlUm93ID0gZX0+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKCl9XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjpcIm5vbmVcIiB9fSByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5mb290ZXJGYWtlUm93ID0gZX0+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNhbGNUb3RhbENvbHVtbnNXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByZXQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY29sLmhpZGRlbilcclxuICAgICAgICAgICAgICAgIHJldCArPSBjb2wud2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzOiBUcmVlR3JpZFByb3BzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGFsbG93LXRyZWUtZ3JpZFwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic2hhbGxvdy13aW4gLT4gaXNFcWlhbCA9IFwiICsgdGhpcy5pc1Byb3BzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzLCBbXCJjaGlsZHJlblwiXSkpO1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc1Byb3BzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzLCBbXCJjaGlsZHJlblwiLCBcImRhdGFTb3VyY2VcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL3RoaXMuYWRkQ2xhc3NOYW1lKFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLXRyZWUtZ3JpZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJ0cmVlLWdyaWRcIiB0eXBlPVwiY29sdW1uXCIgc2l6ZVRvPVwicGFyZW50XCIgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1oZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoIDUwMDFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZmlsdGVyRGF0YSgpOyB0aGlzLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwiZm9yY2VVcGRhdGVcIik7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZXhwYW5kQWxsKCk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmNvbGxhcHNlQWxsKCk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZSBhbGxcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICDQt9Cw0LPQvtC70L7QstC+0Log0Lgg0YIu0LQuXHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1ib2R5LXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOlwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6XCJhdXRvXCIsIGZsZXg6XCIxXCIsIG1heFdpZHRoOnRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCkrZ2V0U2Nyb2xsYmFyV2lkdGgoKSsxfX1cclxuICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGU6YW55KSA9PiB7dGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQgPSBlO319XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyR3JpZEJvZHkoKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2x1bW5IZWFkZXJzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sdW1uRm9vdGVycygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWZvb3Rlci13cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cInJvd1wiIHNpemVUbz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpcy1zbWFsbG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiaXMtc21hbGxuXCIgb25DbGljaz17dGhpcy5oYW5kbGVVcGRhdGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQt9C80LXQvdC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImlzLXNtYWxsblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpcy1zbWFsbG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktGL0LHRgNCw0YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImlzLXNtYWxsblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQvNC10L3QsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQgPlxyXG4gICAgICAgICAgICA8L0xheW91dCA+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3hcbiAqKi8iLCLvu79pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRDb2x1bW5zUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIC8vY2FwdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkQ29sdW1ucyBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZENvbHVtbnNQcm9wcywgYW55PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZWVHcmlkQ29sdW1uc1Byb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1ucy50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbi8vaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRDb2x1bW5Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgY2FwdGlvbj86IHN0cmluZztcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgZmllbGROYW1lPzogc3RyaW5nO1xyXG4gICAgc2hvd0hpZXJhcmNoeVRyZWU/OiBib29sZWFuO1xyXG4gICAgc2hvd0hpZXJhcmNoeVBhZGRpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRDb2x1bW4gZXh0ZW5kcyBDb21wb25lbnQ8VHJlZUdyaWRDb2x1bW5Qcm9wcywgYW55PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZWVHcmlkQ29sdW1uUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgLy90aGlzLnN0YXRlLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIC8vdGhpcy5hZGRDbGFzc05hbWUoXCJidG5cIik7XHJcbiAgICAgICAgLy90aGlzLnRvZ2dsZUNsYXNzTmFtZSh0aGlzLnByb3BzLmRpc2FibGVkLCBcImRpc2FibGVkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKG51bGwpO1xyXG4gICAgICAgIC8vVHJlZUdyaWQgZnJvbSB7dGhpcy5wcm9wcy5jb21waWxlcn0gYW5kIHt0aGlzLnByb3BzLmZyYW1ld29ya30hY2xpY2tDb3VudD17dGhpcy5zdGF0ZS5jbGlja0NvdW50fVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3hcbiAqKi8iLCJcclxuZXhwb3J0IHZhciBLZXljb2RlID0ge1xyXG4gICAgRXNjOiBcIkVzY2FwZVwiLFxyXG4gICAgU3BhY2U6IFwiIFwiLFxyXG5cclxuICAgIExlZnQ6IFwiQXJyb3dMZWZ0XCIsXHJcbiAgICBVcDogXCJBcnJvd1VwXCIsXHJcbiAgICBEb3duOiBcIkFycm93RG93blwiLFxyXG4gICAgUmlnaHQ6IFwiQXJyb3dSaWdodFwiLFxyXG5cclxuICAgIERlbDogXCJEZWxldGVcIixcclxuICAgIEluczogXCJJbnNlcnRcIixcclxuXHJcbiAgICBXaW46IFwiTWV0YVwiLFxyXG4gICAgTWVudTogXCJDb250ZXh0TWVudVwiLFxyXG5cclxuICAgIFNjcm9sbDogXCJTY3JvbGxMb2NrXCIsXHJcbiAgICBOdW06IFwiTnVtTG9ja1wiLFxyXG5cclxuICAgIEJhY2tzcGFjZTogXCJCYWNrc3BhY2VcIixcclxuICAgIFRhYjogXCJUYWJcIixcclxuICAgIEVudGVyOiBcIkVudGVyXCIsXHJcbiAgICBTaGlmdDogXCJTaGlmdFwiLFxyXG4gICAgQ29udHJvbDogXCJDb250cm9sXCIsXHJcbiAgICBBbHQ6IFwiQWx0XCIsXHJcbiAgICBCcmVhazogXCJQYXVzZVwiLFxyXG4gICAgQ2Fwc0xvY2s6IFwiQ2Fwc0xvY2tcIixcclxuXHJcbiAgICBQYWdlVXA6IFwiUGFnZVVwXCIsXHJcbiAgICBQYWdlRG93bjogXCJQYWdlRG93blwiLFxyXG4gICAgRW5kOiBcIkVuZFwiLFxyXG4gICAgSG9tZTogXCJIb21lXCIsXHJcblxyXG4gICAgRjE6IFwiRjFcIixcclxuICAgIEYyOiBcIkYyXCIsXHJcbiAgICBGMzogXCJGM1wiLFxyXG4gICAgRjQ6IFwiRjRcIixcclxuICAgIEY1OiBcIkY1XCIsXHJcbiAgICBGNjogXCJGNlwiLFxyXG4gICAgRjc6IFwiRjdcIixcclxuICAgIEY4OiBcIkY4XCIsXHJcbiAgICBGOTogXCJGOVwiLFxyXG4gICAgRjEwOiBcIkYxMFwiLFxyXG4gICAgRjExOiBcIkYxMVwiLFxyXG4gICAgRjEyOiBcIkYxMlwiXHJcblxyXG59O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvS2V5Q29kZS50c1xuICoqLyIsImxldCBjYWNoZVdpZHRoID0gMDtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldjogVUlFdmVudCkgPT4ge1xyXG4gICAgY2FjaGVXaWR0aCA9IDA7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc2l6ZVwiKTtcclxufSlcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XHJcbiAgICBpZiAoY2FjaGVXaWR0aCA+IDApXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlV2lkdGg7XHJcblxyXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XHJcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcclxuXHJcbiAgICB2YXIgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xyXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xyXG5cclxuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xyXG5cclxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcclxuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xyXG5cclxuICAgIGNhY2hlV2lkdGggPSB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xyXG4gICAgcmV0dXJuIGNhY2hlV2lkdGg7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9nZXRTY3JvbGxCYXJXaWR0aC50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1Zpc2libGVQbHVnaW4sIFZpc2libGVQbHVnaW5Qcm9wcywgVmlzaWJsZVBsdWdpblN0YXRlfSBmcm9tIFwiLi4vUGx1Z2lucy9WaXNpYmxlUGx1Z2luXCI7XHJcbmltcG9ydCB7T25DbGlja1BsdWdpbiwgT25DbGlja1BsdWdpblByb3BzfSBmcm9tIFwiLi4vUGx1Z2lucy9PbkNsaWNrUGx1Z2luXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wcywgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEJ1dHRvblN0YXRlPiwgVmlzaWJsZVBsdWdpblByb3BzLCBPbkNsaWNrUGx1Z2luUHJvcHMge1xyXG4gICAgdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvblN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8QnV0dG9uUHJvcHM+IGltcGxlbWVudHMgVmlzaWJsZVBsdWdpblN0YXRle1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuLy9AVmlzaWJsZVBsdWdpblxyXG4vL0BPbkNsaWNrUGx1Z2luXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQ8QnV0dG9uUHJvcHMsQnV0dG9uU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBCdXR0b25Qcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEJ1dHRvblN0YXRlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKG5ldyBWaXNpYmxlUGx1Z2luKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChuZXcgT25DbGlja1BsdWdpbih0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0J1dHRvbi50c3hcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudFBsdWdpbn0gZnJvbSBcIi4vUGx1Z2luXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaXNpYmxlUGx1Z2luUHJvcHMge1xyXG4gICAgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgICBkZWZhdWx0VmlzaWJsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlzaWJsZVBsdWdpblN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8VmlzaWJsZVBsdWdpblByb3BzPiB7XHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWaXNpYmxlUGx1Z2luIGV4dGVuZHMgQ29tcG9uZW50UGx1Z2luPFZpc2libGVQbHVnaW5Qcm9wcywgVmlzaWJsZVBsdWdpblN0YXRlPiB7XHJcbiAgICAvLyBjb25zdHJ1Y3Rvcihvd25lcjogYW55KSB7XHJcbiAgICAvLyAgICAgc3VwZXIob3duZXIpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwidmlzaWJsZSB3aWxsTW91bnQoKVwiKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy5kZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJWaXNpYmxlUGx1Z2luOiBvbmx5IG9uZSBvZiB0aGUgcHJvcGVydGllcyBtdXN0IGJlIHNwZWNpZmllZCAndmlzaWJsZScgb3IgJ2RlZmF1bHRWaXNpYmxlJ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0aGlzLnByb3BzLnZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0aGlzLnByb3BzLmRlZmF1bHRWaXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMub3duZXIudG9nZ2xlQ2xhc3NOYW1lKCF0aGlzLnN0YXRlLnZpc2libGUsIFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBWaXNpYmxlUGx1Z2luUHJvcHMpIHtcclxuICAgICAgICAvL2xldCBzdGF0ZSA9IHRoaXMub3duZXIuc3RhdGUgYXMgVmlzaWJsZVBsdWdpblN0YXRlO1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMudmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IG5leHRQcm9wcy52aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vd25lci50b2dnbGVDbGFzc05hbWUoIXRoaXMuc3RhdGUudmlzaWJsZSwgXCJpcy1oaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gVmlzaWJsZVBsdWdpbih0YXJnZXQ6IGFueSkge1xyXG4vLyAgICAgdGFyZ2V0LnBsdWdpbnMucHVzaChWaXNpYmxlUGx1Z2luQ2xhc3MpO1xyXG4vLyAgICAgcmV0dXJuIHRhcmdldDtcclxuLy8gfVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9WaXNpYmxlUGx1Z2luLnRzXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UGx1Z2luPFAsUyBleHRlbmRzIENvbXBvbmVudFN0YXRlPFA+PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG93bmVyOiBDb21wb25lbnQ8UCwgUz4pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlkTW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbE1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxVbm1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZGlkVXBkYXRlKHByZXZQcm9wczogUCwgcHJldlN0YXRlOiBTLCBwcmV2Q29udGV4dDogYW55KSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IFMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyLnN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9wcygpOiBQIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vd25lci5wcm9wcztcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL1BsdWdpbi50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFBsdWdpbn0gZnJvbSBcIi4vUGx1Z2luXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT25DbGlja1BsdWdpblByb3BzIHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9uQ2xpY2tQbHVnaW4gZXh0ZW5kcyBDb21wb25lbnRQbHVnaW48T25DbGlja1BsdWdpblByb3BzLCBhbnk+IHtcclxuXHJcbiAgICB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgdGhpcy5vd25lci5hZGRQcm9wcyh7b25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IE9uQ2xpY2tQbHVnaW5Qcm9wcykge1xyXG4gICAgICAgIHN1cGVyLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgICAgICB0aGlzLm93bmVyLmFkZFByb3BzKHtvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2t9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBPbkNsaWNrUGx1Z2luKHRhcmdldDogYW55KSB7XHJcbi8vICAgICB0YXJnZXQucGx1Z2lucy5wdXNoKE9uQ2xpY2tQbHVnaW5DbGFzcyk7XHJcbi8vICAgICByZXR1cm4gdGFyZ2V0O1xyXG4vLyB9XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9QbHVnaW5zL09uQ2xpY2tQbHVnaW4udHNcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuXHJcbmxldCBzb2NrZXQgPSBpby5jb25uZWN0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNRTChzcWw6IHN0cmluZyk6IEpRdWVyeVByb21pc2U8RGF0YVRhYmxlPiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY2FsbCBTUUwuc3FsLmV4ZWN1dGVcIik7XHJcbiAgICAvL3JldHVybiBzaWduYWxSLmV4ZWN1dGVTUUwoc3FsKTtcclxuXHJcblxyXG4gICAgbGV0IHByb21pc2U6IEpRdWVyeURlZmVycmVkPERhdGFUYWJsZT47XHJcbiAgICBwcm9taXNlID0gJC5EZWZlcnJlZDxEYXRhVGFibGU+KCk7XHJcblxyXG4gICAgLy8gIHNvY2tldC5vbmNlKCdjb25uZWN0JywoKSA9PiB7XHJcbiAgICBsZXQgcXVlcnlJZCA9IFwicXVlcnktXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcclxuICAgIHNvY2tldC5lbWl0KFwiZXhlY3V0ZVNRTFwiLCB7cXVlcnlJZCwgc3FsfSk7XHJcbiAgICBzb2NrZXQub25jZShxdWVyeUlkLCAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChyZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZGF0YVRhYmxlID0gbmV3IERhdGFUYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUNvbHVtbiA9IG5ldyBEYXRhQ29sdW1uKGRhdGFUYWJsZSwgcmVzcG9uc2UuY29sdW1uc1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5jb2x1bW5zLnB1c2goZGF0YUNvbHVtbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnJvd3MuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YVJvdyA9IG5ldyBEYXRhUm93KGRhdGFUYWJsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhVGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb2x1bW5zW2ldLnBhcnNlID09PSBcIkRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1tkYXRhVGFibGUuY29sdW1uc1tpXS5uYW1lXSA9IG5ldyBEYXRlKHJvd1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W2RhdGFUYWJsZS5jb2x1bW5zW2ldLm5hbWVdID0gcm93W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZGF0YVJvd1tpXSA9IHJvd1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhVGFibGUucm93cy5wdXNoKGRhdGFSb3cpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZGF0YVRhYmxlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAgIH0pO1xyXG5cclxuXHJcbiAgICAvL3NpZ25hbFIuZXhlY3V0ZVNRTChzcWwpLlxyXG4gICAgLy8gICAgZG9uZSgocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgIGxldCByZXMgPSBldmFsKHJlc3VsdCk7XHJcblxyXG4gICAgLy8gICAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QocmVzLmVycm9yKTtcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgIGxldCBkcyA9IG5ldyBEYXRhc2V0KCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICByZXMudGFibGVzLmZvckVhY2goKHRhYmxlKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBsZXQgZGF0YVRhYmxlID0gbmV3IERhdGFUYWJsZShkcyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBkYXRhVGFibGUubmFtZSA9IHRhYmxlLm5hbWU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBkcy50YWJsZXMucHVzaChkYXRhVGFibGUpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhQ29sdW1uID0gbmV3IERhdGFDb2x1bW4oZGF0YVRhYmxlLCB0YWJsZS5jb2x1bW5zW2ldLm5hbWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5jb2x1bW5zLnB1c2goZGF0YUNvbHVtbik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgdGFibGUucm93cy5mb3JFYWNoKChyb3cpID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFSb3cgPSBuZXcgRGF0YVJvdygpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1t0YWJsZS5jb2x1bW5zW2ldLm5hbWVdID0gcm93W2ldO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W2ldID0gcm93W2ldO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLnJvd3MucHVzaChkYXRhUm93KTtcclxuICAgIC8vICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkcylcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9KS5cclxuICAgIC8vICAgIGZhaWwoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgIHByb21pc2UucmVqZWN0KFwi0L7RiNC40LHQutCwIGNvbm5lY3Rpb24gc2lnbmFsUlwiKTtcclxuICAgIC8vICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9taXNlO1xyXG5cclxufVxyXG5cclxuLy9leHBvcnQgZW51bSBDb2x1bW5EYXRhVHlwZSB7IFN0cmluZywgTnVtYmVyLCBEYXRhIH1cclxuXHJcbi8vZXhwb3J0IHR5cGUgRGF0YVR5cGUgPSBzdHJpbmcgfCBudW1iZXI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlIHtcclxuICAgIGNvbHVtbnM6IEFycmF5PERhdGFDb2x1bW4+O1xyXG4gICAgcm93czogQXJyYXk8RGF0YVJvdz47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW107XHJcbiAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhQ29sdW1uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIC8vZGF0YVR5cGU6IENvbHVtbkRhdGFUeXBlO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRhYmxlOiBEYXRhVGFibGUsIG5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhUm93IHtcclxuICAgIFtpbmRleDogc3RyaW5nXTogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRhYmxlOiBEYXRhVGFibGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZShjb2x1bW5JbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICBpZiAoY29sdW1uSW5kZXggPCAwIHx8IGNvbHVtbkluZGV4ID49IHRoaXMudGFibGUuY29sdW1ucy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRocm93IFwiRGF0YVJvdy5nZXRWYWx1ZShcIiArIGNvbHVtbkluZGV4ICsgXCIpOiBjb2x1bW5JbmRleCBvdXQgb2YgcmFuZ2VcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnRhYmxlLmNvbHVtbnNbY29sdW1uSW5kZXhdLm5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vW2luZGV4OiBudW1iZXJdOiBEYXRhVHlwZTtcclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU1FMLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBpbztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaW9cIlxuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7U3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0xpc3RFZGl0b3J9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNxbFRhYmxlIGV4dGVuZHMgRGVzaWduZWRPYmplY3Qge1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQmNC80Y9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0JjQvNGPINGC0LDQsdC70LjRhtGLXCJcclxuICAgIH0pXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcInNxbCDQuNC80Y9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwic3FsINC40LzRjyDRgtCw0LHQu9C40YbRi1wiXHJcbiAgICB9KVxyXG5cclxuICAgIHNxbG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBATGlzdEVkaXRvcih7XHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JrQvtC70L7QvdC60LhcIlxyXG4gICAgfSlcclxuICAgIGNvbHVtbnM6IFNxbFRhYmxlQ29sdW1uW109W107XHJcblxyXG4gICAgYWRkQ29sdW1uKGluaXRDYWxsYmFjazogKG5ld0NvbHVtbjogU3FsVGFibGVDb2x1bW4pID0+IHZvaWQpIHtcclxuICAgICAgICBsZXQgY29sID0gbmV3IFNxbFRhYmxlQ29sdW1uKCk7XHJcbiAgICAgICAgY29sLnRhYmxlID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChjb2wpO1xyXG4gICAgICAgIGluaXRDYWxsYmFjayhjb2wpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcWxUYWJsZUNvbHVtbiBleHRlbmRzIERlc2lnbmVkT2JqZWN0IHtcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0JjQvNGPINC60L7Qu9C+0L3QutC4XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCY0LzRjyDQutC+0LvQvtC90LrQuFwiXHJcbiAgICB9KVxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLRgtC40L9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwic3FsINGC0LjQvyDQutC+0LvQvtC90LrQuFwiXHJcbiAgICB9KVxyXG4gICAgZGF0YVR5cGU6IHN0cmluZztcclxuXHJcbiAgICB0YWJsZTogU3FsVGFibGU7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtc3FsL1NxbFRhYmxlLnRzXG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QmFzZVByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0lucHV0VHlwZSwgSW5wdXR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge1RyZWVHcmlkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5zfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uc1wiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1ufSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RQcm9wZXJ0eUVkaXRvciBleHRlbmRzIEJhc2VQcm9wZXJ0eUVkaXRvciB7XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkge1xyXG4gICAgICAgLy8gdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0gPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWU7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZSA9PT0gXCIgKyB0aGlzLnByb3BzLnByb3BlcnR5TmFtZSArIFwiIFwiICsgdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBhdXRvRm9ybUNvbnRyb2xQcm9wczogQXV0b0Zvcm1Db250cm9sUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2FwdGlvbjogdGhpcy5wcm9wcy5pbnB1dENhcHRpb24sXHJcbiAgICAgICAgICAgIGlucHV0VGFiOiB0aGlzLnByb3BzLmlucHV0VGFiLFxyXG4gICAgICAgICAgICBpbnB1dEdyb3VwOiB0aGlzLnByb3BzLmlucHV0R3JvdXAsXHJcbiAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb246IHRoaXMucHJvcHMuaW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoYXV0b0Zvcm1Db250cm9sUHJvcHMpO1xyXG5cclxuICAgICAgICAvLyByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgICA8SW5wdXRcclxuICAgICAgICAvLyAgICAgICAgIHR5cGU9e0lucHV0VHlwZS5UZXh0fVxyXG4gICAgICAgIC8vICAgICAgICAgYmluZE9iamVjdD17dGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdH1cclxuICAgICAgICAvLyAgICAgICAgIGJpbmRQcm9wTmFtZT17dGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWV9XHJcbiAgICAgICAgLy8gICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAvLyAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgLy8gICAgIC8+XHJcbiAgICAgICAgLy8gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXsgdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0gfVxyXG4gICAgICAgICAgICAgICAgdHJlZU1vZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW5zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JjQvNGPINC60L7Qu9C+0L3QutC4XCIgZmllbGROYW1lPVwibmFtZVwiIHdpZHRoPXsxMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQotC40L8g0LTQsNC90L3Ri9GFXCIgZmllbGROYW1lPVwiZGF0YVR5cGVcIiB3aWR0aD17MTUwfT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPC9UcmVlR3JpZENvbHVtbnM+XHJcbiAgICAgICAgICAgIDwvVHJlZUdyaWQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEVkaXRvclBhcmFtcyBleHRlbmRzIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0RWRpdG9yKHBhcmFtczogTGlzdEVkaXRvclBhcmFtcyk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcih7XHJcbiAgICAgICAgICAgIGlucHV0Q2FwdGlvbjogcGFyYW1zLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHBhcmFtcy5pbnB1dFRhYixcclxuICAgICAgICAgICAgaW5wdXRHcm91cDogcGFyYW1zLmlucHV0R3JvdXAsXHJcbiAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb246IHBhcmFtcy5pbnB1dERlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogdGFyZ2V0LmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBlZGl0b3JUeXBlOiBMaXN0UHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0xpc3RQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9