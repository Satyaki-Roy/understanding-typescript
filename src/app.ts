const userInput1 = <HTMLInputElement>document.getElementById("user-input-1");
userInput1.value = "Hi There 1...";

////// ANOTHER WAY //////

const userInput2 = document.getElementById("user-input-2")! as HTMLInputElement;
userInput2.value = "Hi There 2...";
