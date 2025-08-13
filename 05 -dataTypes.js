//string data type 
let firstName = "Sahin";
let fullName = "I'm Sahin 'Enam'"
let lastName = "I'm Sahin \"Enam\""
//print
console.log(lastName);
console.log(typeof firstName);
console.log(fullName);

//Variable use in variable 
let name = `Hi there, I'm ${firstName} Enam.`;
console.log(name);


//number type data
let age = 39;
let age1 = '39'; //this is not number type data
let age2 = 33;
let age3 = 100;

console.log(age + age2 + age3);
console.log(age + age2 + age3 + firstName);
console.log(age + age2);
console.log(age + age1);

//so funny 🤣 
let numberBig = 1293802837187378862867387380108289738761763398638866276n;
let numberBig1 = 1837393791738817629272829227272982288282888228282n;
console.log(numberBig * numberBig1)
//the answer is: 2377225300782158171114417537104552447620556546398146200733782845421022575211978322075543259162759217832

let number = 10n;
let number2 = 20;
let age4 = 'Sahin';

console.log(number + age4);


//Boolean data type
let ifAdult = true;
console.log(ifAdult);

//undefane 
let someInfo;
console.log(someInfo);

//null 
let some = null;
console.log(some);

//arry 
let fruits = ['Apple', 'Oranges', 'Cat'];
fruits[1] = 'Mango'; // change the veule
fruits[3] = 'Mango'; //Add new item
console.log(fruits);
console.log(fruits[0]); //print only apple
console.log(typeof fruits);

//or use object (same as arry)
let student ={
  fullName: 'Sahin',
  age: 32,
  dateOfBirth: 1999,
}
console.log(student);


//now you see all code output and result 
/* I'm Sahin "Enam"
string
I'm Sahin 'Enam'
Hi there, I'm Sahin Enam.
172
172Sahin
72
3939
2377225300782158171114417537104552447620556546398146200733782845421022575211978322075543259162759217832
10Sahin
true
undefined
null
[
  "Apple",
  "Mango",
  "Cat",
  "Mango"
]
Apple
object
{
  "fullName": "Sahin",
  "age": 32,
  "dateOfBirth": 1999
}*/

