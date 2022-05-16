//ahora importamos despues de haber exportado de donde estan las funciones que queremos probar

const {palindrome} = require('../para_probar');
//hay que salir de la carpeta
//primer test unitario
test('palindrome de generation', ()=>{
    const resultado = palindrome('generation');
    expect(resultado).toBe('noitareneg')
})
//la palabra generation sera la prueba o sea la palabra para saber si es un palindromo
//primero debemos asegurarnos que de falso y despues que pase



//hay que salir de la carpeta
//primer test unitario
test('palindrome vacio', ()=>{
    const resultado = palindrome('');
    expect(resultado).toBe('')
})

//en los test siguinetes ya no se usa require al principio
test('palindrome undefined', ()=>{
    const resultado = palindrome();
    expect(resultado).toBe()
})