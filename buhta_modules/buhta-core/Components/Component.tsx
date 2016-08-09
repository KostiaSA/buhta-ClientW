import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";
import shallowCompare = require("react-addons-shallow-compare");
import {ComponentPlugin} from "../Plugins/Plugin";
import {Window} from "./Window/Window";
import {Desktop, OpenMessageWindowParams} from "./Desktop/Desktop";
import {throwError} from "../Error";
import {BaseControl} from "../../buhta-ui/BaseControl";
import {SchemaComponent} from "../../buhta-schema/SchemaComponent/SchemaComponent";


export interface XOnClickProps {
    onClick?: React.ReactEventHandler;
}


export interface ComponentProps<S> extends React.ClassAttributes<Element> {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
//    buhtaControl?: BaseControl;
    onWillMount?: (state: S) => void;
    $$control?: BaseControl;
    $$schemaComponent?: SchemaComponent;
}


export class ComponentState<P> {
    constructor(public component: Component<P, any>) {

    }

    forceUpdate() {
        this.component.forceUpdate();
    }

    // //clickCount: number;
    // style: React.CSSProperties;
}

export interface ComponentContext {
    //parentWindow?: Window;
    //parentDesktop?: Desktop;
    schemaComponent: SchemaComponent;
}

export class Component<P extends ComponentProps<S>, S extends ComponentState<P>> extends React.Component<P, S> {

    context: ComponentContext;

    plugins: ComponentPlugin<any, any>[] = [];

    constructor(props: P, context: any /*stateClass?: Function*/) {
        super(props, context);
        this.props = props;
        this.context = context;
        // this.plugins.forEach((plug) => {
        //     let plugInstance: any = new plug(this);
        //     this.plugins.push(plugInstance);
        // });
    }

    static contextTypes = {
        //     //parentDesktop: React.PropTypes.any,
        //     //parentWindow: React.PropTypes.any,
        uiComponent: React.PropTypes.any
    };
    //

    nativeElement: HTMLElement;

    private renderClasses: string[] = [];
    private renderProps: any = {};
    private renderStyles: any = {};

    getParentWindow(): Window | null {
        let parent = ReactDOM.findDOMNode(this);
        while (parent) {
            if ((parent as any).$$window)
                return (parent as any).$$window as Window;
            parent = parent.parentElement;
        }
        return null;
    }
    
    getParentUIComponent(): SchemaComponent | null {
        let parent = ReactDOM.findDOMNode(this);
        while (parent) {
            if ((parent as any).$$uiComponent)
                return (parent as any).$$uiComponent as SchemaComponent;
            parent = parent.parentElement;
        }
        return null;
    }

    getParentDesktop(): Desktop {
        let parent = ReactDOM.findDOMNode(this);
        while (parent) {
            if ((parent as any).$$desktop)
                return (parent as any).$$desktop as Desktop;
            parent = parent.parentElement;
        }
        throwError("getParentDesktop(): desktop not found");
        return {} as Desktop;  // fake typescript 2
    }


    getParentWindowId(): string {
        let parentWin = this.getParentWindow();
        if (parentWin) {
            return parentWin.state.id;
        }
        else
            return "";
    }

    addProps(props: Object) {
        _.assignWith(this.renderProps, props, (objectValue: any, sourceValue: any, key?: string) => {
            if (key === "class" || key === "className")
                console.error("invalid property '" + key + "', use functions addClassName(), toggleClassName()");
            if (key === "style")
                console.error("invalid property '" + key + "', use functions addStyles(), removeStyle()");
            return sourceValue;
        });
    }

    addStyles(styles: Object | undefined) {
        _.assign(this.renderStyles, styles);
    }

    clearStyles() {
        this.renderStyles = {};
    }

    removeStyle(style: string) {
        delete this.renderStyles[style];
    }

    removeStyles(styles: string[]) {
        styles.forEach((style) => {
            delete this.renderStyles[style];
        });
    }

    protected didMount() {
        if (this.props.$$control !== undefined)
            this.props.$$control.$$renderedComponent = this;
        if (this.props.$$schemaComponent !== undefined)
            this.props.$$schemaComponent.$$renderedComponent = this;
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
        if (this.props.onWillMount)
            this.props.onWillMount(this.state);
    };


    private componentWillReceiveProps = (nextProps: P) => {
        this.willReceiveProps(nextProps);
    };

    protected willReceiveProps(nextProps: P) {
        this.plugins.forEach((plug) => {
            plug.willReceiveProps(nextProps);
        });
    }


    isPropsEqual(obj1: any, obj2: any, excludeProps?: string[]): boolean {

        //Loop through properties in object 1
        for (let p in obj1) {

            if (excludeProps && excludeProps.indexOf(p) >= 0) continue;

            //Check property exists on both objects
            if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

            if (obj1[p] !== obj2[p]) {
                //console.log("1 not equal " + p);
                return false;
            }


            // switch (typeof (obj1[p])) {
            //     //Deep compare objects
            //     case 'object':
            //         if (!Object.compare(obj1[p], obj2[p])) return false;
            //         break;
            //     //Compare function code
            //     case 'function':
            //         if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
            //         break;
            //     //Compare values
            //     default:
            //         if (obj1[p] !== obj2[p]) return false;
            // }
        }

        //Check object 2 for any extra properties
        for (let p in obj2) {
            if (typeof (obj1[p]) === "undefined" && typeof (obj2[p]) !== "undefined") {
                //console.log("2 not equal " + p);
                //console.log(obj1);
                //console.log(obj2);

                return false;
            }

        }
        return true;
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

    private componentDidUpdate = (prevProps: P, prevState: S, prevContext: any) => {
        this.didUpdate(prevProps, prevState, prevContext);
    };

    protected didUpdate(prevProps: P, prevState: S, prevContext: any) {
        this.plugins.forEach((plug) => {
            plug.willReceiveProps(prevProps);
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

    addClassName(classNames: string | undefined) {
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
        // if (this.props.buhtaControl)
        //     this.props.buhtaControl.reactElement = this;
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
        React.Children.toArray(this.props.children as React.ReactNode).forEach((child: any) => {
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

    showErrorWindow(messageContent: React.ReactNode) {
        let params: OpenMessageWindowParams = {
            style: "error",
            parentWindowId: this.getParentWindowId(),
            okButtonContent: "Закрыть",
            //cancelButtonContent: cancelButtonText || "Нет",
            //resultCallback: resultCallback
        };
        this.getParentDesktop()!.openMessageWindow(messageContent, params);
    }

    showConfirmationWindow(messageContent: React.ReactNode, resultCallback: (resultOk: boolean) => void, okButtonText?: string, cancelButtonText?: string) {
        let params: OpenMessageWindowParams = {
            style: "confirmation",
            parentWindowId: this.getParentWindowId(),
            okButtonContent: okButtonText || "Да",
            cancelButtonContent: cancelButtonText || "Нет",
            resultCallback: resultCallback
        };
        this.getParentDesktop()!.openMessageWindow(messageContent, params);
    }

    showDeleteConfirmationWindow(messageContent: React.ReactNode, resultCallback: (resultOk: boolean) => void, okButtonText?: string, cancelButtonText?: string) {
        let params: OpenMessageWindowParams = {
            style: "danger",
            parentWindowId: this.getParentWindowId(),
            okButtonContent: okButtonText || "Да",
            cancelButtonContent: cancelButtonText || "Нет",
            resultCallback: resultCallback
        };
        this.getParentDesktop()!.openMessageWindow(messageContent, params);
    }

    closeParentWindow() {
        this.getParentDesktop()!.closeWindow(this.getParentWindowId());
    }

    //render() {
    //    return (new)
    //    //    <button onClick={this.handleClick.bind(this) }>
    //    //        Component from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
    //    //    </button>
    //    //);
    //}
}

