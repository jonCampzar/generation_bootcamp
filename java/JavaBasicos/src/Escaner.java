import java.util.Scanner;

public class Escaner {

	public static void main(String[] args) {
		Scanner escaner = new Scanner(System.in);
		//es necesario parsear con .nextInt() lo que viene del escaner
		System.out.println("Escribe un numero");
		int numero = escaner.nextInt();
		
		if(numero < 10) {
		
		System.out.println("El numero es menor a 10");
		}
	}

}
