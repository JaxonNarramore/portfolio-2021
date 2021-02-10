import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Header.css'
import { Link, animateScroll, animateScroll as scroll } from "react-scroll";


function Header() {
    return (
        <div id='header' className='hero-container'>
            <h1 className='name'>Jaxon Narramore</h1>
            <p className='heading'>Let me build your next project</p>
            <div className="hero-btns">
                <Link to='projects' activeClass="active" spy={true} smooth={true} offset={-30} duration={100} className='btn-mobile'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        See My Work
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Header
