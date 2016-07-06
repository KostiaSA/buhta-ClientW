import {Component, ComponentProps} from "../Component";

export interface TreeGridColumnsProps extends ComponentProps {
    //caption?: string;
}

export class TreeGridColumns extends Component<TreeGridColumnsProps, any> {

    constructor(props: TreeGridColumnsProps, context: any) {
        super(props, context);
    }
}


