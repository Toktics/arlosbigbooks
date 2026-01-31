'use client'

import { useState } from 'react'

export default function Characters() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({})

  const handleFlip = (characterId: string) => {
    setFlipped(prev => ({ ...prev, [characterId]: !prev[characterId] }))
  }

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
           }}>
      </div>

      {/* Scattered craft items */}
      {/* Red crayon - top left */}
      <div className="absolute top-24 left-12 hidden md:block" style={{ transform: 'rotate(-25deg)' }}>
        <div className="relative w-8 h-24 bg-gradient-to-b from-red-500 to-red-600 rounded-t-full">
          <div className="absolute bottom-0 w-8 h-3 bg-red-700"></div>
        </div>
      </div>

      {/* Blue crayon - top right */}
      <div className="absolute top-32 right-24 hidden md:block" style={{ transform: 'rotate(45deg)' }}>
        <div className="relative w-8 h-24 bg-gradient-to-b from-blue-500 to-blue-600 rounded-t-full">
          <div className="absolute bottom-0 w-8 h-3 bg-blue-700"></div>
        </div>
      </div>

      {/* Yellow crayon - middle left */}
      <div className="absolute top-[500px] left-8 hidden lg:block" style={{ transform: 'rotate(15deg)' }}>
        <div className="relative w-8 h-24 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-full">
          <div className="absolute bottom-0 w-8 h-3 bg-yellow-600"></div>
        </div>
      </div>

      {/* Green crayon - bottom right */}
      <div className="absolute bottom-40 right-16 hidden lg:block" style={{ transform: 'rotate(-35deg)' }}>
        <div className="relative w-8 h-24 bg-gradient-to-b from-green-500 to-green-600 rounded-t-full">
          <div className="absolute bottom-0 w-8 h-3 bg-green-700"></div>
        </div>
      </div>

      {/* Scissors - bottom left */}
      <div className="absolute bottom-32 left-20 hidden lg:block" style={{ transform: 'rotate(25deg)' }}>
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="15" cy="15" r="8" fill="#4B5563" opacity="0.7"/>
          <circle cx="15" cy="45" r="8" fill="#4B5563" opacity="0.7"/>
          <path d="M15,15 L45,45 M15,45 L45,15" stroke="#6B7280" strokeWidth="3" opacity="0.7"/>
          <circle cx="15" cy="15" r="4" fill="none" stroke="#374151" strokeWidth="2"/>
          <circle cx="15" cy="45" r="4" fill="none" stroke="#374151" strokeWidth="2"/>
        </svg>
      </div>

      {/* Random crayon scribbles scattered around */}
      {/* Pink squiggle - top */}
      <div className="absolute top-40 left-1/4 hidden md:block" style={{ transform: 'rotate(-15deg)' }}>
        <svg width="80" height="40" viewBox="0 0 80 40">
          <path d="M5,20 Q15,5 25,20 T45,20 T65,20" stroke="#FF69B4" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6"/>
        </svg>
      </div>

      {/* Blue zigzag - right */}
      <div className="absolute top-96 right-32 hidden lg:block" style={{ transform: 'rotate(20deg)' }}>
        <svg width="60" height="80" viewBox="0 0 60 80">
          <path d="M10,10 L30,25 L10,40 L30,55 L10,70" stroke="#3B82F6" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6"/>
        </svg>
      </div>

      {/* Green loops - left */}
      <div className="absolute top-[700px] left-24 hidden lg:block" style={{ transform: 'rotate(-10deg)' }}>
        <svg width="50" height="70" viewBox="0 0 50 70">
          <path d="M10,10 Q30,20 10,30 Q30,40 10,50 Q30,60 10,70" stroke="#22C55E" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6"/>
        </svg>
      </div>

      {/* Orange hash marks - bottom center */}
      <div className="absolute bottom-60 left-1/2 hidden md:block" style={{ transform: 'translateX(-50%) rotate(10deg)' }}>
        <svg width="60" height="60" viewBox="0 0 60 60">
          <line x1="10" y1="10" x2="50" y2="10" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
          <line x1="10" y1="25" x2="50" y2="25" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
          <line x1="10" y1="40" x2="50" y2="40" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
        </svg>
      </div>

      {/* Purple spiral - top right area */}
      <div className="absolute top-56 right-48 hidden lg:block" style={{ transform: 'rotate(45deg)' }}>
        <svg width="50" height="50" viewBox="0 0 50 50">
          <path d="M25,25 Q35,25 35,30 Q35,40 25,40 Q15,40 15,30 Q15,20 25,20 Q35,20 35,25" stroke="#9333EA" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
        </svg>
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

      {/* Main character area */}
      <div className="px-4 py-8 pb-20 relative" style={{ minHeight: '1400px' }}>
        <div className="max-w-[1600px] mx-auto relative">

          {/* CONNECTING LINES - Wobbly crayon lines */}
          <svg className="absolute top-72 left-[15%] w-64 h-48 pointer-events-none hidden md:block">
            <path d="M200,10 Q150,60 100,80 T20,120" 
                  stroke="#FF6B9D" 
                  strokeWidth="6" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="3,8"
                  opacity="0.4"/>
          </svg>

          <svg className="absolute top-72 right-[15%] w-64 h-48 pointer-events-none hidden md:block">
            <path d="M10,10 Q80,60 140,80 T220,120" 
                  stroke="#FF69B4" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="4,7"
                  opacity="0.4"/>
          </svg>

          <svg className="absolute top-[480px] left-[8%] w-48 h-64 pointer-events-none hidden md:block">
            <path d="M40,10 Q60,80 50,150 T60,220" 
                  stroke="#9333EA" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="5,6"
                  opacity="0.4"/>
          </svg>

          <svg className="absolute top-[480px] right-[12%] w-48 h-32 pointer-events-none hidden md:block">
            <path d="M180,10 Q120,40 80,60 T20,80" 
                  stroke="#14B8A6" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="4,6"
                  opacity="0.4"/>
          </svg>

          <svg className="absolute top-[780px] left-[35%] w-56 h-48 pointer-events-none hidden md:block">
            <path d="M10,10 Q60,60 120,80 T200,100" 
                  stroke="#EAB308" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="3,7"
                  opacity="0.4"/>
          </svg>

          <svg className="absolute top-[920px] left-[48%] w-64 h-32 pointer-events-none hidden md:block">
            <path d="M10,10 Q80,40 150,50 T250,60" 
                  stroke="#22C55E" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="4,8"
                  opacity="0.4"/>
          </svg>

          <svg className="absolute top-[880px] left-[12%] w-48 h-48 pointer-events-none hidden md:block">
            <path d="M10,10 Q40,50 30,100 T40,180" 
                  stroke="#38BDF8" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="5,7"
                  opacity="0.4"/>
          </svg>

          {/* ARLO - Big centered blob (red/pink) */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 md:w-[420px] cursor-pointer z-20"
               style={{ 
                 transform: 'translate(-50%, 0) rotate(-3deg)',
                 perspective: '1000px'
               }}
               onClick={() => handleFlip('arlo')}>
            <div className={`relative transition-all duration-700`}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   transform: flipped['arlo'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              {/* FRONT - Crayon texture background */}
              <div className="relative rounded-[40%_60%_70%_30%/60%_40%_60%_40%] p-8 shadow-2xl border-8 border-red-500 hover:scale-105 transition-all duration-300 overflow-hidden"
                   style={{
                     filter: 'drop-shadow(4px 4px 0px rgba(220, 38, 38, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'white',
                   }}>
                {/* Crayon texture PNG background */}
                <img
                  src="/images/crayons/Arlo.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                <div className="text-center relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-[var(--font-fredoka)] drop-shadow-sm">
                    Arlo
                  </h2>
                </div>
              </div>

              {/* BACK - Solid color */}
              <div className="absolute inset-0 rounded-[40%_60%_70%_30%/60%_40%_60%_40%] p-8 shadow-2xl border-8 border-red-500 bg-gradient-to-br from-red-400 to-pink-400"
                   style={{ 
                     filter: 'drop-shadow(4px 4px 0px rgba(220, 38, 38, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
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
              <div className="relative rounded-[30%_70%_70%_30%/30%_30%_70%_70%] p-6 shadow-2xl border-8 border-orange-500 hover:scale-105 transition-all duration-300 overflow-hidden"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(234, 88, 12, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'white',
                   }}>
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} viewBox="0 0 300 300">
                  <defs>
                    <pattern id="teddie-scribble" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(50)">
                      <line x1="0" y1="2" x2="18" y2="2" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                      <line x1="0" y1="7" x2="18" y2="7" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                      <line x1="0" y1="12" x2="18" y2="12" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                    </pattern>
                  </defs>
                  <ellipse cx="150" cy="150" rx="135" ry="135" fill="url(#teddie-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/MouseInCar.png" 
                    alt="Teddie The Little Mouse"
                    className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-[var(--font-fredoka)] leading-tight">
                    Teddie The<br/>Little Mouse
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] p-6 shadow-2xl border-8 border-orange-500 bg-gradient-to-br from-orange-400 to-yellow-400"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(234, 88, 12, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
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
              <div className="relative rounded-[60%_40%_30%_70%/40%_60%_70%_30%] p-6 shadow-2xl border-8 border-pink-500 hover:scale-105 transition-all duration-300 overflow-hidden"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(236, 72, 153, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'white',
                   }}>
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} viewBox="0 0 300 300">
                  <defs>
                    <pattern id="aria-scribble" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                      <line x1="0" y1="2" x2="18" y2="2" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                      <line x1="0" y1="7" x2="18" y2="7" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                      <line x1="0" y1="12" x2="18" y2="12" stroke="#FB7185" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                    </pattern>
                  </defs>
                  <ellipse cx="150" cy="150" rx="135" ry="135" fill="url(#aria-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/Aria.png" 
                    alt="Aria"
                    className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-[var(--font-fredoka)]">
                    Aria
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[60%_40%_30%_70%/40%_60%_70%_30%] p-6 shadow-2xl border-8 border-pink-500 bg-gradient-to-br from-pink-400 to-rose-400"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(236, 72, 153, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
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
              <div className="relative rounded-[70%_30%_50%_50%/60%_40%_60%_40%] p-6 shadow-2xl border-8 border-purple-500 hover:scale-105 transition-all duration-300 overflow-hidden"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(147, 51, 234, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'white',
                   }}>
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} viewBox="0 0 280 280">
                  <defs>
                    <pattern id="kurtis-scribble" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(60)">
                      <line x1="0" y1="2" x2="18" y2="2" stroke="#9333EA" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                      <line x1="0" y1="7" x2="18" y2="7" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                      <line x1="0" y1="12" x2="18" y2="12" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                    </pattern>
                  </defs>
                  <ellipse cx="140" cy="140" rx="125" ry="125" fill="url(#kurtis-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/Cockerel.png" 
                    alt="Kurtis The Cockerel"
                    className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-[var(--font-fredoka)] leading-tight">
                    Kurtis The<br/>Cockerel
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[70%_30%_50%_50%/60%_40%_60%_40%] p-6 shadow-2xl border-8 border-purple-500 bg-gradient-to-br from-purple-400 to-violet-400"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(147, 51, 234, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Kurtis</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>🌈 <strong>Looks:</strong> Bright, colorful feathers</p>
                    <p>🎭 <strong>Personality:</strong> Dramatic & proud</p>
                    <p>🪽 <strong>Fun Fact:</strong> Flies away dramatically!</p>
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
              <div className="relative rounded-[40%_60%_40%_60%/50%_50%_50%_50%] p-6 shadow-2xl border-8 border-blue-500 hover:scale-105 transition-all duration-300 overflow-hidden"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(59, 130, 246, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'white',
                   }}>
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} viewBox="0 0 300 300">
                  <defs>
                    <pattern id="mateo-scribble" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(-60)">
                      <line x1="0" y1="2" x2="18" y2="2" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                      <line x1="0" y1="7" x2="18" y2="7" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                      <line x1="0" y1="12" x2="18" y2="12" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                    </pattern>
                  </defs>
                  <ellipse cx="150" cy="150" rx="135" ry="135" fill="url(#mateo-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/Mateo.png" 
                    alt="Mateo"
                    className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-[var(--font-fredoka)]">
                    Mateo
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[40%_60%_40%_60%/50%_50%_50%_50%] p-6 shadow-2xl border-8 border-blue-500 bg-gradient-to-br from-blue-400 to-indigo-400"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(59, 130, 246, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Mateo</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>📖 <strong>Loves:</strong> Rhymes & reading</p>
                    <p>✨ <strong>Personality:</strong> Smart & helpful</p>
                    <p>🎯 <strong>Fun Fact:</strong> Makes learning fun!</p>
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
              <div className="relative rounded-[50%_50%_60%_40%/40%_60%_50%_50%] p-5 shadow-2xl border-8 border-teal-500 hover:scale-105 transition-all duration-300 overflow-hidden"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(20, 184, 166, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'white',
                   }}>
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} viewBox="0 0 280 280">
                  <defs>
                    <pattern id="pip-scribble" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(40)">
                      <line x1="0" y1="2" x2="18" y2="2" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                      <line x1="0" y1="7" x2="18" y2="7" stroke="#2DD4BF" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                      <line x1="0" y1="12" x2="18" y2="12" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                    </pattern>
                  </defs>
                  <ellipse cx="140" cy="140" rx="125" ry="125" fill="url(#pip-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/BrownBird.png" 
                    alt="Pip The Brown Bird"
                    className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-[var(--font-fredoka)] leading-tight">
                    Pip The<br/>Brown Bird
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[50%_50%_60%_40%/40%_60%_50%_50%] p-5 shadow-2xl border-8 border-teal-500 bg-gradient-to-br from-teal-400 to-cyan-400"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(20, 184, 166, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
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
              <div className="relative rounded-[35%_65%_70%_30%/65%_35%_65%_35%] p-5 shadow-2xl border-8 border-yellow-500 hover:scale-105 transition-all duration-300 overflow-hidden"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(234, 179, 8, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'white',
                   }}>
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} viewBox="0 0 280 280">
                  <defs>
                    <pattern id="charlie-scribble" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(-50)">
                      <line x1="0" y1="2" x2="18" y2="2" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                      <line x1="0" y1="7" x2="18" y2="7" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                      <line x1="0" y1="12" x2="18" y2="12" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                    </pattern>
                  </defs>
                  <ellipse cx="140" cy="140" rx="125" ry="125" fill="url(#charlie-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/Charlie.png" 
                    alt="Charlie"
                    className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-[var(--font-fredoka)]">
                    Charlie
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[35%_65%_70%_30%/65%_35%_65%_35%] p-5 shadow-2xl border-8 border-yellow-500 bg-gradient-to-br from-yellow-400 to-orange-400"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(234, 179, 8, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Charlie</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>🌙 <strong>Loves:</strong> Bedtime stories</p>
                    <p>📚 <strong>Personality:</strong> Fun & interactive</p>
                    <p>🎭 <strong>Fun Fact:</strong> Makes stories silly!</p>
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
              <div className="relative rounded-[45%_55%_40%_60%/55%_45%_60%_40%] p-5 shadow-2xl border-8 border-green-500 hover:scale-105 transition-all duration-300 overflow-hidden"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(34, 197, 94, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'white',
                   }}>
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} viewBox="0 0 280 280">
                  <defs>
                    <pattern id="luca-scribble" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                      <line x1="0" y1="2" x2="18" y2="2" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                      <line x1="0" y1="7" x2="18" y2="7" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                      <line x1="0" y1="12" x2="18" y2="12" stroke="#10B981" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                    </pattern>
                  </defs>
                  <ellipse cx="140" cy="140" rx="125" ry="125" fill="url(#luca-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/Luca.png" 
                    alt="Luca"
                    className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-[var(--font-fredoka)]">
                    Luca
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[45%_55%_40%_60%/55%_45%_60%_40%] p-5 shadow-2xl border-8 border-green-500 bg-gradient-to-br from-green-400 to-emerald-400"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(34, 197, 94, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
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
              <div className="relative rounded-[55%_45%_45%_55%/50%_50%_50%_50%] p-6 shadow-2xl border-8 border-sky-500 hover:scale-105 transition-all duration-300 overflow-hidden"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(56, 189, 248, 0.3))',
                     backfaceVisibility: 'hidden',
                     background: 'white',
                   }}>
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} viewBox="0 0 300 300">
                  <defs>
                    <pattern id="mum-scribble" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
                      <line x1="0" y1="2" x2="18" y2="2" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                      <line x1="0" y1="7" x2="18" y2="7" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                      <line x1="0" y1="12" x2="18" y2="12" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                    </pattern>
                  </defs>
                  <ellipse cx="150" cy="150" rx="135" ry="135" fill="url(#mum-scribble)"/>
                </svg>
                
                <div className="text-center relative z-10">
                  <img 
                    src="/images/characters/ArlosMum.png" 
                    alt="Arlo's Mum"
                    className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 drop-shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-[var(--font-fredoka)]">
                    Arlo's Mum
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[55%_45%_45%_55%/50%_50%_50%_50%] p-6 shadow-2xl border-8 border-sky-500 bg-gradient-to-br from-sky-400 to-blue-400"
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(56, 189, 248, 0.3))',
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)',
                   }}>
                <div className="text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-fredoka)]">About Mum</h3>
                  <div className="space-y-2 text-white text-sm">
                    <p>❤️ <strong>Personality:</strong> Warm, patient & understanding</p>
                    <p>🏠 <strong>Role:</strong> Creates magical bedtime routines</p>
                    <p>✨ <strong>Fun Fact:</strong> Loves Arlo's delays!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom section */}
      <div className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50 mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-[var(--font-fredoka)] relative z-10">
              More Friends Coming Soon!
            </h2>
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
            As Arlo's adventures grow, so do his friends!
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
            Arlo's Big Books features loveable, memorable characters that kids ages 3-6 adore. From curious Arlo to funny animal friends like Teddie The Little Mouse, Kurtis The Cockerel, and Pip The Brown Bird, plus creative helpers Aria, Mateo, Charlie, and Luca.
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