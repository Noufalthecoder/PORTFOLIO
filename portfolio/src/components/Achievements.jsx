import React from 'react'
import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi2'
import { FaTrophy, FaMedal } from 'react-icons/fa'
import { GiTrophy, GiMedal } from 'react-icons/gi'



const achievements = [
  {
    title: 'Winner',
    event: 'Agent.AI Challenge',
    organizer: 'HackerEarth',
    rank: '🥇 1st Place',
    color: 'from-yellow-500/25 to-amber-500/10',
    border: 'border-yellow-500/40',
    glow: '0 0 30px rgba(234,179,8,0.2)',
    icon: <GiTrophy className="text-yellow-400" />,
    badge: 'WINNER',
    badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
  },
  {
    title: 'Winner',
    event: 'OpsFusion',
    organizer: 'IFMR Krea University',
    rank: '🥇 1st Place',
    color: 'from-yellow-500/25 to-orange-500/10',
    border: 'border-yellow-500/40',
    glow: '0 0 30px rgba(234,179,8,0.2)',
    icon: <GiTrophy className="text-yellow-400" />,
    badge: 'WINNER',
    badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
  },
  {
    title: 'Runner Up',
    event: 'Synapse Sentinel Hackathon',
    organizer: 'CIT',
    rank: '🥈 2nd Place',
    color: 'from-gray-400/20 to-slate-500/10',
    border: 'border-gray-400/30',
    glow: '0 0 30px rgba(156,163,175,0.15)',
    icon: <GiMedal className="text-gray-300" />,
    badge: 'RUNNER UP',
    badgeColor: 'bg-gray-500/20 text-gray-300 border-gray-500/40',
  },
  {
    title: 'National Finalist',
    event: 'World Computer Hacker League',
    organizer: 'ICP HUBS',
    rank: '🏅 National Finalist',
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    glow: '0 0 30px rgba(16,185,129,0.2)',
    icon: <FaTrophy className="text-emerald-400" />,
    badge: 'NATIONAL',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  },
  {
    title: 'National Semi Finalist',
    event: 'ET AI Hackathon 2026',
    organizer: 'Economic Times',
    rank: '🏅 National Semi Finalist',
    color: 'from-blue-500/20 to-indigo-500/10',
    border: 'border-blue-500/30',
    glow: '0 0 30px rgba(59,130,246,0.15)',
    icon: <FaMedal className="text-blue-400" />,
    badge: 'NATIONAL',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  },
]

export default function Achievements() {
  return (
    <div className="pt-24 pb-4 px-6 relative overflow-hidden" id="achievements">
      <div className="absolute inset-0 bg-[#020C08]/60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-500/3 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-emerald-glow text-xs font-semibold tracking-widest uppercase">Recognition</span>
          </div>
          <h2 className="section-title text-white">
            Hackathon{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3">Competing and winning at the national level</p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.event}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-card rounded-2xl p-6 cursor-default group transition-all duration-300 border ${ach.border} relative overflow-hidden`}
              style={{ '--glow': ach.glow }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${ach.color} opacity-50 rounded-2xl`} />
              <div className="relative z-10">
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="text-3xl"
                  >
                    {ach.icon}
                  </motion.div>
                  <span className={`text-[10px] font-bold border rounded-full px-3 py-1 tracking-widest ${ach.badgeColor}`}>
                    {ach.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-3">
                  <div className="text-xs font-semibold text-gray-400 mb-1">{ach.rank}</div>
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-emerald-glow transition-colors">
                    {ach.event}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 font-medium">{ach.organizer}</p>
                </div>

                <div className="h-px bg-white/5 mt-4 mb-3" />
                <div className="text-emerald-primary text-xs font-semibold">{ach.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
