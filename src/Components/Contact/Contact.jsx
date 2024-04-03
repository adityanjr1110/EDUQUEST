import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "08874131-6bb9-4fd0-b9cd-215914506f75");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@fcb.aditya11@gmail.com</li>
                    <li><img src={phone_icon} alt="" />7718995525</li>
                    <li><img src={location_icon} alt="" />Pune,Maharashtra</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit} >
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder='Enter Your Name' required /><br />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your Mobile Number' required />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
