//Tipos de datos en JS

//String

const tweet = "Monitor de 20 Pulgadas ";
const producto2 = "Monitor HD";
// const producto2 = String('Monitor de 30 Pulgadas'); FORMA POCO UTILIZADA
// const producto3 = new String('Monitor de 50 Pulgadas'); FORMA POCO UTILIZADA

console.log(tweet.length);
console.log(producto2);
// console.log(producto2);
// console.log(producto3);

//INDEXOF lo utilizamos para encontrar palabras dentro de una cadena de texto

console.log(tweet.indexOf('20'));
console.log(producto.indexOf('HD'));

//Includes (devuelve true o false)

console.log(tweet.includes('Pulgadas'));
console.log(producto2.includes('Pulgadas'));