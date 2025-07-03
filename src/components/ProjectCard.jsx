import React, { useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import gsap from 'gsap'

const ProjectCard = ({ project, index }) => {
  const { colors } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const overlayRef = useRef(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    gsap.to(cardRef.current, {
      boxShadow: `0 20px 40px rgba(255, 87, 34, 0.3)`,
      duration: 0.3,
      ease: "power2.out"
    })
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: `0 10px 30px rgba(8, 8, 8, 0.571)`,
      duration: 0.3,
      ease: "power2.out"
    })
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  return (
      <div
        ref={cardRef}
        className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group m-4 p-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: colors.surface,
          boxShadow: `0 10px 30px rgba(8, 8, 8, 0.571)`,
        }}
      >
        {/* Project Image */}
        <div className="w-full h-1/2 overflow-hidden">
          <img 
            src={project.banner || project.icon} 
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            
          />
        </div>

        {/* Project Info */}
        <div className="flex flex-col justify-center items-center lg:items-start h-1/2">
          <h3 
            className="text-xl font-medium montserrat-font mb-2 text-center lg:text-left"
            style={{ color: colors.text }}
          >
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-xs rounded-full"
                style={{
                  backgroundColor: colors.primary,
                  color: '#FFFFFF'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0"
          style={{
            backgroundColor: `${colors.primary}E6` // Adding transparency
          }}
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            {project.title}
          </h3>
          <p className="text-sm text-white text-center mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-4">
            {project.githubUrl && (
              <button 
                className="px-4 py-2 rounded-lg font-medium transition-colors"
                style={{
                  backgroundColor: colors.surface,
                  color: colors.text
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.githubUrl, '_blank')
                }}
              >
                GitHub
              </button>
            )}
            {project.liveUrl && (
              <button 
                className="px-4 py-2 rounded-lg font-medium transition-colors"
                style={{
                  backgroundColor: colors.surface,
                  color: colors.text
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.liveUrl, '_blank')
                }}
              >
                Live Demo
              </button>
            )}
          </div>
        </div>
      </div>
  )
}

export default ProjectCard
