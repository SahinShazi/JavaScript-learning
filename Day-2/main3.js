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