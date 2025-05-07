import { PlusCircle } from "react-bootstrap-icons";
import { obtenerMisRecetas } from "../helpers/queries";
import { Container, Row } from "react-bootstrap";
import CardHomeReceta from "./receta/CardHomeReceta";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const UsuarioHome = () => {
  const [recetas, setRecetas] = useState([]);
  const location = useLocation();

  useEffect(() => {
    obtenerMisRecetas().then((respuesta) => {
      if (respuesta) {
        setRecetas(respuesta);
      } else {
        Swal.fire(
          "Se produjo un error al intentar cargar los datos",
          `Intente realizar esta operación más tarde`,
          "error"
        );
      }
    });
  }, [location.pathname]);

  return (
    <section className="mainSection">
      <article className="d-flex justify-content-center align-items-center mt-5">
        <h2 className="me-5">Tus Recetas</h2>
        <Link
          className="btn btn-primary d-flex align-items-center"
          to={"/usuario/crear"}
        >
          Nueva Receta <PlusCircle className=" ms-1 fs-4"></PlusCircle>
        </Link>
      </article>{" "}
      <hr className="mx-5" />
      <Container>
        <Row>
          {recetas.map((receta) => (
            <CardHomeReceta
              key={receta.id}
              receta={receta}
              setRecetas={setRecetas}
            ></CardHomeReceta>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default UsuarioHome;
