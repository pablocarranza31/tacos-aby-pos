import useForm from '../../hooks/useFrom';
import { useEffect } from 'react';

function FormProductos({ onSubmit, initialData, submitText }) {
  const { values, handleChange, reset, setForm } = useForm({
    nombre: '',
    precio: '',
    stock: '',
    activo: 'true',
    categoria: ''
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
        placeholder="Nombre del producto"
        value={values.nombre}
        onChange={handleChange}
        required
      />

      <input
        name="precio"
        placeholder="Precio"
        value={values.precio}
        onChange={handleChange}
        required
      />

      <input
        name="stock"
        placeholder="Stock"
        value={values.stock}
        onChange={handleChange}
        required
      />

      <select name="activo" value={values.activo} onChange={handleChange}>
        <option value="true">Activo</option>
        <option value="false">Inactivo</option>
      </select>

        <select name="categoria" value={values.categoria} onChange={handleChange} required>
          <option value="">Seleccionar categoría</option>
          <option value="1">Lonches</option>
          <option value="2">Tacos</option>
          <option value="3">Bebidas</option>
          <option value="4">Extras</option>
        </select>

      <button type="submit">{submitText}</button>
    </form>
  );
}

export default FormProductos;
