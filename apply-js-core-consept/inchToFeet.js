// const myInches = 70;
// const myFeet = myInches / 12;
// console.log( 'myFeet',myFeet);


// const dadaInch =  240;
// const dadaFeet = dadaInch / 12;
// console.log('dada feet', dadaFeet);

// uses functoin 
// function inchToFeet  (inches){
//     const   feet = inches / 12;
//     return feet;
// }

// const dadaInch = 240;
// const dadaFeet = inchToFeet(dadaInch)
// console.log(dadaFeet);  


// const nanaInch = 150;
// const nanaFeet = inchToFeet(nanaInch)
// console.log(nanaFeet);


function inchToFeet (inches){
 const feet = inches / 12
 return feet;
}
const playerInch = inchToFeet(84)
// console.log(playerInch);


// metters to kilometers

function metersTokilometers(kilomeaters){
    const run = kilomeaters /1000
    return run;

}
const theMan = metersTokilometers(500)
// console.log(theMan);


// kilograms to pound
function kilogramsToPound (pound){
    const countPound = pound /2.20462
    return countPound
}
const poundDeclaratoin = kilogramsToPound(10)
// console.log(poundDeclaratoin);  


//  miles to kilometer
function milesToKilometear(kimiters){
    const miles = kimiters * 1.609
    return miles
}
const countMiles = milesToKilometear(5)
console.log(countMiles);