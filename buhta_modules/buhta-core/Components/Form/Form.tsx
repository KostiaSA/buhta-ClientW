import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {InputDivider} from "../InputDivider/InputDivider";
import {PropertyEditorInfo} from "../../../buhta-app-designer/PropertyEditors/BasePropertyEditor";
import {AutoFormControlProps} from "../AutoForm/AutoForm";
import {InputProps, InputType} from "../Input/Input";
import {BooleanPropertyEditor} from "../../../buhta-app-designer/PropertyEditors/BooleanPropertyEditor";
import {ListPropertyEditor} from "../../../buhta-app-designer/PropertyEditors/ListPropertyEditor";


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

                let controlProps = control.props as PropertyEditorInfo;

                let mode = 1;
                if (controlProps.combineWithPrevInput === true) {
                    // mode = 3;
                    return null;
                }
                else if (index < controlArr.length - 1 && (controlArr[index + 1].props as InputProps).combineWithPrevInput === true)
                    mode = 2;

                //console.log({index, controlArr});

                let inputStyle = controlProps.inputStyle;
                if (inputStyle === undefined)
                    inputStyle = {};
                if (controlProps.inputWidthPx !== undefined)
                    inputStyle!.width = controlProps.inputWidthPx;


                let renderMode12 = (): JSX.Element=> {
                    if (mode === 1)
                        return (
                            <div className="control" style={inputStyle}>
                                {control}
                            </div>
                        )
                    else {

                        let extraControls: JSX.Element[] = [];
                        for (let i = index + 1; i < controlArr.length; i++) {
                            let extraControlProps = controlArr[i].props as PropertyEditorInfo;
                            if (extraControlProps.combineWithPrevInput !== true)
                                break;

                            let caption = extraControlProps.inputCaption;
                            // if (caption === undefined)
                            //     caption = extraControlProps.bindPropName;
                            if (extraControlProps.editorType === BooleanPropertyEditor)
                                caption = "";

                            extraControls.push(
                                <p className="control">
                                    <span className="caption"
                                          style={{marginLeft:10,marginRight:10}}
                                    >
                                        {caption}
                                    </span>
                                    {controlArr[i]}
                                </p>
                            );
                        }

                        if (inputStyle!.whiteSpace === undefined)
                            inputStyle!.whiteSpace = "nowrap";

                        return (
                            <div className="control is-grouped" slyle={inputStyle} style={inputStyle}>
                                {control}
                                {extraControls}
                            </div>
                        )

                    }

                };

                if (controlProps && controlProps.inputCaption) { // || controlProps.bindPropName)) {

                    let caption = controlProps.inputCaption;
                    // if (caption === undefined)
                    //     caption = controlProps.bindPropName;
                    if (controlProps.editorType === BooleanPropertyEditor)
                        caption = "";

                    //console.log(caption);
                    //console.log(controlProps);

                    let node =
                        <tr className="control" key={index}>
                            <td style={{textAlign: "right", verticalAlign: "top"}}>
                                <span
                                    className="caption">{caption}
                                </span>
                            </td>
                            <td style={{textAlign: "left", verticalAlign: "middle"}}>
                                {renderMode12()}
                            </td>
                        </tr>;

                    list.push(node);
                }
                else {

                    let node =
                        <tr className="control" key={index}>
                            <td colSpan="10" style={{textAlign: "left", verticalAlign: "middle"}}>
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

        let children = React.Children.toArray(this.props.children as React.ReactNode);

        if (children.length === 1 && (children[0] as any).type === ListPropertyEditor) { // один контрол в форме, обычно treelist
            if (this.props.sizeTo === "parent")
                this.addStyles({height: "100%"});

            return <div {...this.getRenderProps()}>{this.props.children}</div>;
        }
        else {

            this.addStyles({width: "initial"});

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

