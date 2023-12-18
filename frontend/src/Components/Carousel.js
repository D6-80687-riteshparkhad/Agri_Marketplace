import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../CSS/Carousel.css';


function Carousel() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://in.uplonline.com/product_images/Zeba.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Some description for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://in.uplonline.com/product_images/Zeba.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Some description for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://in.uplonline.com/product_images/Atabron.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Some description for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default Carousel;
  