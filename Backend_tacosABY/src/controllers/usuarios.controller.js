const usuariosService = require('../services/usuarios.service');

async function crearUsuario(req, res) {
  try {
    const usuario = await usuariosService.crearUsuario(req.body);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
}

async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await usuariosService.obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
}


async function actualizarUsuario(req, res) {
  const { id } = req.params;
  try {
    const usuario = await usuariosService.actualizarUsuario(id, req.body);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
}

async function eliminarUsuario(req, res) {
  const { id } = req.params;  
  try {
    await usuariosService.eliminarUsuario(id);
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  } 
}

module.exports = {
   crearUsuario,
   obtenerUsuarios, 
   actualizarUsuario, 
   eliminarUsuario 
};