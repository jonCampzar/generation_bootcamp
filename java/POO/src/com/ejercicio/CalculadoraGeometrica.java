package com.ejercicio;

public class CalculadoraGeometrica {

	public static void main(String[] args) {
		
		System.out.println("Calcular perimetros");
		
		Perimetro perimetro = new Perimetro();
		
		double triangulo = perimetro.perimetroTriangulo(5, 10, 7);
		System.out.println("Perimetro del triangulo: " + triangulo);
		
		int cuadrado = perimetro.perimetroCuadrado(5);
		System.out.println("Perimetro del cuadrado: " + cuadrado);
		
		double circulo = perimetro.perimetroCirculo(7);
		System.out.println("Perimetro del circulo: " + circulo);
		
		System.out.println("*******Calcular areas*********");
		
		Areas area = new Areas();
		
		double atriangulo = area.areaTriangulo(5, 10);
		System.out.println("Area del triangulo: " + atriangulo);
		
		int acuadrado = area.areaCuadrado(5);
		System.out.println("Area del cuadrado: "+ acuadrado);
		
		double acirculo = area.areaCirculo(3.5);
		System.out.println("Area del circulo: " + acirculo);
		

	}

}
