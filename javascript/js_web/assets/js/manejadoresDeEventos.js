/* para un evento global se pone window o mejor no solo addEventListener, que carga el documento y al terminar de cargar se ejecuta el alert */
addEventListener('load', function(){
    this.alert('Se ha terminado de cargar la pagina');
});







function saludar(){
    alert('Hola');
}

/* manejador de eventos semanticos */
const $botonSementico = document.getElementById('evento-semantico');

$botonSementico.onclick = saludar; /* no lleva parentesis */

$botonSementico.onclick = function(evento){
    console.log(evento.target); /* para saber lo que esta pasando y donde, los manejadores semanticos solo dejan usar una funcion */
}
/* manejador de evento multiple podemos darle varios*/

const $botonMultiple = document.getElementById('evento-multiple');

$botonMultiple.addEventListener('click', saludarMultiple);

$botonMultiple.addEventListener('click', function(e){
console.log(e.target);
}
);


function saludarMultiple(){
    alert('Hola desde manejador multiple');
}

