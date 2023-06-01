// type Guitarist = {
//     name : string, 
//     age : number,
//     band : string,
//     album? : (string | number)[] // Optional
//     link? : stringOrNumberArray
// }

// let nayan:Guitarist = {
//     name : "Nayan",
//     age : 36,
//     band : "Jal",
//     album : [234, "Umeed", 56]
// }

// let golu: Guitarist = {
//     name : "Golu",
//     age : 24,
//     band : "toofan"
// }

// type stringOrNumber = string | number;

// type stringOrNumberArray = (string | number)[];

// let myName: 'Nayan';

// // myName = 'Golll'

// let userName : 'Nayan' | 'Golu' | 'Rahul';

// userName = 'Golu'

class Coder1 {

    constructor(
        public name : string,
        // private age : number,
        // public lang : string,
        // private address : string,
        // protected id : number = 234
    )
    {
        this.name = name;
        // this.age = age;
        // this.lang = lang;
        // this.address = address;
        // this.id = Math.random();
    }

    getName()
    {
        return `My name is ${this.name}`;
    }
}

let coder1 = new Coder1('Nayan');

// coder.lang = 'C';

// Not possible as name is readOnly
// coder.name = 'Golu'; 
