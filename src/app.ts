class Department {
  private readonly id: number;
  private readonly name: string;
  private employees: string[] = [];

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
  constructor(id: number, public admins: string[]) {
    super(id, "IT");
  }

  noOfAdmins() {
    console.log(this.admins.length);
    console.log(this.admins);
  }
}

// accounting department
const accountDepartment = new Department(1, "Accounting");
console.log(accountDepartment.describe());
accountDepartment.addEmployee("Satyaki");
accountDepartment.addEmployee("Disha");
accountDepartment.infoOnEmployees();

// IT Dept
const itDepartment = new ITDepartment(2, ["Keya", "Goutam"]);
console.log(itDepartment.describe());
itDepartment.addEmployee("Satyaki");
itDepartment.addEmployee("Disha");
itDepartment.infoOnEmployees();
itDepartment.noOfAdmins();
