import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalEliminarUser({ show, handleClose, usuarioAEliminar, eliminarUsuario }) {  

  const handleEliminar = () => {
    eliminarUsuario(usuarioAEliminar.id);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
  <Modal.Header closeButton>
    <Modal.Title>Confirmar eliminación</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    ¿Seguro que deseas eliminar al usuario{" "}
    <strong>{usuarioAEliminar?.nombre}</strong>?
    <br />
    Esta acción no se puede deshacer.
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Cancelar
    </Button>
    <Button variant="danger" onClick={handleEliminar}>
      Eliminar
    </Button>
  </Modal.Footer>
</Modal>



);
}

export default ModalEliminarUser;