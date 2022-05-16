const palindrome = (string) => {
    if(typeof string === 'undefined') return;
    return string
            .split('')
            .reverse()
            .join('');
}

const average = array => {

    if(typeof array === 'undefined') return;
    if(array.length === 0) return [];
    //ESTE IF ES PARA QUE NOS REGRESE LO QUE QUEREMOS
    let sum = 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
}


module.exports = {
    palindrome,
    average
}

/* module.exports = palindrome;
module.exports = average;
esto tambien se puede usar, en la parte de arriba lo hicimos como un objeto {

} */




//para exportar esto a las pruebas, podemos omitir el nombre de la llave si es el nombre del valor

