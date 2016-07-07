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
	var testBuhtaObject1_1 = __webpack_require__(12);
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
	var Layout_1 = __webpack_require__(9);
	var Fixed_1 = __webpack_require__(10);
	var Flex_1 = __webpack_require__(11);
	var testBuhtaObject1_1 = __webpack_require__(12);
	var ObjectDesigner_1 = __webpack_require__(18);
	var Desktop_1 = __webpack_require__(23);
	var Movable_1 = __webpack_require__(26);
	var App_1 = __webpack_require__(24);
	var Input_1 = __webpack_require__(17);
	var testBuhtaObject2_1 = __webpack_require__(27);
	var _ = __webpack_require__(5);
	var AutoForm_1 = __webpack_require__(20);
	var TreeGrid_1 = __webpack_require__(28);
	var TreeGridColumn_1 = __webpack_require__(30);
	var TreeGridColumns_1 = __webpack_require__(29);
	var SQL_1 = __webpack_require__(32);
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
	        SQL_1.executeSQL("select TOP 500 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
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
	var shallowCompare = __webpack_require__(6);
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
	        };
	        this.componentWillReceiveProps = function (nextProps) {
	            _this.willReceiveProps(nextProps);
	        };
	        this.shouldComponentUpdate = function (nextProps, nextState) {
	            return _this.shallowCompare(nextProps);
	        };
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
	    Component.prototype.shallowCompare = function (nextProps) {
	        //console.log("shallow-0 " + this.constructor.toString().substring(0, 30));
	        //console.time("22");
	        var ret = shallowCompare(this, nextProps, this.state);
	        //console.timeEnd("22");
	        return ret;
	    };
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

	module.exports = __webpack_require__(7);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/
	
	'use strict';
	
	var shallowEqual = __webpack_require__(8);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
	var DesignedObject_1 = __webpack_require__(13);
	var StringPropertyEditor_1 = __webpack_require__(14);
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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var BasePropertyEditor_1 = __webpack_require__(15);
	var registerPropertyEditor_1 = __webpack_require__(16);
	var Input_1 = __webpack_require__(17);
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
	var getPropertyEditor_1 = __webpack_require__(19);
	var AutoForm_1 = __webpack_require__(20);
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
/* 19 */
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
	var Tabs_1 = __webpack_require__(21);
	var Form_1 = __webpack_require__(22);
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
	            return (React.createElement(Tabs_1.Tabs, null, tabs.map(function (tab, index) {
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
	var Layout_1 = __webpack_require__(9);
	var Fixed_1 = __webpack_require__(10);
	var Flex_1 = __webpack_require__(11);
	var Tabs = (function (_super) {
	    __extends(Tabs, _super);
	    function Tabs(props, context) {
	        _super.call(this, props, context);
	        this.tabs = [];
	        this.props = props;
	    }
	    Tabs.prototype.willMount = function () {
	        var _this = this;
	        _super.prototype.willMount.call(this);
	        var tabTags = this.getChildren(Tab);
	        tabTags.forEach(function (tabTag, index) {
	            var tabProps = tabTag.props;
	            var tabInfo = {
	                title: tabProps.title,
	                content: tabProps.children,
	                isActive: index === 0
	            };
	            _this.tabs.push(tabInfo);
	        });
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
	    Tabs.prototype.setActiveTab = function (tabInfo) {
	        if (!tabInfo.isActive) {
	            this.tabs.forEach(function (tab) { return tab.isActive = false; });
	            tabInfo.isActive = true;
	            this.forceUpdate();
	        }
	    };
	    Tabs.prototype.renderTabs = function () {
	        var _this = this;
	        var list = [];
	        this.tabs.forEach(function (tabInfo, index) {
	            var className = tabInfo.isActive ? "is-active" : null;
	            var element = React.createElement("li", {className: className, key: index, onClick: function (e) { _this.setActiveTab(tabInfo); }}, React.createElement("a", null, tabInfo.title));
	            list.push(element);
	        });
	        return (React.createElement("div", {className: "tabs"}, React.createElement("ul", null, list)));
	    };
	    Tabs.prototype.renderPanels = function () {
	        var list = [];
	        this.tabs.forEach(function (tabInfo, index) {
	            var className = !tabInfo.isActive ? "is-hidden" : null;
	            var element = React.createElement("div", {className: className, key: index}, tabInfo.content);
	            list.push(element);
	        });
	        return (React.createElement("div", {ref: true}, list));
	    };
	    Tabs.prototype.render = function () {
	        var _this = this;
	        //this.addClassName("Tabs");
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
/* 23 */
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
	var App_1 = __webpack_require__(24);
	var Window_1 = __webpack_require__(25);
	var DesktopWindow = (function () {
	    function DesktopWindow(desktopState) {
	        var _this = this;
	        this.desktopState = desktopState;
	        this.title = ".";
	        this.handleMoveStart = function (e) {
	            e.bindX(_this, "left", function () {
	                _this.forceUpdate();
	            });
	            e.bindY(_this, "top", function () {
	                _this.forceUpdate();
	            });
	            _this.desktopState.activateWindow(_this.id);
	        };
	        this.handleActivate = function () {
	            _this.desktopState.activateWindow(_this.id);
	        };
	        this.handleClose = function () {
	            _this.desktopState.closeWindow(_this.id);
	        };
	        this.handleResizeRightBottomCornerStart = function (e) {
	            //let win = this.state.getWindowById(winId);
	            e.bindX(_this, "width", function () {
	                if (_this.width < _this.minWidth)
	                    _this.width = _this.minWidth;
	                _this.forceUpdate();
	            });
	            e.bindY(_this, "height", function () {
	                if (_this.height < _this.minHeight)
	                    _this.height = _this.minHeight;
	                _this.forceUpdate();
	            });
	            _this.desktopState.activateWindow(_this.id);
	        };
	        this.id = Math.random().toString(36).slice(2, 12);
	    }
	    DesktopWindow.prototype.forceUpdate = function () {
	        this.desktopState.forceUpdate();
	    };
	    return DesktopWindow;
	}());
	exports.DesktopWindow = DesktopWindow;
	var DesktopState = (function (_super) {
	    __extends(DesktopState, _super);
	    function DesktopState() {
	        _super.apply(this, arguments);
	        this.windows = []; // последнее активно
	    }
	    DesktopState.prototype.getWindowById = function (id) {
	        for (var _i = 0, _a = this.windows; _i < _a.length; _i++) {
	            var w = _a[_i];
	            if (w.id === id)
	                return w;
	        }
	        console.warn("DesktopWindow id='" + id + "' not found");
	        return null;
	    };
	    DesktopState.prototype.getWindowIndexById = function (id) {
	        return this.windows.indexOf(this.getWindowById(id));
	    };
	    DesktopState.prototype.activateWindow = function (id) {
	        var win = this.getWindowById(id);
	        if (win) {
	            _.pull(this.windows, win);
	            this.windows.push(win);
	            this.forceUpdate();
	        }
	    };
	    DesktopState.prototype.closeWindow = function (id) {
	        var win = this.getWindowById(id);
	        _.pull(this.windows, win);
	        this.forceUpdate();
	    };
	    return DesktopState;
	}(Component_1.ComponentState));
	var Desktop = (function (_super) {
	    __extends(Desktop, _super);
	    function Desktop(props, context) {
	        _super.call(this, props, context);
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
	        var newWin = new DesktopWindow(this.state);
	        newWin.content = win;
	        newWin.title = openParams.title || ".";
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
	    Desktop.prototype.render = function () {
	        var _this = this;
	        this.addClassName("desktop");
	        this.addStyles({ height: "100%" });
	        this.addStyles({ position: "relative", overflow: "auto" });
	        return (React.createElement("div", React.__spread({ref: function (e) { _this.nativeElement = e; }}, this.getRenderProps()), this.state.windows.map(function (w, index) {
	            //  console.log("render-desktop-win");
	            return (React.createElement(Window_1.Window, {key: w.id, title: w.title, top: w.top, left: w.left, width: w.width, height: w.height, right: w.right, bottom: w.bottom, onMoveStart: w.handleMoveStart, onResizeRightBottomCornerStart: w.handleResizeRightBottomCornerStart, onActivate: w.handleActivate, onClose: w.handleClose}, w.content));
	        })));
	    };
	    return Desktop;
	}(Component_1.Component));
	exports.Desktop = Desktop;


/***/ },
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Component_1 = __webpack_require__(4);
	var Layout_1 = __webpack_require__(9);
	var Fixed_1 = __webpack_require__(10);
	var Flex_1 = __webpack_require__(11);
	var Movable_1 = __webpack_require__(26);
	var Window = (function (_super) {
	    __extends(Window, _super);
	    function Window(props, context) {
	        var _this = this;
	        _super.call(this, props, context);
	        this.moveStart = function (e) {
	            if (_this.props.onMoveStart)
	                _this.props.onMoveStart(e);
	        };
	        this.resizeRightBottomCornerStart = function (e) {
	            if (_this.props.onResizeRightBottomCornerStart)
	                _this.props.onResizeRightBottomCornerStart(e);
	        };
	        this.handleOnClick = function (e) {
	            if (_this.props.onActivate)
	                _this.props.onActivate();
	        };
	        this.handleCloseButtonClick = function (e) {
	            if (_this.props.onClose)
	                _this.props.onClose();
	            e.stopPropagation();
	        };
	        this.props = props;
	    }
	    Window.prototype.shallowCompare = function (nextProps) {
	        //console.log("shallow-win -> isEqial = " + this.isPropsEqual(this.props, nextProps, ["children"]));
	        return !this.isPropsEqual(this.props, nextProps, ["children"]);
	    };
	    Window.prototype.render = function () {
	        var _this = this;
	        this.clearStyles();
	        this.addClassName("window box");
	        this.addStyles({ position: "absolute" });
	        this.addStyles({
	            top: this.props.top,
	            left: this.props.left,
	            height: this.props.height,
	            width: this.props.width,
	            right: this.props.right,
	            bottom: this.props.bottom,
	            padding: 0,
	            overflow: "hidden"
	        });
	        var headerButtonStyle = {
	            border: "0px",
	            height: "100%",
	            paddingLeft: 2,
	            paddingRight: 2,
	        };
	        //     console.log("render-win");
	        return (React.createElement("div", React.__spread({}, this.getRenderProps(), {onClick: this.handleOnClick}), React.createElement(Layout_1.Layout, {type: "column", ref: function (e) { _this.nativeElement = e; }}, React.createElement(Fixed_1.Fixed, {className: "window-header", style: { borderRadius: "5px 5px 0px 0px", position: "relative", paddingLeft: 10 }}, React.createElement("span", {className: "window-title"}, this.props.title), React.createElement(Layout_1.Layout, {type: "row"}, React.createElement(Flex_1.Flex, null, React.createElement(Movable_1.Movable, {style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, onMoveStart: this.moveStart})), React.createElement(Fixed_1.Fixed, null, React.createElement("p", {className: "control has-addons buttons-bar", style: { paddingTop: 2, paddingRight: 4 }}, React.createElement("a", {className: "button is-small minimize-button", style: headerButtonStyle}, React.createElement("span", {className: "icon is-small ", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-minus", style: { top: 3 }}))), React.createElement("a", {className: "button is-small maximize-button", style: headerButtonStyle}, React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-square-o", style: { fontWeight: "bold" }}))), React.createElement("a", {className: "button is-small close-button", style: headerButtonStyle, onClick: this.handleCloseButtonClick}, React.createElement("span", {className: "icon is-small", style: { marginLeft: 0 }}, React.createElement("i", {className: "fa fa-close", style: { top: -1 }}))))))), React.createElement(Flex_1.Flex, {style: { padding: 3, overflow: "auto", border: "solid 2px blue" }}, this.props.children), React.createElement(Movable_1.Movable, {className: "window-resizer", style: { position: "absolute", height: 10, width: 10, right: 0, bottom: 0, borderRadius: "0 0 5px 0", cursor: "se-resize" }, onMoveStart: this.resizeRightBottomCornerStart}))));
	    };
	    return Window;
	}(Component_1.Component));
	exports.Window = Window;


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
/* 27 */
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
	var StringPropertyEditor_1 = __webpack_require__(14);
	var testBuhtaObject1_1 = __webpack_require__(12);
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
/* 28 */
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
	var TreeGridColumns_1 = __webpack_require__(29);
	var TreeGridColumn_1 = __webpack_require__(30);
	var Keycode_1 = __webpack_require__(31);
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var io = __webpack_require__(33);
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
/* 33 */
/***/ function(module, exports) {

	module.exports = io;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWFiYzlkOWY1YTY2NTQ4ZWZjOTkiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvQXBwRGVzaWduZXIvQXBwRGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL34vcmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9zaGFsbG93Q29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L34vZmJqcy9saWIvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZpeGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0ZsZXgudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL1N0cmluZ1Byb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvT2JqZWN0RGVzaWduZXIvT2JqZWN0RGVzaWduZXIudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0Rlc2t0b3AvRGVza3RvcC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9XaW5kb3cvV2luZG93LnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Nb3ZhYmxlL01vdmFibGUudHN4Iiwid2VicGFjazovLy8uL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50cyIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zLnRzeCIsIndlYnBhY2s6Ly8vLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0tleUNvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NRTC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpb1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSxLQUFZLEtBQUssdUJBQU0sQ0FBTyxDQUFDO0FBQy9CLEtBQVksUUFBUSx1QkFBTSxDQUFXLENBQUM7QUFJdEMseUNBQTBCLENBQStDLENBQUM7QUFDMUUsOENBQStCLEVBQTJCLENBQUM7QUFFM0Qsb0JBQW1CO0FBQ25CLDBEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsTUFBSztBQUVMLG9CQUFtQjtBQUNuQixlQUFjO0FBQ2QscUJBQW9CO0FBQ3BCLE1BQUs7QUFFTCxTQUFRLENBQUMsTUFBTSxDQUNYLG9CQUFDLHlCQUFXLE9BQUUsRUFDZCxRQUFRLENBQUMsSUFBSSxDQUNo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Q25CLENBQUM7S0FDTCxnQkFBQztBQUFELEVBQUM7QUFSWSxrQkFBUyxZQVFyQjtBQUVEO0tBRUksMkJBQTJCO0tBQzNCLG9CQUFtQixLQUFnQixFQUFFLElBQWE7U0FBL0IsVUFBSyxHQUFMLEtBQUssQ0FBVztTQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUVyQixDQUFDO0tBQ0wsaUJBQUM7QUFBRCxFQUFDO0FBUFksbUJBQVUsYUFPdEI7QUFHRDtLQUVJLGlCQUFtQixLQUFnQjtTQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO0tBQ25DLENBQUM7S0FFRCwwQkFBUSxHQUFSLFVBQVMsV0FBbUI7U0FDeEIsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzVELE1BQU0sbUJBQW1CLEdBQUcsV0FBVyxHQUFHLDZCQUE2QixDQUFDO1NBRTVFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xELENBQUM7S0FHTCxjQUFDO0FBQUQsRUFBQztBQWJZLGdCQUFPLFVBYW5COzs7Ozs7O0FDcklELHFCIiwiZmlsZSI6Ii4vZGlzdC9CdWh0YUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOWFiYzlkOWY1YTY2NTQ4ZWZjOTlcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgSGVsbG8gfSBmcm9tIFwiLi9IZWxsb1Byb3BzXCI7XHJcbmltcG9ydCB7QXBwfSBmcm9tIFwiLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0FwcFwiO1xyXG5pbXBvcnQge0FwcERlc2lnbmVyfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0FwcERlc2lnbmVyL0FwcERlc2lnbmVyXCI7XHJcbmltcG9ydCB7VGVzdEJ1aHRhT2JqZWN0MX0gZnJvbSBcIi4uL1Rlc3QxL3Rlc3RCdWh0YU9iamVjdDFcIjtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICAgIDxIZWxsbyBjb21waWxlcj1cIlR5cGVTY3JpcHRcIiBmcmFtZXdvcms9XCJSZWFjdFwiIC8+LFxyXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpXHJcbi8vICk7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoXHJcbi8vICAgICA8QXBwLz4sXHJcbi8vICAgICBkb2N1bWVudC5ib2R5XHJcbi8vICk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8QXBwRGVzaWduZXIvPixcclxuICAgIGRvY3VtZW50LmJvZHlcclxuKTtcclxuXHJcblxyXG5sZXQgeHh4PW5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcbmxldCB4eHgxPW5ldyBUZXN0QnVodGFPYmplY3QxKCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudCwgQ29tcG9uZW50U3RhdGV9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZFwiO1xyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GbGV4XCI7XHJcblxyXG5pbXBvcnQge1Rlc3RCdWh0YU9iamVjdDF9IGZyb20gXCIuLi8uLi9UZXN0MS90ZXN0QnVodGFPYmplY3QxXCI7XHJcbmltcG9ydCB7T2JqZWN0RGVzaWduZXJ9IGZyb20gXCIuLi9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lclwiO1xyXG5pbXBvcnQge0Rlc2t0b3AsIE9wZW5XaW5kb3dQYXJhbXN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wXCI7XHJcbmltcG9ydCB7RHJhZ2dhYmxlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0RyYWdnYWJsZS9EcmFnZ2FibGVcIjtcclxuaW1wb3J0IHtNb3ZhYmxlLCBNb3ZlRXZlbnQsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZVwiO1xyXG5pbXBvcnQge0FwcCwgYXBwSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7V2luZG93fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1dpbmRvdy9XaW5kb3dcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHtJbnB1dCwgSW5wdXRUeXBlfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7SW5wdXREaXZpZGVyfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0RGl2aWRlci9JbnB1dERpdmlkZXJcIjtcclxuaW1wb3J0IHt0ZXN0QnVodGFPYmplY3QyfSBmcm9tIFwiLi4vLi4vVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MlwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtBdXRvRm9ybX0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5pbXBvcnQge1RyZWVHcmlkfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkXCI7XHJcbmltcG9ydCB7VHJlZUdyaWRDb2x1bW59IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5cIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbnN9IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvVHJlZUdyaWQvVHJlZUdyaWRDb2x1bW5zXCI7XHJcbmltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNpZ25lclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMge1xyXG4gICAgLy90ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBBcHBEZXNpZ25lclN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUge1xyXG4gICAgLy90ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwRGVzaWduZXIgZXh0ZW5kcyBDb21wb25lbnQ8QXBwRGVzaWduZXJQcm9wcywgQXBwRGVzaWduZXJTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFwcERlc2lnbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBBcHBEZXNpZ25lclN0YXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBpbml0VGVzdCgpIHtcclxuICAgIC8vICAgICB0aGlzLnRlc3RPYmplY3QubmFtZSA9IFwi0KLQtdGB0YLQvtCy0YvQuSDQvtCx0YrQtdC60YIxXCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbW92ZVN0YXJ0KGU6IE1vdmVTdGFydEV2ZW50KSB7XHJcbiAgICAgICAgZS5iaW5kWCh0aGlzLCBcInNpZGVXaWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2lkZVdpZHRoOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gICAgdGVzdE9wZW5XaW5kb3coKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCBvYmogPSB7XHJcbiAgICAgICAgLy8gICAgINCk0LDQvNC40LvQuNGPOiBcItCh0LDQstGH0LXQvdC60L7QslwiLFxyXG4gICAgICAgIC8vICAgICDQmNC80Y86IFwi0JrQvtC90YHRgtCw0L3RgtC40L1cIixcclxuICAgICAgICAvLyAgICAg0J7RgtGH0LXRgdGC0LLQvjogXCLQktC70LDQtNC40LzQuNGA0L7QstC40YdcIlxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBsZXQgd2luID1cclxuICAgICAgICAvLyAgICAgPFRhYnM+XHJcbiAgICAgICAgLy8gICAgICAgICA8VGFiIHRpdGxlPVwi0LfQsNC60LvQsNC00LrQsCAxXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dCBjYXB0aW9uPVwi0KTQsNC80LjQu9C40Y9cIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17b2JqfSBiaW5kUHJvcE5hbWU9XCLQpNCw0LzQuNC70LjRj1wiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPElucHV0IGNhcHRpb249XCLQmNC80Y9cIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17b2JqfSBiaW5kUHJvcE5hbWU9XCLQmNC80Y9cIi8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxJbnB1dERpdmlkZXIgdGl0bGU9XCLQsCDRgtC10L/QtdGA0Ywg0L7RgtGH0LXRgdGC0LLQvlwiPjwvSW5wdXREaXZpZGVyPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e29ian0gYmluZFByb3BOYW1lPVwi0J7RgtGH0LXRgdGC0LLQvlwiLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgLy8gICAgICAgICA8L1RhYj5cclxuICAgICAgICAvLyAgICAgICAgIDxUYWIgdGl0bGU9XCLQt9Cw0LrQu9Cw0LTQutCwIDJcIj4gMjIyMjIgPC9UYWI+XHJcbiAgICAgICAgLy8gICAgIDwvVGFicz47XHJcbiAgICAgICAgLy8gYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbik7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB0ZXN0T3Blbk9iamVjdERlc2lnbmVyKCkge1xyXG4gICAgICAgIGxldCB0ZXN0T2JqZWN0OiBUZXN0QnVodGFPYmplY3QxID0gbmV3IFRlc3RCdWh0YU9iamVjdDEoKTtcclxuICAgICAgICB0ZXN0T2JqZWN0LmZpcnN0TmFtZSA9IFwi0JjQs9C+0YDRjDBcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Lmxhc3ROYW1lID0gXCLQodC40LTQvtGA0LXQvdC60L4wXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdC5zdXJOYW1lID0gXCLQntC70LXQs9C+0LLQuNGHMFwiO1xyXG5cclxuLy8gICAgICAgIGxldCB3aW4gPSA8T2JqZWN0RGVzaWduZXIgb25DaGFuZ2U9eygpPT57IHdpbjJJbnN0YW5jZS5kZXNpZ25lZE9iamVjdD1udWxsOyB3aW4ySW5zdGFuY2UuZm9yY2VVcGRhdGUoKTsgY29uc29sZS5sb2coXCJ0ZXN0MzIzLWNoYW5nZVwiKX19IGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0fSBrZXk9XCIxXCI+IDwvT2JqZWN0RGVzaWduZXI+O1xyXG4gICAgICAgIGxldCB3aW4gPSA8T2JqZWN0RGVzaWduZXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpPT57IHRlc3RPYmplY3Q9Xy5jbG9uZURlZXAodGVzdE9iamVjdCk7ICB3aW4ySW5zdGFuY2UuZm9yY2VVcGRhdGUoKTsgY29uc29sZS5sb2coXCJ0ZXN0OTk5LWNoYW5nZVwiKX19XHJcbiAgICAgICAgICAgIGRlc2lnbmVkT2JqZWN0PXt0ZXN0T2JqZWN0fSBrZXk9XCIxXCI+IDwvT2JqZWN0RGVzaWduZXI+O1xyXG5cclxuICAgICAgICBsZXQgdGVzdE9iamVjdDI6IHRlc3RCdWh0YU9iamVjdDIgPSBuZXcgdGVzdEJ1aHRhT2JqZWN0MigpO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLmZpcnN0TmFtZSA9IFwi0JjQs9C+0YDRjDFcIjtcclxuICAgICAgICB0ZXN0T2JqZWN0Mi5sYXN0TmFtZSA9IFwi0KHQuNC00L7RgNC10L3QutC+MlwiO1xyXG4gICAgICAgIHRlc3RPYmplY3QyLnN1ck5hbWUgPSBcItCe0LvQtdCz0L7QstC40YcxXCI7XHJcbiAgICAgICAgdGVzdE9iamVjdDIuc2V4ID0gXCLQvNGD0LbRgdC60L7QuVwiO1xyXG5cclxuICAgICAgICBsZXQgd2luMkluc3RhbmNlOiBhbnk7XHJcblxyXG4gICAgICAgIGxldCB3aW4yID0gPE9iamVjdERlc2lnbmVyIHJlZj17IChlOmFueSkgPT4geyB3aW4ySW5zdGFuY2UgPSBlOyB9IH0gZGVzaWduZWRPYmplY3Q9e3Rlc3RPYmplY3QyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjJcIj5cclxuICAgICAgICA8L09iamVjdERlc2lnbmVyPjtcclxuXHJcbiAgICAgICAgLy9nZXRQcm9wZXJ0eUVkaXRvcnModGVzdE9iamVjdCk7XHJcbiAgICAgICAgLy9nZXRQcm9wZXJ0eUVkaXRvcnModGVzdE9iamVjdDIpO1xyXG5cclxuICAgICAgICBsZXQgd2lud2luID0gPGRpdj57d2lufXt3aW4yfTwvZGl2PjtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi0L7QutC90L4gMVwiLFxyXG4gICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICBsZWZ0OiA1MFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFwcEluc3RhbmNlLmRlc2t0b3Aub3BlbldpbmRvdyh3aW53aW4sIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGVzdEltbXV0YWJsZSgpIHtcclxuICAgICAgICAvLyAvL2xldCBmYWtlPW5ldyBUYWJsZShbXSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zdCB4eHggPSBJbW11dGFibGUuTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IG9iaiA9IHtcclxuICAgICAgICAvLyAgICAgbmFtZTogXCLQntCz0LDQvdC40LfQsNGG0LjRj1wiLFxyXG4gICAgICAgIC8vICAgICBjb2x1bW5zOiB7XCLQndC+0LzQtdGAXCI6IHtjb2xOYW1lOiBcItCd0L7QvNC10YBcIiwgdHlwZTogXCJzdHJpbmdcIn0sIFwi0J3QsNC30LLQsNC90LjQtVwiOiB7Y29sTmFtZTogXCLQndCw0LfQstCw0L3QuNC1XCIsIHR5cGU6IFwic3RyaW5nXCJ9fVxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBsZXQgb2JqSSA9IEltbXV0YWJsZS5mcm9tSlMob2JqKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIC8vbGV0IG0gPSBJbW11dGFibGUuTWFwPHN0cmluZyxudW1iZXJ8IEltbXV0YWJsZS5NYXA8bnVtYmVyLHN0cmluZz4+KCk7XHJcbiAgICAgICAgLy8gLy9sZXQgeCA9IG0uc2V0KFwiMTN5eXQzMzMzMzJcIiwgMTIpO1xyXG4gICAgICAgIC8vIC8vbGV0IHkgPSBtLnNldChcInh4eFwiLCBJbW11dGFibGUuTWFwPG51bWJlcixzdHJpbmc+KCkpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLy9sZXQgeT1tLnVwZGF0ZShcInh4eFwiLEltbXV0YWJsZS5NYXA8bnVtYmVyLHN0cmluZz4oKSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmpJLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIC8vIGxldCB4ID0gb2JqSS5nZXRJbihbJ2NvbHVtbnMnLCAn0J3QvtC80LXRgCcsICdjb2xOYW1lJ10pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgc3RyOiBzdHJpbmcgPSBcItC/0YDQuNCy0LXRglwiO1xyXG5cclxuICAgIHRlc3RBdXRvRm9ybSgpIHtcclxuICAgICAgICBsZXQgd2luMiA9XHJcbiAgICAgICAgICAgIDxBdXRvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc30gYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMVwiIGlucHV0Q2FwdGlvbj1cImVlZTFcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgaW5wdXRUYWI9XCLQv9Cw0YDQsNC80LXRgtGA0YsxXCIgaW5wdXRDYXB0aW9uPVwiZWVlMlwiIHR5cGU9e0lucHV0VHlwZS5UZXh0fSBiaW5kT2JqZWN0PXt0aGlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBpbnB1dFRhYj1cItC/0LDRgNCw0LzQtdGC0YDRizFcIiBpbnB1dENhcHRpb249XCJlZWUzXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPVwic3RyXCIvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLMlwiIGlucHV0Q2FwdGlvbj1cImVlZTRcIiB0eXBlPXtJbnB1dFR5cGUuVGV4dH0gYmluZE9iamVjdD17dGhpc31cclxuICAgICAgICAgICAgICAgICAgICAgICBiaW5kUHJvcE5hbWU9XCJzdHJcIi8+XHJcbiAgICAgICAgICAgIDwvQXV0b0Zvcm0+O1xyXG4vLyAgICAgICAgPElucHV0IGlucHV0VGFiPVwi0L/QsNGA0LDQvNC10YLRgNGLXCIgaW5wdXRDYXB0aW9uPVwiZWVlXCIgdHlwZT17SW5wdXRUeXBlLlRleHR9IGJpbmRPYmplY3Q9e3RoaXN9IGJpbmRQcm9wTmFtZT1cInN0clwiLz5cclxuXHJcbiAgICAgICAgbGV0IG9wZW5QYXJhbTogT3BlbldpbmRvd1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiYXV0byBmb3JtXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDEwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRlc3RHcmlkKCkge1xyXG4gICAgICAgIGV4ZWN1dGVTUUwoXCJzZWxlY3QgVE9QIDUwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgICAgICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhU291cmNlID0gdGFibGUucm93cy5tYXAoKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge9Ca0LvRjtGHOiByW1wi0JrQu9GO0YdcIl0sINCd0L7QvNC10YA6IHJbXCLQndC+0LzQtdGAXCJdLCDQndCw0LfQstCw0L3QuNC1OiByW1wi0J3QsNC30LLQsNC90LjQtVwiXX07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgCA9PlwiICsgdGFibGUucm93c1swXS5nZXRWYWx1ZSgxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdpbjIgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17IGRhdGFTb3VyY2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVNb2RlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeUZpZWxkTmFtZT1cItCd0L7QvNC10YBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeURlbGltaXRlcnM9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRXhwYW5kTm9kZXNUb0xldmVsPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JrQvtC70L7QvdC60LAyXCIgZmllbGROYW1lPVwi0J3QvtC80LXRgFwiIHNob3dIaWVyYXJjaHlUcmVlPXtmYWxzZX0gd2lkdGg9ezEwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlR3JpZENvbHVtbiBjYXB0aW9uPVwi0JrQvtC70L7QvdC60LAzXCIgZmllbGROYW1lPVwi0J3QsNC30LLQsNC90LjQtVwiIHNob3dIaWVyYXJjaHlUcmVlPXt0cnVlfSB3aWR0aD17MjAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmVlR3JpZENvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVHcmlkQ29sdW1uIGNhcHRpb249XCLQmtC+0LvQvtC90LrQsDFcIiBmaWVsZE5hbWU9XCLQmtC70Y7Rh1wiIHdpZHRoPXs4MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJlZUdyaWRDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmVlR3JpZENvbHVtbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyZWVHcmlkPjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgb3BlblBhcmFtOiBPcGVuV2luZG93UGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcImF1dG8gZm9ybVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcC5vcGVuV2luZG93KHdpbjIsIG9wZW5QYXJhbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJhcHAtZGVzaWduZXJcIik7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXBwIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkIGNsYXNzTmFtZT1cImhlYWRlcjFcIj5GaXhlZCBIZWFkZXI8L0ZpeGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZCBjbGFzc05hbWU9XCJzaWRlYmFyXCIgc3R5bGU9e3t3aWR0aDp0aGlzLnNpZGVXaWR0aH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpeGVkIFNpZGViYXIgMTIzPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0T3BlbldpbmRvdygpOyB9fT4gdGVzdCBvcGVuIHdpbmRvdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGVzdE9wZW5PYmplY3REZXNpZ25lcigpOyB9fT5vcGVuIGRlc2lnbmVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0SW1tdXRhYmxlKCk7IH19PnRlc3RJbW11dGFibGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnRlc3RBdXRvRm9ybSgpOyB9fT50ZXN0IGF1dG9mb3JtPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy50ZXN0R3JpZCgpOyB9fT50ZXN0IEdSSUQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBjbGFzc05hbWU9XCJYWFhjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlIG9uTW92ZVN0YXJ0PXt0aGlzLm1vdmVTdGFydC5iaW5kKHRoaXMpfT5NT1Y8L01vdmFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVza3RvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvQXBwPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9BcHBEZXNpZ25lci9BcHBEZXNpZ25lci50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBzaGFsbG93Q29tcGFyZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtc2hhbGxvdy1jb21wYXJlXCIpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBYT25DbGlja1Byb3BzIHtcclxuICAgIG9uQ2xpY2s/OiBSZWFjdC5SZWFjdEV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRQcm9wcyBleHRlbmRzIFJlYWN0LkNsYXNzQXR0cmlidXRlczxFbGVtZW50PiB7XHJcbiAgICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50OiBDb21wb25lbnQ8YW55LGFueT4pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9yY2VVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvL2NsaWNrQ291bnQ6IG51bWJlcjtcclxuICAgIC8vIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsIFMgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UCwgUz4ge1xyXG5cclxuICAgIHN0YXRpYyBwbHVnaW5zOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHBsdWdpbnM6IGFueVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFAsIGNvbnRleHQ6IGFueSAvKnN0YXRlQ2xhc3M/OiBGdW5jdGlvbiovKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHJcbiAgICAgICAgLy8gLy8odGhpcyBhcyBhbnkpW1wic3RhdGVcIl0gPSB7fTtcclxuICAgICAgICAvLyBpZiAoc3RhdGVDbGFzcylcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlQ2xhc3MoKTtcclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUgPSB7fSBhcyBTO1xyXG5cclxuICAgICAgICBDb21wb25lbnQucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwbHVnSW5zdGFuY2U6IGFueSA9IG5ldyBwbHVnKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChwbHVnSW5zdGFuY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdGl2ZUVsZW1lbnQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJQcm9wczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIHJlbmRlclN0eWxlczogYW55ID0ge307XHJcblxyXG4gICAgYWRkUHJvcHMocHJvcHM6IE9iamVjdCkge1xyXG4gICAgICAgIF8uYXNzaWduV2l0aCh0aGlzLnJlbmRlclByb3BzLCBwcm9wcywgKG9iamVjdFZhbHVlOiBhbnksIHNvdXJjZVZhbHVlOiBhbnksIGtleT86IHN0cmluZyk9PiB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiY2xhc3NcIiB8fCBrZXkgPT09IFwiY2xhc3NOYW1lXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiaW52YWxpZCBwcm9wZXJ0eSAnXCIgKyBrZXkgKyBcIicsIHVzZSBmdW5jdGlvbnMgYWRkQ2xhc3NOYW1lKCksIHRvZ2dsZUNsYXNzTmFtZSgpXCIpO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInN0eWxlXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiaW52YWxpZCBwcm9wZXJ0eSAnXCIgKyBrZXkgKyBcIicsIHVzZSBmdW5jdGlvbnMgYWRkU3R5bGVzKCksIHJlbW92ZVN0eWxlKClcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdHlsZXMoc3R5bGVzOiBPYmplY3QpIHtcclxuICAgICAgICBfLmFzc2lnbih0aGlzLnJlbmRlclN0eWxlcywgc3R5bGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclN0eWxlcygpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclN0eWxlcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVN0eWxlKHN0eWxlOiBzdHJpbmcpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5yZW5kZXJTdHlsZXNbc3R5bGVdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVN0eWxlcyhzdHlsZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgc3R5bGVzLmZvckVhY2goKHN0eWxlKT0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVuZGVyU3R5bGVzW3N0eWxlXTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy5kaWRNb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaWRNb3VudCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKChwbHVnKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdWcud2lsbE1vdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsTW91bnQoKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHM6IFApID0+IHtcclxuICAgICAgICB0aGlzLndpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIHdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlzUHJvcHNFcXVhbChvYmoxOiBhbnksIG9iajI6IGFueSwgZXhjbHVkZVByb3BzPzogc3RyaW5nW10pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgLy9Mb29wIHRocm91Z2ggcHJvcGVydGllcyBpbiBvYmplY3QgMVxyXG4gICAgICAgIGZvciAobGV0IHAgaW4gb2JqMSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVQcm9wcyAmJiBleGNsdWRlUHJvcHMuaW5kZXhPZihwKSA+PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIC8vQ2hlY2sgcHJvcGVydHkgZXhpc3RzIG9uIGJvdGggb2JqZWN0c1xyXG4gICAgICAgICAgICBpZiAob2JqMS5oYXNPd25Qcm9wZXJ0eShwKSAhPT0gb2JqMi5oYXNPd25Qcm9wZXJ0eShwKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9iajFbcF0gIT09IG9iajJbcF0pIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIxIG5vdCBlcXVhbCBcIiArIHApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gc3dpdGNoICh0eXBlb2YgKG9iajFbcF0pKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvL0RlZXAgY29tcGFyZSBvYmplY3RzXHJcbiAgICAgICAgICAgIC8vICAgICBjYXNlICdvYmplY3QnOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmICghT2JqZWN0LmNvbXBhcmUob2JqMVtwXSwgb2JqMltwXSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIC8vQ29tcGFyZSBmdW5jdGlvbiBjb2RlXHJcbiAgICAgICAgICAgIC8vICAgICBjYXNlICdmdW5jdGlvbic6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHR5cGVvZiAob2JqMltwXSkgPT0gJ3VuZGVmaW5lZCcgfHwgKHAgIT0gJ2NvbXBhcmUnICYmIG9iajFbcF0udG9TdHJpbmcoKSAhPSBvYmoyW3BdLnRvU3RyaW5nKCkpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICAvL0NvbXBhcmUgdmFsdWVzXHJcbiAgICAgICAgICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChvYmoxW3BdICE9PSBvYmoyW3BdKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ2hlY2sgb2JqZWN0IDIgZm9yIGFueSBleHRyYSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgZm9yIChsZXQgcCBpbiBvYmoyKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKG9iajFbcF0pID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiAob2JqMltwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIyIG5vdCBlcXVhbCBcIiArIHApO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmoxKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqMik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdGVjdGVkIHNoYWxsb3dDb21wYXJlKG5leHRQcm9wczogUCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzaGFsbG93LTAgXCIgKyB0aGlzLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDMwKSk7XHJcbiAgICAgICAgLy9jb25zb2xlLnRpbWUoXCIyMlwiKTtcclxuICAgICAgICBsZXQgcmV0ID0gc2hhbGxvd0NvbXBhcmUodGhpcywgbmV4dFByb3BzLCB0aGlzLnN0YXRlKTtcclxuICAgICAgICAvL2NvbnNvbGUudGltZUVuZChcIjIyXCIpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAobmV4dFByb3BzOiBQLCBuZXh0U3RhdGU6IFMpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGFsbG93Q29tcGFyZShuZXh0UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHM6IFAsIHByZXZTdGF0ZTogUywgcHJldkNvbnRleHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBwcmV2Q29udGV4dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RlY3RlZCBkaWRVcGRhdGUocHJldlByb3BzOiBQLCBwcmV2U3RhdGU6IFMsIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaCgocGx1ZykgPT4ge1xyXG4gICAgICAgICAgICBwbHVnLndpbGxSZWNlaXZlUHJvcHMocHJldlByb3BzLCBwcmV2U3RhdGUsIHByZXZDb250ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLmZvckVhY2goKHBsdWcpID0+IHtcclxuICAgICAgICAgICAgcGx1Zy53aWxsVW5tb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWxsVW5tb3VudCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRDbGFzc05hbWUoY2xhc3NOYW1lczogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZXMpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckNsYXNzZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNsYXNzTmFtZShib29sVmFsdWU6IGJvb2xlYW4sIHRydWVDbGFzc05hbWVzOiBzdHJpbmcsIGZhbHNlQ2xhc3NOYW1lcz86IHN0cmluZykge1xyXG4gICAgICAgIGlmIChib29sVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUodHJ1ZUNsYXNzTmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoZmFsc2VDbGFzc05hbWVzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzc05hbWUoZmFsc2VDbGFzc05hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3NOYW1lKHRydWVDbGFzc05hbWVzKTtcclxuICAgICAgICAgICAgaWYgKGZhbHNlQ2xhc3NOYW1lcylcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKGZhbHNlQ2xhc3NOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWVzOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lcylcclxuICAgICAgICAgICAgY2xhc3NOYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNsYXNzZXMuc3BsaWNlKHRoaXMucmVuZGVyQ2xhc3Nlcy5pbmRleE9mKG5hbWUpLCAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJDbGFzc2VzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNsYXNzZXMuam9pbihcIiBcIik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZW5kZXJQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnJlbmRlclByb3BzLmNsYXNzTmFtZSA9IHRoaXMucmVuZGVyQ2xhc3NOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9wcy5zdHlsZSA9IHRoaXMucmVuZGVyU3R5bGVzO1xyXG4gICAgICAgIF8uYXNzaWduKHRoaXMucmVuZGVyUHJvcHMuc3R5bGUsIHRoaXMucHJvcHMuc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclByb3BzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBnZXRSZWFjdEVsZW1lbnRDbGFzc05hbWUoZWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC50eXBlID8gZWxlbWVudC50eXBlLnRvU3RyaW5nKCkuc3BsaXQoXCIoXCIpWzBdLnNwbGl0KFwiIFwiKVsxXSA6IFwiXCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW4oY2hpbGRUeXBlOiBGdW5jdGlvbik6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkVHlwZSA9PT0gY2hpbGQudHlwZSlcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkcmVuT2ZQcm9wcyhwcm9wczogYW55LCBjaGlsZFR5cGU6IEZ1bmN0aW9uKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkVHlwZSA9PT0gY2hpbGQudHlwZSlcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmVuZGVyKCkge1xyXG4gICAgLy8gICAgcmV0dXJuIChuZXcpXHJcbiAgICAvLyAgICAvLyAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSB9PlxyXG4gICAgLy8gICAgLy8gICAgICAgIENvbXBvbmVudCBmcm9tIHt0aGlzLnByb3BzLmNvbXBpbGVyfSBhbmQge3RoaXMucHJvcHMuZnJhbWV3b3JrfSFjbGlja0NvdW50PXt0aGlzLnN0YXRlLmNsaWNrQ291bnR9XHJcbiAgICAvLyAgICAvLyAgICA8L2J1dHRvbj5cclxuICAgIC8vICAgIC8vKTtcclxuICAgIC8vfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudC50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9cIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QvbGliL3NoYWxsb3dDb21wYXJlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYWRkb25zLXNoYWxsb3ctY29tcGFyZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiogQHByb3ZpZGVzTW9kdWxlIHNoYWxsb3dDb21wYXJlXG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzaGFsbG93RXF1YWwgPSByZXF1aXJlKCdmYmpzL2xpYi9zaGFsbG93RXF1YWwnKTtcblxuLyoqXG4gKiBEb2VzIGEgc2hhbGxvdyBjb21wYXJpc29uIGZvciBwcm9wcyBhbmQgc3RhdGUuXG4gKiBTZWUgUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluXG4gKiBTZWUgYWxzbyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3NoYWxsb3ctY29tcGFyZS5odG1sXG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dDb21wYXJlKGluc3RhbmNlLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICByZXR1cm4gIXNoYWxsb3dFcXVhbChpbnN0YW5jZS5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKGluc3RhbmNlLnN0YXRlLCBuZXh0U3RhdGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYWxsb3dDb21wYXJlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9zaGFsbG93Q29tcGFyZS5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICogXG4gKi9cblxuLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgaWYgKHggPT09IHkpIHtcbiAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBlcXVhbGl0eSBieSBpdGVyYXRpbmcgdGhyb3VnaCBrZXlzIG9uIGFuIG9iamVjdCBhbmQgcmV0dXJuaW5nIGZhbHNlXG4gKiB3aGVuIGFueSBrZXkgaGFzIHZhbHVlcyB3aGljaCBhcmUgbm90IHN0cmljdGx5IGVxdWFsIGJldHdlZW4gdGhlIGFyZ3VtZW50cy5cbiAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSB2YWx1ZXMgb2YgYWxsIGtleXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuICovXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYWxsb3dFcXVhbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9+L2ZianMvbGliL3NoYWxsb3dFcXVhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG4gICAgdHlwZTogXCJjb2x1bW5cIiB8IFwicm93XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQ8TGF5b3V0UHJvcHMsYW55PiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdHlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJMYXlvdXRcIik7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZTogYW55ID0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3R5bGUuZmxleERpcmVjdGlvbiA9ICh0aGlzLnByb3BzLnR5cGUgPT09IFwiY29sdW1uXCIpID8gXCJjb2x1bW5cIiA6IFwicm93XCI7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFByb3BzKHtvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2t9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfSA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9MYXlvdXRQYW5lL0xheW91dC50c3hcbiAqKi8iLCJcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRQcm9wc30gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaXhlZFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMge1xyXG4gICAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeGVkIGV4dGVuZHMgQ29tcG9uZW50PEZpeGVkUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIkZpeGVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyhzdHlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0gPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvTGF5b3V0UGFuZS9GaXhlZC50c3hcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGbGV4UHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyB7XHJcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGbGV4IGV4dGVuZHMgQ29tcG9uZW50PEZsZXhQcm9wcyxhbnk+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJGbGV4XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9ID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0xheW91dFBhbmUvRmxleC50c3hcbiAqKi8iLCJpbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL0Rlc2lnbmVkT2JqZWN0XCI7XHJcbmltcG9ydCB7U3RyaW5nRWRpdG9yfSBmcm9tIFwiLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RCdWh0YU9iamVjdDEgZXh0ZW5kcyBEZXNpZ25lZE9iamVjdCB7XHJcblxyXG4gICAgQFN0cmluZ0VkaXRvcih7XHJcbiAgICAgICAgaW5wdXRDYXB0aW9uOiBcItCk0LDQvNC40LvQuNGPXCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCk0LDQvNC40LvQuNGPINCw0LHQvtC90LXQvdGC0LBcIlxyXG4gICAgfSlcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQmNC80Y9cIixcclxuICAgICAgICBpbnB1dFRhYjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0R3JvdXA6IFwi0J7RgdC90L7QstC90LDRj1wiLFxyXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb246IFwi0JjQvNGPXCJcclxuICAgIH0pXHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBTdHJpbmdFZGl0b3Ioe1xyXG4gICAgICAgIGlucHV0Q2FwdGlvbjogXCLQntGC0YfQtdGB0YLQstC+XCIsXHJcbiAgICAgICAgaW5wdXRUYWI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dEdyb3VwOiBcItCe0YHQvdC+0LLQvdCw0Y9cIixcclxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uOiBcItCe0YLRh9C10YHRgtCy0L4g0LDQsdC+0L3QtdC90YLQsFwiXHJcbiAgICB9KVxyXG4gICAgc3VyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0MS50c1xuICoqLyIsIu+7v2ltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvLCBCYXNlUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25lZE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICAkJHVud2F0Y2hlZFByb3BzOiBzdHJpbmdbXSA9IFtcInByb3BlcnR5RWRpdG9yc1wiLCBcIiQkdW53YXRjaGVkUHJvcHNcIl07XHJcblxyXG4gICAgLy8gaWQ6IHN0cmluZztcclxuICAgIC8vIG5hbWU6IHN0cmluZztcclxuICAgIC8vIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgLy8gaW5oZXJpdEZyb206IHN0cmluZztcclxuICAgIC8vIG1vZHVsZU5hbWU6IHN0cmluZztcclxuICAgIC8vIHJlZmVyZW5jZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgICAvL3ByaXZhdGUgc3RhdGljIHByb3BlcnR5RWRpdG9yczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBQcm9wZXJ0eUVkaXRvckluZm87IH0gPSB7fTtcclxuXHJcbiAgICAvLyBzdGF0aWMgcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWU6IHN0cmluZyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5UGFnZTogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlHcm91cDogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlEZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogdHlwZW9mIERlc2lnbmVkT2JqZWN0LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yVHlwZTogdHlwZW9mIEJhc2VQcm9wZXJ0eUVkaXRvcixcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VHlwZTogdHlwZW9mIE9iamVjdCB8IHR5cGVvZiBTdHJpbmcpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IGluZm86IFByb3BlcnR5RWRpdG9ySW5mbyA9IHtcclxuICAgIC8vICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAvLyAgICAgICAgIHByb3BlcnR5UGFnZTogcHJvcGVydHlQYWdlLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eUdyb3VwOiBwcm9wZXJ0eUdyb3VwLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eURlc2NyaXB0aW9uOiBwcm9wZXJ0eURlc2NyaXB0aW9uLFxyXG4gICAgLy8gICAgICAgICBvYmplY3RUeXBlOiBvYmplY3RUeXBlLFxyXG4gICAgLy8gICAgICAgICBlZGl0b3JUeXBlOiBlZGl0b3JUeXBlLFxyXG4gICAgLy8gICAgICAgICBwcm9wZXJ0eVR5cGU6IHByb3BlcnR5VHlwZSxcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIERlc2lnbmVkT2JqZWN0LnByb3BlcnR5RWRpdG9yc1twcm9wZXJ0eU5hbWVdID0gaW5mbztcclxuICAgIC8vXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlclByb3BlcnR5RWRpdG9yIFwiICsgcHJvcGVydHlOYW1lKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0IHByb3BlcnR5RWRpdG9ycygpOnsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogUHJvcGVydHlFZGl0b3JJbmZvOyB9e1xyXG4gICAgLy8gICAgIHJldHVybiAoRGVzaWduZWRPYmplY3QgYXMgYW55KS4kJHByb3BlcnR5RWRpdG9ycztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9ycygpIHtcclxuICAgIC8vICAgICB0aGlzLnByb3BlcnR5RWRpdG9ycy5sZW5ndGggPSAwO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyByZWdpc3RlclByb3BlcnR5RWRpdG9yKHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eUVkaXRvcjogQmFzZVByb3BlcnR5RWRpdG9yKSB7XHJcbiAgICAvLyAgICAgcHJvcGVydHlFZGl0b3IuZGVzaWduZWRPYmplY3QgPSB0aGlzO1xyXG4gICAgLy8gICAgIHByb3BlcnR5RWRpdG9yLnByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZTtcclxuICAgIC8vICAgICB0aGlzLnByb3BlcnR5RWRpdG9ycy5wdXNoKHByb3BlcnR5RWRpdG9yKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBlbWl0VHNDb2RlKCk6IHN0cmluZyB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMucmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcnMoKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IHRzQ29kZSA9IG5ldyBUc0NvZGUodGhpcy5tb2R1bGVOYW1lLCB0aGlzLmNsYXNzTmFtZSwgdGhpcy5pbmhlcml0RnJvbSwgdGhpcy5yZWZlcmVuY2VzKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGVkaXRvci5kZXNpZ25lZE9iamVjdCA9IHRoaXM7XHJcbiAgICAvLyAgICAgICAgIGVkaXRvci5lbWl0VHNDb2RlKHRzQ29kZSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiB0c0NvZGUuZ2V0Q29kZSgpO1xyXG4gICAgLy8gfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9EZXNpZ25lZE9iamVjdC50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCYXNlUHJvcGVydHlFZGl0b3J9IGZyb20gXCIuL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtyZWdpc3RlclByb3BlcnR5RWRpdG9yfSBmcm9tIFwiLi9yZWdpc3RlclByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7SW5wdXRUeXBlLCBJbnB1dH0gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1Byb3BlcnR5RWRpdG9yIGV4dGVuZHMgQmFzZVByb3BlcnR5RWRpdG9yIHtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSB7XHJcbiAgICAgICAvLyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlID09PSBcIiArIHRoaXMucHJvcHMucHJvcGVydHlOYW1lICsgXCIgXCIgKyB0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcHMucHJvcGVydHlOYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGF1dG9Gb3JtQ29udHJvbFByb3BzOiBBdXRvRm9ybUNvbnRyb2xQcm9wcyA9IHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiB0aGlzLnByb3BzLmlucHV0Q2FwdGlvbixcclxuICAgICAgICAgICAgaW5wdXRUYWI6IHRoaXMucHJvcHMuaW5wdXRUYWIsXHJcbiAgICAgICAgICAgIGlucHV0R3JvdXA6IHRoaXMucHJvcHMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5pbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyhhdXRvRm9ybUNvbnRyb2xQcm9wcyk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT17SW5wdXRUeXBlLlRleHR9XHJcbiAgICAgICAgICAgICAgICBiaW5kT2JqZWN0PXt0aGlzLnByb3BzLmRlc2lnbmVkT2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgYmluZFByb3BOYW1lPXt0aGlzLnByb3BzLnByb3BlcnR5TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdFZGl0b3JQYXJhbXMgZXh0ZW5kcyBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RyaW5nRWRpdG9yKHBhcmFtczogQXV0b0Zvcm1Db250cm9sUHJvcHMpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyh7dGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGNvbnN0cjp0YXJnZXQuY29uc3RydWN0b3J9KTtcclxuICAgICAgICByZWdpc3RlclByb3BlcnR5RWRpdG9yKHtcclxuICAgICAgICAgICAgaW5wdXRDYXB0aW9uOiBwYXJhbXMuaW5wdXRDYXB0aW9uLFxyXG4gICAgICAgICAgICBpbnB1dFRhYjogcGFyYW1zLmlucHV0VGFiLFxyXG4gICAgICAgICAgICBpbnB1dEdyb3VwOiBwYXJhbXMuaW5wdXRHcm91cCxcclxuICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogcGFyYW1zLmlucHV0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICBvYmplY3RUeXBlOiB0YXJnZXQuY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgIGVkaXRvclR5cGU6IFN0cmluZ1Byb3BlcnR5RWRpdG9yLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9TdHJpbmdQcm9wZXJ0eUVkaXRvci50c3hcbiAqKi8iLCLvu79pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uLy4uL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BdXRvRm9ybS9BdXRvRm9ybVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eUVkaXRvckluZm8gZXh0ZW5kcyBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICAgIG9iamVjdFR5cGU6IHR5cGVvZiBEZXNpZ25lZE9iamVjdDtcclxuICAgIGVkaXRvclR5cGU6IHR5cGVvZiBCYXNlUHJvcGVydHlFZGl0b3I7XHJcbiAgICBwcm9wZXJ0eVR5cGU6IHR5cGVvZiBPYmplY3QgfCB0eXBlb2YgU3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VQcm9wZXJ0eUVkaXRvclByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsIFByb3BlcnR5RWRpdG9ySW5mbyB7XHJcbiAgICBkZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgb25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VQcm9wZXJ0eUVkaXRvciBleHRlbmRzIENvbXBvbmVudDxCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQmFzZVByb3BlcnR5RWRpdG9yUHJvcHMsIGNvbnRleHQ6YW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm9wZXJ0eU5hbWU6IHN0cmluZztcclxuICAgIC8vIGRlc2lnbmVkT2JqZWN0OiBEZXNpZ25lZE9iamVjdDtcclxuXHJcbiAgICAvLyBnZXRQcm9wZXJ0eVR5cGUoKTogc3RyaW5nIHtcclxuICAgIC8vICAgICByZXR1cm4gXCJPYmplY3RcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyByZW5kZXJFZGl0b3IoaW5kZXg6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcclxuICAgIC8vICAgICByZXR1cm4gKDxzcGFuPmVkaXRvciBub3QgZGVmaW5lZDwvc3Bhbj4pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuICg8c3Bhbj5wcm9wZXJ0eSBlZGl0b3Igbm90IGRlZmluZWQ8L3NwYW4+KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gZW1pdFRzQ29kZSh0c0NvZGU6IFRzQ29kZSwgYXNzaWduTmFtZTogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgdHNDb2RlLmFkZFByb3BlcnR5KGFzc2lnbk5hbWUsIHRoaXMucHJvcGVydHlOYW1lLCB0aGlzLmdldFByb3BlcnR5VHlwZSgpLCB0aGlzLmRlc2lnbmVkT2JqZWN0W3RoaXMucHJvcGVydHlOYW1lXSk7XHJcbiAgICAvLyB9XHJcblxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvQmFzZVByb3BlcnR5RWRpdG9yLnRzeFxuICoqLyIsImltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJQcm9wZXJ0eUVkaXRvcihlZGl0b3I6IFByb3BlcnR5RWRpdG9ySW5mbykge1xyXG5cclxuICAgIGxldCBvYmpUeXBlOiBhbnkgPSBlZGl0b3Iub2JqZWN0VHlwZTtcclxuXHJcbiAgICBpZiAoIW9ialR5cGUuJCRwcm9wZXJ0eUVkaXRvcnMpXHJcbiAgICAgICAgb2JqVHlwZS4kJHByb3BlcnR5RWRpdG9ycyA9IFtdO1xyXG5cclxuICAgIG9ialR5cGUuJCRwcm9wZXJ0eUVkaXRvcnMucHVzaChlZGl0b3IpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJyZWdpc3RlclByb3BlcnR5RWRpdG9yIFwiICsgZWRpdG9yLnByb3BlcnR5TmFtZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVkaXRvcik7XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9yZWdpc3RlclByb3BlcnR5RWRpdG9yLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dG9Gb3JtQ29udHJvbFByb3BzfSBmcm9tIFwiLi4vQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBlbnVtIElucHV0VHlwZSB7VGV4dCwgTnVtYmVyLCBEYXRlIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzLCBBdXRvRm9ybUNvbnRyb2xQcm9wcyB7XHJcbiAgICB0eXBlOiBJbnB1dFR5cGU7XHJcbiAgICBiaW5kT2JqZWN0OiBhbnk7XHJcbiAgICBiaW5kUHJvcE5hbWU6IHN0cmluZztcclxuICAgIG1heFdpZHRoPzogbnVtYmVyO1xyXG4gICAgb25DbGljaz86IFJlYWN0LlJlYWN0RXZlbnRIYW5kbGVyO1xyXG4gICAgcGxhY2VIb2xkZXI/OiBzdHJpbmc7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SW5wdXRQcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSW5wdXRQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBJbnB1dFR5cGUuVGV4dDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRleHQoKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93ICBcIklucHV0LnJlbmRlcigpOj0+IHVua25vd24gSW5wdXRUeXBlICdcIiArIHRoaXMucHJvcHMudHlwZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXh0ID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdCAmJiB0aGlzLnByb3BzLmJpbmRQcm9wTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmJpbmRPYmplY3RbdGhpcy5wcm9wcy5iaW5kUHJvcE5hbWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBcIjx1bmJpbmRlZD5cIjtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmluZE9iamVjdCAmJiB0aGlzLnByb3BzLmJpbmRQcm9wTmFtZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iaW5kT2JqZWN0W3RoaXMucHJvcHMuYmluZFByb3BOYW1lXSA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlclRleHQoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R5bGVzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJpbnB1dFwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh0aGlzLnByb3BzLnN0eWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRUZXh0KCl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL0lucHV0L0lucHV0LnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vYnVodGEtY29yZS9Db21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Rlc2lnbmVkT2JqZWN0fSBmcm9tIFwiLi4vRGVzaWduZWRPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlUHJvcGVydHlFZGl0b3JQcm9wcywgUHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi4vUHJvcGVydHlFZGl0b3JzL0Jhc2VQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge2dldFByb3BlcnR5RWRpdG9yc30gZnJvbSBcIi4uL1Byb3BlcnR5RWRpdG9ycy9nZXRQcm9wZXJ0eUVkaXRvclwiO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvRm9ybS9Gb3JtXCI7XHJcbmltcG9ydCB7QXV0b0Zvcm19IGZyb20gXCIuLi8uLi9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm1cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdERlc2lnbmVyUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyB7XHJcbiAgICBkZXNpZ25lZE9iamVjdDogRGVzaWduZWRPYmplY3Q7XHJcbiAgICBvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3REZXNpZ25lciBleHRlbmRzIENvbXBvbmVudDxPYmplY3REZXNpZ25lclByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBPYmplY3REZXNpZ25lclByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb3BlcnR5RGVzaWduZXJzKCk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIGxldCByZXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgZ2V0UHJvcGVydHlFZGl0b3JzKHRoaXMucHJvcHMuZGVzaWduZWRPYmplY3QpLmZvckVhY2goKHByb3BJbmZvOiBQcm9wZXJ0eUVkaXRvckluZm8sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9wSW5mbyk7XHJcbiAgICAgICAgICAgIGxldCBlZGl0b3JQcm9wczogQmFzZVByb3BlcnR5RWRpdG9yUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgICBkZXNpZ25lZE9iamVjdDogdGhpcy5wcm9wcy5kZXNpZ25lZE9iamVjdCxcclxuICAgICAgICAgICAgICAgIC8vcHJvcGVydHlFZGl0b3JJbmZvOiBwcm9wSW5mbyxcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDRjdGC0L4g0LjQtyBwcm9wSW5mbzogUHJvcGVydHlFZGl0b3JJbmZvLCDQt9Cw0L/QvtC70Y/QtdGC0YHRjyDQtNCw0LvQtdC1INGH0LXRgNC10LcgXy5hc3NpZ25cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlZGl0b3JUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlUeXBlOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBfLmFzc2lnbihlZGl0b3JQcm9wcywgcHJvcEluZm8pO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVkaXRvclByb3BzKTtcclxuXHJcbiAgICAgICAgICAgIHJldC5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcEluZm8uZWRpdG9yVHlwZSwgZWRpdG9yUHJvcHMsIG51bGwpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJvYmplY3QtZGVzaWduZXJcIik7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9wcyh7b25DaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2V9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEF1dG9Gb3JtIHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0IGRlc2lnbmVyXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQcm9wZXJ0eURlc2lnbmVycygpfVxyXG4gICAgICAgICAgICA8L0F1dG9Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWFwcC1kZXNpZ25lci9PYmplY3REZXNpZ25lci9PYmplY3REZXNpZ25lci50c3hcbiAqKi8iLCJpbXBvcnQge1Byb3BlcnR5RWRpdG9ySW5mb30gZnJvbSBcIi4vQmFzZVByb3BlcnR5RWRpdG9yXCI7XHJcbmltcG9ydCB7RGVzaWduZWRPYmplY3R9IGZyb20gXCIuLi9EZXNpZ25lZE9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5RWRpdG9ycyhvYmo6IERlc2lnbmVkT2JqZWN0KTogUHJvcGVydHlFZGl0b3JJbmZvW10ge1xyXG5cclxuICAgIGxldCBlZGl0b3JzID0gKG9iai5jb25zdHJ1Y3RvciBhcyBhbnkpLiQkcHJvcGVydHlFZGl0b3JzIGFzIFByb3BlcnR5RWRpdG9ySW5mb1tdO1xyXG5cclxuICAgIGVkaXRvcnMgPSBlZGl0b3JzLmZpbHRlcigoZWR0KSA9PiBvYmogaW5zdGFuY2VvZiBlZHQub2JqZWN0VHlwZSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcImdldFByb3BlcnR5RWRpdG9yc1wiKTtcclxuICAgIC8vY29uc29sZS5sb2coZWRpdG9ycyk7XHJcbiAgICByZXR1cm4gZWRpdG9ycztcclxuXHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1hcHAtZGVzaWduZXIvUHJvcGVydHlFZGl0b3JzL2dldFByb3BlcnR5RWRpdG9yLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFByb3BzfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGFicywgVGFifSBmcm9tIFwiLi4vVGFicy9UYWJzXCI7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSBcIi4uL0Zvcm0vRm9ybVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b0Zvcm1Db250cm9sUHJvcHMge1xyXG4gICAgaW5wdXRDYXB0aW9uPzogc3RyaW5nO1xyXG4gICAgaW5wdXRUYWI/OiBzdHJpbmc7XHJcbiAgICBpbnB1dEdyb3VwPzogc3RyaW5nO1xyXG4gICAgaW5wdXREZXNjcmlwdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvRm9ybVByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMge1xyXG4gICAgaW5wdXRzPzogQXV0b0Zvcm1Db250cm9sUHJvcHNbXTtcclxufVxyXG5cclxuY29uc3QgZW1wdHlUYWJOYW1lID0gXCLQt9Cw0LrQu9Cw0LTQutCwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0b0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QXV0b0Zvcm1Qcm9wcywgYW55PiB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW5wdXRzKCk6IEF1dG9Gb3JtQ29udHJvbFByb3BzW10ge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGM6IGFueSkgPT4gYy5wcm9wcylcclxuICAgICAgICAgICAgLm1hcCgoYzogYW55KSA9PiBjLnByb3BzKSBhcyBBdXRvRm9ybUNvbnRyb2xQcm9wc1tdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFic0xpc3QoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBfLnVuaXEoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRzKCkubWFwPHN0cmluZz4oKGlucHV0OiBBdXRvRm9ybUNvbnRyb2xQcm9wcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmlucHV0VGFiIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYklucHV0cyh0YWI6IHN0cmluZyk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMucHJvcHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAoKChjLnByb3BzIGFzIEF1dG9Gb3JtQ29udHJvbFByb3BzKS5pbnB1dFRhYiB8fCBcIlwiKSA9PT0gdGFiKTtcclxuICAgICAgICAgICAgfSkgYXMgSlNYLkVsZW1lbnRbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclRhYih0YWI6IHN0cmluZyk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gPEZvcm0+e3RoaXMuZ2V0VGFiSW5wdXRzKHRhYil9PC9Gb3JtPjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlICByZW5kZXJUYWJzKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFic0xpc3QoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRhYnMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nZXRJbnB1dHMoKSk7XHJcblxyXG4gICAgICAgIGlmICh0YWJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFicy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGFiKHRhYnNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGFicy5tYXA8SlNYLkVsZW1lbnQ+KCh0YWIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGtleT17aW5kZXh9IHRpdGxlPXt0YWIgPT09IFwiXCIgPyBlbXB0eVRhYk5hbWUgOiB0YWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYih0YWIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJhdXRvLWZvcm1cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLWF1dG8tZm9ybVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYnMoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvQXV0b0Zvcm0vQXV0b0Zvcm0udHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9MYXlvdXRcIjtcclxuaW1wb3J0IHtGaXhlZH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRml4ZWRcIjtcclxuaW1wb3J0IHtGbGV4fSBmcm9tIFwiLi4vTGF5b3V0UGFuZS9GbGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYnNQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzIHtcclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFiSW5mbyB7XHJcbiAgICAvL2lkOiBzdHJpbmc7XHJcbiAgICAvL3dpbkluc3RhbmNlOiBXaW5kb3c7XHJcbiAgICAvL2RpdldyYXBwZXI6IEVsZW1lbnQ7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQ8VGFic1Byb3BzLGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRhYnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICBsZXQgdGFiVGFncyA9IHRoaXMuZ2V0Q2hpbGRyZW4oVGFiKTtcclxuXHJcbiAgICAgICAgdGFiVGFncy5mb3JFYWNoKCh0YWJUYWcsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFiUHJvcHMgPSB0YWJUYWcucHJvcHMgYXMgVGFiUHJvcHM7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFiSW5mbzogVGFiSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0YWJQcm9wcy50aXRsZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRhYlByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGluZGV4ID09PSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFicy5wdXNoKHRhYkluZm8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRhYnM6IFRhYkluZm9bXSA9IFtdO1xyXG5cclxuICAgIC8vIG9wZW5XaW5kb3cod2luOiBKU1guRWxlbWVudCk6IFdpbmRvd0luZm8ge1xyXG4gICAgLy8gICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gICAgIG1vZGFsLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTIpO1xyXG4gICAgLy8gICAgIC8vINC00LvRjyDQv9C+0LTQvdGP0YLQuNGPINCy0LLQtdGA0YUg0L/RgNC4INCw0LrRgtC40LLQsNGG0LjQuCDQvtC60L3QsFxyXG4gICAgLy8gICAgIG1vZGFsLm9uY2xpY2sgPSAoZSk9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobW9kYWwuaWQgIT09IFwiZGVsZXRlZFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAvLyAgICAgICAgIH0sIDEpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IHdpbkluc3RhbmNlID0gUmVhY3RET00ucmVuZGVyKHdpbiwgbW9kYWwpIGFzIFdpbmRvdztcclxuICAgIC8vXHJcbiAgICAvLyAgICAgbGV0IGluZm86IFdpbmRvd0luZm8gPSB7XHJcbiAgICAvLyAgICAgICAgIGlkOiBtb2RhbC5pZCxcclxuICAgIC8vICAgICAgICAgd2luSW5zdGFuY2U6IHdpbkluc3RhbmNlLFxyXG4gICAgLy8gICAgICAgICBkaXZXcmFwcGVyOiBtb2RhbFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMud2luZG93cy5wdXNoKGluZm8pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gaW5mbztcclxuICAgIC8vIH07XHJcbiAgICAvL1xyXG4gICAgLy8gY2xvc2VXaW5kb3cod2luOiBXaW5kb3cpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLmZvckVhY2goKGluZm8sIGluZGV4KT0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGluZm8ud2luSW5zdGFuY2UgPT09IHdpbikge1xyXG4gICAgLy8gICAgICAgICAgICAgaW5mby5kaXZXcmFwcGVyLmlkID0gXCJkZWxldGVkXCI7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoaW5mby5kaXZXcmFwcGVyKTtcclxuICAgIC8vICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndpbmRvd3NbaW5kZXhdO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYWN0aXZhdGVXaW5kb3cod2luOiBXaW5kb3cpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy53aW5kb3dzLmZvckVhY2goKGluZm8sIGluZGV4KT0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGluZm8ud2luSW5zdGFuY2UgPT09IHdpbikge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGluZm8uZGl2V3JhcHBlcik7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzZXRBY3RpdmVUYWIodGFiSW5mbzogVGFiSW5mbykge1xyXG4gICAgICAgIGlmICghdGFiSW5mby5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKT0+dGFiLmlzQWN0aXZlID0gZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJJbmZvLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyVGFicygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBsaXN0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWJJbmZvOiBUYWJJbmZvLCBpbmRleDogbnVtYmVyKT0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSB0YWJJbmZvLmlzQWN0aXZlID8gXCJpcy1hY3RpdmVcIiA6IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID1cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0gb25DbGljaz17IChlKT0+eyB0aGlzLnNldEFjdGl2ZVRhYih0YWJJbmZvKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnt0YWJJbmZvLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBhbmVscygpOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGxldCBsaXN0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWJJbmZvOiBUYWJJbmZvLCBpbmRleDogbnVtYmVyKT0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAhdGFiSW5mby5pc0FjdGl2ZSA/IFwiaXMtaGlkZGVuXCIgOiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGFiSW5mby5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiByZWY+XHJcbiAgICAgICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL3RoaXMuYWRkQ2xhc3NOYW1lKFwiVGFic1wiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIn0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJhdXRvXCJ9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCIgcmVmPXsgKGU6IGFueSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFicygpfVxyXG4gICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBhbmVscygpfVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYiBleHRlbmRzIENvbXBvbmVudDxUYWJQcm9wcyxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUYWJQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvVGFicy9UYWJzLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtJbnB1dERpdmlkZXJ9IGZyb20gXCIuLi9JbnB1dERpdmlkZXIvSW5wdXREaXZpZGVyXCI7XHJcbmltcG9ydCB7UHJvcGVydHlFZGl0b3JJbmZvfSBmcm9tIFwiLi4vLi4vLi4vYnVodGEtYXBwLWRlc2lnbmVyL1Byb3BlcnR5RWRpdG9ycy9CYXNlUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtBdXRvRm9ybUNvbnRyb2xQcm9wc30gZnJvbSBcIi4uL0F1dG9Gb3JtL0F1dG9Gb3JtXCI7XHJcbmltcG9ydCB7SW5wdXRQcm9wc30gZnJvbSBcIi4uL0lucHV0L0lucHV0XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50PEZvcm1Qcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRm9ybVByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXJDb250cm9scygpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgbGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZvckVhY2goKGNvbnRyb2w6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb250cm9sUHJvcHMgPSBjb250cm9sLnByb3BzIGFzIElucHV0UHJvcHM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xQcm9wcyAmJiAoY29udHJvbFByb3BzLmlucHV0Q2FwdGlvbiB8fCBjb250cm9sUHJvcHMuYmluZFByb3BOYW1lKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGNvbnRyb2wudHlwZSA9PT0gSW5wdXREaXZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSW5wdXREaXZpZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiY29udHJvbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXB0aW9uXCI+e2NvbnRyb2xQcm9wcy5pbnB1dENhcHRpb24gPyBjb250cm9sUHJvcHMuaW5wdXRDYXB0aW9uIDogY29udHJvbFByb3BzLmJpbmRQcm9wTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIiwgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiY29udHJvbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIxMFwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIiwgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiZm9ybVwiKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7aGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6IFwiaW5oZXJpdFwifSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSByZWY9eyAoZSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH0gey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250cm9scygpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBDb21wb25lbnQsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7YXBwSW5zdGFuY2V9IGZyb20gXCIuLi9BcHBcIjtcclxuaW1wb3J0IHtXaW5kb3d9IGZyb20gXCIuLi9XaW5kb3cvV2luZG93XCI7XHJcbmltcG9ydCB7TW92ZVN0YXJ0RXZlbnR9IGZyb20gXCIuLi9Nb3ZhYmxlL01vdmFibGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVza3RvcFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlc2t0b3BXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGRlc2t0b3BTdGF0ZTogRGVza3RvcFN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDEyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY29udGVudDogSlNYLkVsZW1lbnQ7XHJcbiAgICB0aXRsZTogc3RyaW5nID0gXCIuXCI7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHJpZ2h0OiBudW1iZXI7XHJcbiAgICBib3R0b206IG51bWJlcjtcclxuICAgIG1pbkhlaWdodDogbnVtYmVyO1xyXG4gICAgbWluV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgICBmb3JjZVVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmRlc2t0b3BTdGF0ZS5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVNb3ZlU3RhcnQgPSAoZTogTW92ZVN0YXJ0RXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBlLmJpbmRYKHRoaXMsIFwibGVmdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLmJpbmRZKHRoaXMsIFwidG9wXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGVza3RvcFN0YXRlLmFjdGl2YXRlV2luZG93KHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFjdGl2YXRlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVza3RvcFN0YXRlLmFjdGl2YXRlV2luZG93KHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVza3RvcFN0YXRlLmNsb3NlV2luZG93KHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnQgPSAoZTogTW92ZVN0YXJ0RXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAvL2xldCB3aW4gPSB0aGlzLnN0YXRlLmdldFdpbmRvd0J5SWQod2luSWQpO1xyXG4gICAgICAgIGUuYmluZFgodGhpcywgXCJ3aWR0aFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoIDwgdGhpcy5taW5XaWR0aClcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1pbldpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5iaW5kWSh0aGlzLCBcImhlaWdodFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA8IHRoaXMubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1pbkhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGVza3RvcFN0YXRlLmFjdGl2YXRlV2luZG93KHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgRGVza3RvcFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUge1xyXG4gICAgd2luZG93czogRGVza3RvcFdpbmRvd1tdID0gW107ICAvLyDQv9C+0YHQu9C10LTQvdC10LUg0LDQutGC0LjQstC90L5cclxuXHJcbiAgICBnZXRXaW5kb3dCeUlkKGlkOiBzdHJpbmcpOiBEZXNrdG9wV2luZG93IHtcclxuICAgICAgICBmb3IgKGxldCB3IG9mIHRoaXMud2luZG93cykge1xyXG4gICAgICAgICAgICBpZiAody5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiRGVza3RvcFdpbmRvdyBpZD0nXCIgKyBpZCArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2luZG93SW5kZXhCeUlkKGlkOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpbmRvd3MuaW5kZXhPZih0aGlzLmdldFdpbmRvd0J5SWQoaWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZVdpbmRvdyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHRoaXMuZ2V0V2luZG93QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdpbikge1xyXG4gICAgICAgICAgICBfLnB1bGwodGhpcy53aW5kb3dzLCB3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLndpbmRvd3MucHVzaCh3aW4pO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlV2luZG93KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgd2luID0gdGhpcy5nZXRXaW5kb3dCeUlkKGlkKTtcclxuICAgICAgICBfLnB1bGwodGhpcy53aW5kb3dzLCB3aW4pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd0luZm8ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHdpbkluc3RhbmNlOiBXaW5kb3c7XHJcbiAgICBkaXZXcmFwcGVyOiBFbGVtZW50O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuV2luZG93UGFyYW1zIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgdG9wPzogbnVtYmVyO1xyXG4gICAgbGVmdD86IG51bWJlcjtcclxuICAgIHJpZ2h0PzogbnVtYmVyO1xyXG4gICAgYm90dG9tPzogbnVtYmVyO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBtaW5IZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBtaW5XaWR0aD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlc2t0b3AgZXh0ZW5kcyBDb21wb25lbnQ8RGVza3RvcFByb3BzLCBEZXNrdG9wU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBEZXNrdG9wUHJvcHMsIGNvbnRleHQ6YW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IERlc2t0b3BTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIGlmIChhcHBJbnN0YW5jZSlcclxuICAgICAgICAgICAgYXBwSW5zdGFuY2UuZGVza3RvcCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4vLyAgICBwcml2YXRlIHdpbmRvd3M6IFdpbmRvd0luZm9bXSA9IFtdO1xyXG5cclxuICAgIG9wZW5XaW5kb3cod2luOiBKU1guRWxlbWVudCwgb3BlblBhcmFtcz86IE9wZW5XaW5kb3dQYXJhbXMpIHtcclxuICAgICAgICBpZiAoIW9wZW5QYXJhbXMpXHJcbiAgICAgICAgICAgIG9wZW5QYXJhbXMgPSB7fTtcclxuICAgICAgICBsZXQgbmV3V2luID0gbmV3IERlc2t0b3BXaW5kb3codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgbmV3V2luLmNvbnRlbnQgPSB3aW47XHJcbiAgICAgICAgbmV3V2luLnRpdGxlID0gb3BlblBhcmFtcy50aXRsZSB8fCBcIi5cIjtcclxuXHJcbiAgICAgICAgbmV3V2luLmxlZnQgPSBvcGVuUGFyYW1zLmxlZnQ7XHJcbiAgICAgICAgbmV3V2luLnRvcCA9IG9wZW5QYXJhbXMudG9wO1xyXG4gICAgICAgIG5ld1dpbi5oZWlnaHQgPSBvcGVuUGFyYW1zLmhlaWdodDtcclxuICAgICAgICBuZXdXaW4ud2lkdGggPSBvcGVuUGFyYW1zLndpZHRoO1xyXG4gICAgICAgIG5ld1dpbi5yaWdodCA9IG9wZW5QYXJhbXMucmlnaHQ7XHJcbiAgICAgICAgbmV3V2luLmJvdHRvbSA9IG9wZW5QYXJhbXMuYm90dG9tO1xyXG5cclxuICAgICAgICBpZiAoIW5ld1dpbi5sZWZ0KSB7XHJcbiAgICAgICAgICAgIGlmICghbmV3V2luLnJpZ2h0ICYmICFuZXdXaW4ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5sZWZ0ID0gNTA7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV3V2luLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ubGVmdCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5yaWdodCAmJiAhbmV3V2luLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4ud2lkdGggPSA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbmV3V2luLnRvcCkge1xyXG4gICAgICAgICAgICBpZiAoIW5ld1dpbi5ib3R0b20gJiYgIW5ld1dpbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi50b3AgPSA1MDtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV3V2luLmJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2luLmhlaWdodCA9IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbi50b3AgPSA1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFuZXdXaW4uYm90dG9tICYmICFuZXdXaW4uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaW4uaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbmV3V2luLm1pbkhlaWdodCA9IG9wZW5QYXJhbXMubWluSGVpZ2h0IHx8IDEwMDtcclxuICAgICAgICBuZXdXaW4ubWluV2lkdGggPSBvcGVuUGFyYW1zLm1pbldpZHRoIHx8IDEwMDtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUud2luZG93cy5wdXNoKG5ld1dpbik7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJkZXNrdG9wXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtoZWlnaHQ6IFwiMTAwJVwifSk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImF1dG9cIn0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17IChlKSA9PiB7IHRoaXMubmF0aXZlRWxlbWVudCA9IGU7IH0gfSB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLndpbmRvd3MubWFwKCh3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJyZW5kZXItZGVza3RvcC13aW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpbmRvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt3LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3cudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A9e3cudG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdD17dy5sZWZ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3cud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3cuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ9e3cucmlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b209e3cuYm90dG9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9eyB3LmhhbmRsZU1vdmVTdGFydCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnQ9eyB3LmhhbmRsZVJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3RpdmF0ZT17ICB3LmhhbmRsZUFjdGl2YXRlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eyB3LmhhbmRsZUNsb3NlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3cuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9XaW5kb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvRGVza3RvcC9EZXNrdG9wLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHtEZXNrdG9wfSBmcm9tIFwiLi9EZXNrdG9wL0Rlc2t0b3BcIjtcclxuaW1wb3J0IEVsZW1lbnQgPSBKU1guRWxlbWVudDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDEyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY29udGVudDogSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmNsYXNzIEFwcFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUge1xyXG4gICAgd2luZG93czogQXBwV2luZG93W10gPSBbXTsgIC8vINC/0L7RgdC70LXQtNC90LXQtSDQsNC60YLQuNCy0L3QvlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PEFwcFByb3BzLCBDb21wb25lbnRTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFwcFByb3BzLCBjb250ZXh0OmFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBBcHBTdGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIGFwcEluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgZGlkTW91bnQoKSB7XHJcbiAgICAvLyAgICAgc3VwZXIuZGlkTW91bnQoKTtcclxuICAgIC8vICAgICBhcHBJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZGVza3RvcDogRGVza3RvcDtcclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKFwiYXBwXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmdldFJlbmRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgQnVodGEgQXBwIVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGFwcEluc3RhbmNlOiBBcHA7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9BcHAudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL0xheW91dFBhbmUvTGF5b3V0XCI7XHJcbmltcG9ydCB7Rml4ZWR9IGZyb20gXCIuLi9MYXlvdXRQYW5lL0ZpeGVkXCI7XHJcbmltcG9ydCB7RmxleH0gZnJvbSBcIi4uL0xheW91dFBhbmUvRmxleFwiO1xyXG5pbXBvcnQge01vdmFibGUsIE1vdmVTdGFydEV2ZW50fSBmcm9tIFwiLi4vTW92YWJsZS9Nb3ZhYmxlXCI7XHJcbmltcG9ydCBzaGFsbG93Q29tcGFyZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtc2hhbGxvdy1jb21wYXJlXCIpO1xyXG5pbXBvcnQgZGVlcEVxdWFsID0gcmVxdWlyZShcImRlZXAtZXF1YWxcIik7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgdG9wPzogbnVtYmVyO1xyXG4gICAgbGVmdD86IG51bWJlcjtcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgcmlnaHQ/OiBudW1iZXI7XHJcbiAgICBib3R0b20/OiBudW1iZXI7XHJcbiAgICBvbk1vdmVTdGFydD8oZTogTW92ZVN0YXJ0RXZlbnQpOiB2b2lkO1xyXG4gICAgb25SZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0PyhlOiBNb3ZlU3RhcnRFdmVudCk6IHZvaWQ7XHJcbiAgICBvbkFjdGl2YXRlPygpOiB2b2lkO1xyXG4gICAgb25DbG9zZT8oKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvbmVudDxXaW5kb3dQcm9wcywgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogV2luZG93UHJvcHMsIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1vdmVTdGFydCA9IChlOiBNb3ZlU3RhcnRFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0ID0gKGU6IE1vdmVTdGFydEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemVSaWdodEJvdHRvbUNvcm5lclN0YXJ0KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplUmlnaHRCb3R0b21Db3JuZXJTdGFydChlKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlT25DbGljayA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQWN0aXZhdGUpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3RpdmF0ZSgpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2hhbGxvd0NvbXBhcmUobmV4dFByb3BzOiBXaW5kb3dQcm9wcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzaGFsbG93LXdpbiAtPiBpc0VxaWFsID0gXCIgKyB0aGlzLmlzUHJvcHNFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMsIFtcImNoaWxkcmVuXCJdKSk7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzUHJvcHNFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMsIFtcImNoaWxkcmVuXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0eWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShcIndpbmRvdyBib3hcIik7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoe3Bvc2l0aW9uOiBcImFic29sdXRlXCJ9KTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlcyh7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5wcm9wcy50b3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucHJvcHMubGVmdCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXHJcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnByb3BzLnJpZ2h0LFxyXG4gICAgICAgICAgICBib3R0b206IHRoaXMucHJvcHMuYm90dG9tLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlckJ1dHRvblN0eWxlID0ge1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAyLFxyXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlbmRlci13aW5cIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMuZ2V0UmVuZGVyUHJvcHMoKX0gb25DbGljaz17IHRoaXMuaGFuZGxlT25DbGljayB9PlxyXG4gICAgICAgICAgICAgICAgPExheW91dCB0eXBlPVwiY29sdW1uXCIgcmVmPXsgKGU6IGFueSkgPT4geyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlOyB9IH1cclxuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbmRvdy1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlclJhZGl1czogXCI1cHggNXB4IDBweCAwcHhcIiwgcG9zaXRpb246XCJyZWxhdGl2ZVwiLCBwYWRkaW5nTGVmdDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2luZG93LXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHR5cGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6MCwgbGVmdDowLCByaWdodDowLGJvdHRvbTowfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9e3RoaXMubW92ZVN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vdmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtYWRkb25zIGJ1dHRvbnMtYmFyXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAyLCBwYWRkaW5nUmlnaHQ6IDR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIG1pbmltaXplLWJ1dHRvblwiIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWludXNcIiBzdHlsZT17e3RvcDogM319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBtYXhpbWl6ZS1idXR0b25cIiBzdHlsZT17aGVhZGVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW9cIiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGNsb3NlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtoZWFkZXJCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIHN0eWxlPXt7dG9wOiAtMX19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBzdHlsZT17eyBwYWRkaW5nOjMsIG92ZXJmbG93OiBcImF1dG9cIiwgYm9yZGVyOlwic29saWQgMnB4IGJsdWVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luZG93LXJlc2l6ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgaGVpZ2h0OjEwLCB3aWR0aDoxMCwgcmlnaHQ6MCxib3R0b206MCwgYm9yZGVyUmFkaXVzOiBcIjAgMCA1cHggMFwiLGN1cnNvcjogXCJzZS1yZXNpemVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXt0aGlzLnJlc2l6ZVJpZ2h0Qm90dG9tQ29ybmVyU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW92YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL0NvbXBvbmVudHMvV2luZG93L1dpbmRvdy50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb21wb25lbnRQcm9wcywgQ29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCBEcmFnRXZlbnRIYW5kbGVyID0gX19SZWFjdC5EcmFnRXZlbnRIYW5kbGVyO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZhYmxlUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyB7XHJcbiAgICBvbk1vdmVTdGFydD86IChldmVudDogTW92ZVN0YXJ0RXZlbnQpPT52b2lkO1xyXG4gICAgb25Nb3ZlPzogKGV2ZW50OiBNb3ZlRXZlbnQpPT52b2lkO1xyXG4gICAgb25Nb3ZlRW5kPzogKGV2ZW50OiBNb3ZlRW5kRXZlbnQpPT52b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlU3RhcnRFdmVudCB7XHJcbiAgICBiaW5kWDogKG9iajogT2JqZWN0LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCk9PnZvaWQpPT52b2lkO1xyXG4gICAgYmluZFk6IChvYmo6IE9iamVjdCwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpPT52b2lkKT0+dm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRXZlbnQge1xyXG4gICAgZGVsdGFYOiBudW1iZXI7XHJcbiAgICBkZWx0YVk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRW5kRXZlbnQge1xyXG4gICAgZGVsdGFYOiBudW1iZXI7XHJcbiAgICBkZWx0YVk6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBCaW5kZWRPYmplY3Qge1xyXG4gICAgb2JqOiBhbnk7XHJcbiAgICBwcm9wTmFtZTogc3RyaW5nXHJcbiAgICBzdGFydFZhbHVlOiBudW1iZXI7XHJcbiAgICBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZDtcclxuICAgIGxhc3RWYWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW92YWJsZSBleHRlbmRzIENvbXBvbmVudDxNb3ZhYmxlUHJvcHMsYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRDbGllbnRYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0Q2xpZW50WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkcmFnT3Zlcl9CaW5kZWQ6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRlZFg6IEJpbmRlZE9iamVjdFtdID0gW107XHJcbiAgICBwcml2YXRlIGJpbmRlZFk6IEJpbmRlZE9iamVjdFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kWChvYmo6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgbW92ZWRDYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmJpbmRlZFgucHVzaCh7XHJcbiAgICAgICAgICAgIG9iajogb2JqLFxyXG4gICAgICAgICAgICBwcm9wTmFtZTogcHJvcE5hbWUsXHJcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IG9ialtwcm9wTmFtZV0sXHJcbiAgICAgICAgICAgIG1vdmVkQ2FsbGJhY2s6IG1vdmVkQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgIGxhc3RWYWx1ZTogb2JqW3Byb3BOYW1lXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGJpbmRZKG9iajogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBtb3ZlZENhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuYmluZGVkWS5wdXNoKHtcclxuICAgICAgICAgICAgb2JqOiBvYmosXHJcbiAgICAgICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZSxcclxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogb2JqW3Byb3BOYW1lXSxcclxuICAgICAgICAgICAgbW92ZWRDYWxsYmFjazogbW92ZWRDYWxsYmFjayxcclxuICAgICAgICAgICAgbGFzdFZhbHVlOiBvYmpbcHJvcE5hbWVdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydENsaWVudFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgdGhpcy5zdGFydENsaWVudFkgPSBlLmNsaWVudFk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZVN0YXJ0KHtiaW5kWDogdGhpcy5iaW5kWC5iaW5kKHRoaXMpLCBiaW5kWTogdGhpcy5iaW5kWS5iaW5kKHRoaXMpfSk7XHJcblxyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJtb3ZhYmxlXCIsIFwiXCIpO1xyXG4gICAgICAgIC8vZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnT3Zlcl9CaW5kZWQgPSB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJfQmluZGVkKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJfQmluZGVkKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk1vdmVFbmQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlRW5kKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhWDogZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBkZWx0YVk6IGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmluZGVkWCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmluZGVkWSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kZWRYLmZvckVhY2goKGJpbmQpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gYmluZC5zdGFydFZhbHVlICsgZS5jbGllbnRYIC0gdGhpcy5zdGFydENsaWVudFg7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gYmluZC5sYXN0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQub2JqW2JpbmQucHJvcE5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBiaW5kLmxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmQubW92ZWRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBiaW5kLm1vdmVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRlZFkuZm9yRWFjaCgoYmluZCk9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGJpbmQuc3RhcnRWYWx1ZSArIGUuY2xpZW50WSAtIHRoaXMuc3RhcnRDbGllbnRZO1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGJpbmQubGFzdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kLm9ialtiaW5kLnByb3BOYW1lXSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYmluZC5sYXN0VmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5kLm1vdmVkQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgYmluZC5tb3ZlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3ZlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZSh7XHJcbiAgICAgICAgICAgICAgICBkZWx0YVg6IGUuY2xpZW50WCAtIHRoaXMuc3RhcnRDbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgZGVsdGFZOiBlLmNsaWVudFkgLSB0aGlzLnN0YXJ0Q2xpZW50WVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoXCJtb3ZhYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkUHJvcHMoe2RyYWdnYWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGVzKHtjdXJzb3I6IFwibW92ZVwifSk7XHJcblxyXG4gICAgICAgIC8vcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcEluZm8uZWRpdG9yVHlwZSwgZWRpdG9yUHJvcHMsIG51bGwpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5nZXRSZW5kZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9e3RoaXMuaGFuZGxlRHJhZ1N0YXJ0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9e3RoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL01vdmFibGUvTW92YWJsZS50c3hcbiAqKi8iLCJpbXBvcnQge1N0cmluZ0VkaXRvcn0gZnJvbSBcIi4uL2J1aHRhLWFwcC1kZXNpZ25lci9Qcm9wZXJ0eUVkaXRvcnMvU3RyaW5nUHJvcGVydHlFZGl0b3JcIjtcclxuaW1wb3J0IHtUZXN0QnVodGFPYmplY3QxfSBmcm9tIFwiLi90ZXN0QnVodGFPYmplY3QxXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgdGVzdEJ1aHRhT2JqZWN0MiBleHRlbmRzIFRlc3RCdWh0YU9iamVjdDEge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBAU3RyaW5nRWRpdG9yKHtcclxuICAgICAgICBpbnB1dENhcHRpb246IFwi0J/QvtC7L3NleFwiLFxyXG4gICAgICAgIGlucHV0VGFiOiBcItCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+XCIsXHJcbiAgICAgICAgaW5wdXRHcm91cDogXCLQntGB0L3QvtCy0L3QsNGPXCIsXHJcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbjogXCLQn9C+0YLQvtC70L7QuiDQsNCx0L7QvdC10L3RgtCwXCJcclxuICAgIH0pXHJcbiAgICBzZXg6IHN0cmluZztcclxuXHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvVGVzdDEvdGVzdEJ1aHRhT2JqZWN0Mi50c1xuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHNoYWxsb3dDb21wYXJlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmVcIik7XHJcblxyXG4vL2ltcG9ydCB7ZXhlY3V0ZVNRTH0gZnJvbSBcIi4uL2J1aHRhLWNvcmUvU1FMXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge2V4ZWN1dGVTUUx9IGZyb20gXCIuLi8uLi9TUUxcIjtcclxuaW1wb3J0IHtUcmVlR3JpZENvbHVtbnN9IGZyb20gXCIuL1RyZWVHcmlkQ29sdW1uc1wiO1xyXG5pbXBvcnQge1RyZWVHcmlkQ29sdW1uUHJvcHMsIFRyZWVHcmlkQ29sdW1ufSBmcm9tIFwiLi9UcmVlR3JpZENvbHVtblwiO1xyXG5pbXBvcnQge0tleWNvZGV9IGZyb20gXCIuLi8uLi9LZXljb2RlXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMge1xyXG4gICAgZGF0YVNvdXJjZT86IGFueTtcclxuICAgIHJvd0hlaWdodD86IG51bWJlcjtcclxuICAgIGtleUZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIHBhcmVudEtleUZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIGhpZXJhcmNoeUZpZWxkTmFtZT86IHN0cmluZztcclxuICAgIGhpZXJhcmNoeURlbGltaXRlcnM/OiBzdHJpbmc7XHJcbiAgICB0cmVlTW9kZT86IGJvb2xlYW47XHJcbiAgICBhdXRvRXhwYW5kTm9kZXNUb0xldmVsPzogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBJbnRlcm5hbENvbHVtbiB7XHJcbiAgICBwcm9wczogVHJlZUdyaWRDb2x1bW5Qcm9wcztcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBjYXB0aW9uOiBzdHJpbmc7XHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZztcclxuICAgIGZvb3Rlcjogc3RyaW5nO1xyXG4gICAgaGlkZGVuOiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBJbnRlcm5hbFJvdyB7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgLy8vICAgc291cmNlT2JqZWN0OiBhbnk7XHJcbiAgICBzb3VyY2VJbmRleDogbnVtYmVyO1xyXG4gICAgY2VsbEVsZW1lbnRzOiBFbGVtZW50W10gPSBbXTtcclxuICAgIG5vZGU6IEludGVybmFsVHJlZU5vZGU7XHJcblxyXG59XHJcblxyXG5jbGFzcyBJbnRlcm5hbFRyZWVOb2RlIHtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBzb3VyY2VPYmplY3Q6IGFueTtcclxuICAgIHNvdXJjZUluZGV4OiBudW1iZXI7XHJcbiAgICBjZWxsRWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIC8vINC00LvRjyB0cmVlTW9kZTtcclxuICAgIHBhcmVudDogSW50ZXJuYWxUcmVlTm9kZTtcclxuICAgIGNoaWxkcmVuOiBJbnRlcm5hbFRyZWVOb2RlW10gPSBbXTtcclxuICAgIGV4cGFuZGVkOiBib29sZWFuO1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuXHJcbiAgICBwdXNoUm93UmVjdXJzaXZlKHJvd3M6IEludGVybmFsUm93W10sIG1heFBhZ2VMZW5ndGg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBpZiAocm93cy5sZW5ndGggPj0gbWF4UGFnZUxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgcm93ID0gbmV3IEludGVybmFsUm93KCk7XHJcbiAgICAgICAgcm93LnNvdXJjZUluZGV4ID0gdGhpcy5zb3VyY2VJbmRleDtcclxuICAgICAgICByb3cubm9kZSA9IHRoaXM7XHJcbiAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IEludGVybmFsVHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnB1c2hSb3dSZWN1cnNpdmUocm93cywgbWF4UGFnZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkIGV4dGVuZHMgQ29tcG9uZW50PFRyZWVHcmlkUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZFByb3BzLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgLy90aGlzLnN0YXRlLmNvbHVtbnM9W107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb2x1bW5zOiBJbnRlcm5hbENvbHVtbltdO1xyXG4gICAgcHJpdmF0ZSBwYWdlTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJvd3M6IEludGVybmFsUm93W107XHJcbiAgICBwcml2YXRlIG5vZGVzOiBJbnRlcm5hbFRyZWVOb2RlW107XHJcbiAgICBwcml2YXRlIGZvY3VzZWRSb3dJbmRleDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBmb2N1c2VkQ2VsbEluZGV4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IGFueVtdO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUNvbHVtbnMoKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW107XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMVwiKTtcclxuICAgICAgICBsZXQgY29sdW1uc1RhZyA9IHRoaXMuZ2V0Q2hpbGRyZW4oVHJlZUdyaWRDb2x1bW5zKTtcclxuXHJcbiAgICAgICAgY29sdW1uc1RhZy5mb3JFYWNoKCh0YWc6IEpTWC5FbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5UYWdMaXN0ID0gdGhpcy5nZXRDaGlsZHJlbk9mUHJvcHModGFnLnByb3BzLCBUcmVlR3JpZENvbHVtbik7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5UYWdMaXN0LmZvckVhY2goKHByb3BDb2w6IEpTWC5FbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IG5ldyBJbnRlcm5hbENvbHVtbigpO1xyXG4gICAgICAgICAgICAgICAgY29sLnByb3BzID0gcHJvcENvbC5wcm9wcztcclxuICAgICAgICAgICAgICAgIGNvbC53aWR0aCA9IHByb3BDb2wucHJvcHMud2lkdGggfHwgMTUwO1xyXG4gICAgICAgICAgICAgICAgY29sLmNhcHRpb24gPSBwcm9wQ29sLnByb3BzLmNhcHRpb247XHJcbiAgICAgICAgICAgICAgICBjb2wuZmllbGROYW1lID0gcHJvcENvbC5wcm9wcy5maWVsZE5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb2wuY2FwdGlvbiA9IHByb3BDb2wucHJvcHMuY2FwdGlvbiB8fCBjb2wuZmllbGROYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goY29sKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRGb2N1c2VkKCkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZFJvd0luZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmZvY3VzZWRDZWxsSW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU5vZGVzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy50cmVlTW9kZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5oaWVyYXJjaHlGaWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVOb2Rlc0Zyb21IaWVyYXJjaHlGaWVsZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1bmtub3duIGhpZXJhcmNoeSBtb2RlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU5vZGVzRnJvbUhpZXJhcmNoeUZpZWxkKCkge1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFTb3VyY2UpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5oaWVyYXJjaHlEZWxpbWl0ZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJYVHJlZUdyaWQ6IGhpZXJhcmNoeURlbGltaXRlcnMgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaW50ZXJmYWNlIElTb3J0ZWQge1xyXG4gICAgICAgICAgICBoaWVyYXJjaHlTdHI6IHN0cmluZztcclxuICAgICAgICAgICAgb2JqSW5kZXg6IG51bWJlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzb3J0ZWQ6IElTb3J0ZWRbXSA9IHRoaXMuZGF0YVNvdXJjZS5tYXAoKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhpZXJhcmNoeVN0cjogb2JqW3RoaXMucHJvcHMuaGllcmFyY2h5RmllbGROYW1lXS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgb2JqSW5kZXg6IGluZGV4XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvcnRlZCA9IF8uc29ydEJ5KHNvcnRlZCwgW1wiaGllcmFyY2h5U3RyXCJdKTtcclxuXHJcbiAgICAgICAgbGV0IGNhY2hlOiB7IFtoaWVyYXJjaHlJZDogc3RyaW5nXTogSW50ZXJuYWxUcmVlTm9kZTsgfSA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcblxyXG4gICAgICAgIHNvcnRlZC5mb3JFYWNoKChzLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNwbGl0dGVkID0gcy5oaWVyYXJjaHlTdHIuc3BsaXQodGhpcy5wcm9wcy5oaWVyYXJjaHlEZWxpbWl0ZXJzKTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudElkOiBhbnk7XHJcbiAgICAgICAgICAgIGxldCBub2RlSWQ6IGFueTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0dGVkLmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgICAgIG5vZGVJZCA9IHMuaGllcmFyY2h5U3RyO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGVJZCA9IF8ubGFzdChzcGxpdHRlZCk7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRJZCA9IHNwbGl0dGVkLnNsaWNlKDAsIHNwbGl0dGVkLmxlbmd0aCAtIDEpLmpvaW4odGhpcy5wcm9wcy5oaWVyYXJjaHlEZWxpbWl0ZXJzLnNsaWNlKDAsIDEpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwYXJlbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlW25vZGVJZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlhUcmVlR3JpZDogbm9kZUlkICdcIiArIG5vZGVJZCArIFwiJyBpcyBkdXBsaWNhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgSW50ZXJuYWxUcmVlTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc291cmNlSW5kZXggPSBzLm9iakluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGV2ZWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZXhwYW5kZWQgPSBub2RlLmxldmVsIDwgdGhpcy5wcm9wcy5hdXRvRXhwYW5kTm9kZXNUb0xldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlW25vZGVJZF0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gY2FjaGVbcGFyZW50SWRdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IEludGVybmFsVHJlZU5vZGUoKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc291cmNlSW5kZXggPSBzLm9iakluZGV4O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5sZXZlbCA9IHBhcmVudE5vZGUubGV2ZWwgKyAxO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5leHBhbmRlZCA9IG5vZGUubGV2ZWwgPCB0aGlzLnByb3BzLmF1dG9FeHBhbmROb2Rlc1RvTGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBjYWNoZVtzLmhpZXJhcmNoeVN0cl0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe3N0cjogcy5oaWVyYXJjaHlTdHIsIHBhcmVudElkLCBub2RlSWR9KTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJvd3MoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKChub2RlOiBJbnRlcm5hbFRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wdXNoUm93UmVjdXJzaXZlKHRoaXMucm93cywgdGhpcy5wYWdlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGFTb3VyY2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IG5ldyBJbnRlcm5hbFJvdygpO1xyXG4gICAgICAgICAgICAgICAgcm93LnNvdXJjZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAvL3Jvdy5zb3VyY2VPYmplY3QgPSBvYmo7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEZvY3VzZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbnMgJiYgdGhpcy5jb2x1bW5zLmxlbmd0aCA+IDAgJiYgdGhpcy5kYXRhU291cmNlKVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnNbMF0uZm9vdGVyID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCArIFwiINC/0L7Qty5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckRhdGEoKSB7XHJcblxyXG4vLyAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFTb3VyY2UpIHtcclxuLy8gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhID0gdGhpcy5wcm9wcy5kYXRhU291cmNlLm1hcCgocm93KSA9PiByb3cpO1xyXG4vLyAgICAgICAgICAgIH1cclxuICAgICAgICAvL3RoaXMucm93cyA9IHdpbmRvd1tcInh4eFwiXS5maWx0ZXIoKHJvdykgPT4gcm93W1wi0J3QsNC30LLQsNC90LjQtVwiXS5pbmRleE9mKFwiUGhpbFwiKSA+IC0xKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsOiBudW1iZXI7XHJcbiAgICBsYXN0Qm9keVdyYXBwZXJIZWlnaHQgPSAwO1xyXG4gICAgbGFzdEJvZHlXcmFwcGVyV2lkdGggPSAwO1xyXG5cclxuICAgIGhhbmRsZUJvZHlXcmFwcGVyRWxlbWVudFJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGlmIChuZXdIZWlnaHQgIT09IHRoaXMubGFzdEJvZHlXcmFwcGVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEJvZHlXcmFwcGVySGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgaWYgKG5ld1dpZHRoICE9PSB0aGlzLmxhc3RCb2R5V3JhcHBlcldpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEJvZHlXcmFwcGVyV2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChudWxsKTtcclxuICAgICAgICB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5oYW5kbGVCb2R5V3JhcHBlckVsZW1lbnRSZXNpemUsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJvZHlXcmFwcGVyRWxlbWVudEludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2lsbE1vdW50KCkge1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbnMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlTGVuZ3RoID0gNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWZyZXNoRGF0YVNvdXJjZSgpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVOb2RlcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSB0ZXN0TG9hZDUwMCgpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZXhlY3V0ZVNRTChcInNlbGVjdCBUT1AgNTAwMCDQmtC70Y7RhyzQndC+0LzQtdGALNCd0LDQt9Cy0LDQvdC40LUgZnJvbSBb0JLQuNC0INCi0JzQpl0gb3JkZXIgYnkg0J3QvtC80LXRgFwiKVxyXG4gICAgLy8gICAgICAgICAuZG9uZSgodGFibGUpID0+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0YWJsZS5yb3dzLm1hcCgocikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB70JrQu9GO0Yc6IHJbXCLQmtC70Y7Rh1wiXSwg0J3QvtC80LXRgDogcltcItCd0L7QvNC10YBcIl0sINCd0LDQt9Cy0LDQvdC40LU6IHJbXCLQndCw0LfQstCw0L3QuNC1XCJdfTtcclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3QgdG9wIDUwMDYqINCa0LvRjtGHLNCd0L7QvNC10YAs0J3QsNC30LLQsNC90LjQtSBmcm9tIFvQktC40LQg0KLQnNCmXSBvcmRlciBieSDQmtC70Y7RhyAtLT4gXCIgKyB0YWJsZS5yb3dzWzBdLmdldFZhbHVlKDIpKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmZhaWwoKGVycikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB3aWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogVHJlZUdyaWRQcm9wcykge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGlkVXBkYXRlKHByZXZQcm9wczogVHJlZUdyaWRQcm9wcywgcHJldlN0YXRlOiBhbnksIHByZXZDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUZvY3VzZWQoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChudWxsKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJSb3dzKCk6IEpTWC5FbGVtZW50W10ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZW5kZXJSb3dzLXN0YXJ0KClcIik7XHJcbiAgICAgICAgbGV0IHJldDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlci1yb3dzOiBcIiArIHRoaXMucm93cy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKHRoaXMucmVuZGVyUm93KHJvdywgaW5kZXgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlclJvd3MtZW5kKClcIik7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclJvdyhyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAga2V5PXtyb3dJbmRleH1cclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB7IHJvdy5lbGVtZW50ID0gZTt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2VsbHMocm93LCByb3dJbmRleCl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckNlbGxzKHJvdzogSW50ZXJuYWxSb3csIHJvd0luZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudFtdIHtcclxuICAgICAgICBsZXQgcmV0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0LnB1c2godGhpcy5yZW5kZXJDZWxsKHJvdywgcm93SW5kZXgsIGNvbCwgY29sSW5kZXgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQ2VsbChyb3c6IEludGVybmFsUm93LCByb3dJbmRleDogbnVtYmVyLCBjb2w6IEludGVybmFsQ29sdW1uLCBjb2xJbmRleDogbnVtYmVyKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgb2JqSW5kZXggPSByb3cuc291cmNlSW5kZXg7XHJcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMuZGF0YVNvdXJjZVtvYmpJbmRleF1bY29sLnByb3BzLmZpZWxkTmFtZV0udG9TdHJpbmcoKTtcclxuICAgICAgICAvL2xldCBzdHIgPSB0aGlzLnJvd3Nbcm93SW5kZXhdLnNvdXJjZU9iamVjdFtjb2wucHJvcHMuZmllbGROYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vIHJldHVybiA8dGQga2V5PXtjb2xJbmRleH0+XHJcbiAgICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6MTYsIG92ZXJmbG93OlwiaGlkZGVuXCJ9fT57c3RyfTwvZGl2PlxyXG4gICAgICAgIC8vIDwvdGQ+O1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IHJvdy5ub2RlO1xyXG5cclxuICAgICAgICBsZXQgaGllcmFyY2h5UGFkZGluZ0RpdjogSlNYLkVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHJlZU1vZGUgJiYgKGNvbC5wcm9wcy5zaG93SGllcmFyY2h5UGFkZGluZyB8fCBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpKSB7XHJcbiAgICAgICAgICAgIGhpZXJhcmNoeVBhZGRpbmdEaXYgPSA8c3BhbiBzdHlsZT17e3dpZHRoOm5vZGUubGV2ZWwgKiAyMCwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19Pjwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUpIHtcclxuICAgICAgICAgICAgdGRTdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IFwicmdiYSgyNTUsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RyU3BhblN0eWxlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50cmVlTW9kZSAmJiBjb2wucHJvcHMuc2hvd0hpZXJhcmNoeVRyZWUgJiYgbm9kZS5leHBhbmRlZCAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RyU3BhblN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0clNwYW4gPSA8c3BhbiBzdHlsZT17IHN0clNwYW5TdHlsZX0+e3N0cn08L3NwYW4+O1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbGxhcHNlSWNvbkRpdjogSlNYLkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyZWVNb2RlICYmIGNvbC5wcm9wcy5zaG93SGllcmFyY2h5VHJlZSkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlSWNvbkRpdiA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93LWNvbGxhcHNlLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6MjAsIGZsZXg6IFwiMCAwIGF1dG9cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7bm9kZS5leHBhbmRlZCA9IGZhbHNlOyB0aGlzLmNyZWF0ZVJvd3MoKTsgdGhpcy5mb3JjZVVwZGF0ZSgpO30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VJY29uRGl2ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jb2xsYXBzZS1pY29uXCIgc3R5bGU9e3sgd2lkdGg6MjAsIGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHtub2RlLmV4cGFuZGVkID0gdHJ1ZTsgdGhpcy5jcmVhdGVSb3dzKCk7IHRoaXMuZm9yY2VVcGRhdGUoKTt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlSWNvbkRpdiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jb2xsYXBzZS1pY29uXCIgc3R5bGU9e3sgd2lkdGg6MjAsIGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2NvbEluZGV4fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3RkU3R5bGV9XHJcbiAgICAgICAgICAgICAgICByZWY9eyAoZSkgPT4gcm93LmNlbGxFbGVtZW50c1tjb2xJbmRleF0gPSBlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB7IHRoaXMuc2V0Rm9jdXNlZENlbGwocm93SW5kZXgsY29sSW5kZXgpO30gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jaGVja2JveFwiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctcGFkZGluZ1wiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGllcmFyY2h5UGFkZGluZ0Rpdn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2NvbGxhcHNlSWNvbkRpdn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaWNvblwiIHN0eWxlPXt7IGZsZXg6IFwiMCAwIGF1dG9cIn19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zdHJcIiBzdHlsZT17eyBmbGV4OiBcIjAgMSBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0clNwYW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Rm9jdXNlZENlbGwocm93SW5kZXg6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5mb2N1c2VkUm93SW5kZXggPSByb3dJbmRleDtcclxuICAgICAgICB0aGlzLmZvY3VzZWRDZWxsSW5kZXggPSBjZWxsSW5kZXg7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVGFibGVXaGVlbChlOiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgICAgLy8gaWYgKGUuZGVsdGFZID4gMClcclxuICAgICAgICAvLyAgICAgdGhpcy5pbmNQYWdlU3RhcnRJbmRleCgzKTtcclxuICAgICAgICAvLyBlbHNlIGlmIChlLmRlbHRhWSA8IDApXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZGVjUGFnZVN0YXJ0SW5kZXgoMyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZWx0YVkpO1xyXG4gICAgICAgIC8vIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNjcm9sbChlOiBVSUV2ZW50KSB7XHJcbiAgICAgICAgJCh0aGlzLmhlYWRlckVsZW1lbnQpLmNzcyh7dG9wOiB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3B9KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuYm9keVdyYXBwZXJFbGVtZW50LmNsaWVudEhlaWdodCAtICQodGhpcy5mb290ZXJFbGVtZW50KS5vdXRlckhlaWdodCgpIC0gMDtcclxuICAgICAgICAkKHRoaXMuZm9vdGVyRWxlbWVudCkuY3NzKHt0b3A6IHBvc30pO1xyXG5cclxuICAgICAgICAkKHRoaXMuaGVhZGVyRmFrZVJvdykuY3NzKHtoZWlnaHQ6ICQodGhpcy5oZWFkZXJFbGVtZW50KS5vdXRlckhlaWdodCgpfSk7XHJcbiAgICAgICAgJCh0aGlzLmZvb3RlckZha2VSb3cpLmNzcyh7aGVpZ2h0OiAkKHRoaXMuZm9vdGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKX0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUNoYW5nZUZvY3VzZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm93LmVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAkKHJvdy5lbGVtZW50KS5yZW1vdmVDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLXJvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJvdy5jZWxsRWxlbWVudHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgJChjZWxsKS5yZW1vdmVDbGFzcyhcInRyZWUtZ3JpZC1mb2N1c2VkLWNlbGxcIik7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGZvY3VzZWRSb3cgPSB0aGlzLnJvd3NbdGhpcy5mb2N1c2VkUm93SW5kZXhdO1xyXG4gICAgICAgIGlmIChmb2N1c2VkUm93ICYmIGZvY3VzZWRSb3cuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGZvY3VzZWRSb3cuZWxlbWVudCkuYWRkQ2xhc3MoXCJ0cmVlLWdyaWQtZm9jdXNlZC1yb3dcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZm9jdXNlZENlbGxFbGVtZW50ID0gZm9jdXNlZFJvdy5jZWxsRWxlbWVudHNbdGhpcy5mb2N1c2VkQ2VsbEluZGV4XTtcclxuICAgICAgICAgICAgaWYgKGZvY3VzZWRDZWxsRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgJChmb2N1c2VkQ2VsbEVsZW1lbnQpLmFkZENsYXNzKFwidHJlZS1ncmlkLWZvY3VzZWQtY2VsbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZENlbGxFbGVtZW50KCk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvd3NbdGhpcy5mb2N1c2VkUm93SW5kZXhdLmNlbGxFbGVtZW50c1t0aGlzLmZvY3VzZWRDZWxsSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm93c1t0aGlzLmZvY3VzZWRSb3dJbmRleF0uZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbERvd24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZFJvd0luZGV4IDwgdGhpcy5yb3dzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c2VkUm93SW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm93RWwgPSAkKHRoaXMuZ2V0Rm9jdXNlZFJvd0VsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyDRg9GI0LvQviDQt9CwINC/0YDQtdC00LXQu9GLINCy0LjQtNC40LzQvtGB0YLQuFxyXG4gICAgICAgICAgICBpZiAocm93RWwucG9zaXRpb24oKS50b3AgKyByb3dFbC5oZWlnaHQoKSA+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5zY3JvbGxUb3AgKyB0aGlzLmJvZHlXcmFwcGVyRWxlbWVudC5jbGllbnRIZWlnaHQgLSAkKHRoaXMuZm9vdGVyRWxlbWVudCkub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wID0gcm93RWwucG9zaXRpb24oKS50b3AgKyByb3dFbC5oZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJCh0aGlzLmZvb3RlckVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZvY3VzZWRDZWxsTGVmdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkQ2VsbEluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRDZWxsSW5kZXgtLTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVGb2N1c2VkQ2VsbFJpZ2h0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yb3dzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRDZWxsSW5kZXggPCB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRDZWxsSW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VGb2N1c2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRm9jdXNlZENlbGxVcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucm93cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkUm93SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZFJvd0luZGV4LS07XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRm9jdXNlZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvd0VsID0gJCh0aGlzLmdldEZvY3VzZWRSb3dFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgLy8g0YPRiNC70L4g0LfQsCDQv9GA0LXQtNC10LvRiyDQstC40LTQuNC80L7RgdGC0LhcclxuICAgICAgICAgICAgaWYgKHJvd0VsLnBvc2l0aW9uKCkudG9wIDwgdGhpcy5ib2R5V3JhcHBlckVsZW1lbnQuc2Nyb2xsVG9wICsgJCh0aGlzLmhlYWRlckVsZW1lbnQpLm91dGVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9keVdyYXBwZXJFbGVtZW50LnNjcm9sbFRvcCA9IHJvd0VsLnBvc2l0aW9uKCkudG9wIC0gJCh0aGlzLmhlYWRlckVsZW1lbnQpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUJvZHlLZXlEb3duKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IEtleWNvZGUuRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbERvd24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5VcCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbFVwKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IEtleWNvZGUuTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbExlZnQoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gS2V5Y29kZS5SaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c2VkQ2VsbFJpZ2h0KCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlckNvbHVtbkhlYWRlcnMoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgY29sV2lkdGhzOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgbGV0IGNvbEhlYWRlcnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29sV2lkdGhzLnB1c2goPGNvbCBrZXk9e2luZGV4fSB3aWR0aD17IGNvbC53aWR0aC50b1N0cmluZygpICsgXCJweFwiIH0vPik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGRTdHlsZTogYW55ID0ge292ZXJmbG93OiBcImhpZGRlblwifTtcclxuXHJcbiAgICAgICAgICAgIGNvbEhlYWRlcnMucHVzaCg8dGQga2V5PXtpbmRleH0gc3R5bGU9e3RkU3R5bGV9Pntjb2wuY2FwdGlvbn08L3RkPik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJlZj17IChlKSA9PiB0aGlzLmhlYWRlckVsZW1lbnQgPSBlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBib3JkZXI6XCIwcHggc29saWQgcmVkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVlLWdyaWQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RhYmxlTGF5b3V0OiBcImZpeGVkXCIsYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgd2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKSsyNX19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sV2lkdGhzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbEhlYWRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb2x1bW5Gb290ZXJzKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgbGV0IGNvbFdpZHRoczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xGb290ZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBpc0Zvb3RlckVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sOiBJbnRlcm5hbENvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb2xXaWR0aHMucHVzaCg8Y29sIGtleT17aW5kZXh9IHdpZHRoPXsgY29sLndpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCIgfS8+KTtcclxuICAgICAgICAgICAgaWYgKGNvbC5mb290ZXIpXHJcbiAgICAgICAgICAgICAgICBpc0Zvb3RlckVtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB0ZFN0eWxlOiBhbnkgPSB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9O1xyXG4gICAgICAgICAgICBjb2xGb290ZXJzLnB1c2goPHRkIGtleT17aW5kZXh9IHN0eWxlPXt0ZFN0eWxlfT57Y29sLmZvb3Rlcn08L3RkPik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghaXNGb290ZXJFbXB0eSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuZm9vdGVyRWxlbWVudCA9IGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246XCJhYnNvbHV0ZVwiLCBib3JkZXI6XCIwcHggc29saWQgYmx1ZVwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWZvb3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGFibGVMYXlvdXQ6IFwiZml4ZWRcIixib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpKzI1fX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xXaWR0aHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbEZvb3RlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyR3JpZEJvZHkoKTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgICAgICBsZXQgY29sV2lkdGhzOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29sV2lkdGhzLnB1c2goPGNvbCBrZXk9e2luZGV4fSB3aWR0aD17IGNvbC53aWR0aC50b1N0cmluZygpICsgXCJweFwiIH0vPik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICBvbktleURvd249eyAoZSkgPT4geyAgdGhpcy5oYW5kbGVCb2R5S2V5RG93bihlKTsgfSB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0YWJsZUxheW91dDogXCJmaXhlZFwiLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDp0aGlzLmNhbGNUb3RhbENvbHVtbnNXaWR0aCgpKzI1fX1cclxuXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sV2lkdGhzfVxyXG4gICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgcmVmPXsgKGUpID0+IHRoaXMuaGVhZGVyRmFrZVJvdyA9IGV9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUm93cygpfVxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCByZWY9eyAoZSkgPT4gdGhpcy5mb290ZXJGYWtlUm93ID0gZX0+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4vL2JvZHlUb3BGYWtlSGVpZ3RoOiBudW1iZXIgPSAxO1xyXG4gICAgYm9keVdyYXBwZXJFbGVtZW50OiBhbnk7XHJcbiAgICBoZWFkZXJGYWtlUm93OiBhbnk7XHJcbiAgICBmb290ZXJGYWtlUm93OiBhbnk7XHJcbiAgICBoZWFkZXJFbGVtZW50OiBhbnk7XHJcbiAgICBmb290ZXJFbGVtZW50OiBhbnk7XHJcblxyXG4gICAgY2FsY1RvdGFsQ29sdW1uc1dpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHJldCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbDogSW50ZXJuYWxDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjb2wuaGlkZGVuKVxyXG4gICAgICAgICAgICAgICAgcmV0ICs9IGNvbC53aWR0aDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzaGFsbG93Q29tcGFyZShuZXh0UHJvcHM6IFRyZWVHcmlkUHJvcHMpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNoYWxsb3ctdHJlZS1ncmlkXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzaGFsbG93LXdpbiAtPiBpc0VxaWFsID0gXCIgKyB0aGlzLmlzUHJvcHNFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMsIFtcImNoaWxkcmVuXCJdKSk7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzUHJvcHNFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMsIFtcImNoaWxkcmVuXCIsXCJkYXRhU291cmNlXCJdKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vdGhpcy5hZGRDbGFzc05hbWUoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXItdHJlZS1ncmlkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWUtZ3JpZFwiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWhlYWRlci13cmFwcGVyXCIgc3R5bGU9e3sgZmxleDogXCIwIDAgYXV0b1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoIDUwMDFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZmlsdGVyRGF0YSgpOyB0aGlzLmZvcmNlVXBkYXRlKCk7IGNvbnNvbGUubG9nKFwiZm9yY2VVcGRhdGVcIik7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICDQt9Cw0LPQvtC70L7QstC+0Log0Lgg0YIu0LQuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWJvZHktd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOlwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6XCJhdXRvXCIsIGZsZXg6IFwiMCAxIGF1dG9cIiwgbWF4V2lkdGg6dGhpcy5jYWxjVG90YWxDb2x1bW5zV2lkdGgoKSs1MH19XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXsgdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgcmVmPXsgKGUpID0+IHRoaXMuYm9keVdyYXBwZXJFbGVtZW50ID0gZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJHcmlkQm9keSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2x1bW5IZWFkZXJzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbHVtbkZvb3RlcnMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZS1ncmlkLWZvb3Rlci13cmFwcGVyXCIgc3R5bGU9e3sgZmxleDogXCIwIDEgYXV0b1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgINGE0YPRgtC10YAg0Lgg0YLQtFxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZC50c3hcbiAqKi8iLCLvu79pbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRDb2x1bW5zUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyB7XHJcbiAgICAvL2NhcHRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbnMgZXh0ZW5kcyBDb21wb25lbnQ8VHJlZUdyaWRDb2x1bW5zUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVlR3JpZENvbHVtbnNQcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWh0YV9tb2R1bGVzL2J1aHRhLWNvcmUvQ29tcG9uZW50cy9UcmVlR3JpZC9UcmVlR3JpZENvbHVtbnMudHN4XG4gKiovIiwi77u/aW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIENvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG4vL2ltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkQ29sdW1uUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyB7XHJcbiAgICBjYXB0aW9uPzogc3RyaW5nO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICBzaG93SGllcmFyY2h5VHJlZT86IGJvb2xlYW47XHJcbiAgICBzaG93SGllcmFyY2h5UGFkZGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZENvbHVtbiBleHRlbmRzIENvbXBvbmVudDxUcmVlR3JpZENvbHVtblByb3BzLCBhbnk+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlZUdyaWRDb2x1bW5Qcm9wcywgY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAvL3RoaXMuc3RhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICAgICAgLy90aGlzLmFkZENsYXNzTmFtZShcImJ0blwiKTtcclxuICAgICAgICAvL3RoaXMudG9nZ2xlQ2xhc3NOYW1lKHRoaXMucHJvcHMuZGlzYWJsZWQsIFwiZGlzYWJsZWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAobnVsbCk7XHJcbiAgICAgICAgLy9UcmVlR3JpZCBmcm9tIHt0aGlzLnByb3BzLmNvbXBpbGVyfSBhbmQge3RoaXMucHJvcHMuZnJhbWV3b3JrfSFjbGlja0NvdW50PXt0aGlzLnN0YXRlLmNsaWNrQ291bnR9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9Db21wb25lbnRzL1RyZWVHcmlkL1RyZWVHcmlkQ29sdW1uLnRzeFxuICoqLyIsIlxyXG5leHBvcnQgdmFyIEtleWNvZGUgPSB7XHJcbiAgICBFc2M6IFwiRXNjYXBlXCIsXHJcbiAgICBTcGFjZTogXCIgXCIsXHJcblxyXG4gICAgTGVmdDogXCJBcnJvd0xlZnRcIixcclxuICAgIFVwOiBcIkFycm93VXBcIixcclxuICAgIERvd246IFwiQXJyb3dEb3duXCIsXHJcbiAgICBSaWdodDogXCJBcnJvd1JpZ2h0XCIsXHJcblxyXG4gICAgRGVsOiBcIkRlbGV0ZVwiLFxyXG4gICAgSW5zOiBcIkluc2VydFwiLFxyXG5cclxuICAgIFdpbjogXCJNZXRhXCIsXHJcbiAgICBNZW51OiBcIkNvbnRleHRNZW51XCIsXHJcblxyXG4gICAgU2Nyb2xsOiBcIlNjcm9sbExvY2tcIixcclxuICAgIE51bTogXCJOdW1Mb2NrXCIsXHJcblxyXG4gICAgQmFja3NwYWNlOiBcIkJhY2tzcGFjZVwiLFxyXG4gICAgVGFiOiBcIlRhYlwiLFxyXG4gICAgRW50ZXI6IFwiRW50ZXJcIixcclxuICAgIFNoaWZ0OiBcIlNoaWZ0XCIsXHJcbiAgICBDb250cm9sOiBcIkNvbnRyb2xcIixcclxuICAgIEFsdDogXCJBbHRcIixcclxuICAgIEJyZWFrOiBcIlBhdXNlXCIsXHJcbiAgICBDYXBzTG9jazogXCJDYXBzTG9ja1wiLFxyXG5cclxuICAgIFBhZ2VVcDogXCJQYWdlVXBcIixcclxuICAgIFBhZ2VEb3duOiBcIlBhZ2VEb3duXCIsXHJcbiAgICBFbmQ6IFwiRW5kXCIsXHJcbiAgICBIb21lOiBcIkhvbWVcIixcclxuXHJcbiAgICBGMTogXCJGMVwiLFxyXG4gICAgRjI6IFwiRjJcIixcclxuICAgIEYzOiBcIkYzXCIsXHJcbiAgICBGNDogXCJGNFwiLFxyXG4gICAgRjU6IFwiRjVcIixcclxuICAgIEY2OiBcIkY2XCIsXHJcbiAgICBGNzogXCJGN1wiLFxyXG4gICAgRjg6IFwiRjhcIixcclxuICAgIEY5OiBcIkY5XCIsXHJcbiAgICBGMTA6IFwiRjEwXCIsXHJcbiAgICBGMTE6IFwiRjExXCIsXHJcbiAgICBGMTI6IFwiRjEyXCJcclxuXHJcbn07XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1aHRhX21vZHVsZXMvYnVodGEtY29yZS9LZXlDb2RlLnRzXG4gKiovIiwi77u/aW1wb3J0ICogYXMgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuXHJcblxyXG5sZXQgc29ja2V0ID0gaW8uY29ubmVjdCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTUUwoc3FsOiBzdHJpbmcpOiBKUXVlcnlQcm9taXNlPERhdGFUYWJsZT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImNhbGwgU1FMLnNxbC5leGVjdXRlXCIpO1xyXG4gICAgLy9yZXR1cm4gc2lnbmFsUi5leGVjdXRlU1FMKHNxbCk7XHJcblxyXG5cclxuICAgIGxldCBwcm9taXNlOiBKUXVlcnlEZWZlcnJlZDxEYXRhVGFibGU+O1xyXG4gICAgcHJvbWlzZSA9ICQuRGVmZXJyZWQ8RGF0YVRhYmxlPigpO1xyXG5cclxuICAgIC8vICBzb2NrZXQub25jZSgnY29ubmVjdCcsKCkgPT4ge1xyXG4gICAgbGV0IHF1ZXJ5SWQgPSBcInF1ZXJ5LVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XHJcbiAgICBzb2NrZXQuZW1pdChcImV4ZWN1dGVTUUxcIiwge3F1ZXJ5SWQsIHNxbH0pO1xyXG4gICAgc29ja2V0Lm9uY2UocXVlcnlJZCwgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QocmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRhdGFUYWJsZSA9IG5ldyBEYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFDb2x1bW4gPSBuZXcgRGF0YUNvbHVtbihkYXRhVGFibGUsIHJlc3BvbnNlLmNvbHVtbnNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhVGFibGUuY29sdW1ucy5wdXNoKGRhdGFDb2x1bW4pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNwb25zZS5yb3dzLmZvckVhY2goKHJvdzogYW55KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFSb3cgPSBuZXcgRGF0YVJvdyhkYXRhVGFibGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29sdW1uc1tpXS5wYXJzZSA9PT0gXCJEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbZGF0YVRhYmxlLmNvbHVtbnNbaV0ubmFtZV0gPSBuZXcgRGF0ZShyb3dbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1tkYXRhVGFibGUuY29sdW1uc1tpXS5uYW1lXSA9IHJvd1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RhdGFSb3dbaV0gPSByb3dbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVRhYmxlLnJvd3MucHVzaChkYXRhUm93KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRhdGFUYWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gICB9KTtcclxuXHJcblxyXG4gICAgLy9zaWduYWxSLmV4ZWN1dGVTUUwoc3FsKS5cclxuICAgIC8vICAgIGRvbmUoKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICBsZXQgcmVzID0gZXZhbChyZXN1bHQpO1xyXG5cclxuICAgIC8vICAgICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHJlcy5lcnJvcik7XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICBsZXQgZHMgPSBuZXcgRGF0YXNldCgpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgcmVzLnRhYmxlcy5mb3JFYWNoKCh0YWJsZSkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgbGV0IGRhdGFUYWJsZSA9IG5ldyBEYXRhVGFibGUoZHMpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgZGF0YVRhYmxlLm5hbWUgPSB0YWJsZS5uYW1lO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgZHMudGFibGVzLnB1c2goZGF0YVRhYmxlKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUNvbHVtbiA9IG5ldyBEYXRhQ29sdW1uKGRhdGFUYWJsZSwgdGFibGUuY29sdW1uc1tpXS5uYW1lKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGUuY29sdW1ucy5wdXNoKGRhdGFDb2x1bW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgIHRhYmxlLnJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhUm93ID0gbmV3IERhdGFSb3coKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFSb3dbdGFibGUuY29sdW1uc1tpXS5uYW1lXSA9IHJvd1tpXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJvd1tpXSA9IHJvd1tpXTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5yb3dzLnB1c2goZGF0YVJvdyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZHMpXHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfSkuXHJcbiAgICAvLyAgICBmYWlsKCgpID0+IHtcclxuICAgIC8vICAgICAgICBwcm9taXNlLnJlamVjdChcItC+0YjQuNCx0LrQsCBjb25uZWN0aW9uIHNpZ25hbFJcIik7XHJcbiAgICAvLyAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IGVudW0gQ29sdW1uRGF0YVR5cGUgeyBTdHJpbmcsIE51bWJlciwgRGF0YSB9XHJcblxyXG4vL2V4cG9ydCB0eXBlIERhdGFUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZSB7XHJcbiAgICBjb2x1bW5zOiBBcnJheTxEYXRhQ29sdW1uPjtcclxuICAgIHJvd3M6IEFycmF5PERhdGFSb3c+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUNvbHVtbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAvL2RhdGFUeXBlOiBDb2x1bW5EYXRhVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlLCBuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVJvdyB7XHJcbiAgICBbaW5kZXg6IHN0cmluZ106IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZTogRGF0YVRhYmxlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoY29sdW1uSW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgMCB8fCBjb2x1bW5JbmRleCA+PSB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkRhdGFSb3cuZ2V0VmFsdWUoXCIgKyBjb2x1bW5JbmRleCArIFwiKTogY29sdW1uSW5kZXggb3V0IG9mIHJhbmdlXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBbdGhpcy50YWJsZS5jb2x1bW5zW2NvbHVtbkluZGV4XS5uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvL1tpbmRleDogbnVtYmVyXTogRGF0YVR5cGU7XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9idWh0YS1jb3JlL1NRTC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gaW87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlvXCJcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==