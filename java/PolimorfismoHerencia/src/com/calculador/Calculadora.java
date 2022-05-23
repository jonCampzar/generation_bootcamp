package com.calculador;

public class Calculadora {

	//atributos o propiedades
	
	private int a;
	private int b;
	private int c;
	private String nombre;
	private int resultado;
	
	//constructor
	public Calculadora(int a,int b) {
		
		this.a = a; 
		this.b = b;
		
	}
	
	public Calculadora(int a, int b, int c) { //sobrecarga de metodos
		
		this.a = a; 
		this.b = b;
		this.c = c; 
		
	}
	
	public Calculadora(int a, int b, int c, String nombre) { //sobrecarga de metodos
		
		this.a = a; 
		this.b = b;
		this.c = c; 
		this.nombre = nombre;
		
	}
	
	//metodo
	
	public void sumar(int a, int b) {
		resultado = a + b;
		System.out.println("El resultado de la suma es: "+ resultado);
	
	}
	
	public void sumar(int a, int b, int c) {
		resultado = a+b+c;
		System.out.println("El resultado de la suma es: "+ resultado);
		
	}
	public void sumar(int a, int b, int c, int d) {
		resultado = a+b+c+d;
		System.out.println("El resultado de la suma es: "+ resultado);
		
	}
	
	public void sumar(int a, int b, float c, float d) {
		float resultado = a+b+c+d;
		System.out.println("El resultado de la suma es: "+ resultado);
		
	}
	
	
	//getters y setters
	
	public int getA() {
		return a;
	}

	public void setA(int a) {
		this.a = a;
	}

	public int getB() {
		return b;
	}

	public void setB(int b) {
		this.b = b;
	}
	
	
	
	
}
