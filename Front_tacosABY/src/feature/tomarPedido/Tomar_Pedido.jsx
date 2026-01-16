import { useState, useEffect } from 'react';
import DatosCliente from './DatosCliente';
import PlatoBuilder from './PlatoBuilder';
import PedidoResumen from './PedidoResumen';
import ToastPOS from '../../components/ui/ToastPOS';
import {  useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import api from '../../api/axiosConfig';


function TomarPedido() {
  const [nombreCliente, setNombreCliente] = useState('');
  const [numeroMesa, setNumeroMesa] = useState('');
  const [itemsPedido, setItemsPedido] = useState([]);
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({
  show: false,
  message: '',
  variant: 'danger',
});




  useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
        return;
      }
      try {
        const decoded = jwtDecode(token);
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

  const mostrarToast = (message, variant = 'danger') => {
  setToast({ show: true, message, variant });
};

  const agregarPlato = (plato) => {
    setItemsPedido([...itemsPedido, plato]);
  };

  const eliminarPlato = (index) => {
    setItemsPedido(itemsPedido.filter((_, i) => i !== index));
  };

  const enviarPedido = () => {
   if (!nombreCliente.trim()) {
    mostrarToast('Ingresa el nombre del cliente');
    return;
  }

  if (!numeroMesa.trim()) {
    mostrarToast('Ingresa el número de mesa');
    return;
  }

  if (!itemsPedido.length) {
    mostrarToast('Agrega al menos un plato');
    return;
  }

  mostrarToast('Pedido enviado correctamente', 'success');
    console.log({
      nombreCliente,
      numeroMesa,
      items: itemsPedido,
    });
  };

  return (
    <>
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Tomar Pedido</h2>

      <DatosCliente
        nombreCliente={nombreCliente}
        setNombreCliente={setNombreCliente}
        numeroMesa={numeroMesa}
        setNumeroMesa={setNumeroMesa}
      />

      <PlatoBuilder onAddPlato={agregarPlato} productos={productos} />

      <PedidoResumen items={itemsPedido} onRemove={eliminarPlato} />

        <div className="d-grid mt-3">
            <button
            className="btn btn-primary btn-lg"
            disabled={!itemsPedido.length}
            onClick={enviarPedido}
            >
            Enviar Pedido
            </button>
        </div>
    </div>

    <ToastPOS
  show={toast.show}
  message={toast.message}
  variant={toast.variant}
  onClose={() => setToast({ ...toast, show: false })}
/>
</>

  );
}

export default TomarPedido;
