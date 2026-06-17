import React from 'react'
import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import SectionHeader from './ui/SectionHeader'

function SkillCard({ skill, index, groupIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: groupIndex * 0.08 + index * 0.04 }}
      whileHover={{
        y: -6,
        boxShadow: '0 0 35px rgba(16, 185, 129, 0.35), 0 0 70px rgba(52, 211, 153, 0.12)',
        borderColor: 'rgba(16, 185, 129, 0.5)',
      }}
      className="glass-card rounded-xl p-6 flex flex-col items-center gap-4 cursor-default group transition-all duration-300 border border-emerald-primary/10"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-emerald-primary/10 transition-colors duration-300">
        <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <span
          className="hidden w-10 h-10 items-center justify-center text-emerald-glow text-sm font-bold"
          aria-hidden
        >
          {skill.name.slice(0, 2)}
        </span>
      </div>
      <span className="text-gray-300 text-[13px] font-semibold text-center leading-tight group-hover:text-emerald-glow transition-colors">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <div className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#031711]/30" />
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-emerald-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          badge="Tech Stack"
          title="Skills &"
          highlight="Technologies"
          subtitle="Official technology logos — the tools I use to build intelligent systems."
        />

        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-primary/20 to-transparent" />
                <span className="text-emerald-glow text-xs font-semibold tracking-widest uppercase px-3">
                  {group.category}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-primary/20 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5">
                {group.skills.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} index={si} groupIndex={gi} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
