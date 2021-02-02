import '../../App.css'
import Header from '../Header'
import React from 'react'
import Projects from '../Projects'
import Footer from '../Footer'
import About from '../About'

function Home() {
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home;

