//Arrays

//Podemos tener todo tipo de valores en los arrays , tanto numeros, como texto


const numeros = [10, 20, 30, 40, 50];

//Mostramos el array normal
//console.log(numeros);
//Con .table sacamos una tabla con el array ordenado y sus valores
//console.table(numeros);



//console.table(meses);

//Acceso a los valores del array

//console.log(meses[0])

//Conocer la extension de un array

//console.log(meses.length);

//Bucle For Each 
//numeros.forEach(function(numero) {
//   console.log(numero);
//})

//Agregar más elementos al array

numeros[5] = 60;
//Agrega al final del array
numeros.push(60, 70, 80);

//Agrega al principio del array
numeros.unshift(-10, -20, -30);



console.log(numeros)


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// meses.pop();
// meses.shift();
// meses.splice(2, 1); //Con esto eliminamos el valor exacto, por lo tanto contamos 2 posiciones y eliminamos ese valor
// console.table(meses);

//Rest Operator o Spread Operator 


const nuevoArray = [...meses, 'Julio']; //Esto lo agrega al final osea como un POP
const nuevoArray = ['Julio', ...meses]; // Aqui lo agregamos al principio osea shift

console.log(nuevoArray);