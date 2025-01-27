import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { obtenerUnSoloJuegoAPI } from "../helpers/queries";
import { Cart } from "react-bootstrap-icons";

const DetalleJuego = () => {
    const {id} = useParams()
    const [juego, setJuego] = useState({})

    useEffect(()=>{
      dibujarJuego()
    },[])

    const dibujarJuego = async() =>
    {
        const respuesta = await obtenerUnSoloJuegoAPI(id)
        if(respuesta.status === 200)
        {
          const datos = await respuesta.json()
          setJuego(datos)
        }
        else
        {
          alert('Ha ocurrido un error, vuelve a intentar esta operacion en unos momentos')
        }
    }

    return (
        <Container className="my-4">
            <h4 className="display-4">{juego.nombre}</h4>
            <Row>
              <Col md={5}>
                <Card.Img
                  variant="top"
                  src={juego.imagen}
                  alt={juego.nombrejuego}
                  className="object-fit-cover"
                />
              </Col>

              <Col md={4} className="lead">
                {juego.descripcion}
              </Col>

              <Col md={3} className="border border-2 border-black">
                <p className="text-center display-3">${juego.precio}</p>
                <p><span className="text-decoration-underline">Categoria:</span> <br />{juego.categoria}</p>
                <p><span className="text-decoration-underline">Desarrollador:</span> <br />{juego.desarrollador}</p>
                <Link className="btn btn-primary w-100" to={'/comprar'}>Comprar <Cart></Cart></Link>
              </Col>
            </Row>
            <h4 className="display-5 mt-4">Requisitos Del Sistema</h4>
            <Row>
                <Col>Minimo: <br />{juego.requisitosMinimos}</Col>
                <Col>Recomendados: <br />{juego.requisitosRecomendados}</Col>
            </Row>
        </Container>
    );
};

export default DetalleJuego;