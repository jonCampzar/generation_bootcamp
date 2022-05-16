const {average} = require('../para_probar');
//importamos average
//hay que salir de la carpeta
//segundo test unitario
//metodo para agrupar mas tests describe

describe('average', ()=>{
    
    
   /*  test('Ingresar un solo valor', ()=>{
        const resultado = average([1]);

        expect(resultado).toBe(1);
    }) */

    test('Ingresar un solo valor', ()=>{
        expect(average([1])).toBe(1);
    })

    test('Ingresar multiples valores', ()=>{
        expect(average([1,2,3,4,5,6])).toBe(3.5);
    })
   
    //crear un test para probar un valor undefined
    test('Con undefined', ()=>{
        expect(average()).toBeUndefined();
    })
    test('Con array vacio', ()=>{
        expect(average([])).toStrictEqual([]);
    })
})