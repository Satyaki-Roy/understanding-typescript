// Specifying the return type //

// returns a number
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// return void as we are not returning anything
function printNum1(num: number): void {
  console.log("Number is: " + num);
}

// returns undefined as we are explicitly using return keyword
function printNum2(num: number): undefined {
  console.log("Number is: " + num);
  return;
}

// creating a handler for a function and mentioning
// that it is going to accept two number and return a number
let sum: (a: number, b: number) => number;
sum = add;

console.log(sum(5, 10));

// callback function
function addAndHandle(num1: number, num2: number, cb: (a: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addAndHandle(1, 5, (num) => {
  console.log(num);
});
