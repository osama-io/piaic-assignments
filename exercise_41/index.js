"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise41() {
    function show_magicians(magicians) {
        for (let magician of magicians) {
            console.log(magician);
        }
    }
    // Array of magician names
    let magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
    // Calling the show_magicians() function with the magicianNames array
    show_magicians(magicianNames);
}
exports.default = exercise41;
