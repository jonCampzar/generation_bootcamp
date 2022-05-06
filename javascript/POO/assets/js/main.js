//al hacer privados los #atributos y clases hacemos el encapsulamiento que es delimitar el alcance de nuestros parametros

//creamos una clase y van con mayusculas, invocamos al constructor
class Persona{
    //atributos o variables que componen la clase
    #id= 0;
    static #contador=0; //nos cambia el valor de contador
    #nombre= ""; //variable privada
    #edad = 0;
    #correo ="";
    //esto es como de buena practica pero en JS no es necesario, en JAVA es necesario declarar estos atributos
    //#antes del nombre del atributo vuelve privado el atributo fuera de la clase
    constructor(nombre,edad,correo){
   //dentro de los parentesis va lo que queremos modificar
        this.#nombre = nombre;
        this.#edad = edad;
        this.#correo = correo;
        this.#id= ++Persona.#contador; // contador es estatica y vive antes que la clase y por fuera
        //ese this es para asignarlo al contexto en el que se esta llamando, ++ dara el incremento a cada id

        //la funcion constructora nos permitira asignar valores a los atributos

        //Setters y Getters
        //set y get
        //fijar y obtener se mandan llamar como si fueran propiedades
    }

    get getNombre(){
        return this.#nombre;
    }

    set setNombre(nombre){
        this.#nombre = nombre
    }


    get getEdad(){
        return this.#edad;
    }

    set setEdad(edad){
        this.#edad = edad
    }


    get getCorreo(){
        return this.#correo;
    }

    set setCorreo(correo){
        this.#correo = correo
    }

        //metodos son funciones pero no lleva la palabra reservada

        cambiarNombre(nombre){
        this.#nombre = nombre
        } 
    //aplicamos un metodo para hacer esa modificacion

        #saludar(){
            let mensaje = `Hola mi nombre es ${this.#nombre}`
            return mensaje; //aqui mandamos a llamar el atributo por su nombre ya que estamos dentro de la misma clase
        }
        mostrarSaludo(){
            return this.#saludar();
        } //podemos llamar metodos DENTRO DE METODOS AUNQUE SEA PRIVADO

        static mostrarContador(){
            return Persona.#contador;
        } //los metodos tambien pueden ser estaticos y debe ser estaticos para que puedan ser usados por la clase


}


//CREAMOS UNA INSTANCIA DE LA CLASE PERSONA
const persona1 = new Persona('Pedro',30,'pedro@gmail.com');
const persona2 = new Persona('Gabriel',25 ,'gabriel@gmail.com');
const persona3 = new Persona('Martin',40 ,'martin@gmail.com');

persona1.setNombre = 'Jose'

/* persona1.cambiarNombre('Antonio'); */

console.log(persona1);
console.log(persona2);
console.log(persona3);



persona1.setEdad = 50
console.log(persona1.getEdad);


persona1.setCorreo = 'correo@gmail.com'
console.log(persona1.getCorreo);

console.log(persona1.mostrarSaludo());
console.log(persona2.mostrarSaludo());
/* 
console.log(Persona.contador); //el atributo no necesita de un objeto para existir y asi lo mandamos llmar */
console.log(Persona.mostrarContador());