package com.api;

import java.util.Scanner;

public class PruebaApi {

	public static void main(String[] args) {
		
		String nombre = "Jonatan";
		System.out.println(nombre);
		
		String apellido = new String("Campos");
		System.out.println("Campos");
		
		System.out.println(nombre.charAt(5));
	
		Integer.parseInt("50");
		
		//Scanner
		
		Scanner sc = new Scanner(System.in);
		
		sc.nextInt();
		sc.close();
		
		//math es una clase estatico que ya esta integrado en java lang y ya esta por defecto en todo
		Math.random();
		
		
		
		
	}

}
