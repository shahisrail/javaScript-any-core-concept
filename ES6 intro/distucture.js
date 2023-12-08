/* Object Destructuring */
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;

// console.log(firstName); // "John"
// console.log(lastName);  // "Doe"

/* 2. Renaming Variables:
 */
const person2 = { firstName: 'John', lastName: 'Doe' };
const { firstName: first, lastName: last } = person2;

// console.log(first); // "John"
// console.log(last);  // "Doe"

/*  Default Values: */
const person3 = {firstName2:'jhon',lastName2:'deo'};
const { firstName2='shah', lastName2= 'israil' } = person3;

console.log(firstName2);
console.log(lastName2);  


/* Array Destructuring:
 */
const numbers = [1, 2, 3];
const [first3, second, third] = numbers;

console.log(first3);  // 1
console.log(second); // 2
console.log(third);  // 3


/* Skipping Elements: */
const numbers2 = [1, 2, 3, 4, 5];
const [first2, , third2] = numbers2;

console.log(first2);  // 1
console.log(third2);  // 3


/* . Rest Parameter: */
const numbers3 = [1, 2, 3, 4, 5];
const [first4,s,...rest] = numbers3;

console.log(first4); // 1
console.log(s);
console.log(rest);  // [2, 3, 4, 5]
