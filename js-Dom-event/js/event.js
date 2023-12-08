console.log('this dom event');
// optoin 2: add onclick functoin

function makeRed() {
    document.body.style.backgroundColor = 'red'
}

// optoin 3
const makeblueButton = document.getElementById('make-blue')
makeblueButton.onclick = makeBlue
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}