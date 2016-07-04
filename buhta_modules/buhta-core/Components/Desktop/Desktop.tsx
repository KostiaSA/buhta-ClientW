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
    top: number = 10;
    left: number = 10;
    width: number = 500;
    height: number = 300;

    forceUpdate(){
        this.desktopState.forceUpdate();
    }


    handleMoveStart = (e: MoveStartEvent): void=> {
        e.bindX(this, "left", ()=> {
            this.forceUpdate();
        });
        e.bindY(this, "top", ()=> {
            this.forceUpdate();
        });
        this.desktopState.activateWindow(this.id);
    }

    handleActivate = (): void=> {
        this.desktopState.activateWindow(this.id);
    }

    handleClose = (): void=> {
        this.desktopState.closeWindow(this.id);
    }

    handleResizeRightBottomCornerStart = (e: MoveStartEvent): void=> {
        //let win = this.state.getWindowById(winId);
        e.bindX(this, "width", ()=> {
            this.forceUpdate();
        });
        e.bindY(this, "height", ()=> {
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

//    private windows: WindowInfo[] = [];

    openWindow(win: JSX.Element, title: string = ".") {
        let newWin = new DesktopWindow(this.state);
        newWin.content = win;
        newWin.title = title;
        this.state.windows.push(newWin);
        this.forceUpdate();
    };

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
                            onMoveStart={ w.handleMoveStart }
                            onResizeRightBottomCornerStart={ w.handleResizeRightBottomCornerStart }
                            onActivate={  w.handleActivate }
                            onClose={ w.handleClose }
                        >
                            {w.content}
                        </Window>
                    )
                })}
            </div>
        );
    }

}