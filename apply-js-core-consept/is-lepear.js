//    cahat gpt





// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const yearToCheck = 2024;
// if (isLeapYear(yearToCheck)) {
//     console.log(`${yearToCheck} is a leap year.`);
// } else {
//     console.log(`${yearToCheck} is not a leap year.`);
// }





// function chekcLeapYear(year) {
//     const remainder = year % 4
//     if(remainder === 0){
//       return  true ;
//     }
//     else{
//         return false;
//     }
// }
// const thsiYear = chekcLeapYear(2100)
// console.log('this is leap year:',thsiYear);





  function isLeapYear (year){
    const remainder = year % 4=== 0 && year % 100 !== 0 || year % 400  === 0
    if(remainder){
        return 'This year is leap year'
    }
     return 'This year is not leap year'
  }
  const thisYear = isLeapYear(2100)
  console.log(thisYear);    
  const thisYear2 = isLeapYear (2020)
  console.log(thisYear2);


