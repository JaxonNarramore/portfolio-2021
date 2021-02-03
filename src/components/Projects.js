import React from 'react'
import ProjectItems from './ProjectItems'
import './Projects.css'

function Projects() {
    return (
        <div className='cards'>
            <h1 className='header'>My Work</h1>
            <i id='underline' class="fad fa-horizontal-rule"></i>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <ProjectItems src='images/Space-Race.png' text='Space themed game that captures the users input to move a rocket around asteroids' label='Space Race' path='https://jaxonnarramore.github.io/' />
                        <ProjectItems src='images/Air-Qual.png' text='Get air quality information for anywhere in the world' label='Air Qual' path='https://air-qual.herokuapp.com/' />
                    </ul>
                    <ul className="cards__items">
                        <ProjectItems src='images/PDR.png' text='Track bugs on your website as a user, developer or a company admin.' label='PDR' path='https://pestdamagereport.herokuapp.com/' />
                        <ProjectItems src='images/taskmanager.png' text='Manage tasks at your business by assigning them directly to employeees' label='Task Manager' path='https://resttaskmanager.herokuapp.com/' />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Projects
