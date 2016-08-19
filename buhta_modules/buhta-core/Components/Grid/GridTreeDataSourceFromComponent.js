"use strict";
var Error_1 = require("../../Error");
var arrayUtils_1 = require("../../arrayUtils");
var GridTreeDataSourceFromComponent = (function () {
    function GridTreeDataSourceFromComponent(nodes, params) {
        this.nodes = nodes;
        this.params = params;
        this.set$$parentForAllNodes();
    }
    GridTreeDataSourceFromComponent.prototype.getIsAsync = function () {
        return false;
    };
    ;
    GridTreeDataSourceFromComponent.prototype.getRowsAsync = function () {
        Error_1.throwAbstractError();
        throw "fake";
    };
    GridTreeDataSourceFromComponent.prototype.getGridColumns = function () {
        return [];
    };
    GridTreeDataSourceFromComponent.prototype.getRows = function () {
        return this.nodes;
    };
    GridTreeDataSourceFromComponent.prototype.getNewRow = function () {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else {
            Error_1.throwError("TreeGridComponentChildrenDataSource: method getNewRow() not defined");
            throw ""; // fake typescript 2
        }
    };
    GridTreeDataSourceFromComponent.prototype.addRow = function (node) {
        Error_1.throwAbstractError();
        //this.nodes.push(node);
    };
    GridTreeDataSourceFromComponent.prototype.deleteRow = function (node) {
        if (node.$$parent) {
            arrayUtils_1.removeFromArray(node.$$parent.children, node);
        }
        else {
            arrayUtils_1.removeFromArray(this.nodes, node);
        }
    };
    GridTreeDataSourceFromComponent.prototype.set$$parentForAllNodes = function () {
        var _this = this;
        this.nodes.forEach(function (item) {
            _this.set$$parentRecursive(item);
        });
    };
    GridTreeDataSourceFromComponent.prototype.set$$parentRecursive = function (parent) {
        var _this = this;
        parent.children.forEach(function (item) {
            item.$$parent = parent;
            _this.set$$parentRecursive(item);
        });
    };
    GridTreeDataSourceFromComponent.prototype.forEachNode = function (callback, arr) {
        var _this = this;
        if (arr === undefined)
            arr = this.nodes;
        arr.forEach(function (item) {
            callback(item);
            _this.forEachNode(callback, item.children);
        });
    };
    // private getNodeParent(node: BaseControl): BaseControl | undefined {
    //     let parent: BaseControl | undefined;
    //     this.forEachNode((_parent) => {
    //         if (parent === undefined && _parent.children.indexOf(node) >= 0)
    //             parent = _parent;
    //     });
    //     return parent;
    // }
    GridTreeDataSourceFromComponent.prototype.getEmptyDataSourceMessage = function () {
        if (this.params.getEmptyDataSourceMessage)
            return this.params.getEmptyDataSourceMessage();
        else
            return "Пустой список.";
    };
    GridTreeDataSourceFromComponent.prototype.getDeleteRowMessage = function () {
        if (this.params.getDeleteRowMessage)
            return this.params.getDeleteRowMessage();
        else
            return "Удалить запись!";
    };
    GridTreeDataSourceFromComponent.prototype.canDragRow = function (rowIndex, mode) {
        return true;
    };
    GridTreeDataSourceFromComponent.prototype.canDropBefore = function (dragRowData, targetRowData, mode) {
        if (this.hasParent(targetRowData, dragRowData))
            return false;
        else
            return true;
    };
    GridTreeDataSourceFromComponent.prototype.canDropInto = function (dragRowData, targetRowData, mode) {
        if (this.hasParent(targetRowData, dragRowData) || dragRowData.$$parent === targetRowData)
            return false;
        else
            return true;
    };
    GridTreeDataSourceFromComponent.prototype.canDropAfter = function (dragRowData, targetRowData, mode) {
        if (this.hasParent(targetRowData, dragRowData))
            return false;
        else
            return true;
    };
    GridTreeDataSourceFromComponent.prototype.dropBefore = function (dragRowData, targetRowData, mode) {
        var dragNode = dragRowData;
        var targetNode = targetRowData;
        if (dragNode.$$parent === targetNode.$$parent) {
            var arr = this.nodes;
            if (targetNode.$$parent) {
                arr = targetNode.$$parent.children;
            }
            var toPos = arr.indexOf(targetNode) - 1;
            var fromPos = arr.indexOf(dragNode);
            if (toPos < fromPos)
                toPos += 1;
            arrayUtils_1.moveInArray(arr, [dragNode], toPos);
            this.recalcChildrenPositions(arr);
        }
        else {
            var dragArr = this.nodes;
            if (dragNode.$$parent) {
                dragArr = dragNode.$$parent.children;
            }
            var targetArr = this.nodes;
            if (targetNode.$$parent) {
                targetArr = targetNode.$$parent.children;
            }
            arrayUtils_1.insertIntoArray(targetArr, dragNode, targetArr.indexOf(targetNode));
            arrayUtils_1.removeFromArray(dragArr, dragNode);
            dragNode.$$parent = targetNode.$$parent;
            //dragRowData[this.params.parentKeyFieldName!] = targetRowData[this.params.keyFieldName!];
            this.recalcChildrenPositions(targetArr);
        }
    };
    GridTreeDataSourceFromComponent.prototype.dropInto = function (dragRowData, targetRowData, mode) {
        var dragNode = dragRowData;
        var targetNode = targetRowData;
        targetNode.children.push(dragNode);
        this.recalcChildrenPositions(targetNode.children);
        if (dragNode.$$parent)
            arrayUtils_1.removeFromArray(dragNode.$$parent.children, dragNode);
        else
            arrayUtils_1.removeFromArray(this.nodes, dragNode);
        dragNode.$$parent = targetNode;
        //dragRowData[this.params.parentKeyFieldName!] = targetRowData[this.params.keyFieldName!];
    };
    GridTreeDataSourceFromComponent.prototype.dropAfter = function (dragRowData, targetRowData, mode) {
        var dragNode = dragRowData;
        var targetNode = targetRowData;
        if (dragNode.$$parent === targetNode.$$parent) {
            var arr = this.nodes;
            if (targetNode.$$parent) {
                arr = targetNode.$$parent.children;
            }
            var toPos = arr.indexOf(targetNode);
            var fromPos = arr.indexOf(dragNode);
            if (toPos < fromPos)
                toPos += 1;
            arrayUtils_1.moveInArray(arr, [dragNode], toPos);
            this.recalcChildrenPositions(arr);
        }
        else {
            var dragArr = this.nodes;
            if (dragNode.$$parent) {
                dragArr = dragNode.$$parent.children;
            }
            var targetArr = this.nodes;
            if (targetNode.$$parent) {
                targetArr = targetNode.$$parent.children;
            }
            arrayUtils_1.insertIntoArray(targetArr, dragNode, targetArr.indexOf(targetNode) + 1);
            arrayUtils_1.removeFromArray(dragArr, dragNode);
            dragNode.$$parent = targetNode.$$parent;
            //  dragRowData[this.params.parentKeyFieldName!] = targetRowData[this.params.keyFieldName!];
            this.recalcChildrenPositions(targetArr);
        }
    };
    GridTreeDataSourceFromComponent.prototype.refresh = function () {
    };
    GridTreeDataSourceFromComponent.prototype.recalcChildrenPositions = function (nodes) {
        var _this = this;
        if (this.params.positionFieldName !== undefined) {
            nodes.forEach(function (node, index) {
                node[_this.params.positionFieldName] = index;
            });
        }
    };
    GridTreeDataSourceFromComponent.prototype.hasParent = function (rowData, parentData) {
        var parentNode = rowData;
        if (parentNode === parentData)
            return true;
        while (parentNode) {
            parentNode = parentNode.$$parent;
            if (parentNode === parentData)
                return true;
        }
        return false;
    };
    GridTreeDataSourceFromComponent.prototype.getNodeChildDetails = function (dataItem) {
        if (!dataItem)
            return null;
        if (dataItem.children.length > 0)
            return {
                group: true,
                expanded: true,
                children: dataItem.children
            };
        else
            return null;
    };
    return GridTreeDataSourceFromComponent;
}());
exports.GridTreeDataSourceFromComponent = GridTreeDataSourceFromComponent;
//# sourceMappingURL=GridTreeDataSourceFromComponent.js.map