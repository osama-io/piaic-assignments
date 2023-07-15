"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise15() {
    // Initial guest list
    var guestList = ["Albert Einstein", "Leonardo da Vinci", "Rosa Parks"];
    // Guest who can't make it
    var guestUnableToAttend = guestList[1];
    console.log("".concat(guestUnableToAttend, " can't make it to the dinner."));
    // Replace guest who can't make it with a new invitee
    guestList[1] = "Marie Curie";
    // Print invitation messages for the updated guest list
    guestList.forEach(function (guest) {
        console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
    });
}
exports.default = exercise15;
