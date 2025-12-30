import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import './Css/Home.css';

function Home() {
    const navigate = useNavigate();
    const [rol, setRol] = useState(null);

    useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setRol(decoded.rol); // 👈 admin / cajero / mesero
    } catch (error) {
      localStorage.removeItem('token');
      navigate('/');
    }
  }, []);

    const handleMeseroClick = () => {
        navigate('/tomar-pedido');
    };

    const handleAdminClick = () => {
        navigate('/admin');
    }

    return (
        <div className='home-page'>
      <div className='home-container'>

        <div className='home-text'>
          Bienvenido, rol: <b>{rol}</b>
        </div>

        <div className='opctions'>

          {/* MESERO */}
          {(rol === 'admin' || rol === 'mesero') && (
            <div className='opctions-btn' onClick={handleMeseroClick}>
              <button className='opctions-btn'>Mesero</button>
              <img className='opctions-img' src={`${import.meta.env.BASE_URL}icons/camarero.png`} />
            </div>
          )}

          {/* COCINERO */}
          {(rol === 'admin' || rol === 'cocinero') && (
            <div className='opctions-btn'>
              <button className='opctions-btn'>Cocinero</button>
              <img className='opctions-img' src={`${import.meta.env.BASE_URL}icons/cocinero.png`} />
            </div>
          )}

          {/* CAJERO */}
          {(rol === 'admin' || rol === 'cajero') && (
            <div className='opctions-btn'>
              <button className='opctions-btn'>Cajero</button>
              <img className='opctions-img' src={`${import.meta.env.BASE_URL}icons/caja-registradora.png`} />
            </div>
          )}
           {/* Administrador */}
          {(rol === 'admin') && (
            <div className='opctions-btn' onClick={handleAdminClick}>
              <button className='opctions-btn'>Administrador</button>
              <img className='opctions-img' src={adminIcon} />
            </div>
          )}

        </div>
      </div>
    </div>
        
    )
}

export default Home;
