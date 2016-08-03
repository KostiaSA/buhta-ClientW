import * as React from "react";
import {ComponentProps, Component} from "../Component";
import DragEventHandler = __React.DragEventHandler;

export interface MovableProps extends ComponentProps<any> {
    onMoveStart?: (event: MoveStartEvent) => void;
    onMove?: (event: MoveEvent) => void;
    onMoveEnd?: (event: MoveEndEvent) => void;
}


export interface MoveStartEvent {
    bindX: (obj: Object, propName: string, movedCallback?: () => void) => void;
    bindY: (obj: Object, propName: string, movedCallback?: () => void) => void;
}

export interface MoveEvent {
    deltaX: number;
    deltaY: number;
}

export interface MoveEndEvent {
    deltaX: number;
    deltaY: number;
}


interface BindedObject {
    obj: any;
    propName: string;
    startValue: number;
    movedCallback?: () => void;
    lastValue: number;
}

export class Movable extends Component<MovableProps, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.props = props;
    }

    private startClientX: number;
    private startClientY: number;
    private dragOver_Binded: any;

    private bindedX: BindedObject[] = [];
    private bindedY: BindedObject[] = [];

    private bindX(obj: any, propName: string, movedCallback?: () => void) {
        this.bindedX.push({
            obj: obj,
            propName: propName,
            startValue: obj[propName],
            movedCallback: movedCallback,
            lastValue: obj[propName]
        });
    };

    private bindY(obj: any, propName: string, movedCallback?: () => void) {
        this.bindedY.push({
            obj: obj,
            propName: propName,
            startValue: obj[propName],
            movedCallback: movedCallback,
            lastValue: obj[propName]
        });
    };

    handleDragStart(e: DragEvent) {

        this.startClientX = e.clientX;
        this.startClientY = e.clientY;

        if (this.props.onMoveStart)
            this.props.onMoveStart({bindX: this.bindX.bind(this), bindY: this.bindY.bind(this)});

        e.dataTransfer.setData("movable", "");
        //e.dataTransfer.dropEffect = 'move';

        this.dragOver_Binded = this.handleDragOver.bind(this);
        document.addEventListener("dragover", this.dragOver_Binded);


    }

    handleDragEnd(e: DragEvent) {
        document.removeEventListener("dragover", this.dragOver_Binded);
        if (this.props.onMoveEnd)
            this.props.onMoveEnd({
                deltaX: e.clientX - this.startClientX,
                deltaY: e.clientY - this.startClientY
            });
        this.bindedX = [];
        this.bindedY = [];
    }

    handleDragOver(e: DragEvent) {
        e.dataTransfer.effectAllowed = "move";

        this.bindedX.forEach((bind) => {
            let newValue = bind.startValue + e.clientX - this.startClientX;
            if (newValue !== bind.lastValue) {
                bind.obj[bind.propName] = newValue;
                bind.lastValue = newValue;
                if (bind.movedCallback)
                    bind.movedCallback();
            }
        });

        this.bindedY.forEach((bind) => {
            let newValue = bind.startValue + e.clientY - this.startClientY;
            if (newValue !== bind.lastValue) {
                bind.obj[bind.propName] = newValue;
                bind.lastValue = newValue;
                if (bind.movedCallback)
                    bind.movedCallback();
            }
        });

        if (this.props.onMove)
            this.props.onMove({
                deltaX: e.clientX - this.startClientX,
                deltaY: e.clientY - this.startClientY
            });

        event.preventDefault();
    }

    render() {
        this.addClassName("movable");
        this.addProps({draggable: true});
        this.addStyles({cursor: "move"});

        //return React.createElement(propInfo.editorType, editorProps, null)
        return (
            <div {...this.getRenderProps()}
                onDragStart={this.handleDragStart.bind(this)}
                onDragEnd={this.handleDragEnd.bind(this)}
            >
                {this.props.children}
            </div>
        );
    }

}