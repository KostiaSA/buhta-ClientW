import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component, ComponentState} from "../Component";
import {appInstance} from "../App";
import {Window, WindowState} from "../Window/Window";
import {MoveStartEvent} from "../Movable/Movable";


export interface DesktopProps extends ComponentProps<any> {

}


export class DesktopState extends ComponentState<DesktopProps> {
    windows: DesktopWindow[] = [];  // последнее активно

    // getWindowById(id: string): WindowState {
    //     for (let w of this.windows) {
    //         if (w.id === id)
    //             return w;
    //     }
    //     console.warn("DesktopWindow id='" + id + "' not found");
    //     return null;
    // }
    //
    // getWindowIndexById(id: string): number {
    //     return this.windows.indexOf(this.getWindowById(id));
    // }
    //
    // activateWindow(id: string) {
    //     let win = this.getWindowById(id);
    //     if (win) {
    //         _.pull(this.windows, win);
    //         this.windows.push(win);
    //         this.forceUpdate();
    //     }
    // }
    //
    // closeWindow(id: string) {
    //     let win = this.getWindowById(id);
    //     _.pull(this.windows, win);
    //     this.forceUpdate();
    // }


}

export interface WindowInfo {
    id: string;
    winInstance: Window;
    divWrapper: Element;

}

export interface OpenWindowParams {
    title?: string;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
    minHeight?: number;
    minWidth?: number;
}

export class DesktopWindow implements OpenWindowParams {
    title: string;
    id: string;
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
    minHeight: number;
    minWidth: number;
    content: JSX.Element;
}

export class Desktop extends Component<DesktopProps, DesktopState> {
    constructor(props: DesktopProps, context:any) {
        super(props, context);
        this.props = props;
        this.state = new DesktopState(this);
    }

    protected willMount() {
        super.willMount();
        if (appInstance)
            appInstance.desktop = this;
    }

//    private windows: WindowInfo[] = [];

    openWindow(win: JSX.Element, openParams?: OpenWindowParams) {
        if (!openParams)
            openParams = {};
        let newWin = new DesktopWindow();
        newWin.content = win;
        newWin.title = openParams.title || ".";
        newWin.id=Math.random().toString(36).slice(2, 12);

        newWin.left = openParams.left;
        newWin.top = openParams.top;
        newWin.height = openParams.height;
        newWin.width = openParams.width;
        newWin.right = openParams.right;
        newWin.bottom = openParams.bottom;

        if (!newWin.left) {
            if (!newWin.right && !newWin.width) {
                newWin.left = 50;
                newWin.width = 500;
            }
            else if (newWin.right) {
                newWin.width = 500;
            }
            else {
                newWin.left = 50;
            }
        }
        else {
            if (!newWin.right && !newWin.width) {
                newWin.width = 500;
            }
        }

        if (!newWin.top) {
            if (!newWin.bottom && !newWin.height) {
                newWin.top = 50;
                newWin.height = 400;
            }
            else if (newWin.bottom) {
                newWin.height = 400;
            }
            else {
                newWin.top = 50;
            }
        }
        else {
            if (!newWin.bottom && !newWin.height) {
                newWin.height = 400;
            }
        }


        newWin.minHeight = openParams.minHeight || 100;
        newWin.minWidth = openParams.minWidth || 100;


        this.state.windows.push(newWin);
        this.forceUpdate();
    };

    activateWindow(id: string) {
        let win = this.getWindowById(id);
        if (win) {
            _.pull(this.state.windows, win);
            this.state.windows.push(win);
            this.forceUpdate();
        }
    }

    getWindowById(id: string): DesktopWindow {
        for (let w of this.state.windows) {
            if (w.id === id)
                return w;
        }
        console.warn("DesktopWindow id='" + id + "' not found");
        return null;
    }


    handleActivate = (state:WindowState): void => {
        this.activateWindow(state.id);
    }

    closeWindow(id: string) {
        let win = this.getWindowById(id);
        _.pull(this.state.windows, win);
        this.forceUpdate();
    }

    handleClose = (state:WindowState): void => {
        this.closeWindow(state.id);
    }

    render() {
        this.addClassName("desktop");
        this.addStyles({height: "100%"});
        this.addStyles({position: "relative", overflow: "auto"});

        return (
            <div ref={ (e) => { this.nativeElement = e; } } {...this.getRenderProps()}>
                {this.state.windows.map((w, index) => {
                    console.log("render-desktop-win");
                    return (
                        <Window
                            key={w.id}
                            id={w.id}
                            title={w.title}
                            top={w.top}
                            left={w.left}
                            width={w.width}
                            height={w.height}
                            right={w.right}
                            bottom={w.bottom}
                            onActivate={  this.handleActivate }
                            onClose={ this.handleClose }
                        >
                            {w.content}
                        </Window>
                    );
                })}
            </div>
        );
    }

}

//onMoveStart={ w.handleMoveStart }
//onResizeRightBottomCornerStart={ w.handleResizeRightBottomCornerStart }
