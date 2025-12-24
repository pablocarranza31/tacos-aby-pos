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

module.exports = { crearUsuario };
