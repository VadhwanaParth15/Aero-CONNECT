import React, { Suspense, useRef } from "react";
import Dashboard from './components/Dashboard/Dashboard';
import Signin from './components/Signin/Signin';
import SignUp from './components/Signup/Signup';
import { NavBar } from './components/Nav/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCourse from "./components/Course/AllCourse";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      {/* <Route path="/About" element={<About/>}/> */}
      {/* <Route path="/signin" element={<Signin/>}/> */}
      {/* <Route path="/signup" element={<SignUp/>}/> */}
      <Route path="/allcourses" element={<AllCourse/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
