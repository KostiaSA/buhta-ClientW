import {Component, ComponentProps} from "../Component";

export interface TreeGridColumnsProps extends ComponentProps<any> {
    //caption?: string;
}

export class TreeGridColumns extends Component<TreeGridColumnsProps, any> {

    constructor(props: TreeGridColumnsProps, context: any) {
        super(props, context);
    }
}


