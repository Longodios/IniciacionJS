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

//For each lo utilizamos si queremos imprimir cosas por consola 

carrito.forEach(producto => console.log(producto.nombre));

//map para crear un nuevo array por ejemplo cuando queramos crear este array solo del nombre, FILTRAR 

const arreglo2 = carrito.map(producto => producto.nombre);

console.log(arreglo2);