
public class OperadoresAritmeticos {

	public static void main(String[] args) {
		//Suma
		
		int suma = 10 + 5;
		
	//Resta
		
		int resta = 200 - 50;
		
		int multiplicacion = 5 * 5;
		
		float division = 10f / 3f;
		
		// Modulo
		int modulo = 5%2;
		
		//incremento
		
		float numero = 10;
		numero++;
		++numero;
		
		//incremento
		
		numero--;
		--numero;
		
		//numero = numero + 2
		
		numero += 2;
		
		//numero = numero - 10
		
		numero -= 10;
		
		//numero = numero * 6
		
		numero *= 6;
		
		//numero = numero / 7
		numero /= 7f; //peligro
		numero = (float) numero / 7;
		
		
		System.out.println(suma);
		System.out.println(resta);
		System.out.println(multiplicacion);
		System.out.println(division);
		System.out.println(modulo);
		System.out.println(numero);
		
	}

}
