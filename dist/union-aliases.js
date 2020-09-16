"use strict";
function combine(arg1, arg2, result) {
    if (result === "as-number") {
        return +arg1 + +arg2;
    }
    else if (result === "as-text") {
        return arg1.toString() + arg2.toString();
    }
}
console.log(combine(5, 8, "as-number"));
console.log(combine(5, 8, "as-text"));
console.log(combine("5", 8, "as-number"));
console.log(combine("5", 8, "as-text"));
console.log(combine("Hello ", "World", "as-number"));
console.log(combine("Hello ", "World", "as-text"));
console.log(combine("Rank ", 1, "as-number"));
console.log(combine("Rank ", 1, "as-text"));
