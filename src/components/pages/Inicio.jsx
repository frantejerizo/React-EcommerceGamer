import React from 'react';
import CarrouselInicio from './juego/CarrouselInicio';
import CatalogoJuegos from './juego/CatalogoJuegos';

const Inicio = () => {
    return (
        <div className='mainSection'>
            <CarrouselInicio></CarrouselInicio>
            <CatalogoJuegos></CatalogoJuegos>
        </div>
    );
};

export default Inicio;