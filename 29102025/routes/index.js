const express = require('express');
const router = express.Router();
const path = require('path');

//Definicion de rutas y manejadores

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

router.get('/comparador', (req, res) => {
  res.sendFile(path.join(__dirname, '/comparador.html'));
});

router.get('/calculadora', (req, res) => {
  res.sendFile(path.join(__dirname, '/calculadora.html'));
});

router.get('/carritodecompras', (req, res) => {
  res.sendFile(path.join(__dirname, '/carritodecompras.html'));
});

module.exports = router;