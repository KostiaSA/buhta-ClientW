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
    title: string;
    isActive: boolean;
    content: React.ReactNode;
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
                content: tabProps.children,
                isActive: index === 0
            }

            this.state.tabs.push(tabInfo);
        });

    }

    protected willMount() {
        this.createInitTabsState();
        super.willMount();

        // let tabTags = this.getChildren(Tab);
        //
        // tabTags.forEach((tabTag, index) => {
        //
        //     let tabProps = tabTag.props as TabProps;
        //
        //     let tabInfo: TabInfo = {
        //         title: tabProps.title,
        //         content: tabProps.children,
        //         isActive: index === 0
        //     }
        //
        //     this.tabs.push(tabInfo);
        // });

    }


    // openWindow(win: JSX.Element): WindowInfo {
    //     let modal = document.createElement('div');
    //     modal.id = Math.random().toString(36).slice(2, 12);
    //     // для поднятия вверх при активации окна
    //     modal.onclick = (e)=> {
    //         setTimeout(()=> {
    //             if (modal.id !== "deleted")
    //                 this.nativeElement.appendChild(modal);
    //         }, 1);
    //     }
    //
    //     this.nativeElement.appendChild(modal);
    //
    //     let winInstance = ReactDOM.render(win, modal) as Window;
    //
    //     let info: WindowInfo = {
    //         id: modal.id,
    //         winInstance: winInstance,
    //         divWrapper: modal
    //     };
    //
    //     this.windows.push(info);
    //
    //     return info;
    // };
    //
    // closeWindow(win: Window) {
    //
    //     this.windows.forEach((info, index)=> {
    //         if (info.winInstance === win) {
    //             info.divWrapper.id = "deleted";
    //             this.nativeElement.removeChild(info.divWrapper);
    //             delete this.windows[index];
    //             return;
    //         }
    //     });
    // }
    //
    // activateWindow(win: Window) {
    //
    //     this.windows.forEach((info, index)=> {
    //         if (info.winInstance === win) {
    //             this.nativeElement.appendChild(info.divWrapper);
    //             return;
    //         }
    //     });
    // }


    renderTabs(): JSX.Element {

        let list: JSX.Element[] = [];

        this.state.tabs.forEach((tabInfo: TabInfo, index: number)=> {

            let className = tabInfo.isActive ? "is-active" : null;
            let element =
                <li className={className} key={index} onClick={ (e)=>{ this.state.setActiveTab(tabInfo)}}>
                    <a>{tabInfo.title}</a>
                </li>
            list.push(element);
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

            let style: any = {paddingTop: 10};
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

        // return (
        //     <div ref>
        //         {list}
        //     </div>
        // )
    }

    render() {
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
    title?: string;
}


export class Tab extends Component<TabProps,any> {
    constructor(props: TabProps, context: any) {
        super(props, context);
        this.props = props;
    }
}