import { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import '../../css/AdminUsuarios.css';
import Navbar from '../common/Navbar';
import TablaUsuarios from '../tables/TablaUsuarios';
import { Form, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import FormUsuario from '../forms/FormUsuario';
import ModalBase from '../common/ModalBase';

function AdminUsuarios() {
  const [loading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  
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

  const CrearUsuario = async (data) => {
    try {
      await api.post('/usuarios/crear', data);
      alert('Usuario creado correctamente');
      obtenerUsuarios();
    } catch (error) {
      alert(error.response?.data?.error || 'Error al crear usuario');
    }
  };

  const abrirEditar = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setShowModal(true);
  };

  const abrirEliminar = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setShowDelete(true);
  };
  
   const editarUsuario = async (data) => {
    await api.put(`/usuarios/${usuarioSeleccionado.id}`, data);
    obtenerUsuarios();
    setShowModal(false);
  };

  const eliminarUsuario = async () => {
    await api.delete(`/usuarios/${usuarioSeleccionado.id}`);
    obtenerUsuarios();
    setShowDelete(false);
  };

  return (
    <><Navbar nombre={nombre} />
    <div className="admin-usuarios">
      <h2>Crear Usuario</h2>
      <FormUsuario
        onSubmit={CrearUsuario}
        submitText="Crear Usuario"
      />
    </div>
    {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <TablaUsuarios 
        usuarios={usuarios} 
        onEdit={abrirEditar}
        onDelete={abrirEliminar}
        />
      )}
         {/* MODAL EDITAR */}
      <ModalBase
        show={showModal}
        handleClose={() => setShowModal(false)}
        title="Editar usuario"
      >
        <FormUsuario
          initialData={usuarioSeleccionado}
          onSubmit={editarUsuario}
          submitText="Guardar cambios"
        />
      </ModalBase>

      {/* MODAL ELIMINAR */}
      <ModalBase
        show={showDelete}
        handleClose={() => setShowDelete(false)}
        title="Eliminar usuario"
      >
        <p>¿Seguro que deseas eliminar a <b>{usuarioSeleccionado?.nombre}</b>?</p>

        <button className="btn btn-danger" onClick={eliminarUsuario}>
          Eliminar
        </button>
      </ModalBase>
    </>
  );
}

export default AdminUsuarios ;
