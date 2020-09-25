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
class Car {
    drive() {
        console.log("Driving a car......");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck......");
    }
    load() {
        console.log("Carrying some load......");
    }
}
const v1 = new Car();
const v2 = new Truck();
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
