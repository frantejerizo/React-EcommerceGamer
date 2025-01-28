import React from "react";
import error from "../../assets/error404.png";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <section className="error-section d-flex flex-column justify-content-center align-items-center text-center">
      <img
        src={error}
        alt="Error 404 - Página no encontrada"
        className="error-image img-fluid"
      />

      <div className="error-content mt-4">
        <h1 className="error-title">¡Oops! Página no encontrada</h1>
        <p className="error-text">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <Link to="/" className="error-button">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default Error404;
