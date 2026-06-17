import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { RiRobot2Line } from 'react-icons/ri'
import MagneticButton from './ui/MagneticButton'

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Beyond Code',  href: '#beyond' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [active, setActive]         = useState('home')
  const [menuOpen, setMenuOpen]     = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('home')
      if (hero) setHeroVisible(hero.getBoundingClientRect().bottom > 64)
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (heroVisible) return null

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(2,12,8,0.94)] backdrop-blur-2xl border-b border-emerald-primary/10 shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('#home')}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-all duration-300">
                <RiRobot2Line className="text-white text-base" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-sm tracking-wider">NOUFAL.V</span>
                <span className="text-[#34D399] text-[9px] font-mono tracking-[0.2em] uppercase mt-0.5">AI Engineer</span>
              </div>
            </motion.button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = active === id
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-3.5 py-2 text-[13px] font-medium transition-all duration-300 rounded-lg group ${
                      isActive ? 'text-[#34D399]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 bg-[#10B981]/10 rounded-lg border border-[#10B981]/20"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[1px] bg-[#34D399] transition-all duration-300 ${
                        isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => scrollTo('#contact')}
                  className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] transition-all duration-300"
                >
                  Hire Me
                </motion.button>
              </MagneticButton>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-gray-300 hover:text-[#34D399] transition-colors p-2 rounded-lg hover:bg-[#10B981]/10"
              >
                {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[#020C08]/90 backdrop-blur-lg"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-[#031711] border-l border-[#10B981]/10 flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                    <RiRobot2Line className="text-white text-xs" />
                  </div>
                  <span className="text-white font-bold text-sm">NOUFAL.V</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <HiX size={20} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 border ${
                      active === link.href.replace('#', '')
                        ? 'text-[#34D399] bg-[#10B981]/10 border-[#10B981]/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5 border-transparent'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="pt-6 border-t border-[#10B981]/10 mt-4">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                >
                  Hire Me
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
