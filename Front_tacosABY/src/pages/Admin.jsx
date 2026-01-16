import '../Css/Admin.css';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <h2>Panel de Administración</h2>

      <div className="admin-grid">

        <div className="admin-card" onClick={() => navigate('/admin/usuarios')}>
          👥 Usuarios
          <p>Crear y gestionar usuarios</p>
        </div>

        <div className="admin-card" onClick={() => navigate('/admin/productos')}>
          🌮 Productos
          <p>Alta, edición y stock</p>
        </div>

        <div className="admin-card" onClick={() => navigate('/admin/ventas')}>
          📊 Ventas
          <p>Historial y reportes</p>
        </div>

        <div className="admin-card" onClick={() => navigate('/admin/corte')}>
          💰 Corte de Caja
          <p>Resumen del día</p>
        </div>

        <div className="admin-card logout" onClick={() => {
          localStorage.removeItem('token');
          navigate('/'); 
        }}>
          🚪 Cerrar sesión
        </div>

      </div>
    </div>
  );
}

export default Admin;
