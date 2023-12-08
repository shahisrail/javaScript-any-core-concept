function photos() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(rec => rec.json())
    .then(data => dataload(data))
}
function dataload(data) {
  const photo = document.getElementById('photos-container')
  for (const user of data) {
    const div = document.createElement('div')
    div.innerHTML = `
      <h3>albumId:${user.albumId}</h3>
      <h4>id:${user.id}</h4>
      <h4>thumbnailUrl:${user.thumbnailUrl}</h4>
      <h4>title:${user.title}</h4>
      <h4>url:${user.url}</h4>
    `
    photo.appendChild(div)
    
    console.log(user);
  }
}
// photos()