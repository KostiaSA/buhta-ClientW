import * as React from "react";
import {Component, ComponentProps, ComponentState} from "../Component";
import {VisiblePluginProps, VisiblePluginState, VisiblePlugin} from "../../Plugins/VisiblePlugin";

export interface AppErrorBarProps extends ComponentProps<AppErrorBarState> {

}

export class AppErrorBarState extends ComponentState<AppErrorBarProps> {
    visible: boolean;
}

export class AppErrorBar extends Component<AppErrorBarProps, AppErrorBarState> {
    constructor(props: AppErrorBarProps, context: any) {
        super(props, context);
        this.state = new AppErrorBarState(this);
        this.state.visible = false;
    }

    // protected willMount() {
    //     super.willMount();
    // }

    protected didMount() {
        super.didMount();
        window.onerror = this.handleError;
        (window as any).onunhandledrejection = this.handlePromiseError.bind(this);
    }

    errorMessage: React.ReactNode;

    handleError = (msg: string, url?: string, line?: number, col?: number, error?: any): boolean => {
        this.errorMessage = msg;

        if (!error.$$isThrowError)
          console.error(error.stack);

        this.state.visible = true;
        this.forceUpdate();

        let suppressErrorAlert = true;
        return suppressErrorAlert;
    };

    handlePromiseError = (reason: any): void => {
        if (reason.message)  // bluebird вызываеи обработчик 2 раза, второй с пустым message пропускаем
            this.errorMessage = reason.message;
        
        if (reason.stack)
        console.error(reason.stack);

        this.state.visible = true;
        this.forceUpdate();
    };


    render() {
        this.addClassName("app-error-bar");
        this.toggleClassName(!this.state.visible, "is-hidden");

        this.clearStyles();
        this.addStyles({color: "white", background: "#ff4e4e", cursor: "default"});

        return (
            <div
                onClick={ (e) => { this.state.visible = false; this.forceUpdate();} } {...this.getRenderProps()}>
                {this.errorMessage}
            </div>
        );
    }

}

