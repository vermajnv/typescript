type Guitarist1 = {
    name: string,
    age : number,
    address?: string,
    active : boolean
}

const greetGuitar = (guitarist : Guitarist1) =>
{
    console.log(guitarist);
    
}

interface Person {
    name : string,
    age : number,
    address?: string
}

const person:Person = {
    name : "Nayan",
    age : 24,
}

const getPerson = (person: Person) =>
{
    return person.address?.toLocaleLowerCase;
}

getPerson(person);


const add = (a : number, b: number) : number | string => {
    return a + b;
}

add(2, 4);

const logMsg = (message : any) : void => {
    console.log(message);
}

logMsg(add(5, 6))

interface multType {
    (a : number, b : number): number;
} 

let multiply:multType = (c, d) =>
{
    return c * d;
}