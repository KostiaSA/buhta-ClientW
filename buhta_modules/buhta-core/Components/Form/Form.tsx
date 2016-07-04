import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {InputDivider} from "../InputDivider/InputDivider";


export interface FormControlProps extends ComponentProps {
    caption?: string;
}


export interface FormProps extends ComponentProps {
    title?: string;
}

// export interface TabInfo {
//     //id: string;
//     //winInstance: Window;
//     //divWrapper: Element;
//     title?: string;
//     isActive: boolean;
//     content: React.ReactNode;
//
// }

export class Form extends Component<FormProps,any> {
    constructor(props: FormProps, context) {
        super(props, context);
        this.props = props;
    }

    // protected willMount() {
    //     super.willMount();
    // }

//    private Form: TabInfo[] = [];


    renderControls(): JSX.Element[] {
        let list: JSX.Element[] = [];

        React.Children.toArray(this.props.children).forEach((control: any, index) => {

            let controlProps = control.props as FormControlProps;

            if (control.type===InputDivider)
            {
                console.log("InputDivider");
            }

            let node =
                <tr className="control" key={index}>
                    <td style={{textAlign: "right", verticalAlign: "middle"}}>
                        <span
                            className="caption">{controlProps.caption ? controlProps.caption : control.props.bindPropName}</span>
                    </td>
                    <td style={{textAlign: "left", verticalAlign: "middle"}}>
                        <p className="control">
                            {control}
                        </p>
                    </td>
                </tr>

            list.push(node);

        });

        return list;
    }

    render() {
        this.addClassName("form");
        this.addStyles({height: "100%", width: "inherit"});

        return (
            <table ref={ (e)=>{ this.nativeElement = e} } {...this.getRenderProps()}>
                <tbody>
                {this.renderControls()}
                </tbody>
            </table>
        );
    }

}

