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


const total = (a: number, ...num: number[]) : number => {
    return num.reduce((pre, curr) => {
        return pre + curr;
    }, a)
};

console.log(total(5, 90, 6,));

// Return type never
const errorMessage = (message : string) => {
    throw new Error(message)
}

const infinite = () => {
    let i : number = 1;

    while(true)
    {
        i++
        if(i === 20)
        break;
    }
}

const isString = (value : any) : boolean => {
    return (typeof value === 'string') ? true : false
}

const numberOrString = (value : number | string) : string => {
    if(typeof value === 'number') return 'number';
    if(isString(value)) return 'string';

    return errorMessage('This is false')
}
