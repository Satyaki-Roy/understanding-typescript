class Department {
  private readonly id: number;
  private name: string;
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

const accountDepartment = new Department(1, "Accounting");
console.log(accountDepartment.describe());

accountDepartment.addEmployee("Satyaki");
accountDepartment.addEmployee("Disha");

accountDepartment.infoOnEmployees();
