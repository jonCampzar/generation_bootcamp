package com.generation.testMaven;

import org.junit.jupiter.api.*;
public class AppTest 
{
	@Test
	public void saludoTest() {
		//debemos instanciar un objeto de la clase que se va a probar
	App saludo = new App();
	Assertions.assertEquals("Hola Mundo!", saludo.saludo());
	
	}
	
	@Test
	public void saludoStaticTest() {
		Assertions.assertEquals("Hola Mundo!", App.saludoStatic() );
	}
	
}
