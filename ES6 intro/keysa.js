const glass = {
  name: 'glass',
  color: 'golden',
  isClean: true,
  price: 12,

}
console.log(glass);

/* all propertys name */
const keys = Object.keys(glass)
// console.log(keys);

/* all propertys values name */
const values = Object.values(glass)
// console.log(values);

/*  array of array or two daimantonal array */
const eantry = Object.entries(glass)
// console.log(eantry);

/* remove a property  */
// delete glass.isClean
// console.log(glass);

const { isClean, ...shortglass } = glass
// console.log(shortglass)

// const { isClean, ...shortglass } = glass
// console.log(glass)

const { name, color, price, ...rest } = glass
// console.log(glass);

/* seal */
// Object.seal(glass)
// glass.price = 1000;
// delete glass.color;
// delete glass.name;
// glass.souce = 'bangladesh';
// console.log(glass);

/* freeze  */
Object.freeze(glass)  
// Object.seal(glass)
glass.price = 1000;
delete glass.color;
delete glass.name;
glass.souce = 'bangladesh';
console.log(glass);

