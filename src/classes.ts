abstract class Department {
  protected readonly id: number;
  protected readonly name: string;
  protected employees: string[] = [];

  protected constructor(id: number, name: string) {
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

class AccountsDepartment extends Department {
  private static instance: AccountsDepartment;

  private constructor() {
    super(1, "Account Dept");
  }

  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  static getInstance() {
    if (AccountsDepartment.instance) {
      return AccountsDepartment.instance;
    }
    AccountsDepartment.instance = new AccountsDepartment();
    return AccountsDepartment.instance;
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

// Account Dept
const accountDepartment = AccountsDepartment.getInstance();
const accountDept = AccountsDepartment.getInstance();
console.log(accountDepartment === accountDept);
