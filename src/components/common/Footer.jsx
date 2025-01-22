import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className='bg-secondary-subtle'>
            <section className='p-4 container'>
                <Row>
                    <Col md={4} className='d-flex justify-content-center align-items-center'><img src={logo} alt="logo footer ecommerce gamer" width="80px"/></Col>
                    <Col md={4} className='d-flex flex-column py-3 py-md-0'>
                        <h5>Navegación</h5>
                        <Link to={'/'} className="lead link-dark link-underline-opacity-0 link-underline-opacity-100-hover">Inicio</Link>
                        <Link to={'/acerca-de-nosotros'} className="lead link-dark link-underline-opacity-0 link-underline-opacity-100-hover">Acerca de Nosotros</Link>
                        <Link to={'/login'} className="lead link-dark link-underline-opacity-0 link-underline-opacity-100-hover">Login</Link>
                    </Col>
                    <Col md={4}>
                        <article className='mb-3'>
                            <h5 className='mb-0'>Redes Sociales:</h5>
                            <div className='d-flex gap-3'>
                                <Link to={'/instagram'} className="fs-4 link-dark"><Instagram></Instagram></Link>
                                <Link to={'/twitter'} className="fs-4 link-dark"><Twitter></Twitter></Link>
                                <Link to={'/facebook'} className="fs-4 link-dark"><Facebook></Facebook></Link>
                            </div>
                        </article>
                        <article>
                            <h5>Descarga Nuestra App:</h5>
                            <Link to={'/appstore'}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/2560px-Download_on_the_App_Store_RGB_blk.svg.png' alt="logo appstore" className='me-2 logoAppstore'/></Link>
                            <Link to={'/googleplay'}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' alt="logo googleplay" className='ms-2 logoAppstore'/></Link>
                        </article>
                    </Col>
                </Row>
            </section>
            <section className="text-center py-1 text-light bg-secondary">
                <p className='m-0'>PlayZone 2025 &copy; Todos los derechos reservados</p>
            </section>
        </footer>
    );
};

export default Footer;