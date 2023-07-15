"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise3() {
    var personName = "John Doe";
    // Convert to lowercase
    var lowercaseName = personName.toLowerCase();
    console.log("Lowercase:", lowercaseName);
    // Convert to uppercase
    var uppercaseName = personName.toUpperCase();
    console.log("Uppercase:", uppercaseName);
    // Convert to title case
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    var titleCaseName = toTitleCase(personName);
    console.log("Title Case:", titleCaseName);
}
exports.default = exercise3;
