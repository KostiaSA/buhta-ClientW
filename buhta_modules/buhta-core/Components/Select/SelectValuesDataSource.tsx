import * as React from "react";

export interface SelectValuesItem<T> {
    label: React.ReactNode;
    value: T;
    disabled: boolean;
}

export interface SelectValuesDataSource<T> {
    getItems(): SelectValuesItem<T>[];
}


