'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type BookState = 'closed-front' | 'open-page-1-2' | 'open-page-3-4' | 'closed-back'

export default function FlipBook() {
  const [bookState, setBookState] = useState<BookState>('closed-front')

  const handleBookClick = (side?: 'left' | 'right') => {
    if (bookState === 'closed-front') {
      // Open to first pages
      setBookState('open-page-1-2')
    } else if (bookState === 'open-page-1-2') {
      if (side === 'right') {
        // Flip to next pages
        setBookState('open-page-3-4')
      } else if (side === 'left') {
        // Close to front cover
        setBookState('closed-front')
      }
    } else if (bookState === 'open-page-3-4') {
      if (side === 'right') {
        // Close to back cover
        setBookState('closed-back')
      } else if (side === 'left') {
        // Flip back to first pages
        setBookState('open-page-1-2')
      }
    } else if (bookState === 'closed-back') {
      // Open back to pages 3-4
      setBookState('open-page-3-4')
    }
  }

  const isClosed = bookState === 'closed-front' || bookState === 'closed-back'

  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      <AnimatePresence mode="wait">
        {bookState === 'closed-front' && (
          <motion.div
            key="front-cover"
            initial={{ rotateY: -15 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -90 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 cursor-pointer"
            onClick={() => handleBookClick()}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="/images/books/book-cover-front.png"
              alt="Arlo's Big Yawn - Front Cover"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        )}

        {bookState === 'open-page-1-2' && (
          <motion.div
            key="pages-1-2"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex gap-0"
          >
            {/* Left page - clickable with arrow */}
            <div
              className="relative w-1/2 cursor-pointer hover:opacity-90 transition-opacity group"
              onClick={() => handleBookClick('left')}
            >
              <img
                src="/images/books/book-page-01.png"
                alt="Page 1"
                className="w-full h-full object-cover"
              />
              {/* Left arrow */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-red-500 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                ←
              </div>
            </div>
            {/* Right page - clickable with arrow */}
            <div
              className="relative w-1/2 cursor-pointer hover:opacity-90 transition-opacity group"
              onClick={() => handleBookClick('right')}
            >
              <img
                src="/images/books/book-page-02.png"
                alt="Page 2"
                className="w-full h-full object-cover"
              />
              {/* Right arrow */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </motion.div>
        )}

        {bookState === 'open-page-3-4' && (
          <motion.div
            key="pages-3-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex gap-0"
          >
            {/* Left page - clickable with arrow */}
            <div
              className="relative w-1/2 cursor-pointer hover:opacity-90 transition-opacity group"
              onClick={() => handleBookClick('left')}
            >
              <img
                src="/images/books/book-page-03.png"
                alt="Page 3"
                className="w-full h-full object-cover"
              />
              {/* Left arrow */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-red-500 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                ←
              </div>
            </div>
            {/* Right page - clickable with arrow */}
            <div
              className="relative w-1/2 cursor-pointer hover:opacity-90 transition-opacity group"
              onClick={() => handleBookClick('right')}
            >
              <img
                src="/images/books/book-page-04.png"
                alt="Page 4"
                className="w-full h-full object-cover"
              />
              {/* Right arrow */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </motion.div>
        )}

        {bookState === 'closed-back' && (
          <motion.div
            key="back-cover"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 cursor-pointer"
            onClick={() => handleBookClick()}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="/images/books/book-cover-back.png"
              alt="Arlo's Big Yawn - Back Cover"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click hint - only show when closed */}
      {isClosed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold pointer-events-none"
        >
          Click to open! 📖
        </motion.div>
      )}
    </div>
  )
}
