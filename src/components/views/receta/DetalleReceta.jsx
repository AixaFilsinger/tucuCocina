import { Container, Card, Row, Col } from "react-bootstrap";
import { Clock, Reception4, PeopleFill } from "react-bootstrap-icons";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { obtenerUnaReceta } from "../../helpers/queries";
const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState({});

  useEffect(() => {
    obtenerUnaReceta(id).then((respuesta) => {
      setReceta(respuesta);
    });
  }, []);
  return (
    
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={4} className=" d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              className=" object-fit-cover border rounded h-50"
              src={receta.imagen}
            />
            <h4 className="text-center mt-2">Ingredientes</h4>
            <p>{receta.ingredientes}</p>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{receta.titulo}</Card.Title>
              <hr />
              <Container>
                <section className="container">
                  <article className="row">
                    <aside className="col">
                      {" "}
                      <Clock></Clock>{receta.tiempo}
                    </aside>
                    <aside className="col">
                      <Reception4></Reception4> Dificultad:{receta.dificultad}
                    </aside>
                    <aside className="col ">
                      <PeopleFill></PeopleFill>{receta.porciones}
                    </aside>
                  </article>
                </section>
                <br />
                {receta.descripcion}
                <br />
                <span className="text-danger fw-semibold ">
                  Categoria:
                </span>{" "}
                {receta.categoria}
              </Container>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
