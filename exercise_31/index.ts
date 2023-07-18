
export default function exercise31 (): void {
    let usernames: string[] = ['admin', 'Eric', 'Jane', 'John', 'Alice'];

    if (usernames.length === 0) {
      console.log("We need to find some users!");
    } else {
      for (let username of usernames) {
        if (username === 'admin') {
          console.log("Hello admin, would you like to see a status report?");
        } else {
          console.log(`Hello ${username}, thank you for logging in again.`);
        }
      }
    }
    
    // Remove all usernames from the array
    usernames = [];
    
    if (usernames.length === 0) {
      console.log("We need to find some users!");
    }
    
    
        }