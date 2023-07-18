"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const index_1 = __importDefault(require("../exercise_2/index"));
const index_2 = __importDefault(require("../exercise_3/index"));
const index_3 = __importDefault(require("../exercise_4/index"));
const index_4 = __importDefault(require("../exercise_5/index"));
const index_5 = __importDefault(require("../exercise_6/index"));
const index_6 = __importDefault(require("../exercise_7/index"));
const index_7 = __importDefault(require("../exercise_9/index"));
const index_8 = __importDefault(require("../exercise_11/index"));
const index_9 = __importDefault(require("../exercise_12/index"));
const index_10 = __importDefault(require("../exercise_13/index"));
const index_11 = __importDefault(require("../exercise_14/index"));
const index_12 = __importDefault(require("../exercise_15/index"));
const index_13 = __importDefault(require("../exercise_16/index"));
const index_14 = __importDefault(require("../exercise_17/index"));
const index_15 = __importDefault(require("../exercise_18/index"));
const index_16 = __importDefault(require("../exercise_19/index"));
const index_17 = __importDefault(require("../exercise_20/index"));
const index_18 = __importDefault(require("../exercise_21/index"));
const index_19 = __importDefault(require("../exercise_23/index"));
const index_20 = __importDefault(require("../exercise_24/index"));
const index_21 = __importDefault(require("../exercise_25/index"));
const index_22 = __importDefault(require("../exercise_26/index"));
const index_23 = __importDefault(require("../exercise_27/index"));
const index_24 = __importDefault(require("../exercise_28/index"));
const index_25 = __importDefault(require("../exercise_29/index"));
const index_26 = __importDefault(require("../exercise_30/index"));
const index_27 = __importDefault(require("../exercise_31/index"));
const index_28 = __importDefault(require("../exercise_32/index"));
const index_29 = __importDefault(require("../exercise_33/index"));
const index_30 = __importDefault(require("../exercise_34/index"));
const index_31 = __importDefault(require("../exercise_35/index"));
const index_32 = __importDefault(require("../exercise_36/index"));
const index_33 = __importDefault(require("../exercise_37/index"));
const index_34 = __importDefault(require("../exercise_38/index"));
const index_35 = __importDefault(require("../exercise_39/index"));
const index_36 = __importDefault(require("../exercise_40/index"));
const index_37 = __importDefault(require("../exercise_41/index"));
const index_38 = __importDefault(require("../exercise_42/index"));
const index_39 = __importDefault(require("../exercise_43/index"));
const index_40 = __importDefault(require("../exercise_44/index"));
const index_41 = __importDefault(require("../exercise_45/index"));
// Create a readline interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function runExercises() {
    rl.question('Please Enter a Exercise number between 1 and 45: ', (answer) => {
        const num = parseInt(answer);
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
                case 5:
                    (0, index_4.default)();
                    break;
                case 6:
                    (0, index_5.default)();
                    break;
                case 7:
                    (0, index_6.default)();
                    break;
                case 9:
                    (0, index_7.default)();
                    break;
                case 11:
                    (0, index_8.default)();
                    break;
                case 12:
                    (0, index_9.default)();
                    break;
                case 13:
                    (0, index_10.default)();
                    break;
                case 14:
                    (0, index_11.default)();
                    break;
                case 15:
                    (0, index_12.default)();
                    break;
                case 16:
                    (0, index_13.default)();
                    break;
                case 17:
                    (0, index_14.default)();
                    break;
                case 18:
                    (0, index_15.default)();
                    break;
                case 19:
                    (0, index_16.default)();
                    break;
                case 20:
                    (0, index_17.default)();
                    break;
                case 21:
                    (0, index_18.default)();
                    break;
                case 23:
                    (0, index_19.default)();
                    break;
                case 24:
                    (0, index_20.default)();
                    break;
                case 25:
                    (0, index_21.default)();
                    break;
                case 26:
                    (0, index_22.default)();
                    break;
                case 27:
                    (0, index_23.default)();
                    break;
                case 28:
                    (0, index_24.default)();
                    break;
                case 29:
                    (0, index_25.default)();
                    break;
                case 30:
                    (0, index_26.default)();
                    break;
                case 31:
                    (0, index_27.default)();
                    break;
                case 32:
                    (0, index_28.default)();
                    break;
                case 33:
                    (0, index_29.default)();
                    break;
                case 34:
                    (0, index_30.default)();
                    break;
                case 35:
                    (0, index_31.default)();
                    break;
                case 36:
                    (0, index_32.default)();
                    break;
                case 37:
                    (0, index_33.default)();
                    break;
                case 38:
                    (0, index_34.default)();
                    break;
                case 39:
                    (0, index_35.default)();
                    break;
                case 40:
                    (0, index_36.default)();
                    break;
                case 41:
                    (0, index_37.default)();
                    break;
                case 42:
                    (0, index_38.default)();
                    break;
                case 43:
                    (0, index_39.default)();
                    break;
                case 44:
                    (0, index_40.default)();
                    break;
                case 45:
                    (0, index_41.default)();
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
        rl.question('Do you want to try another exercise? (yes/no): ', (answer) => {
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
