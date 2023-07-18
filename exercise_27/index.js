"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise27() {
    let alien_color = 'red';
    if (alien_color === 'green') {
        console.log("Congratulations! You just earned 5 points.");
    }
    else if (alien_color === 'yellow') {
        console.log("Congratulations! You just earned 10 points.");
    }
    else if (alien_color === 'red') {
        console.log("Congratulations! You just earned 15 points.");
    }
    else {
        console.log("Invalid alien color. No points earned.");
    }
}
exports.default = exercise27;
