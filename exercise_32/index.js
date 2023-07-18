"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise32() {
    let current_users = ['John', 'Jane', 'Eric', 'Alice', 'Mike'];
    let new_users = ['Mandy', 'Mike', 'Jack', 'john', 'Emily'];
    for (let newUser of new_users) {
        // Convert the new username and current usernames to lowercase for case-insensitive comparison
        let lowerCaseNewUser = newUser.toLowerCase();
        let lowerCaseCurrentUsers = current_users.map(user => user.toLowerCase());
        if (lowerCaseCurrentUsers.includes(lowerCaseNewUser)) {
            console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`);
        }
        else {
            console.log(`Congratulations! The username "${newUser}" is available.`);
            // Add the new username to the current_users array to ensure uniqueness for future checks
            current_users.push(newUser);
        }
    }
}
exports.default = exercise32;
