import React from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
// import { Nav } from './Components/Nav/Navbar.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import Home from './Components/Home/Home'
const App = () => {
  return (
    
    <div>
        {/* <Nav/> */}
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