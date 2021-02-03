import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Header.css'

function Header() {
    return (
        <div className='hero-container'>
            <h1 className='name'>Jaxon Narramore</h1>
            <p className='heading'>Let me build your next project</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    See My Work
                </Button>
            </div>
        </div>
    )
}

export default Header
