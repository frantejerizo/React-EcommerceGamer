import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./common.css";

const Footer = () => {
  return (
    <footer className="footer-background">
      <Container className="p-4">
        <Row className="text-center text-md-start">
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <img
              src={logo}
              alt="logo footer ecommerce gamer"
              className="img-fluid"
              style={{ maxWidth: "80px" }}
            />
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3 fw-bold">Navegación</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="text-dark text-decoration-none hover-underline fw-bold"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/acerca-de-nosotros"
                  className="text-dark text-decoration-none hover-underline fw-bold"
                >
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-dark text-decoration-none hover-underline fw-bold"
                >
                  Login
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <div className="mb-4">
              <h5 className="text-uppercase mb-3 fw-bold">Redes Sociales</h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <Link to="/instagram" className="text-dark fs-4">
                  <Instagram />
                </Link>
                <Link to="/twitter" className="text-dark fs-4">
                  <Twitter />
                </Link>
                <Link to="/facebook" className="text-dark fs-4">
                  <Facebook />
                </Link>
              </div>
            </div>

            <div>
              <h5 className="text-uppercase mb-3 fw-bold">
                Descarga Nuestra App
              </h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-2">
                <Link to="/appstore">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/2560px-Download_on_the_App_Store_RGB_blk.svg.png"
                    alt="logo appstore"
                    className="img-fluid"
                    style={{ maxWidth: "120px" }}
                  />
                </Link>
                <Link to="/googleplay">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                    alt="logo googleplay"
                    className="img-fluid"
                    style={{ maxWidth: "120px" }}
                  />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom py-3">
        <p className="text-center m-0 lead">
          PlayZone 2025 &copy; Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
