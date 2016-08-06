import * as React from "react";
//import * as SelectInput from "react-select";
import Select22 =  require("react-select");
import * as _ from "lodash";

import {OpenWindowParams} from "../buhta-core/Components/Desktop/Desktop";
import {appInstance} from "../buhta-core/Components/App/App";
import {SelectInput} from "../buhta-core/Components/SelectInput/SelectInput";
import {SelectInputDataSourceFromArray} from "../buhta-core/Components/SelectInput/SelectInputDataSourceFromArray";
import {OneWayBinderInput} from "../buhta-core/Components/OneWayBinderInput/OneWayBinderInput";
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

    let win = (
        <div>
            <select className="select" style={{width:450}} value={333} onChange={ (e)=> { console.log(e);}}>
                <optgroup label="Swedish Cars">
                    <option value="volvo" style={{color:"red"}}>Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="audi">Audi</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                </optgroup>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value={333}>Mercedes жопа333</option>
                <option value="audi">Audi</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

            <SelectInput
                style={{width:350}}
                bindObject={testObj}
                bindPropName="value"
                valuesDataSource={values}
                onChange={ ()=> { console.log(testObj.value);}}
            >

            </SelectInput>

            <OneWayBinderInput
                style={{width:300}}
                bindObject={testObj}
                bindPropName="value"
                onChange={ ()=> { console.log(testObj.value);}}
            >

            </OneWayBinderInput>


        </div>);

    let openParam: OpenWindowParams = {
        title: "showTestSelectControlForm",
        top: 50,
        left: 50,
        height: 400,
        width: 500
    };

    appInstance.desktop.openWindow(win, openParam);

}