import React, { useRef, useEffect, useState } from 'react'
import heroImg from '../assets/intro/hero.png'
import resumePdf from '../assets/resume/resume.pdf'

export default function Hero() {
  const heroRef = useRef(null)
  const [dims, setDims] = useState({ w: 0, h: 0 })
  const [imgNatural, setImgNatural] = useState({ w: 0, h: 0 })
  const [showScroll, setShowScroll] = useState(false)

  // Show scroll indicator after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowScroll(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  // Recalculate overlay positions on resize
  useEffect(() => {
    const update = () => {
      if (heroRef.current) {
        setDims({ w: heroRef.current.offsetWidth, h: heroRef.current.offsetHeight })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const scrollToAbout = () => {
    const about = document.getElementById('about')
    if (about) about.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Mohammed_Noufal_V_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div
      ref={heroRef}
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Hero image — full screen, EXACTLY as provided, no filters, no overlays */}
      <img
        src={heroImg}
        alt="Mohammed Noufal V — AI Engineer & Full Stack Developer"
        onLoad={(e) => setImgNatural({ w: e.target.naturalWidth, h: e.target.naturalHeight })}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
          position: 'absolute',
          inset: 0,
        }}
        draggable={false}
      />

      {/*
        Invisible clickable overlays — positioned over the buttons already drawn inside the hero image.
        The hero image contains two visible buttons: "Explore My Work" (primary) and "Download Resume" (outline).
      {/* Scroll indicator — shown after 5 seconds */}
      {showScroll && (
        <div
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer animate-bounce opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Scroll to About section"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white/80 rounded-full animate-ping" />
          </div>
          <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">Scroll</span>
        </div>
      )}
    </div>
  )
}
