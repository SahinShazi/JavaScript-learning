// ===============================
// JavaScript Date & Time Examples
// ===============================

// Current Date Object
const myDate = new Date();

// Different ways to show date
console.log("Full Date String:", myDate.toString());
console.log("Date Object:", myDate);
console.log("Type of Date:", typeof myDate);
console.log("Readable Date:", myDate.toDateString());
console.log("Locale Date/Time:", myDate.toLocaleString());

// Example: Get weekday name in full form
console.log(
    "Weekday Name:",
    myDate.toLocaleString('default', { weekday: 'long' })
);

// -------------------------------
// Create specific date examples
// -------------------------------

// Format: new Date(year, monthIndex, day)
// NOTE: monthIndex starts from 0 (January = 0)
let updateDate = new Date(2024, 3, 5); // April 5, 2024
let styleDate = new Date("01-15-2002"); // January 15, 2002
console.log("Custom Date (Y,M,D):", updateDate);
console.log("Custom Date (MM-DD-YYYY):", styleDate);

// -------------------------------
// Time difference example
// -------------------------------

// Current timestamp in milliseconds
let myTime = Date.now();
console.log("Current Timestamp (ms):", myTime);

// Simple task function (loop for testing execution time)
function simpleTasks() {
    for (let step = 0; step < 100; step++) {
        console.log("Walking east to one step", step);
    }
}

// Measure task execution time
let startTime = Date.now(); // Start timer
simpleTasks(); // Run function
let endTime = Date.now(); // End timer

console.log(`The tasks took ${endTime - startTime} milliseconds to complete`);

// -------------------------------
// Convert milliseconds to seconds
// -------------------------------
console.log("Current Timestamp (seconds):", Math.floor(myTime / 1000));

// -------------------------------
// Extract specific date parts
// -------------------------------
console.log("Day of Month:", myDate.getDate());
console.log("Year:", myDate.getFullYear());
console.log("Month Index (0-based):", myDate.getMonth());