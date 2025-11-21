// Archivo: app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Importamos las rutas que creamos en el paso 2
const rutasUsuarios = require('./routes/crud');

const app = express();

// Configuraciones
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Archivos estáticos (CSS, JS públicos)
app.use(express.static(path.join(__dirname, 'public')));

// USAR LAS RUTAS
// Aquí le decimos: "Para cualquier ruta que empiece con '/', usa lo que hay en rutasUsuarios"
app.use('/', rutasUsuarios); 

const port = 3009;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});