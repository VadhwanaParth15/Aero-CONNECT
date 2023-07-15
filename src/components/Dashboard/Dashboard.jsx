import React, { Suspense, useRef } from "react";
import Home from '../Home/Home'
import Course from "../Course/Course";
import Services from "../Services/Services";
import About from "../About/About";
import News from "../News/News";


const Dashboard = () => {
  return (
    <div>
        
       
      <Home/>
      {/* <Course/> */}
      <Services/>
      <About/>
      {/* <News/> */}
    </div>
  )
}

export default Dashboard