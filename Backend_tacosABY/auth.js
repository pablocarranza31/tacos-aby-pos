const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE usuario = $1',
      [usuario]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ mensaje: 'Usuario no existe' });
    }

    const user = result.rows[0];

    const ok = await bcrypt.compare(contrasena, user.contrasena);
    if (!ok) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: user.id_usuario, rol: user.rol, nombre: user.nombre },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({
      token,
      usuario: user.nombre,
      rol: user.rol
    });

  } catch (err) {
    console.error('ERROR LOGIN:', err);
    res.status(500).json(err);
  }
});

module.exports = router;
