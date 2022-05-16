import java.util.Objects;

public class OperadoresLogicos {

	public static void main(String[] args) {
		//una sola linea
		/*
		 * comentario multilinea
		 * 
		 * */
		
		//Operadores de asignacion
		
		int num = 12;
		num = 45;
		num = Integer.parseInt("4");

		
		//System.out.println(num);
		
		//Operadores de comparacion
		
		int num1, num2;
		
		num1 = 10;
		num2 = 20;
		
		
		//debemos ser especificos en nuestras impresiones y con + podemos concatenar
		
		System.out.println("num1: " + num1);
		System.out.println("num2: " + num2);
		
		
		//operador de comparacion ==
		//System.out.println(num1 == num2); //igual nos permite comparar un booleano
		System.out.println(num1 == num2); //estrictamente igual no existe ===

		//.equals() igual que el operador de comparacion
	
		System.out.println(Objects.equals(num1, num2));
		System.out.println("**********************");
		//Operadores de comparacion
		
		//<, >, >=, <=
		
		int num3, num4;
		
		num3 = 25;
		num4 = 20;
		
		System.out.println(num3 < num4);
		System.out.println(num3 > num4);
		System.out.println(num3 <= num4);
		System.out.println(num3 >= num4);
		
		if(num3 < num4) {
			//codigo a ejecutar
			System.out.println("Numero 3 es menor");
		}else {
			
			System.out.println("Numero 3 es mayor");
		}
		
		// != diferente de
		
		System.out.println(num3 != num4);
		
		boolean comparacion = num3 != num4;
		System.out.println(comparacion);
		System.out.println("***********************");
		
		//Operadores logicos
		//AND =    && ======> ambos valores true para que regrese true
		//OR  =    || ======> solamente se necesita que uno sea true para que regrese true
		//NOT =     ! negacion 
		
		System.out.println(true && true );
		System.out.println(false || false );
		System.out.println(!true && true); // invierte solo hasta el primer true
		System.out.println(!(false && true)); //invierte todo el valor
	}

}
