// unknown //

let abc: unknown;
let xyz: string;

abc = "Hello";

xyz = "World";

if (typeof abc === "string") {
  xyz = abc;
}

console.log(abc, xyz);

// never //

function throwError(message: string, code: number): never {
  throw { message, code };
}

throwError("Some error occurred", 500);
