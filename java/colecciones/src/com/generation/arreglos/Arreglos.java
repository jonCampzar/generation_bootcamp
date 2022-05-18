package com.generation.arreglos;

import java.util.Arrays;

public class Arreglos {

	public static void main(String[] args) {
		
		//Arreglos o matrices o arrays
		//solo pueden tener un tipo de dato y debemos especificar su tamaño
		
		//Valores por defecto
		//int - 0
		//string - null
		//boolean - false
		
		
		int[] arrNumeros = new int[5];
		
		//numeracion empieza en 0
		arrNumeros[0] = 1;
		arrNumeros[1] = Integer.parseInt("1");
		arrNumeros[2] = -1352;
		arrNumeros[3] = -1511;
		arrNumeros[4] = -1215;
		
		
		
		
		System.out.println(Arrays.toString(arrNumeros));
		
		System.out.println(arrNumeros[0]);
		System.out.println(arrNumeros[1]);
		System.out.println(arrNumeros[2]);
		
		System.out.println("*******************");
		
		for(int i=0; i < arrNumeros.length ; i++) {
			
			System.out.println(arrNumeros[i]);
		}
		
		//forEach
		int conteo = 0;
		for(int elemento : arrNumeros) {
			conteo++;
			System.out.println("Elemento = " + conteo + " = " + elemento);
			
		}
		
		
		//Arreglo que guarda objetos
		
		Persona persona1 = new Persona ("Alex",33);
		Persona persona2 = new Persona ("Raul",31);
		
//		Object arrPersonas[] = new Object[3];
		
		Persona arrPersonas[] = new Persona[3];
		
		arrPersonas[0]= persona1;
		arrPersonas[1]= persona2;
		arrPersonas[2]= new Persona("Juan",25);
		
		System.out.println(Arrays.toString(arrPersonas));

		for(Persona elemento : arrPersonas) {
			System.out.println(elemento.nombre + " - "+ elemento.edad);
		}
		
		
		//Arreglos literales
		//Crear elementos sin asignarles un tamaño 
		String[] arrString = {"Hola","mi","nombre","es"};
		
		System.out.println(Arrays.toString(arrString));
		
		
		
		
		
	}

}
