import React from "react";
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup/Signup'
import Login from "./components/Login/Login";
import { NavBar } from './components/Nav/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCourse from "./components/Course/AllCourse";
// import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/allcourses" element={<AllCourse/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
