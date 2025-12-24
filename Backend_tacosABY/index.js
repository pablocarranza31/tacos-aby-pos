require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
const authRouter = require('./auth');
const { crearUsuario } = require('./usuarios.controller');
const verificarToken = require('./middleware/auth');
const soloAdmin = require('./middleware/soloAdmin');

app.post('/usuarios',verificarToken,soloAdmin, crearUsuario);

app.use('/auth', authRouter);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
