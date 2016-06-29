
declare module 'react-draggable' {

    import {Component} from 'react';
    import Props = __React.Props;

    interface DraggableBounds {
        left: number
        right: number
        top: number
        bottom:number
    }

    interface DraggableProps {
        axis?: string
        bounds?: DraggableBounds|string|boolean
        start?:{x:number,y:number}
        zIndex?:number
    }

    interface DraggableCoreProps {
        allowAnyClick: boolean
        disabled: boolean
        enableUserSelectHack: boolean
        grid: number[]
        handle: string
        cancel: string
        onStart: (event, ui) => boolean
        onDrag: (event, ui) => boolean
        onStop: (event, ui) => boolean
        onMouseDown: (event, ui) => boolean
    }

    export class ReactDraggable extends Component<DraggableProps, any> {
    }

    export class ReactDraggableCore extends Component<DraggableCoreProps, any> {
    }

}