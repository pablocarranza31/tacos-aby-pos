import { Toast, ToastContainer } from 'react-bootstrap';

function ToastPOS({ show, onClose, message, variant = 'danger' }) {
  return (
    <ToastContainer position="middle-center" className="p-3">
      <Toast
        bg={variant}
        show={show}
        onClose={onClose}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Espera</strong>
        </Toast.Header>
        <Toast.Body className="text-white fs-5">
          {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastPOS;
