import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PlusCircle } from "react-bootstrap-icons";
import AdministrarJuegos from './juego/AdministrarJuegos';

const Administrador = () => {
    return (
        <section className='mainSection mb-4'>
            <h1 className='text-center mt-5'>Agregar videojuego</h1>
            
            <Form className='container d-flex'>       
      <Form.Group className="w-100" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Agregar videojuego" />
      </Form.Group>
      <Button variant="primary" type="submit">
      <PlusCircle></PlusCircle>
      </Button>
    </Form>
    <AdministrarJuegos/>
        </section>
    );
};

export default Administrador;