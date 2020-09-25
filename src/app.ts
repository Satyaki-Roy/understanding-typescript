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

//////////////////////////////////////////////////////////////////////////////

function scanAndExtract<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(scanAndExtract({ name: "Satyaki" }, "name"));

//////////////////////////////////////////////////////////////////////////////

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// string storage
const stringStorage = new DataStorage<string>();
stringStorage.addItem("Hello");
stringStorage.addItem("Hey");
stringStorage.addItem("Hi");
stringStorage.removeItem("Hey");
console.log(stringStorage.getItems());

// number storage
const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(10);
numberStorage.addItem(100);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());

//////////////////////////////////////////////////////////////////////////////

type CourseGoal = {
  title: string;
  description: string;
  completeUntil: Date;
};

function goalSetting(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.description = description;
  return courseGoal as CourseGoal;
}

//////////////////////////////////////////////////////////////////////////////

const names: Readonly<string[]> = ["Satyaki", "Disha"];
/* below will through an error in TS
names.push("Goutam");
names.pop();
*/
