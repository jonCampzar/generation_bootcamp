//test unitario nos permite realizar pruebas a bloques de codigo

const suma = (a,b)=>{
    return a - b;

}

/* console.log((suma(1,3) === 4));
console.log((suma(0,0) === 0));
console.log((suma(5,5) === 10));
 */
const arr = [
    {a:1, b:3, resultado: 4},
    {a:0, b:0, resultado: 0},
    {a:5, b:5, resultado: 10},
    {a:10, b:30, resultado: 40},
]

arr.forEach(prueba =>{
    const { a,b, resultado} = prueba; //destructuracion

    console.assert(suma(a,b) === resultado, `Suma de ${a} y ${b} deberia ser ${resultado}`);
}) //recorre todo el arreglo para ver donde esta el error


/* console.assert('comparacion','mensaje de que no este bien'); */
//si esta bien no muestra nada en pantalla

/* console.assert(suma(1,3) === 4,'El resultado de la suma de 1+3 deberia ser 4');
 */