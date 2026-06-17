import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi2'
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si'
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa'

const profiles = [
  {
    platform: 'LeetCode',
    icon: <SiLeetcode />,
    count: 600,
    suffix: '+',
    label: 'Problems Solved',
    color: '#FFA116',
    border: 'border-[#FFA116]/30',
    bg: 'from-[#FFA116]/15 to-[#FFA116]/5',
    link: 'https://leetcode.com/u/noufalthedev',
    desc: 'Algorithms, Data Structures, Dynamic Programming',
  },
  {
    platform: 'CodeChef',
    icon: <SiCodechef />,
    count: 300,
    suffix: '+',
    label: 'Problems Solved',
    color: '#5B4638',
    border: 'border-amber-700/30',
    bg: 'from-amber-900/20 to-amber-800/5',
    link: 'https://www.codechef.com/users/noufalthecoder',
    desc: 'Competitive Programming & Contests',
  },
  {
    platform: 'SkillRack',
    icon: <FaCode />,
    count: 150,
    suffix: '+',
    label: 'Challenges Completed',
    color: '#34D399',
    border: 'border-emerald-500/30',
    bg: 'from-emerald-500/15 to-emerald-500/5',
    link: 'https://www.skillrack.com/faces/resume.xhtml?id=490941&key=0bfce6b1035252b0731e05a2dc12fd78e9ed8f50',
    desc: 'Practice Problems & Skill Assessment',
  },
  {
    platform: 'GeeksForGeeks',
    icon: <SiGeeksforgeeks />,
    count: null,
    suffix: '',
    label: 'Active Contributor',
    color: '#2F8D46',
    border: 'border-green-600/30',
    bg: 'from-green-600/15 to-green-600/5',
    link: 'https://www.geeksforgeeks.org/profile/mohammednoueudb?tab=activity',
    desc: 'Articles, DSA & CS Fundamentals',
  },
]

function Counter({ target, suffix, color, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active || !target) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, target])

  if (!target) return <span style={{ color }}>Active</span>

  return (
    <span style={{ color }}>
      {count}
      {suffix}
    </span>
  )
}

export default function CodingProfiles() {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[#031711]/30" />
      <div className="absolute left-1/4 top-1/2 w-80 h-80 bg-emerald-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-primary/10 border border-emerald-primary/20 rounded-full px-4 py-1.5 mb-5">
            <HiSparkles className="text-emerald-glow text-sm" />
            <span className="text-emerald-glow text-xs font-semibold tracking-widest uppercase">Coding Activity</span>
          </div>
          <h2 className="section-title text-white">
            Coding{' '}
            <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3">Consistent problem solving across platforms</p>
        </motion.div>

        {/* Profile Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass-card rounded-2xl p-6 cursor-default group transition-all duration-300 border ${profile.border} hover:shadow-lg relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.bg} opacity-80 rounded-2xl`} />
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div
                  className="text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ color: profile.color }}
                >
                  {profile.icon}
                </div>

                {/* Count */}
                <div className="text-3xl font-black mb-1 font-mono">
                  <Counter
                    target={profile.count}
                    suffix={profile.suffix}
                    color={profile.color}
                    active={inView}
                  />
                </div>
                <div className="text-gray-400 text-xs font-semibold mb-3">{profile.label}</div>

                {/* Platform */}
                <h3 className="text-white font-bold text-base mb-2">{profile.platform}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{profile.desc}</p>

                {/* Link */}
                {profile.link ? (
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                    style={{ color: profile.color }}
                  >
                    View Profile <FaExternalLinkAlt size={10} />
                  </a>
                ) : (
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-primary animate-pulse" />
                    <span className="text-emerald-primary text-xs font-semibold">Active</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total counter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-6 mt-8 border border-emerald-primary/20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-primary/40" />
            <span className="text-emerald-glow text-xs font-semibold tracking-widest uppercase">Combined</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-primary/40" />
          </div>
          <div className="text-4xl font-black gradient-text font-mono mb-1">1050+</div>
          <p className="text-gray-400 text-sm">Coding challenges solved across all platforms</p>
        </motion.div>
      </div>
    </div>
  )
}
