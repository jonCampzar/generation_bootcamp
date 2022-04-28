/* Ciclos */

//for
//for ...in
//.forEach
// Hacer tareas repetitivas

//Imprimir la frase "Hola Mundo" 10 veces
//Inicializamos la variable; condicion; modificador del contador)

/* for( let i=0; i<=10; i++){
    console.log("Hola Mundo", i); //le concatenamos la variable con (,i)

} */
// Iteracion = una vuelta de cada ciclo

// while donde no tenemos control sobre las iteraciones, 1. primero se inicializa una variable, condicion a observar y despues lo que querramos que se ejecute y despues el modificador de la variable de control 
/* let control = 1;

while (control <=5) { //condicion a observar
    console.log("Hola desde un ciclo while",control);
    control++;  //modificador de la variable de control

}
console.log(control); */

// do ... while primero ejecuta y despues evalua, por lo tanto se ejecuta por lo menos 1 vez
let i = 6;

do {
    console.log('Hola desde un do...while',i);
    i++;  
    
} while (i <= 5);