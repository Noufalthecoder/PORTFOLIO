import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import Tilt from 'react-parallax-tilt'

const beyondImages = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

export default function BeyondCode() {
  const images = useMemo(() => Object.values(beyondImages), [])

  return (
    <div className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#031711]/50" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          badge="Innovation Journey"
          title="Beyond Code"
          highlight="🚀"
          subtitle="Pitching, hackathons, presentations, and the moments that shaped my builder journey."
        />

        {images.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                className="break-inside-avoid group"
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#10B981"
                  glarePosition="all"
                  scale={1.03}
                  transitionSpeed={2500}
                  className="relative rounded-2xl overflow-hidden border border-emerald-primary/15 shadow-[0_0_30px_rgba(16,185,129,0.08)] cursor-default"
                >
                  <motion.img
                    src={src}
                    alt={`Beyond code moment ${i + 1}`}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                    loading="lazy"
                    data-cursor="view"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020C08]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-emerald-glow text-xs font-semibold tracking-widest uppercase">
                      Innovation Moment
                    </span>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12 text-center border border-emerald-primary/20"
          >
            <p className="text-gray-400 text-sm">
              Add your photos to <code className="text-emerald-glow">src/assets/beyond-code/</code> to populate this gallery.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
