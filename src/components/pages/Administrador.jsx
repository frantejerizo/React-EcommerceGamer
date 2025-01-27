import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FileEarmarkPlus } from "react-bootstrap-icons";
import { Link } from "react-router";
import { listarJuegosAPI } from "../helpers/queries";
import JuegoAdministrador from "./juego/JuegoAdministrador";

const Administrador = () => {
  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await listarJuegosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaJuegos(datos);
    } else {
      alert(
        "Ha ocurrido un error, vuelve a intentar esta operacion en unos momentos"
      );
    }
  };

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Juegos disponibles</h1>
        <Link className="btn btn-primary" to={"/administrador/crear"}>
          <FileEarmarkPlus></FileEarmarkPlus>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Nombre de Juego</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Imagen</th>
            <th>Desarrollador</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaJuegos.map((datosJuego) => (
            <JuegoAdministrador
              key={datosJuego.id}
              datosJuego={datosJuego}
              setListaJuegos={setListaJuegos}
            ></JuegoAdministrador>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
