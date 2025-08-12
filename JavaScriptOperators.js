// Arithmetic operators 
//Arithmetic operators are symbols that represent mathematical operations.
let a = 10;
let b = 20;
let c = a+b; 
console.log(c);



let userInput = prompt("Enter a number ")
let number = parseint(userInput);

if(number % 2 === 0){
  console.log(`${number} is even number`);
} else {
  console.log(`${number} is odd number`);
}

// Increment operators
let x = 10;
x = x + 1;//Same as x++ and x = x + 1;
x++;
console.log(x)

// Decrement 
let y = 20;
y = y - 1;
y--;
console.log(y);

//Predators precedent 
let result = 10 + 5 * 2;
let result = 10 + 10; // 5 * 2 evaluates to 10
let result = 20; // 10 + 10 evaluates to 20



// Comparison 
// JavaScript utilizes comparison operators to compare two values and return a boolean result (true or false).
let p = 40;
let q = 5;
console.log(p == q);
console.log(p === q);
console.log(p !== q);
console.log(p > q);
console.log(p < q);
console.log(p <= q);
console.log(p >= q);


// Logical Operators 
// Logical operators are symbols or keywords used to combine conditional statements, resulting in a Boolean (true or false) output.

//&& operators 
let a = true;
let b = false;
console.log(a && b); // Output: false
console.log(true && true); // Output: true

//|| OR operators 
let x = true;
let y = false;
console.log(x || y); // Output: true
console.log(false || false); // Output: false

// ! NOT operators 
let isRaining = true;
console.log(!isRaining); // Output: false
console.log(!false); // Output: true

let value = null;
let defaultValue = "default";
console.log(value ?? defaultValue); // Output: "default"

let zeroValue = 0;
console.log(zeroValue ?? defaultValue); // Output: 0


// Assignment Operators
//JavaScript assignment operators are used to assign values to variables. The most fundamental is the simple assignment operator, =, which assigns the value of its right operand to its left operand. 
let h = 10;
let j = 20
h = h + j; //same as "j += k;"
j += k;

j = j - h;
j -= k;

j *= h;
j /= h;
j %= h;


// TERNARY OPERATORS 
// The JavaScript ternary operator, also known as the conditional operator, provides a concise way to write conditional expressions. It is the only JavaScript operator that takes three operands. 

//EX:
let age = 20;
let message = (age >= 18) ? "You are an adult." : "You are not yet an adult.";
console.log(message); // Output: You are an adult.
