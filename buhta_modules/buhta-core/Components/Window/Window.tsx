import * as React from "react";
import {ComponentProps, Component, ComponentState} from "../Component";
import {Layout} from "../LayoutPane/Layout";
import {Fixed} from "../LayoutPane/Fixed";
import {Flex} from "../LayoutPane/Flex";
import {Movable, MoveStartEvent} from "../Movable/Movable";
import shallowCompare = require("react-addons-shallow-compare");
import deepEqual = require("deep-equal");
import {OpenWindowParams} from "../Desktop/Desktop";


export interface WindowProps extends OpenWindowParams,ComponentProps<WindowState> {
    id?: string;
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
}

export class Window extends Component<WindowProps, WindowState> {
    constructor(props: WindowProps, context: any) {
        super(props, context);
        this.props = props;
        this.state = new WindowState(this);
    }

    private createInitState() {

        this.state.id = this.props.id;
        this.state.title = this.props.title;
        this.state.top = this.props.top;
        this.state.left = this.props.left;
        this.state.right = this.props.right;
        this.state.bottom = this.props.bottom;
        this.state.width = this.props.width;
        this.state.height = this.props.height;

    }

    protected willMount() {
        this.createInitState();
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


    moveStart = (e: MoveStartEvent): void => {
        e.bindX(this.state, "left", () => {
            $(this.nativeElement).css('left', this.state.left);
        });
        e.bindY(this.state, "top", () => {
            $(this.nativeElement).css('top', this.state.top);
        });
        this.handleOnClick(null);
    };

    resizeRightBottomCornerStart = (e: MoveStartEvent): void => {
        e.bindX(this.state, "width", () => {
            if (this.state.width < this.state.minWidth)
                this.state.width = this.state.minWidth;
            $(this.nativeElement).css('width', this.state.width);
        });
        e.bindY(this.state, "height", () => {
            if (this.state.height < this.state.minHeight)
                this.state.height = this.state.minHeight;
            $(this.nativeElement).css('height', this.state.height);
        });
        this.handleOnClick(null);
    };

    handleOnClick = (e: React.SyntheticEvent): void => {
        if (this.props.onActivate)
            this.props.onActivate(this.state);
    };


    handleCloseButtonClick = (e: React.SyntheticEvent): void => {
        if (this.props.onClose)
            this.props.onClose(this.state);
        e.stopPropagation();
    };

    private shouldComponentUpdate = (nextProps: WindowProps, nextState: WindowState) => {
        // всегда false, потому что менять props окна может только desktop,
        // а таких случаях содержимое окна менять не надо
        return false;
    }

    render() {
        this.clearStyles();

        this.addClassName("window box");
        this.addStyles({position: "absolute"});
        this.addStyles({
            top: this.state.top,
            left: this.state.left,
            height: this.state.height,
            width: this.state.width,
            right: this.state.right,
            bottom: this.state.bottom,
            padding: 0,
            overflow: "hidden"
        });


        let headerButtonStyle = {
            border: "0px",
            height: "100%",
            paddingLeft: 2,
            paddingRight: 2,
        };

        console.log("render-win");

        return (
            <div className="window"
                {...this.getRenderProps()}
                 ref={ (e: any) => { this.nativeElement = e; }}
                 onClick={ this.handleOnClick }
            >
                <Layout type="column" sizeTo="parent">
                    <Fixed
                        className="window-header"
                        style={{borderRadius: "5px 5px 0px 0px", position:"relative", paddingLeft: 10}}
                    >
                        <Layout type="row" sizeTo="parent">
                            <Flex>
                                <span className="window-title">{this.props.title}</span>
                                <Movable
                                    style={{position:"absolute", top:0, left:0, right:0,bottom:0}}
                                    onMoveStart={this.moveStart}
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

                    <Flex className="window-body" style={{ overflow:"hidden", border:"1px solid red"  }}>
                        {this.props.children}

                        <Movable
                            className="window-resizer"
                            style={{position:"absolute", height:10, width:10, right:0,bottom:0, borderRadius: "0 0 5px 0",cursor: "se-resize"}}
                            onMoveStart={this.resizeRightBottomCornerStart}
                        >
                        </Movable>
                    </Flex>
                </Layout>
            </div>
        );
    }

}

// <div className="window-body" style={{ height:"100%" }}>
//     {this.props.children}
// </div>
