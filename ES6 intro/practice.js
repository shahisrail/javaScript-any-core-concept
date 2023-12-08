/* 1st poblem */
const num = (num1, num2, num3) => num1 * num2 * num3
console.log(num(2, 2, 2));
/* 2nd problem */
const sen = 'I am a web devoloper'
const sen1 = 'I love code'
const sen2 = 'I love to eat biriany'

const full = `${sen}. ${sen1}. ${sen2}`
console.log(full);
/* 3rd problem */

const num2 = (a, b = 0) => a + b
// console.log(num2(2));

/* 4rth problem */
// const num5 =(sq,s) => sq*sq*sq{

// }

const squareAll = (num1, num2, num3, num4) => {
  const squaredNum1 = num1 * num1   ;
  const squaredNum2 = num2 * num2;
  const squaredNum3 = num3 * num3;
  const squaredNum4 = num4 * num4;
  const sum = squaredNum1 + squaredNum2 + squaredNum3 + squaredNum4
  const avg = sum /4
  return avg
}
const result = squareAll(2, 3, 4, 5);
console.log(result);