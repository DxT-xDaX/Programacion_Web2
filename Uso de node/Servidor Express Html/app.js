const express = require('express');
const path = require('path');
const app = express();
const port = 3002;

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  // Envía el archivo index.html
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor Express con HTML corriendo en el puerto ${port}`);
});