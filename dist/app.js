"use strict";
var user1;
user1 = {
    name: "Satyaki Roy",
    age: 27,
    greet: function (str) {
        console.log(str + " " + this.name);
    },
};
user1.greet("Good Morning");
