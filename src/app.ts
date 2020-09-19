interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(str: string): void;
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

const greetUser1 = new GreetUser("Max", 30);
greetUser1.greet("Morning");
