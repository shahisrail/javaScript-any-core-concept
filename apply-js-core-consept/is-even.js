// console.log(4 / 2);
// console.log(8 / 2);
// console.log(10 / 2);
// console.log(16 / 2);

// console.log(5%2);
// console.log(7%2);
// console.log(9%2);
// console.log(15%2);

// console.log(5/2);
// console.log(7/2);
// console.log(9/2);
// console.log(15/2);


// function isEven(number){
//     const remainder = number %2
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const myNumber = isEven(123);
// console.log(myNumber);


// function isOdd(number) {
//     const remainder = number % 2
//     if(remainder === 1){
//        return false;
//     }
//     else{
//         return true;
//     }
// }
// const myNumber = isOdd(20);
// console.log(myNumber);

// function checkOddEven(num){
//     const remainder = num % 2
//     if(remainder === 0 ){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const hernum = checkOddEven(4556)
// console.log(hernum);
// const hernum2 = checkOddEven(457)
// console.log(hernum2);




function checkOddEven(num) {
    const remainder = num % 2
    if (remainder === 0) {
        return 'even'
    }
    return 'odd'
}
const myNumber = checkOddEven(12)
console.log('This number is', myNumber);
const hernumber = checkOddEven(13)
console.log('This  number is:', hernumber);


function printNumber(number) {
    for(i=0 ;i<=200;i++){
        console.log('Oh👀👀');
    }
    console.log(number,'sorry');
  }
  
  printNumber(100);
  