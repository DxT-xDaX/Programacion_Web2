const express = require('express');
const router = express.Router();
const path = require('path');

//Definicion de rutas y manejadores

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

router.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, '/registro.html'));
});

module.exports = router;