import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Registrarse from './components/views/Registrarse';
import Login from './components/views/Login';
import DetalleReceta from './components/views/receta/DetalleReceta';
import UsuarioHome from './components/views/UsuarioHome';
import CardHomeReceta from './components/views/receta/CardHomeReceta';

import Principal from './components/Principal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasUsuario from "./components/routes/RutasUsuario";
import Error404 from './components/views/Error404';
function App() {
  const usuarioLocal = JSON.parse(localStorage.getItem("usuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioLocal);

  return (
   <BrowserRouter>
   <Menu usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}></Menu>
   <Routes>
    <Route exact path='/' element={<Principal/>}></Route>
    <Route exact path='/registrarse' element={<Registrarse/>}></Route>
    <Route exact path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado}/> }></Route>
    <Route
  path="/usuario/*"
  element={
    <RutasProtegidas>
      <RutasUsuario />
    </RutasProtegidas>
  }
/>
    <Route exact path='/detalleReceta/:id' element={<DetalleReceta/>}></Route>
    <Route path='*' element={<Error404></Error404>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
