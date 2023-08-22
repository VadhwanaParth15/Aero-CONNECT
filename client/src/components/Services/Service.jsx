import React from 'react'
import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


const Service = ({ title, description,  link }) => {
  return (
    <div className='container service'>
        <Col size={12} sm={6} md={4}>
        <Card className="service_card" style={{ width: '20rem',margin:'0.5rem 2rem',borderColor:'transparent',background:'#fbf0e9',borderRadius:'2rem' }}>
      <Card.Body>
        <Card.Title style={{ fontSize:"2rem" ,padding:'1rem'}}>{title}</Card.Title>
        <Card.Text style={{ fontSize:"1.1rem",paddingBottom:'1rem' }}>
          {description}
        </Card.Text>
        <Link to={link}  style={{ textDecoration:'none',color:'ffffff' }}><span style={{ fontSize:"1rem",marginLeft:'1rem' }} variant="primary" className='button'>See More</span></Link>
      </Card.Body>
    </Card>
    </Col>
    </div>
  )
}

export default Service