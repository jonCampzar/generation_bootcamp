/* Algunas cosas que podemos hacer con DOM */

console.log(window.document); /* manda llamar todo el documento*/
console.log(document); /* el documento sin poner window */
console.log(document.head); /*manda llamar el head */
console.log(document.body); /* el body */
console.log(document.documentElement); /* mandamos llamar todo el html */
console.log(document.doctype);
console.log(document.charset);
console.log(document.links);
console.log(document.images);
console.log(document.styleSheets); /* regresar las hojas de estilos */
console.log(document.scripts); /* regresa las etiquetas script */
setTimeout(()=> {  /* ejecutar una accion despues de 3s, aparece lo que estoy seleccionando */
console.log(document.getSelection().toString());
}, 3000); /* getselection() esto ya es un metodo y todo lo anterior son propiedades */

document.write("Hola Mundo desde document write"); /* inserta dentro del body del documento al final */
document.write("<h2>Hola Mundo desde document write</h2>"); /* lo detecta como un h2 al final pero es una mala practica */











