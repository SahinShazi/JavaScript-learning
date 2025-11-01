# 🔄 JavaScript Higher Order Array Loops

---

## 📋 Overview

JavaScript এ বিভিন্ন ধরনের লুপ আছে যা দিয়ে Array, Object, String, Map ইত্যাদিতে iterate করা যায়।

---

## 🔁 Traditional For Loop

**Array তে লুপ চালানোর পুরনো পদ্ধতি**

```javascript
const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];

for (let fruit = 0; fruit < fruits.length; fruit++) {
  console.log(fruits[fruit]);
}
```

**Output:**
```
Mango
Banana
Orange
Graps
```

**ব্যাখ্যা:** এটি traditional for loop যেখানে index ব্যবহার করে array এর উপাদান access করা হয়।

---

## 🎯 for...of Loop (Array এর জন্য)

### Array তে for...of

**সবচেয়ে সহজ পদ্ধতি Array loop করার জন্য**

```javascript
const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];

for (const fruit of fruits) {
  console.log(fruit);
}
```

**Output:**
```
Mango
Banana
Orange
Graps
```

**ব্যাখ্যা:** `for...of` loop সরাসরি array এর value দেয়, index এর প্রয়োজন নেই।

---

### String এ for...of

**String এর প্রতিটি অক্ষরে লুপ চালানো**

```javascript
const myName = 'Ali Hossain';

for (const name of myName) {
  console.log(`Each char is ${name}`);
}
```

**Output:**
```
Each char is A
Each char is l
Each char is i
Each char is  
Each char is H
Each char is o
Each char is s
Each char is s
Each char is a
Each char is i
Each char is n
```

**ব্যাখ্যা:** String এর প্রতিটি character আলাদাভাবে iterate হয়।

---

## 🗺️ Map এ for...of Loop

### Map তৈরি এবং লুপ

```javascript
const country = new Map([
  ['Bn', 'Bangladesh'],
  ['In', 'India'],
  ['Pk', 'Pakistan'],
  ['Np', 'Nepal'],
]);

country.set('Vu', 'Vutan');

// শুধু entries
for (const key of country) {
  console.log(key);
}
```

**Output:**
```
['Bn', 'Bangladesh']
['In', 'India']
['Pk', 'Pakistan']
['Np', 'Nepal']
['Vu', 'Vutan']
```

---

### Destructuring সহ Map Loop

**Key এবং Value আলাদাভাবে পেতে**

```javascript
for (const [key, value] of country) {
  console.log(key, ':', value);
}
```

**Output:**
```
Bn : Bangladesh
In : India
Pk : Pakistan
Np : Nepal
Vu : Vutan
```

**ব্যাখ্যা:** Destructuring ব্যবহার করে key এবং value সরাসরি পাওয়া যায়।

---

## 🔑 for...in Loop (Object এর জন্য)

### Object এ for...in

**Object এর keys নিয়ে লুপ চালানো**

```javascript
const myCountry = {
  Bn: 'Bangladesh',
  In: 'India',
  Pk: 'Pakistan',
  Np: 'Nepal',
};

for (const key in myCountry) {
  console.log(key, ':', myCountry[key]);
}
```

**Output:**
```
Bn : Bangladesh
In : India
Pk : Pakistan
Np : Nepal
```

**ব্যাখ্যা:** 
- `for...in` loop object এর keys দেয়
- Value পেতে হলে `myCountry[key]` ব্যবহার করতে হয়
- ⚠️ **Object এ `for...of` কাজ করে না!**

---

### Object.keys() দিয়ে for...of

**Object এর keys নিয়ে for...of ব্যবহার**

```javascript
for (const key of Object.keys(myCountry)) {
  console.log(key);
}
```

**Output:**
```
Bn
In
Pk
Np
```

**অন্যান্য Object Methods:**
```javascript
// শুধু keys
for (const key of Object.keys(myCountry)) {
  console.log(key);
}

// শুধু values
for (const value of Object.values(myCountry)) {
  console.log(value);
}

// Keys এবং values
for (const [key, value] of Object.entries(myCountry)) {
  console.log(key, ':', value);
}
```

---

### Array তে for...in (সাধারণত ব্যবহার করা হয় না)

```javascript
const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];

for (const key in fruits) {
  console.log(fruits[key]);
}
```

**Output:**
```
Mango
Banana
Orange
Graps
```

**⚠️ সতর্কতা:** Array এর জন্য `for...in` ব্যবহার না করাই ভালো। `for...of` বা `forEach` ব্যবহার করুন।

---

## 🔄 forEach Method

### Basic forEach

**Array এর প্রতিটি element এ function চালানো**

```javascript
const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];

// Regular function
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// Arrow function
fruits.forEach(fruit => {
  console.log(fruit);
});
```

**Output:**
```
Mango
Banana
Orange
Graps
```

---

### Named Function দিয়ে forEach

```javascript
function myFruit(fruit) {
  console.log(fruit);
}

fruits.forEach(myFruit);
```

**Output:**
```
Mango
Banana
Orange
Graps
```

---

### forEach এর Parameters

**forEach তিনটি parameter পায়**

```javascript
fruits.forEach((fruit, index, arr) => {
  console.log(fruit, index, arr);
});
```

**Output:**
```
Mango 0 ['Mango', 'Banana', 'Orange', 'Graps']
Banana 1 ['Mango', 'Banana', 'Orange', 'Graps']
Orange 2 ['Mango', 'Banana', 'Orange', 'Graps']
Graps 3 ['Mango', 'Banana', 'Orange', 'Graps']
```

**Parameters:**
1. `fruit` - বর্তমান element
2. `index` - বর্তমান index
3. `arr` - পুরো array

---

## 🎯 Practical Example: Object Array

**Object array তে forEach ব্যবহার**

```javascript
const stack = [
  {
    name: 'MERN Stack',
    property: 'Mongo, Express, React, Node',
  },
  {
    name: 'Laravel',
    property: 'JavaScript, Vue, PHP, Laravel, MySQL',
  },
  {
    name: 'WordPress',
    property: 'JavaScript, PHP, WordPress, MySQL',
  },
];

stack.forEach(info => {
  console.log(`Want to learn ${info.name}? Learn this ${info.property}`);
});
```

**Output:**
```
Want to learn MERN Stack? Learn this Mongo, Express, React, Node
Want to learn Laravel? Learn this JavaScript, Vue, PHP, Laravel, MySQL
Want to learn WordPress? Learn this JavaScript, PHP, WordPress, MySQL
```

---

## 📊 Loop Comparison Table

| Loop Type | কখন ব্যবহার করবেন | Syntax | Break/Continue |
|-----------|-------------------|--------|----------------|
| `for` | Traditional loop, index দরকার হলে | `for(let i=0; i<arr.length; i++)` | ✅ হ্যাঁ |
| `for...of` | Array, String, Map, Set | `for(const item of array)` | ✅ হ্যাঁ |
| `for...in` | Object এর keys | `for(const key in object)` | ✅ হ্যাঁ |
| `forEach` | Array এ function চালাতে | `array.forEach(item => {})` | ❌ না |

---

## 🔥 Best Practices

### ✅ Array এর জন্য:
```javascript
const numbers = [1, 2, 3, 4, 5];

// ভালো (Modern & Clean)
numbers.forEach(num => console.log(num));

// ভালো (যদি break দরকার হয়)
for (const num of numbers) {
  console.log(num);
}

// এড়িয়ে চলুন (Array এর জন্য)
for (const index in numbers) {
  console.log(numbers[index]);
}
```

### ✅ Object এর জন্য:
```javascript
const user = { name: 'John', age: 30 };

// ভালো
for (const key in user) {
  console.log(key, user[key]);
}

// আরও ভালো (Modern)
Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});
```

---

## 💡 Advanced Examples

### Example 1: Filter করা

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = [];

numbers.forEach(num => {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});

console.log(evenNumbers);  // [2, 4, 6]
```

### Example 2: Sum Calculate

```javascript
const prices = [100, 200, 150, 300];
let total = 0;

prices.forEach(price => {
  total += price;
});

console.log(total);  // 750
```

### Example 3: Nested Object Loop

```javascript
const users = [
  { name: 'John', skills: ['JS', 'React'] },
  { name: 'Jane', skills: ['Python', 'Django'] },
];

users.forEach(user => {
  console.log(`${user.name} knows:`);
  user.skills.forEach(skill => {
    console.log(`  - ${skill}`);
  });
});
```

**Output:**
```
John knows:
  - JS
  - React
Jane knows:
  - Python
  - Django
```

---

## 🎓 Key Takeaways

1. **Array**: `for...of` বা `forEach` ব্যবহার করুন
2. **Object**: `for...in` বা `Object.keys/values/entries` ব্যবহার করুন
3. **Map/Set**: `for...of` ব্যবহার করুন
4. **Break দরকার হলে**: `forEach` এর পরিবর্তে `for...of` ব্যবহার করুন
5. **Index দরকার না হলে**: traditional `for` loop এড়িয়ে চলুন

---

## 🚫 Common Mistakes

### ❌ ভুল:
```javascript
const obj = { a: 1, b: 2 };

// Object এ for...of কাজ করে না
for (const item of obj) {  // ❌ Error!
  console.log(item);
}
```

### ✅ সঠিক:
```javascript
const obj = { a: 1, b: 2 };

// for...in ব্যবহার করুন
for (const key in obj) {
  console.log(key, obj[key]);
}

// অথবা Object.entries
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
```

---