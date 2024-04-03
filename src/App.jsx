import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

const App = () => {
  const [playState,setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title='What We Offer'/>
        <Program />
        <About setPlayState={setPlayState}/>
        <Title subTitle="Galley" title='Campus Photos'/>
        <Campus />
        <Title subTitle="Testimonials" title='What a Student Says'/>
        <Testimonials />
        <Title subTitle="Contact us" title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
