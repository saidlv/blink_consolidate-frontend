import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faUser, 
  faCog, 
  faHammer, 
  faPhone,
  faBars,
  faTimes,
  faBook,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons'
import {Sun} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import gsap from 'gsap'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef = useRef(null)
  const themeContext = useTheme()
  const { colors } = themeContext
  const { toggleTheme, isDark } = themeContext

  const sections = [
    { name: 'HOME', icon: faHome, id: 'home' },
    { name: 'ABOUT', icon: faUser, id: 'about' },
    { name: 'SERVICES', icon: faCog, id: 'services' },
    { name: 'PROJECTS', icon: faHammer, id: 'portfolio' },
    { name: 'CONTACT', icon: faPhone, id: 'contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // GSAP animation for mobile menu
  useEffect(() => {
    console.log('Mobile menu state changed:', isMobileMenuOpen)
    
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        // Open animation - slide in from left
        gsap.fromTo(mobileMenuRef.current,
          { x: '-100%', opacity: 0 },
          { x: '0%', opacity: 100, duration: 0.4, ease: 'power2.out' }
        )
      } else {
        // Close animation - slide out to left
        gsap.fromTo(mobileMenuRef.current,
          { x: '0%', opacity: 100 },
          { x: '-100%', opacity: 0 , duration: 0.4, ease: 'power2.in' }
        )
      }
    } else {
      console.log('mobileMenuRef not available:', !!mobileMenuRef.current)
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
     setIsMobileMenuOpen(false)
  }

  const handleCareersClick = () => {
    // This is commented in Flutter - we can implement CV download here
    // window.open('https://drive.google.com/file/d/1FaHIzT9FigDHLx8NlxFIyQfjJTyN9WQ6/view?usp=sharing', '_blank')
  }

  const NavbarLogo = ({ height = 20 }) => (
    <div className="flex items-center">
      {/* The original Flutter logo is commented out, keeping it consistent */}
      {/* 
      <span className="text-xl" style={{ color: colors.text }}>{"<"}</span>
      <span className="agustina-font text-xl mx-1" style={{ color: colors.text }}>Hamza</span>
      <span className="text-xl" style={{ color: colors.text }}>{" />"}</span>
      */}
    </div>
  )

  return (
    <>
      {/* Unified Navbar */}
      <nav 
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-6 lg:px-10 py-2 md:py-0"
        style={{ 
          backgroundColor: isScrolled 
            ?  'rgba(235, 146, 87, 0.5)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: 'none'
        }}
      >
        <div className="w-full flex items-center justify-between">
          {/* Mobile Hamburger Menu - Left Side */}
          <div className="md:hidden flex items-center gap-4 flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 z-50 relative"
              style={{ color: colors.text }}
              type="button"
            >
              <FontAwesomeIcon 
                icon={isMobileMenuOpen ? faTimes : faBars} 
                size="lg" 
              />
            </button>
          </div>

          {/* Logo - Center on mobile, Left on desktop */}
          <div className="flex-shrink-0 md:order-first">
            <NavbarLogo height={window.innerWidth < 780 ? 20 : window.innerHeight * 0.035} />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {sections.map((section, index) => (
              <div key={index} className="px-1 h-[60px] flex items-center">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-base font-normal transition-colors duration-200 rounded px-4 py-2"
                  style={{ 
                    color: colors.text,
                    fontFamily: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, { 
                      backgroundColor: '#d96254',
                      duration: 0.2
                    })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, { 
                      backgroundColor: 'transparent',
                      duration: 0.2
                    })
                  }}
                >
                  {section.name}
                </button>
              </div>
            ))}

            {/* Careers Button */}
            <button
              onClick={handleCareersClick}
              className="rounded border border-solid transition-colors duration-200 montserrat-font font-light text-lg px-6 py-2 ml-2"
              style={{ 
                borderColor: '#C0392B',
                color: colors.text,
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { 
                  backgroundColor: '#d96254',
                  duration: 0.2
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { 
                  backgroundColor: 'transparent',
                  duration: 0.2
                })
              }}
            >
              Careers
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ml-5"
              style={{ 
                backgroundColor: isDark ? colors.primary : '#ccc',
                focusRingColor: colors.primary
              }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  isDark ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Transparent Overlay - Click to close */}
          <div 
            className="absolute inset-0 bg-transparent"
            onClick={()=> setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div 
            ref={mobileMenuRef}
            className="relative w-[80%] h-full p-6"
            style={{ 
              backgroundColor: colors.background,
              transform: 'translateX(-100%)',
              boxShadow: '2px 0 10px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex flex-col space-y-6">
            <div className='border-y-2 border-solid border-gray-300 py-3 flex justify-between items-center'>
              <div className='flex items-center gap-2 flex-shrink-0'>  
                <Sun color='#C0392B'/>
                <p style={{ color: colors.text }}>{isDark?"Dark Mode":"Light Mode"}</p> 
              </div> 
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
                style={{ backgroundColor: isDark ? colors.primary : '#ccc' }}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-500 ease-in-out ${
                    isDark ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Navigation Links */}
            {sections.map((section) => (
              <div key={section.name} className="p-2">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="w-full flex items-center space-x-3 p-3 rounded transition-colors duration-200"
                  style={{ color: colors.text }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, { 
                      backgroundColor: 'rgba(192, 57, 43, 0.1)',
                      duration: 0.2
                    })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, { 
                      backgroundColor: 'transparent',
                      duration: 0.2
                    })
                  }}
                >
                  <FontAwesomeIcon 
                    icon={section.icon} 
                    style={{ color: '#C0392B' }} 
                  />
                  <span>{section.name}</span>
                </button>
              </div>
            ))}

            {/* Careers Button */}
            <div className="p-2">
              <button
                onClick={handleCareersClick}
                className="w-full flex items-center space-x-3 p-3 rounded border transition-colors duration-200 montserrat-font font-light"
                style={{ 
                  borderColor: '#C0392B',
                  color: colors.text,
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { 
                    backgroundColor: 'rgba(192, 57, 43, 0.1)',
                    duration: 0.2
                  })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { 
                    backgroundColor: 'transparent',
                    duration: 0.2
                  })
                }}
              >
                <FontAwesomeIcon 
                  icon={faBook} 
                  style={{ color: '#C0392B' }} 
                />
                <span>Careers</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Navbar
