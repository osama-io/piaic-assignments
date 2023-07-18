
export default function exercise43 (): void {

    function show_magicians(magicians: string[]): void {
        for (let magician of magicians) {
          console.log(magician);
        }
      }
      
      function make_great(magicians: string[]): string[] {
        let greatMagicians: string[] = [];
        for (let magician of magicians) {
          greatMagicians.push("the Great " + magician);
        }
        return greatMagicians;
      }
      
      // Array of magician names
      let magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
      
      // Create a separate copy of the magicianNames array
      let magicianNamesCopy: string[] = magicianNames.slice();
      
      // Modify the magicianNamesCopy array by adding "the Great" to each name
      let greatMagicianNames = make_great(magicianNamesCopy);
      
      // Calling the show_magicians() function with the original magicianNames array
      console.log("Original Magician Names:");
      show_magicians(magicianNames);
      
      // Calling the show_magicians() function with the modified greatMagicianNames array
      console.log("\nModified Magician Names:");
      show_magicians(greatMagicianNames);
      

 
}

    
       