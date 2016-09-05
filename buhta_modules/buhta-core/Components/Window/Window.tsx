import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";

import {ComponentProps, Component, ComponentState} from "../Component";
import {Layout} from "../LayoutPane/Layout";
import {Fixed} from "../LayoutPane/Fixed";
import {Flex} from "../LayoutPane/Flex";
import {Movable, MoveStartEvent, MoveEndEvent} from "../Movable/Movable";
import {OpenWindowParams, Desktop, WindowAutoPosition, WindowAutoSize, PopupAutoPosition} from "../Desktop/Desktop";
import {throwError} from "../../Error";
import {saveWindowSizePosition} from "./WindowSizePositionStore";


export interface WindowProps extends OpenWindowParams, ComponentProps<WindowState> {
    id?: string;
    disabled?: boolean;
    onActivate?(state: WindowState): void;
    onClose?(state: WindowState): void;
}

export class WindowState extends ComponentState<WindowProps> implements OpenWindowParams {
    content: JSX.Element;
    id: string;
    title: string;
    top: number;
    left: number;
    width: number;
    height: number;
    right: number;
    bottom: number;
    minHeight: number;
    minWidth: number;
    disabled: boolean;
    parentWindowId: string;
    autoPosition: WindowAutoPosition;
    autoSize: WindowAutoSize;
    theme: string;
    isPopup: boolean;
    noPaddings: boolean;
    popupAutoPosition: PopupAutoPosition;
    popupAnchor: Component<any,any>;
    // при добавлении новых properties ищем все места (5 шт.), помеченные как 'new window props place'
}

export class Window extends Component<WindowProps, WindowState> {
    constructor(props: WindowProps, context: any) {
        super(props, context);
        this.props = props;
        this.state = new WindowState(this);
    }

    private createInitState() {
        _.assign(this.state, this.props);
    }

    protected willMount() {
        this.createInitState();
        super.willMount();

    }

    protected willReceiveProps(nextProps: WindowProps) {
        super.willReceiveProps(nextProps);
        //this.state.disabled = nextProps.disabled;
    }

    // static childContextTypes  = {
    //     parentWindow: React.PropTypes.any
    // };
    //
    // getChildContext() {
    //     return {parentWindow: this};
    // }

    getParentDesktopElement(): HTMLElement {
        let parent = ReactDOM.findDOMNode(this);
        while (parent) {
            if ((parent as any).$$desktop)
                return parent as HTMLElement;
            parent = parent.parentElement;
        }
        throwError("Window.getParentDesktopElement(): parent desktop not found");
        throw "fake";
    }

    // private centerTo(parent: JQuery) {
    //     let win = $(this.nativeElement);
    //
    //     this.state.top = (parent.outerHeight() - win.outerHeight()) / 2;
    //     if (this.state.top > parent.outerHeight() - win.outerHeight())
    //         this.state.top = parent.outerHeight() - win.outerHeight();
    //     if (this.state.top < 0) this.state.top = 0;
    //
    //     this.state.left = (parent.outerWidth() - win.outerWidth()) / 2;
    //     if (this.state.left > parent.outerWidth() - win.outerWidth())
    //         this.state.left = parent.outerWidth() - win.outerWidth();
    //     if (this.state.left < 0) this.state.left = 0;
    //
    //     this.forceUpdate();
    // }
    //
    private centerToDesktop() {
        let win = $(this.nativeElement);
        let desktop = $(this.getParentDesktopElement());

        this.state.top = (desktop.outerHeight() - win.outerHeight()) / 2;
        this.state.left = (desktop.outerWidth() - win.outerWidth()) / 2;

        if (this.state.top > desktop.outerHeight() - win.outerHeight())
            this.state.top = desktop.outerHeight() - win.outerHeight();
        if (this.state.top < 0) this.state.top = 0;

        this.state.left = (desktop.outerWidth() - win.outerWidth()) / 2;
        if (this.state.left > desktop.outerWidth() - win.outerWidth())
            this.state.left = desktop.outerWidth() - win.outerWidth();
        if (this.state.left < 0) this.state.left = 0;

        this.forceUpdate();
        //this.centerTo($(this.getParentDesktopElement()));
    }

    private centerToParentWindow() {
        let win = $(this.nativeElement);
        let parent = $("#" + this.state.parentWindowId);
        let desktop = $(this.getParentDesktopElement());

        this.state.top = (parent.outerHeight() - win.outerHeight()) / 2 + parent.position().top;
        this.state.left = (parent.outerWidth() - win.outerWidth()) / 2 + parent.position().left;

        if (this.state.top > desktop.outerHeight() - win.outerHeight())
            this.state.top = desktop.outerHeight() - win.outerHeight();
        if (this.state.top < 0) this.state.top = 0;

        if (this.state.left > desktop.outerWidth() - win.outerWidth())
            this.state.left = desktop.outerWidth() - win.outerWidth();
        if (this.state.left < 0) this.state.left = 0;

        this.forceUpdate();
        //this.centerTo($("#" + this.state.parentWindowId));
    }

    private setPositionAnchorDown() {

        if (this.state.popupAnchor === undefined)
            throwError("Window.setPositionAnchorDown(): popupAnchor component is not defined");

        let win = $(this.nativeElement);
        let desktop = $(this.getParentDesktopElement());
        let anchorControl = $(this.state.popupAnchor.getNativeElement());

        this.state.top = anchorControl.offset().top - desktop.offset().top + desktop.scrollTop()+anchorControl.outerHeight()-2;
        this.state.left = anchorControl.offset().left - desktop.offset().left + desktop.scrollLeft()-1;
        //this.state.width = anchorControl.width();

        this.forceUpdate();
    }

    protected didMount() {
        super.didMount();
        (this.nativeElement as any)["$$window"] = this;

        if (this.state.autoPosition === "desktop-center")
            this.centerToDesktop();
        else if (this.state.autoPosition === "parent-center")
            this.centerToParentWindow();

        if (this.state.popupAutoPosition === "anchor-down")
            this.setPositionAnchorDown();

    }

    close() {
        this.getParentDesktop().closeWindow(this.state.id);
        if (this.props.onClose)
            this.props.onClose(this.state);
    }


    moveStart = (e: MoveStartEvent): void => {
        e.bindX(this.state, "left", () => {
            $(this.nativeElement).css("left", this.state.left);
        });
        e.bindY(this.state, "top", () => {
            $(this.nativeElement).css("top", this.state.top);
        });
        this.handleOnClick();
    };

    moveOrResizeEnd = (e: MoveEndEvent): void => {
        if (this.props.sizePositionStoreKey !== undefined)
            saveWindowSizePosition(this.props.sizePositionStoreKey, this.state.top, this.state.left, this.state.height, this.state.width);
    };

    resizeRightBottomCornerStart = (e: MoveStartEvent): void => {
        e.bindX(this.state, "width", () => {
            if (this.state.width < this.state.minWidth)
                this.state.width = this.state.minWidth;
            $(this.nativeElement).css("width", this.state.width);
        });
        e.bindY(this.state, "height", () => {
            if (this.state.height < this.state.minHeight)
                this.state.height = this.state.minHeight;
            $(this.nativeElement).css("height", this.state.height);
        });
        this.handleOnClick();
    };

    handleOnClick = (e?: React.SyntheticEvent): void => {
        if (this.props.onActivate)
            this.props.onActivate(this.state);
    };


    handleCloseButtonClick = (e: React.SyntheticEvent): void => {
        this.close();
        e.stopPropagation();
    };

    private shouldComponentUpdate = (nextProps: WindowProps, nextState: WindowState) => {

        let oldDisabled = this.state.disabled === true;
        let newDisabled = nextProps.disabled === true;

        this.state.disabled = newDisabled;

        return oldDisabled !== newDisabled;
    }


    renderRightBottomCornerResizer(): React.ReactNode {
        if (this.state.autoSize === "content") {
            return [];
        }
        else {
            return (
                <Movable
                    className="window-resizer"
                    style={{position:"absolute", height:10, width:10, right:0,bottom:0, borderRadius: "0 0 5px 0",cursor: "se-resize"}}
                    onMoveStart={this.resizeRightBottomCornerStart}
                    onMoveEnd={this.moveOrResizeEnd}
                >
                </Movable>
            );
        }
    }

    render() {

        this.clearStyles();

        this.addProps({id: this.state.id});

        if (this.props.isPopup === true)
            this.addClassName("popup");
        else
            this.addClassName("window box");

        if (this.state.theme !== undefined)
            this.addClassName("border-theme-" + this.state.theme);

        this.addStyles({position: "absolute"});

        this.addStyles({
            top: this.state.top,
            left: this.state.left,
            right: this.state.right,
            bottom: this.state.bottom,
            minHeight: this.state.minHeight,
            minWidth: this.state.minWidth,
            padding: 0,
            overflow: "hidden"
        });

        if (this.state.autoSize === "content") {
            // console.log("content");
            // ?
        }
        else {
            this.addStyles({
                height: this.state.height,
                width: this.state.width
            });

        }


        let headerButtonStyle = {
            border: "0px",
            height: "100%",
            paddingLeft: 2,
            paddingRight: 2,
        };

        console.log("render-win");
        //console.log(this.props.disabled);
        //console.log(this.state.disabled);

        let disabledWrapperClass = "window-disabled-wrapper";
        if (!this.state.disabled || this.state.disabled === false)
            disabledWrapperClass += " is-hidden";

        let bodyPadding = 10;
        if (this.props.noPaddings === true)
            bodyPadding = 0;

        if (this.props.isPopup === true)
            return (
                <div
                    {...this.getRenderProps()}
                    ref={ (e: any) => { this.nativeElement = e; }}
                    onClick={ this.handleOnClick }
                >
                    <div className="window-body" style={{ padding:bodyPadding, overflow:"hidden", height:"100%" }}>
                        {this.props.children}
                        {this.renderRightBottomCornerResizer()}
                    </div>
                    <div className={disabledWrapperClass}
                         style={{ position:"absolute", left:-2, top:0, right:0, bottom:0}}
                    >
                    </div>
                </div>
            );
        else
            return (
                <div
                    {...this.getRenderProps()}
                    ref={ (e: any) => { this.nativeElement = e; }}
                    onClick={ this.handleOnClick }
                >
                    <Layout type="column" sizeTo="parent">
                        <Fixed
                            className="window-header"
                            style={{/*borderRadius: "5px 5px 0px 0px",*/ position:"relative", paddingLeft: 10}}
                        >
                            <Layout type="row" sizeTo="parent">
                                <Flex>
                                    <span className="window-title">{this.props.title}</span>
                                    <Movable
                                        style={{position:"absolute", top:0, left:0, right:0,bottom:0}}
                                        onMoveStart={this.moveStart}
                                        onMoveEnd={this.moveOrResizeEnd}
                                    >
                                    </Movable>
                                </Flex>
                                <Fixed>
                                    <p className="control has-addons buttons-bar"
                                       style={{paddingTop: 2, paddingRight: 4}}>
                                        <a className="button is-small minimize-button" style={headerButtonStyle}>
                                    <span className="icon is-small " style={{marginLeft: 0}}>
                                      <i className="fa fa-minus" style={{top: 3}}></i>
                                    </span>
                                        </a>
                                        <a className="button is-small maximize-button" style={headerButtonStyle}>
                                    <span className="icon is-small" style={{marginLeft: 0}}>
                                      <i className="fa fa-square-o" style={{fontWeight: "bold"}}></i>
                                    </span>
                                        </a>
                                        <a className="button is-small close-button"
                                           style={headerButtonStyle}
                                           onClick={this.handleCloseButtonClick}
                                        >
                                    <span className="icon is-small" style={{marginLeft: 0}}>
                                      <i className="fa fa-close" style={{top: -1}}></i>
                                    </span>
                                        </a>
                                    </p>
                                </Fixed>
                            </Layout>
                        </Fixed>

                        <Flex className="window-body" style={{ padding:bodyPadding, overflow:"hidden" }}>
                            {this.props.children}
                            {this.renderRightBottomCornerResizer()}
                        </Flex>
                    </Layout>
                    <div className={disabledWrapperClass}
                         style={{ position:"absolute", left:-2, top:0, right:0, bottom:0}}
                    >

                    </div>
                </div>
            );
    }

}

// <div className="window-body" style={{ height:"100%" }}>
//     {this.props.children}
// </div>
