//Importar modulo de htp que viene dentro de node
const http = require('node:http');

//Definir un puerto de salida
const PORT = 3026;

//Crear el servidor
const server = http.createServer((req, res) => {
  //Establecer el encabezado de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });
    //Enviar la respuesta al cliente
    res.end('Hola, este es un servidor HTTP creado con Node.js\n');
});

//Poner el puerto en especifico
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});