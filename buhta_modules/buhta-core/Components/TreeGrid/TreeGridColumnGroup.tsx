
import {ComponentProps, Component} from "../Component";

export interface TreeGridColumnGroupProps extends ComponentProps<any> {
    caption?: string;
}


export class XTreeGridGroupColumn extends Component<TreeGridColumnGroupProps, any> {

    constructor(props: TreeGridColumnGroupProps, context: any) {
        super(props, context);

        //this.state.disabled = false;

    }

    render(): JSX.Element {
        return (null);
    }
}

