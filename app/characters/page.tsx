'use client'

export const metadata = {
  title: "Meet Arlo's Characters | Funny Picture Book Friends for Kids Ages 3-6",
  description: "Get to know Arlo and his loveable friends! Explore the memorable characters from Arlo's Big Books - funny animal friends, playful personalities, and heartwarming relationships perfect for bedtime stories.",
  keywords: "picture book characters, children's book characters, funny animal characters, bedtime story characters, Arlo characters, kids book friends",
}

export default function Characters() {
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
          Click on each friend to learn more!
        </p>
      </div>

      {/* Main character area - hand-drawn chaos! */}
      <div className="px-4 py-8 pb-20 relative min-h-[900px]">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Hand-drawn doodles scattered around */}
          {/* Star doodle */}
          <div className="absolute top-10 right-20 hidden md:block animate-pulse" style={{ animationDuration: '3s' }}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              <path d="M30,5 L35,20 L50,25 L35,30 L30,45 L25,30 L10,25 L25,20 Z" 
                    fill="none" 
                    stroke="#FFB6C1" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Heart doodle */}
          <div className="absolute top-40 left-10 hidden md:block animate-pulse" style={{ animationDuration: '4s' }}>
            <svg width="50" height="50" viewBox="0 0 50 50">
              <path d="M25,40 C25,40 10,30 10,20 C10,15 13,12 17,12 C20,12 23,14 25,17 C27,14 30,12 33,12 C37,12 40,15 40,20 C40,30 25,40 25,40 Z" 
                    fill="none" 
                    stroke="#FF6B9D" 
                    strokeWidth="3" 
                    strokeLinecap="round"/>
            </svg>
          </div>

          {/* Swirl doodle */}
          <div className="absolute bottom-20 right-40 hidden lg:block" style={{ transform: 'rotate(-15deg)' }}>
            <svg width="70" height="70" viewBox="0 0 70 70">
              <path d="M35,10 Q45,15 45,25 Q45,35 35,35 Q25,35 25,25 Q25,20 30,18" 
                    fill="none" 
                    stroke="#98D8C8" 
                    strokeWidth="4" 
                    strokeLinecap="round"/>
            </svg>
          </div>

          {/* Simple flower doodle */}
          <div className="absolute top-96 left-32 hidden lg:block" style={{ transform: 'rotate(25deg)' }}>
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="8" fill="#FFD700" opacity="0.6"/>
              <circle cx="25" cy="15" r="6" fill="#FF69B4" opacity="0.5"/>
              <circle cx="35" cy="25" r="6" fill="#87CEEB" opacity="0.5"/>
              <circle cx="25" cy="35" r="6" fill="#98FB98" opacity="0.5"/>
              <circle cx="15" cy="25" r="6" fill="#DDA0DD" opacity="0.5"/>
            </svg>
          </div>

          {/* ARLO - Big centered blob (red/pink) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 md:w-96 group cursor-pointer z-20"
               style={{ transform: 'translate(-50%, 0) rotate(-3deg)' }}>
            {/* Crayon blob background */}
            <div className="relative bg-gradient-to-br from-red-400 to-pink-400 rounded-[40%_60%_70%_30%/60%_40%_60%_40%] p-8 shadow-2xl border-8 border-red-500 group-hover:scale-105 transition-all duration-300"
                 style={{ 
                   filter: 'drop-shadow(4px 4px 0px rgba(220, 38, 38, 0.3))',
                 }}>
              <div className="text-center">
                <img 
                  src="/images/characters/ArloBedYawn.png" 
                  alt="Arlo - curious little boy from Arlo's Big Yawn"
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-3 drop-shadow-lg transform group-hover:rotate-6 transition-transform"
                  style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))' }}
                />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[var(--font-fredoka)] drop-shadow-md">
                  Arlo
                </h2>
                <p className="text-white text-lg font-semibold drop-shadow-sm">
                  The star! Curious & imaginative
                </p>
              </div>
            </div>
          </div>

          {/* Wobbly line from Arlo to Mouse */}
          <svg className="absolute top-48 left-1/4 w-48 h-32 pointer-events-none hidden md:block" style={{ transform: 'translate(-20%, 0)' }}>
            <path d="M100,10 Q80,40 60,50 T20,80" 
                  stroke="#FF6B9D" 
                  strokeWidth="6" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="3,8"
                  opacity="0.4"/>
          </svg>

          {/* MOUSE - Left side blob (orange) */}
          <div className="absolute top-60 left-8 md:left-20 w-56 md:w-64 group cursor-pointer z-10"
               style={{ transform: 'rotate(8deg)' }}>
            <div className="relative bg-gradient-to-br from-orange-400 to-yellow-400 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] p-6 shadow-2xl border-8 border-orange-500 group-hover:scale-105 transition-all duration-300"
                 style={{ filter: 'drop-shadow(3px 3px 0px rgba(234, 88, 12, 0.3))' }}>
              <div className="text-center">
                <img 
                  src="/images/characters/MouseInCar.png" 
                  alt="Mouse - speedy friend in tiny car"
                  className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-2 drop-shadow-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-[var(--font-fredoka)] drop-shadow-md">
                  Mouse
                </h3>
                <p className="text-white text-sm md:text-base font-semibold drop-shadow-sm">
                  Speedy & playful!
                </p>
              </div>
            </div>
          </div>

          {/* Wobbly line from Arlo to Aria */}
          <svg className="absolute top-52 right-1/4 w-40 h-24 pointer-events-none hidden md:block">
            <path d="M10,10 Q30,30 60,25 T130,40" 
                  stroke="#FF69B4" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="4,7"
                  opacity="0.4"/>
          </svg>

          {/* ARIA - Right side blob (pink) */}
          <div className="absolute top-64 right-8 md:right-24 w-56 md:w-64 group cursor-pointer z-10"
               style={{ transform: 'rotate(-12deg)' }}>
            <div className="relative bg-gradient-to-br from-pink-400 to-rose-400 rounded-[60%_40%_30%_70%/40%_60%_70%_30%] p-6 shadow-2xl border-8 border-pink-500 group-hover:scale-105 transition-all duration-300"
                 style={{ filter: 'drop-shadow(3px 3px 0px rgba(236, 72, 153, 0.3))' }}>
              <div className="text-center">
                <img 
                  src="/images/characters/Aria.png" 
                  alt="Aria - creative artist who loves coloring"
                  className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-2 drop-shadow-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-[var(--font-fredoka)] drop-shadow-md">
                  Aria
                </h3>
                <p className="text-white text-sm md:text-base font-semibold drop-shadow-sm">
                  Creative artist! 🎨
                </p>
              </div>
            </div>
          </div>

          {/* Wobbly line from Mouse to Cockerel */}
          <svg className="absolute top-96 left-32 w-32 h-32 pointer-events-none hidden md:block">
            <path d="M10,10 Q40,50 80,60 T120,100" 
                  stroke="#9333EA" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="5,6"
                  opacity="0.4"/>
          </svg>

          {/* COCKEREL - Lower left blob (purple) */}
          <div className="absolute top-[520px] left-12 md:left-32 w-52 md:w-60 group cursor-pointer z-10"
               style={{ transform: 'rotate(-5deg)' }}>
            <div className="relative bg-gradient-to-br from-purple-400 to-violet-400 rounded-[70%_30%_50%_50%/60%_40%_60%_40%] p-6 shadow-2xl border-8 border-purple-500 group-hover:scale-105 transition-all duration-300"
                 style={{ filter: 'drop-shadow(3px 3px 0px rgba(147, 51, 234, 0.3))' }}>
              <div className="text-center">
                <img 
                  src="/images/characters/Cockerel.png" 
                  alt="Cockerel - colorful proud bird"
                  className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 drop-shadow-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-[var(--font-fredoka)] drop-shadow-md">
                  Cockerel
                </h3>
                <p className="text-white text-sm md:text-base font-semibold drop-shadow-sm">
                  Dramatic & showy!
                </p>
              </div>
            </div>
          </div>

          {/* MATEO - Center-right blob (blue) */}
          <div className="absolute top-[480px] left-1/2 -translate-x-12 w-56 md:w-64 group cursor-pointer z-10"
               style={{ transform: 'translateX(-50px) rotate(6deg)' }}>
            <div className="relative bg-gradient-to-br from-blue-400 to-indigo-400 rounded-[40%_60%_40%_60%/50%_50%_50%_50%] p-6 shadow-2xl border-8 border-blue-500 group-hover:scale-105 transition-all duration-300"
                 style={{ filter: 'drop-shadow(3px 3px 0px rgba(59, 130, 246, 0.3))' }}>
              <div className="text-center">
                <img 
                  src="/images/characters/Mateo.png" 
                  alt="Mateo - word wizard who loves rhymes"
                  className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-2 drop-shadow-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-[var(--font-fredoka)] drop-shadow-md">
                  Mateo
                </h3>
                <p className="text-white text-sm md:text-base font-semibold drop-shadow-sm">
                  Word wizard! 📖
                </p>
              </div>
            </div>
          </div>

          {/* BROWN BIRD - Upper right blob (teal) */}
          <div className="absolute top-[420px] right-12 md:right-28 w-52 md:w-56 group cursor-pointer z-10"
               style={{ transform: 'rotate(10deg)' }}>
            <div className="relative bg-gradient-to-br from-teal-400 to-cyan-400 rounded-[50%_50%_60%_40%/40%_60%_50%_50%] p-5 shadow-2xl border-8 border-teal-500 group-hover:scale-105 transition-all duration-300"
                 style={{ filter: 'drop-shadow(3px 3px 0px rgba(20, 184, 166, 0.3))' }}>
              <div className="text-center">
                <img 
                  src="/images/characters/BrownBird.png" 
                  alt="Brown Bird - friendly flying friend"
                  className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 drop-shadow-lg"
                />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-[var(--font-fredoka)] drop-shadow-md">
                  Brown Bird
                </h3>
                <p className="text-white text-sm font-semibold drop-shadow-sm">
                  Gentle & kind!
                </p>
              </div>
            </div>
          </div>

          {/* CHARLIE - Lower center blob (yellow/orange) */}
          <div className="absolute top-[650px] left-1/2 -translate-x-1/2 translate-x-20 w-52 md:w-60 group cursor-pointer z-10"
               style={{ transform: 'translate(calc(-50% + 80px), 0) rotate(-8deg)' }}>
            <div className="relative bg-gradient-to-br from-yellow-400 to-orange-400 rounded-[35%_65%_70%_30%/65%_35%_65%_35%] p-5 shadow-2xl border-8 border-yellow-500 group-hover:scale-105 transition-all duration-300"
                 style={{ filter: 'drop-shadow(3px 3px 0px rgba(234, 179, 8, 0.3))' }}>
              <div className="text-center">
                <img 
                  src="/images/characters/Charlie.png" 
                  alt="Charlie - storytelling character"
                  className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 drop-shadow-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-[var(--font-fredoka)] drop-shadow-md">
                  Charlie
                </h3>
                <p className="text-white text-sm md:text-base font-semibold drop-shadow-sm">
                  Storyteller! 🌙
                </p>
              </div>
            </div>
          </div>

          {/* LUCA - Bottom right blob (green) */}
          <div className="absolute top-[720px] right-16 md:right-40 w-52 md:w-56 group cursor-pointer z-10"
               style={{ transform: 'rotate(15deg)' }}>
            <div className="relative bg-gradient-to-br from-green-400 to-emerald-400 rounded-[45%_55%_40%_60%/55%_45%_60%_40%] p-5 shadow-2xl border-8 border-green-500 group-hover:scale-105 transition-all duration-300"
                 style={{ filter: 'drop-shadow(3px 3px 0px rgba(34, 197, 94, 0.3))' }}>
              <div className="text-center">
                <img 
                  src="/images/characters/Luca.png" 
                  alt="Luca - imagination expert"
                  className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 drop-shadow-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-[var(--font-fredoka)] drop-shadow-md">
                  Luca
                </h3>
                <p className="text-white text-sm md:text-base font-semibold drop-shadow-sm">
                  Imagination! ✨
                </p>
              </div>
            </div>
          </div>

          {/* MUM & DAD - Bottom left blob (soft blue) */}
          <div className="absolute top-[760px] left-8 md:left-24 w-56 md:w-64 group cursor-pointer z-10"
               style={{ transform: 'rotate(-10deg)' }}>
            <div className="relative bg-gradient-to-br from-sky-400 to-blue-400 rounded-[55%_45%_45%_55%/50%_50%_50%_50%] p-6 shadow-2xl border-8 border-sky-500 group-hover:scale-105 transition-all duration-300"
                 style={{ filter: 'drop-shadow(3px 3px 0px rgba(56, 189, 248, 0.3))' }}>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-[var(--font-fredoka)] drop-shadow-md">
                  Mum & Dad
                </h3>
                <p className="text-white text-sm md:text-base font-semibold drop-shadow-sm">
                  Loving & patient! ❤️
                </p>
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
            Arlo's Big Books features loveable, memorable characters that kids ages 3-6 adore. From curious Arlo to funny animal friends like Mouse, Cockerel, and Brown Bird, plus creative helpers Aria, Mateo, Charlie, and Luca. Each character-driven picture book celebrates imagination, family bonds, and playful moments perfect for bedtime stories and read-aloud time.
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
