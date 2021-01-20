//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor de 20 Pulgadas', precio: 500 },
    { nombre: 'Television de 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Cascos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Teléfono Móvil', precio: 50 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Portatil', precio: 800 },
    { nombre: 'Ratón', precio: 40 },
    { nombre: 'Disco duro externo', precio: 100 }

];

//forEach

meses.forEach(function(mes) {
    if (mes == 'Marzo') {
        console.log("Marzo si existe");
    }
});

//Includes

let resultado = meses.includes('Diciembre');

// Some ideal para array de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre === 'Teléfono Móvil'
})

//Reduce

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)

//Filter

resultado = carrito.filter(function(producto) {
    return producto.precio > 400;
})

resultado = carrito.filter(function(producto) {
    return producto.nombre != 'Ratón';
})


console.log(resultado);