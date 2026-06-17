import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import SectionHeader from './ui/SectionHeader'
import Tilt from 'react-parallax-tilt'

import sentinelVision from '../assets/projects/sentinelvision.png'
import layoutos from '../assets/projects/layoutos.png'
import aquapercent from '../assets/projects/aquapercent.png'
import sentinelx from '../assets/projects/sentinelx.png'

const projects = [
  {
    title: 'SentinelVision AI',
    subtitle: 'Real-Time Restricted Area Surveillance System',
    description:
      'Computer vision surveillance platform using YOLO and OpenCV.',
    image: sentinelVision,
    tech: ['Python', 'YOLO', 'OpenCV', 'Computer Vision'],
    features: ['Intrusion detection', 'Live video analytics', 'Automated security alerts'],
    github: 'https://github.com/Noufalthecoder/SentinelVision-AI',
    badge: 'AI / CV',
  },
  {
    title: 'LAYOUT.OS',
    subtitle: 'Enterprise Workflow OS for Analog IC Layout Management',
    description:
      'SaaS platform for analog IC layout workflow management.',
    image: layoutos,
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['Tracking', 'Approvals', 'Analytics', 'Engineer management'],
    github: 'https://github.com/Noufalthecoder/Impact-Minds_EPIC',
    badge: 'SaaS',
  },
  {
    title: 'AquaPercent AI',
    subtitle: 'Water Intelligence Platform',
    description: 'AI-powered water management with predictive intelligence.',
    image: aquapercent,
    tech: ['Python', 'ML', 'IoT', 'TensorFlow'],
    features: ['AI prediction', 'Leak detection', 'IoT monitoring', 'ML dashboards'],
    github: 'https://github.com/Noufalthecoder/AquaPercent-AI',
    badge: 'AI / IoT',
  },
  {
    title: 'SentinelX',
    subtitle: 'Real-Time Phishing Detection Platform',
    description: 'Comprehensive phishing detection across multiple attack vectors.',
    image: sentinelx,
    tech: ['Python', 'Node.js', 'ML', 'Cybersecurity'],
    features: ['Email scanning', 'SMS scanning', 'URL analysis', 'QR detection', 'Browser security'],
    github: 'https://github.com/Rohithofficial08/SentinelXbackend',
    badge: 'Security',
  },
]

export default function Projects() {
  return (
    <div className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#020C08]/50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          badge="Featured Work"
          title="Projects &"
          highlight="Products"
          subtitle="Real-world AI and full stack solutions built for impact."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#10B981"
                glarePosition="all"
                scale={1.02}
                transitionSpeed={2500}
                className="glass-card rounded-2xl overflow-hidden group transition-all duration-400 hover:border-emerald-primary/30 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] h-full flex flex-col"
              >
              <div className="relative overflow-hidden h-52" data-cursor="view">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020C08] via-[#020C08]/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-primary/20 border border-emerald-primary/40 text-emerald-glow text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {proj.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white text-xl font-bold group-hover:text-emerald-glow transition-colors">
                  {proj.title}
                </h3>
                <p className="text-emerald-primary text-xs font-semibold mt-1 tracking-wide">{proj.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mt-4 mb-4">{proj.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-medium text-gray-400 bg-white/5 border border-white/8 rounded-full px-2.5 py-1"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold text-emerald-glow bg-emerald-primary/10 border border-emerald-primary/20 rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-emerald-glow hover:border-emerald-primary/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex-shrink-0 ml-3"
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    <FaGithub size={18} />
                  </motion.a>
                </div>
              </div>
            </Tilt>
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
