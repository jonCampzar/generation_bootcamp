package ciclos;

import javax.swing.JOptionPane;

public class CicloDoWhile {

	public static void main(String[] args) {
		
		String clave = "Pedro";
		
		String comparacion = "";
		
		
		do {
			comparacion = JOptionPane.showInputDialog("Introduzca la contrase�a, por favor"); //como un prompt
			if(clave.equals(comparacion) == false) {
				System.out.println("La contrase�a es incorrecta");
			}
		} while (clave.equals(comparacion) == false);
		System.out.println("La contrase�a es correcta");

		
	}

}
