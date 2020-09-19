interface Person {
  name: string;
  age: number;

  greet(str: string): void;
}

let user1: Person;

user1 = {
  name: "Satyaki Roy",
  age: 27,

  greet(str: string) {
    console.log(`${str} ${this.name}`);
  },
};

user1.greet("Good Morning");
