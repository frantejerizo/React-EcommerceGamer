import React from "react";
import "./JuegoInicio.css";
import { Link } from "react-router";
import { Container, Row, Col } from "react-bootstrap";

const JuegoInicio = ({ juego }) => {
  return (
    <div className="cardInicio">
      <div className="image_container">
        <img
          src={juego.imagen}
          alt={juego.nombre}
          className="card-img-top-nueva"
        />
      </div>
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col className="text-center">
            <div className="title">
              <span>{juego.nombre}</span>
            </div>
            <div className="subtitle">
              <span>{juego.desarrollador}</span>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="action">
        <div className="price">
          <span>${juego.precio}</span>
        </div>
        <Link className="btn btn-success" to={`/detalle-juego/${juego.id}`}>
          Ver Mas
        </Link>
      </div>
    </div>
  );
};

export default JuegoInicio;
