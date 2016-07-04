import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component, ComponentState} from "../Component";
import {appInstance} from "../App";
import {Window} from "../Window/Window";
import {MoveStartEvent} from "../Movable/Movable";

export interface DesktopProps extends ComponentProps {
    text?: string;
}

export class DesktopWindow {
    constructor() {
        this.id = Math.random().toString(36).slice(2, 12);
    }

    id: string;
    content: JSX.Element;
    title: string = ".";
    top: number = 10;
    left: number = 10;
    width: number = 500;
    height: number = 300;

}

class DesktopState extends ComponentState {
    windows: DesktopWindow[] = [];  // последнее активно

    getWindowById(id: string): DesktopWindow {
        for (let w of this.windows) {
            if (w.id === id)
                return w;
        }
        console.warn("DesktopWindow id='" + id + "' not found");
        return null;
    }

    getWindowIndexById(id: string): number {
        return this.windows.indexOf(this.getWindowById(id));
    }

    activateWindow(id: string) {
        let win = this.getWindowById(id);
        if (win) {
            _.pull(this.windows, win);
            this.windows.push(win);
            this.component.forceUpdate();
        }
    }

    closeWindow(id: string) {
        let win = this.getWindowById(id);
        _.pull(this.windows, win);
        this.component.forceUpdate();
    }

}

export interface WindowInfo {
    id: string;
    winInstance: Window;
    divWrapper: Element;

}


export class Desktop extends Component<DesktopProps,DesktopState> {
    constructor(props: DesktopProps, context) {
        super(props, context);
        this.props = props;
        this.state = new DesktopState(this);
    }

    protected willMount() {
        super.willMount();
        if (appInstance)
            appInstance.desktop = this;
    }

    private windows: WindowInfo[] = [];

    // openWindow(win: JSX.Element): WindowInfo {
    //     let modal = document.createElement('div');
    //     modal.id = Math.random().toString(36).slice(2, 12);
    //
    //     // для поднятия вверх при активации окна
    //     modal.onclick = ()=> {
    //         setTimeout(()=> {
    //             if (modal.id !== "deleted" && this.nativeElement.lastChild !== modal)
    //                 this.nativeElement.appendChild(modal);
    //         }, 1);
    //     };
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

    openWindow(win: JSX.Element, title: string = ".") {
        let newWin = new DesktopWindow();
        newWin.content = win;
        newWin.title = title;
        this.state.windows.push(newWin);
        this.forceUpdate();
        return null;
        // let modal = document.createElement('div');
        // modal.id = Math.random().toString(36).slice(2, 12);
        //
        // // для поднятия вверх при активации окна
        // modal.onclick = ()=> {
        //     setTimeout(()=> {
        //         if (modal.id !== "deleted" && this.nativeElement.lastChild !== modal)
        //             this.nativeElement.appendChild(modal);
        //     }, 1);
        // };
        //
        // this.nativeElement.appendChild(modal);
        //
        // let winInstance = ReactDOM.render(win, modal) as Window;
        //
        // let info: WindowInfo = {
        //     id: modal.id,
        //     winInstance: winInstance,
        //     divWrapper: modal
        // };
        //
        // this.windows.push(info);
        //
        // return info;
    };


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
    //     this.windows.forEach((info)=> {
    //         if (info.winInstance === win && this.nativeElement.lastChild !== info.divWrapper) {
    //             this.nativeElement.appendChild(info.divWrapper);
    //             return;
    //         }
    //     });
    // }

    // render_old() {
    //     this.addClassName("desktop");
    //     this.addStyles({height: "100%"});
    //     this.addStyles({position: "relative", overflow: "auto"});
    //
    //     return (
    //         <div ref={ (e)=>{ this.nativeElement = e} } {...this.getRenderProps()}>
    //             {this.props.children}
    //         </div>
    //     );
    // }

    private handleMoveStart(e: MoveStartEvent, winId: string) {
        let win = this.state.getWindowById(winId);
        e.bindX(win, "left", ()=> {
            this.forceUpdate();
        });
        e.bindY(win, "top", ()=> {
            this.forceUpdate();
        });
        this.state.activateWindow(winId);
    }

    private handleActivate(winId: string) {
        this.state.activateWindow(winId);
    }

    private handleClose(winId: string) {
        this.state.closeWindow(winId);
    }

    private handleResizeRightBottomCornerStart(e: MoveStartEvent, winId: string) {
        let win = this.state.getWindowById(winId);
        e.bindX(win, "width", ()=> {
            this.forceUpdate();
        });
        e.bindY(win, "height", ()=> {
            this.forceUpdate();
        });
        this.state.activateWindow(winId);
    }


    render() {
        this.addClassName("desktop");
        this.addStyles({height: "100%"});
        this.addStyles({position: "relative", overflow: "auto"});

        return (
            <div ref={ (e)=>{ this.nativeElement = e} } {...this.getRenderProps()}>
                {this.state.windows.map((w, index)=> {
                    return (
                        <Window
                            key={w.id}
                            title={w.title}
                            top={w.top}
                            left={w.left}
                            width={w.width}
                            height={w.height}
                            onMoveStart={ (e)=>{ this.handleMoveStart(e, w.id) } }
                            onResizeRightBottomCornerStart={ (e)=>{ this.handleResizeRightBottomCornerStart(e, w.id) } }
                            onActivate={ ()=>{ this.handleActivate(w.id) } }
                            onClose={ ()=>{ this.handleClose(w.id) } }
                        > {w.content}
                        </Window>
                    )
                })}
            </div>
        );
    }

}