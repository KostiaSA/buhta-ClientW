import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {AutoFormControlProps} from "../AutoForm/AutoForm";
import {SelectInputDataSource} from "../SelectInput/SelectInputDataSource";
import {GridDataSource} from "../Grid/GridDataSource";
import {Button} from "../Button/Button";
import {OpenWindowParams} from "../Desktop/Desktop";
import {getApplication} from "../../getApplication";
import {DataTable} from "../../../buhta-sql/SqlDb";
import {GridFlatDataSourceFromArray} from "../Grid/GridFlatDataSourceFromArray";
import {GridColumnDef} from "../Grid/GridColumn";
import Grid from "../Grid/Grid";
import {Keycode} from "../../Keycode";

export enum LookupInputType {Text, Number, Date }

export interface LookupInputProps<TValue> extends ComponentProps<any>, AutoFormControlProps {
    bindObject: any;
    bindPropName: string;
    lookupDataSource: GridDataSource<TValue,any>;
    multiSelect?: boolean;

    maxWidth?: number;
    onClick?: React.ReactEventHandler;
    placeHolder?: string;
    onChange?: () => void;
}


export class LookupInput extends Component<LookupInputProps<any>, any> {
    constructor(props: LookupInputProps<any>, context: any) {
        super(props, context);
        this.props = props;
    }

    protected willMount() {
        super.willMount();
    }

    getText = (): string => {
        if (this.props.bindObject && this.props.bindPropName) {
            if (this.props.bindObject[this.props.bindPropName])
                return this.props.bindObject[this.props.bindPropName].toString() + "***";
            else
                return "";
        }
        else
            return "<unbinded>";
    };


    handleOnChangeText = (event: React.SyntheticEvent) => {
        if (this.props.bindObject && this.props.bindPropName)
            this.props.bindObject[this.props.bindPropName] = (event.target as any).value;
        this.forceUpdate();
        if (this.props.onChange)
            this.props.onChange();

    };

    handleInputBlur = (event: React.SyntheticEvent) => {
        setTimeout(()=> {
            if (!this.getParentDesktop().isWindowHasFocus(this.popupListBoxWindowId!))
                this.closePopupListBox();
        }, 50);
    };

    handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === Keycode.Down) {
            if (this.popupListBoxWindowId === undefined) {
                this.showPopupListBox();
                e.preventDefault();
            }
        }
        else if (e.key === Keycode.Esc) {
            if (this.popupListBoxWindowId !== undefined) {
                this.closePopupListBox();
                e.preventDefault();
            }
        }
    }
    inputElement: HTMLElement;

    render(): JSX.Element {

        this.clearStyles();
        this.addClassName("input lookup-input");
        this.addStyles({width: 300});

        //   this.addStyles(this.props.style);

        return (
            <p className="control has-addons">
                <input
                    ref={ (e: any) => { this.inputElement = e; }}
                    type="text"
                    value={this.getText()}
                    onChange={this.handleOnChangeText}
                    onBlur={this.handleInputBlur}
                    onKeyDown={this.handleInputKeyDown}
                    {...this.getRenderProps()}
                />
                <Button icon="buhta-set-2/lookup-down" onClick={this.handleDownButtonClick}></Button>
                <Button>поиск</Button>
                <Button icon="buhta-set-2/lookup-clear"></Button>
            </p>
        );
    }

    focus() {
        this.inputElement.focus();
    }

    renderPopupListBox(): JSX.Element {

        this.clearStyles();
        this.addClassName("input lookup-input");
        this.addStyles({width: 300});

        //   this.addStyles(this.props.style);

        return (
            <p className="control has-addons">
            </p>
        );
    }


    handleDownButtonClick = (sender: Component<any, any>, event: React.MouseEvent): void => {
        this.showPopupListBox();
        this.focus();
        // setTimeout(()=> {
        //     this.focus();
        // }, 1000);
    };

    popupListBoxWindowId: string | undefined;

    closePopupListBox() {
        if (this.popupListBoxWindowId !== undefined) {
            this.getParentDesktop().closeWindow(this.popupListBoxWindowId);
            this.popupListBoxWindowId = undefined;
        }
    }

    showPopupListBox() {

        let openParam: OpenWindowParams = {
            title: "popup",
            //top: 400,
            left: 10,
            width: 200,
            height: 400,
            isPopup: true,
            popupAutoPosition: "anchor-down",
            popupAnchor: this,
            theme: "blue",
            noPaddings: true
        };

        getApplication().getMainDb().executeSQL("select TOP 100 Номер,Название from [ТМЦ]")
            .done((tables: DataTable[]) => {

                let ds = new GridFlatDataSourceFromArray({arrayObj: tables[0].rows});

                let winContent = (
                    <div style={{height:"100%"}}>
                        <Grid
                            dataSource={ds}
                            sizeColumnsToFit={true}
                            noBorder={true}
                            hideColumnsHeaders={true}
                        >
                            <GridColumnDef propertyName="Название">
                            </GridColumnDef>
                        </Grid>
                    </div>);

                this.popupListBoxWindowId = this.getParentDesktop().openWindow(winContent, openParam);

            });

    }

}