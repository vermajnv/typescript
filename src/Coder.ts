class Coder {
    constructor(
    public readonly name : string,
    private age : number,
    private address : string,
    public lang : string = 'Typescript',
    protected id : number = 234
    )
    {
       
    }

    private getName()
    {
        return `My name is ${this.name}`;
    }

    protected getAge()
    {
        return this.age;
    }
}

class Web extends Coder {
    constructor(
        public os : string,
        name : string,
        age : number,
        address : string,
    )
    {
        super(name, age, address);
    }

    public getLang()
    {
        return this.lang;
    }
}

// let coder = new Coder('Nayan', 28, 'JavaScript', 'LMP');

// console.log(coder.getAge());

// Not possible as name is readOnly
// coder.name = 'Golu'; 

const nayan = new Web('Linux', 'Something', 45, 'Lakhimpur');

// nayan.getAge();
// nayan.getName();

interface Musician {
    name : string,
    instrument : string,
    play(action : string) : string // Play method
}

class Guitarist implements Musician {
    name : string;
    instrument: string; 

    constructor(name : string, instrument : string)
    {
        this.name = name;
        this.instrument = instrument;
    }

    public play(action: string): string {
        return `${this.name} plays ${action} the ${this.instrument}`
    }
}

const gimmy = new Guitarist('Nayan', 'Tabala');

console.log(gimmy.play('Drama'));