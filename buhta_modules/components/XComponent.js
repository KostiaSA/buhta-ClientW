"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var XComponent = (function (_super) {
    __extends(XComponent, _super);
    function XComponent(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.renderClasses = [];
        this.renderProps = [];
        this.componentDidMount = function () {
            _this.didMount();
        };
        this.componentWillMount = function () {
            _this.willMount();
        };
        this.componentWillReceiveProps = function (nextProps) {
            _this.willReceiveProps(nextProps);
        };
        this.componentDidUpdate = function (prevProps, prevState, prevContext) {
            _this.didUpdate(prevProps, prevState, prevContext);
        };
        this.componentWillUnmount = function () {
            _this.willUnmount();
        };
        this.props = props;
        this["state"] = {};
    }
    XComponent.prototype.didMount = function () {
    };
    XComponent.prototype.willMount = function () {
    };
    XComponent.prototype.willUnmount = function () {
    };
    XComponent.prototype.willReceiveProps = function (nextProps) {
    };
    XComponent.prototype.didUpdate = function (prevProps, prevState, prevContext) {
    };
    XComponent.prototype.addClassName = function (classNames) {
        var _this = this;
        if (classNames)
            classNames.split(" ").forEach(function (name) {
                if (_this.renderClasses.indexOf(name) === -1)
                    _this.renderClasses.push(name);
            });
    };
    XComponent.prototype.toggleClassName = function (boolValue, trueClassNames, falseClassNames) {
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
    XComponent.prototype.removeClassName = function (classNames) {
        var _this = this;
        if (classNames)
            classNames.split(" ").forEach(function (name) {
                if (_this.renderClasses.indexOf(name) !== -1)
                    _this.renderClasses.splice(_this.renderClasses.indexOf(name), 1);
            });
    };
    XComponent.prototype.renderClassName = function () {
        this.addClassName(this.props.className);
        return this.renderClasses.join(" ");
    };
    XComponent.prototype.getRenderProps = function () {
        this.renderProps = {};
        this.renderProps.className = this.renderClassName();
        var p = this.props;
        if (p.onClick)
            this.renderProps.onClick = p.onClick;
        return this.renderProps;
    };
    XComponent.prototype.getChildren = function (childTypeName) {
        var ret = [];
        React.Children.toArray(this.props.children).forEach(function (child) {
            //if (Util.getReactElementClassName(child) === childTypeName)
            //  ret.push(child);
        });
        return ret;
    };
    XComponent.prototype.getChildrenOfProps = function (props, childTypeName) {
        var ret = [];
        React.Children.toArray(props.children).forEach(function (child) {
            //if (Util.getReactElementClassName(child) === childTypeName)
            //  ret.push(child);
        });
        return ret;
    };
    return XComponent;
}(React.Component));
exports.XComponent = XComponent;
//# sourceMappingURL=XComponent.js.map