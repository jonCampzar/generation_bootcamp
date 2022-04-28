const $card = document.querySelector('.card');
const $form = document.querySelector('form');

$form.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )
        /* console.log(datos.url); */
    crearElemento(datos.url, datos.texto); //estamos pidiendo los datos del url y el texto
    $form.reset();

});


function crearElemento(url,texto){
    const img = document.createElement('img');
    const txt = document.createElement('figcaption');
    img.src = url;
    img.alt = texto;
    txt.textContent = texto;
    //appendChild es para hacer uso de los elemntos como hijo que creamos, une donde nosotros queremos que lo haga
    $card.appendChild(img);
    $card.appendChild(txt);
}
