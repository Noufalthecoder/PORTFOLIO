import React from 'react'
import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi2'
import { BsBriefcaseFill } from 'react-icons/bs'

const experiences = [
  {
    role: 'Backend AI Engineer Intern',
    company: 'Flyrank.ai',
    period: '2025',
    type: 'AI Engineering',
    color: 'from-emerald-500 to-teal-400',
    icon: '🤖',
    points: [
      'Building scalable AI backend systems',
      'LLM workflows',
      'APIs',
      'Cloud data pipelines',
    ],
  },
  {
    role: 'SDE Intern',
    company: 'L2M Labs',
    period: '2024',
    type: 'Full Stack Development',
    color: 'from-blue-500 to-cyan-400',
    icon: '💻',
    points: [
      'Production software solutions',
      'Scalable features',
      'APIs',
      'SDLC',
      'Deployment',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Alfido Tech Pvt Ltd',
    period: '2024',
    type: 'Machine Learning',
    color: 'from-purple-500 to-violet-400',
    icon: '🧠',
    points: [
      'ML models',
      'Data pipelines',
      'Python',
      'TensorFlow',
      'Scikit-Learn',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Elevate Labs USA',
    period: '2024',
    type: 'Web Development',
    color: 'from-orange-500 to-amber-400',
    icon: '🌐',
    points: [
      'Modern interfaces',
      'Web development projects',
    ],
  },
]

export default function Experience() {
  return (
    <div className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-emerald-primary/4 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-emerald-glow text-xs font-semibold tracking-widest uppercase">Career Journey</span>
          </div>
          <h2 className="section-title text-white">
            Professional{' '}
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-primary/60 via-emerald-primary/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-[#031711] border-2 border-emerald-primary/40 items-center justify-center text-xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  {exp.icon}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass-card rounded-2xl p-6 group cursor-default hover:border-emerald-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg group-hover:text-emerald-glow transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <BsBriefcaseFill className="text-emerald-primary text-xs" />
                        <span className="text-emerald-primary font-semibold text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.period}
                      </span>
                      <span className="text-gray-500 text-xs border border-gray-700 rounded-full px-2 py-0.5">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-emerald-primary/10 mb-4" />

                  {/* Points */}
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.06 }}
                        className="flex items-start gap-3 text-gray-400 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-primary flex-shrink-0 mt-1.5" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
