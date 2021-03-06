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
var deepClone_1 = require("../../buhta-core/deepClone");
var Layout_1 = require("../../buhta-core/Components/LayoutPane/Layout");
var Flex_1 = require("../../buhta-core/Components/LayoutPane/Flex");
var Tabs_1 = require("../../buhta-core/Components/Tabs/Tabs");
var Fixed_1 = require("../../buhta-core/Components/LayoutPane/Fixed");
var Button_1 = require("../../buhta-core/Components/Button/Button");
var isDeepEqual_1 = require("../../buhta-core/isDeepEqual");
var Auth_1 = require("../../buhta-core/Auth");
var getObjectConstructorName_1 = require("../../buhta-core/getObjectConstructorName");
var GridTreeDataSourceFromComponent_1 = require("../../buhta-core/Components/Grid/GridTreeDataSourceFromComponent");
var Grid_1 = require("../../buhta-core/Components/Grid/Grid");
var GridColumn_1 = require("../../buhta-core/Components/Grid/GridColumn");
var stringCompare_1 = require("../../buhta-core/stringCompare");
var GridFlatDataSourceFromArray_1 = require("../../buhta-core/Components/Grid/GridFlatDataSourceFromArray");
var showLookupDialog_1 = require("../../buhta-core/Dialogs/showLookupDialog");
var ControlTypeInfo_1 = require("../../buhta-ui/ControlTypeInfo");
var Constants_1 = require("../../buhta-core/Constants");
var SchemaComponentDesigner = (function (_super) {
    __extends(SchemaComponentDesigner, _super);
    function SchemaComponentDesigner(props, context) {
        var _this = this;
        _super.call(this, props, context);
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
        this.handleTestButtonClick = function () {
            var designedObject = deepClone_1.deepClone(_this.clonedDesignedObject);
            var openParam = {
                title: "\u0442\u0435\u0441\u0442 '" + getObjectConstructorName_1.getObjectConstructorName(designedObject) + "'",
                top: 350,
                left: 350
            };
            _this.getParentDesktop().openSchemaComponent(designedObject, openParam);
        };
        this.getNewDesignedObject = function (focusedData) {
            var columns = [];
            columns.push({ caption: "Тип объекта", propertyName: "name" });
            columns.push({ caption: "Описание", propertyName: "description" });
            var arr = ControlTypeInfo_1.registeredControlTypesAsArray.sort(function (a, b) {
                return stringCompare_1.stringCompare(a.name, b.name);
            });
            var dataSource = new GridFlatDataSourceFromArray_1.GridFlatDataSourceFromArray({
                arrayObj: arr,
                gridColumns: columns
            });
            var params = {
                title: "Выберите тип нового объекта",
                lookupMode: "single",
                dataSource: dataSource
            };
            return showLookupDialog_1.showLookupDialog(_this, params)
                .then(function (selected) {
                var newObject = new (Function.prototype.bind.apply(selected[0].type, [_this]));
                return newObject;
            });
        };
        this.props = props;
    }
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
                                React.createElement(Fixed_1.Fixed, null))
                        ), 
                        React.createElement(Tabs_1.Tab, {key: "2", title: "Кто-когда"}))
                ), 
                React.createElement(Fixed_1.Fixed, null, 
                    React.createElement(Layout_1.Layout, {className: "component-designer-footer", type: "row", sizeTo: "content"}, 
                        React.createElement(Flex_1.Flex, null, 
                            React.createElement(Button_1.Button, {onClick: this.handleTestButtonClick, icon: Constants_1.TEST_BUTTON_ICON}, Constants_1.TEST_BUTTON_TEXT)
                        ), 
                        React.createElement(Fixed_1.Fixed, null, 
                            React.createElement(Button_1.Button, {visible: this.needToSave, icon: Constants_1.SAVE_BUTTON_ICON, onClick: this.handleSaveButtonClick}, Constants_1.SAVE_BUTTON_TEXT), 
                            React.createElement(Button_1.Button, {onClick: this.handleCancelButtonClick, icon: this.needToSave ? Constants_1.CANCEL_BUTTON_ICON : Constants_1.CLOSE_BUTTON_ICON}, this.needToSave ? Constants_1.CANCEL_BUTTON_TEXT : Constants_1.CLOSE_BUTTON_TEXT)))
                ))
        ));
    };
    return SchemaComponentDesigner;
}(Component_1.Component));
exports.SchemaComponentDesigner = SchemaComponentDesigner;
//# sourceMappingURL=SchemaComponentDesigner.js.map