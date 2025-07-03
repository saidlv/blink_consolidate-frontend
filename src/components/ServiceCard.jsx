import React, { useRef, useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import gsap from 'gsap'

const ServiceCard = ({ service, index }) => {
  const { colors } = useTheme()
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // Set initial 3D properties
    gsap.set(cardRef.current, {
      transformStyle: "preserve-3d"
    })
  }, [])

  const handleCardClick = () => {
    const newFlippedState = !isFlipped
    
    // Animate content fade out, flip, then fade in
    gsap.timeline()
      .to(contentRef.current, {
        opacity: 0,
        duration: 0.1,
        ease: "power2.inOut"
      })
      .to(cardRef.current, {
        rotationY: newFlippedState ? 180 : 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, "-=0.1")
      .call(() => setIsFlipped(newFlippedState))
      .to(contentRef.current, {
        opacity: 1,
        duration: 0.1,
        ease: "power2.inOut"
      })
  }

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      boxShadow: `0 20px 40px rgba(255, 87, 34, 0.3)`,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: `0 10px 30px rgba(8, 8, 8, 0.571)`,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  return (
    <div
      ref={cardRef}
      className="relative w-[80%] md:w-[45%] lg:w-[30%] aspect-3/4 md:aspect-4/3 cursor-pointer group rounded-4xl p-6 flex flex-col justify-center"
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: colors.surface,
        boxShadow: '0 10px 30px rgba(8, 8, 8, 0.571)'
      }}
    >
      <div ref={contentRef}>
        {!isFlipped ? (
          // Front content
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-[50%] aspect-square mb-6 overflow-hidden rounded-full">
              <img 
                src={service.icon} 
                alt={service.name}
                className="w-full h-full object-fill"
              />
            </div>

            <div className='w-full h-[30%] flex flex-col items-center justify-center'>
            <h3 
              className="text-xl font-medium montserrat-font text-center mb-4"
              style={{ color: colors.text }}
            >
              {service.name}
            </h3>
            <p 
              className="text-sm text-center opacity-70"
              style={{ color: colors.text }}
            >
              Click to learn more
            </p>
            </div>
          </div>
        ) : (
          // Back content
          <div className="flex flex-col justify-center h-full text-center transform rotate-y-180">
            <div 
              className="text-sm leading-relaxed mb-4 flex flex-col justify-center items-center"
              style={{ 
                color: colors.text,
                lineHeight: '1.8',
              }}
            >
              {service.description.split('\n').map((line, index) => (
                <span key={index} className='text-left w-[80%] mx-auto'>
                  {line}
                  {index < service.description.split('\n').length - 1 && <br />}
                </span>
              ))}
            </div>
            <div 
              className="w-full h-px mb-4 mx-auto"
              style={{ backgroundColor: colors.text, opacity: 0.3 }}
            />
            <h4 
              className="text-lg font-medium montserrat-font"
              style={{ color: colors.primary }}
            >
              {service.name}
            </h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
