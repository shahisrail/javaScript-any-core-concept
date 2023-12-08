// array vs object 
var shoppingCart = {
    books: 34,
    pen: 22,
    mouse: 23,
    Keyboard: 2
}

const keys = Object.keys(shoppingCart)
console.log(keys);

const values = Object.values(shoppingCart)
console.log(values);

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i]
    var propertyvalues = shoppingCart[propertyName]
    // console.log(propertyName,propertyvalues);
}

// for in loop
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName]
    console.log(propertyName, value);
}












