//Creacion de un objeto

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true

}

const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(nombreProducto);
// console.log(precioProducto);

//Destructuring significa que creamos la variable y extraemos en la misma línea

const { precio } = producto;
const { nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);