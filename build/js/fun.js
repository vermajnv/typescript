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
const total = (a, ...num) => {
    return num.reduce((pre, curr) => {
        return pre + curr;
    }, a);
};
console.log(total(5, 90, 6));
// Return type never
const errorMessage = (message) => {
    throw new Error(message);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i === 20)
            break;
    }
};
const isString = (value) => {
    return (typeof value === 'string') ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'number')
        return 'number';
    if (isString(value))
        return 'string';
    return errorMessage('This is false');
};
