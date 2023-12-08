/* 
1.for of use on array or string not in object
2. for in use on object
*/

const numbers = [12, 34, 54, 23, 56, 12]
for (const num of numbers) {
  // console.log(num);
}

const nobab = 'siraj od dowla'
for (const char of nobab) {
  // console.log(char);
}

const glass = {
  name: 'glass',
  color: 'golden',
  isClean: true,
  price: 12,

}
for (const key in glass) {
  const value = glass[key]
  console.log(key,value);
  
}