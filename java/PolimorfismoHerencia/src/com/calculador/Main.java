package com.calculador;

public class Main {

	public static void main(String[] args) {
		
	//Instanciar

		Calculadora cal = new Calculadora(5,8);
		cal.sumar(5,8);
		
		Calculadora cal2 = new Calculadora(1,2,3);
		cal2.sumar(5,2,4); //pide 3 parametros
		
		
		Calculadora cal3 = new Calculadora(1,2,3, "String");
		
		
		
		
	}

}
