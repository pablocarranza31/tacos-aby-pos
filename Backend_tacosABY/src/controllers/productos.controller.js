const productosService = require('../services/productos.service');

async function crearProducto(req, res) {
  try {
    const producto = await productosService.crearProducto(req.body);
    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear producto' });
  } 
}
async function obtenerProductos(req, res) {
  try {
    const productos = await productosService.obtenerProductos();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
}
async function actualizarProducto(req, res) {
  const { id } = req.params;    
    try {
        const producto = await productosService.actualizarProducto(id, req.body);
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
}
async function eliminarProducto(req, res) {
  const { id } = req.params;
    try {
        await productosService.eliminarProducto(id);
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto' });
    }   
}

module.exports = {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto
};