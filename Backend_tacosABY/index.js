require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: [
    'http://localhost:5173',              // Vite local
    'http://localhost:3000',              // por si acaso
    'https://pablocarranza31.github.io'   // GitHub Pages
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
const authRouter = require('./auth');
const { crearUsuario } = require('./usuarios.controller');
const verificarToken = require('./middleware/auth');
const soloAdmin = require('./middleware/soloAdmin');

// Rutas
app.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});


app.post('/usuarios',verificarToken,soloAdmin, crearUsuario);

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
