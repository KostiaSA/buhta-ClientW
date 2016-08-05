import * as React from "react";
import {ComponentPlugin} from "./Plugin";
import {Component} from "../Components/Component";

export type onClickEvent = (sender: Component<any, any>, event: React.MouseEvent) => void;

export interface OnClickPluginProps {
    onClick?: onClickEvent;
}

export class OnClickPlugin extends ComponentPlugin<OnClickPluginProps, any> {

    handleClick = (event: React.MouseEvent): void => {
        if (this.props.onClick) {
            this.props.onClick(this.owner, event);
        }
        event.stopPropagation();
    }

    willMount() {
        super.willMount();
        this.owner.addProps({onClick: this.handleClick});
    }

    willReceiveProps(nextProps: OnClickPluginProps) {
        super.willReceiveProps(nextProps);
        this.owner.addProps({onClick: this.handleClick});
    }

}


