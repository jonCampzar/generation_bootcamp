package javaBasicos2;

import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("1) Suma   2) Resta   3) Multiplicacion   4) Division");
		System.out.println("Introduce el numero de la operacion a realizar: ");
		int operacion = sc.nextInt();
		System.out.println("Dame un numero");
		float a = sc.nextFloat();
		System.out.println("Dame otro numero");
		float b = sc.nextFloat();
		
		sc.close();
		
		switch(operacion) { 
		case 1:	
		System.out.println("Elegiste una suma");
		System.out.println("Y la suma es: " + (a+b));
		break;
		case 2:	
		System.out.println("Elegiste una resta");
		System.out.println("Y la resta es: " + (a-b));
		break;
		case 3:	
		System.out.println("Elegiste una multiplicacion");
		System.out.println("Y la multiplicacion es: " + (a*b));
		break;
		case 4:	
		System.out.println("Elegiste una division");
		if(b == 0) {
		System.out.println("Pero no puedes dividir entre 0 :( ");
		}else {
		System.out.println("Y la division es: " + (a/b));
		}
		break;
		default:
		System.out.println("Operacion no valida");		
		}
	}

}
