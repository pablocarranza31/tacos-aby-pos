const express = require('express');
const router = express.Router();

// Controlador de usuarios
const { 
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario
} = require('../controllers/usuarios.controller');

const verificarToken = require('../middleware/auth');
const soloAdmin = require('../middleware/soloAdmin');

// Rutas de usuarios
router.get('/lista',verificarToken, soloAdmin, obtenerUsuarios);
router.post('/crear', verificarToken, soloAdmin, crearUsuario);
router.put('/:id', verificarToken, soloAdmin, actualizarUsuario);
router.delete('/:id', verificarToken, soloAdmin, eliminarUsuario);


module.exports = router;