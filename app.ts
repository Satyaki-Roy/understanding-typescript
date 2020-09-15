// unknown //

let abc: unknown;
let xyz: string;

abc = "Hello";

xyz = "World";

if (typeof abc === "string") {
  xyz = abc;
}

console.log(abc, xyz);
