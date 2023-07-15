
export default function exercise14 (): void {
     
    const guestList: string[] = ["Albert Einstein", "Leonardo da Vinci", "Rosa Parks"];

    // Print invitation messages
    guestList.forEach((guest) => {
      console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
    });
    
        }