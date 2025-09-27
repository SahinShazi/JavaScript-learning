//Conditional Statement
//if condition 
const age = 17;

if (age < 18) {
  console.log("You are not ready open to a Google Account");
} else if (age > 40) {
  console.log("You are very old");
} else if (age > 18) {
  console.log("You are ready open a Google Account");
} else {
  console.log("You are don't access Google Account");
}



//switch Condition 
let category = "car"
let carType;

switch(category) {
    case "car" :
       carType = "This is a Car";
       break
    case "Motor Bike":
        carType = "This is a Motor Bike";
        break
    case "Riska":
        carType = "This is a Riska";
        break
    default:
        carType = "Unknown Vehicle category" 
}

console.log(carType);
