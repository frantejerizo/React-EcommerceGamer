import React from "react";
import { Col, Row } from "react-bootstrap";
import logoRolling from "../../assets/logo2.png"

const AcercaNosotros = () => {
  return (
    <section className="container">
      <h1 className="border-bottom border-black text-center p-3">
        ¿Quienes somos?
      </h1>

      <div className="d-flex justify-content-center">
        <img
          src={logoRolling}
          alt="logo rollingcodeschool"
        />
      </div>

      <p className="text-center mb-5 lead">
        Somos estudiantes de RollingCode School, que conformamos un grupo de 4
        integrantes para poner en practica lo aprendido en clases sobre las operaciones CRUD, empleando React y una API local.
        <br />
        <b>PlayZone</b> es un sitio web desarrollado con React que ofrece un catálogo de juegos para la venta. Este proyecto implementa las operaciones básicas de CRUD (Crear, Leer, Actualizar, Borrar) para gestionar los juegos y proporciona una experiencia responsive y accesible para los usuarios. 
      </p>

      <Row className="my-3">
        <Col md={6} sm={12} lg={3}>
          <div className="border border-4 rounded-circle mb-3 border-primary">
            <img
              className="w-100 h-100 rounded-circle"
              src="https://ca.slack-edge.com/THQU1MGPN-U070XEBEG04-f13f235efc55-512"
              alt="Integrante del grupo"
            />
          </div>
          <h5 className="text-center text-primary">Tejerizo Francisco</h5>
          <p className="lead">
            Encargado de dirección general del proyecto, realizar navbar,
            footer, pagina sobreNosotros, modal de Login y pagina de error404.
          </p>
        </Col>

        <Col md={6} sm={12} lg={3}>
          <div className="border border-4 rounded-circle mb-3 border-danger">
            <img
              className="w-100 h-100 rounded-circle"
              src="https://ca.slack-edge.com/THQU1MGPN-U072TE91Z9P-g149c548c3e7-512"
              alt="Integrante del grupo"
            />
          </div>
          <h5 className="text-center text-danger">Matias Sanchez</h5>
          <p className="lead">
            Encargado de realizar slider y categorias del index, pagina de
            Contacto, pagina de Registro usuario y carrito de compras.
          </p>
        </Col>

        <Col md={6} sm={12} lg={3}>
          <div className="border border-4 rounded-circle mb-3 border-success">
            <img
              className="w-100 h-100 rounded-circle"
              src="https://ca.slack-edge.com/THQU1MGPN-U06QYJ3LB5Z-gd480f7b81d4-512"
              alt="Integrante del grupo"
            />
          </div>
          <h5 className="text-center text-success">Santiago Paez</h5>
          <p className="lead">
            Encargado de realizar las publicidades en la pagina principal y la
            grilla con promociones.
          </p>
        </Col>

        <Col md={6} sm={12} lg={3}>
          <div className="border border-4 rounded-circle mb-3 border-warning">
            <img
              className="w-100 h-100 rounded-circle"
              src="https://ca.slack-edge.com/THQU1MGPN-U06BNCPCSG0-0b7cee8723c4-512"
              alt="Integrante del grupo"
            />
          </div>
          <h5 className="text-center text-warning">Eliseo Urueña</h5>
          <p className="lead">
            Encargado de realizar pagina del detalle de categoria y detalle de
            productos.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default AcercaNosotros;
