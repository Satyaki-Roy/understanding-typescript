function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Satyaki" }, { age: 27 });

console.log(mergedObj.age);
