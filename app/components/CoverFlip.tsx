'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type CoverState = 'front' | 'back'

interface CoverFlipProps {
  frontCover: string
  backCover: string
  title: string
}

export default function CoverFlip({ frontCover, backCover, title }: CoverFlipProps) {
  const [coverState, setCoverState] = useState<CoverState>('front')

  const handleClick = () => {
    setCoverState(coverState === 'front' ? 'back' : 'front')
  }

  return (
    <div className="relative w-full aspect-square cursor-pointer" onClick={handleClick}>
      <AnimatePresence mode="wait">
        {coverState === 'front' && (
          <motion.div
            key="front"
            initial={{ rotateY: -15 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -90 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src={frontCover}
              alt={`${title} - Front Cover`}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            {/* Right arrow on front cover */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
              ›
            </div>
          </motion.div>
        )}

        {coverState === 'back' && (
          <motion.div
            key="back"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src={backCover}
              alt={`${title} - Back Cover`}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            {/* Left arrow on back cover */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
              ‹
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
