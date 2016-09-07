import * as React from "react";
import {ComponentProps, Component, ComponentState} from "../Component";
import {Layout} from "../LayoutPane/Layout";
import {Fixed} from "../LayoutPane/Fixed";
import {Flex} from "../LayoutPane/Flex";

export interface TabsProps extends ComponentProps<TabsState> {
    onChangeActiveTab?: (state: TabsState, activeTab: TabInfo) => void;
    sizeTo: "parent" | "content";
}

export class TabsState extends ComponentState<TabsProps> {
    tabs: TabInfo[] = [];

    setActiveTab(tabInfo: TabInfo) {
        if (!tabInfo.isActive) {
            this.tabs.forEach((tab)=>tab.isActive = false);
            tabInfo.isActive = true;

            if (this.component.props.onChangeActiveTab)
                this.component.props.onChangeActiveTab(this, tabInfo);

            this.forceUpdate();
        }
    }
}

export class TabInfo {
    title: React.ReactNode | undefined;
    isActive: boolean;
    content: React.ReactNode;
    tabIndex: number;
}

export class Tabs extends Component<TabsProps, TabsState> {
    constructor(props: TabsProps, context: any) {
        super(props, context);
        this.props = props;
        this.state = new TabsState(this);
    }

    private createInitTabsState() {

        let tabTags = this.getChildren(Tab);

        tabTags.forEach((tabTag, index) => {

            let tabProps = tabTag.props as TabProps;

            let tabInfo: TabInfo = {
                title: tabProps.title,
                content: tabProps.children as React.ReactNode,
                isActive: index === 0,
                tabIndex: index
            }

            this.state.tabs.push(tabInfo);
        });

    }

    private updateTabsState(nextProps: TabsProps) {

        this.props = nextProps;

        let tabTags = this.getChildren(Tab);

        let activeIndex = this.state.tabs.filter((t)=>t.isActive)[0].tabIndex;

        this.state.tabs = [];

        tabTags.forEach((tabTag, index) => {

            let tabProps = tabTag.props as TabProps;

            let tabInfo: TabInfo = {
                title: tabProps.title,
                content: tabProps.children as React.ReactNode,
                isActive: index === activeIndex,
                tabIndex: index
            }

            this.state.tabs.push(tabInfo);
        });

    }

    protected willMount() {
        this.createInitTabsState();
        super.willMount();
    }

    protected willReceiveProps(nextProps: TabsProps) {
        this.updateTabsState(nextProps);
        super.willReceiveProps(nextProps);
    }

    renderTabs(): JSX.Element {

        let list: JSX.Element[] = [];

        this.state.tabs.forEach((tabInfo: TabInfo, index: number)=> {

            let className = tabInfo.isActive ? "is-active" : null;
            let element =
                <li className={className} key={index} onClick={ (e)=>{ this.state.setActiveTab(tabInfo)}}>
                    <a>{tabInfo.title}</a>
                </li>
            list.push(element);

            console.log("renter-tab: " + tabInfo.title);
        });


        return (
            <div className="tabs">
                <ul>
                    {list}
                </ul>
            </div>
        )
    }

    renderPanels(): JSX.Element[] {

        let list: JSX.Element[] = [];

        this.state.tabs.forEach((tabInfo: TabInfo, index: number)=> {

            let style: any = {paddingTop: 10, paddingBottom: 10};
            if (this.props.sizeTo === "parent")
                style.height = "100%";

            let className = !tabInfo.isActive ? "is-hidden" : null;
            let element =
                <div className={className} key={index} style={style}>
                    {tabInfo.content}
                </div>
            list.push(element);
        });

        return list;
    }

    render() {
        console.log("render-tabs");

        this.addStyles({height: "100%"});
        this.addStyles({position: "relative", overflow: "auto"});

        return (
            <Layout sizeTo={this.props.sizeTo} type="column"
                    ref={ (e: any) => { this.nativeElement = e; } } {...this.getRenderProps()}>
                <Fixed>
                    {this.renderTabs()}
                </Fixed>
                <Flex>
                    {this.renderPanels()}
                </Flex>
            </Layout>
        );
    }

}

export interface TabProps extends ComponentProps<any> {
    title?: React.ReactNode;
}


export class Tab extends Component<TabProps,any> {
    constructor(props: TabProps, context: any) {
        super(props, context);
        this.props = props;
    }
}