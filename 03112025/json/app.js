const usuarios = [];

// obtener informacion del formulario
const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;

// crear objeto para el usuario 
const nuevoUsuario = {
    nombre: nombre,
    correo: correo
}

usuarios.push(nuevoUsuario);

// mostrar el JSON en la pantalla
salida.textContent = JSON.stringify(usuarios, null, 2);

// limpiar el formulario
form.reset();

});    