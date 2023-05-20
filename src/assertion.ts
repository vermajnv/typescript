type One = string;
type Two = string | number
type Three = 'hello';

// Convert to more or less specific

let a:One = 'hello';
let b = a as Two; // Less specific
let c = a as Three; // More specific

// c = 'hello'

// Also we can use <>

let d = <One> 'Something';

let e = <Two> 45;

let f = <string | number> 'Hi';


const addOrConcat = (a : number, b : number, c : 'add' | 'concat') : number | string => {
    if(c === 'concat')  return '' + a + b;
    return a + b;
}

// let myValue: string = addOrConcat(2, 4, 'concat') as string;

let myValue : string = <string> addOrConcat(2, 4, 'concat');

console.log(myValue);

// 10 as string // gives error

// (10 as unknown) as string avoid using this

const img = document.querySelector('img') as HTMLImageElement;

img.src;

const myImg = document.getElementById('#img') as HTMLImageElement;

myImg.src

const nextImg = <HTMLImageElement>document.getElementById('#img');

nextImg.src;
