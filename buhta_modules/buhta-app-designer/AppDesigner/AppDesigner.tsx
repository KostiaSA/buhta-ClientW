import * as React from "react";
import * as Immutable from "immutable";
import {ComponentProps, Component, ComponentState} from "../../buhta-core/Components/Component";
import {Layout} from "../../buhta-core/Components/LayoutPane/Layout";
import {Fixed} from "../../buhta-core/Components/LayoutPane/Fixed";
import {Flex} from "../../buhta-core/Components/LayoutPane/Flex";

import {testBuhtaObject1} from "../../Test1/testBuhtaObject1";
import {ObjectDesigner} from "../ObjectDesigner/ObjectDesigner";
import {Desktop} from "../../buhta-core/Components/Desktop/Desktop";
import {Draggable} from "../../buhta-core/Components/Draggable/Draggable";
import {Movable, MoveEvent, MoveStartEvent} from "../../buhta-core/Components/Movable/Movable";
import {App, appInstance} from "../../buhta-core/Components/App";
import {Window} from "../../buhta-core/Components/Window/Window";
import {Tabs, Tab} from "../../buhta-core/Components/Tabs/Tabs";
import {Form} from "../../buhta-core/Components/Form/Form";
import {Input, InputType} from "../../buhta-core/Components/Input/Input";
import {InputDivider} from "../../buhta-core/Components/InputDivider/InputDivider";
import {testBuhtaObject2} from "../../Test1/testBuhtaObject2";
import {getPropertyEditors} from "../PropertyEditors/getPropertyEditor";
import * as _ from "lodash";


export interface AppDesignerProps extends ComponentProps {
    //text?: string;
}

class AppDesignerState extends ComponentState {
    //text?: string;
}

export class AppDesigner extends Component<AppDesignerProps,AppDesignerState> {
    constructor(props: AppDesignerProps, context) {
        super(props, context);
        this.props = props;
        this.state = new AppDesignerState(this);
    }


    // initTest() {
    //     this.testObject.name = "Тестовый объект1";
    // }

    moveStart(e: MoveStartEvent) {
        e.bindX(this, "sideWidth", ()=> {
            this.forceUpdate();
        });
    }


    sideWidth: number = 300;

    testOpenWindow() {

        let obj = {
            Фамилия: "Савченков",
            Имя: "Константин",
            Отчество: "Владимирович"
        };

        let win =
            <Tabs>
                <Tab title="закладка 1">
                    <Form>
                        <Input caption="Фамилия" type={InputType.Text} bindObject={obj} bindPropName="Фамилия"/>
                        <Input caption="Имя" type={InputType.Text} bindObject={obj} bindPropName="Имя"/>
                        <InputDivider title="а теперь отчество"></InputDivider>
                        <Input type={InputType.Text} bindObject={obj} bindPropName="Отчество"/>
                    </Form>
                </Tab>
                <Tab title="закладка 2"> 22222 </Tab>
            </Tabs>
        appInstance.desktop.openWindow(win);
    };




    testOpenObjectDesigner() {
        let testObject: testBuhtaObject1 = new testBuhtaObject1();
        testObject.firstName = "Игорь0";
        testObject.lastName = "Сидоренко0";
        testObject.surName = "Олегович0";

//        let win = <ObjectDesigner onChange={()=>{ win2Instance.designedObject=null; win2Instance.forceUpdate(); console.log("test323-change")}} designedObject={testObject} key="1"> </ObjectDesigner>;
        let win = <ObjectDesigner onChange={()=>{ testObject=_.cloneDeep(testObject);  win2Instance.forceUpdate(); console.log("test999-change")}} designedObject={testObject} key="1"> </ObjectDesigner>;

        let testObject2: testBuhtaObject2 = new testBuhtaObject2();
        testObject2.firstName = "Игорь1";
        testObject2.lastName = "Сидоренко1";
        testObject2.surName = "Олегович1";
        testObject2.sex="мужской"

        let win2Instance;

        let win2 = <ObjectDesigner ref={ (e)=>{ win2Instance=e; console.log(e)} } designedObject={testObject} key="2"> </ObjectDesigner>;

        getPropertyEditors(testObject);
        getPropertyEditors(testObject2);

        appInstance.desktop.openWindow(<div>{win}{win2}</div>, "Дизайнер");

    };


    testImmutable() {
        //let fake=new Table([]);

        const xxx = Immutable.Map<string,number>();

        let obj = {
            name: "Оганизация",
            columns: {"Номер": {colName: "Номер", type: "string"}, "Название": {colName: "Название", type: "string"}}
        };

        let objI = Immutable.fromJS(obj);

        //let m = Immutable.Map<string,number| Immutable.Map<number,string>>();
        //let x = m.set("13yyt333332", 12);
        //let y = m.set("xxx", Immutable.Map<number,string>());

        //let y=m.update("xxx",Immutable.Map<number,string>());

        console.log(objI.toString());
        let x = objI.getIn(['columns', 'Номер', 'colName']);
        console.log(x);
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
                                Fixed Sidebar<br/>
                                <button onClick={()=>{ this.testOpenWindow()}}> test open window</button>
                                <br/>
                                <button onClick={()=>{ this.testOpenObjectDesigner()}}>open designer</button>
                                <br/>
                                <button onClick={()=>{ this.testImmutable()}}>testImmutable</button>
                            </Fixed>
                            <Flex className="XXXcontent">
                                <Desktop>
                                    <Movable onMoveStart={this.moveStart.bind(this)}>MOV</Movable>

                                </Desktop>
                            </Flex>
                        </Layout>
                    </Flex>
                </Layout>
            </App>
        );
    }

}