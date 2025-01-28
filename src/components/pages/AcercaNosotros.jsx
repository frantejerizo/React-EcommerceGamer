import React from "react";
import { Col, Row } from "react-bootstrap";
import logoRolling from "../../assets/logo2.png";
import "./AcercaNosotros.css";

const AcercaNosotros = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-header">
        <h1>¿Quiénes Somos?</h1>
        <div className="header-line"></div>
      </div>

      <div className="about-us-logo">
        <img
          src={logoRolling}
          alt="Logo RollingCode School"
          className="logo-image"
        />
      </div>

      <p className="about-us-description">
        Somos un equipo de cuatro estudiantes de <b>RollingCode School</b>, apasionados por el desarrollo web y comprometidos con la excelencia técnica. Como parte de nuestro proceso de aprendizaje, hemos desarrollado <b>PlayZone</b>, una plataforma web moderna construida con <b>React</b> que sirve como un catálogo interactivo de videojuegos disponibles para la venta.
        <br /><br />
        Este proyecto no solo refleja nuestra dedicación y habilidades adquiridas, sino que también implementa las operaciones esenciales de <b>CRUD</b> (Crear, Leer, Actualizar, Borrar) para la gestión eficiente de productos. Utilizando una <b>API local</b>, hemos creado una experiencia de usuario <b>responsive</b>, intuitiva y accesible, asegurando que los usuarios puedan navegar y realizar compras de manera fluida en cualquier dispositivo.
        <br /><br />
        <b>PlayZone</b> es más que un proyecto académico; es una demostración de nuestro compromiso con el desarrollo de soluciones tecnológicas innovadoras y funcionales que satisfacen las necesidades del mercado actual.
      </p>

      <Row className="team-members">
        <Col md={6} sm={12} lg={3} className="team-member">
          <div className="member-image border-primary">
            <img
              src="https://ca.slack-edge.com/THQU1MGPN-U070XEBEG04-f13f235efc55-512"
              alt="Tejerizo Francisco"
            />
          </div>
          <h5 className="text-primary">Tejerizo Francisco (LT)</h5>
          <p className="member-role">
            Footer, Navbar, FormularioJuegos, estructura del proyecto, README, login, error404, hotfix general del proyecto.
          </p>
        </Col>

        <Col md={6} sm={12} lg={3} className="team-member">
          <div className="member-image border-primary">
            <img
              src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/425330636_944257843706827_1808915034332431891_n.jpg?ccb=11-4&oh=01_Q5AaICyJtLiAPejDK6XSaqBQ_mNXoFduNcQzSoWaOynpXdqv&oe=67A4F8D1&_nc_sid=5e03e0&_nc_cat=111"
              alt="José Ignacio Ramón"
            />
          </div>
          <h5 className="text-primary">José Ignacio Ramón (SM)</h5>
          <p className="member-role">
            CarrouselInicio, CatalogoJuegos, JuegoInicio, estética de la página (colores, presentaciones, logo).
          </p>
        </Col>

        <Col md={6} sm={12} lg={3} className="team-member">
          <div className="member-image border-primary">
            <img
              src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/265410653_297826692471792_1097634916994082370_n.jpg?ccb=11-4&oh=01_Q5AaIG82C1pzfySiW8IgT9ODbjLrYFvQIFB-MqK6mnEzs844&oe=679D9C64&_nc_sid=5e03e0&_nc_cat=100"
              alt="Tomas Pando"
            />
          </div>
          <h5 className="text-primary">Tomas Pando</h5>
          <p className="member-role">
            Administrador, JuegoAdministrador.
          </p>
        </Col>

        <Col md={6} sm={12} lg={3} className="team-member">
          <div className="member-image border-primary">
            <img
              src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/57156680_588106471694853_5564464164459511808_n.jpg?ccb=11-4&oh=01_Q5AaIHycmqghUw-jTitIjNxOIyQIgMKNQucrw8-4lSvLcHs2&oe=67A5079A&_nc_sid=5e03e0&_nc_cat=104"
              alt="Juan Stegmayer"
            />
          </div>
          <h5 className="text-primary">Juan Stegmayer</h5>
          <p className="member-role">
            DetalleJuego, AcercaNosotros.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default AcercaNosotros;