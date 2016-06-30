import * as React from "react";
import {ComponentProps, Component} from "../Component";
import Layout from "../LayoutPane/Layout";
import Fixed from "../LayoutPane/Fixed";
import Flex from "../LayoutPane/Flex";
import {Movable, MoveStartEvent} from "../Movable/Movable";

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
    }

    handleOnClick(e){
        console.log("win click");
    }


    render() {
        this.addClassName("window box");
        this.addStyles({position: "absolute"});
        this.addStyles({
            top: this.top,
            left: this.left,
            height: this.height,
            width: this.width,
            padding:0
        });

        return (
            <Layout type="column" ref={ (e)=>{ this.nativeElement = e} } {...this.getRenderProps()} onClick={ this.handleOnClick.bind(this)}>
                <Fixed className="window-header" style={{borderRadius: "5px 5px 0px 0px", position:"relative"}} >
                    Fixed Header
                    <Movable
                        style={{position:"absolute", top:0, left:0, right:0,bottom:0}}
                        onMoveStart={this.moveStart.bind(this)}
                    ></Movable>
                </Fixed>
                <Flex>
                    {this.props.children}
                </Flex>
            </Layout>
        );
    }

}