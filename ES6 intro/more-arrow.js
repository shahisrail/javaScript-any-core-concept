// const difference = (x, y) => x - y;
// const sum = difference(20, 12)
// console.log(sum);

// const multiply = (first, seceond, third) => first * seceond * third;

// const sum2 = multiply(10, 20, 20)
// console.log(sum2);

/*  singale parameter */
const getAge = (person) => person.age;
const student = {
    name: 'israil', age: 19
}
const age = getAge(student)
console.log(age);


// const getThird = Numbers => Numbers[3];
// const third = getThird([5, 8, 33, 45, 67, 56, 12])
// console.log(third);

// const doublet = num => num * 2;
// const fourth = doublet(20)
// console.log(fourth);

// /* no perametear */
// const getPI = () => Math.PI;
// console.log(getPI());

// /* large arrow functoin if you want to get anything returned from this functoin . then you have to use the return keyword */
// const doMath = (x, y, z) => {
//     const sum = x + y + z;
//     const mult = x * y * z;
//     const result = sum + mult
//     return result
// }
// const all = doMath(5, 5, 5)
// console.log(all);
