import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Registrarse from './components/views/Registrarse';
import Login from './components/views/Login';
import DetalleReceta from './components/views/Receta/DetalleReceta';

function App() {
  

  return (
    <>
      <Menu></Menu>
      <DetalleReceta></DetalleReceta>
    </>
  )
}

export default App
