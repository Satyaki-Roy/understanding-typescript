"use strict";
var GreetUser = (function () {
    function GreetUser(name, age) {
        this.name = name;
        this.age = age;
    }
    GreetUser.prototype.greet = function (str) {
        console.log(str + " " + this.name);
    };
    return GreetUser;
}());
var addNum;
addNum = function (a, b) {
    return a + b;
};
console.log(addNum(5, 6));
var greetUser1 = new GreetUser("Max", 30);
greetUser1.greet("Morning");
