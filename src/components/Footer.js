import React from 'react'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div class="footer-links">
                <div class="footer-links">
                    <a href="https://github.com/JaxonNarramore" target='_blank'>
                        <i id='github' class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jaxonnarramore/" target='_blank'>
                        <i id='linkedin' class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
