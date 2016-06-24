import * as React from "react";
import * as SplitPane from "react-split-pane";

export interface HelloProps { compiler: string; framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {

        return <div>
            Hello 3++44=66332===22o3m {this.props.compiler} and {this.props.framework}!
            <SplitPane split="vertical" minSize={50} defaultSize={100}>
                <div>3333=====444==33====333</div>
                <div></div>
            </SplitPane>
        </div>;
    }
}