/* map */
const products = [
  {
    id: 1,
    name: 'lenovo',
    price: 65000,
  },
  {
    id: 2,
    name: 'dell',
    price: 45000
  },
  {
    id: 3,
    name: 'hp',
    price: 35000
  },
  { 
    id: 4,
    name: 'macBook',
    price: 1500000
  }
]
const names = products.map(nm => nm.name)
// console.log(names);  
const id = products.map(nm => nm.id)
// console.log(id);
const price = products.map(nm => nm.price)
// console.log(price);
// console.log(products[0].name)
/* for Each */
// products.forEach(price => console.log(price.id))

/* filter */
// const expensive = products.filter(p => p.price < 50000)
// const expensive = products.filter(p => p.price > 50000)
// console.log(expensive);


/* find  */
const afordable = products.find(p => p.price < 50000)
// console.log(afordable);

/* reduce */
const total = products.reduce((afor, current)=> afor + current.price,0)
console.log(total);






























