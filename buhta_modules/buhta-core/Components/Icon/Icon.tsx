import * as React from "react";
import {Component, ComponentProps, ComponentState} from "../Component";
import {getIconFullPath} from "../../getIconFullPath";

export interface IconProps extends ComponentProps<IconState> {
    path: string;
}

export class IconState extends ComponentState<IconProps> {
}

export class Icon extends Component<IconProps, IconState> {
    constructor(props: IconProps, context: any) {
        super(props, context);
        this.props = props;
        this.state = new IconState(this);

    }

    render(): JSX.Element {
        return (
            <img {...this.getRenderProps()} src={ getIconFullPath(this.props.path) }/>
        );
    }

}