const idInfo = window.location.href.split("=").pop()

const imagenPortada =document.getElementById('imagenPortada')
const informacionAnime = document.getElementById('informacionAnime')

const urlId = `https://api.jikan.moe/v4/anime/${idInfo}
`

fetch(urlId).then(resp => resp.json()).then(datos =>{
   /*  console.log(datos.data); */

    const datosNecesarios ={
        id: datos.data.mal_id,
        imagen: datos.data.images.jpg.large_image_url,
        sinopsis: datos.data.synopsis,
        nombre: datos.data.title

    }

    const templateImg = `    <img src="${datosNecesarios.imagen}" alt="" class="img-fluid">`
    imagenPortada.innerHTML = templateImg
    /* console.log(datosNecesarios); */


    const templateInfo= `
    <h1>${datosNecesarios.nombre}</h1>
                <p>${datosNecesarios.sinopsis}</p>
                <div class="favorito">
                    <button type="button" class="btn btn-dark" id="AgregarFavoritos">Agregar a favorito</button>

                </div>`

    informacionAnime.innerHTML = templateInfo


    const AgregarFavoritos = document.getElementById('AgregarFavoritos')
    /* console.log(AgregarFavoritos); */
    AgregarFavoritos.addEventListener('click',() =>{
        /* console.log("agregado"); */

        const datos = {
            id: datosNecesarios.id,
            nombre: datosNecesarios.nombre,
            imagen: datosNecesarios.imagen
        }

        if(localStorage.getItem('favoritos')){
            console.log("existe");
            const favoritos = JSON.parse(localStorage.getItem("favoritos"))
            favoritos.push(datos)
            localStorage.setItem('favoritos',JSON.stringify(favoritos))


        }else{

            console.log("no exite");
            const favoritos = []
            favoritos.push(datos)
            localStorage.setItem('favoritos',JSON.stringify(favoritos))

        }

      

       
        
        
    })

})

