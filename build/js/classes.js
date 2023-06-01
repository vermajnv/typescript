"use strict";
class Coder {
    constructor(name, age, lang, address, id = 234) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.address = address;
        this.id = id;
    }
    getName() {
        return `My name is ${this.name}`;
    }
    getAge() {
        return this.age;
    }
}
let coder = new Coder('Nayan', 28, 'JavaScript', 'LMP');
console.log(coder.getAge());
// Not possible as name is readOnly
// coder.name = 'Golu'; 
