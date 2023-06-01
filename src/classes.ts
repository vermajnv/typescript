class Coder {
    constructor(
    public readonly name : string,
    private age : number,
    public lang : string,
    private address : string,
    protected id : number = 234
    )
    {
       
    }

    getName()
    {
        return `My name is ${this.name}`;
    }

    getAge()
    {
        return this.age;
    }
}

let coder = new Coder('Nayan', 28, 'JavaScript', 'LMP');

console.log(coder.getAge());

// Not possible as name is readOnly
// coder.name = 'Golu'; 
