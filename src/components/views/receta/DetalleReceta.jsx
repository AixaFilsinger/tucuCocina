import { Container, Card, Row, Col } from "react-bootstrap";
import { Clock, Reception4, PeopleFill } from "react-bootstrap-icons";
const DetalleReceta = () => {
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={4} className=" d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              className=" object-fit-cover border rounded h-50"
              src="https://images.pexels.com/photos/10273537/pexels-photo-10273537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <h4 className="text-center mt-2">Ingredientes</h4>
            <ul>
              <li><p>Lorem ipsum dolor sit amet.</p></li>
            </ul>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>MOCHACCINO CANELA</Card.Title>
              <hr />
              <Card.Text>
                <section className="container">
                  <article className="row">
                    <aside className="col">
                      {" "}
                      <Clock></Clock>
                    </aside>
                    <aside className="col">
                      <Reception4></Reception4> Dificultad:
                    </aside>
                    <aside className="col ">
                      <PeopleFill></PeopleFill>
                    </aside>
                  </article>
                </section>
                <br />
                Combinación perfecta entre leche, choclate, café intenso y un
                toque de canela. Café con granos 100% de arábica brasileña. Todo
                en una capsula inteligente.
                <br />
                <span className="text-danger fw-semibold ">
                  Categoria:
                </span>{" "}
                Café
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
