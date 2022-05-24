package com.pokemon;
//puede heredar normalmente y las interfaces implementa 
public class Charmander extends Pokemon implements TipoFuego, TipoVolador {

	public Charmander(int id, int edad, int nivel, String nombre, boolean evolucion) {
		super(id,edad,nivel,nombre,evolucion);
	}
	
	
	@Override
	public void lanzaLlamas() {
		System.out.println("LanzaLlamas");
		
	}

	@Override
	public void araniar() {
	System.out.println("Arañar");
		
	}

	@Override
	public void volar() {
		System.out.println("Volar");
		
	}


	@Override
	public void saludar(String mensaje) {
		System.out.println("Saludar");
		
	}

}
