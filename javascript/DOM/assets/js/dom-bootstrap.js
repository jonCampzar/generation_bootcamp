const db = [
  {
    url: "https://placeimg.com/200/200/animals",
    title: "Animales",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/tech",
    title: "Tecnologia",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/people",
    title: "Personas",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/nature",
    title: "Naturaleza",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/arch",
    title: "Arquitectura",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/arch",
    title: "Arquitectura",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
];

/* console.log(db[0].url);
 */
const $cards = document.getElementById("cards");
$cards.innerHTML = '';

db.forEach((objeto) => {
  $cards.innerHTML += `
    <div class="col mb-4">
    <div class="card">
      <img src="${objeto.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${objeto.title}</h5>
        <p class="card-text">${objeto.description}</p>
      </div>
    </div>
</div>
    `;
});
//se agregan 5 tarjetas porque son 5 objetos en nuestro arreglo
//generamos los elementos automaticamente en funcion de lo que tenemos en nuestro arreglo, generamos gracias a la interpolacion, nos mostrara lo necesario en funcion del tamaño del arreglo OJO

console.log(db);

//este arreglo lo podemos copnvertir al formato JSON Y UTILIZAREMOS PARSE

const dbJSON = JSON.stringify(db);
//STRINGIFY CONVIERTE NUESTRO ARREGLO EN UNA CADENA DE TEXTO
console.log(dbJSON);
//Convertir nuevamente a un JSON, parse convierte de una cadena a un tipo JSON
console.log(JSON.parse(dbJSON));