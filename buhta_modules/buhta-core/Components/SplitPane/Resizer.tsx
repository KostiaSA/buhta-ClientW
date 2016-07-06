// import {Component, PropTypes } from 'react';
// import * as React from "react";
//
// class Resizer extends Component<any,any> {
//     constructor(props, context) {
//         super(props, context);
//
//         this.onMouseDown = this.onMouseDown.bind(this);
//     }
//
//     onMouseDown(event) {
//         this.props.onMouseDown(event);
//     }
//
//     render() {
//         const { split, className } = this.props;
//         const classes = ['Resizer', split, className];
//         return (
//             <span className={classes.join(' ')} onMouseDown={this.onMouseDown} />
//         );
//     }
// }
//
// (Resizer as any).propTypes = {
//     onMouseDown: PropTypes.func.isRequired,
//     split: PropTypes.oneOf(['vertical', 'horizontal']),
//     className: PropTypes.string.isRequired,
// };
//
// export default Resizer;
