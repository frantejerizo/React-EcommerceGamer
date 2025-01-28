import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { obtenerUnSoloJuegoAPI } from "../helpers/queries";
import { Cart } from "react-bootstrap-icons";
import "./DetalleJuego.css";

const DetalleJuego = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState({});

  useEffect(() => {
    dibujarJuego();
  }, []);

  const dibujarJuego = async () => {
    const respuesta = await obtenerUnSoloJuegoAPI(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setJuego(datos);
    } else {
      alert("Ha ocurrido un error, vuelve a intentar esta operación en unos momentos");
    }
  };

  return (
    <Container className="detalle-juego-container">
      <div className="header">
        <h1>{juego.nombre}</h1>
      </div>

      <div className="main-content">
        <div className="image-section">
          <Card.Img
            variant="top"
            src={juego.imagen}
            alt={juego.nombre}
            className="card-img-custom"
          />
        </div>

        <div className="description-section">
          <p>{juego.descripcion}</p>
        </div>

        <div className="details-section">
          <p className="price">${juego.precio}</p>
          <p>
            <span className="underline">Categoría:</span> <br />
            {juego.categoria}
          </p>
          <p>
            <span className="underline">Desarrollador:</span> <br />
            {juego.desarrollador}
          </p>
          <Link className="btn-comprar" to={"/comprar"}>
            Comprar <Cart />
          </Link>
        </div>
      </div>

      <div className="requirements-section">
        <h2>Requisitos Del Sistema</h2>
        <Row>
          <Col>
            Mínimo: <br />
            {juego.requisitosMinimos}
          </Col>
          <Col>
            Recomendados: <br />
            {juego.requisitosRecomendados}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DetalleJuego;