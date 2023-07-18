"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise34() {
    let favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
    // Printing the names of each pizza
    console.log("My favorite pizzas are:");
    for (let pizza of favoritePizzas) {
        console.log(pizza);
    }
    // Printing sentences about each pizza
    console.log("\nMore about my favorite pizzas:");
    for (let pizza of favoritePizzas) {
        console.log(`I like ${pizza} pizza.`);
    }
    // Statement about loving pizza
    console.log("\nI really love pizza!");
}
exports.default = exercise34;
