import * as React from "react";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
import Layout from "../../buhta-core/Components/LayoutPane/Layout";
import Fixed from "../../buhta-core/Components/LayoutPane/Fixed";
import Flex from "../../buhta-core/Components/LayoutPane/Flex";

import {testBuhtaObject1} from "../../Test1/testBuhtaObject1";
import {ObjectDesigner} from "../ObjectDesigner/ObjectDesigner";
import {Desktop} from "../../buhta-core/Components/Desktop/Desktop";
import {Draggable} from "../../buhta-core/Components/Draggable/Draggable";


export interface AppDesignerProps extends ComponentProps {
    //text?: string;
}

export class AppDesigner extends Component<AppDesignerProps,{}> {
    constructor(props: AppDesignerProps, context) {
        super(props, context);
        this.props = props;

        this.initTest();
    }

    testObject:testBuhtaObject1=new testBuhtaObject1();
    initTest(){
        this.testObject.name="Тестовый объект1";
    }


    render() {
        this.addClassName("app-designer");


        return (
            <div {...this.getRenderProps()}>
                <Layout type="column">
                    <Fixed className="header">Fixed Header</Fixed>
                    <Flex>
                        <Layout type="row">
                            <Fixed className="sidebar">
                                Fixed Sidebar
                            </Fixed>
                            <Flex className="XXXcontent">
                                <Desktop>
                                    <Draggable>I can now be moved around! test DnD</Draggable>

                                </Desktop>
                            </Flex>
                        </Layout>
                    </Flex>
                </Layout>
            </div>
        );
    }

}