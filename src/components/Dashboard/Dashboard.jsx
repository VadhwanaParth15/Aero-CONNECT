import React, { Suspense, useRef } from "react";
import Home from '../Home/Home'
import Course from "../Course/Course";
import Services from "../Services/Services";



const Dashboard = () => {
  return (
    <div>
        
       
      <Home/>
      {/* <Course/> */}
      <Services/>
        
    </div>
  )
}

export default Dashboard