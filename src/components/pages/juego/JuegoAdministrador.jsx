import React from 'react';
import { Button } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'; // Corregido: Usar react-router-dom en lugar de react-router
import { borrarJuegoAPI, listarJuegosAPI } from '../../helpers/queries';

const JuegoAdministrador = ({ datosJuego, setListaJuegos }) => {
    const borrarJuego = async () => {
        const respuesta = await borrarJuegoAPI(datosJuego.id);
        if (respuesta.status === 200) {
            const respuestaListaJuegos = await listarJuegosAPI();
            if (respuestaListaJuegos.status === 200) {
                const datos = await respuestaListaJuegos.json();
                setListaJuegos(datos);
                alert('El juego fue eliminado correctamente');
            } else {
                alert('Ha ocurrido un error, vuelve a intentar esta operación en unos momentos');
            }
        } else {
            alert('Ha ocurrido un error, vuelve a intentar esta operación en unos momentos');
        }
    };

    return (
        <tr className="text-center align-middle">
            <td>{datosJuego.id}</td>
            <td>{datosJuego.nombre}</td>
            <td>${datosJuego.precio}</td>
            <td>{datosJuego.categoria}</td>
            <td>
                <img
                    src={datosJuego.imagen}
                    className="img-thumbnail rounded shadow-sm"
                    alt={datosJuego.nombre}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
            </td>
            <td>{datosJuego.desarrollador}</td>
            <td>
                <div className="d-flex justify-content-center gap-2">
                    <Link
                        className="btn btn-warning btn-sm shadow-sm"
                        to={`/administrador/editar/${datosJuego.id}`}
                    >
                        <PencilSquare size={18} />
                    </Link>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={borrarJuego}
                        className="shadow-sm"
                    >
                        <Trash size={18} />
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default JuegoAdministrador;