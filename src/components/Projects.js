import React from 'react'
import ProjectItems from './ProjectItems'
import './Projects.css'

function Projects() {
    return (
        <div id='projects' className='cards'>
            <p className='header'>My Work</p>
            <hr id='divider' />
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <ProjectItems src='images/avpros.png' text='Website for audio-visual installation business. Built using React, Javascript, HTML, CSS, React-scroll, Animate.css, and Bootstrap.' label='AV Professionals' path='http://www.av-professionals.com/' />
                        <ProjectItems src='images/atoz.png' text='Website for landscaping business. Built using React, Javascript, Emailjs-com, HTML, CSS, React-scroll, and Bootstrap.' label='A-Z Landscaping' path='https://a-z-landscaping.herokuapp.com/' />
                        <ProjectItems src='images/audio2go.png' text='Website for car audio installation business. Built using React, Javascript, HTML, CSS, React-scroll, React-alice-carousel, and Bootstrap.' label='Audio 2 Go' path='https://audio2goatx.herokuapp.com/' />
                    </ul>
                    <ul className="cards__items">
                        <ProjectItems src='images/Space-Race.png' text='Space themed game that captures the users input to move a rocket around asteroids. Built using Javascript, HTML, and CSS' label='Space Race' path='https://jaxonnarramore.github.io/' />
                        <ProjectItems src='images/Air-Qual.png' text='Get air quality information for anywhere in the world. Built using Javascript, Express, HTML, CSS, Axios, Bcrypt, Passport, Sequelize, and PostgreSQL.' label='Air Qual' path='https://air-qual.herokuapp.com/' />
                        <ProjectItems src='images/PDR.png' text='Track bugs on your website as a user, developer or a company admin. Built using React, Javascript, Axios, React-beautiful-dnd, Bootstrap, Socket.io, and MongoDB.' label='PDR' path='https://pestdamagereport.herokuapp.com/' />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Projects
