const bcrypt = require('bcrypt');
const pool = require('./db');

async function crearUsuario(req, res) {
  const { nombre, usuario, contrasena, rol } = req.body;

  try {
    const hash = await bcrypt.hash(contrasena, 10);

    const result = await pool.query(
      'INSERT INTO usuarios (nombre, usuario, contrasena, rol) VALUES ($1,$2,$3,$4) RETURNING id_usuario, nombre, usuario, rol',
      [nombre, usuario, hash, rol]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
}

async function obtenerUsuarios(req, res) {
  try {
    const result = await pool.query('SELECT id_usuario AS id, nombre, usuario, rol FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
}

module.exports = { crearUsuario, obtenerUsuarios };