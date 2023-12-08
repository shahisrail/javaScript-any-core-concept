function comment() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(rec => rec.json())
    .then(data => postComment(data))
    // .then(data => console.log(data))
}

function postComment(data) {
  const userComment = document.getElementById('commnts-id')
  for (const user of data) {
    const div = document.createElement('div')
    console.log(user);
    div.classList.add('user')
    div.innerHTML = `
      <h3>body:${user.body}</h3>
      <h3>email:${user.email}</h3>
      <h3>id:${user.id}</h3>
      <h3>name:${user.name}</h3>
      <h3>postId:${user.postId}</h3>
    `
    userComment.appendChild(div)
  }
}
comment()
