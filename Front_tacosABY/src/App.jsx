import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tomar_Pedido from "./feature/tomarPedido/Tomar_Pedido";
import Admin from "./pages/Admin";
import AdminRoute from "./routes/AdminRoute";
import AdminUsuarios from "./components/admin/AdminUsuarios";
import AdminProductos from "./components/admin/AdminProductos";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tomar-pedido" element={<Tomar_Pedido />} />
      
  {/* RUTAS ADMIN */}
  <Route element={<AdminRoute />}>
    <Route path="/admin" element={<Admin />} />
    <Route path="/admin/usuarios" element={<AdminUsuarios />} />
    <Route path="/admin/productos" element={<AdminProductos />} />
  </Route>
    </Routes>
  )
}

export default App
