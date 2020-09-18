class Department {
  private readonly id: number;
  private readonly name: string;
  protected employees: string[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  infoOnEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: number, public admins: string[], private computers: number) {
    super(id, "IT");
  }

  get noOfComputers() {
    return this.computers;
  }

  set noOfComputers(value: number) {
    this.computers = value;
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

// accounting department
const accountDepartment = new Department(1, "Accounting");
console.log(accountDepartment.describe());
accountDepartment.addEmployee("Satyaki");
accountDepartment.addEmployee("Disha");
accountDepartment.infoOnEmployees();

// IT Dept
const itDepartment = new ITDepartment(2, ["Keya", "Goutam"], 5);
console.log(itDepartment.describe());
itDepartment.addEmployee("Satyaki");
itDepartment.addEmployee("Disha");
itDepartment.infoOnEmployees();
itDepartment.noOfAdmins();
itDepartment.noOfComputers = 10;
console.log(itDepartment.noOfComputers);
