/* Crea un archivo ejercicios.js        


1- Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

2- Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

3- Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

4- Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

function palindromo(palabra){
   let check= palabra.split("").reverse().join("");
   if(palabra === check){
       return true;
   }else{
       return false;
   } 
}
console.log(palindromo('salas'));

console.log("************");

function repetir(word,numeroDeVeces){
    let palabraRep = word.repeat(numeroDeVeces).split("").join("");
    return  palabraRep;
}
console.log(repetir("Hola Mundo ",3));

console.log("************");

function cortar(cadena,numeros){
    let cadenaCor= cadena.substring(0,numeros);
    return cadenaCor;
}
console.log(cortar("Hola Mundo",8));
console.log("************");

