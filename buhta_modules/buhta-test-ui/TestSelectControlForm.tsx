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
    }

    let win = (
        <div>
            <ReactVirtualized.Grid
                cellRenderer={cellRenderer}
                height={300}
                rowHeight={40}
                columnCount={6}
                columnWidth={200}
                rowCount={100}
                overscanColumnCount={5}
                overscanRowCount={5}
                width={600}
            />
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