// // const numbers = [4, 8, 10, 12, 16];

// // const doubled = [];
// // for (const num of numbers) {
// //   const double = num * 2
// //   doubled.push(double)

// // }
// // console.log(doubled);

const numbers = [4, 8, 10, 12, 16];

// function doubleIt(num) {
//   console.log('number now:',num);
//   return num*2
// }
// const result = numbers.map(doubleIt)
// console.log(result);

// /* In JavaScript, the.map() method is used to iterate over an array and apply a function to each element in the array, creating a new array with the results of those function calls. It's a commonly used method for transforming data in an array without modifying the original array. Here are some common use cases for .map(): */
// /* 
// Transforming Data: You can use.map() to transform data within an array.For example, if you have an array of numbers and you want to double each number, you can use.map() to create a new array with the doubled values.
//  */

// const numbers2 = [1, 2, 3, 4, 5];
// const doubled = numbers2.map(num => num * 2);
// // doubled is now [2, 4, 6, 8, 10]

// /* 
// Extracting a Property: If you have an array of objects and you want to extract a specific property from each object into a new array, you can use.map() for this purpose. */


// const students = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 }
// ];
// const names = students.map(student => student.name);
// // names is now ['Alice', 'Bob', 'Charlie']


// /* Converting Data Formats: .map() is often used to convert data from one format to another.For instance, you can convert an array of strings to uppercase.
//  */
  
// const words = ['apple', 'banana', 'cherry'];
// const uppercaseWords = words.map(word => word.toUpperCase());
// // uppercaseWords is now ['APPLE', 'BANANA', 'CHERRY']


// /* Creating Components: In frontend development with frameworks like React, .map() is frequently used to create components from data.You can map over an array of data and return a component for each item. */

// const items = ['item1', 'item2', 'item3'];
// const itemComponents = items.map((item, index) => <Item key={index} name={item} />);


// // itemComponents is an array of React components
// /* Filtering Data: Although.filter() is more suitable for filtering, you can use.map() to transform an array while also filtering it based on certain criteria.
//  */
 
// const numbers = [1, 2, 3, 4, 5];
// const evenDoubled = numbers.map(num => num * 2).filter(num => num % 2 === 0);
// // evenDoubled is now [4, 8]

// /* Cleaning Data: If you have an array of data with null or undefined values and you want to clean it by removing those values, you can use.map() in conjunction with .filter().
//  */

// const data = [1, 2, null, 4, undefined, 6];
// const cleanedData = data.map(item => item).filter(Boolean);
// // cleanedData is now [1, 2, 4, 6]
// /* 
// .map() is a versatile method that is often used in JavaScript to manipulate and transform data in arrays.It's a powerful tool for functional programming and can make your code more concise and readable when used appropriately. */

const double4 = s => s*2
 
const output = numbers.map(double4)
// console.log(output)

const output3 = numbers.map(n => n * 2)
console.log(output3);


