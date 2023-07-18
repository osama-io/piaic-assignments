
export default function exercise32 (): void {

    let current_users: string[] = ['John', 'Jane', 'Eric', 'Alice', 'Mike'];
    let new_users: string[] = ['Mandy', 'Mike', 'Jack', 'john', 'Emily'];
    
    for (let newUser of new_users) {
        
      // Convert the new username and current usernames to lowercase for case-insensitive comparison
      let lowerCaseNewUser = newUser.toLowerCase();
      let lowerCaseCurrentUsers = current_users.map(user => user.toLowerCase());
    
      if (lowerCaseCurrentUsers.includes(lowerCaseNewUser)) {
        console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`);
      } else {
        console.log(`Congratulations! The username "${newUser}" is available.`);
        // Add the new username to the current_users array to ensure uniqueness for future checks
        current_users.push(newUser);
      }
    }
    
    }
    
        
           