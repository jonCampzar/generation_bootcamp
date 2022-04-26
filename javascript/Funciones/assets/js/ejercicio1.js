function invertirPalabra(palabra){
    return palabra.split("").reverse().join("");
   
}
console.log(invertirPalabra("Hola mundo"));


/* split separa en un array y reverse lo acomoda de forma inversa y join une los elementos de un arreglo y lo devuelve como un string */

/* otra forma */
const invertir = (palabra = "") =>{ /* se le asigna el valor vacio para que no de error undefined */
    if(palabra.length <=1)return console.warn('No ingresaste texto'); /* para hacer una advertencia si la persona no inserto nada, se puede escribir en una sola linea el if y el return no permitira que el avance en su ejecucion */

    if(typeof(palabra) !== 'string') return console.error('El valor ingresado no es una palabra'); /* sino agrego texto y numero puedo hacer esta advertencia del error */

    let arreglo = palabra.split(""); /* para que conserve todas las letras */
    let reverso = arreglo.reverse();
    let unir = reverso.join("");
    
    return console.log(unir);
}

invertir('Hola Mundo');