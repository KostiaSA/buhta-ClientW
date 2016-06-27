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
//# sourceMappingURL=Plugin.js.map