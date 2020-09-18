class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }
}

const accountDepartment = new Department("Accounting");
console.log(accountDepartment.describe());

const copyAccountDept = {
  name: "Copy of Accounting",
  describe: accountDepartment.describe,
};
console.log(copyAccountDept.describe());
