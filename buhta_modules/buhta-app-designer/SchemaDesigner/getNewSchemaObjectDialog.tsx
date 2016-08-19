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
import {
    SchemaObjectTypeInfo, registeredSchemaObjectTypes,
    registeredSchemaObjectTypesAsArray
} from "../../buhta-schema/SchemaObjectTypeInfo";
import {stringCompare} from "../../buhta-core/stringCompare";
import {OpenWindowParams} from "../../buhta-core/Components/Desktop/Desktop";
import {Schema} from "../../buhta-schema/Schema";


export interface NewSchemaObjectDialogProps { // extends ComponentProps<any> {
    callerComponent: Component<any, any>;
    schema: Schema;
    parentSchemaObjectId: string | null;
}


// export class NewSchemaObjectDialog extends Component<NewSchemaObjectDialogProps, any> {
//     constructor(props: NewSchemaObjectDialogProps, context: any) {
//         super(props, context);
//         this.props = props;
//     }
//
//
//     render() {
//
// //        this.addClassName("schema-designer");
// //        this.addProps({onChange: this.props.onChange});
//         this.addStyles({height: "100%"});
//
//         let arr = registeredSchemaObjectTypesAsArray.sort((a, b) => {
//             return stringCompare(a.name, b.name);
//         });
//         let dataSource = new GridFlatDataSourceFromArray<SchemaObjectTypeInfo>(arr, {});
//
//         return (
//             <div {...this.getRenderProps()}>
//                 <Grid
//                     dataSource={ dataSource }
//                 >
//                     <GridColumnDef caption="Объект" propertyName="name"
//                                    showHierarchyTree={true}
//                                    width={200}>
//                     </GridColumnDef>
//                     <GridColumnDef caption="Описание" propertyName="description"
//                                    width={400}>
//                     </GridColumnDef>
//                 </Grid>
//             </div>
//         );
//     }
//
// }


export function getNewSchemaObjectDialog(params: NewSchemaObjectDialogProps): Promise<SchemaObject> {

    return new Promise(
        (resolve: (obj: SchemaObject) => void, reject: (error: string) => void) => {

            let arr = registeredSchemaObjectTypesAsArray.sort((a, b) => {
                return stringCompare(a.name, b.name);
            });
            let dataSource = new GridFlatDataSourceFromArray<SchemaObjectTypeInfo>(arr, {});

            let win =
                <Grid
                    dataSource={ dataSource }
                >
                    <GridColumnDef caption="Объект" propertyName="name"
                                   showHierarchyTree={true}
                                   width={200}>
                    </GridColumnDef>
                    <GridColumnDef caption="Описание" propertyName="description"
                                   width={400}>
                    </GridColumnDef>
                </Grid>;

            let openParam: OpenWindowParams = {
                title: "Выбор нового объекта",
                autoPosition: "parent-center",
                parentWindowId: params.callerComponent.getParentWindowId()
            };

            params.callerComponent.getParentDesktop().openWindow(win, openParam);


            resolve(new SchemaObject(params.schema));
        });

}