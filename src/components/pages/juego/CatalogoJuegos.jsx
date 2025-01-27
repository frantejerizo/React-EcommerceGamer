import { Container, Row, Col } from "react-bootstrap";
import JuegoInicio from "./JuegoInicio";
import { useEffect, useState } from "react";
import { listarJuegosAPI } from "../../helpers/queries";
import Banner from "../../../assets/banner.png";
import "./CatalogoJuegos.css";

const CatalogoJuegos = () => {
  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async() =>{
    const respuesta = await listarJuegosAPI()
    if (respuesta.status === 200)
    {
        const datos = await respuesta.json()
        setListaJuegos(datos)
    }
    else
    {
        alert('Ha ocurrido un error, vuelve a intentar esta operacion en unos momentos')
    }
}

  return (
    <section className="mainSection d-flex flex-column align-items-center ">
      {/* Banner */}
      <img className="banner m-2 w-100" src={Banner} alt="Banner Catalogo" />

      {/* Contenedor principal */}
      <Container className="my-5">
        {/* Título */}
        <h1 className="display-4 text-center">Todos los Juegos</h1>
        <hr />

        {/* Fila para las cards */}
        <Row xs={1} sm={2} md={3} lg={4} className="container-catalogo">
          {listaJuegos.map((juego) => (
            <Col key={juego.id}>
              <JuegoInicio juego={juego} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CatalogoJuegos;
