const url = "https://api.thecatapi.com/v1/images/search"
const $imagen = document.getElementById('cat');
const $btn= document.getElementById('boton');

//hacemos una peticion fetch y devuelve una promesa

$btn.addEventListener('click', () =>{
fetch(url).then(respuesta => respuesta.json()).then(datos =>{
  
  console.log(datos[0].url);
  $imagen.src = datos[0].url

})
})


    
