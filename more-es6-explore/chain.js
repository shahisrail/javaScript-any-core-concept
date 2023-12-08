// data accsec
const data = [{ id: 1, name: 'israil', address: 'shylet' }];
console.log(data[0].address); 6774134

const products = {
  count: 5000,
  data: [
    {
      id: 1,
      name: 'lenovo laptop',
      price: 65000
    },
    {
      id: 2,
      name: 'mackbook',
      price: 150000
    }
  ]

}

// seceond product price

console.log(products.data[1].price);

const user = {
  id: 1,
  name: 'shoriful raj',
  address: {
    street: {
      first: '54/1 uttora',
      seceond:'102/3 dokkkin '
    },
    city:'dahaka'
  }
}
const user2={
  id: 5002,
  name: 'pori bibir majar',
  address:{
    city: 'chittagong',
    country: 'Bangladesh'
  }
}
console.log(user.address.street?.seceond);
console.log(user2.address.street?.seceond);