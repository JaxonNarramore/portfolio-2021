import React from 'react'
import { Button } from './Button'
import './Contact.css'

function Contact() {
    return (
        <div id='contact' className='contact-container'>
            <p className="contact-heading">
                Lets Get In Touch!
                <hr id='underline' />
            </p>
            <p className="contact-text">
                Got a project for me? Give me a call, text, or send me an email and I will get back to you as soon as possible!
            </p>
            <div className="number-container">
                <a className='link' href="tel:+5128502204">
                    <p className='number'>
                        (512) 850-2204
                    </p>
                </a>
                <a className='link' href="mailto: jaxon_narramore@hotmail.com">
                    <p className='email'>
                        jaxon_narramore@hotmail.com
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Contact