import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
const EditarCrear = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
    return (
        <section className="mainSection container p-5">
            <h2 className="text-center">Titulo</h2>
            <hr className="mx-5" />
            <Form>
        <Form.Group className="mb-3" controlId="formTituloReceta">
          <Form.Label>Titulo Receta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("tituloReceta", {
              required: "El titulo de la Receta es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.tituloReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPorciones">
          <Form.Label>Porciones</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("porciones", {
              required: "Las porciones que salen de la receta son obligatorias",
              min: {
                value: 1,
                message: "La porción minima es de 1",
              },
              max: {
                value: 100,
                message: "La porción maxima es de 100",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.porciones?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTiempo">
          <Form.Label>Tiempo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("tiempo", {
              required: "El tiempo que lleva realizar la receta es obligatorio",
              min: {
                value: 1,
                message: "El tiempo minimo es de 1",
              },
              max: {
                value: 1000,
                message: "El tiempo maximo es de 1000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.tiempo?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            
            accept="image/*"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              validate: {
                tipo: (value) =>
                  value[0] && value[0].type.startsWith("image/")
                    ? true
                    : "Solo se permiten imágenes",
                tamano: (value) =>
                  value[0] && value[0].size < 2 * 1024 * 1024
                    ? true
                    : "La imagen debe pesar menos de 2MB",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La Categoría es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="salado">Salado</option>
            <option value="agridulce">Agridulce</option>
            <option value="bebida">Bebida</option>
            <option value="salado">Postre</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
            
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDificultad">
          <Form.Label>Dificultad</Form.Label>
          <Form.Select
            {...register("dificultad", {
              required: "La Dificultad es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
            
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
            
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>


            
        </section>
    );
};

export default EditarCrear;