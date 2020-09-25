"use strict";
class Department {
    constructor(id, name) {
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    infoOnEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployeeObj(name, age) {
        return {
            name,
            age,
        };
    }
}
Department.currentYear = 2020;
class AccountsDepartment extends Department {
    constructor() {
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
    constructor(id, admins, computers) {
        super(id, "IT");
        this.admins = admins;
        this.computers = computers;
    }
    set noOfComputers(value) {
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
    addEmployee(employee) {
        if (employee === "Disha")
            return;
        this.employees.push(employee);
    }
}
const accountDepartment = AccountsDepartment.getInstance();
const accountDept = AccountsDepartment.getInstance();
console.log(accountDepartment === accountDept);
