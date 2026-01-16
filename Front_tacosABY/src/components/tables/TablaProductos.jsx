import Table from 'react-bootstrap/Table';

function TablaProductos({ productos, onEdit, onDelete }) {
  return (
    <>
      <h2 className="mb-3 text-primary" style={{ padding: '0 1rem' }}>
        Lista de Productos
      </h2>

      <div style={{ maxHeight: '450px', padding: '0 1rem', overflowY: 'auto' }}>
        <Table striped bordered hover>
          <thead className="table-light sticky-top">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoria</th>
              <th>Activo</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {productos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.stock}</td>
                <td>{producto.categoria}</td>
                <td>
                  <span className={`badge ${
                    producto.activo
                      ? 'bg-success'
                      : 'bg-secondary'
                  }`}>
                    {producto.activo ? 'Sí' : 'No'}
                  </span>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => onEdit(producto)}
                  >
                    ✏️
                  </button>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(producto)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default TablaProductos;
