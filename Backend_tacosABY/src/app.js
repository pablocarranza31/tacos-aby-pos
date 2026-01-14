const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth.routes');
const usuariosRouter = require('./routes/usuarios.routes');

const app = express();

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

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API funcionando correctamente ');
});

// Rutas
app.use('/auth', authRouter);
app.use('/usuarios', usuariosRouter);

module.exports = app;