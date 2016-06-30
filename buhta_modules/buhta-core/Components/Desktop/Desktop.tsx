import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {appInstance} from "../App";

export interface DesktopProps extends ComponentProps {
    text?: string;
}

export class Desktop extends Component<DesktopProps,{}> {
    constructor(props: DesktopProps, context) {
        super(props, context);
        this.props = props;
    }

    protected willMount() {
        super.willMount();
        if (appInstance)
            appInstance.desktopInstance = this;
    }


    render() {
        this.addClassName("desktop");
        this.addStyles({height: "100%"});
        this.addStyles({position: "relative", overflow:"auto"});

        return (
            <div ref={ (e)=>{ this.nativeElement = e} } {...this.getRenderProps()}>
                {this.props.children}
            </div>
        );
    }

}