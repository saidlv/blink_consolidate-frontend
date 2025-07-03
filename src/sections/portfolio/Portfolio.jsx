import React, { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { portfolioData } from '../../data/portfolioData'
import ProjectCard from '../../components/ProjectCard'
import Slider from 'react-slick'
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from 'gsap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Portfolio = () => {
  const { colors } = useTheme()

  // Custom Next Arrow Component
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-12 top-1/2 transform -translate-y-1/2 rounded-full p-1 bg-transparent hover:bg-[#e64a19] transition duration-300 z-20"
    >
      <ChevronRight className="text-[#e64a19] hover:text-[#DCE2E2] w-8 h-8" />
    </button>
  );
}

// Custom Prev Arrow Component
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-12 top-1/2 transform -translate-y-1/2 rounded-full p-1 bg-transparent hover:bg-[#e64a19] transition duration-300 z-20"
    >
      <ChevronLeft className="text-[#e64a19] hover:text-[#DCE2E2] w-8 h-8" />
    </button>
  );
}

  // Slider settings
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <section 
      id="portfolio"
      className="pt-10 lg:pt-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="w-full mx-auto px-3 lg:px-10 mb-8 lg:mb-12">
          
          {/* Section Heading */}
          <div className="text-center">
            <h2 
              className="text-3xl lg:text-5xl font-thin montserrat-font tracking-wider mb-4"
              style={{ 
                color: colors.text,
                letterSpacing: '0.05em'
              }}
            >
              Projects
            </h2>
            <p 
              className="text-lg md:text-xl lg:text-2xl font-light montserrat-font"
              style={{ color: colors.text }}
            >
              Showcasing our latest projects and work
            </p>
          </div>

          {/* Projects Carousel */}
          <div className='relative mx-8 rounded-3xl'>
            <Slider {...sliderSettings} className='flex items-stretch justify-center'>
              {portfolioData.projects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </Slider>
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

export default Portfolio
