package ciclos;

import javax.swing.JOptionPane;

public class CicloWhile {

	public static void main(String[] args) {
		//while
		System.out.println("********While*********");
		int condicion = 0;
		
		while(condicion < 5) {//mientras que la condicion sea cierta se repite el ciclo
			System.out.println("Hola");
			condicion++; //el modificador debe estar siempre porque sino se vuelve infinito
		}
		
		System.out.println("*****************");
		
		//verificar contrase�a
		
		String clave = "Pedro";
		
		String comparacion = ""; //siempre inicializar las variables "" o en 0
		
		while(clave.equals(comparacion) == false) { //equals es un metodo para comparar objetos Strings ==
			comparacion = JOptionPane.showInputDialog("Introduzca la contrase�a, por favor"); //como un prompt
			
			if(clave.equals(comparacion) == false) {
				System.out.println("La contrase�a es incorrecta");
			}
			
			
		}
			
		System.out.println("La contrase�a es correcta"); //clave == comparacion
	
	}

}
