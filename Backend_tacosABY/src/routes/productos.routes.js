const express = require('express');
const router = express.Router();

// Controlador de productos
const { 
  crearProducto,
    obtenerProductos,
    actualizarProducto,
    eliminarProducto
} = require('../controllers/productos.controller');

const verificarToken = require('../middleware/auth');
const soloAdmin = require('../middleware/soloAdmin');

// Rutas de productos
router.get('/lista',verificarToken,soloAdmin,obtenerProductos);
router.post('/crear', verificarToken, soloAdmin, crearProducto);
router.put('/:id', verificarToken, soloAdmin, actualizarProducto);
router.delete('/:id', verificarToken, soloAdmin, eliminarProducto);

module.exports = router;