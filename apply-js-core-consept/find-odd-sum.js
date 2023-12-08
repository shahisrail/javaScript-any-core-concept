// // function getSumOfAnarray(numbers) {
// //     let sum = 1;
// //     for (let i = 0; i < numbers.length; i++) {
// //         const index = i;
// //         const element = numbers[index]
// //         sum = sum * element; ''
// //         console.log(index, element, sum);
// //     }
// // }
// // const myNumbers = [12, 21, 42, 45, 56, 34, 34,]
// // getSumOfAnarray(myNumbers)


// function getSumOfAnarray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index]
//         sum = sum + element;
//         // console.log(index, element, sum);
//     }
//     return sum;

//  }
// // const myNumber = [10, 10, 10, 10, 10, 10]

// function getOddSumOfAnarray(numbers) {
//        const oddNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index]
//         if (element % 2 !== 0) {
//             console.log(index, element);
//             oddNumbers.push(element)
//         }
//     }
//     return oddNumbers;
// }
// const myNumbers = [10, 12, 25, 69, 90, 33]
//   const oddNumbers =  getOddSumOfAnarray(myNumbers)
//   console.log(oddNumbers);
// const oddNumbersSum = getSumOfAnarray(oddNumbers)
// console.log(oddNumbersSum);





// chat gpt 
// function findOddSum(arr) {
//     let oddSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== 0) { // Check if the number is odd
//         oddSum += arr[i]; // Add odd number to the sum
//       }
//     }

//     return oddSum;
//   }

//   const numbers = [5, 7, 8, 10, 45, 30];
//   const sumOfOddNumbers = findOddSum(numbers);

//   console.log('Sum of odd numbers:' ,sumOfOddNumbers);



function getsumOfAnArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index];
        sum = sum + element
        // console.log(index, element, sum);
    }
    return sum;
}
function getOddSumOfAnarray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i
        const element = numbers[index]
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumbers = [12, 16, 19, 30, 87, 43]
const oddNumbers = getOddSumOfAnarray(myNumbers)
console.log(oddNumbers);
const oddNumbersSum = getsumOfAnArray(oddNumbers)
console.log(oddNumbersSum);