class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `This is ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Traveler extends Person {
    constructor(name, age, location= "") {
        super(name, age);
        this.location = location;
    }

    getGreeting(args) {
        let greeting = super.getGreeting();
        if(!!this.location)
            greeting += ` from ${this.location} ` + args;
        return greeting;
    }
}

const me = new Traveler('Sid',26, 'Philly');
console.log(me.getGreeting('test'));

const other = new Traveler();
console.log(other.getGreeting('test'));