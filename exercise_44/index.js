"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise44() {
    function orderSandwich(...items) {
        console.log("Sandwich Order:");
        if (items.length === 0) {
            console.log("You ordered an empty sandwich. Please select some items.");
        }
        else {
            console.log("You ordered a sandwich with:");
            for (let item of items) {
                console.log("- " + item);
            }
        }
        console.log("--------------------");
    }
    // Calling the function with different arguments
    orderSandwich('Ham', 'Cheese', 'Lettuce');
    orderSandwich('Turkey', 'Tomato', 'Mayonnaise', 'Mustard');
    orderSandwich('Bacon', 'Egg');
    orderSandwich(); // Empty sandwich order
}
exports.default = exercise44;
