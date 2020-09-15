// type alias //

type NumStr = number | string;
type AsNumOrAsText = "as-number" | "as-text";

function combine(arg1: NumStr, arg2: NumStr, result: AsNumOrAsText) {
  if (result === "as-number") {
    return +arg1 + +arg2;
  } else if (result === "as-text") {
    return arg1.toString() + arg2.toString();
  }
}

console.log(combine(5, 8, "as-number"));
console.log(combine(5, 8, "as-text"));
console.log(combine("5", 8, "as-number"));
console.log(combine("5", 8, "as-text"));
console.log(combine("Hello ", "World", "as-number"));
console.log(combine("Hello ", "World", "as-text"));
console.log(combine("Rank ", 1, "as-number"));
console.log(combine("Rank ", 1, "as-text"));
