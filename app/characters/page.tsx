export default function Characters() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-pink-50">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-fredoka)] mb-6 drop-shadow-lg">
            Meet Arlo's Friends!
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-2">
            Get to know the loveable characters from Arlo's Big Books series
          </p>
          <p className="text-xl md:text-2xl opacity-90">
            Funny, memorable friends that kids ask for again and again!
          </p>
        </div>
        
        {/* Decorative animated elements */}
        <div className="absolute top-10 left-10 animate-bounce">
          <div className="w-20 h-20 bg-white opacity-20 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce delay-150">
          <div className="w-16 h-16 bg-white opacity-20 rounded-full"></div>
        </div>
      </header>

      {/* Main Characters Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-[var(--font-fredoka)]">
              Our Main Characters
            </h2>
            <p className="text-xl text-gray-600">
              The stars of every BIG adventure!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Arlo */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-red-200">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <img 
                    src="/images/characters/ArloBedYawn.png" 
                    alt="Arlo - the curious and imaginative little boy from Arlo's Big Yawn bedtime story"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-red-500 mb-3 font-[var(--font-fredoka)]">
                    Arlo
                  </h3>
                  <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                    The star of our stories! Arlo is a <strong>curious little boy</strong> with a <strong>BIG imagination</strong>. He loves bedtime stories, asking questions, and turning ordinary moments into extraordinary adventures.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-red-500 text-xl mr-2">⭐</span>
                      <span className="text-gray-700"><strong>Personality:</strong> Adventurous, playful, and full of wonder</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 text-xl mr-2">📚</span>
                      <span className="text-gray-700"><strong>Appears in:</strong> Every book in the series!</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 text-xl mr-2">💭</span>
                      <span className="text-gray-700"><strong>Fun Fact:</strong> Arlo's yawns can get REALLY big...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mum & Dad */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-4xl font-bold text-blue-500 mb-3 font-[var(--font-fredoka)]">
                  Mum & Dad
                </h3>
                <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                  Arlo's <strong>patient and loving parents</strong> who help guide him through every <strong>BIG adventure</strong>. They know that little moments can turn into big memories, and they're always there with a cuddle and a smile.
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-start">
                    <span className="text-blue-500 text-xl mr-2">❤️</span>
                    <span className="text-gray-700"><strong>Personality:</strong> Warm, understanding, and playful</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 text-xl mr-2">🏠</span>
                    <span className="text-gray-700"><strong>Role:</strong> Creating bedtime routines and making memories</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 text-xl mr-2">✨</span>
                    <span className="text-gray-700"><strong>Fun Fact:</strong> They secretly love Arlo's bedtime delays!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animal Friends Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-[var(--font-fredoka)]">
              Arlo's Animal Friends
            </h2>
            <p className="text-xl text-gray-600">
              Funny, memorable creatures that pop up throughout the series!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mouse */}
            <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-orange-200">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/characters/MouseInCar.png" 
                    alt="Mouse in Car - Arlo's speedy friend from children's picture book series"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-orange-500 mb-3 font-[var(--font-fredoka)]">
                  Mouse
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  This <strong>speedy little mouse</strong> loves driving around in his tiny car! Always ready for an adventure, Mouse is one of Arlo's most <strong>playful animal friends</strong>.
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-start">
                    <span className="text-orange-500 text-lg mr-2">🚗</span>
                    <span className="text-gray-700 text-sm"><strong>Loves:</strong> Driving fast and exploring</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 text-lg mr-2">⚡</span>
                    <span className="text-gray-700 text-sm"><strong>Personality:</strong> Quick, clever, and fun</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 text-lg mr-2">🎉</span>
                    <span className="text-gray-700 text-sm"><strong>Fun Fact:</strong> You'll spot him driving across the pages!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cockerel */}
            <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-purple-200">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/characters/Cockerel.png" 
                    alt="Cockerel - colorful bird character from Arlo's Big Books"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-purple-500 mb-3 font-[var(--font-fredoka)]">
                  Cockerel
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  A <strong>proud and colorful bird</strong> who appears when you least expect it! This <strong>funny woodland character</strong> loves to flap and flutter about.
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-start">
                    <span className="text-purple-500 text-lg mr-2">🌈</span>
                    <span className="text-gray-700 text-sm"><strong>Looks:</strong> Bright, colorful feathers</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-500 text-lg mr-2">🎭</span>
                    <span className="text-gray-700 text-sm"><strong>Personality:</strong> Dramatic and showy</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-500 text-lg mr-2">🪽</span>
                    <span className="text-gray-700 text-sm"><strong>Fun Fact:</strong> Watch him fly away at the end!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brown Bird */}
            <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-teal-200">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/characters/BrownBird.png" 
                    alt="Brown Bird - friendly flying character from Arlo's picture book series"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-teal-500 mb-3 font-[var(--font-fredoka)]">
                  Brown Bird
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  This <strong>friendly flying friend</strong> swoops through the stories spreading joy! A gentle <strong>storybook sidekick</strong> who's always around to help.
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-start">
                    <span className="text-teal-500 text-lg mr-2">☁️</span>
                    <span className="text-gray-700 text-sm"><strong>Loves:</strong> Soaring through the sky</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-500 text-lg mr-2">😊</span>
                    <span className="text-gray-700 text-sm"><strong>Personality:</strong> Gentle and kind</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-500 text-lg mr-2">🌟</span>
                    <span className="text-gray-700 text-sm"><strong>Fun Fact:</strong> Appears in surprise moments!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Zone Characters */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-[var(--font-fredoka)]">
              Activity Zone Friends
            </h2>
            <p className="text-xl text-gray-600">
              Meet the characters who help with activities and learning!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Aria */}
            <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/characters/Aria.png" 
                    alt="Aria - creative character who loves coloring from Arlo's Big Books"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-pink-600 mb-2 font-[var(--font-fredoka)]">
                  Aria
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>The creative artist!</strong> Aria loves coloring and brings the stories to life with her crayons.
                </p>
                <div className="bg-white rounded-full px-3 py-1 inline-block">
                  <span className="text-xs font-semibold text-pink-600">🎨 Coloring Pages</span>
                </div>
              </div>
            </div>

            {/* Mateo */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/characters/Mateo.png" 
                    alt="Mateo - word games character from Arlo's activity zone"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2 font-[var(--font-fredoka)]">
                  Mateo
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>The word wizard!</strong> Mateo loves rhymes, reading, and playing with words.
                </p>
                <div className="bg-white rounded-full px-3 py-1 inline-block">
                  <span className="text-xs font-semibold text-blue-600">📖 Word Fun</span>
                </div>
              </div>
            </div>

            {/* Charlie */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/characters/Charlie.png" 
                    alt="Charlie - storytelling character from Arlo's Big Books series"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-orange-600 mb-2 font-[var(--font-fredoka)]">
                  Charlie
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>The storyteller!</strong> Charlie makes bedtime stories interactive and silly!
                </p>
                <div className="bg-white rounded-full px-3 py-1 inline-block">
                  <span className="text-xs font-semibold text-orange-600">🌙 Story Time</span>
                </div>
              </div>
            </div>

            {/* Luca */}
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/images/characters/Luca.png" 
                    alt="Luca - imaginative drawing character from Arlo's activity zone"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2 font-[var(--font-fredoka)]">
                  Luca
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>The imagination expert!</strong> Luca helps you create your own BIG adventures!
                </p>
                <div className="bg-white rounded-full px-3 py-1 inline-block">
                  <span className="text-xs font-semibold text-green-600">✨ Create Your Own</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Characters Coming Soon */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-purple-600 mb-4 font-[var(--font-fredoka)]">
              More Friends Coming Soon!
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              As the Arlo's Big Books series grows, so does the cast of <strong>memorable storybook characters</strong>! Keep checking back to meet new friends who join Arlo on his adventures.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Which character is your favorite? Let us know!
            </p>
            <a 
              href="/"
              className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Back to Arlo's World
            </a>
          </div>
        </div>
      </section>

      {/* SEO Footer Note */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
          <p className="mb-2">
            <strong>Arlo's Big Books</strong> features loveable, memorable characters that kids ages 3-6 love to meet again and again. From curious Arlo to his funny animal friends, each character-driven picture book is perfect for bedtime stories and read-aloud time with preschoolers and kindergarteners.
          </p>
          <p>
            Explore our rhyming picture books featuring these heartwarming characters. Perfect for early readers, classroom story time, and building imagination!
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
