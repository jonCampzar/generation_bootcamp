package javaBasicos2;

import java.util.Scanner;

public class FlujoDeControl {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Cual es tu edad: ");
		int edad = sc.nextInt();
		
		if(edad >= 18) {
				if(edad > 50) {
				System.out.println("Eres unn adulto mayor");
				}else {
				System.out.println("Eres mayor de edad");
				}
				
		}else {
		System.out.println("Eres menor de edad");
		}

		
		//operador ternario un if mas facil
		
		String mensaje = (edad >=18) ? ("Eres mayor de edad y lo sabes") : ("Eres menor de edad y tambien lo sabes");
		System.out.println(mensaje);
		
		//switch case
		System.out.print("En que dia estamos:");
		sc.nextLine();
		String dia = sc.nextLine(); //debemos de poner ese nextline vacio para que funcione el scanner otra vez
		
		switch(dia.toLowerCase()) { //lowercase para asegurar mayuscula y minusculas al escribir
		case "lunes":
		System.out.println("5 min mas");
		break;
		case "martes":	
		System.out.println("No te cases ni te embarques");
		break;
		case "miercoles":
		System.out.println("Ombligo de la semana");
		break;
		case "jueves":
		System.out.println("Viernes chiquito");
		break;
		case "viernes":
		System.out.println("Chelas");
		break;
		default:
		System.out.println("Dia no valido");
		break;
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		sc.close(); //EL SCANER SE DEBE CERRAR SIEMPRE
			
 }

}
