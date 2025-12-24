import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import './Css/Login.css'; 


function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // ⛔ evita recarga

    try {
      const res = await axios.post('http://localhost:3000/auth/login', {
        usuario,
        contrasena
      });

      const { token } = res.data;

      // guardar token
      localStorage.setItem('token', token);

      // opcional: leer rol
      const decoded = jwtDecode(token);
      console.log('Usuario:', decoded);

      navigate('/home'); // ✅ redirige
    } catch (error) {
      alert('Usuario o contraseña incorrectos');
    }
  };

    return (
        <div className="login-page">
      <div className="login-container">
        <div className="logo">
          <div className="logo-icon"></div>
          <div className="logo-text">Tacos Aby</div>
        </div>
        <div className="welcome-text">
          ¡Bienvenido de nuevo! Por favor, inicia sesión con tus credenciales.
        </div>

        <form className="login-form"  onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button type="submit" className="login-btn">Iniciar sesión</button>
        </form>

        <div className="divider"><span>o</span></div>

      </div>
    </div>
    )

}

export default Login;
