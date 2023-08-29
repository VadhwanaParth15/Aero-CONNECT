import React from 'react'
import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './internship.css'

const InternCard = ({ title, Subtitle, description, date, duration, stippend,  link }) => {
  return (
    <div>
        <Col size={12} sm={6} md={4}>
        <Card style={{ width: '16rem',margin:'1rem 2rem',}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ Subtitle}</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          <span style={{fontWeight:"500"}}>Start Date:</span>{date}
        </Card.Text>
        <Card.Text>
          <span style={{fontWeight:"500"}}>Start Date:</span>{duration}
        </Card.Text>
        <Card.Text>
          <span style={{fontWeight:"500"}}>Start Date: </span>{stippend}
        </Card.Text>
        <a variant="primary" className='button' href={link}>See More</a>
      </Card.Body>
    </Card>
    </Col>
    </div>
  )
}

export default InternCard