"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise3() {
    const personName = "John Doe";
    // Convert to lowercase
    const lowercaseName = personName.toLowerCase();
    console.log("Lowercase:", lowercaseName);
    // Convert to uppercase
    const uppercaseName = personName.toUpperCase();
    console.log("Uppercase:", uppercaseName);
    // Convert to title case
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    const titleCaseName = toTitleCase(personName);
    console.log("Title Case:", titleCaseName);
}
exports.default = exercise3;
