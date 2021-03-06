import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {AutoFormControlProps} from "../AutoForm/AutoForm";
import {SelectInputDataSource} from "../SelectInput/SelectInputDataSource";
import {GridDataSource, GridDataSourceRow} from "../Grid/GridDataSource";
import {Button} from "../Button/Button";
import {OpenWindowParams} from "../Desktop/Desktop";
import {getApplication} from "../../getApplication";
import {DataTable} from "../../../buhta-sql/SqlDb";
import {GridFlatDataSourceFromArray} from "../Grid/GridFlatDataSourceFromArray";
import {GridColumnDef} from "../Grid/GridColumn";
import Grid from "../Grid/Grid";
import {Keycode} from "../../Keycode";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {GridState} from "../Grid/Grid";
import {GridStateType} from "../Grid/Grid";

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
        if (this.props.lookupDataSource.getIsAsync()) {

        }
        else {
            let initValue = this.props.bindObject[this.props.bindPropName];
            this.inputText = this.props.lookupDataSource.getLookupLabel(initValue);
        }
    }

    protected didMount() {
        super.didMount();
    }

    protected willUnmount() {
        super.willUnmount();
        clearInterval(this.listBoxCloseCheckerInterval);
    }

    private inputText: string;

    getText = (): string => {
        return this.inputText;
    };


    // google like filtering setup
    private listBoxFilterRegExp: RegExp[] | undefined;
    private listBoxFilterWords: string[] | undefined;

    private setListBoxFilter(filterStr: string) {
        this.listBoxFilterWords = filterStr.split(" ");
        if (this.listBoxFilterWords.length > 0) {
            this.listBoxFilterRegExp = this.listBoxFilterWords.map((word: string)=> {
                return new RegExp(word, "i");
            });
        }
        else {
            this.listBoxFilterRegExp = undefined;
            this.listBoxFilterWords = undefined;
        }
        if (this.listBoxGrid !== undefined)
            this.listBoxGrid.externalFilterChanged();
    }

    private clearListBoxFilter() {
        this.listBoxFilterRegExp = undefined;
        if (this.listBoxGrid !== undefined)
            this.listBoxGrid.externalFilterChanged();
    }

    handleOnChangeText = (event: React.SyntheticEvent) => {
        this.inputText = (event.target as any).value;
        this.setListBoxFilter(this.inputText);
        if (!this.isListBoxVisible()) {
            if (this.listBoxFilterRegExp !== undefined)
                this.showPopupListBox(false);
        }
        else {
            if (this.listBoxFilterRegExp === undefined)
                this.closePopupListBox();
        }
        this.forceUpdate();
    };

    handleInputBlur = (event: React.SyntheticEvent) => {
    };

    handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === Keycode.Down) {
            if (!this.isListBoxVisible()) {
                this.showPopupListBox(true);
                e.preventDefault();
            }
            else
                this.listBoxGrid.setFocusToFirstRow();
        }
        else if (e.key === Keycode.Esc) {
            if (this.isListBoxVisible()) {
                this.closePopupListBox();
                e.preventDefault();
            }
        }
    }
    private inputElement: HTMLElement;

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
                <Button icon="buhta-set-2/lookup-clear" onClick={this.handleClearButtonClick}></Button>
            </p>
        );
    }

    focus() {
        this.inputElement.focus();
    }

    // renderPopupListBox(): JSX.Element {
    //
    //     this.clearStyles();
    //     this.addClassName("input lookup-input");
    //     this.addStyles({width: 300});
    //
    //     //   this.addStyles(this.props.style);
    //
    //     return (
    //         <p className="control has-addons">
    //         </p>
    //     );
    // }


    handleDownButtonClick = (sender: Component<any, any>, event: React.MouseEvent): void => {
        this.showPopupListBox(false);
        this.focus();
    };

    handleClearButtonClick = (sender: Component<any, any>, event: React.MouseEvent): void => {
        this.clearValue();
        this.focus();
    };

    popupListBoxWindowId: string | undefined;

    closePopupListBox() {
        clearInterval(this.listBoxCloseCheckerInterval);
        if (this.popupListBoxWindowId !== undefined) {
            this.getParentDesktop().closeWindow(this.popupListBoxWindowId);
            this.popupListBoxWindowId = undefined;
        }
    }

    // todo при скроллинге listbox-a, когда focused cell уходит из зоны видимости и теряет фокус, listbox закрывается, что неправильно
    private listBoxCloseCheckerInterval: number;
    private listBoxCloseChecker = ()=> {
        if (document.activeElement === this.inputElement ||
            this.getParentDesktop().isWindowHasFocus(this.popupListBoxWindowId!))
            return;
        clearInterval(this.listBoxCloseCheckerInterval);
        this.closePopupListBox();
    }

    private listBoxGrid: GridStateType;


    private handleGridKeyDown = (grid: GridStateType, keyCode: string, rowData: GridDataSourceRow)=> {
        if (keyCode === Keycode.Esc) {
            this.closePopupListBox();
        }
        else if (keyCode === Keycode.Enter) {
            this.setValue(grid.dataSource.getDataValue(rowData, this.props.lookupDataSource.lookupValuePropName!));
            this.closePopupListBox();
            this.inputElement.focus();
        }
    }

    private handleClick = (grid: GridStateType, rowData: GridDataSourceRow)=> {
        this.setValue(grid.dataSource.getDataValue(rowData, this.props.lookupDataSource.lookupValuePropName!));
        this.closePopupListBox();
        this.inputElement.focus();
    }

    private setValue(value: any) {
        this.props.bindObject[this.props.bindPropName] = value;
        this.inputText = this.props.lookupDataSource.getLookupLabel(value);
        if (this.props.onChange)
            this.props.onChange();
        this.forceUpdate();
    }

    private clearValue() {
        this.closePopupListBox();
        this.props.bindObject[this.props.bindPropName] = undefined;
        this.inputText = "";
        if (this.props.onChange)
            this.props.onChange();
        this.forceUpdate();
    }

    private handleGridExternalFilter = (grid: GridStateType, rowData: GridDataSourceRow): boolean => {
        grid.filterWords = this.listBoxFilterWords;
        if (this.listBoxFilterRegExp !== undefined) {
            let label = grid.dataSource.getDataValue(rowData, this.props.lookupDataSource.lookupValuePropName!) + "\t" +
                grid.dataSource.getDataValue(rowData, this.props.lookupDataSource.lookupLabelPropName!);
            for (let i = 0; i < this.listBoxFilterRegExp.length; i++) {
                if (label.search(this.listBoxFilterRegExp[i]) === -1)
                    return false;
            }
        }
        return true;
    }

    showPopupListBox(isSetFocusToGrid: boolean) {

        let openParam: OpenWindowParams = {
            title: "popup",
            width: $(this.inputElement).outerWidth(),
            height: 400,
            isPopup: true,
            popupAutoPosition: "anchor-down",
            popupAnchor: this,
            theme: "blue",
            noPaddings: true
        };

        let winContent = (
            <div style={{height:"100%"}}>
                <Grid
                    lookupMode="listbox"
                    style={{width: $(this.inputElement).outerWidth()}}
                    dataSource={this.props.lookupDataSource}
                    sizeColumnsToFit={true}
                    noBorder={true}
                    hideColumnsHeaders={true}
                    onFirstRender={(grid: GridStateType)=>{
                                this.listBoxGrid=grid;
                                if (isSetFocusToGrid)
                                    grid.setFocusToFirstRow();
                                }
                            }
                    onKeyDown={this.handleGridKeyDown}
                    onClick={this.handleClick}
                    onExternalFilter={this.handleGridExternalFilter}
                >
                    <GridColumnDef propertyName={this.props.lookupDataSource.lookupLabelPropName}>
                    </GridColumnDef>
                </Grid>
            </div>);

        this.popupListBoxWindowId = this.getParentDesktop().openWindow(winContent, openParam);

        // проверка, при потере фокуса и инпутом и листбоксом, закрываем листбокс
        this.listBoxCloseCheckerInterval = setInterval(this.listBoxCloseChecker, 100);

    }

    private isListBoxVisible(): boolean {
        return this.popupListBoxWindowId !== undefined;
    }

}