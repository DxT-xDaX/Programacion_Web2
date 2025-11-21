const express = require('express');
const router = express.Router();
const db = require('../db/conexion'); // Importamos la conexión del Paso 1

// MOSTRAR USUARIOS 
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.send('Error recuperando datos');
        } else {
            res.render('index', { users: results });
        }
    });
});

// AGREGAR USUARIO 
router.post('/add', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) return res.send('Error al insertar');
        res.redirect('/');
    });
});

// EDITAR 
router.get('/edit/:id', (req, res) => {
    const userId = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) return res.send('Error al obtener usuario');
        res.render('edit', { user: result[0] });
    });
});

// ACTUALIZAR 
router.post('/edit/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(sql, [name, email, userId], (err, result) => {
        if (err) return res.send('Error al actualizar');
        res.redirect('/');
    });
});

// ELIMINAR 
router.get('/delete/:id', (req, res) => {
    const userId = req.params.id;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) return res.send('Error al eliminar');
        res.redirect('/');
    });
});

module.exports = router; 