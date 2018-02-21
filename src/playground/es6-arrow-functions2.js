// arguments Object - > no longer with arrow functions 

const add = (a, b) => {
    return a + b;
}

console.log(add(2,2));


// this Object --> 


const user = {
    name: "Sid",
    cities: ["Hyderabad", "Maryville", "Philadelphia"],
    printCitiesLived() {
        return this.cities.map((city) => this.name + " lived in " + city);
    }
}
console.log(user.printCitiesLived());

const multiplier = {
    numbers: [22, 12, 14],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());