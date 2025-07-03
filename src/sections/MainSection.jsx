import React, { Suspense } from 'react'
import Navbar from './navbar/Navbar'
import { useTheme } from '../context/ThemeContext'

// Lazy load components for better performance
const Home = React.lazy(() => import('./home/Home'))
const About = React.lazy(() => import('./about/About'))
const Services = React.lazy(() => import('./services/Services'))
const Portfolio = React.lazy(() => import('./portfolio/Portfolio'))
const Contact = React.lazy(() => import('./contact/Contact'))
const Footer = React.lazy(() => import('../components/Footer'))

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
  </div>
)

const MainSection = () => {
  const { colors } = useTheme()
  
  return (
    <div className="main-section overflow-x-hidden" style={{ backgroundColor: colors.background }}>
      <Navbar />
      <main>
        <section id="home">
          <Suspense fallback={<SectionLoader />}>
            <Home />
          </Suspense>
        </section>
        <section id="about">
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        </section>
        <section id="services">
          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>
        </section>
        <section id="portfolio">
          <Suspense fallback={<SectionLoader />}>
            <Portfolio />
          </Suspense>
        </section>
        <section id="contact">
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </section>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default MainSection
