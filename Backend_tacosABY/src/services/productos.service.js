const pool = require('../config/db');
 
async function crearProducto(data) {
  const { nombre, precio, stock, activo, categoria } = data;

  const result = await pool.query(
        `INSERT INTO productos (nombre, precio, stock, activo, id_categoria)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id_producto AS id, nombre, precio, id_categoria`,
        [nombre, precio, stock, activo, categoria]
    );
    return result.rows[0];
}

async function obtenerProductos() {
    const result = await pool.query(
        'SELECT p.id_producto AS id, p.nombre, p.precio, p.stock, p.activo, c.nombre AS categoria FROM productos p JOIN categorias c ON p.id_categoria = c.id_categoria'
    );
    return result.rows;
}

async function actualizarProducto(id, data) {
    const { nombre, descripcion, precio, categoria } = data;
    const result = await pool.query(
        `UPDATE productos
            SET nombre=$1, descripcion=$2, precio=$3, categoria=$4
            WHERE id_producto=$5
            RETURNING id_producto AS id, nombre, descripcion, precio, categoria`,
        [nombre, descripcion, precio, categoria, id]
    );
    return result.rows[0];
}

async function eliminarProducto(id) {
    await pool.query(
        'DELETE FROM productos WHERE id_producto=$1', 
        [id]
    );
}

module.exports = {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto
};
