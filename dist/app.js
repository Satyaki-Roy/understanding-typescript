"use strict";
var Department = (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.infoOnEmployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accountDepartment = new Department("Accounting");
console.log(accountDepartment.describe());
accountDepartment.addEmployee("Satyaki");
accountDepartment.addEmployee("Disha");
accountDepartment.infoOnEmployees();
