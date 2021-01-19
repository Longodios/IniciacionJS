const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true

}

const medidas = {

        peso: "1KG",
        medida: "1M"

    }
    //Rest Operator consta de 3 puntos seguido del objeto
const nuevoProducto = {...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);