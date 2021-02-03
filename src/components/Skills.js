import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div id='skills' className='whole'>
            <p className='heading'>Skills</p>
            <hr id='divider' />
            <div className='skills-container'>
                <div className='div'>
                    <h2 className='h2'>Languages & Frameworks</h2>
                    <p className='p'>Javascript, React, Python, Django, Node, Express, HTML/CSS, Bootstrap</p>
                </div >
                <div className='div'>
                    <h2 className='h2'>Management & Deployment</h2>
                    <p className='p'>Git, Github, Heroku</p>
                </div>
                <div className='div'>
                    <h2 className='h2'>Methodologies</h2>
                    <p className='p'>Authentication, Wireframing, ERDs, User Stories, Responsive Design, Intuitive Design</p>
                </div>
                <div className='div'>
                    <h2 className='h2'>Databases</h2>
                    <p className='p'>SQL, PostgreSQL, MongoDB</p>
                </div>
            </div>
        </div>
    )
}

export default Skills