// prompt("jorge taveras");
// // path: main.js
// alert("hola");

// var numero1 = parseInt(numero1) + parseInt(nuemro2);
// aler ("El resultado es: " + resultado);

const form = document. querySelector("form");
const input = document. getElementById("btn");

input.addEventListener("click", (e) => {
    e.preventDefault();
   console.log (form.elements[0].value);
   console.log (form.elements[1].value);

   const nombre = form.elements [0]. value;
   const contraseña = form.elements [1]. value

   if(nombre === "admin" && contraseña === "1234"){
   return window.open ("https://www.youtube.com/watch?v=RuAu_-uWCWs");
   }else{
    return alert ("Datos incorrectos");
    }
});



// console.log ({form, input});