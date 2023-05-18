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
