import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./HelloProps";
import {App} from "../buhta-core/Components/App";
import {AppDesigner} from "../buhta-app-designer/AppDesigner/AppDesigner";
import {TestBuhtaObject1} from "../Test1/testBuhtaObject1";

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );

// ReactDOM.render(
//     <App/>,
//     document.body
// );

ReactDOM.render(
    <AppDesigner/>,
    document.body
);


let xxx=new TestBuhtaObject1();
let xxx1=new TestBuhtaObject1();
