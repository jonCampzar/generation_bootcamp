package javaBasicos2;

public class Ejercicio1 {

	public static void main(String[] args) {
		
//		Crear una aplicaci�n que reciba un int entre 1 y 10 y que regrese un mensaje seg�n la calificaci�n ingresada.
//
//
//		menos de 3 == "Failed!"
//		menos de 5 == "Insufficient!"
//		menor de 9 == "Good!"
//		10 == "Excellent!"
//
//		Mayor de 10 == "Grade outside range supported!"

		int calificacion = -1;
		
		if(calificacion == 10) {
		System.out.println("Excellent");
		}else if(calificacion <=9 && calificacion >=5) {
		System.out.println("Good!");
		}else if(calificacion <=5 && calificacion >=3) {
		System.out.println("Insufficient!");	
		}else if(calificacion <3 ) {
		System.out.println("Failed!");
		}else {
		System.out.println("Grade outside range supported!");
		}
		
		
		}

}
