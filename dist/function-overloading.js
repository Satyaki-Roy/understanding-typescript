"use strict";
function addOverload(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = addOverload("Hello", " Baby");
console.log(result.split("b"));
