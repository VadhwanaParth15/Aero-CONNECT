import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Assets/Carousels.jpg'
import './home.css'

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
    <div className="home_content">
    <p className="home_heading">
      Aerospace Career Hub and Resource Center 
    </p>
    <p className='home_description'>Unlock your potential as an aerospace engineer with AeroCom's comprehensive career guidance, internship opportunities, online courses, and event resources.</p>
      </div>
      
    </section>
  )
}

export default Home