interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  groundSpeed: number;
}

type Animal = Bird | Horse;

function speed(animal: Animal) {
  let speed;
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
