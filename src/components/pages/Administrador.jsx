import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PlusCircle } from "react-bootstrap-icons";
import AdministrarJuegos from './juego/AdministrarJuegos';
import { useNavigate } from "react-router-dom";
import { crearJuegoAPI, obtenerUnSoloJuegoAPI, editarJuegoAPI } from "../helpers/queries";

const Administrador = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const cargarJuegos = async () => {
      const juego = await obtenerUnSoloJuegoAPI();
      setVideojuegos(juego);
    };
    cargarJuegos();
  }, []);

  const handleAgregarJuego = () => {
    navigate('/administrador/crear');
  }

    
  
  
    return (
        <section className='mainSection mb-4'>
            <h1 className='text-center mt-5'>Agregar videojuego</h1>
            
            <Form className='container d-flex'>       
      <Form.Group className="w-100" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Agregar videojuego" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleAgregarJuego}>
      <PlusCircle></PlusCircle>
      </Button>
    </Form>
    <AdministrarJuegos videojuegos={videojuegos} setVideojuegos={setVideojuegos}/>
   
        </section>
    );
  }

export default Administrador;