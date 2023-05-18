type Guitarist = {
    name : string, 
    age : number,
    band : string,
    album? : (string | number)[] // Optional
    link? : stringOrNumberArray
}

let nayan:Guitarist = {
    name : "Nayan",
    age : 36,
    band : "Jal",
    album : [234, "Umeed", 56]
}

let golu: Guitarist = {
    name : "Golu",
    age : 24,
    band : "toofan"
}

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

let myName: 'Nayan';

// myName = 'Golll'

let userName : 'Nayan' | 'Golu' | 'Rahul';

userName = 'Golu'
