const busquedaInf = window.location.href.split("=").pop()
console.log(busquedaInf);
const busquedaAnimes = document.getElementById('busquedaAnimes')

const urlBusqueda =`https://api.jikan.moe/v4/anime?q=${busquedaInf}&order_by=popularity`
fetch(urlBusqueda).then(resp => resp.json()).then(datos =>{
    /* console.log(datos); */
    const resultados = datos.data
    resultados.forEach(resultado =>{
        

        const datosNecesarios = {
            nombre: resultado.title,
            imagen: resultado.images.jpg.image_url,
            
        }
        /* console.log(resultados); */
        const template = `<div class="col mb-4">
    <div class="card">
      <img src="${datosNecesarios.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${datosNecesarios.nombre}</h5>
       
      </div>
    </div>
  </div>`
  busquedaAnimes.innerHTML += template
    })
    
    

})