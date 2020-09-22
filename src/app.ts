type combinable = string | number;

function addOverload(a: string, b: string): string;
function addOverload(a: number, b: string): string;
function addOverload(a: string, b: number): string;
function addOverload(a: number, b: number): string;
function addOverload(a: combinable, b: combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addOverload("Hello", " Baby");

console.log(result.split("b"));
