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