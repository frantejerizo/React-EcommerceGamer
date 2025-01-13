import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router";

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={'/'} className="navbar-brand">
                    <img
                        src=''
                        alt="logo ecommerce gamer"
                        className="img-fluid"
                        width={'150px'}
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Form className="d-flex me-3">
                            <Form.Control type="text" placeholder="Buscar Juego" style={{width:'200px'}}></Form.Control>
                            <Button type="submit" variant="success">Buscar</Button>
                        </Form>
                        <NavLink end className='nav-link' to={'/'}>Inicio</NavLink>
                        <NavLink end className='nav-link' to={'/acerca-de-nosotros'}>Acerca de Nosotros</NavLink>
                        <NavLink end className='nav-link' to={'/login'}>Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;