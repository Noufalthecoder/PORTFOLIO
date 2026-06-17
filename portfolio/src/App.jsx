import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import CodingProfiles from './components/CodingProfiles'
import BeyondCode from './components/BeyondCode'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ui/ParticleBackground'
import ScrollProgress from './components/ui/ScrollProgress'
import CustomCursor from './components/ui/CustomCursor'

function App() {
  return (
    <div className="relative bg-bg-deep min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <div className="relative">
          <ParticleBackground />
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="experience"><Experience /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="certifications"><Certifications /></section>
          <section id="achievements"><Achievements /></section>
          <section id="coding"><CodingProfiles /></section>
          <section id="beyond"><BeyondCode /></section>
          <section id="contact"><Contact /></section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
