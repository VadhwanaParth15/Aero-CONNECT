import React from 'react'
import './news.css'
import rocket from '../../Assets/rocket.jpeg'
import oic from '../../Assets/OIP.jpeg'
const News = () => {
  return (
   <section className="container news">
    <h2 className='text-align-center'>News & Expertise</h2>
    
    <div className="section_conatnt">
        <div className="content">
            <h2>Breakthrough in Biofuel Research Opens New Avenues for Aeronautical Industry</h2>
            <p>AeroCom was founded by a group of experienced aerospace engineers who recognized the need for a centralized platform for career guidance and resources in the industry. With a shared passion for education and professional development, they set out to create a space for students and professionals to connect, learn, and grow. Today, AeroCom is a thriving digital agency dedicated to empowering the next generation of aerospace leaders.</p>
        </div>
    
    </div>
    <div className="section_conatnt">
        <div className="content">
            <h2>Nasa's Announcement</h2>
            <p>AeroCom was founded by a group of experienced aerospace engineers who recognized the need for a centralized platform for career guidance and resources in the industry. With a shared passion for education and professional development, they set out to create a space for students and professionals to connect, learn, and grow. Today, AeroCom is a thriving digital agency dedicated to empowering the next generation of aerospace leaders.</p>
        </div>
    </div>
   </section>
  )
}

export default News