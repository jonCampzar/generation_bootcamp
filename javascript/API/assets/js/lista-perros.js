const url ="https://dog.ceo/api/breeds/list/all";
const lista = document.querySelector('ul')
//primero traemos el padre
fetch(url).then(respuesta => respuesta.json()).then(datos =>{
    console.log(datos.message.terrier);

    const arregloTerriers = datos.message.terrier;
    console.log(arregloTerriers);
    arregloTerriers.forEach((tipoTerrier) =>{
        console.log(tipoTerrier);

        const template =`<li class="list-group-item">${tipoTerrier}</li>`
        lista.innerHTML += template;


    })
})
//de esta forma podemos entrar al arreglo