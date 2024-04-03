import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>A child without education is like a bird without wings.</h1>
        <p>We at EDUQUEST work with a focus on interactive learning experiences, cutting-edge technology integration, and a supportive learning environment, we empower our students to thrive intellectually and socially. </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
