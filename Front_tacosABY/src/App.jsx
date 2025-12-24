import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import Home from "./components/Home";
import Tomar_Pedido from "./components/Tomar_Pedido";
import Admin from "./components/Admin";
import AdminRoute from "./AdminRoute";
import AdminUsuarios from "./components/AdminUsuarios";

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
