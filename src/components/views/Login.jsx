import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { iniciarSesion } from "../helpers/queries";
import { useNavigate } from "react-router";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    iniciarSesion(usuario).then((respuesta) => {
      console.log(respuesta);
      if (respuesta && respuesta.user && respuesta.token) {
        const usuarioConToken = {
          ...respuesta.user,
          token: respuesta.token
        };
        localStorage.setItem("usuario", JSON.stringify(usuarioConToken));
        setUsuarioLogueado(usuarioConToken);
        Swal.fire("Bienvenido", "Inicio sesión correctamente", "success");
        navegacion(`/usuario`);
      } else {
        Swal.fire("Error", "El Email o la Contraseña son incorrectos", "error");
      }
    });
  };

  return (
    <section className="maiSection mt-5">
      <h3 className="text-center">Iniciar Sesión</h3>
      <Row className="justify-content-center">
        <Col sm={8} md={6} xl={6}>
          <Form className="form-registro" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                {...register("email", { required: "El email es obligatorio" })}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: "La contraseña es obligatoria" })}
              />
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

export default Login;


