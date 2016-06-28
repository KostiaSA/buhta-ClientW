import {Component, PropTypes } from 'react';
import * as React from "react";

class Pane extends Component<any,any> {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        const split = this.props.split;
        const classes = ['Pane', split, this.props.className];

        const style:any = {
            flex: 1,
            position: 'relative',
            outline: 'none',
        };

        if (this.state.size !== undefined) {
            if (split === 'vertical') {
                style.width = this.state.size;
            } else {
                style.height = this.state.size;
                style.display = 'flex';
            }
            style.flex = 'none';
        }

        return (
            <div className={classes.join(' ')} style={style}>{this.props.children}</div>
        );
    }
}

(Pane as any).propTypes = {
    split: PropTypes.oneOf(['vertical', 'horizontal']),
    className: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};

export default Pane;
