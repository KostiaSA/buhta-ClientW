import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {Layout} from "../LayoutPane/Layout";
import {Fixed} from "../LayoutPane/Fixed";
import {Flex} from "../LayoutPane/Flex";
import {Movable, MoveStartEvent} from "../Movable/Movable";
import shallowCompare = require("react-addons-shallow-compare");
import deepEqual = require("deep-equal");


export interface WindowProps extends ComponentProps {
    title?: string;
    top?: number;
    left?: number;
    width?: number;
    height?: number;
    right?: number;
    bottom?: number;
    onMoveStart?(e: MoveStartEvent): void;
    onResizeRightBottomCornerStart?(e: MoveStartEvent): void;
    onActivate?(): void;
    onClose?(): void;
}

export class Window extends Component<WindowProps, any> {
    constructor(props: WindowProps, context: any) {
        super(props, context);
        this.props = props;
    }


    moveStart = (e: MoveStartEvent): void => {
        if (this.props.onMoveStart)
            this.props.onMoveStart(e);
    };

    resizeRightBottomCornerStart = (e: MoveStartEvent): void => {
        if (this.props.onResizeRightBottomCornerStart)
            this.props.onResizeRightBottomCornerStart(e);
    };

    handleOnClick = (e: React.SyntheticEvent): void => {
        if (this.props.onActivate)
            this.props.onActivate();
    };


    handleCloseButtonClick = (e: React.SyntheticEvent): void => {
        if (this.props.onClose)
            this.props.onClose();
        e.stopPropagation();
    };

    render() {
        this.clearStyles();

        this.addClassName("window box");
        this.addStyles({position: "absolute"});
        this.addStyles({
            top: this.props.top,
            left: this.props.left,
            height: this.props.height,
            width: this.props.width,
            right: this.props.right,
            bottom: this.props.bottom,
            padding: 0,
            overflow: "hidden"
        });


        let headerButtonStyle = {
            border: "0px",
            height: "100%",
            paddingLeft: 2,
            paddingRight: 2,
        };

        return (
            <div {...this.getRenderProps()} onClick={ this.handleOnClick }>
                <Layout type="column" ref={ (e: any) => { this.nativeElement = e; } }

                >
                    <Fixed
                        className="window-header"
                        style={{borderRadius: "5px 5px 0px 0px", position:"relative", paddingLeft: 10}}
                    >
                        <span className="window-title">{this.props.title}</span>
                        <Layout type="row">
                            <Flex>
                                <Movable
                                    style={{position:"absolute", top:0, left:0, right:0,bottom:0}}
                                    onMoveStart={this.moveStart}
                                >
                                </Movable>
                            </Flex>
                            <Fixed>
                                <p className="control has-addons buttons-bar" style={{paddingTop: 2, paddingRight: 4}}>
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
                    <Flex style={{ padding:3}}>
                        {this.props.children}
                    </Flex>
                    <Movable
                        className="window-resizer"
                        style={{position:"absolute", height:10, width:10, right:0,bottom:0, borderRadius: "0 0 5px 0",cursor: "se-resize"}}
                        onMoveStart={this.resizeRightBottomCornerStart}
                    >
                    </Movable>
                </Layout>
            </div>
        );
    }

}