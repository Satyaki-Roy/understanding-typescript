// these two are same
const arr: string[] = []; // normal way
const arr1: Array<string> = []; // generic way

// allow us to call string methods
arr1[0].split(" ");

/////////////////////////////////////////////////////////////////////////////

// generic type in promise
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hi There...");
  }, 2000);
});

// using string methods
promise.then((data) => {
  data.split(" ");
});
