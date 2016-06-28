import {Component } from 'react';
import * as React from "react";
import * as _ from "lodash";

export default class Fixed extends Component<any,any> {

    render() {
        let classes = ['Fixed'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        let style = {
            position: 'relative'
        };

        if (this.props.style) {
            _.assign(style, this.props.style);
        }

        //style = VendorPrefix.prefix({style}).style;

        return <div className={classes.join(' ')} style={style}>{this.props.children}</div>;
    }
}

(Fixed as any).propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object
};
