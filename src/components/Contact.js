import React from 'react'
import { Button } from './Button'
import './Contact.css'

function Contact() {
    return (
        <div className='contact-container'>
            <p className="contact-heading">
                Lets Get In Touch!
                <i id='underline' class="fad fa-horizontal-rule"></i>
            </p>
            <p className="contact-text">
                Got a project for me? Give me a call, text or send me an email and I will get back to you as soon as possible!
            </p>
            <div className="number-container">
                <a href="tel:+5128502204">
                    <p className='number'>
                        (512) 850-2204
                    </p>
                </a>
                <a href="mailto: jaxon_narramore@hotmail.com">
                    <p className='email'>
                        jaxon_narramore@hotmail.com
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Contact