"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise12() {
    var names = ["Alice", "Bob", "Charlie", "David"];
    var message = "Hello, ";
    var closing = "! Hope you're having a great day.";
    // Print personalized messages
    for (var i = 0; i < names.length; i++) {
        var personalizedMessage = message + names[i] + closing;
        console.log(personalizedMessage);
    }
}
exports.default = exercise12;
