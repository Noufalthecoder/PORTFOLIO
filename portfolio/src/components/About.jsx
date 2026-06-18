import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'
import profileImg from '../assets/profile/profile.png'
import resumePdf from '../assets/resume/resume.pdf'
import MagneticButton from './ui/MagneticButton'

const specializations = [
  { label: 'AI Systems',              icon: '🤖' },
  { label: 'Full Stack Development',  icon: '🌐' },
  { label: 'LLM Applications',        icon: '🧠' },
  { label: 'Machine Learning',        icon: '📊' },
  { label: 'Cloud Infrastructure',    icon: '☁️' },
  { label: 'Automation Solutions',    icon: '⚙️' },
]

const fadeUp = {
  hidden:   { opacity: 0, y: 40 },
  visible:  (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

// Cinematic zoom-out reveal: starts oversized → snaps to natural size
const photoZoomOut = {
  hidden: {
    opacity: 0,
    scale: 1.38,
    filter: 'blur(18px) brightness(0.6)',
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px) brightness(1)',
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],   // custom spring-like easing
      opacity: { duration: 0.5 },
    },
  },
}

// The wrapper card also gets a subtle scale-in with spring
const cardReveal = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 18,
      mass: 0.9,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Mohammed_Noufal_V_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#020C08]" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#10B981]/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#34D399]/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-5 py-2 mb-6">
            <HiSparkles className="text-[#34D399] text-sm" />
            <span className="text-[#34D399] text-[11px] font-bold tracking-[0.2em] uppercase">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Mind Behind the{' '}
            <span className="gradient-text">Machine</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={cardReveal}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-20px] rounded-3xl border border-dashed border-[#10B981]/20 pointer-events-none"
              />
              {/* Glow halo — pulses brighter after reveal */}
              <div className="absolute inset-[-10px] rounded-3xl bg-gradient-to-br from-[#10B981]/15 via-transparent to-[#34D399]/10 animate-glow-pulse pointer-events-none" />

              {/* Profile image — zoom-out cinematic reveal */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={photoZoomOut}
                className="relative overflow-hidden rounded-3xl"
                style={{
                  width: '340px',
                  height: '430px',
                  border: '2px solid rgba(16,185,129,0.50)',
                  boxShadow:
                    '0 0 0 1px rgba(16,185,129,0.10), 0 0 70px rgba(16,185,129,0.30), 0 0 140px rgba(16,185,129,0.12), 0 40px 90px rgba(0,0,0,0.6)',
                }}
              >
                {/* Floating bob sits INSIDE so it doesn't clip the zoom */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  <img
                    src={profileImg}
                    alt="Mohammed Noufal V"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020C08] to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse" />
                    <span className="text-[#34D399] text-xs font-mono font-semibold tracking-wider">Available for Work</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
                animate={{ y: [0, -8, 0] }}
                className="absolute -bottom-8 -right-8"
              >
                <div
                  className="rounded-2xl px-5 py-3 border border-[#10B981]/25"
                  style={{
                    background: 'rgba(3,23,17,0.85)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 0 25px rgba(16,185,129,0.12)',
                  }}
                >
                  <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Experience</div>
                  <div className="text-xl font-black gradient-text mt-0.5">2+ Years</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 120 }}
                animate={{ y: [0, -8, 0] }}
                className="absolute -top-8 -left-8"
              >
                <div
                  className="rounded-2xl px-5 py-3 border border-[#10B981]/25"
                  style={{
                    background: 'rgba(3,23,17,0.85)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 0 25px rgba(16,185,129,0.12)',
                  }}
                >
                  <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Projects</div>
                  <div className="text-xl font-black gradient-text mt-0.5">15+</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="space-y-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.2}
            >
              <h3 className="text-4xl lg:text-[2.6rem] font-extrabold text-white mb-2 leading-tight tracking-tight">
                Mohammed Noufal V
              </h3>
              <p className="text-[#10B981] font-bold text-lg font-mono tracking-widest uppercase text-sm">
                AI Engineer & Full Stack Developer
              </p>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={textVariants}
              className="text-gray-300 text-base lg:text-[1.05rem] leading-[1.85] max-w-[520px] flex flex-wrap gap-[0.25em]"
            >
              {[
                { t: 'Building', highlight: false },
                { t: 'intelligent, scalable,', highlight: true },
                { t: 'and', highlight: false },
                { t: 'impactful', highlight: true },
                ...('digital solutions using Artificial Intelligence, Cloud, and Modern Software Engineering. Passionate about turning complex problems into elegant AI-powered products that make a real difference.'.split(' ').map(w => ({ t: w, highlight: false })))
              ].map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className={word.highlight ? 'text-[#34D399] font-semibold inline-block' : 'inline-block'}
                >
                  {word.t}
                </motion.span>
              ))}
            </motion.p>

            {/* Specializations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.4}
            >
              <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Specialized In</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {specializations.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    whileHover={{ scale: 1.03, borderColor: 'rgba(16,185,129,0.45)' }}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-[#10B981]/12 cursor-default group transition-all duration-300"
                    style={{ background: 'rgba(3,23,17,0.55)', backdropFilter: 'blur(12px)' }}
                  >
                    <span className="text-[15px]">{spec.icon}</span>
                    <span className="text-gray-400 text-xs font-medium group-hover:text-[#34D399] transition-colors leading-tight">
                      {spec.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social / Resume buttons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.5}
              className="flex flex-wrap gap-3 pt-2"
            >
              <MagneticButton>
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://github.com/Noufalthecoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-[#10B981]/30 text-[#10B981] text-sm font-semibold hover:bg-[#10B981]/8 hover:border-[#10B981]/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
                >
                  <FaGithub size={16} />
                  GitHub
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://www.linkedin.com/in/mohammed-noufal-v-972353329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-[#10B981]/30 text-[#10B981] text-sm font-semibold hover:bg-[#10B981]/8 hover:border-[#10B981]/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={downloadResume}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-sm font-semibold shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.55)] transition-all duration-300"
                >
                  <FaDownload size={14} />
                  Download Resume
                </motion.button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
