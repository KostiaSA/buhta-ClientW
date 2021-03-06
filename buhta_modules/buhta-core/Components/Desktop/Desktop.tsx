import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component, ComponentState} from "../Component";
import {appInstance} from "../App/App";
import {Window, WindowState} from "../Window/Window";
import {MoveStartEvent} from "../Movable/Movable";
import {Button} from "../Button/Button";
import {throwError} from "../../Error";
import {SchemaObjectId} from "../../../buhta-schema/SchemaObject";
import {Schema} from "../../../buhta-schema/Schema";
import {SchemaForm} from "../../../buhta-schema/SchemaForm/SchemaForm";
import {SchemaComponent} from "../../../buhta-schema/SchemaComponent/SchemaComponent";
import {UIForm} from "../UIForm/UIForm";
import {UIComponent} from "../UIComponent/UIComponent";
import {
    MESSAGE_OK_BUTTON_ICON, MESSAGE_OK_ERROR_BUTTON_ICON, MESSAGE_OK_DANGER_BUTTON_ICON,
    MESSAGE_CANCEL_BUTTON_ICON
} from "../../Constants";
import {getWindowSizePosition, getScreenSizePrefix} from "../Window/WindowSizePositionStore";


export interface DesktopProps extends ComponentProps<any> {

}


export class DesktopState extends ComponentState<DesktopProps> {
    windows: DesktopWindow[] = [];  // последнее активно
}

export interface WindowInfo {
    id: string;
    winInstance: Window;
    divWrapper: Element;

}

export type WindowAutoSize = "none" | "content" | "full-desktop";
export type WindowAutoPosition = "none" | "parent-center" | "desktop-center";

// todo "anchor-up", "anchor-right", "anchor-left", "desktop-top-left" и все desktop-варианты
export type PopupAutoPosition = "anchor-down" | "anchor-up" | "anchor-right" | "anchor-left";

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
    theme?: string;
    sizePositionStoreKey?: string;
    isPopup?: boolean;
    noPaddings?: boolean;
    popupAutoPosition?: PopupAutoPosition;
    popupAnchor?: Component<any,any>;
    onModalOk?: ()=>void;
    onModalCancel?: ()=>void;
    // при добавлении новых properties ищем все места (4 шт.), помеченные как 'new window props place'
}

export interface OpenMessageWindowParams {
    title?: string;
    parentWindowId?: string;
    style?: "error" | "information" | "confirmation" | "danger";
    okButtonContent?: React.ReactNode;
    cancelButtonContent?: React.ReactNode;
    resultCallback?: (resultOK: boolean) => void;
    theme?: string;
}

export class DesktopWindow implements OpenWindowParams {
    title: string;
    id: string;
    top: number | undefined;
    left: number | undefined;
    right: number | undefined;
    bottom: number | undefined;
    width: number | undefined;
    height: number | undefined;
    minHeight: number | undefined;
    minWidth: number | undefined;
    content: React.ReactNode;
    disabled: boolean;
    parentWindowId: string | undefined;
    autoPosition: WindowAutoPosition | undefined;
    autoSize: WindowAutoSize | undefined;
    theme: string | undefined;
    sizePositionStoreKey: string | undefined;
    isPopup: boolean| undefined;
    noPaddings: boolean | undefined;
    popupAutoPosition: PopupAutoPosition | undefined;
    popupAnchor: Component<any,any> | undefined;
    onModalOk: (()=>void) | undefined;
    onModalCancel: (()=>void) | undefined;

    // при добавлении новых properties ищем все места (5 шт.), помеченные как 'new window props place'
}

export class Desktop extends Component<DesktopProps, DesktopState> {
    constructor(props: DesktopProps, context: any) {
        super(props, context);
        this.context = context;
        this.props = props;
        this.state = new DesktopState(this);
    }

    // static childContextTypes  = {
    //     schemaComponent: React.PropTypes.any,
    //     parentDesktop: React.PropTypes.any
    // };
    //
    // getChildContext() {
    //     return {parentDesktop: this};
    // }

    protected willMount() {
        super.willMount();
        if (appInstance)
            appInstance.desktop = this;
    }

//    private windows: WindowInfo[] = [];

    openSchemaForm(form: SchemaForm, openParams?: OpenWindowParams) {
        let winContent = <UIForm schemaComponent={form}/>;
        this.openWindow(winContent, openParams);
    }

    openSchemaComponent(component: SchemaComponent, openParams?: OpenWindowParams) {
        let winContent = <UIComponent schemaComponent={component}/>;
        this.openWindow(winContent, openParams);
    }

    openSchemaComponentDesigner(component: SchemaComponent, openParams?: OpenWindowParams) {
        let winContent = component.$$getDesigner({designedObject: component});
        this.openWindow(winContent, openParams);
    }

    openModalWindow(winContent: React.ReactNode, openParams?: OpenWindowParams): Promise<void> {

        return new Promise<void>(
            (resolve: () => void, reject: (error: string) => void) => {

                if (openParams === undefined)
                    openParams = {};
                openParams.onModalOk = resolve;
                openParams.onModalCancel = ()=> {
                    reject("");
                };
                this.openWindow(winContent, openParams);
            });

    }


    openWindow(winContent: React.ReactNode, openParams?: OpenWindowParams): string {
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
        newWin.theme = openParams.theme;
        newWin.isPopup = openParams.isPopup;
        newWin.noPaddings = openParams.noPaddings;
        newWin.popupAutoPosition = openParams.popupAutoPosition;
        newWin.popupAnchor = openParams.popupAnchor;
        newWin.onModalOk = openParams.onModalOk;
        newWin.onModalCancel = openParams.onModalCancel;
        // при добавлении новых properties ищем все места (5 шт.), помеченные как 'new window props place'


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
            this.getWindowById(newWin.parentWindowId)!.disabled = true;
        }

        if (openParams.sizePositionStoreKey !== undefined) {
            newWin.sizePositionStoreKey = openParams.sizePositionStoreKey;

            let sizePosInfo = getWindowSizePosition(getScreenSizePrefix() + "/" + openParams.sizePositionStoreKey);

            if (sizePosInfo !== undefined) {
                newWin.left = sizePosInfo.L;
                newWin.top = sizePosInfo.T;
                newWin.height = sizePosInfo.H;
                newWin.width = sizePosInfo.W;
                newWin.autoPosition = "none";
            }

        }
        this.state.windows.push(newWin);
        this.forceUpdate();
        return newWin.id;
    };

    openMessageWindow(winContent: React.ReactNode, openParams?: OpenMessageWindowParams): string {
        if (!openParams)
            openParams = {style: "information"};

        let winParams: OpenWindowParams = {
            title: openParams.title,
            parentWindowId: openParams.parentWindowId,
            autoPosition: "parent-center",
            autoSize: "content"
        };

        winParams.theme = openParams.theme;

        if (!winParams.parentWindowId)
            winParams.autoPosition = "desktop-center";

        let buttonStyle = {minWidth: 65, marginLeft: 8};

        let okButton: React.ReactNode = [];
        if (openParams.okButtonContent) {

            let icon = MESSAGE_OK_BUTTON_ICON;

            if (openParams.style === "danger") {
                icon = MESSAGE_OK_DANGER_BUTTON_ICON;
                if (winParams.theme === undefined)
                    winParams.theme = "red";
            }
            if (openParams.style === "error") {
                icon = MESSAGE_OK_ERROR_BUTTON_ICON;
                if (winParams.theme === undefined)
                    winParams.theme = "red";
            }
            if (winParams.theme === undefined)
                winParams.theme = "blue";

            okButton =
                <Button
                    icon={icon}
                    style={buttonStyle}
                    onClick={ (sender:Button, e:React.MouseEvent) => {
                          sender.closeParentWindow();
                          if (openParams && openParams.resultCallback)
                             openParams.resultCallback(true);
                          e.stopPropagation();
                          }}
                >
                    {openParams.okButtonContent}
                </Button>;
        }

        let cancelButton: React.ReactNode = [];
        if (openParams.cancelButtonContent) {
            cancelButton =
                <Button
                    style={buttonStyle}
                    icon={MESSAGE_CANCEL_BUTTON_ICON}
                    onClick={ (sender:Button, e:React.MouseEvent) => {
                          sender.closeParentWindow();
                          if (openParams && openParams.resultCallback)
                             openParams.resultCallback(false);
                          e.stopPropagation();
                          }}
                >
                    {openParams.cancelButtonContent}
                </Button>;
        }

        let win =
            <div style={{minWidth:200, textAlign: "center"}}>
                {winContent}
                <div style={{padding:10}}>
                    {okButton}
                    {cancelButton}
                </div>
            </div>;

        //console.log(openParams);

        return this.openWindow(win, winParams);
    };

    isWindowHasFocus(id: string): boolean {
        return $(document.activeElement).parents("#" + id).length > 0;
    }

    activateWindow(id: string) {
        let win = this.getTopParentWindow(id);

        if (win && this.state.windows.indexOf(win) !== this.state.windows.length - 1) {
            _.pull(this.state.windows, win);
            this.state.windows.push(win);
            this.forceUpdate();

            // поднимаем дочерние окна
            let childWin = this.state.windows.filter((w: DesktopWindow) => w.parentWindowId === win!.id)[0];
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
            let childWin = this.state.windows.filter((w: DesktopWindow) => w.parentWindowId === win!.id)[0];
            if (childWin)
                this.activateChildWindow(childWin.id);
        }
    }

    getTopParentWindow(id: string) {
        let topParent = this.getWindowById(id);
        while (topParent && topParent.parentWindowId) {
            topParent = this.getWindowById(topParent.parentWindowId);
        }
        return topParent;
    }

    getWindowById(id: string): DesktopWindow | null {
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

        if (win && win.parentWindowId) {
            this.activateWindow(win.parentWindowId);
            this.getWindowById(win.parentWindowId)!.disabled = false;
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

        // сортируем, чтобы popup были в конце
        let wins = this.state.windows.sort((a: DesktopWindow, b: DesktopWindow)=> {
            if (a.isPopup === true && b.isPopup === true)
                return 0;
            if (a.isPopup !== true && b.isPopup !== true)
                return 0;
            if (a.isPopup === true && b.isPopup !== true)
                return 1;
            if (a.isPopup !== true && b.isPopup === true)
                return -1;
            throw  "internal  error";
        });

        return (
            <div ref={ (e) => { this.nativeElement = e; } } {...this.getRenderProps()}>
                {wins.map((w: DesktopWindow, index: number) => {
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
                            sizePositionStoreKey={w.sizePositionStoreKey}
                            parentWindowId={w.parentWindowId}
                            theme={w.theme}
                            isPopup={w.isPopup}
                            noPaddings={w.noPaddings}
                            popupAutoPosition={w.popupAutoPosition}
                            popupAnchor={w.popupAnchor}
                            onModalOk={w.onModalOk}
                            onModalCancel={w.onModalCancel}
                            { /* при добавлении новых properties ищем все места (5 шт.), помеченные как 'new window props place' */ ...{}}
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


export function getDesktop(): Desktop {
    return appInstance.desktop;
}

//onMoveStart={ w.handleMoveStart }
//onResizeRightBottomCornerStart={ w.handleResizeRightBottomCornerStart }
