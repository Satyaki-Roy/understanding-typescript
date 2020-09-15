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
