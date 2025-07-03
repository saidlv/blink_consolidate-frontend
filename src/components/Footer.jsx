import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const themeContext = useTheme()
  const { colors } = themeContext

  return (
    <footer 
      className="py-12 border-t"
      style={{ 
        backgroundColor: colors.background,
        borderColor: colors.border 
      }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
        <p 
          className="text-sm"
          style={{ color: colors.textSecondary }}
        >
          © 2025 Blink Consolidate. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
