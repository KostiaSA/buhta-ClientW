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
	var HelloProps_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(HelloProps_1.Hello, {compiler: "TypeScript", framework: "React"}), document.getElementById("example"));


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
	var SplitPane = __webpack_require__(4);
	var Hello = (function (_super) {
	    __extends(Hello, _super);
	    function Hello() {
	        _super.apply(this, arguments);
	    }
	    Hello.prototype.render = function () {
	        return React.createElement("div", null, "Hello 3++=33222o3m ", this.props.compiler, " and ", this.props.framework, "!", React.createElement(SplitPane, {split: "vertical", minSize: 50, defaultSize: 100}, "2222222", React.createElement("div", null, "3333333"), React.createElement("div", null)));
	    };
	    return Hello;
	}(React.Component));
	exports.Hello = Hello;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var SplitPane = __webpack_require__(5);
	
	module.exports = SplitPane;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Pane = __webpack_require__(6);
	
	var _Pane2 = _interopRequireDefault(_Pane);
	
	var _Resizer = __webpack_require__(7);
	
	var _Resizer2 = _interopRequireDefault(_Resizer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SplitPane = function (_Component) {
	    _inherits(SplitPane, _Component);
	
	    function SplitPane() {
	        var _Object$getPrototypeO;
	
	        _classCallCheck(this, SplitPane);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SplitPane)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	
	        _this.onMouseDown = _this.onMouseDown.bind(_this);
	        _this.onMouseMove = _this.onMouseMove.bind(_this);
	        _this.onMouseUp = _this.onMouseUp.bind(_this);
	
	        _this.state = {
	            active: false,
	            resized: false
	        };
	        return _this;
	    }
	
	    _createClass(SplitPane, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setSize(this.props, this.state);
	            document.addEventListener('mouseup', this.onMouseUp);
	            document.addEventListener('mousemove', this.onMouseMove);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            this.setSize(props, this.state);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            document.removeEventListener('mouseup', this.onMouseUp);
	            document.removeEventListener('mousemove', this.onMouseMove);
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown(event) {
	            if (this.props.allowResize && !this.props.size) {
	                this.unFocus();
	                var position = this.props.split === 'vertical' ? event.clientX : event.clientY;
	                if (typeof this.props.onDragStarted === 'function') {
	                    this.props.onDragStarted();
	                }
	                this.setState({
	                    active: true,
	                    position: position
	                });
	            }
	        }
	    }, {
	        key: 'onMouseMove',
	        value: function onMouseMove(event) {
	            if (this.props.allowResize && !this.props.size) {
	                if (this.state.active) {
	                    this.unFocus();
	                    var isPrimaryFirst = this.props.primary === 'first';
	                    var ref = isPrimaryFirst ? this.refs.pane1 : this.refs.pane2;
	                    if (ref) {
	                        var node = _reactDom2.default.findDOMNode(ref);
	
	                        if (node.getBoundingClientRect) {
	                            var width = node.getBoundingClientRect().width;
	                            var height = node.getBoundingClientRect().height;
	                            var current = this.props.split === 'vertical' ? event.clientX : event.clientY;
	                            var size = this.props.split === 'vertical' ? width : height;
	                            var position = this.state.position;
	                            var newPosition = isPrimaryFirst ? position - current : current - position;
	
	                            var maxSize = this.props.maxSize;
	                            if (this.props.maxSize !== undefined && this.props.maxSize <= 0) {
	                                var splPane = _reactDom2.default.findDOMNode(this.refs.splitPane);
	                                if (this.props.split === 'vertical') {
	                                    maxSize = splPane.getBoundingClientRect().width + this.props.maxSize;
	                                } else {
	                                    maxSize = splPane.getBoundingClientRect().height + this.props.maxSize;
	                                }
	                            }
	
	                            var newSize = size - newPosition;
	
	                            if (newSize < this.props.minSize) {
	                                newSize = this.props.minSize;
	                            } else if (this.props.maxSize !== undefined && newSize > maxSize) {
	                                newSize = maxSize;
	                            } else {
	                                this.setState({
	                                    position: current,
	                                    resized: true
	                                });
	                            }
	
	                            if (this.props.onChange) {
	                                this.props.onChange(newSize);
	                            }
	                            this.setState({
	                                draggedSize: newSize
	                            });
	                            ref.setState({
	                                size: newSize
	                            });
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'onMouseUp',
	        value: function onMouseUp() {
	            if (this.props.allowResize && !this.props.size) {
	                if (this.state.active) {
	                    if (typeof this.props.onDragFinished === 'function') {
	                        this.props.onDragFinished();
	                    }
	                    this.setState({
	                        active: false
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'setSize',
	        value: function setSize(props, state) {
	            var ref = this.props.primary === 'first' ? this.refs.pane1 : this.refs.pane2;
	            var newSize = void 0;
	            if (ref) {
	                newSize = props.size || state && state.draggedSize || props.defaultSize || props.minSize;
	                ref.setState({
	                    size: newSize
	                });
	            }
	        }
	    }, {
	        key: 'unFocus',
	        value: function unFocus() {
	            if (document.selection) {
	                document.selection.empty();
	            } else {
	                window.getSelection().removeAllRanges();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var split = _props.split;
	            var allowResize = _props.allowResize;
	
	            var disabledClass = allowResize ? '' : 'disabled';
	
	            var style = {
	                display: 'flex',
	                flex: 1,
	                position: 'relative',
	                outline: 'none',
	                overflow: 'hidden',
	                MozUserSelect: 'text',
	                WebkitUserSelect: 'text',
	                msUserSelect: 'text',
	                userSelect: 'text'
	            };
	
	            if (split === 'vertical') {
	                _extends(style, {
	                    flexDirection: 'row',
	                    height: '100%',
	                    position: 'absolute',
	                    left: 0,
	                    right: 0
	                });
	            } else {
	                _extends(style, {
	                    flexDirection: 'column',
	                    height: '100%',
	                    minHeight: '100%',
	                    position: 'absolute',
	                    top: 0,
	                    bottom: 0,
	                    width: '100%'
	                });
	            }
	
	            var children = this.props.children;
	            var classes = ['SplitPane', this.props.className, split, disabledClass];
	
	            return _react2.default.createElement(
	                'div',
	                { className: classes.join(' '), style: style, ref: 'splitPane' },
	                _react2.default.createElement(
	                    _Pane2.default,
	                    { ref: 'pane1', key: 'pane1', className: 'Pane1', split: split },
	                    children[0]
	                ),
	                _react2.default.createElement(_Resizer2.default, {
	                    ref: 'resizer',
	                    key: 'resizer',
	                    className: disabledClass,
	                    onMouseDown: this.onMouseDown,
	                    split: split
	                }),
	                _react2.default.createElement(
	                    _Pane2.default,
	                    { ref: 'pane2', key: 'pane2', className: 'Pane2', split: split },
	                    children[1]
	                )
	            );
	        }
	    }]);
	
	    return SplitPane;
	}(_react.Component);
	
	SplitPane.propTypes = {
	    primary: _react.PropTypes.oneOf(['first', 'second']),
	    minSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    maxSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    defaultSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    size: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    allowResize: _react.PropTypes.bool,
	    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
	    onDragStarted: _react.PropTypes.func,
	    onDragFinished: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    className: _react.PropTypes.string,
	    children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired
	};
	
	SplitPane.defaultProps = {
	    split: 'vertical',
	    minSize: 50,
	    allowResize: true,
	    primary: 'first'
	};
	
	exports.default = SplitPane;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pane = function (_Component) {
	    _inherits(Pane, _Component);
	
	    function Pane() {
	        var _Object$getPrototypeO;
	
	        _classCallCheck(this, Pane);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Pane)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	
	        _this.state = {};
	        return _this;
	    }
	
	    _createClass(Pane, [{
	        key: 'render',
	        value: function render() {
	            var split = this.props.split;
	            var classes = ['Pane', split, this.props.className];
	
	            var style = {
	                flex: 1,
	                position: 'relative',
	                outline: 'none'
	            };
	
	            if (this.state.size !== undefined) {
	                if (split === 'vertical') {
	                    style.width = this.state.size;
	                } else {
	                    style.height = this.state.size;
	                    style.display = 'flex';
	                }
	                style.flex = 'none';
	            }
	
	            return _react2.default.createElement(
	                'div',
	                { className: classes.join(' '), style: style },
	                this.props.children
	            );
	        }
	    }]);
	
	    return Pane;
	}(_react.Component);
	
	Pane.propTypes = {
	    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
	    className: _react.PropTypes.string.isRequired,
	    children: _react.PropTypes.object.isRequired
	};
	
	exports.default = Pane;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Resizer = function (_Component) {
	    _inherits(Resizer, _Component);
	
	    function Resizer() {
	        var _Object$getPrototypeO;
	
	        _classCallCheck(this, Resizer);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Resizer)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	
	        _this.onMouseDown = _this.onMouseDown.bind(_this);
	        return _this;
	    }
	
	    _createClass(Resizer, [{
	        key: 'onMouseDown',
	        value: function onMouseDown(event) {
	            this.props.onMouseDown(event);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var split = _props.split;
	            var className = _props.className;
	
	            var classes = ['Resizer', split, className];
	            return _react2.default.createElement('span', { className: classes.join(' '), onMouseDown: this.onMouseDown });
	        }
	    }]);
	
	    return Resizer;
	}(_react.Component);
	
	Resizer.propTypes = {
	    onMouseDown: _react.PropTypes.func.isRequired,
	    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
	    className: _react.PropTypes.string.isRequired
	};
	
	exports.default = Resizer;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=BuhtaApp.js.map