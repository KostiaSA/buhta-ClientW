"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Core = require("../index");
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
        //console.log("жопа13 state.visible=" + state.visible.toString());
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
}(Core.ComponentPlugin));
exports.VisiblePlugin = VisiblePlugin;
function Visible(target) {
    target.plugins.push(Core.VisiblePlugin);
    return target;
}
exports.Visible = Visible;
//# sourceMappingURL=VisiblePlugin.js.map