"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var VisiblePlugin_1 = require("../../Plugins/VisiblePlugin");
var OnClickPlugin_1 = require("../../Plugins/OnClickPlugin");
var Component_1 = require("../Component");
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
//# sourceMappingURL=Button.js.map