//Objetos JS

const nombreProducto = "Monitor de 20 Pulgadas";
const precio = 300;
const disponible = true;

//Creacion de un objeto

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true

}

// //Llamada del objeto


// //Acceso a las variables del objeto con .
// console.log(producto.precio);

// //Otra forma de acceder a una variable del objeto

// console.log(producto["nombreProducto"]);

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//Eliminar propiedades

delete producto.disponible;

console.log(producto);