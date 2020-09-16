"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function printNum1(num) {
    console.log("Number is: " + num);
}
function printNum2(num) {
    console.log("Number is: " + num);
    return;
}
let sum;
sum = add;
console.log(sum(5, 10));
function addAndHandle(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addAndHandle(1, 5, (num) => {
    console.log(num);
});
