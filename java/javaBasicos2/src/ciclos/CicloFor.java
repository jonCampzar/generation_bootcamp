package ciclos;

public class CicloFor {

	public static void main(String[] args) {
		
		for( int i=0; i<5; i++) {
			
			System.out.println("Hola " + i);
			
		}
		
		System.out.println("************************");
		
		for (int i=5;i>0;i--) {
			System.out.println("Holax2 "+i );
		}
		System.out.println("************************");
	
		for ( int i = 0 ; i < 20 ; i += 2) { //i = i+2
			System.out.println("Holax3 "+i);
		}
	
		//palabras continue && break
		System.out.println("************************");
		
		for(int i=0; i<10; i++) {
			if( i%2 == 0) {
				
				//continue;//saltarse los pares y abajo imprime los impares
				break; //cuando encuentre lo primero que sea verdadero se detiene y ya no trabaja el ciclo
			
			
			}
			System.out.println(i);
			
		}
	
	
	
	}

}
