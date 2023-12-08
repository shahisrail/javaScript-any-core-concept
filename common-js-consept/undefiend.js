/* 8 ways to get undefiend 
1.variable that is not initialize will give undefiend
2.functoin with no return
3.parameter that is not passed will be undefiend
4. if return has nothing on the right side will return undefiend
5.property that dosen't exisist on an object will give you undefiend 
6.accessing array elemnts outside of the index range  will give you undefiend         
*/

// let first;
// console.log(first);

let p = 'Javascript';
let q = p;
p = 'React';
console.log(q);
const isTrue = true;
console.log(!isTrue ? "hello" : "world")

const sum = (p, q) => {
  p + q;
}
const result = sum(2, 3);
console.log(result);

if ("2" === 2) {
  console.log("Inside if");
} else {
  console.log("Inside else");
}

function work(x, y = 4) {
  return x + y;
}
console.log(work(32))
