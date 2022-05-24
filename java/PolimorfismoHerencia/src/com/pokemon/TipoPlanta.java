package com.pokemon;

public class TipoPlanta extends Pokemon { //heredamos los atributos de pokemon con la palabra extends
//atributos
	
	private int numeroHojas;
	
	//constructor
	
	public TipoPlanta(int id, int edad, int nivel, String nombre, boolean evolucion,int numeroHojas ){
		super(id,edad,nivel,nombre,evolucion); //hacemos referencia al constructor de la clase y ponemos super y ponemos los atributos de esa superclase y agregamos en este contructor de planta lo necesario para esta clase
		this.numeroHojas = numeroHojas;
	}
	
	
	public void paralizar() {
	System.out.println(getNombre() + " esta paralizando");	
	}//UITLIZAMOS GET PARA TRAERLO DE LA CLASE PADRE AUNQUE ESTEN ENCAPSULADO
	
	public void envenenar() {
		System.out.println(getNombre() + " envenenando");
	}
	
	//pol en tiempo de ejecucion
	@Override
	public void atacar() {
		System.out.println(getNombre()+" tipo planta esta atacando");
	}
	
	@Override //para el metodo abstracto
	public void saludar(String mensaje) {	
	}

//get y set 
	
	public int getNumeroHojas() {
		return numeroHojas;
	}


	public void setNumeroHojas(int numeroHojas) {
		this.numeroHojas = numeroHojas;
	}


	
	
	
	
	
}
