
const urlUltimos = "https://api.jikan.moe/v4/seasons/now";

fetch(urlUltimos).then(resp => resp.json()).then(datos =>{
    console.log(datos.data);

    const arregloAnimesUltimos = datos.data.slice(0,16);

    arregloAnimesUltimos.foreach()
})