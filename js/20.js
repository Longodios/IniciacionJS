const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`)
    },

    pausar: function() {
        console.log('Pausando...')
    },

    crearPlaylist: function(nombre) {
        console.log(`Reproduciendo Delaossa : ${nombre}`);
    },

    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist : ${nombre}`)
    }
}


reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion : ${id}`);
}

console.log(reproductor);


reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Oh Mamah');
reproductor.reproducirPlaylist('Rap');