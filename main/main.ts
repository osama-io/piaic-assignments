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
 import exercise21 from "../exercise_21/index";
 import exercise23 from "../exercise_23/index";
 import exercise24 from "../exercise_24/index";
 import exercise25 from "../exercise_25/index";
 import exercise26 from "../exercise_26/index";
 import exercise27 from "../exercise_27/index";
 import exercise28 from "../exercise_28/index";
 import exercise29 from "../exercise_29/index";
 import exercise30 from "../exercise_30/index";
 import exercise31 from "../exercise_31/index"; 
 import exercise32 from "../exercise_32/index";
 import exercise33 from "../exercise_33/index";
 import exercise34 from "../exercise_34/index";
 import exercise35 from "../exercise_35/index";
 import exercise36 from "../exercise_36/index";
 import exercise37 from "../exercise_37/index";
 import exercise38 from "../exercise_38/index";
 import exercise39 from "../exercise_39/index";
 import exercise40 from "../exercise_40/index";
 import exercise41 from "../exercise_41/index";
 import exercise42 from "../exercise_42/index";
 import exercise43 from "../exercise_43/index";
 import exercise44 from "../exercise_44/index";
 import exercise45 from "../exercise_45/index";
 
 

 // Create a readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runExercises(): void {
  rl.question('Please Enter a Exercise number between 1 and 45: ', (answer) => {
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
        case 21:
          exercise21();
          break;
         
         case 23:
          exercise23();
          break;
        case 24:
          exercise24();
          break;
        case 25:
          exercise25();
          break;
        case 26:
          exercise26();
          break;
        case 27:
          exercise27();
          break;
        case 28:
          exercise28();
          break;
        case 29:
          exercise29();
          break;
        case 30:
          exercise30();
          break;
        case 31:
          exercise31();
          break;
        case 32:
          exercise32();
          break;
           
        case 33:
          exercise33();
          break;
        case 34:
          exercise34();
          break;
        case 35:
          exercise35();
          break;
        case 36:
          exercise36();
          break;
        case 37:
          exercise37();
          break;
        case 38:
          exercise38();
          break;
        case 39:
          exercise39();
          break;
        case 40:
          exercise40();
        break;
        case 41:
          exercise41();
          break;
        case 42:
          exercise42();
          break;
        case 43:
          exercise43();
          break;
        case 44:
          exercise44();
          break;
        case 45:
          exercise45();
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