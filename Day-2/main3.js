// ================================
// Day - 2 : JavaScript Syntax Practice
// ================================

// --------------------------------
// 1. Variable Declaration (Right Way)
// --------------------------------

// ✅ Good Practice: Variable names should be descriptive and written in camelCase.
// Here we store a person's first name and age.
let firstName = "Sahin Shazi"; // Stores the first name as a string
let age = 30;                  // Stores the age as a number


//JavaScript is Case sensitive 
let NUMBER = 1
let Number = 2
let number = 4

console.log(NUMBER);
console.log(Number);
console.log(number);
//Because JavaScript is case sensitive

//Naming identifiers 
//Variable, functions

//The identifiers must start with a latter, _ or $
let name = "Sahin";
let _age = 10;
let $location = "New York"

//Invalid identifier
/*let 1234 = "10";
let %age = 10;
let 1name = 'Max;*/

//letters, number,$ and _
let name1 = "Sahin";
let yes = 120;
let last_name = "Don";
let $firstName = "John";


//Conversation
//Camel case - lastName, firstName
let firstName = "Sahin";


//Semicolons -NOT mandatory (but recommend)
let city = "Barisal";
let country = 'USA'

console.log(city);
console.log(country);



// --------------------------------
// 2. Variable Declaration (Wrong Way)
// --------------------------------

// ❌ Bad Practice: Variable names cannot have spaces.
// Example (This will cause an error if uncommented):
// let first Name = "Sahin Shazi";

// --------------------------------
// 3. Using console.log() to output values
// --------------------------------
console.log(firstName);  // Prints: Sahin Shazi
console.log(age + 50);   // Prints: 80 (because 30 + 50 = 80)

// --------------------------------
// 4. JavaScript Comments
// --------------------------------

// Single-line comment example:
// This is a single-line comment explaining code below:
let line = 23; // This is an inline comment

// ❌ Wrong way of inline comment (this will cause an error):
// let line = 23 This is Comment

// Multi-line comment example:
/*
console.log(firstName);
console.log(age + 50);
These lines are inside a multi-line comment, so they won't run.
*/

// ================================
// Summary:
// - Variables store data (text, numbers, etc.)
// - camelCase is preferred for naming
// - Use // for single-line comments
// - Use /* ... */ for multi-line comments
// ================================