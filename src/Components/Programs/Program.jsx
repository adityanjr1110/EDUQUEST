import React from 'react'
import './Program.css';
import prg1 from '../../assets/p1.jpg'
import prg2 from '../../assets/p2.jpg'
import prg3 from '../../assets/p3.jpg'
import pi1 from '../../assets/pi1.png'
import pi2 from '../../assets/pi2.png'
import pi3 from '../../assets/pi3.png'

const Program = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={prg1} alt="" />
                <div className="caption">
                    <img src={pi1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={prg2} alt="" />
                <div className="caption">
                    <img src={pi2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={prg3} alt="" />
                <div className="caption">
                    <img src={pi3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>

        </div>
    )
}

export default Program
