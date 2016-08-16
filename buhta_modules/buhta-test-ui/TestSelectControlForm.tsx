import * as React from "react";
//import * as SelectInput from "react-select";
//import Select22 =  require("react-select");
import * as _ from "lodash";

import * as ReactVirtualized from "react-virtualized";

import {OpenWindowParams} from "../buhta-core/Components/Desktop/Desktop";
import {appInstance} from "../buhta-core/Components/App/App";
import {SelectInput} from "../buhta-core/Components/SelectInput/SelectInput";
import {SelectInputDataSourceFromArray} from "../buhta-core/Components/SelectInput/SelectInputDataSourceFromArray";
import {OneWayBinderInput} from "../buhta-core/Components/OneWayBinderInput/OneWayBinderInput";
import {CodeMirrorInput} from "../buhta-core/Components/CodeMirrorInput/CodeMirrorInput";
import Grid from "../buhta-core/Components/Grid/Grid";
import {GridColumnDef} from "../buhta-core/Components/Grid/GridColumn";
import {GridColumnGroup} from "../buhta-core/Components/Grid/GridColumnGroup";
/**
 * Created by Kostia on 06.08.2016.
 */

export function showTestSelectControlForm() {
    let opts: ReactSelect.Option[] = [];

    opts.push({label: "один", value: 1});
    opts.push({label: "два", value: 2});
    opts.push({label: "три", value: 3});


    let testObj = {value: 300};
    let values = new SelectInputDataSourceFromArray([100, 200, 300]);

    let code: any = {};

    code.js = "let values = new SelectInputDataSourceFromArray([100, 200, 300]);";


    let cellRenderer = (param: any): JSX.Element => {
        // console.log(param);
        return <span>Жопа {param.rowIndex}:{param.columnIndex}</span>;
    };

    // let win = (
    //     <div style={{border:"1px solid blue", height:400, width:400}}>
    //         <ReactVirtualized.AutoSizer>
    //             {(param: any) => (
    //                 <ReactVirtualized.Grid
    //                     style={{border:"1px solid red"}}
    //                     cellRenderer={cellRenderer}
    //                     height={param.height}
    //                     rowHeight={40}
    //                     columnCount={6}
    //                     columnWidth={200}
    //                     rowCount={100}
    //                     overscanColumnCount={5}
    //                     overscanRowCount={5}
    //                     width={param.width}
    //                 />
    //             )}
    //         </ReactVirtualized.AutoSizer>
    //     </div>);

    let win = (
        <div style={{border:"0px solid blue", height:"100%"}}>
            <Grid dataSource={[]}>
                <GridColumnDef caption="Колонка1" propertyName="Номер" showHierarchyTree={false} width={150}>
                </GridColumnDef>
                <GridColumnDef caption="Колонка2" propertyName="Название" showHierarchyTree={false} width={150}>
                </GridColumnDef>
                <GridColumnGroup caption="Группа1">
                    <GridColumnDef caption="Колонка3" propertyName="Номер" showHierarchyTree={false} width={150}>
                    </GridColumnDef>
                    <GridColumnDef caption="Колонка4" propertyName="Название" showHierarchyTree={false} width={150}>
                    </GridColumnDef>
                    <GridColumnGroup caption="Группа-1-2">
                        <GridColumnDef caption="Колонка5" propertyName="Номер" showHierarchyTree={false} width={150}>
                        </GridColumnDef>
                        <GridColumnDef caption="Колонка6" propertyName="Название" showHierarchyTree={false} width={150}>
                        </GridColumnDef>
                    </GridColumnGroup>
                </GridColumnGroup>
            </Grid>
        </div>);

    let openParam: OpenWindowParams = {
        title: "showTestSelectControlForm",
        top: 10,
        left: 10,
        height: 700,
        width: 700
    };

    appInstance.desktop.openWindow(win, openParam);

}