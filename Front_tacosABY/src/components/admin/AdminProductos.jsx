import { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import '../../css/AdminUsuarios.css';
import Navbar from '../common/Navbar';
import TablaProductos from '../tables/TablaProductos';
import { Form, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import FormProductos from '../forms/FormProducto';
import ModalBase from '../common/ModalBase';

function AdminProductos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  
   useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
        return;
      }
      try {
        const decoded = jwtDecode(token);
        setNombre(decoded.nombre);
        obtenerProductos();
      } catch {
        localStorage.removeItem('token');
        navigate('/');
      }
    }, []);

   const obtenerProductos = async () => {
    try {
      const response = await api.get('/productos/lista'); 
      setProductos(response.data);
    } catch (error) {
      console.error('Error al cargar productos', error);
    } finally {
      setLoading(false);
    }
  };

  const CrearProducto = async (data) => {
    try {
      await api.post('/productos/crear', data);
      alert('Producto creado correctamente');
      obtenerProductos();
    } catch (error) {
      console.error('Error al crear producto', error);
      alert(error.response?.data?.error || 'Error al crear producto');
    }
  };

  const abrirEditar = (producto) => {
    setProductoSeleccionado(producto);
    setShowModal(true);
  };

  const abrirEliminar = (producto) => {
    setProductoSeleccionado(producto);
    setShowDelete(true);
  };

   const editarProducto = async (data) => {
    await api.put(`/productos/${productoSeleccionado.id}`, data);
    obtenerProductos();
    setShowModal(false);
  };

  const eliminarProducto = async () => {
    await api.delete(`/productos/${productoSeleccionado.id}`);
    obtenerProductos();
    setShowDelete(false);
  };

  return (
    <><Navbar nombre={nombre} />
    <div className="admin-usuarios">
      <h2>Crear Producto</h2>
      <FormProductos
        onSubmit={CrearProducto}
        submitText="Crear Producto"
      />
    </div>
    {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <TablaProductos 
        productos={productos} 
        onEdit={abrirEditar}
        onDelete={abrirEliminar}
        />
      )}
         {/* MODAL EDITAR */}
      <ModalBase
        show={showModal}
        handleClose={() => setShowModal(false)}
        title="Editar producto"
      >
        <FormProductos
          initialData={productoSeleccionado}
          onSubmit={editarProducto}
          submitText="Guardar cambios"
        />
      </ModalBase>

      {/* MODAL ELIMINAR */}
      <ModalBase
        show={showDelete}
        handleClose={() => setShowDelete(false)}
        title="Eliminar producto"
      >
        <p>¿Seguro que deseas eliminar a <b>{productoSeleccionado?.nombre}</b>?</p>

        <button className="btn btn-danger" onClick={eliminarProducto}>
          Eliminar
        </button>
      </ModalBase>
    </>
  );
}

export default AdminProductos ;
