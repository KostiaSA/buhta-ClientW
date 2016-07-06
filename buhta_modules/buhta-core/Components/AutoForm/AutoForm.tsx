import * as React from "react";
import * as _ from "lodash";

import {Component, ComponentProps} from "../Component";
import {Tabs, Tab} from "../Tabs/Tabs";
import {Form} from "../Form/Form";


export interface AutoFormControlProps {
    inputCaption?: string;
    inputTab?: string;
    inputGroup?: string;
    inputDescription?: string;
}

export interface AutoFormProps extends ComponentProps {
    inputs?: AutoFormControlProps[];
}

const emptyTabName = "закладка";

export class AutoForm extends Component<AutoFormProps, any> {


    private getInputs(): AutoFormControlProps[] {
        return React.Children.toArray(this.props.children)
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
        return React.Children.toArray(this.props.children)
            .filter((c: any) => {
                return c.props &&
                    (((c.props as AutoFormControlProps).inputTab || "") === tab);
            }) as JSX.Element[];
    }

    private renderTab(tab: string): JSX.Element {
        return <Form>{this.getTabInputs(tab)}</Form>;
    }

    private  renderTabs(): JSX.Element {
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
                <Tabs>
                    { tabs.map<JSX.Element>((tab, index) => {
                        return (
                            <Tab key={index} title={tab === "" ? emptyTabName : tab}>
                                {this.renderTab(tab)}
                            </Tab>
                        );
                    })}
                </Tabs>
            );

        }
    }

    render() {
        this.addClassName("auto-form");

        return (
            <div {...this.getRenderProps()}>
                {this.renderTabs()}
            </div>

        );
    }
}

