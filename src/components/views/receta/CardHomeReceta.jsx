import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Clock, Reception4, PeopleFill, PencilSquare, Trash } from "react-bootstrap-icons";


const CardHomeReceta = () => {
    return (
        <Col>
         <Card className="cardReceta">
      <Card.Img variant="top" src="https://cdn.elcocinerocasero.com/imagen/receta/1000/2016-05-26-18-07-22/noquis-con-salsa-bolonesa.jpeg" />
      <Card.Body>
        <Card.Title className="text-center">Card Title</Card.Title>
        
        <section className="container">
                  <article className="row">
                    <aside className="col-sm-4">
                      <p><Clock className="fs-6"/>15min</p>
                    </aside>
                    <aside className="col-sm-8">
                     
                      <p> <Reception4 className="fs-6"/>Dificultad: alta</p>
                    </aside>
                    <aside className="col-sm-8">
                     <p><PeopleFill/>15 porciones</p> 
                    </aside>
                  </article>
                </section>
       
        <aside className="text-center">
            <Button variant="primary" className="me-2">Ver más</Button>
        <Button variant="warning" className="me-2 fs-5"><PencilSquare/></Button>
        <Button variant="danger" className="fs-5"><Trash/></Button>
        </aside>
        
      </Card.Body>
    </Card>
        </Col>
    );
};

export default CardHomeReceta;