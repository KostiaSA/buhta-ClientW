import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./HelloProps";
import {App} from "../buhta-core/Components/App/App";
import {AppDesigner} from "../buhta-app-designer/AppDesigner/AppDesigner";
import {TestBuhtaObject1} from "../Test1/testBuhtaObject1";

import {buhta} from "../buhta-core/BuhtaHost";  // не удалять
let fakeBuhtaHost = buhta; // не удалять


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


