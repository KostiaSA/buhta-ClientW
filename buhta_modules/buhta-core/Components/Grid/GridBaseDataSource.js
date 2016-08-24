"use strict";
var DesignedObject_1 = require("../../../buhta-app-designer/DesignedObject");
var Error_1 = require("../../Error");
var getInstantPromise_1 = require("../../getInstantPromise");
var GridBaseDataSource = (function () {
    function GridBaseDataSource(params) {
        this.params = params;
    }
    GridBaseDataSource.prototype.getIsAsync = function () {
        return false;
    };
    ;
    GridBaseDataSource.prototype.getRowsAsync = function () {
        Error_1.throwAbstractError();
        throw "fake";
    };
    GridBaseDataSource.prototype.getGridColumns = function () {
        return this.params.gridColumns;
    };
    GridBaseDataSource.prototype.getEmptyDataSourceMessage = function () {
        if (this.params.getEmptyDataSourceMessage)
            return this.params.getEmptyDataSourceMessage();
        else
            return "Пустой список.";
    };
    GridBaseDataSource.prototype.getDeleteRowMessage = function () {
        if (this.params.getDeleteRowMessage)
            return this.params.getDeleteRowMessage();
        else
            return "Удалить запись!";
    };
    GridBaseDataSource.prototype.canDragRow = function (rowIndex, mode) {
        return false;
    };
    GridBaseDataSource.prototype.canDropInto = function (dragRowIndex, targetRowIndex, mode) {
        return false;
    };
    GridBaseDataSource.prototype.canDropAfter = function (dragRowIndex, targetRowIndex, mode) {
        return false;
    };
    GridBaseDataSource.prototype.canDropBefore = function (dragRowIndex, targetRowIndex, mode) {
        return false;
    };
    GridBaseDataSource.prototype.dropBefore = function (dragRowIndex, targetRowIndex, mode) {
    };
    GridBaseDataSource.prototype.dropInto = function (dragRowIndex, targetRowIndex, mode) {
    };
    GridBaseDataSource.prototype.dropAfter = function (dragRowIndex, targetRowIndex, mode) {
    };
    GridBaseDataSource.prototype.addRow = function (row) {
        Error_1.throwAbstractError();
    };
    GridBaseDataSource.prototype.getNodeChildDetails = function (dataItem) {
        return null;
    };
    GridBaseDataSource.prototype.getDesignedObjectOfRow = function (rowData) {
        if (this.params.getDesignedObjectOfRow !== undefined) {
            return this.params.getDesignedObjectOfRow(rowData);
        }
        else if (rowData instanceof DesignedObject_1.DesignedObject)
            return getInstantPromise_1.getInstantPromise(rowData);
        else {
            Error_1.throwError("GridBaseDataSource.getDesignedObjectOfRow(): could not convert rowData to 'DesignedObject'");
            throw "fake";
        }
    };
    GridBaseDataSource.prototype.openEditForm = function (grid, rowData) {
        if (this.params.openEditForm !== undefined) {
            this.params.openEditForm(grid, rowData);
        }
        else {
            this.getDesignedObjectOfRow(rowData).then(function (designedObject) {
                var designerProps = {
                    designedObject: designedObject,
                    onSaveChanges: function () {
                        grid.refresh();
                        grid.setFocusedRow(rowData);
                    }
                };
                var win = designedObject.$$getDesigner(designerProps);
                var openParam = {
                    title: "редактирование",
                    autoPosition: "parent-center",
                    parentWindowId: grid.component.getParentWindowId()
                };
                grid.component.getParentDesktop().openWindow(win, openParam);
            });
        }
    };
    GridBaseDataSource.prototype.getNewDesignedObject = function (parentRowData) {
        if (this.params.getNewDesignedObject !== undefined) {
            return this.params.getNewDesignedObject(parentRowData);
        }
        Error_1.throwError("GridBaseDataSource.getNewDesignedObject(): function 'getNewDesignedObject' is not defined");
        throw "fake";
    };
    GridBaseDataSource.prototype.openInsertForm = function (grid, focusedRowData) {
        if (this.params.openInsertForm !== undefined) {
            this.params.openInsertForm(grid, focusedRowData);
        }
        else {
            this.getNewDesignedObject(focusedRowData).then(function (newDesignedObject) {
                var designerProps = {
                    designedObject: newDesignedObject,
                    onSaveChanges: function () {
                        grid.refresh();
                        grid.setFocusedRow(newDesignedObject);
                    }
                };
                var win = newDesignedObject.$$getDesigner(designerProps);
                var openParam = {
                    title: "добавление",
                    autoPosition: "parent-center",
                    parentWindowId: grid.component.getParentWindowId()
                };
                grid.component.getParentDesktop().openWindow(win, openParam);
            });
        }
    };
    GridBaseDataSource.prototype.getIsRowsDataEqual = function (rowData1, rowData2) {
        return rowData1 === rowData2;
    };
    GridBaseDataSource.prototype.getDataValue = function (rowData, propertyName) {
        if (this.params.onGetDataValue !== undefined)
            return this.params.onGetDataValue(rowData, propertyName);
        else
            return rowData[propertyName];
    };
    return GridBaseDataSource;
}());
exports.GridBaseDataSource = GridBaseDataSource;
//# sourceMappingURL=GridBaseDataSource.js.map