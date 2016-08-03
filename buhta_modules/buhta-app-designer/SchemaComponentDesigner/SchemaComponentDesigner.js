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
var Observable_1 = require("../../buhta-core/Observable");
var DeepClone_1 = require("../../buhta-core/DeepClone");
var Layout_1 = require("../../buhta-core/Components/LayoutPane/Layout");
var Flex_1 = require("../../buhta-core/Components/LayoutPane/Flex");
var Tabs_1 = require("../../buhta-core/Components/Tabs/Tabs");
var Fixed_1 = require("../../buhta-core/Components/LayoutPane/Fixed");
var Button_1 = require("../../buhta-core/Components/Button/Button");
var TreeGrid_1 = require("../../buhta-core/Components/TreeGrid/TreeGrid");
var TreeGridColumns_1 = require("../../buhta-core/Components/TreeGrid/TreeGridColumns");
var TreeGridColumn_1 = require("../../buhta-core/Components/TreeGrid/TreeGridColumn");
var TreeGridComponentChildrenDataSource_1 = require("./TreeGridComponentChildrenDataSource");
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
            _this.getParentWindow().close();
            e.stopPropagation();
        };
        this.handleCancelButtonClick = function (sender, e) {
            if (_this.props.onCancelChanges)
                _this.props.onCancelChanges();
            _this.getParentWindow().close();
            e.stopPropagation();
        };
        this.props = props;
    }
    SchemaComponentDesigner.prototype.willMount = function () {
        var _this = this;
        _super.prototype.willMount.call(this);
        this.needToSave = false;
        this.clonedDesignedObject = DeepClone_1.DeepClone(this.props.designedObject);
        // console.log("cloned");
        // console.log(this.props.designedObject);
        // console.log(this.clonedDesignedObject);
        this.observableDesignedObject = Observable_1.Observable(this.clonedDesignedObject, function () {
            _this.needToSave = true;
            _this.forceUpdate();
        });
    };
    SchemaComponentDesigner.prototype.didMount = function () {
        _super.prototype.didMount.call(this);
        //this.snapshot.saveObject(this.props.designedObject, "root");
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
    SchemaComponentDesigner.prototype.render = function () {
        var dataSourceParam = {};
        var dataSource = new TreeGridComponentChildrenDataSource_1.TreeGridComponentChildrenDataSource(this.observableDesignedObject.children, dataSourceParam);
        this.addClassName("object-designer");
        this.addProps({ onChange: this.props.onChange });
        return (React.createElement("div", __assign({}, this.getRenderProps()), 
            React.createElement(Layout_1.Layout, {type: "column", sizeTo: "parent"}, 
                React.createElement(Flex_1.Flex, null, 
                    React.createElement(Tabs_1.Tabs, {sizeTo: "parent", onWillMount: function (state) { console.log("onWillMount-auto-form-tabs"); }, onChangeActiveTab: function (state, tab) { console.log("setActiveTab"); console.log(tab); }}, 
                        React.createElement(Tabs_1.Tab, {key: "1", title: "Основная"}, 
                            React.createElement(TreeGrid_1.TreeGrid, {dataSource: dataSource, treeMode: "childrenList", hierarchyFieldName: "children", autoExpandNodesToLevel: 100, editable: true, denyDelete: true, dragDropNodes: true}, 
                                React.createElement(TreeGridColumns_1.TreeGridColumns, null, 
                                    React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Control", propertyName: "$$controlName", showHierarchyTree: true, width: 200}), 
                                    React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "Свойства", propertyName: "$$controlMainProps", width: 300}), 
                                    React.createElement(TreeGridColumn_1.TreeGridColumn, {caption: "События", propertyName: "$$controlEvents", width: 300}))
                            )
                        ), 
                        React.createElement(Tabs_1.Tab, {key: "2", title: "Кто-когда"}))
                ), 
                React.createElement(Fixed_1.Fixed, null, 
                    React.createElement(Layout_1.Layout, {className: "auto-form-footer", type: "row", sizeTo: "content"}, 
                        React.createElement(Flex_1.Flex, null), 
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