interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(str: string): void;
}

// type AddFn = (a: number, b: number) => void;
interface AddFn {
  (a: number, b: number): number;
}

class GreetUser implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(str: string) {
    console.log(`${str} ${this.name}`);
  }
}

let addNum: AddFn;
addNum = (a: number, b: number) => {
  return a + b;
};
console.log(addNum(5, 6));

const greetUser1 = new GreetUser("Max", 30);
greetUser1.greet("Morning");
