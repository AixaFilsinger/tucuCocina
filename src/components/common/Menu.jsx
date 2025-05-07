import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Swal from "sweetalert2";
import { Button } from 'react-bootstrap';
const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const cerrarSesion = () => {
    //borrar del local
    localStorage.removeItem("usuario");
    setUsuarioLogueado({});
    navegacion("/");
    Swal.fire(
      'Sesión cerrada con exito!',
      'Usted cerro sesión correctamente',
      'success'
    )
  };
    return (
        <Navbar expand="lg" className=" navbar-menu">
      <Container>
        <Navbar.Brand as={Link} to={'/'} className='text-light'>TucuCocina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavLink end className="nav-item nav-link text-light" to={"/"}>
              Inicio
            </NavLink>
          
          <NavLink end className="nav-item nav-link text-light" to={"/registrarse"}>
              Registrarse
            </NavLink>
            {usuarioLogueado.email ? (
              <>

          <NavLink end className="nav-item nav-link text-light" to={`/usuario`}>
              Usuario
            </NavLink>
            <Button variant="secondary" onClick={cerrarSesion}>Cerrar sesión</Button>
              </>
            ) : (
              <NavLink end className="nav-item nav-link text-light" to={"/login"}>
              Login
            </NavLink> )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;