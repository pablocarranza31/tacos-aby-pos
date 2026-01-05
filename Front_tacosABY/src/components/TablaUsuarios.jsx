import React from "react";
import Table from 'react-bootstrap/Table';


function TablaUsuarios({ usuarios }) {

    const editarUsuario = (id) => {
        alert(`Editar usuario con ID: ${id} (Funcionalidad no implementada)`);
    }

    const eliminarUsuario = (id) => {
        alert(`Eliminar usuario con ID: ${id} (Funcionalidad no implementada)`);
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th> 
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody> 
                {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.usuario}</td>
                        <td>{usuario.rol}</td>
                        <td><button onClick={() => editarUsuario(usuario.id)}>Editar</button></td>
                        <td><button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TablaUsuarios;