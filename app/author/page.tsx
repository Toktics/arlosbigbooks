export const metadata = {
  title: "About Martin King | Children's Book Author | Arlo's Big Books",
  description: "Meet Martin King, the author and grandfather behind Arlo's Big Books. Discover his journey from adventure-loving child to picture book writer creating heartwarming bedtime stories for ages 3-6.",
  keywords: "Martin King author, children's book author, picture book writer, grandfather author, bedtime story author, rhyming books author",
}

export default function Author() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-fredoka)] mb-6 drop-shadow-lg">
            Meet the Author
          </h1>
          <p className="text-2xl md:text-3xl font-semibold">
            Martin King - Grandfather, Storyteller, Adventure-Seeker
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 relative overflow-visible">
            {/* Hand-drawn image - top right */}
            <div className="float-none md:float-right mb-4 md:mb-0 md:ml-6 md:-mr-20 md:-mt-20 flex justify-center md:block">
              <img 
                src="/images/Outside.png" 
                alt="Martin King - children's book author and illustrator" 
                className="w-32 h-32 md:w-56 md:h-56 rotate-12"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-[var(--font-fredoka)]">
              About Martin King
            </h2>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed clear-none">
              <strong>Martin King</strong> is a <strong>children's book author</strong> who writes stories full of imagination, adventure, and the kind of moments that make children giggle at bedtime. His <strong>rhyming picture books</strong> for ages 3-6 celebrate the playful chaos of childhood and the special bond between grandparents and grandchildren.
            </p>
          </div>

          {/* The Journey Section */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 font-[var(--font-fredoka)]">
              From Adventurous Kid to Picture Book Author
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                As a child, Martin was never very good at sitting still. He had what he calls "ants in my pants" — always off on missions with friends, exploring woods, crawling through caves, climbing hills, and inventing daring adventures.
              </p>
              
              <p>
                Those childhood escapades later became the inspiration behind his <strong>Jack Hunter Adventure series</strong> for older readers — action-packed stories for children who, like young Martin, loved adventure more than sitting still.
              </p>
            </div>
          </div>

          {/* Innovation Section */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-6 font-[var(--font-fredoka)]">
              A Pioneer in Interactive Storytelling
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Back in 2009, long before most people had heard of it, Martin had an unusual idea: combine books with <strong>augmented reality</strong>. He created the <strong>world's first interactive AR adventure stories</strong>, where children unlocked parts of a game by reading the book.
              </p>
              
              <p>
                His goal? To make stories especially exciting for children who loved adventure more than sitting still. It was innovative, ahead of its time, and showed Martin's dedication to engaging young readers in new ways.
              </p>
            </div>
          </div>

          {/* The Arlo Story Section */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl mb-12 relative overflow-visible">
            <h2 className="text-3xl font-bold text-red-600 mb-6 font-[var(--font-fredoka)]">
              Then Came Arlo...
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-semibold italic text-gray-800">
                But life has a way of taking detours.
              </p>
              
              <p>
                Years later, along came his grandson Arlo, and everything changed again. Evenings filled with nursery rhymes, bedtime stories, and tiny everyday adventures reignited Martin's love of storytelling, and led to the creation of <em>Arlo's Big Yawn</em>, the first book in the <strong><em>Arlo's Big</em> picture book series</strong>.
              </p>

              {/* Hand-drawn image - bottom left */}
              <div className="float-none md:float-left mt-4 md:mt-0 md:mr-20 md:ml-0 md:mb-0 flex justify-center md:block">
                <img 
                  src="/images/Inside.png" 
                  alt="Grandfather writing bedtime stories for grandson Arlo" 
                  className="w-32 h-32 md:w-40 md:h-40 -rotate-12"
                />
              </div>
              
              <p>
                When Martin was little, his own mum read <strong>Ladybird books</strong> with him every night. Every few weeks, a new one would arrive, and bedtime became something magical. He still has those books today, and now writes stories to create those same memories for his grandson, who lovingly calls him <strong>Gan Gan</strong>.
              </p>
              
              <p className="clear-left">
                This personal connection shines through every page. Martin's <strong>bedtime stories for kids</strong> aren't just books — they're love letters to his grandson, celebrations of imagination, and invitations for families to share magical moments together.
              </p>
            </div>
          </div>

          {/* Writing Philosophy */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-purple-600 mb-6 font-[var(--font-fredoka)]">
              Martin's Writing Philosophy
            </h2>
            
            <div className="space-y-6">
              <p className="text-2xl text-gray-800 font-semibold leading-relaxed">
                "The best children's stories are the ones that feel big, funny, warm, and just a little bit surprising... because sometimes small days turn into BIG adventures."
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">What Drives His Stories</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span><strong>Playful humor</strong> that makes kids giggle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span><strong>Rhyming rhythm</strong> perfect for read-aloud</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span><strong>Relatable moments</strong> kids recognize</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span><strong>Big imagination</strong> and wonder</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Perfect For</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">★</span>
                      <span><strong>Bedtime routines</strong> with preschoolers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">★</span>
                      <span><strong>Read-aloud time</strong> in classrooms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">★</span>
                      <span><strong>Gift-giving</strong> to grandchildren</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">★</span>
                      <span><strong>Building memories</strong> together</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Beyond Writing */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-[var(--font-fredoka)]">
              Beyond Picture Books
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                When he's not writing <strong>rhyming bedtime stories</strong>, Martin runs <strong>Snappy Fox Ltd</strong>, a digital marketing agency based in Leeds. He's also the founder and developer of <strong>Toktics</strong>, a sophisticated TikTok Live Commerce management platform.
              </p>
              
              <p>
                This blend of creativity and technology informs his approach to storytelling — always looking for innovative ways to engage young readers while honoring the timeless magic of a good bedtime story.
              </p>
            </div>
          </div>

          {/* The Series */}
          <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-6 font-[var(--font-fredoka)]">
              The Arlo's Big... Series
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Martin's <strong><em>Arlo's Big...</em> series</strong> celebrates the big emotions, unexpected surprises, and playful chaos of everyday childhood. Each book follows Arlo as something small — a yawn, a thought, a mess — grows into something wonderfully BIG.
              </p>
              
              <div className="bg-white rounded-2xl p-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Published & Coming Soon:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✓</span>
                    <div>
                      <span className="font-bold text-red-500">Arlo's Big Yawn</span>
                      <span className="text-gray-600"> — Available Now</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 text-2xl mr-3">⏳</span>
                    <div>
                      <span className="font-bold text-blue-500">Arlo's Big Head</span>
                      <span className="text-gray-600"> — Coming Soon</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 text-2xl mr-3">⏳</span>
                    <div>
                      <span className="font-bold text-green-500">Arlo's Big Journey</span>
                      <span className="text-gray-600"> — Coming 2026</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 text-2xl mr-3">⏳</span>
                    <div>
                      <span className="font-bold text-purple-500">Arlo's Big House</span>
                      <span className="text-gray-600"> — Coming 2026</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 md:p-12 shadow-xl text-white text-center">
            <h2 className="text-3xl font-bold mb-4 font-[var(--font-fredoka)]">
              Connect with Martin
            </h2>
            <p className="text-xl mb-6">
              Questions about school visits, bulk orders, or just want to say hello?
            </p>
            <div className="space-y-3">
              <p className="text-lg">
                <strong>Email:</strong> <a href="mailto:hello@arlosbigbooks.com" className="underline hover:text-yellow-300 transition-colors">hello@arlosbigbooks.com</a>
              </p>
              <p className="text-lg">
                <strong>Instagram:</strong> <a href="https://www.instagram.com/arlosbigbooks" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300 transition-colors">@arlosbigbooks</a>
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="/"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Arlo's Books
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
          <p>
            <strong>Martin King</strong> is a children's book author and grandfather writing heartwarming, funny rhyming picture books for ages 3-6. His bedtime stories celebrate imagination, family bonds, and the magic of everyday moments. Perfect for read-aloud time with preschoolers and kindergarteners. Based in Leeds, UK.
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
