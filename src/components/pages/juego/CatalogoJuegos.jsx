import { Container, Row, Col } from "react-bootstrap";
import JuegoInicio from "./JuegoInicio";
import { useEffect, useState } from "react";
import { listarProductosAPI } from "../../helpers/queries";
import Banner from "../../../assets/banner.png";
import "./CatalogoJuegos.css";

const CatalogoJuegos = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const datos = await listarProductosAPI();
      if (datos) {
        setListaProductos(datos);
      } else {
        alert("Ocurrió un error al cargar los juegos. Intenta nuevamente más tarde.");
      }
    } catch (error) {
      console.error("Error en consultarAPI:", error);
      alert("Ocurrió un error al cargar los juegos. Intenta nuevamente más tarde.");
    }
  };

  return (
    <section className="mainSection d-flex flex-column align-items-center ">
      {/* Banner */}
      <img className="banner m-2 w-100" src={Banner} alt="Banner Catalogo" />

      {/* Contenedor principal */}
      <Container className="mt-5">
        {/* Título */}
        <h1 className="display-4 text-center">Todos los Juegos</h1>
        <hr />

        {/* Fila para las cards */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 container-catalogo">
          {listaProductos.map((juego) => (
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