import React from 'react'
import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi2'

export default function SectionHeader({ badge, title, highlight, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {badge && (
        <div className="inline-flex items-center gap-2 bg-emerald-primary/10 border border-emerald-primary/20 rounded-full px-4 py-1.5 mb-5">
          <HiSparkles className="text-emerald-glow text-sm" />
          <span className="text-emerald-glow text-xs font-semibold tracking-widest uppercase">{badge}</span>
        </div>
      )}
      <h2 className="section-title text-white">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">{subtitle}</p>}
    </motion.div>
  )
}
