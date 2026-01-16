import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalBase({
  show,
  handleClose,
  title,
  children,
  footer = true
}) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {children}
      </Modal.Body>

      {footer && (
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default ModalBase;
