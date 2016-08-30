"use strict";
var React = require("react");
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
    GridBaseDataSource.prototype.getRows = function () {
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
        Error_1.throwAbstractError();
    };
    GridBaseDataSource.prototype.dropInto = function (dragRowIndex, targetRowIndex, mode) {
        Error_1.throwAbstractError();
    };
    GridBaseDataSource.prototype.dropAfter = function (dragRowIndex, targetRowIndex, mode) {
        Error_1.throwAbstractError();
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
    GridBaseDataSource.prototype.deleteRow = function (rowData) {
        Error_1.throwAbstractError();
    };
    GridBaseDataSource.prototype.openDeleteForm = function (grid, toDeleteRows) {
        var _this = this;
        if (this.params.openDeleteForm !== undefined) {
            this.params.openDeleteForm(grid, toDeleteRows);
        }
        else {
            // todo удаление нескольких
            if (toDeleteRows.length > 1)
                Error_1.throwUnderConstruction();
            // if (!(toDeleteRows[0] instanceof DesignedObject))
            //     throwError("GridBaseDataSource:openDeleteForm(): rowToDelete must be of type 'DesignedObject'");
            var row_1 = toDeleteRows[0]; // as DesignedObject;
            var objectClassName = "запись";
            if (row_1 instanceof DesignedObject_1.DesignedObject && row_1.getClassName !== undefined)
                objectClassName = row_1.getClassName();
            var objectName = "";
            if (row_1.toString)
                objectName = row_1.toString();
            //            let message = <div className="color-red">Удалить "{objectClassName}"?<br/>{ objectName }</div>;
            var message = React.createElement("div", null, 
                "Удалить \"", 
                objectClassName, 
                "\"?", 
                React.createElement("br", null), 
                objectName);
            grid.component.showDeleteConfirmationWindow(message, function (okResult) {
                if (okResult) {
                    _this.deleteRow(row_1);
                    if (_this.params.onDeleteRows !== undefined) {
                        _this.params.onDeleteRows([row_1])
                            .then(function () {
                            grid.refresh();
                        })
                            .catch(function (error) {
                            grid.component.showErrorWindow("Ошибка удаления: " + error);
                        });
                    }
                    else
                        grid.refresh();
                }
            });
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
                    parentWindowId: grid.component.getParentWindowId(),
                    theme: "blue",
                    sizePositionStoreKey: designedObject.$$getDesignerWindowSizePosStoreKey()
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
        var _this = this;
        if (this.params.openInsertForm !== undefined) {
            this.params.openInsertForm(grid, focusedRowData);
        }
        else {
            this.getNewDesignedObject(focusedRowData).then(function (newDesignedObject) {
                var designerProps = {
                    designedObject: newDesignedObject,
                    onSaveChanges: function () {
                        // todo надо как-то уметь получать DataRow из DesignedObject
                        console.error(newDesignedObject);
                        _this.addRow(newDesignedObject);
                        grid.refresh();
                        grid.setFocusedRow(newDesignedObject);
                    }
                };
                var win = newDesignedObject.$$getDesigner(designerProps);
                var openParam = {
                    title: "добавление",
                    autoPosition: "parent-center",
                    parentWindowId: grid.component.getParentWindowId(),
                    theme: "green",
                    sizePositionStoreKey: newDesignedObject.$$getDesignerWindowSizePosStoreKey()
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