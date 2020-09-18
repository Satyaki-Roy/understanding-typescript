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
var sum;
sum = add;
console.log(sum(5, 10));
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addAndHandle(1, 5, function (num) {
    console.log(num);
});
