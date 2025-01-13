import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Footer from './components/common/Footer'
import Inicio from './components/pages/Inicio'
import Menu from './components/common/Menu'
import AcercaNosotros from './components/pages/AcercaNosotros'
import Login from './components/pages/Login'
import Administrador from './components/pages/Administrador'
import DetalleJuego from './components/pages/DetalleJuego'
import Error404 from './components/pages/Error404'
import FormularioJuegos from './components/pages/FormularioJuegos'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route> 
          <Route path='/acerca-de-nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route> 
          <Route path='/login' element={<Login></Login>}></Route> 
          <Route path='/detalle-juego' element={<DetalleJuego></DetalleJuego>}></Route> 
          <Route path='/administrador' element={<Administrador></Administrador>}></Route>
          <Route exact path='/administrador/crear' element={<FormularioJuegos crearJuego={true}></FormularioJuegos>}></Route> 
          <Route exact path='/administrador/editar/:id' element={<FormularioJuegos crearJuego={false}></FormularioJuegos>}></Route> 
          <Route path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
