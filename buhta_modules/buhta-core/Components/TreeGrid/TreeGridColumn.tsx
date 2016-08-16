import * as React from "react";
import * as _ from "lodash";

import {ComponentProps, Component} from "../Component";
import {registerGridColumn, GridColumnInfo} from "../Grid/registerGridColumn";
//import * as ReactDOM from "react-dom";


export interface TreeGridColumnProps extends ComponentProps<any> {
    caption?: string;
    width?: number;
    propertyName?: string;
    showHierarchyTree?: boolean;
    showHierarchyPadding?: boolean;
    order?: number;
}

export class TreeGridColumn extends Component<TreeGridColumnProps, any> {

    constructor(props: TreeGridColumnProps, context: any) {
        super(props, context);

        //this.state.disabled = false;

    }
}


export interface GridColumnParams extends TreeGridColumnProps {

}

// export function GridColumn(params: GridColumnParams): Function {
//     return function (target: any, propertyName: string) {
//         //  console.log({target, propertyName, constr:target.constructor});
//
//         let regColumn: GridColumnInfo = {
//             propertyName: propertyName,
//             objectType: target.constructor
//         };
//
//         _.assign(regColumn, params);
//         registerGridColumn(regColumn);
//
//
//         // registerGridColumn({
//         //     caption: params.caption,
//         //     width: params.width,
//         //     showHierarchyTree: params.showHierarchyTree,
//         //     showHierarchyPadding: params.showHierarchyPadding,
//         //     order: params.order || 0,
//         //     propertyName: propertyName,
//         //     objectType: target.constructor,
//         // });
//     };
// }
//
//
//


