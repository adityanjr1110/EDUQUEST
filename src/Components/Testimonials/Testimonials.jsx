import React, { useRef } from 'react'
import './Testimonials.css'
import nextbtn from '../../assets/next-icon.png'
import backbtn from '../../assets/back-icon.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'

const Testimonials = () => {
    
  const slider = useRef();
  let tx = 0;


  const slideForward = () =>{
    if (tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () =>{
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }



  return (
    <div className='testimonials'>
      <img src={nextbtn} alt="" className='next-btn' onClick={slideForward} / >
      <img src={backbtn} alt="" className='back-btn' onClick={slideBackward} / >
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Aditya Pawar</h3>
                                <span>EduQuest,India</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at EduQuest was one of the best decisions I've ever made.The supportive community,this.state-of-the-art facilities, and the commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Willam Joseph</h3>
                                <span>EduQuest,USA</span>
                            </div>
                        </div>
                        <p>Graduating from Eduquest has been an unforgettable experience. The institute's dynamic curriculum and supportive faculty have empowered me to achieve my academic and personal goals with confidence.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Antonella</h3>
                                <span>EduQuest,USA</span>
                            </div>
                        </div>
                        <p>Eduquest has been my home away from home for the past few years. The diverse community, innovative teaching methods, and ample opportunities for extracurricular growth have shaped me into a well-rounded individual ready to take on the world.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Glenn Kroos</h3>
                                <span>EduQuest,Japan</span>
                            </div>
                        </div>
                        <p>Reflecting on my time at Eduquest, I am grateful for the supportive community and personalized attention I received. The institute's emphasis on holistic development has not only enhanced my academic abilities but also instilled in me a lifelong love for learning.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
