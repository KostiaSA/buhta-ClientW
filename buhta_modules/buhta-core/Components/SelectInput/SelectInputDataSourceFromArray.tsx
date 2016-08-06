import * as React from "react";
import * as _ from "lodash";
import {SelectInputDataSource, SelectInputItem} from "./SelectInputDataSource";
import {throwError} from "../../Error";


export class SelectInputDataSourceFromArray<T> implements SelectInputDataSource<T> {
    constructor(private arr: any[]) {

    }

    getItems(): SelectInputItem<T>[] {
        return this.arr.map<SelectInputItem<T>>((item: any, index: number)=> {
            if (_.isString(item) || _.isNumber(item) || _.isDate(item))
                return {label: item.toString(), value: item, disabled: false};
            else if (_.isArray(item))
                return {label: item[1], value: item[0], disabled: item[3]};
            else if (_.isObject(item)) {
                let value = item.value;
                if (value === undefined)
                    value = item;
                let label = item.label;
                if (label === undefined && item.label.toString())
                    label = item.toString();
                if (label === undefined)
                    label = "?";
                let disabled = item.disabled;
                if (disabled === undefined)
                    disabled = false;
                return {label, value, disabled};
            }
            else {
                throwError("SelectInputDataSourceFromArray: invalid select item type");
                throw "fake";
            }

        });
    }
}


