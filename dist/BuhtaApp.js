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
	        var win2 = React.createElement(AutoForm_1.AutoForm, null, React.createElement(Input_1.Input, {type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), React.createElement(Input_1.Input, {inputTab: "параметры1", inputCaption: "eee1", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), React.createElement(Input_1.Input, {inputTab: "параметры1", inputCaption: "eee2", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), React.createElement(Input_1.Input, {inputTab: "параметры1", inputCaption: "eee3", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}), React.createElement(Input_1.Input, {inputTab: "параметры2", inputCaption: "eee4", type: Input_1.InputType.Text, bindObject: this, bindPropName: "str"}));
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
	            var win2 = React.createElement(TreeGrid_1.TreeGrid, {dataSource: dataSource, treeMode: true, hierarchyFieldName: "Номер", hierarchyDelimiters: ".", autoExpandNodesToLevel: 0, style: { margin: 5 }}, React.createElement(TreeGridColumns_1.TreeGridColumns, null, React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Колонка2", fieldName: "Номер", showHierarchyTree: false, width: 100}), React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Колонка3", fieldName: "Название", showHierarchyTree: true, width: 200}), React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Колонка1", fieldName: "Ключ", width: 80})));
	            var openParam = {
	                title: "auto form",
	                top: 10,
	                left: 10
	            };
	            App_1.appInstance.desktop.openWindow(win2, openParam);
	        })
	            .fail(function (err) {
	            alert(err.message);
	        });
	    };
	    AppDesigner.prototype.testFlex = function () {
	        var win2 = React.createElement("div", {style: { display: "flex", flexDirection: "column", border: "2px dotted red", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}, React.createElement("div", {style: { border: "2px dotted blue" }}, React.createElement(Button_1.Button, null, "Один")), React.createElement("div", {style: { border: "2px dotted green", flex: "1 1 auto" }}, React.createElement("div", {style: { display: "flex", flexDirection: "column", border: "1px solid red", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}, React.createElement("div", {style: { border: "1px solid blue" }}, React.createElement(Button_1.Button, null, "------Один")), React.createElement("div", {style: { border: "1px solid green", flex: "1 1 auto", overflow: "auto" }}, React.createElement("div", {style: {}}, React.createElement(Button_1.Button, null, "-------Два"), React.createElement("br", null), React.createElement(Button_1.Button, null, "--------Два1"))), React.createElement("div", {style: { border: "1px solid maroon" }}, React.createElement(Button_1.Button, null, "--------Три"))), ";"), React.createElement("div", {style: { border: "2px dotted maroon" }}, React.createElement(Button_1.Button, null, "Три")));
	        var openParam = {
	            title: "test FLEX",
	            top: 10,
	            left: 10
	        };
	        App_1.appInstance.desktop.openWindow(win2, openParam);
	    };
	    AppDesigner.prototype.render = function () {
	        var _this = this;
	        this.addClassName("app-designer");
	        return (React.createElement(App_1.App, React.__spread({}, this.getRenderProps()), React.createElement(Layout_1.Layout, {sizeTo: "parent", type: "column"}, React.createElement(Fixed_1.Fixed, {className: "header1"}, "Fixed Header"), React.createElement(Flex_1.Flex, null, React.createElement(Layout_1.Layout, {type: "row", sizeTo: "parent"}, React.createElement(Fixed_1.Fixed, {className: "sidebar", style: { width: this.sideWidth }}, "Fixed Sidebar 123", React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testOpenWindow(); }}, " test open window"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testOpenObjectDesigner(); }}, "open designer"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testImmutable(); }}, "testImmutable"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testAutoForm(); }}, "test autoform"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testGrid(); }}, "test GRID"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testFlex(); }}, "test FLEX")), React.createElement(Flex_1.Flex, {className: "XXXcontent"}, React.createElement(Desktop_1.Desktop, null, React.createElement(Movable_1.Movable, {onMoveStart: this.moveStart.bind(this)}, "MOV"))))))));
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
	        if (this.props.sizeTo === "parent") {
	            var style = {
	                display: "flex",
	                position: "absolute",
	                left: 0,
	                right: 0,
	                top: 0,
	                bottom: 0,
	            };
	            style.flexDirection = this.props.type;
	            this.addStyles(style);
	        }
	        else {
	            var style = {
	                display: "flex",
	                position: "relative",
	            };
	            style.flexDirection = this.props.type;
	            this.addStyles(style);
	        }
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
	            position: "relative"
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
	        this.props = props;
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
	        return (React.createElement(AutoForm_1.AutoForm, React.__spread({}, this.getRenderProps()), "Object designer", this.renderPropertyDesigners()));
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
	        return React.createElement(Form_1.Form, null, this.getTabInputs(tab));
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
	            return (React.createElement(Tabs_1.Tabs, {onWillMount: function (state) { console.log("onWillMount-auto-form-tabs"); }, onChangeActiveTab: function (state, tab) { console.log("setActiveTab"); console.log(tab); }}, tabs.map(function (tab, index) {
	                return (React.createElement(Tabs_1.Tab, {key: index, title: tab === "" ? emptyTabName : tab}, _this.renderTab(tab)));
	            })));
	        }
	    };
	    AutoForm.prototype.render = function () {
	        this.addClassName("auto-form");
	        console.log("render-auto-form");
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
	        var list = [];
	        this.state.tabs.forEach(function (tabInfo, index) {
	            var className = !tabInfo.isActive ? "is-hidden" : null;
	            var element = React.createElement("div", {className: className, key: index}, tabInfo.content);
	            list.push(element);
	        });
	        return (React.createElement("div", {ref: true}, list));
	    };
	    Tabs.prototype.render = function () {
	        var _this = this;
	        this.addStyles({ height: "100%" });
	        this.addStyles({ position: "relative", overflow: "auto" });
	        return (React.createElement(Layout_1.Layout, React.__spread({type: "column", ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), React.createElement(Fixed_1.Fixed, null, this.renderTabs()), React.createElement(Flex_1.Flex, null, this.renderPanels())));
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
	        this.addStyles({ height: "100%", width: "inherit" });
	        return (React.createElement("table", React.__spread({ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), React.createElement("tbody", null, this.renderControls())));
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
	        this.state.windows.push(newWin);
	        this.forceUpdate();
	    };
	    ;
	    Desktop.prototype.activateWindow = function (id) {
	        var win = this.getWindowById(id);
	        if (win) {
	            _.pull(this.state.windows, win);
	            this.state.windows.push(win);
	            this.forceUpdate();
	        }
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
	        this.forceUpdate();
	    };
	    Desktop.prototype.render = function () {
	        var _this = this;
	        this.addClassName("desktop");
	        this.addStyles({ height: "100%" });
	        this.addStyles({ position: "relative", overflow: "auto" });
	        return (React.createElement("div", React.__spread({ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), this.state.windows.map(function (w, index) {
	            console.log("render-desktop-win");
	            return (React.createElement(Window_1.Window, {key: w.id, id: w.id, title: w.title, top: w.top, left: w.left, width: w.width, height: w.height, right: w.right, bottom: w.bottom, onActivate: _this.handleActivate, onClose: _this.handleClose}, w.content));
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps()), "Buhta App!", this.props.children));
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
	            // всегда false, потому что менять props окна может только desktop,
	            // а таких случаях содержимое окна менять не надо
	            return false;
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
	    };
	    Window.prototype.willMount = function () {
	        this.createInitState();
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
	        return (React.createElement("div", React.__spread({className: "window"}, this.getRenderProps(), {ref: function (e) { _this.nativeElement = e; }, onClick: this.handleOnClick}), React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent"}, React.createElement(Fixed_1.Fixed, null, React.createElement(Fixed_1.Fixed, {className: "window-header", style: { borderRadius: "5px 5px 0px 0px", position: "relative", paddingLeft: 10 }}, React.createElement("span", {className: "window-title"}, this.props.title), React.createElement(Layout_1.Layout, {type: "row", sizeTo: "parent"}, React.createElement(Flex_1.Flex, null, React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, onMoveStart: this.moveStart})), React.createElement(Fixed_1.Fixed, null, React.createElement("p", {className: "control has-addons buttons-bar", style: { paddingTop: 2, paddingRight: 4 }}, React.createElement("a", {className: "button is-small minimize-button", style: headerButtonStyle}, React.createElement("span", {className: "icon is-small ", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-minus", style: { top: 3 }}))), React.createElement("a", {className: "button is-small maximize-button", style: headerButtonStyle}, React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-square-o", style: { fontWeight: "bold" }}))), React.createElement("a", {className: "button is-small close-button", style: headerButtonStyle, onClick: this.handleCloseButtonClick}, React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-close", style: { top: -1 }})))))))), React.createElement(Flex_1.Flex, {style: { overflow: "initial" }}, React.createElement("div", {className: "window-body", style: { height: "100%" }}, this.props.children), React.createElement(Movable_1.Movable, {className: "window-resizer", style: { position: "absolute", height: 10, width: 10, right: 0, bottom: 0, borderRadius: "0 0 5px 0", cursor: "se-resize" }, onMoveStart: this.resizeRightBottomCornerStart})))));
	    };
	    return Window;
	}(Component_1.Component));
	exports.Window = Window;


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
	        return (React.createElement("table", {className: "tree-grid-body", tabIndex: 0, onKeyDown: function (e) { _this.handleBodyKeyDown(e); }, style: { tableLayout: "fixed", borderCollapse: "collapse", position: "relative", width: this.calcTotalColumnsWidth() }, ref: function (e) { return _this.state.bodyTableElement = e; }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {ref: function (e) { return _this.state.headerFakeRow = e; }})), this.renderRows(), React.createElement("tr", null, React.createElement("td", {ref: function (e) { return _this.state.footerFakeRow = e; }})))));
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
	        return (React.createElement(Layout_1.Layout, React.__spread({className: "tree-grid", type: "column", sizeTo: "parent"}, this.getRenderProps()), React.createElement(Fixed_1.Fixed, {className: "tree-grid-header-wrapper"}, React.createElement("button", {onClick: function () { }}, "refresh 5001"), React.createElement("button", {onClick: function () { _this.filterData(); _this.forceUpdate(); console.log("forceUpdate"); }}, "filter"), React.createElement("button", {onClick: function () { _this.expandAll(); }}, "expand all"), React.createElement("button", {onClick: function () { _this.collapseAll(); }}, "collapse all"), "заголовок и т.д."), React.createElement("div", {className: "tree-grid-body-wrapper", style: { position: "relative", overflow: "auto", flex: "1 1 100%", maxWidth: this.calcTotalColumnsWidth() + getScrollBarWidth_1.getScrollbarWidth() + 1 }, onScroll: this.handleScroll.bind(this), ref: function (e) { _this.state.bodyWrapperElement = e; }}, React.createElement("div", null, this.renderGridBody(), this.renderColumnHeaders(), this.renderColumnFooters())), React.createElement(Fixed_1.Fixed, {className: "tree-grid-footer-wrapper"}, React.createElement(Layout_1.Layout, {type: "row", sizeTo: "content"}, React.createElement(Fixed_1.Fixed, null, React.createElement(Button_1.Button, {className: "is-smalln"}, "Добавить"), React.createElement(Button_1.Button, {className: "is-smalln"}, "Изменить"), React.createElement(Button_1.Button, {className: "is-smalln"}, "Удалить")), React.createElement(Flex_1.Flex, null), React.createElement(Fixed_1.Fixed, null, React.createElement(Button_1.Button, {className: "is-smalln"}, "Выбрать"), React.createElement(Button_1.Button, {className: "is-smalln"}, "Отмена"))))));
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTA2OTJiOTBhYjc4ZmRkMDZlMTkiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Rlc2t0b3AvRGVza3RvcC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9XaW5kb3cvV2luZG93LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGUudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0tleUNvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL2dldFNjcm9sbEJhcldpZHRoLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvVmlzaWJsZVBsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvT25DbGlja1BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvU1FMLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlvXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLEtBQVksS0FBSyx1QkFBTSxDQUFPLENBQUM7QUFDL0IsS0FBWSxRQUFRLHVCQUFNLENBQVcsQ0FBQztBQUl0Qyx5Q0FBMEIsQ0FBK0MsQ0FBQztBQUMxRSw4Q0FBK0IsQ0FBMkIsQ0FBQztB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aUNBQWlDO0tBQ2pDLFdBQVc7S0FDWCxTQUFTO0tBQ1Qsa0JBQWtCO0tBQ2xCLHNEQUFzRDtLQUN0RCxTQUFTO0tBRVQsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUVuQixFQUFDO0FBekZlLG1CQUFVLGFBeUZ6QjtBQUVELHNEQUFxRDtBQUVyRCwwQ0FBeUM7QUFFekM7S0FJSTtTQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0tBQ25CLENBQUM7S0FDTCxnQkFBQztBQUFELEVBQUM7QUFSWSxrQkFBUyxZQVFyQjtBQUVEO0tBRUksMkJBQTJCO0tBQzNCLG9CQUFtQixLQUFnQixFQUFFLElBQWE7U0FBL0IsVUFBSyxHQUFMLEtBQUssQ0FBVztTQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUVyQixDQUFDO0tBQ0wsaUJBQUM7QUFBRCxFQUFDO0FBUFksbUJBQVUsYUFPdEI7QUFHRDtLQUVJLGlCQUFtQixLQUFnQjtTQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO0tBQ25DLENBQUM7S0FFRCwwQkFBUSxHQUFSLFVBQVMsV0FBbUI7U0FDeEIsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzVELE1BQU0sbUJBQW1CLEdBQUcsV0FBVyxHQUFHLDZCQUE2QixDQUFDO1NBRTVFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xELENBQUM7S0FHTCxjQUFDO0FBQUQsRUFBQztBQWJZLGdCQUFPLFVBYW5COzs7Ozs7O0FDcklELHFCIiwiZmlsZSI6Ii4vZGlzdC9CdWh0YUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMTA2OTJiOTBhYjc4ZmRkMDZlMTlcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgSGVsbG8gfSBmcm9tIFwiLi9IZWxsb1Byb3BzXCI7XHJcbmltcG9ydCB7QXBwfSBmcm9tIFwiLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0FwcFwiO1xyXG5pbXBvcnQge0FwcERlc2lnbmVyfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0FwcERlc2lnbmVyL0FwcERlc2lnbmVyXCI7XHJcbmltcG9ydCB7VGVzdEJ1aHRhT2JqZWN0MX0gZnJvbSBcIi4uL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDFcIjtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICAgIDxIZWxsbyBjb21waWxlcj1cIlR5cGVTY3JpcHRcIiBmcmFtZXdvcms9XCJSZWFjdFwiIC8+LFxyXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpXHJcbi8vICk7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoXHJcbi8vICAgICA8QXBwLz4sXHJcbi8vICAgICBkb2N1bWVudC5ib2R5XHJcbi8vICk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8QXBwRGVzaWduZXIvPixcclxuICAgIGRvY3VtZW50LmJvZHlcclxuKTtcclxuXHJcblxyXG5sZXQgeHh4PW5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcbmxldCB4eHgxPW5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GbGV4XCI7XHJcblxyXG5pbXBvcnQge1Rlc3RCdWh0YU9iamVjdDF9IGZyb20gXCIuLi8uLi9UZXN0MS90ZXN0QnVodGFPYmplY3QxXCI7XHJcbmltcG9ydCB7T2JqZWN0RGVzaWduZXJ9IGZyb20gXCIuLi9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lclwiO1xyXG5pbXBvcnQge0Rlc2t0b3AsIE9wZW5XaW5kb3dQYXJhbXN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCB7RHJhZ2dhYmxlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0RyYWdnYWJsZS9EcmFnZ2FibGVcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlRXZlbnQsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge0FwcCwgYXBwSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7V2luZG93fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHtJbnB1dCwgSW5wdXRUeXBlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7SW5wdXREaXZpZGVyfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0RGl2aWRlci9JbnB1dERpdmlkZXJcIjtcclxuaW1wb3J0IHt0ZXN0QnVodGFPYmplY3QyfSBmcm9tIFwiLi4vLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MlwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtBdXRvRm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge1RyZWVHcmlkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW59IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbnN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zXCI7XHJcbmltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGVzaWduZXJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcERlc2lnbmVyU3RhdGU+IHtcclxuICAgIC8vdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgQXBwRGVzaWduZXJTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPEFwcERlc2lnbmVyUHJvcHM+IHtcclxuICAgIC8vdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcERlc2lnbmVyIGV4dGVuZHMgQ29tcG9uZW50PEFwcERlc2lnbmVyUHJvcHMsIEFwcERlc2lnbmVyU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBcHBEZXNpZ25lclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwRGVzaWduZXJTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gaW5pdFRlc3QoKSB7XHJcbiAgICAvLyAgICAgdGhpcy50ZXN0T2JqZWN0Lm5hbWUgPSBcItCi0LXRgdGC0L7QstGL0Lkg0L7QsdGK0LXQutGCMVwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIG1vdmVTdGFydChlOiBNb3ZlU3RhcnRFdmVudCkge1xyXG4gICAgICAgIGUuYmluZFgodGhpcywgXCJzaWRlV2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNpZGVXaWR0aDogbnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHRlc3RPcGVuV2luZG93KCkge1xyXG5cclxuICAgICAgICAvLyBsZXQgb2JqID0ge1xyXG4gICAgICAgIC8vICAgICDQpNCw0LzQuNC70LjRjzogXCLQodCw0LLRh9C10L3QutC+0LJcIixcclxuICAgICAgICAvLyAgICAg0JjQvNGPOiBcItCa0L7QvdGB0YLQsNC90YLQuNC9XCIsXHJcbiAgICAgICAgLy8gICAgINCe0YLRh9C10YHRgtCy0L46IFwi0JLQu9Cw0LTQuNC80LjRgNC+0LLQuNGHXCJcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IHdpbiA9XHJcbiAgICAgICAgLy8gICAgIDxUYWJzPlxyXG4gICAgICAgIC8vICAgICAgICAgPFRhYiB0aXRsZT1cItC30LDQutC70LDQtNC60LAgMVwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXQgY2FwdGlvbj1cItCk0LDQvNC40LvQuNGPXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0KTQsNC80LjQu9C40Y9cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dCBjYXB0aW9uPVwi0JjQvNGPXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0JjQvNGPXCIvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXREaXZpZGVyIHRpdGxlPVwi0LAg0YLQtdC/0LXRgNGMINC+0YLRh9C10YHRgtCy0L5cIj48L0lucHV0RGl2aWRlcj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXtvYmp9IGJpbmRQcm9wTmFtZT1cItCe0YLRh9C10YHRgtCy0L5cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIC8vICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgLy8gICAgICAgICA8VGFiIHRpdGxlPVwi0LfQsNC60LvQsNC00LrQsCAyXCI+IDIyMjIyIDwvVGFiPlxyXG4gICAgICAgIC8vICAgICA8L1RhYnM+O1xyXG4gICAgICAgIC8vIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGVzdE9wZW5PYmplY3REZXNpZ25lcigpIHtcclxuICAgICAgICBsZXQgdGVzdE9iamVjdDogVGVzdEJ1aHRhT2JqZWN0MSA9IG5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcbiAgICAgICAgdGVzdE9iamVjdC5maXJzdE5hbWUgPSBcItCY0LPQvtGA0YwwXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdC5sYXN0TmFtZSA9IFwi0KHQuNC00L7RgNC10L3QutC+MFwiO1xyXG4gICAgICAgIHRlc3RPYmplY3Quc3VyTmFtZSA9IFwi0J7Qu9C10LPQvtCy0LjRhzBcIjtcclxuXHJcbi8vICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyIG9uQ2hhbmdlPXsoKT0+eyB3aW4ySW5zdGFuY2UuZGVzaWduZWRPYmplY3Q9bnVsbDsgd2luMkluc3RhbmNlLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwidGVzdDMyMy1jaGFuZ2VcIil9fSBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdH0ga2V5PVwiMVwiPiA8L09iamVjdERlc2lnbmVyPjtcclxuICAgICAgICBsZXQgd2luID0gPE9iamVjdERlc2lnbmVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+eyB0ZXN0T2JqZWN0PV8uY2xvbmVEZWVwKHRlc3RPYmplY3QpOyAgd2luMkluc3RhbmNlLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwidGVzdDk5OS1jaGFuZ2VcIil9fVxyXG4gICAgICAgICAgICBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdH0ga2V5PVwiMVwiPiA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgbGV0IHRlc3RPYmplY3QyOiB0ZXN0QnVodGFPYmplY3QyID0gbmV3IHRlc3RCdWh0YU9iamVjdDIoKTtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5maXJzdE5hbWUgPSBcItCY0LPQvtGA0YwxXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdDIubGFzdE5hbWUgPSBcItCh0LjQtNC+0YDQtdC90LrQvjJcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5zdXJOYW1lID0gXCLQntC70LXQs9C+0LLQuNGHMVwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLnNleCA9IFwi0LzRg9C20YHQutC+0LlcIjtcclxuXHJcbiAgICAgICAgbGV0IHdpbjJJbnN0YW5jZTogYW55O1xyXG5cclxuICAgICAgICBsZXQgd2luMiA9IDxPYmplY3REZXNpZ25lciByZWY9eyAoZTphbnkpID0+IHsgd2luMkluc3RhbmNlID0gZTsgfSB9IGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCI+XHJcbiAgICAgICAgPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgIC8vZ2V0UHJvcGVydHlFZGl0b3JzKHRlc3RPYmplY3QpO1xyXG4gICAgICAgIC8vZ2V0UHJvcGVydHlFZGl0b3JzKHRlc3RPYmplY3QyKTtcclxuXHJcbiAgICAgICAgbGV0IHdpbndpbiA9IDxkaXY+e3dpbn17d2luMn08L2Rpdj47XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcItC+0LrQvdC+IDFcIixcclxuICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgbGVmdDogNTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2lud2luLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHRlc3RJbW11dGFibGUoKSB7XHJcbiAgICAgICAgLy8gLy9sZXQgZmFrZT1uZXcgVGFibGUoW10pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc3QgeHh4ID0gSW1tdXRhYmxlLk1hcDxzdHJpbmcsIG51bWJlcj4oKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBvYmogPSB7XHJcbiAgICAgICAgLy8gICAgIG5hbWU6IFwi0J7Qs9Cw0L3QuNC30LDRhtC40Y9cIixcclxuICAgICAgICAvLyAgICAgY29sdW1uczoge1wi0J3QvtC80LXRgFwiOiB7Y29sTmFtZTogXCLQndC+0LzQtdGAXCIsIHR5cGU6IFwic3RyaW5nXCJ9LCBcItCd0LDQt9Cy0LDQvdC40LVcIjoge2NvbE5hbWU6IFwi0J3QsNC30LLQsNC90LjQtVwiLCB0eXBlOiBcInN0cmluZ1wifX1cclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IG9iakkgPSBJbW11dGFibGUuZnJvbUpTKG9iaik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAvL2xldCBtID0gSW1tdXRhYmxlLk1hcDxzdHJpbmcsbnVtYmVyfCBJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+PigpO1xyXG4gICAgICAgIC8vIC8vbGV0IHggPSBtLnNldChcIjEzeXl0MzMzMzMyXCIsIDEyKTtcclxuICAgICAgICAvLyAvL2xldCB5ID0gbS5zZXQoXCJ4eHhcIiwgSW1tdXRhYmxlLk1hcDxudW1iZXIsc3RyaW5nPigpKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIC8vbGV0IHk9bS51cGRhdGUoXCJ4eHhcIixJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+KCkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2JqSS50b1N0cmluZygpKTtcclxuICAgICAgICAvLyBsZXQgeCA9IG9iakkuZ2V0SW4oWydjb2x1bW5zJywgJ9Cd0L7QvNC10YAnLCAnY29sTmFtZSddKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh4KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHN0cjogc3RyaW5nID0gXCLQv9GA0LjQstC10YJcIjtcclxuXHJcbiAgICB0ZXN0QXV0b0Zvcm0oKSB7XHJcbiAgICAgICAgbGV0IHdpbjIgPVxyXG4gICAgICAgICAgICA8QXV0b0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9IGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizFcIiBpbnB1dENhcHRpb249XCJlZWUxXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMVwiIGlucHV0Q2FwdGlvbj1cImVlZTJcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsxXCIgaW5wdXRDYXB0aW9uPVwiZWVlM1wiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizJcIiBpbnB1dENhcHRpb249XCJlZWU0XCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICA8L0F1dG9Gb3JtPjtcclxuLy8gICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRi1wiIGlucHV0Q2FwdGlvbj1cImVlZVwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfSBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcblxyXG4gICAgICAgIGxldCBvcGVuUGFyYW06IE9wZW5XaW5kb3dQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcImF1dG8gZm9ybVwiLFxyXG4gICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICBsZWZ0OiAxMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZXN0R3JpZCgpIHtcclxuICAgICAgICBleGVjdXRlU1FMKFwic2VsZWN0IFRPUCA1MDAwINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQndC+0LzQtdGAXCIpXHJcbiAgICAgICAgICAgIC5kb25lKCh0YWJsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSB0YWJsZS5yb3dzLm1hcCgocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB70JrQu9GO0Yc6IHJbXCLQmtC70Y7Rh1wiXSwg0J3QvtC80LXRgDogcltcItCd0L7QvNC10YBcIl0sINCd0LDQt9Cy0LDQvdC40LU6IHJbXCLQndCw0LfQstCw0L3QuNC1XCJdfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IFRPUCA1MDAwINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQndC+0LzQtdGAID0+XCIgKyB0YWJsZS5yb3dzWzBdLmdldFZhbHVlKDEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9eyBkYXRhU291cmNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlZU1vZGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeUZpZWxkTmFtZT1cItCd0L7QvNC10YBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOjV9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JrQvtC70L7QvdC60LAyXCIgZmllbGROYW1lPVwi0J3QvtC80LXRgFwiIHNob3dIaWVyYXJjaHlUcmVlPXtmYWxzZX0gd2lkdGg9ezEwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQmtC+0LvQvtC90LrQsDNcIiBmaWVsZE5hbWU9XCLQndCw0LfQstCw0L3QuNC1XCIgc2hvd0hpZXJhcmNoeVRyZWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQmtC+0LvQvtC90LrQsDFcIiBmaWVsZE5hbWU9XCLQmtC70Y7Rh1wiIHdpZHRoPXs4MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1ucz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkPjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcImF1dG8gZm9ybVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRlc3RGbGV4KCkge1xyXG4gICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCAgYm9yZGVyOlwiMnB4IGRvdHRlZCByZWRcIiwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgbGVmdDowLHJpZ2h0OjAsIGJvdHRvbTowIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6XCIycHggZG90dGVkIGJsdWVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPtCe0LTQuNC9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOlwiMnB4IGRvdHRlZCBncmVlblwiLGZsZXg6XCIxIDEgYXV0b1wiIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgIGJvcmRlcjpcIjFweCBzb2xpZCByZWRcIiwgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgbGVmdDowLHJpZ2h0OjAsIGJvdHRvbTowIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCBibHVlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPi0tLS0tLdCe0LTQuNC9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjpcIjFweCBzb2xpZCBncmVlblwiLGZsZXg6XCIxIDEgYXV0b1wiICwgb3ZlcmZsb3c6XCJhdXRvXCIgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPi0tLS0tLS3QlNCy0LA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+LS0tLS0tLS3QlNCy0LAxPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6XCIxcHggc29saWQgbWFyb29uXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPi0tLS0tLS0t0KLRgNC4PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjpcIjJweCBkb3R0ZWQgbWFyb29uXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7QotGA0Lg8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwidGVzdCBGTEVYXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDEwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImFwcC1kZXNpZ25lclwiKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IHNpemVUbz1cInBhcmVudFwiIHR5cGU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwiaGVhZGVyMVwiPkZpeGVkIEhlYWRlcjwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cInJvd1wiIHNpemVUbz1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cInNpZGViYXJcIiBzdHlsZT17e3dpZHRoOnRoaXMuc2lkZVdpZHRofX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRml4ZWQgU2lkZWJhciAxMjM8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RPcGVuV2luZG93KCk7IH19PiB0ZXN0IG9wZW4gd2luZG93PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0T3Blbk9iamVjdERlc2lnbmVyKCk7IH19Pm9wZW4gZGVzaWduZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RJbW11dGFibGUoKTsgfX0+dGVzdEltbXV0YWJsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEF1dG9Gb3JtKCk7IH19PnRlc3QgYXV0b2Zvcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RHcmlkKCk7IH19PnRlc3QgR1JJRDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEZsZXgoKTsgfX0+dGVzdCBGTEVYPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwiWFhYY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92YWJsZSBvbk1vdmVTdGFydD17dGhpcy5tb3ZlU3RhcnQuYmluZCh0aGlzKX0+TU9WPC9Nb3ZhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0FwcD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgc2hhbGxvd0NvbXBhcmUgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZVwiKTtcclxuaW1wb3J0IHtDb21wb25lbnRQbHVnaW59IGZyb20gXCIuLi9QbHVnaW5zL1BsdWdpblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBYT25DbGlja1Byb3BzIHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50UHJvcHM8Uz4gZXh0ZW5kcyBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8RWxlbWVudD4ge1xyXG4gICAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG4gICAgb25XaWxsTW91bnQ/OiAoc3RhdGU6IFMpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U3RhdGU8UD4ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogQ29tcG9uZW50PFAsYW55Pikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3JjZVVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8vY2xpY2tDb3VudDogbnVtYmVyO1xyXG4gICAgLy8gc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50PFAgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxTPiwgUyBleHRlbmRzIENvbXBvbmVudFN0YXRlPFA+PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQLCBTPiB7XHJcblxyXG4gICAgcGx1Z2luczogQ29tcG9uZW50UGx1Z2luPGFueSxhbnk+W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUCwgY29udGV4dDogYW55IC8qc3RhdGVDbGFzcz86IEZ1bmN0aW9uKi8pIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIC8vIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGxldCBwbHVnSW5zdGFuY2U6IGFueSA9IG5ldyBwbHVnKHRoaXMpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsdWdpbnMucHVzaChwbHVnSW5zdGFuY2UpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2xhc3Nlczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgcmVuZGVyUHJvcHM6IGFueSA9IHt9O1xyXG4gICAgcHJpdmF0ZSByZW5kZXJTdHlsZXM6IGFueSA9IHt9O1xyXG5cclxuICAgIGFkZFByb3BzKHByb3BzOiBPYmplY3QpIHtcclxuICAgICAgICBfLmFzc2lnbldpdGgodGhpcy5yZW5kZXJQcm9wcywgcHJvcHMsIChvYmplY3RWYWx1ZTogYW55LCBzb3VyY2VWYWx1ZTogYW55LCBrZXk/OiBzdHJpbmcpPT4ge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcImNsYXNzXCIgfHwga2V5ID09PSBcImNsYXNzTmFtZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImludmFsaWQgcHJvcGVydHkgJ1wiICsga2V5ICsgXCInLCB1c2UgZnVuY3Rpb25zIGFkZENsYXNzTmFtZSgpLCB0b2dnbGVDbGFzc05hbWUoKVwiKTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJzdHlsZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImludmFsaWQgcHJvcGVydHkgJ1wiICsga2V5ICsgXCInLCB1c2UgZnVuY3Rpb25zIGFkZFN0eWxlcygpLCByZW1vdmVTdHlsZSgpXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlVmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3R5bGVzKHN0eWxlczogT2JqZWN0KSB7XHJcbiAgICAgICAgXy5hc3NpZ24odGhpcy5yZW5kZXJTdHlsZXMsIHN0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTdHlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTdHlsZXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucmVuZGVyU3R5bGVzW3N0eWxlXTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdHlsZXMoc3R5bGVzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKChzdHlsZSk9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlbmRlclN0eWxlc1tzdHlsZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcuZGlkTW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlkTW91bnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxNb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2lsbE1vdW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25XaWxsTW91bnQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25XaWxsTW91bnQodGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzOiBQKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc1Byb3BzRXF1YWwob2JqMTogYW55LCBvYmoyOiBhbnksIGV4Y2x1ZGVQcm9wcz86IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIC8vTG9vcCB0aHJvdWdoIHByb3BlcnRpZXMgaW4gb2JqZWN0IDFcclxuICAgICAgICBmb3IgKGxldCBwIGluIG9iajEpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChleGNsdWRlUHJvcHMgJiYgZXhjbHVkZVByb3BzLmluZGV4T2YocCkgPj0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAvL0NoZWNrIHByb3BlcnR5IGV4aXN0cyBvbiBib3RoIG9iamVjdHNcclxuICAgICAgICAgICAgaWYgKG9iajEuaGFzT3duUHJvcGVydHkocCkgIT09IG9iajIuaGFzT3duUHJvcGVydHkocCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvYmoxW3BdICE9PSBvYmoyW3BdKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMSBub3QgZXF1YWwgXCIgKyBwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHN3aXRjaCAodHlwZW9mIChvYmoxW3BdKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy9EZWVwIGNvbXBhcmUgb2JqZWN0c1xyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoIU9iamVjdC5jb21wYXJlKG9iajFbcF0sIG9iajJbcF0pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICAvL0NvbXBhcmUgZnVuY3Rpb24gY29kZVxyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnZnVuY3Rpb24nOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmICh0eXBlb2YgKG9iajJbcF0pID09ICd1bmRlZmluZWQnIHx8IChwICE9ICdjb21wYXJlJyAmJiBvYmoxW3BdLnRvU3RyaW5nKCkgIT0gb2JqMltwXS50b1N0cmluZygpKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgLy9Db21wYXJlIHZhbHVlc1xyXG4gICAgICAgICAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAob2JqMVtwXSAhPT0gb2JqMltwXSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0NoZWNrIG9iamVjdCAyIGZvciBhbnkgZXh0cmEgcHJvcGVydGllc1xyXG4gICAgICAgIGZvciAobGV0IHAgaW4gb2JqMikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChvYmoxW3BdKSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgKG9iajJbcF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMiBub3QgZXF1YWwgXCIgKyBwKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqMSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9iajIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHByb3RlY3RlZCBzaGFsbG93Q29tcGFyZShuZXh0UHJvcHM6IFApOiBib29sZWFuIHtcclxuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKFwic2hhbGxvdy0wIFwiICsgdGhpcy5jb25zdHJ1Y3Rvci50b1N0cmluZygpLnN1YnN0cmluZygwLCAzMCkpO1xyXG4gICAgLy8gICAgIC8vY29uc29sZS50aW1lKFwiMjJcIik7XHJcbiAgICAvLyAgICAgbGV0IHJldCA9IHNoYWxsb3dDb21wYXJlKHRoaXMsIG5leHRQcm9wcywgdGhpcy5zdGF0ZSk7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLnRpbWVFbmQoXCIyMlwiKTtcclxuICAgIC8vICAgICByZXR1cm4gcmV0O1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIHByaXZhdGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKG5leHRQcm9wczogUCwgbmV4dFN0YXRlOiBTKSA9PiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmRpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgcHJldkNvbnRleHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkVXBkYXRlKHByZXZQcm9wczogUCwgcHJldlN0YXRlOiBTLCBwcmV2Q29udGV4dDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsUmVjZWl2ZVByb3BzKHByZXZQcm9wcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbFVubW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2lsbFVubW91bnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkQ2xhc3NOYW1lKGNsYXNzTmFtZXM6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChjbGFzc05hbWVzKVxyXG4gICAgICAgICAgICBjbGFzc05hbWVzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJDbGFzc2VzLmluZGV4T2YobmFtZSkgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2xhc3Nlcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDbGFzc05hbWUoYm9vbFZhbHVlOiBib29sZWFuLCB0cnVlQ2xhc3NOYW1lczogc3RyaW5nLCBmYWxzZUNsYXNzTmFtZXM/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoYm9vbFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKHRydWVDbGFzc05hbWVzKTtcclxuICAgICAgICAgICAgaWYgKGZhbHNlQ2xhc3NOYW1lcylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3NOYW1lKGZhbHNlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzTmFtZSh0cnVlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgICAgIGlmIChmYWxzZUNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShmYWxzZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDbGFzc05hbWUoY2xhc3NOYW1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDbGFzc2VzLnNwbGljZSh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSwgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNsYXNzTmFtZSgpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSh0aGlzLnByb3BzLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyQ2xhc3Nlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDbGFzc2VzLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVuZGVyUHJvcHMoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9wcy5jbGFzc05hbWUgPSB0aGlzLnJlbmRlckNsYXNzTmFtZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvcHMuc3R5bGUgPSB0aGlzLnJlbmRlclN0eWxlcztcclxuICAgICAgICBfLmFzc2lnbih0aGlzLnJlbmRlclByb3BzLnN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJQcm9wcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gZ2V0UmVhY3RFbGVtZW50Q2xhc3NOYW1lKGVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQudHlwZSA/IGVsZW1lbnQudHlwZS50b1N0cmluZygpLnNwbGl0KFwiKFwiKVswXS5zcGxpdChcIiBcIilbMV0gOiBcIlwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldENoaWxkcmVuKGNoaWxkVHlwZTogRnVuY3Rpb24pOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZFR5cGUgPT09IGNoaWxkLnR5cGUpXHJcbiAgICAgICAgICAgICAgICByZXQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlsZHJlbk9mUHJvcHMocHJvcHM6IGFueSwgY2hpbGRUeXBlOiBGdW5jdGlvbik6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZFR5cGUgPT09IGNoaWxkLnR5cGUpXHJcbiAgICAgICAgICAgICAgICByZXQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICAvL3JlbmRlcigpIHtcclxuICAgIC8vICAgIHJldHVybiAobmV3KVxyXG4gICAgLy8gICAgLy8gICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykgfT5cclxuICAgIC8vICAgIC8vICAgICAgICBDb21wb25lbnQgZnJvbSB7dGhpcy5wcm9wcy5jb21waWxlcn0gYW5kIHt0aGlzLnByb3BzLmZyYW1ld29ya30hY2xpY2tDb3VudD17dGhpcy5zdGF0ZS5jbGlja0NvdW50fVxyXG4gICAgLy8gICAgLy8gICAgPC9idXR0b24+XHJcbiAgICAvLyAgICAvLyk7XHJcbiAgICAvL31cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnQudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG4gICAgdHlwZTogXCJjb2x1bW5cIiB8IFwicm93XCI7XHJcbiAgICBzaXplVG86IFwicGFyZW50XCIgfCBcImNvbnRlbnRcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudDxMYXlvdXRQcm9wcyxhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkxheW91dFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZVRvID09PSBcInBhcmVudFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZTogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAvLyBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3R5bGUuZmxleERpcmVjdGlvbiA9IHRoaXMucHJvcHMudHlwZTtcclxuICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAvL292ZXJmbG93OiBcImF1dG9cIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdHlsZS5mbGV4RGlyZWN0aW9uID0gdGhpcy5wcm9wcy50eXBlO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2t9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0xheW91dC50c3hcbiAqKi8iLCJcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaXhlZFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRml4ZWQgZXh0ZW5kcyBDb21wb25lbnQ8Rml4ZWRQcm9wcywgYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiRml4ZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuICAgICAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeFxuICoqLyIsImltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZsZXhQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmxleCBleHRlbmRzIENvbXBvbmVudDxGbGV4UHJvcHMsYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiRmxleFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgZmxleDogXCIxXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4XG4gKiovIiwiaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0QnVodGFPYmplY3QxIGV4dGVuZHMgRGVzaWduZWRPYmplY3Qge1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQpNCw0LzQuNC70LjRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQpNCw0LzQuNC70LjRjyDQsNCx0L7QvdC10L3RgtCwXCJcclxuICAgIH0pXHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0JjQvNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCY0LzRj1wiXHJcbiAgICB9KVxyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0J7RgtGH0LXRgdGC0LLQvlwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQntGC0YfQtdGB0YLQstC+INCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIHN1ck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDEudHNcbiAqKi8iLCLvu79pbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mbywgQmFzZVByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVzaWduZWRPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgJCR1bndhdGNoZWRQcm9wczogc3RyaW5nW10gPSBbXCJwcm9wZXJ0eUVkaXRvcnNcIiwgXCIkJHVud2F0Y2hlZFByb3BzXCJdO1xyXG5cclxuICAgIC8vIGlkOiBzdHJpbmc7XHJcbiAgICAvLyBuYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBjbGFzc05hbWU6IHN0cmluZztcclxuICAgIC8vIGluaGVyaXRGcm9tOiBzdHJpbmc7XHJcbiAgICAvLyBtb2R1bGVOYW1lOiBzdHJpbmc7XHJcbiAgICAvLyByZWZlcmVuY2VzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gICAgLy9wcml2YXRlIHN0YXRpYyBwcm9wZXJ0eUVkaXRvcnM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogUHJvcGVydHlFZGl0b3JJbmZvOyB9ID0ge307XHJcblxyXG4gICAgLy8gc3RhdGljIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IocHJvcGVydHlOYW1lOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVBhZ2U6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5R3JvdXA6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5RGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6IHR5cGVvZiBEZXNpZ25lZE9iamVjdCxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvclR5cGU6IHR5cGVvZiBCYXNlUHJvcGVydHlFZGl0b3IsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IHR5cGVvZiBPYmplY3QgfCB0eXBlb2YgU3RyaW5nKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCBpbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8gPSB7XHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eVBhZ2U6IHByb3BlcnR5UGFnZSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlHcm91cDogcHJvcGVydHlHcm91cCxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlEZXNjcmlwdGlvbjogcHJvcGVydHlEZXNjcmlwdGlvbixcclxuICAgIC8vICAgICAgICAgb2JqZWN0VHlwZTogb2JqZWN0VHlwZSxcclxuICAgIC8vICAgICAgICAgZWRpdG9yVHlwZTogZWRpdG9yVHlwZSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlUeXBlOiBwcm9wZXJ0eVR5cGUsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBEZXNpZ25lZE9iamVjdC5wcm9wZXJ0eUVkaXRvcnNbcHJvcGVydHlOYW1lXSA9IGluZm87XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJQcm9wZXJ0eUVkaXRvciBcIiArIHByb3BlcnR5TmFtZSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldCBwcm9wZXJ0eUVkaXRvcnMoKTp7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFByb3BlcnR5RWRpdG9ySW5mbzsgfXtcclxuICAgIC8vICAgICByZXR1cm4gKERlc2lnbmVkT2JqZWN0IGFzIGFueSkuJCRwcm9wZXJ0eUVkaXRvcnM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcnMoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMubGVuZ3RoID0gMDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlFZGl0b3I6IEJhc2VQcm9wZXJ0eUVkaXRvcikge1xyXG4gICAgLy8gICAgIHByb3BlcnR5RWRpdG9yLmRlc2lnbmVkT2JqZWN0ID0gdGhpcztcclxuICAgIC8vICAgICBwcm9wZXJ0eUVkaXRvci5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMucHVzaChwcm9wZXJ0eUVkaXRvcik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZW1pdFRzQ29kZSgpOiBzdHJpbmcge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLnJlZ2lzdGVyUHJvcGVydHlFZGl0b3JzKCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCB0c0NvZGUgPSBuZXcgVHNDb2RlKHRoaXMubW9kdWxlTmFtZSwgdGhpcy5jbGFzc05hbWUsIHRoaXMuaW5oZXJpdEZyb20sIHRoaXMucmVmZXJlbmNlcyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMucHJvcGVydHlFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xyXG4gICAgLy8gICAgICAgICBlZGl0b3IuZGVzaWduZWRPYmplY3QgPSB0aGlzO1xyXG4gICAgLy8gICAgICAgICBlZGl0b3IuZW1pdFRzQ29kZSh0c0NvZGUpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gdHNDb2RlLmdldENvZGUoKTtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3QudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QmFzZVByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0lucHV0VHlwZSwgSW5wdXR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdQcm9wZXJ0eUVkaXRvciBleHRlbmRzIEJhc2VQcm9wZXJ0eUVkaXRvciB7XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkge1xyXG4gICAgICAgLy8gdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0gPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWU7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZSA9PT0gXCIgKyB0aGlzLnByb3BzLnByb3BlcnR5TmFtZSArIFwiIFwiICsgdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BzLnByb3BlcnR5TmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBhdXRvRm9ybUNvbnRyb2xQcm9wczogQXV0b0Zvcm1Db250cm9sUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGlucHV0Q2FwdGlvbjogdGhpcy5wcm9wcy5pbnB1dENhcHRpb24sXHJcbiAgICAgICAgICAgIGlucHV0VGFiOiB0aGlzLnByb3BzLmlucHV0VGFiLFxyXG4gICAgICAgICAgICBpbnB1dEdyb3VwOiB0aGlzLnByb3BzLmlucHV0R3JvdXAsXHJcbiAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb246IHRoaXMucHJvcHMuaW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoYXV0b0Zvcm1Db250cm9sUHJvcHMpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9e0lucHV0VHlwZS5UZXh0fVxyXG4gICAgICAgICAgICAgICAgYmluZE9iamVjdD17dGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdH1cclxuICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT17dGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nRWRpdG9yUGFyYW1zIGV4dGVuZHMgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN0cmluZ0VkaXRvcihwYXJhbXM6IEF1dG9Gb3JtQ29udHJvbFByb3BzKTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coe3RhcmdldCwgcHJvcGVydHlOYW1lLCBjb25zdHI6dGFyZ2V0LmNvbnN0cnVjdG9yfSk7XHJcbiAgICAgICAgcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcih7XHJcbiAgICAgICAgICAgIGlucHV0Q2FwdGlvbjogcGFyYW1zLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHBhcmFtcy5pbnB1dFRhYixcclxuICAgICAgICAgICAgaW5wdXRHcm91cDogcGFyYW1zLmlucHV0R3JvdXAsXHJcbiAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb246IHBhcmFtcy5pbnB1dERlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgICAgICAgICAgb2JqZWN0VHlwZTogdGFyZ2V0LmNvbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICBlZGl0b3JUeXBlOiBTdHJpbmdQcm9wZXJ0eUVkaXRvcixcclxuICAgICAgICAgICAgcHJvcGVydHlUeXBlOiBTdHJpbmdcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3IudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlFZGl0b3JJbmZvIGV4dGVuZHMgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICBvYmplY3RUeXBlOiB0eXBlb2YgRGVzaWduZWRPYmplY3Q7XHJcbiAgICBlZGl0b3JUeXBlOiB0eXBlb2YgQmFzZVByb3BlcnR5RWRpdG9yO1xyXG4gICAgcHJvcGVydHlUeXBlOiB0eXBlb2YgT2JqZWN0IHwgdHlwZW9mIFN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4sIFByb3BlcnR5RWRpdG9ySW5mbyB7XHJcbiAgICBkZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VQcm9wZXJ0eUVkaXRvciBleHRlbmRzIENvbXBvbmVudDxCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQmFzZVByb3BlcnR5RWRpdG9yUHJvcHMsIGNvbnRleHQ6YW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICAgIC8vIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuXHJcbiAgICAvLyBnZXRQcm9wZXJ0eVR5cGUoKTogc3RyaW5nIHtcclxuICAgIC8vICAgICByZXR1cm4gXCJPYmplY3RcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZW5kZXJFZGl0b3IoaW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcclxuICAgIC8vICAgICByZXR1cm4gKDxzcGFuPmVkaXRvciBub3QgZGVmaW5lZDwvc3Bhbj4pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuICg8c3Bhbj5wcm9wZXJ0eSBlZGl0b3Igbm90IGRlZmluZWQ8L3NwYW4+KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gZW1pdFRzQ29kZSh0c0NvZGU6IFRzQ29kZSwgYXNzaWduTmFtZTogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgdHNDb2RlLmFkZFByb3BlcnR5KGFzc2lnbk5hbWUsIHRoaXMucHJvcGVydHlOYW1lLCB0aGlzLmdldFByb3BlcnR5VHlwZSgpLCB0aGlzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcGVydHlOYW1lXSk7XHJcbiAgICAvLyB9XHJcblxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yLnRzeFxuICoqLyIsImltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihlZGl0b3I6IFByb3BlcnR5RWRpdG9ySW5mbykge1xyXG5cclxuICAgIGxldCBvYmpUeXBlOiBhbnkgPSBlZGl0b3Iub2JqZWN0VHlwZTtcclxuXHJcbiAgICBpZiAoIW9ialR5cGUuJCRwcm9wZXJ0eUVkaXRvcnMpXHJcbiAgICAgICAgb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycyA9IFtdO1xyXG5cclxuICAgIG9ialR5cGUuJCRwcm9wZXJ0eUVkaXRvcnMucHVzaChlZGl0b3IpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJyZWdpc3RlclByb3BlcnR5RWRpdG9yIFwiICsgZWRpdG9yLnByb3BlcnR5TmFtZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVkaXRvcik7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9yZWdpc3RlclByb3BlcnR5RWRpdG9yLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBlbnVtIElucHV0VHlwZSB7VGV4dCwgTnVtYmVyLCBEYXRlIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4sIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuICAgIHR5cGU6IElucHV0VHlwZTtcclxuICAgIGJpbmRPYmplY3Q6IGFueTtcclxuICAgIGJpbmRQcm9wTmFtZTogc3RyaW5nO1xyXG4gICAgbWF4V2lkdGg/OiBudW1iZXI7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuUmVhY3RFdmVudEhhbmRsZXI7XHJcbiAgICBwbGFjZUhvbGRlcj86IHN0cmluZztcclxuICAgIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudDxJbnB1dFByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJbnB1dFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIElucHV0VHlwZS5UZXh0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGV4dCgpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgIFwiSW5wdXQucmVuZGVyKCk6PT4gdW5rbm93biBJbnB1dFR5cGUgJ1wiICsgdGhpcy5wcm9wcy50eXBlICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRleHQgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5iaW5kT2JqZWN0ICYmIHRoaXMucHJvcHMuYmluZFByb3BOYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmJpbmRPYmplY3RbdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWVdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYmluZE9iamVjdFt0aGlzLnByb3BzLmJpbmRQcm9wTmFtZV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIFwiPHVuYmluZGVkPlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVPbkNoYW5nZSA9IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5iaW5kT2JqZWN0ICYmIHRoaXMucHJvcHMuYmluZFByb3BOYW1lKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJpbmRPYmplY3RbdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWVdID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyVGV4dCgpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHRoaXMucHJvcHMuc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFRleHQoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXQudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge0Jhc2VQcm9wZXJ0eUVkaXRvclByb3BzLCBQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuLi9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7Z2V0UHJvcGVydHlFZGl0b3JzfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL2dldFByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHtBdXRvRm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0RGVzaWduZXJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgZGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG4gICAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0RGVzaWduZXIgZXh0ZW5kcyBDb21wb25lbnQ8T2JqZWN0RGVzaWduZXJQcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogT2JqZWN0RGVzaWduZXJQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQcm9wZXJ0eURlc2lnbmVycygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGdldFByb3BlcnR5RWRpdG9ycyh0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0KS5mb3JFYWNoKChwcm9wSW5mbzogUHJvcGVydHlFZGl0b3JJbmZvLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocHJvcEluZm8pO1xyXG4gICAgICAgICAgICBsZXQgZWRpdG9yUHJvcHM6IEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzID0ge1xyXG4gICAgICAgICAgICAgICAgZGVzaWduZWRPYmplY3Q6IHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAvL3Byb3BlcnR5RWRpdG9ySW5mbzogcHJvcEluZm8sXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2UsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0Y3RgtC+INC40LcgcHJvcEluZm86IFByb3BlcnR5RWRpdG9ySW5mbywg0LfQsNC/0L7Qu9GP0LXRgtGB0Y8g0LTQsNC70LXQtSDRh9C10YDQtdC3IF8uYXNzaWduXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZWRpdG9yVHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZTogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgXy5hc3NpZ24oZWRpdG9yUHJvcHMsIHByb3BJbmZvKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlZGl0b3JQcm9wcyk7XHJcblxyXG4gICAgICAgICAgICByZXQucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BJbmZvLmVkaXRvclR5cGUsIGVkaXRvclByb3BzLCBudWxsKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwib2JqZWN0LWRlc2lnbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe29uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBdXRvRm9ybSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIE9iamVjdCBkZXNpZ25lclxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUHJvcGVydHlEZXNpZ25lcnMoKX1cclxuICAgICAgICAgICAgPC9BdXRvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXIudHN4XG4gKiovIiwiaW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eUVkaXRvcnMob2JqOiBEZXNpZ25lZE9iamVjdCk6IFByb3BlcnR5RWRpdG9ySW5mb1tdIHtcclxuXHJcbiAgICBsZXQgZWRpdG9ycyA9IChvYmouY29uc3RydWN0b3IgYXMgYW55KS4kJHByb3BlcnR5RWRpdG9ycyBhcyBQcm9wZXJ0eUVkaXRvckluZm9bXTtcclxuXHJcbiAgICBlZGl0b3JzID0gZWRpdG9ycy5maWx0ZXIoKGVkdCkgPT4gb2JqIGluc3RhbmNlb2YgZWR0Lm9iamVjdFR5cGUpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJnZXRQcm9wZXJ0eUVkaXRvcnNcIik7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVkaXRvcnMpO1xyXG4gICAgcmV0dXJuIGVkaXRvcnM7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvci50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1RhYnMvVGFic1wiO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gXCIuLi9Gb3JtL0Zvcm1cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuICAgIGlucHV0Q2FwdGlvbj86IHN0cmluZztcclxuICAgIGlucHV0VGFiPzogc3RyaW5nO1xyXG4gICAgaW5wdXRHcm91cD86IHN0cmluZztcclxuICAgIGlucHV0RGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b0Zvcm1Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgaW5wdXRzPzogQXV0b0Zvcm1Db250cm9sUHJvcHNbXTtcclxufVxyXG5cclxuY29uc3QgZW1wdHlUYWJOYW1lID0gXCLQt9Cw0LrQu9Cw0LTQutCwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0b0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QXV0b0Zvcm1Qcm9wcywgYW55PiB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW5wdXRzKCk6IEF1dG9Gb3JtQ29udHJvbFByb3BzW10ge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGM6IGFueSkgPT4gYy5wcm9wcylcclxuICAgICAgICAgICAgLm1hcCgoYzogYW55KSA9PiBjLnByb3BzKSBhcyBBdXRvRm9ybUNvbnRyb2xQcm9wc1tdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFic0xpc3QoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBfLnVuaXEoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRzKCkubWFwPHN0cmluZz4oKGlucHV0OiBBdXRvRm9ybUNvbnRyb2xQcm9wcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmlucHV0VGFiIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYklucHV0cyh0YWI6IHN0cmluZyk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMucHJvcHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAoKChjLnByb3BzIGFzIEF1dG9Gb3JtQ29udHJvbFByb3BzKS5pbnB1dFRhYiB8fCBcIlwiKSA9PT0gdGFiKTtcclxuICAgICAgICAgICAgfSkgYXMgSlNYLkVsZW1lbnRbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclRhYih0YWI6IHN0cmluZyk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gPEZvcm0+e3RoaXMuZ2V0VGFiSW5wdXRzKHRhYil9PC9Gb3JtPjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlICByZW5kZXJUYWJzKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFic0xpc3QoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRhYnMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nZXRJbnB1dHMoKSk7XHJcblxyXG4gICAgICAgIGlmICh0YWJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFicy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGFiKHRhYnNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgb25XaWxsTW91bnQ9eyAoc3RhdGUpPT4geyBjb25zb2xlLmxvZyhcIm9uV2lsbE1vdW50LWF1dG8tZm9ybS10YWJzXCIpfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUFjdGl2ZVRhYj17IChzdGF0ZSwgdGFiKT0+IHsgY29uc29sZS5sb2coXCJzZXRBY3RpdmVUYWJcIik7Y29uc29sZS5sb2codGFiKTt9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGFicy5tYXA8SlNYLkVsZW1lbnQ+KCh0YWIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGtleT17aW5kZXh9IHRpdGxlPXt0YWIgPT09IFwiXCIgPyBlbXB0eVRhYk5hbWUgOiB0YWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYih0YWIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJhdXRvLWZvcm1cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLWF1dG8tZm9ybVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYnMoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm0udHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0xheW91dFwiO1xyXG5pbXBvcnQge0ZpeGVkfSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZsZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFic1Byb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8VGFic1N0YXRlPiB7XHJcbiAgICBvbkNoYW5nZUFjdGl2ZVRhYj86IChzdGF0ZTogVGFic1N0YXRlLCBhY3RpdmVUYWI6IFRhYkluZm8pID0+IHZvaWQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFic1N0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8VGFic1Byb3BzPiB7XHJcbiAgICB0YWJzOiBUYWJJbmZvW10gPSBbXTtcclxuXHJcbiAgICBzZXRBY3RpdmVUYWIodGFiSW5mbzogVGFiSW5mbykge1xyXG4gICAgICAgIGlmICghdGFiSW5mby5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKT0+dGFiLmlzQWN0aXZlID0gZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJJbmZvLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5wcm9wcy5vbkNoYW5nZUFjdGl2ZVRhYilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnByb3BzLm9uQ2hhbmdlQWN0aXZlVGFiKHRoaXMsIHRhYkluZm8pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYkluZm8ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudDxUYWJzUHJvcHMsIFRhYnNTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRhYnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFRhYnNTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUluaXRUYWJzU3RhdGUoKSB7XHJcblxyXG4gICAgICAgIGxldCB0YWJUYWdzID0gdGhpcy5nZXRDaGlsZHJlbihUYWIpO1xyXG5cclxuICAgICAgICB0YWJUYWdzLmZvckVhY2goKHRhYlRhZywgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0YWJQcm9wcyA9IHRhYlRhZy5wcm9wcyBhcyBUYWJQcm9wcztcclxuXHJcbiAgICAgICAgICAgIGxldCB0YWJJbmZvOiBUYWJJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRhYlByb3BzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogdGFiUHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogaW5kZXggPT09IDBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWJzLnB1c2godGFiSW5mbyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbml0VGFic1N0YXRlKCk7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcblxyXG4gICAgICAgIC8vIGxldCB0YWJUYWdzID0gdGhpcy5nZXRDaGlsZHJlbihUYWIpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdGFiVGFncy5mb3JFYWNoKCh0YWJUYWcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IHRhYlByb3BzID0gdGFiVGFnLnByb3BzIGFzIFRhYlByb3BzO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGxldCB0YWJJbmZvOiBUYWJJbmZvID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGl0bGU6IHRhYlByb3BzLnRpdGxlLFxyXG4gICAgICAgIC8vICAgICAgICAgY29udGVudDogdGFiUHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgLy8gICAgICAgICBpc0FjdGl2ZTogaW5kZXggPT09IDBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHRoaXMudGFicy5wdXNoKHRhYkluZm8pO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gb3BlbldpbmRvdyh3aW46IEpTWC5FbGVtZW50KTogV2luZG93SW5mbyB7XHJcbiAgICAvLyAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyAgICAgbW9kYWwuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxMik7XHJcbiAgICAvLyAgICAgLy8g0LTQu9GPINC/0L7QtNC90Y/RgtC40Y8g0LLQstC10YDRhSDQv9GA0Lgg0LDQutGC0LjQstCw0YbQuNC4INC+0LrQvdCwXHJcbiAgICAvLyAgICAgbW9kYWwub25jbGljayA9IChlKT0+IHtcclxuICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChtb2RhbC5pZCAhPT0gXCJkZWxldGVkXCIpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIC8vICAgICAgICAgfSwgMSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgd2luSW5zdGFuY2UgPSBSZWFjdERPTS5yZW5kZXIod2luLCBtb2RhbCkgYXMgV2luZG93O1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgaW5mbzogV2luZG93SW5mbyA9IHtcclxuICAgIC8vICAgICAgICAgaWQ6IG1vZGFsLmlkLFxyXG4gICAgLy8gICAgICAgICB3aW5JbnN0YW5jZTogd2luSW5zdGFuY2UsXHJcbiAgICAvLyAgICAgICAgIGRpdldyYXBwZXI6IG1vZGFsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLnB1c2goaW5mbyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiBpbmZvO1xyXG4gICAgLy8gfTtcclxuICAgIC8vXHJcbiAgICAvLyBjbG9zZVdpbmRvdyh3aW46IFdpbmRvdykge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLndpbmRvd3MuZm9yRWFjaCgoaW5mbywgaW5kZXgpPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoaW5mby53aW5JbnN0YW5jZSA9PT0gd2luKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpbmZvLmRpdldyYXBwZXIuaWQgPSBcImRlbGV0ZWRcIjtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZChpbmZvLmRpdldyYXBwZXIpO1xyXG4gICAgLy8gICAgICAgICAgICAgZGVsZXRlIHRoaXMud2luZG93c1tpbmRleF07XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhY3RpdmF0ZVdpbmRvdyh3aW46IFdpbmRvdykge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLndpbmRvd3MuZm9yRWFjaCgoaW5mbywgaW5kZXgpPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoaW5mby53aW5JbnN0YW5jZSA9PT0gd2luKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5mby5kaXZXcmFwcGVyKTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICByZW5kZXJUYWJzKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGxpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50YWJzLmZvckVhY2goKHRhYkluZm86IFRhYkluZm8sIGluZGV4OiBudW1iZXIpPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRhYkluZm8uaXNBY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogbnVsbDtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPVxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsgKGUpPT57IHRoaXMuc3RhdGUuc2V0QWN0aXZlVGFiKHRhYkluZm8pfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+e3RhYkluZm8udGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgbGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUGFuZWxzKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGxpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50YWJzLmZvckVhY2goKHRhYkluZm86IFRhYkluZm8sIGluZGV4OiBudW1iZXIpPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICF0YWJJbmZvLmlzQWN0aXZlID8gXCJpcy1oaWRkZW5cIiA6IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWJJbmZvLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgbGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj5cclxuICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImF1dG9cIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJjb2x1bW5cIiByZWY9eyAoZTogYW55KSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH0gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIDxGaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWJzKCl9XHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUGFuZWxzKCl9XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYlByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWIgZXh0ZW5kcyBDb21wb25lbnQ8VGFiUHJvcHMsYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVGFiUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RhYnMvVGFicy50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7SW5wdXREaXZpZGVyfSBmcm9tIFwiLi4vSW5wdXREaXZpZGVyL0lucHV0RGl2aWRlclwiO1xyXG5pbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4uLy4uLy4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge0lucHV0UHJvcHN9IGZyb20gXCIuLi9JbnB1dC9JbnB1dFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50PEZvcm1Qcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRm9ybVByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXJDb250cm9scygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgbGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNvbnRyb2w6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb250cm9sUHJvcHMgPSBjb250cm9sLnByb3BzIGFzIElucHV0UHJvcHM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xQcm9wcyAmJiAoY29udHJvbFByb3BzLmlucHV0Q2FwdGlvbiB8fCBjb250cm9sUHJvcHMuYmluZFByb3BOYW1lKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGNvbnRyb2wudHlwZSA9PT0gSW5wdXREaXZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSW5wdXREaXZpZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiY29udHJvbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXB0aW9uXCI+e2NvbnRyb2xQcm9wcy5pbnB1dENhcHRpb24gPyBjb250cm9sUHJvcHMuaW5wdXRDYXB0aW9uIDogY29udHJvbFByb3BzLmJpbmRQcm9wTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIiwgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiY29udHJvbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIxMFwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIiwgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiZm9ybVwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6IFwiaW5oZXJpdFwifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSByZWY9eyAoZSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250cm9scygpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7YXBwSW5zdGFuY2V9IGZyb20gXCIuLi9BcHBcIjtcclxuaW1wb3J0IHtXaW5kb3csIFdpbmRvd1N0YXRlfSBmcm9tIFwiLi4vV2luZG93L1dpbmRvd1wiO1xyXG5pbXBvcnQge01vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vTW92YWJsZS9Nb3ZhYmxlXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZXNrdG9wUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGVza3RvcFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8RGVza3RvcFByb3BzPiB7XHJcbiAgICB3aW5kb3dzOiBEZXNrdG9wV2luZG93W10gPSBbXTsgIC8vINC/0L7RgdC70LXQtNC90LXQtSDQsNC60YLQuNCy0L3QvlxyXG5cclxuICAgIC8vIGdldFdpbmRvd0J5SWQoaWQ6IHN0cmluZyk6IFdpbmRvd1N0YXRlIHtcclxuICAgIC8vICAgICBmb3IgKGxldCB3IG9mIHRoaXMud2luZG93cykge1xyXG4gICAgLy8gICAgICAgICBpZiAody5pZCA9PT0gaWQpXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gdztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY29uc29sZS53YXJuKFwiRGVza3RvcFdpbmRvdyBpZD0nXCIgKyBpZCArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAvLyAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0V2luZG93SW5kZXhCeUlkKGlkOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLndpbmRvd3MuaW5kZXhPZih0aGlzLmdldFdpbmRvd0J5SWQoaWQpKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhY3RpdmF0ZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAvLyAgICAgaWYgKHdpbikge1xyXG4gICAgLy8gICAgICAgICBfLnB1bGwodGhpcy53aW5kb3dzLCB3aW4pO1xyXG4gICAgLy8gICAgICAgICB0aGlzLndpbmRvd3MucHVzaCh3aW4pO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGNsb3NlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgIC8vICAgICBfLnB1bGwodGhpcy53aW5kb3dzLCB3aW4pO1xyXG4gICAgLy8gICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd0luZm8ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHdpbkluc3RhbmNlOiBXaW5kb3c7XHJcbiAgICBkaXZXcmFwcGVyOiBFbGVtZW50O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuV2luZG93UGFyYW1zIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgdG9wPzogbnVtYmVyO1xyXG4gICAgbGVmdD86IG51bWJlcjtcclxuICAgIHJpZ2h0PzogbnVtYmVyO1xyXG4gICAgYm90dG9tPzogbnVtYmVyO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBtaW5XaWR0aD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlc2t0b3BXaW5kb3cgaW1wbGVtZW50cyBPcGVuV2luZG93UGFyYW1zIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIG1pbldpZHRoOiBudW1iZXI7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlc2t0b3AgZXh0ZW5kcyBDb21wb25lbnQ8RGVza3RvcFByb3BzLCBEZXNrdG9wU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBEZXNrdG9wUHJvcHMsIGNvbnRleHQ6YW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IERlc2t0b3BTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIGlmIChhcHBJbnN0YW5jZSlcclxuICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4vLyAgICBwcml2YXRlIHdpbmRvd3M6IFdpbmRvd0luZm9bXSA9IFtdO1xyXG5cclxuICAgIG9wZW5XaW5kb3cod2luOiBKU1guRWxlbWVudCwgb3BlblBhcmFtcz86IE9wZW5XaW5kb3dQYXJhbXMpIHtcclxuICAgICAgICBpZiAoIW9wZW5QYXJhbXMpXHJcbiAgICAgICAgICAgIG9wZW5QYXJhbXMgPSB7fTtcclxuICAgICAgICBsZXQgbmV3V2luID0gbmV3IERlc2t0b3BXaW5kb3coKTtcclxuICAgICAgICBuZXdXaW4uY29udGVudCA9IHdpbjtcclxuICAgICAgICBuZXdXaW4udGl0bGUgPSBvcGVuUGFyYW1zLnRpdGxlIHx8IFwiLlwiO1xyXG4gICAgICAgIG5ld1dpbi5pZD1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxMik7XHJcblxyXG4gICAgICAgIG5ld1dpbi5sZWZ0ID0gb3BlblBhcmFtcy5sZWZ0O1xyXG4gICAgICAgIG5ld1dpbi50b3AgPSBvcGVuUGFyYW1zLnRvcDtcclxuICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gb3BlblBhcmFtcy5oZWlnaHQ7XHJcbiAgICAgICAgbmV3V2luLndpZHRoID0gb3BlblBhcmFtcy53aWR0aDtcclxuICAgICAgICBuZXdXaW4ucmlnaHQgPSBvcGVuUGFyYW1zLnJpZ2h0O1xyXG4gICAgICAgIG5ld1dpbi5ib3R0b20gPSBvcGVuUGFyYW1zLmJvdHRvbTtcclxuXHJcbiAgICAgICAgaWYgKCFuZXdXaW4ubGVmdCkge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5yaWdodCAmJiAhbmV3V2luLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ubGVmdCA9IDUwO1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLndpZHRoID0gNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld1dpbi5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLndpZHRoID0gNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmxlZnQgPSA1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4ucmlnaHQgJiYgIW5ld1dpbi53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLndpZHRoID0gNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW5ld1dpbi50b3ApIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4uYm90dG9tICYmICFuZXdXaW4uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4udG9wID0gNTA7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld1dpbi5ib3R0b20pIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4udG9wID0gNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLmJvdHRvbSAmJiAhbmV3V2luLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmhlaWdodCA9IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIG5ld1dpbi5taW5IZWlnaHQgPSBvcGVuUGFyYW1zLm1pbkhlaWdodCB8fCAxMDA7XHJcbiAgICAgICAgbmV3V2luLm1pbldpZHRoID0gb3BlblBhcmFtcy5taW5XaWR0aCB8fCAxMDA7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLndpbmRvd3MucHVzaChuZXdXaW4pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgYWN0aXZhdGVXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgICAgIGlmICh3aW4pIHtcclxuICAgICAgICAgICAgXy5wdWxsKHRoaXMuc3RhdGUud2luZG93cywgd2luKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dzLnB1c2god2luKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRXaW5kb3dCeUlkKGlkOiBzdHJpbmcpOiBEZXNrdG9wV2luZG93IHtcclxuICAgICAgICBmb3IgKGxldCB3IG9mIHRoaXMuc3RhdGUud2luZG93cykge1xyXG4gICAgICAgICAgICBpZiAody5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiRGVza3RvcFdpbmRvdyBpZD0nXCIgKyBpZCArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUFjdGl2YXRlID0gKHN0YXRlOldpbmRvd1N0YXRlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVdpbmRvdyhzdGF0ZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgICAgIF8ucHVsbCh0aGlzLnN0YXRlLndpbmRvd3MsIHdpbik7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKHN0YXRlOldpbmRvd1N0YXRlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVdpbmRvdyhzdGF0ZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiZGVza3RvcFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJhdXRvXCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiByZWY9eyAoZSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53aW5kb3dzLm1hcCgodywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci1kZXNrdG9wLXdpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2luZG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3cuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt3LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wPXt3LnRvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ9e3cubGVmdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3LndpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt3LmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0PXt3LnJpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tPXt3LmJvdHRvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZhdGU9eyAgdGhpcy5oYW5kbGVBY3RpdmF0ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsgdGhpcy5oYW5kbGVDbG9zZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV2luZG93PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vb25Nb3ZlU3RhcnQ9eyB3LmhhbmRsZU1vdmVTdGFydCB9XHJcbi8vb25SZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0PXsgdy5oYW5kbGVSZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0IH1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EZXNrdG9wL0Rlc2t0b3AudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wcywgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rlc2t0b3B9IGZyb20gXCIuL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5pbXBvcnQgRWxlbWVudCA9IEpTWC5FbGVtZW50O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPEFwcFN0YXRlPiB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDEyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY29udGVudDogSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmNsYXNzIEFwcFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8QXBwUHJvcHM+IHtcclxuICAgIHdpbmRvd3M6IEFwcFdpbmRvd1tdID0gW107ICAvLyDQv9C+0YHQu9C10LTQvdC10LUg0LDQutGC0LjQstC90L5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudDxBcHBQcm9wcywgQXBwU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBcHBQcm9wcywgY29udGV4dDphbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQXBwU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICBhcHBJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgLy8gICAgIHN1cGVyLmRpZE1vdW50KCk7XHJcbiAgICAvLyAgICAgYXBwSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGRlc2t0b3A6IERlc2t0b3A7XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImFwcFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIEJ1aHRhIEFwcCFcclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGxldCBhcHBJbnN0YW5jZTogQXBwO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcbmltcG9ydCB7TW92YWJsZSwgTW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi9Nb3ZhYmxlL01vdmFibGVcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcbmltcG9ydCBkZWVwRXF1YWwgPSByZXF1aXJlKFwiZGVlcC1lcXVhbFwiKTtcclxuaW1wb3J0IHtPcGVuV2luZG93UGFyYW1zfSBmcm9tIFwiLi4vRGVza3RvcC9EZXNrdG9wXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dQcm9wcyBleHRlbmRzIE9wZW5XaW5kb3dQYXJhbXMsQ29tcG9uZW50UHJvcHM8V2luZG93U3RhdGU+IHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgb25BY3RpdmF0ZT8oc3RhdGU6IFdpbmRvd1N0YXRlKTogdm9pZDtcclxuICAgIG9uQ2xvc2U/KHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPFdpbmRvd1Byb3BzPiBpbXBsZW1lbnRzIE9wZW5XaW5kb3dQYXJhbXMge1xyXG4gICAgY29udGVudDogSlNYLkVsZW1lbnQ7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcmlnaHQ6IG51bWJlcjtcclxuICAgIGJvdHRvbTogbnVtYmVyO1xyXG4gICAgbWluSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBtaW5XaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93IGV4dGVuZHMgQ29tcG9uZW50PFdpbmRvd1Byb3BzLCBXaW5kb3dTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFdpbmRvd1Byb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgV2luZG93U3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVJbml0U3RhdGUoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuaWQgPSB0aGlzLnByb3BzLmlkO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudG9wID0gdGhpcy5wcm9wcy50b3A7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0ID0gdGhpcy5wcm9wcy5sZWZ0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUucmlnaHQgPSB0aGlzLnByb3BzLnJpZ2h0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYm90dG9tID0gdGhpcy5wcm9wcy5ib3R0b207XHJcbiAgICAgICAgdGhpcy5zdGF0ZS53aWR0aCA9IHRoaXMucHJvcHMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUluaXRTdGF0ZSgpO1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBsZXQgdGFiVGFncyA9IHRoaXMuZ2V0Q2hpbGRyZW4oVGFiKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRhYlRhZ3MuZm9yRWFjaCgodGFiVGFnLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGxldCB0YWJQcm9wcyA9IHRhYlRhZy5wcm9wcyBhcyBUYWJQcm9wcztcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgdGFiSW5mbzogVGFiSW5mbyA9IHtcclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiB0YWJQcm9wcy50aXRsZSxcclxuICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6IHRhYlByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgIC8vICAgICAgICAgaXNBY3RpdmU6IGluZGV4ID09PSAwXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRhYnMucHVzaCh0YWJJbmZvKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1vdmVTdGFydCA9IChlOiBNb3ZlU3RhcnRFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUuYmluZFgodGhpcy5zdGF0ZSwgXCJsZWZ0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcygnbGVmdCcsIHRoaXMuc3RhdGUubGVmdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5iaW5kWSh0aGlzLnN0YXRlLCBcInRvcFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQodGhpcy5uYXRpdmVFbGVtZW50KS5jc3MoJ3RvcCcsIHRoaXMuc3RhdGUudG9wKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZU9uQ2xpY2sobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnQgPSAoZTogTW92ZVN0YXJ0RXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBlLmJpbmRYKHRoaXMuc3RhdGUsIFwid2lkdGhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS53aWR0aCA8IHRoaXMuc3RhdGUubWluV2lkdGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndpZHRoID0gdGhpcy5zdGF0ZS5taW5XaWR0aDtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcygnd2lkdGgnLCB0aGlzLnN0YXRlLndpZHRoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLmJpbmRZKHRoaXMuc3RhdGUsIFwiaGVpZ2h0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGVpZ2h0IDwgdGhpcy5zdGF0ZS5taW5IZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhlaWdodCA9IHRoaXMuc3RhdGUubWluSGVpZ2h0O1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKCdoZWlnaHQnLCB0aGlzLnN0YXRlLmhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVPbkNsaWNrID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY3RpdmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGl2YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChuZXh0UHJvcHM6IFdpbmRvd1Byb3BzLCBuZXh0U3RhdGU6IFdpbmRvd1N0YXRlKSA9PiB7XHJcbiAgICAgICAgLy8g0LLRgdC10LPQtNCwIGZhbHNlLCDQv9C+0YLQvtC80YMg0YfRgtC+INC80LXQvdGP0YLRjCBwcm9wcyDQvtC60L3QsCDQvNC+0LbQtdGCINGC0L7Qu9GM0LrQviBkZXNrdG9wLFxyXG4gICAgICAgIC8vINCwINGC0LDQutC40YUg0YHQu9GD0YfQsNGP0YUg0YHQvtC00LXRgNC20LjQvNC+0LUg0L7QutC90LAg0LzQtdC90Y/RgtGMINC90LUg0L3QsNC00L5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJ3aW5kb3cgYm94XCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJhYnNvbHV0ZVwifSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMuc3RhdGUudG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxyXG4gICAgICAgICAgICByaWdodDogdGhpcy5zdGF0ZS5yaWdodCxcclxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnN0YXRlLmJvdHRvbSxcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJCdXR0b25TdHlsZSA9IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogMixcclxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLXdpblwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5kb3dcIlxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlOiBhbnkpID0+IHsgdGhpcy5uYXRpdmVFbGVtZW50ID0gZTsgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZU9uQ2xpY2sgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJjb2x1bW5cIiBzaXplVG89XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luZG93LWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlclJhZGl1czogXCI1cHggNXB4IDBweCAwcHhcIiwgcG9zaXRpb246XCJyZWxhdGl2ZVwiLCBwYWRkaW5nTGVmdDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3aW5kb3ctdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJyb3dcIiBzaXplVG89XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgbGVmdDowLCByaWdodDowLGJvdHRvbTowfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXt0aGlzLm1vdmVTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtYWRkb25zIGJ1dHRvbnMtYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAyLCBwYWRkaW5nUmlnaHQ6IDR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBtaW5pbWl6ZS1idXR0b25cIiBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCIgc3R5bGU9e3t0b3A6IDN9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBtYXhpbWl6ZS1idXR0b25cIiBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW9cIiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgY2xvc2UtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlXCIgc3R5bGU9e3t0b3A6IC0xfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBzdHlsZT17eyBvdmVyZmxvdzpcImluaXRpYWxcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5kb3ctYm9keVwiIHN0eWxlPXt7IGhlaWdodDpcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5kb3ctcmVzaXplclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaGVpZ2h0OjEwLCB3aWR0aDoxMCwgcmlnaHQ6MCxib3R0b206MCwgYm9yZGVyUmFkaXVzOiBcIjAgMCA1cHggMFwiLGN1cnNvcjogXCJzZS1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVTdGFydD17dGhpcy5yZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW92YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1dpbmRvdy9XaW5kb3cudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRHJhZ0V2ZW50SGFuZGxlciA9IF9fUmVhY3QuRHJhZ0V2ZW50SGFuZGxlcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92YWJsZVByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbk1vdmVTdGFydD86IChldmVudDogTW92ZVN0YXJ0RXZlbnQpPT52b2lkO1xyXG4gICAgb25Nb3ZlPzogKGV2ZW50OiBNb3ZlRXZlbnQpPT52b2lkO1xyXG4gICAgb25Nb3ZlRW5kPzogKGV2ZW50OiBNb3ZlRW5kRXZlbnQpPT52b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlU3RhcnRFdmVudCB7XHJcbiAgICBiaW5kWDogKG9iajogT2JqZWN0LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCk9PnZvaWQpPT52b2lkO1xyXG4gICAgYmluZFk6IChvYmo6IE9iamVjdCwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpPT52b2lkKT0+dm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRXZlbnQge1xyXG4gICAgZGVsdGFYOiBudW1iZXI7XHJcbiAgICBkZWx0YVk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRW5kRXZlbnQge1xyXG4gICAgZGVsdGFYOiBudW1iZXI7XHJcbiAgICBkZWx0YVk6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBCaW5kZWRPYmplY3Qge1xyXG4gICAgb2JqOiBhbnk7XHJcbiAgICBwcm9wTmFtZTogc3RyaW5nXHJcbiAgICBzdGFydFZhbHVlOiBudW1iZXI7XHJcbiAgICBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZDtcclxuICAgIGxhc3RWYWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW92YWJsZSBleHRlbmRzIENvbXBvbmVudDxNb3ZhYmxlUHJvcHMsYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRDbGllbnRYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0Q2xpZW50WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3Zlcl9CaW5kZWQ6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRlZFg6IEJpbmRlZE9iamVjdFtdID0gW107XHJcbiAgICBwcml2YXRlIGJpbmRlZFk6IEJpbmRlZE9iamVjdFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kWChvYmo6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmJpbmRlZFgucHVzaCh7XHJcbiAgICAgICAgICAgIG9iajogb2JqLFxyXG4gICAgICAgICAgICBwcm9wTmFtZTogcHJvcE5hbWUsXHJcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IG9ialtwcm9wTmFtZV0sXHJcbiAgICAgICAgICAgIG1vdmVkQ2FsbGJhY2s6IG1vdmVkQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogb2JqW3Byb3BOYW1lXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRZKG9iajogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuYmluZGVkWS5wdXNoKHtcclxuICAgICAgICAgICAgb2JqOiBvYmosXHJcbiAgICAgICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZSxcclxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogb2JqW3Byb3BOYW1lXSxcclxuICAgICAgICAgICAgbW92ZWRDYWxsYmFjazogbW92ZWRDYWxsYmFjayxcclxuICAgICAgICAgICAgbGFzdFZhbHVlOiBvYmpbcHJvcE5hbWVdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydENsaWVudFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgdGhpcy5zdGFydENsaWVudFkgPSBlLmNsaWVudFk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KHtiaW5kWDogdGhpcy5iaW5kWC5iaW5kKHRoaXMpLCBiaW5kWTogdGhpcy5iaW5kWS5iaW5kKHRoaXMpfSk7XHJcblxyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJtb3ZhYmxlXCIsIFwiXCIpO1xyXG4gICAgICAgIC8vZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnT3Zlcl9CaW5kZWQgPSB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJfQmluZGVkKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJfQmluZGVkKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdmVFbmQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlRW5kKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhWDogZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBkZWx0YVk6IGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmluZGVkWCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmluZGVkWSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kZWRYLmZvckVhY2goKGJpbmQpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gYmluZC5zdGFydFZhbHVlICsgZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFg7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gYmluZC5sYXN0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQub2JqW2JpbmQucHJvcE5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBiaW5kLmxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmQubW92ZWRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBiaW5kLm1vdmVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRlZFkuZm9yRWFjaCgoYmluZCk9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGJpbmQuc3RhcnRWYWx1ZSArIGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZO1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGJpbmQubGFzdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kLm9ialtiaW5kLnByb3BOYW1lXSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYmluZC5sYXN0VmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5kLm1vdmVkQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgYmluZC5tb3ZlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3ZlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZSh7XHJcbiAgICAgICAgICAgICAgICBkZWx0YVg6IGUuY2xpZW50WCAtIHRoaXMuc3RhcnRDbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgZGVsdGFZOiBlLmNsaWVudFkgLSB0aGlzLnN0YXJ0Q2xpZW50WVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJtb3ZhYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe2RyYWdnYWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtjdXJzb3I6IFwibW92ZVwifSk7XHJcblxyXG4gICAgICAgIC8vcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcEluZm8uZWRpdG9yVHlwZSwgZWRpdG9yUHJvcHMsIG51bGwpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9e3RoaXMuaGFuZGxlRHJhZ1N0YXJ0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9e3RoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZS50c3hcbiAqKi8iLCJpbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi90ZXN0QnVodGFPYmplY3QxXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgdGVzdEJ1aHRhT2JqZWN0MiBleHRlbmRzIFRlc3RCdWh0YU9iamVjdDEge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0J/QvtC7L3NleFwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+XCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQn9C+0YLQvtC70L7QuiDQsNCx0L7QvdC10L3RgtCwXCJcclxuICAgIH0pXHJcbiAgICBzZXg6IHN0cmluZztcclxuXHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcblxyXG4vL2ltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtleGVjdXRlU1FMfSBmcm9tIFwiLi4vLi4vU1FMXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5zfSBmcm9tIFwiLi9UcmVlR3JpZENvbHVtbnNcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtblByb3BzLCBUcmVlR3JpZENvbHVtbn0gZnJvbSBcIi4vVHJlZUdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtLZXljb2RlfSBmcm9tIFwiLi4vLi4vS2V5Y29kZVwiO1xyXG5pbXBvcnQge01vdmFibGUsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCB7Z2V0U2Nyb2xsYmFyV2lkdGh9IGZyb20gXCIuLi8uLi9nZXRTY3JvbGxCYXJXaWR0aFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uL0J1dHRvblwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPFRyZWVHcmlkU3RhdGU+IHtcclxuICAgIGRhdGFTb3VyY2U/OiBhbnk7XHJcbiAgICByb3dIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBrZXlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBwYXJlbnRLZXlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBoaWVyYXJjaHlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPzogc3RyaW5nO1xyXG4gICAgdHJlZU1vZGU/OiBib29sZWFuO1xyXG4gICAgYXV0b0V4cGFuZE5vZGVzVG9MZXZlbD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxUcmVlR3JpZFByb3BzPiB7XHJcbiAgICBjb2x1bW5zOiBJbnRlcm5hbENvbHVtbltdO1xyXG4gICAgcGFnZUxlbmd0aDogbnVtYmVyO1xyXG4gICAgcm93czogSW50ZXJuYWxSb3dbXTtcclxuICAgIG5vZGVzOiBJbnRlcm5hbFRyZWVOb2RlW107XHJcbiAgICBmb2N1c2VkUm93SW5kZXg6IG51bWJlcjtcclxuICAgIGZvY3VzZWRDZWxsSW5kZXg6IG51bWJlcjtcclxuICAgIGRhdGFTb3VyY2U6IGFueVtdO1xyXG5cclxuICAgIGhlYWRlckZha2VSb3c6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyRmFrZVJvdzogSFRNTEVsZW1lbnQ7XHJcbiAgICBoZWFkZXJXcmFwcGVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBib2R5V3JhcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyV3JhcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGhlYWRlclRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBib2R5VGFibGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGZvb3RlclRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbENvbHVtbiB7XHJcbiAgICBwcm9wczogVHJlZUdyaWRDb2x1bW5Qcm9wcztcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBjYXB0aW9uOiBzdHJpbmc7XHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZztcclxuICAgIGZvb3Rlcjogc3RyaW5nO1xyXG4gICAgaGlkZGVuOiBib29sZWFuO1xyXG4gICAgaGVhZGVyV2lkdGhOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGJvZHlXaWR0aE5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9vdGVyV2lkdGhOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVybmFsUm93IHtcclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgLy8vICAgc291cmNlT2JqZWN0OiBhbnk7XHJcbiAgICBzb3VyY2VJbmRleDogbnVtYmVyO1xyXG4gICAgY2VsbEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XHJcbiAgICBub2RlOiBJbnRlcm5hbFRyZWVOb2RlO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVybmFsVHJlZU5vZGUge1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBzb3VyY2VPYmplY3Q6IGFueTtcclxuICAgIHNvdXJjZUluZGV4OiBudW1iZXI7XHJcbiAgICBjZWxsRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAvLyDQtNC70Y8gdHJlZU1vZGU7XHJcbiAgICBwYXJlbnQ6IEludGVybmFsVHJlZU5vZGU7XHJcbiAgICBjaGlsZHJlbjogSW50ZXJuYWxUcmVlTm9kZVtdID0gW107XHJcbiAgICBleHBhbmRlZDogYm9vbGVhbjtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcblxyXG4gICAgcHVzaFJvd1JlY3Vyc2l2ZShyb3dzOiBJbnRlcm5hbFJvd1tdLCBtYXhQYWdlTGVuZ3RoOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoID49IG1heFBhZ2VMZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHJvdyA9IG5ldyBJbnRlcm5hbFJvdygpO1xyXG4gICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IHRoaXMuc291cmNlSW5kZXg7XHJcbiAgICAgICAgcm93Lm5vZGUgPSB0aGlzO1xyXG4gICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5wdXNoUm93UmVjdXJzaXZlKHJvd3MsIG1heFBhZ2VMZW5ndGgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpdGVyYXRlUmVjdXJzaXZlKGNhbGxiYWNrOiAobm9kZTogSW50ZXJuYWxUcmVlTm9kZSk9PnZvaWQpIHtcclxuICAgICAgICBjYWxsYmFjayh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLml0ZXJhdGVSZWN1cnNpdmUoY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLy9jb25zdCB2ZXJ0U2Nyb2xsQmFyV2lkdGggPSAzMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZCBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZFByb3BzLCBUcmVlR3JpZFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZWVHcmlkUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFRyZWVHcmlkU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXRlcmF0ZUFsbE5vZGVzKGNhbGxiYWNrOiAobm9kZTogSW50ZXJuYWxUcmVlTm9kZSk9PnZvaWQpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLm5vZGVzLmZvckVhY2goKG5vZGU6IEludGVybmFsVHJlZU5vZGUpPT4ge1xyXG4gICAgICAgICAgICBub2RlLml0ZXJhdGVSZWN1cnNpdmUoY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwYW5kQWxsKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubm9kZXMuZm9yRWFjaCgobm9kZTogSW50ZXJuYWxUcmVlTm9kZSk9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuaXRlcmF0ZVJlY3Vyc2l2ZSgobm9kOiBJbnRlcm5hbFRyZWVOb2RlKT0+IHtcclxuICAgICAgICAgICAgICAgIG5vZC5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbGxhcHNlQWxsKCkge1xyXG5cclxuICAgICAgICB0aGlzLml0ZXJhdGVBbGxOb2Rlcygobm9kOiBJbnRlcm5hbFRyZWVOb2RlKT0+IHtcclxuICAgICAgICAgICAgbm9kLmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUNvbHVtbnMoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zID0gW107XHJcblxyXG4gICAgICAgIGxldCBjb2x1bW5zVGFnID0gdGhpcy5nZXRDaGlsZHJlbihUcmVlR3JpZENvbHVtbnMpO1xyXG5cclxuICAgICAgICBjb2x1bW5zVGFnLmZvckVhY2goKHRhZzogSlNYLkVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtblRhZ0xpc3QgPSB0aGlzLmdldENoaWxkcmVuT2ZQcm9wcyh0YWcucHJvcHMsIFRyZWVHcmlkQ29sdW1uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtblRhZ0xpc3QuZm9yRWFjaCgocHJvcENvbDogSlNYLkVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gbmV3IEludGVybmFsQ29sdW1uKCk7XHJcbiAgICAgICAgICAgICAgICBjb2wucHJvcHMgPSBwcm9wQ29sLnByb3BzO1xyXG4gICAgICAgICAgICAgICAgY29sLndpZHRoID0gcHJvcENvbC5wcm9wcy53aWR0aCB8fCAxNTA7XHJcbiAgICAgICAgICAgICAgICBjb2wuY2FwdGlvbiA9IHByb3BDb2wucHJvcHMuY2FwdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbC5maWVsZE5hbWUgPSBwcm9wQ29sLnByb3BzLmZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbC5jYXB0aW9uID0gcHJvcENvbC5wcm9wcy5jYXB0aW9uIHx8IGNvbC5maWVsZE5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMucHVzaChjb2wpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEZvY3VzZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm9kZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnRyZWVNb2RlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhpZXJhcmNoeUZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzRnJvbUhpZXJhcmNoeUZpZWxkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInVua25vd24gaGllcmFyY2h5IG1vZGVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm9kZXNGcm9tSGllcmFyY2h5RmllbGQoKSB7XHJcblxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlhUcmVlR3JpZDogaGllcmFyY2h5RGVsaW1pdGVycyBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpbnRlcmZhY2UgSVNvcnRlZCB7XHJcbiAgICAgICAgICAgIGhpZXJhcmNoeVN0cjogc3RyaW5nO1xyXG4gICAgICAgICAgICBvYmpJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNvcnRlZDogSVNvcnRlZFtdID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlLm1hcCgob2JqOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhpZXJhcmNoeVN0cjogb2JqW3RoaXMucHJvcHMuaGllcmFyY2h5RmllbGROYW1lXS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgb2JqSW5kZXg6IGluZGV4XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvcnRlZCA9IF8uc29ydEJ5KHNvcnRlZCwgW1wiaGllcmFyY2h5U3RyXCJdKTtcclxuXHJcbiAgICAgICAgbGV0IGNhY2hlOiB7IFtoaWVyYXJjaHlJZDogc3RyaW5nXTogSW50ZXJuYWxUcmVlTm9kZTsgfSA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLm5vZGVzID0gW107XHJcblxyXG4gICAgICAgIHNvcnRlZC5mb3JFYWNoKChzLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNwbGl0dGVkID0gcy5oaWVyYXJjaHlTdHIuc3BsaXQodGhpcy5wcm9wcy5oaWVyYXJjaHlEZWxpbWl0ZXJzKTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudElkOiBhbnk7XHJcbiAgICAgICAgICAgIGxldCBub2RlSWQ6IGFueTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0dGVkLmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgICAgIG5vZGVJZCA9IHMuaGllcmFyY2h5U3RyO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGVJZCA9IF8ubGFzdChzcGxpdHRlZCk7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRJZCA9IHNwbGl0dGVkLnNsaWNlKDAsIHNwbGl0dGVkLmxlbmd0aCAtIDEpLmpvaW4odGhpcy5wcm9wcy5oaWVyYXJjaHlEZWxpbWl0ZXJzLnNsaWNlKDAsIDEpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwYXJlbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlW25vZGVJZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlhUcmVlR3JpZDogbm9kZUlkICdcIiArIG5vZGVJZCArIFwiJyBpcyBkdXBsaWNhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgSW50ZXJuYWxUcmVlTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc291cmNlSW5kZXggPSBzLm9iakluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGV2ZWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXhwYW5kZWQgPSBub2RlLmxldmVsIDwgdGhpcy5wcm9wcy5hdXRvRXhwYW5kTm9kZXNUb0xldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlW25vZGVJZF0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gY2FjaGVbcGFyZW50SWRdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IEludGVybmFsVHJlZU5vZGUoKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc291cmNlSW5kZXggPSBzLm9iakluZGV4O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5sZXZlbCA9IHBhcmVudE5vZGUubGV2ZWwgKyAxO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHBhbmRlZCA9IG5vZGUubGV2ZWwgPCB0aGlzLnByb3BzLmF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBjYWNoZVtzLmhpZXJhcmNoeVN0cl0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe3N0cjogcy5oaWVyYXJjaHlTdHIsIHBhcmVudElkLCBub2RlSWR9KTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJvd3MoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUucm93cyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ub2Rlcy5mb3JFYWNoKChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wdXNoUm93UmVjdXJzaXZlKHRoaXMuc3RhdGUucm93cywgdGhpcy5zdGF0ZS5wYWdlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRhdGFTb3VyY2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFTb3VyY2UuZm9yRWFjaCgob2JqOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBuZXcgSW50ZXJuYWxSb3coKTtcclxuICAgICAgICAgICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgLy9yb3cuc291cmNlT2JqZWN0ID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluaXRGb2N1c2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zICYmIHRoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zWzBdLmZvb3RlciA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZS5sZW5ndGggKyBcIiDQv9C+0LcuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJEYXRhKCkge1xyXG5cclxuLy8gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhU291cmNlKSB7XHJcbi8vICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZS5tYXAoKHJvdykgPT4gcm93KTtcclxuLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLnJvd3MgPSB3aW5kb3dbXCJ4eHhcIl0uZmlsdGVyKChyb3cpID0+IHJvd1tcItCd0LDQt9Cy0LDQvdC40LVcIl0uaW5kZXhPZihcIlBoaWxcIikgPiAtMSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgbGFzdEJvZHlXcmFwcGVySGVpZ2h0ID0gMDtcclxuICAgIGxhc3RCb2R5V3JhcHBlcldpZHRoID0gMDtcclxuXHJcbiAgICBoYW5kbGVCb2R5V3JhcHBlckVsZW1lbnRSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0hlaWdodCA9IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBpZiAobmV3SGVpZ2h0ICE9PSB0aGlzLmxhc3RCb2R5V3JhcHBlckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RCb2R5V3JhcHBlckhlaWdodCA9IG5ld0hlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuZXdXaWR0aCA9IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGlmIChuZXdXaWR0aCAhPT0gdGhpcy5sYXN0Qm9keVdyYXBwZXJXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RCb2R5V3JhcHBlcldpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICAgICAgdGhpcy5ib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuaGFuZGxlQm9keVdyYXBwZXJFbGVtZW50UmVzaXplLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucGFnZUxlbmd0aCA9IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaERhdGFTb3VyY2UoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTm9kZXMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgdGVzdExvYWQ1MDAoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGV4ZWN1dGVTUUwoXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YBcIilcclxuICAgIC8vICAgICAgICAgLmRvbmUoKHRhYmxlKSA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGFibGUucm93cy5tYXAoKHIpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4ge9Ca0LvRjtGHOiByW1wi0JrQu9GO0YdcIl0sINCd0L7QvNC10YA6IHJbXCLQndC+0LzQtdGAXCJdLCDQndCw0LfQstCw0L3QuNC1OiByW1wi0J3QsNC30LLQsNC90LjQtVwiXX07XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucygpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IHRvcCA1MDA2KiDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0JrQu9GO0YcgLS0+IFwiICsgdGFibGUucm93c1swXS5nZXRWYWx1ZSgyKSk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5mYWlsKChlcnIpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFRyZWVHcmlkUHJvcHMpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZFVwZGF0ZShwcmV2UHJvcHM6IFRyZWVHcmlkUHJvcHMsIHByZXZTdGF0ZTogYW55LCBwcmV2Q29udGV4dDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUm93cygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVuZGVyUm93cy1zdGFydCgpXCIpO1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItcm93czogXCIgKyB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgocm93OiBJbnRlcm5hbFJvdywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXQucHVzaCh0aGlzLnJlbmRlclJvdyhyb3csIGluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZW5kZXJSb3dzLWVuZCgpXCIpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJSb3cocm93OiBJbnRlcm5hbFJvdywgcm93SW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgIGtleT17cm93SW5kZXh9XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4geyByb3cuZWxlbWVudCA9IGU7fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNlbGxzKHJvdywgcm93SW5kZXgpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDZWxscyhyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBjb2xJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKHRoaXMucmVuZGVyQ2VsbChyb3csIHJvd0luZGV4LCBjb2wsIGNvbEluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNlbGwocm93OiBJbnRlcm5hbFJvdywgcm93SW5kZXg6IG51bWJlciwgY29sOiBJbnRlcm5hbENvbHVtbiwgY29sSW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IG9iakluZGV4ID0gcm93LnNvdXJjZUluZGV4O1xyXG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2Vbb2JqSW5kZXhdW2NvbC5wcm9wcy5maWVsZE5hbWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy9sZXQgc3RyID0gdGhpcy5yb3dzW3Jvd0luZGV4XS5zb3VyY2VPYmplY3RbY29sLnByb3BzLmZpZWxkTmFtZV0udG9TdHJpbmcoKTtcclxuICAgICAgICAvLyByZXR1cm4gPHRkIGtleT17Y29sSW5kZXh9PlxyXG4gICAgICAgIC8vICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OjE2LCBvdmVyZmxvdzpcImhpZGRlblwifX0+e3N0cn08L2Rpdj5cclxuICAgICAgICAvLyA8L3RkPjtcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSByb3cubm9kZTtcclxuXHJcbiAgICAgICAgbGV0IGhpZXJhcmNoeVBhZGRpbmdEaXY6IEpTWC5FbGVtZW50O1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlICYmIChjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVBhZGRpbmcgfHwgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlKSkge1xyXG4gICAgICAgICAgICBoaWVyYXJjaHlQYWRkaW5nRGl2ID0gPHNwYW4gc3R5bGU9e3t3aWR0aDpub2RlLmxldmVsICogMjAsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT48L3NwYW4+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRkU3R5bGU6IGFueSA9IHtvdmVyZmxvdzogXCJoaWRkZW5cIn07XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlKSB7XHJcbiAgICAgICAgICAgIHRkU3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSBcInJnYmEoMjU1LCAwLCAwLCAwKVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0clNwYW5TdHlsZTogYW55ID0ge1xyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlICYmIG5vZGUuZXhwYW5kZWQgJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHN0clNwYW5TdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdHJTcGFuID0gPHNwYW4gc3R5bGU9eyBzdHJTcGFuU3R5bGV9PntzdHJ9PC9zcGFuPjtcclxuXHJcblxyXG4gICAgICAgIGxldCBjb2xsYXBzZUljb25EaXY6IEpTWC5FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdy1jb2xsYXBzZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4ge25vZGUuZXhwYW5kZWQgPSBmYWxzZTsgdGhpcy5jcmVhdGVSb3dzKCk7IHRoaXMuZm9yY2VVcGRhdGUoKTt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlSWNvbkRpdiA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7bm9kZS5leHBhbmRlZCA9IHRydWU7IHRoaXMuY3JlYXRlUm93cygpOyB0aGlzLmZvcmNlVXBkYXRlKCk7fSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2NvbEluZGV4fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3RkU3R5bGV9XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gcm93LmNlbGxFbGVtZW50c1tjb2xJbmRleF0gPSBlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7IHRoaXMuc2V0Rm9jdXNlZENlbGwocm93SW5kZXgsY29sSW5kZXgpO30gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jaGVja2JveFwiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctcGFkZGluZ1wiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGllcmFyY2h5UGFkZGluZ0Rpdn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2NvbGxhcHNlSWNvbkRpdn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaWNvblwiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zdHJcIiBzdHlsZT17eyBmbGV4OiBcIjAgMSBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0clNwYW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Rm9jdXNlZENlbGwocm93SW5kZXg6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPSByb3dJbmRleDtcclxuICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRDZWxsSW5kZXggPSBjZWxsSW5kZXg7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVGFibGVXaGVlbChlOiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKGUuZGVsdGFZID4gMClcclxuICAgICAgICAvLyAgICAgdGhpcy5pbmNQYWdlU3RhcnRJbmRleCgzKTtcclxuICAgICAgICAvLyBlbHNlIGlmIChlLmRlbHRhWSA8IDApXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZGVjUGFnZVN0YXJ0SW5kZXgoMyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZWx0YVkpO1xyXG4gICAgICAgIC8vIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNjcm9sbChlOiBVSUV2ZW50KSB7XHJcbiAgICAgICAgJCh0aGlzLnN0YXRlLmhlYWRlcldyYXBwZXJFbGVtZW50KS5jc3Moe3RvcDogdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wfSk7XHJcblxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgKyB0aGlzLnN0YXRlLmJvZHlXcmFwcGVyRWxlbWVudC5jbGllbnRIZWlnaHQgLSAkKHRoaXMuc3RhdGUuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCkgLSAwO1xyXG4gICAgICAgICQodGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCkuY3NzKHt0b3A6IHBvc30pO1xyXG5cclxuICAgICAgICAkKHRoaXMuc3RhdGUuaGVhZGVyRmFrZVJvdykuY3NzKHtoZWlnaHQ6ICQodGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKX0pO1xyXG4gICAgICAgICQodGhpcy5zdGF0ZS5mb290ZXJGYWtlUm93KS5jc3Moe2hlaWdodDogJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQ2hhbmdlRm9jdXNlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgocm93OiBJbnRlcm5hbFJvdykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm93LmVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAkKHJvdy5lbGVtZW50KS5yZW1vdmVDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLXJvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJvdy5jZWxsRWxlbWVudHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgJChjZWxsKS5yZW1vdmVDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLWNlbGxcIik7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGZvY3VzZWRSb3cgPSB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXhdO1xyXG4gICAgICAgIGlmIChmb2N1c2VkUm93ICYmIGZvY3VzZWRSb3cuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGZvY3VzZWRSb3cuZWxlbWVudCkuYWRkQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1yb3dcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZm9jdXNlZENlbGxFbGVtZW50ID0gZm9jdXNlZFJvdy5jZWxsRWxlbWVudHNbdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4XTtcclxuICAgICAgICAgICAgaWYgKGZvY3VzZWRDZWxsRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgJChmb2N1c2VkQ2VsbEVsZW1lbnQpLmFkZENsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtY2VsbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZENlbGxFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4XS5jZWxsRWxlbWVudHNbdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEZvY3VzZWRSb3dFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4XS5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsRG93bigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkUm93SW5kZXggPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3dFbCA9ICQodGhpcy5nZXRGb2N1c2VkUm93RWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIC8vINGD0YjQu9C+INC30LAg0L/RgNC10LTQtdC70Ysg0LLQuNC00LjQvNC+0YHRgtC4XHJcbiAgICAgICAgICAgIGlmIChyb3dFbC5wb3NpdGlvbigpLnRvcCArIHJvd0VsLmhlaWdodCgpID5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LmNsaWVudEhlaWdodCAtICQodGhpcy5zdGF0ZS5mb290ZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wID0gcm93RWwucG9zaXRpb24oKS50b3AgKyByb3dFbC5oZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJCh0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbExlZnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZENlbGxJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4LS07XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxSaWdodCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4IDwgdGhpcy5zdGF0ZS5jb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkQ2VsbEluZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsVXAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZFJvd0luZGV4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRSb3dJbmRleC0tO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3dFbCA9ICQodGhpcy5nZXRGb2N1c2VkUm93RWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIC8vINGD0YjQu9C+INC30LAg0L/RgNC10LTQtdC70Ysg0LLQuNC00LjQvNC+0YHRgtC4XHJcbiAgICAgICAgICAgIGlmIChyb3dFbC5wb3NpdGlvbigpLnRvcCA8IHRoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCArICQodGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wID0gcm93RWwucG9zaXRpb24oKS50b3AgLSAkKHRoaXMuc3RhdGUuaGVhZGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUJvZHlLZXlEb3duKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IEtleWNvZGUuRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbERvd24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5VcCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbFVwKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IEtleWNvZGUuTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbExlZnQoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5SaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbFJpZ2h0KCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sdW1uUmVzaXplU3RhcnQgPSAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50LCBjb2w6IEludGVybmFsQ29sdW1uKTogdm9pZCA9PiB7XHJcbiAgICAgICAgZXZlbnQuYmluZFgoY29sLCBcIndpZHRoXCIsICgpID0+IHtcclxuICAgICAgICAgICAgJChjb2wuaGVhZGVyV2lkdGhOYXRpdmVFbGVtZW50KS5hdHRyKCd3aWR0aCcsIGNvbC53aWR0aCk7XHJcbiAgICAgICAgICAgICQoY29sLmJvZHlXaWR0aE5hdGl2ZUVsZW1lbnQpLmF0dHIoJ3dpZHRoJywgY29sLndpZHRoKTtcclxuICAgICAgICAgICAgJChjb2wuZm9vdGVyV2lkdGhOYXRpdmVFbGVtZW50KS5hdHRyKCd3aWR0aCcsIGNvbC53aWR0aCk7XHJcbiAgICAgICAgICAgIGxldCB0YWJsZVdpZHRoID0gdGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnN0YXRlLmhlYWRlclRhYmxlRWxlbWVudCkuY3NzKCd3aWR0aCcsIHRhYmxlV2lkdGgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuYm9keVRhYmxlRWxlbWVudCkuY3NzKCd3aWR0aCcsIHRhYmxlV2lkdGgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc3RhdGUuZm9vdGVyVGFibGVFbGVtZW50KS5jc3MoJ3dpZHRoJywgdGFibGVXaWR0aCk7XHJcbiAgICAgICAgICAgICQodGhpcy5zdGF0ZS5ib2R5V3JhcHBlckVsZW1lbnQpLmNzcygnbWF4LXdpZHRoJywgdGFibGVXaWR0aCArIGdldFNjcm9sbGJhcldpZHRoKCkgKyAxKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVPbkNsaWNrKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJDb2x1bW5IZWFkZXJzKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xIZWFkZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpPT4ge2NvbC5oZWFkZXJXaWR0aE5hdGl2ZUVsZW1lbnQ9ZTt9IH1cclxuICAgICAgICAgICAgICAgIC8+KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZFN0eWxlOiBhbnkgPSB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9O1xyXG5cclxuICAgICAgICAgICAgY29sSGVhZGVycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGRTdHlsZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sLmNhcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDowLCB3aWR0aDo1LCByaWdodDowLCBib3R0b206MCwgY3Vyc29yOlwiY29sLXJlc2l6ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9eyAoZXZlbnQ6IE1vdmVTdGFydEV2ZW50KT0+eyB0aGlzLmNvbHVtblJlc2l6ZVN0YXJ0KGV2ZW50LCBjb2wpOyBjb25zb2xlLmxvZyhcIk1vdmVTdGFydFwiKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW92YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8TW92YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOjAsIHdpZHRoOmluZGV4PT09MD8wOjUsIGxlZnQ6MCwgYm90dG9tOjAsIGN1cnNvcjpcImNvbC1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXsgKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0YDQtdGB0LDQudC30LjQvCDQv9GA0LXQtNGL0LTRg9GJ0YPRjiDQutC+0LvQvtC90LrRg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtblJlc2l6ZVN0YXJ0KGV2ZW50LCB0aGlzLnN0YXRlLmNvbHVtbnNbaW5kZXgtMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90ZD4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5oZWFkZXJXcmFwcGVyRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RhYmxlTGF5b3V0OiBcImZpeGVkXCIsYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgd2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuaGVhZGVyVGFibGVFbGVtZW50ID0gZX1cclxuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sV2lkdGhzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbEhlYWRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb2x1bW5Gb290ZXJzKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xGb290ZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBpc0Zvb3RlckVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaChcclxuICAgICAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKT0+IHtjb2wuZm9vdGVyV2lkdGhOYXRpdmVFbGVtZW50PWU7fSB9XHJcbiAgICAgICAgICAgICAgICAvPik7XHJcbiAgICAgICAgICAgIGlmIChjb2wuZm9vdGVyKVxyXG4gICAgICAgICAgICAgICAgaXNGb290ZXJFbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuICAgICAgICAgICAgY29sRm9vdGVycy5wdXNoKDx0ZCBrZXk9e2luZGV4fSBzdHlsZT17dGRTdHlsZX0+e2NvbC5mb290ZXJ9PC90ZD4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWlzRm9vdGVyRW1wdHkpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLnN0YXRlLmZvb3RlcldyYXBwZXJFbGVtZW50ID0gZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtZm9vdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0YWJsZUxheW91dDogXCJmaXhlZFwiLGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsIHdpZHRoOnRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5mb290ZXJUYWJsZUVsZW1lbnQgPSBlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xXaWR0aHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbEZvb3RlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyR3JpZEJvZHkoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgY29sV2lkdGhzOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29sV2lkdGhzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Y29sXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17IGNvbC53aWR0aC50b1N0cmluZygpICsgXCJweFwiIH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSk9PiB7Y29sLmJvZHlXaWR0aE5hdGl2ZUVsZW1lbnQ9ZTt9IH1cclxuICAgICAgICAgICAgICAgIC8+KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtYm9keVwiXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cclxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17IChlKSA9PiB7ICB0aGlzLmhhbmRsZUJvZHlLZXlEb3duKGUpOyB9IH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRhYmxlTGF5b3V0OiBcImZpeGVkXCIsIGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOnRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCl9fVxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuYm9keVRhYmxlRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sV2lkdGhzfVxyXG4gICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgcmVmPXsgKGUpID0+IHRoaXMuc3RhdGUuaGVhZGVyRmFrZVJvdyA9IGV9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUm93cygpfVxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCByZWY9eyAoZSkgPT4gdGhpcy5zdGF0ZS5mb290ZXJGYWtlUm93ID0gZX0+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNhbGNUb3RhbENvbHVtbnNXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByZXQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY29sLmhpZGRlbilcclxuICAgICAgICAgICAgICAgIHJldCArPSBjb2wud2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzOiBUcmVlR3JpZFByb3BzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGFsbG93LXRyZWUtZ3JpZFwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic2hhbGxvdy13aW4gLT4gaXNFcWlhbCA9IFwiICsgdGhpcy5pc1Byb3BzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzLCBbXCJjaGlsZHJlblwiXSkpO1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc1Byb3BzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzLCBbXCJjaGlsZHJlblwiLCBcImRhdGFTb3VyY2VcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL3RoaXMuYWRkQ2xhc3NOYW1lKFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLXRyZWUtZ3JpZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJ0cmVlLWdyaWRcIiB0eXBlPVwiY29sdW1uXCIgc2l6ZVRvPVwicGFyZW50XCIgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1oZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoIDUwMDFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZmlsdGVyRGF0YSgpOyB0aGlzLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwiZm9yY2VVcGRhdGVcIik7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZXhwYW5kQWxsKCk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmNvbGxhcHNlQWxsKCk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZSBhbGxcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICDQt9Cw0LPQvtC70L7QstC+0Log0Lgg0YIu0LQuXHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1ib2R5LXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcInJlbGF0aXZlXCIsIG92ZXJmbG93OlwiYXV0b1wiLCBmbGV4OlwiMSAxIDEwMCVcIiwgbWF4V2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKStnZXRTY3JvbGxiYXJXaWR0aCgpKzF9fVxyXG4gICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgIHJlZj17IChlOmFueSkgPT4ge3RoaXMuc3RhdGUuYm9keVdyYXBwZXJFbGVtZW50ID0gZTt9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckdyaWRCb2R5KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbHVtbkhlYWRlcnMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sdW1uRm9vdGVycygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1mb290ZXItd3JhcHBlclwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cInJvd1wiIHNpemVUbz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImlzLXNtYWxsblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpcy1zbWFsbG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQt9C80LXQvdC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiaXMtc21hbGxuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpcy1zbWFsbG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLRi9Cx0YDQsNGC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImlzLXNtYWxsblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0ZpeGVkID5cclxuICAgICAgICAgICAgPC9MYXlvdXQgPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWQudHN4XG4gKiovIiwi77u/aW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQ29sdW1uc1Byb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICAvL2NhcHRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbnMgZXh0ZW5kcyBDb21wb25lbnQ8VHJlZUdyaWRDb2x1bW5zUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZENvbHVtbnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnMudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG4vL2ltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQ29sdW1uUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGNhcHRpb24/OiBzdHJpbmc7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIHNob3dIaWVyYXJjaHlUcmVlPzogYm9vbGVhbjtcclxuICAgIHNob3dIaWVyYXJjaHlQYWRkaW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkQ29sdW1uIGV4dGVuZHMgQ29tcG9uZW50PFRyZWVHcmlkQ29sdW1uUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZENvbHVtblByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5zdGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICAvL3RoaXMuYWRkQ2xhc3NOYW1lKFwiYnRuXCIpO1xyXG4gICAgICAgIC8vdGhpcy50b2dnbGVDbGFzc05hbWUodGhpcy5wcm9wcy5kaXNhYmxlZCwgXCJkaXNhYmxlZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChudWxsKTtcclxuICAgICAgICAvL1RyZWVHcmlkIGZyb20ge3RoaXMucHJvcHMuY29tcGlsZXJ9IGFuZCB7dGhpcy5wcm9wcy5mcmFtZXdvcmt9IWNsaWNrQ291bnQ9e3RoaXMuc3RhdGUuY2xpY2tDb3VudH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW4udHN4XG4gKiovIiwiXHJcbmV4cG9ydCB2YXIgS2V5Y29kZSA9IHtcclxuICAgIEVzYzogXCJFc2NhcGVcIixcclxuICAgIFNwYWNlOiBcIiBcIixcclxuXHJcbiAgICBMZWZ0OiBcIkFycm93TGVmdFwiLFxyXG4gICAgVXA6IFwiQXJyb3dVcFwiLFxyXG4gICAgRG93bjogXCJBcnJvd0Rvd25cIixcclxuICAgIFJpZ2h0OiBcIkFycm93UmlnaHRcIixcclxuXHJcbiAgICBEZWw6IFwiRGVsZXRlXCIsXHJcbiAgICBJbnM6IFwiSW5zZXJ0XCIsXHJcblxyXG4gICAgV2luOiBcIk1ldGFcIixcclxuICAgIE1lbnU6IFwiQ29udGV4dE1lbnVcIixcclxuXHJcbiAgICBTY3JvbGw6IFwiU2Nyb2xsTG9ja1wiLFxyXG4gICAgTnVtOiBcIk51bUxvY2tcIixcclxuXHJcbiAgICBCYWNrc3BhY2U6IFwiQmFja3NwYWNlXCIsXHJcbiAgICBUYWI6IFwiVGFiXCIsXHJcbiAgICBFbnRlcjogXCJFbnRlclwiLFxyXG4gICAgU2hpZnQ6IFwiU2hpZnRcIixcclxuICAgIENvbnRyb2w6IFwiQ29udHJvbFwiLFxyXG4gICAgQWx0OiBcIkFsdFwiLFxyXG4gICAgQnJlYWs6IFwiUGF1c2VcIixcclxuICAgIENhcHNMb2NrOiBcIkNhcHNMb2NrXCIsXHJcblxyXG4gICAgUGFnZVVwOiBcIlBhZ2VVcFwiLFxyXG4gICAgUGFnZURvd246IFwiUGFnZURvd25cIixcclxuICAgIEVuZDogXCJFbmRcIixcclxuICAgIEhvbWU6IFwiSG9tZVwiLFxyXG5cclxuICAgIEYxOiBcIkYxXCIsXHJcbiAgICBGMjogXCJGMlwiLFxyXG4gICAgRjM6IFwiRjNcIixcclxuICAgIEY0OiBcIkY0XCIsXHJcbiAgICBGNTogXCJGNVwiLFxyXG4gICAgRjY6IFwiRjZcIixcclxuICAgIEY3OiBcIkY3XCIsXHJcbiAgICBGODogXCJGOFwiLFxyXG4gICAgRjk6IFwiRjlcIixcclxuICAgIEYxMDogXCJGMTBcIixcclxuICAgIEYxMTogXCJGMTFcIixcclxuICAgIEYxMjogXCJGMTJcIlxyXG5cclxufTtcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0tleUNvZGUudHNcbiAqKi8iLCJsZXQgY2FjaGVXaWR0aCA9IDA7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZXY6IFVJRXZlbnQpID0+IHtcclxuICAgIGNhY2hlV2lkdGggPSAwO1xyXG4gICAgY29uc29sZS5sb2coXCJyZXNpemVcIik7XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKCkge1xyXG4gICAgaWYgKGNhY2hlV2lkdGggPiAwKVxyXG4gICAgICAgIHJldHVybiBjYWNoZVdpZHRoO1xyXG5cclxuICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIG91dGVyLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xyXG4gICAgb3V0ZXIuc3R5bGUubXNPdmVyZmxvd1N0eWxlID0gXCJzY3JvbGxiYXJcIjsgLy8gbmVlZGVkIGZvciBXaW5KUyBhcHBzXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XHJcblxyXG4gICAgdmFyIHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcclxuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcclxuXHJcbiAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW5uZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcclxuXHJcbiAgICB2YXIgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XHJcbiAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcclxuXHJcbiAgICBjYWNoZVdpZHRoID0gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcclxuICAgIHJldHVybiBjYWNoZVdpZHRoO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvZ2V0U2Nyb2xsQmFyV2lkdGgudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtWaXNpYmxlUGx1Z2luLCBWaXNpYmxlUGx1Z2luUHJvcHMsIFZpc2libGVQbHVnaW5TdGF0ZX0gZnJvbSBcIi4uL1BsdWdpbnMvVmlzaWJsZVBsdWdpblwiO1xyXG5pbXBvcnQge09uQ2xpY2tQbHVnaW4sIE9uQ2xpY2tQbHVnaW5Qcm9wc30gZnJvbSBcIi4uL1BsdWdpbnMvT25DbGlja1BsdWdpblwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxCdXR0b25TdGF0ZT4sIFZpc2libGVQbHVnaW5Qcm9wcywgT25DbGlja1BsdWdpblByb3BzIHtcclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25TdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPEJ1dHRvblByb3BzPiBpbXBsZW1lbnRzIFZpc2libGVQbHVnaW5TdGF0ZXtcclxuICAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vQFZpc2libGVQbHVnaW5cclxuLy9AT25DbGlja1BsdWdpblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50PEJ1dHRvblByb3BzLEJ1dHRvblN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQnV0dG9uUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBCdXR0b25TdGF0ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChuZXcgVmlzaWJsZVBsdWdpbih0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLnB1c2gobmV3IE9uQ2xpY2tQbHVnaW4odGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGEgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9CdXR0b24udHN4XG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnRQbHVnaW59IGZyb20gXCIuL1BsdWdpblwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlzaWJsZVBsdWdpblByb3BzIHtcclxuICAgIHZpc2libGU/OiBib29sZWFuO1xyXG4gICAgZGVmYXVsdFZpc2libGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZpc2libGVQbHVnaW5TdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPFZpc2libGVQbHVnaW5Qcm9wcz4ge1xyXG4gICAgdmlzaWJsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmlzaWJsZVBsdWdpbiBleHRlbmRzIENvbXBvbmVudFBsdWdpbjxWaXNpYmxlUGx1Z2luUHJvcHMsIFZpc2libGVQbHVnaW5TdGF0ZT4ge1xyXG4gICAgLy8gY29uc3RydWN0b3Iob3duZXI6IGFueSkge1xyXG4gICAgLy8gICAgIHN1cGVyKG93bmVyKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInZpc2libGUgd2lsbE1vdW50KClcIilcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJvcHMuZGVmYXVsdFZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVmlzaWJsZVBsdWdpbjogb25seSBvbmUgb2YgdGhlIHByb3BlcnRpZXMgbXVzdCBiZSBzcGVjaWZpZWQgJ3Zpc2libGUnIG9yICdkZWZhdWx0VmlzaWJsZSdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gdGhpcy5wcm9wcy52aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLmRlZmF1bHRWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlID0gdGhpcy5wcm9wcy5kZWZhdWx0VmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLm93bmVyLnRvZ2dsZUNsYXNzTmFtZSghdGhpcy5zdGF0ZS52aXNpYmxlLCBcImlzLWhpZGRlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogVmlzaWJsZVBsdWdpblByb3BzKSB7XHJcbiAgICAgICAgLy9sZXQgc3RhdGUgPSB0aGlzLm93bmVyLnN0YXRlIGFzIFZpc2libGVQbHVnaW5TdGF0ZTtcclxuICAgICAgICBpZiAobmV4dFByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSBuZXh0UHJvcHMudmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3duZXIudG9nZ2xlQ2xhc3NOYW1lKCF0aGlzLnN0YXRlLnZpc2libGUsIFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIFZpc2libGVQbHVnaW4odGFyZ2V0OiBhbnkpIHtcclxuLy8gICAgIHRhcmdldC5wbHVnaW5zLnB1c2goVmlzaWJsZVBsdWdpbkNsYXNzKTtcclxuLy8gICAgIHJldHVybiB0YXJnZXQ7XHJcbi8vIH1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1BsdWdpbnMvVmlzaWJsZVBsdWdpbi50c1xuICoqLyIsImltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wcywgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBsdWdpbjxQLFMgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxQPj4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvd25lcjogQ29tcG9uZW50PFAsIFM+KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRpZE1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxNb3VudCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB3aWxsVW5tb3VudCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUCkge1xyXG4gICAgfVxyXG5cclxuICAgIGRpZFVwZGF0ZShwcmV2UHJvcHM6IFAsIHByZXZTdGF0ZTogUywgcHJldkNvbnRleHQ6IGFueSkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBTIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vd25lci5zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvcHMoKTogUCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXIucHJvcHM7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9QbHVnaW4udHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQbHVnaW59IGZyb20gXCIuL1BsdWdpblwiO1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9uQ2xpY2tQbHVnaW5Qcm9wcyB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNsaWNrUGx1Z2luIGV4dGVuZHMgQ29tcG9uZW50UGx1Z2luPE9uQ2xpY2tQbHVnaW5Qcm9wcywgYW55PiB7XHJcblxyXG4gICAgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMub3duZXIuYWRkUHJvcHMoe29uQ2xpY2s6IHRoaXMucHJvcHMub25DbGlja30pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBPbkNsaWNrUGx1Z2luUHJvcHMpIHtcclxuICAgICAgICBzdXBlci53aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vd25lci5hZGRQcm9wcyh7b25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gT25DbGlja1BsdWdpbih0YXJnZXQ6IGFueSkge1xyXG4vLyAgICAgdGFyZ2V0LnBsdWdpbnMucHVzaChPbkNsaWNrUGx1Z2luQ2xhc3MpO1xyXG4vLyAgICAgcmV0dXJuIHRhcmdldDtcclxuLy8gfVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvUGx1Z2lucy9PbkNsaWNrUGx1Z2luLnRzXG4gKiovIiwi77u/aW1wb3J0ICogYXMgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuXHJcblxyXG5sZXQgc29ja2V0ID0gaW8uY29ubmVjdCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTUUwoc3FsOiBzdHJpbmcpOiBKUXVlcnlQcm9taXNlPERhdGFUYWJsZT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImNhbGwgU1FMLnNxbC5leGVjdXRlXCIpO1xyXG4gICAgLy9yZXR1cm4gc2lnbmFsUi5leGVjdXRlU1FMKHNxbCk7XHJcblxyXG5cclxuICAgIGxldCBwcm9taXNlOiBKUXVlcnlEZWZlcnJlZDxEYXRhVGFibGU+O1xyXG4gICAgcHJvbWlzZSA9ICQuRGVmZXJyZWQ8RGF0YVRhYmxlPigpO1xyXG5cclxuICAgIC8vICBzb2NrZXQub25jZSgnY29ubmVjdCcsKCkgPT4ge1xyXG4gICAgbGV0IHF1ZXJ5SWQgPSBcInF1ZXJ5LVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XHJcbiAgICBzb2NrZXQuZW1pdChcImV4ZWN1dGVTUUxcIiwge3F1ZXJ5SWQsIHNxbH0pO1xyXG4gICAgc29ja2V0Lm9uY2UocXVlcnlJZCwgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QocmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRhdGFUYWJsZSA9IG5ldyBEYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFDb2x1bW4gPSBuZXcgRGF0YUNvbHVtbihkYXRhVGFibGUsIHJlc3BvbnNlLmNvbHVtbnNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhVGFibGUuY29sdW1ucy5wdXNoKGRhdGFDb2x1bW4pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNwb25zZS5yb3dzLmZvckVhY2goKHJvdzogYW55KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFSb3cgPSBuZXcgRGF0YVJvdyhkYXRhVGFibGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29sdW1uc1tpXS5wYXJzZSA9PT0gXCJEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbZGF0YVRhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSBuZXcgRGF0ZShyb3dbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1tkYXRhVGFibGUuY29sdW1uc1tpXS5uYW1lXSA9IHJvd1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RhdGFSb3dbaV0gPSByb3dbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVRhYmxlLnJvd3MucHVzaChkYXRhUm93KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRhdGFUYWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gICB9KTtcclxuXHJcblxyXG4gICAgLy9zaWduYWxSLmV4ZWN1dGVTUUwoc3FsKS5cclxuICAgIC8vICAgIGRvbmUoKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICBsZXQgcmVzID0gZXZhbChyZXN1bHQpO1xyXG5cclxuICAgIC8vICAgICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHJlcy5lcnJvcik7XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICBsZXQgZHMgPSBuZXcgRGF0YXNldCgpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgcmVzLnRhYmxlcy5mb3JFYWNoKCh0YWJsZSkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgbGV0IGRhdGFUYWJsZSA9IG5ldyBEYXRhVGFibGUoZHMpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgZGF0YVRhYmxlLm5hbWUgPSB0YWJsZS5uYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgZHMudGFibGVzLnB1c2goZGF0YVRhYmxlKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUNvbHVtbiA9IG5ldyBEYXRhQ29sdW1uKGRhdGFUYWJsZSwgdGFibGUuY29sdW1uc1tpXS5uYW1lKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGUuY29sdW1ucy5wdXNoKGRhdGFDb2x1bW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgIHRhYmxlLnJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhUm93ID0gbmV3IERhdGFSb3coKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbdGFibGUuY29sdW1uc1tpXS5uYW1lXSA9IHJvd1tpXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1tpXSA9IHJvd1tpXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5yb3dzLnB1c2goZGF0YVJvdyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZHMpXHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfSkuXHJcbiAgICAvLyAgICBmYWlsKCgpID0+IHtcclxuICAgIC8vICAgICAgICBwcm9taXNlLnJlamVjdChcItC+0YjQuNCx0LrQsCBjb25uZWN0aW9uIHNpZ25hbFJcIik7XHJcbiAgICAvLyAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IGVudW0gQ29sdW1uRGF0YVR5cGUgeyBTdHJpbmcsIE51bWJlciwgRGF0YSB9XHJcblxyXG4vL2V4cG9ydCB0eXBlIERhdGFUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZSB7XHJcbiAgICBjb2x1bW5zOiBBcnJheTxEYXRhQ29sdW1uPjtcclxuICAgIHJvd3M6IEFycmF5PERhdGFSb3c+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUNvbHVtbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAvL2RhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlLCBuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVJvdyB7XHJcbiAgICBbaW5kZXg6IHN0cmluZ106IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoY29sdW1uSW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgMCB8fCBjb2x1bW5JbmRleCA+PSB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkRhdGFSb3cuZ2V0VmFsdWUoXCIgKyBjb2x1bW5JbmRleCArIFwiKTogY29sdW1uSW5kZXggb3V0IG9mIHJhbmdlXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBbdGhpcy50YWJsZS5jb2x1bW5zW2NvbHVtbkluZGV4XS5uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvL1tpbmRleDogbnVtYmVyXTogRGF0YVR5cGU7XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NRTC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gaW87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlvXCJcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==