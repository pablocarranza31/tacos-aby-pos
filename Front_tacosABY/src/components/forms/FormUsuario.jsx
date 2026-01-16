import useForm from '../../hooks/useFrom';
import { useEffect } from 'react';

function FormUsuario({ onSubmit, initialData, submitText }) {
  const { values, handleChange, reset, setForm } = useForm({
    nombre: '',
    usuario: '',
    contrasena: '',
    rol: 'mesero'
  });

  // Para edición
  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values, reset);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="nombre"
        placeholder="Nombre completo"
        value={values.nombre}
        onChange={handleChange}
        required
      />

      <input
        name="usuario"
        placeholder="Usuario"
        value={values.usuario}
        onChange={handleChange}
        required
      />

      <input
        name="contrasena"
        type="password"
        placeholder="Contraseña"
        value={values.contrasena}
        onChange={handleChange}
        required
      />

      <select name="rol" value={values.rol} onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="cajero">Cajero</option>
        <option value="mesero">Mesero</option>
        <option value="cocinero">Cocinero</option>
      </select>

      <button type="submit">{submitText}</button>
    </form>
  );
}

export default FormUsuario;
