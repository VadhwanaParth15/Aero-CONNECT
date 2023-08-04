import React from 'react'
import './about.css'
import img from '../../Assets/about.webp'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { BsTwitter , BsInstagram} from 'react-icons/bs'

const AboutStory = () => {
  return (
    <section className="container section_conatnt">
        <img src={img} alt="" />
        <div className="content">
            <h2>Team Story</h2>
            <p>AeroCom was founded by a group of experienced aerospace engineers who recognized the need for a centralized platform for career guidance and resources in the industry. With a shared passion for education and professional development, they set out to create a space for students and professionals to connect, learn, and grow. Today, AeroCom is a thriving digital agency dedicated to empowering the next generation of aerospace leaders.</p>
            <div className="icon">
       
        <a href="https://www.linkedin.com/in/parth-vadhwana-74b623220" target="_blank"  rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/VadhwanaParth15" target="_blank"  rel="noreferrer"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/parth-vadhwana-74b623220"  rel="noreferrer" target="_blank"><BsTwitter/></a>
        <a href="https://instagram.com/pxrth.02?igshid=ZDdkNTZiNTM="  rel="noreferrer" target="_blank"><BsInstagram/></a>
    </div>
        </div>
        
    </section>
  )
}

export default AboutStory