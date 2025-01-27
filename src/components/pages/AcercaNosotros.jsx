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
            Footer, Navbar, FormularioJuegos, estructura del proyecto, README, login, error404, hotfix general del proyecto.
          </p>
        </Col>

        <Col md={6} sm={12} lg={3}>
          <div className="border border-4 rounded-circle mb-3 border-danger">
            <img
              className="w-100 h-100 rounded-circle"
              src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/425330636_944257843706827_1808915034332431891_n.jpg?ccb=11-4&oh=01_Q5AaICyJtLiAPejDK6XSaqBQ_mNXoFduNcQzSoWaOynpXdqv&oe=67A4F8D1&_nc_sid=5e03e0&_nc_cat=111"
              alt="Integrante del grupo"
            />
          </div>
          <h5 className="text-center text-danger">José Ignacio Ramón</h5>
          <p className="lead">
            CarrouselInicio, CatalogoJuegos, JuegoInicio, estetica de la pagina (colores, e imagenes).
          </p>
        </Col>

        <Col md={6} sm={12} lg={3}>
          <div className="border border-4 rounded-circle mb-3 border-success">
            <img
              className="w-100 h-100 rounded-circle"
              src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/265410653_297826692471792_1097634916994082370_n.jpg?ccb=11-4&oh=01_Q5AaIG82C1pzfySiW8IgT9ODbjLrYFvQIFB-MqK6mnEzs844&oe=679D9C64&_nc_sid=5e03e0&_nc_cat=100"
              alt="Integrante del grupo"
            />
          </div>
          <h5 className="text-center text-success">Tomas Pando</h5>
          <p className="lead">
            Administrador, JuegoAdministrador.
          </p>
        </Col>

        <Col md={6} sm={12} lg={3}>
          <div className="border border-4 rounded-circle mb-3 border-warning">
            <img
              className="w-100 h-100 rounded-circle"
              src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/57156680_588106471694853_5564464164459511808_n.jpg?ccb=11-4&oh=01_Q5AaIHycmqghUw-jTitIjNxOIyQIgMKNQucrw8-4lSvLcHs2&oe=67A5079A&_nc_sid=5e03e0&_nc_cat=104"
              alt="Integrante del grupo"
            />
          </div>
          <h5 className="text-center text-warning">Juan Stegmayer</h5>
          <p className="lead">
            DetalleJuego, AcercaNosotros.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default AcercaNosotros;
