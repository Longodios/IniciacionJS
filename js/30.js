const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;

    if (auth) {
        resolve('Usuario Autenticado'); //El PROMISE se cumple
    } else {
        reject('Usuario no registrado, no pudimos iniciar sesión'); //El PROMISE NO se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

console.log(usuarioAutenticado);

//En los promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
//FullFilled : Ya se cumplio
// Rejected : Se ha rechazado o no se pudo cumplir