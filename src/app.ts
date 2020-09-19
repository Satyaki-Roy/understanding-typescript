abstract class Department {
  protected readonly id: number;
  protected readonly name: string;
  protected employees: string[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  infoOnEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static currentYear: number = 2020;

  static createEmployeeObj(name: string, age: number) {
    return {
      name,
      age,
    };
  }
}

class ITDepartment extends Department {
  constructor(id: number, public admins: string[], private computers: number) {
    super(id, "IT");
  }

  set noOfComputers(value: number) {
    this.computers = value;
  }

  get noOfComputers() {
    return this.computers;
  }

  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  noOfAdmins() {
    console.log(this.admins.length);
    console.log(this.admins);
  }

  addEmployee(employee: string) {
    if (employee === "Disha") return;
    this.employees.push(employee);
  }
}

// IT Dept
const itDepartment = new ITDepartment(2, ["Keya", "Goutam"], 5);
console.log(itDepartment.describe());
itDepartment.addEmployee("Satyaki");
itDepartment.addEmployee("Disha");
itDepartment.infoOnEmployees();
itDepartment.noOfAdmins();
itDepartment.noOfComputers = 10;
console.log(itDepartment.noOfComputers);

// Static things in Department class
console.log(Department.currentYear);
console.log(Department.createEmployeeObj("Max", 27));

console.log(ITDepartment.currentYear);
console.log(ITDepartment.createEmployeeObj("Rax", 29));
