import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../assets/Carrousel/1.png';
import slide2 from '../../../assets/Carrousel/2.png';
import slide3 from '../../../assets/Carrousel/3.png';

function CarrouselInicio() {
  return (
    <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}  
          alt="Primera Presentación"
          
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}  
          alt="Segunda Presentación"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3} 
          alt="Tercera Presentación"
        />
       
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarrouselInicio;
