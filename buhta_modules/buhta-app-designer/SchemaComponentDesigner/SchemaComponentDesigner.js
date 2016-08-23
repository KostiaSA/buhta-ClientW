"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var Component_1 = require("../../buhta-core/Components/Component");
var Snapshot_1 = require("../../buhta-core/Snapshot");
//import {Observable} from "../../buhta-core/Observable";
var deepClone_1 = require("../../buhta-core/deepClone");
var Layout_1 = require("../../buhta-core/Components/LayoutPane/Layout");
var Flex_1 = require("../../buhta-core/Components/LayoutPane/Flex");
var Tabs_1 = require("../../buhta-core/Components/Tabs/Tabs");
var Fixed_1 = require("../../buhta-core/Components/LayoutPane/Fixed");
var Button_1 = require("../../buhta-core/Components/Button/Button");
var isDeepEqual_1 = require("../../buhta-core/isDeepEqual");
var Auth_1 = require("../../buhta-core/Auth");
var getObjectConstructorName_1 = require("../../buhta-core/getObjectConstructorName");
var ObjectDesigner_1 = require("../ObjectDesigner/ObjectDesigner");
var GridTreeDataSourceFromComponent_1 = require("../../buhta-core/Components/Grid/GridTreeDataSourceFromComponent");
var Grid_1 = require("../../buhta-core/Components/Grid/Grid");
var GridColumn_1 = require("../../buhta-core/Components/Grid/GridColumn");
var stringCompare_1 = require("../../buhta-core/stringCompare");
var GridFlatDataSourceFromArray_1 = require("../../buhta-core/Components/Grid/GridFlatDataSourceFromArray");
var showLookupDialog_1 = require("../../buhta-core/Dialogs/showLookupDialog");
var ControlTypeInfo_1 = require("../../buhta-ui/ControlTypeInfo");
var SchemaComponentDesigner = (function (_super) {
    __extends(SchemaComponentDesigner, _super);
    function SchemaComponentDesigner(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.snapshot = new Snapshot_1.Snapshot();
        // renderPropertyDesigners(): JSX.Element[] {
        //     let ret: JSX.Element[] = [];
        //
        //     getPropertyEditors(this.observableDesignedObject).forEach((propInfo: PropertyEditorInfo, index: number) => {
        //         //console.log(propInfo);
        //         let editorProps: BasePropertyEditorProps & PropertyEditorInfo = {
        //             designedObject: this.observableDesignedObject,
        //             //propertyEditorInfo: propInfo,
        //             index: index,
        //             key: index,
        //             onChange: this.props.onChange,
        //
        //             // это из propInfo: PropertyEditorInfo, заполяется далее через _.assign
        //             propertyName: "",
        //             objectType: DesignedObject,
        //             editorType: BasePropertyEditor,
        //             propertyType: null
        //         };
        //
        //         _.assign(editorProps, propInfo);
        //
        //         if (!editorProps.inputCaption)
        //             editorProps.inputCaption = editorProps.propertyName;
        //         //console.log(editorProps);
        //
        //         ret.push(React.createElement(propInfo.editorType, editorProps, {}));
        //     });
        //
        //     return ret;
        // }
        this.handleSaveButtonClick = function (sender, e) {
            if (_this.props.onSaveChanges)
                _this.props.onSaveChanges();
            if (_this.clonedDesignedObject.createDate === null) {
                _this.clonedDesignedObject.createDate = new Date();
            }
            if (_this.clonedDesignedObject.createUserID === null) {
                _this.clonedDesignedObject.createUserID = Auth_1.getUserId();
            }
            _this.clonedDesignedObject.changeDate = new Date();
            _this.clonedDesignedObject.changeUserID = Auth_1.getUserId();
            _this.clonedDesignedObject.save()
                .then(function () {
                console.log("SchemaComponent " + _this.clonedDesignedObject.name + " saved");
                _this.getParentWindow().close();
            })
                .catch(function (error) {
                _this.showErrorWindow(error);
            });
            e.stopPropagation();
        };
        this.handleCancelButtonClick = function (sender, e) {
            if (_this.props.onCancelChanges)
                _this.props.onCancelChanges();
            _this.getParentWindow().close();
            e.stopPropagation();
        };
        // handleSaveChanges = () => {
        //     console.log("save-changes");
        //     //console.log(this.props.designedObject);
        //     _.assign(this.props.designedObject, this.observableDesignedObject);
        //     if (this.props.onSaveChanges)
        //         this.props.onSaveChanges();
        //
        // }
        //
        // handleCancelChanges = () => {
        //     console.log("cancel-changes");
        //     //this.snapshot.restoreObject(this.props.designedObject, "root");
        //     if (this.props.onCancelChanges)
        //         this.props.onCancelChanges();
        //     //console.log(this.props.designedObject);
        // }
        // handleGetNeedToSave = (): boolean => {
        //     return this.needToSave;
        // }
        this.handleTestButtonClick = function () {
            //this.openEditForm(this.state.rows[this.state.focusedRowIndex]);
            var designedObject = deepClone_1.deepClone(_this.clonedDesignedObject);
            var openParam = {
                title: "\u0442\u0435\u0441\u0442 '" + getObjectConstructorName_1.getObjectConstructorName(designedObject) + "'",
                top: 350,
                left: 350
            };
            _this.getParentDesktop().openSchemaComponent(designedObject, openParam);
        };
        this.handleUpdateButtonClick = function () {
            var designedObject = _this.gridState.getFocusedRowData();
            if (designedObject) {
                var win = React.createElement(ObjectDesigner_1.ObjectDesigner, {designedObject: designedObject, onSaveChanges: function () { _this.gridState.refresh(); }});
                var openParam = {
                    title: "редактирование",
                    autoPosition: "parent-center",
                    parentWindowId: _this.getParentWindowId()
                };
                _this.getParentDesktop().openWindow(win, openParam);
            }
        };
        this.handleInsertButtonClick = function () {
            //this.openInsertForm();
        };
        this.handleDeleteButtonClick = function () {
            //this.openDeleteForm(this.state.rows[this.state.focusedRowIndex]);
        };
        // handleTreeGridChangeFocusedRow = (state: TreeGridState<BaseControl>) => {
        //     this.gridState = state;
        //     //console.log("handleTreeGridChangeFocusedRow:" + state.focusedRowIndex);
        //     //this.openDeleteForm(this.state.rows[this.state.focusedRowIndex]);
        //
        // }
        this.getNewDesignedObject = function (focusedData) {
            var columns = [];
            columns.push({ caption: "Тип объекта", propertyName: "name" });
            columns.push({ caption: "Описание", propertyName: "description" });
            var arr = ControlTypeInfo_1.registeredControlTypesAsArray.sort(function (a, b) {
                return stringCompare_1.stringCompare(a.name, b.name);
            });
            var dataSource = new GridFlatDataSourceFromArray_1.GridFlatDataSourceFromArray({ arrayObj: arr, gridColumns: columns });
            var params = {
                title: "Выберите тип нового объекта",
                lookupMode: "single",
                dataSource: dataSource
            };
            return showLookupDialog_1.showLookupDialog(_this, params)
                .then(function (selected) {
                var newObject = new (Function.prototype.bind.apply(selected[0].type, [_this]));
                console.log(selected[0].type);
                console.log(newObject);
                // if (focusedData === undefined) {
                //     console.log(this.props.designedObject);
                //     (this.props.designedObject as SchemaComponent).children.push(newObject);
                // }
                // else
                //     focusedData.children.push(newObject);
                return newObject;
            });
        };
        this.props = props;
    }
    //observableDesignedObject: SchemaComponent;
    SchemaComponentDesigner.prototype.willMount = function () {
        _super.prototype.willMount.call(this);
        this.needToSave = false;
        this.clonedDesignedObject = deepClone_1.deepClone(this.props.designedObject);
    };
    SchemaComponentDesigner.prototype.startCheckDesignedObjectIsChanged = function () {
        var _this = this;
        this.compareInterval = setInterval(function () {
            console.log("deepCompare");
            if (!isDeepEqual_1.isDeepEqual(_this.clonedDesignedObject, _this.props.designedObject)) {
                clearInterval(_this.compareInterval);
                _this.needToSave = true;
                _this.forceUpdate();
            }
        }, 200);
    };
    SchemaComponentDesigner.prototype.willUnmount = function () {
        _super.prototype.willUnmount.call(this);
        clearInterval(this.compareInterval);
    };
    SchemaComponentDesigner.prototype.didMount = function () {
        _super.prototype.didMount.call(this);
        this.startCheckDesignedObjectIsChanged();
        //this.snapshot.saveObject(this.props.designedObject, "root");
    };
    SchemaComponentDesigner.prototype.renderEditableButtons = function () {
        var buttons = [];
        buttons.push(React.createElement(Button_1.Button, {key: "insert", className: "is-outlined is-success", onClick: this.handleInsertButtonClick}, "Добавить"));
        buttons.push(React.createElement(Button_1.Button, {key: "update", className: "is-outlined is-info", onClick: this.handleUpdateButtonClick}, "Изменить"));
        buttons.push(React.createElement(Button_1.Button, {key: "delete", className: "is-outlined is-danger", onClick: this.handleDeleteButtonClick}, "Удалить"));
        return buttons;
    };
    SchemaComponentDesigner.prototype.render = function () {
        var _this = this;
        var dataSourceParam = {
            nodes: this.clonedDesignedObject.children,
            getNewDesignedObject: this.getNewDesignedObject
        };
        var dataSource = new GridTreeDataSourceFromComponent_1.GridTreeDataSourceFromComponent(dataSourceParam);
        this.addClassName("component-designer");
        this.addProps({ onChange: this.props.onChange });
        this.addStyles({ height: "100%" });
        return (React.createElement("div", __assign({}, this.getRenderProps()), 
            React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent"}, 
                React.createElement(Flex_1.Flex, null, 
                    React.createElement(Tabs_1.Tabs, {sizeTo: "parent", onWillMount: function (state) { console.log("onWillMount-auto-form-tabs"); }, onChangeActiveTab: function (state, tab) { console.log("setActiveTab"); console.log(tab); }}, 
                        React.createElement(Tabs_1.Tab, {key: "1", title: "Основная"}, 
                            React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent"}, 
                                React.createElement(Flex_1.Flex, null, 
                                    React.createElement(Grid_1.default, {className: "children-tree-grid", dataSource: dataSource, editable: true, enableDragDrop: true, onGetState: function (state) { return _this.gridState = state; }}, 
                                        React.createElement(GridColumn_1.GridColumnDef, {caption: "Control", propertyName: "$$controlName", showHierarchyTree: true, width: 200}), 
                                        React.createElement(GridColumn_1.GridColumnDef, {caption: "Свойства", propertyName: "$$controlMainProps", width: 300}), 
                                        React.createElement(GridColumn_1.GridColumnDef, {caption: "События", propertyName: "$$controlEvents", width: 300}))
                                ), 
                                React.createElement(Fixed_1.Fixed, null, this.renderEditableButtons()))
                        ), 
                        React.createElement(Tabs_1.Tab, {key: "2", title: "Кто-когда"}))
                ), 
                React.createElement(Fixed_1.Fixed, null, 
                    React.createElement(Layout_1.Layout, {className: "auto-form-footer", type: "row", sizeTo: "content"}, 
                        React.createElement(Flex_1.Flex, null, 
                            React.createElement(Button_1.Button, {onClick: this.handleTestButtonClick}, "Тест")
                        ), 
                        React.createElement(Fixed_1.Fixed, null, 
                            React.createElement(Button_1.Button, {visible: this.needToSave, className: "is-success is-outlined", onClick: this.handleSaveButtonClick}, "Сохранить"), 
                            React.createElement(Button_1.Button, {onClick: this.handleCancelButtonClick}, this.needToSave ? "Отмена" : "Закрыть")))
                ))
        ));
    };
    return SchemaComponentDesigner;
}(Component_1.Component));
exports.SchemaComponentDesigner = SchemaComponentDesigner;
//# sourceMappingURL=SchemaComponentDesigner.js.map