import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Menu = () => {
    return (
        <Navbar expand="lg" className=" navbar-menu">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>TucuCocina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='text-light'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Recetas</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Iniciar Sesion</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Registrarse</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;