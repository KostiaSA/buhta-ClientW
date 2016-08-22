import * as AgGrid from "ag-grid";
import {ComponentProps, Component} from "../Component";
import Grid from "./Grid";
import {GridColumnDef, GridColumnProps} from "./GridColumn";

export interface GridColumnGroupProps extends ComponentProps<any> {
    caption?: string;
    columns?: (GridColumnProps | GridColumnGroupProps)[];
}


export class GridColumnGroup extends Component<GridColumnGroupProps, any> {

    constructor(props: GridColumnGroupProps, context: any) {
        super(props, context);

        //this.state.disabled = false;

    }

    getAgGridColGroupDef(grid: Grid): AgGrid.ColGroupDef {

        let col: AgGrid.ColGroupDef = {
            headerName: this.props.caption,
            children: []
            //cellRenderer: grid.cellRenderer.bind(grid)
        };

        this.getChildrenOfProps(this.props).forEach((tag: JSX.Element) => {
            if (tag.type === GridColumnDef) {
                col.children.push(new GridColumnDef(tag.props, null).getAgGridColDef(grid));
            }
            if (tag.type === GridColumnGroup) {
                col.children.push(new GridColumnGroup(tag.props, null).getAgGridColGroupDef(grid));
            }

        });

        //console.log(col);
        return col;
    }

}

