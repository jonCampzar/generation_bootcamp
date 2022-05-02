const $padre = document.querySelector('.padre');
/* 
#llamar id
. llamar clase
mandamos traer el elemento
*/

/* aqui estamos creando un elemento */
/*dntro de los parentesis va la etiqueta que queremos crear*/
const $parr = document.createElement('p');

/* agregamos algo a la variable que creamos */
/* la formas mas apropiada */
$parr.textContent = 'Lorem ipsum';
$parr.textContent += 'Lorem ipsum';
$parr.textContent += 'Lorem ipsum';

/* primero selecionamos donde queremos agregar */

$padre.appendChild($parr);

/* agregar elementos de inner */

//forma más sencilla de agregar algo sin modificar la etiqueta donde se contiene
const $cuadro = document.querySelector('.cuadro');
$cuadro.innerHTML = ''; //inicializar eñ contenido del elemento

$cuadro.innerHTML =`
                    <a href="#">Este es un enlace</a>
                    
                    <ol>
                        <li>Elemento 1</li>
                        <li>Elemento 2</li>
                        <li>Elemento 3</li>
                    </ol>
                    `;
/* lo que esta arriba lo agregamos a un elemento padre y lo de abajo al body */

const estaciones = ['Primavera','Verano','Otoño','Invierno'];
/* asi agregamos a algo que creamos algo que ya estaba creado */
const $lista = document.createElement('ul');
//para cada elemento se usa el foreach
estaciones.forEach(elemento =>{
    const $li = document.createElement('li');
    $li.textContent = elemento;
    $lista.appendChild($li);
});

$cuadro.appendChild($lista);
/* document.body.appendChild($lista); */
//////////////////////////////////////

//de esta forma agragemos y concatenamos a la lista de forma mas sencilla que arriba
const continentes = ['Africa','America','Asia','Europa','Oceania'];
const $ol = document.createElement('ol');
$cuadro.appendChild($ol);
continentes.forEach(continente=>{$ol.innerHTML += `<li>${continente}</li>`});