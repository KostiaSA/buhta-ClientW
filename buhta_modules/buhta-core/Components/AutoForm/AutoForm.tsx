import * as React from "react";
import * as _ from "lodash";

import {Component, ComponentProps} from "../Component";
import {Tabs, Tab} from "../Tabs/Tabs";
import {Form} from "../Form/Form";
import {Layout} from "../LayoutPane/Layout";
import {Flex} from "../LayoutPane/Flex";
import {Fixed} from "../LayoutPane/Fixed";
import {Button} from "../Button/Button";


export interface AutoFormControlProps {
    inputCaption?: string;
    inputTab?: string;
    inputGroup?: string;
    inputDescription?: string;
}

export interface AutoFormProps extends ComponentProps<any> {
    inputs?: AutoFormControlProps[];
    sizeTo: "parent" | "content";
    onSaveChanges?: () => void;
    onCancelChanges?: () => void;
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
        return <Form sizeTo={this.props.sizeTo}>{this.getTabInputs(tab)}</Form>;
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
                <Tabs
                    sizeTo="parent"
                    onWillMount={ (state) => { console.log("onWillMount-auto-form-tabs"); }}
                    onChangeActiveTab={ (state, tab) => { console.log("setActiveTab");console.log(tab);}}
                >
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

    handleSaveButtonClick  = (sender: Button, e: React.MouseEvent): void => {
        if (this.props.onSaveChanges)
            this.props.onSaveChanges();
        this.getParentWindow().close();
        e.stopPropagation();

    }

    handleCancelButtonClick  = (sender: Button, e: React.MouseEvent): void => {
        if (this.props.onCancelChanges)
            this.props.onCancelChanges();
        this.getParentWindow().close();
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
            <div {...this.getRenderProps()}>
                <Layout type="column" sizeTo="parent">
                    <Flex>
                        {this.renderTabs()}
                    </Flex>
                    <Fixed>
                        <Layout className="auto-form-footer" type="row" sizeTo="content">
                            <Flex>

                            </Flex>
                            <Fixed>
                                <Button className="is-success is-outlined" onClick={ this.handleSaveButtonClick }>
                                    Сохранить
                                </Button>
                                <Button onClick={ this.handleCancelButtonClick } >
                                    Отмена
                                </Button>
                            </Fixed>
                        </Layout>
                    </Fixed>
                </Layout>
            </div>

        );
    }
}

