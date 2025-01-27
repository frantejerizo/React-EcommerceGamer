import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Footer from './components/common/Footer'
import Inicio from './components/pages/Inicio'
import Menu from './components/common/Menu'
import AcercaNosotros from './components/pages/AcercaNosotros'
import Login from './components/pages/Login'
import DetalleJuego from './components/pages/DetalleJuego'
import Error404 from './components/pages/Error404'
import ProtectorRutas from './components/routes/ProtectorRutas'
import RutasAdmin from './components/routes/RutasAdmin'
import { useState } from 'react'

function App() {
  const usuario = JSON.parse(sessionStorage.getItem('userKey')) || ""
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario)

  return (
    <>
      <BrowserRouter>
        <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route> 
          <Route path='/acerca-de-nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route> 
          <Route path='/detalle-juego/:id' element={<DetalleJuego></DetalleJuego>}></Route> 
          <Route path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route path='/administrador/*' element={<ProtectorRutas>
            <RutasAdmin></RutasAdmin>
          </ProtectorRutas>}></Route>
          <Route path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
