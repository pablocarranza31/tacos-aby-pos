import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './Css/Home.css';
import Navbar from './Navbar';

function Home() {
  const navigate = useNavigate();
  const [rol, setRol] = useState(null);
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setRol(decoded.rol);
      setNombre(decoded.nombre);

    } catch {
      localStorage.removeItem('token');
      navigate('/');
    }
  }, []);

  return (
    <div className="home-page"> 
      <div className="home-container">

        <div className="home-text">
          Bienvenido <br />
          <span className="rol-badge">{nombre}</span>
        </div>

        <div className="opctions">

          {(rol === 'admin' || rol === 'mesero') && (
            <div
              className="opctions-btn mesero"
              onClick={() => navigate('/tomar-pedido')}
            >
              <span>Mesero</span>
              <img src={`${import.meta.env.BASE_URL}icons/camarero.png`} />
            </div>
          )}

          {(rol === 'admin' || rol === 'cocinero') && (
            <div className="opctions-btn cocinero">
              <span>Cocinero</span>
              <img src={`${import.meta.env.BASE_URL}icons/cocinero.png`} />
            </div>
          )}

          {(rol === 'admin' || rol === 'cajero') && (
            <div className="opctions-btn cajero">
              <span>Cajero</span>
              <img src={`${import.meta.env.BASE_URL}icons/caja-registradora.png`} />
            </div>
          )}

          {rol === 'admin' && (
            <div
              className="opctions-btn admin"
              onClick={() => navigate('/admin')}
            >
              <span>Administrador</span>
              <img src={`${import.meta.env.BASE_URL}icons/admin.png`} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Home;
