const authService = require('../services/auth.services');

async function login(req, res) {
  const { usuario, contrasena } = req.body;
    try {
        const result = await authService.login(usuario, contrasena);
        res.json(result);
    } catch (error) {
        if (error.message === 'Credenciales inválidas' || error.message === 'Contraseña incorrecta') {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }
        res.status(500).json({ error: 'Error del servidor' });
    }   
}

module.exports = {
  login
};