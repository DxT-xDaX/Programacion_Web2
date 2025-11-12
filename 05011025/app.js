const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJson');
const descargarBtn = document.getElementById('descargarBtn');

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

mostrarUsuarios();

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    const nuevoUsuario = { 
        nombre : nombre, 
        email : email };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    mostrarUsuarios();
    form.reset();
});

function mostrarUsuarios() {
    salida.textContent = JSON.stringify(usuarios, null, 2);
}

// descarga de archivos

descargarBtn.addEventListener('click', function() {

    // convertimos el array de objeto JSON
    const contenidoJSON = JSON.stringify(usuarios, null, 2);

    // se genera un objeto para poder guardar los datos objetos blob 
    const blob = new Blob([contenidoJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'usuarios.json';
    enlace.click();
    URL.revokeObjectURL(url);


});