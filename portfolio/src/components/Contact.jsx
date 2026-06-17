import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import SectionHeader from './ui/SectionHeader'
import MagneticButton from './ui/MagneticButton'

const contactLines = [
  { prompt: 'const contact = {', delay: 0 },
  { prompt: '  name: "Mohammed Noufal V",', delay: 0.15 },
  { prompt: '  role: "AI Engineer & Full Stack Developer",', delay: 0.3 },
  { prompt: '  email: "vagirahamed@gmail.com",', delay: 0.45, link: 'mailto:vagirahamed@gmail.com' },
  { prompt: '  phone: "+91 6383255226",', delay: 0.6, link: 'tel:+916383255226' },
  { prompt: '  github: "github.com/Noufalthecoder",', delay: 0.75, link: 'https://github.com/Noufalthecoder' },
  { prompt: '  linkedin: "linkedin.com/in/mohammed-noufal-v",', delay: 0.9, link: 'https://www.linkedin.com/in/mohammed-noufal-v-972353329/' },
  { prompt: '  status: "Available for intelligent projects"', delay: 1.05 },
  { prompt: '};', delay: 1.2 },
]

export default function Contact() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timers = contactLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), 400 + line.delay * 800)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#020C08]/80" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          badge="Get In Touch"
          title="Let's"
          highlight="Connect"
          subtitle="Ready to build something intelligent together?"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Terminal window */}
          <div className="glass-card rounded-2xl overflow-hidden border border-emerald-primary/25 shadow-[0_0_60px_rgba(16,185,129,0.12)]">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-emerald-primary/10 bg-[#031711]/80">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-primary/80" />
              <span className="ml-3 text-gray-500 text-xs font-mono">contact@noufal.dev — bash</span>
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-8 font-mono text-sm leading-relaxed min-h-[320px] relative">
              <div className="text-emerald-glow mb-4">
                <span className="text-gray-500">$ </span>
                <span>cat contact.json</span>
              </div>

              <div className="space-y-1.5 pl-2">
                {contactLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={visibleLines > i ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300"
                  >
                    {line.link ? (
                      <a
                        href={line.link}
                        target={line.link.startsWith('http') ? '_blank' : undefined}
                        rel={line.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="hover:text-emerald-glow transition-colors"
                      >
                        {line.prompt}
                      </a>
                    ) : (
                      line.prompt
                    )}
                  </motion.div>
                ))}
                {visibleLines >= contactLines.length && (
                  <span className="text-emerald-glow text-cursor inline-block mt-2" />
                )}
              </div>

              {/* Scan line effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
                <div className="absolute inset-x-0 h-px bg-emerald-glow animate-scan" />
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Let's Build Something{' '}
              <span className="gradient-text">Intelligent Together</span> 🚀
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="mailto:vagirahamed@gmail.com"
                  className="btn-primary flex items-center gap-2 text-sm"
                >
                  <FaEnvelope size={14} />
                  Send Email
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="tel:+916383255226"
                  className="btn-outline flex items-center gap-2 text-sm"
                >
                  <FaPhone size={14} />
                  Call Me
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/Noufalthecoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 text-sm"
                >
                  <FaGithub size={16} />
                  GitHub
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://www.linkedin.com/in/mohammed-noufal-v-972353329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 text-sm"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </motion.a>
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
