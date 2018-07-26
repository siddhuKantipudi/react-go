class Car {
    constructor(name="honda", make, model, VIN) {
        this.name = name;
        this.make = make;
        this.model = model;
        this.VIN = VIN;
    }
}

const myOldCar = new Car();
console.log(myOldCar);

const myNewCar = new Car("Beamer","BMW","X6","XXXX");
console.log(myNewCar);

