const number = [4, 6, 7, 89];
const sum = number.reduce((prevoius, current) => prevoius + current, 0)
// console.log(sum);


const numbers = [4, 4, 7, 89]
const sumr = numbers.reduce((p, c) => p + c, 0)
console.log(sumr);

// Define sample product data
const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 5.99 },
];

// Define a shopping cart
let shoppingCart = [];

// Function to add a product to the shopping cart
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (product) {
    shoppingCart.push(product);
    console.log(`${product.name} added to the cart.`);
  } else {
    console.log('Product not found.');
  }
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
  const totalPrice = shoppingCart.reduce((total, product) => total + product.price, 0);
  return totalPrice.toFixed(2);
}

// Function to display the shopping cart
function displayCart() {
  console.log('Shopping Cart:');
  shoppingCart.forEach(product => {
    console.log(`${product.name} - $${product.price.toFixed(2)}`);
  });
  console.log(`Total: $${calculateTotal()}`);
}

// Example usage
addToCart(1);
addToCart(2);
addToCart(3);
displayCart();
