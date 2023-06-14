import React, { Suspense, useRef } from "react";
import Dashboard from './components/Dashboard/Dashboard';
import Signin from './components/Signin/Signin';
import SignUp from './components/Signup/Signup';
import { NavBar } from './components/Nav/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCourse from "./components/Course/AllCourse";


function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      {/* <Route path="/signin" element={<Signin/>}/> */}
      {/* <Route path="/signup" element={<SignUp/>}/> */}
      <Route path="/allcourses" element={<AllCourse/>}/>
      </Routes>
      </BrowserRouter>
        
    </>
  );
}

export default App;
