const Jonatan = {
    nombreCompleto: {
        nombre: "Eder",
        apellido: "Campos"
    },
    edad: 28,
    pasatiempos: ["correr","musica","cine"],
}
const Andrea = {
    nombreCompleto: {
        nombre: "Julia",
        apellido: "Perez"
    },
    edad: 21,
    pasatiempos: ["caminar","musica","motos"],
}
const Adolfo = {
    nombreCompleto: {
        nombre: "Mario",
        apellido: "Torres"
    },
    edad: 23,
    pasatiempos: ["barras","box","coches"],
}
const Carlos = {
    nombreCompleto: {
        nombre: "Ulises",
        apellido: "Martinez"
    },
    edad: 26,
    pasatiempos: ["caminar","comida","perros"],
}



const cohorte12 = [Jonatan,Andrea,Adolfo,Carlos];
console.log(cohorte12);

/* para saber si hay coincidencias y arroja en consola el nombre de esa persona */
for(let i=0; i<cohorte12.length; i++){
    if(cohorte12[i].pasatiempos.includes("musica")){
        console.log(cohorte12[i].nombreCompleto.nombre);
    }
;
}
/* includes compara y arroja un true si hay mas parametros iguales */
