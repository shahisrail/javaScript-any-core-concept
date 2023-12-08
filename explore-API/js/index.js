function loadExtra() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(exta => disply2(exta))
}
function disply2(exta){
  const ul = document.getElementById('user-list')
  for (const user of exta) {
    const li = document.createElement('li')
    li.innerText = user.name
    ul.appendChild(li)
  }
}