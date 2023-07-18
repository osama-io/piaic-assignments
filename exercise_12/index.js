"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise12() {
    const names = ["Alice", "Bob", "Charlie", "David"];
    const message = "Hello, ";
    const closing = "! Hope you're having a great day.";
    // Print personalized messages
    for (let i = 0; i < names.length; i++) {
        const personalizedMessage = message + names[i] + closing;
        console.log(personalizedMessage);
    }
}
exports.default = exercise12;
