package com.calculadora;

public class PruebaCalculadora {

	public static void main(String[] args) {
		System.out.println("Vamos a calcular");
		
		//crear un objeto a partir de una clase(instanciar)
		//tipo de dato calculadora u objeto(Object cal = new Calculadora ()
		//INSTANCIAR
		Calculadora cal = new Calculadora();
		//METODO QUE NO RETORNA NADA
		cal.sumarMensaje();
		//METODO QUE RETORNA UN VALOR
		String mensaje =cal.mensaje();
		System.out.println(mensaje);
		
		double prueba = cal.prueba();
		System.out.println(prueba);
		
		//métodos con argumentos
		
		int suma = cal.sumar(5, 20);
		System.out.println(suma);
		
		//Metodo que no regresa nada
		
		cal.sumarM(8, 5);
		
		int resta = cal.restar(8, 7);
		System.out.println(resta);
		
		//instanciar de la clase areas
		
		Areas calAreas = new Areas();
		
		calAreas.mensaje();
		
		int cuadrado = calAreas.areaCuadrado(5);
		System.out.println(cuadrado);
		
		double triangulo = calAreas.areaTriangulo(5, 10);
		System.out.println(triangulo);
		
		
	}

}
