import { PlusCircle } from "react-bootstrap-icons";

const UsuarioHome = () => {
    return (
        <section className="mainSection">
            <article className="d-flex justify-content-center align-items-center mt-5">
                 <h2 className="me-5">Tus Recetas</h2>
           
            <button className="d-flex align-items-center">Nueva Receta <PlusCircle className=" ms-1 fs-4"></PlusCircle></button>
            </article> <hr className="mx-5" />
           
        </section>
    );
};

export default UsuarioHome;