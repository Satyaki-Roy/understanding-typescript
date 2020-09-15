function combine(arg1: number | string, arg2: number | string) {
  return typeof arg1 === "number" && typeof arg2 === "number"
    ? arg1 + arg2
    : arg1.toString() + arg2.toString();
}

console.log(combine(5, 8));
console.log(combine("Hello", "World"));
console.log(combine("Rank ", 1));
