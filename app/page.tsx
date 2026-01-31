'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import FlipBook from './components/FlipBook'
import CoverFlip from './components/CoverFlip'
import { useRef, useState, useEffect } from 'react'

export default function Home() {
  const aboutSectionRef = useRef(null)
  const isAboutInView = useInView(aboutSectionRef, { amount: 0.5, once: true })

  return (
    <main className="min-h-screen bg-white">
      {/* New Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16 px-4 md:pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Big colorful logo - appears FIRST on mobile */}
            <div className="flex justify-center order-1 md:order-1 mb-0 md:mb-0">
              <img
                src="/images/logo.png"
                alt="Arlo's Big Books"
                className="w-full drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                style={{ maxWidth: '100%' }}
              />
            </div>
            
            {/* Welcome text - appears SECOND on mobile */}
            <div className="text-center md:text-left space-y-3 order-2 md:order-2">
              <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold text-lg mb-2">
                Perfect for Ages 3–6
              </div>
              <h1 className="text-4xl font-bold font-[var(--font-fredoka)] leading-tight">
                Welcome to <span className="text-red-500">Arlo's</span>{" "}
                <span className="text-blue-500">BIG</span> world
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-semibold">
                Funny, heartwarming picture books where little problems turn into{" "}
                <span className="text-red-500">BIG</span> adventures.
              </p>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Join Arlo in a world where yawns grow huge, ideas get bigger, and ordinary days become extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Mouse Driving Across */}
      <div className="relative w-full overflow-hidden h-28 -mt-20 md:-mt-28">
        <motion.div
          initial={{ x: '-150px' }}
          animate={{ x: 'calc(100vw + 150px)' }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 2
          }}
          className="absolute top-2"
        >
          <motion.img
            src="/images/characters/MouseInCar.png"
            alt="Mouse driving"
            className="w-32 h-32 object-contain"
            animate={{
              y: [0, -2, 0, -2, 0]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </div>

      {/* Featured Book */}
      <section className="pt-0 pb-12 px-4 bg-white md:pt-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-[var(--font-fredoka)] text-gray-800">
            Start with Arlo's <span className="text-red-500">Big Yawn!</span>
          </h2>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <FlipBook />
              
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
                  Arlo's Big Yawn
                </h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  A bedtime delay turns into one enormous yawn — and suddenly, the whole world is getting pulled in!
                </p>
                
                <a 
                  href="https://www.amazon.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-4"
                  style={{ boxShadow: '0 6px 0px #CC7700' }}
                >
                  Available Now on Amazon
                </a>
                
                <p className="text-gray-600 text-sm mt-4">
                  For ages 3–6 | Perfect for reading together at bedtime, in the classroom, or anytime BIG laughs are needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book - Full width yellow background */}
      <section ref={aboutSectionRef} className="py-12 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-8 relative pt-32 md:pt-36">
            {/* Arlo Bed Yawn character - at top of yellow box, pushed up to overlap */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <img
                src="/images/characters/ArloBedYawn.png"
                alt="Arlo Yawning"
                className="w-56 md:w-64 h-auto"
              />
            </div>
            
            {/* Animated Arlo Yawn Stretch - bottom right corner of yellow box */}
            <div className="absolute right-4 md:right-8 bottom-4 md:bottom-8 z-20">
              <img
                src="/images/characters/ArloYawnStretch.gif"
                alt="Arlo"
                className="w-40 md:w-48 h-auto"
                style={{ display: isAboutInView ? 'block' : 'none' }}
              />
            </div>
            <div className="pr-0 pb-52 md:pb-0 md:pr-56">
              <h3 className="text-3xl font-bold mb-6">
              <span className="text-red-500">A</span>
              <span className="text-blue-500">R</span>
              <span className="text-yellow-500">L</span>
              <span className="text-green-500">O</span>
              <span className="text-orange-500">'</span>
              <span className="text-purple-500">S</span>
              <span className="text-gray-800"> Big </span>
              <span className="text-red-500">Y</span>
              <span className="text-blue-500">A</span>
              <span className="text-yellow-500">W</span>
              <span className="text-green-500">N</span>
              <span className="text-orange-500">!</span>
            </h3>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
              Sometimes big things start with a tiny moment.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Little Arlo won't go to sleep when he's told — and one huge yawn launches him into a series of chaotic surprises. Full of rhythm, imagination, and heart, this story explores:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <span className="text-yellow-500 text-2xl mr-3">✓</span>
                <span className="text-gray-800 font-medium">Bedtime routines</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 text-2xl mr-3">✓</span>
                <span className="text-gray-800 font-medium">The silliness of childhood</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 text-2xl mr-3">✓</span>
                <span className="text-gray-800 font-medium">The power of imagination</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 text-2xl mr-3">✓</span>
                <span className="text-gray-800 font-medium">Parent–child reading fun</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With lively rhyming text and vibrant illustrations, <em>Arlo's Big Yawn</em> is a book kids ask to hear again… and again.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* About the Series */}
      <section id="about" className="py-20 px-4 bg-blue-50 relative overflow-hidden">
        {/* Animated Flapping Cockerel - 0-5s visible, 5.5-20s hidden */}
        <motion.div
          className="absolute left-4 md:left-16 top-4 md:top-12 z-10"
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            y: [0, -15, 0, -10, 0, -15, 0, -200],
            x: [0, 5, 0, -5, 0, 5, 0, -300],
            rotate: [-5, 5, -5, 3, -5, 5, -5, -45],
            opacity: [1, 1, 1, 1, 1, 1, 0.8, 0],
          }}
          transition={{  
          duration: 20,
          times: [0, 0.05, 0.1, 0.15, 0.2, 0.22, 0.24, 0.25],
          repeat: Infinity,
          ease: "easeInOut",
          }}
        >
          <motion.img
            src="/images/characters/Cockerel.png"
            alt="Flapping Cockerel"
            className="w-32 md:w-40 h-auto"
            animate={{
              scaleX: [1, 1.1, 1, 0.9, 1],
              scaleY: [1, 0.9, 1, 1.1, 1],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Animated Brown Bird - 10-15s visible, flies away at end */}
        <motion.div
          className="absolute right-4 md:right-16 top-8 md:top-16 z-10"
          initial={{ x: 250, y: -150, opacity: 0 }}
          animate={{
            y: [-150, -15, 0, -10, 0, -15, 0, -10, 0, -150],
            x: [250, 5, 0, -5, 0, 5, 0, -5, 0, 300],
            rotate: [45, 5, -5, 3, -5, 5, -5, 3, -5, 45],
            opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0.8, 0],
          }}
          transition={{
            duration: 20,
            times: [0.5, 0.525, 0.55, 0.6, 0.625, 0.65, 0.675, 0.7, 0.73, 0.75],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src="/images/characters/BrownBird.png"
            alt="Flying Brown Bird"
            className="w-28 md:w-36 h-auto"
            animate={{
              scaleX: [1, 1.1, 1, 0.9, 1],
              scaleY: [1, 0.9, 1, 1.1, 1],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            About the Arlo's Big... Series
          </h2>
          
          <p className="text-2xl text-gray-700 mb-8 font-semibold">
            A series where little moments become BIG adventures
          </p>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            The <em>Arlo's Big...</em> series celebrates the big emotions, unexpected surprises, and playful chaos of everyday childhood. Each book follows Arlo as something small — a yawn, a thought, a mess — grows into something wonderfully BIG.
          </p>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">These books are:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <span className="text-blue-500 text-3xl mr-4">★</span>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">Perfect for ages 3–6</h4>
                  <p className="text-gray-600">Just right for early readers and read-aloud time</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 text-3xl mr-4">★</span>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">Designed for read-aloud joy</h4>
                  <p className="text-gray-600">Rhythmic, rhyming text that's fun to read</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 text-3xl mr-4">★</span>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">Great for parents and teachers</h4>
                  <p className="text-gray-600">Supports learning and emotional development</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 text-3xl mr-4">★</span>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">Packed with imagination</h4>
                  <p className="text-gray-600">Vibrant illustrations and playful humor</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 font-semibold">
            The first adventure is <span className="text-red-500">Arlo's Big Yawn</span>... and many more are on the way!
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            More BIG Adventures Coming Soon!
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative w-full aspect-square mb-6">
                <CoverFlip
                  frontCover="/images/books/book-cover-front(2).png"
                  backCover="/images/books/book-cover-back(2).png"
                  title="Arlo's Big Head"
                />
              </div>
              <div className="text-center">
                <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
                  Coming Soon
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg">
              <div className="relative w-full aspect-square mb-6">
                <CoverFlip
                  frontCover="/images/books/book-cover-front(3).png"
                  backCover="/images/books/book-cover-back(3).png"
                  title="Arlo's Big Journey"
                />
              </div>
              <div className="text-center">
                <span className="inline-block bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-bold text-sm">
                  Coming 2026
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-lg">
              <div className="relative w-full aspect-square mb-6">
                <CoverFlip
                  frontCover="/images/books/book-cover-front(4).png"
                  backCover="/images/books/book-cover-back(4).png"
                  title="Arlo's Big House"
                />
              </div>
              <div className="text-center">
                <span className="inline-block bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-bold text-sm">
                  Coming 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arlo's Activity Zone */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 relative overflow-visible">
        {/* Lava Lamp Effect - Higher opacity, visible colors, stay within bounds */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-purple-600 opacity-30 blur-3xl pointer-events-none"
          style={{ 
            left: '10%',
            top: '25%',
            zIndex: 1
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-red-800 opacity-35 blur-3xl pointer-events-none"
          style={{ 
            right: '10%',
            top: '30%',
            zIndex: 1
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-orange-700 opacity-30 blur-3xl pointer-events-none"
          style={{ 
            left: '45%',
            top: '50%',
            zIndex: 1
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-pink-500 opacity-25 blur-3xl pointer-events-none"
          style={{ 
            right: '15%',
            top: '55%',
            zIndex: 1
          }}
          animate={{
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[var(--font-fredoka)] drop-shadow-lg flex items-center justify-center gap-4">
              <img src="/images/characters/ActivityZoneArlo.png" alt="Arlo" className="w-24 h-24 md:w-28 md:h-28" />
              ARLO'S BIG ACTIVITY ZONE
            </h2>
            <p className="text-2xl text-white font-semibold drop-shadow-md">
              Bring Arlo's adventures home with FREE printables!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Activity Card 1 - Aria's Coloring Pages - Red/Pink */}
            <motion.div 
              className="bg-gradient-to-br from-pink-400 to-red-400 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.03, y: -8 }}
            >
              {/* White burst/star shape behind character */}
              <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 bg-white opacity-90 rounded-full" 
                   style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} 
              />
              {/* Character Image */}
              <img 
                src="/images/characters/Aria.png" 
                alt="Aria" 
                className="absolute top-1/2 right-8 -translate-y-1/2 w-40 h-40 object-contain z-10"
              />
              
              <div className="relative z-20 max-w-[55%] pr-2">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 font-[var(--font-fredoka)] drop-shadow-md">
                  Aria's<br/>Colouring Pages
                </h3>
                <p className="text-lg md:text-xl text-white mb-3 md:mb-4 leading-relaxed font-semibold drop-shadow-sm">
                  Bring Arlo's Big Yawn to life! Perfect for ages 3–6.
                </p>
                <a 
                  href="/activity-sheets/AriasColouringPages.pdf"
                  download
                  className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg"
                >
                  Download FREE
                </a>
              </div>
            </motion.div>

            {/* Activity Card 2 - Mateo's Word Fun - Blue */}
            <motion.div 
              className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.03, y: -8 }}
            >
              {/* White burst/star shape behind character */}
              <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 bg-white opacity-90 rounded-full" 
                   style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} 
              />
              {/* Character Image */}
              <img 
                src="/images/characters/Mateo.png" 
                alt="Mateo" 
                className="absolute top-1/2 right-8 -translate-y-1/2 w-40 h-40 object-contain z-10"
              />
              
              <div className="relative z-20 max-w-[55%] pr-2">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 font-[var(--font-fredoka)] drop-shadow-md">
                  Mateo's<br/>Word Fun
                </h3>
                <p className="text-lg md:text-xl text-white mb-3 md:mb-4 leading-relaxed font-semibold drop-shadow-sm">
                  Rhyming games and read-aloud prompts for kids!
                </p>
                <a 
                  href="/activity-sheets/MateosWordFun.pdf"
                  download
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Download FREE
                </a>
              </div>
            </motion.div>

            {/* Activity Card 3 - Charlie's Story Time - Yellow/Orange */}
            <motion.div 
              className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.03, y: -8 }}
            >
              {/* White burst/star shape behind character */}
              <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 bg-white opacity-90 rounded-full" 
                   style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} 
              />
              {/* Character Image */}
              <img 
                src="/images/characters/Charlie.png" 
                alt="Charlie" 
                className="absolute top-1/2 right-8 -translate-y-1/2 w-40 h-40 object-contain z-10"
              />
              
              <div className="relative z-20 max-w-[55%] pr-2">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 font-[var(--font-fredoka)] drop-shadow-md">
                  Charlie's<br/>Story Time
                </h3>
                <p className="text-lg md:text-xl text-white mb-3 md:mb-4 leading-relaxed font-semibold drop-shadow-sm">
                  Make bedtime stories interactive and silly!
                </p>
                <a 
                  href="/activity-sheets/CharliesStoryTime.pdf"
                  download
                  className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
                >
                  Download FREE
                </a>
              </div>
            </motion.div>

            {/* Activity Card 4 - Luca's Create Your Own - Green */}
            <motion.div 
              className="bg-gradient-to-br from-green-400 to-teal-400 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.03, y: -8 }}
            >
              {/* White burst/star shape behind character */}
              <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 bg-white opacity-90 rounded-full" 
                   style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} 
              />
              {/* Character Image */}
              <img 
                src="/images/characters/Luca.png" 
                alt="Luca" 
                className="absolute top-1/2 right-8 -translate-y-1/2 w-40 h-40 object-contain z-10"
              />
              
              <div className="relative z-20 max-w-[55%] pr-2">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 font-[var(--font-fredoka)] drop-shadow-md">
                  Luca's<br/>Create Your Own
                </h3>
                <p className="text-lg md:text-xl text-white mb-3 md:mb-4 leading-relaxed font-semibold drop-shadow-sm">
                  Draw Arlo's next BIG adventure — what grows huge next?
                </p>
                <a 
                  href="/activity-sheets/LucasCreateYourOwn.pdf"
                  download
                  className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
                >
                  Download FREE
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <div className="text-center bg-white rounded-3xl p-8 shadow-2xl">
            <p className="text-2xl text-gray-800 font-bold leading-relaxed">
              Learning through <span className="text-red-500">play</span>, <span className="text-blue-500">laughter</span>, and <span className="text-green-500">imagination</span> — one <span className="text-orange-500">BIG</span> moment at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-500 to-orange-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay in the Loop!
          </h2>
          <p className="text-2xl mb-8">
            Be the first to hear about new Arlo's Big... books
          </p>
          
          <div className="bg-white rounded-2xl p-8 text-gray-800">
            <p className="text-lg mb-6">Sign up for:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              <p className="flex items-center"><span className="text-2xl mr-2">📬</span> New book alerts</p>
              <p className="flex items-center"><span className="text-2xl mr-2">👀</span> Early previews</p>
              <p className="flex items-center"><span className="text-2xl mr-2">🎨</span> Activity sheets</p>
              <p className="flex items-center"><span className="text-2xl mr-2">🎁</span> Exclusive giveaways</p>
            </div>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-red-500 focus:outline-none text-lg"
              />
              <button 
                type="submit"
                className="bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl font-bold text-yellow-400 mb-4">Get in touch!</p>
          <p className="text-lg mb-2">Email: hello@arlosbigbooks.com</p>
          <p className="text-gray-400 mb-8">For school visits, bulk orders, or general inquiries</p>
          
          <div className="flex justify-center mb-12">
            <a 
              href="https://www.instagram.com/arlosbigbooks" 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 duration-300"
            >
              <img 
                src="/images/insta.png" 
                alt="Follow us on Instagram @arlosbigbooks" 
                className="w-16 h-16"
              />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm mb-2">
            Arlo's Big... is a children's picture book series for ages 3–6 by Martin King
          </p>
          <p className="text-gray-500 text-sm mb-4">
            © 2026 Martin King. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <a 
              href="/privacy" 
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="/cookies" 
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
            >
              Cookie Policy
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="/terms" 
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
