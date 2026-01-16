import Table from 'react-bootstrap/Table';

function TablaUsuarios({ usuarios, onEdit, onDelete }) {
  return (
    <>
      <h2 className="mb-3 text-primary" style={{ padding: '0 1rem' }}>
        Lista de Usuarios
      </h2>

      <div style={{ maxHeight: '250px', padding: '0 1rem', overflowY: 'auto' }}>
        <Table striped bordered hover>
          <thead className="table-light sticky-top">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Rol</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
                <td>
                  <span className={`badge ${
                    usuario.rol === 'admin'
                      ? 'bg-danger'
                      : 'bg-primary'
                  }`}>
                    {usuario.rol}
                  </span>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => onEdit(usuario)}
                  >
                    ✏️
                  </button>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(usuario)}
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

export default TablaUsuarios;
