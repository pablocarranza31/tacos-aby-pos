import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function AdminRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/" />;

  const { rol } = jwtDecode(token);

  return rol === 'admin' ? children : <Navigate to="/home" />;
}
