import * as React from "react";
import * as ReactDOM from "react-dom";
import {ComponentProps, Component} from "../Component";
import {appInstance} from "../App";
import {Window} from "../Window/Window";

export interface DesktopProps extends ComponentProps {
    text?: string;
}

export interface WindowInfo {
    id: string;
    winInstance: Window;
    divWrapper: Element;

}

export class Desktop extends Component<DesktopProps,{}> {
    constructor(props: DesktopProps, context) {
        super(props, context);
        this.props = props;
    }

    protected willMount() {
        super.willMount();
        if (appInstance)
            appInstance.desktop = this;
    }

    private windows: WindowInfo[] = [];

    openWindow(win: JSX.Element): WindowInfo {
        let modal = document.createElement('div');
        modal.id = Math.random().toString(36).slice(2, 12);

        // для поднятия вверх при активации окна
        modal.onclick = ()=> {
            setTimeout(()=> {
                if (modal.id !== "deleted" && this.nativeElement.lastChild !== modal)
                    this.nativeElement.appendChild(modal);
            }, 1);
        };

        this.nativeElement.appendChild(modal);

        let winInstance = ReactDOM.render(win, modal) as Window;

        let info: WindowInfo = {
            id: modal.id,
            winInstance: winInstance,
            divWrapper: modal
        };

        this.windows.push(info);

        return info;
    };

    closeWindow(win: Window) {

        this.windows.forEach((info, index)=> {
            if (info.winInstance === win) {
                info.divWrapper.id = "deleted";
                this.nativeElement.removeChild(info.divWrapper);
                delete this.windows[index];
                return;
            }
        });
    }

    activateWindow(win: Window) {

        this.windows.forEach((info)=> {
            if (info.winInstance === win && this.nativeElement.lastChild !== info.divWrapper) {
                this.nativeElement.appendChild(info.divWrapper);
                return;
            }
        });
    }

    render() {
        this.addClassName("desktop");
        this.addStyles({height: "100%"});
        this.addStyles({position: "relative", overflow: "auto"});

        return (
            <div ref={ (e)=>{ this.nativeElement = e} } {...this.getRenderProps()}>
                {this.props.children}
            </div>
        );
    }

}