package com.generation.colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
	public static void main(String[] args) {
		
		//List - ArrayList es una coleccion
		//llegan a heredar
		System.out.println("\t****  List -----  ArrayList ********"); //tabulacion
		List<String> miArray = new ArrayList<String>();
		
		//para agregar elementos
		
		miArray.add("Pedro");
		miArray.add("Yair");
		miArray.add("María");
		miArray.add(1, "Raul");
		
		
		
//		String elemento = miArray.remove(1); //regresa el elemento borrado
		boolean elemento = miArray.remove("Yair"); //podemos borrar especificando el valor que queremos borrar pero regresa un boolean
		
		
		//en la coleccion no se debe usar otro metodo para ver lo que contiene como si es necesario en los arrays
		System.out.println(miArray);
		System.out.println(miArray.size()); //length
		System.out.println(elemento);
		
		imprimir(miArray);
		
		//imprimir es unn metodo estatico
		
		//si queremos utilizar el metodo imprimir dentro de otra clase,  debemos hacerlo de esta forma
		//Colecciones.imprimir(miArray);
		
		/*/Valores compuestos o wrappers, estamos creando un objeto para poder usarlo en las colecciones 
		 * double=Double
		 *  long = Long
		 *  int ==>Integer
		 * boolean = Boolean
		  */
		int num1 = 10;
		Integer num2 = 10;
		
		System.out.println(num1);
		//System.out.println(num2 instanceof Integer); //para saber si viene de la clase integer y regresa un boolean
		System.out.println(num2.getClass().getSimpleName());//saber que clase es 
		
		List<Integer> miArray2 = new ArrayList<Integer>();
		
		miArray2.add(5);
		miArray2.add(896);
		miArray2.add(1233);
		
		imprimir(miArray2);
		
		System.out.println("\t****  Set ----- HashSet  ****");
		
		Set<String> miSet = new HashSet<String>();
		//no acepta elementos duplicados
		//no los guarda en un orden especifico
		//la coleccion que funciona mas rapido
		
		miSet.add("Martha");
		miSet.add("Martha");
		miSet.add("Lupe");
		miSet.add("Juan");
		miSet.add("Gabriel");
		
		miSet.remove("Lupe"); //para remover debemos especificar el valor
		
		System.out.println(miSet);
		imprimir(miSet);
		
		System.out.println(miSet.contains("Juan")); //para saber si contiene el elemnto
		
		//Map -- HashMap -- indice
		System.out.println("\t****  Map ----- HashMap  ****");
		//<Key/llave , Value/valor>
		
		//en objetos en JS (clave)nombre: (valor)"Panchito"
		//Map tiene sus propios metodos
		
		Map<String, Integer> miMap = new HashMap<String, Integer>();
		
		//agregar
		
		miMap.put("Valor 1", 45);
		miMap.put("Valor 1", 250); //podemos reescribir para no tener valores repetidos
		miMap.put("Valor 2", 50);
		miMap.put("Valor 3", 550);
		miMap.put("Valor 4", 350);
		
		
		System.out.println(miMap);
		System.out.println(miMap.values()); //todos los valores
		System.out.println(miMap.keySet()); //todas las llaves
		
		System.out.println(miMap.get("Valor 1")); //para buscar un valor en especifico
		
		
		for(String llave : miMap.keySet()) {
			System.out.println(llave + " : " + miMap.get(llave));
			
		}
		
		
		
	}
	
	
	//esto esta fuera del main, porque ejecuta lo que este dentro
	public static void imprimir(Collection coleccion) {
		
		for (Object elemento : coleccion ) {
			System.out.println("Elemento = " + elemento);
		}
		
		
	}
	
	
	
	
	

}
