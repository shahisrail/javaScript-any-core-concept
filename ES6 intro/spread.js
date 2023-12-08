// const max = Math.max(6,23,45,1,51,445)
// console.log(max);
// const min = Math.min(6,23,45,1,51,445)
// console.log(min);


// const number =[6,23,45,1,51,445]
// // console.log(...number);
// // console.log(...number);
// const arayMax = Math.max(...number)
// console.log(arayMax);

// use spread opearator copy b

// const numbers = [13, 534, 256, 77, 543, 6, 3, 6]
// const arrayMax = Math.max(...numbers)
// // const arrayMax = Math.max(numbers) /* NOT CORRECT use ...   */
// console.log(arrayMax);


// const friends = [4, 6, 3, 67, 8]
// const bondu = friends
// const dosto = [...friends]
// bondu.push(10)
// dosto.push(100)
// console.log(dosto)
// console.log(bondu)
// console.log(friends)



const num1 = [10, 20]
const num = [...num1,1000]
num.push(1)
num1.push(10)
console.log(num1);
console.log(num);