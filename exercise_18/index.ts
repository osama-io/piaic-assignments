
export default function exercise18 (): void {
     
    
     // Array of places to visit
const placesToVisit: string[] = [
    "Tokyo",
    "Paris",
    "Rio de Janeiro",
    "Sydney",
    "New York City"
  ];
  
  // Print the array in its original order
  console.log("Original order:", placesToVisit);
  
  // Print the array in alphabetical order without modifying the original list
  console.log("Alphabetical order:", [...placesToVisit].sort());
  
  // Print the array to show it is still in its original order
  console.log("Original order:", placesToVisit);
  
  // Print the array in reverse alphabetical order without modifying the original list
  console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
  
  // Print the array to show it is still in its original order
  console.log("Original order:", placesToVisit);
  
  // Reverse the order of the list
  placesToVisit.reverse();
  
  // Print the array to show its order has changed
  console.log("Reversed order:", placesToVisit);
  
  // Reverse the order of the list again
  placesToVisit.reverse();
  
  // Print the array to show it is back to its original order
  console.log("Original order:", placesToVisit);
  
  // Sort the array in alphabetical order
  placesToVisit.sort();
  
  // Print the array to show its order has changed
  console.log("Alphabetical order:", placesToVisit);
  
  // Sort the array in reverse alphabetical order
  placesToVisit.sort().reverse();
  
  // Print the array to show its order has changed
  console.log("Reverse alphabetical order:", placesToVisit);
  
     
     
    
        
              }