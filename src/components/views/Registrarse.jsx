import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { registrarUsuario } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registrarse = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (datos) => {
    if (datos.password !== datos.confirmPassword) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
      return;
    }

    const { confirmPassword, ...usuario } = datos; // no enviar confirmación al back
    const respuesta = await registrarUsuario(usuario);

    if (respuesta?.message === "Usuario registrado con éxito") {
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Redirigiendo al login...",
        timer: 2000,
        showConfirmButton: false,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      Swal.fire("Error", respuesta?.message || "Ocurrió un error", "error");
    }
    
  };

  return (
    <section className="mainSection mt-5">
      <h3 className="text-center">Registrarse</h3>
      <Row className="justify-content-center">
        <Col sm={8} md={6} xl={6}>
          <Form onSubmit={handleSubmit(onSubmit)} className="form-registro">
            <Form.Group className="mb-2">
              <Form.Label>Nombre</Form.Label>
              <Form.Control {...register("nombre", { required: true })} />
              {errors.nombre && (
                <small className="text-danger">Nombre requerido</small>
              )}
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Apellido</Form.Label>
              <Form.Control {...register("apellido", { required: true })} />
              {errors.apellido && (
                <small className="text-danger">Apellido requerido</small>
              )}
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <small className="text-danger">Email requerido</small>
              )}
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <small className="text-danger">Contraseña requerida</small>
              )}
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <small className="text-danger">Repetir contraseña</small>
              )}
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

