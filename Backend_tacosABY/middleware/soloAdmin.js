function soloAdmin(req, res, next) {
  if (req.usuario.rol !== 'admin') {
    return res.status(403).json({ error: 'No autorizado' });
  }
  next();
}

module.exports = soloAdmin;
