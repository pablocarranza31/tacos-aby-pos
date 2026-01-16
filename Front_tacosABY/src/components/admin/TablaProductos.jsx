import React from "react";
import Table from 'react-bootstrap/Table';
import ModalEditar from './ModalEditarUser';
import api from '../../api/axiosConfig';
import ModalEliminarUser from './ModalEliminarUser';

function TablaUsuarios({ usuarios, obtenerUsuarios }) {
const [showModal, setShowModal] = React.useState(false);
const [usuarioSeleccionado, setUsuarioSeleccionado] = React.useState(null);
const [showModalConfirm, setShowModalConfirm] = React.useState(false);
const [usuarioAEliminar, setUsuarioAEliminar] = React.useState(null);

const stickyStyle = {
   position: 'sticky',
  top: 0,
  zIndex: 1,        
  backgroundColor: '#ffffff',
  borderBottom: '2px solid #dee2e6',
  borderRight: '1px solid #dee2e6',
  padding: '0.75rem'
};


  const cerrarModalEditar = () => {
    setShowModal(false);
  };

  const cerrarModalEliminar = () => {
    setShowModalConfirm(false);
  }

  const editarUsuario = (usuario) => {
  setUsuarioSeleccionado(usuario);
  setShowModal(true);
  };

  const confirmarEliminarUsuario = (usuario) => {
  setUsuarioAEliminar(usuario);
  setShowModalConfirm(true);
};


  const eliminarUsuario = async (id) => {
    try {
      await api.delete(`/usuarios/${id}`);
      obtenerUsuarios();
      setShowModalConfirm(false);
      setUsuarioAEliminar(null);
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return (
    <>
    <h2 className="mb-3 text-primary" style={{ padding: '0 1rem' }}>Lista de Usuarios</h2>
    <div style={{ maxHeight: '250px', maxWidth: '100%', padding: '0 1rem', overflowY: 'auto' }}>
      <Table striped bordered hover >
        <thead className="table-light sticky-top bg-light" style={{ zIndex: 1 }}>
          <tr>
            <th style={stickyStyle}>ID</th>
            <th style={stickyStyle}>Nombre</th>
            <th style={stickyStyle}>Usuario</th>
            <th style={stickyStyle}>Rol</th>
            <th style={stickyStyle}>Editar</th>
            <th style={stickyStyle}>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.usuario}</td>
              <td> <span className={`badge ${
                      usuario.rol === 'admin'
                      ? 'bg-danger'
                      : usuario.rol === 'mesero' || usuario.rol === 'cocinero' || usuario.rol === 'cajero'
                      ? 'bg-primary'
                      : 'bg-secondary'
                    }`}>
    {usuario.rol}
  </span></td>
              <td className="text-center">
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editarUsuario(usuario)}
                >
                  ✏️
                </button>
              </td>
              <td className="text-center">
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => confirmarEliminarUsuario(usuario)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    <ModalEliminarUser
    show={showModalConfirm}
    handleClose={cerrarModalEliminar}
    usuarioAEliminar={usuarioAEliminar}
    eliminarUsuario={eliminarUsuario}
  />

    <ModalEditar
    show={showModal}
    handleClose={cerrarModalEditar}
    usuario={usuarioSeleccionado}
    obtenerUsuarios={obtenerUsuarios}
  />
  </>
    
  );
}

export default TablaUsuarios;
