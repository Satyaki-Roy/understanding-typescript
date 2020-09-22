type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Satyaki",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);

/////////////////////////////////////////////////////

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// only number is allowed
const test: Universal = 25;
