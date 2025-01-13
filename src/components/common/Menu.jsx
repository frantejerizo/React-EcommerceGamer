import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router";

const Menu = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
      } = useForm();

    const onSubmit = (busqueda) =>
    {
        console.log(busqueda)
    }

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
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="ms-auto">
                        <NavLink end className='nav-link' to={'/'}>Inicio</NavLink>
                        <NavLink end className='nav-link' to={'/acerca-de-nosotros'}>Acerca de Nosotros</NavLink>
                        <NavLink end className='nav-link me-3' to={'/login'}>Login</NavLink>

                        <Form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Buscar Juego" {...register('busquedaJuego',{
                                    required: 'Ingresa algun juego para buscarlo',
                                    minLength: {
                                        value: 2,
                                        message: "Debe ingresar como minimo 2 caracteres",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Debe ingresar como maximo 50 caracteres inclusive",
                                    }
                                })}>
                                </Form.Control>
                                <Form.Text className="text-danger">{errors.busquedaJuego?.message}</Form.Text>
                            </Form.Group>
                            <Button type="submit" variant="success" className="d-flex align-items-center" style={{ height: '38px' }}><Search></Search></Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;