import React from 'react'
import './About.css'
import about_img from '../../assets/about(1).jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>An Investment in Knowledge pays the Best Interest</h2>
                <p>Ensure all students reach their highest potential through effective teaching methods, personalized support, and rigorous academic standards.</p>
                <p>Foster an inclusive culture that celebrates diversity, promotes equity, and provides equal opportunities for all students and staff.</p>
                <p>Encourage and support faculty and students in conducting cutting-edge research, fostering innovation, and contributing to the advancement of knowledge in various fields.</p>

            </div>
        </div>
    )
}

export default About
