import {Component } from 'react';
import * as React from "react";
import * as _ from "lodash";
//import VendorPrefix from 'react-vendor-prefix';

export default class Layout extends Component<any,any> {

    render() {
        let classes = ['Layout'];
        if (this.props.className) {
            classes.push(this.props.className);
        }
        classes.push(this.props.type);

        let style:any = {
            display: 'flex',
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };

        style.flexDirection = (this.props.type === 'column') ? 'column' : 'row';

        if (this.props.style) {
            _.assign(style, this.props.style);
        }

        //style = VendorPrefix.prefix({style}).style;

        return <div className={classes.join(' ')} style={style}>{this.props.children}</div>;
    }
}


(Layout as any).propTypes = {
    type: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    style: React.PropTypes.object
};

(Layout as any).defaultProps = {
    type: 'row'
};

