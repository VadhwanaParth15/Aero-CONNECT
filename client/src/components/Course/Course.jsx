import React from 'react'
import './course.css'
import Courses from './Course_Card'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Course = () => {
    const items = [
        {
            title: "Flight mechanics - The basis",
            img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/20/2a8e830a8845c2b1db492eed862012/randy-fath-h7JZkeiSdg0-unsplash-grey.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
            description: "Linear Algebra, Mathematics, Computer Graphic Techniques, Computer Graphics, Geometry, Graphic Design, Human Computer Interaction, Mathematical Theory &amp; Analysis, Virtual Reality",
            link: "https://www.coursera.org/learn/basis-flight-mechanics",
            catid: 0,
        },
        {
            title: "python",
            img: "python.png",
            description: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
            link: "#",
            catid: 1,
        },
        {
            title: "python",
            img: "python.png",
            description: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
            link: "#",
            catid: 2,
        },
       
       
      ];
  return (
    <section className='container courses'>
        <h2 className='text-align-center'>Courses</h2>
        <div className="d-flex justify-content-center align-item-center course_cards">
        <Row>
        {items.map((members) => (
            <Col key={members.catid}>
          <Courses
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
        <h5 className='d-flex text-align-center justify-content-center align-item-center'><Link to={`/allcourses`} className=' button' target='_blank' style={{ textDecoration: 'none' }}>
SEE MORE</Link></h5>

    </section>
  )
}

export default Course