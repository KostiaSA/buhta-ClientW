import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {InputDivider} from "../InputDivider/InputDivider";
import {PropertyEditorInfo} from "../../../buhta-app-designer/PropertyEditors/BasePropertyEditor";
import {AutoFormControlProps} from "../AutoForm/AutoForm";
import {InputProps} from "../Input/Input";


export interface FormProps extends ComponentProps<any> {
    title?: string;
    sizeTo: "parent" | "content";
}


export class Form extends Component<FormProps, any> {
    constructor(props: FormProps, context: any) {
        super(props, context);
        this.props = props;
    }


    renderControls(): JSX.Element[] {
        let list: JSX.Element[] = [];

        React.Children.toArray(this.props.children as React.ReactNode).forEach((control: any, index: number) => {

                let controlProps = control.props as InputProps;

                if (controlProps && (controlProps.inputCaption || controlProps.bindPropName)) {


                    // if (control.type === InputDivider) {
                    //     console.log("InputDivider");
                    // }

                    let node =
                        <tr className="control" key={index}>
                            <td style={{textAlign: "right", verticalAlign: "top"}}>
                                <span
                                    className="caption">{controlProps.inputCaption ? controlProps.inputCaption : controlProps.bindPropName}
                                </span>
                            </td>
                            <td style={{textAlign: "left", verticalAlign: "middle"}}>
                                <div className="control">
                                    {control}
                                </div>
                            </td>
                        </tr>;

                    list.push(node);
                }
                else {

                    let node =
                        <tr className="control" key={index}>
                            <td colSpan="10" style={{textAlign: "left", verticalAlign: "middle"}}>
                                <div className="control">
                                    {control}
                                </div>
                            </td>
                        </tr>;

                    list.push(node);

                }
            }
        );

        return list;
    }

    render() {
        this.addClassName("form");
        //this.addStyles({margin:10});

        if (React.Children.toArray(this.props.children as React.ReactNode).length === 1) { // один контрол в форме, обычно treelist

            if (this.props.sizeTo === "parent")
                this.addStyles({height: "100%"});

            // let controlProps: any = (this.props.children as any)[0].props;
            //
            // if (controlProps && controlProps.inputCaption ) {
            //     return (
            //         <div {...this.getRenderProps()}>
            //             <span
            //                 className="caption">{controlProps.inputCaption ? controlProps.inputCaption : controlProps.bindPropName}
            //             </span>
            //             {this.props.children}
            //         </div>
            //     );
            // }
            // else
                return <div {...this.getRenderProps()}>{this.props.children}</div>;
        }
        else {

            this.addStyles({width: "inherit"});

            return (
                <table ref={ (e) => { this.nativeElement = e; } } {...this.getRenderProps()}>
                    <tbody>
                    {this.renderControls()}
                    </tbody>
                </table>
            );
        }
    }

}

