//Programacion Orientada a Objetos POO

//Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor 

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}


//Prototype nos permite crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;

}


function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
//Prototype nos permite crear funciones que solo se utilizan en un objeto en especifico
Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}`;
}

const chips = new Producto("Patatas fritas", 1.50, true);
const hamburguer = new Producto("Hamburguesa", 1, true);
const icecream = new Producto("Helado", 1.50, true);
const sportsdrink = new Producto("Bebida Energetica", 2.50, false);
const cliente1 = new Cliente('Xavier ', 'Longo Dios');

console.log(chips);
console.log(hamburguer);
console.log(icecream);
console.log(sportsdrink);
console.log(cliente1);

console.log(chips.formatearProducto());
console.log(cliente1.formatearCliente());