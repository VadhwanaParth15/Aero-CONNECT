import React from 'react'
import './course.css'
import Courses from './Course_Card'
import { Row, Col } from "react-bootstrap";

const AllCourse = () => {
    const allitems = [
        {
            title: "Flight mechanics - The basis",
            img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/20/2a8e830a8845c2b1db492eed862012/randy-fath-h7JZkeiSdg0-unsplash-grey.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
            description: "Linear Algebra, Mathematics, Computer Graphic Techniques, Computer Graphics, Geometry, Graphic Design, Human Computer Interaction, Mathematical Theory &amp; Analysis, Virtual Reality",
            link: "https://www.coursera.org/learn/basis-flight-mechanics",
            catid: 1,
        },
        {
            title: "Digitalisation in Aeronautics",
            img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/0b/db96330d974fa8a574aad5ff6945e3/iStock-TurbineXXL_1061787670.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
            description: "Computer Architecture, Computer Networking, Network Architecture, Network Model, Computer Graphic Techniques, Computer Graphics, Collaboration, Communication",
            link: "https://www.coursera.org/learn/aeronautics",
            catid: 2,
        },
        {
            title: "Digitalisation in Aeronautics and Space Specialization",
            img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/da/c6586a57de46b5ab90e3cd1b0bb65f/iStock-1181848376_Bild_Intro.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
            description: "Strategy and Operations, Computer Architecture, Computer Networking, Network Architecture, Software Engineering, Design, Product Lifecycle, Entrepreneurship...",
            link: "https://www.coursera.org/specializations/aerospace",
            catid: 3,
        },
        {
            title: "Pathway to Space Specialization",
            img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/11/6e3c41d09248f893e10a8b6b67c765/Pathway-Blastoff-2017.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
            description: "Entrepreneurship, Journalism, Writing                                                       ",
            link: "https://www.coursera.org/specializations/pathway-to-space",
            catid: 4,
        },
        {
            title: "Controle Usando a Resposta em Frequência",
            img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/0a/e46720e0a311e5b4e99d7234e50900/Frequencia.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
            description: "Computer Networking, Mathematics, Network Model",
            link: "https://www.coursera.org/learn/resposta-frequencia",
            catid: 5,
        },
        {
            title: "Controle de Sistemas no Plano-s",
            img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/71/e93de0ddad11e5a85677407d25ef02/Planos.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
            description: "matlab",
            link: "https://www.coursera.org/learn/controle-s",
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