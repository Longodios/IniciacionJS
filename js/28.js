//Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    devuelvePrecio() {
        return ` El precio vale : ${this.precio}€`;
    }
}


const chips = new Producto("Patatas fritas", 1.50, true);
const hamburguer = new Producto("Hamburguesa", 1, true);

//Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); //Super va al constructor padre y le pasa los constructores del padre
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${ super.formatearProducto() } y su ISBN es : ${this.isbn}`;
    }
}

const libro = new Libro("Libro JS", 19, 12039123)
console.log(libro.formatearProducto());
console.log(chips);
console.log(hamburguer);
console.log(hamburguer.devuelvePrecio());
console.log(chips.devuelvePrecio());