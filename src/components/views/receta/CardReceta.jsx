import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Clock, Reception4, PeopleFill } from "react-bootstrap-icons";
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
const CardReceta = ({receta}) => {
    return (
        <Col xs={12} md={4} className='mb-3' >
        <Card className="cardReceta">
        <Card.Img variant="top" src={receta.imagen} />
        <Card.Body>
          <Card.Title className="text-center">{receta.titulo}</Card.Title>
          
          <section className="container">
                    <article className="row">
                      <aside className="col-sm-4">
                        <p><Clock className="fs-6"/>{receta.tiempo}</p>
                      </aside>
                      <aside className="col-sm-8">
                       
                        <p> <Reception4 className="fs-6"/>Dificultad:{receta.dificultad}</p>
                      </aside>
                      <aside className="col-sm-8">
                       <p><PeopleFill/>{receta.porciones} porciones</p> 
                      </aside>
                    </article>
                  </section>
         
          <aside className="text-center">
          <Link className="btn btn-primary me-2 mb-2" to={`/detalleReceta/${receta.id}`}>Ver detalle</Link>

          
          </aside>
          
        </Card.Body>
      </Card>
        </Col>
        
    );
};

export default CardReceta;