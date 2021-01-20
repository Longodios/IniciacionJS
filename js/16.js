//Declaracion de una funcion 
function sumar() {
    console.log(10 + 10);
}


// Llamada a una funcion
sumar();

// Expresión de la funcion
const sumar2 = function() {

        console.log(20 + 20);
    }
    //Llamada a la funcion
sumar2();

//IIFE funciones que se llaman por ellas mismas

(function() {
    console.log("Esto es una funcion de autollamado");
})();

console.log(cliente);