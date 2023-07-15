
export default function exercise12 (): void {
     
    const names: string[] = ["Alice", "Bob", "Charlie", "David"];
    const message: string = "Hello, ";
    const closing: string = "! Hope you're having a great day.";
    
    // Print personalized messages
    for (let i = 0; i < names.length; i++) {
      const personalizedMessage: string = message + names[i] + closing;
      console.log(personalizedMessage);
    }
    
          
              
        }