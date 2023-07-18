"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise35() {
    let animals = ['Dog', 'Cat', 'Rabbit'];
    // Printing the names of each animal
    console.log("These animals have a common characteristic:");
    for (let animal of animals) {
        console.log(animal);
    }
    // Printing statements about each animal
    console.log("\nMore about these animals:");
    for (let animal of animals) {
        console.log(`A ${animal.toLowerCase()} would make a great pet.`);
    }
    // Statement about the common characteristic
    console.log("\nAny of these animals would make a great pet!");
}
exports.default = exercise35;
