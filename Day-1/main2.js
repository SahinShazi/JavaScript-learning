//Age functionality ---------------

let age = 27;
let hasLicense = false;

if (age >= 16) {
    console.log("You are old enough to drive!");
    if (hasLicense) {
        console.log("You have your license!")
    } else {
        console.log("You do not have your license yet!")
    }
} else {
    console.log("You must be 18+ to have a license");
} 


//Againe age functionality-------------------
 let age = 0;

if (age >= 100) {
    console.log('You are TOO OLD to enter this site!')
} else if (age == 0) {
    console.log("You can't enter. You were just born!");
} else if (age >= 18) {
    console.log("You are enough to enter this site!");
} else if (age < 0) {
    console.log("You age can't be below 0.");
} else {
    console.log("You must be 18+ to enter this site!");
} 






//Time Functionality ----------------------------

let time = 11

if (time < 12) {
    console.log("Good morning 🌅!");
} else {
    console.log("Good afternoon!")
} 




// Student functionality -------------_-----------

let isStudent = false;

if (isStudent) {
    console.log("You are a Student!")
} else {
    console.log("You are NOT a Student!")
}