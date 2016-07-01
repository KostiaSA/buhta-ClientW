import * as React from "react";
import * as ReactDOM from "react-dom";
import {ComponentProps, Component} from "../Component";
import Layout from "../LayoutPane/Layout";
import Fixed from "../LayoutPane/Fixed";
import Flex from "../LayoutPane/Flex";

export interface TabsProps extends ComponentProps {
    text?: string;
}

export interface TabInfo {
    //id: string;
    //winInstance: Window;
    //divWrapper: Element;
    title?: string;
    isActive: boolean;
    content: React.ReactNode;

}

export class Tabs extends Component<TabsProps,{}> {
    constructor(props: TabsProps, context) {
        super(props, context);
        this.props = props;
    }

    protected willMount() {
        super.willMount();

        let tabTags = this.getChildren(Tab);

        tabTags.forEach((tabTag, index) => {

            let tabProps = tabTag.props as TabProps;

            let tabInfo: TabInfo = {
                title: tabProps.title,
                content: tabProps.children,
                isActive: index === 0
            }

            this.tabs.push(tabInfo);
        });

    }

    private tabs: TabInfo[] = [];

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

    setActiveTab(tabInfo: TabInfo) {
        if (!tabInfo.isActive) {
            this.tabs.forEach((tab)=>tab.isActive = false);
            tabInfo.isActive = true;
            this.forceUpdate();
        }
    }


    renderTabs(): JSX.Element {

        let list: JSX.Element[] = [];

        this.tabs.forEach((tabInfo: TabInfo, index: number)=> {

            let className = tabInfo.isActive ? "is-active" : null;
            let element =
                <li className={className} key={index} onClick={ (e)=>{ this.setActiveTab(tabInfo)}}>
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

    renderPanels(): JSX.Element {

        let list: JSX.Element[] = [];

        this.tabs.forEach((tabInfo: TabInfo, index: number)=> {

            let className = !tabInfo.isActive ? "is-hidden" : null;
            let element =
                <div className={className} key={index}>
                    {tabInfo.content}
                </div>
            list.push(element);
        });

        return (
            <div>
                {list}
            </div>
        )
    }

    render() {
        //this.addClassName("Tabs");
        this.addStyles({height: "100%"});
        this.addStyles({position: "relative", overflow: "auto"});

        return (
            <Layout type="column" ref={ (e)=>{ this.nativeElement = e} } {...this.getRenderProps()}>
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

export interface TabProps extends ComponentProps {
    title?: string;
}


export class Tab extends Component<TabProps,{}> {
    constructor(props: TabProps, context) {
        super(props, context);
        this.props = props;
    }
}