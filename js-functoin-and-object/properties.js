// var shoppingCart = {
//     bags: 2,
//     pen: 3,
//     books: 4,
//     mouse: 1,
//     keybord: 3

// }

// // // when you know the spesific  property name , use dot notatoin to get the property value
// // var pentcount = shoppingCart.pen
// // console.log(pentcount);
// // console.log(shoppingCart);
// // //  when you know the spesific property name , use dot notatoin to get the property value
// // var pentcount2  = shoppingCart['pen']
// // console.log(pentcount2);


// // // haw to see all propertys keys
// // var propertys = Object.keys(shoppingCart)
// // console.log(propertys);

// // //  how to see all property values
// // var value = Object.values(shoppingCart)
// // console.log(value);



// // // naother system propeerty values
// // var propertyName =  'mouse';
// // var propertyvalue = shoppingCart[propertyName]
// // console.log(propertyvalue);


// // // set property  values three system
// // console.log(shoppingCart);
// // shoppingCart.mouse=12;
// // console.log(shoppingCart);
// // shoppingCart['mouse'] = 230;
// // console.log(shoppingCart);
// // shoppingCart[propertyName] = 45
// // console.log(shoppingCart);

// // shoppingCart.books=34;
// // console.log(shoppingCart);
// // shoppingCart['books'] = 52;
// // console.log(shoppingCart);
// // var propertyName2 = 'books'
// // var propertyvalue2 = shoppingCart[propertyName2]
// // // shoppingCart[propertyName2]= 102;
// // // console.log(shoppingCart); 

// // // let value2 = Object.values(shoppingCart)
// // // console.log(value2);
// // // let key = Object.keys(shoppingCart) 
// // // console.log(key);



// // /*provlem solving */

// // /*  Write a function called make_avg() which will take an three
// //  integers and return the average of those values */

// // function make_avg(a, b, c) {
// //     let avg = (a + b + c);
// //     console.log(avg);
// //     let sum = avg / 3
// //     console.log(sum);
// // }
// // const result = make_avg(10, 30, 30)
// // console.log(result);



// // /* Write a function called make_avg() which will take an array of integers and the 
// // size of that array and return the average of those values. */

// // function make_avg(array, size) {
// //     if (size <= 0) {
// //         return 0; // Avoid division by zero
// //     }

// //     let sum = 0;
// //     for (let i = 0; i < size; i++) {
// //         sum += array[i];
// //     }

// //     const average = sum / size;
// //     return average;
// // }

// // // Example usage
// // const values = [10, 20, 30, 40, 50];
// // const arraySize = values.length;
// // const averageValue = make_avg(values, arraySize);
// // console.log(`The average is: ${averageValue}`);


// // /* Write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output. */
// // function foo() {
// //     console.log('foo');
// //     bar()
// // }
// // function bar() {
// //     console.log('bar');
// // }
// // foo();


// /* ) Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways: Has return + Has parameter •No return + Has parameter */

// /* Has return value + Has parameter: */
// // function odd_even(number) {
// //     if (number % 2 === 0) {
// //       return "Even";
// //     } else {
// //       return "Odd";
// //     }
// //   }
  
// //   // Example usage
// //   const number = 8;
// //   const result = odd_even(number);
// //  console.log(result);



// /* No return value + Has parameter:  */
//  function odd_even_no_return(number2) {
//     if (number2 % 2 === 0) {
//       console.log("Even");
//     } else {
//       console.log("Odd");
//     }
//   }
  
//   // Example usage
//   const number2 = 8;
//   odd_even_no_return(number2);
  

//   /* Has return value + Has parameter (using ternary operator): */
//   function odd_even_with_return_ternary(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
//   }
  
//   // Example usage
//   const number = 7;
//   const result = odd_even_with_return_ternary(number);
//   console.log(`The number is: ${result}`);

//   /* No return value + Has parameter (using ternary operator): */
//   function odd_even_no_return_ternary(number) {
//     console.log(number % 2 === 0 ? "Even" : "Odd");
//   }
  
//   // Example usage
//   const number = 7;
//   odd_even_no_return_ternary(number);
 