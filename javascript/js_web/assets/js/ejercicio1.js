addEventListener('keypress', function(e){
    console.log("Presioné la tecla " + (e.key)+ " ,Keycode: "+(e.keyCode)+ " ,Code: "+ (e.code));
    console.log("Código Unicode de la tecla presionada  " + (e.keyCode));
    console.log("Código de la tecla presionada  "+ (e.code));
}
)