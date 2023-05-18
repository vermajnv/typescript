type Guitarist = {
    name : string, 
    age : number,
    band : string,
    album? : (string | number)[] // Optional
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