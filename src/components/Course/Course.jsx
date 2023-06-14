import React from 'react'
import './course.css'
import Courses from './Course_Card'
import { Container, Row, Col } from "react-bootstrap";

const Course = () => {
    const items = [
        {
            title: "python",
            Subtitle: "#",
            description: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
            link: "#",
            catid: 1,
        },
        {
            title: "python",
            Subtitle: "#",
            description: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
            link: "#",
            catid: 2,
        },
        {
            title: "python",
            Subtitle: "#",
            description: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
            link: "#",
            catid: 3,
        },
       
       
      ];
  return (
    <section className='container courses'>
        <h2 className='text-align-center'>COURSES</h2>
        <div className="course_cards">
        <Row>
        {items.map((members) => (
            <Col key={members.catid}>
          <Courses
            title={members.title}
            Subtitle={members.Subtitle}
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

export default Course