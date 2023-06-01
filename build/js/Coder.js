"use strict";
class Coder {
    constructor(name, age, address, lang = 'Typescript', id = 234) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.lang = lang;
        this.id = id;
    }
    getName() {
        return `My name is ${this.name}`;
    }
    getAge() {
        return this.age;
    }
}
class Web extends Coder {
    constructor(os, name, age, address) {
        super(name, age, address);
        this.os = os;
    }
    getLang() {
        return this.lang;
    }
}
// let coder = new Coder('Nayan', 28, 'JavaScript', 'LMP');
// console.log(coder.getAge());
// Not possible as name is readOnly
// coder.name = 'Golu'; 
const nayan = new Web('Linux', 'Something', 45, 'Lakhimpur');
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays ${action} the ${this.instrument}`;
    }
}
const gimmy = new Guitarist('Nayan', 'Tabala');
console.log(gimmy.play('Drama'));
