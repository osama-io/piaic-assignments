"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function exercise18() {
    // Array of places to visit
    var placesToVisit = [
        "Tokyo",
        "Paris",
        "Rio de Janeiro",
        "Sydney",
        "New York City"
    ];
    // Print the array in its original order
    console.log("Original order:", placesToVisit);
    // Print the array in alphabetical order without modifying the original list
    console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
    // Print the array to show it is still in its original order
    console.log("Original order:", placesToVisit);
    // Print the array in reverse alphabetical order without modifying the original list
    console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
    // Print the array to show it is still in its original order
    console.log("Original order:", placesToVisit);
    // Reverse the order of the list
    placesToVisit.reverse();
    // Print the array to show its order has changed
    console.log("Reversed order:", placesToVisit);
    // Reverse the order of the list again
    placesToVisit.reverse();
    // Print the array to show it is back to its original order
    console.log("Original order:", placesToVisit);
    // Sort the array in alphabetical order
    placesToVisit.sort();
    // Print the array to show its order has changed
    console.log("Alphabetical order:", placesToVisit);
    // Sort the array in reverse alphabetical order
    placesToVisit.sort().reverse();
    // Print the array to show its order has changed
    console.log("Reverse alphabetical order:", placesToVisit);
}
exports.default = exercise18;
