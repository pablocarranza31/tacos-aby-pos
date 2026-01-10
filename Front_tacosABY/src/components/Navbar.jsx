import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function navbar({nombre}) {
  const navigate = useNavigate();
  return (
    <Navbar  expand="lg" bg="dark" variant="dark"  sticky='top'>
      <Container fluid>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={`${import.meta.env.BASE_URL}icons/logoTacosAby.png`}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Tacos de barbacoa Aby
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{nombre}</a>
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={() => {
          localStorage.removeItem('token');
          navigate('/'); 
        }} variant="outline-light" style={{ marginLeft: '10px' }}>cerrar sesión

          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;