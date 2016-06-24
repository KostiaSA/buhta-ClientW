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
	        return React.createElement("div", null, "Hello 3++44=66332===22o3m ", this.props.compiler, " and ", this.props.framework, "!", React.createElement(SplitPane, {split: "vertical", minSize: 50, defaultSize: 100}, React.createElement("div", null, "3333=====444==33====333"), React.createElement("div", null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjUwMWJmMzlhYmQ1YTcxMmZmZmMiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL0hlbGxvUHJvcHMudHN4Iiwid2VicGFjazovLy8uL34vcmVhY3Qtc3BsaXQtcGFuZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXNwbGl0LXBhbmUvbGliL1NwbGl0UGFuZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXNwbGl0LXBhbmUvbGliL1BhbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zcGxpdC1wYW5lL2xpYi9SZXNpemVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSxLQUFZLEtBQUssdUJBQU0sQ0FBTyxDQUFDO0FBQy9CLEtBQVksUUFBUSx1QkFBTSxDQUFXLENBQUM7QUFFdEMsd0NBQXNCLENBQWMsQ0FBQztBQUVyQyxTQUFRLENBQUMsTUFBTSxDQUNYLG9CQUFDLGtCQUFLLEdBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFHLEVBQ2pELFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQ3JDLENBQUM7Ozs7Ozs7QUNSRix3Qjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7OztBQ0FBLEtBQVksS0FBSyx1QkFB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQiw2Q0FBNkM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDOzs7Ozs7QUM5RUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQsaUNBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyREFBMEQsOERBQThEO0FBQ3hIO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDIiwiZmlsZSI6Ii4vZGlzdC9CdWh0YUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYjUwMWJmMzlhYmQ1YTcxMmZmZmNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgSGVsbG8gfSBmcm9tIFwiLi9IZWxsb1Byb3BzXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8SGVsbG8gY29tcGlsZXI9XCJUeXBlU2NyaXB0XCIgZnJhbWV3b3JrPVwiUmVhY3RcIiAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZVwiKVxyXG4pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL2luZGV4LnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFNwbGl0UGFuZSBmcm9tIFwicmVhY3Qtc3BsaXQtcGFuZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWxsb1Byb3BzIHsgY29tcGlsZXI6IHN0cmluZzsgZnJhbWV3b3JrOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIZWxsbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxIZWxsb1Byb3BzLCB7fT4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgSGVsbG8gMysrNDQ9NjYzMzI9PT0yMm8zbSB7dGhpcy5wcm9wcy5jb21waWxlcn0gYW5kIHt0aGlzLnByb3BzLmZyYW1ld29ya30hXHJcbiAgICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9ezUwfSBkZWZhdWx0U2l6ZT17MTAwfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+MzMzMz09PT09NDQ0PT0zMz09PT0zMzM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3BsaXRQYW5lPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVodGFfbW9kdWxlcy9jb21wb25lbnRzL0hlbGxvUHJvcHMudHN4XG4gKiovIiwidmFyIFNwbGl0UGFuZSA9IHJlcXVpcmUoJy4vbGliL1NwbGl0UGFuZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0UGFuZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1zcGxpdC1wYW5lL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9QYW5lID0gcmVxdWlyZSgnLi9QYW5lJyk7XG5cbnZhciBfUGFuZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYW5lKTtcblxudmFyIF9SZXNpemVyID0gcmVxdWlyZSgnLi9SZXNpemVyJyk7XG5cbnZhciBfUmVzaXplcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZXNpemVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU3BsaXRQYW5lID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU3BsaXRQYW5lLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFNwbGl0UGFuZSgpIHtcbiAgICAgICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3BsaXRQYW5lKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3BsaXRQYW5lKSkuY2FsbC5hcHBseShfT2JqZWN0JGdldFByb3RvdHlwZU8sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5vbk1vdXNlRG93biA9IF90aGlzLm9uTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IF90aGlzLm9uTW91c2VNb3ZlLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbk1vdXNlVXAgPSBfdGhpcy5vbk1vdXNlVXAuYmluZChfdGhpcyk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgcmVzaXplZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTcGxpdFBhbmUsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTaXplKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2l6ZShwcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1vdXNlRG93bicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYWxsb3dSZXNpemUgJiYgIXRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5Gb2N1cygpO1xuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyBldmVudC5jbGllbnRYIDogZXZlbnQuY2xpZW50WTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25EcmFnU3RhcnRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uTW91c2VNb3ZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hbGxvd1Jlc2l6ZSAmJiAhdGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5Gb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNQcmltYXJ5Rmlyc3QgPSB0aGlzLnByb3BzLnByaW1hcnkgPT09ICdmaXJzdCc7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWYgPSBpc1ByaW1hcnlGaXJzdCA/IHRoaXMucmVmcy5wYW5lMSA6IHRoaXMucmVmcy5wYW5lMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUocmVmKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNpemUgPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5zdGF0ZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSBpc1ByaW1hcnlGaXJzdCA/IHBvc2l0aW9uIC0gY3VycmVudCA6IGN1cnJlbnQgLSBwb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhTaXplID0gdGhpcy5wcm9wcy5tYXhTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm1heFNpemUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzLm1heFNpemUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BsUGFuZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc3BsaXRQYW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFNpemUgPSBzcGxQYW5lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgdGhpcy5wcm9wcy5tYXhTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4U2l6ZSA9IHNwbFBhbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgdGhpcy5wcm9wcy5tYXhTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1NpemUgPSBzaXplIC0gbmV3UG9zaXRpb247XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2l6ZSA8IHRoaXMucHJvcHMubWluU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gdGhpcy5wcm9wcy5taW5TaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tYXhTaXplICE9PSB1bmRlZmluZWQgJiYgbmV3U2l6ZSA+IG1heFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IG1heFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnZWRTaXplOiBuZXdTaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogbmV3U2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbk1vdXNlVXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYWxsb3dSZXNpemUgJiYgIXRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25EcmFnRmluaXNoZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25EcmFnRmluaXNoZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRTaXplJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNpemUocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgcmVmID0gdGhpcy5wcm9wcy5wcmltYXJ5ID09PSAnZmlyc3QnID8gdGhpcy5yZWZzLnBhbmUxIDogdGhpcy5yZWZzLnBhbmUyO1xuICAgICAgICAgICAgdmFyIG5ld1NpemUgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHByb3BzLnNpemUgfHwgc3RhdGUgJiYgc3RhdGUuZHJhZ2dlZFNpemUgfHwgcHJvcHMuZGVmYXVsdFNpemUgfHwgcHJvcHMubWluU2l6ZTtcbiAgICAgICAgICAgICAgICByZWYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaXplOiBuZXdTaXplXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuRm9jdXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5Gb2N1cygpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgc3BsaXQgPSBfcHJvcHMuc3BsaXQ7XG4gICAgICAgICAgICB2YXIgYWxsb3dSZXNpemUgPSBfcHJvcHMuYWxsb3dSZXNpemU7XG5cbiAgICAgICAgICAgIHZhciBkaXNhYmxlZENsYXNzID0gYWxsb3dSZXNpemUgPyAnJyA6ICdkaXNhYmxlZCc7XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIE1velVzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBXZWJraXRVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbXNVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdDogJ3RleHQnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoc3BsaXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyhzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyhzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gWydTcGxpdFBhbmUnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgc3BsaXQsIGRpc2FibGVkQ2xhc3NdO1xuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzZXMuam9pbignICcpLCBzdHlsZTogc3R5bGUsIHJlZjogJ3NwbGl0UGFuZScgfSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgX1BhbmUyLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIHsgcmVmOiAncGFuZTEnLCBrZXk6ICdwYW5lMScsIGNsYXNzTmFtZTogJ1BhbmUxJywgc3BsaXQ6IHNwbGl0IH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuWzBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUmVzaXplcjIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgICAgICByZWY6ICdyZXNpemVyJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncmVzaXplcicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZGlzYWJsZWRDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgICAgICAgICAgIHNwbGl0OiBzcGxpdFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBfUGFuZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgeyByZWY6ICdwYW5lMicsIGtleTogJ3BhbmUyJywgY2xhc3NOYW1lOiAnUGFuZTInLCBzcGxpdDogc3BsaXQgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bMV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNwbGl0UGFuZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblNwbGl0UGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgcHJpbWFyeTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2ZpcnN0JywgJ3NlY29uZCddKSxcbiAgICBtaW5TaXplOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMubnVtYmVyXSksXG4gICAgbWF4U2l6ZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGRlZmF1bHRTaXplOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMubnVtYmVyXSksXG4gICAgc2l6ZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGFsbG93UmVzaXplOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc3BsaXQ6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICAgIG9uRHJhZ1N0YXJ0ZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRyYWdGaW5pc2hlZDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogX3JlYWN0LlByb3BUeXBlcy5hcnJheU9mKF9yZWFjdC5Qcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZFxufTtcblxuU3BsaXRQYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzcGxpdDogJ3ZlcnRpY2FsJyxcbiAgICBtaW5TaXplOiA1MCxcbiAgICBhbGxvd1Jlc2l6ZTogdHJ1ZSxcbiAgICBwcmltYXJ5OiAnZmlyc3QnXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTcGxpdFBhbmU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1zcGxpdC1wYW5lL2xpYi9TcGxpdFBhbmUuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYW5lID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUGFuZSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQYW5lKCkge1xuICAgICAgICB2YXIgX09iamVjdCRnZXRQcm90b3R5cGVPO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5lKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUGFuZSkpLmNhbGwuYXBwbHkoX09iamVjdCRnZXRQcm90b3R5cGVPLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQYW5lLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIHNwbGl0ID0gdGhpcy5wcm9wcy5zcGxpdDtcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gWydQYW5lJywgc3BsaXQsIHRoaXMucHJvcHMuY2xhc3NOYW1lXTtcblxuICAgICAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUud2lkdGggPSB0aGlzLnN0YXRlLnNpemU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gdGhpcy5zdGF0ZS5zaXplO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZS5mbGV4ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzZXMuam9pbignICcpLCBzdHlsZTogc3R5bGUgfSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBhbmU7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5QYW5lLnByb3BUeXBlcyA9IHtcbiAgICBzcGxpdDogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXSksXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQYW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtc3BsaXQtcGFuZS9saWIvUGFuZS5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJlc2l6ZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSZXNpemVyLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFJlc2l6ZXIoKSB7XG4gICAgICAgIHZhciBfT2JqZWN0JGdldFByb3RvdHlwZU87XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc2l6ZXIpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9PYmplY3QkZ2V0UHJvdG90eXBlTyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZXNpemVyKSkuY2FsbC5hcHBseShfT2JqZWN0JGdldFByb3RvdHlwZU8sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5vbk1vdXNlRG93biA9IF90aGlzLm9uTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlc2l6ZXIsIFt7XG4gICAgICAgIGtleTogJ29uTW91c2VEb3duJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHNwbGl0ID0gX3Byb3BzLnNwbGl0O1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG5cbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gWydSZXNpemVyJywgc3BsaXQsIGNsYXNzTmFtZV07XG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5qb2luKCcgJyksIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlc2l6ZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SZXNpemVyLnByb3BUeXBlcyA9IHtcbiAgICBvbk1vdXNlRG93bjogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc3BsaXQ6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICAgIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzaXplcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXNwbGl0LXBhbmUvbGliL1Jlc2l6ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9