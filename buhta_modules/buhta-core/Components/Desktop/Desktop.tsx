import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component, ComponentState} from "../Component";
import {appInstance} from "../App";
import {Window} from "../Window/Window";
import {MoveStartEvent} from "../Movable/Movable";

export interface DesktopProps extends ComponentProps {

}

export class DesktopWindow {
    constructor(public desktopState: DesktopState) {
        this.id = Math.random().toString(36).slice(2, 12);
    }

    id: string;
    content: JSX.Element;
    title: string = ".";
    top: number;
    left: number;
    width: number;
    height: number;
    right: number;
    bottom: number;
    minHeight: number;
    minWidth: number;

    forceUpdate() {
        this.desktopState.forceUpdate();
    }


    handleMoveStart = (e: MoveStartEvent): void => {
        e.bindX(this, "left", () => {
            this.forceUpdate();
        });
        e.bindY(this, "top", () => {
            this.forceUpdate();
        });
        this.desktopState.activateWindow(this.id);
    }

    handleActivate = (): void => {
        this.desktopState.activateWindow(this.id);
    }

    handleClose = (): void => {
        this.desktopState.closeWindow(this.id);
    }

    handleResizeRightBottomCornerStart = (e: MoveStartEvent): void => {
        //let win = this.state.getWindowById(winId);
        e.bindX(this, "width", () => {
            if (this.width < this.minWidth)
                this.width = this.minWidth;
            this.forceUpdate();
        });
        e.bindY(this, "height", () => {
            if (this.height < this.minHeight)
                this.height = this.minHeight;
            this.forceUpdate();
        });
        this.desktopState.activateWindow(this.id);
    }

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
            this.forceUpdate();
        }
    }

    closeWindow(id: string) {
        let win = this.getWindowById(id);
        _.pull(this.windows, win);
        this.forceUpdate();
    }


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

export class Desktop extends Component<DesktopProps, DesktopState> {
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

//    private windows: WindowInfo[] = [];

    openWindow(win: JSX.Element, openParams?: OpenWindowParams) {
        if (!openParams)
            openParams = {};
        let newWin = new DesktopWindow(this.state);
        newWin.content = win;
        newWin.title = openParams.title || ".";

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

    render() {
        this.addClassName("desktop");
        this.addStyles({height: "100%"});
        this.addStyles({position: "relative", overflow: "auto"});

        return (
            <div ref={ (e) => { this.nativeElement = e; } } {...this.getRenderProps()}>
                {this.state.windows.map((w, index) => {
                    return (
                        <Window
                            key={w.id}
                            title={w.title}
                            top={w.top}
                            left={w.left}
                            width={w.width}
                            height={w.height}
                            right={w.right}
                            bottom={w.bottom}
                            onMoveStart={ w.handleMoveStart }
                            onResizeRightBottomCornerStart={ w.handleResizeRightBottomCornerStart }
                            onActivate={  w.handleActivate }
                            onClose={ w.handleClose }
                        >
                            {w.content}
                        </Window>
                    );
                })}
            </div>
        );
    }

}