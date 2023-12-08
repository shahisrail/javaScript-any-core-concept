function post() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(rec => rec.json())
    .then(data => posts(data))
}

/**
 * 1.get the container elemnet where you want to add the new elements
 * 2.creat child element
 * 3.set iner text or inner html
 * 4.and appen child parent
*/

function posts(data) {
  const postContainer = document.getElementById('post-container')
  for (const pos of data) {
    const div = document.createElement('div')
    div.classList.add('pos')
    // console.log(pos);
    div.innerHTML = `
      <h3> user-${pos.userId}</h3>
      <h3> id-${pos.id}</h3>
      <h4>post-titale: ${pos.title}</h4>
      <p>post-body:-${pos.body
      }</p>
      <p>post-id${pos.id}</p>
      <p>post-title:-${pos.title}</p>
      <p>post-userId:-${pos.userId}</p>

    `
    postContainer.appendChild(div)

  }
}
post()


const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name); 
