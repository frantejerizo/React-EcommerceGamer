import React from 'react';
import {Table } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import { Eye } from 'react-bootstrap-icons';
import {PencilSquare} from "react-bootstrap-icons"

const AdministrarJuegos = () => {
    return (
        <div>
            <Table responsive striped bordered hover className='mt-3'> 
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
            <td>1</td>
            <td>Red Dead Redemption 2</td>
            <td>65.000</td>
            <td>Accion</td>
            <td><img src="./src/assets/small.png" alt="" /></td>
            <td>Rockstar Games</td>
            <td> <Button variant="danger">
           <XCircle></XCircle>
      </Button><Button><Eye></Eye></Button><Button variant='warning'><PencilSquare></PencilSquare></Button></td>

        </tbody>
        <tbody>
            <td>2</td>
            <td>FC 25</td>
            <td>85.000</td>
            <td>Deportes</td>
            <td><img src="./src/assets/images.jpg" alt="" /></td>
            <td>EA Sports</td>
            <td> <Button variant="danger">
           <XCircle></XCircle>
      </Button><Button><Eye></Eye></Button><Button variant='warning'><PencilSquare></PencilSquare></Button></td>

        </tbody>
        <tbody>
            <td>3</td>
            <td>Dragon Ball Sparking Zero</td>
            <td>90.000</td>
            <td>Accion</td>
            <td><img src="./src/assets/sparking.jpg" alt="" /></td>
            <td>Spike Chunsoft</td>
            <td> <Button variant="danger">
           <XCircle></XCircle>
      </Button><Button><Eye></Eye></Button><Button variant='warning'><PencilSquare></PencilSquare></Button></td>

        </tbody>
      </Table>
        </div>
    );
};

export default AdministrarJuegos;