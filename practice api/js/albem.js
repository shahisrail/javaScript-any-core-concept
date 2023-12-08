function album() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(rec => rec.json())
    .then(data => albumcollect(data))
  // .then(data => console.log(data))
}
function albumcollect(data) {
  const albumdocumnt = document.getElementById('alvum-contaier')
  for (const user of data) {
    const div = document.createElement('div')
    console.log(user);
    div.innerHTML = `
    <h3>id:${user.id}</h3>
    <h4>title: ${user.title}</h4>
    <h4>userId: ${user.userId}</h4>
    `
    albumdocumnt.appendChild(div)
  }
}
album()
