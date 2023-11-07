import Carousel from 'react-bootstrap/Carousel';
import './CarouselC.css'

function CarouselC() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img src='/cafeteria1.jpg' alt="" />
        <Carousel.Caption>
          <h3>Cafés</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/cafeteria2.jpg' alt="" />
        <Carousel.Caption>
          <h3>Mais Cafés</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/cafeteria3.jpg' alt="" />
        <Carousel.Caption>
          <h3>Ainda Mais Cafés</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;