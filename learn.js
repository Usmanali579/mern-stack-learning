"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    var data = "Hello World";
    return data;
});
getData().then(data => console.log(data));
const getData1 = () => __awaiter(void 0, void 0, void 0, function* () {
    var y = yield "Hello World";
    console.log(y);
});
console.log(1);
getData1();
console.log(2);
function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" GeeksforGeeks..");
        }, 1000);
    });
    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
}
function display() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield asynchronous_operational_method();
        console.log(data);
    });
}
display();
var promise = new Promise((resolve, reject) => {
    const x = "Greeks for Greeks";
    const y = "Greeks for Greeks";
    if (x === y) {
        resolve();
    }
    else {
        reject();
    }
});
promise.then(function () {
    console.log("Success you are greek");
}).catch(function () {
    console.log("Sorry you are not the greek");
});
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([46, 78, 23]);
    }, 5000);
});
let values;
promise1.then(values => {
    console.log(values[1]);
});
