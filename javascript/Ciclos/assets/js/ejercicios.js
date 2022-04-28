//escribe un ciclo anidado que imprima el siguiente patrón.
/*
*  
 * *  
 * * *  
 * * * *  
 * * * * *

*/

//ciclo anidado es un ciclo dentro de un ciclo

/* for (let i = 1; i <= 5 ; i++) { //en la primera vuelta del ciclo padre, el hijo da 5 cueltas
    for (let j = 1; j <= i; j++) {
        document.write('*');
        
        /* console.log('ciclo hijo\n'); */
/*     }
    document.write('<br>');
} */


/* Ejercicio 1 */

//Escribe un loop que haga lo siguiente:

//Repetidamente imprime el valor de la variable xValue, disminuyendo por 0.5 su valor cada iteración.
//El ciclo se mantendrá mientras que el valor de xValue sea positivo.

for (let xValue = 5; xValue >= 0 ; xValue-=0.5) {
    console.log('El decremento es',xValue);
}

console.log('*******************');
/* Ejercicio 2 */
//Imprime todos los números impares entre 1 y 100
const impar = (n) =>{

    for (let j = 1; j < n ; j++){
    if ((j%2 ===0 )){     
    }else{
      console.log(`${j} es impar`);
    }
    }
}
impar(100);

console.log('***************');
/*Escribe un ciclo while que imprima de 1 a n dentro de corchetes cuadrados
//Por ejemplo: si n = 6 imprime [1] [2] [3] [4] [5] [6] */

let control = 1;
let n = 6;
while(control <= n ) { //condicion a observar
    console.log([control]);
    control++;  //modificador de la variable de control
    
}
console.log('*************');
/* Ejercicio 4 */
//Escribe un ciclo que calcule la suma de los numeros positivos entre 1 y n
//ejemplo: n = 5 sum = 15     
//por que (1 + 2 + 3 + 4 +5 )

let num = 6;
let suma =0;

for (let i = 1; i <= num; i++){
        suma= suma+i;
}
console.log(suma);