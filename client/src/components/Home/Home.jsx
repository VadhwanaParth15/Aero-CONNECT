import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import img1 from '../../Assets/Carousels.jpg'
import './home.css'
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
      <section className="home">
      {/* <Carousel>
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
     
    </Carousel> */}
    <div className="home_content d-flex">
    <p className="home_heading">
      Aerospace Career Hub and Resource Center 
    </p>
    <p className='home_description'>Unlock your potential as an aerospace engineer with AeroCom's comprehensive career guidance, internship opportunities, online courses, and event resources.</p>
    </div>
      <a href="#about" className="button d-flex m-3 mx-auto text-align-center justify-content-center align-items-center">Learn more</a>
    </section>
  )
}

export default Home