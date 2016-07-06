﻿import * as React from "react";
import * as _ from "lodash";
import shallowCompare = require("react-addons-shallow-compare");

export interface XOnClickProps {
    onClick?: React.ReactEventHandler;
}

export interface ComponentProps extends React.ClassAttributes<Element> {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}


export class ComponentState {
    constructor(public component: Component<any,any>) {

    }
    forceUpdate(){
        this.component.forceUpdate();
    }
    // //clickCount: number;
    // style: React.CSSProperties;
}


export class Component<P extends ComponentProps, S extends ComponentState> extends React.Component<P, S> {

    static plugins: any[] = [];

    plugins: any[] = [];

    constructor(props: P, context:any /*stateClass?: Function*/) {
        super(props, context);
        this.props = props;

        // //(this as any)["state"] = {};
        // if (stateClass)
        //     this.state = stateClass();
        // else
        //     this.state = {} as S;

        Component.plugins.forEach((plug) => {
            let plugInstance: any = new plug(this);
            this.plugins.push(plugInstance);
        });
    }

    nativeElement: Element;

    private renderClasses: string[] = [];
    private renderProps: any = {};
    private renderStyles: any = {};

    addProps(props: Object) {
        _.assignWith(this.renderProps, props, (objectValue: any, sourceValue: any, key?: string)=> {
            if (key === "class" || key === "className")
                console.error("invalid property '" + key + "', use functions addClassName(), toggleClassName()");
            if (key === "style")
                console.error("invalid property '" + key + "', use functions addStyles(), removeStyle()");
            return sourceValue;
        });
    }

    addStyles(styles: Object) {
        _.assign(this.renderStyles, styles);
    }

    clearStyles() {
        this.renderStyles = {};
    }

    removeStyle(style: string) {
        delete this.renderStyles[style];
    }

    removeStyles(styles: string[]) {
        styles.forEach((style)=> {
            delete this.renderStyles[style];
        });
    }

    protected didMount() {
        this.plugins.forEach((plug) => {
            plug.didMount();
        });
    }

    private componentDidMount = () => {
        this.didMount();
    };

    protected willMount() {
        this.plugins.forEach((plug) => {
            plug.willMount();
        });
    }

    private componentWillMount = () => {
        this.willMount();
    };


    private componentWillReceiveProps = (nextProps: P) => {
        this.willReceiveProps(nextProps);
    };

    protected willReceiveProps(nextProps: P) {
        this.plugins.forEach((plug) => {
            plug.willReceiveProps(nextProps);
        });
    }

    private shouldComponentUpdate(nextProps: P, nextState: S) {
        return shallowCompare(this, nextProps, this.state);
    }


    private componentDidUpdate = (prevProps: P, prevState: S, prevContext: any) => {
        this.didUpdate(prevProps, prevState, prevContext);
    };

    protected didUpdate(prevProps: P, prevState: S, prevContext: any) {
        this.plugins.forEach((plug) => {
            plug.willReceiveProps(prevProps, prevState, prevContext);
        });
    }

    protected willUnmount() {
        this.plugins.forEach((plug) => {
            plug.willUnmount();
        });
    }

    private componentWillUnmount = () => {
        this.willUnmount();
    };

    addClassName(classNames: string) {
        if (classNames)
            classNames.split(" ").forEach((name) => {
                if (this.renderClasses.indexOf(name) === -1)
                    this.renderClasses.push(name);
            });
    }

    toggleClassName(boolValue: boolean, trueClassNames: string, falseClassNames?: string) {
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
    }

    removeClassName(classNames: string) {
        if (classNames)
            classNames.split(" ").forEach((name) => {
                if (this.renderClasses.indexOf(name) !== -1)
                    this.renderClasses.splice(this.renderClasses.indexOf(name), 1);
            });
    }

    renderClassName() {
        this.addClassName(this.props.className);
        if (this.renderClasses.length > 0)
            return this.renderClasses.join(" ");
        else
            return null;
    }

    getRenderProps() {
        this.renderProps.className = this.renderClassName();
        this.renderProps.style = this.renderStyles;
        _.assign(this.renderProps.style, this.props.style);
        return this.renderProps;
    }


    // getReactElementClassName(element): string {
    //     return element && element.type ? element.type.toString().split("(")[0].split(" ")[1] : "";
    // }

    getChildren(childType: Function): JSX.Element[] {
        let ret: JSX.Element[] = [];
        React.Children.toArray(this.props.children).forEach((child: any) => {
            if (childType === child.type)
                ret.push(child);
        });
        return ret;
    }

    getChildrenOfProps(props: any, childType: Function): JSX.Element[] {
        let ret: JSX.Element[] = [];
        React.Children.toArray(props.children).forEach((child: any) => {
            if (childType === child.type)
                ret.push(child);
        });
        return ret;
    }

    //render() {
    //    return (new)
    //    //    <button onClick={this.handleClick.bind(this) }>
    //    //        Component from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
    //    //    </button>
    //    //);
    //}
}

