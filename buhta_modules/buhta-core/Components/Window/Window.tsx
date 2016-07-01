import * as React from "react";
import {ComponentProps, Component} from "../Component";
import Layout from "../LayoutPane/Layout";
import Fixed from "../LayoutPane/Fixed";
import Flex from "../LayoutPane/Flex";
import {Movable, MoveStartEvent} from "../Movable/Movable";
import {appInstance} from "../App";

export interface WindowProps extends ComponentProps {
    title?: string;
    top?: number;
    left?: number;
    width?: number;
    height?: number;
}

export class Window extends Component<WindowProps,{}> {
    constructor(props: WindowProps, context) {
        super(props, context);
        this.props = props;
    }

    top: number = 10;
    left: number = 10;
    width: number = 500;
    height: number = 300;

    moveStart(e: MoveStartEvent) {
        e.bindX(this, "left", ()=> {
            this.forceUpdate();
        });
        e.bindY(this, "top", ()=> {
            this.forceUpdate();
        });
        appInstance.desktop.activateWindow(this);
    }

    resizeRightBottomConerStart(e: MoveStartEvent) {
        e.bindX(this, "width", ()=> {
            this.forceUpdate();
        });
        e.bindY(this, "height", ()=> {
            this.forceUpdate();
        });
    }

    handleOnClick(e) {
        console.log("win click");
    }


    handleCloseButtonClick() {
        appInstance.desktop.closeWindow(this);
    }

    render() {
        this.addClassName("window box");
        this.addStyles({position: "absolute"});
        this.addStyles({
            top: this.top,
            left: this.left,
            height: this.height,
            width: this.width,
            padding: 0
        });


        let headerButtonStyle = {
            border: "0px",
            height: "100%",
            paddingLeft: 2,
            paddingRight: 2,
        }

        return (
            <Layout type="column" ref={ (e)=>{ this.nativeElement = e} } {...this.getRenderProps()}
                    onClick={ this.handleOnClick.bind(this)}>
                <Fixed
                    className="window-header"
                    style={{borderRadius: "5px 5px 0px 0px", position:"relative", paddingLeft: 10}}
                >
                    <span className="window-title">{this.props.title}</span>
                    <Layout type="row">
                        <Flex>
                            <Movable
                                style={{position:"absolute", top:0, left:0, right:0,bottom:0}}
                                onMoveStart={this.moveStart.bind(this)}
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
                                   onClick={this.handleCloseButtonClick.bind(this)}
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
                    onMoveStart={this.resizeRightBottomConerStart.bind(this)}
                >
                </Movable>
            </Layout>
        );
    }

}