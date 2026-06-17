import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { FaWhatsapp, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { services } from '../data/services'
import SectionHeader from './ui/SectionHeader'

export default function Services() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#031711]/40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          badge="What I Build"
          title="Services &"
          highlight="Capabilities"
          subtitle="End-to-end AI agency solutions — from intelligent agents to production-grade platforms."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(svc)}
              className="glass-card rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:border-emerald-primary/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] relative overflow-hidden min-h-[160px] flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-white font-bold text-base leading-tight group-hover:text-emerald-glow transition-colors">
                  {svc.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-primary text-xs font-semibold mt-4 group-hover:gap-3 transition-all duration-300">
                <span>View Details</span>
                <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/916383255226"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <FaWhatsapp size={16} />
              Build With Me 🚀
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="mailto:vagirahamed@gmail.com"
              className="btn-outline flex items-center gap-2 text-sm"
            >
              <FaEnvelope size={14} />
              Email Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
            style={{ background: 'rgba(2, 12, 8, 0.88)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="glass-card rounded-2xl p-8 max-w-md w-full relative border border-emerald-primary/30 shadow-[0_0_60px_rgba(16,185,129,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-lg p-1.5"
                aria-label="Close modal"
              >
                <HiX size={18} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{selected.icon}</div>
                <h3 className="text-white text-xl font-bold leading-tight">{selected.title}</h3>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-emerald-primary/30 to-transparent mb-6" />

              <ul className="space-y-3 mb-8">
                {selected.details.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/916383255226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm"
                >
                  <FaWhatsapp size={16} />
                  Build With Me 🚀
                </a>
                <a
                  href="mailto:vagirahamed@gmail.com"
                  className="btn-outline flex-1 flex items-center justify-center gap-2 text-sm"
                >
                  <FaEnvelope size={14} />
                  Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
