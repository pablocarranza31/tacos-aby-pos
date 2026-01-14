const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(usuario, contrasena) {
  const result = await pool.query(
    'SELECT * FROM usuarios WHERE usuario = $1',
    [usuario]
  );
    if (result.rows.length === 0) {
        throw new Error('Credenciales inválidas');
    }

    const user = result.rows[0];

    const ContrasenaValida = await bcrypt.compare(contrasena, user.contrasena);
    if (!ContrasenaValida) {
        throw new Error('Contraseña incorrecta');
    }

    const token = jwt.sign(
      { 
        id: user.id_usuario, 
        rol: user.rol, 
        nombre: user.nombre },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    return {
      token,
      usuario: { 
        id: user.id_usuario,
        nombre: user.nombre,
        usuario: user.usuario,
        rol: user.rol
      },
    };
}

module.exports = {
  login
};
