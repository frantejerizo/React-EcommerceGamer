import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import "./common.css";

const Menu = ({usuarioLogueado,setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (busqueda) => {
    console.log(busqueda);
  };

  const logout = () => {
    sessionStorage.removeItem("userKey");
    setUsuarioLogueado("");
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="colorPrimario bg-blanco">
      <Container>
        <Link to={"/"} className="navbar-brand">
          <img
            src={logo}
            alt="logo ecommerce gamer"
            className="img-fluid"
            width={"50px"}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link link-success " to={"/"}>
              Inicio
            </NavLink>
            <NavLink
              end
              className="nav-link link-success ms-1 "
              to={"/acerca-de-nosotros"}
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
              end
              className="nav-link me-3 link-success ms-1 "
              to={"/login"}
            >
              Login
            </NavLink>

            <Form className="d-flex mt-1" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Buscar Juego"
                  {...register("busquedaJuego", {
                    required: "Ingresa algun juego para buscarlo",
                    minLength: {
                      value: 2,
                      message: "Debe ingresar como minimo 2 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "Debe ingresar como maximo 50 caracteres inclusive",
                    },
                  })}
                ></Form.Control>
                <Form.Text className="text-danger">
                  {errors.busquedaJuego?.message}
                </Form.Text>
              </Form.Group>
              <Button
                type="submit"
                variant="success"
                className="d-flex align-items-center"
                style={{ height: "38px" }}
              >
                <Search></Search>
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
