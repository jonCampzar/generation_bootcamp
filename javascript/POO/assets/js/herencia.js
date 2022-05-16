class Pokemon{
    //atributos
    #nombre= "";
    #edad = 0;
    #evolucion ='' ;
   

    constructor(nombre, edad,evolucion){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#evolucion = evolucion;
       

    }

    get nombre(){
        return this.#nombre

    }
    atacar(){
        return console.log(`${this.#nombre} esta atacando`);
    }
    evolucionar(){
        //operador de cortocircuito
        // false => toma el valor del lado izquierda
        // true => toma el valor del lado derecho

        let mensaje = '';

        if(this.#evolucion === ''){
            mensaje = 'No puedo evolucionar';
            console.log(mensaje);
        }else{
            mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`
            this.#nombre = this.#evolucion;
            console.log(mensaje);
          

        }

    }

}

/* const charmander = new Pokemon('Charmander',2, '','Fuego')
const bulbasaur = new Pokemon('Bulbasaur',1, 'Ivisaur','Planta')
console.log(charmander);
console.log(bulbasaur);

charmander.atacar();
bulbasaur.atacar();

charmander.evolucionar();
console.log(charmander); */

//clase hija de clase Pokemon
class TipoFuego extends Pokemon{
//con super se inicializa la clase padre, entonces utilizamos super para mandar a llamar estos atributos en lugar de this
    #tipo = "";
    constructor(nombre,edad,evolucion){
        super(nombre,edad,evolucion);
        this.#tipo = 'fuego';
    }
    atacar(){
        return console.log(`${super.nombre} esta lanzando un ataque de tipo ${this.#tipo}`); //accedimos a nombre mediante un getter pero tambien se puede utilizar this en lugar de super
    }
}
let nombre = 'Charmander'
const charmander = new TipoFuego(nombre,2,'Charmeleon');
console.log(charmander);
charmander.atacar();
charmander.evolucionar();