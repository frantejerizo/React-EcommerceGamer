import React from 'react';
import { Button } from 'react-bootstrap';
const JuegoAdministrador = () => {
    return (
        <section>
            <h1>Red Dead Redemption 2</h1>
            <div className='d-flex mb-5'>
            <img src="./src/assets/small.png" alt="" />
            <p className='ms-2 fs-5'>Red Dead Redemption 2 es un videojuego de acción-aventura de temática western ambientado en un entorno de mundo abierto y jugado desde una perspectiva en tercera persona (con posibilidad de primera persona e incluso eliminar el HUD), con componentes para un jugador y multijugador en línea.</p>
            
            <div className='border border-dark border-3'>
                <p>Categoria: Accion</p>
                <p>Desarrollador: Rockstar Games</p>
                <p className='fs-3'>65.000</p>
<Button variant='primary'>Comprar</Button>
            </div>
            </div>
            <p>
            Mínimo:
Requiere un procesador y un sistema operativo de 64 bits
SO: Windows 10 - 64-bit
Procesador: Intel® Core™ i5-2500K / AMD FX-6300
Memoria: 8 GB de RAM
Gráficos: Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB
Red: Conexión de banda ancha a Internet
Almacenamiento: 150 GB de espacio disponible
Tarjeta de sonido: Direct X Compatible
            </p>
            <p>Recomendado:
Requiere un procesador y un sistema operativo de 64 bits
SO: Windows 10 - 64-bit
Procesador: Intel® Core™ i7-4770K / AMD Ryzen 5 1500X
Memoria: 12 GB de RAM
Gráficos: Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB
Red: Conexión de banda ancha a Internet
Almacenamiento: 150 GB de espacio disponible
Tarjeta de sonido: Direct X Compatible</p>
        </section>
    );
};

export default JuegoAdministrador;