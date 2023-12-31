
export default function exercise16 (): void {
     
  // Initial guest list
const guestList: string[] = ["Albert Einstein", "Leonardo da Vinci", "Rosa Parks"];

// Guest who can't make it
const guestUnableToAttend: string = guestList[1];
console.log(`${guestUnableToAttend} can't make it to the dinner.`);

// Replace guest who can't make it with a new invitee
guestList[1] = "Marie Curie";

// Print invitation messages for the updated guest list
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
});

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guestList.unshift("Nelson Mandela");

// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Amelia Earhart");

// Use push() to add one new guest to the end of your list
guestList.push("Malala Yousafzai");

// Print invitation messages for the updated guest list
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
});

    
        }