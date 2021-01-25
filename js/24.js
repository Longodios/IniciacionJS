// FOR LOOP

// for (let i = 1; i <= 100; i++) {
// if (i % 2 === 0) {
// console.log(`El número ${i} es par `);
// } else {
// console.log(`El número ${i} es impar `);
// }



//}

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
    console.log(carrito[i].precio);
}

// While Loop

// let i = 0; // Valor inicial

// while (i <= 100) { // Condición
// if (i % 2 === 0) {
// console.log(`El número : ${i} es PAR`);
// } else {
// console.log(`El número : ${i} es IMPAR`);
// }


// i++; //Incremento
// }


//Do While Loop

let i = 0;

do {
    console.log(i);
    i++;

} while (i < 10);