import * as React from "react";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";
import {ComponentProps, Component} from "../Component";
import {registerGridColumn, GridColumnInfo} from "./registerGridColumn";
import Grid from "./Grid";
//import * as ReactDOM from "react-dom";


export interface GridColumnProps extends ComponentProps<any> {
    caption?: string;
    width?: number;
    propertyName?: string;
    showHierarchyTree?: boolean;
    showHierarchyPadding?: boolean;
    order?: number;
}

export class GridColumnDef extends Component<GridColumnProps, any> {

    constructor(props: GridColumnProps, context: any) {
        super(props, context);

        //this.state.disabled = false;

    }

    getAgGridColDef(grid: Grid): AgGrid.ColDef {

        let col: AgGrid.ColDef = {
            headerName: this.props.caption,
            field: this.props.propertyName,
            width: this.props.width,
            cellRenderer: grid.cellRenderer.bind(grid)
        };

        if (this.props.showHierarchyTree === true) {
            col.cellRenderer = "group";
            col.cellRendererParams = {
                innerRenderer: grid.cellRenderer.bind(grid)
            };
        }
        //console.log(col);
        return col;
    }
}


export interface GridColumnParams extends GridColumnProps {

}
// это декоратор для дизайнера объектов
export function GridColumn(params: GridColumnParams): Function {
    return function (target: any, propertyName: string) {
        //  console.log({target, propertyName, constr:target.constructor});

        let regColumn: GridColumnInfo = {
            propertyName: propertyName,
            objectType: target.constructor
        };

        _.assign(regColumn, params);
        registerGridColumn(regColumn);

    };
}





