const nombre = "Jonatan";
const nombre2 = new String("Eder");

console.log(nombre);
console.log(nombre2);

/* Forma antigua de declarar un objeto */
const persona = new Object();
persona.edad = "23";
persona.nombre = "Jonatan";
persona.apellidos = "Campos";
console.log(persona);

const nuevaPersona = {
    /* Atributos o propiedades */
    nombreCompleto: {
        nombre: "Jonatan",
        apellido: "Campos"
    },
    edad: 29,
    pasatiempos: ["correr","ejercicio","ver peliculas"],
    tieneTrabajo: true,
    /* Cuando una funcion esta dentro del objeto es un metodo del objeto ()*/
    saludar: function(){
        console.log("Hola");
    },
    sumar: function(n1,n2){
        console.log(`El resultado de la suma es ${n1+n2}`);
    }
}
"Hola".length /* atributo o propiedad */
"Hola".toLowerCase(); /* Método */

console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.pasatiempos[1]);
nuevaPersona.saludar();
nuevaPersona.sumar(5,10);
/* para cambiar el valor */
nuevaPersona.edad = 10;
console.log(nuevaPersona);
/* agregar nuevo atributo */
nuevaPersona.colorFavorito = "Azul"
console.log(nuevaPersona.colorFavorito);

/* metodos que tiene el objeto propios */
console.log(nuevaPersona.hasOwnProperty("edad"));

/* nos muestran todas las keys o atributos */
console.log(Object.keys(nuevaPersona));
/* nos muestran todas los valores de los atributos*/
console.log(Object.values(nuevaPersona));


