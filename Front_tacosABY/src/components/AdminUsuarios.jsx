import { useState } from 'react';
import api from '../api/axiosConfig'; // si no lo tienes, abajo te lo doy
import './Css/AdminUsuarios.css';

function AdminUsuarios() {
  const [form, setForm] = useState({
    nombre: '',
    usuario: '',
    contrasena: '',
    rol: 'mesero'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/usuarios', form);
      alert('Usuario creado correctamente');
      setForm({ nombre: '', usuario: '', contrasena: '', rol: 'mesero' });
    } catch (error) {
      alert(error.response?.data?.error || 'Error al crear usuario');
    }
  };

  return (
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
  );
}

export default AdminUsuarios;
