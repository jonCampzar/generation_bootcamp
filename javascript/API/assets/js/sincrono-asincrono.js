//es no bloqueante, ejecuta algo despues de cierto tiempo

/* let tiempo = 5000;
let datos

setTimeout(() => {
    let datos = "Jonatan"
    console.log(datos);
},tiempo)

console.log(datos);

console.log("Hola"); */

const datos =[
    {
        nombre: "Jonatan",
        edad: 23,

    },
    {
        nombre: "Luis",
        edad: 32,

    },
    {
        nombre: "Saul",
        edad: 18,

    },


]

//las promesas en caso de que sean resultas hara lo siguiente, despues de ser resultas pasa al then

function obtenerDatos(){
    
    
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
               resolve(datos) 
            }, 3000);

        }

        )
   
}

obtenerDatos().then((datos) =>{
    console.log(datos);
}) 

async function obtenerDatosAsync (){
    const datosObtenidos = await obtenerDatos();
    console.log(datosObtenidos);
}
obtenerDatosAsync()
