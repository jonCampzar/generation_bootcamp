const url = "https://dog.ceo/api/breeds/image/random";
const $imagen = document.getElementById('imagenPerro');
const $imagen2 = document.getElementById('imagenPerro2');
//hacemos una peticion fetch y devuelve una promesa
fetch(url).then(respuesta => respuesta.json()).then(datos =>{
  /* console.log(datos);  */
  $imagen.src = datos.message
})

//se crea una funcion asincrona y se recibe la informacion despues de esperar y despues de recibir la informacion debemos transformarla en json

async function obtenerPerro(){
    const infoPerro = await fetch(url);
    

    const perrito = await infoPerro.json()
    console.log(perrito);
    $imagen2.src = perrito.message
}


