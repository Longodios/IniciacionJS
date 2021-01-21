//Ejercicio Caracol SoloLearn

const profundidad = 42;

const pasosAdelante = 7;

const pasosAtras = 2;

var pasosTotales = 0;

var dias = 0;

do {
    if (pasosTotales === 0) {
        pasosTotales = pasosAdelante + pasosAtras;
        console.log(pasosTotales);
        dias++;
    } else if (pasosTotales > 0) {

        pasosTotales = pasosTotales + pasosAdelante - pasosAtras;
        console.log(pasosTotales);
        dias++;
    }



}
while (pasosTotales <= profundidad);

console.log(`Los dias que tarda son : ${dias} y los pasos totales son : ${pasosTotales}`);