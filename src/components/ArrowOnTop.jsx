import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../context/ThemeContext'
import gsap from 'gsap'

const ArrowOnTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const themeContext = useTheme()
  const { colors } = themeContext

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        style={{
          backgroundColor: colors.primary,
          color: colors.background
        }}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon 
          icon={faArrowUp} 
          className="text-lg transition-transform duration-300 group-hover:-translate-y-1" 
        />
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full animate-ping opacity-25"
             style={{ backgroundColor: colors.primary }}>
        </div>
      </button>
    </div>
  )
}

export default ArrowOnTop
