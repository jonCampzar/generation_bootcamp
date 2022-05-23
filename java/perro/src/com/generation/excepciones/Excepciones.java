package com.generation.excepciones;

public class Excepciones {

	public static void main(String[] args) {
		
		int num1 = 10;
		Integer num2 = null;
		
		float division;
		
		//para manejar las excepciones 
		//try catch  finally

		try {
		division = num1/num2;	//codigo que vamos a probar
		}catch (ArithmeticException ex) { //() la excepcion a observar y la palabra ex
			
			division = 1; //cuando haya una excepcion ahora division sera 1
			System.out.println("Error: " + ex.getMessage()); //lo que se va a realizar cuando se detecte una excepcion
		}catch(NullPointerException ex){
			division = 0.0f;
			System.out.println("Error: " + ex.getMessage());
		}finally {
			System.out.println("Finalizó el try catch");
		}
		
		
		
	}

}
