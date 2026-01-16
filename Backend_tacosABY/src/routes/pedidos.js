const express = require('express');
const router = express.Router();
const verificarToken = require('../middlewares/verificarToken');

router.post('/crear', verificarToken);

module.exports = router;