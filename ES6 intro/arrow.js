// // // functoin declaratoin


// // function add(a,b){
// //     const result = a+b
// //     return result
// // }
// // const sum =add(10,12)
// // console.log(sum);

// function add(a,b){
//     return a + b
// }
// const sum = add(10,12)
// console.log(sum);



// // function expratoin 
// const add3 = function(a,g){
//     return a+g
// }
// const sum3 = add3(12,10)
// console.log(sum3);


// // arrow functoin /*  not write functoin and return just use => this arrow seamble */
// const add4 = (a,c) => a+c
// const add5 = (a,c,r,t) => a+c+r+t
// const sum4 = add4(10,10)
// const sum5 = add5(10,10,10,10)
// console.log(sum4);
// console.log(sum5);



const add = (num1 = 0, num2 = 0, num3 = 0) => num1 + num2 + num3
const sum = add(10, 20)
console.log(sum);


const getPI = () => Math.PI;
console.log(getPI());
