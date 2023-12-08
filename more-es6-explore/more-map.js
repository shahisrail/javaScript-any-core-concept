const numbers = [12, 14, 16, 18, 20];



const double = numbers.map(num => num * 2)
// console.log(double);

const additoin = numbers.map(num => num + 5)
// console.log(additoin);


const haves = numbers.map(num => num / 2)
// console.log(haves);

const parsentis = numbers.map(num => num % 3)
// console.log(parsentis);


const friends = ['said', 'dalowar', 'sadi']
const length = friends.map(fd => fd.length)
// console.log(length);

const fristletter = friends.map(fd => fd[0])
console.log(fristletter);