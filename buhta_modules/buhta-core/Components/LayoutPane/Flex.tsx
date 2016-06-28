import {Component } from 'react';
import * as React from "react";
import * as _ from "lodash";

export default class Flex extends Component<any,any> {

    render() {
        let classes = ['Flex'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        let style = {
            flex: 1,
            position: 'relative'
        };

        if (this.props.style) {
            _.assign(style, this.props.style);
        }

        //style = VendorPrefix.prefix({style}).style;

        return <div className={classes.join(' ')} style={style}>{this.props.children}</div>;
    }
}

(Flex as any).propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object
};
