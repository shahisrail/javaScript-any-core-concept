const placeslist = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'coxBazar'
placeslist.appendChild(li)
console.log(placeslist.innerText);

// const li = document.createElementNS('li');
// li.innerText='coxBazar'
// li.innerText='sent martin'
// placeslist.append(li)
// console.log(placeslist.innerText);

// where to add
const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1')
h1.innerText =  'my food list'
section.appendChild(h1)

const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'biriany'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'borhani'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'salad'
ul.appendChild(li3)

const li4 = document.createElement('li')
li4.innerText = 'cook'
ul.appendChild(li4)

section.appendChild(ul)


mainContainer.appendChild(section)


// set inner HTML directly
const sectoinDrasse = document.createElement('section');
sectoinDrasse.innerHTML = `
  <h1>My drase lsit </h1>
  <ul> 
   <li> T-shirt</li>
   <li> lungi</li>
   <li> pant </li>
   <li> shoes</li>
  </ul>

`
mainContainer.appendChild(sectoinDrasse)