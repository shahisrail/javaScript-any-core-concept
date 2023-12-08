// const num1 = 120000;
// const num2 = 1520;
// const num3 = 3200000;

// if(num1 > num2 && num3){
//     console.log('this is biggest number');
// }
// else if(num2 > num1 && num3){
//     console.log('this is biggest');
// }
// else{
//     console.log('This is ');
// }






// // function findMaxValue(numbers) {
// //     if (numbers.length === 0) {
// //         return undefined;
// //     }

// //     return Math.max(numbers);
   
// // }


// // const scores = [85, 95, 256, 40];
// // const maxScore = findMaxValue(scores);
// // console.log("The maximum score is:", maxScore);








// function findMaxValue(numbers) {
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i
//         const element = numbers[index]
//         if(element > largest){
//             largest = element

//         }
//     }
//     return largest
// }
// const scores = [85, 95, 256, 40];
// const maxScore = findMaxValue(scores);
// console.log("The maximum score is:", maxScore);









// let sum=0; 
// for( let i = 0; i<=3;i++){ 
// sum = sum + i; 
// }
// console.log(sum);







// # Given total scores
    let yourScore = 85;
    let tomScore = 95;
    let peterScore = 256;
    let johnScore = 40;

    function calculateGrade(score) {
    if (score >= 80) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else if (score >= 40) {
        return "D";
    } else {
        return "F";
    }
    }

    let yourGrade = calculateGrade(yourScore);
    let tomGrade = calculateGrade(tomScore);
    let peterGrade = calculateGrade(peterScore);
    let johnGrade = calculateGrade(johnScorelet);
    letsole.log("Your grade:", yourGrade);
    console.log("Tom's grade:", tomGrade);
    console.log("Peter's grade:", peterGrade);
    console.log("John's grade:", johnGrade);
