import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Header.css'

function Header() {
    return (
        <div className='hero-container'>
            <h1>Jaxon Narramore</h1>
            <p>I want to build your project</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    See My Work
                </Button>
            </div>
        </div>
    )
}

export default Header
