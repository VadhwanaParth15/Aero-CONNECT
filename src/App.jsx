import React from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import { NavBar } from './Components/Nav/Navbar'
import SignUp from './Components/SignUp/SignUp.jsx'
import Home from './Components/Home/Home'
const App = () => {
  return (
    
    <div>
        {/* <NavBar/> */}
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>

    
    </BrowserRouter>
    
    </div>
  )
}

export default App