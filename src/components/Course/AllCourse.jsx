import React from 'react'
import './course.css'
import Courses from './Course_Card'
import { Container, Row, Col } from "react-bootstrap";

const AllCourse = () => {
    const allitems = [
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
    <section className='container allcourses'>
        <h2 className='text-align-center'>COURSES</h2>
        <div className="d-flex justify-content-center align-item-center course_cards">
        <Row>
        {allitems.map((members) => (
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

    </section>
  )
}

export default AllCourse