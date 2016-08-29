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

        React.Children.toArray(this.props.children as React.ReactNode).forEach((control: any, index: number, controlArr: any[]) => {

                // три режима :
                // 1. нормальный, рендерим tr
                // 2. начало горизонтальной группы, рендерим tr, который включает всю группу
                // 3. член горизонтальной группы, рендерим пустышку

                let controlProps = control.props as InputProps;

                let mode = 1;
                if (controlProps.combineWithPrevInput === true) {
                    // mode = 3;
                    return null;
                }
                else if (index < controlArr.length - 1 && (controlArr[index + 1].props as InputProps).combineWithPrevInput === true)
                    mode = 2;

                let renderMode12 = (): JSX.Element=> {
                    if (mode === 1)
                        return (
                            <div className="control">
                                {control}
                            </div>
                        )
                    else {

                        let extraControls: JSX.Element[] = [];
                        for (let i = index + 1; i < controlArr.length; i++) {
                            let extraControlProps = controlArr[i].props as InputProps;
                            if (extraControlProps.combineWithPrevInput !== true)
                                break;
                            extraControls.push(
                                <p className="control">
                                    <span className="caption" style={{marginRight:10}}>{extraControlProps.inputCaption}</span>
                                    {controlArr[i]}
                                </p>
                            );
                        }

                        return (
                            <div className="control is-grouped" style={{whiteSpace:"nowrap"}}>
                                {control}
                                {extraControls}
                            </div>
                        )

                    }

                };

                if (controlProps && (controlProps.inputCaption || controlProps.bindPropName)) {

                    let node =
                        <tr className="control" key={index}>
                            <td style={{textAlign: "right", verticalAlign: "top"}}>
                                <span
                                    className="caption">{controlProps.inputCaption ? controlProps.inputCaption : controlProps.bindPropName}
                                </span>
                            </td>
                            <td style={{textAlign: "left", verticalAlign: "middle"}}>
                                <div className="control">
                                    {"control1"}
                                </div>
                                {renderMode12()}
                            </td>
                        </tr>;

                    list.push(node);
                }
                else {

                    let node =
                        <tr className="control" key={index}>
                            <td colSpan="10" style={{textAlign: "left", verticalAlign: "middle"}}>
                                <div className="control">
                                    {"control2"}
                                </div>
                                {renderMode12()}
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

            //this.addStyles({width: "inherit"});

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

