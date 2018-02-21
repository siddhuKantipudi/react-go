
let nameLet = "Meghana";
nameLet = "Lakshmi";
console.log("nameLet", nameLet);

const nameConst= "goldie";
console.log("nameConst", nameConst);



// Block level Scoping

let name;
function returnName() {
    if(true) {
        name = "meghana";
    } else {
        name = "goldie";
    }
    return name;
}

console.log(returnName());