// import 'bootstrap/dist/css/bootstrap.min.css';  
import {Carousel } from 'react-bootstrap';  
// import img1 from '../src/img1.jpg'  
function Carouselcomp() {  
  
  return (  
    <>  
    <div className='p-5'>  
    <Carousel variant="dark">  
  <Carousel.Item>  
  <img style={{maxHeight:"50vh" , maxWidth:"80vh"}}  
      className="d-block w-100"  
      src="https://in.uplonline.com/product_images/Spruce.png"  
      alt="First slide"  
    />  
    <Carousel.Caption>  
      <h3>First Slider Image Title</h3>  
      <p>First Slide decription.</p>  
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <img  style={{maxHeight:"50vh", maxWidth:"80vh"}}
      className="d-block w-100"  
      src="https://khetigaadi.com/resize/large/images/new-implement/JohnDeereMulti-CropMechanicalPlanterMP1004_0_1572858520.png"  
      alt="Second slide"  
    />  
  
    <Carousel.Caption>  
      <h3>Second slide Image </h3>  
      <p>Second slide description</p>  
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <img  style={{maxHeight:"50vh", maxWidth:"80vh"}}
      className="d-block w-100"  
      src="https://krushiindia.com/wp-content/uploads/2022/04/Product_02-2-1.png"    
      alt="Third slide"  
    />  
  
    <Carousel.Caption>  
      <h3>Third Slide Image</h3>  
      <p>Third Slide Description.</p>  
    </Carousel.Caption>  
  </Carousel.Item>  
</Carousel>  
</div>  
    </>  
  );  
}  
export default Carouselcomp;  