"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.infoOnEmployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.createEmployeeObj = function (name, age) {
        return {
            name: name,
            age: age,
        };
    };
    Department.currentYear = 2020;
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins, computers) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        _this.computers = computers;
        return _this;
    }
    Object.defineProperty(ITDepartment.prototype, "noOfComputers", {
        get: function () {
            return this.computers;
        },
        set: function (value) {
            this.computers = value;
        },
        enumerable: false,
        configurable: true
    });
    ITDepartment.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
    };
    ITDepartment.prototype.noOfAdmins = function () {
        console.log(this.admins.length);
        console.log(this.admins);
    };
    ITDepartment.prototype.addEmployee = function (employee) {
        if (employee === "Disha")
            return;
        this.employees.push(employee);
    };
    return ITDepartment;
}(Department));
var itDepartment = new ITDepartment(2, ["Keya", "Goutam"], 5);
console.log(itDepartment.describe());
itDepartment.addEmployee("Satyaki");
itDepartment.addEmployee("Disha");
itDepartment.noOfComputers = 10;
console.log(Department.currentYear);
console.log(Department.createEmployeeObj("Max", 27));
console.log(ITDepartment.currentYear);
console.log(ITDepartment.createEmployeeObj("Rax", 29));
