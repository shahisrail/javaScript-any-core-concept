const players = [65, 55, 67, 87, 43, 56, 90, 70]
// const sekected = players.filter(p => p > 80);
// const sekected = players.filter(p => p > 90);
// const sekected = players.filter(p => p > 40);
const sekected = players.filter(p => p % 2=== 0);
// console.log(sekected
// );

const playersName = ['shakib', 'Tamim', 'mus', 'lit']
const selected = playersName.filter(p => p.length>= 4) 
// const selected = playersName.filter(p => p.length>= 20) 
console.log(selected);