'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FlipBook from './components/FlipBook'

export default function Home() {
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
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-2xl p-8 md:p-12">
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

      {/* About the Book */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Arlo Bed Yawn character - positioned on the right side of yellow box */}
        <img
          src="/images/characters/ArloBedYawn.png"
          alt="Arlo Yawning"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-56 md:w-72 h-auto z-20"
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-amber-50 rounded-3xl p-8 md:p-12 mb-8">
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
      </section>

      {/* About the Series */}
      <section className="py-20 px-4 bg-blue-50">
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
                <Image
                  src="/images/books/big-head-cover.png"
                  alt="Arlo's Big Head"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Arlo's Big Head!</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Learn something new? Oh no, oh NO! Arlo's head starts to GROW and GROW!
              </p>
              <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
                Coming 2026
              </span>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-center h-64 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mb-6">
                <p className="text-7xl">🚗</p>
              </div>
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Arlo's Big Journey!</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every car trip feels like it takes FOREVER... until it really does!
              </p>
              <span className="inline-block bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-bold text-sm">
                In Development
              </span>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-center h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl mb-6">
                <p className="text-7xl">🏠</p>
              </div>
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Arlo's Big House!</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Friends are coming over but where IS everyone? A hide-and-seek adventure!
              </p>
              <span className="inline-block bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-bold text-sm">
                In Development
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents and Teachers Love These Books */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Parents and Teachers Love These Books
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Read-Aloud Rhythms</h3>
              <p className="text-gray-700 leading-relaxed">
                Joyful rhyming text that kids want to hear again and again.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">💫</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Relatable Moments</h3>
              <p className="text-gray-700 leading-relaxed">
                Everyday experiences made big and exciting.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">😄</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Laugh-Out-Loud Fun</h3>
              <p className="text-gray-700 leading-relaxed">
                Silly, surprising, and visually engaging stories.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Learning Through Play</h3>
              <p className="text-gray-700 leading-relaxed">
                Helping children understand routines, emotions, and curiosity.
              </p>
            </div>
          </div>
          
          <p className="text-xl text-center text-gray-700 mt-12 font-semibold">
            These books bring parents and children together — bedtime after bedtime.
          </p>
        </div>
      </section>

      {/* Meet the Creator */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Meet the Creator
          </h2>
          
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Hi! I'm <strong>Martin King</strong>, author of <em>Arlo's Big...</em> — and before that, the Jack Hunter series for older readers.
            </p>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              My goal is simple: to make stories that kids ask for again — and parents enjoy reading.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I build worlds where:
            </p>
            
            <div className="flex flex-col items-start max-w-xl mx-auto text-left mb-8">
              <p className="text-lg text-gray-700 mb-2">✨ Little moments matter</p>
              <p className="text-lg text-gray-700 mb-2">✨ Curiosity leads to adventure</p>
              <p className="text-lg text-gray-700">✨ Everyday life becomes something magical</p>
            </div>
            
            <p className="text-xl text-gray-800 font-semibold">
              Stay tuned — there are more BIG adventures to come.
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
          
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors text-lg font-semibold">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors text-lg font-semibold">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors text-lg font-semibold">
              Twitter
            </a>
          </div>
          
          <p className="text-gray-500 text-sm mb-2">
            Arlo's Big... is a children's picture book series for ages 3–6 by Martin King
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 Martin King. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
