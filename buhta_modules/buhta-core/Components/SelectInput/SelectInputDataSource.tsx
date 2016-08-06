import * as React from "react";

export interface SelectInputItem<T> {
    label: React.ReactNode;
    value: T;
    disabled: boolean;
}

export interface SelectInputDataSource<T> {
    getItems(): SelectInputItem<T>[];
}


