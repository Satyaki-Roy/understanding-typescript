type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type NotAnEmployee = Admin | Employee;

function infoOfEmployee(emp: NotAnEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log(emp.privileges);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

/////////////////////////////////////////////////////

class Car {
  drive() {
    console.log("Driving a car......");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck......");
  }

  load() {
    console.log("Carrying some load......");
  }
}

type CarOrTruck = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function vehicleInfo(obj: CarOrTruck) {
  obj.drive();
  // if ("load" in obj) {
  // OR //
  if (obj instanceof Truck) {
    obj.load();
  }
}

vehicleInfo(v1);
vehicleInfo(v2);

/////////////////////////////////////////////////////

type Combinable = string | number;

function addTypeGuard(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
