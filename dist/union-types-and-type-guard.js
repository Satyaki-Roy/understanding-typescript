"use strict";
function infoOfEmployee(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log(emp.privileges);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
}
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car......");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck......");
    };
    Truck.prototype.load = function () {
        console.log("Carrying some load......");
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function vehicleInfo(obj) {
    obj.drive();
    if (obj instanceof Truck) {
        obj.load();
    }
}
vehicleInfo(v1);
vehicleInfo(v2);
function addTypeGuard(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
