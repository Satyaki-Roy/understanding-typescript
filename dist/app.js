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
