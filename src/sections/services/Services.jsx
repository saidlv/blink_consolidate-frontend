import React, { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { portfolioData } from '../../data/portfolioData'
import ServiceCard from '../../components/ServiceCard'
import gsap from 'gsap'

const Services = () => {
  const { colors } = useTheme()

  return (
    <section 
      id="services"
      className="pt-10 lg:pt-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="w-full mx-auto px-6 lg:px-12 xl:px-16 mb-8 lg:mb-12">
          
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2
              className="text-3xl lg:text-5xl font-thin montserrat-font tracking-wider mb-4"
              style={{ 
                color: colors.text,
                letterSpacing: '0.05em'
              }}
            >
              Services
            </h2>
            <p 
              className="text-lg md:text-xl lg:text-2xl font-light montserrat-font"
              style={{ color: colors.text }}
            >
              We provide a wide range of IT services
            </p>
          </div>

          {/* Services Grid */}
          <div
            className="flex flex-wrap gap-8 justify-center items-stretch"
          >
            {portfolioData.services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
              />
            ))}
          </div>
      </div>

       {/* Divider */}
              <div 
                className="w-full lg:w-4/5 mx-auto h-0.5 md:h-1"
                style={{ backgroundColor: '#404040' }}
              />
    </section>
  )
}

export default Services
