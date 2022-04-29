const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
//\ lleva esa invertida para que funcione ^inicio y fin$
const formulario = document.querySelector('form');
/* console.log(formulario); */

const inputs = document.querySelectorAll('input');
/* console.log(inputs); */
//mandamos traer todos los inputs para trabajarlos con el foreach
//mandamos llamar del html y lo guardamos en una variable, despues de agregamos un evento y le damos un prevent default para que no recargue la pagina
const nombreError = document.querySelector("#errorNombre");
const apellidoError = document.querySelector("#errorApellido");
const emailError = document.querySelector("#errorEmail");
const passwordError = document.querySelector("#errorPassword");
const telefonoError = document.querySelector("#errorTelefono");

/* console.log(telefonoError); */

const statusInf = {
	nombre: false,
	apellido: false,
	email: false,
	password: false,
	telefono: false
}
//desde el principio el formulario es false

inputs.forEach((inp)=>{
	/* console.log(inp); */
	inp.addEventListener("keyup",(e)=>{
		/* console.log(e.target.name); */

             //switch para cada caso hara algo que en este caso escribira un numero o una accion diferente
			 //target.value es para saber si cumple la ex´presion regular
		switch(e.target.name){
			case'nombre':
				/* console.log(e.target.value); */
				if(expresiones.nombre.test(e.target.value)){
					statusInf.nombre = true
					nombreError.textContent = "";
				} else{
					statusInf.nombre = false
					nombreError.textContent = "Error";
				}
					//test nos permite validar si lo que estoy escribiendo es lo que esta permitido segun la expresion regular

				break
			case'apellido':
				if(expresiones.nombre.test(e.target.value)){
				statusInf.apellido = true
				apellidoError.textContent = "";
				} else{
				statusInf.apellido = false
				apellidoError.textContent = "Error";
				}
				break
			case'email':
				if(expresiones.email.test(e.target.value)){
				statusInf.email = true
				emailError.textContent = "";
				} else{
				statusInf.email = false
				emailError.textContent = "Error";
				}
				break
			case'password':
				if(expresiones.password.test(e.target.value)){
				statusInf.password = true;
				passwordError.textContent = "";
				} else{
				statusInf.password = false
				passwordError.textContent = "Error";
				}
				break
			case'telefono':
				if(expresiones.telefono.test(e.target.value)){
				statusInf.telefono = true
				telefonoError.textContent = "";
				} else{
				statusInf.telefono = false
				telefonoError.textContent = "Error";
				}
				break
		}






	})
	
})
//target.name mandamos a llamar el name al presionar una tecla
//foreach va a recorrer de forma automatica, el padre es inputs y lo ponemos en la funcion como hijo para darle un nombre a cada hijo por eso se llama input en singular

formulario.addEventListener('submit',(e)=>{ 
	e.preventDefault(); //para que no recargue por el submit, se detiene la ejecucion para hacer que se muestre la informacion
	/* console.log('Enviado'); */
	/* console.log(Object.values(statusInf));
	console.log(Object.values(statusInf).includes(false)); */
	const check = document.querySelector("#terminos").checked

	if(!Object.values(statusInf).includes(false) && check == true){
		/* console.log("Enviado"); */
		document.querySelector(".alert-danger").style.display = "none"
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos)
		formulario.reset()
			//se resetea si los datos son correctos y sino le damos oportunidad al usuario que corrija sus errores 
	}else{
		/* console.log("No enviado"); */
		document.querySelector(".alert-danger").style.display = "block"

	}
}
)
//para enviar primero se debe recibir un false como validacion y en el if lo invertimos
//none