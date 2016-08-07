"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var AppDesigner_1 = require("../buhta-app-designer/AppDesigner/AppDesigner");
var BuhtaHost_1 = require("../buhta-core/BuhtaHost"); // не удалять
var fakeBuhtaHost = BuhtaHost_1.buhtaHost; // не удалять
// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );
// ReactDOM.render(
//     <App/>,
//     document.body
// );
ReactDOM.render(React.createElement(AppDesigner_1.AppDesigner, null), document.body);
//# sourceMappingURL=index.js.map