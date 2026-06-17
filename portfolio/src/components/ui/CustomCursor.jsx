import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [cursorText, setCursorText] = useState('')

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setTimeout(() => setTrail({ x: e.clientX, y: e.clientY }), 80)
    }
    const down = () => setClicked(true)
    const up = () => setClicked(false)

    const checkHover = (e) => {
      const el = e.target
      
      const viewEl = el.closest('[data-cursor="view"]')
      if (viewEl) {
        setCursorText('View')
        setHovered(true)
        return
      }

      setCursorText('')
      setHovered(
        el.tagName === 'BUTTON' ||
        el.tagName === 'A' ||
        el.closest('button') ||
        el.closest('a') ||
        el.getAttribute('role') === 'button'
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    window.addEventListener('mouseover', checkHover)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('mouseover', checkHover)
    }
  }, [])

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998] flex items-center justify-center font-bold text-white text-[10px] tracking-widest uppercase overflow-hidden"
        animate={{ x: trail.x - 16, y: trail.y - 16 }}
        transition={{ type: 'spring', stiffness: 150, damping: 25 }}
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: cursorText ? 'none' : '1px solid rgba(16,185,129,0.4)',
          background: cursorText ? '#10B981' : 'transparent',
          transform: `scale(${cursorText ? 2.5 : hovered ? 1.8 : 1})`,
        }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      {/* Dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: 'spring', stiffness: 800, damping: 40 }}
        style={{
          width: clicked ? 6 : 8,
          height: clicked ? 6 : 8,
          borderRadius: '50%',
          background: '#34D399',
          boxShadow: '0 0 8px rgba(52,211,153,0.8)',
          opacity: cursorText ? 0 : 1,
        }}
      />
    </>
  )
}
