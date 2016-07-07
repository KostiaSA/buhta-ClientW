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
	var SQL_1 = __webpack_require__(29);
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
	            var win2 = React.createElement(TreeGrid_1.TreeGrid, {dataSource: dataSource, treeMode: true, hierarchyFieldName: "Номер", hierarchyDelimiters: ".", autoExpandNodesToLevel: 0}, React.createElement(TreeGridColumns_1.TreeGridColumns, null, React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Колонка2", fieldName: "Номер", showHierarchyTree: false, width: 100}), React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Колонка3", fieldName: "Название", showHierarchyTree: true, width: 200}), React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Колонка1", fieldName: "Ключ", width: 80})));
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
	    AppDesigner.prototype.render = function () {
	        var _this = this;
	        this.addClassName("app-designer");
	        return (React.createElement(App_1.App, React.__spread({}, this.getRenderProps()), React.createElement(Layout_1.Layout, {type: "column"}, React.createElement(Fixed_1.Fixed, {className: "header1"}, "Fixed Header"), React.createElement(Flex_1.Flex, null, React.createElement(Layout_1.Layout, {type: "row"}, React.createElement(Fixed_1.Fixed, {className: "sidebar", style: { width: this.sideWidth }}, "Fixed Sidebar 123", React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testOpenWindow(); }}, " test open window"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testOpenObjectDesigner(); }}, "open designer"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testImmutable(); }}, "testImmutable"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testAutoForm(); }}, "test autoform"), React.createElement("br", null), React.createElement("button", {onClick: function () { _this.testGrid(); }}, "test GRID")), React.createElement(Flex_1.Flex, {className: "XXXcontent"}, React.createElement(Desktop_1.Desktop, null, React.createElement(Movable_1.Movable, {onMoveStart: this.moveStart.bind(this)}, "MOV"))))))));
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
	        // //(this as any)["state"] = {};
	        // if (stateClass)
	        //     this.state = stateClass();
	        // else
	        //     this.state = {} as S;
	        Component.plugins.forEach(function (plug) {
	            var plugInstance = new plug(_this);
	            _this.plugins.push(plugInstance);
	        });
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
	            plug.willReceiveProps(prevProps, prevState, prevContext);
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
	    Component.plugins = [];
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
	        var style = {
	            display: "flex",
	            flex: 1,
	            position: "absolute",
	            left: 0,
	            right: 0,
	            top: 0,
	            bottom: 0
	        };
	        style.flexDirection = (this.props.type === "column") ? "column" : "row";
	        this.addStyles(style);
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
	            flex: 1,
	            position: 'relative'
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
	        return (React.createElement("div", React.__spread({}, this.getRenderProps(), {ref: function (e) { _this.nativeElement = e; }, onClick: this.handleOnClick}), React.createElement(Layout_1.Layout, {type: "column"}, React.createElement(Fixed_1.Fixed, {className: "window-header", style: { borderRadius: "5px 5px 0px 0px", position: "relative", paddingLeft: 10 }}, React.createElement("span", {className: "window-title"}, this.props.title), React.createElement(Layout_1.Layout, {type: "row"}, React.createElement(Flex_1.Flex, null, React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, onMoveStart: this.moveStart})), React.createElement(Fixed_1.Fixed, null, React.createElement("p", {className: "control has-addons buttons-bar", style: { paddingTop: 2, paddingRight: 4 }}, React.createElement("a", {className: "button is-small minimize-button", style: headerButtonStyle}, React.createElement("span", {className: "icon is-small ", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-minus", style: { top: 3 }}))), React.createElement("a", {className: "button is-small maximize-button", style: headerButtonStyle}, React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-square-o", style: { fontWeight: "bold" }}))), React.createElement("a", {className: "button is-small close-button", style: headerButtonStyle, onClick: this.handleCloseButtonClick}, React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-close", style: { top: -1 }}))))))), React.createElement(Flex_1.Flex, {style: { padding: 3, overflow: "auto" }}, this.props.children), React.createElement(Movable_1.Movable, {className: "window-resizer", style: { position: "absolute", height: 10, width: 10, right: 0, bottom: 0, borderRadius: "0 0 5px 0", cursor: "se-resize" }, onMoveStart: this.resizeRightBottomCornerStart}))));
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
	var InternalColumn = (function () {
	    function InternalColumn() {
	    }
	    return InternalColumn;
	}());
	var InternalRow = (function () {
	    function InternalRow() {
	        this.cellElements = [];
	    }
	    return InternalRow;
	}());
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
	    return InternalTreeNode;
	}());
	var TreeGrid = (function (_super) {
	    __extends(TreeGrid, _super);
	    function TreeGrid(props, context) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.lastBodyWrapperHeight = 0;
	        this.lastBodyWrapperWidth = 0;
	        this.handleBodyWrapperElementResize = function () {
	            var newHeight = _this.bodyWrapperElement.offsetHeight;
	            if (newHeight !== _this.lastBodyWrapperHeight) {
	                _this.lastBodyWrapperHeight = newHeight;
	                _this.handleScroll(null);
	            }
	            var newWidth = _this.bodyWrapperElement.offsetWidth;
	            if (newWidth !== _this.lastBodyWrapperWidth) {
	                _this.lastBodyWrapperWidth = newWidth;
	                _this.handleScroll(null);
	            }
	        };
	        //this.state.columns=[];
	    }
	    TreeGrid.prototype.createColumns = function () {
	        var _this = this;
	        this.columns = [];
	        console.log("1");
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
	                _this.columns.push(col);
	            });
	        });
	    };
	    TreeGrid.prototype.initFocused = function () {
	        this.focusedRowIndex = 0;
	        this.focusedCellIndex = 0;
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
	        if (!this.dataSource)
	            return;
	        if (!this.props.hierarchyDelimiters) {
	            console.error("XTreeGrid: hierarchyDelimiters is undefined");
	            return;
	        }
	        var sorted = this.dataSource.map(function (obj, index) {
	            return {
	                hierarchyStr: obj[_this.props.hierarchyFieldName].toString(),
	                objIndex: index
	            };
	        });
	        sorted = _.sortBy(sorted, ["hierarchyStr"]);
	        var cache = {};
	        this.nodes = [];
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
	                    _this.nodes.push(node);
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
	        this.rows = [];
	        if (this.props.treeMode) {
	            if (this.nodes) {
	                this.nodes.forEach(function (node) {
	                    node.pushRowRecursive(_this.rows, _this.pageLength);
	                });
	            }
	        }
	        else {
	            if (!this.dataSource)
	                return;
	            this.dataSource.forEach(function (obj, index) {
	                var row = new InternalRow();
	                row.sourceIndex = index;
	                //row.sourceObject = obj;
	                _this.rows.push(row);
	            });
	            this.initFocused();
	        }
	        if (this.columns && this.columns.length > 0 && this.dataSource)
	            this.columns[0].footer = this.dataSource.length + " поз.";
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
	        this.dataSource = this.props.dataSource;
	        this.createColumns();
	        this.createNodes();
	        this.createRows();
	        this.pageLength = 500;
	    };
	    TreeGrid.prototype.refreshDataSource = function () {
	        this.dataSource = this.props.dataSource;
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
	        if (!this.rows)
	            return ret;
	        console.log("render-rows: " + this.rows.length);
	        this.rows.forEach(function (row, index) {
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
	        this.columns.forEach(function (col, colIndex) {
	            ret.push(_this.renderCell(row, rowIndex, col, colIndex));
	        });
	        return ret;
	    };
	    TreeGrid.prototype.renderCell = function (row, rowIndex, col, colIndex) {
	        var _this = this;
	        var objIndex = row.sourceIndex;
	        var str = this.dataSource[objIndex][col.props.fieldName].toString();
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
	            ;
	        }
	        ;
	        return (React.createElement("td", {key: colIndex, style: tdStyle, ref: function (e) { return row.cellElements[colIndex] = e; }, onClick: function (e) { _this.setFocusedCell(rowIndex, colIndex); }}, React.createElement("div", {style: { display: "flex", flexDirection: "row", alignItems: "center" }}, React.createElement("div", {className: "row-checkbox", style: { flex: "0 0 auto" }}), React.createElement("div", {className: "row-padding", style: { flex: "0 0 auto" }}, hierarchyPaddingDiv), collapseIconDiv, React.createElement("div", {className: "row-icon", style: { flex: "0 0 auto" }}), React.createElement("div", {className: "row-str", style: { flex: "0 1 auto" }}, strSpan))));
	    };
	    TreeGrid.prototype.setFocusedCell = function (rowIndex, cellIndex) {
	        this.focusedRowIndex = rowIndex;
	        this.focusedCellIndex = cellIndex;
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
	        $(this.headerElement).css({ top: this.bodyWrapperElement.scrollTop });
	        var pos = this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerElement).outerHeight() - 0;
	        $(this.footerElement).css({ top: pos });
	        $(this.headerFakeRow).css({ height: $(this.headerElement).outerHeight() });
	        $(this.footerFakeRow).css({ height: $(this.footerElement).outerHeight() });
	    };
	    TreeGrid.prototype.handleChangeFocused = function () {
	        if (!this.rows)
	            return;
	        this.rows.forEach(function (row) {
	            if (row.element)
	                $(row.element).removeClass("tree-grid-focused-row");
	            row.cellElements.forEach(function (cell) {
	                if (cell)
	                    $(cell).removeClass("tree-grid-focused-cell");
	            });
	        });
	        var focusedRow = this.rows[this.focusedRowIndex];
	        if (focusedRow && focusedRow.element) {
	            $(focusedRow.element).addClass("tree-grid-focused-row");
	            var focusedCellElement = focusedRow.cellElements[this.focusedCellIndex];
	            if (focusedCellElement) {
	                $(focusedCellElement).addClass("tree-grid-focused-cell");
	            }
	        }
	    };
	    TreeGrid.prototype.getFocusedCellElement = function () {
	        return this.rows[this.focusedRowIndex].cellElements[this.focusedCellIndex];
	    };
	    TreeGrid.prototype.getFocusedRowElement = function () {
	        return this.rows[this.focusedRowIndex].element;
	    };
	    TreeGrid.prototype.moveFocusedCellDown = function () {
	        if (!this.rows)
	            return;
	        if (this.focusedRowIndex < this.rows.length - 1) {
	            this.focusedRowIndex++;
	            this.handleChangeFocused();
	            var rowEl = $(this.getFocusedRowElement());
	            // ушло за пределы видимости
	            if (rowEl.position().top + rowEl.height() >
	                this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerElement).outerHeight()) {
	                this.bodyWrapperElement.scrollTop = rowEl.position().top + rowEl.height() -
	                    this.bodyWrapperElement.clientHeight + $(this.footerElement).outerHeight();
	            }
	        }
	    };
	    TreeGrid.prototype.moveFocusedCellLeft = function () {
	        if (!this.rows)
	            return;
	        if (this.focusedCellIndex > 0) {
	            this.focusedCellIndex--;
	            this.handleChangeFocused();
	        }
	    };
	    TreeGrid.prototype.moveFocusedCellRight = function () {
	        if (!this.rows)
	            return;
	        if (this.focusedCellIndex < this.columns.length - 1) {
	            this.focusedCellIndex++;
	            this.handleChangeFocused();
	        }
	    };
	    TreeGrid.prototype.moveFocusedCellUp = function () {
	        if (!this.rows)
	            return;
	        if (this.focusedRowIndex > 0) {
	            this.focusedRowIndex--;
	            this.handleChangeFocused();
	            var rowEl = $(this.getFocusedRowElement());
	            // ушло за пределы видимости
	            if (rowEl.position().top < this.bodyWrapperElement.scrollTop + $(this.headerElement).outerHeight()) {
	                this.bodyWrapperElement.scrollTop = rowEl.position().top - $(this.headerElement).outerHeight();
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
	        this.columns.forEach(function (col, index) {
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px"}));
	            var tdStyle = { overflow: "hidden" };
	            colHeaders.push(React.createElement("td", {key: index, style: tdStyle}, col.caption));
	        });
	        return (React.createElement("div", {ref: function (e) { return _this.headerElement = e; }, style: { position: "absolute", border: "0px solid red" }}, React.createElement("table", {className: "tree-grid-header", style: { tableLayout: "fixed", borderCollapse: "collapse", width: this.calcTotalColumnsWidth() + 25 }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, colHeaders)))));
	    };
	    TreeGrid.prototype.renderColumnFooters = function () {
	        var _this = this;
	        var colWidths = [];
	        var colFooters = [];
	        var isFooterEmpty = true;
	        this.columns.forEach(function (col, index) {
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px"}));
	            if (col.footer)
	                isFooterEmpty = false;
	            var tdStyle = { overflow: "hidden" };
	            colFooters.push(React.createElement("td", {key: index, style: tdStyle}, col.footer));
	        });
	        if (!isFooterEmpty)
	            return (React.createElement("div", {ref: function (e) { return _this.footerElement = e; }, style: { position: "absolute", border: "0px solid blue" }}, React.createElement("table", {className: "tree-grid-footer", style: { tableLayout: "fixed", borderCollapse: "collapse", width: this.calcTotalColumnsWidth() + 25 }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, colFooters)))));
	        else
	            return undefined;
	    };
	    TreeGrid.prototype.renderGridBody = function () {
	        var _this = this;
	        var colWidths = [];
	        this.columns.forEach(function (col, index) {
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px"}));
	        });
	        return (React.createElement("table", {className: "tree-grid-body", tabIndex: 0, onKeyDown: function (e) { _this.handleBodyKeyDown(e); }, style: { tableLayout: "fixed", borderCollapse: "collapse", position: "relative", width: this.calcTotalColumnsWidth() + 25 }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {ref: function (e) { return _this.headerFakeRow = e; }})), this.renderRows(), React.createElement("tr", null, React.createElement("td", {ref: function (e) { return _this.footerFakeRow = e; }})))));
	    };
	    TreeGrid.prototype.calcTotalColumnsWidth = function () {
	        var ret = 0;
	        this.columns.forEach(function (col) {
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
	        return (React.createElement("div", {className: "tree-grid", style: { display: "flex", flexDirection: "column", height: "100%" }}, React.createElement("div", {className: "tree-grid-header-wrapper", style: { flex: "0 0 auto" }}, React.createElement("button", {onClick: function () { }}, "refresh 5001"), React.createElement("button", {onClick: function () { _this.filterData(); _this.forceUpdate(); console.log("forceUpdate"); }}, "filter"), "заголовок и т.д."), React.createElement("div", {className: "tree-grid-body-wrapper", style: { position: "relative", overflow: "auto", flex: "0 1 auto", maxWidth: this.calcTotalColumnsWidth() + 50 }, onScroll: this.handleScroll.bind(this), ref: function (e) { return _this.bodyWrapperElement = e; }}, React.createElement("div", null, this.renderGridBody(), this.renderColumnHeaders(), this.renderColumnFooters())), React.createElement("div", {className: "tree-grid-footer-wrapper", style: { flex: "0 1 auto" }}, "футер и тд")));
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var io = __webpack_require__(30);
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
/* 30 */
/***/ function(module, exports) {

	module.exports = io;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGRlMzdmYWI1ZjcyYTQ3ZjI3MjUiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Rlc2t0b3AvRGVza3RvcC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9XaW5kb3cvV2luZG93LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGUudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0tleUNvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NRTC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpb1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSxLQUFZLEtBQUssdUJBQU0sQ0FBTyxDQUFDO0FBQy9CLEtBQVksUUFBUSx1QkFBTSxDQUFXLENBQUM7QUFJdEMseUNBQTBCLENBQStDLENBQUM7QUFDMUUsOENBQStCLENBQTJCLENBQUM7QUFFM0Qsb0JBQW1CO0FBQ25CLDBEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsTUFBSztBQUVMLG9CQUFtQjtBQUNuQixlQUFjO0FBQ2QscUJBQW9CO0FBQ3BCLE1BQUs7QUFFTCxTQUFRLENBQUMsTUFBTSxDQUNYLG9CQUFDLHlCQUFXLE9BQUUsRUFDZCxRQUFRLENBQUMsSUFBSSxDQUNoQixDQUFDO0FBR0YsS0FBSSxHQUFHLEdBQUMsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBQy9CLEtBQUksSUFBSSxHQUFDLElBQUksbUNBQWdCLEVBQUUsQ0FBQzs7Ozs7OztBQ3pCaEMsd0I7Ozs7OztBQ0FBLDJCOzs7Ozs7Ozs7Ozs7QUNBQSxLQUFZLEtBQUssdUJB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RSxDQUFDO1NBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0tBQ25CLENBQUM7S0FDTCxnQkFBQztBQUFELEVBQUM7QUFSWSxrQkFBUyxZQVFyQjtBQUVEO0tBRUksMkJBQTJCO0tBQzNCLG9CQUFtQixLQUFnQixFQUFFLElBQWE7U0FBL0IsVUFBSyxHQUFMLEtBQUssQ0FBVztTQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUVyQixDQUFDO0tBQ0wsaUJBQUM7QUFBRCxFQUFDO0FBUFksbUJBQVUsYUFPdEI7QUFHRDtLQUVJLGlCQUFtQixLQUFnQjtTQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO0tBQ25DLENBQUM7S0FFRCwwQkFBUSxHQUFSLFVBQVMsV0FBbUI7U0FDeEIsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzVELE1BQU0sbUJBQW1CLEdBQUcsV0FBVyxHQUFHLDZCQUE2QixDQUFDO1NBRTVFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xELENBQUM7S0FHTCxjQUFDO0FBQUQsRUFBQztBQWJZLGdCQUFPLFVBYW5COzs7Ozs7O0FDcklELHFCIiwiZmlsZSI6Ii4vZGlzdC9CdWh0YUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNGRlMzdmYWI1ZjcyYTQ3ZjI3MjVcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgSGVsbG8gfSBmcm9tIFwiLi9IZWxsb1Byb3BzXCI7XHJcbmltcG9ydCB7QXBwfSBmcm9tIFwiLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0FwcFwiO1xyXG5pbXBvcnQge0FwcERlc2lnbmVyfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0FwcERlc2lnbmVyL0FwcERlc2lnbmVyXCI7XHJcbmltcG9ydCB7VGVzdEJ1aHRhT2JqZWN0MX0gZnJvbSBcIi4uL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDFcIjtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICAgIDxIZWxsbyBjb21waWxlcj1cIlR5cGVTY3JpcHRcIiBmcmFtZXdvcms9XCJSZWFjdFwiIC8+LFxyXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpXHJcbi8vICk7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoXHJcbi8vICAgICA8QXBwLz4sXHJcbi8vICAgICBkb2N1bWVudC5ib2R5XHJcbi8vICk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8QXBwRGVzaWduZXIvPixcclxuICAgIGRvY3VtZW50LmJvZHlcclxuKTtcclxuXHJcblxyXG5sZXQgeHh4PW5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcbmxldCB4eHgxPW5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GbGV4XCI7XHJcblxyXG5pbXBvcnQge1Rlc3RCdWh0YU9iamVjdDF9IGZyb20gXCIuLi8uLi9UZXN0MS90ZXN0QnVodGFPYmplY3QxXCI7XHJcbmltcG9ydCB7T2JqZWN0RGVzaWduZXJ9IGZyb20gXCIuLi9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lclwiO1xyXG5pbXBvcnQge0Rlc2t0b3AsIE9wZW5XaW5kb3dQYXJhbXN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCB7RHJhZ2dhYmxlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0RyYWdnYWJsZS9EcmFnZ2FibGVcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlRXZlbnQsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge0FwcCwgYXBwSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7V2luZG93fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHtJbnB1dCwgSW5wdXRUeXBlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7SW5wdXREaXZpZGVyfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0RGl2aWRlci9JbnB1dERpdmlkZXJcIjtcclxuaW1wb3J0IHt0ZXN0QnVodGFPYmplY3QyfSBmcm9tIFwiLi4vLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MlwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtBdXRvRm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge1RyZWVHcmlkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW59IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbnN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zXCI7XHJcbmltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNpZ25lclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8QXBwRGVzaWduZXJTdGF0ZT4ge1xyXG4gICAgLy90ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBBcHBEZXNpZ25lclN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8QXBwRGVzaWduZXJQcm9wcz4ge1xyXG4gICAgLy90ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwRGVzaWduZXIgZXh0ZW5kcyBDb21wb25lbnQ8QXBwRGVzaWduZXJQcm9wcywgQXBwRGVzaWduZXJTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFwcERlc2lnbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBBcHBEZXNpZ25lclN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBpbml0VGVzdCgpIHtcclxuICAgIC8vICAgICB0aGlzLnRlc3RPYmplY3QubmFtZSA9IFwi0KLQtdGB0YLQvtCy0YvQuSDQvtCx0YrQtdC60YIxXCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbW92ZVN0YXJ0KGU6IE1vdmVTdGFydEV2ZW50KSB7XHJcbiAgICAgICAgZS5iaW5kWCh0aGlzLCBcInNpZGVXaWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2lkZVdpZHRoOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gICAgdGVzdE9wZW5XaW5kb3coKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCBvYmogPSB7XHJcbiAgICAgICAgLy8gICAgINCk0LDQvNC40LvQuNGPOiBcItCh0LDQstGH0LXQvdC60L7QslwiLFxyXG4gICAgICAgIC8vICAgICDQmNC80Y86IFwi0JrQvtC90YHRgtCw0L3RgtC40L1cIixcclxuICAgICAgICAvLyAgICAg0J7RgtGH0LXRgdGC0LLQvjogXCLQktC70LDQtNC40LzQuNGA0L7QstC40YdcIlxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBsZXQgd2luID1cclxuICAgICAgICAvLyAgICAgPFRhYnM+XHJcbiAgICAgICAgLy8gICAgICAgICA8VGFiIHRpdGxlPVwi0LfQsNC60LvQsNC00LrQsCAxXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dCBjYXB0aW9uPVwi0KTQsNC80LjQu9C40Y9cIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17b2JqfSBiaW5kUHJvcE5hbWU9XCLQpNCw0LzQuNC70LjRj1wiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0IGNhcHRpb249XCLQmNC80Y9cIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17b2JqfSBiaW5kUHJvcE5hbWU9XCLQmNC80Y9cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dERpdmlkZXIgdGl0bGU9XCLQsCDRgtC10L/QtdGA0Ywg0L7RgtGH0LXRgdGC0LLQvlwiPjwvSW5wdXREaXZpZGVyPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0J7RgtGH0LXRgdGC0LLQvlwiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgLy8gICAgICAgICA8L1RhYj5cclxuICAgICAgICAvLyAgICAgICAgIDxUYWIgdGl0bGU9XCLQt9Cw0LrQu9Cw0LTQutCwIDJcIj4gMjIyMjIgPC9UYWI+XHJcbiAgICAgICAgLy8gICAgIDwvVGFicz47XHJcbiAgICAgICAgLy8gYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbik7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB0ZXN0T3Blbk9iamVjdERlc2lnbmVyKCkge1xyXG4gICAgICAgIGxldCB0ZXN0T2JqZWN0OiBUZXN0QnVodGFPYmplY3QxID0gbmV3IFRlc3RCdWh0YU9iamVjdDEoKTtcclxuICAgICAgICB0ZXN0T2JqZWN0LmZpcnN0TmFtZSA9IFwi0JjQs9C+0YDRjDBcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Lmxhc3ROYW1lID0gXCLQodC40LTQvtGA0LXQvdC60L4wXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdC5zdXJOYW1lID0gXCLQntC70LXQs9C+0LLQuNGHMFwiO1xyXG5cclxuLy8gICAgICAgIGxldCB3aW4gPSA8T2JqZWN0RGVzaWduZXIgb25DaGFuZ2U9eygpPT57IHdpbjJJbnN0YW5jZS5kZXNpZ25lZE9iamVjdD1udWxsOyB3aW4ySW5zdGFuY2UuZm9yY2VVcGRhdGUoKTsgY29uc29sZS5sb2coXCJ0ZXN0MzIzLWNoYW5nZVwiKX19IGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0fSBrZXk9XCIxXCI+IDwvT2JqZWN0RGVzaWduZXI+O1xyXG4gICAgICAgIGxldCB3aW4gPSA8T2JqZWN0RGVzaWduZXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpPT57IHRlc3RPYmplY3Q9Xy5jbG9uZURlZXAodGVzdE9iamVjdCk7ICB3aW4ySW5zdGFuY2UuZm9yY2VVcGRhdGUoKTsgY29uc29sZS5sb2coXCJ0ZXN0OTk5LWNoYW5nZVwiKX19XHJcbiAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0fSBrZXk9XCIxXCI+IDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICBsZXQgdGVzdE9iamVjdDI6IHRlc3RCdWh0YU9iamVjdDIgPSBuZXcgdGVzdEJ1aHRhT2JqZWN0MigpO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLmZpcnN0TmFtZSA9IFwi0JjQs9C+0YDRjDFcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5sYXN0TmFtZSA9IFwi0KHQuNC00L7RgNC10L3QutC+MlwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLnN1ck5hbWUgPSBcItCe0LvQtdCz0L7QstC40YcxXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdDIuc2V4ID0gXCLQvNGD0LbRgdC60L7QuVwiO1xyXG5cclxuICAgICAgICBsZXQgd2luMkluc3RhbmNlOiBhbnk7XHJcblxyXG4gICAgICAgIGxldCB3aW4yID0gPE9iamVjdERlc2lnbmVyIHJlZj17IChlOmFueSkgPT4geyB3aW4ySW5zdGFuY2UgPSBlOyB9IH0gZGVzaWduZWRPYmplY3Q9e3Rlc3RPYmplY3QyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjJcIj5cclxuICAgICAgICA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgLy9nZXRQcm9wZXJ0eUVkaXRvcnModGVzdE9iamVjdCk7XHJcbiAgICAgICAgLy9nZXRQcm9wZXJ0eUVkaXRvcnModGVzdE9iamVjdDIpO1xyXG5cclxuICAgICAgICBsZXQgd2lud2luID0gPGRpdj57d2lufXt3aW4yfTwvZGl2PjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi0L7QutC90L4gMVwiLFxyXG4gICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICBsZWZ0OiA1MFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW53aW4sIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGVzdEltbXV0YWJsZSgpIHtcclxuICAgICAgICAvLyAvL2xldCBmYWtlPW5ldyBUYWJsZShbXSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zdCB4eHggPSBJbW11dGFibGUuTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IG9iaiA9IHtcclxuICAgICAgICAvLyAgICAgbmFtZTogXCLQntCz0LDQvdC40LfQsNGG0LjRj1wiLFxyXG4gICAgICAgIC8vICAgICBjb2x1bW5zOiB7XCLQndC+0LzQtdGAXCI6IHtjb2xOYW1lOiBcItCd0L7QvNC10YBcIiwgdHlwZTogXCJzdHJpbmdcIn0sIFwi0J3QsNC30LLQsNC90LjQtVwiOiB7Y29sTmFtZTogXCLQndCw0LfQstCw0L3QuNC1XCIsIHR5cGU6IFwic3RyaW5nXCJ9fVxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBsZXQgb2JqSSA9IEltbXV0YWJsZS5mcm9tSlMob2JqKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIC8vbGV0IG0gPSBJbW11dGFibGUuTWFwPHN0cmluZyxudW1iZXJ8IEltbXV0YWJsZS5NYXA8bnVtYmVyLHN0cmluZz4+KCk7XHJcbiAgICAgICAgLy8gLy9sZXQgeCA9IG0uc2V0KFwiMTN5eXQzMzMzMzJcIiwgMTIpO1xyXG4gICAgICAgIC8vIC8vbGV0IHkgPSBtLnNldChcInh4eFwiLCBJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+KCkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLy9sZXQgeT1tLnVwZGF0ZShcInh4eFwiLEltbXV0YWJsZS5NYXA8bnVtYmVyLHN0cmluZz4oKSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmpJLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIC8vIGxldCB4ID0gb2JqSS5nZXRJbihbJ2NvbHVtbnMnLCAn0J3QvtC80LXRgCcsICdjb2xOYW1lJ10pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgc3RyOiBzdHJpbmcgPSBcItC/0YDQuNCy0LXRglwiO1xyXG5cclxuICAgIHRlc3RBdXRvRm9ybSgpIHtcclxuICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgIDxBdXRvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc30gYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMVwiIGlucHV0Q2FwdGlvbj1cImVlZTFcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsxXCIgaW5wdXRDYXB0aW9uPVwiZWVlMlwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizFcIiBpbnB1dENhcHRpb249XCJlZWUzXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMlwiIGlucHV0Q2FwdGlvbj1cImVlZTRcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgIDwvQXV0b0Zvcm0+O1xyXG4vLyAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLXCIgaW5wdXRDYXB0aW9uPVwiZWVlXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9IGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiYXV0byBmb3JtXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDEwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRlc3RHcmlkKCkge1xyXG4gICAgICAgIGV4ZWN1dGVTUUwoXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YBcIilcclxuICAgICAgICAgICAgLmRvbmUoKHRhYmxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IHRhYmxlLnJvd3MubWFwKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHvQmtC70Y7RhzogcltcItCa0LvRjtGHXCJdLCDQndC+0LzQtdGAOiByW1wi0J3QvtC80LXRgFwiXSwg0J3QsNC30LLQsNC90LjQtTogcltcItCd0LDQt9Cy0LDQvdC40LVcIl19O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YAgPT5cIiArIHRhYmxlLnJvd3NbMF0uZ2V0VmFsdWUoMSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9eyBkYXRhU291cmNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlTW9kZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWVyYXJjaHlGaWVsZE5hbWU9XCLQndC+0LzQtdGAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0V4cGFuZE5vZGVzVG9MZXZlbD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW5zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwMlwiIGZpZWxkTmFtZT1cItCd0L7QvNC10YBcIiBzaG93SGllcmFyY2h5VHJlZT17ZmFsc2V9IHdpZHRoPXsxMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJlZUdyaWRDb2x1bW4gY2FwdGlvbj1cItCa0L7Qu9C+0L3QutCwM1wiIGZpZWxkTmFtZT1cItCd0LDQt9Cy0LDQvdC40LVcIiBzaG93SGllcmFyY2h5VHJlZT17dHJ1ZX0gd2lkdGg9ezIwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JrQvtC70L7QvdC60LAxXCIgZmllbGROYW1lPVwi0JrQu9GO0YdcIiB3aWR0aD17ODB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW5zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmVlR3JpZD47XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJhdXRvIGZvcm1cIixcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW4yLCBvcGVuUGFyYW0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mYWlsKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXBwLWRlc2lnbmVyXCIpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFwcCB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJoZWFkZXIxXCI+Rml4ZWQgSGVhZGVyPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQgY2xhc3NOYW1lPVwic2lkZWJhclwiIHN0eWxlPXt7d2lkdGg6dGhpcy5zaWRlV2lkdGh9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaXhlZCBTaWRlYmFyIDEyMzxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdE9wZW5XaW5kb3coKTsgfX0+IHRlc3Qgb3BlbiB3aW5kb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RPcGVuT2JqZWN0RGVzaWduZXIoKTsgfX0+b3BlbiBkZXNpZ25lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEltbXV0YWJsZSgpOyB9fT50ZXN0SW1tdXRhYmxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0QXV0b0Zvcm0oKTsgfX0+dGVzdCBhdXRvZm9ybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdEdyaWQoKTsgfX0+dGVzdCBHUklEPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwiWFhYY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92YWJsZSBvbk1vdmVTdGFydD17dGhpcy5tb3ZlU3RhcnQuYmluZCh0aGlzKX0+TU9WPC9Nb3ZhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0FwcD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgc2hhbGxvd0NvbXBhcmUgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZVwiKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWE9uQ2xpY2tQcm9wcyB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuUmVhY3RFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudFByb3BzPFM+IGV4dGVuZHMgUmVhY3QuQ2xhc3NBdHRyaWJ1dGVzPEVsZW1lbnQ+IHtcclxuICAgIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG5cclxuICAgIG9uV2lsbE1vdW50PzogKHN0YXRlOiBTKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFN0YXRlPFA+IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnQ6IENvbXBvbmVudDxQLGFueT4pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9yY2VVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvL2NsaWNrQ291bnQ6IG51bWJlcjtcclxuICAgIC8vIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8Uz4sIFMgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxQPj4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UCwgUz4ge1xyXG5cclxuICAgIHN0YXRpYyBwbHVnaW5zOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHBsdWdpbnM6IGFueVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFAsIGNvbnRleHQ6IGFueSAvKnN0YXRlQ2xhc3M/OiBGdW5jdGlvbiovKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHJcbiAgICAgICAgLy8gLy8odGhpcyBhcyBhbnkpW1wic3RhdGVcIl0gPSB7fTtcclxuICAgICAgICAvLyBpZiAoc3RhdGVDbGFzcylcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlQ2xhc3MoKTtcclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUgPSB7fSBhcyBTO1xyXG5cclxuICAgICAgICBDb21wb25lbnQucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwbHVnSW5zdGFuY2U6IGFueSA9IG5ldyBwbHVnKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChwbHVnSW5zdGFuY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdGl2ZUVsZW1lbnQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJQcm9wczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIHJlbmRlclN0eWxlczogYW55ID0ge307XHJcblxyXG4gICAgYWRkUHJvcHMocHJvcHM6IE9iamVjdCkge1xyXG4gICAgICAgIF8uYXNzaWduV2l0aCh0aGlzLnJlbmRlclByb3BzLCBwcm9wcywgKG9iamVjdFZhbHVlOiBhbnksIHNvdXJjZVZhbHVlOiBhbnksIGtleT86IHN0cmluZyk9PiB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiY2xhc3NcIiB8fCBrZXkgPT09IFwiY2xhc3NOYW1lXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiaW52YWxpZCBwcm9wZXJ0eSAnXCIgKyBrZXkgKyBcIicsIHVzZSBmdW5jdGlvbnMgYWRkQ2xhc3NOYW1lKCksIHRvZ2dsZUNsYXNzTmFtZSgpXCIpO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInN0eWxlXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiaW52YWxpZCBwcm9wZXJ0eSAnXCIgKyBrZXkgKyBcIicsIHVzZSBmdW5jdGlvbnMgYWRkU3R5bGVzKCksIHJlbW92ZVN0eWxlKClcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdHlsZXMoc3R5bGVzOiBPYmplY3QpIHtcclxuICAgICAgICBfLmFzc2lnbih0aGlzLnJlbmRlclN0eWxlcywgc3R5bGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclN0eWxlcygpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclN0eWxlcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVN0eWxlKHN0eWxlOiBzdHJpbmcpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5yZW5kZXJTdHlsZXNbc3R5bGVdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVN0eWxlcyhzdHlsZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgc3R5bGVzLmZvckVhY2goKHN0eWxlKT0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVuZGVyU3R5bGVzW3N0eWxlXTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy5kaWRNb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaWRNb3VudCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbE1vdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsTW91bnQoKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbldpbGxNb3VudClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbldpbGxNb3VudCh0aGlzLnN0YXRlKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHM6IFApID0+IHtcclxuICAgICAgICB0aGlzLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlzUHJvcHNFcXVhbChvYmoxOiBhbnksIG9iajI6IGFueSwgZXhjbHVkZVByb3BzPzogc3RyaW5nW10pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgLy9Mb29wIHRocm91Z2ggcHJvcGVydGllcyBpbiBvYmplY3QgMVxyXG4gICAgICAgIGZvciAobGV0IHAgaW4gb2JqMSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVQcm9wcyAmJiBleGNsdWRlUHJvcHMuaW5kZXhPZihwKSA+PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIC8vQ2hlY2sgcHJvcGVydHkgZXhpc3RzIG9uIGJvdGggb2JqZWN0c1xyXG4gICAgICAgICAgICBpZiAob2JqMS5oYXNPd25Qcm9wZXJ0eShwKSAhPT0gb2JqMi5oYXNPd25Qcm9wZXJ0eShwKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9iajFbcF0gIT09IG9iajJbcF0pIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIxIG5vdCBlcXVhbCBcIiArIHApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gc3dpdGNoICh0eXBlb2YgKG9iajFbcF0pKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvL0RlZXAgY29tcGFyZSBvYmplY3RzXHJcbiAgICAgICAgICAgIC8vICAgICBjYXNlICdvYmplY3QnOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmICghT2JqZWN0LmNvbXBhcmUob2JqMVtwXSwgb2JqMltwXSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIC8vQ29tcGFyZSBmdW5jdGlvbiBjb2RlXHJcbiAgICAgICAgICAgIC8vICAgICBjYXNlICdmdW5jdGlvbic6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHR5cGVvZiAob2JqMltwXSkgPT0gJ3VuZGVmaW5lZCcgfHwgKHAgIT0gJ2NvbXBhcmUnICYmIG9iajFbcF0udG9TdHJpbmcoKSAhPSBvYmoyW3BdLnRvU3RyaW5nKCkpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICAvL0NvbXBhcmUgdmFsdWVzXHJcbiAgICAgICAgICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChvYmoxW3BdICE9PSBvYmoyW3BdKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ2hlY2sgb2JqZWN0IDIgZm9yIGFueSBleHRyYSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgZm9yIChsZXQgcCBpbiBvYmoyKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKG9iajFbcF0pID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiAob2JqMltwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIyIG5vdCBlcXVhbCBcIiArIHApO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmoxKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqMik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIHNoYWxsb3dDb21wYXJlKG5leHRQcm9wczogUCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coXCJzaGFsbG93LTAgXCIgKyB0aGlzLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDMwKSk7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLnRpbWUoXCIyMlwiKTtcclxuICAgIC8vICAgICBsZXQgcmV0ID0gc2hhbGxvd0NvbXBhcmUodGhpcywgbmV4dFByb3BzLCB0aGlzLnN0YXRlKTtcclxuICAgIC8vICAgICAvL2NvbnNvbGUudGltZUVuZChcIjIyXCIpO1xyXG4gICAgLy8gICAgIHJldHVybiByZXQ7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gcHJpdmF0ZSBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAobmV4dFByb3BzOiBQLCBuZXh0U3RhdGU6IFMpID0+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5zaGFsbG93Q29tcGFyZShuZXh0UHJvcHMpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHM6IFAsIHByZXZTdGF0ZTogUywgcHJldkNvbnRleHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBwcmV2Q29udGV4dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCBkaWRVcGRhdGUocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxSZWNlaXZlUHJvcHMocHJldlByb3BzLCBwcmV2U3RhdGUsIHByZXZDb250ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsVW5tb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsVW5tb3VudCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRDbGFzc05hbWUoY2xhc3NOYW1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNsYXNzTmFtZShib29sVmFsdWU6IGJvb2xlYW4sIHRydWVDbGFzc05hbWVzOiBzdHJpbmcsIGZhbHNlQ2xhc3NOYW1lcz86IHN0cmluZykge1xyXG4gICAgICAgIGlmIChib29sVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUodHJ1ZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoZmFsc2VDbGFzc05hbWVzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzc05hbWUoZmFsc2VDbGFzc05hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3NOYW1lKHRydWVDbGFzc05hbWVzKTtcclxuICAgICAgICAgICAgaWYgKGZhbHNlQ2xhc3NOYW1lcylcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKGZhbHNlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWVzOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lcylcclxuICAgICAgICAgICAgY2xhc3NOYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNsYXNzZXMuc3BsaWNlKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpLCAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJDbGFzc2VzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNsYXNzZXMuam9pbihcIiBcIik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZW5kZXJQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclByb3BzLmNsYXNzTmFtZSA9IHRoaXMucmVuZGVyQ2xhc3NOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9wcy5zdHlsZSA9IHRoaXMucmVuZGVyU3R5bGVzO1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMucmVuZGVyUHJvcHMuc3R5bGUsIHRoaXMucHJvcHMuc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclByb3BzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBnZXRSZWFjdEVsZW1lbnRDbGFzc05hbWUoZWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC50eXBlID8gZWxlbWVudC50eXBlLnRvU3RyaW5nKCkuc3BsaXQoXCIoXCIpWzBdLnNwbGl0KFwiIFwiKVsxXSA6IFwiXCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW4oY2hpbGRUeXBlOiBGdW5jdGlvbik6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkVHlwZSA9PT0gY2hpbGQudHlwZSlcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkcmVuT2ZQcm9wcyhwcm9wczogYW55LCBjaGlsZFR5cGU6IEZ1bmN0aW9uKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkVHlwZSA9PT0gY2hpbGQudHlwZSlcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmVuZGVyKCkge1xyXG4gICAgLy8gICAgcmV0dXJuIChuZXcpXHJcbiAgICAvLyAgICAvLyAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSB9PlxyXG4gICAgLy8gICAgLy8gICAgICAgIENvbXBvbmVudCBmcm9tIHt0aGlzLnByb3BzLmNvbXBpbGVyfSBhbmQge3RoaXMucHJvcHMuZnJhbWV3b3JrfSFjbGlja0NvdW50PXt0aGlzLnN0YXRlLmNsaWNrQ291bnR9XHJcbiAgICAvLyAgICAvLyAgICA8L2J1dHRvbj5cclxuICAgIC8vICAgIC8vKTtcclxuICAgIC8vfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudC50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9cIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbiAgICB0eXBlOiBcImNvbHVtblwiIHwgXCJyb3dcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudDxMYXlvdXRQcm9wcyxhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkxheW91dFwiKTtcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdHlsZS5mbGV4RGlyZWN0aW9uID0gKHRoaXMucHJvcHMudHlwZSA9PT0gXCJjb2x1bW5cIikgPyBcImNvbHVtblwiIDogXCJyb3dcIjtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe29uQ2xpY2s6IHRoaXMucHJvcHMub25DbGlja30pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9ID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0LnRzeFxuICoqLyIsIlxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpeGVkUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXhlZCBleHRlbmRzIENvbXBvbmVudDxGaXhlZFByb3BzLCBhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJGaXhlZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9ID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRml4ZWQudHN4XG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmxleFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGbGV4IGV4dGVuZHMgQ29tcG9uZW50PEZsZXhQcm9wcyxhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJGbGV4XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9ID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRmxleC50c3hcbiAqKi8iLCJpbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7U3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RCdWh0YU9iamVjdDEgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCk0LDQvNC40LvQuNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCk0LDQvNC40LvQuNGPINCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQmNC80Y9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0JjQvNGPXCJcclxuICAgIH0pXHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQntGC0YfQtdGB0YLQstC+XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCe0YLRh9C10YHRgtCy0L4g0LDQsdC+0L3QtdC90YLQsFwiXHJcbiAgICB9KVxyXG4gICAgc3VyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50c1xuICoqLyIsIu+7v2ltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvLCBCYXNlUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25lZE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICAkJHVud2F0Y2hlZFByb3BzOiBzdHJpbmdbXSA9IFtcInByb3BlcnR5RWRpdG9yc1wiLCBcIiQkdW53YXRjaGVkUHJvcHNcIl07XHJcblxyXG4gICAgLy8gaWQ6IHN0cmluZztcclxuICAgIC8vIG5hbWU6IHN0cmluZztcclxuICAgIC8vIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgLy8gaW5oZXJpdEZyb206IHN0cmluZztcclxuICAgIC8vIG1vZHVsZU5hbWU6IHN0cmluZztcclxuICAgIC8vIHJlZmVyZW5jZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgICAvL3ByaXZhdGUgc3RhdGljIHByb3BlcnR5RWRpdG9yczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBQcm9wZXJ0eUVkaXRvckluZm87IH0gPSB7fTtcclxuXHJcbiAgICAvLyBzdGF0aWMgcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWU6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5UGFnZTogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlHcm91cDogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlEZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogdHlwZW9mIERlc2lnbmVkT2JqZWN0LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yVHlwZTogdHlwZW9mIEJhc2VQcm9wZXJ0eUVkaXRvcixcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZTogdHlwZW9mIE9iamVjdCB8IHR5cGVvZiBTdHJpbmcpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IGluZm86IFByb3BlcnR5RWRpdG9ySW5mbyA9IHtcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5UGFnZTogcHJvcGVydHlQYWdlLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eUdyb3VwOiBwcm9wZXJ0eUdyb3VwLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eURlc2NyaXB0aW9uOiBwcm9wZXJ0eURlc2NyaXB0aW9uLFxyXG4gICAgLy8gICAgICAgICBvYmplY3RUeXBlOiBvYmplY3RUeXBlLFxyXG4gICAgLy8gICAgICAgICBlZGl0b3JUeXBlOiBlZGl0b3JUeXBlLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eVR5cGU6IHByb3BlcnR5VHlwZSxcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIERlc2lnbmVkT2JqZWN0LnByb3BlcnR5RWRpdG9yc1twcm9wZXJ0eU5hbWVdID0gaW5mbztcclxuICAgIC8vXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlclByb3BlcnR5RWRpdG9yIFwiICsgcHJvcGVydHlOYW1lKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0IHByb3BlcnR5RWRpdG9ycygpOnsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogUHJvcGVydHlFZGl0b3JJbmZvOyB9e1xyXG4gICAgLy8gICAgIHJldHVybiAoRGVzaWduZWRPYmplY3QgYXMgYW55KS4kJHByb3BlcnR5RWRpdG9ycztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9ycygpIHtcclxuICAgIC8vICAgICB0aGlzLnByb3BlcnR5RWRpdG9ycy5sZW5ndGggPSAwO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9yKHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eUVkaXRvcjogQmFzZVByb3BlcnR5RWRpdG9yKSB7XHJcbiAgICAvLyAgICAgcHJvcGVydHlFZGl0b3IuZGVzaWduZWRPYmplY3QgPSB0aGlzO1xyXG4gICAgLy8gICAgIHByb3BlcnR5RWRpdG9yLnByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZTtcclxuICAgIC8vICAgICB0aGlzLnByb3BlcnR5RWRpdG9ycy5wdXNoKHByb3BlcnR5RWRpdG9yKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBlbWl0VHNDb2RlKCk6IHN0cmluZyB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMucmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcnMoKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IHRzQ29kZSA9IG5ldyBUc0NvZGUodGhpcy5tb2R1bGVOYW1lLCB0aGlzLmNsYXNzTmFtZSwgdGhpcy5pbmhlcml0RnJvbSwgdGhpcy5yZWZlcmVuY2VzKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGVkaXRvci5kZXNpZ25lZE9iamVjdCA9IHRoaXM7XHJcbiAgICAvLyAgICAgICAgIGVkaXRvci5lbWl0VHNDb2RlKHRzQ29kZSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiB0c0NvZGUuZ2V0Q29kZSgpO1xyXG4gICAgLy8gfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCYXNlUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtyZWdpc3RlclByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi9yZWdpc3RlclByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7SW5wdXRUeXBlLCBJbnB1dH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1Byb3BlcnR5RWRpdG9yIGV4dGVuZHMgQmFzZVByb3BlcnR5RWRpdG9yIHtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSB7XHJcbiAgICAgICAvLyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlID09PSBcIiArIHRoaXMucHJvcHMucHJvcGVydHlOYW1lICsgXCIgXCIgKyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGF1dG9Gb3JtQ29udHJvbFByb3BzOiBBdXRvRm9ybUNvbnRyb2xQcm9wcyA9IHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiB0aGlzLnByb3BzLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHRoaXMucHJvcHMuaW5wdXRUYWIsXHJcbiAgICAgICAgICAgIGlucHV0R3JvdXA6IHRoaXMucHJvcHMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5pbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyhhdXRvRm9ybUNvbnRyb2xQcm9wcyk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT17SW5wdXRUeXBlLlRleHR9XHJcbiAgICAgICAgICAgICAgICBiaW5kT2JqZWN0PXt0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPXt0aGlzLnByb3BzLnByb3BlcnR5TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdFZGl0b3JQYXJhbXMgZXh0ZW5kcyBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RyaW5nRWRpdG9yKHBhcmFtczogQXV0b0Zvcm1Db250cm9sUHJvcHMpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyh7dGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGNvbnN0cjp0YXJnZXQuY29uc3RydWN0b3J9KTtcclxuICAgICAgICByZWdpc3RlclByb3BlcnR5RWRpdG9yKHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiBwYXJhbXMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgICAgICBpbnB1dFRhYjogcGFyYW1zLmlucHV0VGFiLFxyXG4gICAgICAgICAgICBpbnB1dEdyb3VwOiBwYXJhbXMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogcGFyYW1zLmlucHV0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICBvYmplY3RUeXBlOiB0YXJnZXQuY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgIGVkaXRvclR5cGU6IFN0cmluZ1Byb3BlcnR5RWRpdG9yLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eUVkaXRvckluZm8gZXh0ZW5kcyBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICAgIG9iamVjdFR5cGU6IHR5cGVvZiBEZXNpZ25lZE9iamVjdDtcclxuICAgIGVkaXRvclR5cGU6IHR5cGVvZiBCYXNlUHJvcGVydHlFZGl0b3I7XHJcbiAgICBwcm9wZXJ0eVR5cGU6IHR5cGVvZiBPYmplY3QgfCB0eXBlb2YgU3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiwgUHJvcGVydHlFZGl0b3JJbmZvIHtcclxuICAgIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVByb3BlcnR5RWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50PEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgY29udGV4dDphbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gICAgLy8gZGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG5cclxuICAgIC8vIGdldFByb3BlcnR5VHlwZSgpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiBcIk9iamVjdFwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHJlbmRlckVkaXRvcihpbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG4gICAgLy8gICAgIHJldHVybiAoPHNwYW4+ZWRpdG9yIG5vdCBkZWZpbmVkPC9zcGFuPik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gKDxzcGFuPnByb3BlcnR5IGVkaXRvciBub3QgZGVmaW5lZDwvc3Bhbj4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBlbWl0VHNDb2RlKHRzQ29kZTogVHNDb2RlLCBhc3NpZ25OYW1lOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICB0c0NvZGUuYWRkUHJvcGVydHkoYXNzaWduTmFtZSwgdGhpcy5wcm9wZXJ0eU5hbWUsIHRoaXMuZ2V0UHJvcGVydHlUeXBlKCksIHRoaXMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wZXJ0eU5hbWVdKTtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3IudHN4XG4gKiovIiwiaW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclByb3BlcnR5RWRpdG9yKGVkaXRvcjogUHJvcGVydHlFZGl0b3JJbmZvKSB7XHJcblxyXG4gICAgbGV0IG9ialR5cGU6IGFueSA9IGVkaXRvci5vYmplY3RUeXBlO1xyXG5cclxuICAgIGlmICghb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycylcclxuICAgICAgICBvYmpUeXBlLiQkcHJvcGVydHlFZGl0b3JzID0gW107XHJcblxyXG4gICAgb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycy5wdXNoKGVkaXRvcik7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcInJlZ2lzdGVyUHJvcGVydHlFZGl0b3IgXCIgKyBlZGl0b3IucHJvcGVydHlOYW1lKTtcclxuICAgIC8vY29uc29sZS5sb2coZWRpdG9yKTtcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3IudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuZXhwb3J0IGVudW0gSW5wdXRUeXBlIHtUZXh0LCBOdW1iZXIsIERhdGUgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiwgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgdHlwZTogSW5wdXRUeXBlO1xyXG4gICAgYmluZE9iamVjdDogYW55O1xyXG4gICAgYmluZFByb3BOYW1lOiBzdHJpbmc7XHJcbiAgICBtYXhXaWR0aD86IG51bWJlcjtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxuICAgIHBsYWNlSG9sZGVyPzogc3RyaW5nO1xyXG4gICAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50PElucHV0UHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElucHV0UHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSW5wdXRUeXBlLlRleHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZXh0KCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAgXCJJbnB1dC5yZW5kZXIoKTo9PiB1bmtub3duIElucHV0VHlwZSAnXCIgKyB0aGlzLnByb3BzLnR5cGUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJpbmRPYmplY3QgJiYgdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdFt0aGlzLnByb3BzLmJpbmRQcm9wTmFtZV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gXCI8dW5iaW5kZWQ+XCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJpbmRPYmplY3QgJiYgdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmluZE9iamVjdFt0aGlzLnByb3BzLmJpbmRQcm9wTmFtZV0gPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWU7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJUZXh0KCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXModGhpcy5wcm9wcy5zdHlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0VGV4dCgpfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7QmFzZVByb3BlcnR5RWRpdG9yUHJvcHMsIFByb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtnZXRQcm9wZXJ0eUVkaXRvcnN9IGZyb20gXCIuLi9Qcm9wZXJ0eUVkaXRvcnMvZ2V0UHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybVwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPYmplY3REZXNpZ25lclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBkZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3REZXNpZ25lciBleHRlbmRzIENvbXBvbmVudDxPYmplY3REZXNpZ25lclByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBPYmplY3REZXNpZ25lclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb3BlcnR5RGVzaWduZXJzKCk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgZ2V0UHJvcGVydHlFZGl0b3JzKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QpLmZvckVhY2goKHByb3BJbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9wSW5mbyk7XHJcbiAgICAgICAgICAgIGxldCBlZGl0b3JQcm9wczogQmFzZVByb3BlcnR5RWRpdG9yUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgICBkZXNpZ25lZE9iamVjdDogdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCxcclxuICAgICAgICAgICAgICAgIC8vcHJvcGVydHlFZGl0b3JJbmZvOiBwcm9wSW5mbyxcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDRjdGC0L4g0LjQtyBwcm9wSW5mbzogUHJvcGVydHlFZGl0b3JJbmZvLCDQt9Cw0L/QvtC70Y/QtdGC0YHRjyDQtNCw0LvQtdC1INGH0LXRgNC10LcgXy5hc3NpZ25cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlZGl0b3JUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBfLmFzc2lnbihlZGl0b3JQcm9wcywgcHJvcEluZm8pO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVkaXRvclByb3BzKTtcclxuXHJcbiAgICAgICAgICAgIHJldC5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcEluZm8uZWRpdG9yVHlwZSwgZWRpdG9yUHJvcHMsIG51bGwpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJvYmplY3QtZGVzaWduZXJcIik7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7b25DaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2V9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEF1dG9Gb3JtIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0IGRlc2lnbmVyXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQcm9wZXJ0eURlc2lnbmVycygpfVxyXG4gICAgICAgICAgICA8L0F1dG9Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lci50c3hcbiAqKi8iLCJpbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5RWRpdG9ycyhvYmo6IERlc2lnbmVkT2JqZWN0KTogUHJvcGVydHlFZGl0b3JJbmZvW10ge1xyXG5cclxuICAgIGxldCBlZGl0b3JzID0gKG9iai5jb25zdHJ1Y3RvciBhcyBhbnkpLiQkcHJvcGVydHlFZGl0b3JzIGFzIFByb3BlcnR5RWRpdG9ySW5mb1tdO1xyXG5cclxuICAgIGVkaXRvcnMgPSBlZGl0b3JzLmZpbHRlcigoZWR0KSA9PiBvYmogaW5zdGFuY2VvZiBlZHQub2JqZWN0VHlwZSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldFByb3BlcnR5RWRpdG9yc1wiKTtcclxuICAgIC8vY29uc29sZS5sb2coZWRpdG9ycyk7XHJcbiAgICByZXR1cm4gZWRpdG9ycztcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL2dldFByb3BlcnR5RWRpdG9yLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGFicywgVGFifSBmcm9tIFwiLi4vVGFicy9UYWJzXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uL0Zvcm0vRm9ybVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgaW5wdXRDYXB0aW9uPzogc3RyaW5nO1xyXG4gICAgaW5wdXRUYWI/OiBzdHJpbmc7XHJcbiAgICBpbnB1dEdyb3VwPzogc3RyaW5nO1xyXG4gICAgaW5wdXREZXNjcmlwdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvRm9ybVByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBpbnB1dHM/OiBBdXRvRm9ybUNvbnRyb2xQcm9wc1tdO1xyXG59XHJcblxyXG5jb25zdCBlbXB0eVRhYk5hbWUgPSBcItC30LDQutC70LDQtNC60LBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvRm9ybSBleHRlbmRzIENvbXBvbmVudDxBdXRvRm9ybVByb3BzLCBhbnk+IHtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJbnB1dHMoKTogQXV0b0Zvcm1Db250cm9sUHJvcHNbXSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgICAgICAgLmZpbHRlcigoYzogYW55KSA9PiBjLnByb3BzKVxyXG4gICAgICAgICAgICAubWFwKChjOiBhbnkpID0+IGMucHJvcHMpIGFzIEF1dG9Gb3JtQ29udHJvbFByb3BzW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYWJzTGlzdCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIF8udW5pcShcclxuICAgICAgICAgICAgdGhpcy5nZXRJbnB1dHMoKS5tYXA8c3RyaW5nPigoaW5wdXQ6IEF1dG9Gb3JtQ29udHJvbFByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuaW5wdXRUYWIgfHwgXCJcIjtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFiSW5wdXRzKHRhYjogc3RyaW5nKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgICAgICAgLmZpbHRlcigoYzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5wcm9wcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICgoKGMucHJvcHMgYXMgQXV0b0Zvcm1Db250cm9sUHJvcHMpLmlucHV0VGFiIHx8IFwiXCIpID09PSB0YWIpO1xyXG4gICAgICAgICAgICB9KSBhcyBKU1guRWxlbWVudFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVGFiKHRhYjogc3RyaW5nKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiA8Rm9ybT57dGhpcy5nZXRUYWJJbnB1dHModGFiKX08L0Zvcm0+O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgIHJlbmRlclRhYnMoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIGxldCB0YWJzID0gdGhpcy5nZXRUYWJzTGlzdCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGFicyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdldElucHV0cygpKTtcclxuXHJcbiAgICAgICAgaWYgKHRhYnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0YWJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUYWIodGFic1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICBvbldpbGxNb3VudD17IChzdGF0ZSk9PiB7IGNvbnNvbGUubG9nKFwib25XaWxsTW91bnQtYXV0by1mb3JtLXRhYnNcIil9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQWN0aXZlVGFiPXsgKHN0YXRlLCB0YWIpPT4geyBjb25zb2xlLmxvZyhcInNldEFjdGl2ZVRhYlwiKTtjb25zb2xlLmxvZyh0YWIpO319XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0YWJzLm1hcDxKU1guRWxlbWVudD4oKHRhYiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIga2V5PXtpbmRleH0gdGl0bGU9e3RhYiA9PT0gXCJcIiA/IGVtcHR5VGFiTmFtZSA6IHRhYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFiKHRhYil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImF1dG8tZm9ybVwiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItYXV0by1mb3JtXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJzUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxUYWJzU3RhdGU+IHtcclxuICAgIG9uQ2hhbmdlQWN0aXZlVGFiPzogKHN0YXRlOiBUYWJzU3RhdGUsIGFjdGl2ZVRhYjogVGFiSW5mbykgPT4gdm9pZDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJzU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxUYWJzUHJvcHM+IHtcclxuICAgIHRhYnM6IFRhYkluZm9bXSA9IFtdO1xyXG5cclxuICAgIHNldEFjdGl2ZVRhYih0YWJJbmZvOiBUYWJJbmZvKSB7XHJcbiAgICAgICAgaWYgKCF0YWJJbmZvLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpPT50YWIuaXNBY3RpdmUgPSBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRhYkluZm8uaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50LnByb3BzLm9uQ2hhbmdlQWN0aXZlVGFiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucHJvcHMub25DaGFuZ2VBY3RpdmVUYWIodGhpcywgdGFiSW5mbyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFiSW5mbyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50PFRhYnNQcm9wcywgVGFic1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVGFic1Byb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgVGFic1N0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlSW5pdFRhYnNTdGF0ZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHRhYlRhZ3MgPSB0aGlzLmdldENoaWxkcmVuKFRhYik7XHJcblxyXG4gICAgICAgIHRhYlRhZ3MuZm9yRWFjaCgodGFiVGFnLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhYlByb3BzID0gdGFiVGFnLnByb3BzIGFzIFRhYlByb3BzO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhYkluZm86IFRhYkluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGFiUHJvcHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0YWJQcm9wcy5jaGlsZHJlbixcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBpbmRleCA9PT0gMFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRhYnMucHVzaCh0YWJJbmZvKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUluaXRUYWJzU3RhdGUoKTtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHRhYlRhZ3MgPSB0aGlzLmdldENoaWxkcmVuKFRhYik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB0YWJUYWdzLmZvckVhY2goKHRhYlRhZywgaW5kZXgpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgdGFiUHJvcHMgPSB0YWJUYWcucHJvcHMgYXMgVGFiUHJvcHM7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IHRhYkluZm86IFRhYkluZm8gPSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aXRsZTogdGFiUHJvcHMudGl0bGUsXHJcbiAgICAgICAgLy8gICAgICAgICBjb250ZW50OiB0YWJQcm9wcy5jaGlsZHJlbixcclxuICAgICAgICAvLyAgICAgICAgIGlzQWN0aXZlOiBpbmRleCA9PT0gMFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgdGhpcy50YWJzLnB1c2godGFiSW5mbyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBvcGVuV2luZG93KHdpbjogSlNYLkVsZW1lbnQpOiBXaW5kb3dJbmZvIHtcclxuICAgIC8vICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vICAgICBtb2RhbC5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDEyKTtcclxuICAgIC8vICAgICAvLyDQtNC70Y8g0L/QvtC00L3Rj9GC0LjRjyDQstCy0LXRgNGFINC/0YDQuCDQsNC60YLQuNCy0LDRhtC40Lgg0L7QutC90LBcclxuICAgIC8vICAgICBtb2RhbC5vbmNsaWNrID0gKGUpPT4ge1xyXG4gICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKG1vZGFsLmlkICE9PSBcImRlbGV0ZWRcIilcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgLy8gICAgICAgICB9LCAxKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCB3aW5JbnN0YW5jZSA9IFJlYWN0RE9NLnJlbmRlcih3aW4sIG1vZGFsKSBhcyBXaW5kb3c7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGxldCBpbmZvOiBXaW5kb3dJbmZvID0ge1xyXG4gICAgLy8gICAgICAgICBpZDogbW9kYWwuaWQsXHJcbiAgICAvLyAgICAgICAgIHdpbkluc3RhbmNlOiB3aW5JbnN0YW5jZSxcclxuICAgIC8vICAgICAgICAgZGl2V3JhcHBlcjogbW9kYWxcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLndpbmRvd3MucHVzaChpbmZvKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIGluZm87XHJcbiAgICAvLyB9O1xyXG4gICAgLy9cclxuICAgIC8vIGNsb3NlV2luZG93KHdpbjogV2luZG93KSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMud2luZG93cy5mb3JFYWNoKChpbmZvLCBpbmRleCk9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbmZvLndpbkluc3RhbmNlID09PSB3aW4pIHtcclxuICAgIC8vICAgICAgICAgICAgIGluZm8uZGl2V3JhcHBlci5pZCA9IFwiZGVsZXRlZFwiO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKGluZm8uZGl2V3JhcHBlcik7XHJcbiAgICAvLyAgICAgICAgICAgICBkZWxldGUgdGhpcy53aW5kb3dzW2luZGV4XTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFjdGl2YXRlV2luZG93KHdpbjogV2luZG93KSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMud2luZG93cy5mb3JFYWNoKChpbmZvLCBpbmRleCk9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbmZvLndpbkluc3RhbmNlID09PSB3aW4pIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChpbmZvLmRpdldyYXBwZXIpO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHJlbmRlclRhYnMoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgbGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnRhYnMuZm9yRWFjaCgodGFiSW5mbzogVGFiSW5mbywgaW5kZXg6IG51bWJlcik9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGFiSW5mby5pc0FjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17aW5kZXh9IG9uQ2xpY2s9eyAoZSk9PnsgdGhpcy5zdGF0ZS5zZXRBY3RpdmVUYWIodGFiSW5mbyl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57dGFiSW5mby50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBsaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQYW5lbHMoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgbGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnRhYnMuZm9yRWFjaCgodGFiSW5mbzogVGFiSW5mbywgaW5kZXg6IG51bWJlcik9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gIXRhYkluZm8uaXNBY3RpdmUgPyBcImlzLWhpZGRlblwiIDogbnVsbDtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhYkluZm8uY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBsaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPlxyXG4gICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2hlaWdodDogXCIxMDAlXCJ9KTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6IFwiYXV0b1wifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiIHJlZj17IChlOiBhbnkpID0+IHsgdGhpcy5uYXRpdmVFbGVtZW50ID0gZTsgfSB9IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYnMoKX1cclxuICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQYW5lbHMoKX1cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFiUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYiBleHRlbmRzIENvbXBvbmVudDxUYWJQcm9wcyxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUYWJQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtJbnB1dERpdmlkZXJ9IGZyb20gXCIuLi9JbnB1dERpdmlkZXIvSW5wdXREaXZpZGVyXCI7XHJcbmltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcbmltcG9ydCB7SW5wdXRQcm9wc30gZnJvbSBcIi4uL0lucHV0L0lucHV0XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnQ8Rm9ybVByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBGb3JtUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlckNvbnRyb2xzKCk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCBsaXN0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZm9yRWFjaCgoY29udHJvbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRyb2xQcm9wcyA9IGNvbnRyb2wucHJvcHMgYXMgSW5wdXRQcm9wcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbFByb3BzICYmIChjb250cm9sUHJvcHMuaW5wdXRDYXB0aW9uIHx8IGNvbnRyb2xQcm9wcy5iaW5kUHJvcE5hbWUpKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoY29udHJvbC50eXBlID09PSBJbnB1dERpdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJJbnB1dERpdmlkZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJjb250cm9sXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIiwgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcHRpb25cIj57Y29udHJvbFByb3BzLmlucHV0Q2FwdGlvbiA/IGNvbnRyb2xQcm9wcy5pbnB1dENhcHRpb24gOiBjb250cm9sUHJvcHMuYmluZFByb3BOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwiLCB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJjb250cm9sXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjEwXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwiLCB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJmb3JtXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCJpbmhlcml0XCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIHJlZj17IChlKSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH0gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbnRyb2xzKCl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHthcHBJbnN0YW5jZX0gZnJvbSBcIi4uL0FwcFwiO1xyXG5pbXBvcnQge1dpbmRvdywgV2luZG93U3RhdGV9IGZyb20gXCIuLi9XaW5kb3cvV2luZG93XCI7XHJcbmltcG9ydCB7TW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi9Nb3ZhYmxlL01vdmFibGVcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlc2t0b3BQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxEZXNrdG9wUHJvcHM+IHtcclxuICAgIHdpbmRvd3M6IERlc2t0b3BXaW5kb3dbXSA9IFtdOyAgLy8g0L/QvtGB0LvQtdC00L3QtdC1INCw0LrRgtC40LLQvdC+XHJcblxyXG4gICAgLy8gZ2V0V2luZG93QnlJZChpZDogc3RyaW5nKTogV2luZG93U3RhdGUge1xyXG4gICAgLy8gICAgIGZvciAobGV0IHcgb2YgdGhpcy53aW5kb3dzKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh3LmlkID09PSBpZClcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiB3O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjb25zb2xlLndhcm4oXCJEZXNrdG9wV2luZG93IGlkPSdcIiArIGlkICsgXCInIG5vdCBmb3VuZFwiKTtcclxuICAgIC8vICAgICByZXR1cm4gbnVsbDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRXaW5kb3dJbmRleEJ5SWQoaWQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMud2luZG93cy5pbmRleE9mKHRoaXMuZ2V0V2luZG93QnlJZChpZCkpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFjdGl2YXRlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgIC8vICAgICBpZiAod2luKSB7XHJcbiAgICAvLyAgICAgICAgIF8ucHVsbCh0aGlzLndpbmRvd3MsIHdpbik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMud2luZG93cy5wdXNoKHdpbik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gY2xvc2VXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgLy8gICAgIF8ucHVsbCh0aGlzLndpbmRvd3MsIHdpbik7XHJcbiAgICAvLyAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93SW5mbyB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgd2luSW5zdGFuY2U6IFdpbmRvdztcclxuICAgIGRpdldyYXBwZXI6IEVsZW1lbnQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5XaW5kb3dQYXJhbXMge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB0b3A/OiBudW1iZXI7XHJcbiAgICBsZWZ0PzogbnVtYmVyO1xyXG4gICAgcmlnaHQ/OiBudW1iZXI7XHJcbiAgICBib3R0b20/OiBudW1iZXI7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxuICAgIG1pbkhlaWdodD86IG51bWJlcjtcclxuICAgIG1pbldpZHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVza3RvcFdpbmRvdyBpbXBsZW1lbnRzIE9wZW5XaW5kb3dQYXJhbXMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHJpZ2h0OiBudW1iZXI7XHJcbiAgICBib3R0b206IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIG1pbkhlaWdodDogbnVtYmVyO1xyXG4gICAgbWluV2lkdGg6IG51bWJlcjtcclxuICAgIGNvbnRlbnQ6IEpTWC5FbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVza3RvcCBleHRlbmRzIENvbXBvbmVudDxEZXNrdG9wUHJvcHMsIERlc2t0b3BTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IERlc2t0b3BQcm9wcywgY29udGV4dDphbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgRGVza3RvcFN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgaWYgKGFwcEluc3RhbmNlKVxyXG4gICAgICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wID0gdGhpcztcclxuICAgIH1cclxuXHJcbi8vICAgIHByaXZhdGUgd2luZG93czogV2luZG93SW5mb1tdID0gW107XHJcblxyXG4gICAgb3BlbldpbmRvdyh3aW46IEpTWC5FbGVtZW50LCBvcGVuUGFyYW1zPzogT3BlbldpbmRvd1BhcmFtcykge1xyXG4gICAgICAgIGlmICghb3BlblBhcmFtcylcclxuICAgICAgICAgICAgb3BlblBhcmFtcyA9IHt9O1xyXG4gICAgICAgIGxldCBuZXdXaW4gPSBuZXcgRGVza3RvcFdpbmRvdygpO1xyXG4gICAgICAgIG5ld1dpbi5jb250ZW50ID0gd2luO1xyXG4gICAgICAgIG5ld1dpbi50aXRsZSA9IG9wZW5QYXJhbXMudGl0bGUgfHwgXCIuXCI7XHJcbiAgICAgICAgbmV3V2luLmlkPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDEyKTtcclxuXHJcbiAgICAgICAgbmV3V2luLmxlZnQgPSBvcGVuUGFyYW1zLmxlZnQ7XHJcbiAgICAgICAgbmV3V2luLnRvcCA9IG9wZW5QYXJhbXMudG9wO1xyXG4gICAgICAgIG5ld1dpbi5oZWlnaHQgPSBvcGVuUGFyYW1zLmhlaWdodDtcclxuICAgICAgICBuZXdXaW4ud2lkdGggPSBvcGVuUGFyYW1zLndpZHRoO1xyXG4gICAgICAgIG5ld1dpbi5yaWdodCA9IG9wZW5QYXJhbXMucmlnaHQ7XHJcbiAgICAgICAgbmV3V2luLmJvdHRvbSA9IG9wZW5QYXJhbXMuYm90dG9tO1xyXG5cclxuICAgICAgICBpZiAoIW5ld1dpbi5sZWZ0KSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLnJpZ2h0ICYmICFuZXdXaW4ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5sZWZ0ID0gNTA7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV3V2luLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ubGVmdCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5yaWdodCAmJiAhbmV3V2luLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbmV3V2luLnRvcCkge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5ib3R0b20gJiYgIW5ld1dpbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi50b3AgPSA1MDtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV3V2luLmJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmhlaWdodCA9IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi50b3AgPSA1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4uYm90dG9tICYmICFuZXdXaW4uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbmV3V2luLm1pbkhlaWdodCA9IG9wZW5QYXJhbXMubWluSGVpZ2h0IHx8IDEwMDtcclxuICAgICAgICBuZXdXaW4ubWluV2lkdGggPSBvcGVuUGFyYW1zLm1pbldpZHRoIHx8IDEwMDtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUud2luZG93cy5wdXNoKG5ld1dpbik7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhY3RpdmF0ZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdpbikge1xyXG4gICAgICAgICAgICBfLnB1bGwodGhpcy5zdGF0ZS53aW5kb3dzLCB3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpbmRvd3MucHVzaCh3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdpbmRvd0J5SWQoaWQ6IHN0cmluZyk6IERlc2t0b3BXaW5kb3cge1xyXG4gICAgICAgIGZvciAobGV0IHcgb2YgdGhpcy5zdGF0ZS53aW5kb3dzKSB7XHJcbiAgICAgICAgICAgIGlmICh3LmlkID09PSBpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLndhcm4oXCJEZXNrdG9wV2luZG93IGlkPSdcIiArIGlkICsgXCInIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQWN0aXZhdGUgPSAoc3RhdGU6V2luZG93U3RhdGUpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlV2luZG93KHN0YXRlLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAgICAgXy5wdWxsKHRoaXMuc3RhdGUud2luZG93cywgd2luKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoc3RhdGU6V2luZG93U3RhdGUpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlV2luZG93KHN0YXRlLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJkZXNrdG9wXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImF1dG9cIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17IChlKSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH0gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLndpbmRvd3MubWFwKCh3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLWRlc2t0b3Atd2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt3LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3cudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A9e3cudG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdD17dy5sZWZ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3cud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3cuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ9e3cucmlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b209e3cuYm90dG9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3RpdmF0ZT17ICB0aGlzLmhhbmRsZUFjdGl2YXRlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eyB0aGlzLmhhbmRsZUNsb3NlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3cuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9XaW5kb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy9vbk1vdmVTdGFydD17IHcuaGFuZGxlTW92ZVN0YXJ0IH1cclxuLy9vblJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnQ9eyB3LmhhbmRsZVJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnQgfVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Rlc2t0b3AvRGVza3RvcC50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGVza3RvcH0gZnJvbSBcIi4vRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCBFbGVtZW50ID0gSlNYLkVsZW1lbnQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8QXBwU3RhdGU+IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuY2xhc3MgQXBwU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxBcHBQcm9wcz4ge1xyXG4gICAgd2luZG93czogQXBwV2luZG93W10gPSBbXTsgIC8vINC/0L7RgdC70LXQtNC90LXQtSDQsNC60YLQuNCy0L3QvlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PEFwcFByb3BzLCBBcHBTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFwcFByb3BzLCBjb250ZXh0OmFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBBcHBTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIGFwcEluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAvLyAgICAgc3VwZXIuZGlkTW91bnQoKTtcclxuICAgIC8vICAgICBhcHBJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZGVza3RvcDogRGVza3RvcDtcclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXBwXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgQnVodGEgQXBwIVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGFwcEluc3RhbmNlOiBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHAudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0xheW91dFwiO1xyXG5pbXBvcnQge0ZpeGVkfSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZsZXhcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlU3RhcnRFdmVudH0gZnJvbSBcIi4uL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQgc2hhbGxvd0NvbXBhcmUgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZVwiKTtcclxuaW1wb3J0IGRlZXBFcXVhbCA9IHJlcXVpcmUoXCJkZWVwLWVxdWFsXCIpO1xyXG5pbXBvcnQge09wZW5XaW5kb3dQYXJhbXN9IGZyb20gXCIuLi9EZXNrdG9wL0Rlc2t0b3BcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1Byb3BzIGV4dGVuZHMgT3BlbldpbmRvd1BhcmFtcyxDb21wb25lbnRQcm9wczxXaW5kb3dTdGF0ZT4ge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBvbkFjdGl2YXRlPyhzdGF0ZTogV2luZG93U3RhdGUpOiB2b2lkO1xyXG4gICAgb25DbG9zZT8oc3RhdGU6IFdpbmRvd1N0YXRlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd1N0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGU8V2luZG93UHJvcHM+IGltcGxlbWVudHMgT3BlbldpbmRvd1BhcmFtcyB7XHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudDtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIG1pbldpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQ8V2luZG93UHJvcHMsIFdpbmRvd1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogV2luZG93UHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBXaW5kb3dTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUluaXRTdGF0ZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5pZCA9IHRoaXMucHJvcHMuaWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS50aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS50b3AgPSB0aGlzLnByb3BzLnRvcDtcclxuICAgICAgICB0aGlzLnN0YXRlLmxlZnQgPSB0aGlzLnByb3BzLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yaWdodCA9IHRoaXMucHJvcHMucmlnaHQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ib3R0b20gPSB0aGlzLnByb3BzLmJvdHRvbTtcclxuICAgICAgICB0aGlzLnN0YXRlLndpZHRoID0gdGhpcy5wcm9wcy53aWR0aDtcclxuICAgICAgICB0aGlzLnN0YXRlLmhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5pdFN0YXRlKCk7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcblxyXG4gICAgICAgIC8vIGxldCB0YWJUYWdzID0gdGhpcy5nZXRDaGlsZHJlbihUYWIpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdGFiVGFncy5mb3JFYWNoKCh0YWJUYWcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IHRhYlByb3BzID0gdGFiVGFnLnByb3BzIGFzIFRhYlByb3BzO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGxldCB0YWJJbmZvOiBUYWJJbmZvID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGl0bGU6IHRhYlByb3BzLnRpdGxlLFxyXG4gICAgICAgIC8vICAgICAgICAgY29udGVudDogdGFiUHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgLy8gICAgICAgICBpc0FjdGl2ZTogaW5kZXggPT09IDBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHRoaXMudGFicy5wdXNoKHRhYkluZm8pO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbW92ZVN0YXJ0ID0gKGU6IE1vdmVTdGFydEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZS5iaW5kWCh0aGlzLnN0YXRlLCBcImxlZnRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKCdsZWZ0JywgdGhpcy5zdGF0ZS5sZWZ0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLmJpbmRZKHRoaXMuc3RhdGUsIFwidG9wXCIsICgpID0+IHtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcygndG9wJywgdGhpcy5zdGF0ZS50b3ApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayhudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydCA9IChlOiBNb3ZlU3RhcnRFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGUuYmluZFgodGhpcy5zdGF0ZSwgXCJ3aWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpZHRoIDwgdGhpcy5zdGF0ZS5taW5XaWR0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGggPSB0aGlzLnN0YXRlLm1pbldpZHRoO1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKCd3aWR0aCcsIHRoaXMuc3RhdGUud2lkdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUuYmluZFkodGhpcy5zdGF0ZSwgXCJoZWlnaHRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgPCB0aGlzLnN0YXRlLm1pbkhlaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID0gdGhpcy5zdGF0ZS5taW5IZWlnaHQ7XHJcbiAgICAgICAgICAgICQodGhpcy5uYXRpdmVFbGVtZW50KS5jc3MoJ2hlaWdodCcsIHRoaXMuc3RhdGUuaGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZU9uQ2xpY2sobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZU9uQ2xpY2sgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkFjdGl2YXRlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aXZhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKG5leHRQcm9wczogV2luZG93UHJvcHMsIG5leHRTdGF0ZTogV2luZG93U3RhdGUpID0+IHtcclxuICAgICAgICAvLyDQstGB0LXQs9C00LAgZmFsc2UsINC/0L7RgtC+0LzRgyDRh9GC0L4g0LzQtdC90Y/RgtGMIHByb3BzINC+0LrQvdCwINC80L7QttC10YIg0YLQvtC70YzQutC+IGRlc2t0b3AsXHJcbiAgICAgICAgLy8g0LAg0YLQsNC60LjRhSDRgdC70YPRh9Cw0Y/RhSDRgdC+0LTQtdGA0LbQuNC80L7QtSDQvtC60L3QsCDQvNC10L3Rj9GC0Ywg0L3QtSDQvdCw0LTQvlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIndpbmRvdyBib3hcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe3Bvc2l0aW9uOiBcImFic29sdXRlXCJ9KTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXHJcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnN0YXRlLnJpZ2h0LFxyXG4gICAgICAgICAgICBib3R0b206IHRoaXMuc3RhdGUuYm90dG9tLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlckJ1dHRvblN0eWxlID0ge1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAyLFxyXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItd2luXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGU6IGFueSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMuaGFuZGxlT25DbGljayB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgdHlwZT1cImNvbHVtblwiXHJcblxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaXhlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5kb3ctaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiNXB4IDVweCAwcHggMHB4XCIsIHBvc2l0aW9uOlwicmVsYXRpdmVcIiwgcGFkZGluZ0xlZnQ6IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndpbmRvdy10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOjAsIGxlZnQ6MCwgcmlnaHQ6MCxib3R0b206MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXt0aGlzLm1vdmVTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWFkZG9ucyBidXR0b25zLWJhclwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMiwgcGFkZGluZ1JpZ2h0OiA0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBtaW5pbWl6ZS1idXR0b25cIiBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCIgc3R5bGU9e3t0b3A6IDN9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgbWF4aW1pemUtYnV0dG9uXCIgc3R5bGU9e2hlYWRlckJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vXCIgc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIn19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBjbG9zZS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIiBzdHlsZT17e3RvcDogLTF9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggc3R5bGU9e3sgcGFkZGluZzozLCBvdmVyZmxvdzogXCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbmRvdy1yZXNpemVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIGhlaWdodDoxMCwgd2lkdGg6MTAsIHJpZ2h0OjAsYm90dG9tOjAsIGJvcmRlclJhZGl1czogXCIwIDAgNXB4IDBcIixjdXJzb3I6IFwic2UtcmVzaXplXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVTdGFydD17dGhpcy5yZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1dpbmRvdy9XaW5kb3cudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRHJhZ0V2ZW50SGFuZGxlciA9IF9fUmVhY3QuRHJhZ0V2ZW50SGFuZGxlcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92YWJsZVByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBvbk1vdmVTdGFydD86IChldmVudDogTW92ZVN0YXJ0RXZlbnQpPT52b2lkO1xyXG4gICAgb25Nb3ZlPzogKGV2ZW50OiBNb3ZlRXZlbnQpPT52b2lkO1xyXG4gICAgb25Nb3ZlRW5kPzogKGV2ZW50OiBNb3ZlRW5kRXZlbnQpPT52b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlU3RhcnRFdmVudCB7XHJcbiAgICBiaW5kWDogKG9iajogT2JqZWN0LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCk9PnZvaWQpPT52b2lkO1xyXG4gICAgYmluZFk6IChvYmo6IE9iamVjdCwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpPT52b2lkKT0+dm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRXZlbnQge1xyXG4gICAgZGVsdGFYOiBudW1iZXI7XHJcbiAgICBkZWx0YVk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRW5kRXZlbnQge1xyXG4gICAgZGVsdGFYOiBudW1iZXI7XHJcbiAgICBkZWx0YVk6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBCaW5kZWRPYmplY3Qge1xyXG4gICAgb2JqOiBhbnk7XHJcbiAgICBwcm9wTmFtZTogc3RyaW5nXHJcbiAgICBzdGFydFZhbHVlOiBudW1iZXI7XHJcbiAgICBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZDtcclxuICAgIGxhc3RWYWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW92YWJsZSBleHRlbmRzIENvbXBvbmVudDxNb3ZhYmxlUHJvcHMsYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRDbGllbnRYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0Q2xpZW50WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3Zlcl9CaW5kZWQ6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRlZFg6IEJpbmRlZE9iamVjdFtdID0gW107XHJcbiAgICBwcml2YXRlIGJpbmRlZFk6IEJpbmRlZE9iamVjdFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kWChvYmo6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmJpbmRlZFgucHVzaCh7XHJcbiAgICAgICAgICAgIG9iajogb2JqLFxyXG4gICAgICAgICAgICBwcm9wTmFtZTogcHJvcE5hbWUsXHJcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IG9ialtwcm9wTmFtZV0sXHJcbiAgICAgICAgICAgIG1vdmVkQ2FsbGJhY2s6IG1vdmVkQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogb2JqW3Byb3BOYW1lXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRZKG9iajogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuYmluZGVkWS5wdXNoKHtcclxuICAgICAgICAgICAgb2JqOiBvYmosXHJcbiAgICAgICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZSxcclxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogb2JqW3Byb3BOYW1lXSxcclxuICAgICAgICAgICAgbW92ZWRDYWxsYmFjazogbW92ZWRDYWxsYmFjayxcclxuICAgICAgICAgICAgbGFzdFZhbHVlOiBvYmpbcHJvcE5hbWVdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydENsaWVudFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgdGhpcy5zdGFydENsaWVudFkgPSBlLmNsaWVudFk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KHtiaW5kWDogdGhpcy5iaW5kWC5iaW5kKHRoaXMpLCBiaW5kWTogdGhpcy5iaW5kWS5iaW5kKHRoaXMpfSk7XHJcblxyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJtb3ZhYmxlXCIsIFwiXCIpO1xyXG4gICAgICAgIC8vZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnT3Zlcl9CaW5kZWQgPSB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJfQmluZGVkKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJfQmluZGVkKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdmVFbmQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlRW5kKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhWDogZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBkZWx0YVk6IGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmluZGVkWCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmluZGVkWSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kZWRYLmZvckVhY2goKGJpbmQpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gYmluZC5zdGFydFZhbHVlICsgZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFg7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gYmluZC5sYXN0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQub2JqW2JpbmQucHJvcE5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBiaW5kLmxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmQubW92ZWRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBiaW5kLm1vdmVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRlZFkuZm9yRWFjaCgoYmluZCk9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGJpbmQuc3RhcnRWYWx1ZSArIGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZO1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGJpbmQubGFzdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kLm9ialtiaW5kLnByb3BOYW1lXSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYmluZC5sYXN0VmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5kLm1vdmVkQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgYmluZC5tb3ZlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3ZlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZSh7XHJcbiAgICAgICAgICAgICAgICBkZWx0YVg6IGUuY2xpZW50WCAtIHRoaXMuc3RhcnRDbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgZGVsdGFZOiBlLmNsaWVudFkgLSB0aGlzLnN0YXJ0Q2xpZW50WVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJtb3ZhYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe2RyYWdnYWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtjdXJzb3I6IFwibW92ZVwifSk7XHJcblxyXG4gICAgICAgIC8vcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcEluZm8uZWRpdG9yVHlwZSwgZWRpdG9yUHJvcHMsIG51bGwpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9e3RoaXMuaGFuZGxlRHJhZ1N0YXJ0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9e3RoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZS50c3hcbiAqKi8iLCJpbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi90ZXN0QnVodGFPYmplY3QxXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgdGVzdEJ1aHRhT2JqZWN0MiBleHRlbmRzIFRlc3RCdWh0YU9iamVjdDEge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0J/QvtC7L3NleFwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+XCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQn9C+0YLQvtC70L7QuiDQsNCx0L7QvdC10L3RgtCwXCJcclxuICAgIH0pXHJcbiAgICBzZXg6IHN0cmluZztcclxuXHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcblxyXG4vL2ltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge2V4ZWN1dGVTUUx9IGZyb20gXCIuLi8uLi9TUUxcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbnN9IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uc1wiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uUHJvcHMsIFRyZWVHcmlkQ29sdW1ufSBmcm9tIFwiLi9UcmVlR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge0tleWNvZGV9IGZyb20gXCIuLi8uLi9LZXljb2RlXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBkYXRhU291cmNlPzogYW55O1xyXG4gICAgcm93SGVpZ2h0PzogbnVtYmVyO1xyXG4gICAga2V5RmllbGROYW1lPzogc3RyaW5nO1xyXG4gICAgcGFyZW50S2V5RmllbGROYW1lPzogc3RyaW5nO1xyXG4gICAgaGllcmFyY2h5RmllbGROYW1lPzogc3RyaW5nO1xyXG4gICAgaGllcmFyY2h5RGVsaW1pdGVycz86IHN0cmluZztcclxuICAgIHRyZWVNb2RlPzogYm9vbGVhbjtcclxuICAgIGF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIEludGVybmFsQ29sdW1uIHtcclxuICAgIHByb3BzOiBUcmVlR3JpZENvbHVtblByb3BzO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGNhcHRpb246IHN0cmluZztcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nO1xyXG4gICAgZm9vdGVyOiBzdHJpbmc7XHJcbiAgICBoaWRkZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIEludGVybmFsUm93IHtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICAvLy8gICBzb3VyY2VPYmplY3Q6IGFueTtcclxuICAgIHNvdXJjZUluZGV4OiBudW1iZXI7XHJcbiAgICBjZWxsRWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbm9kZTogSW50ZXJuYWxUcmVlTm9kZTtcclxuXHJcbn1cclxuXHJcbmNsYXNzIEludGVybmFsVHJlZU5vZGUge1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIHNvdXJjZU9iamVjdDogYW55O1xyXG4gICAgc291cmNlSW5kZXg6IG51bWJlcjtcclxuICAgIGNlbGxFbGVtZW50czogRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgLy8g0LTQu9GPIHRyZWVNb2RlO1xyXG4gICAgcGFyZW50OiBJbnRlcm5hbFRyZWVOb2RlO1xyXG4gICAgY2hpbGRyZW46IEludGVybmFsVHJlZU5vZGVbXSA9IFtdO1xyXG4gICAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG5cclxuICAgIHB1c2hSb3dSZWN1cnNpdmUocm93czogSW50ZXJuYWxSb3dbXSwgbWF4UGFnZUxlbmd0aDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCA+PSBtYXhQYWdlTGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCByb3cgPSBuZXcgSW50ZXJuYWxSb3coKTtcclxuICAgICAgICByb3cuc291cmNlSW5kZXggPSB0aGlzLnNvdXJjZUluZGV4O1xyXG4gICAgICAgIHJvdy5ub2RlID0gdGhpcztcclxuICAgICAgICByb3dzLnB1c2gocm93KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucHVzaFJvd1JlY3Vyc2l2ZShyb3dzLCBtYXhQYWdlTGVuZ3RoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWQgZXh0ZW5kcyBDb21wb25lbnQ8VHJlZUdyaWRQcm9wcywgYW55PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZWVHcmlkUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICAvL3RoaXMuc3RhdGUuY29sdW1ucz1bXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbHVtbnM6IEludGVybmFsQ29sdW1uW107XHJcbiAgICBwcml2YXRlIHBhZ2VMZW5ndGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcm93czogSW50ZXJuYWxSb3dbXTtcclxuICAgIHByaXZhdGUgbm9kZXM6IEludGVybmFsVHJlZU5vZGVbXTtcclxuICAgIHByaXZhdGUgZm9jdXNlZFJvd0luZGV4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGZvY3VzZWRDZWxsSW5kZXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZGF0YVNvdXJjZTogYW55W107XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ29sdW1ucygpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIxXCIpO1xyXG4gICAgICAgIGxldCBjb2x1bW5zVGFnID0gdGhpcy5nZXRDaGlsZHJlbihUcmVlR3JpZENvbHVtbnMpO1xyXG5cclxuICAgICAgICBjb2x1bW5zVGFnLmZvckVhY2goKHRhZzogSlNYLkVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtblRhZ0xpc3QgPSB0aGlzLmdldENoaWxkcmVuT2ZQcm9wcyh0YWcucHJvcHMsIFRyZWVHcmlkQ29sdW1uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtblRhZ0xpc3QuZm9yRWFjaCgocHJvcENvbDogSlNYLkVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gbmV3IEludGVybmFsQ29sdW1uKCk7XHJcbiAgICAgICAgICAgICAgICBjb2wucHJvcHMgPSBwcm9wQ29sLnByb3BzO1xyXG4gICAgICAgICAgICAgICAgY29sLndpZHRoID0gcHJvcENvbC5wcm9wcy53aWR0aCB8fCAxNTA7XHJcbiAgICAgICAgICAgICAgICBjb2wuY2FwdGlvbiA9IHByb3BDb2wucHJvcHMuY2FwdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbC5maWVsZE5hbWUgPSBwcm9wQ29sLnByb3BzLmZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbC5jYXB0aW9uID0gcHJvcENvbC5wcm9wcy5jYXB0aW9uIHx8IGNvbC5maWVsZE5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChjb2wpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEZvY3VzZWQoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkUm93SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZENlbGxJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm9kZXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnRyZWVNb2RlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhpZXJhcmNoeUZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzRnJvbUhpZXJhcmNoeUZpZWxkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInVua25vd24gaGllcmFyY2h5IG1vZGVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTm9kZXNGcm9tSGllcmFyY2h5RmllbGQoKSB7XHJcblxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlhUcmVlR3JpZDogaGllcmFyY2h5RGVsaW1pdGVycyBpcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpbnRlcmZhY2UgSVNvcnRlZCB7XHJcbiAgICAgICAgICAgIGhpZXJhcmNoeVN0cjogc3RyaW5nO1xyXG4gICAgICAgICAgICBvYmpJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNvcnRlZDogSVNvcnRlZFtdID0gdGhpcy5kYXRhU291cmNlLm1hcCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGllcmFyY2h5U3RyOiBvYmpbdGhpcy5wcm9wcy5oaWVyYXJjaHlGaWVsZE5hbWVdLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBvYmpJbmRleDogaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ydGVkID0gXy5zb3J0Qnkoc29ydGVkLCBbXCJoaWVyYXJjaHlTdHJcIl0pO1xyXG5cclxuICAgICAgICBsZXQgY2FjaGU6IHsgW2hpZXJhcmNoeUlkOiBzdHJpbmddOiBJbnRlcm5hbFRyZWVOb2RlOyB9ID0ge307XHJcblxyXG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcclxuXHJcbiAgICAgICAgc29ydGVkLmZvckVhY2goKHMsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3BsaXR0ZWQgPSBzLmhpZXJhcmNoeVN0ci5zcGxpdCh0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMpO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50SWQ6IGFueTtcclxuICAgICAgICAgICAgbGV0IG5vZGVJZDogYW55O1xyXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZWQubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgbm9kZUlkID0gcy5oaWVyYXJjaHlTdHI7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZUlkID0gXy5sYXN0KHNwbGl0dGVkKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudElkID0gc3BsaXR0ZWQuc2xpY2UoMCwgc3BsaXR0ZWQubGVuZ3RoIC0gMSkuam9pbih0aGlzLnByb3BzLmhpZXJhcmNoeURlbGltaXRlcnMuc2xpY2UoMCwgMSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVbbm9kZUlkXSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWFRyZWVHcmlkOiBub2RlSWQgJ1wiICsgbm9kZUlkICsgXCInIGlzIGR1cGxpY2F0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBJbnRlcm5hbFRyZWVOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zb3VyY2VJbmRleCA9IHMub2JqSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZXZlbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5leHBhbmRlZCA9IG5vZGUubGV2ZWwgPCB0aGlzLnByb3BzLmF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVbbm9kZUlkXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBjYWNoZVtwYXJlbnRJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgSW50ZXJuYWxUcmVlTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zb3VyY2VJbmRleCA9IHMub2JqSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBub2RlLmxldmVsID0gcGFyZW50Tm9kZS5sZXZlbCArIDE7XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4cGFuZGVkID0gbm9kZS5sZXZlbCA8IHRoaXMucHJvcHMuYXV0b0V4cGFuZE5vZGVzVG9MZXZlbDtcclxuICAgICAgICAgICAgICAgIGNhY2hlW3MuaGllcmFyY2h5U3RyXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7c3RyOiBzLmhpZXJhcmNoeVN0ciwgcGFyZW50SWQsIG5vZGVJZH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUm93cygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2goKG5vZGU6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnB1c2hSb3dSZWN1cnNpdmUodGhpcy5yb3dzLCB0aGlzLnBhZ2VMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gbmV3IEludGVybmFsUm93KCk7XHJcbiAgICAgICAgICAgICAgICByb3cuc291cmNlSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIC8vcm93LnNvdXJjZU9iamVjdCA9IG9iajtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbml0Rm9jdXNlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29sdW1ucyAmJiB0aGlzLmNvbHVtbnMubGVuZ3RoID4gMCAmJiB0aGlzLmRhdGFTb3VyY2UpXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1swXS5mb290ZXIgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoICsgXCIg0L/QvtC3LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyRGF0YSgpIHtcclxuXHJcbi8vICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YVNvdXJjZSkge1xyXG4vLyAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2UubWFwKChyb3cpID0+IHJvdyk7XHJcbi8vICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vdGhpcy5yb3dzID0gd2luZG93W1wieHh4XCJdLmZpbHRlcigocm93KSA9PiByb3dbXCLQndCw0LfQstCw0L3QuNC1XCJdLmluZGV4T2YoXCJQaGlsXCIpID4gLTEpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYm9keVdyYXBwZXJFbGVtZW50SW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIGxhc3RCb2R5V3JhcHBlckhlaWdodCA9IDA7XHJcbiAgICBsYXN0Qm9keVdyYXBwZXJXaWR0aCA9IDA7XHJcblxyXG4gICAgaGFuZGxlQm9keVdyYXBwZXJFbGVtZW50UmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdIZWlnaHQgPSB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgaWYgKG5ld0hlaWdodCAhPT0gdGhpcy5sYXN0Qm9keVdyYXBwZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Qm9keVdyYXBwZXJIZWlnaHQgPSBuZXdIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV3V2lkdGggPSB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBpZiAobmV3V2lkdGggIT09IHRoaXMubGFzdEJvZHlXcmFwcGVyV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Qm9keVdyYXBwZXJXaWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKG51bGwpO1xyXG4gICAgICAgIHRoaXMuYm9keVdyYXBwZXJFbGVtZW50SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmhhbmRsZUJvZHlXcmFwcGVyRWxlbWVudFJlc2l6ZSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYm9keVdyYXBwZXJFbGVtZW50SW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTm9kZXMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgICAgICB0aGlzLnBhZ2VMZW5ndGggPSA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlZnJlc2hEYXRhU291cmNlKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbnMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIHRlc3RMb2FkNTAwKCkge1xyXG4gICAgLy9cclxuICAgIC8vICAgICBleGVjdXRlU1FMKFwic2VsZWN0IFRPUCA1MDAwINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQndC+0LzQtdGAXCIpXHJcbiAgICAvLyAgICAgICAgIC5kb25lKCh0YWJsZSkgPT4ge1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRhYmxlLnJvd3MubWFwKChyKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHvQmtC70Y7RhzogcltcItCa0LvRjtGHXCJdLCDQndC+0LzQtdGAOiByW1wi0J3QvtC80LXRgFwiXSwg0J3QsNC30LLQsNC90LjQtTogcltcItCd0LDQt9Cy0LDQvdC40LVcIl19O1xyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbnMoKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlTm9kZXMoKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdCB0b3AgNTAwNiog0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCa0LvRjtGHIC0tPiBcIiArIHRhYmxlLnJvd3NbMF0uZ2V0VmFsdWUoMikpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuZmFpbCgoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBUcmVlR3JpZFByb3BzKSB7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRVcGRhdGUocHJldlByb3BzOiBUcmVlR3JpZFByb3BzLCBwcmV2U3RhdGU6IGFueSwgcHJldkNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKG51bGwpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclJvd3MoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlclJvd3Mtc3RhcnQoKVwiKTtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLXJvd3M6IFwiICsgdGhpcy5yb3dzLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0LnB1c2godGhpcy5yZW5kZXJSb3cocm93LCBpbmRleCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVuZGVyUm93cy1lbmQoKVwiKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUm93KHJvdzogSW50ZXJuYWxSb3csIHJvd0luZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Jvd0luZGV4fVxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHsgcm93LmVsZW1lbnQgPSBlO319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDZWxscyhyb3csIHJvd0luZGV4KX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2VsbHMocm93OiBJbnRlcm5hbFJvdywgcm93SW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXQucHVzaCh0aGlzLnJlbmRlckNlbGwocm93LCByb3dJbmRleCwgY29sLCBjb2xJbmRleCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDZWxsKHJvdzogSW50ZXJuYWxSb3csIHJvd0luZGV4OiBudW1iZXIsIGNvbDogSW50ZXJuYWxDb2x1bW4sIGNvbEluZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBvYmpJbmRleCA9IHJvdy5zb3VyY2VJbmRleDtcclxuICAgICAgICBsZXQgc3RyID0gdGhpcy5kYXRhU291cmNlW29iakluZGV4XVtjb2wucHJvcHMuZmllbGROYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vbGV0IHN0ciA9IHRoaXMucm93c1tyb3dJbmRleF0uc291cmNlT2JqZWN0W2NvbC5wcm9wcy5maWVsZE5hbWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8gcmV0dXJuIDx0ZCBrZXk9e2NvbEluZGV4fT5cclxuICAgICAgICAvLyAgICAgPGRpdiBzdHlsZT17e2hlaWdodDoxNiwgb3ZlcmZsb3c6XCJoaWRkZW5cIn19PntzdHJ9PC9kaXY+XHJcbiAgICAgICAgLy8gPC90ZD47XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gcm93Lm5vZGU7XHJcblxyXG4gICAgICAgIGxldCBoaWVyYXJjaHlQYWRkaW5nRGl2OiBKU1guRWxlbWVudDtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiAoY29sLnByb3BzLnNob3dIaWVyYXJjaHlQYWRkaW5nIHx8IGNvbC5wcm9wcy5zaG93SGllcmFyY2h5VHJlZSkpIHtcclxuICAgICAgICAgICAgaGllcmFyY2h5UGFkZGluZ0RpdiA9IDxzcGFuIHN0eWxlPXt7d2lkdGg6bm9kZS5sZXZlbCAqIDIwLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wifX0+PC9zcGFuPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0ZFN0eWxlOiBhbnkgPSB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9O1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlICYmIGNvbC5wcm9wcy5zaG93SGllcmFyY2h5VHJlZSkge1xyXG4gICAgICAgICAgICB0ZFN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gXCJyZ2JhKDI1NSwgMCwgMCwgMClcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdHJTcGFuU3R5bGU6IGFueSA9IHtcclxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlICYmIGNvbC5wcm9wcy5zaG93SGllcmFyY2h5VHJlZSAmJiBub2RlLmV4cGFuZGVkICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdHJTcGFuU3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RyU3BhbiA9IDxzcGFuIHN0eWxlPXsgc3RyU3BhblN0eWxlfT57c3RyfTwvc3Bhbj47XHJcblxyXG5cclxuICAgICAgICBsZXQgY29sbGFwc2VJY29uRGl2OiBKU1guRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VJY29uRGl2ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDoyMCwgZmxleDogXCIwIDAgYXV0b1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHtub2RlLmV4cGFuZGVkID0gZmFsc2U7IHRoaXMuY3JlYXRlUm93cygpOyB0aGlzLmZvcmNlVXBkYXRlKCk7fSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNvbGxhcHNlLWljb25cIiBzdHlsZT17eyB3aWR0aDoyMCwgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4ge25vZGUuZXhwYW5kZWQgPSB0cnVlOyB0aGlzLmNyZWF0ZVJvd3MoKTsgdGhpcy5mb3JjZVVwZGF0ZSgpO30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VJY29uRGl2ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNvbGxhcHNlLWljb25cIiBzdHlsZT17eyB3aWR0aDoyMCwgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgIGtleT17Y29sSW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17dGRTdHlsZX1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiByb3cuY2VsbEVsZW1lbnRzW2NvbEluZGV4XSA9IGV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHsgdGhpcy5zZXRGb2N1c2VkQ2VsbChyb3dJbmRleCxjb2xJbmRleCk7fSB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWNoZWNrYm94XCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1wYWRkaW5nXCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoaWVyYXJjaHlQYWRkaW5nRGl2fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sbGFwc2VJY29uRGl2fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1pY29uXCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXN0clwiIHN0eWxlPXt7IGZsZXg6IFwiMCAxIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyU3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRGb2N1c2VkQ2VsbChyb3dJbmRleDogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLmZvY3VzZWRSb3dJbmRleCA9IHJvd0luZGV4O1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZENlbGxJbmRleCA9IGNlbGxJbmRleDtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUYWJsZVdoZWVsKGU6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgICAvLyBpZiAoZS5kZWx0YVkgPiAwKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmluY1BhZ2VTdGFydEluZGV4KDMpO1xyXG4gICAgICAgIC8vIGVsc2UgaWYgKGUuZGVsdGFZIDwgMClcclxuICAgICAgICAvLyAgICAgdGhpcy5kZWNQYWdlU3RhcnRJbmRleCgzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRlbHRhWSk7XHJcbiAgICAgICAgLy8gdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2Nyb2xsKGU6IFVJRXZlbnQpIHtcclxuICAgICAgICAkKHRoaXMuaGVhZGVyRWxlbWVudCkuY3NzKHt0b3A6IHRoaXMuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcH0pO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gJCh0aGlzLmZvb3RlckVsZW1lbnQpLm91dGVySGVpZ2h0KCkgLSAwO1xyXG4gICAgICAgICQodGhpcy5mb290ZXJFbGVtZW50KS5jc3Moe3RvcDogcG9zfSk7XHJcblxyXG4gICAgICAgICQodGhpcy5oZWFkZXJGYWtlUm93KS5jc3Moe2hlaWdodDogJCh0aGlzLmhlYWRlckVsZW1lbnQpLm91dGVySGVpZ2h0KCl9KTtcclxuICAgICAgICAkKHRoaXMuZm9vdGVyRmFrZVJvdykuY3NzKHtoZWlnaHQ6ICQodGhpcy5mb290ZXJFbGVtZW50KS5vdXRlckhlaWdodCgpfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQ2hhbmdlRm9jdXNlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZWxlbWVudClcclxuICAgICAgICAgICAgICAgICQocm93LmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtcm93XCIpO1xyXG5cclxuICAgICAgICAgICAgcm93LmNlbGxFbGVtZW50cy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbClcclxuICAgICAgICAgICAgICAgICAgICAkKGNlbGwpLnJlbW92ZUNsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtY2VsbFwiKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZm9jdXNlZFJvdyA9IHRoaXMucm93c1t0aGlzLmZvY3VzZWRSb3dJbmRleF07XHJcbiAgICAgICAgaWYgKGZvY3VzZWRSb3cgJiYgZm9jdXNlZFJvdy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZm9jdXNlZFJvdy5lbGVtZW50KS5hZGRDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLXJvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmb2N1c2VkQ2VsbEVsZW1lbnQgPSBmb2N1c2VkUm93LmNlbGxFbGVtZW50c1t0aGlzLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoZm9jdXNlZENlbGxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKGZvY3VzZWRDZWxsRWxlbWVudCkuYWRkQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1jZWxsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb2N1c2VkQ2VsbEVsZW1lbnQoKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm93c1t0aGlzLmZvY3VzZWRSb3dJbmRleF0uY2VsbEVsZW1lbnRzW3RoaXMuZm9jdXNlZENlbGxJbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb2N1c2VkUm93RWxlbWVudCgpOiBFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3dzW3RoaXMuZm9jdXNlZFJvd0luZGV4XS5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsRG93bigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkUm93SW5kZXggPCB0aGlzLnJvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRSb3dJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3dFbCA9ICQodGhpcy5nZXRGb2N1c2VkUm93RWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIC8vINGD0YjQu9C+INC30LAg0L/RgNC10LTQtdC70Ysg0LLQuNC00LjQvNC+0YHRgtC4XHJcbiAgICAgICAgICAgIGlmIChyb3dFbC5wb3NpdGlvbigpLnRvcCArIHJvd0VsLmhlaWdodCgpID5cclxuICAgICAgICAgICAgICAgIHRoaXMuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuYm9keVdyYXBwZXJFbGVtZW50LmNsaWVudEhlaWdodCAtICQodGhpcy5mb290ZXJFbGVtZW50KS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgPSByb3dFbC5wb3NpdGlvbigpLnRvcCArIHJvd0VsLmhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5jbGllbnRIZWlnaHQgKyAkKHRoaXMuZm9vdGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxMZWZ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRDZWxsSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZENlbGxJbmRleC0tO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZENlbGxJbmRleCA8IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZENlbGxJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbFVwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRSb3dJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c2VkUm93SW5kZXgtLTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93RWwgPSAkKHRoaXMuZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyDRg9GI0LvQviDQt9CwINC/0YDQtdC00LXQu9GLINCy0LjQtNC40LzQvtGB0YLQuFxyXG4gICAgICAgICAgICBpZiAocm93RWwucG9zaXRpb24oKS50b3AgPCB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgKyAkKHRoaXMuaGVhZGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wID0gcm93RWwucG9zaXRpb24oKS50b3AgLSAkKHRoaXMuaGVhZGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQm9keUtleURvd24oZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gS2V5Y29kZS5Eb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsRG93bigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLlVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsVXAoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5MZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsTGVmdCgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLlJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzZWRDZWxsUmlnaHQoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyQ29sdW1uSGVhZGVycygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBjb2xXaWR0aHM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBsZXQgY29sSGVhZGVyczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaCg8Y29sIGtleT17aW5kZXh9IHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfS8+KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZFN0eWxlOiBhbnkgPSB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9O1xyXG5cclxuICAgICAgICAgICAgY29sSGVhZGVycy5wdXNoKDx0ZCBrZXk9e2luZGV4fSBzdHlsZT17dGRTdHlsZX0+e2NvbC5jYXB0aW9ufTwvdGQ+KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuaGVhZGVyRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCIsIGJvcmRlcjpcIjBweCBzb2xpZCByZWRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGFibGVMYXlvdXQ6IFwiZml4ZWRcIixib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpKzI1fX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xXaWR0aHN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sSGVhZGVyc31cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbHVtbkZvb3RlcnMoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgY29sV2lkdGhzOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgbGV0IGNvbEZvb3RlcnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGlzRm9vdGVyRW1wdHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKDxjb2wga2V5PXtpbmRleH0gd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9Lz4pO1xyXG4gICAgICAgICAgICBpZiAoY29sLmZvb3RlcilcclxuICAgICAgICAgICAgICAgIGlzRm9vdGVyRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHRkU3R5bGU6IGFueSA9IHtvdmVyZmxvdzogXCJoaWRkZW5cIn07XHJcbiAgICAgICAgICAgIGNvbEZvb3RlcnMucHVzaCg8dGQga2V5PXtpbmRleH0gc3R5bGU9e3RkU3R5bGV9Pntjb2wuZm9vdGVyfTwvdGQ+KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFpc0Zvb3RlckVtcHR5KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5mb290ZXJFbGVtZW50ID0gZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjpcImFic29sdXRlXCIsIGJvcmRlcjpcIjBweCBzb2xpZCBibHVlXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtZm9vdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0YWJsZUxheW91dDogXCJmaXhlZFwiLGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsIHdpZHRoOnRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCkrMjV9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbFdpZHRoc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sRm9vdGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcmlkQm9keSgpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBjb2xXaWR0aHM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaCg8Y29sIGtleT17aW5kZXh9IHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfS8+KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtYm9keVwiXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cclxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17IChlKSA9PiB7ICB0aGlzLmhhbmRsZUJvZHlLZXlEb3duKGUpOyB9IH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRhYmxlTGF5b3V0OiBcImZpeGVkXCIsIGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOnRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCkrMjV9fVxyXG5cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2xXaWR0aHN9XHJcbiAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCByZWY9eyAoZSkgPT4gdGhpcy5oZWFkZXJGYWtlUm93ID0gZX0+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKCl9XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHJlZj17IChlKSA9PiB0aGlzLmZvb3RlckZha2VSb3cgPSBlfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbi8vYm9keVRvcEZha2VIZWlndGg6IG51bWJlciA9IDE7XHJcbiAgICBib2R5V3JhcHBlckVsZW1lbnQ6IGFueTtcclxuICAgIGhlYWRlckZha2VSb3c6IGFueTtcclxuICAgIGZvb3RlckZha2VSb3c6IGFueTtcclxuICAgIGhlYWRlckVsZW1lbnQ6IGFueTtcclxuICAgIGZvb3RlckVsZW1lbnQ6IGFueTtcclxuXHJcbiAgICBjYWxjVG90YWxDb2x1bW5zV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcmV0ID0gMDtcclxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbC5oaWRkZW4pXHJcbiAgICAgICAgICAgICAgICByZXQgKz0gY29sLndpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNoYWxsb3dDb21wYXJlKG5leHRQcm9wczogVHJlZUdyaWRQcm9wcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hhbGxvdy10cmVlLWdyaWRcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInNoYWxsb3ctd2luIC0+IGlzRXFpYWwgPSBcIiArIHRoaXMuaXNQcm9wc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcywgW1wiY2hpbGRyZW5cIl0pKTtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNQcm9wc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcywgW1wiY2hpbGRyZW5cIixcImRhdGFTb3VyY2VcIl0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy90aGlzLmFkZENsYXNzTmFtZShcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci10cmVlLWdyaWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1ncmlkXCJcclxuICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtaGVhZGVyLXdyYXBwZXJcIiBzdHlsZT17eyBmbGV4OiBcIjAgMCBhdXRvXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2ggNTAwMVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgdGhpcy5maWx0ZXJEYXRhKCk7IHRoaXMuZm9yY2VVcGRhdGUoKTsgY29uc29sZS5sb2coXCJmb3JjZVVwZGF0ZVwiKTsgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgINC30LDQs9C+0LvQvtCy0L7QuiDQuCDRgi7QtC5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtYm9keS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzpcImF1dG9cIiwgZmxleDogXCIwIDEgYXV0b1wiLCBtYXhXaWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpKzUwfX1cclxuICAgICAgICAgICAgICAgICAgICAgb25TY3JvbGw9eyB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckdyaWRCb2R5KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbHVtbkhlYWRlcnMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sdW1uRm9vdGVycygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtZm9vdGVyLXdyYXBwZXJcIiBzdHlsZT17eyBmbGV4OiBcIjAgMSBhdXRvXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAg0YTRg9GC0LXRgCDQuCDRgtC0XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkLnRzeFxuICoqLyIsIu+7v2ltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZENvbHVtbnNQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgLy9jYXB0aW9uPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRDb2x1bW5zIGV4dGVuZHMgQ29tcG9uZW50PFRyZWVHcmlkQ29sdW1uc1Byb3BzLCBhbnk+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlZUdyaWRDb2x1bW5zUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zLnRzeFxuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuLy9pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZENvbHVtblByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICBjYXB0aW9uPzogc3RyaW5nO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBzaG93SGllcmFyY2h5VHJlZT86IGJvb2xlYW47XHJcbiAgICBzaG93SGllcmFyY2h5UGFkZGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbiBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZENvbHVtblByb3BzLCBhbnk+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlZUdyaWRDb2x1bW5Qcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAvL3RoaXMuc3RhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgLy90aGlzLmFkZENsYXNzTmFtZShcImJ0blwiKTtcclxuICAgICAgICAvL3RoaXMudG9nZ2xlQ2xhc3NOYW1lKHRoaXMucHJvcHMuZGlzYWJsZWQsIFwiZGlzYWJsZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAobnVsbCk7XHJcbiAgICAgICAgLy9UcmVlR3JpZCBmcm9tIHt0aGlzLnByb3BzLmNvbXBpbGVyfSBhbmQge3RoaXMucHJvcHMuZnJhbWV3b3JrfSFjbGlja0NvdW50PXt0aGlzLnN0YXRlLmNsaWNrQ291bnR9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uLnRzeFxuICoqLyIsIlxyXG5leHBvcnQgdmFyIEtleWNvZGUgPSB7XHJcbiAgICBFc2M6IFwiRXNjYXBlXCIsXHJcbiAgICBTcGFjZTogXCIgXCIsXHJcblxyXG4gICAgTGVmdDogXCJBcnJvd0xlZnRcIixcclxuICAgIFVwOiBcIkFycm93VXBcIixcclxuICAgIERvd246IFwiQXJyb3dEb3duXCIsXHJcbiAgICBSaWdodDogXCJBcnJvd1JpZ2h0XCIsXHJcblxyXG4gICAgRGVsOiBcIkRlbGV0ZVwiLFxyXG4gICAgSW5zOiBcIkluc2VydFwiLFxyXG5cclxuICAgIFdpbjogXCJNZXRhXCIsXHJcbiAgICBNZW51OiBcIkNvbnRleHRNZW51XCIsXHJcblxyXG4gICAgU2Nyb2xsOiBcIlNjcm9sbExvY2tcIixcclxuICAgIE51bTogXCJOdW1Mb2NrXCIsXHJcblxyXG4gICAgQmFja3NwYWNlOiBcIkJhY2tzcGFjZVwiLFxyXG4gICAgVGFiOiBcIlRhYlwiLFxyXG4gICAgRW50ZXI6IFwiRW50ZXJcIixcclxuICAgIFNoaWZ0OiBcIlNoaWZ0XCIsXHJcbiAgICBDb250cm9sOiBcIkNvbnRyb2xcIixcclxuICAgIEFsdDogXCJBbHRcIixcclxuICAgIEJyZWFrOiBcIlBhdXNlXCIsXHJcbiAgICBDYXBzTG9jazogXCJDYXBzTG9ja1wiLFxyXG5cclxuICAgIFBhZ2VVcDogXCJQYWdlVXBcIixcclxuICAgIFBhZ2VEb3duOiBcIlBhZ2VEb3duXCIsXHJcbiAgICBFbmQ6IFwiRW5kXCIsXHJcbiAgICBIb21lOiBcIkhvbWVcIixcclxuXHJcbiAgICBGMTogXCJGMVwiLFxyXG4gICAgRjI6IFwiRjJcIixcclxuICAgIEYzOiBcIkYzXCIsXHJcbiAgICBGNDogXCJGNFwiLFxyXG4gICAgRjU6IFwiRjVcIixcclxuICAgIEY2OiBcIkY2XCIsXHJcbiAgICBGNzogXCJGN1wiLFxyXG4gICAgRjg6IFwiRjhcIixcclxuICAgIEY5OiBcIkY5XCIsXHJcbiAgICBGMTA6IFwiRjEwXCIsXHJcbiAgICBGMTE6IFwiRjExXCIsXHJcbiAgICBGMTI6IFwiRjEyXCJcclxuXHJcbn07XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9LZXlDb2RlLnRzXG4gKiovIiwi77u/aW1wb3J0ICogYXMgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuXHJcblxyXG5sZXQgc29ja2V0ID0gaW8uY29ubmVjdCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTUUwoc3FsOiBzdHJpbmcpOiBKUXVlcnlQcm9taXNlPERhdGFUYWJsZT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImNhbGwgU1FMLnNxbC5leGVjdXRlXCIpO1xyXG4gICAgLy9yZXR1cm4gc2lnbmFsUi5leGVjdXRlU1FMKHNxbCk7XHJcblxyXG5cclxuICAgIGxldCBwcm9taXNlOiBKUXVlcnlEZWZlcnJlZDxEYXRhVGFibGU+O1xyXG4gICAgcHJvbWlzZSA9ICQuRGVmZXJyZWQ8RGF0YVRhYmxlPigpO1xyXG5cclxuICAgIC8vICBzb2NrZXQub25jZSgnY29ubmVjdCcsKCkgPT4ge1xyXG4gICAgbGV0IHF1ZXJ5SWQgPSBcInF1ZXJ5LVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XHJcbiAgICBzb2NrZXQuZW1pdChcImV4ZWN1dGVTUUxcIiwge3F1ZXJ5SWQsIHNxbH0pO1xyXG4gICAgc29ja2V0Lm9uY2UocXVlcnlJZCwgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QocmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRhdGFUYWJsZSA9IG5ldyBEYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFDb2x1bW4gPSBuZXcgRGF0YUNvbHVtbihkYXRhVGFibGUsIHJlc3BvbnNlLmNvbHVtbnNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhVGFibGUuY29sdW1ucy5wdXNoKGRhdGFDb2x1bW4pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNwb25zZS5yb3dzLmZvckVhY2goKHJvdzogYW55KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFSb3cgPSBuZXcgRGF0YVJvdyhkYXRhVGFibGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29sdW1uc1tpXS5wYXJzZSA9PT0gXCJEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbZGF0YVRhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSBuZXcgRGF0ZShyb3dbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1tkYXRhVGFibGUuY29sdW1uc1tpXS5uYW1lXSA9IHJvd1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RhdGFSb3dbaV0gPSByb3dbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVRhYmxlLnJvd3MucHVzaChkYXRhUm93KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRhdGFUYWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gICB9KTtcclxuXHJcblxyXG4gICAgLy9zaWduYWxSLmV4ZWN1dGVTUUwoc3FsKS5cclxuICAgIC8vICAgIGRvbmUoKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICBsZXQgcmVzID0gZXZhbChyZXN1bHQpO1xyXG5cclxuICAgIC8vICAgICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHJlcy5lcnJvcik7XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICBsZXQgZHMgPSBuZXcgRGF0YXNldCgpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgcmVzLnRhYmxlcy5mb3JFYWNoKCh0YWJsZSkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgbGV0IGRhdGFUYWJsZSA9IG5ldyBEYXRhVGFibGUoZHMpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgZGF0YVRhYmxlLm5hbWUgPSB0YWJsZS5uYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgZHMudGFibGVzLnB1c2goZGF0YVRhYmxlKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUNvbHVtbiA9IG5ldyBEYXRhQ29sdW1uKGRhdGFUYWJsZSwgdGFibGUuY29sdW1uc1tpXS5uYW1lKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGUuY29sdW1ucy5wdXNoKGRhdGFDb2x1bW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgIHRhYmxlLnJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhUm93ID0gbmV3IERhdGFSb3coKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbdGFibGUuY29sdW1uc1tpXS5uYW1lXSA9IHJvd1tpXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1tpXSA9IHJvd1tpXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5yb3dzLnB1c2goZGF0YVJvdyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZHMpXHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfSkuXHJcbiAgICAvLyAgICBmYWlsKCgpID0+IHtcclxuICAgIC8vICAgICAgICBwcm9taXNlLnJlamVjdChcItC+0YjQuNCx0LrQsCBjb25uZWN0aW9uIHNpZ25hbFJcIik7XHJcbiAgICAvLyAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IGVudW0gQ29sdW1uRGF0YVR5cGUgeyBTdHJpbmcsIE51bWJlciwgRGF0YSB9XHJcblxyXG4vL2V4cG9ydCB0eXBlIERhdGFUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZSB7XHJcbiAgICBjb2x1bW5zOiBBcnJheTxEYXRhQ29sdW1uPjtcclxuICAgIHJvd3M6IEFycmF5PERhdGFSb3c+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUNvbHVtbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAvL2RhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlLCBuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVJvdyB7XHJcbiAgICBbaW5kZXg6IHN0cmluZ106IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoY29sdW1uSW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgMCB8fCBjb2x1bW5JbmRleCA+PSB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkRhdGFSb3cuZ2V0VmFsdWUoXCIgKyBjb2x1bW5JbmRleCArIFwiKTogY29sdW1uSW5kZXggb3V0IG9mIHJhbmdlXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBbdGhpcy50YWJsZS5jb2x1bW5zW2NvbHVtbkluZGV4XS5uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvL1tpbmRleDogbnVtYmVyXTogRGF0YVR5cGU7XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NRTC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gaW87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlvXCJcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==