'use client'

import { useState } from 'react'

export default function Characters() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({})

  const handleFlip = (characterId: string) => {
    setFlipped(prev => ({ ...prev, [characterId]: !prev[characterId] }))
  }

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Paper texture overlay - very subtle */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
           }}>
      </div>

      {/* Hand-drawn title at top */}
      <div className="text-center py-12 px-4 relative">
        <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-fredoka)] mb-4 relative inline-block">
          <span className="relative z-10 text-gray-800">Meet Arlo's Friends!</span>
          {/* Crayon underline scribble */}
          <svg className="absolute -bottom-2 left-0 w-full h-8" viewBox="0 0 400 30" preserveAspectRatio="none">
            <path d="M5,20 Q50,10 100,18 T200,15 T300,20 T395,15" 
                  stroke="#FFD700" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round"
                  opacity="0.6"/>
          </svg>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mt-6 font-[var(--font-fredoka)]">
          Click on each friend to flip and learn more!
        </p>
      </div>

      {/* Main character area - hand-drawn chaos! SPREAD OUT MORE */}
      <div className="px-4 py-8 pb-20 relative" style={{ minHeight: '1400px' }}>
        <div className="max-w-[1600px] mx-auto relative">
          
          {/* Hand-drawn doodles scattered around */}
          {/* Star doodle - top right */}
          <div className="absolute top-10 right-32 hidden md:block animate-pulse" style={{ animationDuration: '3s' }}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              <path d="M30,5 L35,20 L50,25 L35,30 L30,45 L25,30 L10,25 L25,20 Z" 
                    fill="none" 
                    stroke="#FFB6C1" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Heart doodle - left side */}
          <div className="absolute top-64 left-16 hidden md:block animate-pulse" style={{ animationDuration: '4s' }}>
            <svg width="50" height="50" viewBox="0 0 50 50">
              <path d="M25,40 C25,40 10,30 10,20 C10,15 13,12 17,12 C20,12 23,14 25,17 C27,14 30,12 33,12 C37,12 40,15 40,20 C40,30 25,40 25,40 Z" 
                    fill="none" 
                    stroke="#FF6B9D" 
                    strokeWidth="3" 
                    strokeLinecap="round"/>
            </svg>
          </div>

          {/* Swirl doodle - bottom right */}
          <div className="absolute bottom-40 right-64 hidden lg:block" style={{ transform: 'rotate(-15deg)' }}>
            <svg width="70" height="70" viewBox="0 0 70 70">
              <path d="M35,10 Q45,15 45,25 Q45,35 35,35 Q25,35 25,25 Q25,20 30,18" 
                    fill="none" 
                    stroke="#98D8C8" 
                    strokeWidth="4" 
                    strokeLinecap="round"/>
            </svg>
          </div>

          {/* Simple flower doodle - middle left */}
          <div className="absolute top-[600px] left-48 hidden lg:block" style={{ transform: 'rotate(25deg)' }}>
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="8" fill="#FFD700" opacity="0.6"/>
              <circle cx="25" cy="15" r="6" fill="#FF69B4" opacity="0.5"/>
              <circle cx="35" cy="25" r="6" fill="#87CEEB" opacity="0.5"/>
              <circle cx="25" cy="35" r="6" fill="#98FB98" opacity="0.5"/>
              <circle cx="15" cy="25" r="6" fill="#DDA0DD" opacity="0.5"/>
            </svg>
          </div>

          {/* Star doodle - middle */}
          <div className="absolute top-[800px] left-1/2 hidden md:block" style={{ transform: 'translateX(-50%)' }}>
            <svg width="50" height="50" viewBox="0 0 50 50">
              <path d="M25,5 L28,18 L40,20 L30,28 L33,42 L25,35 L17,42 L20,28 L10,20 L22,18 Z" 
                    fill="none" 
                    stroke="#FFA500" 
                    strokeWidth="3" 
                    strokeLinecap="round"/>
            </svg>
          </div>

          {/* CONNECTING LINES - MORE OF THEM */}
          {/* Arlo to Teddie */}
          <svg className="absolute top-72 left-[15%] w-64 h-48 pointer-events-none hidden md:block">
            <path d="M200,10 Q150,60 100,80 T20,120" 
                  stroke="#FF6B9D" 
                  strokeWidth="6" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="3,8"
                  opacity="0.4"/>
          </svg>

          {/* Arlo to Aria */}
          <svg className="absolute top-72 right-[15%] w-64 h-48 pointer-events-none hidden md:block">
            <path d="M10,10 Q80,60 140,80 T220,120" 
                  stroke="#FF69B4" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="4,7"
                  opacity="0.4"/>
          </svg>

          {/* Teddie to Kurtis */}
          <svg className="absolute top-[480px] left-[8%] w-48 h-64 pointer-events-none hidden md:block">
            <path d="M40,10 Q60,80 50,150 T60,220" 
                  stroke="#9333EA" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="5,6"
                  opacity="0.4"/>
          </svg>

          {/* Aria to Pip */}
          <svg className="absolute top-[480px] right-[12%] w-48 h-32 pointer-events-none hidden md:block">
            <path d="M180,10 Q120,40 80,60 T20,80" 
                  stroke="#14B8A6" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="4,6"
                  opacity="0.4"/>
          </svg>

          {/* Mateo to Charlie */}
          <svg className="absolute top-[780px] left-[35%] w-56 h-48 pointer-events-none hidden md:block">
            <path d="M10,10 Q60,60 120,80 T200,100" 
                  stroke="#EAB308" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="3,7"
                  opacity="0.4"/>
          </svg>

          {/* Charlie to Luca */}
          <svg className="absolute top-[920px] left-[48%] w-64 h-32 pointer-events-none hidden md:block">
            <path d="M10,10 Q80,40 150,50 T250,60" 
                  stroke="#22C55E" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="4,8"
                  opacity="0.4"/>
          </svg>

          {/* Kurtis to Arlo's Mum */}
          <svg className="absolute top-[880px] left-[12%] w-48 h-48 pointer-events-none hidden md:block">
            <path d="M10,10 Q40,50 30,100 T40,180" 
                  stroke="#38BDF8" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="5,7"
                  opacity="0.4"/>
          </svg>

          {/* ARLO - Big centered blob at top (red/pink) */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 md:w-[420px] cursor-pointer z-20"
               style={{ 
                 transform: 'translate(-50%, 0) rotate(-3deg)',
                 perspective: '1000px'
               }}
               onClick={() => handleFlip('arlo')}>
            <div className={`relative transition-all duration-700 transform-style-3d ${flipped['arlo'] ? 'rotate-y-180' : ''}`}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   transform: flipped['arlo'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              {/* FRONT */}
              <div className="relative rounded-[40%_60%_70%_30%/60%_40%_60%_40%] p-8 shadow-2xl border-8 border-red-500 hover:scale-105 transition-all duration-300"
                   style={{ 
                     filter: 'drop-shadow(4px 4px 0px rgba(220, 38, 38, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'linear-gradient(135deg, rgba(248, 113, 113, 0.3) 0%, rgba(251, 207, 232, 0.3) 100%)',
                   }}>
                {/* Crayon scribble fill */}
                <svg className="absolute inset-0 w-full h-full rounded-[40%_60%_70%_30%/60%_40%_60%_40%] opacity-60" style={{ pointerEvents: 'none' }}>
                  <defs>
                    <pattern id="arlo-scribble" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0,5 Q10,3 20,5 T40,5" stroke="#EF4444" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,15 Q10,13 20,15 T40,15" stroke="#F87171" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,25 Q10,23 20,25 T40,25" stroke="#DC2626" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3"/>
                      <path d="M0,35 Q10,33 20,35 T40,35" stroke="#FCA5A5" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#arlo-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/ArloBedYawn.png" 
                    alt="Arlo - curious little boy"
                    className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-4 drop-shadow-lg"
                  />
                  <h2 className="text-4xl md:text-5xl font-bold text-white font-[var(--font-fredoka)] drop-shadow-md">
                    Arlo
                  </h2>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[40%_60%_70%_30%/60%_40%_60%_40%] p-8 shadow-2xl border-8 border-red-500"
                   style={{ 
                     filter: 'drop-shadow(4px 4px 0px rgba(220, 38, 38, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                     background: 'linear-gradient(135deg, rgba(248, 113, 113, 0.95) 0%, rgba(251, 207, 232, 0.95) 100%)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-fredoka)]">About Arlo</h3>
                  <div className="space-y-2 text-white text-sm md:text-base">
                    <p>⭐ <strong>Personality:</strong> Adventurous, playful, full of wonder</p>
                    <p>📚 <strong>Appears in:</strong> Every book in the series!</p>
                    <p>💭 <strong>Fun Fact:</strong> His yawns get REALLY big...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TEDDIE THE LITTLE MOUSE - Far left (orange) */}
          <div className="absolute top-80 left-[8%] w-64 md:w-72 cursor-pointer z-10"
               style={{ 
                 transform: 'rotate(8deg)',
                 perspective: '1000px'
               }}
               onClick={() => handleFlip('teddie')}>
            <div className={`relative transition-all duration-700`}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   transform: flipped['teddie'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              {/* FRONT */}
              <div className="relative rounded-[30%_70%_70%_30%/30%_30%_70%_70%] p-6 shadow-2xl border-8 border-orange-500 hover:scale-105 transition-all duration-300"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(234, 88, 12, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.3) 0%, rgba(253, 224, 71, 0.3) 100%)',
                   }}>
                <svg className="absolute inset-0 w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-60">
                  <defs>
                    <pattern id="teddie-scribble" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                      <path d="M0,7 Q8,5 17,7 T35,7" stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,17 Q8,15 17,17 T35,17" stroke="#FB923C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,27 Q8,25 17,27 T35,27" stroke="#FBBF24" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#teddie-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/MouseInCar.png" 
                    alt="Teddie The Little Mouse"
                    className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-white font-[var(--font-fredoka)] drop-shadow-md leading-tight">
                    Teddie The<br/>Little Mouse
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] p-6 shadow-2xl border-8 border-orange-500"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(234, 88, 12, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                     background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.95) 0%, rgba(253, 224, 71, 0.95) 100%)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Teddie</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>🚗 <strong>Loves:</strong> Driving fast in his tiny car</p>
                    <p>⚡ <strong>Personality:</strong> Quick, clever & playful</p>
                    <p>🎉 <strong>Fun Fact:</strong> Zooms across the pages!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ARIA - Far right (pink) */}
          <div className="absolute top-80 right-[8%] w-64 md:w-72 cursor-pointer z-10"
               style={{ 
                 transform: 'rotate(-12deg)',
                 perspective: '1000px'
               }}
               onClick={() => handleFlip('aria')}>
            <div className={`relative transition-all duration-700`}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   transform: flipped['aria'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              {/* FRONT */}
              <div className="relative rounded-[60%_40%_30%_70%/40%_60%_70%_30%] p-6 shadow-2xl border-8 border-pink-500 hover:scale-105 transition-all duration-300"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(236, 72, 153, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.3) 0%, rgba(251, 113, 133, 0.3) 100%)',
                   }}>
                <svg className="absolute inset-0 w-full h-full rounded-[60%_40%_30%_70%/40%_60%_70%_30%] opacity-60">
                  <defs>
                    <pattern id="aria-scribble" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                      <path d="M0,7 Q8,5 17,7 T35,7" stroke="#EC4899" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,17 Q8,15 17,17 T35,17" stroke="#F472B6" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,27 Q8,25 17,27 T35,27" stroke="#FB7185" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#aria-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/Aria.png" 
                    alt="Aria - creative artist"
                    className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-fredoka)] drop-shadow-md">
                    Aria
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[60%_40%_30%_70%/40%_60%_70%_30%] p-6 shadow-2xl border-8 border-pink-500"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(236, 72, 153, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                     background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.95) 0%, rgba(251, 113, 133, 0.95) 100%)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Aria</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>🎨 <strong>Loves:</strong> Coloring & creating art</p>
                    <p>✏️ <strong>Personality:</strong> Creative & imaginative</p>
                    <p>📄 <strong>Fun Fact:</strong> Brings stories to life with crayons!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KURTIS THE COCKEREL - Lower left (purple) */}
          <div className="absolute top-[600px] left-[12%] w-60 md:w-64 cursor-pointer z-10"
               style={{ 
                 transform: 'rotate(-5deg)',
                 perspective: '1000px'
               }}
               onClick={() => handleFlip('kurtis')}>
            <div className={`relative transition-all duration-700`}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   transform: flipped['kurtis'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              {/* FRONT */}
              <div className="relative rounded-[70%_30%_50%_50%/60%_40%_60%_40%] p-6 shadow-2xl border-8 border-purple-500 hover:scale-105 transition-all duration-300"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(147, 51, 234, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.3) 0%, rgba(167, 139, 250, 0.3) 100%)',
                   }}>
                <svg className="absolute inset-0 w-full h-full rounded-[70%_30%_50%_50%/60%_40%_60%_40%] opacity-60">
                  <defs>
                    <pattern id="kurtis-scribble" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                      <path d="M0,7 Q8,5 17,7 T35,7" stroke="#9333EA" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,17 Q8,15 17,17 T35,17" stroke="#C084FC" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,27 Q8,25 17,27 T35,27" stroke="#A78BFA" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#kurtis-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/Cockerel.png" 
                    alt="Kurtis The Cockerel"
                    className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-white font-[var(--font-fredoka)] drop-shadow-md leading-tight">
                    Kurtis The<br/>Cockerel
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[70%_30%_50%_50%/60%_40%_60%_40%] p-6 shadow-2xl border-8 border-purple-500"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(147, 51, 234, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                     background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.95) 0%, rgba(167, 139, 250, 0.95) 100%)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Kurtis</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>🌈 <strong>Looks:</strong> Bright, colorful feathers</p>
                    <p>🎭 <strong>Personality:</strong> Dramatic & proud</p>
                    <p>🪽 <strong>Fun Fact:</strong> Flies away dramatically at the end!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MATEO - Center (blue) */}
          <div className="absolute top-[740px] left-[38%] w-64 md:w-72 cursor-pointer z-10"
               style={{ 
                 transform: 'rotate(6deg)',
                 perspective: '1000px'
               }}
               onClick={() => handleFlip('mateo')}>
            <div className={`relative transition-all duration-700`}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   transform: flipped['mateo'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              {/* FRONT */}
              <div className="relative rounded-[40%_60%_40%_60%/50%_50%_50%_50%] p-6 shadow-2xl border-8 border-blue-500 hover:scale-105 transition-all duration-300"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(59, 130, 246, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.3) 0%, rgba(99, 102, 241, 0.3) 100%)',
                   }}>
                <svg className="absolute inset-0 w-full h-full rounded-[40%_60%_40%_60%/50%_50%_50%_50%] opacity-60">
                  <defs>
                    <pattern id="mateo-scribble" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                      <path d="M0,7 Q8,5 17,7 T35,7" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,17 Q8,15 17,17 T35,17" stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,27 Q8,25 17,27 T35,27" stroke="#6366F1" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mateo-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/Mateo.png" 
                    alt="Mateo"
                    className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-fredoka)] drop-shadow-md">
                    Mateo
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[40%_60%_40%_60%/50%_50%_50%_50%] p-6 shadow-2xl border-8 border-blue-500"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(59, 130, 246, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                     background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.95) 0%, rgba(99, 102, 241, 0.95) 100%)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Mateo</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>📖 <strong>Loves:</strong> Rhymes & reading</p>
                    <p>✨ <strong>Personality:</strong> Smart & helpful</p>
                    <p>🎯 <strong>Fun Fact:</strong> Makes learning fun with word games!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PIP THE BROWN BIRD - Upper right (teal) */}
          <div className="absolute top-[620px] right-[15%] w-60 md:w-64 cursor-pointer z-10"
               style={{ 
                 transform: 'rotate(10deg)',
                 perspective: '1000px'
               }}
               onClick={() => handleFlip('pip')}>
            <div className={`relative transition-all duration-700`}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   transform: flipped['pip'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              {/* FRONT */}
              <div className="relative rounded-[50%_50%_60%_40%/40%_60%_50%_50%] p-5 shadow-2xl border-8 border-teal-500 hover:scale-105 transition-all duration-300"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(20, 184, 166, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.3) 0%, rgba(34, 211, 238, 0.3) 100%)',
                   }}>
                <svg className="absolute inset-0 w-full h-full rounded-[50%_50%_60%_40%/40%_60%_50%_50%] opacity-60">
                  <defs>
                    <pattern id="pip-scribble" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                      <path d="M0,7 Q8,5 17,7 T35,7" stroke="#14B8A6" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,17 Q8,15 17,17 T35,17" stroke="#2DD4BF" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,27 Q8,25 17,27 T35,27" stroke="#22D3EE" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#pip-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/BrownBird.png" 
                    alt="Pip The Brown Bird"
                    className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-white font-[var(--font-fredoka)] drop-shadow-md leading-tight">
                    Pip The<br/>Brown Bird
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[50%_50%_60%_40%/40%_60%_50%_50%] p-5 shadow-2xl border-8 border-teal-500"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(20, 184, 166, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                     background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.95) 0%, rgba(34, 211, 238, 0.95) 100%)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-white mb-3 font-[var(--font-fredoka)]">About Pip</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>☁️ <strong>Loves:</strong> Soaring through the sky</p>
                    <p>😊 <strong>Personality:</strong> Gentle & kind</p>
                    <p>🌟 <strong>Fun Fact:</strong> Appears in surprise moments!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHARLIE - Lower center-right (yellow/orange) */}
          <div className="absolute top-[940px] left-[55%] w-60 md:w-64 cursor-pointer z-10"
               style={{ 
                 transform: 'rotate(-8deg)',
                 perspective: '1000px'
               }}
               onClick={() => handleFlip('charlie')}>
            <div className={`relative transition-all duration-700`}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   transform: flipped['charlie'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              {/* FRONT */}
              <div className="relative rounded-[35%_65%_70%_30%/65%_35%_65%_35%] p-5 shadow-2xl border-8 border-yellow-500 hover:scale-105 transition-all duration-300"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(234, 179, 8, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.3) 0%, rgba(251, 146, 60, 0.3) 100%)',
                   }}>
                <svg className="absolute inset-0 w-full h-full rounded-[35%_65%_70%_30%/65%_35%_65%_35%] opacity-60">
                  <defs>
                    <pattern id="charlie-scribble" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                      <path d="M0,7 Q8,5 17,7 T35,7" stroke="#EAB308" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,17 Q8,15 17,17 T35,17" stroke="#FACC15" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,27 Q8,25 17,27 T35,27" stroke="#FB923C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#charlie-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/Charlie.png" 
                    alt="Charlie"
                    className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-fredoka)] drop-shadow-md">
                    Charlie
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[35%_65%_70%_30%/65%_35%_65%_35%] p-5 shadow-2xl border-8 border-yellow-500"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(234, 179, 8, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                     background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.95) 0%, rgba(251, 146, 60, 0.95) 100%)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Charlie</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>🌙 <strong>Loves:</strong> Bedtime stories</p>
                    <p>📚 <strong>Personality:</strong> Fun & interactive</p>
                    <p>🎭 <strong>Fun Fact:</strong> Makes stories silly & imaginative!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LUCA - Bottom right (green) */}
          <div className="absolute top-[1040px] right-[18%] w-60 md:w-64 cursor-pointer z-10"
               style={{ 
                 transform: 'rotate(15deg)',
                 perspective: '1000px'
               }}
               onClick={() => handleFlip('luca')}>
            <div className={`relative transition-all duration-700`}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   transform: flipped['luca'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              {/* FRONT */}
              <div className="relative rounded-[45%_55%_40%_60%/55%_45%_60%_40%] p-5 shadow-2xl border-8 border-green-500 hover:scale-105 transition-all duration-300"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(34, 197, 94, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.3) 0%, rgba(16, 185, 129, 0.3) 100%)',
                   }}>
                <svg className="absolute inset-0 w-full h-full rounded-[45%_55%_40%_60%/55%_45%_60%_40%] opacity-60">
                  <defs>
                    <pattern id="luca-scribble" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                      <path d="M0,7 Q8,5 17,7 T35,7" stroke="#22C55E" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,17 Q8,15 17,17 T35,17" stroke="#4ADE80" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,27 Q8,25 17,27 T35,27" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#luca-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/Luca.png" 
                    alt="Luca"
                    className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-fredoka)] drop-shadow-md">
                    Luca
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[45%_55%_40%_60%/55%_45%_60%_40%] p-5 shadow-2xl border-8 border-green-500"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(34, 197, 94, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                     background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.95) 0%, rgba(16, 185, 129, 0.95) 100%)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Luca</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>✨ <strong>Loves:</strong> Creating adventures</p>
                    <p>🎨 <strong>Personality:</strong> Imaginative & creative</p>
                    <p>💭 <strong>Fun Fact:</strong> Helps you dream BIG!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ARLO'S MUM - Bottom left (sky blue) */}
          <div className="absolute top-[1100px] left-[15%] w-64 md:w-72 cursor-pointer z-10"
               style={{ 
                 transform: 'rotate(-10deg)',
                 perspective: '1000px'
               }}
               onClick={() => handleFlip('mum')}>
            <div className={`relative transition-all duration-700`}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   transform: flipped['mum'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              {/* FRONT */}
              <div className="relative rounded-[55%_45%_45%_55%/50%_50%_50%_50%] p-6 shadow-2xl border-8 border-sky-500 hover:scale-105 transition-all duration-300"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(56, 189, 248, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)',
                   }}>
                <svg className="absolute inset-0 w-full h-full rounded-[55%_45%_45%_55%/50%_50%_50%_50%] opacity-60">
                  <defs>
                    <pattern id="mum-scribble" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                      <path d="M0,7 Q8,5 17,7 T35,7" stroke="#38BDF8" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,17 Q8,15 17,17 T35,17" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
                      <path d="M0,27 Q8,25 17,27 T35,27" stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mum-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/ArlosMum.png" 
                    alt="Arlo's Mum"
                    className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-fredoka)] drop-shadow-md">
                    Arlo's Mum
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[55%_45%_45%_55%/50%_50%_50%_50%] p-6 shadow-2xl border-8 border-sky-500"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(56, 189, 248, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                     background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Mum</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>❤️ <strong>Personality:</strong> Warm, patient & understanding</p>
                    <p>🏠 <strong>Role:</strong> Creates magical bedtime routines</p>
                    <p>✨ <strong>Fun Fact:</strong> Secretly loves Arlo's delays!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom section - More coming soon */}
      <div className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50 mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-[var(--font-fredoka)] relative z-10">
              More Friends Coming Soon!
            </h2>
            {/* Crayon circle scribble around text */}
            <svg className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)]" style={{ top: '-16px', left: '-16px' }}>
              <ellipse cx="50%" cy="50%" rx="48%" ry="45%" 
                       fill="none" 
                       stroke="#FFD700" 
                       strokeWidth="6" 
                       opacity="0.3"
                       strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            As Arlo's adventures grow, so do his friends! Keep checking back to meet new characters.
          </p>
          <a 
            href="/"
            className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-[var(--font-fredoka)]"
          >
            Back to Arlo's World →
          </a>
        </div>
      </div>

      {/* SEO Footer */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm leading-relaxed">
          <p>
            Arlo's Big Books features loveable, memorable characters that kids ages 3-6 adore. From curious Arlo to funny animal friends like Teddie The Little Mouse, Kurtis The Cockerel, and Pip The Brown Bird, plus creative helpers Aria, Mateo, Charlie, and Luca. Each character-driven picture book celebrates imagination, family bonds, and playful moments perfect for bedtime stories and read-aloud time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p className="text-sm mb-4">© 2026 Martin King. All rights reserved.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="/privacy" className="hover:text-yellow-400 transition-colors text-sm">Privacy Policy</a>
          <span>•</span>
          <a href="/cookies" className="hover:text-yellow-400 transition-colors text-sm">Cookie Policy</a>
          <span>•</span>
          <a href="/terms" className="hover:text-yellow-400 transition-colors text-sm">Terms & Conditions</a>
        </div>
      </footer>
    </main>
  )
}
