/* este es un nodo de comentario */
const $titulo = document.querySelector('h1');
const $parr = document.querySelector('p');
const $card = document.querySelector('.card');

console.log($parr.nodeName);
console.log($titulo.nodeName);
//nodename nos permite mostrar el nombre del nodo

//text content nos mostrara el texto y tambien puede sobrescribirlo con el =, no cambia la etiqueta solo el contenido

$parr.textContent += "Hola Mundo";
console.log($parr.textContent);

$titulo.textContent = 'Modificando elementos con JavaScript';
//innertext mejor no usarla


//innerHTML reemplaza lo que hay dentro del elemento selecionado

console.log($parr.innerHTML);
$parr.innerHTML = '<a href="#">Este es un enlace</a>';

//outerHTML reemplaza todo, incluido el elemento que seleccionamos
/* $parr.outerHTML = '<a href="#">Este es un enlace</a>'; */

//crear elementos de html

console.log(document);
function crearElemento(){
    const img = document.createElement('img');
    img.src = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU";
    //appendChild es para hacer uso de los elemntos como hijo que creamos, une donde nosotros queremos que lo haga
    $card.appendChild(img);
}
crearElemento(); //mandar llamar elemento
