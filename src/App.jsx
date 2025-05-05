import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Registrarse from './components/views/Registrarse';
import Login from './components/views/Login';
import DetalleReceta from './components/views/Receta/DetalleReceta';
import UsuarioHome from './components/views/UsuarioHome';
import CardHomeReceta from './components/views/receta/CardHomeReceta';
import EditarCrear from './components/views/receta/EditarCrear';

function App() {
  

  return (
    <>
      <Menu></Menu>
      <EditarCrear></EditarCrear>
    </>
  )
}

export default App
