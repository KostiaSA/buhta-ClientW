import * as React from "react";
import * as ReactDOM from "react-dom";

import {AppDesigner} from "../buhta-app-designer/AppDesigner/AppDesigner";

import {buhtaHost} from "../buhta-core/BuhtaHost";  // не удалять
let fakeBuhtaHost = buhtaHost; // не удалять

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


