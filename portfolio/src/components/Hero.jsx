import React, { useRef, useEffect, useState } from 'react'
import heroImg from '../assets/intro/hero.png'
import resumePdf from '../assets/resume/resume.pdf'

export default function Hero() {
  const heroRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showScroll, setShowScroll] = useState(false)

  // Detect mobile breakpoint
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Show scroll indicator after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowScroll(true), 5000)
    return () => clearTimeout(timer)
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
      {/* Hero image — full cover background */}
      <img
        src={heroImg}
        alt="Mohammed Noufal V — AI Engineer & Full Stack Developer"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          /* On mobile, shift focus to the right so the person stays visible */
          objectPosition: isMobile ? '68% top' : 'center top',
          display: 'block',
          position: 'absolute',
          inset: 0,
        }}
        draggable={false}
      />

      {/* Mobile overlay — gradient + real text so content is always readable */}
      {isMobile && (
        <>
          {/* Dark gradient overlay for text readability */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 70%, transparent 100%)',
            }}
          />

          {/* Mobile text content — overlaid at the bottom */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-24 pt-8 flex flex-col items-start gap-4">
            <p
              className="text-base font-light tracking-wide"
              style={{ color: '#D4956A' }}
            >
              Hi There, I am
            </p>
            <h1 className="text-[2.2rem] leading-[1.1] font-extrabold text-white">
              Mohammed<br />Noufal
            </h1>
            <p
              className="text-lg font-semibold leading-snug"
              style={{ color: '#D4956A' }}
            >
              AI Engineer &amp;<br />Software Developer
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
              Building intelligent solutions with code, creating impact through technology.
            </p>

            <div className="flex gap-3 mt-2 w-full">
              <button
                onClick={scrollToAbout}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold tracking-wide transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #C47B3F, #A0622F)',
                  color: '#fff',
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(196,123,63,0.4)',
                  flex: '1',
                }}
              >
                <span style={{ fontFamily: 'monospace', fontSize: '14px' }}>&lt;/&gt;</span>
                Explore My Work
              </button>
              <button
                onClick={downloadResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold tracking-wide transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: '#D4956A',
                  border: '1.5px solid rgba(196,123,63,0.6)',
                  flex: '1',
                }}
              >
                📄 Resume
              </button>
            </div>
          </div>
        </>
      )}

      {/* Desktop: invisible clickable overlays over the image buttons are not needed
           since desktop shows the original image perfectly */}

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
