"use strict";
var Department = (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var accountDepartment = new Department("Accounting");
console.log(accountDepartment.describe());
var copyAccountDept = {
    name: "Copy of Accounting",
    describe: accountDepartment.describe,
};
console.log(copyAccountDept.describe());
