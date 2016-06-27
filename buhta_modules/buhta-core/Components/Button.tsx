import * as Core from "../index"
//import * as DependencyInjection from "ts-dependency-injection"
import * as React from "react";
import {VisiblePluginProps} from "../Plugins/VisiblePlugin";

export interface ButtonProps extends VisiblePluginProps {
    text?: string;
}


function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
            console.log(name);
        });
    });
}

function sealed(target) {
    console.log("sealed");
    target.plugins.push(Core.VisiblePlugin);
    console.log(target.plugins);
    Object.getOwnPropertyNames(Core.VisiblePlugin.prototype).forEach(name => {
        //derivedCtor.prototype[name] = baseCtor.prototype[name];
        console.log("prop: " + name);
    });
    window["xxx"] = target;
    //   applyMixins(target,[VisibleMixin]);
    //return target;
    return target;

}

@Core.Visible
export class Button extends Core.Component<ButtonProps,{}> {
    constructor(props: ButtonProps, context) {
        super(props, context);
        this.props = props;

        //  this.visibleMixin = new VisibleMixin(props, context);
    }

    //@DependencyInjection.AutoInject(VisibleMixin)
    //visibleMixin: VisibleMixin;

    render() {
        //this.addClassName("button");
        console.log("render button");

        return (
            <button className={this.renderClassName()}>
                {this.props.children}
            </button>
        )
            ;
    }

}