
 const $forma = document.getElementById('form1');

 $forma.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log($forma.fname.value);
    console.log($forma.lname.value);
 })

 const $btn = document.getElementById('links');
 $btn.addEventListener('click', (e) =>{
     const $enlace = document.querySelectorAll('a');
     const numero = $enlace.length

        alert(`Numero de enlaces ${numero}, primer enlace ${$enlace[0]}, ultimo enlace ${$enlace[numero-1]}`);
    

 })