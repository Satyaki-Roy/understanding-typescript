// Specifying the return type //
// returns a number
function add(num1, num2) {
    return num1 + num2;
}
// return void as we are not returning anything
function printNum1(num) {
    console.log("Number is: " + num);
}
// returns undefined as we are explicitly using return keyword
function printNum2(num) {
    console.log("Number is: " + num);
    return;
}
// creating a handler for a function and mentioning
// that it is going to accept two number and return a number
var sum;
sum = add;
console.log(sum(5, 10));
// callback function
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addAndHandle(1, 5, function (num) {
    console.log(num);
});
