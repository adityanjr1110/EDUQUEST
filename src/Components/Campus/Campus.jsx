import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallery_1.jpg'
import gallery2 from '../../assets/gallery_2.jpg'
import gallery3 from '../../assets/gallery_3(1).jpg'
import gallery4 from '../../assets/gallery_4.jpg'
import gallery5 from '../../assets/gallery_5.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery5} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className='btn dark-btn'>View More <img src={white_arrow} alt="" /></button> 
    </div>
  )
}

export default Campus
