"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise42() {
    function show_magicians(magicians) {
        for (let magician of magicians) {
            console.log(magician);
        }
    }
    function make_great(magicians) {
        for (let i = 0; i < magicians.length; i++) {
            magicians[i] = "the Great " + magicians[i];
        }
        return magicians;
    }
    // Array of magician names
    let magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
    // Modify the magicianNames array by adding "the Great" to each name
    let greatMagicianNames = make_great(magicianNames);
    // Calling the show_magicians() function with the modified magicianNames array
    show_magicians(greatMagicianNames);
}
exports.default = exercise42;
