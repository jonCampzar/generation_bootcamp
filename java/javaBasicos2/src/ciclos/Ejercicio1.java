package ciclos;

import javax.swing.JOptionPane;

public class Ejercicio1 {

	public static void main(String[] args) {
		
		int numero1 = (int) (Math.random()*10);
		System.out.println(numero1);
		String numero2 = "";
		int numero3 ;
		
		do {
			numero2 = JOptionPane.showInputDialog("Introduce un numero");
		    numero3 = Integer.parseInt(numero2);
		    if (numero1 != numero3)
		    System.out.println("El numero es incorrecto");
		} while (numero1 != numero3);
		
	
			
		System.out.println("Felicidades adivinaste el numero"); //clave == comparacion

	}

}
