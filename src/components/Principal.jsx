import { Container, Form, Row, Col, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardReceta from "./views/receta/CardReceta";
import { obtenerRecetas } from "./helpers/queries";
import Swal from "sweetalert2";

const Principal = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas().then((respuesta) => {
      if (respuesta) {
        setRecetas(respuesta);
      } else {
        Swal.fire(
          "Se produjo un error al intentar cargar los datos",
          `Intente realizar esta operacion mas tarde`,
          "error"
        );
      }
    });
  }, []);
  return (
    <section className="mainSection">
      <h1 className="text-center m-3">Recetas</h1>

      <Container>
        <Row>
          {recetas.map((receta) => (
            <CardReceta key={receta.id} receta={receta}></CardReceta>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Principal;
