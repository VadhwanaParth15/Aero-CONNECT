import React from 'react'
import AboutStory from './AboutStory'
import './about.css'

const About = () => {
  return (
    <section className="container aboutus" id="about">
        <div className="header">
            <h1>About Us</h1>
        </div>
        <div className="content">
            <h2>Our Vision</h2>
            <p>At AeroCom, our vision is to empower aerospace engineers, both students and professionals alike, by providing them with the necessary tools and resources to excel in their careers. We strive to be the go-to destination for anyone looking to pursue a career in the aerospace industry. Our ultimate goal is to help shape the future of aerospace engineering by fostering a community of skilled and inspired professionals.</p>
            <p>Let’s talk.</p>

            <h3>contact@domain.com</h3>
        </div>
        <div className="aboutstory">
            <AboutStory />
        </div>

    </section>
  )
}

export default About