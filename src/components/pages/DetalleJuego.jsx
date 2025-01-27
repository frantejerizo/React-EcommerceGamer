import React from "react";
import { obtenerUnSoloJuegoAPI } from "../helpers/queries";

const DetalleJuego = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = async () => {
    const respuesta = await obtenerUnSoloJuegoAPI(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProducto(datos);
    } else {
      alert("Ocurrió un error, intente de nuevo en unos segundos");
    }
  };

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
              alt={producto.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">
                {producto.nombreProducto}
              </Card.Title>
              <hr />
              <Card.Text>
                {producto.descripcion_amplia}
                <br />
                <span className="primary-font fw-semibold ">
                  Categoria:
                </span>{" "}
                {producto.categoria}
                <br className="mb-3" />
                <span className="primary-font fw-semibold ">
                  Precio: ${producto.precio}
                </span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleJuego;
