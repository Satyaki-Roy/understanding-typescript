function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Satyaki" }, { age: 27 });

console.log(mergedObj.age);

//////////////////////////////////////////////////////////////////////////////

type Lengthy = {
  length: number;
};

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = `Got no value.`;
  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} element.`;
  }
  return [element, descriptionText];
}
