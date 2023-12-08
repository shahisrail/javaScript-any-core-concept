let sum = 1
function sumOfNumber(number) {
    for (let i = 1; i <= number; i++) {
        sum = sum * i
      
    }
    return sum
}

const multi = sumOfNumber(9)
console.log(multi);