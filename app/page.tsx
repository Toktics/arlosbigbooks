import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-red-500 drop-shadow-lg">Arlo's</span>{' '}
            <span className="text-yellow-400 drop-shadow-lg">BIG</span>{' '}
            <span className="text-blue-500 drop-shadow-lg">Adventures!</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium">
            Where everyday moments become EXTRAORDINARY adventures for little readers!
          </p>
          <Link 
            href="#books" 
            className="inline-block bg-red-500 text-white px-12 py-5 rounded-full text-xl font-bold uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ boxShadow: '0 6px 0px #CC3333' }}
          >
            Discover Arlo's World
          </Link>
        </div>
      </section>

      {/* Featured Book Section */}
      <section id="books" className="bg-amber-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-center mb-16 text-red-500 drop-shadow-lg">
            Now Available
          </h2>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/images/books/big-yawn-cover.png"
                  alt="Arlo's Big Yawn book cover"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Book Info */}
            <div>
              <h3 className="text-5xl font-bold text-red-500 mb-6">Arlo's Big Yawn!</h3>
              
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                Little Arlo wouldn't go to sleep when told... and one BIG YAWN changes everything!
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When Arlo stays up too late playing games, his morning yawn becomes ENORMOUS - swallowing shoes, phones, chairs, and even Dad's car! Join Arlo on this hilarious bedtime adventure where he learns that listening to Mum about bedtime might just save the world from being sucked into a giant yawn.
              </p>

              <div className="bg-amber-50 border-4 border-yellow-400 rounded-2xl p-6 mb-8">
                <ul className="space-y-3">
                  {[
                    'Perfect for ages 3-6',
                    'Playful rhyming text',
                    'Teaches bedtime routines & consequences',
                    'Beautiful full-color illustrations',
                    'Great for bedtime reading!'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-lg text-gray-800 font-medium">
                      <span className="text-yellow-400 text-2xl mr-3">★</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="https://www.amazon.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full text-xl font-bold uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: '0 6px 0px #CC7700' }}
              >
                Available on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-center mb-16 text-red-500 drop-shadow-lg">
            More BIG Adventures Coming Soon!
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Big Head */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-blue-400">
              <div className="relative w-full aspect-square mb-6">
                <Image
                  src="/images/books/big-head-cover.png"
                  alt="Arlo's Big Head coming soon"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-3xl font-bold text-blue-500 mb-4">Arlo's Big Head!</h4>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Learn something new? Oh no, oh NO! Arlo's head starts to GROW and GROW!
              </p>
              <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-md">
                Coming 2026
              </span>
            </div>

            {/* Big Journey */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center h-64 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mb-6">
                <p className="text-6xl">🚗</p>
              </div>
              <h4 className="text-3xl font-bold text-blue-500 mb-4">Arlo's Big Journey!</h4>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Every car trip feels like it takes FOREVER... until it really does!
              </p>
              <span className="inline-block bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide">
                In Development
              </span>
            </div>

            {/* Big House */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-6">
                <p className="text-6xl">🏠</p>
              </div>
              <h4 className="text-3xl font-bold text-blue-500 mb-4">Arlo's Big House!</h4>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Friends are coming over but where IS everyone? A hide-and-seek adventure!
              </p>
              <span className="inline-block bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide">
                In Development
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-12 text-red-500 drop-shadow-lg">
            About Gan Gan's Arlo's Big Picture Book Series
          </h2>
          
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
            <p>
              Every child knows that little things can feel BIG - especially when you're small! The Arlo's Big series celebrates those everyday childhood experiences with humor, heart, and a touch of magic.
            </p>
            
            <p>
              Through playful rhymes and vibrant illustrations, young readers follow Arlo as ordinary moments - a yawn, learning something new, waiting in the car - transform into extraordinary adventures. Each story carries a gentle lesson about patience, responsibility, and growing up, all wrapped in laughter and imagination.
            </p>
            
            <p>
              Perfect for bedtime stories, classroom reading, or any time you want to turn the ordinary into something wonderful!
            </p>
            
            <p className="text-3xl font-bold text-red-500 mt-12">
              — by Martin King
            </p>
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
          
          <p className="text-gray-500 text-sm">
            © 2026 Arlo's Big Books. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
