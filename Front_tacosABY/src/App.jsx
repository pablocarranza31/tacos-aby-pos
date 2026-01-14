import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tomar_Pedido from "./components/pedidos/Tomar_Pedido";
import Admin from "./components/AdminComponents/Admin";
import AdminRoute from "./AdminRoute";
import AdminUsuarios from "./components/AdminComponents/AdminUsuarios";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tomar-pedido" element={<Tomar_Pedido />} />
      <Route path="/admin" element={
        <AdminRoute>
          <Admin />
        </AdminRoute>
      } />
      <Route path="/admin/usuarios" element={
        <AdminRoute>
          <AdminUsuarios />
        </AdminRoute>
      } />
    </Routes>
  )
}

export default App
