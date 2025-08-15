//JavaScript function with out html
//Code Drive Invocation 
function myFunction(fullName, age, dateOfBirth = 1991) {
  console.log('Hello ' + fullName + "I'm " + age + " years old. " + ' My date of birth ' + dateOfBirth + '.');
}

myFunction('Sahin. ',20, 2000);
myFunction('Enam. ',17, );

//function with html
//Even Driven Invocation 
function isSubscribed() {
  console.log("Subscribed");
}
document.getElementById('btn').addEventListener('click', isSubscribed);


//Automatic (Self-Invoked) Invocation 
(function () {
 console.log('I am Self-Invoked function')();
})



//Use function in variable 
let maths = function(x, y) {
  return x * y;
};
console.log(maths (3,4));
console.log(maths (50,8));


//Arry 
let number = [2,3,4,5,8,90,100];
let sqNumbers = number.map(function (number) {
  return number * number;
})
console.log(sqNumbers);




let add = function (x,y) {
  return x + y;
}
console.log(add(5,6));

//Arrow function
let add1 = (x,y) => x + y;
console.log(add(6,90));

//Next state function 
function greet(firstName) {
  function sayHello() {
    alert('Hi ' + firstName);
  }
  return sayHello();
}
greet('Sahin Enam');


