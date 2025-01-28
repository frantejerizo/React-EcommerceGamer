import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../assets/Carrousel/1.png';
import slide2 from '../../../assets/Carrousel/2.png';
import slide3 from '../../../assets/Carrousel/3.png';
import './CarrouselInicio.css'; // Archivo CSS para estilos personalizados

function CarrouselInicio() {
  return (
    <div className="carrousel-container">
      <Carousel fade controls={true} indicators={true} interval={3000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-image"
            src={slide1}
            alt="Primera Presentación"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-image"
            src={slide2}
            alt="Segunda Presentación"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-image"
            src={slide3}
            alt="Tercera Presentación"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarrouselInicio;