import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Button } from "./Button";
import ResumeLink from './ResumeLink'
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <Link to='header' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='navbar-logo' onClick={closeMobileMenu}>
                        Jaxon Narramore
                    </Link>
                    <div class="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='about' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='skills' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Skills
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='projects' activeClass="active" spy={true} smooth={true} offset={-40} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='contact' activeClass="active" spy={true} smooth={true} offset={-70} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ResumeLink>Resume</ResumeLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;