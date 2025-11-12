const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const DATA_FILE = path.join(__dirname, 'data.json');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// ruta GET leer usuarios desde el JSON
app.get('/api/users', (req, res) => {
const data = fs.readFileSync(DATA_FILE);
res.json(JSON.parse(data));
});

// ruta POST agregar un nuevo usuario al JSON
app.post('/api/users', (req, res) => {
const data = JSON.parse(fs.readFileSync(DATA_FILE));
const nuevo = req.body;
nuevo.id = data.length ? data[data.length - 1].id + 1 : 1;
data.push(nuevo);
fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
res.json({mensaje: 'Usuario Aagregado'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});