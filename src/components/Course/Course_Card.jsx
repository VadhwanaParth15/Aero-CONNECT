import React from 'react'
import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './course.css'

const Course_Card = ({ title, img, description,  link }) => {
  return (
    <div>
        <Col size={12} sm={6} md={4}>
        <Card style={{ width: '18rem',margin:'3rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <a variant="primary" className='button' href={link}>join course</a>
      </Card.Body>
    </Card>
    </Col>
    </div>
  )
}

export default Course_Card