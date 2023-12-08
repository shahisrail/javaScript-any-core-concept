// function add(num1, num2) {
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result
// }
// const sum =  add(5,7) /*  correct  */
// const sum =  add(5,) /*  One value undefiend and result nan */
// const sum =  add(,7) /*  defult eror SyntaxError: Unexpected token ',' */
// const sum = add() /* undefined undefined NaN */



/*  defult --> if value ins not provide , take this as a defult */

// proivide for number
// function add(num1 = 0, num2 = 1) {
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result
// }
// const sum = add(1, 2)

// provide for object
// function fullname(first = ' ami ', last = 'israil2') {
//     const full = first + '' + last;
//     return full;
// }

// const fullname = (first = 'ami',last = 'israil') => first + ' ' +last;
// console.log(fullname());



// const nam = fullname('shah', 'israil');
// const nam = fullname( 'israil');
// const nam = fullname('shah');
// const nam = fullname();
// console.log(nam);

//
/* normal fuctoin */
// function friends(names = []) {
//     console.log(names);
// }
// friends ([])

/*arrow functoin */
const friend =(names = []) => {
    console.log(['shah'])
}
friend()

/*normal functoin  */
// function person(human = {}) {
//     console.log(human);
// }
// person({ name: 'shah' })


/*  aroow functoin  */
const per = (human) => {
    console.log({name:'shah'});
}
per()

// const friends =(names = []) => {
//     names.push('John');
//     console.log('Friends:', names);
// }

// }
// friends(['Alice', 'Bob']);
// friends([]);

// provide for object
// function person(human = {}) {
//     human.name = 'Alice';
//     // human.name ='Alice';
//     console.log('Person:', human);
// }

// person({ age: 30 });
// // person({ age: 30 });
// person({});



// const Num = (a = 0, b = 0) => a + b;
// console.log(Num());
// console.log(Num(2));
// console.log(Num(10,undefined));
// console.log(Num(20,20));