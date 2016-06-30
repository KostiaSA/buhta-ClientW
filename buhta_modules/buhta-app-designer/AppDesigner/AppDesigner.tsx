import * as React from "react";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
import Layout from "../../buhta-core/Components/LayoutPane/Layout";
import Fixed from "../../buhta-core/Components/LayoutPane/Fixed";
import Flex from "../../buhta-core/Components/LayoutPane/Flex";

import {testBuhtaObject1} from "../../Test1/testBuhtaObject1";
import {ObjectDesigner} from "../ObjectDesigner/ObjectDesigner";
import {Desktop} from "../../buhta-core/Components/Desktop/Desktop";
import {Draggable} from "../../buhta-core/Components/Draggable/Draggable";
import {Movable, MoveEvent, MoveStartEvent} from "../../buhta-core/Components/Movable/Movable";
import {App, appInstance} from "../../buhta-core/Components/App";
import {Window} from "../../buhta-core/Components/Window/Window";


export interface AppDesignerProps extends ComponentProps {
    //text?: string;
}

export class AppDesigner extends Component<AppDesignerProps,{}> {
    constructor(props: AppDesignerProps, context) {
        super(props, context);
        this.props = props;

        this.initTest();
    }

    testObject: testBuhtaObject1 = new testBuhtaObject1();

    initTest() {
        this.testObject.name = "Тестовый объект1";
    }

    moveStart(e: MoveStartEvent) {
        e.bindX(this, "sideWidth", ()=> {
            this.forceUpdate();
            console.log("moved");
        });
    }


    sideWidth: number = 300;

    testOpenWindow() {

       let win= <Window> окно1 </Window>;
       appInstance.openWindow(win);
    };

    render() {
        this.addClassName("app-designer");


        return (
            <App {...this.getRenderProps()}>
                <Layout type="column">
                    <Fixed className="header1">Fixed Header</Fixed>
                    <Flex>
                        <Layout type="row">
                            <Fixed className="sidebar" style={{width:this.sideWidth}}>
                                Fixed Sidebar
                            </Fixed>
                            <Flex className="XXXcontent">
                                <Desktop>
                                    <Movable onMoveStart={this.moveStart.bind(this)}>MOV</Movable>
                                    <button onClick={()=>{ this.testOpenWindow()}}> test open window</button>

                                </Desktop>
                            </Flex>
                        </Layout>
                    </Flex>
                </Layout>
            </App>
        );
    }

}