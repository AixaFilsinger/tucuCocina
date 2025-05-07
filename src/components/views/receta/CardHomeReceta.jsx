import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Clock, Reception4, PeopleFill, PencilSquare, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { consultaEliminarReceta, obtenerMisRecetas } from "../../helpers/queries";
import Swal from "sweetalert2";


const CardHomeReceta = ({receta, setRecetas}) => {
  const borrarReceta=()=>{
    Swal.fire({
      title: '¿Esta seguro de eliminar la receta?',
      text: "No se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#198724',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        
        consultaEliminarReceta(receta.id).then((respuesta)=>{
          console.log(respuesta)
          if( respuesta && respuesta.status === 204){
            Swal.fire('Receta eliminada', `La receta ${receta.titulo} se elimino con exito`, 'success');
            //Actualizar el state del administrador
            obtenerMisRecetas().then((respuesta)=>{
               setRecetas(respuesta);
            })
          }else{
            Swal.fire('Error', `No se pudo eliminar la receta, intente mas tarde`, 'error')
          }

        })
      }
    })
     
  }
    return (
        <Col>
         <Card className="cardReceta">
      <Card.Img variant="top" src="https://cdn.elcocinerocasero.com/imagen/receta/1000/2016-05-26-18-07-22/noquis-con-salsa-bolonesa.jpeg" />
      <Card.Body>
        <Card.Title className="text-center">{receta.titulo}</Card.Title>
        
        <section className="container">
                  <article className="row">
                    <aside className="col-sm-4">
                      <p><Clock className="fs-6"/>{receta.tiempo}</p>
                    </aside>
                    <aside className="col-sm-8">
                     
                      <p> <Reception4 className="fs-6"/>Dificultad: {receta.dificultad}</p>
                    </aside>
                    <aside className="col-sm-8">
                     <p><PeopleFill/>{receta.porciones} porciones</p> 
                    </aside>
                  </article>
                </section>
       
        <aside className="text-center">
        <Link className="btn btn-primary me-2 mb-2" to={`/detalleReceta/${receta.id}`}>Ver detalle</Link>
        <Link className="btn btn-warning me-2 mb-2" to={`/usuario/editar/${receta.id}`}><PencilSquare/></Link>
       
        <Button variant="danger" className="fs-5" onClick={borrarReceta}><Trash/></Button>
        </aside>
        
      </Card.Body>
    </Card>
        </Col>
    );
};

export default CardHomeReceta;