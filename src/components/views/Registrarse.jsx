import { Col, Row,  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registrarse = () => {
    return (
      <section className='mainSection mt-5'>
        <h3 className='text-center'>Registrarse</h3>
        <Row className="justify-content-center">
          <Col sm={8} md={6} xl={6}>
          <Form className='form-registro'>
      <Form.Group className="mb-2" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" />
        
      </Form.Group>
      <Form.Group className="mb-2" controlId="apellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su apellido" />
        
      </Form.Group>
      <Form.Group className="mb-2" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
        
      </Form.Group>
      

      <Form.Group className="mb-2" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      
      <Form.Group className="mb-2" controlId="password">
        <Form.Label>Repetir Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
          </Col>

        </Row>
        
      </section>
       
    );
};

export default Registrarse;