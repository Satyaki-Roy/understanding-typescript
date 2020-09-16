"use strict";
function addBasics(num1, num2, showResult, str) {
    const result = num1 + num2;
    if (showResult) {
        console.log(str + result);
    }
    else {
        return result;
    }
}
addBasics(5, 2.8, true, "Total: ");
