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
	var SQL_1 = __webpack_require__(30);
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
	var Movable_1 = __webpack_require__(23);
	var getScrollBarWidth_1 = __webpack_require__(29);
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
	//const vertScrollBarWidth = 30;
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
	        this.columnResizeStart = function (event, col) {
	            event.bindX(col, "width", function () {
	                $(col.headerWidthNativeElement).attr('width', col.width);
	                $(col.bodyWidthNativeElement).attr('width', col.width);
	                $(col.footerWidthNativeElement).attr('width', col.width);
	                var tableWidth = _this.calcTotalColumnsWidth();
	                $(_this.headerTableElement).css('width', tableWidth);
	                $(_this.bodyTableElement).css('width', tableWidth);
	                $(_this.footerTableElement).css('width', tableWidth);
	                $(_this.bodyWrapperElement).css('max-width', tableWidth + getScrollBarWidth_1.getScrollbarWidth() + 1);
	            });
	            // this.handleOnClick(null);
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
	        $(this.headerWrapperElement).css({ top: this.bodyWrapperElement.scrollTop });
	        var pos = this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerWrapperElement).outerHeight() - 0;
	        $(this.footerWrapperElement).css({ top: pos });
	        $(this.headerFakeRow).css({ height: $(this.headerWrapperElement).outerHeight() });
	        $(this.footerFakeRow).css({ height: $(this.footerWrapperElement).outerHeight() });
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
	                this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerWrapperElement).outerHeight()) {
	                this.bodyWrapperElement.scrollTop = rowEl.position().top + rowEl.height() -
	                    this.bodyWrapperElement.clientHeight + $(this.footerWrapperElement).outerHeight();
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
	            if (rowEl.position().top < this.bodyWrapperElement.scrollTop + $(this.headerWrapperElement).outerHeight()) {
	                this.bodyWrapperElement.scrollTop = rowEl.position().top - $(this.headerWrapperElement).outerHeight();
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
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px", ref: function (e) { col.headerWidthNativeElement = e; }}));
	            var tdStyle = { overflow: "hidden" };
	            colHeaders.push(React.createElement("td", {key: index, style: tdStyle}, col.caption, React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, width: 5, right: 0, bottom: 0, cursor: "col-resize" }, onMoveStart: function (event) { _this.columnResizeStart(event, col); console.log("MoveStart"); }}), React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, width: index === 0 ? 0 : 5, left: 0, bottom: 0, cursor: "col-resize" }, onMoveStart: function (event) {
	                // ресайзим предыдущую колонку
	                _this.columnResizeStart(event, _this.columns[index - 1]);
	            }})));
	        });
	        return (React.createElement("div", {ref: function (e) { return _this.headerWrapperElement = e; }, style: { position: "absolute" }}, React.createElement("table", {className: "tree-grid-header", style: { tableLayout: "fixed", borderCollapse: "collapse", width: this.calcTotalColumnsWidth() }, ref: function (e) { return _this.headerTableElement = e; }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, colHeaders)))));
	    };
	    TreeGrid.prototype.renderColumnFooters = function () {
	        var _this = this;
	        var colWidths = [];
	        var colFooters = [];
	        var isFooterEmpty = true;
	        this.columns.forEach(function (col, index) {
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px", ref: function (e) { col.footerWidthNativeElement = e; }}));
	            if (col.footer)
	                isFooterEmpty = false;
	            var tdStyle = { overflow: "hidden" };
	            colFooters.push(React.createElement("td", {key: index, style: tdStyle}, col.footer));
	        });
	        if (!isFooterEmpty)
	            return (React.createElement("div", {ref: function (e) { return _this.footerWrapperElement = e; }, style: { position: "absolute" }}, React.createElement("table", {className: "tree-grid-footer", style: { tableLayout: "fixed", borderCollapse: "collapse", width: this.calcTotalColumnsWidth() }, ref: function (e) { return _this.footerTableElement = e; }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, colFooters)))));
	        else
	            return undefined;
	    };
	    TreeGrid.prototype.renderGridBody = function () {
	        var _this = this;
	        var colWidths = [];
	        this.columns.forEach(function (col, index) {
	            colWidths.push(React.createElement("col", {key: index, width: col.width.toString() + "px", ref: function (e) { col.bodyWidthNativeElement = e; }}));
	        });
	        return (React.createElement("table", {className: "tree-grid-body", tabIndex: 0, onKeyDown: function (e) { _this.handleBodyKeyDown(e); }, style: { tableLayout: "fixed", borderCollapse: "collapse", position: "relative", width: this.calcTotalColumnsWidth() }, ref: function (e) { return _this.bodyTableElement = e; }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {ref: function (e) { return _this.headerFakeRow = e; }})), this.renderRows(), React.createElement("tr", null, React.createElement("td", {ref: function (e) { return _this.footerFakeRow = e; }})))));
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
	        return (React.createElement("div", {className: "tree-grid", style: { display: "flex", flexDirection: "column", height: "100%" }}, React.createElement("div", {className: "tree-grid-header-wrapper", style: { flex: "0 0 auto" }}, React.createElement("button", {onClick: function () { }}, "refresh 5001"), React.createElement("button", {onClick: function () { _this.filterData(); _this.forceUpdate(); console.log("forceUpdate"); }}, "filter"), "заголовок и т.д."), React.createElement("div", {className: "tree-grid-body-wrapper", style: { position: "relative", overflow: "auto", flex: "0 1 auto", maxWidth: this.calcTotalColumnsWidth() + getScrollBarWidth_1.getScrollbarWidth() + 1 }, onScroll: this.handleScroll.bind(this), ref: function (e) { return _this.bodyWrapperElement = e; }}, React.createElement("div", null, this.renderGridBody(), this.renderColumnHeaders(), this.renderColumnFooters())), React.createElement("div", {className: "tree-grid-footer-wrapper", style: { flex: "0 1 auto" }}, "футер и тд")));
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
	function getScrollbarWidth() {
	    if (cacheWidth > 0)
	        return cacheWidth;
	    var outer = document.createElement("div");
	    outer.style.visibility = "hidden";
	    outer.style.width = "100px";
	    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
	    document.body.appendChild(outer);
	    var widthNoScroll = outer.offsetWidth;
	    // force scrollbars
	    outer.style.overflow = "scroll";
	    // add innerdiv
	    var inner = document.createElement("div");
	    inner.style.width = "100%";
	    outer.appendChild(inner);
	    var widthWithScroll = inner.offsetWidth;
	    // remove divs
	    outer.parentNode.removeChild(outer);
	    cacheWidth = widthNoScroll - widthWithScroll;
	    return cacheWidth;
	}
	exports.getScrollbarWidth = getScrollbarWidth;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var io = __webpack_require__(31);
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
/* 31 */
/***/ function(module, exports) {

	module.exports = io;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2IxZDgwYTFmZjNlZDI0YTE4OWEiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Rlc2t0b3AvRGVza3RvcC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9XaW5kb3cvV2luZG93LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGUudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0tleUNvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL2dldFNjcm9sbEJhcldpZHRoLnRzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9TUUwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW9cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0EsS0FBWSxLQUFLLHVCQUFNLENBQU8sQ0FBQztBQUMvQixLQUFZLFFBQVEsdUJBQU0sQ0FBVyxDQUFDO0FBSXRDLHlDQUEwQixDQUErQyxDQUFDO0FBQzFFLDhDQUErQixDQUEyQixDQUFDO0FBRTNELG9CQUFtQjtBQUNuQiwwREFBeUQ7QUFDekQsMENBQXlDO0FBQ3pDLE1BQUs7QUFFTCxvQkFBbUI7QUFDbkIsZUFBYztBQUNkLHFCQUFvQjtBQUNwQixNQUFLO0FBRUwsU0FBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyx5QkFBVyxPQUFFLEVBQ2QsUUFBUSxDQUFDLElBQUksQ0FDaEIsQ0FBQztBQUdGLEtBQUksR0FBRyxHQUFDLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUMvQixLQUFJLElBQUksR0FBQyxJQUFJLG1DQUFnQixFQUFFLENB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RSxFQUFFLENBQUMsQ0FBQztTQUVsRCxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1NBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUNsQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDaEMsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ2hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUVsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2YsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ2pDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2lCQUNqQixNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUN2QixDQUFDO2FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNwQixNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUN2QixDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUM7aUJBQ0YsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7YUFDckIsQ0FBQztTQUNMLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQzthQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNqQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUN2QixDQUFDO1NBQ0wsQ0FBQztTQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FB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O1NBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7S0FDbkIsQ0FBQztLQUNMLGdCQUFDO0FBQUQsRUFBQztBQVJZLGtCQUFTLFlBUXJCO0FBRUQ7S0FFSSwyQkFBMkI7S0FDM0Isb0JBQW1CLEtBQWdCLEVBQUUsSUFBYTtTQUEvQixVQUFLLEdBQUwsS0FBSyxDQUFXO1NBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBRXJCLENBQUM7S0FDTCxpQkFBQztBQUFELEVBQUM7QUFQWSxtQkFBVSxhQU90QjtBQUdEO0tBRUksaUJBQW1CLEtBQWdCO1NBQWhCLFVBQUssR0FBTCxLQUFLLENBQVc7S0FDbkMsQ0FBQztLQUVELDBCQUFRLEdBQVIsVUFBUyxXQUFtQjtTQUN4QixFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDNUQsTUFBTSxtQkFBbUIsR0FBRyxXQUFXLEdBQUcsNkJBQTZCLENBQUM7U0FFNUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEQsQ0FBQztLQUdMLGNBQUM7QUFBRCxFQUFDO0FBYlksZ0JBQU8sVUFhbkI7Ozs7Ozs7QUNySUQscUIiLCJmaWxlIjoiLi9kaXN0L0J1aHRhQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjYjFkODBhMWZmM2VkMjRhMTg5YVxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBIZWxsbyB9IGZyb20gXCIuL0hlbGxvUHJvcHNcIjtcclxuaW1wb3J0IHtBcHB9IGZyb20gXCIuLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7QXBwRGVzaWduZXJ9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXJcIjtcclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MVwiO1xyXG5cclxuLy8gUmVhY3RET00ucmVuZGVyKFxyXG4vLyAgICAgPEhlbGxvIGNvbXBpbGVyPVwiVHlwZVNjcmlwdFwiIGZyYW1ld29yaz1cIlJlYWN0XCIgLz4sXHJcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVcIilcclxuLy8gKTtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICAgIDxBcHAvPixcclxuLy8gICAgIGRvY3VtZW50LmJvZHlcclxuLy8gKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxBcHBEZXNpZ25lci8+LFxyXG4gICAgZG9jdW1lbnQuYm9keVxyXG4pO1xyXG5cclxuXHJcbmxldCB4eHg9bmV3IFRlc3RCdWh0YU9iamVjdDEoKTtcclxubGV0IHh4eDE9bmV3IFRlc3RCdWh0YU9iamVjdDEoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2NvbXBvbmVudHMvaW5kZXgudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXhcIjtcclxuXHJcbmltcG9ydCB7VGVzdEJ1aHRhT2JqZWN0MX0gZnJvbSBcIi4uLy4uL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDFcIjtcclxuaW1wb3J0IHtPYmplY3REZXNpZ25lcn0gZnJvbSBcIi4uL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyXCI7XHJcbmltcG9ydCB7RGVza3RvcCwgT3BlbldpbmRvd1BhcmFtc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9EZXNrdG9wL0Rlc2t0b3BcIjtcclxuaW1wb3J0IHtEcmFnZ2FibGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRHJhZ2dhYmxlL0RyYWdnYWJsZVwiO1xyXG5pbXBvcnQge01vdmFibGUsIE1vdmVFdmVudCwgTW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCB7QXBwLCBhcHBJbnN0YW5jZX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHBcIjtcclxuaW1wb3J0IHtXaW5kb3d9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvV2luZG93L1dpbmRvd1wiO1xyXG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UYWJzL1RhYnNcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0Zvcm0vRm9ybVwiO1xyXG5pbXBvcnQge0lucHV0LCBJbnB1dFR5cGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IHtJbnB1dERpdmlkZXJ9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvSW5wdXREaXZpZGVyL0lucHV0RGl2aWRlclwiO1xyXG5pbXBvcnQge3Rlc3RCdWh0YU9iamVjdDJ9IGZyb20gXCIuLi8uLi9UZXN0MS90ZXN0QnVodGFPYmplY3QyXCI7XHJcbmltcG9ydCB7Z2V0UHJvcGVydHlFZGl0b3JzfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL2dldFByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcbmltcG9ydCB7VHJlZUdyaWR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbn0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnNcIjtcclxuaW1wb3J0IHtleGVjdXRlU1FMfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9TUUxcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcERlc2lnbmVyUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxBcHBEZXNpZ25lclN0YXRlPiB7XHJcbiAgICAvL3RleHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIEFwcERlc2lnbmVyU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxBcHBEZXNpZ25lclByb3BzPiB7XHJcbiAgICAvL3RleHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBEZXNpZ25lciBleHRlbmRzIENvbXBvbmVudDxBcHBEZXNpZ25lclByb3BzLCBBcHBEZXNpZ25lclN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQXBwRGVzaWduZXJQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEFwcERlc2lnbmVyU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGluaXRUZXN0KCkge1xyXG4gICAgLy8gICAgIHRoaXMudGVzdE9iamVjdC5uYW1lID0gXCLQotC10YHRgtC+0LLRi9C5INC+0LHRitC10LrRgjFcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBtb3ZlU3RhcnQoZTogTW92ZVN0YXJ0RXZlbnQpIHtcclxuICAgICAgICBlLmJpbmRYKHRoaXMsIFwic2lkZVdpZHRoXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaWRlV2lkdGg6IG51bWJlciA9IDMwMDtcclxuXHJcbiAgICB0ZXN0T3BlbldpbmRvdygpIHtcclxuXHJcbiAgICAgICAgLy8gbGV0IG9iaiA9IHtcclxuICAgICAgICAvLyAgICAg0KTQsNC80LjQu9C40Y86IFwi0KHQsNCy0YfQtdC90LrQvtCyXCIsXHJcbiAgICAgICAgLy8gICAgINCY0LzRjzogXCLQmtC+0L3RgdGC0LDQvdGC0LjQvVwiLFxyXG4gICAgICAgIC8vICAgICDQntGC0YfQtdGB0YLQstC+OiBcItCS0LvQsNC00LjQvNC40YDQvtCy0LjRh1wiXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCB3aW4gPVxyXG4gICAgICAgIC8vICAgICA8VGFicz5cclxuICAgICAgICAvLyAgICAgICAgIDxUYWIgdGl0bGU9XCLQt9Cw0LrQu9Cw0LTQutCwIDFcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0IGNhcHRpb249XCLQpNCw0LzQuNC70LjRj1wiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXtvYmp9IGJpbmRQcm9wTmFtZT1cItCk0LDQvNC40LvQuNGPXCIvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXQgY2FwdGlvbj1cItCY0LzRj1wiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXtvYmp9IGJpbmRQcm9wTmFtZT1cItCY0LzRj1wiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0RGl2aWRlciB0aXRsZT1cItCwINGC0LXQv9C10YDRjCDQvtGC0YfQtdGB0YLQstC+XCI+PC9JbnB1dERpdmlkZXI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17b2JqfSBiaW5kUHJvcE5hbWU9XCLQntGC0YfQtdGB0YLQstC+XCIvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAvLyAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgIC8vICAgICAgICAgPFRhYiB0aXRsZT1cItC30LDQutC70LDQtNC60LAgMlwiPiAyMjIyMiA8L1RhYj5cclxuICAgICAgICAvLyAgICAgPC9UYWJzPjtcclxuICAgICAgICAvLyBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHRlc3RPcGVuT2JqZWN0RGVzaWduZXIoKSB7XHJcbiAgICAgICAgbGV0IHRlc3RPYmplY3Q6IFRlc3RCdWh0YU9iamVjdDEgPSBuZXcgVGVzdEJ1aHRhT2JqZWN0MSgpO1xyXG4gICAgICAgIHRlc3RPYmplY3QuZmlyc3ROYW1lID0gXCLQmNCz0L7RgNGMMFwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QubGFzdE5hbWUgPSBcItCh0LjQtNC+0YDQtdC90LrQvjBcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0LnN1ck5hbWUgPSBcItCe0LvQtdCz0L7QstC40YcwXCI7XHJcblxyXG4vLyAgICAgICAgbGV0IHdpbiA9IDxPYmplY3REZXNpZ25lciBvbkNoYW5nZT17KCk9Pnsgd2luMkluc3RhbmNlLmRlc2lnbmVkT2JqZWN0PW51bGw7IHdpbjJJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpOyBjb25zb2xlLmxvZyhcInRlc3QzMjMtY2hhbmdlXCIpfX0gZGVzaWduZWRPYmplY3Q9e3Rlc3RPYmplY3R9IGtleT1cIjFcIj4gPC9PYmplY3REZXNpZ25lcj47XHJcbiAgICAgICAgbGV0IHdpbiA9IDxPYmplY3REZXNpZ25lclxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCk9PnsgdGVzdE9iamVjdD1fLmNsb25lRGVlcCh0ZXN0T2JqZWN0KTsgIHdpbjJJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpOyBjb25zb2xlLmxvZyhcInRlc3Q5OTktY2hhbmdlXCIpfX1cclxuICAgICAgICAgICAgZGVzaWduZWRPYmplY3Q9e3Rlc3RPYmplY3R9IGtleT1cIjFcIj4gPC9PYmplY3REZXNpZ25lcj47XHJcblxyXG4gICAgICAgIGxldCB0ZXN0T2JqZWN0MjogdGVzdEJ1aHRhT2JqZWN0MiA9IG5ldyB0ZXN0QnVodGFPYmplY3QyKCk7XHJcbiAgICAgICAgdGVzdE9iamVjdDIuZmlyc3ROYW1lID0gXCLQmNCz0L7RgNGMMVwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLmxhc3ROYW1lID0gXCLQodC40LTQvtGA0LXQvdC60L4yXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdDIuc3VyTmFtZSA9IFwi0J7Qu9C10LPQvtCy0LjRhzFcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5zZXggPSBcItC80YPQttGB0LrQvtC5XCI7XHJcblxyXG4gICAgICAgIGxldCB3aW4ySW5zdGFuY2U6IGFueTtcclxuXHJcbiAgICAgICAgbGV0IHdpbjIgPSA8T2JqZWN0RGVzaWduZXIgcmVmPXsgKGU6YW55KSA9PiB7IHdpbjJJbnN0YW5jZSA9IGU7IH0gfSBkZXNpZ25lZE9iamVjdD17dGVzdE9iamVjdDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiMlwiPlxyXG4gICAgICAgIDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICAvL2dldFByb3BlcnR5RWRpdG9ycyh0ZXN0T2JqZWN0KTtcclxuICAgICAgICAvL2dldFByb3BlcnR5RWRpdG9ycyh0ZXN0T2JqZWN0Mik7XHJcblxyXG4gICAgICAgIGxldCB3aW53aW4gPSA8ZGl2Pnt3aW59e3dpbjJ9PC9kaXY+O1xyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCLQvtC60L3QviAxXCIsXHJcbiAgICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDUwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbndpbiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB0ZXN0SW1tdXRhYmxlKCkge1xyXG4gICAgICAgIC8vIC8vbGV0IGZha2U9bmV3IFRhYmxlKFtdKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnN0IHh4eCA9IEltbXV0YWJsZS5NYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBsZXQgb2JqID0ge1xyXG4gICAgICAgIC8vICAgICBuYW1lOiBcItCe0LPQsNC90LjQt9Cw0YbQuNGPXCIsXHJcbiAgICAgICAgLy8gICAgIGNvbHVtbnM6IHtcItCd0L7QvNC10YBcIjoge2NvbE5hbWU6IFwi0J3QvtC80LXRgFwiLCB0eXBlOiBcInN0cmluZ1wifSwgXCLQndCw0LfQstCw0L3QuNC1XCI6IHtjb2xOYW1lOiBcItCd0LDQt9Cy0LDQvdC40LVcIiwgdHlwZTogXCJzdHJpbmdcIn19XHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBvYmpJID0gSW1tdXRhYmxlLmZyb21KUyhvYmopO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLy9sZXQgbSA9IEltbXV0YWJsZS5NYXA8c3RyaW5nLG51bWJlcnwgSW1tdXRhYmxlLk1hcDxudW1iZXIsc3RyaW5nPj4oKTtcclxuICAgICAgICAvLyAvL2xldCB4ID0gbS5zZXQoXCIxM3l5dDMzMzMzMlwiLCAxMik7XHJcbiAgICAgICAgLy8gLy9sZXQgeSA9IG0uc2V0KFwieHh4XCIsIEltbXV0YWJsZS5NYXA8bnVtYmVyLHN0cmluZz4oKSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAvL2xldCB5PW0udXBkYXRlKFwieHh4XCIsSW1tdXRhYmxlLk1hcDxudW1iZXIsc3RyaW5nPigpKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9iakkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy8gbGV0IHggPSBvYmpJLmdldEluKFsnY29sdW1ucycsICfQndC+0LzQtdGAJywgJ2NvbE5hbWUnXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coeCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBzdHI6IHN0cmluZyA9IFwi0L/RgNC40LLQtdGCXCI7XHJcblxyXG4gICAgdGVzdEF1dG9Gb3JtKCkge1xyXG4gICAgICAgIGxldCB3aW4yID1cclxuICAgICAgICAgICAgPEF1dG9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfSBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsxXCIgaW5wdXRDYXB0aW9uPVwiZWVlMVwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizFcIiBpbnB1dENhcHRpb249XCJlZWUyXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMVwiIGlucHV0Q2FwdGlvbj1cImVlZTNcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsyXCIgaW5wdXRDYXB0aW9uPVwiZWVlNFwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgPC9BdXRvRm9ybT47XHJcbi8vICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YtcIiBpbnB1dENhcHRpb249XCJlZWVcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc30gYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG5cclxuICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJhdXRvIGZvcm1cIixcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgbGVmdDogMTBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcHBJbnN0YW5jZS5kZXNrdG9wLm9wZW5XaW5kb3cod2luMiwgb3BlblBhcmFtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdEdyaWQoKSB7XHJcbiAgICAgICAgZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgICAgICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhU291cmNlID0gdGFibGUucm93cy5tYXAoKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge9Ca0LvRjtGHOiByW1wi0JrQu9GO0YdcIl0sINCd0L7QvNC10YA6IHJbXCLQndC+0LzQtdGAXCJdLCDQndCw0LfQstCw0L3QuNC1OiByW1wi0J3QsNC30LLQsNC90LjQtVwiXX07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgCA9PlwiICsgdGFibGUucm93c1swXS5nZXRWYWx1ZSgxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdpbjIgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17IGRhdGFTb3VyY2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVNb2RlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeUZpZWxkTmFtZT1cItCd0L7QvNC10YBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeURlbGltaXRlcnM9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRXhwYW5kTm9kZXNUb0xldmVsPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JrQvtC70L7QvdC60LAyXCIgZmllbGROYW1lPVwi0J3QvtC80LXRgFwiIHNob3dIaWVyYXJjaHlUcmVlPXtmYWxzZX0gd2lkdGg9ezEwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JrQvtC70L7QvdC60LAzXCIgZmllbGROYW1lPVwi0J3QsNC30LLQsNC90LjQtVwiIHNob3dIaWVyYXJjaHlUcmVlPXt0cnVlfSB3aWR0aD17MjAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmVlR3JpZENvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQmtC+0LvQvtC90LrQsDFcIiBmaWVsZE5hbWU9XCLQmtC70Y7Rh1wiIHdpZHRoPXs4MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmVlR3JpZENvbHVtbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkPjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcImF1dG8gZm9ybVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJhcHAtZGVzaWduZXJcIik7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXBwIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cImhlYWRlcjFcIj5GaXhlZCBIZWFkZXI8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJzaWRlYmFyXCIgc3R5bGU9e3t3aWR0aDp0aGlzLnNpZGVXaWR0aH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpeGVkIFNpZGViYXIgMTIzPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0T3BlbldpbmRvdygpOyB9fT4gdGVzdCBvcGVuIHdpbmRvdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdE9wZW5PYmplY3REZXNpZ25lcigpOyB9fT5vcGVuIGRlc2lnbmVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0SW1tdXRhYmxlKCk7IH19PnRlc3RJbW11dGFibGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RBdXRvRm9ybSgpOyB9fT50ZXN0IGF1dG9mb3JtPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0R3JpZCgpOyB9fT50ZXN0IEdSSUQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBjbGFzc05hbWU9XCJYWFhjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlIG9uTW92ZVN0YXJ0PXt0aGlzLm1vdmVTdGFydC5iaW5kKHRoaXMpfT5NT1Y8L01vdmFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVza3RvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvQXBwPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9BcHBEZXNpZ25lci9BcHBEZXNpZ25lci50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBzaGFsbG93Q29tcGFyZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtc2hhbGxvdy1jb21wYXJlXCIpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBYT25DbGlja1Byb3BzIHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50UHJvcHM8Uz4gZXh0ZW5kcyBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8RWxlbWVudD4ge1xyXG4gICAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG4gICAgb25XaWxsTW91bnQ/OiAoc3RhdGU6IFMpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U3RhdGU8UD4ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogQ29tcG9uZW50PFAsYW55Pikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3JjZVVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8vY2xpY2tDb3VudDogbnVtYmVyO1xyXG4gICAgLy8gc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50PFAgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxTPiwgUyBleHRlbmRzIENvbXBvbmVudFN0YXRlPFA+PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQLCBTPiB7XHJcblxyXG4gICAgc3RhdGljIHBsdWdpbnM6IGFueVtdID0gW107XHJcblxyXG4gICAgcGx1Z2luczogYW55W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUCwgY29udGV4dDogYW55IC8qc3RhdGVDbGFzcz86IEZ1bmN0aW9uKi8pIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cclxuICAgICAgICAvLyAvLyh0aGlzIGFzIGFueSlbXCJzdGF0ZVwiXSA9IHt9O1xyXG4gICAgICAgIC8vIGlmIChzdGF0ZUNsYXNzKVxyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlID0gc3RhdGVDbGFzcygpO1xyXG4gICAgICAgIC8vIGVsc2VcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZSA9IHt9IGFzIFM7XHJcblxyXG4gICAgICAgIENvbXBvbmVudC5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBsdWdJbnN0YW5jZTogYW55ID0gbmV3IHBsdWcodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdJbnN0YW5jZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF0aXZlRWxlbWVudDogRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNsYXNzZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIHJlbmRlclByb3BzOiBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgcmVuZGVyU3R5bGVzOiBhbnkgPSB7fTtcclxuXHJcbiAgICBhZGRQcm9wcyhwcm9wczogT2JqZWN0KSB7XHJcbiAgICAgICAgXy5hc3NpZ25XaXRoKHRoaXMucmVuZGVyUHJvcHMsIHByb3BzLCAob2JqZWN0VmFsdWU6IGFueSwgc291cmNlVmFsdWU6IGFueSwga2V5Pzogc3RyaW5nKT0+IHtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJjbGFzc1wiIHx8IGtleSA9PT0gXCJjbGFzc05hbWVcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnZhbGlkIHByb3BlcnR5ICdcIiArIGtleSArIFwiJywgdXNlIGZ1bmN0aW9ucyBhZGRDbGFzc05hbWUoKSwgdG9nZ2xlQ2xhc3NOYW1lKClcIik7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwic3R5bGVcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnZhbGlkIHByb3BlcnR5ICdcIiArIGtleSArIFwiJywgdXNlIGZ1bmN0aW9ucyBhZGRTdHlsZXMoKSwgcmVtb3ZlU3R5bGUoKVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZVZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0eWxlcyhzdHlsZXM6IE9iamVjdCkge1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMucmVuZGVyU3R5bGVzLCBzdHlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU3R5bGVzKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyU3R5bGVzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3R5bGUoc3R5bGU6IHN0cmluZykge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlbmRlclN0eWxlc1tzdHlsZV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3R5bGVzKHN0eWxlczogc3RyaW5nW10pIHtcclxuICAgICAgICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZW5kZXJTdHlsZXNbc3R5bGVdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLmRpZE1vdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRpZE1vdW50KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsTW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudFdpbGxNb3VudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLndpbGxNb3VudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uV2lsbE1vdW50KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uV2lsbE1vdW50KHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wczogUCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFApIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaXNQcm9wc0VxdWFsKG9iajE6IGFueSwgb2JqMjogYW55LCBleGNsdWRlUHJvcHM/OiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAvL0xvb3AgdGhyb3VnaCBwcm9wZXJ0aWVzIGluIG9iamVjdCAxXHJcbiAgICAgICAgZm9yIChsZXQgcCBpbiBvYmoxKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhjbHVkZVByb3BzICYmIGV4Y2x1ZGVQcm9wcy5pbmRleE9mKHApID49IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgLy9DaGVjayBwcm9wZXJ0eSBleGlzdHMgb24gYm90aCBvYmplY3RzXHJcbiAgICAgICAgICAgIGlmIChvYmoxLmhhc093blByb3BlcnR5KHApICE9PSBvYmoyLmhhc093blByb3BlcnR5KHApKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAob2JqMVtwXSAhPT0gb2JqMltwXSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIjEgbm90IGVxdWFsIFwiICsgcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKHR5cGVvZiAob2JqMVtwXSkpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vRGVlcCBjb21wYXJlIG9iamVjdHNcclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKCFPYmplY3QuY29tcGFyZShvYmoxW3BdLCBvYmoyW3BdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgLy9Db21wYXJlIGZ1bmN0aW9uIGNvZGVcclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgJ2Z1bmN0aW9uJzpcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAodHlwZW9mIChvYmoyW3BdKSA9PSAndW5kZWZpbmVkJyB8fCAocCAhPSAnY29tcGFyZScgJiYgb2JqMVtwXS50b1N0cmluZygpICE9IG9iajJbcF0udG9TdHJpbmcoKSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIC8vQ29tcGFyZSB2YWx1ZXNcclxuICAgICAgICAgICAgLy8gICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKG9iajFbcF0gIT09IG9iajJbcF0pIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9DaGVjayBvYmplY3QgMiBmb3IgYW55IGV4dHJhIHByb3BlcnRpZXNcclxuICAgICAgICBmb3IgKGxldCBwIGluIG9iajIpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAob2JqMVtwXSkgPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIChvYmoyW3BdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIjIgbm90IGVxdWFsIFwiICsgcCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9iajEpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmoyKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzOiBQKTogYm9vbGVhbiB7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhcInNoYWxsb3ctMCBcIiArIHRoaXMuY29uc3RydWN0b3IudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMzApKTtcclxuICAgIC8vICAgICAvL2NvbnNvbGUudGltZShcIjIyXCIpO1xyXG4gICAgLy8gICAgIGxldCByZXQgPSBzaGFsbG93Q29tcGFyZSh0aGlzLCBuZXh0UHJvcHMsIHRoaXMuc3RhdGUpO1xyXG4gICAgLy8gICAgIC8vY29uc29sZS50aW1lRW5kKFwiMjJcIik7XHJcbiAgICAvLyAgICAgcmV0dXJuIHJldDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBwcml2YXRlIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChuZXh0UHJvcHM6IFAsIG5leHRTdGF0ZTogUykgPT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLnNoYWxsb3dDb21wYXJlKG5leHRQcm9wcyk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wczogUCwgcHJldlN0YXRlOiBTLCBwcmV2Q29udGV4dDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHByZXZDb250ZXh0KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZFVwZGF0ZShwcmV2UHJvcHM6IFAsIHByZXZTdGF0ZTogUywgcHJldkNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbFJlY2VpdmVQcm9wcyhwcmV2UHJvcHMsIHByZXZTdGF0ZSwgcHJldkNvbnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxVbm1vdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLndpbGxVbm1vdW50KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFkZENsYXNzTmFtZShjbGFzc05hbWVzOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lcylcclxuICAgICAgICAgICAgY2xhc3NOYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNsYXNzZXMucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ2xhc3NOYW1lKGJvb2xWYWx1ZTogYm9vbGVhbiwgdHJ1ZUNsYXNzTmFtZXM6IHN0cmluZywgZmFsc2VDbGFzc05hbWVzPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGJvb2xWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSh0cnVlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgICAgIGlmIChmYWxzZUNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzTmFtZShmYWxzZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzc05hbWUodHJ1ZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoZmFsc2VDbGFzc05hbWVzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoZmFsc2VDbGFzc05hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZXM6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChjbGFzc05hbWVzKVxyXG4gICAgICAgICAgICBjbGFzc05hbWVzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJDbGFzc2VzLmluZGV4T2YobmFtZSkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2xhc3Nlcy5zcGxpY2UodGhpcy5yZW5kZXJDbGFzc2VzLmluZGV4T2YobmFtZSksIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUodGhpcy5wcm9wcy5jbGFzc05hbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlckNsYXNzZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2xhc3Nlcy5qb2luKFwiIFwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlbmRlclByb3BzKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvcHMuY2xhc3NOYW1lID0gdGhpcy5yZW5kZXJDbGFzc05hbWUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclByb3BzLnN0eWxlID0gdGhpcy5yZW5kZXJTdHlsZXM7XHJcbiAgICAgICAgXy5hc3NpZ24odGhpcy5yZW5kZXJQcm9wcy5zdHlsZSwgdGhpcy5wcm9wcy5zdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUHJvcHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGdldFJlYWN0RWxlbWVudENsYXNzTmFtZShlbGVtZW50KTogc3RyaW5nIHtcclxuICAgIC8vICAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPyBlbGVtZW50LnR5cGUudG9TdHJpbmcoKS5zcGxpdChcIihcIilbMF0uc3BsaXQoXCIgXCIpWzFdIDogXCJcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBnZXRDaGlsZHJlbihjaGlsZFR5cGU6IEZ1bmN0aW9uKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRUeXBlID09PSBjaGlsZC50eXBlKVxyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW5PZlByb3BzKHByb3BzOiBhbnksIGNoaWxkVHlwZTogRnVuY3Rpb24pOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRUeXBlID09PSBjaGlsZC50eXBlKVxyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZW5kZXIoKSB7XHJcbiAgICAvLyAgICByZXR1cm4gKG5ldylcclxuICAgIC8vICAgIC8vICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpIH0+XHJcbiAgICAvLyAgICAvLyAgICAgICAgQ29tcG9uZW50IGZyb20ge3RoaXMucHJvcHMuY29tcGlsZXJ9IGFuZCB7dGhpcy5wcm9wcy5mcmFtZXdvcmt9IWNsaWNrQ291bnQ9e3RoaXMuc3RhdGUuY2xpY2tDb3VudH1cclxuICAgIC8vICAgIC8vICAgIDwvYnV0dG9uPlxyXG4gICAgLy8gICAgLy8pO1xyXG4gICAgLy99XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50LnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiX1wiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0UHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcclxuICAgIHR5cGU6IFwiY29sdW1uXCIgfCBcInJvd1wiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50PExheW91dFByb3BzLGFueT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiTGF5b3V0XCIpO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGU6IGFueSA9IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN0eWxlLmZsZXhEaXJlY3Rpb24gPSAodGhpcy5wcm9wcy50eXBlID09PSBcImNvbHVtblwiKSA/IFwiY29sdW1uXCIgOiBcInJvd1wiO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHN0eWxlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7b25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0gPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9MYXlvdXQudHN4XG4gKiovIiwiXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRml4ZWRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeGVkIGV4dGVuZHMgQ29tcG9uZW50PEZpeGVkUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkZpeGVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0gPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZC50c3hcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGbGV4UHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZsZXggZXh0ZW5kcyBDb21wb25lbnQ8RmxleFByb3BzLGFueT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkZsZXhcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuICAgICAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0gPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GbGV4LnRzeFxuICoqLyIsImltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtTdHJpbmdFZGl0b3J9IGZyb20gXCIuLi9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGVzdEJ1aHRhT2JqZWN0MSBleHRlbmRzIERlc2lnbmVkT2JqZWN0IHtcclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0KTQsNC80LjQu9C40Y9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0KTQsNC80LjQu9C40Y8g0LDQsdC+0L3QtdC90YLQsFwiXHJcbiAgICB9KVxyXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCY0LzRj1wiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCT0LvQsNCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQmNC80Y9cIlxyXG4gICAgfSlcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCe0YLRh9C10YHRgtCy0L5cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0J7RgtGH0LXRgdGC0LLQviDQsNCx0L7QvdC10L3RgtCwXCJcclxuICAgIH0pXHJcbiAgICBzdXJOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9UZXN0MS90ZXN0QnVodGFPYmplY3QxLnRzXG4gKiovIiwi77u/aW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm8sIEJhc2VQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlc2lnbmVkT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgICQkdW53YXRjaGVkUHJvcHM6IHN0cmluZ1tdID0gW1wicHJvcGVydHlFZGl0b3JzXCIsIFwiJCR1bndhdGNoZWRQcm9wc1wiXTtcclxuXHJcbiAgICAvLyBpZDogc3RyaW5nO1xyXG4gICAgLy8gbmFtZTogc3RyaW5nO1xyXG4gICAgLy8gY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBpbmhlcml0RnJvbTogc3RyaW5nO1xyXG4gICAgLy8gbW9kdWxlTmFtZTogc3RyaW5nO1xyXG4gICAgLy8gcmVmZXJlbmNlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAgIC8vcHJpdmF0ZSBzdGF0aWMgcHJvcGVydHlFZGl0b3JzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFByb3BlcnR5RWRpdG9ySW5mbzsgfSA9IHt9O1xyXG5cclxuICAgIC8vIHN0YXRpYyByZWdpc3RlclByb3BlcnR5RWRpdG9yKHByb3BlcnR5TmFtZTogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlQYWdlOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUdyb3VwOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eURlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RUeXBlOiB0eXBlb2YgRGVzaWduZWRPYmplY3QsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3JUeXBlOiB0eXBlb2YgQmFzZVByb3BlcnR5RWRpdG9yLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlOiB0eXBlb2YgT2JqZWN0IHwgdHlwZW9mIFN0cmluZykge1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgaW5mbzogUHJvcGVydHlFZGl0b3JJbmZvID0ge1xyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlQYWdlOiBwcm9wZXJ0eVBhZ2UsXHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5R3JvdXA6IHByb3BlcnR5R3JvdXAsXHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5RGVzY3JpcHRpb246IHByb3BlcnR5RGVzY3JpcHRpb24sXHJcbiAgICAvLyAgICAgICAgIG9iamVjdFR5cGU6IG9iamVjdFR5cGUsXHJcbiAgICAvLyAgICAgICAgIGVkaXRvclR5cGU6IGVkaXRvclR5cGUsXHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5VHlwZTogcHJvcGVydHlUeXBlLFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgRGVzaWduZWRPYmplY3QucHJvcGVydHlFZGl0b3JzW3Byb3BlcnR5TmFtZV0gPSBpbmZvO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyUHJvcGVydHlFZGl0b3IgXCIgKyBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXQgcHJvcGVydHlFZGl0b3JzKCk6eyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBQcm9wZXJ0eUVkaXRvckluZm87IH17XHJcbiAgICAvLyAgICAgcmV0dXJuIChEZXNpZ25lZE9iamVjdCBhcyBhbnkpLiQkcHJvcGVydHlFZGl0b3JzO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3JzKCkge1xyXG4gICAgLy8gICAgIHRoaXMucHJvcGVydHlFZGl0b3JzLmxlbmd0aCA9IDA7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IocHJvcGVydHlOYW1lOiBzdHJpbmcsIHByb3BlcnR5RWRpdG9yOiBCYXNlUHJvcGVydHlFZGl0b3IpIHtcclxuICAgIC8vICAgICBwcm9wZXJ0eUVkaXRvci5kZXNpZ25lZE9iamVjdCA9IHRoaXM7XHJcbiAgICAvLyAgICAgcHJvcGVydHlFZGl0b3IucHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lO1xyXG4gICAgLy8gICAgIHRoaXMucHJvcGVydHlFZGl0b3JzLnB1c2gocHJvcGVydHlFZGl0b3IpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGVtaXRUc0NvZGUoKTogc3RyaW5nIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5yZWdpc3RlclByb3BlcnR5RWRpdG9ycygpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBsZXQgdHNDb2RlID0gbmV3IFRzQ29kZSh0aGlzLm1vZHVsZU5hbWUsIHRoaXMuY2xhc3NOYW1lLCB0aGlzLmluaGVyaXRGcm9tLCB0aGlzLnJlZmVyZW5jZXMpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLnByb3BlcnR5RWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcclxuICAgIC8vICAgICAgICAgZWRpdG9yLmRlc2lnbmVkT2JqZWN0ID0gdGhpcztcclxuICAgIC8vICAgICAgICAgZWRpdG9yLmVtaXRUc0NvZGUodHNDb2RlKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIHRzQ29kZS5nZXRDb2RlKCk7XHJcbiAgICAvLyB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0LnRzeFxuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Jhc2VQcm9wZXJ0eUVkaXRvcn0gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge3JlZ2lzdGVyUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL3JlZ2lzdGVyUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtJbnB1dFR5cGUsIElucHV0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7QXV0b0Zvcm1Db250cm9sUHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBCYXNlUHJvcGVydHlFZGl0b3Ige1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZShldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpIHtcclxuICAgICAgIC8vIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xyXG4gICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2UgPT09IFwiICsgdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWUgKyBcIiBcIiArIHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3RbdGhpcy5wcm9wcy5wcm9wZXJ0eU5hbWVdKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgYXV0b0Zvcm1Db250cm9sUHJvcHM6IEF1dG9Gb3JtQ29udHJvbFByb3BzID0ge1xyXG4gICAgICAgICAgICBpbnB1dENhcHRpb246IHRoaXMucHJvcHMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgICAgICBpbnB1dFRhYjogdGhpcy5wcm9wcy5pbnB1dFRhYixcclxuICAgICAgICAgICAgaW5wdXRHcm91cDogdGhpcy5wcm9wcy5pbnB1dEdyb3VwLFxyXG4gICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmlucHV0RGVzY3JpcHRpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKGF1dG9Gb3JtQ29udHJvbFByb3BzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtJbnB1dFR5cGUuVGV4dH1cclxuICAgICAgICAgICAgICAgIGJpbmRPYmplY3Q9e3RoaXMucHJvcHMuZGVzaWduZWRPYmplY3R9XHJcbiAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9e3RoaXMucHJvcHMucHJvcGVydHlOYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ0VkaXRvclBhcmFtcyBleHRlbmRzIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdHJpbmdFZGl0b3IocGFyYW1zOiBBdXRvRm9ybUNvbnRyb2xQcm9wcyk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKHt0YXJnZXQsIHByb3BlcnR5TmFtZSwgY29uc3RyOnRhcmdldC5jb25zdHJ1Y3Rvcn0pO1xyXG4gICAgICAgIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3Ioe1xyXG4gICAgICAgICAgICBpbnB1dENhcHRpb246IHBhcmFtcy5pbnB1dENhcHRpb24sXHJcbiAgICAgICAgICAgIGlucHV0VGFiOiBwYXJhbXMuaW5wdXRUYWIsXHJcbiAgICAgICAgICAgIGlucHV0R3JvdXA6IHBhcmFtcy5pbnB1dEdyb3VwLFxyXG4gICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBwYXJhbXMuaW5wdXREZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgIG9iamVjdFR5cGU6IHRhcmdldC5jb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgZWRpdG9yVHlwZTogU3RyaW5nUHJvcGVydHlFZGl0b3IsXHJcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeFxuICoqLyIsIu+7v2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5RWRpdG9ySW5mbyBleHRlbmRzIEF1dG9Gb3JtQ29udHJvbFByb3BzIHtcclxuICAgIHByb3BlcnR5TmFtZTogc3RyaW5nO1xyXG4gICAgb2JqZWN0VHlwZTogdHlwZW9mIERlc2lnbmVkT2JqZWN0O1xyXG4gICAgZWRpdG9yVHlwZTogdHlwZW9mIEJhc2VQcm9wZXJ0eUVkaXRvcjtcclxuICAgIHByb3BlcnR5VHlwZTogdHlwZW9mIE9iamVjdCB8IHR5cGVvZiBTdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVByb3BlcnR5RWRpdG9yUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+LCBQcm9wZXJ0eUVkaXRvckluZm8ge1xyXG4gICAgZGVzaWduZWRPYmplY3Q6IERlc2lnbmVkT2JqZWN0O1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQ8QmFzZVByb3BlcnR5RWRpdG9yUHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzLCBjb250ZXh0OmFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBkZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcblxyXG4gICAgLy8gZ2V0UHJvcGVydHlUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIFwiT2JqZWN0XCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVuZGVyRWRpdG9yKGluZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudCB7XHJcbiAgICAvLyAgICAgcmV0dXJuICg8c3Bhbj5lZGl0b3Igbm90IGRlZmluZWQ8L3NwYW4+KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiAoPHNwYW4+cHJvcGVydHkgZWRpdG9yIG5vdCBkZWZpbmVkPC9zcGFuPik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIGVtaXRUc0NvZGUodHNDb2RlOiBUc0NvZGUsIGFzc2lnbk5hbWU6IHN0cmluZykge1xyXG4gICAgLy8gICAgIHRzQ29kZS5hZGRQcm9wZXJ0eShhc3NpZ25OYW1lLCB0aGlzLnByb3BlcnR5TmFtZSwgdGhpcy5nZXRQcm9wZXJ0eVR5cGUoKSwgdGhpcy5kZXNpZ25lZE9iamVjdFt0aGlzLnByb3BlcnR5TmFtZV0pO1xyXG4gICAgLy8gfVxyXG5cclxufVxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iLCJpbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUHJvcGVydHlFZGl0b3IoZWRpdG9yOiBQcm9wZXJ0eUVkaXRvckluZm8pIHtcclxuXHJcbiAgICBsZXQgb2JqVHlwZTogYW55ID0gZWRpdG9yLm9iamVjdFR5cGU7XHJcblxyXG4gICAgaWYgKCFvYmpUeXBlLiQkcHJvcGVydHlFZGl0b3JzKVxyXG4gICAgICAgIG9ialR5cGUuJCRwcm9wZXJ0eUVkaXRvcnMgPSBbXTtcclxuXHJcbiAgICBvYmpUeXBlLiQkcHJvcGVydHlFZGl0b3JzLnB1c2goZWRpdG9yKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwicmVnaXN0ZXJQcm9wZXJ0eUVkaXRvciBcIiArIGVkaXRvci5wcm9wZXJ0eU5hbWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3IpO1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvci50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcblxyXG5leHBvcnQgZW51bSBJbnB1dFR5cGUge1RleHQsIE51bWJlciwgRGF0ZSB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+LCBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICB0eXBlOiBJbnB1dFR5cGU7XHJcbiAgICBiaW5kT2JqZWN0OiBhbnk7XHJcbiAgICBiaW5kUHJvcE5hbWU6IHN0cmluZztcclxuICAgIG1heFdpZHRoPzogbnVtYmVyO1xyXG4gICAgb25DbGljaz86IFJlYWN0LlJlYWN0RXZlbnRIYW5kbGVyO1xyXG4gICAgcGxhY2VIb2xkZXI/OiBzdHJpbmc7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SW5wdXRQcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSW5wdXRQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBJbnB1dFR5cGUuVGV4dDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRleHQoKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93ICBcIklucHV0LnJlbmRlcigpOj0+IHVua25vd24gSW5wdXRUeXBlICdcIiArIHRoaXMucHJvcHMudHlwZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXh0ID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdCAmJiB0aGlzLnByb3BzLmJpbmRQcm9wTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmJpbmRPYmplY3RbdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBcIjx1bmJpbmRlZD5cIjtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdCAmJiB0aGlzLnByb3BzLmJpbmRQcm9wTmFtZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXSA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlclRleHQoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJpbnB1dFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh0aGlzLnByb3BzLnN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRUZXh0KCl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0LnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgUHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRm9ybS9Gb3JtXCI7XHJcbmltcG9ydCB7QXV0b0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdERlc2lnbmVyUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuICAgIG9uQ2hhbmdlPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdERlc2lnbmVyIGV4dGVuZHMgQ29tcG9uZW50PE9iamVjdERlc2lnbmVyUHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IE9iamVjdERlc2lnbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvcGVydHlEZXNpZ25lcnMoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBnZXRQcm9wZXJ0eUVkaXRvcnModGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCkuZm9yRWFjaCgocHJvcEluZm86IFByb3BlcnR5RWRpdG9ySW5mbywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb3BJbmZvKTtcclxuICAgICAgICAgICAgbGV0IGVkaXRvclByb3BzOiBCYXNlUHJvcGVydHlFZGl0b3JQcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0OiB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgLy9wcm9wZXJ0eUVkaXRvckluZm86IHByb3BJbmZvLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vINGN0YLQviDQuNC3IHByb3BJbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8sINC30LDQv9C+0LvRj9C10YLRgdGPINC00LDQu9C10LUg0YfQtdGA0LXQtyBfLmFzc2lnblxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVkaXRvclR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIF8uYXNzaWduKGVkaXRvclByb3BzLCBwcm9wSW5mbyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZWRpdG9yUHJvcHMpO1xyXG5cclxuICAgICAgICAgICAgcmV0LnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wSW5mby5lZGl0b3JUeXBlLCBlZGl0b3JQcm9wcywgbnVsbCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIm9iamVjdC1kZXNpZ25lclwiKTtcclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZX0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXV0b0Zvcm0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICBPYmplY3QgZGVzaWduZXJcclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclByb3BlcnR5RGVzaWduZXJzKCl9XHJcbiAgICAgICAgICAgIDwvQXV0b0Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL09iamVjdERlc2lnbmVyL09iamVjdERlc2lnbmVyLnRzeFxuICoqLyIsImltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtEZXNpZ25lZE9iamVjdH0gZnJvbSBcIi4uL0Rlc2lnbmVkT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlFZGl0b3JzKG9iajogRGVzaWduZWRPYmplY3QpOiBQcm9wZXJ0eUVkaXRvckluZm9bXSB7XHJcblxyXG4gICAgbGV0IGVkaXRvcnMgPSAob2JqLmNvbnN0cnVjdG9yIGFzIGFueSkuJCRwcm9wZXJ0eUVkaXRvcnMgYXMgUHJvcGVydHlFZGl0b3JJbmZvW107XHJcblxyXG4gICAgZWRpdG9ycyA9IGVkaXRvcnMuZmlsdGVyKChlZHQpID0+IG9iaiBpbnN0YW5jZW9mIGVkdC5vYmplY3RUeXBlKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZ2V0UHJvcGVydHlFZGl0b3JzXCIpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlZGl0b3JzKTtcclxuICAgIHJldHVybiBlZGl0b3JzO1xyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvZ2V0UHJvcGVydHlFZGl0b3IudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9UYWJzL1RhYnNcIjtcclxuaW1wb3J0IHtGb3JtfSBmcm9tIFwiLi4vRm9ybS9Gb3JtXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICBpbnB1dENhcHRpb24/OiBzdHJpbmc7XHJcbiAgICBpbnB1dFRhYj86IHN0cmluZztcclxuICAgIGlucHV0R3JvdXA/OiBzdHJpbmc7XHJcbiAgICBpbnB1dERlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9Gb3JtUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGlucHV0cz86IEF1dG9Gb3JtQ29udHJvbFByb3BzW107XHJcbn1cclxuXHJcbmNvbnN0IGVtcHR5VGFiTmFtZSA9IFwi0LfQsNC60LvQsNC00LrQsFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9Gb3JtIGV4dGVuZHMgQ29tcG9uZW50PEF1dG9Gb3JtUHJvcHMsIGFueT4ge1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldElucHV0cygpOiBBdXRvRm9ybUNvbnRyb2xQcm9wc1tdIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChjOiBhbnkpID0+IGMucHJvcHMpXHJcbiAgICAgICAgICAgIC5tYXAoKGM6IGFueSkgPT4gYy5wcm9wcykgYXMgQXV0b0Zvcm1Db250cm9sUHJvcHNbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYnNMaXN0KCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gXy51bmlxKFxyXG4gICAgICAgICAgICB0aGlzLmdldElucHV0cygpLm1hcDxzdHJpbmc+KChpbnB1dDogQXV0b0Zvcm1Db250cm9sUHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnB1dFRhYiB8fCBcIlwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYWJJbnB1dHModGFiOiBzdHJpbmcpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChjOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjLnByb3BzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKCgoYy5wcm9wcyBhcyBBdXRvRm9ybUNvbnRyb2xQcm9wcykuaW5wdXRUYWIgfHwgXCJcIikgPT09IHRhYik7XHJcbiAgICAgICAgICAgIH0pIGFzIEpTWC5FbGVtZW50W107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJUYWIodGFiOiBzdHJpbmcpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxGb3JtPnt0aGlzLmdldFRhYklucHV0cyh0YWIpfTwvRm9ybT47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAgcmVuZGVyVGFicygpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IHRhYnMgPSB0aGlzLmdldFRhYnNMaXN0KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YWJzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2V0SW5wdXRzKCkpO1xyXG5cclxuICAgICAgICBpZiAodGFicy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRhYnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhYih0YWJzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgIG9uV2lsbE1vdW50PXsgKHN0YXRlKT0+IHsgY29uc29sZS5sb2coXCJvbldpbGxNb3VudC1hdXRvLWZvcm0tdGFic1wiKX19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VBY3RpdmVUYWI9eyAoc3RhdGUsIHRhYik9PiB7IGNvbnNvbGUubG9nKFwic2V0QWN0aXZlVGFiXCIpO2NvbnNvbGUubG9nKHRhYik7fX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7IHRhYnMubWFwPEpTWC5FbGVtZW50PigodGFiLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBrZXk9e2luZGV4fSB0aXRsZT17dGFiID09PSBcIlwiID8gZW1wdHlUYWJOYW1lIDogdGFifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWIodGFiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXV0by1mb3JtXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci1hdXRvLWZvcm1cIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWJzKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYnNQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPFRhYnNTdGF0ZT4ge1xyXG4gICAgb25DaGFuZ2VBY3RpdmVUYWI/OiAoc3RhdGU6IFRhYnNTdGF0ZSwgYWN0aXZlVGFiOiBUYWJJbmZvKSA9PiB2b2lkO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYnNTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPFRhYnNQcm9wcz4ge1xyXG4gICAgdGFiczogVGFiSW5mb1tdID0gW107XHJcblxyXG4gICAgc2V0QWN0aXZlVGFiKHRhYkluZm86IFRhYkluZm8pIHtcclxuICAgICAgICBpZiAoIXRhYkluZm8uaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJzLmZvckVhY2goKHRhYik9PnRhYi5pc0FjdGl2ZSA9IGZhbHNlKTtcclxuICAgICAgICAgICAgdGFiSW5mby5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnQucHJvcHMub25DaGFuZ2VBY3RpdmVUYWIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5wcm9wcy5vbkNoYW5nZUFjdGl2ZVRhYih0aGlzLCB0YWJJbmZvKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJJbmZvIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICAgIGNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQ8VGFic1Byb3BzLCBUYWJzU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUYWJzUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBUYWJzU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVJbml0VGFic1N0YXRlKCkge1xyXG5cclxuICAgICAgICBsZXQgdGFiVGFncyA9IHRoaXMuZ2V0Q2hpbGRyZW4oVGFiKTtcclxuXHJcbiAgICAgICAgdGFiVGFncy5mb3JFYWNoKCh0YWJUYWcsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFiUHJvcHMgPSB0YWJUYWcucHJvcHMgYXMgVGFiUHJvcHM7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFiSW5mbzogVGFiSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0YWJQcm9wcy50aXRsZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRhYlByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGluZGV4ID09PSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFicy5wdXNoKHRhYkluZm8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5pdFRhYnNTdGF0ZSgpO1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBsZXQgdGFiVGFncyA9IHRoaXMuZ2V0Q2hpbGRyZW4oVGFiKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRhYlRhZ3MuZm9yRWFjaCgodGFiVGFnLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGxldCB0YWJQcm9wcyA9IHRhYlRhZy5wcm9wcyBhcyBUYWJQcm9wcztcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgdGFiSW5mbzogVGFiSW5mbyA9IHtcclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiB0YWJQcm9wcy50aXRsZSxcclxuICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6IHRhYlByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgIC8vICAgICAgICAgaXNBY3RpdmU6IGluZGV4ID09PSAwXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRhYnMucHVzaCh0YWJJbmZvKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG9wZW5XaW5kb3cod2luOiBKU1guRWxlbWVudCk6IFdpbmRvd0luZm8ge1xyXG4gICAgLy8gICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gICAgIG1vZGFsLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgLy8gICAgIC8vINC00LvRjyDQv9C+0LTQvdGP0YLQuNGPINCy0LLQtdGA0YUg0L/RgNC4INCw0LrRgtC40LLQsNGG0LjQuCDQvtC60L3QsFxyXG4gICAgLy8gICAgIG1vZGFsLm9uY2xpY2sgPSAoZSk9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobW9kYWwuaWQgIT09IFwiZGVsZXRlZFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAvLyAgICAgICAgIH0sIDEpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IHdpbkluc3RhbmNlID0gUmVhY3RET00ucmVuZGVyKHdpbiwgbW9kYWwpIGFzIFdpbmRvdztcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IGluZm86IFdpbmRvd0luZm8gPSB7XHJcbiAgICAvLyAgICAgICAgIGlkOiBtb2RhbC5pZCxcclxuICAgIC8vICAgICAgICAgd2luSW5zdGFuY2U6IHdpbkluc3RhbmNlLFxyXG4gICAgLy8gICAgICAgICBkaXZXcmFwcGVyOiBtb2RhbFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMud2luZG93cy5wdXNoKGluZm8pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gaW5mbztcclxuICAgIC8vIH07XHJcbiAgICAvL1xyXG4gICAgLy8gY2xvc2VXaW5kb3cod2luOiBXaW5kb3cpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLmZvckVhY2goKGluZm8sIGluZGV4KT0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGluZm8ud2luSW5zdGFuY2UgPT09IHdpbikge1xyXG4gICAgLy8gICAgICAgICAgICAgaW5mby5kaXZXcmFwcGVyLmlkID0gXCJkZWxldGVkXCI7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoaW5mby5kaXZXcmFwcGVyKTtcclxuICAgIC8vICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndpbmRvd3NbaW5kZXhdO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWN0aXZhdGVXaW5kb3cod2luOiBXaW5kb3cpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLmZvckVhY2goKGluZm8sIGluZGV4KT0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGluZm8ud2luSW5zdGFuY2UgPT09IHdpbikge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGluZm8uZGl2V3JhcHBlcik7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmVuZGVyVGFicygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBsaXN0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudGFicy5mb3JFYWNoKCh0YWJJbmZvOiBUYWJJbmZvLCBpbmRleDogbnVtYmVyKT0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSB0YWJJbmZvLmlzQWN0aXZlID8gXCJpcy1hY3RpdmVcIiA6IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID1cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0gb25DbGljaz17IChlKT0+eyB0aGlzLnN0YXRlLnNldEFjdGl2ZVRhYih0YWJJbmZvKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnt0YWJJbmZvLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBhbmVscygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBsaXN0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUudGFicy5mb3JFYWNoKCh0YWJJbmZvOiBUYWJJbmZvLCBpbmRleDogbnVtYmVyKT0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAhdGFiSW5mby5pc0FjdGl2ZSA/IFwiaXMtaGlkZGVuXCIgOiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGFiSW5mby5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiByZWY+XHJcbiAgICAgICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJhdXRvXCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCIgcmVmPXsgKGU6IGFueSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBhbmVscygpfVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFiIGV4dGVuZHMgQ29tcG9uZW50PFRhYlByb3BzLGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRhYlByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UYWJzL1RhYnMudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0lucHV0RGl2aWRlcn0gZnJvbSBcIi4uL0lucHV0RGl2aWRlci9JbnB1dERpdmlkZXJcIjtcclxuaW1wb3J0IHtQcm9wZXJ0eUVkaXRvckluZm99IGZyb20gXCIuLi8uLi8uLi9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuaW1wb3J0IHtJbnB1dFByb3BzfSBmcm9tIFwiLi4vSW5wdXQvSW5wdXRcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Qcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzPGFueT4ge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudDxGb3JtUHJvcHMsIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEZvcm1Qcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyQ29udHJvbHMoKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IGxpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKChjb250cm9sOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29udHJvbFByb3BzID0gY29udHJvbC5wcm9wcyBhcyBJbnB1dFByb3BzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sUHJvcHMgJiYgKGNvbnRyb2xQcm9wcy5pbnB1dENhcHRpb24gfHwgY29udHJvbFByb3BzLmJpbmRQcm9wTmFtZSkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjb250cm9sLnR5cGUgPT09IElucHV0RGl2aWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklucHV0RGl2aWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbnRyb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntjb250cm9sUHJvcHMuaW5wdXRDYXB0aW9uID8gY29udHJvbFByb3BzLmlucHV0Q2FwdGlvbiA6IGNvbnRyb2xQcm9wcy5iaW5kUHJvcE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImNvbnRyb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMTBcIiBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImZvcm1cIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2hlaWdodDogXCIxMDAlXCIsIHdpZHRoOiBcImluaGVyaXRcIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgcmVmPXsgKGUpID0+IHsgdGhpcy5uYXRpdmVFbGVtZW50ID0gZTsgfSB9IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udHJvbHMoKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvRm9ybS9Gb3JtLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge2FwcEluc3RhbmNlfSBmcm9tIFwiLi4vQXBwXCI7XHJcbmltcG9ydCB7V2luZG93LCBXaW5kb3dTdGF0ZX0gZnJvbSBcIi4uL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtNb3ZlU3RhcnRFdmVudH0gZnJvbSBcIi4uL01vdmFibGUvTW92YWJsZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVza3RvcFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERlc2t0b3BTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPERlc2t0b3BQcm9wcz4ge1xyXG4gICAgd2luZG93czogRGVza3RvcFdpbmRvd1tdID0gW107ICAvLyDQv9C+0YHQu9C10LTQvdC10LUg0LDQutGC0LjQstC90L5cclxuXHJcbiAgICAvLyBnZXRXaW5kb3dCeUlkKGlkOiBzdHJpbmcpOiBXaW5kb3dTdGF0ZSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgdyBvZiB0aGlzLndpbmRvd3MpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHcuaWQgPT09IGlkKVxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHc7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnNvbGUud2FybihcIkRlc2t0b3BXaW5kb3cgaWQ9J1wiICsgaWQgKyBcIicgbm90IGZvdW5kXCIpO1xyXG4gICAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldFdpbmRvd0luZGV4QnlJZChpZDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy53aW5kb3dzLmluZGV4T2YodGhpcy5nZXRXaW5kb3dCeUlkKGlkKSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWN0aXZhdGVXaW5kb3coaWQ6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGxldCB3aW4gPSB0aGlzLmdldFdpbmRvd0J5SWQoaWQpO1xyXG4gICAgLy8gICAgIGlmICh3aW4pIHtcclxuICAgIC8vICAgICAgICAgXy5wdWxsKHRoaXMud2luZG93cywgd2luKTtcclxuICAgIC8vICAgICAgICAgdGhpcy53aW5kb3dzLnB1c2god2luKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBjbG9zZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAvLyAgICAgXy5wdWxsKHRoaXMud2luZG93cywgd2luKTtcclxuICAgIC8vICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dJbmZvIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB3aW5JbnN0YW5jZTogV2luZG93O1xyXG4gICAgZGl2V3JhcHBlcjogRWxlbWVudDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3BlbldpbmRvd1BhcmFtcyB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHRvcD86IG51bWJlcjtcclxuICAgIGxlZnQ/OiBudW1iZXI7XHJcbiAgICByaWdodD86IG51bWJlcjtcclxuICAgIGJvdHRvbT86IG51bWJlcjtcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgbWluSGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgbWluV2lkdGg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wV2luZG93IGltcGxlbWVudHMgT3BlbldpbmRvd1BhcmFtcyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgcmlnaHQ6IG51bWJlcjtcclxuICAgIGJvdHRvbTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgbWluSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBtaW5XaWR0aDogbnVtYmVyO1xyXG4gICAgY29udGVudDogSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wIGV4dGVuZHMgQ29tcG9uZW50PERlc2t0b3BQcm9wcywgRGVza3RvcFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRGVza3RvcFByb3BzLCBjb250ZXh0OmFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBEZXNrdG9wU3RhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICBpZiAoYXBwSW5zdGFuY2UpXHJcbiAgICAgICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3AgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuLy8gICAgcHJpdmF0ZSB3aW5kb3dzOiBXaW5kb3dJbmZvW10gPSBbXTtcclxuXHJcbiAgICBvcGVuV2luZG93KHdpbjogSlNYLkVsZW1lbnQsIG9wZW5QYXJhbXM/OiBPcGVuV2luZG93UGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFvcGVuUGFyYW1zKVxyXG4gICAgICAgICAgICBvcGVuUGFyYW1zID0ge307XHJcbiAgICAgICAgbGV0IG5ld1dpbiA9IG5ldyBEZXNrdG9wV2luZG93KCk7XHJcbiAgICAgICAgbmV3V2luLmNvbnRlbnQgPSB3aW47XHJcbiAgICAgICAgbmV3V2luLnRpdGxlID0gb3BlblBhcmFtcy50aXRsZSB8fCBcIi5cIjtcclxuICAgICAgICBuZXdXaW4uaWQ9TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG5cclxuICAgICAgICBuZXdXaW4ubGVmdCA9IG9wZW5QYXJhbXMubGVmdDtcclxuICAgICAgICBuZXdXaW4udG9wID0gb3BlblBhcmFtcy50b3A7XHJcbiAgICAgICAgbmV3V2luLmhlaWdodCA9IG9wZW5QYXJhbXMuaGVpZ2h0O1xyXG4gICAgICAgIG5ld1dpbi53aWR0aCA9IG9wZW5QYXJhbXMud2lkdGg7XHJcbiAgICAgICAgbmV3V2luLnJpZ2h0ID0gb3BlblBhcmFtcy5yaWdodDtcclxuICAgICAgICBuZXdXaW4uYm90dG9tID0gb3BlblBhcmFtcy5ib3R0b207XHJcblxyXG4gICAgICAgIGlmICghbmV3V2luLmxlZnQpIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4ucmlnaHQgJiYgIW5ld1dpbi53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmxlZnQgPSA1MDtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdXaW4ucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5sZWZ0ID0gNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLnJpZ2h0ICYmICFuZXdXaW4ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi53aWR0aCA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFuZXdXaW4udG9wKSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLmJvdHRvbSAmJiAhbmV3V2luLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmhlaWdodCA9IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdXaW4uYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5ib3R0b20gJiYgIW5ld1dpbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBuZXdXaW4ubWluSGVpZ2h0ID0gb3BlblBhcmFtcy5taW5IZWlnaHQgfHwgMTAwO1xyXG4gICAgICAgIG5ld1dpbi5taW5XaWR0aCA9IG9wZW5QYXJhbXMubWluV2lkdGggfHwgMTAwO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dzLnB1c2gobmV3V2luKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFjdGl2YXRlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2luKSB7XHJcbiAgICAgICAgICAgIF8ucHVsbCh0aGlzLnN0YXRlLndpbmRvd3MsIHdpbik7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2luZG93cy5wdXNoKHdpbik7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2luZG93QnlJZChpZDogc3RyaW5nKTogRGVza3RvcFdpbmRvdyB7XHJcbiAgICAgICAgZm9yIChsZXQgdyBvZiB0aGlzLnN0YXRlLndpbmRvd3MpIHtcclxuICAgICAgICAgICAgaWYgKHcuaWQgPT09IGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkRlc2t0b3BXaW5kb3cgaWQ9J1wiICsgaWQgKyBcIicgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVBY3RpdmF0ZSA9IChzdGF0ZTpXaW5kb3dTdGF0ZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaW5kb3coc3RhdGUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgICAgICBfLnB1bGwodGhpcy5zdGF0ZS53aW5kb3dzLCB3aW4pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbG9zZSA9IChzdGF0ZTpXaW5kb3dTdGF0ZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VXaW5kb3coc3RhdGUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcImRlc2t0b3BcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2hlaWdodDogXCIxMDAlXCJ9KTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6IFwiYXV0b1wifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsgKGUpID0+IHsgdGhpcy5uYXRpdmVFbGVtZW50ID0gZTsgfSB9IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUud2luZG93cy5tYXAoKHcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItZGVza3RvcC13aW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpbmRvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt3LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3cuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcD17dy50b3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0PXt3LmxlZnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17dy53aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17dy5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodD17dy5yaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbT17dy5ib3R0b219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2YXRlPXsgIHRoaXMuaGFuZGxlQWN0aXZhdGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17IHRoaXMuaGFuZGxlQ2xvc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1dpbmRvdz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL29uTW92ZVN0YXJ0PXsgdy5oYW5kbGVNb3ZlU3RhcnQgfVxyXG4vL29uUmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydD17IHcuaGFuZGxlUmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydCB9XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtEZXNrdG9wfSBmcm9tIFwiLi9EZXNrdG9wL0Rlc2t0b3BcIjtcclxuaW1wb3J0IEVsZW1lbnQgPSBKU1guRWxlbWVudDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxBcHBTdGF0ZT4ge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IEpTWC5FbGVtZW50O1xyXG59XHJcblxyXG5jbGFzcyBBcHBTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlPEFwcFByb3BzPiB7XHJcbiAgICB3aW5kb3dzOiBBcHBXaW5kb3dbXSA9IFtdOyAgLy8g0L/QvtGB0LvQtdC00L3QtdC1INCw0LrRgtC40LLQvdC+XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQ8QXBwUHJvcHMsIEFwcFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQXBwUHJvcHMsIGNvbnRleHQ6YW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEFwcFN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcbiAgICAgICAgYXBwSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgIC8vICAgICBzdXBlci5kaWRNb3VudCgpO1xyXG4gICAgLy8gICAgIGFwcEluc3RhbmNlID0gdGhpcztcclxuICAgIC8vIH1cclxuXHJcbiAgICBkZXNrdG9wOiBEZXNrdG9wO1xyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJhcHBcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICBCdWh0YSBBcHAhXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYXBwSW5zdGFuY2U6IEFwcDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0FwcC50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50LCBDb21wb25lbnRTdGF0ZX0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5pbXBvcnQge01vdmFibGUsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCBzaGFsbG93Q29tcGFyZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtc2hhbGxvdy1jb21wYXJlXCIpO1xyXG5pbXBvcnQgZGVlcEVxdWFsID0gcmVxdWlyZShcImRlZXAtZXF1YWxcIik7XHJcbmltcG9ydCB7T3BlbldpbmRvd1BhcmFtc30gZnJvbSBcIi4uL0Rlc2t0b3AvRGVza3RvcFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93UHJvcHMgZXh0ZW5kcyBPcGVuV2luZG93UGFyYW1zLENvbXBvbmVudFByb3BzPFdpbmRvd1N0YXRlPiB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG9uQWN0aXZhdGU/KHN0YXRlOiBXaW5kb3dTdGF0ZSk6IHZvaWQ7XHJcbiAgICBvbkNsb3NlPyhzdGF0ZTogV2luZG93U3RhdGUpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93U3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZTxXaW5kb3dQcm9wcz4gaW1wbGVtZW50cyBPcGVuV2luZG93UGFyYW1zIHtcclxuICAgIGNvbnRlbnQ6IEpTWC5FbGVtZW50O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHJpZ2h0OiBudW1iZXI7XHJcbiAgICBib3R0b206IG51bWJlcjtcclxuICAgIG1pbkhlaWdodDogbnVtYmVyO1xyXG4gICAgbWluV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvbmVudDxXaW5kb3dQcm9wcywgV2luZG93U3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBXaW5kb3dQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFdpbmRvd1N0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlSW5pdFN0YXRlKCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmlkID0gdGhpcy5wcm9wcy5pZDtcclxuICAgICAgICB0aGlzLnN0YXRlLnRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcclxuICAgICAgICB0aGlzLnN0YXRlLnRvcCA9IHRoaXMucHJvcHMudG9wO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IHRoaXMucHJvcHMubGVmdDtcclxuICAgICAgICB0aGlzLnN0YXRlLnJpZ2h0ID0gdGhpcy5wcm9wcy5yaWdodDtcclxuICAgICAgICB0aGlzLnN0YXRlLmJvdHRvbSA9IHRoaXMucHJvcHMuYm90dG9tO1xyXG4gICAgICAgIHRoaXMuc3RhdGUud2lkdGggPSB0aGlzLnByb3BzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbml0U3RhdGUoKTtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHRhYlRhZ3MgPSB0aGlzLmdldENoaWxkcmVuKFRhYik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB0YWJUYWdzLmZvckVhY2goKHRhYlRhZywgaW5kZXgpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgdGFiUHJvcHMgPSB0YWJUYWcucHJvcHMgYXMgVGFiUHJvcHM7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IHRhYkluZm86IFRhYkluZm8gPSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aXRsZTogdGFiUHJvcHMudGl0bGUsXHJcbiAgICAgICAgLy8gICAgICAgICBjb250ZW50OiB0YWJQcm9wcy5jaGlsZHJlbixcclxuICAgICAgICAvLyAgICAgICAgIGlzQWN0aXZlOiBpbmRleCA9PT0gMFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgdGhpcy50YWJzLnB1c2godGFiSW5mbyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb3ZlU3RhcnQgPSAoZTogTW92ZVN0YXJ0RXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBlLmJpbmRYKHRoaXMuc3RhdGUsIFwibGVmdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQodGhpcy5uYXRpdmVFbGVtZW50KS5jc3MoJ2xlZnQnLCB0aGlzLnN0YXRlLmxlZnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUuYmluZFkodGhpcy5zdGF0ZSwgXCJ0b3BcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKHRoaXMubmF0aXZlRWxlbWVudCkuY3NzKCd0b3AnLCB0aGlzLnN0YXRlLnRvcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0ID0gKGU6IE1vdmVTdGFydEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZS5iaW5kWCh0aGlzLnN0YXRlLCBcIndpZHRoXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUud2lkdGggPCB0aGlzLnN0YXRlLm1pbldpZHRoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aWR0aCA9IHRoaXMuc3RhdGUubWluV2lkdGg7XHJcbiAgICAgICAgICAgICQodGhpcy5uYXRpdmVFbGVtZW50KS5jc3MoJ3dpZHRoJywgdGhpcy5zdGF0ZS53aWR0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5iaW5kWSh0aGlzLnN0YXRlLCBcImhlaWdodFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhlaWdodCA8IHRoaXMuc3RhdGUubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLnN0YXRlLm1pbkhlaWdodDtcclxuICAgICAgICAgICAgJCh0aGlzLm5hdGl2ZUVsZW1lbnQpLmNzcygnaGVpZ2h0JywgdGhpcy5zdGF0ZS5oZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayhudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlT25DbGljayA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQWN0aXZhdGUpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3RpdmF0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGhhbmRsZUNsb3NlQnV0dG9uQ2xpY2sgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAobmV4dFByb3BzOiBXaW5kb3dQcm9wcywgbmV4dFN0YXRlOiBXaW5kb3dTdGF0ZSkgPT4ge1xyXG4gICAgICAgIC8vINCy0YHQtdCz0LTQsCBmYWxzZSwg0L/QvtGC0L7QvNGDINGH0YLQviDQvNC10L3Rj9GC0YwgcHJvcHMg0L7QutC90LAg0LzQvtC20LXRgiDRgtC+0LvRjNC60L4gZGVza3RvcCxcclxuICAgICAgICAvLyDQsCDRgtCw0LrQuNGFINGB0LvRg9GH0LDRj9GFINGB0L7QtNC10YDQttC40LzQvtC1INC+0LrQvdCwINC80LXQvdGP0YLRjCDQvdC1INC90LDQtNC+XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwid2luZG93IGJveFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7cG9zaXRpb246IFwiYWJzb2x1dGVcIn0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtcclxuICAgICAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCxcclxuICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcclxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMuc3RhdGUucmlnaHQsXHJcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5zdGF0ZS5ib3R0b20sXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaGVhZGVyQnV0dG9uU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIwcHhcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci13aW5cIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZTogYW55KSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5oYW5kbGVPbkNsaWNrIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCJcclxuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbmRvdy1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlclJhZGl1czogXCI1cHggNXB4IDBweCAwcHhcIiwgcG9zaXRpb246XCJyZWxhdGl2ZVwiLCBwYWRkaW5nTGVmdDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2luZG93LXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgbGVmdDowLCByaWdodDowLGJvdHRvbTowfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9e3RoaXMubW92ZVN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtYWRkb25zIGJ1dHRvbnMtYmFyXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAyLCBwYWRkaW5nUmlnaHQ6IDR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIG1pbmltaXplLWJ1dHRvblwiIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWludXNcIiBzdHlsZT17e3RvcDogM319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBtYXhpbWl6ZS1idXR0b25cIiBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW9cIiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGNsb3NlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIHN0eWxlPXt7dG9wOiAtMX19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBzdHlsZT17eyBwYWRkaW5nOjMsIG92ZXJmbG93OiBcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luZG93LXJlc2l6ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaGVpZ2h0OjEwLCB3aWR0aDoxMCwgcmlnaHQ6MCxib3R0b206MCwgYm9yZGVyUmFkaXVzOiBcIjAgMCA1cHggMFwiLGN1cnNvcjogXCJzZS1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXt0aGlzLnJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW92YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvV2luZG93L1dpbmRvdy50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCBEcmFnRXZlbnRIYW5kbGVyID0gX19SZWFjdC5EcmFnRXZlbnRIYW5kbGVyO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZhYmxlUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIG9uTW92ZVN0YXJ0PzogKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCk9PnZvaWQ7XHJcbiAgICBvbk1vdmU/OiAoZXZlbnQ6IE1vdmVFdmVudCk9PnZvaWQ7XHJcbiAgICBvbk1vdmVFbmQ/OiAoZXZlbnQ6IE1vdmVFbmRFdmVudCk9PnZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVTdGFydEV2ZW50IHtcclxuICAgIGJpbmRYOiAob2JqOiBPYmplY3QsIHByb3BOYW1lOiBzdHJpbmcsIG1vdmVkQ2FsbGJhY2s/OiAoKT0+dm9pZCk9PnZvaWQ7XHJcbiAgICBiaW5kWTogKG9iajogT2JqZWN0LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCk9PnZvaWQpPT52b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVFdmVudCB7XHJcbiAgICBkZWx0YVg6IG51bWJlcjtcclxuICAgIGRlbHRhWTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVFbmRFdmVudCB7XHJcbiAgICBkZWx0YVg6IG51bWJlcjtcclxuICAgIGRlbHRhWTogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIEJpbmRlZE9iamVjdCB7XHJcbiAgICBvYmo6IGFueTtcclxuICAgIHByb3BOYW1lOiBzdHJpbmdcclxuICAgIHN0YXJ0VmFsdWU6IG51bWJlcjtcclxuICAgIG1vdmVkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xyXG4gICAgbGFzdFZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZhYmxlIGV4dGVuZHMgQ29tcG9uZW50PE1vdmFibGVQcm9wcyxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydENsaWVudFg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhcnRDbGllbnRZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRyYWdPdmVyX0JpbmRlZDogYW55O1xyXG5cclxuICAgIHByaXZhdGUgYmluZGVkWDogQmluZGVkT2JqZWN0W10gPSBbXTtcclxuICAgIHByaXZhdGUgYmluZGVkWTogQmluZGVkT2JqZWN0W10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRYKG9iajogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuYmluZGVkWC5wdXNoKHtcclxuICAgICAgICAgICAgb2JqOiBvYmosXHJcbiAgICAgICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZSxcclxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogb2JqW3Byb3BOYW1lXSxcclxuICAgICAgICAgICAgbW92ZWRDYWxsYmFjazogbW92ZWRDYWxsYmFjayxcclxuICAgICAgICAgICAgbGFzdFZhbHVlOiBvYmpbcHJvcE5hbWVdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgYmluZFkob2JqOiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIG1vdmVkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kZWRZLnB1c2goe1xyXG4gICAgICAgICAgICBvYmo6IG9iaixcclxuICAgICAgICAgICAgcHJvcE5hbWU6IHByb3BOYW1lLFxyXG4gICAgICAgICAgICBzdGFydFZhbHVlOiBvYmpbcHJvcE5hbWVdLFxyXG4gICAgICAgICAgICBtb3ZlZENhbGxiYWNrOiBtb3ZlZENhbGxiYWNrLFxyXG4gICAgICAgICAgICBsYXN0VmFsdWU6IG9ialtwcm9wTmFtZV1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlRHJhZ1N0YXJ0KGU6IERyYWdFdmVudCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0Q2xpZW50WCA9IGUuY2xpZW50WDtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2xpZW50WSA9IGUuY2xpZW50WTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3ZlU3RhcnQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlU3RhcnQoe2JpbmRYOiB0aGlzLmJpbmRYLmJpbmQodGhpcyksIGJpbmRZOiB0aGlzLmJpbmRZLmJpbmQodGhpcyl9KTtcclxuXHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIm1vdmFibGVcIiwgXCJcIik7XHJcbiAgICAgICAgLy9lLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdPdmVyX0JpbmRlZCA9IHRoaXMuaGFuZGxlRHJhZ092ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3Zlcl9CaW5kZWQpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJhZ0VuZChlOiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3Zlcl9CaW5kZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZUVuZClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmVFbmQoe1xyXG4gICAgICAgICAgICAgICAgZGVsdGFYOiBlLmNsaWVudFggLSB0aGlzLnN0YXJ0Q2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGRlbHRhWTogZS5jbGllbnRZIC0gdGhpcy5zdGFydENsaWVudFlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iaW5kZWRYID0gW107XHJcbiAgICAgICAgdGhpcy5iaW5kZWRZID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJhZ092ZXIoZTogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRlZFguZm9yRWFjaCgoYmluZCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBiaW5kLnN0YXJ0VmFsdWUgKyBlLmNsaWVudFggLSB0aGlzLnN0YXJ0Q2xpZW50WDtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBiaW5kLmxhc3RWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgYmluZC5vYmpbYmluZC5wcm9wTmFtZV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJpbmQubGFzdFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmluZC5tb3ZlZENhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGJpbmQubW92ZWRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGVkWS5mb3JFYWNoKChiaW5kKT0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gYmluZC5zdGFydFZhbHVlICsgZS5jbGllbnRZIC0gdGhpcy5zdGFydENsaWVudFk7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gYmluZC5sYXN0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQub2JqW2JpbmQucHJvcE5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBiaW5kLmxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmQubW92ZWRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBiaW5kLm1vdmVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdmUpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhWDogZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBkZWx0YVk6IGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIm1vdmFibGVcIik7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7ZHJhZ2dhYmxlOiB0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe2N1cnNvcjogXCJtb3ZlXCJ9KTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wSW5mby5lZGl0b3JUeXBlLCBlZGl0b3JQcm9wcywgbnVsbClcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17dGhpcy5oYW5kbGVEcmFnU3RhcnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17dGhpcy5oYW5kbGVEcmFnRW5kLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTW92YWJsZS9Nb3ZhYmxlLnRzeFxuICoqLyIsImltcG9ydCB7U3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge1Rlc3RCdWh0YU9iamVjdDF9IGZyb20gXCIuL3Rlc3RCdWh0YU9iamVjdDFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyB0ZXN0QnVodGFPYmplY3QyIGV4dGVuZHMgVGVzdEJ1aHRhT2JqZWN0MSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQn9C+0Lsvc2V4XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L5cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCf0L7RgtC+0LvQvtC6INCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIHNleDogc3RyaW5nO1xyXG5cclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9UZXN0MS90ZXN0QnVodGFPYmplY3QyLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgc2hhbGxvd0NvbXBhcmUgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZVwiKTtcclxuXHJcbi8vaW1wb3J0IHtleGVjdXRlU1FMfSBmcm9tIFwiLi4vYnVodGEtY29yZS9TUUxcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uLy4uL1NRTFwiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uc30gZnJvbSBcIi4vVHJlZUdyaWRDb2x1bW5zXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW5Qcm9wcywgVHJlZUdyaWRDb2x1bW59IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uXCI7XHJcbmltcG9ydCB7S2V5Y29kZX0gZnJvbSBcIi4uLy4uL0tleWNvZGVcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlU3RhcnRFdmVudH0gZnJvbSBcIi4uL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge2dldFNjcm9sbGJhcldpZHRofSBmcm9tIFwiLi4vLi4vZ2V0U2Nyb2xsQmFyV2lkdGhcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGRhdGFTb3VyY2U/OiBhbnk7XHJcbiAgICByb3dIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBrZXlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBwYXJlbnRLZXlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBoaWVyYXJjaHlGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBoaWVyYXJjaHlEZWxpbWl0ZXJzPzogc3RyaW5nO1xyXG4gICAgdHJlZU1vZGU/OiBib29sZWFuO1xyXG4gICAgYXV0b0V4cGFuZE5vZGVzVG9MZXZlbD86IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgSW50ZXJuYWxDb2x1bW4ge1xyXG4gICAgcHJvcHM6IFRyZWVHcmlkQ29sdW1uUHJvcHM7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgY2FwdGlvbjogc3RyaW5nO1xyXG4gICAgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgICBmb290ZXI6IHN0cmluZztcclxuICAgIGhpZGRlbjogYm9vbGVhbjtcclxuICAgIGhlYWRlcldpZHRoTmF0aXZlRWxlbWVudDogRWxlbWVudDtcclxuICAgIGJvZHlXaWR0aE5hdGl2ZUVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBmb290ZXJXaWR0aE5hdGl2ZUVsZW1lbnQ6IEVsZW1lbnQ7XHJcbn1cclxuXHJcbmNsYXNzIEludGVybmFsUm93IHtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICAvLy8gICBzb3VyY2VPYmplY3Q6IGFueTtcclxuICAgIHNvdXJjZUluZGV4OiBudW1iZXI7XHJcbiAgICBjZWxsRWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbm9kZTogSW50ZXJuYWxUcmVlTm9kZTtcclxuXHJcbn1cclxuXHJcbmNsYXNzIEludGVybmFsVHJlZU5vZGUge1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIHNvdXJjZU9iamVjdDogYW55O1xyXG4gICAgc291cmNlSW5kZXg6IG51bWJlcjtcclxuICAgIGNlbGxFbGVtZW50czogRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgLy8g0LTQu9GPIHRyZWVNb2RlO1xyXG4gICAgcGFyZW50OiBJbnRlcm5hbFRyZWVOb2RlO1xyXG4gICAgY2hpbGRyZW46IEludGVybmFsVHJlZU5vZGVbXSA9IFtdO1xyXG4gICAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG5cclxuICAgIHB1c2hSb3dSZWN1cnNpdmUocm93czogSW50ZXJuYWxSb3dbXSwgbWF4UGFnZUxlbmd0aDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCA+PSBtYXhQYWdlTGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCByb3cgPSBuZXcgSW50ZXJuYWxSb3coKTtcclxuICAgICAgICByb3cuc291cmNlSW5kZXggPSB0aGlzLnNvdXJjZUluZGV4O1xyXG4gICAgICAgIHJvdy5ub2RlID0gdGhpcztcclxuICAgICAgICByb3dzLnB1c2gocm93KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucHVzaFJvd1JlY3Vyc2l2ZShyb3dzLCBtYXhQYWdlTGVuZ3RoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY29uc3QgdmVydFNjcm9sbEJhcldpZHRoID0gMzA7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWQgZXh0ZW5kcyBDb21wb25lbnQ8VHJlZUdyaWRQcm9wcywgYW55PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZWVHcmlkUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICAvL3RoaXMuc3RhdGUuY29sdW1ucz1bXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjb2x1bW5zOiBJbnRlcm5hbENvbHVtbltdO1xyXG4gICAgcHJpdmF0ZSBwYWdlTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJvd3M6IEludGVybmFsUm93W107XHJcbiAgICBwcml2YXRlIG5vZGVzOiBJbnRlcm5hbFRyZWVOb2RlW107XHJcbiAgICBwcml2YXRlIGZvY3VzZWRSb3dJbmRleDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBmb2N1c2VkQ2VsbEluZGV4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IGFueVtdO1xyXG5cclxuICAgIGhlYWRlckZha2VSb3c6IGFueTtcclxuICAgIGZvb3RlckZha2VSb3c6IGFueTtcclxuICAgIGhlYWRlcldyYXBwZXJFbGVtZW50OiBhbnk7XHJcbiAgICBib2R5V3JhcHBlckVsZW1lbnQ6IGFueTtcclxuICAgIGZvb3RlcldyYXBwZXJFbGVtZW50OiBhbnk7XHJcblxyXG4gICAgaGVhZGVyVGFibGVFbGVtZW50OiBFbGVtZW50O1xyXG4gICAgYm9keVRhYmxlRWxlbWVudDogRWxlbWVudDtcclxuICAgIGZvb3RlclRhYmxlRWxlbWVudDogRWxlbWVudDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDb2x1bW5zKCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIjFcIik7XHJcbiAgICAgICAgbGV0IGNvbHVtbnNUYWcgPSB0aGlzLmdldENoaWxkcmVuKFRyZWVHcmlkQ29sdW1ucyk7XHJcblxyXG4gICAgICAgIGNvbHVtbnNUYWcuZm9yRWFjaCgodGFnOiBKU1guRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uVGFnTGlzdCA9IHRoaXMuZ2V0Q2hpbGRyZW5PZlByb3BzKHRhZy5wcm9wcywgVHJlZUdyaWRDb2x1bW4pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1uVGFnTGlzdC5mb3JFYWNoKChwcm9wQ29sOiBKU1guRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBuZXcgSW50ZXJuYWxDb2x1bW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbC5wcm9wcyA9IHByb3BDb2wucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBjb2wud2lkdGggPSBwcm9wQ29sLnByb3BzLndpZHRoIHx8IDE1MDtcclxuICAgICAgICAgICAgICAgIGNvbC5jYXB0aW9uID0gcHJvcENvbC5wcm9wcy5jYXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgY29sLmZpZWxkTmFtZSA9IHByb3BDb2wucHJvcHMuZmllbGROYW1lO1xyXG4gICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLnByb3BzLmNhcHRpb24gfHwgY29sLmZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Rm9jdXNlZCgpIHtcclxuICAgICAgICB0aGlzLmZvY3VzZWRSb3dJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkQ2VsbEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOb2RlcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMudHJlZU1vZGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGllcmFyY2h5RmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTm9kZXNGcm9tSGllcmFyY2h5RmllbGQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidW5rbm93biBoaWVyYXJjaHkgbW9kZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOb2Rlc0Zyb21IaWVyYXJjaHlGaWVsZCgpIHtcclxuXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kYXRhU291cmNlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaGllcmFyY2h5RGVsaW1pdGVycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWFRyZWVHcmlkOiBoaWVyYXJjaHlEZWxpbWl0ZXJzIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGludGVyZmFjZSBJU29ydGVkIHtcclxuICAgICAgICAgICAgaGllcmFyY2h5U3RyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIG9iakluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc29ydGVkOiBJU29ydGVkW10gPSB0aGlzLmRhdGFTb3VyY2UubWFwKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoaWVyYXJjaHlTdHI6IG9ialt0aGlzLnByb3BzLmhpZXJhcmNoeUZpZWxkTmFtZV0udG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIG9iakluZGV4OiBpbmRleFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb3J0ZWQgPSBfLnNvcnRCeShzb3J0ZWQsIFtcImhpZXJhcmNoeVN0clwiXSk7XHJcblxyXG4gICAgICAgIGxldCBjYWNoZTogeyBbaGllcmFyY2h5SWQ6IHN0cmluZ106IEludGVybmFsVHJlZU5vZGU7IH0gPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlcyA9IFtdO1xyXG5cclxuICAgICAgICBzb3J0ZWQuZm9yRWFjaCgocywgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzcGxpdHRlZCA9IHMuaGllcmFyY2h5U3RyLnNwbGl0KHRoaXMucHJvcHMuaGllcmFyY2h5RGVsaW1pdGVycyk7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnRJZDogYW55O1xyXG4gICAgICAgICAgICBsZXQgbm9kZUlkOiBhbnk7XHJcbiAgICAgICAgICAgIGlmIChzcGxpdHRlZC5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICBub2RlSWQgPSBzLmhpZXJhcmNoeVN0cjtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlSWQgPSBfLmxhc3Qoc3BsaXR0ZWQpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgPSBzcGxpdHRlZC5zbGljZSgwLCBzcGxpdHRlZC5sZW5ndGggLSAxKS5qb2luKHRoaXMucHJvcHMuaGllcmFyY2h5RGVsaW1pdGVycy5zbGljZSgwLCAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWNoZVtub2RlSWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJYVHJlZUdyaWQ6IG5vZGVJZCAnXCIgKyBub2RlSWQgKyBcIicgaXMgZHVwbGljYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IEludGVybmFsVHJlZU5vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNvdXJjZUluZGV4ID0gcy5vYmpJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmxldmVsID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmV4cGFuZGVkID0gbm9kZS5sZXZlbCA8IHRoaXMucHJvcHMuYXV0b0V4cGFuZE5vZGVzVG9MZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZVtub2RlSWRdID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IGNhY2hlW3BhcmVudElkXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBJbnRlcm5hbFRyZWVOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNvdXJjZUluZGV4ID0gcy5vYmpJbmRleDtcclxuICAgICAgICAgICAgICAgIG5vZGUubGV2ZWwgPSBwYXJlbnROb2RlLmxldmVsICsgMTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZXhwYW5kZWQgPSBub2RlLmxldmVsIDwgdGhpcy5wcm9wcy5hdXRvRXhwYW5kTm9kZXNUb0xldmVsO1xyXG4gICAgICAgICAgICAgICAgY2FjaGVbcy5oaWVyYXJjaHlTdHJdID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW4ucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHtzdHI6IHMuaGllcmFyY2h5U3RyLCBwYXJlbnRJZCwgbm9kZUlkfSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSb3dzKCkge1xyXG5cclxuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaCgobm9kZTogSW50ZXJuYWxUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucHVzaFJvd1JlY3Vyc2l2ZSh0aGlzLnJvd3MsIHRoaXMucGFnZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhU291cmNlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBuZXcgSW50ZXJuYWxSb3coKTtcclxuICAgICAgICAgICAgICAgIHJvdy5zb3VyY2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgLy9yb3cuc291cmNlT2JqZWN0ID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluaXRGb2N1c2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb2x1bW5zICYmIHRoaXMuY29sdW1ucy5sZW5ndGggPiAwICYmIHRoaXMuZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zWzBdLmZvb3RlciA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggKyBcIiDQv9C+0LcuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJEYXRhKCkge1xyXG5cclxuLy8gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhU291cmNlKSB7XHJcbi8vICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZS5tYXAoKHJvdykgPT4gcm93KTtcclxuLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLnJvd3MgPSB3aW5kb3dbXCJ4eHhcIl0uZmlsdGVyKChyb3cpID0+IHJvd1tcItCd0LDQt9Cy0LDQvdC40LVcIl0uaW5kZXhPZihcIlBoaWxcIikgPiAtMSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgbGFzdEJvZHlXcmFwcGVySGVpZ2h0ID0gMDtcclxuICAgIGxhc3RCb2R5V3JhcHBlcldpZHRoID0gMDtcclxuXHJcbiAgICBoYW5kbGVCb2R5V3JhcHBlckVsZW1lbnRSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0hlaWdodCA9IHRoaXMuYm9keVdyYXBwZXJFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBpZiAobmV3SGVpZ2h0ICE9PSB0aGlzLmxhc3RCb2R5V3JhcHBlckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RCb2R5V3JhcHBlckhlaWdodCA9IG5ld0hlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuZXdXaWR0aCA9IHRoaXMuYm9keVdyYXBwZXJFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGlmIChuZXdXaWR0aCAhPT0gdGhpcy5sYXN0Qm9keVdyYXBwZXJXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RCb2R5V3JhcHBlcldpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICAgICAgdGhpcy5ib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuaGFuZGxlQm9keVdyYXBwZXJFbGVtZW50UmVzaXplLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ib2R5V3JhcHBlckVsZW1lbnRJbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxNb3VudCgpIHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMucGFnZUxlbmd0aCA9IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaERhdGFTb3VyY2UoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTm9kZXMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgdGVzdExvYWQ1MDAoKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGV4ZWN1dGVTUUwoXCJzZWxlY3QgVE9QIDUwMDAg0JrQu9GO0Ycs0J3QvtC80LXRgCzQndCw0LfQstCw0L3QuNC1IGZyb20gW9CS0LjQtCDQotCc0KZdIG9yZGVyIGJ5INCd0L7QvNC10YBcIilcclxuICAgIC8vICAgICAgICAgLmRvbmUoKHRhYmxlKSA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGFibGUucm93cy5tYXAoKHIpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4ge9Ca0LvRjtGHOiByW1wi0JrQu9GO0YdcIl0sINCd0L7QvNC10YA6IHJbXCLQndC+0LzQtdGAXCJdLCDQndCw0LfQstCw0L3QuNC1OiByW1wi0J3QsNC30LLQsNC90LjQtVwiXX07XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucygpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0IHRvcCA1MDA2KiDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0JrQu9GO0YcgLS0+IFwiICsgdGFibGUucm93c1swXS5nZXRWYWx1ZSgyKSk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5mYWlsKChlcnIpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFRyZWVHcmlkUHJvcHMpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGRpZFVwZGF0ZShwcmV2UHJvcHM6IFRyZWVHcmlkUHJvcHMsIHByZXZTdGF0ZTogYW55LCBwcmV2Q29udGV4dDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUm93cygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVuZGVyUm93cy1zdGFydCgpXCIpO1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMucm93cylcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItcm93czogXCIgKyB0aGlzLnJvd3MubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXQucHVzaCh0aGlzLnJlbmRlclJvdyhyb3csIGluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZW5kZXJSb3dzLWVuZCgpXCIpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJSb3cocm93OiBJbnRlcm5hbFJvdywgcm93SW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgIGtleT17cm93SW5kZXh9XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4geyByb3cuZWxlbWVudCA9IGU7fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNlbGxzKHJvdywgcm93SW5kZXgpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDZWxscyhyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKHRoaXMucmVuZGVyQ2VsbChyb3csIHJvd0luZGV4LCBjb2wsIGNvbEluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNlbGwocm93OiBJbnRlcm5hbFJvdywgcm93SW5kZXg6IG51bWJlciwgY29sOiBJbnRlcm5hbENvbHVtbiwgY29sSW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IG9iakluZGV4ID0gcm93LnNvdXJjZUluZGV4O1xyXG4gICAgICAgIGxldCBzdHIgPSB0aGlzLmRhdGFTb3VyY2Vbb2JqSW5kZXhdW2NvbC5wcm9wcy5maWVsZE5hbWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy9sZXQgc3RyID0gdGhpcy5yb3dzW3Jvd0luZGV4XS5zb3VyY2VPYmplY3RbY29sLnByb3BzLmZpZWxkTmFtZV0udG9TdHJpbmcoKTtcclxuICAgICAgICAvLyByZXR1cm4gPHRkIGtleT17Y29sSW5kZXh9PlxyXG4gICAgICAgIC8vICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OjE2LCBvdmVyZmxvdzpcImhpZGRlblwifX0+e3N0cn08L2Rpdj5cclxuICAgICAgICAvLyA8L3RkPjtcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSByb3cubm9kZTtcclxuXHJcbiAgICAgICAgbGV0IGhpZXJhcmNoeVBhZGRpbmdEaXY6IEpTWC5FbGVtZW50O1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlICYmIChjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVBhZGRpbmcgfHwgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlKSkge1xyXG4gICAgICAgICAgICBoaWVyYXJjaHlQYWRkaW5nRGl2ID0gPHNwYW4gc3R5bGU9e3t3aWR0aDpub2RlLmxldmVsICogMjAsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT48L3NwYW4+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRkU3R5bGU6IGFueSA9IHtvdmVyZmxvdzogXCJoaWRkZW5cIn07XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlKSB7XHJcbiAgICAgICAgICAgIHRkU3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSBcInJnYmEoMjU1LCAwLCAwLCAwKVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0clNwYW5TdHlsZTogYW55ID0ge1xyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgY29sLnByb3BzLnNob3dIaWVyYXJjaHlUcmVlICYmIG5vZGUuZXhwYW5kZWQgJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHN0clNwYW5TdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdHJTcGFuID0gPHNwYW4gc3R5bGU9eyBzdHJTcGFuU3R5bGV9PntzdHJ9PC9zcGFuPjtcclxuXHJcblxyXG4gICAgICAgIGxldCBjb2xsYXBzZUljb25EaXY6IEpTWC5FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdy1jb2xsYXBzZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4ge25vZGUuZXhwYW5kZWQgPSBmYWxzZTsgdGhpcy5jcmVhdGVSb3dzKCk7IHRoaXMuZm9yY2VVcGRhdGUoKTt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlSWNvbkRpdiA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7bm9kZS5leHBhbmRlZCA9IHRydWU7IHRoaXMuY3JlYXRlUm93cygpOyB0aGlzLmZvcmNlVXBkYXRlKCk7fSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUljb25EaXYgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY29sbGFwc2UtaWNvblwiIHN0eWxlPXt7IHdpZHRoOjIwLCBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAga2V5PXtjb2xJbmRleH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt0ZFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHJvdy5jZWxsRWxlbWVudHNbY29sSW5kZXhdID0gZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4geyB0aGlzLnNldEZvY3VzZWRDZWxsKHJvd0luZGV4LGNvbEluZGV4KTt9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctY2hlY2tib3hcIiBzdHlsZT17eyBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXBhZGRpbmdcIiBzdHlsZT17eyBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hpZXJhcmNoeVBhZGRpbmdEaXZ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2xsYXBzZUljb25EaXZ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWljb25cIiBzdHlsZT17eyBmbGV4OiBcIjAgMCBhdXRvXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3RyXCIgc3R5bGU9e3sgZmxleDogXCIwIDEgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJTcGFufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEZvY3VzZWRDZWxsKHJvd0luZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZm9jdXNlZFJvd0luZGV4ID0gcm93SW5kZXg7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkQ2VsbEluZGV4ID0gY2VsbEluZGV4O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVRhYmxlV2hlZWwoZTogV2hlZWxFdmVudCkge1xyXG4gICAgICAgIC8vIGlmIChlLmRlbHRhWSA+IDApXHJcbiAgICAgICAgLy8gICAgIHRoaXMuaW5jUGFnZVN0YXJ0SW5kZXgoMyk7XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoZS5kZWx0YVkgPCAwKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmRlY1BhZ2VTdGFydEluZGV4KDMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGVsdGFZKTtcclxuICAgICAgICAvLyB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoZTogVUlFdmVudCkge1xyXG4gICAgICAgICQodGhpcy5oZWFkZXJXcmFwcGVyRWxlbWVudCkuY3NzKHt0b3A6IHRoaXMuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcH0pO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gJCh0aGlzLmZvb3RlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpIC0gMDtcclxuICAgICAgICAkKHRoaXMuZm9vdGVyV3JhcHBlckVsZW1lbnQpLmNzcyh7dG9wOiBwb3N9KTtcclxuXHJcbiAgICAgICAgJCh0aGlzLmhlYWRlckZha2VSb3cpLmNzcyh7aGVpZ2h0OiAkKHRoaXMuaGVhZGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCl9KTtcclxuICAgICAgICAkKHRoaXMuZm9vdGVyRmFrZVJvdykuY3NzKHtoZWlnaHQ6ICQodGhpcy5mb290ZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKX0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUNoYW5nZUZvY3VzZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm93LmVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAkKHJvdy5lbGVtZW50KS5yZW1vdmVDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLXJvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJvdy5jZWxsRWxlbWVudHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgJChjZWxsKS5yZW1vdmVDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLWNlbGxcIik7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGZvY3VzZWRSb3cgPSB0aGlzLnJvd3NbdGhpcy5mb2N1c2VkUm93SW5kZXhdO1xyXG4gICAgICAgIGlmIChmb2N1c2VkUm93ICYmIGZvY3VzZWRSb3cuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGZvY3VzZWRSb3cuZWxlbWVudCkuYWRkQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1yb3dcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZm9jdXNlZENlbGxFbGVtZW50ID0gZm9jdXNlZFJvdy5jZWxsRWxlbWVudHNbdGhpcy5mb2N1c2VkQ2VsbEluZGV4XTtcclxuICAgICAgICAgICAgaWYgKGZvY3VzZWRDZWxsRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgJChmb2N1c2VkQ2VsbEVsZW1lbnQpLmFkZENsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtY2VsbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZENlbGxFbGVtZW50KCk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvd3NbdGhpcy5mb2N1c2VkUm93SW5kZXhdLmNlbGxFbGVtZW50c1t0aGlzLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm93c1t0aGlzLmZvY3VzZWRSb3dJbmRleF0uZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbERvd24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZFJvd0luZGV4IDwgdGhpcy5yb3dzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c2VkUm93SW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93RWwgPSAkKHRoaXMuZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyDRg9GI0LvQviDQt9CwINC/0YDQtdC00LXQu9GLINCy0LjQtNC40LzQvtGB0YLQuFxyXG4gICAgICAgICAgICBpZiAocm93RWwucG9zaXRpb24oKS50b3AgKyByb3dFbC5oZWlnaHQoKSA+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgKyB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5jbGllbnRIZWlnaHQgLSAkKHRoaXMuZm9vdGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCA9IHJvd0VsLnBvc2l0aW9uKCkudG9wICsgcm93RWwuaGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVdyYXBwZXJFbGVtZW50LmNsaWVudEhlaWdodCArICQodGhpcy5mb290ZXJXcmFwcGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxMZWZ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRDZWxsSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZENlbGxJbmRleC0tO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZENlbGxJbmRleCA8IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZENlbGxJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbFVwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRSb3dJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c2VkUm93SW5kZXgtLTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93RWwgPSAkKHRoaXMuZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyDRg9GI0LvQviDQt9CwINC/0YDQtdC00LXQu9GLINCy0LjQtNC40LzQvtGB0YLQuFxyXG4gICAgICAgICAgICBpZiAocm93RWwucG9zaXRpb24oKS50b3AgPCB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgKyAkKHRoaXMuaGVhZGVyV3JhcHBlckVsZW1lbnQpLm91dGVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCA9IHJvd0VsLnBvc2l0aW9uKCkudG9wIC0gJCh0aGlzLmhlYWRlcldyYXBwZXJFbGVtZW50KS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVCb2R5S2V5RG93bihlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBLZXljb2RlLkRvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNlZENlbGxEb3duKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IEtleWNvZGUuVXApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNlZENlbGxVcCgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBLZXljb2RlLkxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNlZENlbGxMZWZ0KCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IEtleWNvZGUuUmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNlZENlbGxSaWdodCgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtblJlc2l6ZVN0YXJ0ID0gKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCwgY29sOiBJbnRlcm5hbENvbHVtbik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGV2ZW50LmJpbmRYKGNvbCwgXCJ3aWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQoY29sLmhlYWRlcldpZHRoTmF0aXZlRWxlbWVudCkuYXR0cignd2lkdGgnLCBjb2wud2lkdGgpO1xyXG4gICAgICAgICAgICAkKGNvbC5ib2R5V2lkdGhOYXRpdmVFbGVtZW50KS5hdHRyKCd3aWR0aCcsIGNvbC53aWR0aCk7XHJcbiAgICAgICAgICAgICQoY29sLmZvb3RlcldpZHRoTmF0aXZlRWxlbWVudCkuYXR0cignd2lkdGgnLCBjb2wud2lkdGgpO1xyXG4gICAgICAgICAgICBsZXQgdGFibGVXaWR0aCA9IHRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCk7XHJcbiAgICAgICAgICAgICQodGhpcy5oZWFkZXJUYWJsZUVsZW1lbnQpLmNzcygnd2lkdGgnLCB0YWJsZVdpZHRoKTtcclxuICAgICAgICAgICAgJCh0aGlzLmJvZHlUYWJsZUVsZW1lbnQpLmNzcygnd2lkdGgnLCB0YWJsZVdpZHRoKTtcclxuICAgICAgICAgICAgJCh0aGlzLmZvb3RlclRhYmxlRWxlbWVudCkuY3NzKCd3aWR0aCcsIHRhYmxlV2lkdGgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuYm9keVdyYXBwZXJFbGVtZW50KS5jc3MoJ21heC13aWR0aCcsIHRhYmxlV2lkdGggKyBnZXRTY3JvbGxiYXJXaWR0aCgpICsgMSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlT25DbGljayhudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyQ29sdW1uSGVhZGVycygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBjb2xXaWR0aHM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBsZXQgY29sSGVhZGVyczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaChcclxuICAgICAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKT0+IHtjb2wuaGVhZGVyV2lkdGhOYXRpdmVFbGVtZW50PWU7fSB9XHJcbiAgICAgICAgICAgICAgICAvPik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuXHJcbiAgICAgICAgICAgIGNvbEhlYWRlcnMucHVzaChcclxuICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RkU3R5bGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbC5jYXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgd2lkdGg6NSwgcmlnaHQ6MCwgYm90dG9tOjAsIGN1cnNvcjpcImNvbC1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXsgKGV2ZW50OiBNb3ZlU3RhcnRFdmVudCk9PnsgdGhpcy5jb2x1bW5SZXNpemVTdGFydChldmVudCwgY29sKTsgY29uc29sZS5sb2coXCJNb3ZlU3RhcnRcIil9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDowLCB3aWR0aDppbmRleD09PTA/MDo1LCBsZWZ0OjAsIGJvdHRvbTowLCBjdXJzb3I6XCJjb2wtcmVzaXplXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVTdGFydD17IChldmVudDogTW92ZVN0YXJ0RXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINGA0LXRgdCw0LnQt9C40Lwg0L/RgNC10LTRi9C00YPRidGD0Y4g0LrQvtC70L7QvdC60YNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5SZXNpemVTdGFydChldmVudCwgdGhpcy5jb2x1bW5zW2luZGV4LTFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb3ZhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGQ+KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuaGVhZGVyV3JhcHBlckVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0YWJsZUxheW91dDogXCJmaXhlZFwiLGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsIHdpZHRoOnRoaXMuY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLmhlYWRlclRhYmxlRWxlbWVudCA9IGV9XHJcblxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbFdpZHRoc31cclxuICAgICAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xIZWFkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29sdW1uRm9vdGVycygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBjb2xXaWR0aHM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBsZXQgY29sRm9vdGVyczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgaXNGb290ZXJFbXB0eSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29sV2lkdGhzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Y29sXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17IGNvbC53aWR0aC50b1N0cmluZygpICsgXCJweFwiIH1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSk9PiB7Y29sLmZvb3RlcldpZHRoTmF0aXZlRWxlbWVudD1lO30gfVxyXG4gICAgICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgICAgICBpZiAoY29sLmZvb3RlcilcclxuICAgICAgICAgICAgICAgIGlzRm9vdGVyRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHRkU3R5bGU6IGFueSA9IHtvdmVyZmxvdzogXCJoaWRkZW5cIn07XHJcbiAgICAgICAgICAgIGNvbEZvb3RlcnMucHVzaCg8dGQga2V5PXtpbmRleH0gc3R5bGU9e3RkU3R5bGV9Pntjb2wuZm9vdGVyfTwvdGQ+KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFpc0Zvb3RlckVtcHR5KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gdGhpcy5mb290ZXJXcmFwcGVyRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWZvb3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGFibGVMYXlvdXQ6IFwiZml4ZWRcIixib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuZm9vdGVyVGFibGVFbGVtZW50ID0gZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sV2lkdGhzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xGb290ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyaWRCb2R5KCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2w6IEludGVybmFsQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbFdpZHRocy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBjb2wud2lkdGgudG9TdHJpbmcoKSArIFwicHhcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpPT4ge2NvbC5ib2R5V2lkdGhOYXRpdmVFbGVtZW50PWU7fSB9XHJcbiAgICAgICAgICAgICAgICAvPik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICBvbktleURvd249eyAoZSkgPT4geyAgdGhpcy5oYW5kbGVCb2R5S2V5RG93bihlKTsgfSB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0YWJsZUxheW91dDogXCJmaXhlZFwiLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpfX1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLmJvZHlUYWJsZUVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbFdpZHRoc31cclxuICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHJlZj17IChlKSA9PiB0aGlzLmhlYWRlckZha2VSb3cgPSBlfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJvd3MoKX1cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgcmVmPXsgKGUpID0+IHRoaXMuZm9vdGVyRmFrZVJvdyA9IGV9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjYWxjVG90YWxDb2x1bW5zV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcmV0ID0gMDtcclxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbC5oaWRkZW4pXHJcbiAgICAgICAgICAgICAgICByZXQgKz0gY29sLndpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNoYWxsb3dDb21wYXJlKG5leHRQcm9wczogVHJlZUdyaWRQcm9wcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hhbGxvdy10cmVlLWdyaWRcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInNoYWxsb3ctd2luIC0+IGlzRXFpYWwgPSBcIiArIHRoaXMuaXNQcm9wc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcywgW1wiY2hpbGRyZW5cIl0pKTtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNQcm9wc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJkYXRhU291cmNlXCJdKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vdGhpcy5hZGRDbGFzc05hbWUoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItdHJlZS1ncmlkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWUtZ3JpZFwiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWhlYWRlci13cmFwcGVyXCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoIDUwMDFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZmlsdGVyRGF0YSgpOyB0aGlzLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwiZm9yY2VVcGRhdGVcIik7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICDQt9Cw0LPQvtC70L7QstC+0Log0Lgg0YIu0LQuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWJvZHktd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOlwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6XCJhdXRvXCIsIGZsZXg6IFwiMCAxIGF1dG9cIiwgbWF4V2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKStnZXRTY3JvbGxiYXJXaWR0aCgpKzF9fVxyXG4gICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyR3JpZEJvZHkoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sdW1uSGVhZGVycygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2x1bW5Gb290ZXJzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWUtZ3JpZC1mb290ZXItd3JhcHBlclwiIHN0eWxlPXt7IGZsZXg6IFwiMCAxIGF1dG9cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICDRhNGD0YLQtdGAINC4INGC0LRcclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWQudHN4XG4gKiovIiwi77u/aW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQ29sdW1uc1Byb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8YW55PiB7XHJcbiAgICAvL2NhcHRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbnMgZXh0ZW5kcyBDb21wb25lbnQ8VHJlZUdyaWRDb2x1bW5zUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZENvbHVtbnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnMudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG4vL2ltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQ29sdW1uUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wczxhbnk+IHtcclxuICAgIGNhcHRpb24/OiBzdHJpbmc7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIHNob3dIaWVyYXJjaHlUcmVlPzogYm9vbGVhbjtcclxuICAgIHNob3dIaWVyYXJjaHlQYWRkaW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkQ29sdW1uIGV4dGVuZHMgQ29tcG9uZW50PFRyZWVHcmlkQ29sdW1uUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZENvbHVtblByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5zdGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICAvL3RoaXMuYWRkQ2xhc3NOYW1lKFwiYnRuXCIpO1xyXG4gICAgICAgIC8vdGhpcy50b2dnbGVDbGFzc05hbWUodGhpcy5wcm9wcy5kaXNhYmxlZCwgXCJkaXNhYmxlZFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChudWxsKTtcclxuICAgICAgICAvL1RyZWVHcmlkIGZyb20ge3RoaXMucHJvcHMuY29tcGlsZXJ9IGFuZCB7dGhpcy5wcm9wcy5mcmFtZXdvcmt9IWNsaWNrQ291bnQ9e3RoaXMuc3RhdGUuY2xpY2tDb3VudH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW4udHN4XG4gKiovIiwiXHJcbmV4cG9ydCB2YXIgS2V5Y29kZSA9IHtcclxuICAgIEVzYzogXCJFc2NhcGVcIixcclxuICAgIFNwYWNlOiBcIiBcIixcclxuXHJcbiAgICBMZWZ0OiBcIkFycm93TGVmdFwiLFxyXG4gICAgVXA6IFwiQXJyb3dVcFwiLFxyXG4gICAgRG93bjogXCJBcnJvd0Rvd25cIixcclxuICAgIFJpZ2h0OiBcIkFycm93UmlnaHRcIixcclxuXHJcbiAgICBEZWw6IFwiRGVsZXRlXCIsXHJcbiAgICBJbnM6IFwiSW5zZXJ0XCIsXHJcblxyXG4gICAgV2luOiBcIk1ldGFcIixcclxuICAgIE1lbnU6IFwiQ29udGV4dE1lbnVcIixcclxuXHJcbiAgICBTY3JvbGw6IFwiU2Nyb2xsTG9ja1wiLFxyXG4gICAgTnVtOiBcIk51bUxvY2tcIixcclxuXHJcbiAgICBCYWNrc3BhY2U6IFwiQmFja3NwYWNlXCIsXHJcbiAgICBUYWI6IFwiVGFiXCIsXHJcbiAgICBFbnRlcjogXCJFbnRlclwiLFxyXG4gICAgU2hpZnQ6IFwiU2hpZnRcIixcclxuICAgIENvbnRyb2w6IFwiQ29udHJvbFwiLFxyXG4gICAgQWx0OiBcIkFsdFwiLFxyXG4gICAgQnJlYWs6IFwiUGF1c2VcIixcclxuICAgIENhcHNMb2NrOiBcIkNhcHNMb2NrXCIsXHJcblxyXG4gICAgUGFnZVVwOiBcIlBhZ2VVcFwiLFxyXG4gICAgUGFnZURvd246IFwiUGFnZURvd25cIixcclxuICAgIEVuZDogXCJFbmRcIixcclxuICAgIEhvbWU6IFwiSG9tZVwiLFxyXG5cclxuICAgIEYxOiBcIkYxXCIsXHJcbiAgICBGMjogXCJGMlwiLFxyXG4gICAgRjM6IFwiRjNcIixcclxuICAgIEY0OiBcIkY0XCIsXHJcbiAgICBGNTogXCJGNVwiLFxyXG4gICAgRjY6IFwiRjZcIixcclxuICAgIEY3OiBcIkY3XCIsXHJcbiAgICBGODogXCJGOFwiLFxyXG4gICAgRjk6IFwiRjlcIixcclxuICAgIEYxMDogXCJGMTBcIixcclxuICAgIEYxMTogXCJGMTFcIixcclxuICAgIEYxMjogXCJGMTJcIlxyXG5cclxufTtcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0tleUNvZGUudHNcbiAqKi8iLCJcclxuXHJcblxyXG5sZXQgY2FjaGVXaWR0aD0wO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKCkge1xyXG4gICAgaWYgKGNhY2hlV2lkdGg+MClcclxuICAgICAgICByZXR1cm4gY2FjaGVXaWR0aDtcclxuXHJcbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcclxuICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9IFwic2Nyb2xsYmFyXCI7IC8vIG5lZWRlZCBmb3IgV2luSlMgYXBwc1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xyXG5cclxuICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXHJcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XHJcblxyXG4gICAgLy8gYWRkIGlubmVyZGl2XHJcbiAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW5uZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcclxuXHJcbiAgICB2YXIgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGRpdnNcclxuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xyXG5cclxuICAgIGNhY2hlV2lkdGggPSB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xyXG4gICAgcmV0dXJuIGNhY2hlV2lkdGg7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9nZXRTY3JvbGxCYXJXaWR0aC50c1xuICoqLyIsIu+7v2ltcG9ydCAqIGFzIGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5cclxubGV0IHNvY2tldCA9IGlvLmNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU1FMKHNxbDogc3RyaW5nKTogSlF1ZXJ5UHJvbWlzZTxEYXRhVGFibGU+IHtcclxuICAgIC8vY29uc29sZS5sb2coXCJjYWxsIFNRTC5zcWwuZXhlY3V0ZVwiKTtcclxuICAgIC8vcmV0dXJuIHNpZ25hbFIuZXhlY3V0ZVNRTChzcWwpO1xyXG5cclxuXHJcbiAgICBsZXQgcHJvbWlzZTogSlF1ZXJ5RGVmZXJyZWQ8RGF0YVRhYmxlPjtcclxuICAgIHByb21pc2UgPSAkLkRlZmVycmVkPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAvLyAgc29ja2V0Lm9uY2UoJ2Nvbm5lY3QnLCgpID0+IHtcclxuICAgIGxldCBxdWVyeUlkID0gXCJxdWVyeS1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xyXG4gICAgc29ja2V0LmVtaXQoXCJleGVjdXRlU1FMXCIsIHtxdWVyeUlkLCBzcWx9KTtcclxuICAgIHNvY2tldC5vbmNlKHF1ZXJ5SWQsIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhQ29sdW1uID0gbmV3IERhdGFDb2x1bW4oZGF0YVRhYmxlLCByZXNwb25zZS5jb2x1bW5zW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVRhYmxlLmNvbHVtbnMucHVzaChkYXRhQ29sdW1uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2Uucm93cy5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhUm93ID0gbmV3IERhdGFSb3coZGF0YVRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFUYWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvbHVtbnNbaV0ucGFyc2UgPT09IFwiRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W2RhdGFUYWJsZS5jb2x1bW5zW2ldLm5hbWVdID0gbmV3IERhdGUocm93W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbZGF0YVRhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kYXRhUm93W2ldID0gcm93W2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5yb3dzLnB1c2goZGF0YVJvdyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhVGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vICAgfSk7XHJcblxyXG5cclxuICAgIC8vc2lnbmFsUi5leGVjdXRlU1FMKHNxbCkuXHJcbiAgICAvLyAgICBkb25lKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgbGV0IHJlcyA9IGV2YWwocmVzdWx0KTtcclxuXHJcbiAgICAvLyAgICAgICAgaWYgKHJlcy5lcnJvcikge1xyXG4gICAgLy8gICAgICAgICAgICBwcm9taXNlLnJlamVjdChyZXMuZXJyb3IpO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgbGV0IGRzID0gbmV3IERhdGFzZXQoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgIHJlcy50YWJsZXMuZm9yRWFjaCgodGFibGUpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgIGxldCBkYXRhVGFibGUgPSBuZXcgRGF0YVRhYmxlKGRzKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5uYW1lID0gdGFibGUubmFtZTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGRzLnRhYmxlcy5wdXNoKGRhdGFUYWJsZSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFDb2x1bW4gPSBuZXcgRGF0YUNvbHVtbihkYXRhVGFibGUsIHRhYmxlLmNvbHVtbnNbaV0ubmFtZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLmNvbHVtbnMucHVzaChkYXRhQ29sdW1uKTtcclxuICAgIC8vICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICB0YWJsZS5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YVJvdyA9IG5ldyBEYXRhUm93KCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUm93W3RhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbaV0gPSByb3dbaV07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGUucm93cy5wdXNoKGRhdGFSb3cpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRzKVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pLlxyXG4gICAgLy8gICAgZmFpbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgcHJvbWlzZS5yZWplY3QoXCLQvtGI0LjQsdC60LAgY29ubmVjdGlvbiBzaWduYWxSXCIpO1xyXG4gICAgLy8gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCBlbnVtIENvbHVtbkRhdGFUeXBlIHsgU3RyaW5nLCBOdW1iZXIsIERhdGEgfVxyXG5cclxuLy9leHBvcnQgdHlwZSBEYXRhVHlwZSA9IHN0cmluZyB8IG51bWJlcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGUge1xyXG4gICAgY29sdW1uczogQXJyYXk8RGF0YUNvbHVtbj47XHJcbiAgICByb3dzOiBBcnJheTxEYXRhUm93PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXTtcclxuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFDb2x1bW4ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgLy9kYXRhVHlwZTogQ29sdW1uRGF0YVR5cGU7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGFibGU6IERhdGFUYWJsZSwgbmFtZT86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFSb3cge1xyXG4gICAgW2luZGV4OiBzdHJpbmddOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGFibGU6IERhdGFUYWJsZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKGNvbHVtbkluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA8IDAgfHwgY29sdW1uSW5kZXggPj0gdGhpcy50YWJsZS5jb2x1bW5zLmxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgXCJEYXRhUm93LmdldFZhbHVlKFwiICsgY29sdW1uSW5kZXggKyBcIik6IGNvbHVtbkluZGV4IG91dCBvZiByYW5nZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gW3RoaXMudGFibGUuY29sdW1uc1tjb2x1bW5JbmRleF0ubmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLy9baW5kZXg6IG51bWJlcl06IERhdGFUeXBlO1xyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9TUUwudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGlvO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpb1wiXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=