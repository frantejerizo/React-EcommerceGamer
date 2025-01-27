import React from "react";
import "./JuegoInicio.css";
import { Link } from "react-router";

const JuegoInicio = ({ juego }) => {
  return (
    <div className="card">
      <div className="image_container">
        <img
          src={juego.imagen}
          alt={juego.nombre}
          className="card-img-top-nueva"
        />
      </div>
      <div className="title">
        <span>{juego.nombre}</span>
      </div>
      <div className="action">
        <div className="price">
          <span>${juego.precio}</span>
        </div>
        <Link className="btn btn-success" to={`/detalle-juego/${juego.id}`}>Ver Mas</Link>
      </div>
    </div>
  );
};

export default JuegoInicio;
