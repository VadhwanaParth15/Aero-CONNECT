import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Assets/Carousels.jpg'

const Home = () => {
  return (
    <section className="container">
      <section className="caraousalimg">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
      </section>
      
    </section>
  )
}

export default Home