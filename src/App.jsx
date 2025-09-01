import { useState } from 'react'
import './App.css'
import HeroSection from './components/Hero'
import AboutSection from './components/about'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Footer />

    </>
  )
}

export default App
