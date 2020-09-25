"use strict";
class GreetUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(str) {
        console.log(`${str} ${this.name}`);
    }
}
let addNum;
addNum = (a, b) => {
    return a + b;
};
console.log(addNum(5, 6));
const greetUser1 = new GreetUser("Max", 30);
greetUser1.greet("Morning");
