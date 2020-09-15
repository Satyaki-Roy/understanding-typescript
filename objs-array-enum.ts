// enum //

enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: number;
} = {
  name: "Satyaki",
  age: 27,
  hobbies: ["football", "cricket", "travelling"],
  role: Role.ADMIN,
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === 0) console.log("Person is a ADMIN user");
