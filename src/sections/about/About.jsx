import React, { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { portfolioData } from '../../data/portfolioData'
import gsap from 'gsap'

const About = () => {
  const { colors } = useTheme()

  return (
    <section 
      id="about"
      className="w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
          
          {/* Section Heading */}
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 
              className="text-3xl lg:text-5xl font-thin montserrat-font tracking-wider"
              style={{ 
                color: colors.text,
                letterSpacing: '0.05em'
              }}
            >
              About Us
            </h2>
          </div>

          {/* Content */}
          <div className="flex justify-center">
            <div className="w-full lg:w-4/5">
              <div 
                className="mb-8 lg:mb-12"
              >
                <p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-light montserrat-font leading-relaxed lg:leading-loose text-center"
                  style={{ 
                    color: '#808080',
                    lineHeight: '2.0'
                  }}
                >
                  {portfolioData.personal.aboutCompany}
                </p>
              </div>

              {/* Divider */}
              <div 
                className="w-full h-0.5 md:h-1"
                style={{ backgroundColor: '#404040' }}
              />
            </div>
          </div>

      </div>
    </section>
  )
}

export default About
