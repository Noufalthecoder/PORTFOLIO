import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { RiRobot2Line } from 'react-icons/ri'

const links = [
  { label: 'GitHub', href: 'https://github.com/Noufalthecoder', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-noufal-v-972353329/', icon: FaLinkedin },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-emerald-primary/10 bg-[#020C08]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-primary/30 to-transparent" />

      <div className="container-max px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-primary to-emerald-glow flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <RiRobot2Line className="text-white text-lg" />
            </div>
            <div>
              <div className="text-white font-bold tracking-wide">Mohammed Noufal V</div>
              <div className="text-emerald-glow text-xs font-mono">AI Engineer · Full Stack Developer</div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['about', 'projects', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-gray-400 hover:text-emerald-glow text-sm capitalize transition-colors"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {links.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-emerald-glow hover:border-emerald-primary/40 transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-emerald-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-gray-500 text-xs flex items-center gap-1.5">
            Built with <FaHeart className="text-emerald-primary text-[10px]" /> by Mohammed Noufal V
          </p>
          <p className="text-gray-600 text-xs font-mono">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
