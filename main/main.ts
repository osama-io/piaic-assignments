import * as readline from 'readline';

import exercise2 from "../exercise_2/index";
 import exercise3 from "../exercise_3/index";
 import exercise4 from "../exercise_4/index";
 import exercise5 from "../exercise_5/index";
 import exercise6 from "../exercise_6/index";
 import exercise7 from "../exercise_7/index";

import exercise9 from "../exercise_9/index";

 import exercise11 from "../exercise_11/index";
 import exercise12 from "../exercise_12/index";
 import exercise13 from "../exercise_13/index";
 import exercise14 from "../exercise_14/index";
 import exercise15 from "../exercise_15/index";
 import exercise16 from "../exercise_16/index";
 import exercise17 from "../exercise_17/index";
 import exercise18 from "../exercise_18/index";
 import exercise19 from "../exercise_19/index";
 import exercise20 from "../exercise_20/index";
 
 
 // Create a readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runExercises(): void {
  rl.question('Enter a number between 1 and 50: ', (answer) => {
    const num = parseInt(answer);

    if (num >= 1 && num <= 50) {
      switch (num) {
        case 2:
          exercise2();
          break;
        case 3:
          exercise3();
          break;
        case 4:
          exercise4();
          break;
        case 5:
          exercise5();
          break;
        case 6:
          exercise6();
          break;
        case 7:
          exercise7();
          break;
        case 9:
          exercise9();
          break;
        case 11:
          exercise11();
          break;
        case 12:
          exercise12();
          break;
        case 13:
          exercise13();
          break;
        case 14:
          exercise14();
          break;
        case 15:
          exercise15();
          break;
        case 16:
          exercise16();
          break;
        case 17:
          exercise17();
          break;
        case 18:
          exercise18();
          break;
        case 19:
          exercise19();
          break;
        case 20:
          exercise20();
          break;
        default:
          console.log("Exercise not done yet.");
          break;
      }
    } else if (num > 50) {
      console.log("Please enter a number between 1 and 50.");
    } else {
      console.log("Invalid input. Please enter a number between 1 and 50.");
    }

    rl.question('Do you want to try another exercise? (yes/no): ', (answer) => {
      if (answer.toLowerCase() === 'yes') {
        runExercises(); // Recursively call runExercises for another exercise
      } else {
        rl.close(); // Close the readline interface if the user doesn't want to try another exercise
      }
    });
  });
}

runExercises();