const square = function(x) {
    return x * x;
}

console.log(square(2));


const thrice = (x) => x * x * x;

console.log(thrice(3));

const getFirstName = (firstName) => firstName.split(" ")[0];

const getFirstNameVerbose = (firstName = "goldie goldie") => {
    return firstName.split(" ")[0];
} 

console.log(getFirstName("Lakshmi Meghana"));
console.log(getFirstNameVerbose());

