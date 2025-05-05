import CardHomeReceta from "./receta/CardHomeReceta";
import ContenedorRecetaCards from "./receta/ContenedorRecetaCards";

const UsuarioHome = () => {
    return (
        <section>
            <ContenedorRecetaCards cardHome={CardHomeReceta}>
            </ContenedorRecetaCards>
        </section>
    );
};

export default UsuarioHome;