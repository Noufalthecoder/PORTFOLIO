import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaAward, FaAws, FaGoogle } from 'react-icons/fa'
import { SiCisco } from 'react-icons/si'
import SectionHeader from './ui/SectionHeader'

const certifications = [
  {
    name: 'Google Cloud Cybersecurity',
    issuer: 'Google',
    icon: <FaGoogle className="text-[#4285F4]" />,
    color: 'from-blue-500/20 to-indigo-500/10',
    border: 'border-blue-500/30',
    category: 'Cloud Security',
  },
  {
    name: 'Internet of Things - NPTEL Elite',
    issuer: 'NPTEL',
    icon: <FaCertificate className="text-emerald-primary" />,
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    category: 'IoT',
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    icon: <FaAws className="text-[#FF9900]" />,
    color: 'from-orange-500/20 to-yellow-500/10',
    border: 'border-orange-500/30',
    category: 'Cloud',
  },
  {
    name: 'Data Analytics with Python - NPTEL',
    issuer: 'NPTEL',
    icon: <FaCertificate className="text-blue-400" />,
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-400/30',
    category: 'Data Science',
  },
  {
    name: 'CyberSecurity Essentials',
    issuer: 'Cisco',
    icon: <SiCisco className="text-[#1BA0D7]" />,
    color: 'from-sky-500/20 to-blue-500/10',
    border: 'border-sky-500/30',
    category: 'Cybersecurity',
  },
  {
    name: 'CCNA Introduction to Networks',
    issuer: 'Cisco',
    icon: <SiCisco className="text-[#1BA0D7]" />,
    color: 'from-cyan-500/20 to-teal-500/10',
    border: 'border-cyan-500/30',
    category: 'Networking',
  },
  {
    name: 'GenAI Data Analytics',
    issuer: 'Tata Forage',
    icon: <FaAward className="text-purple-400" />,
    color: 'from-purple-500/20 to-violet-500/10',
    border: 'border-purple-500/30',
    category: 'Generative AI',
  },
  {
    name: 'Accenture Software Engineering Simulation',
    issuer: 'Accenture',
    icon: <FaAward className="text-pink-400" />,
    color: 'from-pink-500/20 to-rose-500/10',
    border: 'border-pink-500/30',
    category: 'Software Engineering',
  },
]

export default function Certifications() {
  return (
    <div className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#031711]/40" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          badge="Credentials"
          title="Certifications &"
          highlight="Credentials"
          subtitle="Industry-recognized qualifications"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card rounded-2xl p-5 cursor-default group transition-all duration-300 border ${cert.border} hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 bg-white/5 border border-white/8 rounded-full px-2 py-0.5">
                    {cert.category}
                  </span>
                </div>
                <h3 className="text-white text-sm font-bold leading-snug mb-2 group-hover:text-emerald-glow transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-500 text-xs font-medium">{cert.issuer}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-primary" />
                  <span className="text-emerald-primary text-[10px] font-semibold">Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
