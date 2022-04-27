/* Nivel 1 */

/* const anioNacimiento = parseInt(prompt('Escribe tu año de nacimiento: ')); 
const anioActual = 2022
console.log(anioNacimiento);

console.log(`Tienes ${anioActual-anioNacimiento} años`); */

/* Nivel 2 mandar traer lo del input al js con el id */

/* Opcion 1 */

/* function calcularEdad(){
    const anioNacimiento = parseInt(document.getElementById("anio").value);
    console.log(anioNacimiento);
    const anioActual = 2022;
    console.log(`Tienes ${anioActual-anioNacimiento} años`);  
} */

/* Opcion 2 */

/* const boton = document.getElementById("calcular");
console.log(boton);

boton.addEventListener('click', ()=> {
    const anioNacimiento = parseInt(document.getElementById("anio").value);
    console.log(anioNacimiento);
    const anioActual = 2022;
    console.log(`Tienes ${anioActual-anioNacimiento} años`); 
} ); */

/* Nivel 3 */

const fecha = new Date();
const anioActual = fecha.getFullYear();
console.log(anioActual);

const mesActual = fecha.getMonth()+ 1;
console.log(mesActual);

const diaActual = fecha.getDate();
console.log(diaActual);

/* este es un objeto tipo fecha */

/* const anioActual = 2022
const mesActual = 4
const diaActual = 27 */


function mostrarDatos(){

    const nacimiento = document.getElementById("anio").value;
    console.log(nacimiento);
    const nacimDiv = nacimiento.split("-"); /* "-" para que empiece a dividir a partir del guion */
    console.log(nacimDiv);
    const anioNac= parseInt(nacimDiv[0]);
    const mesNac= parseInt(nacimDiv[1]);
    const diaNac= parseInt(nacimDiv[2]);
    console.log(anioNac,mesNac,diaNac);

    if(mesNac <= mesActual && diaNac <= diaActual ){
        console.log(`Tienes ${anioActual-anioNac} años`)

    }else{
        console.log(`Tienes ${anioActual-anioNac-1} años`)
    }

}










