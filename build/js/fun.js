"use strict";
const greetGuitar = (guitarist) => {
    console.log(guitarist);
};
const person = {
    name: "Nayan",
    age: 24,
};
const getPerson = (person) => {
    var _a;
    return (_a = person.address) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase;
};
getPerson(person);
const add = (a, b) => {
    return a + b;
};
add(2, 4);
const logMsg = (message) => {
    console.log(message);
};
logMsg(add(5, 6));
let multiply = (c, d) => {
    return c * d;
};
