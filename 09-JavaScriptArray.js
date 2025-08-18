//JavaScript Array 
const language = [
    "HTML", "CSS", "JavaScript", "PHP", true, 50
]; //recommend 

const language2 = new Array(
    "HTML", "CSS", "JavaScript", "PHP", true, 50
); // Execution time long (not recommend)

console.log(language[2]); //JavaScript 

//change arrays value 
language[4] = "Tailwind CSS"
language[5] = "React.js"

//add new items 
language[6] = "Vue.js"
language[10] = "Laravel"

console.log(language);

//convert to string 
console.log(language.toString());

//check items number 
console.log(language.length);

//first item 
console.log(language[0]);

//last item 
console.log(language[5]);

//fixed last item 
console.log(language[language.length - 1]);


//NOT RECOMMENDED 
const person = [];
person['firstName'] = 'Sahin';
person['lastName'] = 'Enam';
person[0] = 35;

console.log(person);
console.log(person.length);
console.log(person.firstName);
console.log(person.lastName);


//new Array [NOT RECOMMENDED]
const number = [20];
const number1 = new Array(20, 21);
console.log(number);
console.log(number1);

//Some Array Method
console.log(language.at(5));
console.log(language.join(" * "));

//delete or remove last item 
console.log(language[language.length - 1]);
language.pop();
//add
language.push('Angular.js');
language.unshift('UI');




const x = [1, 2, 3, 4, 5];
const y = [1, 2, 3, 4, 5];
const z = [x.concat(y)];
console.log(z);

const a = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];
console.log(a);
console.log(a.flat());
