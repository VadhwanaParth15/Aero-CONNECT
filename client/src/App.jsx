import React from "react";
import Dashboard from './components/Dashboard/Dashboard';
import Login from "./components/Login/Login";
import { NavBar } from './components/Nav/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCourse from "./components/Course/AllCourse";
// import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Register from "./components/Register/Register";
import All from "./components/Event/All";
import Create from "./components/Event/Create";
import Internship from "./components/Internship/Internships";


function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/allcourses" element={<AllCourse/>}/>
      <Route path="/events" element={<All/>}/>
      <Route path="/events/create" element={<Create/>}/>
      <Route path="/internships" element={<Internship/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
