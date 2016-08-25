import * as React from "react";
import * as _ from "lodash";
import {SchemaObject} from "../../buhta-schema/SchemaObject";
import {Component, ComponentProps} from "../../buhta-core/Components/Component";
import {Layout} from "../../buhta-core/Components/LayoutPane/Layout";
import {Flex} from "../../buhta-core/Components/LayoutPane/Flex";
import {Fixed} from "../../buhta-core/Components/LayoutPane/Fixed";
import {Button} from "../../buhta-core/Components/Button/Button";
import Grid from "../../buhta-core/Components/Grid/Grid";
import {GridColumnDef} from "../../buhta-core/Components/Grid/GridColumn";
import {GridFlatDataSourceFromArray} from "../../buhta-core/Components/Grid/GridFlatDataSourceFromArray";
import {stringCompare} from "../../buhta-core/stringCompare";
import {OpenWindowParams, Desktop} from "../../buhta-core/Components/Desktop/Desktop";
import {Schema} from "../../buhta-schema/Schema";
import {GridDataSource, GridDataSourceRow} from "../Components/Grid/GridDataSource";


export interface LookupDialogParams<T> { // extends ComponentProps<any> {
    winTitle?: string;
    title?: string;
    lookupMode: "single" | "multi";
    dataSource: GridDataSource<T>;
}


export function showLookupDialog<T extends GridDataSourceRow>(caller: Component<any, any>, params: LookupDialogParams<T>): Promise<T[]> {

    return new Promise<T[]>(
        (resolve: (obj: T[]) => void, reject: (reason: any) => void) => {

            let win =
                <Layout sizeTo="parent" type="column">
                    <Fixed>{params.title}</Fixed>
                    <Flex>
                        <Grid
                            dataSource={ params.dataSource }
                            lookupMode={ params.lookupMode }
                            onLookupOk={(selectedRows:T[]) => { resolve(selectedRows); }}
                            onLookupCancel={() => { reject({}); }}
                        >
                        </Grid>
                    </Flex>
                </Layout>;

            let openParam: OpenWindowParams = {
                title: params.winTitle || "выбор...",
                autoPosition: "parent-center",
                parentWindowId: caller.getParentWindowId(),
                theme: "orange"
            };

            caller.getParentDesktop().openWindow(win, openParam);
        });

}