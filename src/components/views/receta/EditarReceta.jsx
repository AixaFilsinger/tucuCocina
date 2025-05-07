import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { consultaEditarReceta, obtenerMiRecetaPorId } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarReceta = () => {
  const {id} = useParams();

  const navegacion = useNavigate();

    const {register,handleSubmit,formState: { errors },reset, setValue} = useForm();
    const onSubmit = (recetaEditada) => {
      consultaEditarReceta(recetaEditada, id).then((respuesta)=>{
        if (respuesta) {
          Swal.fire('Receta Modificada', `La receta ${recetaEditada.titulo} fue modificada con éxito`, 'success');
          navegacion('/usuario');
        } else {
          Swal.fire(
            "Error",
            `Intente realizar esta operación más tarde`,
            "error"
          );
        }

      })
        
        
    }

    useEffect(()=>{
      obtenerMiRecetaPorId(id).then((respuesta)=>{
        setValue("titulo", respuesta.titulo);
        setValue("imagen", respuesta.imagen);
        setValue("categoria", respuesta.categoria);
        setValue("dificultad", respuesta.dificultad);
        setValue("descripcion", respuesta.descripcion);
        setValue("ingredientes", respuesta.ingredientes);
        setValue("porciones", respuesta.porciones);
        setValue("tiempo", respuesta.tiempo);
      })

    },[])

    return (
        <section className="mainSection container p-5">
            <h2 className="text-center">Editar Receta</h2>
            <hr className="mx-5" />
            <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formTituloReceta">
          <Form.Label>Titulo Receta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("titulo", {
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
            {errors.titulo?.message}
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
            type="text"
            placeholder="Ej: https://www.clarin.com/img/2013/10/13/las-medialunas-un-clasico-que___r1mfUtu3mg_1256x620.jpg"
            {...register("imagen", {
              required:
                "La URL de la Imagen es obligatoria y debe terminar con .jpg/.png/.svg",
              minLength: {
                value: 1,
                message:
                  "El precio del Producto debe contener como mínimo 2 digitos (mínimo 50)",
              },
              pattern: {
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|svg)$/,
                message: "La URL de la Imagen debe terminar con .jpg/.png/.svg",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
  <Form.Label>Descripción</Form.Label>
  <Form.Control
    as="textarea"
    rows={3}
    placeholder="Ej: Una receta fácil y rica"
    {...register("descripcion", {
      required: "La descripción es obligatoria",
      minLength: {
        value: 5,
        message: "La descripción debe tener al menos 5 caracteres",
      },
    })}
  />
  <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formIngredientes">
  <Form.Label>Ingredientes</Form.Label>
  <Form.Control
    as="textarea"
    rows={3}
    placeholder="Ej: Harina, huevos, leche..."
    {...register("ingredientes", {
      required: "Los ingredientes son obligatorios",
    })}
  />
  <Form.Text className="text-danger">{errors.ingredientes?.message}</Form.Text>
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

export default EditarReceta;