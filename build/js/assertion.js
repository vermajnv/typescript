"use strict";
// Convert to more or less specific
let a = 'hello';
let b = a; // Less specific
let c = a; // More specific
// c = 'hello'
// Also we can use <>
let d = 'Something';
let e = 45;
let f = 'Hi';
const addOrConcat = (a, b, c) => {
    if (c === 'concat')
        return '' + a + b;
    return a + b;
};
// let myValue: string = addOrConcat(2, 4, 'concat') as string;
let myValue = addOrConcat(2, 4, 'concat');
console.log(myValue);
// 10 as string // gives error
// (10 as unknown) as string avoid using this
const img = document.querySelector('img');
img.src;
const myImg = document.getElementById('#img');
myImg.src;
const nextImg = document.getElementById('#img');
nextImg.src;
