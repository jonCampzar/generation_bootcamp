package ciclos;

import java.util.Scanner;

public class Ejercicio2 {

	public static void main(String[] args) {
//		Ejercicio
//
//		Validaci�n de correo
//
//		Escribe un programa que reciba un correo y  que, usando un ciclo for, eval�e si el correo contiene un caracter de '@'.
//		Si lo tiene, el programa debe mostrar en consola:
//		"Es un correo v�lido"
//
//		Si no lo tiene, el programa debe mostrar:
//		"No es un correo v�lido"
//		String correo = "";
//		Scanner sc = new Scanner(System.in);
//		System.out.print("Cual es tu correo: ");
//		String opc = sc.next();
//		
//		for(int n=0; n<correo.length(); n++) {
//			char c= correo.charAt(n);
//			System.out.println(c);
//		}
//		
//		
//		
//		sc.close();
	
		Scanner entrada = new Scanner(System.in);
		System.out.println("Ingresa un valor: ");
		String palabra = entrada.nextLine();
		char [] texto  = new char[palabra.length()];
		texto = palabra.toCharArray();
		
		for(int i=0; i<texto.length; i++) {
			System.out.println(texto[i]);
			if(texto[i]!='@') {
				System.out.println("No hay ningun arroba");
			}else {
				System.out.println("Hay arroba");
			}
		}
			entrada.close();
		}
	}
