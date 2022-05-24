package com.pokemon;

public interface TipoFuego {

	int nivelFuego = 10; //los atributos en las interfaces deben tener un valor y ser constante
	
	//metodos abstractos
	public abstract void lanzaLlamas();
	
	//en una interface el metodo vacio ya es publico y abstract
	void araniar();
}
