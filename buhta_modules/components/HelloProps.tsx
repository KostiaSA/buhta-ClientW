import * as React from "react";
import * as SplitPane from "react-split-pane";

export interface HelloProps { compiler: string; framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
            Hello 3++=33222o3m {this.props.compiler} and {this.props.framework}!
            <SplitPane split="vertical" minSize={50} defaultSize={100}>
                2222222
                <div>3333333</div>
                <div></div>
            </SplitPane>
        </div>;
    }
}