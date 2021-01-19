//"use strict" // JS funciona en modo estricto
//Creacion de un objeto
const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true

}

//Congelamos el objeto para no poder añadirle nuevos argumentos
Object.isFrozen(producto);

//Congelamos el objeto pero podemos modificar las variables que tenemos dentro
Object.seal(producto);
producto.precio = "NUEVO PRODUCTO";

producto.imagen = 'imagen.jpg';



console.log(producto);