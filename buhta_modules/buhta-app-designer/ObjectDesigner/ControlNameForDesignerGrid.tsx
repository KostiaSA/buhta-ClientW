import * as React from "react";
import {Component, ComponentProps} from "../../buhta-core/Components/Component";
import {getShowInDesignerInfos} from "../../buhta-ui/BaseControl";
import {OneWayBinder_undefined} from "../../buhta-schema/OneWayBinder/OneWayBinder_undefined";
import {getSchema} from "../../buhta-schema/Schema";
import {SchemaComponent} from "../../buhta-schema/SchemaComponent/SchemaComponent";

export interface ControlNameForDesignerGridProps extends ComponentProps<any> {
    control: any;//BaseControl;
}

export class ControlNameForDesignerGrid extends Component<ControlNameForDesignerGridProps, any> {
    constructor(props: ControlNameForDesignerGridProps, context: any) {
        super(props, context);
        this.props = props;
    }

    controlName: string;

    asyncRender: boolean = false;

    loadName() {

        if (this.asyncRender) {
            this.asyncRender = false;
            return;
        }

        this.controlName = "SchemaComponent";

        if (this.props.control.schemaComponentId !== undefined) {
            let schema = getSchema();
            schema
                .getObject<SchemaComponent>(this.props.control.schemaComponentId)
                .then((component: SchemaComponent) => {
                    if (component.name !== null) {
                        this.controlName = component.name;
                        this.asyncRender = true;
                        this.forceUpdate();
                    }
                });
        }

    }

    render() {
        this.loadName();

        let tag = "<" + this.controlName + ">";
        return (
            <span className="html-tag">
              {tag}
            </span>
        );
    }

}