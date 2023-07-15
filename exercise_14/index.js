"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise14() {
    var guestList = ["Albert Einstein", "Leonardo da Vinci", "Rosa Parks"];
    // Print invitation messages
    guestList.forEach(function (guest) {
        console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
    });
}
exports.default = exercise14;
