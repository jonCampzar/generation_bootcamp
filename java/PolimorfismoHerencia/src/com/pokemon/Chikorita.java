package com.pokemon;

public class Chikorita extends TipoPlanta {
	
	//ATRIBUTOS
	private int numeroCuernitos;

	//CONSTRUCTOR, CON SUPER MANDAMOS TRAER LOS ATRIBUTOS DEL PADRE que es tipo planta, va heredando de las clases padre
	public Chikorita(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas, int numeroCuernitos) {
		super(id,edad,nivel,nombre,evolucion,numeroHojas);
		this.numeroCuernitos= numeroCuernitos;
	}
	
	//metodo
	public void latigo() {
		System.out.println(getNombre() + " uso latigo");
	}

	public void atacar(){ //POL EN TIEMPO DE EJECUCION
		System.out.println(getNombre()+" tipo planta esta atacando X2");
	}	
	//getter y setter
	public int getNumeroCuernitos() {
		return numeroCuernitos;
	}

	public void setNumeroCuernitos(int numeroCuernitos) {
		this.numeroCuernitos = numeroCuernitos;
	}

	@Override //PERMITE SABER QUE METODOS SE ESTAN SOBREESCRIBIENDO
	public String toString() {
		return "Chikorita [numeroCuernitos=" + numeroCuernitos + "]";
	}
	
	
	
}
