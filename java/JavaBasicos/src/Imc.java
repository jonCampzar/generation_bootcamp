import java.util.Scanner;

public class Imc {

	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
        System.out.println("--------------------------------");
        System.out.println("INDICE DE MASA CORPORAL");
        System.out.println("--------------------------------");
        System.out.println("Ingresa tu altura en : ");
        float estatura = entrada.nextFloat();
        System.out.println("Ingresa tu peso: ");
        float peso = entrada.nextFloat();
        float imc = peso/(estatura*estatura);
        System.out.println("Datos:");
        System.out.println("Estatura: " + estatura);
        System.out.println("Peso: " + peso);
        System.out.println("Tu índice de masa corporal es: " + imc);
		
		
		
		
		
		
		
		
		
		
		
		
		

	}

}
