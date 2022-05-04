const URL = 'https://jsonplaceholder.typicode.com/albums/1/photos'
const containerCard = document.querySelector('#cards')

fetch(URL).then(r => r.json()).then(d => {
  console.log(d)
  d.forEach(data => {
    const card = `<div class="col mb-4">
    <div class="card">
      <img src=${data.url} class="card-img-top" alt="">
      <div class="card-body">
        <p class="card-text">${data.title}</p>
      </div>
    </div>
  </div>`
    containerCard.innerHTML += card
  })
})

//de esta forma podemos entrar al arreglo