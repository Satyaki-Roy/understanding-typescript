// unknown //
var abc;
var xyz;
abc = "Hello";
xyz = "World";
if (typeof abc === "string") {
    xyz = abc;
}
console.log(abc, xyz);
// never //
function throwError(message, code) {
    throw { message: message, code: code };
}
throwError("Some error occured", 500);
