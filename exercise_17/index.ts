
export default function exercise17 (): void {
     
// Initial guest list
const guestList: string[] = ["Albert Einstein", "Leonardo da Vinci", "Rosa Parks", "Nelson Mandela", "Amelia Earhart", "Marie Curie", "Malala Yousafzai"];

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

// Inform that only two people can be invited
console.log("Oops! The new dinner table won't arrive in time, so we can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
  const removedGuest: string | undefined = guestList.pop();
  if (removedGuest) {
    console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
  }
}

// Print invitation messages for the two remaining guests
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to dinner. We look forward to seeing you.`);
});

// Empty the guest list
guestList.length = 0;

// Print the guest list to confirm it's empty
console.log("Guest list:", guestList);

   
      
          }