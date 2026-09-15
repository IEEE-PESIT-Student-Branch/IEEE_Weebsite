import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
