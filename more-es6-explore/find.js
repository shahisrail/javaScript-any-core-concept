// const players = [75, 32, 31, 15, 67]
// // const selected = players.find(p => p > 70) /* OUTPUT: 75 */
// const selected = players.find(p => p > 80) /*OUTPUT: undefined */
// console.log(selected);

/**
 * 1.map
 * 2.for each
 * 3.filter
 * 4.find
*/
// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter(n => n % 2);
// console.log(output);

// How will you get the price from the product object ?

const product = { name: 'Laptop', model: 'Yoga 3', price: 49000, dusk: '512SSD' }
// const price = product;
// const  price  = product.price;
// console.log(price);  


// const { price } = product.price
const { price } = product /* object distructuring */
console.log(price);