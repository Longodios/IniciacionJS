const boton = document.querySelector('#boton');

boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es : ${resultado}`))
});



if (Notification.permission == 'granted') {
    new Notification('Esto es una notificacion', {
        icon: 'img/ccj.png',
        body: 'Codigo con Xaby los mejores tutoriales'
    })
}