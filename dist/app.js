"use strict";
const arr = [];
const arr1 = [];
arr1[0].split(" ");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hi There...");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
