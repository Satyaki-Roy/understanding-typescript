"use strict";
function speed(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.groundSpeed;
    }
    console.log(speed);
}
speed({
    type: "bird",
    flyingSpeed: 25,
});
