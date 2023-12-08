function factorial(number) {
    let i = number;
    let result = 1
    while (i >= number) {

        result = result * i 
        i--;
    }
    return result;
}

const output =factorial(8);
console.log(output);