// explicitly declaring types in an object

const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Satyaki",
  age: 27,
  hobbies: ["football", "cricket", "travelling"],
};

for (const hobby of person.hobbies) {
  // console.log(hobby.map()); this will through an error
  // as TS knows map cant be used on strings
  console.log(hobby.toUpperCase()); // TS knows hobby is a string and hence allows this method
}
