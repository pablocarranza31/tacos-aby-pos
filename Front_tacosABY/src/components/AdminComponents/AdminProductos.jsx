import { useEffect, useState } from 'react';
import api from '../../api/axiosConfig'; // si no lo tienes, abajo te lo doy
import '../Css/AdminUsuarios.css';
import Navbar from '../common/Navbar';
import TablaUsuarios from './TablaUsuarios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function AdminProductos()
{const [form, setForm] = useState({
    nombre: '',
    usuario: '',
    contrasena: '',
    rol: 'mesero'
  });
  const [loading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();
  

   useEffect(() => {
      const token = localStorage.getItem('token');
  
      if (!token) {
        navigate('/');
        return;
      }
  
      try {
        const decoded = jwtDecode(token);
        setNombre(decoded.nombre);
        obtenerUsuarios();
  
      } catch {
        localStorage.removeItem('token');
        navigate('/');
      }
    }, []);

   const obtenerUsuarios = async () => {
    try {
      const response = await api.get('/usuarios/lista');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error al cargar usuarios', error);
    } finally {
      setLoading(false);
    }
  };


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   e.preventDefault();

    try {
      await api.post('/usuarios', form);
      alert('Usuario creado correctamente');
      setForm({ nombre: '', usuario: '', contrasena: '', rol: 'mesero' });
      obtenerUsuarios();
    } catch (error) {
      alert(error.response?.data?.error || 'Error al crear usuario');
    }
  };

  return (
    <><Navbar nombre={nombre} />

    
    <div className="admin-usuarios">
      <h2>Crear Usuario</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <input
          name="usuario"
          placeholder="Usuario"
          value={form.usuario}
          onChange={handleChange}
          required
        />

        <input
          name="contrasena"
          type="password"
          placeholder="Contraseña"
          value={form.contrasena}
          onChange={handleChange}
          required
        />

        <select name="rol" value={form.rol} onChange={handleChange}>
          <option value="admin">Admin</option>
          <option value="cajero">Cajero</option>
          <option value="mesero">Mesero</option>
          <option value="cocinero">Cocinero</option>
        </select>

        <button type="submit">Crear Usuario</button>
      </form>
    </div>

    {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <TablaUsuarios usuarios={usuarios} 
        obtenerUsuarios={obtenerUsuarios}
        />
      )}
    </>
  );
}

export default AdminProductos ;
