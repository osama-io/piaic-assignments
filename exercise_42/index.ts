
export default function exercise42 (): void {
    function show_magicians(magicians: string[]): void {
        for (let magician of magicians) {
          console.log(magician);
        }
      }
      
      function make_great(magicians: string[]): string[] {
        for (let i = 0; i < magicians.length; i++) {
          magicians[i] = "the Great " + magicians[i];
        }
        return magicians;
      }
      
      // Array of magician names
      let magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
      
      // Modify the magicianNames array by adding "the Great" to each name
      let greatMagicianNames = make_great(magicianNames);
      
      // Calling the show_magicians() function with the modified magicianNames array
      show_magicians(greatMagicianNames);
      

 
}

    
       