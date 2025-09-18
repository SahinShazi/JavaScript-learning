//JavaScript Data 

//Get Mathord
const myDate = new Date();
console.log(myDate.toString());
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(
    myDate.toLocaleString('default', {
        weekday: 'long',
    })
);

let updateDate = new Date(2024, 3, 5);
let styleDate = new Date('01-15-2002');
console.log(updateDate);
console.log(styleDate);



//Time Different Example 
let myTime = Date.now();
console.log(myTime);

function simpleTasks() {
    for (let step = 0; step < 100; step++) {
        console.log('Walking east to one step', step);
    }
}

let startTime = Date.now();
simpleTasks();
let endTime = Date.now();

console.log(`The tasks took ${endTime - startTime} millisecond to complete`);

//Second 
console.log(Math.floor(myTime / 1000));

console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
