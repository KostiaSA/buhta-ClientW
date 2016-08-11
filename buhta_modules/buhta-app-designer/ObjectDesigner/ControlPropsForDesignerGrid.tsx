import * as React from "react";
import {Component, ComponentProps} from "../../buhta-core/Components/Component";
import {getShowInDesignerInfos} from "../../buhta-ui/BaseControl";
import {OneWayBinder_undefined} from "../../buhta-schema/OneWayBinder/OneWayBinder_undefined";
import {getSchema} from "../../buhta-schema/Schema";
import {SchemaComponent} from "../../buhta-schema/SchemaComponent/SchemaComponent";

export interface ControlPropsForDesignerGridProps extends ComponentProps<any> {
    control: any;//BaseControl;
    gridColumnName: string;
}

export class ControlPropsForDesignerGrid extends Component<ControlPropsForDesignerGridProps, any> {
    constructor(props: ControlPropsForDesignerGridProps, context: any) {
        super(props, context);
        this.props = props;
    }

    propDesigners: JSX.Element[];

    asyncRender: boolean = false;

    createDesigners() {

        if (this.asyncRender) {
            this.asyncRender = false;
            return;
        }


        this.propDesigners = [];

        getShowInDesignerInfos(this.props.control)
            .filter((info) => {
                return (
                    info.column === this.props.gridColumnName &&
                    this.props.control[info.propertyName] !== undefined &&
                    this.props.control[info.propertyName] !== null &&
                    (!(this.props.control[info.propertyName] instanceof OneWayBinder_undefined))
                );
            }, this)
            .forEach((info, index) => {

                let propValue = this.props.control[info.propertyName];
                let propValueAsString = "";

                // if (propValue === undefined)
                //     propValueAsString = "undefined";
                // else if (propValue === null)
                //     propValueAsString = "null";
                //else
                if (propValue.toString !== undefined)
                    propValueAsString = propValue.toString();
                else
                    propValueAsString = "error: toString() is undefined";


                let prop = (
                    <div key={index}>
                        <span className="property">{info.propertyName }</span>
                        <span className="string">={propValueAsString}</span>
                    </div>
                );
                this.propDesigners.push(prop);
            }, this);

        if (this.props.control.id !== undefined) {
            let begIndex = this.propDesigners.length;
            let schema = getSchema();
            schema
                .getObject<SchemaComponent>(this.props.control.id)
                .then((component: SchemaComponent) => {

                    let userProps: any = {};

                    component.$$getPropNames().forEach((propName: string, index: number) => {

                        let propValue = this.props.control[propName];
                        if (propValue !== undefined) {

                            let propValueAsString = "";

                            if (propValue.toString !== undefined)
                                propValueAsString = propValue.toString();
                            else
                                propValueAsString = "error: toString() is undefined";


                            let prop = (
                                <div key={begIndex + index}>
                                    <span className="property">{propName }</span>
                                    <span className="string">={propValueAsString}</span>
                                </div>
                            );
                            this.propDesigners.push(prop);
                        }

                    }, this);

                    this.asyncRender = true;
                    this.forceUpdate();

                });
        }


    }

    render() {
        //this.addClassName("ControlPropsForDesignerGrid");

        this.createDesigners();

        return (
            <div {...this.getRenderProps()}>
                {this.propDesigners}
            </div>
        );
    }

}