class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  infoOnEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accountDepartment = new Department("Accounting");
console.log(accountDepartment.describe());

accountDepartment.addEmployee("Satyaki");
accountDepartment.addEmployee("Disha");

accountDepartment.infoOnEmployees();
