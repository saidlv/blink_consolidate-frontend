import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './context/ThemeContext'
import MainSection from './sections/MainSection'
import ArrowOnTop from './components/ArrowOnTop'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <MainSection />
          <ArrowOnTop />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              success: {
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#FFFFFF',
                },
              },
              error: {
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#FFFFFF',
                },
              },
            }}
          />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
