import React from 'react';
import { Button } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router';
import { borrarJuegoAPI, listarJuegosAPI } from '../../helpers/queries';

const JuegoAdministrador = ({datosJuego,setListaJuegos}) => {

    const borrarJuego = async() =>
    {
        const respuesta = await borrarJuegoAPI(datosJuego.id)
        if (respuesta.status === 200)
        {  
            const respuestaListaJuegos = await listarJuegosAPI()
            if(respuestaListaJuegos.status === 200)
            {
                const datos = await respuestaListaJuegos.json()
                setListaJuegos(datos)
                alert('El Juego fue eliminado correctamente')
            }
            else
            {
                alert('Ha ocurrido un error, vuelve a intentar esta operacion en unos momentos')
            }
        }
        else
        {
            alert('Ha ocurrido un error, vuelve a intentar esta operacion en unos momentos')
        }
    }

    return (
        <tr className='text-center'>
            <td>{datosJuego.id}</td>
            <td>{datosJuego.nombre}</td>
            <td>${datosJuego.precio}</td>
            <td>{datosJuego.categoria}</td>
            <td>
                <img
                src={datosJuego.imagen}
                className="img-thumbnail"
                alt={datosJuego.nombreJuego}
                ></img>
            </td>
            <td>{datosJuego.desarrollador}</td>
            <td>
                <Link className="btn btn-warning me-lg-2" to={`/administrador/editar/${datosJuego.id}`}>
                    <PencilSquare></PencilSquare>
                </Link>
                <Button variant="danger" onClick={borrarJuego}>
                    <Trash></Trash>
                </Button>
            </td>
        </tr>
    );
};

export default JuegoAdministrador;