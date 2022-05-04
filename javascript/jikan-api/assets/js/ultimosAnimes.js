
const urlUltimos = "https://api.jikan.moe/v4/seasons/now";
const ultimosAnimes = document.getElementById('ultimosAnimes')

fetch(urlUltimos).then(resp => resp.json()).then(datos =>{
    /* console.log(datos.data); */

    const arregloAnimeUltimos = datos.data.slice(0,24);
    console.log(arregloAnimeUltimos);
    arregloAnimeUltimos.forEach((anime) =>{
        console.log(anime); 

        const datosNecesarios = {
            nombre: anime.title ,
            imagen: anime.images.jpg.image_url,
            id: anime.mal_id,
            sinopsis: anime.synopsis,
        }

        const template = `<div class="col mb-4">
        <div class="card">
          <img src="${datosNecesarios.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${datosNecesarios.nombre}</h5>
           
          </div>
        </div>
      </div>`

       ultimosAnimes.innerHTML += template;

        /* console.log(datosNecesarios); */
    })
})