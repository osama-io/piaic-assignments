
export default function exercise3 (): void {
     

    const personName: string = "John Doe";

    // Convert to lowercase
    const lowercaseName: string = personName.toLowerCase();
    console.log("Lowercase:", lowercaseName);
    
    // Convert to uppercase
    const uppercaseName: string = personName.toUpperCase();
    console.log("Uppercase:", uppercaseName);
    
    // Convert to title case
    function toTitleCase(str: string): string {
      return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    
    const titleCaseName: string = toTitleCase(personName);
    console.log("Title Case:", titleCaseName);
    
}