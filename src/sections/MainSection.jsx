import React from 'react'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import About from './about/About'
import Services from './services/Services'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import Footer from '../components/Footer'
import { useTheme } from '../context/ThemeContext'

const MainSection = () => {
  const { colors } = useTheme()
  
  return (
    <div className="main-section overflow-x-hidden" style={{ backgroundColor: colors.background }}>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default MainSection
