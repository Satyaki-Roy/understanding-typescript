"use strict";
let abc;
let xyz;
abc = "Hello";
xyz = "World";
if (typeof abc === "string") {
    xyz = abc;
}
console.log(abc, xyz);
function throwError(message, code) {
    throw { message, code };
}
throwError("Some error occurred", 500);
