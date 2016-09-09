import * as React from "react";
import * as _ from "lodash";

import {Component, ComponentProps} from "../Component";
import {Tabs, Tab} from "../Tabs/Tabs";
import {Form} from "../Form/Form";
import {Layout} from "../LayoutPane/Layout";
import {Flex} from "../LayoutPane/Flex";
import {Fixed} from "../LayoutPane/Fixed";
import {Button} from "../Button/Button";
import {
    SAVE_BUTTON_ICON, CANCEL_BUTTON_ICON, CLOSE_BUTTON_ICON, CANCEL_BUTTON_TEXT,
    CLOSE_BUTTON_TEXT, SAVE_BUTTON_TEXT
} from "../../Constants";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";


export interface AutoFormControlProps {
    inputCaption?: string;
    inputTab?: string;
    inputGroup?: string;
    inputDescription?: string;
    inputWidthPx?: number;
    inputStyle?: React.CSSProperties;
    combineWithPrevInput?: boolean;
    onRenderInputTab?: (designedObject?: DesignedObject)=> React.ReactNode;
}

export interface AutoFormProps extends ComponentProps<any> {
    designedObject?: DesignedObject;
    inputs?: AutoFormControlProps[];
    sizeTo: "parent" | "content";
    needToSave?: boolean;
    onValidate?: () => string[];  // список ошибок
    onSaveChanges?: () => void;
    onCancelChanges?: () => void;
    //onGetNeedToSave?: () => boolean;
}

const emptyTabName = "закладка";

export class AutoForm extends Component<AutoFormProps, any> {

    protected didMount() {
        super.didMount();
        (this.nativeElement as any)["$$autoForm"] = this;
    }

    private getInputs(): AutoFormControlProps[] {
        return React.Children.toArray(this.props.children as React.ReactNode)
            .filter((c: any) => c.props)
            .map((c: any) => c.props) as AutoFormControlProps[];
    }

    private getTabsList(): string[] {
        return _.uniq(
            this.getInputs().map<string>((input: AutoFormControlProps) => {
                return input.inputTab || "";
            }));
    }

    private getTabInputs(tab: string): JSX.Element[] {
        return React.Children.toArray(this.props.children as React.ReactNode)
            .filter((c: any) => {
                return c.props &&
                    (((c.props as AutoFormControlProps).inputTab || "") === tab);
            }) as JSX.Element[];
    }

    private renderTab(tab: string): JSX.Element {
        return <Form sizeTo={this.props.sizeTo}>{this.getTabInputs(tab)}</Form>;
    }

    private  renderTabs(): JSX.Element | null {
        let tabs = this.getTabsList();
        //console.log(tabs);
        //console.log(this.getInputs());

        if (tabs.length === 0) {
            return null;
        }
        else if (tabs.length === 1) {
            return this.renderTab(tabs[0]);
        }
        else {


            return (
                <Tabs
                    sizeTo="parent"
                    onWillMount={ (state) => { console.log("onWillMount-auto-form-tabs"); }}
                    onChangeActiveTab={ (state, tab) => { console.log("setActiveTab");console.log(tab);}}
                >
                    { tabs.map<JSX.Element>((tab, index) => {

                        let renderTabTitle = (): React.ReactNode => {
                            let tabInputs = this.getTabInputs(tab);
                            for (let i = 0; i < tabInputs.length; i++) {
                                if ((tabInputs[i].props as AutoFormControlProps).onRenderInputTab !== undefined)
                                    return (tabInputs[i].props as AutoFormControlProps).onRenderInputTab!(this.props.designedObject);
                            }
                            return tab === "" ? emptyTabName : tab;
                        }

                        return (
                            <Tab key={index} title={renderTabTitle()}>
                                {this.renderTab(tab)}
                            </Tab>
                        );
                    })}
                </Tabs>
            );

        }
    }

    handleSaveButtonClick = (sender: Button, e: React.MouseEvent): void => {
        if (this.props.onValidate) {
            let errors = this.props.onValidate();
            if (errors.length > 0) {

                if (errors.length === 1)
                    this.showErrorWindow(errors[0]);
                else {

                    this.showErrorWindow(
                        <div style={{textAlign: "left"}}>
                            {errors.map<JSX.Element>((err: string, index: number)=> {
                                return <div>{index + 1}{". "}{err}</div>
                            })}
                        </div>

                    );

                }
                e.stopPropagation();
                return;
            }
        }

        if (this.props.onSaveChanges)
            this.props.onSaveChanges();

        this.getParentWindow()!.close();
        e.stopPropagation();

    }

    handleCancelButtonClick = (sender: Button, e: React.MouseEvent): void => {
        if (this.props.onCancelChanges)
            this.props.onCancelChanges();
        this.getParentWindow()!.close();
        e.stopPropagation();
    }

    render() {
        this.addClassName("auto-form");

        console.log("render-auto-form");

        if (this.props.sizeTo === "parent") {
            let style: any = {
                position: "relative",
                height: "100%"
            };
            this.addStyles(style);
        }
        else {
            let style: any = {
                position: "relative",
            };
            this.addStyles(style);
        }

        return (
            <div {...this.getRenderProps()} ref={ (e: any) => { this.nativeElement = e; }}>
                <Layout type="column" sizeTo="parent">
                    <Flex>
                        {this.renderTabs()}
                    </Flex>
                    <Fixed>
                        <Layout className="auto-form-footer" type="row" sizeTo="content">
                            <Flex>

                            </Flex>
                            <Fixed>
                                <Button
                                    visible={ this.props.needToSave }
                                    icon={SAVE_BUTTON_ICON}
                                    onClick={ this.handleSaveButtonClick }
                                >
                                    { SAVE_BUTTON_TEXT}
                                </Button>
                                <Button
                                    onClick={ this.handleCancelButtonClick }
                                    icon={this.props.needToSave ? CANCEL_BUTTON_ICON : CLOSE_BUTTON_ICON}
                                >
                                    {this.props.needToSave ? CANCEL_BUTTON_TEXT : CLOSE_BUTTON_TEXT }
                                </Button>
                            </Fixed>
                        </Layout>
                    </Fixed>
                </Layout>
            </div>

        );
    }
}

