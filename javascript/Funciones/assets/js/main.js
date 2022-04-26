
/* Funciones , nos permiten reutilizar código */

function saludar(nombre ="Panchito", apellido=""){
    
 /*    console.log(`Hola mi nombre es:${nombre?"Jonatan":"Desconocido"}`); */ /* templates strings o plantillas literales nos permiten concatenar string, reconoce saltos de linea e incluso podemos adecuarlo a un codigo que se ajustara en automatico como un if*/
/*     console.log("Hola mi nombre es:", nombre,apellido); */
    /* string normal */
    return ` Mi nombre es: ${nombre} ${apellido}`; /* regresará el valor pero no le decimos que hacer */

}
saludar("Pedro", "Pérez"); /* ya hay un log dentro de la funcion, solo la invocamos, esto es la llamada o la invocacion de la funcion */
let funcionSaludar = saludar('Felipe', 'Maqueda')
/* console.log(funcionSaludar); */
/* aqui se guarda el return que se manda llamar*/
/* console.log(saludar('Alberto', 'Hernandez').toUpperCase()); */

/* document.write('<h1>Este es un h1</h1>');
console.log('<h1>Este es un h1</h1>');
console.log(`<h1>Este es un h1</h1>`); */ //plantilla literal//


/* console.log(funcionSaludar.toLowerCase()); */

/* Funcion declarada SE PUEDE EJECUTAR INCLUSIVE AUNQUE NO ESTE ABAJO DE LA FUNCION O QUE SE INICIALICE, LA PODEMOS MANDAR DESDE CUALQUIER PARTE DEL DOCUMENTO*/
console.log(suma(10,20));
function suma(a,b){
    return a + b;
} /* HOISTING CORTA LA FUNCION Y LA PONE ANTES DE LLAMARLA */


/* Funciones expresadas o funcion expresion, funcion anonima de las mas usadas, ESTO NO PERMITE TOMAR EL CUERPO DE LA FUNCION ANTES DE INICIALIZARLA*/

const resta = function(a,b){
return a - b;
}
console.log(resta(30,10));

/* setTimeout(()=>{
},3000); ESTO ES UN CALLBACK */

/* FUNCION FLECHA mas usada, no se puede llamar antes*/

/* const multiplicacion = (a,b) =>{
return a*b;
} */
const multiplicacion = (a,b) => a*b;
//tambien se puede utilizar esto en una linea
console.log(multiplicacion(40,5));


