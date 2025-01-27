import React from "react";
import { Table } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { Eye } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { borrarJuegoAPI } from "../../helpers/queries";

const AdministrarJuegos = ({ videojuegos, setVideojuegos }) => {
  const navigate = useNavigate();

  const handleEliminarJuego = async (id) => {
    const respuesta = await borrarJuegoAPI(id);
    if (respuesta.ok) {
      setVideojuegos(videojuegos.filter((juego) => juego.id !== id));
    } else {
      console.error("Error al eliminar el videojuego");
    }
  };

  const handleVerDetalles = (id) => {
    navigate(`/detalle-juego/${id}`);
  };

  const handleEditarJuego = (id) => {
    navigate(`/administrador/editar/:id/${id}`);
  };

  return (
    <div>
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Nombre del juego</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Imagen </th>
            <th>Desarrollador</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Red Dead Redemption 2</td>
            <td>65.000</td>
            <td>Accion</td>
            <td>
              <img src="./src/assets/small.png" />
            </td>
            <td>Rockstar Games</td>
            <td>
              <Button
                variant="danger"
                onClick={() => handleEliminarJuego(juego.id)}
              >
                <XCircle />
              </Button>
              <Button onClick={() => handleVerDetalles(juego.id)}>
                <Eye />
              </Button>
              <Button
                variant="warning"
                onClick={() => handleEditarJuego(juego.id)}
              >
                <PencilSquare />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AdministrarJuegos;
