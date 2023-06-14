import React from 'react'
import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './course.css'

const Course_Card = ({ title, Subtitle, description,  link }) => {
  return (
    <div>
        <Col size={12} sm={6} md={4}>
         <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title  className="text-align-center align-item-center justify-contant-center">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-align-center">{Subtitle}</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Link className="btn" href={link}>Start Course</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </div>
  )
}

export default Course_Card