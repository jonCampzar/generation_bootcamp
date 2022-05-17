package com.perritos;

public class Perro {

	//Atributos o propiedades
	
	String nombre = "Anonimo";
	int edad;
	String raza;
	String tamanio;
	
	//constructor es un metodo
	
	public Perro(String nombre, int edad) {
		this.nombre=nombre;
		this.edad = edad;
	}
	
	
	
	
	
	//metodos
	
	public void ladrar() {
		System.out.println("El perro " + nombre + " hace guauf");
	}
	
	
	public int edadPerruna() {
		return edad*7;
	}
	
	
	//metodos estaticos
	//permite utilizar sin instanciar un objeto
	
	public static void mensaje() {
		System.out.println("Esta es una clase Perro");
	}
	
	
	
}
