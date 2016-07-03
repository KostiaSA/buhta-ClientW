import * as Immutable from "immutable";


export let store = Immutable.fromJS({});
store.set("tables", Immutable.fromJS({}));

function storable(constructor: Function) {
    console.log("storable");
    //console.log(constructor);

    // Object.getOwnPropertyNames(constructor.prototype).forEach(function (propName, idx, array) {
    //     //if (propName !== "length" && propName !== "prototype" ) {
    //     console.log(propName + ' --> ' + constructor.prototype[propName]);
    //     //}
    // });
}

function storableProp(p1?): Function {

    return function (target: any, propertyKey: string) {

        Object.defineProperty(target, propertyKey, {
            get: function () {
                console.log("get:" + propertyKey);
                console.log(this.storageKey);
                return store.getIn(this.storageKey.concat([propertyKey]));
            },
            set: function (val) {
                store = store.setIn(this.storageKey.concat([propertyKey]), val);
                console.log("set:" + propertyKey + ":" + val);
                console.log(store.toString());
            }
            ,
            enumerable: true,
            configurable: true
        });

    };
}

// class Store {
//     tables: Immutable.Map<string, Table> = Immutable.fromJS({});
// }



@storable
export class Table {

    constructor(public storageKey: string[]) {
//        store = store.setIn(storageKey, Immutable.fromJS({}));
  //      console.log({msg: "store = store.setIn(storageKey, Immutable.fromJS({}))", store: store.toString()});
    }

    getImmutableSnapshot(): Immutable.Iterable<string,any> {
        return store.getIn(this.storageKey);
    }

    equals(obj:any ):boolean {
        return this.getImmutableSnapshot().equals(obj.getImmutableSnapshot());
    }

    @storableProp()
    storePath: string;

    @storableProp()
    name: string;

    @storableProp()
    sqlName: string;

    deleteColumn() {
        //this.storageKey = "7777777777";
    }
}

class TableColumn {

}


let orgTable = new Table(["tables", "Организация"]);
console.log("let orgTable = new Table(???);");

orgTable.name = "Организация";
console.log(orgTable.name);

orgTable.sqlName = "wms..Организация";
console.log(orgTable.sqlName);

let kadrTable = new Table(["tables", "Сотрудник"]);
console.log("let orgTable = new Table(???);");

kadrTable.name = "Сотрудник";
console.log(orgTable.name);

kadrTable.sqlName = "wms..Сотрудник";
console.log(orgTable.sqlName);

console.log("-------equals---------");
console.log(orgTable.equals(kadrTable));

kadrTable.name = "Организация";
kadrTable.sqlName = "wms..Организация";

console.log("-------equals 2 ---------");
console.log(orgTable.equals(kadrTable));
