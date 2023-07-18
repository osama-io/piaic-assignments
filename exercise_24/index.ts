
export default function exercise24 (): void {

// Tests for equality and inequality with strings
let fruit = 'apple';

console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit != 'orange'? I predict True.");
console.log(fruit != 'orange');

console.log("Is fruit == 'Apple'? I predict False.");
console.log(fruit == 'Apple');

console.log("Is fruit != 'Apple'? I predict True.");
console.log(fruit != 'Apple');

// Tests using the lower case function
let city = 'New York';

console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');

console.log("Is city.toLowerCase() == 'Los Angeles'? I predict False.");
console.log(city.toLowerCase() == 'Los Angeles');

// Numerical tests
let num = 42;

console.log("Is num === 42? I predict True.");
console.log(num === 42);

console.log("Is num !== 42? I predict False.");
console.log(num !== 42);

console.log("Is num > 30? I predict True.");
console.log(num > 30);

console.log("Is num < 50? I predict True.");
console.log(num < 50);

console.log("Is num >= 42? I predict True.");
console.log(num >= 42);

console.log("Is num <= 40? I predict False.");
console.log(num <= 40);

// Tests using "and" and "or" operators
let age = 25;
let isStudent = true;

console.log("Is age > 18 and isStudent? I predict True.");
console.log(age > 18 && isStudent);

console.log("Is age > 30 or isStudent? I predict True.");
console.log(age > 30 || isStudent);

// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];

console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3));

console.log("Is 6 in the numbers array? I predict False.");
console.log(numbers.includes(6));

// Test whether an item is not in an array
let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));

console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes('apple'));

 
    }