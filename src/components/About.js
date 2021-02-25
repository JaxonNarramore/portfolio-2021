import React from 'react'
import './About.css'

function About() {
    return (
        <div id='about'>
            <div className='about-container'>
                <div className="about-image">
                    <img className='image' src="images/Me.jpeg" alt="" />
                </div>
                <div className='about-text'>
                    <p>I'm a full-stack software engineer located in Austin, Texas. My goal is to create engaging applications that add value to people's lives. I believe in a think-outside-the-box protocol, and incorporate it into my software with the use of creative problem solving, intuitive design, and keeping the customer experience in mind. I am constantly driven by my desire to be the best at what I do.</p>
                </div>
            </div>
        </div>
    )
}

export default About
