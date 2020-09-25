"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Satyaki" }, { age: 27 });
console.log(mergedObj.age);
