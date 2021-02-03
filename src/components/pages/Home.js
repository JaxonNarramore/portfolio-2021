import '../../App.css'
import Header from '../Header'
import React from 'react'
import Projects from '../Projects'
import Footer from '../Footer'
import About from '../About'
import Contact from '../Contact'
import Skills from '../Skills'

function Home() {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;

