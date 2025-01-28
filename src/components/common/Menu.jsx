import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import "./common.css";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (busqueda) => {
    alert("No se encontró el juego ingresado");
    reset();
  };

  const logout = () => {
    sessionStorage.removeItem("userKey");
    setUsuarioLogueado("");
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container fluid>
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="logo ecommerce gamer" className="navbar-logo" />
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggle" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink end className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            <NavLink end className="nav-link" to={"/acerca-de-nosotros"}>
              Sobre Nosotros
            </NavLink>

            {usuarioLogueado.length > 0 ? (
              <>
                <NavLink end className="nav-link" to={"/administrador"}>
                  Administrador
                </NavLink>
                <Button
                  className="nav-link logout-button"
                  variant=""
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <NavLink end className="nav-link" to={"/login"}>
                Login
              </NavLink>
            )}

            <Form
              className="d-flex search-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Form.Group className="search-group">
                <Form.Control
                  type="text"
                  placeholder="Buscar Juego"
                  className="search-input"
                  {...register("busquedaJuego", {
                    required: "Ingresa algún juego para buscarlo",
                    minLength: {
                      value: 2,
                      message: "Debe ingresar como mínimo 2 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message: "Debe ingresar como máximo 50 caracteres",
                    },
                  })}
                />
                {errors.busquedaJuego && (
                  <Form.Text className="text-danger">
                    {errors.busquedaJuego.message}
                  </Form.Text>
                )}
              </Form.Group>
              <Button type="submit" className="search-button">
                <Search className="search-icon" />
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
