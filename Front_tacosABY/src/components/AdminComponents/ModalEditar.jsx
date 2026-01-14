import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';


function ModalEditar({ show, handleClose, usuario, obtenerUsuarios }) {  
const [form, setForm] = useState(null);

useEffect(() => {
    if (usuario) {
      setForm({ ...usuario });
    }
    }, [usuario]);

  if (!form) return null;

const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await api.put(`/usuarios/${usuario.id}`, form);
      alert('Usuario actualizado correctamente');
      obtenerUsuarios();
    } catch (error) {
      alert(error.response?.data?.error || 'Error al actualizar usuario');
      console.error(error);
    }

    handleClose();
  };


return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Editar usuario</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit} className="form">
        <label >Editar nombre</label>
        <input
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <label>Editar usuario</label>
        <input
          name="usuario"
          placeholder="Usuario"
          value={form.usuario}
          onChange={handleChange}
          required
        />

        <label>Editar contraseña</label>
        <input
          name="contrasena"
          type="password"
          placeholder="Contraseña"
          value={form.contrasena || ''}
          onChange={handleChange}
          required
        />

        <label>Editar rol</label>
        <select name="rol" value={form.rol} onChange={handleChange}>
          <option value="admin">Admin</option>
          <option value="cajero">Cajero</option>
          <option value="mesero">Mesero</option>
          <option value="cocinero">Cocinero</option>
        </select>

        <button type="submit">Guardar cambios</button>
      </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditar;
