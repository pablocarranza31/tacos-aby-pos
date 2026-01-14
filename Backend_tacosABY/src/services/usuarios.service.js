const bcrypt = require('bcrypt');
const pool = require('../config/db');

async function crearUsuario(data) {
  const { nombre, usuario, contrasena, rol } = data;

  const hash = await bcrypt.hash(contrasena, 10);

  const result = await pool.query(
    `INSERT INTO usuarios (nombre, usuario, contrasena, rol)
     VALUES ($1,$2,$3,$4)
     RETURNING id_usuario AS id, nombre, usuario, rol`,
    [nombre, usuario, hash, rol]
  );

  return result.rows[0];
}

async function obtenerUsuarios() {
  const result = await pool.query(
    'SELECT id_usuario AS id, nombre, usuario, rol FROM usuarios'
  );
  return result.rows;
}

async function actualizarUsuario(id, data) {
  const { nombre, usuario, contrasena, rol } = data;
    const hash = await bcrypt.hash(contrasena, 10);
    const result = await pool.query(
        `UPDATE usuarios
            SET nombre=$1, usuario=$2, contrasena=$3, rol=$4
            WHERE id_usuario=$5
            RETURNING id_usuario AS id, nombre, usuario, rol`,
        [nombre, usuario, hash, rol, id]
    );

    return result.rows[0];
}

async function eliminarUsuario(id) {
    await pool.query(
        'DELETE FROM usuarios WHERE id_usuario=$1', 
        [id]
    );
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario
};