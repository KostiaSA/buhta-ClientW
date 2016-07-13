import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component, ComponentState} from "../Component";
import {appInstance} from "../App/App";
import {Window, WindowState} from "../Window/Window";
import {MoveStartEvent} from "../Movable/Movable";
import {Button} from "../Button/Button";


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

export type WindowAutoSize = "none" | "content" | "full-desktop";
export type WindowAutoPosition = "none" | "parent-center" | "desktop-center";

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
    parentWindowId?: string;
    autoPosition?: WindowAutoPosition;
    autoSize?: WindowAutoSize;
}

export interface OpenMessageWindowParams {
    title?: string;
    parentWindowId?: string;
    style?: "error" | "information" | "confirmation";
    okButtonContent?: React.ReactNode;
    cancelButtonContent?: React.ReactNode;
    resultCallback?: (resultOK: boolean)=>void;
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
    content: React.ReactNode;
    disabled: boolean;
    parentWindowId: string;
    autoPosition: WindowAutoPosition = "none";
    autoSize: WindowAutoSize = "none";
}

export class Desktop extends Component<DesktopProps, DesktopState> {
    constructor(props: DesktopProps, context: any) {
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

    openWindow(winContent: React.ReactNode, openParams?: OpenWindowParams) {
        if (!openParams)
            openParams = {};
        let newWin = new DesktopWindow();
        newWin.content = winContent;
        newWin.title = openParams.title || ".";
        newWin.id = Math.random().toString(36).slice(2, 12);

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

        newWin.autoPosition = openParams.autoPosition;
        newWin.autoSize = openParams.autoSize;

        newWin.minHeight = openParams.minHeight || 100;
        newWin.minWidth = openParams.minWidth || 100;

        newWin.parentWindowId = openParams.parentWindowId;
        if (newWin.parentWindowId) {
            this.getWindowById(newWin.parentWindowId).disabled = true;
        }


        this.state.windows.push(newWin);
        this.forceUpdate();
    };

    openMessageWindow(winContent: React.ReactNode, openParams?: OpenMessageWindowParams) {
        if (!openParams)
            openParams = {style: "information"};

        let winParams: OpenWindowParams = {
            title: openParams.title,
            parentWindowId: openParams.parentWindowId,
            autoPosition: "parent-center",
            autoSize: "content"
        };

        if (!winParams.parentWindowId)
            winParams.autoPosition = "desktop-center";

        let okButton: React.ReactNode;
        if (openParams.okButtonContent) {
            okButton =<Button>{openParams.okButtonContent}</Button>;
        }

        let cancelButton: React.ReactNode;

        let win =
            <div>
                {winContent}
                <div>
                    {okButton}
                    {cancelButton}
                </div>
            </div>;

        this.openWindow(winContent, winParams);
    };

    activateWindow(id: string) {
        let win = this.getTopParentWindow(id);
        if (win && this.state.windows.indexOf(win) !== this.state.windows.length - 1) {
            _.pull(this.state.windows, win);
            this.state.windows.push(win);
            this.forceUpdate();

            // поднимаем дочерние окна
            let childWin = this.state.windows.filter((w: DesktopWindow) => w.parentWindowId === win.id)[0];
            if (childWin)
                this.activateChildWindow(childWin.id);
        }
    }

    activateChildWindow(id: string) {
        let win = this.getWindowById(id);
        if (win && this.state.windows.indexOf(win) !== this.state.windows.length - 1) {
            _.pull(this.state.windows, win);
            this.state.windows.push(win);
            this.forceUpdate();

            // поднимаем дочерние окна
            let childWin = this.state.windows.filter((w: DesktopWindow) => w.parentWindowId === win.id)[0];
            if (childWin)
                this.activateWindow(childWin.id);
        }
    }

    getTopParentWindow(id: string) {
        let topParent = this.getWindowById(id);
        while (topParent.parentWindowId) {
            topParent = this.getWindowById(topParent.parentWindowId)
        }
        return topParent;
    }

    getWindowById(id: string): DesktopWindow {
        for (let w of this.state.windows) {
            if (w.id === id)
                return w;
        }
        console.warn("DesktopWindow id='" + id + "' not found");
        return null;
    }


    handleActivate = (state: WindowState): void => {
        this.activateWindow(state.id);
    }

    closeWindow(id: string) {
        let win = this.getWindowById(id);
        _.pull(this.state.windows, win);

        if (win.parentWindowId) {
            this.activateWindow(win.parentWindowId);
            this.getWindowById(win.parentWindowId).disabled = false;
        }

        this.forceUpdate();
    }

    handleClose = (state: WindowState): void => {
        // this.closeWindow(state.id);
    }

    protected didMount() {
        super.didMount();
        (this.nativeElement as any)["$$desktop"] = this;
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
                            disabled={w.disabled}
                            minWidth={w.minWidth}
                            minHeight={w.minHeight}
                            autoSize={w.autoSize}
                            autoPosition={w.autoPosition}
                            parentWindowId={w.parentWindowId}
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
