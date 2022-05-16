package com.calculadora;

public class Calculadora {
	//dentro de las clases vamos a generar metodos
	//metodo que no regresa nada "void"
	public void sumarMensaje() {
		System.out.println("Voy a sumar 2 numeros");
	}
	
	//metodo que retorna datos
	
	public String mensaje() { //retorna un string
	String mensaje = "Voy a realizar una operacion";
		return mensaje;	
	}
	
	public int prueba() { //retorna un entero
		return 2;
	}
	public double prueba2() { //retorna un double
		return 2.16;
	}
	
	//Operaciones
	
	public int sumar (int a, int b) {
		return a + b;
	}
	
	public void sumarM(int a, int b) {
		System.out.println("El resultado de la suma es: " + (a+b));
	};
	
	
	public int restar (int a, int b) {
		return a - b;
	}
	
	public int multiplicar (int a, int b) {
		return a * b;
	}
	
	public double dividir (double a, double b) { //es mejor double que float
		if(b!=0) {
		return a/b;
		}else {
		return -1;
		}
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	}
	
	
	
	
	
	
	
	

