package com.generation.model;

import java.util.HashMap;
import java.util.Map;

public class Perro {

	//Atributos
	
	private String nombre;
	private String raza;
	private String tamanio;
	private int edad;
	private String color;
	
	private int id;
	private static int contador = 0; //asi llevaremos la cuenta y debe ser estatico para que no se resetee y todo sea 1
	
	
	
	private static Map <Integer, String> humano = new HashMap<Integer,String>();
	
	//Constructor
	
	public Perro(String nombre, String  raza, String tamanio, int edad, String color) {
		
		this.nombre = nombre;
		this.raza = raza;
		this.tamanio= tamanio;
		this.edad= edad;
		this.color=color;
		this.id = ++Perro.contador;
	}
	
	// getters y setters
	
	
	
	public String getNombre() {
		return nombre;
	}

	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getRaza() {
		return raza;
	}

	public void setRaza(String raza) {
		this.raza = raza;
	}

	public String getTamanio() {
		return tamanio;
	}

	public void setTamanio(String tamanio) {
		this.tamanio = tamanio;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	

	public void setHumano(String value) {
		Perro.humano.put(this.id, value); //guarda el valor del id
	}


	//M?todos
	
	public static String buscarHumano(Integer key) {
		return "El nombre de este humano es: " + humano.get(key); //retorna el valor asociado a la llave
	}
		
	public void comer() {
		System.out.println(this.nombre + " esta comiendo.");
	}
	

	public void dormir() {
		System.out.println(this.nombre + " esta durmiendo.");
	}
	
	public void sentar() {
		System.out.println(this.nombre + " se sent?.");
	}
	
	public void correr() {
		System.out.println(this.nombre + " esta corriendo.");
	}

	

	
	
	//metodo toString para describir lo que va a retornar nuestra clase 
	//sobreescritura de metodos
	
	
	@Override
	public String toString() {
		return "Perro [nombre=" + nombre + ", raza=" + raza + ", tamanio=" + tamanio + ", edad=" + edad + ", color="
				+ color + ", id=" + id + "]";
	}	
		
		
		
		
	}
