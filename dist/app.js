"use strict";
var Department = (function () {
    function Department(id, name) {
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
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
var accountDepartment = new Department(1, "Accounting");
console.log(accountDepartment.describe());
accountDepartment.addEmployee("Satyaki");
accountDepartment.addEmployee("Disha");
accountDepartment.infoOnEmployees();
