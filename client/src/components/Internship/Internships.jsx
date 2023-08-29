import React from 'react'
import './internship.css'
import InternCard from "./InternCard"
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Internship = () => {
    const items = [
        {
            title: "Technical Instruction",
            Subtitle: "skyline space",
            description: "work from home",
            date: "Starts imeediately",
            duration: "1 month",
            stippend: "₹ 5,000-8,000 /month",
            link: "https://internshala.com/internship/detail/technical-instruction-work-from-home-job-internship-at-skyline-space1692504788",
            catid: 1,
        },
        {
            title: "Technical Instruction",
            Subtitle: "skyline space",
            description: "work from home",
            date: "Starts imeediately",
            duration: "1 month",
            stippend: "₹ 5,000-8,000 /month",
            link: "https://internshala.com/internship/detail/technical-instruction-work-from-home-job-internship-at-skyline-space1692504788",
            catid: 2,
        },
        {
            title: "Technical Instruction",
            Subtitle: "skyline space",
            description: "work from home",
            date: "Starts imeediately",
            duration: "1 month",
            stippend: "₹ 5,000-8,000 /month",
            link: "https://internshala.com/internship/detail/technical-instruction-work-from-home-job-internship-at-skyline-space1692504788",
            catid: 3,
        },
        
        
       
       
      ];
  return (
    <section className='container courses'>
        <h2 className='text-align-center'>Internships</h2>
        <div className="d-flex justify-content-center align-item-center course_cards">
        <Row>
        {items.map((members) => (
            <Col key={members.catid}>
          <InternCard
            title={members.title}
            Subtitle={members.Subtitle}
            description={members.description}
            date={members.date}
            duration={members.duration}
            stippend={members.stippend}
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

export default Internship