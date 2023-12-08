function factorial(number) {
    let sum = 1;
    for (let i = number; i >= 1; i--) {
        sum = sum * i
        console.log(i);
    }
    return sum
}
const number = 6
const fact = factorial(number)
console.log('factorial of:', number, fact);





