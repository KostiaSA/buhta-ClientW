import * as _ from "lodash";

// объект может иметь массивы:
// $$unsavedProps - имена свойств, которые не сохраняются
// $$savedByRefProps - имена свойств, которые сохраняются как ссылки
export class Snapshot {
    constructor() {

    }

    snapshots: InternalSnapshot[] = [];

    saveObject(obj: Object | Array<any>, snapshotName: string) {
        let snap = new InternalSnapshot();
        snap.obj = obj;
        snap.snapshotName = snapshotName;
        snap.saveProps();
        this.snapshots.push(snap);
    }

    restoreObject(obj: Object | Array<any>, snapshotName: string) {
        let snap = this.getInternalSnapshot(obj, snapshotName);
        if (snap) {
            if (_.isArray(obj)) {
                obj.length = 0;
                snap.arrayElements.forEach((element) => obj.push(element));
            }
            else {
                snap.objProps.forEach((prop) => prop.restoreValue());
            }
        }
    }

    getInternalSnapshot(obj: Object | Array<any>, snapshotName: string): InternalSnapshot {
        let ret = this.snapshots.filter((snap) => snap.obj === obj && snap.snapshotName === snapshotName);
        if (ret.length === 0) {
            console.error("Snapshot '" + snapshotName + "' not found");
            return null;
        }
        else
            return ret[0];
    }
}

class InternalSnapshot {
    obj: any;
    snapshotName: string;
    objProps: SnapshotProperty[] = [];
    arrayElements: any[];
//    refs: any[] = [];
    refsClones: any = {};

    saveProps() {
        if (_.isArray(this.obj)) {
            this.arrayElements = this.obj.map((v: any) => this.cloneValue(v));
        }
        else {
            this.objProps = [];
            for (let propName in this.obj) {
                if (this.obj.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {

                    let p = new SnapshotProperty();
                    p.propName = propName;
                    p.snapshot = this;
                    p.saveValue();
                    this.objProps.push(p);
                    //cloneObject[prop] = clone(item[prop]);
                }
            }
        }
    }

    cloneValue(value: any): any {
        //console.log("saveValue");
        //console.log(this.propName);
        if (value === this.obj) {
            return value;
        }
        else if (_.isArray(value)) {
            return value.map((v: any) => this.cloneValue(v));
        }
        else if (_.isFunction(value)) {
            return value;
        }
        else if (_.isObject(value)) {
            //let refsIndex = this.snapshot.refs.indexOf(value);
            if (value.$$uniqueObjectId)
                return this.refsClones[value.$$uniqueObjectId];

            let valueCopy = new value.constructor();
            valueCopy.$$isClone = true;
            value.$$uniqueObjectId = Math.random().toString(36).slice(2, 16);
            this.refsClones[value.$$uniqueObjectId] = valueCopy;

            for (let propName in value) {
                if (value.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {
                    valueCopy[propName] = this.cloneValue(value[propName]);
                }
            }
            return valueCopy;
        }
        else {
            return value;
        }
    }
}

class SnapshotProperty {
    snapshot: InternalSnapshot;
    propName: string;
    propValue: any;

    saveValue() {
        this.propValue = this.snapshot.cloneValue(this.snapshot.obj[this.propName]);
    }

    restoreValue() {
        this.snapshot.obj[this.propName] = this.propValue;
    }

    // cloneValue(value: any): any {
    //     //console.log("saveValue");
    //     //console.log(this.propName);
    //     if (value === this.snapshot.obj) {
    //         return value;
    //     }
    //     else if (_.isArray(value)) {
    //         return value.map((v: any) => this.cloneValue(v));
    //     }
    //     else if (_.isFunction(value)) {
    //         return value;
    //     }
    //     else if (_.isObject(value)) {
    //         //let refsIndex = this.snapshot.refs.indexOf(value);
    //         if (value.$$uniqueObjectId)
    //             return this.snapshot.refsClones[value.$$uniqueObjectId];
    //
    //         let valueCopy = new value.constructor();
    //         valueCopy.$$isClone = true;
    //         value.$$uniqueObjectId = Math.random().toString(36).slice(2, 16);
    //         this.snapshot.refsClones[value.$$uniqueObjectId] = valueCopy;
    //
    //         for (let propName in value) {
    //             if (value.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {
    //                 valueCopy[propName] = this.cloneValue(value[propName]);
    //             }
    //         }
    //         return valueCopy;
    //     }
    //     else {
    //         return value;
    //     }
    // }

}

