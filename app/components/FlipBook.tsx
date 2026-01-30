'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type BookState = 'closed-front' | 'open-page-1-2' | 'open-page-3-4' | 'closed-back'

export default function FlipBook() {
  const [bookState, setBookState] = useState<BookState>('closed-front')
  const [mobilePageIndex, setMobilePageIndex] = useState(0) // 0=page1, 1=page2, 2=page3, 3=page4

  const handleBookClick = (side?: 'left' | 'right', isMobile = false) => {
    if (isMobile) {
      // Mobile: cycle through individual pages
      if (bookState === 'closed-front') {
        setBookState('open-page-1-2')
        setMobilePageIndex(0) // Show page 1
      } else if (bookState === 'open-page-1-2') {
        if (mobilePageIndex === 0) {
          setMobilePageIndex(1) // Show page 2
        } else {
          setBookState('open-page-3-4')
          setMobilePageIndex(2) // Show page 3
        }
      } else if (bookState === 'open-page-3-4') {
        if (mobilePageIndex === 2) {
          setMobilePageIndex(3) // Show page 4
        } else {
          setBookState('closed-back')
        }
      } else if (bookState === 'closed-back') {
        setBookState('open-page-3-4')
        setMobilePageIndex(3)
      }
      return
    }
    
    // Desktop: existing logic
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
    <div className="relative w-full aspect-square max-w-sm mx-auto z-10">
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
            {/* Right arrow on front cover */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
              ›
            </div>
          </motion.div>
        )}

        {bookState === 'open-page-1-2' && (
          <>
            {/* Desktop: Two pages side by side */}
            <motion.div
              key="pages-1-2-desktop"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, width: '200%' }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden md:flex absolute inset-0 gap-0 bg-white"
              style={{ width: '200%', left: '0' }}
            >
              <div
                className="relative w-1/2 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => handleBookClick('left')}
              >
                <img
                  src="/images/books/book-page-01.png"
                  alt="Page 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
                  ‹
                </div>
              </div>
              <div
                className="relative w-1/2 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => handleBookClick('right')}
              >
                <img
                  src="/images/books/book-page-02.png"
                  alt="Page 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
                  ›
                </div>
              </div>
            </motion.div>
            
            {/* Mobile: One page at a time */}
            <motion.div
              key={`page-${mobilePageIndex}-mobile`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden absolute inset-0 bg-white"
            >
              <div className="relative w-full h-full cursor-pointer" onClick={() => handleBookClick('right', true)}>
                <img
                  src={mobilePageIndex === 0 ? "/images/books/book-page-01.png" : "/images/books/book-page-02.png"}
                  alt={`Page ${mobilePageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                {/* Both arrows on mobile */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
                  ‹
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
                  ›
                </div>
              </div>
            </motion.div>
          </>
        )}

        {bookState === 'open-page-3-4' && (
          <>
            {/* Desktop: Two pages side by side */}
            <motion.div
              key="pages-3-4-desktop"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, width: '200%' }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden md:flex absolute inset-0 gap-0 bg-white"
              style={{ width: '200%', left: '0' }}
            >
              <div
                className="relative w-1/2 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => handleBookClick('left')}
              >
                <img
                  src="/images/books/book-page-03.png"
                  alt="Page 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
                  ‹
                </div>
              </div>
              <div
                className="relative w-1/2 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => handleBookClick('right')}
              >
                <img
                  src="/images/books/book-page-04.png"
                  alt="Page 4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
                  ›
                </div>
              </div>
            </motion.div>
            
            {/* Mobile: One page at a time */}
            <motion.div
              key={`page-${mobilePageIndex}-mobile-34`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden absolute inset-0 bg-white"
            >
              <div className="relative w-full h-full cursor-pointer" onClick={() => handleBookClick('right', true)}>
                <img
                  src={mobilePageIndex === 2 ? "/images/books/book-page-03.png" : "/images/books/book-page-04.png"}
                  alt={`Page ${mobilePageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                {/* Both arrows on mobile */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
                  ‹
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 text-6xl font-light pointer-events-none">
                  ›
                </div>
              </div>
            </motion.div>
          </>
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
