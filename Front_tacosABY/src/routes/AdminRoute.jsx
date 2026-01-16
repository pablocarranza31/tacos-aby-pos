import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function AdminRoute() {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/" />;

  const { rol } = jwtDecode(token);

  return rol === "admin" ? <Outlet /> : <Navigate to="/home" />;
}
