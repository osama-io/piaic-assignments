"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var index_1 = require("../exercise_2/index");
var index_2 = require("../exercise_3/index");
var index_3 = require("../exercise_4/index");
var index_4 = require("../exercise_6/index");
var index_5 = require("../exercise_7/index");
var index_6 = require("../exercise_9/index");
var index_7 = require("../exercise_11/index");
var index_8 = require("../exercise_12/index");
var index_9 = require("../exercise_13/index");
var index_10 = require("../exercise_14/index");
var index_11 = require("../exercise_15/index");
var index_12 = require("../exercise_16/index");
var index_13 = require("../exercise_17/index");
var index_14 = require("../exercise_18/index");
var index_15 = require("../exercise_19/index");
var index_16 = require("../exercise_20/index");
// Create a readline interface for reading user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function runExercises() {
    rl.question('Enter a number between 1 and 50: ', function (answer) {
        var num = parseInt(answer);
        if (num >= 1 && num <= 50) {
            switch (num) {
                case 2:
                    (0, index_1.default)();
                    break;
                case 3:
                    (0, index_2.default)();
                    break;
                case 4:
                    (0, index_3.default)();
                    break;
                case 6:
                    (0, index_4.default)();
                    break;
                case 7:
                    (0, index_5.default)();
                    break;
                case 9:
                    (0, index_6.default)();
                    break;
                case 11:
                    (0, index_7.default)();
                    break;
                case 12:
                    (0, index_8.default)();
                    break;
                case 13:
                    (0, index_9.default)();
                    break;
                case 14:
                    (0, index_10.default)();
                    break;
                case 15:
                    (0, index_11.default)();
                    break;
                case 16:
                    (0, index_12.default)();
                    break;
                case 17:
                    (0, index_13.default)();
                    break;
                case 18:
                    (0, index_14.default)();
                    break;
                case 19:
                    (0, index_15.default)();
                    break;
                case 20:
                    (0, index_16.default)();
                    break;
                default:
                    console.log("Exercise not done yet.");
                    break;
            }
        }
        else if (num > 50) {
            console.log("Please enter a number between 1 and 50.");
        }
        else {
            console.log("Invalid input. Please enter a number between 1 and 50.");
        }
        rl.question('Do you want to try another exercise? (yes/no): ', function (answer) {
            if (answer.toLowerCase() === 'yes') {
                runExercises(); // Recursively call runExercises for another exercise
            }
            else {
                rl.close(); // Close the readline interface if the user doesn't want to try another exercise
            }
        });
    });
}
runExercises();
