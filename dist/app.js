"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Satyaki" }, { age: 27 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = `Got no value.`;
    if (element.length === 1) {
        descriptionText = `Got 1 element.`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} element.`;
    }
    return [element, descriptionText];
}
function scanAndExtract(obj, key) {
    return obj[key];
}
console.log(scanAndExtract({ name: "Satyaki" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const stringStorage = new DataStorage();
stringStorage.addItem("Hello");
stringStorage.addItem("Hey");
stringStorage.addItem("Hi");
stringStorage.removeItem("Hey");
console.log(stringStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(10);
numberStorage.addItem(100);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());
