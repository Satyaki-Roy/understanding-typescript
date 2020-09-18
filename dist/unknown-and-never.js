"use strict";
var abc;
var xyz;
abc = "Hello";
xyz = "World";
if (typeof abc === "string") {
    xyz = abc;
}
console.log(abc, xyz);
function throwError(message, code) {
    throw { message: message, code: code };
}
throwError("Some error occurred", 500);
