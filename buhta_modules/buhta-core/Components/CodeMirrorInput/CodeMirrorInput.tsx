import * as React from "react";
import CodeMirror =  require("codemirror");
import {ComponentProps, Component} from "../Component";
import {AutoFormControlProps} from "../AutoForm/AutoForm";
import {ecma5} from "./ecma5";

export interface CodeMirrorInputProps extends ComponentProps<any>, AutoFormControlProps {
    bindObject: any;
    bindPropName: string;
    height?: number | string;
    width?: number | string;
    onClick?: React.ReactEventHandler;
    onChange?: () => void;
    mode: "javascript" | "sql" | "text";
}

export class CodeMirrorInput extends Component<CodeMirrorInputProps, any> {
    constructor(props: CodeMirrorInputProps, context: any) {
        super(props, context);
        this.props = props;
        //  this.props.options = {};
    }

    protected willMount() {
        super.willMount();
    }

    codeMirror: CodeMirror.Editor;
    divElement: HTMLElement;
    options: CodeMirror.EditorConfiguration = {};

    protected didMount() {
        super.didMount();
        this.options!.value = this.props.bindObject[this.props.bindPropName];
        this.options!.mode = this.props.mode;
        this.options!.theme = "xq-light";

        this.codeMirror = CodeMirror(this.divElement, this.options);

        $(this.divElement).children().css({width: "100%", height: "100%"});

        this.codeMirror.on("change", this.handleOnChangeText);

        let server = new (CodeMirror as any).TernServer({defs: [ecma5]});
        this.codeMirror.setOption("extraKeys", {
            "Ctrl-Space": (cm: any) => {
                server.complete(cm);
            }
            // "Ctrl-I": function(cm) { server.showType(cm); },
            // "Ctrl-O": function(cm) { server.showDocs(cm); },
            // "Alt-.": function(cm) { server.jumpToDef(cm); },
            // "Alt-,": function(cm) { server.jumpBack(cm); },
            // "Ctrl-Q": function(cm) { server.rename(cm); },
            // "Ctrl-.": function(cm) { server.selectName(cm); }
        });
        this.codeMirror.on("cursorActivity", function (cm) {
            server.updateArgHints(cm);
        });


    }


    handleOnChangeText = (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList) => {
        if (change.origin !== "setValue") {
            if (this.props.bindObject && this.props.bindPropName)
                this.props.bindObject[this.props.bindPropName] = instance.getValue();
            //this.forceUpdate();
            if (this.props.onChange)
                this.props.onChange();
        }
    };


    render(): JSX.Element {

        this.clearStyles();
        this.addClassName("codemirror-input textarea");
        this.addStyles({height: this.props.height});
        this.addStyles({width: this.props.width});
        this.addStyles({resize: "both"});

        return (
            <div
                {...this.getRenderProps()}
                ref={(e) => { this.divElement = e; }}
            />
        );
    }
}