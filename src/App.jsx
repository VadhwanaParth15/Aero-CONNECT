import React from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
const App = () => {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>

    
    </BrowserRouter>
    
    </>
  )
}

export default App