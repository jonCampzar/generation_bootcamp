import java.util.Scanner;

public class Ejercicio2 {

	public static void main(String[] args) {
//		Escribe una aplicación que calcule el indice de masa corporal.
//
//		y que lance un mensaje según lo siguiente:
//
//		Si tiene un IMC entre 18.5 y 25:
//		"Your weigh ratio is good"
//
//		si es menor de 18.5 o mayor de 25:
//		"Your health is not good"
		
//	IMC  =	peso (kg) / [estatura (m)]2
		
		Scanner escaner1 = new Scanner(System.in);

		//es necesario parsear con .nextInt() lo que viene del escaner
		System.out.println("Escribe tu peso en kg: ");
		float peso = escaner1.nextFloat();
		System.out.println("Tu peso en kilos es: " + peso);
		System.out.println("Escribe tu estatura en mts:");
		float estatura = escaner1.nextFloat();
		System.out.println("Tu estatura en metros es: " + estatura );
		
		float imc = peso / (estatura*estatura);
		System.out.println("Tu IMC es: " + imc);
		
		
		if(imc >= 18.5 & imc <= 25) {
			System.out.println("Your weigh ratio is good");
		}else {
			System.out.println("Your health is not good");
		}



		
		
		
		
		
		escaner1.close(); //se debe cerrar el escaner

	}

}
