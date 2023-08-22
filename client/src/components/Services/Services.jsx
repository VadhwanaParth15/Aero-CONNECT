import React from 'react'
import { Row, Col } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import Service from './Service'
import './service.css'
const Services = () => {
    const Services = [
        // {
        //     title: "Aerospace Career Consulting for Professionals",
        //     description: "Our career guidance program provides personalized advice and resources to help you make informed decisions about your future professional endeavors.",
        //     link: "#",
        //     catid: 1,
        // },
        {
            title: "Aerospace Internship Opportunities",
            description: "Our internship program provides opportunities for students and graduates to gain practical experience and build their skills in a professional setting.",
            link: "#",
            catid: 2,
        },
        {
            title: "Aerospace Engineering Online Courses",
            description: "Our online course offers comprehensive educational resources and expert instruction, allowing you to expand your knowledge and skills from anywhere.",
            link: "/allcourses",
            catid: 3,
        },
        {
            title: "Aerospace Industry Events and Conferences",
            description: "Our Events service offers seamless planning and execution of formal corporate gatherings, conferences, and social events.",
            link: "/events",
            catid: 4,
        }
       
       
      ];
  return (
    <section id="service"className='container courses'>
    <h2 className='text-align-center'>Service</h2>
    <div className="d-flex justify-content-center align-item-center Service_cards">
    <Row>
    {Services.map((members) => (
        <Col key={members.catid}>
      <Service 
        title={members.title}
        img={members.img}
        description={members.description}
        link={members.link}
        catid={members.catid}
      />
      </Col>
  ))}
    </Row>
    </div>
    

</section>
  )
}

export default Services