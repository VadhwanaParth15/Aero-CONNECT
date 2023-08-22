import React from 'react'
import './course.css'
import Courses from './Course_Card'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Course = () => {
    const items = [
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
        {
            title: "python",
            img: "python.png",
            description: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
            link: "#",
            catid: 3,
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