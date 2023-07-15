import React, { Suspense, useRef } from "react";
import Home from '../Home/Home'
import Course from "../Course/Course";
import Services from "../Services/Services";
import About from "../About/About";


const Dashboard = () => {
  return (
    <div>
        
       
      <Home/>
      {/* <Course/> */}
      <Services/>
      <About/>
    </div>
  )
}

export default Dashboard