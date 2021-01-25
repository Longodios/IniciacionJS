// This


//Creación del objeto 
const reservacion = {
    nombre: 'Xaby',
    apellido: 'Longo',
    total: 5000,
    pagado: false,
    // Creación del método dentro del propio objeto
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

// Llamada del método 
reservacion.informacion();

const reservacion2 = {
    nombre: 'Eri',
    apellido: 'Tresandi',
    total: 5000,
    pagado: false,
    // Creación del método dentro del propio objeto
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion2.informacion();