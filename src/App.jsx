import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Projects from './Components/Projects'
import Hero from './Components/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Admin from './Components/Admin'
function App() {
  useEffect(() => {
    AOS.init();    
  }, []);
  return (
    <div className='bg-[url("/src/assets/site-bg.jpg")] overflow-hidden'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' index element={<Hero/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    
  )
}

export default App
