import { Routes, Route } from "react-router";
import UsuarioHome from "../views/UsuarioHome";
import CrearReceta from '../views/receta/CrearReceta';
import EditarReceta from '../views/receta/EditarReceta';
const RutasUsuario = () => {
    return (
        <Routes>
        <Route exact path='/' element={<UsuarioHome></UsuarioHome>}></Route>
      <Route
        exact
        path="/crear"
        element={<CrearReceta></CrearReceta>}
      ></Route>
      <Route
        exact
        path="/editar/:id"
        element={<EditarReceta></EditarReceta>}
      ></Route>
    </Routes>
    );
};

export default RutasUsuario;